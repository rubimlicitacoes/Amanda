# Lista 2: Potência, energia e dimensionamento (padrões P9 a P19)

---

## Questão 9 (Padrão P9: P = U·i para dimensionar fio e disjuntor)

### O que você precisa saber antes de fazer essa questão
- **i = P/U.** Use a **maior** potência do aparelho.
- **Fio:** a menor seção cuja corrente máxima seja **≥ i**.
- **Disjuntor:** protege o **fio**. Regra: **i_aparelho ≤ i_disjuntor ≤ i_máx do fio**.
  - Disjuntor menor que i: desarma sozinho com o aparelho funcionando.
  - Disjuntor maior que o fio aguenta: o fio esquenta antes de o disjuntor desarmar (risco de incêndio).

### Questão
Um forno elétrico de embutir tem especificação **220 V / 6 600 W**. O eletricista consulta o quadro de fios e dispõe de disjuntores de **25 A, 32 A, 40 A e 50 A**.

| Seção do fio (mm²) | 2,5 | 4,0 | 6,0 | 10,0 |
|---|---|---|---|---|
| Corrente máxima (A) | 21 | 28 | 36 | 50 |

A instalação correta, com o menor custo, usa
- a) fio de 4,0 mm² e disjuntor de 32 A.
- b) fio de 6,0 mm² e disjuntor de 25 A.
- c) fio de 6,0 mm² e disjuntor de 32 A.
- d) fio de 6,0 mm² e disjuntor de 40 A.
- e) fio de 10,0 mm² e disjuntor de 50 A.

### Resolução passo a passo
1. i = P/U = 6 600/220 = **30 A**.
2. Fio: 4,0 mm² aguenta só 28 A (< 30). O menor que serve é **6,0 mm²** (36 A).
3. Disjuntor: entre 30 A e 36 A. Só **32 A** cabe nesse intervalo.
4. Por que os distratores caem:
   - a) Fio fraco demais.
   - b) 25 A desarma com o forno ligado.
   - d) 40 A não protege um fio de 36 A.
   - e) Funciona, mas não é o menor custo.

**Gabarito: C**

---

## Questão 10 (Padrão P10: soma de correntes + margem de segurança)

### O que você precisa saber antes de fazer essa questão
- Ramos em paralelo têm a **mesma tensão**. Calcule a corrente de cada um:
  - resistor: i = U/R;
  - aparelho com potência: i = P/U;
  - corrente dada: use direto.
- No fio principal, as correntes **somam** (lei dos nós).
- Margem de 20%: multiplique por **1,2**.

### Questão
O fusível F protege um circuito alimentado por uma bateria de **24 V**, com três ramos em paralelo: um resistor de **8 Ω**, um motor de **48 W** e uma lâmpada indicadora que conduz **0,5 A**.

```
        F
  ┌───[≈≈]───┬──────────┬──────────┐
  │          │          │          │
 (+)       [8 Ω]    (M) 48 W   (L) 0,5 A
 24 V        │          │          │
 (−)         │          │          │
  └──────────┴──────────┴──────────┘
```

O fusível foi projetado para suportar uma corrente até **20% maior** que a corrente nominal do circuito. A corrente máxima, em ampère, que o fusível permite passar é
- a) 4,4.
- b) 5,5.
- c) 6,0.
- d) 6,3.
- e) 6,6.

### Resolução passo a passo
1. Resistor: i = 24/8 = **3 A**.
2. Motor: i = 48/24 = **2 A**.
3. Lâmpada: **0,5 A**.
4. Total: 3 + 2 + 0,5 = **5,5 A**.
5. Com 20% de margem: 5,5 × 1,2 = **6,6 A**.
6. Distratores: b) esqueceu a margem; a) tirou 20% em vez de somar.

**Gabarito: E**

---

## Questão 11 (Padrão P11: limite de extensão/régua)

### O que você precisa saber antes de fazer essa questão
- Potência máxima da régua: **P_máx = U·i_máx**.
- Some os aparelhos que ficam ligados **ao mesmo tempo** (os permanentes + o da vez).
- Teste **na ordem** dada.
- **Pegadinha:** quando o fusível queima, a régua para de funcionar. Nenhuma atividade seguinte acontece, mesmo que fosse leve.

### Questão
Uma extensão com fusível de **10 A** está ligada em **127 V**. Um estudante mantém ligados nela, o tempo todo, um notebook (**70 W**) e um ventilador (**100 W**). Ele tenta realizar, uma de cada vez e desligando a anterior, as atividades:

