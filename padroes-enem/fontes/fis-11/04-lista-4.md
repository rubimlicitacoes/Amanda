# Lista 4: 10 questões inéditas (padrões P25, P31, P32, P33, P34, P35, P36, P37, P38, P39)

> Constantes: água com c = 4 200 J/(kg·°C), 1 L de água = 1 kg, 1 W = 1 J/s, T(K) = T(°C) + 273.

---

## Questão 1 (Padrão P25: efeito Joule + calorimetria)

### O que você precisa saber antes de fazer essa questão
**Intuição:** uma resistência elétrica é um "atrito" para os elétrons. A corrente atravessa o fio, os elétrons esbarram nos átomos e toda a energia elétrica vira **calor**: é o **efeito Joule**. Chuveiro, ebulidor, ferro de passar e torradeira funcionam assim.

**Conceito:**
- **Potência dissipada num resistor** (escolha a fórmula pelos dados que você tem):
  - **P = U·i**;
  - **P = U²/R** (quando dão tensão e resistência);
  - **P = R·i²** (quando dão resistência e corrente).
- Junte com a calorimetria: **P·Δt = m·c·ΔT** (se 100% vai para a água).
- **Comparações (Q51):** calcule a energia de cada método e compare. Na Q51, o gerador de 1 100 W (110²/11) precisa de ~7,4 h para aquecer 200 L de 20 °C a 55 °C. Como consome 1 L/h, gasta ~7 L de gasolina, contra 1 L na combustão direta: **7 vezes mais**. Cada conversão de energia tem perdas.
- **Fogão de indução (Q61):** o campo magnético **variável** induz correntes elétricas (correntes de Foucault) no fundo metálico da panela, que aquecem por **efeito Joule**. O vidro não esquenta pela bobina; ele só recebe calor da panela.

**Pegadinhas:**
- Usar P = U/R ou P = U·R (não existem).
- Esquecer de converter litros em kg ou minutos em segundos.
- Q61: "emitir radiação que aquece através do vidro" ou "imantar a panela" são distratores. A resposta é **corrente induzida + efeito Joule**.

**Como memorizar:** "**U ao quadrado sobre R**", o "**ú-dois-sobre-erre**" do chuveiro.

### Questão
Um ebulidor elétrico ("rabo-quente") possui uma resistência de 22 Ω e é ligado a uma tomada de 220 V. Ele é mergulhado em uma vasilha com 2 L de água a 20 °C para preparar um chá, que deve atingir 75 °C. Considere que toda a energia dissipada na resistência é transferida à água, cujo calor específico é 4 200 J/(kg·°C) e cuja densidade é 1 kg/L.

O tempo necessário para o aquecimento, em minuto, é
- a) 1,75.
- b) 3,5.
- c) 4,8.
- d) 210.
- e) 770.

### Resolução passo a passo
1. **Potência (efeito Joule):** P = U²/R = 220²/22 = 48 400/22 = **2 200 W**.
2. **Energia necessária:** Q = m·c·ΔT = 2 × 4 200 × (75 − 20) = 2 × 4 200 × 55 = **462 000 J**.
3. **Tempo:** Δt = Q/P = 462 000/2 200 = **210 s**.
4. **Em minutos:** 210/60 = **3,5 min**.
5. De onde vêm os distratores:
   - a) Usou 1 L.
   - c) Usou ΔT = 75 °C (a temperatura final).
   - d) Esqueceu de converter segundos em minutos.
   - e) Usou P = U/R = 10 W.

**Gabarito: B**

---

## Questão 2 (Padrão P31: dilatação diferencial na escolha de materiais)

### O que você precisa saber antes de fazer essa questão
**Intuição:** pote de vidro com tampa emperrada? Passe água quente na tampa. A tampa metálica dilata mais que o vidro, a folga aumenta e ela solta.

**Conceito:**
- **Dilatação linear:** ΔL = L₀·α·ΔT. Quanto maior o **α**, mais a peça cresce por grau.
- **Peças encaixadas** (porca/parafuso, tampa/pote, anel/eixo):
  - Para **soltar aquecendo**, a peça **de fora** (porca, tampa, anel) precisa dilatar **mais** que a de dentro: **α_fora > α_dentro**.
  - Para soltar com o **menor aquecimento**, busque a **maior diferença** entre os α.
