# Lista 3: 10 questões inéditas (padrões P21 a P25 + revisão integrada)

> As questões 21 a 25 fecham os últimos 5 padrões. As questões 26 a 30 são de **revisão integrada**: cada uma combina dois padrões, como o ENEM costuma fazer. Meta: no máximo 3 minutos por questão.

---

## Questão 21 (Padrão P21: Inequação de decisão)

### Macetes antes de fazer essa questão
- **Caminho lógico:** a moto compensa quando o tempo dela é menor: 10/v_moto < 15/v_carro, ou seja, **v_moto > (2/3)·v_carro**. Transforme isso num limite por dia: calcule 2/3 da velocidade do carro e veja se a moto passa desse valor.
- **Pode ignorar:** "aplicativo", "entregas", "trânsito".
- **Elimine assim:** comparar velocidades diretamente não serve, porque o carro é sempre mais rápido mas faz um percurso maior. Já na segunda-feira a moto ganha (24 > 20), o que elimina c) e d).
- **Conta mínima:** 2/3 de 30, 45, 36, 60, 24 e 50 são 20, 30, 24, 40, 16 e 33,3. Basta dividir por 3 e dobrar.

### Questão
Um entregador pode fazer seu trajeto diário de duas maneiras: de carro, pela avenida principal, percorrendo 15 km, ou de motocicleta, por um atalho de 10 km. O quadro mostra as velocidades médias de cada veículo, em km/h, em cada dia da semana.

| Dia | Carro (km/h) | Moto (km/h) |
|---|---|---|
| Segunda | 30 | 24 |
| Terça | 45 | 27 |
| Quarta | 36 | 25 |
| Quinta | 60 | 36 |
| Sexta | 24 | 15 |
| Sábado | 50 | 35 |

Para gastar menos tempo no trajeto, os dias em que ele deve usar a moto são:

a) segunda, quarta e sábado.

b) segunda, terça e sexta.

c) terça, quinta e sexta.

d) quarta, quinta e sábado.

e) segunda, quarta e sexta.

### Resolução em 3 minutos
1. Monte o limite: a moto ganha quando v_moto > (2/3)·v_carro. (≈ 25 s)
2. Calcule 2/3 da velocidade do carro em cada dia e compare com a moto:
   - Segunda: limite 20, moto 24, moto ganha.
   - Terça: limite 30, moto 27, carro ganha.
   - Quarta: limite 24, moto 25, moto ganha.
   - Quinta: limite 40, moto 36, carro ganha.
   - Sexta: limite 16, moto 15, carro ganha.
   - Sábado: limite 33,3, moto 35, moto ganha.
   (≈ 50 s)
3. A moto ganha na segunda, na quarta e no sábado. (≈ 5 s)

Tempo total: ≈ 1 min 20 s.

**Gabarito: A**

### Resolução comentada
Tempo de carro = 15/v_c e tempo de moto = 10/v_m. A moto é mais rápida quando 10/v_m < 15/v_c, ou seja, quando v_m > 10·v_c/15 = (2/3)·v_c. Isso acontece na segunda, na quarta e no sábado.

### Armadilha
Calcular 12 tempos (6 dias × 2 veículos) em minutos em vez de um único limite. A sexta-feira é a isca da alternativa e): a diferença é pequena (15 contra 16).

---

## Questão 22 (Padrão P22: Contagem em figura → razão)

### Macetes antes de fazer essa questão
- **Caminho lógico:** conte só as poltronas escuras (■), que são o grupo menor. Linha por linha: 2, 2, 3, 2, 1, 4, total 14. O total de poltronas é 6 × 8 = 48, então as livres são 48 − 14 = 34. A razão pedida é 14/34 = 7/17.
- **Pode ignorar:** "teatro", "setor", "palco".
- **Elimine assim:** a pergunta é **reservadas ÷ livres**, e não reservadas ÷ total. Isso elimina a), que usa 48 no denominador, e as invertidas d) e e).
- **Conta mínima:** some as escuras por linha; não conte as livres uma a uma.

### Questão
A figura mostra o mapa de poltronas de um setor de um teatro, com 6 fileiras de 8 poltronas. As poltronas escuras (■) já estão reservadas, e as claras (□) estão livres.

```
            PALCO
Fileira 1:  ■ □ □ ■ □ □ □ □
Fileira 2:  □ □ ■ □ □ ■ □ □
Fileira 3:  ■ □ □ □ ■ □ □ ■
Fileira 4:  □ ■ □ □ □ □ ■ □
Fileira 5:  □ □ □ ■ □ □ □ □
Fileira 6:  ■ □ ■ □ □ ■ □ ■
```

