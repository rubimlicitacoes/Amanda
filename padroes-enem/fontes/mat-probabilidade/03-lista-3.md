# Lista 3: 5 questões inéditas (padrões P11, P12, P13, P14, P15)

---

## Questão 11 (Padrão P11: união e diagrama de Venn)

### Macetes antes de fazer essa questão
- **Preencha o diagrama de dentro para fora:**
  1. interseção tripla (A∩B∩C);
  2. partes **exclusivas** das duplas: (A∩B) − tripla, (A∩C) − tripla, (B∩C) − tripla;
  3. "somente A" = A − (as duas duplas exclusivas de A) − tripla.
- Fórmula direta: **somente C = C − (A∩C) − (B∩C) + (A∩B∩C)**.
- Para dois conjuntos: **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)** (Q15 original: 36% + 16% − 40% = 12%).
- Na lista original: Q10 = Q77 ("somente MPB": 200 − 60 − 50 + 20 = 110 → 11%).

### Questão
Uma pesquisa com os 500 alunos de uma escola perguntou de quais esportes eles gostam. Alguns alunos não gostam de nenhum dos três esportes citados. O resultado está no quadro.

| Esporte | Futebol | Vôlei | Basquete | Futebol e vôlei | Futebol e basquete | Vôlei e basquete | Os três |
|---|---|---|---|---|---|---|---|
| Nº de alunos | 200 | 150 | 120 | 50 | 40 | 30 | 15 |

Sorteado ao acaso um aluno da escola, a probabilidade de ele gostar **somente** de basquete é
- a) 13%.
- b) 10%.
- c) 21%.
- d) 24%.
- e) 3%.

### Resolução em 3 minutos
1. Somente basquete = 120 − 40 − 30 + 15 = 65.
2. P = 65 ÷ 500 = 13%.

**Gabarito: A**

### Resolução comentada
1. **Centro (os três):** 15.
2. **Partes exclusivas das duplas que envolvem basquete:**
   - futebol e basquete, sem vôlei: 40 − 15 = 25
   - vôlei e basquete, sem futebol: 30 − 15 = 15
3. **Somente basquete:** 120 − 25 − 15 − 15 = **65**.
   Conferência pela fórmula: 120 − 40 − 30 + 15 = 65 ✓.
4. **P = 65/500 = 0,13 = 13%.**
5. **Checagem de consistência:** união = 200 + 150 + 120 − 50 − 40 − 30 + 15 = 365 alunos gostam de pelo menos um esporte, e 135 não gostam de nenhum. Os números fazem sentido.

### Armadilha
- 120 − 40 − 30 = 50 → 10% (alternativa b). Ao subtrair as duas duplas, o centro (15) foi tirado **duas vezes**, então precisa ser devolvido uma vez.
- 120 − 15 = 105 → 21% (alternativa c): tirou só a tripla.
- 120/500 = 24% (alternativa d): esqueceu o "somente".

---

## Questão 12 (Padrão P12: binomial)

### Macetes antes de fazer essa questão
- **P(exatamente k sucessos em n) = C(n,k) · pᵏ · (1 − p)ⁿ⁻ᵏ**
  - C(n,k) = n! ÷ [k! · (n − k)!] conta **em quais posições** os sucessos aparecem.
  - Valores úteis: C(4,1) = 4, C(4,2) = 6, C(5,1) = C(5,4) = 5, C(5,2) = 10, C(10,1) = 10.
- **Condições:** tentativas independentes, com a mesma probabilidade p em todas.
- **Variação "termina na k-ésima"** (Q73 original): o último evento é fixo, então só as anteriores se permutam. Exemplo: o 2º erro ocorre na 5ª pergunta → C(4,1) · 0,2 · 0,8³ · 0,2.
- Na lista original: Q9 (exatamente um verde em 10: 10 · 2/3¹⁰), Q46 (exatamente 2 defeituosos em 4: 6 · (0,2%)² · (99,8%)²) e Q32 (melhor de 7).

### Questão
Um jogador de basquete acerta, em média, 80% dos lances livres que cobra, e os arremessos são independentes entre si. Numa partida, ele vai cobrar 5 lances livres.

A probabilidade de ele acertar **exatamente 4** desses 5 lances é dada por
- a) (0,8)⁴ · 0,2
- b) 5 · (0,8)⁴ · 0,2
- c) 4 · (0,8)⁴ · 0,2
- d) (0,8)⁴
- e) 10 · (0,8)⁴ · 0,2

### Resolução em 3 minutos
1. n = 5, k = 4, p = 0,8.
2. C(5,4) = 5.
3. P = 5 · (0,8)⁴ · (0,2)¹ (que vale 0,4096).

**Gabarito: B**

### Resolução comentada
1. **Uma sequência específica**, por exemplo A A A A E (erro no último):
   P = 0,8 · 0,8 · 0,8 · 0,8 · 0,2 = (0,8)⁴ · 0,2.
