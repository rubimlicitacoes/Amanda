# Lista 3: 10 questões inéditas (padrões P8, P9, P10, P12, P13, P17, P24, P26, P28, P29)

> Constantes: água com c = 4,2 kJ/(kg·°C) = 1 cal/(g·°C), 1 L de água = 1 kg, 1 W = 1 J/s, 1 h = 3 600 s.

---

## Questão 1 (Padrão P8: Lei de Fourier, cálculo direto)

### O que você precisa saber antes de fazer essa questão
**Intuição:** o calor atravessa uma parede como água por um cano. Passa mais quando:
- o "cano" é mais **largo** (área A maior);
- a "pressão" é maior (diferença de temperatura ΔT maior);
- o material **conduz melhor** (k maior);
- o caminho é mais **curto** (espessura e menor).

**Conceito: Lei de Fourier**

  **Φ = k · A · ΔT / e**

| Símbolo | Significado | Unidade (SI) |
|---|---|---|
| Φ (ou q) | fluxo de calor (potência que atravessa) | W (J/s) ou kcal/h |
| k | condutividade térmica do material | W/(m·K) ou kcal/(h·m·°C) |
| A | área atravessada | m² |
| ΔT | diferença de temperatura entre as faces | °C ou K (a **diferença** é a mesma nas duas escalas) |
| e (ou ℓ, d) | espessura | m |

- **Isolar o k:** k = Φ·e / (A·ΔT).
- **Unidades:** se Φ está em kcal/h, o k sai em kcal/(h·m·°C) (Q64). Espessura em cm deve ser convertida para metro.
- "Fluxo **máximo** permitido" significa que o k calculado é um **teto**: servem materiais com k **menor ou igual**.

**Como o ENEM cobra (Q64):** q = 400 kcal/h, A = 10 m², ℓ = 0,2 m, ΔT = 10 °C. Logo k = 400 × 0,2 / (10 × 10) = 0,80, que é o material II.

**Pegadinhas:** inverter a fração (multiplicar pela espessura em vez de dividir); esquecer de converter cm → m; no caso de desigualdade, escolher o material **mais próximo** em vez do que **atende** o limite.

**Como memorizar:** "**Fluxo = k-A-Delta sobre e**". A espessura é a única que fica **embaixo** (quanto mais grossa a parede, menos calor passa).

### Questão
Uma câmara frigorífica para armazenar vacinas terá uma parede externa de 20 m² de área e 10 cm de espessura, separando o interior, mantido a −5 °C, do ambiente externo, a 25 °C. Para que o sistema de refrigeração dê conta da carga térmica, o fluxo de calor através dessa parede não pode ultrapassar 180 W. O quadro apresenta materiais disponíveis para a construção da parede.

| Material | k (W·m⁻¹·K⁻¹) |
|---|---|
| I. Espuma de poliuretano | 0,025 |
| II. Poliestireno expandido (isopor) | 0,035 |
| III. Cortiça | 0,045 |
| IV. Madeira de pinho | 0,13 |
| V. Tijolo cerâmico | 0,70 |

O único material que atende à exigência do projeto é o
- a) I.
- b) II.
- c) III.
- d) IV.
- e) V.

### Resolução passo a passo
1. **Dados em SI:** Φ_máx = 180 W; A = 20 m²; e = 10 cm = **0,10 m**; ΔT = 25 − (−5) = **30 °C**.
2. **k máximo:** k = Φ·e / (A·ΔT) = 180 × 0,10 / (20 × 30) = 18 / 600 = **0,030 W/(m·K)**.
3. **Interpretação:** para o fluxo **não ultrapassar** 180 W, o k precisa ser **≤ 0,030**. Só o poliuretano (0,025) atende.
4. **Armadilha:** o isopor (0,035) é o "mais próximo" de 0,030, mas está **acima** do limite: com ele, o fluxo seria 0,035 × 20 × 30 / 0,10 = 210 W.
5. **Atenção ao ΔT:** de −5 °C a 25 °C a diferença é 30 °C, não 20 °C.

**Gabarito: A**

---

## Questão 2 (Padrão P9: Lei de Fourier, proporção com geometria)

### O que você precisa saber antes de fazer essa questão
**Intuição:** quando o ENEM compara dois recipientes, não precisa calcular nada "absoluto". Monte uma **razão** e cancele tudo o que é igual.

