# Mapa de padrões: MAT Probabilidade (Simulado com 81 questões)

Observações da análise:
- Questões repetidas na lista: **Q10 = Q77** e **Q35 = Q50**.
- Todas as 81 questões foram classificadas pelo **raciocínio de resolução**, e não pelo assunto do texto.
- No total, **15 padrões de resolução** distintos.
- Os mais cobrados são P1 (clássica direta), P3 (condicional em tabela), P6 (regra do produto) e P14 (comparação entre opções). Juntos, somam quase metade da lista.

## Tabela de padrões

| # | Padrão | Gatilho | Atalho | Questões da lista |
|---|---|---|---|---|
| P1 | Probabilidade clássica direta (leitura de texto, gráfico ou tabela) | "escolhido ao acaso", "qual a probabilidade de…" com dados prontos | P = favoráveis ÷ possíveis. Para contar múltiplos numa faixa: (último − primeiro) ÷ razão + 1 | 1, 17, 29, 38, 44, 54, 56, 57, 59, 60, 70, 76 |
| P2 | Espaço amostral redefinido ou ponderado ("quem concorre?") | "cada um recebe X cartões", "entre os que opinaram", "% de %", "sorteio entre os filhos" | Escreva **quem está na urna**. Total = Σ (pessoas × cartões). Porcentagem de porcentagem: multiplique (0,9 · 0,4) | 13, 24, 48, 63, 78, 79 |
| P3 | Condicional em tabela/contagem (espaço reduzido) | "sabendo que", "dado que", "verificou-se que", sensibilidade/especificidade | O denominador é a **linha ou coluna** do "sabendo que"; o numerador é a célula do cruzamento | 12, 18, 21, 35, 45, 49, 50, 80 |
| P4 | Probabilidade total (árvore) | Dois ou mais cenários (chove/não chove, máquina I/II, turma A/B) e pergunta sobre o evento em geral | P = Σ P(cenário) · P(evento \| cenário). **Nunca** use média simples | 5, 7, 11, 20, 26, 65 |
| P5 | Bayes (condicional "invertida") | Dá % de cada grupo e % do efeito em cada grupo, e pergunta "dado o efeito, qual o grupo?" | Ramo pedido ÷ soma dos ramos que têm o efeito. Atalho: imagine 1.000 pessoas | 14, 40, 67, 75 |
| P6 | Regra do produto: etapas e sorteios sucessivos | "primeiro… depois…", "um após o outro", "ambos", sorteio em etapas | Multiplica as etapas. Sem reposição, numerador e denominador caem 1 a cada retirada | 4, 33, 36, 41, 53, 68, 69, 81 |
| P7 | Tentativas com eliminação | "senha", "tentativa frustrada é eliminada", "até 4 tentativas", envelopes | Conte as n opções (anagrama: n! ÷ repetições!). Acertar **na** k-ésima = 1/n. Acertar **em até** k = k/n | 2, 28, 30, 31 |
| P8 | Complementar ("pelo menos um") | "pelo menos um", "no mínimo um", "ao menos", rota sem engarrafamento | P(pelo menos um) = 1 − P(nenhum). Independentes: P(nenhum) = produto das falhas | 3, 39, 47 |
| P9 | Número mínimo de tentativas | "quantidade mínima… para que a probabilidade seja ≥ 9/10 (ou 99/100)" | (falha)ⁿ ≤ 1 − meta. Teste n = 1, 2, 3… Confira se a pergunta quer o **total** ou só os **novos** | 8, 19, 22 |
| P10 | Descobrir o parâmetro (urna, tabuleiro) | "quantas bolas acrescentar", "número de crianças", "dimensão mínima" | (f + x) ÷ (t + x) = meta, e resolva. "Superior a" é estrito: se a conta der exata, some 1 | 6, 23, 34, 43, 62 |
| P11 | União e diagrama de Venn | "somente", "P ou Q", tabela com interseções duplas e tripla | Preencha de dentro para fora: tripla → duplas exclusivas → "somente". P(A∪B) = P(A) + P(B) − P(A∩B) | 10, 15, 77 |
| P12 | Binomial | "exatamente k de n", "o teste termina na 5ª pergunta", série melhor de 7 | C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ. "Termina na k-ésima": fixe o último evento e permute só os anteriores | 9, 32, 46, 73 |
| P13 | Contagem combinatória do espaço amostral | soma de dados ou bolas, senhas, loteria, anagramas, "quem tem mais chance" | Liste os pares. Dois dados: ordem importa (36 casos). Bolas retiradas juntas: ordem não importa, C(n,2) | 16, 37, 51, 58, 71 |
| P14 | Comparação e decisão entre opções | "em qual deve…", "qual escolher", "a maior probabilidade é…" | Calcule a **razão** de cada opção; nunca compare só números absolutos. Se houver condição, filtre antes de comparar | 25, 27, 52, 55, 64, 66, 72, 74 |
| P15 | Valor esperado e média ponderada | "soma dos produtos… pelas probabilidades", "em média", contágio | E = Σ valor · probabilidade. Taxa média de transmissão > 1 indica crescimento | 42, 61 |

## Gatilho → ferramenta (resumo de bolso)

| Palavra no enunciado | Ferramenta |
|---|---|
| "e" em sequência | multiplica |
| "ou" | soma e subtrai a interseção |
| "pelo menos um" | 1 − nenhum |
| "sabendo que" / "dado que" | novo total = o grupo dado |
| "exatamente k de n" | binomial |
| "quantidade mínima" | inequação, testar n |
| "qual deve escolher" | razão de cada opção |
| "sem reposição" / "tentativa eliminada" | o denominador cai 1 a cada etapa |

## Onde treinar cada padrão

| Arquivo | Padrões |
|---|---|
| 01-lista-1.md | P1, P2, P3, P4, P5 |
| 02-lista-2.md | P6, P7, P8, P9, P10 |
| 03-lista-3.md | P11, P12, P13, P14, P15 |
| 04-lista-4.md | Revisão integrada (padrões misturados) |
