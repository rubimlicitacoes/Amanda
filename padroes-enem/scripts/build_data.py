#!/usr/bin/env python3
"""Gera o banco de questões da aba "PADRÕES DO ENEM" a partir das listas dos chats OKA.

Entrada:  padroes-enem/fontes/<tópico>/*.md   (mapas e listas em markdown, como saíram dos chats)
          padroes-enem/fontes/fis-15/06-write-conteudo.py (listas extras A e B de Cinemática)
          padroes-enem/fontes/_enem/*.json        (dados dos Mapas de Física/Química/Biologia e do Plano CN)
Saída:    app/dist/padroes-enem.js                (carregado pelo app sob demanda, como o pdfjs.js)
          padroes-enem/relatorio.txt              (contagens e avisos de conferência)

Uso: python3 padroes-enem/scripts/build_data.py
"""
import json
import os
import re
import runpy
import sys
from datetime import date

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FONTES = os.path.join(RAIZ, "padroes-enem", "fontes")
SAIDA = os.path.join(RAIZ, "app", "dist", "padroes-enem.js")
RELATORIO = os.path.join(RAIZ, "padroes-enem", "relatorio.txt")

# Um tópico por chat "OKA - …". O título é o nome do chat sem "OKA -" e sem a numeração.
# grupos: pastas de fontes (um chat pode ter gerado duas pastas, como BIO 4 + BIO 11 + BIO 12).
# plano: código usado no Plano de Padrões CN; mods: módulos do ranking (Mapas de Física/Química/Biologia).
# k: chave curta do tópico no progresso salvo do app. Nunca mude a k de um tópico existente.
TOPICOS = [
    dict(id="fis-15", k="f15", mat="FIS", titulo="FIS 15 · Cinemática", mods=[15], plano=["15"], grupos=[("fis-15", None)]),
    dict(id="fis-10-9", k="f109", mat="FIS", titulo="FIS 10 + FIS 9 · Acústica e ondas", mods=[10, 9], plano=["10+9"], grupos=[("fis-10-9", None)]),
    dict(id="fis-8-7-6", k="f876", mat="FIS", titulo="FIS 8 + FIS 7 + FIS 6 · Espectro e física moderna e Óptica geométrica", mods=[8, 7, 6], plano=["8+7+6"], grupos=[("fis-8-7-6", None)]),
    dict(id="fis-3-2", k="f32", mat="FIS", titulo="FIS 3 + FIS 2 · Circuitos e potência elétrica", mods=[3, 2], plano=["3+2"], grupos=[("fis-3-2", None)]),
    dict(id="fis-17", k="f17", mat="FIS", titulo="FIS 17 · Dinâmica", mods=[17], plano=["17"], grupos=[("fis-17", None)]),
    dict(id="fis-11", k="f11", mat="FIS", titulo="FIS 11 · Termologia", mods=[11], plano=["11"], grupos=[("fis-11", None)]),
    dict(id="qui-9-10", k="q910", mat="QUI", titulo="QUI 9 + QUI 10 · Ácido-base e reações com ácido", mods=[9, 10], plano=["9+10"], grupos=[("qui-9-10", None)]),
    dict(id="qui-14", k="q14", mat="QUI", titulo="QUI 14 · Equilíbrio Químico", mods=[14], plano=["14"], grupos=[("qui-14", None)]),
    dict(id="qui-5-6", k="q56", mat="QUI", titulo="QUI 5 + QUI 6 · Polaridade e Sistemas e misturas", mods=[5, 6], plano=["5+6"], grupos=[("qui-5-6", None)]),
    dict(id="qui-17-20", k="q1720", mat="QUI", titulo="QUI 17 + QUI 20 · Funções e reações orgânicas", mods=[17, 20], plano=["17+20"], grupos=[("qui-17-20", None)]),
    dict(id="qui-12-15-16", k="q121516", mat="QUI", titulo="QUÍM 12 + 15 + 16 · Eletroquímica e Estequiometria", mods=[12, 15, 16], plano=["12+15+16"], grupos=[("qui-12-15-16", None)]),
    dict(id="qui-23-geo", k="q23g", mat="QUI", titulo="QUÍM 23 + GEO · Impactos Ambientais", mods=[23], plano=["23 + GEO"], grupos=[("qui-23-geo", None)]),
    dict(id="bio-25-26-22-23", k="b25", mat="BIO", titulo="BIO 25 + BIO 26 + BIO 22 + BIO 23 · Genética", mods=[25, 26, 22, 23], plano=["25+26+22+23"], grupos=[("bio-25-26-22-23", None)]),
    dict(id="bio-5-8", k="b58", mat="BIO", titulo="BIO 5 + BIO 8 · Energia Celular, Enzimas e vitaminas e Citologia", mods=[5, 8], plano=["5+8"], grupos=[("bio-5-8", None)]),
    dict(id="bio-10-15", k="b1015", mat="BIO", titulo="BIO 10 e BIO 15 · Parasitoses e doenças endêmicas e Bactérias, fungos e biorremediação", mods=[10, 15], plano=["10+15"], grupos=[("bio-10-15", None)]),
    dict(id="bio-24-21", k="b2421", mat="BIO", titulo="BIO 24 + BIO 21 · Biotecnologia e DNA", mods=[24, 21], plano=["24+21"], grupos=[("bio-24-21", None)]),
    dict(id="bio-3", k="b3", mat="BIO", titulo="BIO 3 · Evolução", mods=[3], plano=["3"], grupos=[("bio-3", None)]),
    dict(id="bio-17-20", k="b1720", mat="BIO", titulo="BIO 17 + BIO 20 · Hormônios, digestão, nervos e músculos", mods=[17, 20], plano=["17+20"], grupos=[("bio-17-20", None)]),
    dict(id="bio-4-11-12", k="b41112", mat="BIO", titulo="BIO 4 + BIO 11 + BIO 12 · Impacto Ambiental e Botânica", mods=[4, 11, 12], plano=["4+11+12"],
         grupos=[("bio-4", "Impacto ambiental (BIO 4)"), ("bio-11-12", "Botânica (BIO 11 e 12)")], prefixos={"Impacto ambiental (BIO 4)": "i", "Botânica (BIO 11 e 12)": "b"}),
]