**Conceito:**
- Φ = k·A·ΔT / e. Para dois recipientes com mesma espessura e mesmo ΔT: **Φ_A / Φ_B = (k_A·A_A) / (k_B·A_B)**.
- **Gelo derretendo a 0 °C:** todo calor que entra derrete gelo, Q = m·L. No mesmo intervalo de tempo, **Φ ∝ massa derretida**.
- **Área total interna de uma caixa** (paralelepípedo a × b × c): **A = 2(ab + ac + bc)**. Para um cubo de aresta a: A = 6a².
- Depois é só isolar k_A / k_B.

**Como o ENEM cobra (Q55):**
- Recipiente A, 40 × 40 × 40 cm: área = 6 × 1 600 = 9 600 cm².
- Recipiente B, 60 × 40 × 40 cm: área = 2(2 400 + 2 400 + 1 600) = 12 800 cm².
- m_B = 2·m_A, então k_B × 12 800 = 2 × k_A × 9 600, e k_A/k_B = 12 800 / 19 200 ≈ **0,67**.

**Pegadinhas:**
- Usar o **volume** em vez da **área**.
- Calcular a área de só uma face.
- Inverter a razão no final (o enunciado pede k_A/k_B ou k_B/k_A?).
- Esquecer que **mais gelo derretido = mais calor entrou**.

**Como memorizar:** "**Gelo derretido é o recibo do calor que entrou.**" Razão de massas = razão de fluxos.

### Questão
Para comparar o isolamento de dois modelos de caixa térmica, A e B, feitos de materiais diferentes mas com paredes de mesma espessura, um técnico coloca, em cada uma, um grande bloco de gelo a 0 °C, sem tocar as paredes, e fecha as caixas em uma sala a 30 °C. A caixa A é um cubo de dimensões internas 30 cm × 30 cm × 30 cm, e a caixa B tem dimensões internas 60 cm × 30 cm × 30 cm. Após 4 horas, ainda havia gelo nas duas caixas, e a massa de gelo derretida foi de 300 g na caixa A e de 250 g na caixa B.

A razão k_A/k_B entre as condutividades térmicas dos materiais das caixas A e B é mais próxima de
- a) 0,50.
- b) 0,72.
- c) 1,20.
- d) 2,00.
- e) 3,33.

### Resolução passo a passo
1. **O que é igual nas duas:** espessura, ΔT (30 °C − 0 °C) e tempo. Isso cancela.
2. **Fluxo ∝ massa derretida:** Φ_A/Φ_B = 300/250 = **1,2**.
3. **Áreas internas:**
   - A (cubo 30 cm): 6 × 30 × 30 = **5 400 cm²**.
   - B (60 × 30 × 30): 2 × (60·30 + 60·30 + 30·30) = 2 × (1 800 + 1 800 + 900) = **9 000 cm²**.
4. **Razão de Fourier:** Φ_A/Φ_B = (k_A × 5 400) / (k_B × 9 000) = 1,2.
5. Isolando: k_A/k_B = 1,2 × 9 000/5 400 = 1,2 × 1,667 = **2,0**.
6. **Leitura física:** A derreteu mais gelo tendo **menos** área, então seu material conduz bem mais (o dobro).
7. Distratores:
   - c) Ignorou as áreas.
   - a) Inverteu a razão.
   - b) Multiplicou pela razão de áreas invertida (1,2 × 0,6).

**Gabarito: D**

---

## Questão 3 (Padrão P10: Lei de Fourier, camadas em série)

### O que você precisa saber antes de fazer essa questão
**Intuição:** numa parede com duas camadas, o calor precisa atravessar **as duas, uma depois da outra**. É como uma estrada com um trecho de terra: o trecho ruim limita tudo. A camada **mais isolante domina** o resultado.

**Conceito:**
- Cada camada tem uma "resistência térmica" (por unidade de área): **R = e/k**.
- Em série, as resistências **somam**: R_total = e₁/k₁ + e₂/k₂.
- Fluxo: **Φ = A·ΔT / (e₁/k₁ + e₂/k₂)**. É a fórmula dada na Q60.
- Condutividade equivalente: **k_eq = e_total / (e₁/k₁ + e₂/k₂)**. Ela **não** é a média aritmética dos k.
- Exemplo da Q60 (metade cobre k = 40, metade aço k = 5): e/k_eq = (e/2)/40 + (e/2)/5, então k_eq ≈ 8,9. É bem mais perto do aço (o pior condutor) do que da média 22,5.

**Como o ENEM cobra (Q60):** ordenar panelas de ferro (k = 8), alumínio (k = 20) e cobre-aço (k_eq ≈ 8,9) pela economia (mais condução = mais econômica): alumínio, cobre-aço, ferro.

**Pegadinhas:**
- **Tirar a média aritmética** dos k: é o erro que o ENEM espera. A média superestima a condução.
- Esquecer que cada camada tem **sua** espessura.
- Confundir "mais econômica" (conduz mais) com "melhor isolante" (conduz menos).