1º usar a chaleira elétrica (**1 000 W**);
2º passar roupa com o ferro (**1 200 W**);
3º usar o liquidificador (**600 W**);
4º carregar o celular (**10 W**).

Quantas atividades ele consegue realizar sem queimar o fusível?
- a) 4
- b) 3
- c) 2
- d) 1
- e) 0

### Resolução passo a passo
1. P_máx = 127 × 10 = **1 270 W**.
2. Permanentes: 70 + 100 = 170 W. Sobram **1 100 W**.
3. 1º chaleira: 170 + 1 000 = 1 170 W ≤ 1 270. **Funciona.**
4. 2º ferro: 170 + 1 200 = 1 370 W > 1 270. **O fusível queima.**
5. A extensão fica inutilizada: o 3º e o 4º **não acontecem**.
6. **Pegadinha:** quem testa cada atividade isoladamente marca 3.

**Gabarito: D**

---

## Questão 12 (Padrão P12: resistor fixo em outra tensão, P = U²/R)

### O que você precisa saber antes de fazer essa questão
- A resistência é do aparelho e **não muda** quando a tensão muda.
- **P_nova = P_nominal × (U_nova/U_nominal)²**.
- A corrente: i = U/R. Se U diminui, **i diminui** na mesma proporção.
- 127/220 ≈ 0,58 e (0,58)² ≈ 1/3.

### Questão
Um morador compra, por engano, uma lâmpada incandescente de **60 W / 220 V** e a instala em sua casa, cuja rede é de **127 V**. Considere a resistência do filamento constante.

Ao ser ligada, a lâmpada
- a) brilhará normalmente, pois a potência é uma característica fixa da lâmpada.
- b) dissipará cerca de 35 W, pois a potência é proporcional à tensão.
- c) dissipará cerca de 20 W, e a corrente será menor que a nominal.
- d) dissipará cerca de 20 W, mas a corrente será maior que a nominal.
- e) queimará, pois a corrente aumentará para compensar a queda de tensão.

### Resolução passo a passo
1. R fixa → P = U²/R.
2. P_nova = 60 × (127/220)² ≈ 60 × 1/3 = **20 W**. A lâmpada brilha fraco.
3. Corrente: i = U/R. A tensão caiu, a resistência é a mesma, então a corrente **cai** (de ≈ 0,27 A para ≈ 0,16 A).
4. Por que os distratores caem:
   - a) A potência nominal só vale na tensão nominal.
   - b) Esqueceu o quadrado.
   - d) e e) A corrente não "compensa"; com R fixa, ela acompanha a tensão.

**Gabarito: C**

---

## Questão 13 (Padrão P13: consumo em kWh e conta de luz)

### O que você precisa saber antes de fazer essa questão
- **E (kWh) = P (kW) × t (h)** para cada aparelho.
- **20 min = 1/3 h** (não é 0,2 h!). 30 min = 0,5 h.
- Multiplique pela **quantidade** de aparelhos iguais.
- Some tudo, multiplique pelos **dias** e pela **tarifa**.

### Questão
O quadro mostra o uso diário dos aparelhos de uma casa.

| Aparelho | Potência | Uso diário |
|---|---|---|
| Chuveiro | 5 400 W | 20 min |
| Geladeira | 250 W | 10 h |
| Televisor | 100 W | 5 h |
| Ferro de passar | 1 000 W | 30 min |
| Lâmpadas (6 unidades) | 15 W cada | 5 h |

Em um mês de 30 dias, com tarifa de **R$ 0,80 por kWh**, o valor da conta será
- a) R$ 4,60.
- b) R$ 120,72.
- c) R$ 129,00.
- d) R$ 138,00.
- e) R$ 172,50.

### Resolução passo a passo
1. Energia diária:
   - Chuveiro: 5,4 kW × 1/3 h = **1,8 kWh**
   - Geladeira: 0,25 × 10 = **2,5 kWh**
   - Televisor: 0,1 × 5 = **0,5 kWh**
   - Ferro: 1,0 × 0,5 = **0,5 kWh**
   - Lâmpadas: 6 × 0,015 × 5 = **0,45 kWh**
   - Total: **5,75 kWh/dia**
2. Mês: 5,75 × 30 = **172,5 kWh**.
3. Conta: 172,5 × 0,80 = **R$ 138,00**.
4. Por que os distratores caem:
   - a) Esqueceu os 30 dias.
   - b) Usou 20 min = 0,2 h.
   - c) Contou só uma lâmpada.
   - e) Parou no kWh.

**Gabarito: D**

---

