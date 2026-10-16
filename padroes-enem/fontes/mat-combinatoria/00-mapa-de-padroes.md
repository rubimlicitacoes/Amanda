# Mapa de padrões: MAT, Análise combinatória (56 questões)

Observações da análise:
- Questões repetidas na lista: **Q1 = Q18** e **Q2 = Q15**. São 54 questões diferentes.
- Fontes: ENEM regular, PPL, Digital, Libras e Encceja.
- **6 questões são de probabilidade** (Q20, Q25, Q34, Q36, Q38, Q48), mas todas se resolvem contando casos.
- Em muitas questões as alternativas são **expressões** (C, A, fatoriais), não números. O ENEM avalia se você **monta** a conta certa, não se você faz a conta.
- No total, **16 padrões de resolução** distintos.

## Cola rápida das ferramentas

| Ferramenta | Fórmula | Quando usar |
|---|---|---|
| PFC (princípio multiplicativo) | n₁ · n₂ · n₃ · … | Etapas em sequência ("E") |
| Princípio aditivo | casos₁ + casos₂ + … | Casos que não se misturam ("OU") |
| Fatorial | n! = n · (n−1) · … · 1, com 0! = 1 | Base de tudo. Simplifique: 10! ÷ 8! = 10 · 9 |
| Permutação simples | Pₙ = n! | Ordenar todos os n elementos distintos |
| Permutação com repetição | n! ÷ (a! · b! · …) | Ordenar elementos com repetições (anagramas com letras iguais, cores) |
| Arranjo | A(n,p) = n! ÷ (n−p)! | Escolher p de n e **a ordem importa** |
| Combinação | C(n,p) = n! ÷ [p! · (n−p)!] | Escolher p de n e **a ordem não importa** |
| Combinação com repetição | CR(n,p) = C(n+p−1, p) | Escolher p itens de n tipos, podendo repetir o tipo, sem ordem |
| Complementar | Total − proibidos | "Pelo menos um", "não podem", "exceto" |
| Caminhos na malha | C(D + C, C) | D passos para a direita e C para cima |
| Subconjuntos | 2ⁿ (ou 2ⁿ − 1 sem o vazio) | Cada item: entra ou não entra |
| Probabilidade | favoráveis ÷ possíveis | Casos equiprováveis |

**Teste da troca (arranjo × combinação):** escolha um resultado e troque dois elementos de lugar. Se aparece um resultado **novo**, a ordem importa (arranjo). Se é o **mesmo** resultado, a ordem não importa (combinação).

## Tabela de padrões

