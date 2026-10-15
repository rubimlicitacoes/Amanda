# Lista 3 (final): 5 padrões restantes + 5 questões de revisão integrada

> Meta: no máximo **3 minutos por questão**. Leia primeiro os macetes, depois cronometre a questão.
>
> A Parte A fecha os padrões P21 a P25. A Parte B mistura padrões numa mesma questão, como o ENEM costuma fazer: o objetivo é reconhecer **qual atalho usar em cada etapa**.

---

# PARTE A: últimos padrões

## Questão 21 (Padrão P21: cobrança por bloco, "hora ou fração")

### Macetes antes de fazer essa questão
- **Caminho lógico:** primeiro arredonde cada tempo **para cima** até a hora cheia: Ana, 2 h 20 min → 3 h; Bruno, 5 h 15 min → 6 h. Só depois compare os preços.
- **O que ignorar:** os horários de entrada e saída e o nome do shopping.
- **Como eliminar:** para Ana, o Gama (R$ 20,00) não compensa em 3 h, o que elimina a alternativa E. Para Bruno, 6 h no Alfa custam R$ 30,00, mais que a diária do Gama, então o Alfa não serve para ele. Sobra decidir Alfa × Beta para Ana e Beta × Gama para Bruno.
- **Conta mínima:** Ana: Alfa 3 × 5 = 15, Beta 12. Bruno: Beta 12 + 3 × 4 = 24, Gama 20.

### Questão
Perto de um shopping há três estacionamentos:

- **Alfa:** R$ 5,00 por hora ou fração de hora.
- **Beta:** R$ 12,00 pelas 3 primeiras horas (ou fração) e R$ 4,00 por hora ou fração de hora que passar disso.
- **Gama:** R$ 20,00 por qualquer permanência de até 8 horas.

Ana vai deixar o carro por 2 horas e 20 minutos, e Bruno, por 5 horas e 15 minutos.

Os estacionamentos mais econômicos para Ana e Bruno são, respectivamente,
- a) Alfa e Beta.
- b) Alfa e Gama.
- c) Beta e Beta.
- d) Beta e Gama.
- e) Gama e Gama.

### Resolução em 3 minutos
1. Arredonde: Ana 3 h; Bruno 6 h. ⏱ 10 s
2. Ana: Alfa 15, Beta 12, Gama 20 → Beta. ⏱ 20 s
3. Bruno: Alfa 30, Beta 24, Gama 20 → Gama. ⏱ 25 s

**Gabarito: D**

### Resolução comentada
Para Ana (3 horas cobradas): Alfa R$ 15,00; Beta R$ 12,00; Gama R$ 20,00. Para Bruno (6 horas cobradas): Alfa R$ 30,00; Beta R$ 12,00 + 3 × R$ 4,00 = R$ 24,00; Gama R$ 20,00. Os mais baratos são Beta e Gama.

### Armadilha
Cobrar 2 h para Ana (aí Alfa daria R$ 10,00 e pareceria o melhor) ou esquecer que no Beta as 3 primeiras horas já estão incluídas nos R$ 12,00. "Ou fração" significa: **qualquer minuto a mais conta a hora inteira**.

---

## Questão 22 (Padrão P22: probabilidade de eventos independentes)

### Macetes antes de fazer essa questão
- **Caminho lógico:** "pelo menos um consegue" = 1 − "nenhum consegue". Nenhum = 0,6 × 0,75.
- **O que ignorar:** o nome do show e o horário de abertura das vendas.
- **Como eliminar:** a resposta tem que ser **maior que 40%** (a chance de Lia sozinha) e **menor que 65%** (a soma, que conta duas vezes o caso em que os dois conseguem). Só sobra 55%.
- **Conta mínima:** 0,6 × 0,75 = 0,45. Depois 1 − 0,45 = 0,55.

### Questão
Dois amigos, Lia e Davi, tentam comprar ingressos para um show no momento em que as vendas abrem, cada um num site diferente. A probabilidade de Lia conseguir é de 40%, e a de Davi, de 25%. As tentativas são independentes.

A probabilidade de que pelo menos um deles consiga comprar o ingresso é
- a) 10%
- b) 30%
- c) 55%
- d) 65%
- e) 70%

### Resolução em 3 minutos
1. Nenhum consegue: 0,6 × 0,75 = 0,45. ⏱ 20 s
2. Pelo menos um: 1 − 0,45 = 0,55. ⏱ 5 s

**Gabarito: C**

