# Rodada 6: padrões P46 a P55

Esta rodada fecha o Bloco 7 (energia e potência) e o Bloco 8 (Estática), e começa o Bloco 9 (Hidrostática).

---

### 🧠 QUESTÃO 46 · P46 (Potência hidráulica)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Fórmula:** **P = (m/Δt)·g·h**, em que m/Δt é a **vazão em massa** (kg/s).
- **Para a água, 1 L ≈ 1 kg.** Converta a vazão para **segundos**:
  - 3 600 L/h = 1 kg/s;
  - 7 200 L/h = 2 kg/s.
- **Bombear água (L2-39 = L3-26):** potência mínima = vazão × g × desnível.
- **Hidrelétrica (L2-52):** com a potência e a altura conhecidas, a vazão é m/Δt = P/(g·h).
  - Converta antes: 1 HP = ¾ kW.
- **Energia em vez de potência (L2-13):** E = P·t = m·g·h. Daí sai a massa de água bombeada, e o volume.
- **Usina a fio d'água (L2-48):** quase não acumula água, então depende da **vazão e da velocidade** da correnteza.

#### ✏️ Enunciado
Uma bomba deve levar 7 200 litros de água por hora de um poço até uma caixa-d'água 25 m acima. Densidade da água: 1 kg/L; g = 10 m/s². Desprezando perdas, a potência mínima da bomba é
- a) 50 W
- b) 180 W
- c) 500 W
- d) 5 000 W
- e) 1,8 × 10⁶ W

#### 🔧 Resolução passo a passo
1. **Vazão em massa por segundo:** 7 200 kg ÷ 3 600 s = **2 kg/s**.
2. **Potência:** P = 2 × 10 × 25 = **500 W**.

#### ✅ Gabarito: **C**

#### 🚫 Eliminação
- **e)** Esqueceu de converter hora para segundo.
- **d)** Errou a ordem de grandeza.

---

### 🧠 QUESTÃO 47 · P47 (Rendimento com números)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Rendimento:** **η = útil ÷ total**, sempre menor que 1 (ou 100%). Perda = total − útil.
- **Motor que ergue uma carga (L2-2 = L2-34):**
  - potência útil = m·g·h/Δt;
  - η = potência útil ÷ potência elétrica.
- **Comparar fontes (L2-4):**
  1. calcule a energia útil de uma, por exemplo 6 300 Wh × 0,30;
  2. divida pelo rendimento da outra, por exemplo 0,90, para saber quanto ela precisa receber;
  3. converta para volume.
- **Fórmula dada no enunciado (L2-6, carneiro hidráulico):** substitua os valores da tabela e compare o resultado com o valor de referência.
- **Tabela de coletores solares (L2-46):** a energia útil depende de mais coisas do que a radiação incidente, como temperatura e perdas.

#### ✏️ Enunciado
Um motor elétrico de 500 W ergue um bloco de 100 kg a 6 m de altura, com velocidade constante, em 30 s. Use g = 10 m/s². O rendimento do motor é
- a) 20%
- b) 40%
- c) 60%
- d) 80%
- e) 120%

#### 🔧 Resolução passo a passo
1. **Energia útil:** m·g·h = 100 × 10 × 6 = 6 000 J.
2. **Potência útil:** 6 000 ÷ 30 = 200 W.
3. **Rendimento:** η = 200 ÷ 500 = **40%**.

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **e)** Rendimento acima de 100% é impossível.
- **c)** É a porcentagem perdida (100% − 40%), não o rendimento.

---

### 🧠 QUESTÃO 48 · P48 (Rendimento de usina, conceitual)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Numa termelétrica, a maior perda é calor:** gases quentes saem pela chaminé e água quente sai do condensador.
- **Para melhorar o rendimento sem reduzir a geração, aproveite o calor que seria jogado fora.** Isso é a **cogeração** (L2-5).
  - O calor perdido vira energia **térmica → mecânica** num segundo gerador.
  - Também pode servir para aquecimento.
- **Medidas que NÃO melhoram o rendimento:**
  - diminuir o combustível (reduz a geração);
  - diminuir a água de refrigeração (prejudica o condensador);
  - "melhorar a perda de calor dos dutos" (aumenta a perda).
- **Gabarito de L1-34 = L2-31:** usar o calor dos gases da chaminé para mover outro gerador.

