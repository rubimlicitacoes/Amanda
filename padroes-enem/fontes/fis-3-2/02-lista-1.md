# Lista 1: Fundamentos e resistência (padrões P1 a P8)

---

## Questão 1 (Padrão P1: capacidade de bateria → tempo de uso)

### O que você precisa saber antes de fazer essa questão
- A capacidade em **mAh** é **carga elétrica**, não energia: Q = i·Δt.
- Tempo de uso = capacidade ÷ corrente. **mAh ÷ mA = hora.**
- 1 mAh = 3,6 C. Energia da bateria = U × capacidade (3,7 V × 0,6 Ah = 2,22 Wh).
- **Pegadinha:** a tensão (3,7 V) não entra no cálculo do tempo. Ela só serve se a pergunta for sobre energia.

### Questão
Um fone de ouvido sem fio traz na embalagem a especificação da bateria: **3,7 V / 600 mAh**. Durante a reprodução de música, o fone consome uma corrente média de **40 mA**.

Com a bateria completamente carregada, o tempo máximo de reprodução, em hora, é
- a) 0,07.
- b) 1,5.
- c) 15.
- d) 55,5.
- e) 150.

### Resolução passo a passo
1. A capacidade (600 mAh) é a carga total disponível.
2. Tempo = capacidade ÷ corrente = 600 mAh ÷ 40 mA = **15 h**.
3. Por que os distratores caem:
   - a) Inverteu a divisão (40 ÷ 600).
   - d) Multiplicou por 3,7 V sem motivo.
   - b) e e) Erro de potência de 10.
4. Mesma lógica das questões 5 (notebook) e 28 (carregador) da lista.

**Gabarito: C**

---

## Questão 2 (Padrão P2: tensão = energia por carga)

### O que você precisa saber antes de fazer essa questão
- **U = E/Q**: 1 volt = 1 joule por coulomb. A tensão diz quanta energia cada coulomb recebe.
- Potência = U·i.
- Etiqueta de carregador: **entrada** (rede, alternada ~) e **saída** (o que vai para o aparelho, contínua ⎓). A pergunta sobre o que "chega ao aparelho" usa a **saída**.

### Questão
A etiqueta do carregador de um notebook informa:

```
Entrada: 100-240 V ~ 1,5 A 50/60 Hz
Saída:   20 V ⎓ 3,25 A
```

A energia fornecida a cada coulomb de carga que sai do carregador para o notebook e a potência máxima de saída são, respectivamente,
- a) 20 J/C e 65 W.
- b) 3,25 J/C e 65 W.
- c) 20 J/C e 360 W.
- d) 240 J/C e 360 W.
- e) 100 J/C e 150 W.

### Resolução passo a passo
1. Energia por carga é a tensão de saída: **20 V = 20 J/C**.
2. Potência de saída: P = U·i = 20 × 3,25 = **65 W**.
3. Por que os distratores caem:
   - b) 3,25 é a corrente, não energia por carga.
   - c) e d) Usaram a entrada (240 V × 1,5 A = 360 W).
   - e) Usaram a tensão mínima de entrada.

**Gabarito: A**

---

## Questão 3 (Padrão P3: capacitor, Q = C·U)

### O que você precisa saber antes de fazer essa questão
- Capacitor armazena **carga**: **Q = C·U**.
- **μ (micro) = 10⁻⁶.** 150 μF = 150 × 10⁻⁶ F.
- Energia armazenada: E = C·U²/2. **Pegadinha:** o ENEM coloca a energia entre as alternativas quando pede a carga.

### Questão
O flash de uma câmera fotográfica usa um capacitor de **150 μF**, que é carregado até **300 V** antes de cada disparo.

A carga armazenada nesse capacitor, em coulomb, é
- a) 5,0 × 10⁻⁷.
- b) 2,0.
- c) 6,75.
- d) 4,5 × 10⁻².
- e) 4,5 × 10⁴.

### Resolução passo a passo
1. Q = C·U = 150 × 10⁻⁶ × 300 = 45 000 × 10⁻⁶ = **4,5 × 10⁻² C**.
2. Por que os distratores caem:
   - c) 6,75 J é a **energia** (C·U²/2), não a carga.
   - e) Esqueceu o micro.
   - a) e b) Dividiram em vez de multiplicar.

**Gabarito: D**

---

## Questão 4 (Padrão P4: 1ª Lei de Ohm e choque elétrico)

### O que você precisa saber antes de fazer essa questão
- **i = U/R.** Quanto menor a resistência do corpo, maior a corrente.
- Pele seca ≈ 100 000 Ω; pele molhada ou suada ≈ 1 000 a 2 000 Ω.
- Converta: 0,11 A = 110 mA.
- Depois de calcular, **localize a faixa** na tabela de efeitos.