### Resolução comentada
P(Lia não) = 0,6 e P(Davi não) = 0,75. Por independência, P(nenhum) = 0,6 · 0,75 = 0,45. Logo P(pelo menos um) = 1 − 0,45 = 0,55 = 55%.

### Armadilha
Somar as probabilidades (65%), o que conta duas vezes o caso em que ambos conseguem, ou calcular "os dois conseguem" (0,4 × 0,25 = 10%). Na lista original, a Q6 usa a mesma ideia.

---

## Questão 23 (Padrão P23: contagem sistemática)

### Macetes antes de fazer essa questão
- **Caminho lógico:** conte o algarismo 1 **por posição**, separadamente: unidades, dezenas, centenas. Somando as três contagens, o 111 entra três vezes, como deve.
- **O que ignorar:** o tipo de impressão e o número de capítulos.
- **Como eliminar:** só a casa das centenas já dá 100 (de 100 a 199). Então a resposta passa de 100. Isso derruba 25 e 55.
- **Conta mínima:**
  - Unidades: 1, 11, 21, …, 241 → 25.
  - Dezenas: 10–19, 110–119, 210–219 → 30.
  - Centenas: 100–199 → 100.

### Questão
Uma gráfica vai imprimir a numeração das páginas de um livro de 250 páginas, dividido em 12 capítulos. As páginas são numeradas de 1 a 250, e cada algarismo é impresso separadamente.

Quantas vezes o algarismo 1 será impresso?
- a) 25
- b) 55
- c) 125
- d) 135
- e) 155

### Resolução em 3 minutos
1. Unidades: 25. ⏱ 20 s
2. Dezenas: 3 blocos de 10 = 30. ⏱ 20 s
3. Centenas: 100. Total: 25 + 30 + 100 = 155. ⏱ 15 s

**Gabarito: E**

### Resolução comentada
Algarismo 1 nas unidades: de 1 a 241, de 10 em 10, ou seja, 25 números. Nas dezenas: 10 a 19, 110 a 119 e 210 a 219, ou seja, 30. Nas centenas: 100 a 199, ou seja, 100. Total: 155.

### Armadilha
Esquecer a casa das centenas (55), esquecer as dezenas (125) ou contar só o bloco 10–19 nas dezenas (135). Na lista original, a Q36 (algarismo 2 de 100 a 399) usa o mesmo método.

---

## Questão 24 (Padrão P24: geometria com percentual)

### Macetes antes de fazer essa questão
- **Caminho lógico:** a casa ocupa 15² = 225 m² de 900 m², ou seja, 25%. O limite é 49%. A área precisa ser multiplicada por 49 ÷ 25 = 1,96, e **1,96 = 1,4²**. Logo o lado deve ser multiplicado por 1,4 (aumento de 40%).
- **O que ignorar:** não é preciso saber as medidas finais da casa.
- **Como eliminar:** "duplicar a área" leva a 50%, não 49%. "Aumentar o lado em 96%" confunde o aumento da área com o do lado. "Duplicar o lado" quadruplica a área (100%).
- **Conta mínima:** 25% × 1,4² = 25% × 1,96 = 49%.

### Questão
Um terreno retangular mede 20 m por 45 m. Nele, a proprietária construiu uma casa de base quadrada com 15 m de lado. A prefeitura permite que a área construída ocupe, no máximo, 49% da área do terreno.

A proprietária quer ampliar a casa mantendo a base quadrada. A área ocupada atingirá exatamente o limite permitido se ela
- a) duplicar a medida do lado do quadrado.
- b) ampliar a medida do lado do quadrado em 40%.
- c) ampliar a área do quadrado em 40%.
- d) ampliar a medida do lado do quadrado em 96%.
- e) duplicar a área do quadrado.

### Resolução em 3 minutos
1. Situação atual: 225 ÷ 900 = 25%. ⏱ 20 s
2. Fator da área: 49 ÷ 25 = 1,96. ⏱ 15 s
3. Fator do lado: √1,96 = 1,4, ou seja, +40% no lado. ⏱ 15 s

**Gabarito: B**

### Resolução comentada
A área do terreno é 900 m², e o limite é 0,49 × 900 = 441 m². O lado que dá essa área é √441 = 21 m. Como 21 ÷ 15 = 1,4, o lado deve aumentar 40%.

### Armadilha
Achar que aumentar o lado em x% aumenta a área em x%. Se o lado é multiplicado por k, a área é multiplicada por **k²**. Na lista original, a Q62 cobra a mesma ideia (a área precisa triplicar, e não o lado).

---

## Questão 25 (Padrão P25: máximo de função quadrática)