MATERIAS = {
    "FIS": {"nome": "Física"},
    "QUI": {"nome": "Química"},
    "BIO": {"nome": "Biologia"},
}

avisos = []

# ----------------------------------------------------------------------------- markdown


def linhas_sem_html(md):
    """Remove os <div> que embrulhavam as listas em HTML (Genética) e marca o enunciado com um título."""
    out = []
    for ln in md.split("\n"):
        s = ln.strip()
        if re.match(r'^<div class="questao"', s):
            out.append("###### Enunciado")
            continue
        if re.match(r"^</?div\b", s) or re.match(r'^<p class="', s):
            continue
        out.append(ln)
    return out


def titulos(linhas):
    """[(índice, nível, texto)] dos títulos fora de blocos de código."""
    res, cerca = [], False
    for i, ln in enumerate(linhas):
        if ln.strip().startswith("```"):
            cerca = not cerca
            continue
        if cerca:
            continue
        m = re.match(r"^(#{1,6})\s+(.*?)\s*#*\s*$", ln)
        if m:
            res.append((i, len(m.group(1)), m.group(2)))
    return res


RE_INICIO_Q = re.compile(r"^[^\wÀ-ú]*(?:o que voc[eê] precisa saber antes da\s+)?quest[aã]o\s*(\d+)\b", re.I)


def num_questao(texto):
    m = RE_INICIO_Q.match(limpa_md(texto))
    return int(m.group(1)) if m else None


def limpa_md(t):
    return re.sub(r"\*\*|__|`", "", t).strip()


def sem_emoji(t):
    return re.sub(r"^[^\wÀ-ú(\[]+", "", limpa_md(t)).strip()


def tabelas(linhas):
    """Tabelas markdown: [(índice_início, título_anterior, cabeçalho, linhas)]."""
    res, i, ult_titulo, cerca = [], 0, "", False
    while i < len(linhas):
        ln = linhas[i]
        if ln.strip().startswith("```"):
            cerca = not cerca
        if not cerca:
            m = re.match(r"^(#{1,6})\s+(.*)$", ln)
            if m:
                ult_titulo = sem_emoji(m.group(2))
        if not cerca and ln.lstrip().startswith("|"):
            ini, bloco = i, []
            while i < len(linhas) and linhas[i].lstrip().startswith("|"):
                bloco.append(linhas[i])
                i += 1
            rows = [celulas(b) for b in bloco if not re.match(r"^\s*\|[\s:\-|]+\|?\s*$", b)]
            if len(rows) >= 1:
                res.append((ini, ult_titulo, rows[0], rows[1:]))
            continue
        i += 1
    return res


def celulas(ln):
    s = ln.strip()
    if s.startswith("|"):
        s = s[1:]
    if s.endswith("|"):
        s = s[:-1]
    # barras escapadas não separam colunas
    partes = re.split(r"(?<!\\)\|", s)
    return [p.strip().replace("\\|", "|") for p in partes]


def norm_codigo(c):
    c = limpa_md(c).strip().rstrip(".")
    m = re.fullmatch(r"([A-Z]{0,2})0*(\d{1,3})", c)
    if not m:
        return None
    letra = m.group(1) or "P"
    return f"{letra}{int(m.group(2))}"


# ----------------------------------------------------------------------------- mapa de padrões


