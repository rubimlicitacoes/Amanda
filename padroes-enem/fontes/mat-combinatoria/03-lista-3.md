# Lista 3: 8 questões inéditas (padrões P9, P10, P11, P12)

> Notação usada: n! (fatorial), C(n,p) (combinação), A(n,p) (arranjo), · (vezes), ÷ (dividido).
> Tente resolver antes de ler a resolução. Cubra a parte de baixo com a mão.

---

## Questão 17 (Padrão P9: anagramas com bloco, "sempre juntas")

### Macetes antes de fazer essa questão
- **Anagrama** = reordenação de todas as letras. Com n letras distintas: n!.
- "**Juntas**": cole as letras num **bloco** e trate o bloco como **uma peça só**. Peças = (letras fora do bloco) + 1.
- Depois, **dentro do bloco**:
  - se a ordem interna é livre ("juntas, em qualquer ordem"), multiplique pela permutação interna (k!);
  - se a ordem é fixa ("juntas e nessa ordem", como "edu" na Q11), não multiplique.
- Letras repetidas: divida pelo fatorial das repetições.

### Questão
Um clube esportivo vai criar códigos de acesso para o seu aplicativo usando anagramas da palavra FUTEBOL. Por uma escolha de design, só serão usados os anagramas em que as três vogais aparecem juntas, em qualquer ordem, como em FTBUOEL ou EOUFTBL.

Quantos códigos podem ser criados?
- a) 120
- b) 720
- c) 5 040
- d) 144
- e) 840

### Resolução em 3 minutos
1. Letras: F, U, T, E, B, O, L (7 distintas). Vogais: U, E, O.
2. Bloco [UEO] + F, T, B, L = 5 peças: 5! = 120.
3. Ordem interna das vogais: 3! = 6.
4. 120 · 6 = 720.

**Gabarito: B**

### Resolução comentada
Como as vogais devem ficar juntas, cole-as num bloco. Agora há 5 peças para ordenar (o bloco e as 4 consoantes), todas distintas: 5! = 120. Para cada uma dessas ordens, as vogais podem ser arrumadas de 3! = 6 maneiras dentro do bloco (UEO, UOE, EUO…). Total 720. Na Q11 da lista original o bloco "edu" tinha ordem fixa, por isso lá não havia o fator interno.

### Armadilha
- Esquecer a ordem interna do bloco e marcar 120 (alternativa a). O enunciado diz "em qualquer ordem".
- Contar o bloco + 4 consoantes como 4 peças: 4! · 3! = 144 (alternativa d). O bloco também é uma peça.
- Marcar 5 040 (alternativa c), o total de anagramas sem restrição.

---

## Questão 18 (Padrão P9: posição de um número numa lista em ordem crescente)

### Macetes antes de fazer essa questão
- Para achar a **posição** de um número numa lista crescente, conte **quantos vêm antes dele** e some 1.
- Conte **por blocos de prefixo**: todos que começam com um algarismo menor; depois, entre os que começam igual, todos com o segundo algarismo menor; e assim por diante.
- Com 5 algarismos distintos, fixar o 1º deixa 4! = 24; fixar os dois primeiros deixa 3! = 6; fixar três deixa 2! = 2.

### Questão
Uma gráfica numerou os ingressos de um show usando todos os números de 5 algarismos distintos que podem ser formados com os algarismos 2, 4, 6, 8 e 9. Os ingressos foram organizados em ordem crescente de numeração e entregues nessa ordem às pessoas da fila.

O ingresso de número 86 429 foi entregue à pessoa que ocupava, na fila, a posição
- a) 72ª.
- b) 84ª.
- c) 86ª.
- d) 87ª.
- e) 88ª.

### Resolução em 3 minutos
1. Começam com 2, 4 ou 6: 3 · 24 = 72.
2. Começam com 82 ou 84: 2 · 6 = 12 → 84.
3. Começam com 862: 2 → 86.
4. Começam com 864: o primeiro é 86 429. Posição 87.

**Gabarito: D**

### Resolução comentada
Total de números: 5! = 120. Vamos contar os menores que 86 429:
- 1º algarismo 2, 4 ou 6: cada um deixa 4! = 24 ordens dos outros. 72 números.
- 1º algarismo 8 e 2º algarismo menor que 6 (2 ou 4): cada um deixa 3! = 6. Mais 12, total 84.
- Prefixo 86 e 3º algarismo menor que 4 (só o 2): 2! = 2. Total 86.
- Prefixo 864: sobram 2 e 9. O menor é 86 429.

Há 86 números antes dele, então ele é o 87º. É a Q12 da lista original (75 913 é o 89º).