### Questão
O quadro mostra efeitos da corrente elétrica no corpo humano.

| Corrente | Efeito |
|---|---|
| até 10 mA | dor e contração muscular |
| 10 mA a 20 mA | aumento das contrações musculares |
| 20 mA a 100 mA | parada respiratória |
| 100 mA a 3 A | fibrilação ventricular |
| acima de 3 A | parada cardíaca e queimaduras |

Um eletricista, com as mãos suadas, encosta uma mão no fio fase e a outra num cano metálico aterrado, ficando submetido a uma tensão de **220 V**. Com a pele suada, a resistência do seu corpo é de cerca de **2 000 Ω**; com a pele seca, seria de 100 000 Ω.

A corrente que atravessou o corpo do eletricista e o efeito esperado são
- a) 2,2 mA; dor e contração muscular.
- b) 11 mA; aumento das contrações musculares.
- c) 55 mA; parada respiratória.
- d) 220 A; parada cardíaca e queimaduras.
- e) 110 mA; fibrilação ventricular.

### Resolução passo a passo
1. Use a resistência da situação real (pele **suada**): R = 2 000 Ω.
2. i = U/R = 220/2 000 = 0,11 A = **110 mA**.
3. 110 mA está na faixa de 100 mA a 3 A: **fibrilação ventricular**.
4. Por que os distratores caem:
   - a) Usou a pele seca (220/100 000).
   - d) Esqueceu os "mil" do 2 000 (220 ÷ 1).

**Gabarito: E**

---

## Questão 5 (Padrão P5: gráfico/tabela U × i → resistência)

### O que você precisa saber antes de fazer essa questão
- Em resistor ôhmico, U/i é sempre o mesmo valor: **R = U/i** em qualquer ponto.
- **μA = 10⁻⁶ A.** Esquecer o micro é o erro mais comum.
- Depois de achar R, aplique **exatamente** a mudança que o texto descreve (quadruplica, cai a um quarto).
- Se o gráfico for curvo (não ôhmico), calcule R = U/i em cada ponto. Ex.: U = 10i + i² dá R = 10 + i.

### Questão
Um polímero condutor é usado como sensor de umidade. Em ar seco, ele se comporta como um resistor ôhmico, com as medidas da tabela.

| Tensão (V) | 0,4 | 0,8 | 1,2 | 1,6 |
|---|---|---|---|---|
| Corrente (μA) | 4 | 8 | 12 | 16 |

Em ar úmido, a resistência elétrica desse polímero cai para **um quarto** do valor em ar seco.

A resistência do sensor em ar úmido, em ohm, é
- a) 1,0 × 10⁻⁵.
- b) 2,5 × 10⁴.
- c) 1,0 × 10⁵.
- d) 4,0 × 10⁵.
- e) 2,5 × 10⁻².

### Resolução passo a passo
1. Ar seco: R = U/i = 0,4/(4 × 10⁻⁶) = **1,0 × 10⁵ Ω** (vale para qualquer coluna).
2. Ar úmido: um quarto → 1,0 × 10⁵ ÷ 4 = **2,5 × 10⁴ Ω**.
3. Por que os distratores caem:
   - a) Inverteu (i/U).
   - c) Parou no ar seco.
   - d) Multiplicou por 4.
   - e) Esqueceu o micro.

**Gabarito: B**

---

## Questão 6 (Padrão P6: 2ª Lei de Ohm e queda de tensão no fio)

### O que você precisa saber antes de fazer essa questão
- **R = ρ·L/A.** Área em m²: 1,5 mm² = 1,5 × 10⁻⁶ m².
- O circuito tem **dois fios** (ida e volta): o comprimento total é o dobro.
- A corrente que passa pelo fio cria uma queda de tensão: U_fio = R·i.
- Tensão no aparelho = tensão da tomada − queda no fio.

### Questão
Um marceneiro usa uma extensão para ligar uma serra elétrica que consome **10 A** em uma tomada de **220 V**. A extensão tem **50 m** e é formada por dois fios de cobre (ida e volta), cada um com área de seção reta de **1,5 mm²**. A resistividade do cobre é **1,7 × 10⁻⁸ Ω·m**.

A tensão que chega à serra é mais próxima de
- a) 198 V.
- b) 209 V.
- c) 214 V.
- d) 219 V.
- e) 220 V.