- **Furo dilata como se fosse cheio:** o buraco de uma porca aumenta ao aquecer, como se fosse do mesmo material.
- O contrário também é usado: **encaixe a quente**. Aquece-se o anel, encaixa-se no eixo e, ao esfriar, ele aperta.

**Como o ENEM cobra (Q67):** "desatarraxar com o menor aquecimento". Parafuso com o **menor** α (platina, 0,9) e porca com o **maior** α (chumbo, 2,9).

**Pegadinhas:**
- Inverter a ordem pedida ("parafuso e porca, respectivamente").
- Escolher dois materiais de α próximos.
- Achar que o furo "diminui" ao aquecer.

**Como memorizar:** "**Quem abraça (fora) tem que crescer mais.**"

### Questão
Uma fábrica de conservas quer facilitar a abertura de seus potes pelo consumidor, que costuma colocar a tampa sob água quente da torneira quando ela emperra. O quadro apresenta os coeficientes de dilatação linear dos materiais disponíveis para o pote e para a tampa.

| Material | Vidro borossilicato | Vidro comum | Aço | Latão | Alumínio |
|---|---|---|---|---|---|
| α (× 10⁻⁶ °C⁻¹) | 3,3 | 9,0 | 12 | 19 | 23 |

Para que a tampa se solte com o menor aquecimento possível, o pote e a tampa devem ser feitos, respectivamente, de
- a) alumínio e vidro borossilicato.
- b) vidro comum e aço.
- c) vidro borossilicato e alumínio.
- d) vidro comum e latão.
- e) aço e alumínio.

### Resolução passo a passo
1. **Quem está por fora:** a tampa (abraça a boca do pote). Para soltar, a tampa deve dilatar **mais**: α_tampa > α_pote.
2. **Menor aquecimento:** **maior diferença** entre os α.
   - Pote com o **menor** α: borossilicato (3,3).
   - Tampa com o **maior** α: alumínio (23).
   - Diferença: 19,7 × 10⁻⁶ °C⁻¹, a maior possível.
3. **Bônus prático:** a água quente aquece mais a tampa metálica (boa condutora) do que o vidro (mau condutor), o que ajuda ainda mais.
4. Eliminando:
   - a) Inverteu: a tampa de vidro dilataria menos, e o pote de alumínio a apertaria.
   - b), d) e e) Funcionam, mas exigem mais aquecimento (diferenças menores: 3, 10 e 11).

**Gabarito: C**

---

## Questão 3 (Padrão P32: dilatação volumétrica quantitativa)

### O que você precisa saber antes de fazer essa questão
**Intuição:** líquidos dilatam bastante. Um tanque de 20 000 L aquecido 30 °C "ganha" centenas de litros sem que se acrescente uma gota. Quem vende por **volume** ganha dinheiro com isso.

**Conceito:**
- **Dilatação volumétrica:** **ΔV = V₀·γ·ΔT**.
- Para sólidos: γ ≈ 3α (e dilatação superficial β ≈ 2α). Para líquidos, o enunciado dá o γ direto.
- A **massa não muda**; só o volume aumenta (e a densidade diminui).
- **Roteiro ENEM (Q45):**
  1. ΔV por lote: ΔV = V₀·γ·ΔT.
  2. Valor em reais: ΔV × preço de venda por litro.
  3. Multiplique pelos dias ou viagens pedidos.
  
  Na Q45: 20 000 × 10⁻³ × 30 = 600 L/dia; 600 × R$ 1,60 = R$ 960/dia; em 7 dias, R$ 6 720.

**Pegadinhas:**
- Usar a **temperatura final** em vez de ΔT.
- Multiplicar pelo preço de **compra** em vez do de venda.
- Errar a potência de 10 (10⁻³ × 30 000 = 30, não 3).
- Esquecer o número de dias.

**Como memorizar:** "**V-gama-delta**": ΔV = V₀·γ·ΔT.

