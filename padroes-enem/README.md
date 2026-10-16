# Padrões do ENEM

Banco de questões da aba **Padrões do ENEM** do app Reinos. Ele reúne os chats de padrões ("OKA - …"): um tópico por chat, com o mapa de padrões, as listas de questões ensinadas e os dados do ENEM 2020–2025.

## Pastas

- `fontes/<tópico>/`: mapas e listas em markdown, como saíram de cada chat (das branches do repositório ou do histórico da conversa).
- `fontes/fis-15/06-write-conteudo.py`: listas A e B de Cinemática (versão em PDF). Elas repetem as Listas 3 a 5, então o gerador as reconhece como repetidas e não as põe no banco.
- `fontes/_enem/`: dados dos artifacts Mapa de Física, Mapa de Química, Mapa de Biologia e Plano de Padrões CN.
- `fontes/bio-1-14-16/original/` e `fontes/fis-1-4-5/original/`: os guias desses dois chats vieram num arquivo único (HTML e markdown). `scripts/converte_guias.py` os divide em mapa, listas e material de teoria no formato dos outros tópicos.
- `scripts/build_data.py`: gera `app/dist/padroes-enem.js`, o arquivo que o app baixa quando a aba abre.
- `relatorio.txt`: contagem por tópico e avisos de conferência da última geração, incluindo as listas repetidas que foram retiradas.

## Áreas e bloco de velocidade

- Cada tópico pertence a uma área (`AREA_DA_MATERIA`): Natureza, Matemática, Humanas ou Linguagens.
- Tópicos com `velocidade=True` (MAT Números, Álgebra e Grandezas e medidas) formam o bloco "Estratégia de velocidade de resolução": o mapa traz gatilho e atalho de cada padrão e cada questão traz a resolução rápida ("Resolução em N minutos"), que o app compara com o tempo do cronômetro. Nos outros tópicos a resolução rápida, quando existe, entra no começo da resolução comentada.
- `REPETIDAS_ENTRE_TOPICOS`: questões que o chat copiou de outro tópico. A cópia sai do banco, o progresso dela passa para a original e o padrão ganha um link para a questão no outro tópico.

## Como acrescentar um chat novo

1. Salve o mapa e as listas do chat em `fontes/<novo-id>/`, um arquivo `.md` por lista. O mapa vai em `00-mapa-de-padroes.md`.
2. Acrescente o tópico em `TOPICOS`, no topo de `scripts/build_data.py`, com uma chave curta `k` nova (ela identifica o progresso salvo; nunca mude a de um tópico existente).
3. Rode `python3 padroes-enem/scripts/build_data.py` e confira os avisos em `relatorio.txt`.
4. Publique o novo `app/dist/padroes-enem.js` na pasta do app.