**Como memorizar:** "**Em série, o pior manda.**" Some e/k, nunca faça média de k.

### Questão
Um arquiteto compara três opções de parede externa para uma casa em região de clima quente. Todas têm 20 cm de espessura total e a mesma área:

- I. Tijolo maciço (k = 0,60 W/m·K) em toda a espessura.
- II. Concreto (k = 1,50 W/m·K) em toda a espessura.
- III. 10 cm de concreto (k = 1,50 W/m·K) mais 10 cm de painel de madeira (k = 0,15 W/m·K).

Para paredes de duas camadas, o fluxo de calor é dado por

  Φ = A·ΔT / (d₁/k₁ + d₂/k₂),

em que d₁ e d₂ são as espessuras das camadas e k₁ e k₂, suas condutividades.

Para o mesmo ΔT entre o exterior e o interior, a ordem das paredes, da **melhor** para a **pior** em isolamento térmico, é
- a) III, I, II.
- b) I, III, II.
- c) II, I, III.
- d) I, II, III.
- e) III, II, I.

### Resolução passo a passo
1. **Compare pela resistência R = Σ e/k** (quanto maior, melhor o isolamento). Espessuras em metro:
   - I: 0,20/0,60 = **0,333**.
   - II: 0,20/1,50 = **0,133**.
   - III: 0,10/1,50 + 0,10/0,15 = 0,067 + 0,667 = **0,733**.
2. **Ordem de R (melhor isolamento primeiro):** III (0,733) > I (0,333) > II (0,133).
3. **k equivalente de III:** 0,20/0,733 ≈ **0,27 W/(m·K)**. Isola **melhor** que o tijolo puro.
4. **A armadilha (alternativa b):** a média aritmética (1,50 + 0,15)/2 = 0,825 colocaria III **depois** do tijolo. Em série, porém, a camada de madeira domina.
5. **Conferência física:** a madeira, sozinha em 10 cm, já tem R = 0,667, o dobro do tijolo inteiro.

**Gabarito: A**

---

## Questão 4 (Padrão P12: aquecedor solar e efeito estufa, qualitativo)

### O que você precisa saber antes de fazer essa questão
**Intuição:** o vidro é uma "porta de mão única" para a radiação. Deixa entrar a luz do Sol, mas segura boa parte do "calor invisível" (infravermelho) que os objetos de dentro emitem.

**Conceito:**
- O Sol emite principalmente **luz visível** (e ultravioleta e infravermelho próximo): radiação de **comprimento de onda curto**. O **vidro é transparente** a ela.
- Objetos dentro (bancos, tanques pretos, placas) **absorvem** essa luz, **aquecem** e reemitem energia como **infravermelho de onda longa**. O **vidro é pouco transparente** a ele.
- Resultado: entra mais energia do que sai, e o interior aquece. É o **efeito estufa**.
- Recipiente **fechado** também impede que o ar quente saia por **convecção**.
- **Coletor solar (Q30, Q33):**
  - superfície **preta** para absorver bem;
  - **vidro** na cobertura para reter o infravermelho;
  - **isolamento** no fundo para reduzir a condução;
  - **camada refletiva** para redirecionar luz aos tanques (não "armazena" energia).
  
  O coletor **converte energia radiante em térmica**, usada para aquecer água.

**Pegadinhas:**
- "O vidro é bom condutor e mantém a temperatura" (distrator da Q33): o vidro é mau condutor, e sua função é ótica.
- "Os tanques pretos são maus absorvedores" (Q33): preto é **bom** absorvedor.
- "O coletor produz energia elétrica" (Q30): o coletor **térmico** não gera eletricidade (quem gera é o painel fotovoltaico).
- "A camada refletiva armazena energia": espelho reflete, não armazena.

**Como memorizar:** "**Vidro: entra luz, não sai infravermelho.**"

### Questão
Um carro ficou estacionado ao sol, com os vidros totalmente fechados, durante uma tarde em que a temperatura ambiente era de 32 °C. Ao abrir a porta, o motorista constatou que o ar interno estava a mais de 55 °C e que os bancos escuros estavam muito quentes ao toque.

O aquecimento do interior do veículo acima da temperatura ambiente ocorre porque
- a) o vidro é transparente à maior parte da radiação solar, mas pouco transparente ao infravermelho emitido pelo interior aquecido, e as janelas fechadas impedem a saída do ar quente por convecção.
- b) o vidro funciona como uma lente que concentra os raios solares sobre os bancos, elevando sua temperatura.
- c) o vidro é bom condutor térmico e transfere o calor do ar externo para o interior do veículo.
- d) a radiação solar aquece diretamente o ar interno, que é um excelente absorvedor de luz visível.
- e) as janelas fechadas impedem a saída do frio acumulado durante a noite, que se transforma em calor ao longo do dia.

