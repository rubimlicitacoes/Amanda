# Lista 1: padrões P1 a P10

Questões inéditas no estilo ENEM. Cada uma segue a lógica de resolução de um padrão do `00-mapa-de-padroes.md`.

---

## Questão 1 (Padrão P1: montar a expressão a partir do texto)

### Macetes antes de fazer essa questão

- **Caminho lógico:** os R$ 5,00 do desbloqueio já pagam os 10 primeiros minutos, então só os minutos acima de 10 custam a mais. Pense em t = 20, calcule o preço real e veja qual fórmula dá esse valor.
- **O que ignorar:** o contexto de patinete e mobilidade. Só importam R$ 5,00, 10 min e R$ 0,50.
- **Como eliminar alternativas:** a d) daria R$ 110 por 20 minutos, valor absurdo. Testando t = 20, só uma alternativa dá o valor certo.
- **Conta mínima:** não monte a expressão. Teste t = 20 (0,5 · 20 = 10).

### Questão

Um aplicativo de aluguel de patinetes elétricos cobra R$ 5,00 pelo desbloqueio, valor que já inclui os 10 primeiros minutos de uso. Cada minuto que passar disso custa R$ 0,50. Um usuário fez uma viagem de t minutos, com t > 10.

A expressão que fornece o valor P, em real, pago por essa viagem é

a) P = 0,5t + 5

b) P = 0,5t

c) P = 0,5t − 5

d) P = 5,5t

e) P = 0,5t + 10

### Resolução em 3 minutos

1. Pela história, com t = 20: 5 + 10 · 0,50 = 10. *(≈ 20 s)*
2. Com t = 20 nas alternativas: a = 15, b = 10, c = 5, d = 110, e = 20. *(≈ 30 s)*
3. Só a b) dá 10. *(≈ 5 s)*. **Total: ≈ 1 min.**

**Gabarito: B**

### Resolução comentada

P = 5 + 0,5 · (t − 10) = 5 + 0,5t − 5 = 0,5t. O fixo de R$ 5,00 é exatamente 10 min · R$ 0,50, então é como se todos os minutos custassem R$ 0,50.

### Armadilha

Montar "fixo + 0,5t" (alternativa a) e esquecer que os 10 primeiros minutos já estão no fixo. É o mesmo erro da Q64 da lista: escrever 60 + 1,20t em vez de 60 + 1,20 · (t − 80). Testar um número elimina esse erro em 30 s e evita perder tempo montando a fórmula.

---

## Questão 2 (Padrão P2: escolher o gráfico pela descrição)

### Macetes antes de fazer essa questão

- **Caminho lógico:** são 3 fases, então o gráfico tem 3 trechos. Na fase 1 nada muda (horizontal), na fase 2 o volume desce e na fase 3 sobe. Como 400 L/h é o dobro de 200 L/h, a subida é duas vezes mais inclinada que a descida e dura (1 000 − 200) ÷ 400 = 2 h, terminando às 8 h.
- **O que ignorar:** quem usa a caixa e o motivo. Só importam os horários e as vazões.
- **Como eliminar alternativas:** c) não tem o trecho horizontal inicial. d) não sobe. e) tem um salto vertical, que seria encher a caixa instantaneamente, impossível com vazão constante. b) termina às 10 h, o que exigiria vazão de 200 L/h.
- **Conta mínima:** uma divisão, 800 ÷ 400.

### Questão

Às 0 h, uma caixa-d'água de 1 000 L está cheia. Das 0 h às 2 h, não há consumo nem abastecimento. Às 2 h, uma bomba começa a retirar água com vazão constante até que, às 6 h, restam 200 L. Nesse instante a bomba é desligada e uma torneira passa a encher a caixa com vazão constante de 400 L/h, até que ela fique cheia novamente.

O esboço do gráfico do volume V (em L) em função do tempo t (em h) é formado por

a) trecho horizontal em 1 000 L de 0 h a 2 h; segmento decrescente até 200 L em t = 6 h; segmento crescente até 1 000 L em t = 8 h.

