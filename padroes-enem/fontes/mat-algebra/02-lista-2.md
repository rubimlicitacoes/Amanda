# Lista 2: padrões P11 a P20

Questões inéditas no estilo ENEM. Cada uma segue a lógica de resolução de um padrão do `00-mapa-de-padroes.md`.

---

## Questão 11 (Padrão P11: comparar médias simples)

### Macetes antes de fazer essa questão

- **Caminho lógico:** todos os vendedores têm 4 semanas, então a maior média é a maior soma. Mais rápido ainda: some as diferenças de cada valor em relação a 50.
- **O que ignorar:** a divisão por 4 e qualquer valor isolado alto (o 64 de C, por exemplo).
- **Como eliminar alternativas:** E parece "regular", mas regularidade não é média alta. Pelas diferenças em relação a 50: A = 0, B = −3, C = +2, D = +3, E = +1.
- **Conta mínima:** diferenças em relação a 50 (números de um ou dois dígitos).

### Questão

Uma loja premiará o vendedor com a maior média semanal de vendas em um mês. A tabela mostra as vendas, em unidade, de cada vendedor nas quatro semanas.

| Vendedor | Semana 1 | Semana 2 | Semana 3 | Semana 4 |
|---|---|---|---|---|
| A | 52 | 48 | 61 | 39 |
| B | 45 | 55 | 50 | 47 |
| C | 64 | 35 | 58 | 45 |
| D | 41 | 62 | 44 | 56 |
| E | 50 | 50 | 52 | 49 |

O vendedor premiado será o

a) A.

b) B.

c) C.

d) D.

e) E.

### Resolução em 3 minutos

1. Diferenças em relação a 50: A: +2 −2 +11 −11 = 0; B: −5 +5 +0 −3 = −3. *(≈ 30 s)*
2. C: +14 −15 +8 −5 = +2; D: −9 +12 −6 +6 = +3; E: 0 + 0 + 2 − 1 = +1. *(≈ 40 s)*
3. A maior soma de diferenças é a de D. *(≈ 5 s)*. **Total: ≈ 1 min 15 s.**

**Gabarito: D**

### Resolução comentada

Somas: A = 200; B = 197; C = 202; D = 203; E = 201. Médias: 50; 49,25; 50,5; 50,75; 50,25. Maior média: D.

### Armadilha

Calcular cada média com vírgula, ou escolher quem tem o maior valor isolado (C, com 64). Nas questões Q6, Q37 e Q57 da lista, comparar somas resolve. Se forem números grandes (como 200, 220, 240), use as diferenças em relação a um valor de referência.

---

## Questão 12 (Padrão P12: valor que falta para a média)

### Macetes antes de fazer essa questão

- **Caminho lógico:** média ponderada 7,0 com pesos somando 10 exige 70 pontos ponderados. Já há 6 + 15 + 18 = 39, então faltam 31 no peso 4.
- **O que ignorar:** a ideia de "média simples". Os pesos mudam tudo.
- **Como eliminar alternativas:** a) seria verdade só se as três primeiras notas tivessem média 7, mas duas estão abaixo de 7 e com peso maior. Logo a nota precisa ser maior que 7.
- **Conta mínima:** diferenças ponderadas em relação a 7: (−1) · 1 + (+0,5) · 2 + (−1) · 3 = −3. A quarta nota precisa compensar +3 com peso 4, então 7 + 0,75 = 7,75.

### Questão

Em um concurso, a nota final é a média ponderada de quatro provas, com pesos 1, 2, 3 e 4, respectivamente. Para ser aprovado, o candidato precisa de nota final de, no mínimo, 7,0. Um candidato obteve 6,0, 7,5 e 6,0 nas três primeiras provas.

A nota mínima que esse candidato precisa obter na quarta prova é

a) 7,00.

b) 7,75.

c) 8,00.

d) 8,50.

e) 9,00.

### Resolução em 3 minutos

1. Diferenças ponderadas em relação a 7: −1 + 1 − 3 = −3. *(≈ 30 s)*
2. Compensar 3 com peso 4: 3 ÷ 4 = 0,75. *(≈ 10 s)*
3. 7 + 0,75 = 7,75. *(≈ 5 s)*. **Total: ≈ 45 s.**

**Gabarito: B**

### Resolução comentada

(1 · 6 + 2 · 7,5 + 3 · 6 + 4x) ÷ 10 ≥ 7, então 39 + 4x ≥ 70, então 4x ≥ 31, então x ≥ 7,75.

### Armadilha