### Macetes antes de fazer essa questão
- **Caminho lógico:** P(n) = 3n − 0,05n². As raízes são n = 0 e n = 60 (quando 3 = 0,05n). O máximo está no meio: n = 30. Depois, calcule **P(30)**.
- **O que ignorar:** o exemplo com 10 balões só serve para confirmar a fórmula.
- **Como eliminar:** 30 é o número de balões (x do vértice), não a pontuação. 90 é esquecer a penalidade. 15 é metade de 30 por engano.
- **Conta mínima:** P(30) = 90 − 0,05 · 900 = 90 − 45 = 45.

### Questão
Em uma gincana, cada participante tem 1 minuto para estourar balões. Cada balão estourado vale 3 pontos, mas, para evitar que alguém estoure balões de qualquer jeito, aplica-se uma penalidade igual a 5% do quadrado do número de balões estourados. Por exemplo, quem estoura 10 balões faz 3 · 10 − 0,05 · 10² = 25 pontos.

A pontuação máxima que um participante pode alcançar é
- a) 15
- b) 30
- c) 40
- d) 45
- e) 90

### Resolução em 3 minutos
1. Raízes: 3n − 0,05n² = 0, logo n = 0 ou n = 60. ⏱ 20 s
2. Vértice: n = 30. ⏱ 5 s
3. P(30) = 90 − 45 = 45. ⏱ 15 s

**Gabarito: D**

### Resolução comentada
P(n) = −0,05n² + 3n. O x do vértice é −b ÷ (2a) = −3 ÷ (−0,1) = 30. A pontuação máxima é P(30) = 3 · 30 − 0,05 · 900 = 45.

### Armadilha
Responder o número de balões (30) em vez da pontuação. Na lista original, a Q89 tem a mesma armadilha: o máximo é com 50 moedas, e a pontuação máxima é 25.

---

# PARTE B: revisão integrada (questões que misturam padrões)

## Questão 26 (Revisão: P1 unidades em sequência + P5 inteiro mínimo)

### Macetes antes de fazer essa questão
- **Caminho lógico:** leitos × mL por turno × turnos × dias, numa linha só. Depois divida por 5 L e **arredonde para cima** ("no mínimo", e não dá para comprar meio galão).
- **O que ignorar:** o número de funcionários e o preço do galão não entram.
- **Como eliminar:** 378 é a resposta em litros, não em galões. 75 é arredondar para baixo, o que deixaria faltar álcool.
- **Conta mínima:** 120 × 35 = 4 200 mL; × 3 = 12 600 mL; × 30 = 378 000 mL = 378 L. Depois 378 ÷ 5 = 75,6, logo 76 galões.

### Questão
Um hospital tem 120 leitos e 300 funcionários. Em cada leito, gastam-se em média 35 mL de álcool em gel por turno, e há 3 turnos por dia. O álcool é comprado em galões de 5 litros, a R$ 48,00 cada.

O número mínimo de galões que o hospital deve comprar para abastecer os leitos durante 30 dias é
- a) 75
- b) 76
- c) 378
- d) 756
- e) 7 560

### Resolução em 3 minutos
1. 120 × 35 × 3 = 12 600 mL por dia. ⏱ 25 s
2. × 30 = 378 000 mL = 378 L. ⏱ 15 s
3. 378 ÷ 5 = 75,6, logo 76 galões. ⏱ 10 s

**Gabarito: B**

### Resolução comentada
O consumo mensal é 120 · 35 · 3 · 30 = 378 000 mL = 378 L. Com galões de 5 L, são necessários 378 ÷ 5 = 75,6 galões. Como 75 galões não bastam, o mínimo é 76.

### Armadilha
Arredondar 75,6 para baixo ou marcar o consumo em litros (378). "Mínimo para abastecer" sempre arredonda para cima.

---

## Questão 27 (Revisão: P6 total a partir da parte percentual + P8 fração de fração)

### Macetes antes de fazer essa questão
- **Caminho lógico:** 62% = 1 488 pessoas, então 1% = 24 pessoas. Quem **não** usa transporte público é 38%, ou seja, 38 × 24 = 912. A pergunta quer 25% **desses**, e não do total.
- **O que ignorar:** a cidade e o período da pesquisa.
- **Como eliminar:** 372 é 25% de quem **usa** transporte público. 600 é 25% do total. 912 é o grupo inteiro, antes do último filtro.
- **Conta mínima:** 912 ÷ 4 = 228.

### Questão
Uma pesquisa de mobilidade urbana constatou que 62% dos entrevistados usam transporte público diariamente, o que corresponde a 1 488 pessoas. Entre os entrevistados que não usam transporte público, 25% se deslocam de bicicleta.