### Questão
Um caminhão-tanque é carregado durante a madrugada, em uma distribuidora, com 30 000 L de óleo diesel a 10 °C. Ao longo do dia, ele viaja e descarrega todo o combustível em um posto onde a temperatura do produto, no momento da venda, é de 35 °C. O diesel é vendido ao consumidor por R$ 6,00 o litro, e seu coeficiente de dilatação volumétrica é 1 × 10⁻³ °C⁻¹. Despreze a dilatação do tanque.

O valor de venda correspondente apenas ao aumento de volume do combustível, por carga, é
- a) R$ 450,00.
- b) R$ 1 800,00.
- c) R$ 4 500,00.
- d) R$ 6 300,00.
- e) R$ 45 000,00.

### Resolução passo a passo
1. **ΔT** = 35 − 10 = **25 °C**.
2. **ΔV** = V₀·γ·ΔT = 30 000 × 1 × 10⁻³ × 25 = 30 × 25 = **750 L**.
3. **Valor:** 750 × R$ 6,00 = **R$ 4 500,00**.
4. Distratores:
   - b) Usou 10 °C (a temperatura inicial) como ΔT.
   - d) Usou 35 °C (a temperatura final) como ΔT.
   - a) e e) Erros de potência de 10.

**Gabarito: C**

---

## Questão 4 (Padrão P33: dilatação de líquidos altera a medição)

### O que você precisa saber antes de fazer essa questão
**Intuição:** um densímetro (boia graduada) afunda mais em líquido menos denso. Se o líquido esquenta, ele dilata, fica menos denso e o densímetro afunda mais, mesmo que a composição não tenha mudado. A leitura engana.

**Conceito:**
- **Densidade: d = m/V**. Aquecendo, **V aumenta** e **m fica igual**, então **d diminui**.
- **Densímetro/alcoômetro** (empuxo de Arquimedes): flutua mais alto em líquido mais denso e afunda mais em líquido menos denso.
- Instrumentos são **aferidos a uma temperatura padrão** (ex.: 20 °C). Fora dela, é preciso **correção** por causa da **dilatação** (Q72).
- **Densímetro da bomba de combustível (Q20):** tem uma coluna de **mercúrio** que também dilata com a temperatura e **corrige a altura de referência** de acordo com a densidade do líquido.

**Pegadinhas:**
- Q72: a correção é por "**mudança do volume dos materiais por dilatação**", não por "dissociação da água", "aumento da densidade" (é diminuição) ou "alteração química".
- Q20: o mercúrio **não mede** a temperatura ambiente; ele **corrige** a referência.
- Achar que aquecer aumenta a densidade.

**Como memorizar:** "**Esquentou, inchou, ficou mais leve por litro.**" A densidade cai com o aumento da temperatura.

### Questão
Em laticínios, o lactodensímetro é usado para verificar se o leite foi adulterado com adição de água, o que reduz a sua densidade. O instrumento é calibrado para leite a 15 °C, e o manual traz uma tabela de correção para outras temperaturas. Um técnico mediu uma amostra de leite puro a 30 °C sem aplicar a correção e concluiu, erroneamente, que o leite havia sido adulterado.

O erro do técnico ocorreu porque, com o aumento da temperatura, o leite
- a) contrai, aumentando sua densidade e fazendo o instrumento flutuar mais alto.
- b) dilata, diminuindo sua densidade e fazendo o instrumento afundar mais.
- c) perde massa por evaporação, aumentando a concentração de gordura.
- d) dilata, aumentando sua massa e o empuxo sobre o instrumento.
- e) sofre alteração química de suas proteínas, que passam a se comportar como água.

### Resolução passo a passo
1. **Aquecimento de 15 °C para 30 °C:** o leite **dilata**. O volume aumenta com a mesma massa, então a **densidade diminui**.
2. **Densímetro em líquido menos denso:** o empuxo por volume submerso é menor, e o instrumento **afunda mais** para equilibrar o peso.
3. **Leitura:** densidade menor que a de referência, que é justamente o sinal de **leite aguado**. O técnico interpretou um efeito **térmico** como adulteração.
4. **Correção:** a tabela do manual "devolve" a leitura para 15 °C, como no alcoômetro (Q72).
5. Eliminando:
   - a) Aquecer **dilata**, não contrai.
   - c) Evaporação desprezível no tempo da medição; além disso, aumentaria a densidade.
   - d) A massa **não** muda na dilatação.
   - e) Não há alteração química.