b) trecho horizontal em 1 000 L de 0 h a 2 h; segmento decrescente até 200 L em t = 6 h; segmento crescente até 1 000 L em t = 10 h.

c) segmento decrescente de 1 000 L em t = 0 até 200 L em t = 6 h; segmento crescente até 1 000 L em t = 8 h.

d) trecho horizontal em 1 000 L de 0 h a 2 h; segmento decrescente até 200 L em t = 6 h; trecho horizontal em 200 L de 6 h a 8 h.

e) trecho horizontal em 1 000 L de 0 h a 2 h; segmento decrescente até 200 L em t = 6 h; salto vertical até 1 000 L em t = 6 h e trecho horizontal até 8 h.

### Resolução em 3 minutos

1. Desenhe as fases: horizontal, desce, sobe. *(≈ 20 s)*
2. Elimine c, d e e pelo formato. *(≈ 20 s)*
3. 800 ÷ 400 = 2 h, então a subida termina às 8 h e a b) cai. *(≈ 20 s)*. **Total: ≈ 1 min.**

**Gabarito: A**

### Resolução comentada

A bomba retira 800 L em 4 h, ou seja, 200 L/h. A torneira repõe 800 L a 400 L/h, ou seja, em 2 h, de 6 h a 8 h. A subida é mais inclinada que a descida. Não há saltos, porque as vazões são finitas.

### Armadilha

Olhar os gráficos inteiros de uma vez. O rápido é checar uma fase por vez e eliminar. Nas questões da lista (Q25, Q43, Q63, Q83), o erro clássico é confundir o volume acumulado, que nunca desce enquanto só entra água, com a vazão, que pode zerar. Saltos verticais e degraus aparecem como distratores.

---

## Questão 3 (Padrão P3: porcentagens em sequência)

### Macetes antes de fazer essa questão

- **Caminho lógico:** preço por mL = preço ÷ volume. O novo preço por mL é o antigo × 1,20 ÷ 1,25.
- **O que ignorar:** marca, tamanho e valores absolutos (não são dados nem necessários).
- **Como eliminar alternativas:** o preço subiu menos que o volume, então o preço por mL caiu. Isso elimina c, d e e. Entre a) e b), o 5% é a subtração ingênua 25 − 20, um distrator clássico do ENEM.
- **Conta mínima:** 1,20 ÷ 1,25 = 120 ÷ 125 = 24 ÷ 25 = 96 ÷ 100.

### Questão

Um fabricante de detergente lançou um refil com 25% mais produto do que a embalagem tradicional. O preço do refil é 20% maior que o preço da embalagem tradicional.

Em relação ao preço por mililitro da embalagem tradicional, o preço por mililitro do refil é

a) 5% menor.

b) 4% menor.

c) igual.

d) 4% maior.

e) 5% maior.

### Resolução em 3 minutos

1. Fatores: preço × 1,20 e volume × 1,25. *(≈ 15 s)*
2. 1,20 ÷ 1,25 = 24 ÷ 25 = 0,96. *(≈ 30 s)*
3. 0,96 significa 4% menor. *(≈ 5 s)*. **Total: ≈ 50 s.**

**Gabarito: B**

### Resolução comentada

Seja o antigo preço P e o antigo volume V. O preço por mL antigo é P ÷ V. O novo é 1,2P ÷ 1,25V = 0,96 · (P ÷ V). A variação é −4%.

### Armadilha

Somar ou subtrair porcentagens (25 − 20 = 5%). É o mesmo erro das questões Q8 (+10% e −10% não se anulam: 1,1 · 0,9 = 0,99) e Q24 (18% ao semestre não é 36% ao ano: 1,18² ≈ 1,39) da lista. Sempre transforme em fator.

---

## Questão 4 (Padrão P4: projetar uma tendência)

### Macetes antes de fazer essa questão

- **Caminho lógico:** só importam a maior diferença entre anos consecutivos e o último valor (2024).
- **O que ignorar:** a queda de 2021 (não é aumento) e qualquer cálculo de média.
- **Como eliminar alternativas:** pense em centenas. As variações são +27, −11, +33, +24, +18, e a maior é +33. O resultado é 503 + 33 = 536 centenas. A e) soma mais que o dobro da maior variação, impossível.
- **Conta mínima:** trabalhe em centenas, sem os zeros.