#### ✏️ Enunciado
Numa termelétrica a gás, a água que sai do condensador está a 45 °C e é despejada num rio. Qual medida aumenta o rendimento global, sem reduzir a energia elétrica gerada?
- a) Reduzir a quantidade de gás queimado.
- b) Diminuir a vazão de água de resfriamento do condensador.
- c) Usar a água quente do condensador para aquecer estufas e prédios próximos.
- d) Isolar menos os dutos de vapor, para facilitar a troca de calor.
- e) Aumentar a velocidade da bomba que devolve a água à caldeira.

#### 🔧 Resolução passo a passo
1. **Ache a perda:** é o calor da água despejada no rio.
2. **Procure quem aproveita essa perda:** usar a água quente para aquecimento transforma o desperdício em energia útil (cogeração), e a geração elétrica continua igual.
3. **Teste as outras alternativas:**
   - a) reduz a geração;
   - b) prejudica o ciclo;
   - d) aumenta a perda;
   - e) gasta mais energia sem ganho.

#### ✅ Gabarito: **C**

---

### 🧠 QUESTÃO 49 · P49 (Energia elétrica em kWh)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Potência elétrica:** **P = U·i**, em W.
- **Energia:** **E = P·t**. Em **kWh** quando P está em kW e t em horas.
- **kWh é unidade de energia, não de potência.** 1 kWh = 3,6 × 10⁶ J.
- **Custo** = energia em kWh × tarifa.
- **Carregar um carro elétrico (L2-30):**
  1. energia = distância ÷ desempenho (km/kWh);
  2. potência do carregador = U·i;
  3. tempo = energia ÷ potência.

#### ✏️ Enunciado
Um chuveiro ligado em 220 V é percorrido por 25 A. Uma família de 4 pessoas toma um banho de 10 min por pessoa por dia, durante 30 dias. Com tarifa de R$ 0,80/kWh, o custo mensal do chuveiro é
- a) R$ 8,80
- b) R$ 44,00
- c) R$ 88,00
- d) R$ 132,00
- e) R$ 5 280,00

#### 🔧 Resolução passo a passo
1. **Potência:** P = 220 × 25 = 5 500 W = **5,5 kW**.
2. **Tempo de uso por dia:** 4 × 10 min = 40 min = **2/3 h**.
3. **Tempo no mês:** 30 × 2/3 = **20 h**.
4. **Energia:** 5,5 × 20 = **110 kWh**.
5. **Custo:** 110 × 0,80 = **R$ 88,00**.

#### ✅ Gabarito: **C**

#### 🚫 Eliminação
- **e)** Usou minutos como se fossem horas: 5,5 × 1 200 × 0,8 = 5 280.
- **b)** Considerou só metade do tempo.

---

### 🧠 QUESTÃO 50 · P50 (Torque e equilíbrio de corpo extenso)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Momento (torque):** **M = F·d**, em que d é o **braço**, a distância perpendicular da linha da força até o ponto de giro.
- **Equilíbrio de corpo extenso:**
  - **ΣF = 0** (não translada);
  - **ΣM = 0** (não gira).
- **Porta presa por dobradiças (L1-52 = L3-3):**
  1. o peso, no CM, tende a girar a porta e afastar o topo da parede;
  2. a **dobradiça de cima puxa** a porta em direção ao batente;
  3. a **dobradiça de baixo empurra** a porta para fora;
  4. as duas ainda têm componente **para cima**, para sustentar o peso.
- **A mesma lógica serve** para prateleira em mão-francesa, placa pendurada em haste e suporte de TV na parede.

#### ✏️ Enunciado
Um suporte de prateleira é fixado numa parede vertical por dois parafusos, um superior e outro inferior, numa placa vertical. A prateleira, carregada, avança para a direita da parede.

As componentes **horizontais** das forças que a parede exerce sobre o suporte nos parafusos superior e inferior são, respectivamente,
- a) para a direita e para a direita.
- b) para a esquerda (em direção à parede) e para a direita (afastando-se da parede).
- c) para a direita e para a esquerda.
- d) nulas nos dois parafusos.
- e) para a esquerda e para a esquerda.

