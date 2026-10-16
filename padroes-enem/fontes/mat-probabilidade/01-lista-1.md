# Lista 1: 5 questões inéditas (padrões P1, P2, P3, P4, P5)

---

## Questão 1 (Padrão P1: probabilidade clássica direta)

### Macetes antes de fazer essa questão
- **P = casos favoráveis ÷ casos possíveis**, desde que todos os resultados tenham a mesma chance.
- Quantidade de múltiplos de r numa faixa, pela PA: **n = (último − primeiro) ÷ r + 1**.
- Com duas condições ao mesmo tempo ("múltiplo de 4 **e** maior que 450"), comece pela condição mais restritiva (a faixa) e filtre a outra dentro dela.
- Na lista original: Q60 (bilhetes múltiplos de 3, par e maior que 2.991), Q38 (temperatura ideal) e Q59 (espécies de borboleta).

### Questão
Para arrecadar fundos para a formatura, uma escola fez uma rifa com 500 bilhetes, numerados de 1 a 500. Todos os bilhetes foram vendidos e um único número será sorteado.

A probabilidade de o número sorteado ser múltiplo de 4 e maior que 450 é igual a
- a) 0,026.
- b) 0,024.
- c) 0,020.
- d) 0,028.
- e) 0,100.

### Resolução em 3 minutos
1. Primeiro múltiplo de 4 acima de 450: 452. Último: 500.
2. Quantidade: (500 − 452) ÷ 4 + 1 = 12 + 1 = 13.
3. P = 13 ÷ 500 = 0,026.

**Gabarito: A**

### Resolução comentada
1. **Espaço amostral:** 500 bilhetes, todos com a mesma chance.
2. **Faixa:** números de 451 a 500. O primeiro múltiplo de 4 é 452 (452 = 4 · 113) e o último é 500 (500 = 4 · 125).
3. **Contagem pela PA:** (500 − 452) ÷ 4 = 12 saltos, e 12 saltos ligam 13 números. Também dá para contar pelos quocientes: de 113 a 125 são 125 − 113 + 1 = 13 números.
4. **Probabilidade:** 13 ÷ 500 = 26 ÷ 1000 = 0,026.

### Armadilha
- Esquecer o **+1** da PA leva a 12 ÷ 500 = 0,024 (alternativa b).
- Contar todos os números acima de 450 (50 números) leva a 50 ÷ 500 = 0,100 (alternativa e).
- Na Q60 original, o mesmo cuidado: os bilhetes eram só múltiplos de 3 (o espaço amostral já era 1.000 bilhetes, não 3.000 números).

---

## Questão 2 (Padrão P2: espaço amostral ponderado)

### Macetes antes de fazer essa questão
- Pergunte sempre: **o que está dentro da urna?** Pessoas, cartões, filhos, votos?
- Se cada pessoa coloca um número diferente de cartões, o sorteio é entre **cartões**:
  Total = Σ (pessoas do grupo × cartões por pessoa).
- Na lista original: Q78 (alunos de 3º ano com 3 cartões), Q24 (sorteio entre os **filhos**, não entre as mães) e Q63 (só entre quem opinou).

### Questão
Para premiar o desempenho no bimestre, uma escola vai sortear uma bolsa de estudos em um cursinho. Cada aluno deposita cupons com seu nome em uma urna, de acordo com sua média:
- média maior ou igual a 9: **4 cupons** (5 alunos);
- média entre 7 e 9: **2 cupons** (15 alunos);
- média menor que 7: **1 cupom** (20 alunos).

Todos os cupons têm a mesma chance de serem sorteados. A probabilidade de o vencedor ser um aluno com média entre 7 e 9 é
- a) 3/8.
- b) 3/7.
- c) 2/7.
- d) 1/2.
- e) 15/70.

### Resolução em 3 minutos
1. Total de cupons: 5 · 4 + 15 · 2 + 20 · 1 = 20 + 30 + 20 = 70.
2. Cupons do grupo 7–9: 30.
3. P = 30 ÷ 70 = 3/7.

**Gabarito: B**

### Resolução comentada
1. **O que é sorteado?** Um cupom, não um aluno. Então o espaço amostral é o total de cupons.
2. **Contagem por grupo:**
   - média ≥ 9: 5 alunos × 4 = 20 cupons
   - média entre 7 e 9: 15 × 2 = 30 cupons
   - média < 7: 20 × 1 = 20 cupons
   - total: 70 cupons