A razão entre o número de poltronas reservadas e o número de poltronas livres desse setor é:

a) 7/24

b) 7/17

c) 17/24

d) 17/7

e) 24/7

### Resolução em 3 minutos
1. Leia a pergunta: é reservadas ÷ livres. (≈ 10 s)
2. Conte as escuras por fileira: 2 + 2 + 3 + 2 + 1 + 4 = 14. (≈ 30 s)
3. Calcule as livres: 48 − 14 = 34. A razão é 14/34 = 7/17. (≈ 10 s)

Tempo total: ≈ 55 s.

**Gabarito: B**

### Resolução comentada
Total = 6 × 8 = 48 poltronas, sendo 14 reservadas e 34 livres. Razão = 14/34 = 7/17.

### Armadilha
Dividir pelo total (14/48 = 7/24) ou inverter a razão (17/7). Contar as 34 livres uma a uma também desperdiça tempo e aumenta a chance de erro.

---

## Questão 23 (Padrão P23: Brinde, uma única operação)

### Macetes antes de fazer essa questão
- **Caminho lógico:** escreva 51,9 como 51,90 e faça 52,07 − 51,90 = 0,17.
- **Pode ignorar:** todo o contexto da competição.
- **Elimine assim:** a diferença tem que ser menor que 1 s, já que 52,07 e 51,90 diferem só nos centésimos e décimos. Isso elimina e).
- **Conta mínima:** de 51,90 até 52,00 faltam 0,10, e de 52,00 até 52,07 faltam mais 0,07. Total: 0,17.

### Questão
Numa competição de natação, o recorde de uma prova era de 52,07 segundos. Uma atleta brasileira completou a prova em 51,9 segundos e estabeleceu o novo recorde.

A diferença, em segundo, entre o recorde anterior e o novo é:

a) 0,07

b) 0,17

c) 0,83

d) 0,98

e) 1,17

### Resolução em 3 minutos
1. Iguale as casas decimais: 51,9 = 51,90. (≈ 5 s)
2. Subtraia: 52,07 − 51,90 = 0,17. (≈ 10 s)

Tempo total: ≈ 20 s.

**Gabarito: B**

### Resolução comentada
52,07 − 51,90 = 0,17 s.

### Armadilha
Ler 51,9 como 51,09 e calcular 0,98 (alternativa d). Questão-brinde costuma ter exatamente essa isca de casa decimal: confira uma vez e siga em frente.

---

## Questão 24 (Padrão P24: MDC)

### Macetes antes de fazer essa questão
- **Caminho lógico:** simplifique a fração 252/180 até o fim: ÷4 dá 63/45, ÷9 dá 7/5. O 7 e o 5 já são o **número de kits** de cada tipo. Total: 7 + 5 = 12 kits.
- **Pode ignorar:** "literatura", "ciências", "biblioteca".
- **Elimine assim:** o MDC (36) é o número de livros **por kit**, não o número de kits. A alternativa d) é a isca.
- **Conta mínima:** não precisa calcular o MDC; basta simplificar a fração.

### Questão
Uma biblioteca escolar recebeu 252 livros de literatura e 180 livros de ciências para montar kits destinados às salas de aula, seguindo estes critérios:

1) cada kit terá livros de um único tipo;
2) todos os kits terão a mesma quantidade de livros;
3) todos os livros serão distribuídos, sem sobras.

O número mínimo de kits que podem ser montados é:

a) 5

b) 7

c) 12

d) 36

e) 72

### Resolução em 3 minutos
1. Leia a pergunta: "mínimo de kits" significa o maior kit possível, ou seja, o MDC. (≈ 10 s)
2. Simplifique 252/180 até 7/5. (≈ 20 s)
3. Some: 7 + 5 = 12 kits. (≈ 5 s)

Tempo total: ≈ 40 s.

**Gabarito: C**

### Resolução comentada
252 = 2² · 3² · 7 e 180 = 2² · 3² · 5, então mdc = 2² · 3² = 36. Kits de literatura: 252 ÷ 36 = 7. Kits de ciências: 180 ÷ 36 = 5. Total: 12 kits.

### Armadilha
Responder com o MDC (36), que é o tamanho de cada kit, e não o número de kits. Ou marcar só uma das parcelas, 7 ou 5.