#### 🔧 Resolução passo a passo
1. **Efeito do peso:** a carga, à direita, tende a girar o suporte no sentido horário. O topo tende a **descolar** da parede e a base tende a **afundar** nela.
2. **Parafuso superior:** a parede segura o topo puxando-o **para a esquerda**.
3. **Parafuso inferior:** a parede empurra a base de volta, **para a direita**.
4. **Conferência:** as duas forças horizontais formam um binário que anula o torque do peso (ΣM = 0) e somam zero entre si (ΣF_x = 0).

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **d)** Sem componentes horizontais, o suporte giraria.
- **a) e e)** A soma horizontal não daria zero.
- **c)** Inverteu os sentidos.

---

### 🧠 QUESTÃO 51 · P51 (Alavanca com números)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Equilíbrio em torno do apoio:** **F₁·d₁ = F₂·d₂**, a soma dos momentos de cada lado.
- **Balança de braços desiguais (L3-2):** m_fruta·10 = 100 g·50, então m = 500 g.
- **Barra homogênea com peso próprio (L3-15):** o peso da barra fica **no centro dela**. Meça a distância do centro até o apoio.
- **Use as divisões da barra como unidade de distância.** Não é preciso converter para metro.

#### ✏️ Enunciado
Uma barra homogênea, dividida em 10 partes iguais, está apoiada a 2 divisões de sua extremidade esquerda. Na extremidade esquerda pende um saco de 12 kg, e a barra fica em equilíbrio na horizontal. A massa da barra é
- a) 4 kg
- b) 6 kg
- c) 8 kg
- d) 12 kg
- e) 24 kg

#### 🔧 Resolução passo a passo
1. **Braço do saco:** 2 divisões, à esquerda do apoio.
2. **Braço do peso da barra:** o centro fica na divisão 5 e o apoio na divisão 2, então o braço vale 3 divisões, à direita do apoio.
3. **Iguale os momentos:** 12 × 2 = M × 3.
4. **Resolva:** **M = 8 kg**.

#### ✅ Gabarito: **C**

#### 🚫 Eliminação
- **b)** Usou 4 divisões de braço para a barra.
- **e)** Usou o comprimento da barra toda como braço.
- **d)** Ignorou os braços.

---

### 🧠 QUESTÃO 52 · P52 (Tipos de alavanca e braço de força)

#### 📘 O que você precisa saber antes de fazer essa questão
| Tipo (o que fica no meio) | Exemplos | Efeito |
|---|---|---|
| **Interfixa** (apoio no meio) | tesoura, alicate, gangorra, pé de cabra | depende dos braços |
| **Inter-resistente** (carga no meio) | carrinho de mão, quebra-nozes, abridor de garrafa | **sempre poupa força** |
| **Interpotente** (força no meio) | pinça, pegador de gelo, vara de pescar, antebraço | **exige força maior** que a resistência, mas ganha amplitude e velocidade |
- **Chave de roda (L3-10):** braço maior dá torque maior para a mesma força. A chave em cruz permite usar as **duas mãos**, formando um binário.
- **"Força potente maior que a resistente" (L3-23):** é a alavanca **interpotente**.

#### ✏️ Enunciado
Em qual objeto a força aplicada pela mão é **maior** que a força exercida sobre o objeto manipulado?
- a) Carrinho de mão.
- b) Quebra-nozes.
- c) Abridor de garrafa.
- d) Pegador de gelo (tipo pinça).
- e) Pé de cabra.

#### 🔧 Resolução passo a passo
1. **Classifique cada objeto pelo que fica no meio:**
   - carrinho de mão, quebra-nozes e abridor: carga no meio, inter-resistentes (poupam força);
   - pé de cabra: apoio no meio, interfixa, com braço longo que poupa força;
   - pegador de gelo: dedos no meio, **interpotente**.
2. **Na interpotente, o braço da força é menor que o da resistência.** Então a força da mão precisa ser **maior**.

#### ✅ Gabarito: **D**

---

### 🧠 QUESTÃO 53 · P53 (Centro de massa e balanceamento)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Centro de massa (CM)** é o ponto médio da distribuição de massa. Ele se **desloca para o lado com mais massa**.
- **Balanceamento de roda (L3-34):** para trazer o CM de volta ao centro, coloque o contrapeso **diametralmente oposto** ao lado para onde o CM foi.
- **Tombamento:** o corpo não tomba enquanto a vertical que passa pelo CM cair **dentro da base de apoio**.
  - Base larga e CM baixo dão mais estabilidade.
  - Aros maiores elevam o CM e deixam o carro menos estável (L1-47).