def le_mapa(linhas, grupo):
    padroes = {}
    layout = None
    for _, bloco, cab, rows in tabelas(linhas):
        cab_l = [c.lower() for c in cab]
        i_nome = next((k for k, c in enumerate(cab_l) if "padr" in c and "estudado" not in c), None)
        i_refs = next((k for k, c in enumerate(cab_l) if "quest" in c and "nº" not in c and "destas" not in c), None)
        i_log = next((k for k, c in enumerate(cab_l) if any(x in c for x in ("lógica", "como se resolve", "passo a passo", "chave"))), None)
        if i_nome is None and layout and norm_codigo(cab[0]) and len(cab) == layout[3]:
            # tabela sem linha de cabeçalho: continua o layout da tabela anterior
            i_nome, i_refs, i_log, _n = layout
            rows = [cab] + rows
        if i_nome is None or i_refs is None or i_nome == 0 or i_refs == 0:
            continue
        layout = (i_nome, i_refs, i_log, len(cab))
        for r in rows:
            if len(r) <= max(i_nome, i_refs):
                continue
            cod = norm_codigo(r[0])
            if not cod:
                continue
            nome_bruto = r[i_nome]
            logica = r[i_log] if i_log is not None and i_log < len(r) else ""
            m = re.match(r"^\*\*(.+?)\*\*\s*[:.\-–]?\s*(.*)$", nome_bruto)
            if m and m.group(2):
                nome = m.group(1).rstrip(":. ")
                resto = m.group(2)
                logica = (resto + (" " + logica if logica else "")).strip()
            else:
                nome = limpa_md(nome_bruto)
            padroes[cod] = {
                "cod": cod,
                "nome": nome,
                "logica": logica,
                "refs": r[i_refs],
                "bloco": bloco if bloco and "quest" not in bloco.lower() else "",
                "grupo": grupo or "",
            }
    return padroes


# ----------------------------------------------------------------------------- questões


def classifica(texto):
    t = sem_emoji(texto).lower()
    if "precisa saber" in t or t.startswith("aquecimento"):
        return "guia"
    if "resolu" in t:
        return "resol"
    if t.startswith("gabarito"):
        return "gab"
    if any(k in t for k in ("eliminaç", "eliminac", "pegadinha", "armadilha", "distrator", "por que as outras")):
        return "extra"
    if "enunciado" in t or re.match(r"^quest[aã]o(\s*\d+)?\s*[:.]?\s*$", t):
        return "enun"
    return None


RE_ALT_LINHA = re.compile(r"^\s*(?:>\s*)?(?:[-*+]\s+)?(?:\*\*)?\(?([a-eA-E])\)(?:\*\*)?\s+(.*)$")
RE_GAB = re.compile(
    r"(?i:gabarito|resposta(?:\s+correta)?)\W{0,8}(?:(?i:letra|alternativa)\s*)?\**\s*(?:\(([A-Ea-e])\)|([A-E])\)?(?![A-Za-zÀ-ú]))"
)


def acha_gab(texto):
    ms = RE_GAB.findall(texto)
    if not ms:
        return None
    a, b = ms[-1]
    return (a or b).upper()