Fazer média simples: 4 · 7 − (6 + 7,5 + 6) = 8,5 (alternativa d). Na Q69 da lista, os pesos são porcentagens (20%, 10%, 30%, 40%) e funcionam do mesmo jeito. Nas questões Q82 e Q95, primeiro calcule a média e só depois aplique o "+30%" ou o "+20%".

---

## Questão 13 (Padrão P13: parábola, máximo ou mínimo)

### Macetes antes de fazer essa questão

- **Caminho lógico:** custo = 40x + 20y = 4 800, com x sendo o lado com a frente cara. Com orçamento fixo, a área x · y é máxima quando se gasta metade do orçamento em cada parcela: 40x = 2 400 e 20y = 2 400.
- **O que ignorar:** o tipo de criação e o tipo de tela.
- **Como eliminar alternativas:** e) seria um quadrado de 120 m, que custaria 7 200, fora do orçamento. c) é o quadrado que cabe no orçamento (60x = 4 800, x = 80), mas o quadrado não é o máximo quando os preços são diferentes.
- **Conta mínima:** 2 400 ÷ 40 = 60; 2 400 ÷ 20 = 120; 60 · 120 = 7 200.

### Questão

Um sitiante vai cercar uma área retangular de lados x e y, em metro. Em um dos lados de comprimento x, voltado para a estrada, usará uma tela que custa R$ 30,00 o metro. Nos outros três lados, usará uma tela que custa R$ 10,00 o metro. Ele dispõe de R$ 4 800,00 e quer a maior área possível.

A maior área, em metro quadrado, que ele pode cercar é

a) 3 600.

b) 5 760.

c) 6 400.

d) 7 200.

e) 14 400.

### Resolução em 3 minutos

1. Custo: 30x + 10x + 10y + 10y = 40x + 20y = 4 800. *(≈ 30 s)*
2. Metade do orçamento em cada parcela: x = 60, y = 120. *(≈ 20 s)*
3. Área = 7 200. *(≈ 5 s)*. **Total: ≈ 1 min.**

**Gabarito: D**

### Resolução comentada

y = (4 800 − 40x) ÷ 20 = 240 − 2x. Área A = x · (240 − 2x) = −2x² + 240x. O vértice é x = −240 ÷ (2 · (−2)) = 60, então y = 120 e A = 7 200 m².

### Armadilha

Supor que o quadrado sempre dá a área máxima (alternativa c). Isso só vale quando todos os lados custam o mesmo. A Q60 da lista é idêntica: 40L + 30C = 6 000, então 40L = 3 000 e 30C = 3 000, dando L = 75 e C = 100. Nas questões Q21, Q61 e Q75, use x do vértice = −b ÷ 2a e substitua.

---

## Questão 14 (Padrão P14: parábola, raízes e equação)

### Macetes antes de fazer essa questão

- **Caminho lógico:** com origem no centro do vão, o arco tem raízes −20 e 20 e vértice (0; 8). Então y = 8 · (1 − (x ÷ 20)²). O ponto a 5 m de um pé está a 15 m do centro.
- **O que ignorar:** a largura da pista e o material da ponte.
- **Como eliminar alternativas:** a 5 m do pé, a altura não é proporcional (5 ÷ 20 · 8 = 2), porque a parábola sobe rápido perto do pé. Logo a) cai. O ponto está mais perto do pé que do centro, então a altura é menor que a metade de 8, e d) e e) caem.
- **Conta mínima:** (15 ÷ 20)² = (3 ÷ 4)² = 9 ÷ 16. Então 8 · 7 ÷ 16 = 3,5.

### Questão

Uma ponte tem um arco em forma de parábola cujo vão, medido no nível da água, é de 40 m. O ponto mais alto do arco está 8 m acima do nível da água, exatamente no meio do vão. Uma placa será fixada no arco, em um ponto situado, na horizontal, a 5 m de um dos pés do arco.

A altura, em metro, desse ponto do arco em relação ao nível da água é

a) 2,0.

b) 3,5.

c) 4,0.

d) 6,0.

e) 7,5.

### Resolução em 3 minutos

1. Coloque a origem no centro: raízes ±20, vértice (0; 8). *(≈ 20 s)*
2. y = 8 · (1 − (x ÷ 20)²), com x = 15. *(≈ 20 s)*
3. 8 · (1 − 9 ÷ 16) = 8 · 7 ÷ 16 = 3,5. *(≈ 20 s)*. **Total: ≈ 1 min.**

**Gabarito: B**

### Resolução comentada

Na forma fatorada: y = a · (x − 20) · (x + 20). No vértice, 8 = a · (−20) · 20, então a = −1 ÷ 50. Em x = 15: y = −(1 ÷ 50) · (−5) · 35 = 175 ÷ 50 = 3,5 m.