**Gabarito: B**

---

## Questão 5 (Padrão P34: sensibilidade de um sensor = inclinação do gráfico)

### O que você precisa saber antes de fazer essa questão
**Intuição:** um sensor é "sensível" quando uma pequena mudança de temperatura provoca uma **grande mudança** na leitura. O que importa é o **quanto varia**, não o valor da leitura.

**Conceito:**
- Muitos sensores têm resposta linear: **R = A + B·T** (ou U = A + B·T).
  - **A** (coeficiente linear): valor em T = 0. **Não** indica sensibilidade.
  - **B** (coeficiente angular, inclinação): **sensibilidade** = ΔR/ΔT.
- **No gráfico:** a reta **mais inclinada** é a mais sensível. Reta quase horizontal significa sensor quase "cego".
- **Em tabela:** calcule (valor final − valor inicial)/(T_final − T_inicial) para cada sensor.

**Como o ENEM cobra (Q19):** cinco retas R × T; os mais sensíveis são os de maior inclinação: **sensores 2 e 5**.
- Sensor 1 está no topo do gráfico (R ≈ 225 Ω), mas é quase horizontal: péssima sensibilidade.

**Pegadinhas:**
- Escolher quem tem o **maior valor** (reta mais alta) em vez da **maior inclinação**.
- Comparar só um ponto do gráfico.
- Retas que se cruzam: altura não importa, só inclinação.

**Como memorizar:** "**Sensível = íngreme, não alto.**"

### Questão
Termopares são sensores que geram uma tensão elétrica que varia linearmente com a temperatura. Um laboratório testou cinco termopares e registrou a tensão gerada por cada um a 0 °C e a 100 °C.

| Sensor | Tensão a 0 °C (mV) | Tensão a 100 °C (mV) |
|---|---|---|
| 1 | 2,0 | 6,0 |
| 2 | 10,0 | 11,0 |
| 3 | 0,0 | 8,0 |
| 4 | 5,0 | 12,0 |
| 5 | 20,0 | 22,0 |

Os dois sensores que apresentam maior sensibilidade são
- a) 1 e 3.
- b) 2 e 5.
- c) 3 e 4.
- d) 4 e 5.
- e) 1 e 2.

### Resolução passo a passo
1. **Sensibilidade = ΔU/ΔT** (ΔT = 100 °C para todos, então basta comparar ΔU):

| Sensor | ΔU (mV) | Sensibilidade (mV/°C) |
|---|---|---|
| 1 | 4,0 | 0,04 |
| 2 | 1,0 | 0,01 |
| 3 | **8,0** | **0,08** |
| 4 | **7,0** | **0,07** |
| 5 | 2,0 | 0,02 |

2. **Maiores:** sensores **3 e 4**.
3. **Armadilha (alternativa b e d):** o sensor 5 tem as **maiores tensões** (20–22 mV), mas varia só 2 mV. É o equivalente ao "sensor 1" da Q19: alto, porém quase horizontal.

**Gabarito: C**

---

## Questão 6 (Padrão P35: variação percentual linear com a temperatura)

### O que você precisa saber antes de fazer essa questão
**Intuição:** "perde 0,4% por grau" funciona como juros simples: cada grau a mais tira a **mesma fatia** do valor **nominal**.

**Conceito:**
- **Roteiro:**
  1. **ΔT** = |temperatura real − temperatura de referência|.
  2. **Variação percentual total** = taxa × ΔT.
  3. **Valor real** = nominal × (1 ± variação total).
- O sinal da taxa diz se aumenta ou diminui (−0,4%/°C significa que **diminui**).
- "Menor valor" ocorre na condição **mais distante** da referência, no sentido que prejudica.

**Como o ENEM cobra (Q31):** placa fotovoltaica de 250 W a 25 °C, com −0,4%/°C. A 65 °C, ΔT = 40 °C, perda = 16%, e P = 250 × 0,84 = **210 W**.