| # | Padrão | Gatilho | Atalho | Questões da lista |
|---|---|---|---|---|
| P1 | PFC com repetição (senhas, placas, códigos) | "senha", "placa", "código", "cada posição pode ser", "podem se repetir" | Desenhe uma casa para cada posição, escreva as opções de cada uma e multiplique. Base = opções por casa; expoente = nº de casas. Em "ficará multiplicado por", só sobram os fatores novos. | 1, 17, 18, 31, 39, 44, 49 |
| P2 | PFC invertido: achar o mínimo ou a opção que atinge uma meta | "pelo menos N informações", "quantidade mínima", "superior a… mas não ao dobro" | Escreva o total em função da incógnita (2ⁿ, 112 · n) e teste potências ou alternativas. Atenção a "superior" (>) e "pelo menos" (≥). | 23, 51, 52 |
| P3 | Princípio aditivo: dividir em casos e somar | "3, 4 ou 5 toques", "pelo menos 3 cardiologistas", tipos de objeto que não se misturam | Separe casos que não se sobrepõem, conte cada um com PFC/C e **some**. | 7, 45, 46 |
| P4 | Complementar: total − proibidos | "não poderão ser ambos", "não são utilizadas as que…", "pelo menos um", "sem passar por" | Conte tudo sem restrição e subtraia o que é proibido. Mais rápido que somar os casos bons. | 26, 27, 54 (também 9, 11, 28) |
| P5 | Arranjo / PFC sem repetição (ordem importa) | Cargos distintos, poltronas, pódio, mandante × visitante, turno e returno | n · (n−1) · (n−2) · … (um fator por vaga) = A(n,p) = n! ÷ (n−p)!. Comece pela restrição mais forte. | 3, 6, 40, 42, 53 |
| P6 | Combinação simples e produto de combinações | Grupo, comissão, trio, equipe, "não importando a ordem", "escolher k de cada tipo" | C(n,p) = n! ÷ [p! · (n−p)!]. Escolhas em categorias diferentes → multiplique as combinações. | 2, 15, 19, 21, 22, 29, 47 |
| P7 | Escolher e depois posicionar/distribuir | "Primeiro sorteiam… depois, entre esses…", presentes para pessoas diferentes, estandes diferentes | Etapa 1: escolher o grupo (C). Etapa 2: ordenar ou atribuir (A, ou ×2, ×k!). Na distribuição, vá pessoa por pessoa, começando pela que tem restrição. | 10, 33, 56 |
| P8 | Permutação com repetição / combinações sucessivas | Posições numeradas recebendo cores repetidas; 2 letras e 2 algarismos "em qualquer posição" | n! ÷ (a! · b! · c!) = C(n,a) · C(n−a,b) · C(n−a−b,c). Escolha as posições de cada tipo e depois o conteúdo. | 4, 30 |
| P9 | Anagramas com restrição (bloco, intercalação, ordem crescente) | "Sempre juntas e nessa ordem", "vogais e consoantes intercaladas", "listados em ordem crescente, qual a posição" | Bloco = 1 peça (× permutação interna se a ordem dentro dele for livre). Intercalar = molde C V C V…, permutando cada grupo. Posição = conte quem vem antes, bloco por bloco, e some 1. | 11, 12, 35 |
| P10 | Coloração com regiões vizinhas | "Faixas adjacentes não podem ter a mesma cor", vértices ligados, retalhos lado a lado | Liste quem toca quem. Comece pela região com mais vizinhos. Ciclo de 4 regiões com k cores = (k−1)⁴ + (k−1) (com 3 cores: 18). | 5, 13, 14, 32, 41 |
| P11 | Caminhos em malha e distância em quadras | Quadriculado, "só para a direita ou para cima", "menor nº de quadras" | Caminhos = C(D+C, C). Passar por um ponto = (até ele) · (dele em diante). Evitar um ponto = total − passando. A exatamente n quadras de um ponto (malha livre) há 4n esquinas. | 28, 55 |
| P12 | Sequências, pareamentos e simetrias (dividir pelas repetições) | Percurso de ida igual ao de volta, formar duplas sem nome, sequência de pares | Rota fechada com sentido indiferente: ÷ 2. Duplas de 2n pessoas: (2n−1) · (2n−3) · … · 1. Sequência de pares: permute cada grupo separadamente. | 8, 9, 16 |
| P13 | Não adjacência (método das lacunas) | "Não estejam em vagões adjacentes", "nenhum ao lado de outro" | Coloque primeiro os livres; eles criam (livres + 1) lacunas. Escolha as lacunas: C(lacunas, p) e multiplique por p! se os elementos são distintos. | 37 |
| P14 | Combinação com repetição (bolinhas e barras) | Objetos iguais distribuídos em tipos/cores, "pelo menos um de cada", "mudança de posição não gera novo modelo" | x₁ + x₂ + … + xₖ = n. Com xᵢ ≥ 1: C(n−1, k−1). Com xᵢ ≥ 0: C(n+k−1, k−1). Mínimo obrigatório: distribua antes e conte só o resto. | 43 |
| P15 | Contagem → probabilidade e comparação de chances | "Probabilidade", "maior chance", cartelas, dados, sexo de filhos, envelopes | P = favoráveis ÷ possíveis. Para comparar apostas, compare quantos casos cada uma cobre (cartela de k números cobre C(k,6) senas). | 20, 25, 34, 36, 38, 48 |
| P16 | Contagem com condições de tabela ou desigualdades | Tabela de notas "faltando uma nota", medidas que precisam somar um valor, "menor quantidade" | Traduza para desigualdade (x − y ≥ 2), conte os pares que satisfazem e multiplique pelas escolhas livres. Em "menor quantidade", teste 2 peças, depois 3… | 24, 50 |