### Resolução passo a passo
1. **Entrada:** a luz do Sol atravessa o vidro (transparente ao visível) e é **absorvida** pelos bancos escuros (bons absorvedores).
2. **Reemissão:** os bancos aquecidos emitem **infravermelho**, que o vidro deixa sair mal. A energia fica "presa": efeito estufa.
3. **Convecção bloqueada:** o ar aquecido em contato com os bancos não pode sair, porque os vidros estão fechados.
4. **Balanço:** entra mais energia do que sai, e a temperatura interna passa da externa.
5. Eliminando:
   - b) Vidro plano não concentra luz como lente.
   - c) Vidro é mau condutor, e o ambiente (32 °C) está **mais frio** que o interior (55 °C); por condução, o calor sairia do carro.
   - d) O ar é praticamente **transparente** à luz visível; ele se aquece em contato com as superfícies.
   - e) "Frio acumulado" não existe.

**Gabarito: A**

---

## Questão 5 (Padrão P13: escolher material cruzando duas propriedades)

### O que você precisa saber antes de fazer essa questão
**Intuição:** o ENEM dá **duas tabelas** e você precisa escolher **uma linha de cada**, cada uma pelo critério certo. Descubra primeiro **qual é o objetivo** (aquecer ou manter frio) e daí cada critério.

**Conceito:**
- **Absorbância (ou absortância):** fração da radiação que **chega** e é absorvida.
- **Refletância:** fração refletida (absorbância + refletância = 1, para material opaco).
- **Emitância (emissividade):** capacidade de **emitir** radiação térmica (infravermelho), de 0 a 1.
- **Quer AQUECER** (coletor solar, Q14):
  - material com **k alto** (leva o calor até a água);
  - revestimento com **alta absorbância solar e baixa emitância IV**, ou seja, **maior razão absorbância/emitância** (absorve muito, perde pouco).
- **Quer MANTER FRESCO** (telhado frio, "cool roof"):
  - material com **k baixo** (isola);
  - revestimento com **alta refletância solar e alta emitância IV** (reflete o Sol e devolve ao céu o pouco que absorveu).
- **Atenção:** alumínio polido reflete muito, mas tem **emitância baixíssima**. O pouco que absorve, ele não consegue irradiar e retém.

**Como o ENEM cobra (Q14):** coletor = **cobre** (maior k) + material seletivo **A** (maior razão absorbância/emitância, 8,45).

**Pegadinhas:**
- Achar que "reflete muito" basta para manter fresco. A emitância também conta.
- Usar o mesmo critério para os dois materiais.
- Escolher o "meio-termo" de cada tabela.

**Como memorizar:**
- "**Coletor: absorve e guarda**" (k alto, absorbância/emitância alta).
- "**Telhado frio: reflete e despacha**" (k baixo, refletância alta, emitância alta).

### Questão
Um galpão de armazenamento de grãos precisa ter o interior o mais fresco possível durante o dia, sem uso de ar-condicionado. O projetista deve escolher o tipo de telha e o revestimento externo a partir dos quadros.

| Telha | k (W·m⁻¹·K⁻¹) |
|---|---|
| Aço galvanizado | 50 |
| Fibrocimento | 0,35 |
| Termoacústica (núcleo de poliuretano) | 0,03 |

| Revestimento | Refletância solar | Emitância infravermelha |
|---|---|---|
| A. Tinta branca acrílica | 0,85 | 0,90 |
| B. Alumínio polido | 0,90 | 0,05 |
| C. Tinta cinza-escura | 0,35 | 0,90 |

Para atender ao objetivo, devem ser utilizados, respectivamente, a telha e o revestimento
- a) aço galvanizado e A.
- b) termoacústica e B.
- c) termoacústica e A.
- d) fibrocimento e C.
- e) aço galvanizado e B.

### Resolução passo a passo
1. **Objetivo:** manter o interior **fresco**. Então a telha deve **isolar** (menor k): **termoacústica** (0,03).
2. **Revestimento:** precisa **refletir** o Sol (alta refletância) **e** irradiar o calor absorvido (alta emitância).
   - A: refletância 0,85 e emitância 0,90. Atende os **dois** critérios.
   - B: reflete mais (0,90), mas, com emitância 0,05, **retém** o calor que absorve.
   - C: reflete pouco (0,35) e absorve muito.