### Armadilha

Montar y = ax² + bx + c com três incógnitas e resolver um sistema, o que leva mais de 4 minutos. Com as raízes conhecidas, use a forma fatorada: é a Q41 da lista (raízes ±5, vértice 10, a = −10 ÷ 25 = −2/5). Na Q45, resolva a equação do 2º grau e descarte a raiz que não cabe no domínio (t ≥ 100).

---

## Questão 15 (Padrão P15: fórmula com potências)

### Macetes antes de fazer essa questão

- **Caminho lógico:** multiplique só os fatores de mudança, cada um com seu expoente. Raio ×2 no numerador com expoente 4 dá ×16. ΔP ×½ no numerador dá ×½. L ×3 no denominador dá ÷3.
- **O que ignorar:** k, a viscosidade e o contexto médico. O que não muda vira 1.
- **Como eliminar alternativas:** o raio domina (×16), então o resultado é maior que 1. Isso elimina a), que vem de usar r² em vez de r⁴.
- **Conta mínima:** 16 · ½ ÷ 3 = 8 ÷ 3.

### Questão

A vazão Q de um líquido em um tubo cilíndrico é dada por Q = k · r⁴ · ΔP ÷ L, em que k é uma constante, r é o raio interno do tubo, ΔP é a diferença de pressão entre as extremidades e L é o comprimento do tubo.

Um tubo será substituído por outro com o dobro do raio e o triplo do comprimento, e a diferença de pressão será reduzida à metade. Sejam Q₁ a vazão no tubo antigo e Q₂ a vazão no tubo novo.

A relação entre Q₂ e Q₁ é

a) Q₂ = (2/3) · Q₁

b) Q₂ = (4/3) · Q₁

c) Q₂ = (8/3) · Q₁

d) Q₂ = (16/3) · Q₁

e) Q₂ = 24 · Q₁

### Resolução em 3 minutos

1. Fatores: r → 2⁴ = 16; ΔP → ½; L → ÷3. *(≈ 30 s)*
2. 16 · ½ ÷ 3 = 8/3. *(≈ 15 s)*. **Total: ≈ 45 s.**

**Gabarito: C**

### Resolução comentada

Q₂ = k · (2r)⁴ · (ΔP ÷ 2) ÷ (3L) = k · 16r⁴ · ΔP ÷ (2 · 3L) = (16 ÷ 6) · Q₁ = (8/3) · Q₁. Os distratores: a) usa r²; b) usa r³; d) esquece o ΔP; e) multiplica por 3 em vez de dividir.

### Armadilha

Substituir a fórmula inteira com letras e expandir. Na Q39 da lista, há 4 fatores (4 · 3⁴ · 3³ ÷ 9 = 972): monte o produto dos fatores de mudança de uma vez. Na Q20 (pirâmide), volume ∝ h³. Na Q73 (pizzas), área ∝ d².

---

## Questão 16 (Padrão P16: grandezas proporcionais)

### Macetes antes de fazer essa questão

- **Caminho lógico:** número de impressoras = 4 · (mais folhetos) · (menos dias) · (mais horas por dia). Cada fator entra a favor ou contra: mais folhetos exigem mais máquinas; menos dias exigem mais máquinas; mais horas por dia exigem menos máquinas.
- **O que ignorar:** o tipo de folheto e a gráfica.
- **Como eliminar alternativas:** só pelos folhetos, já seriam 4 · 1,5 = 6. Como os dias diminuem bastante e as horas aumentam pouco, o resultado é maior que 6. Isso elimina a), b) e c).
- **Conta mínima:** 4 · (90/60) · (5/3) · (8/10) = 4 · 3/2 · 5/3 · 4/5. Simplificando: 4 · 2 = 8.

### Questão

Uma gráfica imprime 60 000 folhetos em 5 dias usando 4 impressoras iguais, que funcionam 8 horas por dia. Ela recebeu uma encomenda de 90 000 folhetos, que deve ser entregue em 3 dias, com as impressoras funcionando 10 horas por dia.

O número mínimo de impressoras iguais às anteriores necessário para essa encomenda é

a) 3.

b) 5.

c) 6.

d) 7.

e) 8.

### Resolução em 3 minutos

1. Monte os fatores: 4 · (90/60) · (5/3) · (8/10). *(≈ 40 s)*
2. Simplifique em cruz: 4 · 3/2 · 5/3 · 4/5 = 4 · 2 = 8. *(≈ 30 s)*. **Total: ≈ 1 min 10 s.**

**Gabarito: E**

