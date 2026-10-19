"""Gera padroes-enem/resumo-para-agenda.md: resumo compacto do banco da aba
Padrões do ENEM (tópicos, listas, padrões, dados do ENEM e plano), para usar
num projeto do Claude ao montar a agenda de estudo. Rode depois do build_data.py."""
import json, re, os
from collections import OrderedDict

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
txt = open(os.path.join(RAIZ, "app/dist/padroes-enem.js"), encoding="utf-8").read()
d = json.loads(txt[txt.index("=") + 1: txt.rstrip().rindex(";")])


def limpa(s):
    s = re.sub(r"<[^>]+>", "", s or "")
    s = re.sub(r"\*\*|__|`|\$\$?", "", s)
    s = s.replace("\\cdot", "·").replace("\\", "")
    return re.sub(r"\s+", " ", s).strip()


def tendencia(f):
    a, b = sum(f[:3]), sum(f[3:])
    return "↑" if b > a else "↓" if b < a else "="


MODOS = d["modos"]
out = []
w = out.append
total_q = sum(t["totalQuestoes"] for t in d["topicos"])
total_p = sum(len(t["padroes"]) for t in d["topicos"])
ver = re.search(r'VERSAO_APP = "([^"]+)"', open(os.path.join(RAIZ, "app/src/plataforma-enem.jsx"), encoding="utf-8").read())
w(f"# Padrões do ENEM — resumo para agenda (app Reinos v{ver.group(1) if ver else '?'}, dados de {d['geradoEm']})")
w(f"{len(d['topicos'])} tópicos · {total_p} padrões · {total_q} questões. Cada tópico = 1 chat de padrões.")
w("""
## Como o banco funciona (vale para todos os tópicos)
- Padrão = tipo de questão que se repete no ENEM, tirado da lista oficial de questões do chat. Cada padrão tem nome, lógica de resolução e as questões oficiais em que aparece.
- Cada questão ensinada é inédita, no estilo ENEM: 1 padrão por questão (às vezes 2), texto-base contextualizado, comando, 5 alternativas (a–e), 1 gabarito.
- Fluxo no app: guia "O que você precisa saber antes de fazer essa questão" → OK → enunciado e alternativas (riscar alternativas, "Ver gabarito" ou modo gabarito aberto) → resolução passo a passo (por que cada distrator cai) → "Para fixar". Erro pode ir ao caderno de erros.
- Padrão "feito" = já respondido ou com gabarito visto. O app mostra o % por tópico e a lista "Padrões já feitos".
- Bloco VELOCIDADE (só MAT Números, Álgebra e Grandezas): cada padrão tem gatilho (como reconhecer no enunciado) e atalho; o guia vira "Macetes"; cronômetro desde o OK; depois aparece "Resolução em N minutos" (meta, em geral 3 min) e o tempo gasto.
- Tempo estimado por questão (para a agenda): CN/CH/LC ≈ 4–6 min com guia e resolução; MAT comum ≈ 5 min; bloco velocidade ≈ 3 min (meta) + 2 min de revisão.

## Estilo das questões por área
- CN: situação do cotidiano, tecnologia ou ambiente; mistura conceito e cálculo curto; gráficos, tabelas e esquemas descritos; resolução com as contas passo a passo e o erro típico de cada distrator.
- MAT: situação-problema com números reais (preços, planos, tabelas, gráficos, plantas); Probabilidade e Combinatória cobram contagem e casos favoráveis; no bloco velocidade a questão é cronometrada e a resolução rápida mostra o caminho mais curto.
- CH: texto-base (documento, relato, crônica, Texto I × Texto II, charge ou imagem descrita) + comando; o que decide é ler o comando e reconhecer o distrator (anacronismo, generalização absoluta, inversão, visão heroica, extrapolação, verdadeiro que não responde).
- LC: texto (crônica, poema, anúncio, conversa digital, obra de arte descrita) + análise da linguagem, gramática em uso e artes.

## Legenda
- Linha do tópico: [área·matéria] | P = nº de padrões | Q = nº de questões | L = nº de listas.
- ENEM 20–25 (só CN): módulo, frequência por ano 2020→2025, total, tendência (↑ mais nos últimos 3 anos), rank novo (antes).
- Plano CN: data · faixa de padrões · modo (C completo, O só a oficial, L leitura, N lista a criar) · nº de padrões.
- Listas: Ln (nº de questões): códigos dos padrões cobertos. Algumas listas finais repetem padrões anteriores como revisão.
- Padrões: código nome ·Ln (lista onde é ensinado) ·k (nº de questões oficiais com esse padrão; maior = mais cobrado na lista oficial). "sem questão" = só no mapa.
""")