3. **Combinação:** termoacústica + A.
4. **Armadilha:** a alternativa b escolhe B por ter a maior refletância e ignora a segunda propriedade, exatamente o que a Q14 testa (são duas colunas, e as duas importam).
5. **Contraste com a Q14:** lá o objetivo era **aquecer** (k alto, absorver e reter). Aqui é o oposto.

**Gabarito: C**

---

## Questão 6 (Padrão P17: intensidade de radiação × área)

### O que você precisa saber antes de fazer essa questão
**Intuição:** a radiação solar é uma "chuva de energia". A intensidade diz quantos watts caem em cada metro quadrado. Quanto mais área de coletor, mais energia por segundo você recolhe.

**Conceito:**
- **Intensidade (I):** potência por unidade de área, em W/m². **P = I·A**.
- Se só uma fração é aproveitada (eficiência η), então **P_útil = η·I·A**.
- Junte com a calorimetria: **η·I·A·Δt = m·c·ΔT**.
- Daí isole o que pedem: tempo (Q91), área, ou comprimento (Q83: área = largura × comprimento).
- **Conversões:**
  - 1 kW/m² = 1 000 W/m²;
  - mW/cm² × 10 = W/m² (135,2 mW/cm² = 1 352 W/m²);
  - 1 m³ de água = 1 000 L = 1 000 kg.

**Como o ENEM cobra:**
- Q91: I = 0,03 kW/m², A = 1 m², 1 L de 20 °C a 70 °C. Q = 1 × 4 200 × 50 = 210 000 J, e t = 210 000/30 = **7 000 s**.
- Q83: I = 800 W/m², 1 t de água de 20 °C a 100 °C em 1 h. P = 3,36 × 10⁸ / 3 600 ≈ 93 300 W, A ≈ 117 m², e com largura 6 m o comprimento fica ≈ **19 m**.

**Pegadinhas:** esquecer a eficiência; não converter horas em segundos; não converter kW em W; dar a resposta em área quando pedem comprimento (ou vice-versa).

**Como memorizar:** "**I vezes A vezes t = m-c-ΔT**" (a energia que chove = a energia que esquenta).

### Questão
Uma família deseja instalar coletores solares para aquecer diariamente 200 L de água, de 20 °C até 45 °C, durante as 5 horas de sol mais intenso do dia. Nesse período, a intensidade média da radiação solar sobre os coletores é de 700 W/m², e apenas 50% dessa energia é efetivamente transferida para a água. Considere o calor específico da água 4 200 J/(kg·°C) e sua densidade 1 kg/L.

A área mínima de coletores, em metro quadrado, é mais próxima de
- a) 0,9.
- b) 1,7.
- c) 3,3.
- d) 6,7.
- e) 12.

### Resolução passo a passo
1. **Energia necessária:** Q = m·c·ΔT = 200 × 4 200 × (45 − 20) = 200 × 4 200 × 25 = **2,1 × 10⁷ J**.
2. **Tempo:** 5 h = 5 × 3 600 = **18 000 s**.
3. **Potência útil necessária:** 2,1 × 10⁷ / 18 000 ≈ **1 167 W**.
4. **Considerando os 50%:** a radiação incidente precisa ser 1 167 / 0,5 ≈ **2 333 W**.
5. **Área:** A = P/I = 2 333 / 700 ≈ **3,3 m²**.
6. **Distrator b) 1,7:** esqueceu os 50% (1 167/700). É o erro mais provável.

**Gabarito: C**

---

## Questão 7 (Padrão P24: capacidade térmica por volume, ρ·c)

### O que você precisa saber antes de fazer essa questão
**Intuição:** quando o ENEM compara **volumes iguais** (e não massas iguais) de dois materiais, não basta olhar o calor específico. Um material mais denso tem **mais massa** no mesmo volume, então "guarda" mais energia.

**Conceito:**
- Q = m·c·ΔT, com m = ρ·V. Então **Q = ρ·V·c·ΔT**.
- **Capacidade térmica por volume:** ρ·c. Mesma energia e mesmo volume: **ΔT = Q/(V·ρ·c)**, ou seja, **ΔT ∝ 1/(ρ·c)**.
- **Razão de variações:** ΔT₁/ΔT₂ = (ρ₂·c₂)/(ρ₁·c₁). É **inversa** à razão dos produtos ρ·c.
- Unidades: basta usar as mesmas para os dois materiais; elas se cancelam.