**Pegadinhas:**
- Usar a temperatura real em vez de ΔT (65 × 0,4% = 26%).
- Responder a **perda** (40 W) em vez do **valor real** (210 W).
- Aplicar a porcentagem sobre o valor já reduzido, como se fossem juros compostos (o ENEM usa linear).

**Como memorizar:** "**Taxa vezes delta, depois tira do nominal.**"

### Questão
O manual de uma bateria automotiva informa que sua capacidade nominal é de 60 Ah a 25 °C e que, abaixo dessa temperatura, a capacidade diminui à taxa de 1,2% da capacidade nominal a cada grau Celsius. Um motorista em uma cidade serrana precisa dar a partida no carro em uma manhã em que a temperatura da bateria é de −5 °C.

A capacidade disponível da bateria, em Ah, nessa manhã é
- a) 21,6.
- b) 38,4.
- c) 45,6.
- d) 56,4.
- e) 60,0.

### Resolução passo a passo
1. **ΔT** = 25 − (−5) = **30 °C** abaixo da referência.
2. **Perda total:** 1,2% × 30 = **36%**.
3. **Capacidade disponível:** 60 × (1 − 0,36) = 60 × 0,64 = **38,4 Ah**.
4. Distratores:
   - a) É a **perda** (60 × 0,36), não a capacidade restante.
   - c) Ignorou o sinal negativo e fez 25 − 5 = 20 °C (perda de 24%).
   - d) Usou ΔT = 5 °C (só a parte abaixo de zero).
   - e) Ignorou o efeito da temperatura.
5. **Por que carro "não pega" no frio:** é exatamente essa queda de capacidade.

**Gabarito: B**

---

## Questão 7 (Padrão P36: transformações gasosas, qualitativas e gráficas)

### O que você precisa saber antes de fazer essa questão
**Intuição:** o gás dentro de um recipiente "briga" com o mundo lá fora. Se a pressão de fora aumenta, o gás é espremido; se diminui, ele se expande. Se esquenta, empurra mais; se esfria, empurra menos.

**Conceito: gás ideal com massa fixa, PV/T = constante (T em kelvin)**

| Transformação | O que é constante | Relação | Gráfico típico |
|---|---|---|---|
| **Isotérmica** | T | P·V = cte | P × V: hipérbole |
| **Isobárica** | P | V/T = cte (V ∝ T) | V × T: reta pela origem |
| **Isocórica (isovolumétrica)** | V | P/T = cte (P ∝ T) | P × T: **reta pela origem** |

- **Q42 (pneu esfriando):** volume e quantidade de ar constantes, então isocórica. P cai proporcionalmente a T, e o gráfico P × T é uma **reta** descendo em direção à origem (alternativa E).
- **Q73 (geladeira):** o ar quente que entrou esfria com a porta fechada (volume constante), a **pressão interna cai abaixo da externa** e a porta "gruda".
- **Q87 (balão de hélio):** sobe, a pressão externa diminui, e o **volume aumenta** (até estourar).

**Pegadinhas:**
- Usar °C nas proporções (P ∝ T só vale em **kelvin**; a reta passa pela origem do eixo em K).
- Q87: "temperatura aumenta" ou "densidade aumenta" estão errados; o que aumenta é o **volume**.
- Q73: não é "volume de ar diminuiu" nem "ímã mais forte"; é **pressão interna menor**.

**Como memorizar:** "**PV sobre T é sagrado.**" Fixe uma grandeza e veja as outras duas.

### Questão
Um turista bebe toda a água de uma garrafa PET e a fecha bem, vazia (cheia de ar), no alto de uma serra, a 1 500 m de altitude. Ao chegar ao litoral, ao nível do mar, ele percebe que a garrafa está amassada. A temperatura do ar no interior da garrafa, no momento em que ela foi fechada, era praticamente igual à temperatura no litoral.

Durante a descida, o ar contido na garrafa sofreu
- a) aumento de massa, pois entrou ar pela tampa.
- b) aumento de volume, pois a temperatura aumentou.
- c) diminuição de volume, em razão do aumento da pressão externa.
- d) diminuição de temperatura, em razão da diminuição da pressão externa.
- e) diminuição de pressão, pois o volume da garrafa aumentou.