### Questão

A tabela mostra o público pagante anual de um festival de música.

| Ano | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 |
|---|---|---|---|---|---|---|
| Público | 41 200 | 43 900 | 42 800 | 46 100 | 48 500 | 50 300 |

Suponha que o maior aumento anual absoluto observado na série se repita de 2024 para 2025.

O público pagante em 2025 seria igual a

a) 52 100.

b) 52 120.

c) 53 600.

d) 55 200.

e) 56 900.

### Resolução em 3 minutos

1. Diferenças consecutivas em centenas: 27, −11, 33, 24, 18. *(≈ 40 s)*
2. A maior é 33, ou seja, 3 300. *(≈ 5 s)*
3. 50 300 + 3 300 = 53 600. *(≈ 10 s)*. **Total: ≈ 1 min.**

**Gabarito: C**

### Resolução comentada

O maior aumento foi de 2021 para 2022: 46 100 − 42 800 = 3 300. Repetido a partir de 2024: 50 300 + 3 300 = 53 600. Os distratores: a) usa o último aumento (1 800); b) usa o aumento médio (9 100 ÷ 5 = 1 820); d) usa a diferença entre anos não consecutivos (46 100 − 41 200 = 4 900); e) soma o maior aumento duas vezes.

### Armadilha

Na Q77 da lista, o aluno costuma usar o maior valor do gráfico, ou a maior variação até o pico, em vez da maior variação entre anos consecutivos. Leia exatamente qual variação o enunciado manda repetir: maior, última ou média. Cada uma é uma alternativa diferente.

---

## Questão 5 (Padrão P5: ler gráfico/tabela e fazer uma conta curta)

### Macetes antes de fazer essa questão

- **Caminho lógico:** "pelo menos 4 dias" são as colunas 4, 5 e "6 ou 7", ou então 100% menos as colunas 1, 2 e 3. Depois multiplique por 0,8, porque a tabela se refere só aos 80% que usam transporte público.
- **O que ignorar:** a cidade, a forma da pesquisa e qualquer informação sobre quem não usa transporte.
- **Como eliminar alternativas:** o resultado tem que ser menor que a soma das colunas (55%), porque é uma fração de 80%. Isso elimina d) e e). Também tem que ser maior que 11%.
- **Conta mínima:** complementar 100 − (10 + 15 + 20) = 55. Depois 55 · 0,8 = 44 (55 · 8 = 440).

### Questão

Em uma pesquisa com moradores de uma cidade, 80% dos entrevistados afirmaram usar transporte público. A tabela mostra, entre esses usuários, quantos dias por semana eles usam o transporte.

| Dias por semana | 1 | 2 | 3 | 4 | 5 | 6 ou 7 |
|---|---|---|---|---|---|---|
| % dos usuários | 10% | 15% | 20% | 15% | 25% | 15% |

Que porcentagem do total de entrevistados representa aqueles que usam transporte público pelo menos 4 dias por semana?

a) 11%

b) 36%

c) 44%

d) 55%

e) 68,75%

### Resolução em 3 minutos

1. Complementar: 10 + 15 + 20 = 45, então 100 − 45 = 55% dos usuários. *(≈ 20 s)*
2. 55% de 80% = 0,55 · 0,8 = 0,44. *(≈ 20 s)*. **Total: ≈ 45 s.**

**Gabarito: C**

### Resolução comentada

Usam pelo menos 4 dias: 15 + 25 + 15 = 55% dos usuários. Como os usuários são 80% dos entrevistados: 0,55 · 0,80 = 0,44, ou seja, 44%. Os distratores: d) esquece o × 0,8; b) usa as colunas erradas (45 · 0,8 = 36); e) divide em vez de multiplicar (55 ÷ 0,8).

### Armadilha

Responder 55%, a porcentagem de uma parte, quando a pergunta é sobre o total. É exatamente a Q62 da lista (70% de 75% = 52,5%). Sempre sublinhe a expressão "do total de entrevistados".