**Como o ENEM cobra (Q57):**
- Água: ρ = 1 000 kg/m³, c = 4,2. Concreto: ρ = 2 500 kg/m³, c = 0,8.
- ρc da água = 4 200; ρc do concreto = 2 000.
- ΔT_concreto/ΔT_água = 4 200/2 000 = **2,1**.

**Pegadinhas:**
- Usar só a razão de calores específicos (4,2/0,8 = 5,25): ignora a densidade.
- Multiplicar pela razão de densidades no sentido errado.
- Inverter a razão final (o material de **menor** ρc varia **mais**).

**Como memorizar:** "**Volume igual? Compare ρ·c. Quem tem menos ρ·c esquenta mais.**"

### Questão
Em regiões desérticas, a amplitude térmica diária é muito maior que em regiões alagadas. Para estimar esse efeito, um estudante comparou uma camada superficial de areia seca com uma camada de água de **mesmo volume**, ambas expostas à mesma radiação solar. Desprezando a evaporação e as trocas com o ar, e considerando que toda a radiação é absorvida, ele utilizou os dados:

| Material | Densidade (kg/m³) | Calor específico (J/g·°C) |
|---|---|---|
| Água | 1 000 | 4,2 |
| Areia seca | 1 600 | 0,8 |

A razão entre a variação de temperatura da areia e a da água é mais próxima de
- a) 0,30.
- b) 1,6.
- c) 3,3.
- d) 5,3.
- e) 8,4.

### Resolução passo a passo
1. **Mesma energia, mesmo volume:** ΔT ∝ 1/(ρ·c).
2. **Produtos ρ·c:**
   - Água: 1 000 × 4,2 = **4 200**.
   - Areia: 1 600 × 0,8 = **1 280**.
3. **Razão:** ΔT_areia/ΔT_água = 4 200/1 280 ≈ **3,3**.
4. A areia varia mais porque seu ρc é menor, o que explica a grande amplitude térmica dos desertos.
5. Distratores:
   - a) Razão invertida.
   - d) Ignorou a densidade (4,2/0,8 = 5,25).
   - e) Usou a densidade invertida (5,25 × 1,6).
   - b) Usou só a razão de densidades.

**Gabarito: C**

---

## Questão 8 (Padrão P26: potência como critério de eficiência)

### O que você precisa saber antes de fazer essa questão
**Intuição:** entre dois carregadores de celular, o "melhor" é o que carrega **mais rápido**, não o que entrega mais energia ao longo do dia. Para o ENEM, aparelho de aquecimento eficiente é o que entrega **muita energia em pouco tempo**, ou seja, tem **maior potência útil**.

**Conceito:**
- **Potência útil: P = E_útil / Δt = m·c·ΔT / Δt**.
- Comparando aparelhos que aquecem **amostras diferentes**, não olhe só o tempo nem só a energia; calcule a **razão** energia/tempo para cada um.
- **Atalho:** se todas as amostras são de **água** (mesmo c), compare **m·ΔT/Δt**. O c se cancela na comparação.

**Como o ENEM cobra (Q11):** fornos de micro-ondas aquecendo amostras diferentes. O mais eficiente "forneceu a **maior quantidade de energia em menos tempo**" (C).

**Pegadinhas:**
- Escolher quem "forneceu mais energia" sem considerar o tempo.
- Escolher quem "foi mais rápido" sem considerar quanta energia entregou.
- "Aqueceu a amostra de menor calor específico mais lentamente": descreve o pior caso, não o melhor.

**Como memorizar:** "**Eficiência no ENEM de aquecimento = joules por segundo.**"

### Questão
Uma associação de defesa do consumidor testou cinco chaleiras elétricas. Cada uma aqueceu uma quantidade diferente de água, com diferentes variações de temperatura, e o tempo foi cronometrado. Despreze as perdas para o ambiente.

| Chaleira | Massa de água (kg) | Variação de temperatura (°C) | Tempo (min) |
|---|---|---|---|
| A | 1,0 | 80 | 4,0 |
| B | 1,5 | 60 | 5,0 |
| C | 0,5 | 80 | 1,5 |
| D | 2,0 | 50 | 7,0 |
| E | 1,2 | 75 | 4,0 |

A chaleira que transferiu energia à água com maior potência foi a
- a) A.
- b) B.
- c) C.
- d) D.
- e) E.

### Resolução passo a passo
1. **Todas aquecem água**, então compare **m·ΔT/Δt** (o c é igual e se cancela).

| Chaleira | m·ΔT (kg·°C) | ÷ tempo (min) | Resultado |
|---|---|---|---|
| A | 80 | 4,0 | 20,0 |
| B | 90 | 5,0 | 18,0 |
| C | 40 | 1,5 | **26,7** |
| D | 100 | 7,0 | 14,3 |
| E | 90 | 4,0 | 22,5 |

