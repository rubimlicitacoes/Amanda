# Lista 4: 8 questões de revisão integrada (padrões misturados)

> Nesta lista os padrões aparecem fora de ordem, como no ENEM. Antes de calcular, tente identificar o padrão só pelo enunciado. O título de cada questão revela o padrão: se quiser treinar o reconhecimento, cubra o título antes de ler.

---

## Questão 16 (Padrão P8: complementar, "pelo menos um")

### Macetes antes de fazer essa questão
- "Pelo menos um" → **1 − P(nenhum)**.
- Lançamentos de dado são independentes: P(nenhum 6 em 3 lançamentos) = (5/6)³.
- Na lista original: Q3 e Q39.

### Questão
Em um jogo de tabuleiro, o jogador ganha um bônus se tirar **pelo menos um** 6 ao lançar um dado comum três vezes.

A probabilidade de o jogador ganhar o bônus é
- a) 1/2.
- b) 91/216.
- c) 1/216.
- d) 75/216.
- e) 125/216.

### Resolução em 3 minutos
1. Nenhum 6: (5/6)³ = 125/216.
2. Pelo menos um 6: 1 − 125/216 = 91/216.

**Gabarito: B**

### Resolução comentada
1. **Falha em um lançamento:** não sair 6, P = 5/6.
2. **Falha nos três (independentes):** 5/6 · 5/6 · 5/6 = 125/216.
3. **Complementar:** 1 − 125/216 = **91/216 ≈ 42%**.

### Armadilha
- 1/6 + 1/6 + 1/6 = 1/2 (alternativa a) soma chances que se sobrepõem (sair 6 em mais de um lançamento é contado várias vezes).
- 75/216 (alternativa d) é **exatamente** um 6: 3 · (1/6) · (5/6)².
- 125/216 (alternativa e) é a chance de **nenhum** 6.

---

## Questão 17 (Padrão P5: Bayes)

### Macetes antes de fazer essa questão
- Dado o efeito (chegou atrasado), qual a causa (transporte público)?
- Ramo pedido ÷ soma dos ramos com o efeito. Imagine 100 funcionários.
- Na lista original: Q40, Q67 e Q75.

### Questão
Em uma empresa, 60% dos funcionários usam transporte público para ir ao trabalho e os demais usam carro próprio. Entre os que usam transporte público, 30% chegaram atrasados pelo menos uma vez no último mês; entre os que usam carro, 10%.

Sorteando-se um funcionário entre os que chegaram atrasados pelo menos uma vez no último mês, a probabilidade de ele usar transporte público é de, aproximadamente,
- a) 81,8%.
- b) 18,0%.
- c) 60,0%.
- d) 30,0%.
- e) 22,0%.

### Resolução em 3 minutos
1. Transporte público e atrasado: 0,6 · 0,3 = 0,18.
2. Carro e atrasado: 0,4 · 0,1 = 0,04.
3. P = 0,18 ÷ 0,22 = 9/11 ≈ 81,8%.

**Gabarito: A**

### Resolução comentada
1. **Com 100 funcionários:**
   - 60 usam transporte público, dos quais 30% se atrasaram: **18** atrasados.
   - 40 usam carro, dos quais 10% se atrasaram: **4** atrasados.
2. **Novo total:** 18 + 4 = 22 atrasados.
3. **P(transporte | atrasado) = 18/22 = 9/11 ≈ 81,8%.**

### Armadilha
- Cada distrator corresponde a outro número da árvore:
  - 18% (b): P(transporte **e** atrasado).
  - 60% (c): a chance antes da informação.
  - 30% (d): a condição invertida, P(atrasado | transporte).
  - 22% (e): P(atrasado) no total.
- O denominador é **só quem se atrasou**.

---

## Questão 18 (Padrão P7: tentativas com eliminação)

### Macetes antes de fazer essa questão
- Anagramas com letras repetidas: **n! ÷ (a! · b!)**.
- Acertar **em até** k tentativas sem repetir = k/n.
- Na lista original: Q30 (DETETIVE).

### Questão
Carla esqueceu a senha de um aplicativo. Ela sabe que a senha é um anagrama da palavra **ARARA**. O aplicativo permite apenas duas tentativas antes de bloquear a conta, e Carla não repete uma combinação já testada.

A probabilidade de Carla acessar a conta sem bloqueá-la é
- a) 1/10.
- b) 1/60.
- c) 1/5.
- d) 1/120.
- e) 2/120.

### Resolução em 3 minutos
1. Anagramas de ARARA: 5! ÷ (3! · 2!) = 120 ÷ 12 = 10.
2. Duas tentativas: 2/10 = 1/5.

**Gabarito: C**

### Resolução comentada
1. **Letras:** A aparece 3 vezes e R aparece 2 vezes, num total de 5 letras.
2. **Anagramas distintos:** 5! ÷ (3! · 2!) = 120 ÷ (6 · 2) = **10**.
   Outra forma: escolher as 2 posições dos R entre 5: C(5,2) = 10.