## Questão 14 (Padrão P14: energia em joules + rendimento da usina)

### O que você precisa saber antes de fazer essa questão
- **E = P·Δt.** Para joule: W × segundo. Para kWh: kW × hora.
- **1 kWh = 3,6 × 10⁶ J = 3,6 MJ.**
- Se a geração + transmissão tem rendimento η, a usina precisa produzir **E_consumida ÷ η** (mais do que se consome).

### Questão
Um carregador de celular fica o ano inteiro (365 dias) conectado à tomada, consumindo **0,5 W** mesmo sem celular. A eficiência entre a geração e a transmissão de eletricidade até a casa é de **25%**.

A energia que precisou ser produzida na usina para manter esse carregador ligado durante o ano foi de, aproximadamente,
- a) 3,9 MJ.
- b) 15,8 MJ.
- c) 63,1 MJ.
- d) 94,6 MJ.
- e) 227 MJ.

### Resolução passo a passo
1. Tempo: 365 × 24 = **8 760 h**.
2. Energia consumida: 0,5 W × 8 760 h = 4 380 Wh = **4,38 kWh**.
3. Em joules: 4,38 × 3,6 MJ ≈ **15,8 MJ**.
4. Na usina: 15,8 ÷ 0,25 ≈ **63,1 MJ**.
5. Distratores: b) esqueceu a eficiência; a) multiplicou por 0,25 em vez de dividir.

**Gabarito: C**

---

## Questão 15 (Padrão P15: rendimento de lâmpadas, luz útil e calor)

### O que você precisa saber antes de fazer essa questão
- **Luz útil = η × P.** O resto (P − luz útil) vira calor.
- **Mesma luminosidade = mesma luz útil**, e não mesma potência.
- Potência da lâmpada nova: P = luz útil ÷ η_nova.
- "Quantidade de calor por segundo" = potência térmica, em J/s (W).

### Questão
Uma lâmpada incandescente de **100 W** converte **5%** da energia consumida em luz. Uma lâmpada LED converte **40%** da energia em luz. A incandescente é trocada por uma LED de mesma luminosidade.

A cada segundo, a quantidade de calor, em joule, que deixa de ser liberada para o ambiente é
- a) 7,5.
- b) 87,5.
- c) 90,0.
- d) 95,0.
- e) 100.

### Resolução passo a passo
1. Luz útil da incandescente: 5% de 100 = **5 W**.
2. LED com a mesma luz: P = 5 ÷ 0,40 = **12,5 W**.
3. Calor da incandescente: 100 − 5 = **95 W**.
4. Calor do LED: 12,5 − 5 = **7,5 W**.
5. Deixa de liberar: 95 − 7,5 = **87,5 J por segundo**.
6. Distratores: a) é o calor do LED; d) é o calor da incandescente; c) esqueceu o calor do LED e subtraiu a luz.

**Gabarito: B**

---

## Questão 16 (Padrão P16: energia solar, irradiância × área × eficiência)

### O que você precisa saber antes de fazer essa questão
- Potência elétrica de uma placa: **P = η × I × A** (I em W/m², A em m²).
- Energia = P × tempo de sol.
- Número de placas = energia necessária ÷ energia de uma placa (arredonde **para cima**).

### Questão
Uma família consome **300 kWh por mês** (30 dias) e quer instalar módulos fotovoltaicos de **2,0 m × 1,0 m**, com eficiência de **20%**. No local, considera-se uma irradiância de **1 000 W/m²** durante o equivalente a **5 h por dia**.

O número mínimo de módulos para suprir todo o consumo é
- a) 1.
- b) 2.
- c) 3.
- d) 4.
- e) 5.

### Resolução passo a passo
1. Área de um módulo: 2,0 × 1,0 = **2 m²**.
2. Potência elétrica: 0,20 × 1 000 × 2 = **400 W = 0,4 kW**.
3. Energia por dia: 0,4 × 5 = **2 kWh**. Por mês: 2 × 30 = **60 kWh**.
4. Módulos: 300 ÷ 60 = **5**.
5. **Pegadinha:** sem a eficiência, cada módulo daria 300 kWh/mês e você marcaria 1.

**Gabarito: E**

---

## Questão 17 (Padrão P17: payback, tempo de retorno do investimento)

### O que você precisa saber antes de fazer essa questão
- **Economia de energia** = (P_antiga − P_nova) × horas de uso.
- **Economia em R$** = energia economizada × tarifa.
- **Payback** = investimento ÷ economia mensal.
- Em tarifas com taxa fixa (como na questão 60 da lista), monte as duas funções e iguale para achar o ponto de empate.