### Resolução passo a passo
1. **Altitude maior significa pressão atmosférica menor.** Ao descer, a **pressão externa aumenta**.
2. **Temperatura praticamente igual** no início e no fim: aproximadamente **isotérmica**, P·V = constante.
3. A pressão de fora "aperta" a garrafa (flexível), e o ar interno é comprimido: **volume diminui** e a pressão interna **aumenta** até igualar a externa.
4. É o "inverso" do balão de hélio da Q87: lá a pressão externa diminuía e o volume aumentava.
5. Eliminando:
   - a) A garrafa está fechada: massa constante.
   - b) Volume diminuiu, e a temperatura não mudou.
   - d) A pressão externa **aumentou**.
   - e) A pressão interna **aumentou** e o volume **diminuiu**.

**Gabarito: C**

---

## Questão 8 (Padrão P37: equação geral dos gases + geometria)

### O que você precisa saber antes de fazer essa questão
**Intuição:** um balão é uma "bexiga de gás" que se ajusta à pressão de fora. Subindo, a pressão externa cai muito e o balão cresce; mas o frio da altitude o encolhe um pouco. As duas coisas entram na conta.

**Conceito:**
- **Equação geral (massa fixa):** **P₁V₁/T₁ = P₂V₂/T₂**, sempre com **T em kelvin**.
- **Esfera:** V = (4/3)πr³, então **V ∝ r³**:
  - volume ×8 equivale a raio ×2;
  - volume ×27 equivale a raio ×3;
  - raio ×k equivale a volume ×k³.
- Para achar o raio: r₂/r₁ = **∛(V₂/V₁)**.
- **Roteiro Q24:** leia P e T nos gráficos (nível do mar e altitude), calcule V₂/V₁ = (P₁/P₂)·(T₂/T₁) e depois tire a raiz cúbica.

**Pegadinhas:**
- Esquecer a temperatura (ou usá-la em °C).
- Responder a razão de **volumes** quando pedem **raio** (ou o contrário).
- Inverter P₁/P₂.

**Como memorizar:** "**PV/T antes = PV/T depois; raio é raiz cúbica do volume.**"

### Questão
Um balão meteorológico esférico de látex é lançado ao nível do mar, onde a pressão é de 100 kPa e a temperatura é de 288 K. O fabricante informa que o balão estoura quando seu **raio** atinge o **dobro** do raio que tinha no lançamento. Sabe-se que, na faixa de altitude em que isso ocorre, a temperatura é de 216 K. Considere o gás no interior do balão como ideal e que a pressão interna é igual à externa.

A pressão atmosférica no momento em que o balão estoura é mais próxima de
- a) 6,3 kPa.
- b) 9,4 kPa.
- c) 12,5 kPa.
- d) 37,5 kPa.
- e) 50,0 kPa.

### Resolução passo a passo
1. **Raio dobra, então volume ×8** (2³ = 8). V₂ = 8·V₁.
2. **Equação geral:** P₁V₁/T₁ = P₂V₂/T₂, e então P₂ = P₁ · (V₁/V₂) · (T₂/T₁).
3. **Substituindo:** P₂ = 100 × (1/8) × (216/288) = 100 × 0,125 × 0,75 = **9,375 kPa ≈ 9,4 kPa**.
4. Distratores:
   - c) Ignorou a temperatura (100/8).
   - e) Ignorou a temperatura e usou volume ×2 (confundiu raio com volume).
   - d) Usou volume ×2 com a temperatura.
5. É o **caminho inverso** da Q24: lá se dava a pressão e se pedia o raio; aqui se dá o raio e se pede a pressão.

**Gabarito: B**

---

## Questão 9 (Padrão P38: capacidade calorífica de gases, a partir de gráfico ou tabela)

### O que você precisa saber antes de fazer essa questão
**Intuição:** dê a mesma "dose" de calor a dois gases. O que esquenta mais (ou se expande mais) é o que tem **menor capacidade de absorver calor por grau**.