3. **Acertar na 1ª ou na 2ª:**
   - P(1ª) = 1/10
   - P(2ª) = 9/10 · 1/9 = 1/10
   - total: 1/10 + 1/10 = **2/10 = 1/5**

### Armadilha
- Usar 5! = 120 sem descontar as letras repetidas leva a 2/120 (alternativa e) ou 1/120 (alternativa d).
- 1/10 (alternativa a) considera só uma tentativa.

---

## Questão 19 (Padrão P10: descobrir o parâmetro da urna)

### Macetes antes de fazer essa questão
- Acrescentar x favoráveis: **(f + x) ÷ (t + x) = meta**.
- Na lista original: Q43 e Q62.

### Questão
Uma urna contém 5 bolas vermelhas e 15 bolas azuis. Deseja-se acrescentar bolas vermelhas de modo que a probabilidade de retirar, ao acaso, uma bola vermelha passe a ser exatamente 40%.

A quantidade de bolas vermelhas que deve ser acrescentada é
- a) 3.
- b) 5.
- c) 8.
- d) 10.
- e) 15.

### Resolução em 3 minutos
1. (5 + x) ÷ (20 + x) = 2/5.
2. 25 + 5x = 40 + 2x → 3x = 15 → x = 5.
3. Prova: 10/25 = 0,4 ✓.

**Gabarito: B**

### Resolução comentada
1. **Antes:** 5 vermelhas de 20 bolas (25%).
2. **Depois de acrescentar x vermelhas:** (5 + x) vermelhas em (20 + x) bolas.
3. **Equação:** (5 + x)/(20 + x) = 2/5 → 5(5 + x) = 2(20 + x) → 25 + 5x = 40 + 2x → **x = 5**.
4. **Conferência:** 10 vermelhas em 25 bolas = 40% ✓.

### Armadilha
- Calcular 40% de 20 = 8 vermelhas e acrescentar 8 − 5 = 3 (alternativa a). O total de bolas também cresce.
- Marcar 8 (alternativa c), que é o total de vermelhas na conta errada, não o acréscimo.
- Marcar 10 (alternativa d), que é o total de vermelhas na conta **certa**. A pergunta quer o acréscimo, não o total.

---

## Questão 20 (Padrão P12: binomial, "termina na k-ésima")

### Macetes antes de fazer essa questão
- "O teste termina na k-ésima pergunta quando ocorre o 2º erro" → a k-ésima resposta é **obrigatoriamente** um erro, e entre as k − 1 anteriores há **exatamente 1** erro.
- P = C(k−1, 1) · p_erro · (p_acerto)^(k−2) · p_erro.
- Na lista original: Q73 (termina na 5ª pergunta: 4 · 0,2 · 0,8³ · 0,2 = 0,08192).

### Questão
Em uma prova oral de idiomas, o examinador faz perguntas em sequência e encerra a prova assim que o candidato comete o **segundo erro**, ou ao fim de 10 perguntas. Um candidato erra cada pergunta com probabilidade 0,1, de forma independente.

A probabilidade de a prova desse candidato terminar **na quarta pergunta** é
- a) 0,0081.
- b) 0,0486.
- c) 0,0729.
- d) 0,0324.
- e) 0,0243.

### Resolução em 3 minutos
1. Exatamente 1 erro nas 3 primeiras perguntas: C(3,1) · 0,1 · 0,9² = 3 · 0,1 · 0,81 = 0,243.
2. Erro na 4ª: · 0,1.
3. P = 0,0243.

**Gabarito: E**

### Resolução comentada
1. **Para terminar na 4ª**, a 4ª resposta precisa ser o **segundo** erro. Então:
   - entre a 1ª e a 3ª: exatamente 1 erro e 2 acertos;
   - na 4ª: erro.
2. **Primeiras três:** o erro pode estar em 3 posições, C(3,1) = 3. P = 3 · 0,1 · 0,9 · 0,9 = 0,243.
3. **Quarta:** erro, P = 0,1.
4. **Produto:** 0,243 · 0,1 = **0,0243**.

### Armadilha
- 0,0081 (alternativa a) esquece o C(3,1): considera só uma ordem (E, A, A, E).
- 0,0486 (alternativa b) usa C(4,2) = 6, como se os dois erros pudessem estar em qualquer lugar entre as 4 perguntas. O último é fixo.
- Esquecer o fator 0,1 da 4ª pergunta leva a 0,243, que não aparece nas alternativas. Se você chegou nele, falta uma etapa.

---

## Questão 21 (Padrão P2: espaço amostral, porcentagem de porcentagem)

### Macetes antes de fazer essa questão
- "x% **dos que** fazem A também fazem B" → em relação ao total: x% · P(A).
- Na lista original: Q13 (60% de 90% = 54% são mulheres, e 40% de 90% = 36% são homens).