### Questão
Um hotel substitui **200** lâmpadas fluorescentes de **40 W** por lâmpadas LED de **18 W**, que custam **R$ 19,80** cada. As lâmpadas ficam acesas **10 h por dia** e a tarifa é de **R$ 0,50 por kWh**.

O investimento será pago pela economia na conta em, aproximadamente, quantos meses de 30 dias?
- a) 3
- b) 6
- c) 9
- d) 12
- e) 24

### Resolução passo a passo
1. Economia de potência por lâmpada: 40 − 18 = **22 W**.
2. Horas por mês: 10 × 30 = **300 h**.
3. Energia economizada por lâmpada: 22 W × 300 h = 6 600 Wh = **6,6 kWh/mês**.
4. Em reais: 6,6 × 0,50 = **R$ 3,30 por lâmpada por mês**.
5. Payback: 19,80 ÷ 3,30 = **6 meses** (vale para 1 ou para 200 lâmpadas).
6. **Pegadinha:** usar 18 W (potência do LED) ou 40 W em vez da **diferença**.

**Gabarito: B**

---

## Questão 18 (Padrão P18: efeito Joule + calorimetria no chuveiro)

### O que você precisa saber antes de fazer essa questão
- Calor para aquecer a água: Q = m·c·ΔT.
- Potência = Q por segundo: **P = (vazão em kg/s) × c × ΔT**.
- 4 L/min de água = 4 kg/min = 4/60 kg/s.
- Depois: i = P/U e o disjuntor (múltiplo de 5 A imediatamente acima).

### Questão
Uma ducha de **220 V** funciona com vazão de **4,0 L/min**. A água chega a **20 °C** e deve sair a **38 °C**. Considere que toda a energia elétrica é transferida para a água, cujo calor específico é **4 200 J/(kg·°C)** e cuja densidade é **1 kg/L**. O disjuntor deve ser o múltiplo de 5 A imediatamente acima da corrente da ducha.

A potência da ducha e o disjuntor adequado são
- a) 5 040 W e 25 A.
- b) 5 040 W e 20 A.
- c) 5 040 W e 30 A.
- d) 2 520 W e 15 A.
- e) 302 400 W e 1 375 A.

### Resolução passo a passo
1. ΔT = 38 − 20 = **18 °C**.
2. Vazão: 4 kg/min = 4/60 kg/s.
3. P = (4/60) × 4 200 × 18 = 4 × 70 × 18 = **5 040 W**.
4. i = 5 040/220 ≈ **22,9 A**.
5. Múltiplo de 5 A imediatamente acima: **25 A**.
6. Distratores: b) 20 A é menor que 22,9 A (desarmaria); e) esqueceu de dividir por 60.

**Gabarito: A**

---

## Questão 19 (Padrão P19: hidrelétrica, potência teórica e rendimento)

### O que você precisa saber antes de fazer essa questão
- A água que cai perde energia potencial: E = m·g·h.
- Por segundo: **P_teórica = ρ × vazão × g × h** (ρ = 1 000 kg/m³; vazão em m³/s).
- **Rendimento = P_real ÷ P_teórica.** Potência não aproveitada = P_teórica − P_real.

### Questão
Uma pequena central hidrelétrica tem queda d'água de **25 m** e vazão de **40 m³/s**, e gera **8,0 MW** de potência elétrica. Considere g = 10 m/s² e densidade da água igual a 1 000 kg/m³.

O rendimento dessa central é de
- a) 8%.
- b) 20%.
- c) 40%.
- d) 80%.
- e) 125%.

### Resolução passo a passo
1. P_teórica = 1 000 × 40 × 10 × 25 = 10 000 000 W = **10 MW**.
2. η = 8/10 = **80%**.
3. Distratores: b) 20% é a parte **perdida**; e) inverteu a razão (rendimento nunca passa de 100%).

**Gabarito: D**

---

## Balanço da Lista 2

| Questão | Padrão | Gabarito |
|---|---|---|
| 9 | P9: Fio e disjuntor | C |
| 10 | P10: Soma de correntes + margem | E |
| 11 | P11: Limite da extensão | D |
| 12 | P12: P = U²/R | C |
| 13 | P13: Conta de luz | D |
| 14 | P14: Joules e rendimento da usina | C |
| 15 | P15: Rendimento de lâmpadas | B |
| 16 | P16: Energia solar | E |
| 17 | P17: Payback | B |
| 18 | P18: Chuveiro (Joule + calorimetria) | A |
| 19 | P19: Hidrelétrica | D |