2. **Maior razão:** C. Em watts: 0,5 × 4 200 × 80 / 90 s ≈ **1 870 W**.
3. **Armadilhas:**
   - D entregou **mais energia** (100 kg·°C, ou 420 kJ), mas demorou muito: é a de **menor** potência.
   - C entregou a **menor** energia, mas no menor tempo, e tem a maior potência.
4. Conecta com a Q11: "maior quantidade de energia **em menos tempo**" significa maior razão energia/tempo.

**Gabarito: C**

---

## Questão 9 (Padrão P28: evaporação resfria; a umidade atrapalha)

### O que você precisa saber antes de fazer essa questão
**Intuição:** saia molhado da piscina num dia de vento seco e você treme de frio. A água evaporando da pele leva calor embora. Num dia abafado e úmido, você sua e não se refresca, porque o suor não consegue evaporar.

**Conceito:**
- **Evaporação** é vaporização na superfície, a qualquer temperatura. **Absorve** calor latente da superfície de onde sai, então **resfria** essa superfície (suor na pele, água na moringa de barro, Q50).
- **Fatores que aceleram a evaporação:**
  - **baixa umidade** do ar (ar "com espaço" para mais vapor);
  - temperatura alta;
  - vento (renova o ar junto à superfície);
  - grande área exposta.
- **Umidade relativa (UR):** quanto vapor o ar tem em relação ao máximo que poderia ter naquela temperatura. UR alta significa ar quase saturado, e a evaporação fica difícil (Q49: "o suor apresenta maior dificuldade para evaporar").
- **Climatizador evaporativo (Q76):** quanto **menor a UR** do ar de entrada, **maior a redução de temperatura**. Leia na tabela a linha da UR e a coluna da T de cada cidade.
- **Psicrômetro:** dois termômetros, um com o bulbo envolto em pano úmido. Quanto mais seco o ar, mais o pano evapora e **maior a diferença** entre os dois.

**Pegadinhas:**
- Q49: não é "a temperatura do vapor é alta" nem "o vapor condensa na pele"; é a **dificuldade de evaporação**.
- Q50: é **evaporação** (não condensação nem fusão) que "retira energia do sistema".
- Achar que umidade alta "esfria" o ar.

**Como memorizar:** "**Evaporar é roubar calor; ar úmido não deixa roubar.**"

### Questão
Um psicrômetro é formado por dois termômetros idênticos: um com o bulbo exposto ao ar ("bulbo seco") e outro com o bulbo envolto em um pano permanentemente umedecido ("bulbo úmido"). Uma rede de estações meteorológicas registrou, no mesmo horário, as condições de cinco cidades, todas com temperatura do ar (bulbo seco) igual a 30 °C e vento semelhante.

| Cidade | Umidade relativa do ar |
|---|---|
| Belém | 85% |
| Manaus | 78% |
| Rio de Janeiro | 65% |
| Cuiabá | 45% |
| Brasília | 25% |

A maior diferença entre as leituras dos termômetros de bulbo seco e de bulbo úmido ocorreu em
- a) Belém, pois o ar mais úmido condensa sobre o pano e o resfria.
- b) Manaus, pois a umidade intermediária favorece a troca de calor por condução.
- c) Rio de Janeiro, pois a proximidade do mar mantém o pano frio.
- d) Cuiabá, pois a umidade média permite evaporação sem saturar o ar.
- e) Brasília, pois o ar seco favorece a evaporação da água do pano, que retira calor do bulbo.

### Resolução passo a passo
1. **Bulbo seco** indica a temperatura do ar: 30 °C em todas as cidades.
2. **Bulbo úmido:** a água do pano **evapora**, retira calor latente do bulbo, e o termômetro marca **menos**.
3. Quanto **mais seco** o ar (menor UR), **mais intensa** a evaporação, e maior a queda do bulbo úmido. Então a **diferença** entre os termômetros é **maior**.
4. Menor UR da tabela: **Brasília (25%)**.
5. Em Belém (85%), o ar está quase saturado, a evaporação é pequena e as leituras ficam próximas. Com 100% de UR, a diferença seria zero.
6. Eliminando:
   - a) Condensação **libera** calor (aqueceria) e não ocorre a 30 °C com UR 85%.
   - b), c) e d) Não usam o critério correto (menor UR, maior evaporação).

**Gabarito: E**

---

## Questão 10 (Padrão P29: fatores da mudança de fase, pressão e temperatura)