### Armadilha
- Esquecer de **somar 1** no final e marcar 86 (alternativa c).
- Contar 864__ inteiro (2 números) e marcar 88 (alternativa e). Isso inclui o próprio número e o 86 492, que vem depois.
- Esquecer que o 9 também é algarismo disponível ao contar os prefixos.

---

## Questão 19 (Padrão P10: coloração de regiões, uma região toca todas)

### Macetes antes de fazer essa questão
- Antes de contar, **liste quem é vizinho de quem** (lado em comum; tocar só num ponto não conta).
- **Comece pela região com mais vizinhos** (o "gargalo"). Depois pinte uma região vizinha às já pintadas, descontando as cores dos vizinhos já pintados.
- Se duas regiões não se tocam, elas **podem** ter a mesma cor. Por isso o desconto é só das vizinhas.

### Questão
Uma bandeira comemorativa será formada por uma faixa horizontal A, ocupando toda a parte de cima, e por três faixas verticais B, C e D, lado a lado, nessa ordem, ocupando a parte de baixo. A faixa A tem lado em comum com B, C e D; B tem lado em comum com C; C tem lado em comum com D; B e D não se tocam.

```
+-----------------------+
|           A           |
+-------+-------+-------+
|   B   |   C   |   D   |
+-------+-------+-------+
```

Cada faixa será pintada com uma de 4 cores disponíveis, de forma que faixas com lado em comum tenham cores diferentes. Quantas bandeiras distintas podem ser pintadas?
- a) 24
- b) 36
- c) 48
- d) 72
- e) 256

### Resolução em 3 minutos
1. A (toca as outras 3): 4.
2. B (≠ A): 3.
3. C (≠ A e ≠ B): 2.
4. D (≠ A e ≠ C; pode repetir a cor de B): 2.
5. 4 · 3 · 2 · 2 = 48.

**Gabarito: C**

### Resolução comentada
A é a região com mais vizinhos, então começa por ela: 4 cores. B só precisa fugir de A: 3. C toca A e B, que têm cores diferentes entre si: sobram 2. D toca A e C (que são diferentes), sobram 2. D **não toca** B, então pode repetir a cor de B, e isso não muda a conta. Total 48. É a Q5 da lista original (3 · 2 · 1 · 1 · 2).

### Armadilha
- Achar que todas as faixas precisam ter cores diferentes: 4 · 3 · 2 · 1 = 24 (alternativa a). B e D não são vizinhas.
- Esquecer a restrição com A ao pintar D e usar 3 opções (4 · 3 · 2 · 3 = 72, alternativa d).
- 4⁴ = 256 (alternativa e) ignora todas as restrições.

---

## Questão 20 (Padrão P10: coloração em ciclo de 4)

### Macetes antes de fazer essa questão
- Em um **ciclo** (A–B–C–D–A), o último elemento toca o primeiro, e a conta "em linha" não funciona direto.
- Divida em dois casos, olhando dois elementos **opostos** (A e C):
  - **A e C com a mesma cor:** B e D só precisam fugir dessa cor.
  - **A e C com cores diferentes:** B e D precisam fugir das duas.
- Fórmula para conferir: ciclo de 4 com k cores = (k−1)⁴ + (k−1). Com 3 cores dá 18 (Q13, Q14 e Q32 da lista original).

### Questão
Uma mesa quadrada de jogos tem quatro banquetas, uma em cada canto, identificadas por A, B, C e D, nessa ordem ao redor da mesa. Banquetas em cantos vizinhos (ligados por um lado da mesa) são A e B, B e C, C e D, D e A. Cada banqueta será pintada com uma de 4 cores, de modo que banquetas vizinhas tenham cores diferentes. As posições das banquetas são fixas.

```
A ----- B
|       |
|       |
D ----- C
```

Quantas pinturas distintas são possíveis?
- a) 36
- b) 48
- c) 72
- d) 84
- e) 108

### Resolução em 3 minutos
1. A = C: A (4) · C (1) · B (3) · D (3) = 36.
2. A ≠ C: A (4) · C (3) · B (2) · D (2) = 48.
3. Total: 36 + 48 = 84.
4. Conferência: (4−1)⁴ + (4−1) = 81 + 3 = 84.

**Gabarito: D**

### Resolução comentada
A e C não são vizinhas (estão em cantos opostos), então podem ou não ter a mesma cor, e isso muda as opções de B e D. Por isso separamos em casos:
- **Mesma cor:** escolha a cor de A (4) e C repete (1). B toca A e C, que têm uma só cor: 3 opções. D, idem: 3. Total 36.
- **Cores diferentes:** A (4), C (3). B toca as duas cores: 2. D também: 2. Total 48.