**Conceito:**
- **Capacidade calorífica (térmica): C = Q/ΔT**. Para a mesma quantidade de gás (mesmo número de mols): **mesmo Q, maior ΔT, logo menor C**.
- **Gás ideal** (a mesma quantidade em mols):
  - **monoatômico** (He, Ne, Ar): C_v = (3/2)R ≈ 12,5 J/(mol·K). Esquenta mais fácil.
  - **diatômico** (N₂, O₂): C_v = (5/2)R ≈ 20,8 J/(mol·K). Parte da energia vai para a **rotação** das moléculas, e não para a temperatura.
- **A pressão constante (Q48, êmbolo livre):** maior ΔT dá maior ΔV, e o objeto sobe mais (Δh maior). Então o gás com a reta **mais inclinada** no gráfico Δh × Q tem **menor capacidade calorífica**.

**Como o ENEM cobra (Q48):** gases M e V equimolares. M sobe mais para o mesmo calor, então M tem **menor capacidade calorífica** (alternativa E).

**Pegadinhas:**
- Escolher "menor massa molar" ou "maior compressibilidade": não é o que o gráfico mostra.
- Confundir capacidade **calorífica** (do sistema) com **calor específico** (por unidade de massa). Com mols iguais, a comparação é direta.

**Como memorizar:** "**Mesma dose, quem reage mais tem menor capacidade.**"

### Questão
Dois recipientes rígidos e idênticos contêm, cada um, 1 mol de um gás ideal diferente, X e Y, inicialmente à mesma temperatura. Os recipientes recebem calor de resistências elétricas idênticas, e a elevação de temperatura de cada gás foi registrada.

| Calor fornecido (J) | 0 | 100 | 200 | 300 |
|---|---|---|---|---|
| ΔT do gás X (K) | 0 | 8,0 | 16,0 | 24,0 |
| ΔT do gás Y (K) | 0 | 4,8 | 9,6 | 14,4 |

A diferença de comportamento entre os gases decorre do fato de o gás X, em relação ao gás Y, apresentar
- a) maior massa molar.
- b) maior pressão inicial.
- c) maior energia de ativação.
- d) menor capacidade calorífica.
- e) maior condutividade térmica.

### Resolução passo a passo
1. **Mesmo calor fornecido:** X varia 8,0 K e Y varia 4,8 K para cada 100 J.
2. **Capacidade calorífica:**
   - C_X = 100/8,0 = **12,5 J/K**.
   - C_Y = 100/4,8 ≈ **20,8 J/K**.
3. X tem **menor capacidade calorífica**: precisa de menos energia por kelvin.
4. **Bônus:** 12,5 ≈ (3/2)R e 20,8 ≈ (5/2)R. X se comporta como gás **monoatômico** (ex.: hélio) e Y como **diatômico** (ex.: nitrogênio).
5. É a mesma lógica da Q48 (lá a medida era o Δh do êmbolo; aqui é o ΔT direto, com volume constante).
6. Eliminando:
   - a) Com mols iguais, a massa molar não explica a diferença de ΔT.
   - b) Pressão inicial não está nos dados.
   - c) "Energia de ativação" é conceito de cinética química (distrator da Q48).
   - e) Condutividade não altera quanto o gás esquenta com o mesmo Q.

**Gabarito: D**

---

## Questão 10 (Padrão P39: 1ª lei, transformação adiabática)

### O que você precisa saber antes de fazer essa questão
**Intuição:** encha um pneu de bicicleta rapidamente e toque na ponta da bomba: ela esquenta. Ninguém deu calor, mas você **empurrou** o gás (trabalho), e essa energia virou agitação das moléculas. O contrário também vale: gás que se expande rápido **esfria**.

**Conceito: 1ª lei da termodinâmica, ΔU = Q − W**
- **ΔU:** variação da energia interna. Para gás ideal, depende **só da temperatura** (ΔU > 0 significa que esquentou).
- **Q:** calor **recebido** (Q > 0) ou cedido (Q < 0).
- **W:** trabalho **realizado pelo gás** (expansão: W > 0; compressão: W < 0).
- **Adiabática:** **Q = 0** (processo rápido ou isolado, sem tempo para trocar calor). Então **ΔU = −W**:
  - **compressão** (W < 0): ΔU > 0, o gás **esquenta** (turbo, Q58; bomba de bicicleta);
  - **expansão** (W > 0): ΔU < 0, o gás **esfria** (N₂ no êmbolo, Q92; spray; válvula de expansão da geladeira).