O número de entrevistados que se deslocam de bicicleta é
- a) 228
- b) 372
- c) 600
- d) 912
- e) 1 116

### Resolução em 3 minutos
1. 1% = 1 488 ÷ 62 = 24. ⏱ 20 s
2. Não usam: 38% = 38 × 24 = 912. ⏱ 15 s
3. Bicicleta: 912 ÷ 4 = 228. ⏱ 10 s

**Gabarito: A**

### Resolução comentada
Total de entrevistados: 1 488 ÷ 0,62 = 2 400. Não usam transporte público: 2 400 − 1 488 = 912. Desses, 25% usam bicicleta: 0,25 × 912 = 228.

### Armadilha
Aplicar os 25% sobre o grupo errado (372 ou 600). Antes de calcular a porcentagem, grife **de quem** ela é.

---

## Questão 28 (Revisão: P4 comparar custo de opções + P12 fatores compostos)

### Macetes antes de fazer essa questão
- **Caminho lógico:** dois descontos de 5% **não** são 10%. O fator é 0,95 × 0,95 = 0,9025, ou seja, 9,75% de desconto. A loja B é um pouco mais cara que a A.
- **O que ignorar:** as formas de pagamento e o prazo de entrega.
- **Como eliminar:** a alternativa B (desconto igual) e a alternativa C (descontos sucessivos somam mais) saem pela regra dos fatores. A loja C parte de R$ 3 200,00: 15% de desconto tira R$ 480,00 e dá R$ 2 720,00, mais caro que A.
- **Conta mínima:** A: 3 000 − 300 = 2 700. B: 3 000 × 0,9025 = 2 707,50. C: 3 200 − 480 = 2 720.

### Questão
Uma estudante pesquisou o mesmo modelo de notebook em três lojas, todas com entrega em 5 dias úteis:

- **Loja A:** R$ 3 000,00, com 10% de desconto no pagamento por PIX.
- **Loja B:** R$ 3 000,00, com 5% de desconto de cupom e mais 5% de desconto sobre o novo valor no pagamento por PIX.
- **Loja C:** R$ 3 200,00, com 15% de desconto no pagamento por PIX.

Pagando por PIX, a opção mais barata é a loja
- a) A, com preço final de R$ 2 700,00.
- b) A ou B, pois as duas dão 10% de desconto sobre R$ 3 000,00.
- c) B, pois os descontos sucessivos resultam em mais de 10% de desconto.
- d) C, pois oferece o maior percentual de desconto.
- e) B ou C, pois os preços finais são iguais.

### Resolução em 3 minutos
1. A: R$ 2 700,00. ⏱ 10 s
2. B: 0,95² = 0,9025, desconto de 9,75%, logo R$ 2 707,50 > A. ⏱ 25 s
3. C: 3 200 × 0,85 = R$ 2 720,00 > A. ⏱ 20 s

**Gabarito: A**

### Resolução comentada
Loja A: 3 000 × 0,90 = 2 700,00. Loja B: 3 000 × 0,95 × 0,95 = 2 707,50. Loja C: 3 200 × 0,85 = 2 720,00. A mais barata é a A.

### Armadilha
Somar os descontos sucessivos (achar que 5% + 5% = 10%) ou escolher pelo maior percentual sem olhar o preço de partida. Compare sempre o **preço final**.

---

## Questão 29 (Revisão: P9 proporcionalidade composta + P5 inteiro mínimo)

### Macetes antes de fazer essa questão
- **Caminho lógico:** produtividade = 1 800 ÷ (3 máquinas × 4 h) = 150 peças por máquina por hora. Para a nova meta: 7 200 ÷ (5 h × 150) = máquinas necessárias.
- **O que ignorar:** a cor das peças e o turno da fábrica.
- **Como eliminar:** quatro vezes mais peças com **mais** tempo exige menos que 4 × 3 = 12 máquinas. Isso elimina 12 e 15. Como 9 dá menos que 7 200, o 9 também sai.
- **Conta mínima:** 7 200 ÷ 5 = 1 440 peças por hora; 1 440 ÷ 150 = 9,6, logo 10 máquinas.

### Questão
Em uma fábrica de peças plásticas, 3 máquinas idênticas, trabalhando juntas durante 4 horas, produzem 1 800 peças vermelhas. Para atender a um pedido urgente, a fábrica precisa produzir 7 200 peças em 5 horas, usando máquinas idênticas a essas e com o mesmo ritmo de produção.