### Resolução comentada

Produção por impressora por hora: 60 000 ÷ (4 · 5 · 8) = 375 folhetos. Para 90 000 folhetos em 3 · 10 = 30 horas: 90 000 ÷ 30 = 3 000 folhetos por hora, e 3 000 ÷ 375 = 8 impressoras.

### Armadilha

Inverter a relação dos dias (menos dias exige **mais** máquinas). Quem inverte chega a 2,88, ou seja, alternativa a). Na Q66 da lista, calcule o trabalho total (dias · horas · máquinas · hectares por hora) e divida. Na Q18, vazão = volume ÷ tempo, sem regra de três.

---

## Questão 17 (Padrão P17: equação ou sistema de 1º grau montado do texto)

### Macetes antes de fazer essa questão

- **Caminho lógico:** cada bolsista novo também entra no total de alunos, então a exigência de 10% cresce junto. Monte: 19 + x ≥ 0,1 · (760 + x).
- **O que ignorar:** o nome da lei e o tipo de bolsa.
- **Como eliminar alternativas:** a) (76 − 19 = 57) ignora que o total muda. e) é só 10% de 760. Teste 63 e 64.
- **Conta mínima:** 19 + x ≥ 76 + 0,1x, então 0,9x ≥ 57, então x ≥ 63,3. Arredonde para cima: 64.

### Questão

Uma escola tem 760 alunos, dos quais 19 são bolsistas. Uma nova regra exige que pelo menos 10% dos alunos da escola sejam bolsistas. Para cumprir a regra, a escola matriculará apenas novos alunos bolsistas.

O número mínimo de novos alunos bolsistas que a escola deverá matricular é

a) 57.

b) 58.

c) 63.

d) 64.

e) 76.

### Resolução em 3 minutos

1. Monte 19 + x ≥ 0,1 · (760 + x). *(≈ 30 s)*
2. 0,9x ≥ 57, então x ≥ 63,3. *(≈ 30 s)*
3. Arredonde para cima: 64. *(≈ 5 s)*. **Total: ≈ 1 min 5 s.**

**Gabarito: D**

### Resolução comentada

Com x = 64: total 824, 10% = 82,4, bolsistas 83, cumpre. Com x = 63: total 823, 10% = 82,3, bolsistas 82, não cumpre. Mínimo: 64.

### Armadilha

Esquecer que a base (o total de alunos) cresce com as novas matrículas. É exatamente a Q44 da lista (gabarito 53, não 50). Segunda armadilha: arredondar 63,3 para baixo. Em "mínimo de pessoas", o resultado com vírgula sempre sobe.

---

## Questão 18 (Padrão P18: soma de PA)

### Macetes antes de fazer essa questão

- **Caminho lógico:** soma = (primeiro + último) · n ÷ 2, então 1 040 = 160 · n ÷ 2 = 80n e n = 13. Razão = (140 − 20) ÷ (13 − 1) = 120 ÷ 12 = 10.
- **O que ignorar:** a finalidade da poupança.
- **Como eliminar alternativas:** a razão precisa dividir 120 em um número inteiro de intervalos. b) (9,23) vem de dividir por 13 intervalos em vez de 12. e) é o próprio n.
- **Conta mínima:** 1 040 ÷ 80 = 13.

### Questão

Uma pessoa decidiu poupar dinheiro da seguinte maneira: no primeiro mês, guardou R$ 20,00. Em cada mês seguinte, guardou r reais a mais do que no mês anterior. No último mês, guardou R$ 140,00, completando um total de R$ 1 040,00.

O valor de r, em real, é

a) 8.

b) 9,23.

c) 10.

d) 12.

e) 13.

### Resolução em 3 minutos

1. 1 040 = (20 + 140) · n ÷ 2 = 80n, então n = 13. *(≈ 30 s)*
2. r = 120 ÷ 12 = 10. *(≈ 15 s)*. **Total: ≈ 45 s.**

**Gabarito: C**

### Resolução comentada

PA com a₁ = 20, aₙ = 140 e Sₙ = 1 040. Da fórmula da soma, n = 13. Do termo geral, 140 = 20 + 12r, então r = 10.

### Armadilha

Dividir a diferença total pelo número de termos (13) em vez do número de intervalos (12). É a mesma estrutura das questões Q7 e Q53 da lista. Nas questões Q4 e Q26 (1 + 2 + … + n), use n · (n + 1) ÷ 2 e estime: 150 · 151 ÷ 2 ≈ 11 300, que fica mais perto de 12 000.

---

## Questão 19 (Padrão P19: juros compostos, levar tudo para a mesma data)