---

## Questão 25 (Padrão P25: Fórmula pronta)

### Macetes antes de fazer essa questão
- **Caminho lógico:** primeiro elimine a raiz elevando os dois lados ao quadrado: 2,0² = 4. Depois use a altura **em cm** (180): 4 = 180·m ÷ 3 600 = m ÷ 20, logo m = 80 kg.
- **Pode ignorar:** "Mosteller", "dosagem de quimioterápicos".
- **Elimine assim:** uma massa adulta de 1,80 m fica entre 50 e 120 kg, o que elimina e) 144. Esquecer de elevar ao quadrado leva a 40 (alternativa a), uma massa baixa demais para um adulto de 1,80 m.
- **Conta mínima:** 180 ÷ 3 600 = 1/20. Então a fórmula vira SC² = m ÷ 20.

### Questão
A superfície corporal (SC) de uma pessoa, usada no cálculo da dosagem de alguns medicamentos, pode ser estimada pela fórmula de Mosteller:

SC = √( altura(cm) × massa(kg) ÷ 3 600 )

com SC em metro quadrado. Um paciente tem 1,80 m de altura e superfície corporal de 2,0 m².

A massa corporal desse paciente, em quilograma, é:

a) 40

b) 72

c) 80

d) 90

e) 144

### Resolução em 3 minutos
1. Eleve ao quadrado: SC² = 4. (≈ 10 s)
2. Converta a altura: 1,80 m = 180 cm. A fórmula vira 4 = 180·m ÷ 3 600 = m ÷ 20. (≈ 20 s)
3. Isole: m = 80 kg. (≈ 5 s)

Tempo total: ≈ 40 s.

**Gabarito: C**

### Resolução comentada
2,0 = √(180·m ÷ 3 600). Elevando ao quadrado: 4 = 180m ÷ 3 600, logo 180m = 14 400 e m = 80 kg.

### Armadilha
Usar a altura em metro (1,8), que dá 8 000 kg, ou esquecer de elevar ao quadrado e marcar 40. Sempre confira a **unidade** que a fórmula exige antes de substituir.

---

## Questão 26 (Revisão: Padrões P5 + P8, cadeia de taxas + embalagem inteira)

### Macetes antes de fazer essa questão
- **Caminho lógico:** monte o suco total numa linha só: 840 alunos × 0,25 L × 5 dias × 4 semanas = 4 200 L. O concentrado é 4 200 ÷ 6 = 700 L. As garrafas são 700 ÷ 1,5 ≈ 466,7, e como é compra, arredonde **para cima**: 467.
- **Pode ignorar:** "sabor", "lanche da tarde".
- **Elimine assim:** 466 não cobre a necessidade, e quem faz 4 200 ÷ 1,5 esquece a diluição e chega a 2 800 (alternativa e).
- **Conta mínima:** 840 × 0,25 = 210 L por dia, e 210 × 20 = 4 200. Depois, 700 ÷ 1,5 = 1 400 ÷ 3 = 466,67.

### Questão
Uma escola com 840 alunos serve suco no lanche: cada aluno recebe um copo de 250 mL por dia, 5 dias por semana. O suco é preparado a partir de um concentrado, e cada 1 L de concentrado rende 6 L de suco pronto. O concentrado é vendido em garrafas fechadas de 1,5 L.

O número mínimo de garrafas de concentrado que a escola deve comprar para 4 semanas de aula é:

a) 140

b) 466

c) 467

d) 700

e) 2 800

### Resolução em 3 minutos
1. Calcule o suco por dia: 840 × 0,25 = 210 L. (≈ 15 s)
2. Calcule o suco em 4 semanas: 210 × 20 dias = 4 200 L. (≈ 10 s)
3. Calcule o concentrado: 4 200 ÷ 6 = 700 L. (≈ 10 s)
4. Calcule as garrafas: 700 ÷ 1,5 ≈ 466,7, arredondando para cima dá 467. (≈ 20 s)

Tempo total: ≈ 1 min.

**Gabarito: C**

### Resolução comentada
Suco total = 840 × 0,25 × 5 × 4 = 4 200 L. Concentrado = 4 200 ÷ 6 = 700 L. Garrafas = 700 ÷ 1,5 = 466,67. Como é preciso cobrir toda a necessidade, são 467 garrafas.

### Armadilha
Arredondar para baixo (466) numa situação de compra, ou esquecer a diluição de 1 para 6.

---