Os casos não se misturam, então soma: 84.

### Armadilha
- Fazer em linha, A · B · C · D = 4 · 3 · 3 · 3 = 108 (alternativa e), sem perceber que D também toca A.
- Fazer 4 · 3 · 2 · 2 = 48 (alternativa b), supondo que A e C são sempre diferentes. Esse é só um dos casos.

---

## Questão 21 (Padrão P11: caminhos na malha passando por um ponto)

### Macetes antes de fazer essa questão
- Indo só para a direita (D) e para cima (C), todo caminho é uma **sequência de letras** com D e C. Com d passos para a direita e c para cima, o número de caminhos é C(d + c, c).
- "**Passando por R**": caminhos até R · caminhos de R até o destino (PFC).
- "**Sem passar por R**": total − passando por R (complementar). Foi o que a Q28 da lista original cobrou.
- Antes de qualquer conta, **conte os quarteirões** de diferença na horizontal e na vertical.

### Questão
Num bairro planejado, as ruas formam uma malha quadriculada. Considere um sistema em que cada esquina é indicada por (x, y), sendo x o número de quarteirões para a direita e y o número de quarteirões para cima a partir da padaria P = (0, 0). Um entregador sai da padaria e vai até o cliente Q = (5, 3), andando sempre pelas ruas e só para a direita ou para cima. No caminho, ele precisa passar pela farmácia R = (2, 1) para buscar uma encomenda.

Quantos trajetos diferentes o entregador pode fazer?
- a) 13
- b) 26
- c) 30
- d) 56
- e) 86

### Resolução em 3 minutos
1. P → R: 2 D e 1 C: C(3,1) = 3.
2. R → Q: 3 D e 2 C: C(5,2) = 10.
3. Passando por R: 3 · 10 = 30.

**Gabarito: C**

### Resolução comentada
De P = (0,0) a R = (2,1), o entregador dá 2 passos para a direita e 1 para cima, em alguma ordem: DDC, DCD ou CDD. São C(3,1) = 3 caminhos. De R = (2,1) a Q = (5,3) faltam 3 passos para a direita e 2 para cima: C(5,2) = 10 ordens. Cada trajeto até R combina com cada trajeto depois de R: 3 · 10 = 30.

Para conferir o raciocínio: o total sem restrição seria C(8,3) = 56, e os que **não** passam por R seriam 56 − 30 = 26.

### Armadilha
- Somar os trechos: 3 + 10 = 13 (alternativa a). É "até R **e** depois de R": multiplica.
- Marcar 26 (alternativa b), que é a resposta do caso **sem** passar por R.
- Marcar 56 (alternativa d), o total sem a restrição.

---

## Questão 22 (Padrão P11: esquinas a uma distância em quadras)

### Macetes antes de fazer essa questão
- Na cidade em malha, a distância é medida em **quarteirões andados**: d = |Δx| + |Δy| (distância "do táxi").
- As esquinas a exatamente n quarteirões de um ponto formam um **losango**: 4 nos eixos + 4 · (n−1) fora deles = **4n esquinas**.
- "**No máximo** n" inclui todas as distâncias de 1 até n: 4 · (1 + 2 + … + n). Inclua ou não o ponto de partida conforme o enunciado.
- Confira se a malha **cabe** o losango inteiro (a Q55 original tinha bordas).

### Questão
Em um bairro com ruas em malha quadriculada, cada quarteirão mede 100 m. Uma ambulância está parada na esquina O, e as ruas se estendem por pelo menos 5 quarteirões em todas as direções a partir de O. A central quer listar todas as esquinas que podem ser alcançadas percorrendo no máximo 300 m pelas ruas, pelo menor caminho, sem contar a própria esquina O.

Quantas esquinas estarão na lista?
- a) 12
- b) 16
- c) 24
- d) 25
- e) 36

### Resolução em 3 minutos
1. 300 m = 3 quarteirões.
2. A 1 quarteirão: 4; a 2: 8; a 3: 12.
3. Total: 4 + 8 + 12 = 24.

**Gabarito: C**

### Resolução comentada
Pelo menor caminho, a distância até a esquina (x, y) é |x| + |y| quarteirões. Precisamos de 1 ≤ |x| + |y| ≤ 3.
- Distância 1: (±1, 0), (0, ±1) → 4.
- Distância 2: (±2, 0), (0, ±2), (±1, ±1) → 4 + 4 = 8.
- Distância 3: (±3, 0), (0, ±3), (±1, ±2), (±2, ±1) → 4 + 8 = 12.

Total 24. Como a malha se estende por 5 quarteirões em cada direção, todas essas esquinas existem. Na Q55 da lista original, a pergunta era "exatamente 3 quarteirões" e a resposta foi 12.