**Total: 16 padrões.**

## Progresso

| Lista | Padrões cobertos | Questões | Restantes |
|---|---|---|---|
| Lista 1 | P1, P2, P3, P4 | 1 a 8 | 12 |
| Lista 2 | P5, P6, P7, P8 | 9 a 16 | 8 |
| Lista 3 | P9, P10, P11, P12 | 17 a 24 | 4 |
| Lista 4 (final) | P13, P14, P15, P16 | 25 a 32 | **0 (16/16 concluídos)** |

## Passo a passo das 56 questões da lista original

| Q | Padrão | Passo a passo | Gab. |
|---|---|---|---|
| 1 | P1 | Novos caracteres são vogais com maiúscula ≠ minúscula: 5 + 5 = 10 opções em cada ponta. Novo = 10 · (antigo) · 10, logo ×100. | A |
| 2 | P6 | 3 de 4 nacionais: C(4,3) = 4. 2 de 4 internacionais: C(4,2) = 6. 4 · 6 = 24. | D |
| 3 | P5 | Cargos distintos, então a ordem importa. Presidente: 20. Secretário: tira o presidente e o cônjuge, 18. Tesoureiro: 16. 20 · 18 · 16. | B |
| 4 | P8 | Posições numeradas de 1 a 12. Vermelhos: C(12,4). Azuis entre os 8 restantes: C(8,3). Verdes entre 5: C(5,3). Amarelos: C(2,2). | E |
| 5 | P10 | A toca B, C e D; B toca C; C toca D; D toca E. A: 3; B: 2; C (≠ A, B): 1; D (≠ A, C): 1; E (≠ D): 2. 3 · 2 · 1 · 1 · 2. | B |
| 6 | P5 | Contar poltronas brancas: 9. Sete pessoas distintas em 9 lugares: A(9,7) = 9! ÷ 2!. | A |
| 7 | P3 | 3 toques: 4³; 4 toques: 4⁴; 5 toques: 4⁵. "Ou" → soma. | B |
| 8 | P12 | A fixa no início e no fim; ordenar B, C, D, E, F: 5! = 120. Cada rota e sua inversa contam uma vez: 60. 60 · 1,5 min = 90 min. | B |
| 9 | P12 + P4 | Formas de separar 8 pessoas em 4 duplas: 7 · 5 · 3 · 1 = 105. Com os 2 canhotos juntos: os outros 6 em 3 duplas = 5 · 3 · 1 = 15. 105 − 15 = 90. | C |
| 10 | P7 | Mais velho: bicicleta **ou** celular (2) e mais 2 dos 6 comuns: C(6,2) = 15 → 30. Sobram 5: mais novo C(5,3) = 10; o do meio fica com os 2 últimos. 30 · 10 = 300. | C |
| 11 | P9 + P4 | EDUARDO = E, D, U, A, R, D, O. Bloco "EDU" + A, R, D, O = 5 peças distintas: 5! = 120. Tirar o e-mail eduardo, que já existe: 119. | D |
| 12 | P9 | Ímpares 1, 3, 5, 7, 9 → 120 números. Antes de 75 913: começam com 1, 3 ou 5: 3 · 24 = 72. Com 71 ou 73: 2 · 6 = 12 (84). Com 751 ou 753: 2 · 2 = 4 (88). 75 913 é o próximo: 89º. | E |
| 13 | P10 | Ciclo A-B-C-D-A com 3 cores. A = C: 3 · 2 · 2 = 12. A ≠ C: 3 · 2 · 1 · 1 = 6. Total 18. | C |
| 14 | P10 | As 4 regiões do escudo formam um ciclo (superior, esquerda alta, esquerda baixa, direita). Mesmo cálculo da Q13: 18 ≥ 16 equipes, então é viável. | A |
| 15 | P6 | Igual à Q2: 24. | D |
| 16 | P12 | Ordem dos 8 filmes de ação (8!), das 5 comédias pareadas com as 5 primeiras ações (5!) e dos 3 dramas pareados com as 3 últimas (3!). 8! · 5! · 3!. | B |
| 17 | P1 | Respostas possíveis: 5 · 6 · 9 = 270. Há 280 alunos e as respostas não se repetem: 280 − 270 = 10 a mais. | A |
| 18 | P1 | Igual à Q1: ×100. | A |
| 19 | P6 | Trio sem ordem: C(5,3) = 5! ÷ [(5−3)! · 3!]. | E |
| 20 | P15 | Cartela com k números cobre C(k,6) senas: 6 → 1, 7 → 7, 8 → 28, 9 → 84, 10 → 210. Arthur 250; Bruno 41 · 7 + 4 = 291; Caio 12 · 28 + 10 = 346; Douglas 4 · 84 = 336; Eduardo 2 · 210 = 420. Maiores: Eduardo e Caio. | A |
| 21 | P6 | Uma espécie de cada grupo: 2 · 20 · 33 = 1 320. | A |
| 22 | P6 | Em cada andar servem os finais 1 a 6 (6 apartamentos). Dois no mesmo andar: C(6,2). 9 andares: 9 · 6! ÷ [(6−2)! · 2!]. | B |
| 23 | P2 | 2ⁿ ≥ 2 560: 2¹¹ = 2 048 (não dá) e 2¹² = 4 096 (dá). 12 bits. | B |
| 24 | P16 | Só a IV (68) ameaça a II (66). Empate II × IV: Enredo II = 20 > IV = 19, a II vence. Precisa 66 + x ≥ 68 + y → x − y ≥ 2: 6 pares. Escolas I, III e V livres (5³ = 125). 6 · 125 = 750. | C |
| 25 | P15 | João vence se o maior dado de Artur ≤ o dele. Para João = j: (j ÷ 6)². P(João) = (1+4+9+16+25+36) ÷ 216 = 91/216. P(Artur) = 125/216. | E |
| 26 | P4 | Todas as duplas: C(10,2). Tirar as de 2 canhotos: C(4,2). | A |
| 27 | P4 | 26³ · 10⁴ − 26³ (placas com 0000) = 26³ · (10⁴ − 1). | C |
| 28 | P11 + P4 | A → B: 4 à direita e 3 para cima: C(7,3) = 35. Passando por C: C(4,2) · C(3,1) = 6 · 3 = 18. 35 − 18 = 17. | C |
| 29 | P6 | 2 de 6 tecidos e 5 de 15 pedras: C(6,2) · C(15,5) = 6! ÷ (4! · 2!) · 15! ÷ (10! · 5!). | A |
| 30 | P8 | Algarismos 10 · 10; letras 52 · 52 (maiúscula ≠ minúscula); posições dos 2 algarismos: 4! ÷ (2! · 2!) = 6. | E |
| 31 | P1 | Novo: 62⁶ (10 + 26 + 26). Antigo: 10⁶. Razão 62⁶ ÷ 10⁶. | A |
| 32 | P10 | Igual à Q13: ciclo de 4 com 3 cores = 18. | C |
| 33 | P7 | Grupo A: a ordem não importa → combinação. Jogo de abertura: mandante ≠ visitante → arranjo. | A |
| 34 | P15 + P5 | 68 caracteres. I: 68 · 67 · 66 · 65 ≈ 19,5 milhões. II: 52 · 51 · 50 · 10 · 6 = 7 956 000. III: 52 · 51 · 10 · 9 · 6 · 5 = 7 160 400. Mais senhas → menor chance: P₁ < P₂ < P₃. | A |
| 35 | P9 + P8 | I AM POTTER: vogais I, A, O, E (4); consoantes M, P, T, T, R (5). Único molde: C V C V C V C V C. Vogais 4!; consoantes 5! ÷ 2! (T repetido). 4! · 5! ÷ 2. | E |
| 36 | P15 | Distribuições possíveis: 4! = 24. Só 1 é a correta: 1/24. | D |
| 37 | P13 | 3 vagões vazios criam 4 lacunas: C(4,3). Agentes distintas: × 3!. | C |
| 38 | P15 | 2⁴ = 16 sequências. Duas meninas e dois meninos: C(4,2) = 6. 6/16 = 3/8. | D |
| 39 | P1 | 4 chaves com 2 posições: 2⁴ = 16. | D |
| 40 | P5 | 8 vértices de partida. De cada um: 7 outros − 3 adjacentes = 4 destinos. 8 · 4 = 32. | D |
| 41 | P10 | Peça grande (2 unidades) em 4 posições. Nas pontas: 3 pequenas seguidas: 3 · 2 · 2 = 12 (×2 = 24). No meio: 1 isolada (3) e 2 seguidas (3 · 2): 18 (×2 = 36). 24 + 36 = 60. | E |
| 42 | P5 | Teclas 1, 2, 5, 7, 0: 5 algarismos; letras ABC, JKL, PQRS: 10. 5 · 4 · 10 · 9 · 8 = 14 400. | B |
| 43 | P14 | Só importa quantos carrinhos de cada cor: x₁ + x₂ + x₃ + x₄ = 10 com xᵢ ≥ 1 → C(9,3). | B |
| 44 | P1 | 5 tonalidades · 2 cremosidades · 3 tipos de pele · 1 (com filtro) = 30. | C |
| 45 | P3 | 3 primárias + C(3,2) = 3 secundárias = 6 cores. Cada uma pura, clara ou escura: 18. Mais preto e branco: 20. | C |
| 46 | P3 | Pelo menos 3 cardiologistas: (3C, 2N) + (4C, 1N) + (5C, 0N). Combinações multiplicadas dentro de cada caso e casos somados. | E |
| 47 | P6 | C(4,3) = 4 trios sem ordem: ABC, ABP, ACP, BCP. | D |
| 48 | P15 | Com R$ 2,00: I = 1/8 145 060; II = 2/15 890 700 ≈ 1/7,9 mi; III = 1/5 461 512; IV = 2/50 063 860 ≈ 1/25 mi; V = 1/2 118 760. Maior: V. | E |
| 49 | P1 | 7, 8, 9 fixos; posições 4 a 9 (6 casas) com 4 opções: 4⁶; posições 10 a 12: 10³; verificador já determinado. | B |
| 50 | P16 | Duas peças de tipos diferentes somam no máximo 75 + 60 = 135. Com três: 75 + 40 + 35 = 150. | B |
| 51 | P2 | Meta: mais que 1 milhão e no máximo 2 milhões. I: 2,6 mi; II: 1 mi (não é superior); III: 6,76 mi; IV: 100 mil; V: 26³ · 10² = 1 757 600. | E |
| 52 | P2 | 7 · 2 · 2³ = 112 por cor. 112 · n > 1 000 → n = 9 (1 008). | B |
| 53 | P5 | Dois turnos: A(20,2) = 20 · 19 = 380 jogos. 380 − 126 empates = 254. | C |
| 54 | P4 | Cada ponto: destacado ou não: 2⁶ = 64. Tirar o caso sem nenhum destacado: 63. | D |
| 55 | P11 | Esquinas a 3 quadras: 4 nos eixos e 8 fora deles = 12. Todas cabem na malha (O está a 3 quadras de cada borda). | C |
| 56 | P7 | 2 compactos: C(4,2); 2 caminhonetes: C(6,2); qual compacto vai para a entrada: 2; qual caminhonete: 2. | C |