## Questão 27 (Revisão: Padrões P2 + P8, escala linear + embalagem inteira)

### Macetes antes de fazer essa questão
- **Caminho lógico:** na escala 1 : 50, cada 2 cm da planta valem 1 m. As medidas reais são 12 cm → 6 m e 9 cm → 4,5 m. Em placas de 0,6 m: 6 ÷ 0,6 = 10 e 4,5 ÷ 0,6 = 7,5, então 10 × 7,5 = 75 placas. Em caixas de 6: 75 ÷ 6 = 12,5, arredondando para cima dá 13 caixas.
- **Pode ignorar:** "porcelanato", "acabamento acetinado".
- **Elimine assim:** a pergunta é sobre **caixas**, não placas. Isso elimina c), d) e e). Entre 12 e 13, 12 caixas dariam só 72 placas, insuficientes.
- **Conta mínima:** conte as placas por lado (10 e 7,5) em vez de calcular as áreas 27 m² e 0,36 m².

### Questão
A planta baixa de um apartamento foi desenhada na escala 1 : 50. Nela, a sala é um retângulo de 12 cm por 9 cm. O piso da sala será revestido com placas quadradas de porcelanato de 60 cm de lado, vendidas apenas em caixas fechadas com 6 placas cada. Desconsidere as perdas com recortes.

O número mínimo de caixas que deve ser comprado é:

a) 12

b) 13

c) 75

d) 76

e) 80

### Resolução em 3 minutos
1. Converta as medidas: 12 cm × 0,5 = 6 m e 9 cm × 0,5 = 4,5 m. (≈ 15 s)
2. Conte as placas por lado: 6 ÷ 0,6 = 10 e 4,5 ÷ 0,6 = 7,5, então 10 × 7,5 = 75 placas. (≈ 20 s)
3. Calcule as caixas: 75 ÷ 6 = 12,5, arredondando para cima dá 13. (≈ 10 s)

Tempo total: ≈ 50 s.

**Gabarito: B**

### Resolução comentada
Medidas reais: 12 × 50 = 600 cm = 6 m e 9 × 50 = 450 cm = 4,5 m. Área = 27 m². Placa = 0,6 × 0,6 = 0,36 m². Placas: 27 ÷ 0,36 = 75. Caixas: 75 ÷ 6 = 12,5, ou seja, 13 caixas.

### Armadilha
Parar no número de placas (75) ou arredondar as caixas para baixo (12). Também é armadilha aplicar a escala à área sem elevar ao quadrado, se você converter direto de cm² para m².

---

## Questão 28 (Revisão: Padrões P9 + P12, variação percentual + porcentagem encadeada)

### Macetes antes de fazer essa questão
- **Caminho lógico:** aumentos e descontos sucessivos **se multiplicam**: 1,25 × 0,80 = 1,00. Então o preço volta ao valor original.
- **Pode ignorar:** o preço do produto, que não é dado nem necessário, e "Black Friday".
- **Elimine assim:** quem soma (+25 − 20 = +5%) cai na alternativa a). Como 0,8 = 4/5 e 1,25 = 5/4, um fator desfaz o outro.
- **Conta mínima:** teste com preço R$ 100: +25% dá 125, e −20% de 125 = 125 − 25 = 100.

### Questão
Em novembro, uma loja aumentou em 25% o preço de um fone de ouvido. Dias depois, na Black Friday, anunciou um desconto de 20% sobre o novo preço desse fone.

Em relação ao preço antes do aumento, o preço na Black Friday teve:

a) aumento de 5%.

b) aumento de 2,5%.

c) nenhuma variação.

d) redução de 2,5%.

e) redução de 5%.

### Resolução em 3 minutos
1. Multiplique os fatores: 1,25 × 0,8 = 1. (≈ 15 s)
2. Fator 1 significa nenhuma variação. (≈ 5 s)

Tempo total: ≈ 25 s.

**Gabarito: C**

### Resolução comentada
Se o preço é P, depois do aumento fica 1,25P e depois do desconto fica 0,8 × 1,25P = 1,00P. Não há variação.

### Armadilha
Somar as porcentagens (+25 − 20 = +5%). O desconto incide sobre o preço **já aumentado**, então as porcentagens nunca se somam: os fatores se multiplicam.

---

## Questão 29 (Revisão: Padrões P1 + P3, comparar razões + conversão de unidades)