---

## Questão 6 (Padrão P6: comparar opções)

### Macetes antes de fazer essa questão

- **Caminho lógico:** pense na lógica. Matrícula alta com mensalidade baixa só compensa a longo prazo. Ponto de empate entre B e A: B paga R$ 20 a mais por mês e economiza R$ 120 de matrícula, então empatam em 6 meses. Entre C e A: C economiza R$ 15 por mês e paga R$ 150 a mais de matrícula, então empatam em 10 meses.
- **O que ignorar:** os nomes e o tipo de treino.
- **Como eliminar alternativas:** para 5 meses (prazo curto), a melhor é a sem matrícula (B), o que elimina a), b) e as que não começam por B. Para 12 meses (prazo longo), a melhor é a de menor mensalidade (C).
- **Conta mínima:** só os dois pontos de empate (120 ÷ 20 e 150 ÷ 15), sem calcular os 6 totais.

### Questão

Três academias oferecem os seguintes planos:

- Academia A: matrícula de R$ 120,00 e mensalidade de R$ 90,00;
- Academia B: sem matrícula e mensalidade de R$ 110,00;
- Academia C: matrícula de R$ 270,00 e mensalidade de R$ 75,00.

Ana pretende treinar por 5 meses e Bruno, por 12 meses. Cada um quer gastar o mínimo possível no período.

Ana e Bruno devem escolher, respectivamente, as academias

a) A e A.

b) A e C.

c) B e A.

d) B e B.

e) B e C.

### Resolução em 3 minutos

1. Empate B × A: 120 ÷ 20 = 6 meses. Abaixo disso, B ganha. Ana (5) fica com B ou C. *(≈ 30 s)*
2. Empate C × A: 150 ÷ 15 = 10 meses. Acima disso, C ganha de A. Para 12 meses, B já perde de A, então Bruno fica com C. *(≈ 30 s)*
3. Para conferir Ana: C em 5 meses custa 270 + 375 = 645, mais que B (550). *(≈ 20 s)*. **Total: ≈ 1 min 20 s.**

**Gabarito: E**

### Resolução comentada

Para 5 meses: A = 120 + 450 = 570; B = 550; C = 270 + 375 = 645. Ana fica com B. Para 12 meses: A = 120 + 1 080 = 1 200; B = 1 320; C = 270 + 900 = 1 170. Bruno fica com C.

### Armadilha

Fazer as 6 contas completas sem antes pensar no ponto de empate. Na Q34 da lista (franquias de internet), ainda há outro erro: cobrar excedente sobre o consumo total em vez de só sobre o que passa da franquia. Calcule só o que difere entre as opções.

---

## Questão 7 (Padrão P7: manter o total constante)

### Macetes antes de fazer essa questão

- **Caminho lógico:** só a carne e os legumes importam. Os legumes custam 0,25 · 18 = R$ 4,50 e o aumento de 40% acrescenta R$ 1,80. A carne custa 0,2 · 45 = R$ 9,00. É preciso cortar R$ 1,80 de R$ 9,00.
- **O que ignorar:** o arroz, a embalagem e o total de R$ 18,00, que não muda.
- **Como eliminar alternativas:** e) só repete o aumento (40%). b) divide pelo custo total (1,80 ÷ 18). a) divide pelo preço do kg (1,80 ÷ 45).
- **Conta mínima:** 1,8 ÷ 9 = 0,2.

### Questão

Uma cozinheira monta marmitas com custo de R$ 18,00 cada, conforme o quadro.

| Item | Quantidade | Preço |
|---|---|---|
| Carne | 200 g | R$ 45,00 o kg |
| Arroz | 300 g | R$ 6,00 o kg |
| Legumes | 250 g | R$ 18,00 o kg |
| Embalagem | 1 unidade | R$ 2,70 |

O preço do quilograma dos legumes aumentará 40%, e os demais preços não mudarão. Ela quer manter o custo de cada marmita e as quantidades de arroz e de legumes, reduzindo apenas a quantidade de carne.