### Armadilha
- Contar só a distância exata de 3 quarteirões (alternativa a). O enunciado diz "no máximo".
- Incluir a própria esquina O (alternativa d).
- Usar a distância em linha reta (um círculo) em vez de quarteirões andados.

---

## Questão 23 (Padrão P12: formar duplas sem nome, com restrição)

### Macetes antes de fazer essa questão
- Formar duplas **sem nome** (não há "dupla 1" e "dupla 2"): pegue a primeira pessoa da lista e escolha o par dela; depois pegue a próxima pessoa sem par, e assim por diante.
  - 4 pessoas: 3 · 1 = 3 formas. 6 pessoas: 5 · 3 · 1 = 15. 8 pessoas: 7 · 5 · 3 · 1 = 105.
- Fórmula equivalente: (2n)! ÷ (2!ⁿ · n!). O n! no denominador tira a ordem das duplas.
- "Dois X não podem formar dupla": total − duplas em que eles ficam juntos (complementar).

### Questão
Seis amigos vão jogar um torneio de vôlei de areia e precisam se dividir em 3 duplas. Entre eles estão os irmãos Lucas e Mateus, que preferem não jogar na mesma dupla.

De quantas maneiras as 3 duplas podem ser formadas?
- a) 12
- b) 15
- c) 45
- d) 90
- e) 720

### Resolução em 3 minutos
1. Total de divisões em 3 duplas: 5 · 3 · 1 = 15.
2. Lucas e Mateus juntos: os outros 4 formam 2 duplas: 3 · 1 = 3.
3. 15 − 3 = 12.

**Gabarito: A**

### Resolução comentada
Sem restrição: o primeiro amigo da lista escolhe o par entre os outros 5. Dos 4 restantes, o primeiro escolhe o par entre 3. Os 2 últimos formam a última dupla. Total 5 · 3 · 1 = 15 (ou 6! ÷ (2! · 2! · 2! · 3!) = 720 ÷ 48 = 15).
Casos proibidos: Lucas e Mateus juntos. Os outros 4 formam 2 duplas de 3 · 1 = 3 formas.
Resposta: 15 − 3 = 12. É a Q9 da lista original (105 − 15 = 90).

### Armadilha
- Esquecer de dividir pela ordem das duplas: C(6,2) · C(4,2) · C(2,2) = 90 (alternativa d). Isso conta cada divisão 3! = 6 vezes, como se houvesse "dupla 1", "dupla 2" e "dupla 3".
- Esquecer a restrição e marcar 15 (alternativa b).

---

## Questão 24 (Padrão P12: rota de ida e volta, dividir por 2)

### Macetes antes de fazer essa questão
- Rota que **sai e volta ao mesmo ponto** visitando n lugares: ordens de visita = n!.
- Se percorrer a rota **ao contrário** dá o mesmo custo, cada rota e sua inversa contam uma vez só: **n! ÷ 2**.
- Depois aplique a regra do enunciado (tempo por rota, custo…).

### Questão
Um entregador sai do depósito D, precisa visitar 4 clientes, cada um em um bairro diferente, e voltar ao depósito. Uma rota é a ordem em que os clientes são visitados. Ele percebeu que percorrer uma rota no sentido inverso tem exatamente o mesmo custo de combustível. Por isso, só vai analisar uma rota de cada par (rota e sua inversa). Ele gasta 2 minutos para analisar cada rota.

O tempo mínimo necessário para analisar todas as rotas que precisam ser verificadas é
- a) 8 min.
- b) 12 min.
- c) 24 min.
- d) 48 min.
- e) 240 min.

### Resolução em 3 minutos
1. Ordens de visita dos 4 clientes: 4! = 24.
2. Tirar as inversas: 24 ÷ 2 = 12 rotas.
3. 12 · 2 min = 24 min.

**Gabarito: C**

### Resolução comentada
O depósito fica fixo no começo e no fim. Os 4 clientes podem ser visitados em 4! = 24 ordens. Cada rota tem uma inversa com o mesmo custo (D-1-2-3-4-D e D-4-3-2-1-D), e as rotas se agrupam em pares. Basta analisar 24 ÷ 2 = 12 rotas, o que leva 12 · 2 = 24 minutos. É a Q8 da lista original (5! ÷ 2 = 60 rotas · 1,5 min = 90 min).

### Armadilha
- Esquecer de dividir por 2 (48 min, alternativa d).
- Responder o número de rotas (12, alternativa b) em vez do tempo.
- Incluir o depósito na permutação (5! = 120 → 240 min, alternativa e). Ele é fixo.
