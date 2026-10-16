#!/usr/bin/env python3
"""Converte dois chats que não saíram no formato de listas em markdown:

- BIO 1 + 14 + 16: página HTML (artifact) com 21 padrões e 28 questões inéditas;
- FIS 1 + 4 + 5: guia único em markdown, com a resolução dentro de <details>.

Os originais ficam em fontes/<tópico>/original/ e os arquivos gerados (mapa, material e uma
lista por bloco) ficam em fontes/<tópico>/, no formato que o build_data.py lê.
Uso: python3 padroes-enem/scripts/converte_guias.py
"""
import html
import os
import re
from html.parser import HTMLParser

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FONTES = os.path.join(RAIZ, "padroes-enem", "fontes")


# ----------------------------------------------------------------------------- HTML → markdown

class ParaMd(HTMLParser):
    """Conversor pequeno para o HTML da página de Ecologia e Zoologia."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out, self.listas, self.linha_tab, self.tab = [], [], None, None

    def handle_starttag(self, tag, attrs):
        if tag in ("b", "strong"):
            self.out.append("**")
        elif tag in ("i", "em"):
            self.out.append("*")
        elif tag in ("sub", "sup"):
            self.out.append(f"<{tag}>")
        elif tag == "br":
            self.out.append("\n")
        elif tag in ("ul", "ol"):
            self.listas.append([tag, 0])
            self.out.append("\n")
        elif tag == "li":
            ind = "  " * (len(self.listas) - 1)
            if self.listas and self.listas[-1][0] == "ol":
                self.listas[-1][1] += 1
                self.out.append(f"\n{ind}{self.listas[-1][1]}. ")
            else:
                self.out.append(f"\n{ind}- ")
        elif tag == "p":
            self.out.append("\n\n")
        elif tag in ("h3", "h4"):
            self.out.append("\n\n**")
        elif tag == "table":
            self.tab = []
        elif tag == "tr" and self.tab is not None:
            self.linha_tab = []
        elif tag in ("td", "th") and self.linha_tab is not None:
            self.out.append("\x00")

    def handle_endtag(self, tag):
        if tag in ("b", "strong"):
            self.out.append("**")
        elif tag in ("i", "em"):
            self.out.append("*")
        elif tag in ("sub", "sup"):
            self.out.append(f"</{tag}>")
        elif tag in ("ul", "ol"):
            if self.listas:
                self.listas.pop()
            self.out.append("\n")
        elif tag in ("h3", "h4"):
            self.out.append("**\n")
        elif tag == "p":
            self.out.append("\n")
        elif tag in ("td", "th") and self.linha_tab is not None:
            txt = "".join(self.out)
            i = txt.rfind("\x00")
            cel = txt[i + 1:].strip().replace("\n", " ").replace("|", "\\|")
            self.out = [txt[:i]]
            self.linha_tab.append(cel)
        elif tag == "tr" and self.tab is not None and self.linha_tab is not None:
            self.tab.append(self.linha_tab)
            self.linha_tab = None
        elif tag == "table" and self.tab is not None:
            if self.tab:
                n = max(len(r) for r in self.tab)
                linhas = ["| " + " | ".join(r + [""] * (n - len(r))) + " |" for r in self.tab]
                linhas.insert(1, "|" + "---|" * n)
                self.out.append("\n\n" + "\n".join(linhas) + "\n\n")
            self.tab = None

    def handle_data(self, data):
        self.out.append(re.sub(r"\s+", " ", data))


def md(fragmento):
    p = ParaMd()
    p.feed(fragmento)
    txt = "".join(p.out)
    txt = re.sub(r"\*\*\s+\*\*", " ", txt)
    txt = re.sub(r"[ \t]+\n", "\n", txt)
    txt = re.sub(r"\n[ \t]+(?=[^\s-])", "\n", txt)
    txt = re.sub(r"\n{3,}", "\n\n", txt)
    return txt.strip()


def bloco_html(s, classe, tag="div"):
    m = re.search(rf'<{tag} class="{classe}"[^>]*>(.*?)</{tag}>', s, re.S)
    return m.group(1) if m else ""


def converte_bio(pasta):
    orig = os.path.join(pasta, "original", "padroes-eco-zoo.html")
    h = open(orig, encoding="utf-8").read()
    secoes = re.split(r'(?=<section class="padrao")', h)[1:]
    mapa_linhas, material, listas = [], [], {}
    nomes_bloco = {}
    for sec in secoes:
        sec = sec.split("</section>")[0]
        cab = re.search(r'<p class="p-code">(P\d+) · Bloco (\w) · ([^<]+)</p>\s*<h2>([^<]+)</h2>\s*<p class="p-meta">([^<]+)</p>', sec)
        cod, bloco, nome_bloco, nome, meta = (html.unescape(x).strip() for x in cab.groups())
        nomes_bloco[bloco] = nome_bloco
        refs = meta.split("·", 1)[1].strip() if "·" in meta else meta
        blks = dict((html.unescape(t).strip(), corpo) for t, corpo in re.findall(r'<div class="blk"><h3>([^<]+)</h3>(.*?)</div>(?=\s*<div)', sec, re.S))
        como = md(blks.get("Como o ENEM cobra", ""))
        passo = md(blks.get("Passo a passo de resolução", ""))
        mapa_linhas.append((bloco, cod, nome, como.replace("\n", " "), refs))
        teoria = md(blks.get("O que você precisa saber", ""))
        peg = md(re.search(r'<div class="box warn">(.*?)</div>', sec, re.S).group(1)) if 'class="box warn"' in sec else ""
        mem = md(re.search(r'<div class="box mem">(.*?)</div>', sec, re.S).group(1)) if 'class="box mem"' in sec else ""
        gab = re.search(r'<details class="gab">.*?<ul class="gablist">(.*?)</ul>', sec, re.S)
        gabs = []
        if gab:
            for ref, let, txt in re.findall(r'<li><span class="qref">([^<]+)</span><span class="let">([^<]+)</span><span>(.*?)</span></li>', gab.group(1), re.S):
                gabs.append(f"- **{html.unescape(ref)} ({let})**: {md(txt)}")
        material.append(
            f"## {cod} · {nome}\n\n**Questões da lista:** {refs}\n\n### Como o ENEM cobra\n\n{como}\n\n"
            f"### Passo a passo de resolução\n\n{passo}\n\n### Teoria\n\n{teoria}\n\n{peg}\n\n{mem}\n\n"
            f"### Gabarito comentado das questões da lista\n\n" + "\n".join(gabs))
        for art in re.findall(r'<article class="q"[^>]*data-answer="(\w)"[^>]*>(.*?)</article>', sec, re.S):
            letra, corpo = art
            num = re.search(r"Questão inédita (\d+)", corpo).group(1)
            guia = md(bloco_html(corpo, "guide"))
            guia = re.sub(r"^\*\*O que você precisa saber antes de fazer essa questão\*\*\s*", "", guia)
            qbody = re.search(r'<div class="qbody">(.*?)<ol class="alts">', corpo, re.S).group(1)
            alts = [md(a) for a in re.findall(r'<span class="bub">\w</span><span>(.*?)</span></button>', corpo, re.S)]
            res = re.search(r'<div class="res-body">(.*)</div></details>', corpo, re.S).group(1)
            res_md = md(re.sub(r'<ul class="why">.*$', "", res, flags=re.S))
            why = [(b, md(t)) for b, t in re.findall(r'<li><span class="bub">(\w)</span><span>(.*?)</span></li>', res.split('<ul class="why">')[-1], re.S)] if 'class="why"' in res else []
            extra = ("**Por que as outras estão erradas:**\n" + "\n".join(f"- ({b}) {t}" for b, t in why)) if why else ""
            q = (f"## Questão {int(num)} (Padrão {cod}: {nome})\n\n### O que você precisa saber antes de fazer essa questão\n\n{guia}\n\n"
                 f"### Questão\n\n{md(qbody)}\n\n" + "\n".join(f"{'abcde'[i]}) {a}" for i, a in enumerate(alts)) +
                 f"\n\n### Resolução passo a passo\n\n{res_md}\n\n{extra}\n" +
                 ("" if re.search(r"Gabarito:\s*\**\s*[A-E]", res_md) else f"\n**Gabarito: {letra.upper()}**\n"))
            listas.setdefault(bloco, []).append(q)
    # mapa
    mapa = ["# Mapa de padrões: BIO 1 + 14 + 16 (Ecologia básica e Zoologia, 147 questões)", "",
            "Notação: **Eco N** é a questão N da lista de Ecologia básica e **Zoo N** a da lista de Zoologia.", ""]
    atual = None
    for bloco, cod, nome, como, refs in mapa_linhas:
        if bloco != atual:
            mapa += ["", f"## Bloco {bloco}: {nomes_bloco[bloco]}", "", "| # | Padrão | Lógica de resolução | Questões |", "|---|---|---|---|"]
            atual = bloco
        mapa.append(f"| {cod} | {nome} | {como} | {refs} |")
    open(os.path.join(pasta, "00-mapa-de-padroes.md"), "w", encoding="utf-8").write("\n".join(mapa) + "\n")
    # material: raio-x e padrões de formulação + teoria de cada padrão
    raio = re.search(r'<section class="part" id="raio-x">(.*?)</section>', h, re.S)
    trans = re.search(r'<section class="part" id="transversais">(.*?)</section>', h, re.S)
    intro = "# Raio-X das listas e padrões de formulação\n\n" + md(raio.group(1) if raio else "") + "\n\n" + md(trans.group(1) if trans else "")
    open(os.path.join(pasta, "90-material-raio-x.md"), "w", encoding="utf-8").write(intro + "\n")
    open(os.path.join(pasta, "91-material-teoria-dos-padroes.md"), "w", encoding="utf-8").write(
        "# Teoria e gabarito comentado de cada padrão\n\n" + "\n\n---\n\n".join(material) + "\n")
    for k, bloco in enumerate(sorted(listas), 1):
        open(os.path.join(pasta, f"0{k}-lista-{k}.md"), "w", encoding="utf-8").write(
            f"# Lista {k}: Bloco {bloco}, {nomes_bloco[bloco]}\n\n" + "\n---\n\n".join(listas[bloco]))
    return sum(len(v) for v in listas.values())


# ----------------------------------------------------------------------------- guia de FIS 1 + 4 + 5

def converte_fis(pasta):
    orig = os.path.join(pasta, "original", "Guia_Eletrostatica_Eletromagnetismo_ENEM.md")
    g = open(orig, encoding="utf-8").read()
    partes = re.split(r"(?m)^# ", g)
    cabeca = partes[0] + "# " + partes[1] if not partes[0].strip() else partes[0]
    blocos = [p for p in partes if p.startswith("BLOCO")]
    finais = [p for p in partes if p.startswith("🔁")]
    inicio = [p for p in partes if p.startswith("⚡")]
    # mapa: a tabela "Lista de todos os padrões" e o raio-x
    open(os.path.join(pasta, "00-mapa-de-padroes.md"), "w", encoding="utf-8").write("# " + inicio[0])
    teoria, n_q = [], 0
    for k, b in enumerate(blocos, 1):
        titulo_bloco = b.split("\n", 1)[0].strip()
        qs, sem_q = [], []
        for sec in re.split(r"(?m)^(?=## )", b.split("\n", 1)[1]):
            # cada "### 📝 Questão inédita N (Px…)" vira uma questão; o resto é teoria do padrão
            pedacos = re.split(r"(?m)^### 📝 ", sec)
            sem_q.append(pedacos[0])
            for p in pedacos[1:]:
                p = re.split(r"(?m)^---\s*$", p)[0]
                cab = p.split("\n", 1)[0]
                m = re.match(r"Questão inédita (\d+) \((P\d+)", cab)
                corpo = p.split("\n", 1)[1]
                guia = "\n".join(re.sub(r"^>\s?", "", l) for l in corpo.split("\n") if l.startswith(">"))
                guia = re.sub(r"^\*\*🔎 O que você precisa saber antes de fazer essa questão\*\*\s*", "", guia.strip())
                resto = "\n".join(l for l in corpo.split("\n") if not l.startswith(">"))
                enun, _, res = resto.partition("<details>")
                res = re.sub(r"<summary>.*?</summary>", "", res).replace("</details>", "").strip()
                n_q += 1
                titulo = cab.split("(", 1)[1].rstrip(")") if "(" in cab else m.group(2)
                qs.append(f"## Questão {int(m.group(1))} (Padrão {titulo})\n\n### O que você precisa saber antes de fazer essa questão\n\n{guia}\n\n"
                          f"### Questão\n\n{enun.strip()}\n\n### Resolução passo a passo\n\n{res}\n")
        teoria.append(f"# {titulo_bloco}\n\n" + "\n".join(sem_q).strip())
        open(os.path.join(pasta, f"0{k}-lista-{k}.md"), "w", encoding="utf-8").write(
            f"# Lista {k}: {titulo_bloco.title().replace('—', '·')}\n\n" + "\n---\n\n".join(qs))
    open(os.path.join(pasta, "91-material-teoria-dos-padroes.md"), "w", encoding="utf-8").write(
        "# Teoria de cada padrão\n\n" + "\n\n---\n\n".join(t.replace("\n# ", "\n## ") for t in teoria) + "\n")
    if finais:
        open(os.path.join(pasta, "92-material-revisao-final.md"), "w", encoding="utf-8").write("# " + finais[0])
    return n_q


def prepara(pasta, original):
    os.makedirs(os.path.join(pasta, "original"), exist_ok=True)
    o = os.path.join(pasta, original)
    if os.path.exists(o):
        os.replace(o, os.path.join(pasta, "original", original))
    for f in os.listdir(pasta):
        if f.endswith(".md"):
            os.remove(os.path.join(pasta, f))


if __name__ == "__main__":
    b = os.path.join(FONTES, "bio-1-14-16")
    prepara(b, "padroes-eco-zoo.html")
    print("BIO 1 + 14 + 16:", converte_bio(b), "questões")
    f = os.path.join(FONTES, "fis-1-4-5")
    prepara(f, "Guia_Eletrostatica_Eletromagnetismo_ENEM.md")
    print("FIS 1 + 4 + 5:", converte_fis(f), "questões")