3. **Favoráveis:** os 30 cupons do grupo 7–9.
4. **P = 30/70 = 3/7 ≈ 43%.**

Repare que esse grupo tem 15 de 40 alunos (37,5%), mas 43% dos cupons. O peso dos cupons muda a chance.

### Armadilha
- 15/40 = 3/8 (alternativa a) conta alunos, mas o sorteio é de cupons.
- 15/70 (alternativa e) mistura as escalas: alunos no numerador e cupons no denominador.
- Na Q24 original, o sorteio era entre 25 filhos, não entre as 23 mães.

---

## Questão 3 (Padrão P3: condicional em tabela)

### Macetes antes de fazer essa questão
- "Sabendo que X" → **o denominador é o total de X** (uma linha ou uma coluna). O numerador é a célula do cruzamento.
- Vocabulário de testes diagnósticos que o ENEM já usou:
  - **Sensibilidade** = P(positivo | doente)
  - **Especificidade** = P(negativo | sadio)
  - **Valor preditivo positivo** = P(doente | positivo)
- Na lista original: Q49 (especificidade 80/90), Q80 (saudável dado negativo, 380/420) e Q35/Q50 (germinou e é da cultura A, 392/773).

### Questão
Um laboratório avaliou um teste rápido para dengue em 200 pessoas, das quais se sabia, por exame de referência, quem estava realmente doente. Os resultados estão no quadro.

| Resultado do teste | Doentes | Sadios | Total |
|---|---|---|---|
| Positivo | 45 | 12 | 57 |
| Negativo | 5 | 138 | 143 |
| Total | 50 | 150 | 200 |

Escolhe-se ao acaso uma dessas pessoas e verifica-se que seu teste deu **positivo**. A probabilidade de ela estar realmente doente é, aproximadamente,
- a) 0,23.
- b) 0,29.
- c) 0,79.
- d) 0,90.
- e) 0,92.

### Resolução em 3 minutos
1. "Deu positivo" → total = linha Positivo = 57.
2. Doentes nessa linha = 45.
3. P = 45 ÷ 57 ≈ 0,79.

**Gabarito: C**

### Resolução comentada
1. **Informação dada:** o teste deu positivo. A pessoa está, com certeza, na linha "Positivo". O novo espaço amostral tem 57 pessoas.
2. **Pergunta:** dentre essas 57, quantas estão doentes? 45 (cruzamento Positivo × Doentes).
3. **P(doente | positivo) = 45/57 = 15/19 ≈ 0,789 ≈ 0,79.**
4. **Leitura dos outros números:**
   - 45/50 = 0,90 é a sensibilidade (condição invertida).
   - 138/150 = 0,92 é a especificidade.
   - 45/200 = 0,225 é a probabilidade de "positivo e doente" no grupo todo.

### Armadilha
- **Inverter a condição.** P(doente | positivo) é diferente de P(positivo | doente). A palavra depois de "sabendo que" vai para o denominador.
- Usar o total geral (200) no denominador ignora o "sabendo que".

---

## Questão 4 (Padrão P4: probabilidade total)

### Macetes antes de fazer essa questão
- Quando o evento pode ocorrer **por caminhos diferentes**, monte a árvore:
  **P(evento) = P(cenário 1) · P(evento | cenário 1) + P(cenário 2) · P(evento | cenário 2)**.
- Os cenários têm pesos diferentes, então **nunca** faça média simples das porcentagens.
- Quando a resposta é uma **faixa de classificação**, faça a conta completa antes de olhar o quadro.
- Na lista original: Q11 (chuva e atraso), Q7 (turmas A e B → bônus III), Q20 (máquinas I e II → "bom").

### Questão
Um estudante vai para a escola de ônibus em 70% dos dias letivos e de bicicleta nos demais. Quando vai de ônibus, chega atrasado em 15% das vezes; quando vai de bicicleta, em 5% das vezes. A coordenação classifica a pontualidade de cada aluno pela probabilidade P de ele chegar atrasado num dia letivo qualquer:

| Probabilidade de atraso | Classificação |
|---|---|
| 0 ≤ P < 4% | Ótima |
| 4% ≤ P < 8% | Boa |
| 8% ≤ P < 11% | Regular |
| 11% ≤ P < 14% | Ruim |
| P ≥ 14% | Péssima |

A pontualidade desse estudante é classificada como
- a) ótima.
- b) boa.
- c) regular.
- d) ruim.
- e) péssima.

### Resolução em 3 minutos
1. Ônibus: 0,70 · 0,15 = 0,105.
2. Bicicleta: 0,30 · 0,05 = 0,015.
3. P = 0,105 + 0,015 = 0,12 = 12%, faixa "ruim".

**Gabarito: D**

### Resolução comentada
1. **Cenários (1º nível da árvore):** ônibus (0,70) e bicicleta (0,30). A soma é 1.
2. **Evento em cada cenário (2º nível):** atraso de ônibus 0,15 e atraso de bicicleta 0,05.
3. **Ramos que terminam em atraso:**
   - ônibus e atraso: 0,70 · 0,15 = 0,105
   - bicicleta e atraso: 0,30 · 0,05 = 0,015
4. **Soma dos ramos:** 0,120 = **12%**. Como 11% ≤ 12% < 14%, a classificação é **ruim**.

Com números inteiros: em 100 dias, são 70 de ônibus (10,5 atrasos) e 30 de bicicleta (1,5 atraso), num total de 12 atrasos em 100 dias.

### Armadilha
- A média simples (15% + 5%) ÷ 2 = 10% leva a "regular" (alternativa c). Essa conta finge que o aluno usa cada transporte em metade dos dias.
- Somar sem os pesos (15% + 5% = 20%) leva a "péssima" (alternativa e).

---

## Questão 5 (Padrão P5: Bayes)

### Macetes antes de fazer essa questão
- **Estrutura típica:** o texto dá a % de cada grupo e a % do efeito em cada grupo, e pergunta: **"dado que ocorreu o efeito, qual a chance de ser do grupo X?"**
- Receita:
  1. Calcule os ramos: P(grupo) · P(efeito | grupo).
  2. Some os ramos com o efeito: esse é o novo total.
  3. P(grupo X | efeito) = ramo de X ÷ soma.
- **Atalho:** trabalhe com 1.000 casos imaginários para ter números inteiros.
- Na lista original: Q40 (máquina M₂ dado defeito), Q75 (feminino dado fumante) e Q67 (inconsistente dado fraudulenta).

### Questão
Uma loja virtual recebe 30% dos seus pedidos pelo aplicativo e 70% pelo site. Segundo o setor de logística, 4% dos pedidos feitos pelo aplicativo são devolvidos, enquanto apenas 2% dos pedidos feitos pelo site são devolvidos.

Um funcionário escolhe ao acaso um pedido entre os **devolvidos**. A probabilidade de esse pedido ter sido feito pelo aplicativo é, aproximadamente,
- a) 1,2%.
- b) 4,0%.
- c) 30,0%.
- d) 53,8%.
- e) 46,2%.

### Resolução em 3 minutos
1. Aplicativo e devolvido: 0,30 · 0,04 = 0,012.
2. Site e devolvido: 0,70 · 0,02 = 0,014.
3. P = 0,012 ÷ (0,012 + 0,014) = 12/26 = 6/13 ≈ 46,2%.

**Gabarito: E**

### Resolução comentada
1. **Imagine 1.000 pedidos:**
   - 300 pelo app, dos quais 4% são devolvidos: **12** devoluções.
   - 700 pelo site, dos quais 2% são devolvidos: **14** devoluções.
2. **Novo espaço amostral:** só os devolvidos, 12 + 14 = 26.
3. **Favoráveis:** os 12 devolvidos que vieram do app.
4. **P = 12/26 = 6/13 ≈ 0,4615 ≈ 46,2%.**

O app tem taxa de devolução maior, mas o site tem muito mais pedidos, por isso o app fica com menos da metade das devoluções.

### Armadilha
- Responder 30% (alternativa c), a chance de um pedido ser do app **antes** de saber que foi devolvido.
- Responder 4% (alternativa b), que é P(devolvido | app), a condição invertida.
- 53,8% (alternativa d) é a probabilidade do **site** (14/26). Releia qual grupo a pergunta quer.