### Questão
Uma pesquisa em uma escola mostrou que 80% dos alunos têm celular próprio. Entre os que têm celular, 45% usam algum aplicativo de estudos.

Escolhendo-se ao acaso um aluno da escola, a probabilidade de ele ter celular e usar aplicativo de estudos é
- a) 45%.
- b) 80%.
- c) 44%.
- d) 36%.
- e) 9%.

### Resolução em 3 minutos
P = 0,80 · 0,45 = 0,36 = 36%.

**Gabarito: D**

### Resolução comentada
1. Os 45% se referem **só aos alunos com celular**, não à escola toda.
2. **Com 100 alunos:** 80 têm celular, e 45% de 80 = **36** usam o aplicativo.
3. **P = 36/100 = 36%.**

### Armadilha
- Responder 45% (alternativa a), esquecendo que essa porcentagem é "dos que têm celular".
- 44% (alternativa c) são os alunos que têm celular mas **não** usam o aplicativo (0,8 · 0,55).
- 9% (alternativa e) vem de 0,2 · 0,45, ou seja, aplicar os 45% sobre quem **não** tem celular.

---

## Questão 22 (Padrão P6: regra do produto sem reposição)

### Macetes antes de fazer essa questão
- Dois sorteios sem reposição → (f/t) · ((f − 1)/(t − 1)).
- Na lista original: Q68 (5/20 · 4/19 = 1/19) e Q41 (3/6 · 3/5 = 3/10).

### Questão
Uma empresa com 20 funcionários vai sortear duas viagens, uma após a outra, entre todos os funcionários. Quem for sorteado na primeira não participa da segunda. Desses funcionários, 6 trabalham no setor financeiro.

A probabilidade de as duas viagens ficarem com funcionários do setor financeiro é
- a) 3/38.
- b) 9/100.
- c) 3/10.
- d) 1/19.
- e) 6/38.

### Resolução em 3 minutos
P = 6/20 · 5/19 = 30/380 = 3/38.

**Gabarito: A**

### Resolução comentada
1. **1º sorteio:** 6 do financeiro entre 20, P = 6/20.
2. **2º sorteio:** sobram 5 do financeiro entre 19 (o primeiro sorteado saiu), P = 5/19.
3. **Produto:** 6/20 · 5/19 = 30/380 = **3/38 ≈ 7,9%**.
   Conferência por combinação: C(6,2) ÷ C(20,2) = 15 ÷ 190 = 3/38 ✓.

### Armadilha
- 6/20 · 6/20 = 9/100 (alternativa b) trata o sorteio como **com reposição**, mas o sorteado não volta.
- 6/20 = 3/10 (alternativa c) considera só a primeira viagem.

---

## Questão 23 (Padrão P11 com P3: Venn e condicional)

### Macetes antes de fazer essa questão
- Sem a interseção, ache-a pela união: A∩B = A + B − (A∪B).
- A união = total − "nenhum".
- Depois aplique a condicional: o total passa a ser o grupo do "sabendo que".
- Na lista original: Q18 (não fala inglês → fala espanhol: 300/600 = 1/2).

### Questão
Em uma escola com 800 alunos, 450 falam inglês, 300 falam espanhol e 150 não falam nenhum desses dois idiomas.

Escolhendo-se ao acaso um aluno e sabendo-se que ele fala **espanhol**, a probabilidade de ele também falar inglês é
- a) 1/8.
- b) 1/6.
- c) 2/3.
- d) 1/3.
- e) 2/9.

### Resolução em 3 minutos
1. União: 800 − 150 = 650.
2. Interseção: 450 + 300 − 650 = 100.
3. P(inglês | espanhol) = 100 ÷ 300 = 1/3.

**Gabarito: D**

### Resolução comentada
1. **Falam pelo menos um idioma:** 800 − 150 = 650.
2. **Falam os dois:** 450 + 300 − 650 = **100**. Conferindo as partes exclusivas: só inglês 350, só espanhol 200, ambos 100 e nenhum 150, que somam 800 ✓.
3. **Condicional:** "sabendo que fala espanhol" → novo total = 300.
4. **Favoráveis:** dos 300 que falam espanhol, 100 também falam inglês. **P = 100/300 = 1/3.**

### Armadilha
- 100/800 = 1/8 (alternativa a) usa o total da escola e ignora o "sabendo que".
- 200/300 = 2/3 (alternativa c) é a chance de falar **só** espanhol, o complemento do que foi pedido.
- 100/450 = 2/9 (alternativa e) inverte a condição: P(espanhol | inglês).

---

## Gabarito rápido

| Questão | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 |
|---|---|---|---|---|---|---|---|---|
| Gabarito | B | A | C | B | E | D | A | D |
| Padrão | P8 | P5 | P7 | P10 | P12 | P2 | P6 | P11/P3 |