### Macetes antes de fazer essa questão
- **Caminho lógico:** coloque todos na mesma unidade. O mais rápido aqui é **L/100 km**, em que **menor é melhor**, porque dois carros já vêm nessa unidade:
  - A: 100 ÷ 12 ≈ 8,3
  - B: 8
  - C: 26 milhas ≈ 42 km por 3,8 L, cerca de 11 km/L, ou seja, ≈ 9
  - D: 30 L em 390 km, que dá ≈ 7,7 por 100 km
  - E: 7,5
- **Pode ignorar:** "importados", "motor 1.0".
- **Elimine assim:** C (cerca de 11 km/L) e A (12 km/L) estão claramente atrás. A disputa fica entre D (13 km/L) e E (100 ÷ 7,5 ≈ 13,3 km/L), e E vence.
- **Conta mínima:** só calcule com precisão os finalistas: 100 ÷ 7,5 = 13,3 > 13.

### Questão
Uma empresa vai renovar sua frota e quer o carro mais econômico, isto é, o que percorre a maior distância por litro de combustível. Os dados de consumo de cinco modelos vieram em unidades diferentes:

- Carro A: 12 km por litro.
- Carro B: 8 litros a cada 100 km.
- Carro C: 26 milhas por galão (considere 1 milha = 1,6 km e 1 galão = 3,8 L).
- Carro D: percorreu 390 km consumindo 30 litros.
- Carro E: 7,5 litros a cada 100 km.

O modelo mais econômico é o carro:

a) A

b) B

c) C

d) D

e) E

### Resolução em 3 minutos
1. Escolha a unidade: km/L (maior é melhor). (≈ 10 s)
2. Converta cada carro:
   - A = 12.
   - B = 100 ÷ 8 = 12,5.
   - C ≈ 41,6 ÷ 3,8 ≈ 11.
   - D = 390 ÷ 30 = 13.
   - E = 100 ÷ 7,5 ≈ 13,3.
   (≈ 1 min)
3. O maior é o E. (≈ 5 s)

Tempo total: ≈ 1 min 20 s.

**Gabarito: E**

### Resolução comentada
Em km/L: A = 12; B = 12,5; C = 26 × 1,6 ÷ 3,8 ≈ 10,9; D = 13; E ≈ 13,3. O carro E é o mais econômico.

### Armadilha
Comparar números em unidades diferentes como se fossem iguais. Por exemplo, achar que B (8) é pior que A (12) porque 8 < 12, sem perceber que em L/100 km **menor é melhor**.

---

## Questão 30 (Revisão: Padrões P10 + P9, crescimento linear + variação percentual)

### Macetes antes de fazer essa questão
- **Caminho lógico:** de 2018 a 2021 (3 anos), as matrículas subiram 60 mil, ou seja, 20 mil por ano. De 2018 a 2030 são 12 anos: +240 mil, totalizando 640 mil. O aumento em relação a 2018 é 240 ÷ 400 = 60%.
- **Pode ignorar:** "ensino a distância", "região".
- **Elimine assim:** 640 ÷ 400 = 1,6. A razão (160%, alternativa d) é a isca, e 240 (alternativa e) é o aumento absoluto em mil, não um percentual.
- **Conta mínima:** calcule direto a partir de 2018: 12 × 20 = 240, e 240 ÷ 400 = 0,6.

### Questão
O número de matrículas no ensino a distância de uma região era de 400 mil em 2018 e passou a 460 mil em 2021. Considere que esse número continue crescendo de forma linear, no mesmo ritmo.

O aumento percentual previsto do número de matrículas em 2030, em relação a 2018, é:

a) 37,5%

b) 50%

c) 60%

d) 160%

e) 240%

### Resolução em 3 minutos
1. Calcule a taxa: 60 mil em 3 anos, ou seja, 20 mil por ano. (≈ 15 s)
2. Calcule o aumento até 2030: 12 anos × 20 mil = 240 mil. (≈ 10 s)
3. Calcule o percentual: 240 ÷ 400 = 60%. (≈ 10 s)

Tempo total: ≈ 40 s.

**Gabarito: C**

### Resolução comentada
f(t) = 400 + 20·(t − 2018), então f(2030) = 400 + 240 = 640 mil. Aumento percentual = (640 − 400) ÷ 400 = 0,6 = 60%.

### Armadilha
Marcar a razão (160%) em vez do aumento. Ou usar 640 como base e chegar a 240 ÷ 640 = 37,5% (alternativa a).

---

**Fim da Lista 3. Faltam 0 padrões: os 25 padrões do mapa foram cobertos.**