O número mínimo de máquinas que devem ser usadas é
- a) 8
- b) 9
- c) 10
- d) 12
- e) 15

### Resolução em 3 minutos
1. Produtividade: 1 800 ÷ 12 = 150 peças por máquina por hora. ⏱ 15 s
2. Necessário por hora: 7 200 ÷ 5 = 1 440. ⏱ 10 s
3. 1 440 ÷ 150 = 9,6, logo 10 máquinas. ⏱ 15 s

**Gabarito: C**

### Resolução comentada
Peças são diretamente proporcionais ao número de máquinas e às horas: 1 800 = k · 3 · 4, logo k = 150. Para 7 200 = 150 · m · 5, m = 9,6. Como 9 máquinas não bastam, o mínimo é 10.

### Armadilha
Ignorar a mudança de tempo (12 máquinas), tratar o tempo como diretamente proporcional ao número de máquinas (15), ou arredondar 9,6 para baixo (9).

---

## Questão 30 (Revisão: P16 misturas + P11 variação percentual)

### Macetes antes de fazer essa questão
- **Caminho lógico:** agora o que se adiciona é **etanol**, então a âncora é a **gasolina**: 75% de 36 L = 27 L. Na mistura E40, a gasolina é 60%. Então o total = 27 ÷ 0,6 = 45 L, e é preciso adicionar 9 L de etanol.
- **O que ignorar:** a marca do carro e o preço do litro.
- **Como eliminar:** 5,4 L é (40% − 25%) × 36 e 14,4 L é 40% de 36, as duas contas erradas mais comuns. Com 9 L adicionados, o etanol vai de 9 L para 18 L, ou seja, dobra: +100%.
- **Conta mínima:** etanol inicial = 36 ÷ 4 = 9 L. Adicionando 9 L, ficam 18 L (+100%).

### Questão
Um carro de corrida de uma categoria experimental tem no tanque 36 litros de combustível E25 (25% de etanol e 75% de gasolina). Para um teste, a equipe precisa que o tanque tenha combustível E40 (40% de etanol), acrescentando apenas etanol puro.

A quantidade de etanol que deve ser acrescentada e o aumento percentual da quantidade de etanol no tanque são, respectivamente,
- a) 5,4 L e 15%.
- b) 5,4 L e 60%.
- c) 9 L e 15%.
- d) 14,4 L e 160%.
- e) 9 L e 100%.

### Resolução em 3 minutos
1. Âncora (gasolina): 0,75 × 36 = 27 L. ⏱ 15 s
2. 27 L = 60% do novo total, logo o total = 45 L. Adicionar: 45 − 36 = 9 L. ⏱ 25 s
3. Etanol: de 9 L para 18 L = +100%. ⏱ 10 s

**Gabarito: E**

### Resolução comentada
Inicialmente há 9 L de etanol e 27 L de gasolina. Na mistura final, os 27 L de gasolina correspondem a 60%, então o volume total é 27 ÷ 0,6 = 45 L e o etanol passa a ser 18 L. Foram acrescentados 9 L, e o etanol aumentou (18 − 9) ÷ 9 = 100%.

### Armadilha
Usar o etanol como âncora (ele muda, porque é o que está sendo adicionado), ou confundir a variação em pontos percentuais da concentração (de 25% para 40%, +15 pontos) com o aumento percentual da quantidade de etanol (+100%).

---

## Resumo da Lista 3

| Questão | Padrão | Gabarito |
|---|---|---|
| 21 | P21: cobrança por bloco | D |
| 22 | P22: probabilidade "pelo menos um" | C |
| 23 | P23: contagem por posição | E |
| 24 | P24: geometria com percentual | B |
| 25 | P25: máximo de quadrática | D |
| 26 | Revisão P1 + P5 | B |
| 27 | Revisão P6 + P8 | A |
| 28 | Revisão P4 + P12 | A |
| 29 | Revisão P9 + P5 | C |
| 30 | Revisão P16 + P11 | E |

- Padrões abordados nesta lista: **5 novos + 9 revisados**
- Padrões abordados no total: **25 de 25**
- **Restam: 0 padrões.** Todos os padrões do simulado foram cobertos.

## Como treinar a partir daqui
1. Refaça as 30 questões **cronometrando**, sem ler os macetes antes. Marque as que passaram de 3 minutos.
2. Para cada questão que passou de 3 minutos, releia só o bloco "Armadilha" e o padrão correspondente em `00-mapa-de-padroes.md`.
3. Volte ao simulado original e use o índice reverso do mapa: resolva as questões do mesmo padrão, aplicando o atalho.