### O que você precisa saber antes de fazer essa questão
**Intuição:** a água não ferve sempre a 100 °C. Para ferver, as bolhas de vapor precisam "vencer" a pressão que está em cima do líquido. Pressão maior exige água mais quente; pressão menor faz a água ferver mais fria.

**Conceito:**
- **Ponto de ebulição depende da pressão externa:**
  - pressão **maior**, ebulição a temperatura **maior** (panela de pressão: ~120 °C);
  - pressão **menor**, ebulição a temperatura **menor** (altitude: La Paz ~87 °C; Everest ~70 °C).
- **Redução súbita de pressão (Q52, leite UHT):** a água do leite passa a ferver a uma temperatura menor que a dele, **vaporiza**, **absorve calor latente** do próprio leite, e a temperatura cai rapidamente.
- **Para solidificar (Q78):** é preciso **retirar** calor, e o ambiente precisa estar **abaixo** de 0 °C. Dentro do iglu a temperatura é maior que 0 °C (o gelo isola e as pessoas aquecem o ar), então a água não congela sozinha e é preciso geladeira.
- **Cozimento** depende da **temperatura** da água, não de "quanto ela borbulha". Ferver mais forte não aumenta a temperatura.

**Pegadinhas:**
- Achar que a panela de pressão "fornece mais calor" ou "cozinha com o vapor".
- Q52: a explicação é **transferência de energia na vaporização**, não "expansão livre" nem "radiação térmica".
- Aumentar a chama de uma panela comum já fervendo **não** aumenta a temperatura (fica no patamar).

**Como memorizar:** "**Pressão sobe, ebulição sobe; pressão desce, ebulição desce.**"

### Questão
Moradores de cidades de grande altitude, como La Paz (3 600 m), relatam que alimentos como feijão e grão-de-bico demoram muito mais para ficar cozidos em panelas comuns, mesmo com a água fervendo vigorosamente. O uso da panela de pressão resolve o problema.

A panela de pressão é eficaz nessa situação porque
- a) aumenta a quantidade de calor fornecida pela chama ao alimento.
- b) impede que a água ferva, de modo que todo o calor é usado para cozinhar o alimento.
- c) aumenta a pressão sobre o líquido, elevando a temperatura de ebulição da água e, portanto, a temperatura de cozimento.
- d) diminui a pressão interna, permitindo que o vapor atinja o alimento mais rapidamente.
- e) faz a água ferver com mais intensidade, e as bolhas transferem mais calor ao alimento.

### Resolução passo a passo
1. **Em altitude**, a pressão atmosférica é menor, então a água ferve a ~87 °C. Uma vez fervendo, **não passa disso** (patamar), e o alimento cozinha a uma temperatura mais baixa, mais devagar.
2. **Panela de pressão:** a tampa vedada retém o vapor e a **pressão interna aumenta**. A água só ferve a uma temperatura **maior** (~110–120 °C).
3. Com a água mais quente, as reações de cozimento são mais rápidas.
4. Eliminando:
   - a) A chama é a mesma; o que muda é a temperatura máxima da água.
   - b) A água ferve, só que a uma temperatura maior.
   - d) A pressão **aumenta**, não diminui.
   - e) Ferver "com mais intensidade" não eleva a temperatura.
5. Ligação com a Q52 (leite UHT): lá a pressão é **reduzida** de propósito, a água vaporiza, absorve energia e o leite resfria. É a mesma relação pressão–ebulição, usada no sentido oposto.

**Gabarito: C**

---

## Placar da Lista 3

| Questão | Padrão | Questões oficiais com a mesma lógica |
|---|---|---|
| 1 | P8: Fourier, cálculo direto | 64 |
| 2 | P9: Fourier, proporção com geometria | 55 |
| 3 | P10: Fourier em série | 60 |
| 4 | P12: efeito estufa e aquecedor solar | 30, 33 |
| 5 | P13: duas propriedades cruzadas | 14 |
| 6 | P17: intensidade × área | 83, 91 |
| 7 | P24: capacidade térmica por volume | 57 |
| 8 | P26: potência como critério | 11 |
| 9 | P28: evaporação e umidade | 49, 50, 76 |
| 10 | P29: pressão e mudança de fase | 52, 78 |

**Padrões abordados nesta lista: 10.** Acumulado: **30 de 45**, cobrindo 66 das 92 questões oficiais (cerca de 72%).
**Padrões que ainda faltam: 15.**

Próxima lista (sugestão): P25, P31, P32, P33, P34, P35, P36, P37, P38, P39 (efeito Joule, dilatação, termometria e gases). Depois, a lista final com P40, P41, P43, P44 e P45 (ciclos, 2ª lei, COP, usina e leitura de dados).