2. **Quantas sequências têm 4 acertos e 1 erro?** O erro pode estar em qualquer uma das 5 posições: C(5,4) = C(5,1) = **5**.
3. **Total:** P = 5 · (0,8)⁴ · 0,2 = 5 · 0,4096 · 0,2 = **0,4096** (≈ 41%).

### Armadilha
- A alternativa a calcula **uma única** ordem e esquece as outras 4 posições possíveis do erro.
- A alternativa e usa C(5,2) = 10, um coeficiente que não corresponde a 4 acertos em 5.
- A alternativa d esquece o fator do erro (0,2). Sem ele, a conta não garante que o 5º arremesso foi um erro, e calcula "acertou pelo menos os 4 primeiros".

---

## Questão 13 (Padrão P13: contagem combinatória do espaço amostral)

### Macetes antes de fazer essa questão
- Para comparar chances, **liste os casos favoráveis** de cada um. O espaço amostral é o mesmo para todos, então basta comparar os numeradores.
- **A ordem importa?**
  - Dois dados (ou um dado lançado duas vezes): sim, (2,5) ≠ (5,2), e são 36 resultados.
  - Duas bolas retiradas **juntas**: não, {2,5} = {5,2}, e são C(n,2) pares.
- Bolas diferentes não repetem número, então não existe o par (6,6).
- Na lista original: Q16 (dados: soma 7 tem 6 formas, 8 tem 5, 4 tem 3) e Q51 (sinuca: soma 17 tem 7 pares, 12 tem 5, 22 tem 4).

### Questão
Uma urna contém 10 bolas numeradas de 1 a 10. Duas bolas serão retiradas **simultaneamente** e seus números somados. Antes da retirada, Ana aposta na soma 11, Bia na soma 6 e Caio na soma 15.

Quem tem a maior probabilidade de acertar?
- a) Caio, pois sua soma é a maior.
- b) Bia, pois sua soma é a menor.
- c) Ana, pois há 5 pares que formam sua soma, contra 3 para Caio e 2 para Bia.
- d) Ana e Caio, pois há 5 pares para cada soma.
- e) Todos, pois as somas são escolhidas ao acaso.

### Resolução em 3 minutos
1. Soma 11: {1,10}, {2,9}, {3,8}, {4,7}, {5,6} → 5 pares.
2. Soma 6: {1,5}, {2,4} → 2 pares ({3,3} não existe).
3. Soma 15: {5,10}, {6,9}, {7,8} → 3 pares.
4. Ana tem a maior chance: 5/45 = 1/9.

**Gabarito: C**

### Resolução comentada
1. **Espaço amostral:** C(10,2) = 10 · 9 ÷ 2 = 45 pares, igual para os três.
2. **Contagem dos favoráveis:**

   | Apostador | Soma | Pares | Qtd | P |
   |---|---|---|---|---|
   | Ana | 11 | {1,10}, {2,9}, {3,8}, {4,7}, {5,6} | 5 | 5/45 = 1/9 |
   | Bia | 6 | {1,5}, {2,4} | 2 | 2/45 |
   | Caio | 15 | {5,10}, {6,9}, {7,8} | 3 | 3/45 = 1/15 |

3. **Por que 11 ganha?** A soma 11 é o "meio" da distribuição (1 + 10), e as somas centrais têm mais combinações. Com dois dados acontece o mesmo: a soma 7 é a mais provável.

### Armadilha
- Achar que a soma maior ou menor, por si só, dá mais chance (alternativas a e b). Quem decide é o **número de pares**.
- Contar {3,3} para a soma 6 (ou {5,5} para a soma 10). As bolas são diferentes e não se repetem.
- Contar pares ordenados ((1,5) e (5,1) separados) não muda quem vence, mas dobra os números. Se as alternativas citarem quantidades, veja se a contagem é ordenada ou não.

---

## Questão 14 (Padrão P14: comparação e decisão)

### Macetes antes de fazer essa questão
- Em "qual opção dá a maior probabilidade?", calcule a **razão** (favoráveis ÷ total) de **cada** opção.
- A quantidade absoluta engana: 12 de 40 (0,30) é pior que 8 de 25 (0,32).
- **Truque de conta:** transforme tudo em decimal com 3 casas, ou compare frações por multiplicação cruzada.
- Se houver uma condição extra (Q74 original: o salto precisa garantir o 1º lugar), **filtre primeiro e compare depois**.
- Na lista original: Q25 (filial II: 120/200), Q64 (cidade III: maior razão infectados/habitantes) e Q27 (loteria V: considerar quantas apostas o dinheiro paga).

### Questão
Uma fábrica de chocolates vende caixas sortidas de bombons. Um cliente que só gosta de bombom de morango vai escolher uma caixa e depois retirar dela um bombom ao acaso, sem olhar. O quadro mostra a composição de cada caixa.