### Macetes antes de fazer essa questão

- **Caminho lógico:** valor à vista = cada parcela trazida para hoje. Primeira parcela: 1 060 ÷ 1,06. Segunda: 1 123,60 ÷ 1,06².
- **O que ignorar:** o tipo de produto e a "nota fiscal".
- **Como eliminar alternativas:** à vista tem que ser menos que a soma das parcelas (2 183,60), o que elimina e). Os números são "redondos": 1 060 = 1 000 · 1,06 e 1 123,60 = 1 000 · 1,1236 = 1 000 · 1,06².
- **Conta mínima:** reconheça 1,06² = 1,1236 e não faça divisão longa.

### Questão

Uma televisão pode ser paga em duas parcelas: R$ 1 060,00 um mês após a compra e R$ 1 123,60 dois meses após a compra. A loja informa que essas parcelas correspondem a um financiamento do valor à vista com juros compostos de 6% ao mês.

O valor à vista da televisão, em real, é

a) 2 000,00.

b) 2 052,58.

c) 2 060,00.

d) 2 120,00.

e) 2 183,60.

### Resolução em 3 minutos

1. 1 060 ÷ 1,06 = 1 000. *(≈ 15 s)*
2. 1 123,60 ÷ 1,1236 = 1 000 (pois 1,06² = 1,1236). *(≈ 30 s)*
3. Soma: 2 000. *(≈ 5 s)*. **Total: ≈ 50 s.**

**Gabarito: A**

### Resolução comentada

VP = 1 060 ÷ 1,06 + 1 123,60 ÷ 1,06² = 1 000 + 1 000 = 2 000. Os distratores: c) desconta a segunda parcela por só um mês (1 123,60 ÷ 1,06 = 1 060); b) tira 6% da soma; d) dobra a primeira parcela; e) é a soma sem desconto.

### Armadilha

Descontar todas as parcelas por um só período, ou aplicar porcentagem sobre a soma. Na Q5 da lista: 202 ÷ 1,01 = 200 e 204,02 ÷ 1,0201 = 200. Na Q104, compare as opções descontando cada prestação por (1,1)^n, com n em semestres.

---

## Questão 20 (Padrão P20: contagem)

### Macetes antes de fazer essa questão

- **Caminho lógico:** com 5 algarismos distintos (1, 3, 4, 6, 8) há 5! = 120 códigos, e cada primeiro algarismo inicia um bloco de 4! = 24. Antes do 6: blocos do 1, do 3 e do 4, ou seja, 72. Dentro do 6, cada segundo algarismo inicia um bloco de 3! = 6.
- **O que ignorar:** a história do sorteio. Só o código 64 381 importa.
- **Como eliminar alternativas:** a posição está entre 85 e 90, então é preciso contar o fim com cuidado. Liste os últimos códigos à mão.
- **Conta mínima:** 72 + 6 + 6 = 84; depois 641xx (2 códigos) e 64 318, 64 381.

### Questão

Em um sorteio, cada um dos 120 inscritos recebeu um código diferente de cinco algarismos, formado pelos algarismos 1, 3, 4, 6 e 8, sem repetição. Os códigos foram listados em ordem crescente para definir a ordem de chamada dos inscritos.

A posição de chamada do inscrito com o código 64 381 é

a) 86.

b) 87.

c) 88.

d) 89.

e) 90.

### Resolução em 3 minutos

1. Começam com 1, 3 ou 4: 3 · 24 = 72. *(≈ 20 s)*
2. Começam com 61 ou 63: 2 · 6 = 12, total 84. *(≈ 20 s)*
3. Começam com 64: 64 138 (85), 64 183 (86), 64 318 (87), 64 381 (88). *(≈ 40 s)*. **Total: ≈ 1 min 20 s.**

**Gabarito: C**

### Resolução comentada

A contagem em blocos usa fatoriais decrescentes: 4! para o primeiro algarismo, 3! para o segundo, 2! para o terceiro. Os últimos 4 a 6 códigos, liste-os à mão para não errar por um.

### Armadilha

Errar por um no final (marcar 87 ou 89). É a Q19 da lista (gabarito 89). Nas outras questões de contagem: Q54 (jogos de ida e volta = n · (n − 1) = 380, menos os empates) e Q86 (7 pessoas em 9 lugares = 9! ÷ 2!).

---

## Fim da Lista 2

Padrões cobertos: P11 a P20. **Faltam 6 padrões** (P21 a P26), na lista 3.

| Questão | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|---|---|---|---|---|---|---|---|---|---|---|
| Gabarito | D | B | D | B | C | E | D | C | A | C |