A redução percentual da quantidade de carne deve ser de

a) 4%.

b) 10%.

c) 18%.

d) 20%.

e) 40%.

### Resolução em 3 minutos

1. Aumento nos legumes: 0,25 kg · 18 = 4,50, e 40% de 4,50 = 1,80. *(≈ 30 s)*
2. Custo da carne: 0,2 kg · 45 = 9,00. *(≈ 15 s)*
3. 1,80 ÷ 9,00 = 20%. *(≈ 10 s)*. **Total: ≈ 1 min.**

**Gabarito: D**

### Resolução comentada

Os legumes passam de R$ 4,50 para R$ 6,30 (+R$ 1,80). Para manter R$ 18,00, a carne deve cair de R$ 9,00 para R$ 7,20. Como o preço por kg é o mesmo, a quantidade cai na mesma proporção: 7,20 ÷ 9,00 = 0,8, uma redução de 20% (de 200 g para 160 g).

### Armadilha

Dividir o aumento pelo custo total, e não pelo custo do item que será reduzido. A Q109 da lista é idêntica: R$ 1,50 a mais na batata-doce ÷ R$ 5,00 de frango = 30%. Nas questões Q16, Q74 e Q88, o "total que se mantém" é o lucro, o valor pago ou o gasto mensal.

---

## Questão 8 (Padrão P8: dobra a cada período)

### Macetes antes de fazer essa questão

- **Caminho lógico:** 3 h = 180 min, e 180 ÷ 20 = 9 duplicações. Inicial = final ÷ 2⁹ = final ÷ 512.
- **O que ignorar:** o tipo de microrganismo e as condições do experimento.
- **Como eliminar alternativas:** d) e e) dividem o final por 9 ou por 3, como se o crescimento fosse linear, então estão fora. Pela ordem de grandeza, 100 000 ÷ 500 ≈ 200.
- **Conta mínima:** 102 400 = 1 024 · 100, e 1 024 ÷ 512 = 2. Logo 2 · 100 = 200.

### Questão

Em um experimento, a população de uma levedura dobra a cada 20 minutos. Três horas após o início da observação, havia 102 400 células.

A quantidade inicial de células era

a) 100.

b) 200.

c) 400.

d) 11 378.

e) 34 133.

### Resolução em 3 minutos

1. Número de períodos: 180 ÷ 20 = 9. *(≈ 15 s)*
2. 2⁹ = 512. *(≈ 10 s)*
3. 102 400 ÷ 512 = 200 (pois 512 · 200 = 102 400). *(≈ 20 s)*. **Total: ≈ 45 s.**

**Gabarito: B**

### Resolução comentada

P(t) = P₀ · 2^(t ÷ 20). Com t = 180: 102 400 = P₀ · 2⁹ = 512 · P₀, logo P₀ = 200. Os distratores: a) usa 10 períodos; c) usa 8 períodos; d) e e) tratam o crescimento como linear.

### Armadilha

Errar o número de períodos por um (contar 8 ou 10). Na Q92 da lista: 2 h ÷ 0,25 h = 8 duplicações, então 189 440 ÷ 256 = 740. Faça sempre "tempo total ÷ período" antes de qualquer conta.

---

## Questão 9 (Padrão P9: função de 1º grau, taxa de variação)

### Macetes antes de fazer essa questão

- **Caminho lógico:** inclinação de A = (500 − 200) ÷ 10 = 30 L/min. Inclinação de B = (300 − 200) ÷ 20 = 5 L/min. B enche 6 vezes mais devagar, então recebe 450 ÷ 6.
- **O que ignorar:** o valor inicial de 200 L (ele não entra em variações) e quando o intervalo começa.
- **Como eliminar alternativas:** B enche mais devagar que A, então recebeu menos de 450 L, o que elimina e).
- **Conta mínima:** razão entre as inclinações, 5 ÷ 30 = 1 ÷ 6, e 450 ÷ 6 = 75.

### Questão