| Caixa | Bombons de morango | Total de bombons |
|---|---|---|
| I | 6 | 20 |
| II | 10 | 32 |
| III | 9 | 30 |
| IV | 8 | 25 |
| V | 12 | 40 |

Para ter a maior probabilidade de retirar um bombom de morango, o cliente deve escolher a caixa
- a) I.
- b) II.
- c) III.
- d) IV.
- e) V.

### Resolução em 3 minutos
- I: 6/20 = 0,300
- II: 10/32 = 0,3125
- III: 9/30 = 0,300
- IV: 8/25 = 0,320
- V: 12/40 = 0,300

A maior razão é a da caixa IV.

**Gabarito: D**

### Resolução comentada
1. **Calcule a razão de cada caixa** (morango ÷ total):
   - I = 0,30; III = 0,30; V = 0,30
   - II = 0,3125
   - IV = 0,32
2. **Desempate fino entre II e IV:** pela multiplicação cruzada, 8 · 32 = 256 > 10 · 25 = 250, então 8/25 > 10/32. **IV vence.**
3. Em porcentagem: IV = 32,0%, II = 31,25%.

### Armadilha
- Escolher a caixa V porque tem **mais** bombons de morango (12). A razão dela é só 30%.
- Escolher a caixa II porque tem mais morangos (10) que a IV (8). A diferença está no total da caixa.
- Parar a conta na primeira casa decimal (0,3 para todas) e não perceber a diferença.

---

## Questão 15 (Padrão P15: valor esperado e média ponderada)

### Macetes antes de fazer essa questão
- **Valor esperado:** E = Σ (valor no cenário × probabilidade do cenário). É uma **média ponderada** pelas probabilidades.
- As probabilidades dos cenários somam 1 (por exemplo, seca 0,4 e normal 0,6).
- **Não** use média simples quando os cenários têm chances diferentes.
- Leitura de "taxa média" (Q42 original): cada infectado gera em média 3 · 0,5 = 1,5 novos casos. Como 1,5 > 1, a epidemia cresce.
- Na lista original: Q61 (coeficiente CRC = 0,7 · chuva + 0,3 · sem chuva → pneu I).

### Questão
Um agricultor vai escolher uma variedade de semente de milho para a próxima safra. A produtividade de cada variedade, em sacas por hectare, depende do clima. Para a próxima safra, a previsão é de 40% de probabilidade de seca e 60% de probabilidade de chuvas normais. O agricultor define o **rendimento esperado** de cada variedade como a soma dos produtos das produtividades pelas probabilidades de cada clima, e vai escolher a de maior rendimento esperado.

| Variedade | Com seca | Com chuvas normais |
|---|---|---|
| A | 20 | 50 |
| B | 35 | 38 |
| C | 10 | 58 |
| D | 45 | 34 |
| E | 30 | 46 |

A variedade escolhida será a
- a) A.
- b) B.
- c) C.
- d) D.
- e) E.

### Resolução em 3 minutos
- A: 0,4 · 20 + 0,6 · 50 = 8 + 30 = 38,0
- B: 0,4 · 35 + 0,6 · 38 = 14 + 22,8 = 36,8
- C: 0,4 · 10 + 0,6 · 58 = 4 + 34,8 = 38,8
- D: 0,4 · 45 + 0,6 · 34 = 18 + 20,4 = 38,4
- E: 0,4 · 30 + 0,6 · 46 = 12 + 27,6 = **39,6**

**Gabarito: E**

### Resolução comentada
1. **Pesos:** seca 0,4 e chuvas normais 0,6 (somam 1 ✓).
2. **Rendimento esperado de cada variedade:**

   | Variedade | 0,4 · seca | 0,6 · normal | Esperado |
   |---|---|---|---|
   | A | 8,0 | 30,0 | 38,0 |
   | B | 14,0 | 22,8 | 36,8 |
   | C | 4,0 | 34,8 | 38,8 |
   | D | 18,0 | 20,4 | 38,4 |
   | E | 12,0 | 27,6 | **39,6** |

3. **Maior valor:** E, com 39,6 sacas/ha.

A variedade E não é a melhor em nenhum clima isolado (D é a melhor na seca e C é a melhor com chuvas), mas é a mais **equilibrada** quando os pesos são aplicados.

### Armadilha
- **Média simples** (seca + normal) ÷ 2 dá D = 39,5 como maior valor (alternativa d). Isso ignora que as chuvas normais são mais prováveis.
- Escolher C por ter a maior produtividade com chuvas (58), ou D por ter a maior na seca (45). O critério do enunciado é o valor **esperado**.
- Trocar os pesos (usar 0,6 na seca) muda o vencedor. Associe cada probabilidade ao clima certo.
