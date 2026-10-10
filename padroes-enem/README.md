# Padrões do ENEM

Banco de questões da aba **Padrões do ENEM** do app Reinos. Ele reúne os chats de padrões ("OKA - …"): um tópico por chat, com o mapa de padrões, as listas de questões ensinadas e os dados do ENEM 2020–2025.

## Pastas

- `fontes/<tópico>/`: mapas e listas em markdown, como saíram de cada chat (das branches do repositório ou do histórico da conversa).
- `fontes/fis-15/06-write-conteudo.py`: listas extras A e B de Cinemática.
- `fontes/_enem/`: dados dos artifacts Mapa de Física, Mapa de Química, Mapa de Biologia e Plano de Padrões CN.
- `scripts/build_data.py`: gera `app/dist/padroes-enem.json`, o arquivo que o app baixa quando a aba abre.
- `relatorio.txt`: contagem por tópico e avisos de conferência da última geração.

## Como acrescentar um chat novo

1. Salve o mapa e as listas do chat em `fontes/<novo-id>/`, um arquivo `.md` por lista. O mapa vai em `00-mapa-de-padroes.md`.
2. Acrescente o tópico em `TOPICOS`, no topo de `scripts/build_data.py`.
3. Rode `python3 padroes-enem/scripts/build_data.py` e confira os avisos em `relatorio.txt`.
4. Publique o novo `app/dist/padroes-enem.json` na pasta do app.