def separa_alternativas(md):
    """Devolve (enunciado_sem_alternativas, [5 alternativas]) ou (md, None)."""
    linhas = md.rstrip().split("\n")
    cit = [l for l in linhas if l.strip()]
    if cit and sum(1 for l in cit if l.lstrip().startswith(">")) >= max(3, len(cit) // 2):
        linhas = [re.sub(r"^\s*>\s?", "", l) for l in linhas]
    # 1) uma alternativa por linha, fora de blocos de código. Vale a última sequência a)…e):
    #    rótulos anteriores, como "(A) experimento" ou estruturas a)…e) desenhadas, não contam.
    sequencias, pos, esperado, cerca = [], [], "a", False
    for i, ln in enumerate(linhas):
        if ln.strip().startswith("```"):
            cerca = not cerca
            continue
        if cerca:
            continue
        m = RE_ALT_LINHA.match(ln)
        if not m:
            continue
        letra = m.group(1).lower()
        if letra == "a":
            # caso "a) I. b) II. c) III." numa linha só
            if re.search(r"\s\(?b\)\s", m.group(2)):
                continue
            if pos:
                sequencias.append(pos)
            pos, esperado = [i], "b"
        elif pos and letra == esperado:
            pos.append(i)
            esperado = chr(ord(esperado) + 1)
    if pos:
        sequencias.append(pos)
    completas = [s_ for s_ in sequencias if len(s_) == 5] or [s_ for s_ in sequencias if len(s_) >= 4]
    pos = completas[-1] if completas else []
    if len(pos) >= 4:
        alts = []
        for k, i in enumerate(pos):
            fim = pos[k + 1] if k + 1 < len(pos) else len(linhas)
            txt = RE_ALT_LINHA.match(linhas[i]).group(2)
            cont = [l.strip() for l in linhas[i + 1:fim] if l.strip()]
            if k == len(pos) - 1:
                cont = []  # o que vem depois da última alternativa volta para o enunciado
            alts.append(" ".join([txt] + cont).strip())
        depois = "\n".join(linhas[pos[-1] + 1:]).strip() if len(pos) else ""
        stem = "\n".join(linhas[:pos[0]]).rstrip()
        if depois:
            stem = stem + "\n\n" + depois
        return stem, [limpa_alt(a) for a in alts]
    # 2) alternativas como linhas de uma tabela: "| (a) | 120 | 160 |" (a linha certa pode vir em negrito)
    linhas_t = [i for i, l in enumerate(linhas) if l.lstrip().startswith("|")]
    rotulo = lambda l: re.fullmatch(r"\(?([a-e])\)?", limpa_md(celulas(l)[0]).lower()) if l.lstrip().startswith("|") else None
    alt_rows = [i for i in linhas_t if rotulo(linhas[i])]
    if len(alt_rows) >= 4 and [rotulo(linhas[i]).group(1) for i in alt_rows] == list("abcde")[: len(alt_rows)]:
        ini = alt_rows[0]
        while ini > 0 and linhas[ini - 1].lstrip().startswith("|"):
            ini -= 1
        fim = alt_rows[-1] + 1
        cab = celulas(linhas[ini]) if ini < alt_rows[0] else []
        alts = []
        for i in alt_rows:
            cel = [limpa_md(c) for c in celulas(linhas[i])][1:]
            nomes = [limpa_md(c) for c in cab[1:]] if cab else [""] * len(cel)
            alts.append("; ".join(f"{n}: {c}" if n else c for n, c in zip(nomes, cel)))
        stem = "\n".join(linhas[:ini] + linhas[fim:]).strip()
        return stem, alts
    # 3) alternativas na mesma linha: "a) primeira. b) segunda. c) ..."
    texto = "\n".join(linhas)
    m = re.search(r"(?:^|\n|\s)\(?a\)\s", texto)
    if m:
        ini = m.start()
        trecho = texto[ini:]
        marcas = []
        busca = 0
        for letra in "abcde":
            mm = re.compile(r"(?:^|\s)\(?" + letra + r"\)\s").search(trecho, busca)
            if not mm:
                break
            marcas.append((mm.start(), mm.end()))
            busca = mm.end()
        if len(marcas) >= 4:
            alts = []
            for k, (s, e) in enumerate(marcas):
                fim = marcas[k + 1][0] if k + 1 < len(marcas) else len(trecho)
                alts.append(trecho[e:fim].strip())
            return texto[:ini].rstrip(), [limpa_alt(a) for a in alts]
    return md, None


def limpa_alt(a):
    a = re.sub(r"\s{2,}$", "", a).strip()
    a = re.sub(r"\s+\\$", "", a)
    return a


def le_questoes(linhas, codigos_validos):
    """Quebra um documento em blocos de questão. Devolve (preambulo, [questões], posfácio)."""
    tts = titulos(linhas)
    blocos, cur = [], None
    for (i, nivel, txt) in tts:
        n = num_questao(txt)
        if n is not None and (cur is None or n != cur["n"]):
            if cur:
                cur["fim"] = i
                blocos.append(cur)
            cur = {"n": n, "ini": i, "nivel": nivel, "fim": None}
        elif cur and n is None and (nivel < cur["nivel"] or (nivel == cur["nivel"] and classifica(txt) is None)):
            cur["fim"] = i
            blocos.append(cur)
            cur = None
    if cur:
        cur["fim"] = len(linhas)
        blocos.append(cur)
    if not blocos:
        return "\n".join(linhas).strip(), [], ""
    pre = "\n".join(linhas[: blocos[0]["ini"]]).strip()
    pos = "\n".join(linhas[blocos[-1]["fim"]:]).strip()
    # trechos entre blocos (raros) vão para o posfácio
    questoes = [monta_questao(linhas, b, codigos_validos) for b in blocos]
    return pre, questoes, pos


def codigos_em(texto, validos):
    achados = []
    for m in re.finditer(r"[Pp]adr[aã]o\s+0*(\d{1,3})\b", texto):
        c = f"P{int(m.group(1))}"
        if c in validos and c not in achados:
            achados.append(c)
    for m in re.finditer(r"(?<![A-Za-z0-9])([A-Z]{1,2})0*(\d{1,3})(?![0-9])", texto):
        c = f"{m.group(1)}{int(m.group(2))}"
        if c in validos and c not in achados:
            achados.append(c)
    return achados


def monta_questao(linhas, b, validos):
    trecho = linhas[b["ini"]: b["fim"]]
    cab = limpa_md(re.sub(r"^#+\s*", "", trecho[0]))
    secs = {"pre": [], "guia": [], "enun": [], "resol": [], "extra": [], "gab": []}
    atual = classifica(cab) or "pre"
    titulos_bloco = [cab]
    cerca = False
    for ln in trecho[1:]:
        if ln.strip().startswith("```"):
            cerca = not cerca
        m = None if cerca else re.match(r"^(#{1,6})\s+(.*)$", ln)
        if m:
            t = m.group(2)
            titulos_bloco.append(t)
            c = classifica(t)
            if c is None and num_questao(t) is not None:
                c = "enun"
            if c:
                atual = c
                if c == "gab":
                    secs["gab"].append(t)
                continue
            secs[atual].append("**" + sem_emoji(t) + "**")
            continue
        secs[atual].append(ln)

    def junta(k):
        return "\n".join(secs[k]).strip()

    enun = junta("enun")
    guia = junta("guia")
    pre = junta("pre")
    achadas = None
    if not enun:
        # sem título de enunciado: a questão costuma estar no fim do guia ou no trecho inicial
        for fonte in ("pre", "guia"):
            st, alts = separa_alternativas(junta(fonte))
            if alts:
                if fonte == "guia":
                    # o enunciado começa no último parágrafo que antecede as alternativas
                    partes = re.split(r"\n\s*\n", st)
                    k = max(0, len(partes) - 1)
                    for j in range(len(partes) - 1, -1, -1):
                        if re.match(r"^\s*>?\s*(\*\*)?quest", partes[j], re.I):
                            k = j
                            break
                    guia = "\n\n".join(partes[:k]).strip()
                    enun = "\n\n".join(partes[k:]).strip()
                else:
                    pre, enun = "", st
                achadas = alts
                break
    if not enun and guia:
        partes = re.split(r"\n\s*\n", guia)
        for j, parte in enumerate(partes):
            if re.match(r"^\s*>?\s*\*\*Quest[aã]o\s*\d+", parte):
                guia, enun = "\n\n".join(partes[:j]).strip(), "\n\n".join(partes[j:]).strip()
                break
    if achadas:
        stem, alts = enun, achadas
    else:
        stem, alts = separa_alternativas(enun)
    if alts is None and pre:
        stem2, alts2 = separa_alternativas(pre + "\n\n" + enun)
        if alts2:
            stem, alts, pre = stem2, alts2, ""
    ls_ = [l for l in stem.split("\n") if l.strip()]
    if ls_ and all(l.lstrip().startswith(">") for l in ls_):
        stem = "\n".join(re.sub(r"^\s*>\s?", "", l) for l in stem.split("\n"))
    stem = re.sub(r"^\s*>?\s*\*\*Quest[aã]o\s*\d+\.?\*\*\.?\s*", "", stem).strip()
    resol = junta("resol")
    extra = junta("extra")
    tudo = "\n".join(trecho)
    gab = None
    for fonte in (" ".join(secs["gab"]), resol, extra, tudo):
        gab = acha_gab(fonte)
        if gab:
            break
    cods = (codigos_em(" ".join(titulos_bloco[:2]), validos) or codigos_em(" ".join(titulos_bloco), validos)
            or codigos_em(" ".join(re.findall(r"[Pp]adr[õoã][eo]?s?\W{0,4}[^\n]{0,80}", resol[:400])), validos))
    titulo = cab
    titulo = re.sub(r"^[^\wÀ-ú]*(o que voc[eê] precisa saber antes da\s+)?quest[aã]o\s*\d+\s*", "", titulo, flags=re.I)
    titulo = titulo.strip(" ·—–-:()")
    titulo = re.sub(r"^\(?\s*", "", titulo).rstrip(")")
    titulo = re.sub(r"^(?:Padr[aã]o\s+)?[A-Z]{0,2}\d+\s*[:·(—–-]?\s*", "", titulo).rstrip(") ").strip()

    def corta(x):
        return re.sub(r"(\n\s*-{3,}\s*)+$", "", x.strip()).strip()

    return {
        "n": b["n"],
        "padroes": cods,
        "titulo": titulo,
        "guia": corta(guia),
        "enunciado": corta((pre + "\n\n" + stem).strip() if pre else stem),
        "alternativas": alts or [],
        "gabarito": gab,
        "resolucao": corta(resol),
        "extra": corta(extra),
    }


# ----------------------------------------------------------------------------- gabaritos em tabela e simulados


def gabaritos_tabela(linhas, validos):
    """Tabelas "Questão | Resposta | Padrão (| Resolução)" → {n: (letra, [padrões], resolução)}."""
    res = {}
    for _, _, cab, rows in tabelas(linhas):
        cab_l = [limpa_md(c).lower() for c in cab]
        grupos = []
        for k, c in enumerate(cab_l):
            if c in ("q", "questão", "questao", "nº", "#"):
                i_g = next((j for j in range(k + 1, min(k + 3, len(cab_l))) if any(x in cab_l[j] for x in ("resp", "gab"))), None)
                if i_g is None:
                    continue
                i_p = next((j for j in range(k + 1, min(k + 4, len(cab_l))) if "padr" in cab_l[j]), None)
                i_r = next((j for j in range(k + 1, min(k + 5, len(cab_l))) if "resolu" in cab_l[j]), None)
                grupos.append((k, i_g, i_p, i_r))
        for r in rows:
            for (k, i_g, i_p, i_r) in grupos:
                if max(x for x in (k, i_g, i_p or 0, i_r or 0)) >= len(r):
                    continue
                m = re.search(r"(\d+)", limpa_md(r[k]))
                g = re.search(r"\b([A-E])\b", limpa_md(r[i_g]))
                if not (m and g):
                    continue
                cods = codigos_em(r[i_p], validos) if i_p is not None else []
                res[(limpa_md(r[k])[:1] if not limpa_md(r[k])[:1].isdigit() else "") + m.group(1)] = (
                    g.group(1), cods, r[i_r] if i_r is not None else "")
    return res


def comentarios_gabarito(md):
    """Gabarito comentado de simulado: "**Q1 (D), padrão P26: …**" seguido das explicações → {n: markdown}."""
    res, atual, buf = {}, None, []
    for ln in md.split("\n"):
        m = re.match(r"^\*\*Q(\d+)\s*\(([A-E])\)[^*]*\*\*\s*$", ln.strip())
        if m or re.match(r"^#{1,6}\s", ln) or ln.strip() == "---":
            if atual is not None:
                res[atual] = "\n".join(buf).strip()
            atual, buf = (int(m.group(1)), [ln.strip()]) if m else (None, [])
            if m:
                buf = ["**" + re.sub(r"^\*\*|\*\*$", "", ln.strip()) + "**"]
            continue
        if atual is not None:
            buf.append(ln)
    if atual is not None:
        res[atual] = "\n".join(buf).strip()
    return res


def simulado_negrito(md, validos):
    """Questões em parágrafos "**S1.** …" (simulado misto no fim de uma lista)."""
    linhas = md.split("\n")
    marcas = [i for i, l in enumerate(linhas) if re.match(r"^\*\*S\d+\.\*\*", l.strip())]
    if len(marcas) < 3:
        return [], md
    gabs = gabaritos_tabela(linhas, validos)
    qs = []
    for k, i in enumerate(marcas):
        fim = marcas[k + 1] if k + 1 < len(marcas) else len(linhas)
        # o bloco termina no primeiro título ou separador depois das alternativas
        bloco = []
        for ln in linhas[i:fim]:
            if re.match(r"^#{1,6}\s", ln):
                break
            bloco.append(ln)
        while bloco and bloco[-1].strip() in ("", "---"):
            bloco.pop()
        n = int(re.match(r"^\*\*S(\d+)", linhas[i].strip()).group(1))
        txt = re.sub(r"^\*\*S\d+\.\*\*\s*", "", "\n".join(bloco).strip())
        stem, alts = separa_alternativas(txt)
        g = gabs.get("S" + str(n)) or gabs.get(str(n))
        qs.append({
            "n": n, "padroes": g[1] if g else [], "titulo": "Simulado misto", "guia": "",
            "enunciado": stem, "alternativas": alts or [], "gabarito": g[0] if g else None,
            "resolucao": g[2] if g else "", "extra": "",
        })
    # o que sobra (cabeçalho do simulado e gabarito comentado) continua no fim da lista
    resto = "\n".join(linhas[: marcas[0]]).strip()
    return qs, resto


# ----------------------------------------------------------------------------- Cinemática (listas A e B em Python)


def rl_para_md(t):
    t = t.replace("<b>", "**").replace("</b>", "**").replace("<i>", "*").replace("</i>", "*")
    t = t.replace("<super>", "<sup>").replace("</super>", "</sup>")
    return t


def listas_extras_cinematica(caminho, validos):
    dados = runpy.run_path(caminho)
    itens, listas = dados["ITENS"], dados["LISTAS"]
    res = []
    for L in listas:
        qs = []
        for k, cod in enumerate(L["padroes"], 1):
            it = itens[cod]
            guia = []
            for tipo, conteudo in it["guia"]:
                if tipo == "p":
                    guia.append(rl_para_md(conteudo))
                elif tipo == "b":
                    guia.append("- " + rl_para_md(conteudo))
                elif tipo == "f":
                    guia.append("> " + rl_para_md(conteudo))
                elif tipo == "t":
                    rows = conteudo
                    guia.append("| " + " | ".join(rows[0]) + " |\n|" + "---|" * len(rows[0]) + "\n" +
                                "\n".join("| " + " | ".join(r) + " |" for r in rows[1:]))
            resol = "\n".join(f"{i}. {rl_para_md(p)}" for i, p in enumerate(it["resolucao"], 1))
            extra = []
            if it.get("armadilhas"):
                extra.append("**Armadilhas:** " + rl_para_md(it["armadilhas"]))
            if it.get("fixar"):
                extra.append("**Para fixar:** " + rl_para_md(it["fixar"]))
            if it.get("oficial"):
                extra.append("**Na questão oficial:** " + rl_para_md(it["oficial"]))
            c = norm_codigo(cod)
            qs.append({
                "n": k,
                "padroes": [c] if c in validos else [],
                "titulo": re.sub(r"<[^>]+>", "", it["titulo"]),
                "origem": it.get("origem") or "",
                "guia": "\n\n".join(guia),
                "enunciado": "\n\n".join(rl_para_md(p) for p in it["enunciado"]),
                "alternativas": [rl_para_md(a) for a in it["alternativas"]],
                "gabarito": it["gabarito"],
                "resolucao": resol,
                "extra": "\n\n".join(extra),
            })
        titulo = L["titulo"]
        nome, _, sub = titulo.partition("—")
        res.append({"titulo": nome.strip(), "subtitulo": sub.strip(), "intro": L.get("subtitulo", ""), "questoes": qs, "fim": ""})
    return res


# ----------------------------------------------------------------------------- tópicos


def primeiro_h1(linhas):
    for ln in linhas:
        m = re.match(r"^#\s+(.*)$", ln)
        if m:
            return sem_emoji(m.group(1))
    return ""


def monta_topico(cfg, enem, plano):
    padroes = {}
    docs = []
    for pasta, rotulo in cfg["grupos"]:
        dirp = os.path.join(FONTES, pasta)
        arquivos = sorted(f for f in os.listdir(dirp) if f.endswith(".md"))
        for f in arquivos:
            md = open(os.path.join(dirp, f), encoding="utf-8").read()
            linhas = linhas_sem_html(md)
            docs.append((pasta, rotulo, f, linhas))
            if not f.startswith("referencia"):
                padroes.update(le_mapa(linhas, rotulo))
    validos = set(padroes)
    mapa_md, materiais, listas = [], [], []
    cont_grupo = {}
    for pasta, rotulo, f, linhas in docs:
        pre, qs, pos = le_questoes(linhas, validos)
        if f.startswith("referencia"):
            materiais.append({"titulo": "Referência: padrões de BIO 4 já estudados", "md": "\n".join(linhas).strip()})
            continue
        if not qs:
            if "mapa" in f:
                mapa_md.append(("### " + rotulo + "\n\n" if rotulo else "") + pre)
            else:
                materiais.append({"titulo": primeiro_h1(linhas) or f, "md": pre})
            continue
        tem_mapa = bool(le_mapa(pre.split("\n"), rotulo))
        intro = ""
        if tem_mapa:
            mapa_md.append(("### " + rotulo + "\n\n" if rotulo else "") + pre)
        else:
            intro = pre
        # gabarito e padrão que só aparecem numa tabela de gabarito (simulados)
        gabs = gabaritos_tabela(linhas, validos)
        for q in qs:
            g = gabs.get(str(q["n"]))
            if g:
                q["gabarito"] = q["gabarito"] or g[0]
                q["padroes"] = q["padroes"] or g[1]
                if not q["resolucao"] and g[2]:
                    q["resolucao"] = g[2]
        comentarios = comentarios_gabarito(pos)
        for q in qs:
            if not q["resolucao"] and comentarios.get(q["n"]):
                q["resolucao"] = comentarios[q["n"]]
        simulado = primeiro_h1(linhas).lower().startswith("simulado")
        sim_qs, resto = simulado_negrito(pos, validos)
        cont_grupo[rotulo] = cont_grupo.get(rotulo, 0) + (0 if simulado else 1)
        k = cont_grupo[rotulo]
        listas.append({
            "titulo": "Simulado misto" if simulado else f"Lista {k}",
            "subtitulo": "",
            "grupo": rotulo or "",
            "intro": intro,
            "questoes": qs,
            "fim": pos if not sim_qs else "",
        })
        if sim_qs:
            listas.append({"titulo": "Simulado misto", "subtitulo": "", "grupo": rotulo or "",
                           "intro": resto, "questoes": sim_qs, "fim": ""})
    if cfg["id"] == "fis-15":
        for L in listas_extras_cinematica(os.path.join(FONTES, "fis-15", "06-write-conteudo.py"), validos):
            L["grupo"] = ""
            listas.append(L)

    # numeração, ids e conferências. O id da questão é a chave do progresso salvo no app:
    # "<tópico>.<lista>.<número>", com a lista identificada pelo nome (Lista 2 → 2, Simulado → s, Lista A → A),
    # para não mudar quando uma lista nova entrar no tópico.
    sigla = cfg["id"].upper().replace("-", "")
    total_q = 0
    vistos_l = set()
    for li, L in enumerate(listas, 1):
        m = re.match(r"Lista (\w+)$", L["titulo"])
        lk = (cfg.get("prefixos", {}).get(L["grupo"], "") + (m.group(1) if m else "s"))
        while lk in vistos_l:
            lk += "x"
        vistos_l.add(lk)
        L["id"] = f"{cfg['k']}.{lk}"
        cods = []
        for q in L["questoes"]:
            total_q += 1
            q["id"] = f"{cfg['k']}.{lk}.{q['n']}"
            q["codigo"] = f"{sigla}·L{li}·{q['n']:02d}"
            for c in q["padroes"]:
                if c not in cods:
                    cods.append(c)
            if len(q["alternativas"]) < 4:
                avisos.append(f"{cfg['id']} {L['titulo']} Q{q['n']}: alternativas não encontradas")
            if not q["gabarito"]:
                avisos.append(f"{cfg['id']} {L['titulo']} Q{q['n']}: gabarito não encontrado")
            elif q["alternativas"] and ord(q["gabarito"]) - 65 >= len(q["alternativas"]):
                avisos.append(f"{cfg['id']} {L['titulo']} Q{q['n']}: gabarito {q['gabarito']} fora das alternativas")
            if not q["padroes"]:
                avisos.append(f"{cfg['id']} {L['titulo']} Q{q['n']}: padrão não identificado ({q['titulo'][:60]})")
        L["padroes"] = cods
        if not L["subtitulo"]:
            L["subtitulo"] = f"{len(L['questoes'])} questões"
    cobertos = {c for L in listas for q in L["questoes"] for c in q["padroes"]}
    faltam = [c for c in padroes if c not in cobertos]
    if faltam:
        avisos.append(f"{cfg['id']}: padrões do mapa sem questão ensinada: {', '.join(faltam)}")

    # dados do ENEM 2020–2025 (Mapas) e do Plano de Padrões CN
    E = enem[cfg["mat"]]
    anos = sorted(E["years"].keys())
    modulos = []
    for m in cfg["mods"]:
        freq = [sum(1 for q in E["years"][a] if m in q[2]) for a in anos]
        rank = next((r for r in E["rank"] if r[1] == m), None)
        questoes_enem = [{"ano": int(a), "n": q[0], "tema": q[1], "mods": q[2], "tag": q[3]}
                         for a in anos for q in E["years"][a] if m in q[2]]
        modulos.append({
            "num": m,
            "nome": E["mods"][str(m)],
            "freq": freq,
            "rank": {"novo": rank[0], "antes": rank[2], "porque": rank[3]} if rank else None,
            "questoes": questoes_enem,
        })
    passos = [f"{s[1]}: {s[2]}" for s in E["steps"] if any(re.search(rf"\b{cfg['mat'][:3]}\w* {m}\b", s[1]) for m in cfg["mods"])]
    agenda = []
    for w in plano["weeks"]:
        for d in w["days"]:
            for it in d["items"]:
                mat_p = "QUI" if it[0] == "QUI" else it[0]
                if mat_p == cfg["mat"] and it[1] in cfg["plano"]:
                    agenda.append({"data": d["date"], "dia": d["dia"], "nome": it[2], "faixa": it[3], "modo": it[4], "n": it[5]})

    return {
        "id": cfg["id"],
        "materia": cfg["mat"],
        "titulo": cfg["titulo"],
        "modulos": modulos,
        "porque": passos,
        "agenda": agenda,
        "padroes": list(padroes.values()),
        "mapa": "\n\n---\n\n".join(mapa_md),
        "materiais": materiais,
        "listas": listas,
        "totalQuestoes": total_q,
    }


def main():
    enem = {}
    for k in ("fis", "qui", "bio"):
        enem[k.upper()] = json.load(open(os.path.join(FONTES, "_enem", f"enem-{k}.json"), encoding="utf-8"))
    plano = json.load(open(os.path.join(FONTES, "_enem", "plano.json"), encoding="utf-8"))
    topicos = [monta_topico(cfg, enem, plano) for cfg in TOPICOS]
    saida = {
        "versao": 1,
        "geradoEm": date.today().isoformat(),
        "materias": MATERIAS,
        "anos": sorted(int(a) for a in enem["FIS"]["years"]),
        "cadernos": {k: enem[k].get("cad", {}) for k in enem},
        "modos": plano["modes"],
        "topicos": topicos,
    }
    os.makedirs(os.path.dirname(SAIDA), exist_ok=True)
    # JSON dentro de um script: o app carrega com <script>, que funciona até abrindo os arquivos direto.
    corpo = json.dumps(saida, ensure_ascii=False, separators=(",", ":")).replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")
    with open(SAIDA, "w", encoding="utf-8") as f:
        f.write("window.__PADROES_ENEM=" + corpo + ";\n")
    linhas = []
    for t in topicos:
        nq = sum(len(L["questoes"]) for L in t["listas"])
        linhas.append(f"{t['id']:18} padrões={len(t['padroes']):3}  listas={len(t['listas']):2}  questões={nq:3}  agenda={len(t['agenda'])}")
    linhas.append("")
    linhas.append(f"AVISOS ({len(avisos)}):")
    linhas.extend(avisos)
    open(RELATORIO, "w", encoding="utf-8").write("\n".join(linhas) + "\n")
    print("\n".join(linhas[: len(topicos) + 1]))
    print(f"{len(avisos)} avisos (veja {os.path.relpath(RELATORIO, RAIZ)})")
    print(f"{os.path.relpath(SAIDA, RAIZ)}: {os.path.getsize(SAIDA) / 1024:.0f} KB")


if __name__ == "__main__":
    sys.exit(main())