### Resolução passo a passo
1. Comprimento total: 2 × 50 = **100 m**.
2. R = ρ·L/A = 1,7 × 10⁻⁸ × 100 / 1,5 × 10⁻⁶ = 1,7 × 10⁻⁶ / 1,5 × 10⁻⁶ ≈ **1,13 Ω**.
3. Queda: U_fio = R·i = 1,13 × 10 ≈ **11,3 V**.
4. Na serra: 220 − 11,3 ≈ **209 V**.
5. Por que os distratores caem:
   - c) Usou só 50 m (queda de 5,7 V).
   - e) Ignorou a resistência do fio.

**Gabarito: B**

---

## Questão 7 (Padrão P7: 2ª Lei qualitativa + P = U²/R)

### O que você precisa saber antes de fazer essa questão
- Com a **mesma potência** e tensão diferente: P = U²/R, então R precisa mudar na razão (U_nova/U_antiga)².
- R ∝ L/A: para **diminuir** R, encurte o fio ou **engrosse** (aumente a área).
- 127/220 ≈ 0,58 e 0,58² ≈ 0,33 = **1/3**.
- **Pegadinha:** na questão 19 da lista a tensão subia (110 → 220) e R precisava **aumentar**. Aqui é o contrário.

### Questão
Um aquecedor de ambiente foi projetado para **220 V**. O dono vai se mudar para uma cidade com rede de **127 V** e quer manter a **mesma potência** do aparelho trocando o fio resistor por outro do mesmo material e com o mesmo comprimento.

O novo fio deve ter
- a) o triplo da área da seção reta.
- b) o triplo do comprimento.
- c) um terço da área da seção reta.
- d) o dobro do comprimento.
- e) a metade da área da seção reta.

### Resolução passo a passo
1. P constante: U₁²/R₁ = U₂²/R₂ → R₂/R₁ = (127/220)² ≈ (0,58)² ≈ **1/3**.
2. A resistência precisa cair para um terço.
3. Mesmo material e mesmo comprimento: só resta mexer na área. R ∝ 1/A, então A precisa **triplicar**.
4. Por que os distratores caem:
   - b) e d) O comprimento é fixo e aumentar L aumentaria R.
   - c) e e) Diminuir a área aumenta R.

**Gabarito: A**

---

## Questão 8 (Padrão P8: tabela de resistências e seletividade de sensor)

### O que você precisa saber antes de fazer essa questão
- Um bom sensor tem **duas qualidades**:
  1. **Sensibilidade:** a resistência muda **muito** na presença do gás-alvo.
  2. **Seletividade:** muda **pouco** na presença de outros gases (para não dar alarme falso).
- Compare **razões** (R com gás ÷ R no ar), não o maior número absoluto.

### Questão
Para construir um bafômetro, foram testados cinco sensores. O aparelho precisa detectar etanol, mas **não pode** dar resultado positivo para pessoas com diabetes, cujo hálito pode conter acetona. As resistências medidas estão no quadro.

| Sensor | Ar limpo (Ω) | Com etanol (Ω) | Com acetona (Ω) |
|---|---|---|---|
| I | 2,0 × 10³ | 2,2 × 10³ | 2,1 × 10³ |
| II | 1,5 × 10⁴ | 9,0 × 10⁵ | 7,5 × 10⁵ |
| III | 5,0 × 10³ | 6,0 × 10³ | 4,0 × 10⁵ |
| IV | 4,0 × 10³ | 6,0 × 10⁵ | 4,4 × 10³ |
| V | 8,0 × 10⁵ | 9,6 × 10⁵ | 8,8 × 10⁵ |

O sensor mais adequado é o
- a) I.
- b) II.
- c) III.
- d) IV.
- e) V.

### Resolução passo a passo
1. Calcule a variação com etanol (R_etanol ÷ R_ar):
   - I: 1,1 vez. II: 60 vezes. III: 1,2 vez. **IV: 150 vezes.** V: 1,2 vez.
2. Dos que respondem ao etanol (II e IV), veja a acetona:
   - II: 50 vezes, ou seja, também responde à acetona (falso positivo).
   - **IV: 1,1 vez**, praticamente não responde à acetona.
3. IV é sensível **e** seletivo.
4. **Pegadinha:** o II tem o maior valor absoluto com etanol, mas não é seletivo. O V tem números altos, mas quase não varia.

**Gabarito: D**

---

## Balanço da Lista 1

| Questão | Padrão | Gabarito |
|---|---|---|
| 1 | P1: Capacidade de bateria | C |
| 2 | P2: Tensão = energia por carga | A |
| 3 | P3: Capacitor | D |
| 4 | P4: Lei de Ohm e choque | E |
| 5 | P5: Tabela U × i | B |
| 6 | P6: 2ª Lei de Ohm e queda no fio | B |
| 7 | P7: 2ª Lei qualitativa | A |
| 8 | P8: Seletividade de sensor | D |