#### ✏️ Enunciado
A máquina de balanceamento indica que o CM de um conjunto roda/pneu está ligeiramente **acima e à direita** do eixo. Para corrigir, a peça de chumbo deve ser fixada no aro na posição
- a) superior.
- b) superior direita.
- c) à direita.
- d) inferior esquerda.
- e) inferior.

#### 🔧 Resolução passo a passo
1. **Situação:** sobra massa no lado superior direito.
2. **Correção:** é preciso acrescentar massa no lado **oposto**, na mesma reta que passa pelo eixo, ou seja, no **inferior esquerdo**. Isso puxa o CM de volta para o centro.

#### ✅ Gabarito: **D**

#### 🚫 Eliminação
- **b)** Colocar chumbo no lado pesado piora o desbalanceamento.
- **e) e c)** Corrigem só uma das direções.

---

### 🧠 QUESTÃO 54 · P54 (Pressão: p = F/A)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Fórmula:** **p = F/A**, em Pa = N/m². A mesma força numa área menor gera **mais pressão**.
- **Pressão é grandeza escalar.** Força é vetor.
- **Exemplos práticos:**
  - **pneus largos**, esteiras ou pneus mais vazios (buggy, L3-9) aumentam a área, reduzem a pressão e evitam afundar ou compactar o solo (L1-36);
  - faca afiada e salto fino têm área pequena, e a pressão fica grande.
- **Número de pneus (L1-32):**
  1. peso total ÷ (pressão máxima × área de um pneu) = número mínimo de pneus;
  2. arredonde **para cima**;
  3. respeite os pares, se o enunciado exigir.
- **Converta cm² para m²:** 1 cm² = 10⁻⁴ m².

#### ✏️ Enunciado
Um trator de 12 000 kg vai trabalhar num solo que suporta no máximo 1,5 × 10⁵ Pa. Cada pneu tem 0,1 m² de área de contato. Use g = 10 m/s². O número mínimo de pneus em contato com o solo é
- a) 2
- b) 4
- c) 6
- d) 8
- e) 12

#### 🔧 Resolução passo a passo
1. **Peso:** 120 000 N.
2. **Força máxima por pneu:** 1,5 × 10⁵ × 0,1 = **15 000 N**.
3. **Número de pneus:** 120 000 ÷ 15 000 = **8 pneus**.

#### ✅ Gabarito: **D**

#### 🚫 Eliminação
- **b)** Usou a massa no lugar do peso, ou errou a área.
- **e)** Supôs pressão menor que a dada.

---

### 🧠 QUESTÃO 55 · P55 (Pressão com mudança de escala)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Escala 1:k, com o mesmo material:**
  - comprimentos ficam ÷ k;
  - áreas ficam ÷ k²;
  - **volume e massa ficam ÷ k³**.
- **Pressão na base:** p = peso/área ∝ L³/L² = **L**.
  - A pressão diminui na **mesma proporção do comprimento**.
- **Torre Eiffel em escala 1:100 (L3-11):** P_torre/P_modelo = 100 = **10²**.

#### ✏️ Enunciado
Uma estátua maciça de bronze é reproduzida em miniatura na escala 1:50, com o mesmo material. A razão entre a pressão que a estátua real exerce sobre sua base e a pressão exercida pela miniatura é
- a) 1
- b) 50
- c) 2 500
- d) 125 000
- e) 1/50

#### 🔧 Resolução passo a passo
1. **Massa:** a miniatura tem 1/50³ = 1/125 000 da massa real.
2. **Área da base:** a miniatura tem 1/50² = 1/2 500 da área real.
3. **Pressão:** p ∝ (massa)/(área) = (1/125 000)/(1/2 500) = 1/50. A miniatura exerce **50 vezes menos** pressão.
4. **Razão pedida:** p_real/p_miniatura = **50**.

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **d)** Usou a razão das massas.
- **c)** Usou a razão das áreas.
- **e)** Inverteu a razão.
- **a)** Supôs que a pressão não depende do tamanho.

---

## 📊 Balanço da Rodada 6
- **Padrões abordados nesta rodada:** 10 (P46 a P55)
- **Total coberto:** **55 de 63**
- **Restam: 8 padrões**, que vão na **última rodada**.
- **Próxima rodada (P56 a P63):** densidade e misturas · Stevin com números · Stevin conceitual · pressão atmosférica · Pascal · empuxo e peso aparente · flutuação · força magnética.

Para seguir, é só mandar **"VAI"**.