- **No diagrama P×V (Q92):** a adiabática é **mais inclinada** que a isoterma, porque a pressão cai mais na expansão adiabática (o gás também esfria).
- **Q59:** a energia elétrica excedente é armazenada como **trabalho realizado sobre o nitrogênio** durante a liquefação (compressão).

**Pegadinhas:**
- Q92: "entrada de calor", "saída de calor" e "ΔU = 0" estão errados na adiabática. O certo é: **trabalho associado à variação de energia interna, sem troca de calor**.
- Q58: o ar sai quente do turbo por **compressão adiabática**, não porque "recebeu calor do escape".
- Confundir **isotérmica** (ΔU = 0, Q = W) com **adiabática** (Q = 0, ΔU = −W).

**Como memorizar:** "**Adiabática: sem calor, o trabalho paga a conta da temperatura.**" Comprimiu, esquentou; expandiu, esfriou.

### Questão
O "pistão de fogo" é um instrumento usado por povos do Sudeste Asiático para acender fogueiras. É formado por um cilindro fechado em uma extremidade e um êmbolo bem ajustado. Um pedaço de material inflamável é colocado no fundo do cilindro e, com um golpe muito rápido, o êmbolo é empurrado para dentro. O material pega fogo instantaneamente, sem chama nem faísca.

A ignição ocorre porque o ar no interior do cilindro sofre uma
- a) compressão isotérmica, na qual o calor gerado pelo atrito do êmbolo é transferido ao material.
- b) compressão adiabática, na qual o trabalho realizado sobre o gás aumenta sua energia interna e sua temperatura.
- c) expansão adiabática, na qual o gás realiza trabalho e sua temperatura se eleva.
- d) compressão isobárica, na qual o gás recebe calor da mão do usuário.
- e) transformação isocórica, na qual a pressão aumenta sem variação de temperatura.

### Resolução passo a passo
1. **Golpe muito rápido:** não há tempo para trocar calor com o cilindro e o ambiente, então **Q ≈ 0**: **adiabática**.
2. **Êmbolo para dentro:** volume diminui, é **compressão**, e o trabalho é realizado **sobre** o gás (W < 0).
3. **1ª lei:** ΔU = Q − W = 0 − (negativo) > 0. A energia interna **aumenta** e a temperatura sobe o suficiente para atingir o ponto de ignição.
4. É o mesmo mecanismo do **motor a diesel** (Q32): compressão adiabática do ar até a temperatura de autoignição.
5. Eliminando:
   - a) Isotérmica teria T constante; o atrito é secundário.
   - c) É compressão, não expansão (e a expansão adiabática **esfria**).
   - d) A pressão não é constante, e a mão não fornece calor relevante.
   - e) O volume varia, e a temperatura sobe.

**Gabarito: B**

---

## Placar da Lista 4

| Questão | Padrão | Questões oficiais com a mesma lógica |
|---|---|---|
| 1 | P25: efeito Joule + calorimetria | 51, 61 |
| 2 | P31: dilatação diferencial | 67 |
| 3 | P32: dilatação volumétrica | 45 |
| 4 | P33: dilatação de líquidos e medição | 20, 72 |
| 5 | P34: sensibilidade = inclinação | 19 |
| 6 | P35: variação percentual por grau | 31 |
| 7 | P36: transformações gasosas | 42, 73, 87 |
| 8 | P37: equação geral + geometria | 24 |
| 9 | P38: capacidade calorífica de gases | 48 |
| 10 | P39: adiabática | 58, 59, 92 |

**Padrões abordados nesta lista: 10.** Acumulado: **40 de 45**, cobrindo 82 das 92 questões oficiais (cerca de 89%).
**Padrões que ainda faltam: 5** (P40, P41, P43, P44, P45).

Próxima e última lista: P40 (ciclos Otto e Diesel), P41 (2ª lei), P43 (COP), P44 (usina térmica) e P45 (leitura de dados ambientais), completando com questões de revisão integrada.