for area, info in d["areas"].items():
    tops = [t for t in d["topicos"] if t["area"] == area]
    if not tops:
        continue
    w(f"\n# ÁREA {area} · {info['nome']} ({len(tops)} tópicos)")
    for t in tops:
        vel = t.get("bloco") == "velocidade"
        nl = len(t["listas"])
        w(f"\n## {t['titulo']} [{t['area']}·{t['materia']}]{' [BLOCO VELOCIDADE]' if vel else ''}")
        w(f"P {len(t['padroes'])} | Q {t['totalQuestoes']} | L {nl}"
          + (f" | materiais: {', '.join(limpa(m['titulo']) for m in t['materiais'])}" if t.get("materiais") else ""))
        if t["modulos"]:
            ms = []
            for m in t["modulos"]:
                f = m["freq"]
                r = m.get("rank") or {}
                rk = f" rank {r.get('novo')} ({r.get('antes')})" if r.get("novo") else ""
                ms.append(f"M{m['num']} {m['nome']}: {','.join(map(str, f))} = {sum(f)} {tendencia(f)}{rk}")
            w("ENEM 20–25: " + " ; ".join(ms))
            temas = []
            for m in t["modulos"]:
                for q in m.get("questoes", []):
                    k = f"{str(q['ano'])[2:]} {limpa(q['tema'])}"
                    if k not in temas:
                        temas.append(k)
            if temas:
                w("Temas ENEM: " + " · ".join(temas))
        for p in t.get("porque") or []:
            w("Prioridade: " + limpa(p))
        if t.get("agenda"):
            w("Plano CN: " + " ; ".join(
                f"{a['dia']} P{a['faixa']} {a['modo']} ({a['n']})" for a in t["agenda"]))
        onde = {}
        for i, L in enumerate(t["listas"], 1):
            for c in L["padroes"]:
                onde.setdefault(c, f"L{i}")
        w("Listas: " + " · ".join(
            f"L{i}{' ' + limpa(L['grupo']) if L.get('grupo') else ''} ({len(L['questoes'])}): {','.join(L['padroes'])}"
            for i, L in enumerate(t["listas"], 1)))
        blocos = OrderedDict()
        for p in t["padroes"]:
            blocos.setdefault(limpa(p.get("bloco")) or "", []).append(p)
        for b, ps in blocos.items():
            if b and not re.search(r"(tabela|mapa|lista) de (todos os )?padr|padrões (da lista|encontrados|de cobrança)", b, re.I):
                w(f"- {b}")
            for p in ps:
                k = len([x for x in re.split(r"[,;]", p.get("oficial") or "") if x.strip()])
                lst = onde.get(p["cod"]) or (f"questão em {p['veja']['rotulo']}" if p.get("veja") else "sem questão")
                s = f"{p['cod']} {limpa(p['nome'])} ·{lst}" + (f" ·{k}" if k else "")
                w(s)

open(os.path.join(RAIZ, "padroes-enem/resumo-para-agenda.md"), "w", encoding="utf-8").write("\n".join(out) + "\n")
print(len("\n".join(out)), "caracteres")