Dois tanques, A e B, começam a ser abastecidos no mesmo instante, ambos com 200 L. Os volumes de A e de B, em litro, em função do tempo t, em minuto, são representados no plano cartesiano por semirretas com origem no ponto (0; 200) que passam, respectivamente, pelos pontos P(10; 500) e Q(20; 300).

Em certo intervalo de tempo, o volume do tanque A aumentou 450 L. Nesse mesmo intervalo, o volume do tanque B aumentou, em litro,

a) 5.

b) 15.

c) 45.

d) 75.

e) 450.

### Resolução em 3 minutos

1. Inclinações: A = 300 ÷ 10 = 30; B = 100 ÷ 20 = 5. *(≈ 30 s)*
2. Tempo do intervalo: 450 ÷ 30 = 15 min. *(≈ 10 s)*
3. Aumento de B: 15 · 5 = 75 L. *(≈ 10 s)*. **Total: ≈ 50 s.**

**Gabarito: D**

### Resolução comentada

V_A = 200 + 30t e V_B = 200 + 5t. Um aumento de 450 L em A leva 15 min. Nesses 15 min, B recebe 5 · 15 = 75 L.

### Armadilha

Usar os valores de y (500 e 300) em vez das variações, ou seja, esquecer de subtrair o ponto inicial. A Q97 da lista tem exatamente essa estrutura. Na Q90, o mesmo erro vira usar −1 000 como inclinação.

---

## Questão 10 (Padrão P10: porcentagem ao contrário)

### Macetes antes de fazer essa questão

- **Caminho lógico:** "que equivale a R$ X" é o valor do **desconto**, não o preço final. Preço final = desconto · (100 − p) ÷ p. Depois some o frete.
- **O que ignorar:** nada além do texto de abertura. O frete importa.
- **Como eliminar alternativas:** ache o multiplicador de cada desconto: 25% → ×3; 20% → ×4; 30% → ×7/3; 40% → ×1,5; 10% → ×9. A loja 5 parece a mais barata (95 + 30), mas o produto custa 950.
- **Conta mínima:** 300 · 3 = 900; 210 · 4 = 840; 390 · 7/3 = 910; 540 · 1,5 = 810; 95 · 9 = 855.

### Questão

Uma pessoa pesquisou o preço de um mesmo produto em cinco lojas:

- Loja 1: 25% de desconto, que equivale a R$ 300,00, mais R$ 40,00 de frete;
- Loja 2: 20% de desconto, que equivale a R$ 210,00, sem frete;
- Loja 3: 30% de desconto, que equivale a R$ 390,00, mais R$ 25,00 de frete;
- Loja 4: 40% de desconto, que equivale a R$ 540,00, mais R$ 20,00 de frete;
- Loja 5: 10% de desconto, que equivale a R$ 95,00, mais R$ 30,00 de frete.

O produto foi comprado na loja que apresentou o menor preço total.

O produto foi comprado na loja

a) 1.

b) 2.

c) 3.

d) 4.

e) 5.

### Resolução em 3 minutos

1. Multiplicadores (100 − p) ÷ p: ×3, ×4, ×7/3, ×1,5, ×9. *(≈ 30 s)*
2. Preços finais: 900, 840, 910, 810, 855. *(≈ 40 s)*
3. Com frete: 940, 840, 935, 830, 885. O menor é o da loja 4. *(≈ 20 s)*. **Total: ≈ 1 min 30 s.**

**Gabarito: D**

### Resolução comentada

Loja 4: 40% equivale a 540, então o preço cheio é 540 ÷ 0,4 = 1 350. Pagando 60%: 810, mais 20 de frete = 830. A loja 2 (840) fica em segundo lugar, por pouco.

### Armadilha

Ler "equivale a R$ X" como preço já com desconto e escolher a loja 5 (95 + 30 = 125). É a Q9 da lista. Nas questões Q23, Q58 e Q94, o valor dado também é o resultado depois da porcentagem: divida pelo fator, não multiplique.

---

## Fim da Lista 1

Padrões cobertos: P1 a P10. **Faltam 16 padrões** (P11 a P26), nas listas 2 e 3.

| Questão | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Gabarito | B | A | B | C | C | E | D | B | D | D |
