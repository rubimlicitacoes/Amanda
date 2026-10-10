# Rodada 4: padrões P26 a P35

Esta rodada cobre o Bloco 5 (Gravitação e astronomia) e o Bloco 6 (Impulso e quantidade de movimento).

---

### 🧠 QUESTÃO 26 · P26 (Lei da gravitação universal)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Fórmula:** **F = G·M·m/d²**, em que d é a distância **entre os centros** dos corpos.
- **Proporções que caem na prova:**
  - dobrar uma das massas dobra F;
  - dobrar a distância divide F por 4;
  - triplicar a distância divide F por 9.
- **Em órbita circular a distância não muda.** Então F é constante, e o gráfico F × t é uma **reta horizontal** (L2-18).
- **O satélite mais próximo sofre a maior força**, quando as massas são iguais (L2-7).
- **Trocar o Sol por um buraco negro de mesma massa (L2-19):** os planetas estão à mesma distância e sentem a mesma força, então as **órbitas não mudam**.

#### ✏️ Enunciado
Quatro satélites orbitam a Terra em órbitas circulares. Os raios são medidos a partir do centro da Terra (R é o raio terrestre):

| Satélite | Massa | Raio da órbita |
|---|---|---|
| A | m | R |
| B | m | 2R |
| C | m | 3R |
| D | 2m | 2R |

A ordem decrescente das forças que a Terra exerce sobre eles, e o aspecto do gráfico força × tempo de cada um, são
- a) A > B > C > D; retas crescentes.
- b) A > D > B > C; retas horizontais.
- c) D > A > B > C; retas horizontais.
- d) C > B > D > A; retas horizontais.
- e) A > D > B > C; curvas crescentes.

#### 🔧 Resolução passo a passo
1. **Chame de F a força sobre A** (massa m, distância R).
2. **Calcule as outras em função de F:**
   - B: distância dobrada, F/4;
   - C: distância triplicada, F/9;
   - D: massa dobrada e distância dobrada, 2F/4 = F/2.
3. **Ordene:** F > F/2 > F/4 > F/9, ou seja, **A > D > B > C**.
4. **Gráfico:** em órbita circular d é constante, então F é constante e o gráfico é uma **reta horizontal**.

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **a)** Ignorou a massa de D.
- **c)** Esqueceu que, para D, a distância também dobrou.
- **d)** Inverteu a dependência com d.
- **e)** A força não cresce com o tempo.

---

### 🧠 QUESTÃO 27 · P27 (Órbitas e satélites)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Em órbita, a gravidade faz o papel de força centrípeta:** **G·M·m/r² = m·v²/r**.
- **A massa do satélite cancela:**
  - **v = √(G·M/r)**, que depende só da massa do planeta e do raio da órbita;
  - satélite mais pesado **não** precisa ir mais rápido.
- **Usando v = 2πr/T:** **M = 4π²·r³/(G·T²)**. É assim que se "pesa" um planeta ou um buraco negro (L2-45).
- **Existe gravidade em órbita.** Os astronautas "flutuam" porque estão em **queda livre** junto com a nave, e a normal é zero. A frase "peso pequeno no espaço" está errada (L2-11).
- **Satélite geoestacionário:**
  - período de 24 h;
  - órbita **equatorial**;
  - **mesmo sentido** de rotação da Terra (L2-59).
- **Energia orbital:** órbita mais alta exige mais energia. Cada impulso para subir aumenta a energia mecânica, então E(baixa) < E(elíptica) < E(alta) (L2-53).

#### ✏️ Enunciado
Astrônomos observam uma lua girando em órbita circular de raio R em torno de um planeta, com período T. Desprezando a massa da lua diante da do planeta, a massa do planeta é dada por
- a) 4π²R²/(G·T²)
- b) 2π²R³/(G·T²)
- c) 4π²R³/(G·T²)
- d) G·T²/(4π²R³)
- e) 4π²R³/(G·T)

#### 🔧 Resolução passo a passo
1. **Iguale gravidade e centrípeta:** G·M·m/R² = m·v²/R, o que dá G·M = v²·R.
2. **Escreva v em função do período:** v = 2πR/T, então v² = 4π²R²/T².
3. **Substitua:** G·M = 4π²R³/T².
4. **Isole M:** **M = 4π²R³/(G·T²)**.

#### ✅ Gabarito: **C**

#### 🚫 Eliminação
- **a)** Esqueceu de multiplicar por R.
- **b)** Errou o fator de 2π ao quadrado.
- **d)** Inverteu a fração.
- **e)** Esqueceu de elevar T ao quadrado.
- **Dica de conferência:** a 3ª lei de Kepler diz que T² ∝ R³. Na fórmula certa aparecem exatamente R³ e T².

---

### 🧠 QUESTÃO 28 · P28 (Kepler e movimento planetário)

#### 📘 O que você precisa saber antes de fazer essa questão
- **1ª lei:** as órbitas são **elipses**, com o Sol em um dos focos.
- **2ª lei:** a reta Sol-planeta varre **áreas iguais em tempos iguais**. O planeta anda mais rápido perto do Sol (periélio) e mais devagar longe (afélio).
- **3ª lei:** **T²/r³ = constante** para todos os planetas do mesmo sistema.
  - Usando a Terra como referência (T = 1 ano, r = 1 UA): **T² = r³**.
  - Quanto mais longe do Sol, maior o período e **menor a velocidade orbital**.
- **Movimento retrógrado de Marte (L2-10):** a Terra é mais interna e mais rápida. Quando ela "ultrapassa" Marte, o planeta parece andar para trás no céu.
- **Leitura de tabela de planetas (L2-49):** cruze as pistas do texto com a tabela. Exemplo: densidade < 1 g/cm³ (menor que a da água) identifica **Saturno**.

#### ✏️ Enunciado
Um asteroide orbita o Sol a uma distância média de 4 UA. Pela 3ª lei de Kepler, seu período orbital, em anos terrestres, é
- a) 2
- b) 4
- c) 8
- d) 16
- e) 64

#### 🔧 Resolução passo a passo
1. **Use a forma com referência na Terra:** T² = r³.
2. **Substitua r = 4 UA:** T² = 4³ = 64.
3. **Tire a raiz:** T = √64 = **8 anos**.

#### ✅ Gabarito: **C**

#### 🚫 Eliminação
- **e)** Esqueceu de tirar a raiz.
- **b)** Supôs que T é proporcional a r.
- **d)** Fez T = r².
- **a)** Tirou a raiz de r em vez de calcular r^(3/2).

---

### 🧠 QUESTÃO 29 · P29 (Sistema Terra-Lua-Sol)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Estações do ano:** resultam da **inclinação do eixo da Terra** (cerca de 23,5°) **combinada com a translação**.
  - **Não** são causadas pela variação da distância ao Sol.
  - Os hemisférios têm estações opostas.
  - No hemisfério Sul, a máxima insolação acontece em dezembro e janeiro (L2-14, L2-63).
- **Eclipses não acontecem todo mês** porque a órbita da Lua é inclinada cerca de 5° em relação à da Terra (L2-37).
- **Marés:**
  - a causa é a atração da **Lua**, principalmente, e a do Sol;
  - **marés vivas** (as maiores) acontecem com Sol, Terra e Lua **alinhados**, na lua nova e na lua cheia (L2-27);
  - a Lua pesa mais nas marés que o Sol porque está muito mais perto.
- **Placa solar perto do Equador:** a produção quase não varia ao longo do ano.

#### ✏️ Enunciado
Sobre fenômenos do sistema Terra-Lua-Sol, está correto que
- a) o verão ocorre quando a Terra está mais próxima do Sol, nos dois hemisférios ao mesmo tempo.
- b) as marés de maior amplitude ocorrem nas luas nova e cheia, quando Sol, Terra e Lua estão alinhados.
- c) há eclipse solar em toda lua nova, pois a Lua passa entre a Terra e o Sol.
- d) as marés são causadas principalmente pelos ventos oceânicos.
- e) a influência do Sol nas marés é maior que a da Lua, por ter massa muito maior.

#### 🔧 Resolução passo a passo
1. **Avalie a alternativa a):** a causa das estações é a inclinação do eixo. Além disso, os hemisférios têm estações opostas. **Falsa.**
2. **Avalie a b):** o alinhamento faz as atrações da Lua e do Sol se somarem, e as marés ficam maiores. **Verdadeira.**
3. **Avalie a c):** a órbita da Lua é inclinada, então na maioria das luas novas a sombra não atinge a Terra. **Falsa.**
4. **Avalie a d):** marés têm causa gravitacional, não os ventos. **Falsa.**
5. **Avalie a e):** a Lua está muito mais perto, e o efeito de maré depende muito da distância. **Falsa.**

#### ✅ Gabarito: **B**

---

### 🧠 QUESTÃO 30 · P30 (História e natureza da ciência)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Linha do tempo:**
  - **Ptolomeu:** geocentrismo, com epiciclos;
  - **Copérnico:** heliocentrismo, ainda com órbitas circulares;
  - **Kepler:** órbitas **elípticas**, a partir dos dados de **Tycho Brahe**;
  - **Galileu:** observações com luneta e a ideia de inércia;
  - **Newton:** gravitação universal, que explica as leis de Kepler.
- **Como a ciência funciona:**
  - um modelo vale enquanto explica os dados;
  - quando surgem dados que ele não explica, é **revisto ou substituído**;
  - teoria científica é **testável** e **generalizável** (L2-36).
- **Alternativas erradas típicas:** "o modelo antigo é mais valioso por ser tradicional", "a ciência é verdade definitiva", "a teoria foi criada por motivos políticos".

#### ✏️ Enunciado
Copérnico propôs órbitas circulares em torno do Sol, mas as previsões ainda falhavam para Marte. Kepler analisou anos de dados precisos de Tycho Brahe e concluiu que as órbitas são elípticas. Esse episódio mostra que
- a) o modelo mais antigo deve prevalecer por ser mais tradicional.
- b) as teorias científicas são definitivas depois de publicadas.
- c) os modelos científicos são reformulados quando confrontados com dados de observação que não explicam.
- d) Kepler rejeitou o heliocentrismo e voltou ao geocentrismo.
- e) a ciência avança apenas por intuição, sem necessidade de medições.

#### 🔧 Resolução passo a passo
1. **Identifique o que aconteceu:** o modelo circular não batia com os dados e foi ajustado para elipses. Isso é **revisão do modelo a partir de evidências**.
2. **Elimine o resto:**
   - a) tradição não é critério científico;
   - b) a própria história mostra o contrário;
   - d) Kepler manteve o Sol no centro;
   - e) a mudança veio justamente das medições de Tycho.

#### ✅ Gabarito: **C**

---

### 🧠 QUESTÃO 31 · P31 (Teorema do impulso com números)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Teorema:** **I = F·Δt = ΔQ = m·(v_final − v_inicial)**, uma conta **vetorial**.
- **Bola que volta (quica ou rebate):** os sinais são opostos, então |ΔQ| = m·(v_ida + v_volta).
- **Tijolo no capacete (L1-9 = L2-29):**
  - a velocidade de chegada vem de **v = √(2gh)**;
  - F = m·v/Δt;
  - depois compare F com o peso (pede "quantos pesos").
- **Massa variável (L2-15), como numa esteira rolante:** a força mantém a velocidade enquanto a massa muda, então **F·Δt = Δm·v**.

#### ✏️ Enunciado
Uma bola de 0,4 kg chega a uma parede a 20 m/s e volta, na mesma direção, a 10 m/s. O contato dura 0,02 s. A força média que a parede exerce na bola é
- a) 200 N
- b) 400 N
- c) 600 N
- d) 800 N
- e) 1 200 N

#### 🔧 Resolução passo a passo
1. **Escolha um sentido positivo:** considere positivo o sentido de volta.
   - v_inicial = −20 m/s;
   - v_final = +10 m/s.
2. **Variação de quantidade de movimento:** ΔQ = 0,4 × (10 − (−20)) = 0,4 × 30 = 12 kg·m/s.
3. **Força média:** F = 12 ÷ 0,02 = **600 N**.

#### ✅ Gabarito: **C**

#### 🚫 Eliminação
- **a)** Subtraiu os módulos: 0,4 × 10 ÷ 0,02 = 200 N. Esqueceu que Q é vetor.
- **b)** Usou só a ida.
- **e)** Usou só a ida e ainda dobrou o resultado.

---

### 🧠 QUESTÃO 32 · P32 (Impulso conceitual)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Para parar um corpo, ΔQ é fixo:** depende só da massa e da velocidade.
- **Como F = ΔQ/Δt:** aumentar o **tempo de contato** reduz a **força média**.
- **Mesma lógica:** airbag, cinto que estica, colchão, flexionar os joelhos, capacete de espuma, *crumple zone*, carroceria que se deforma (L2-26, L2-66).
- **Crumple zone:** a deformação **aumenta Δt e absorve** (dissipa) a energia cinética. Ela **não** diminui o impulso e **não** "consome" a quantidade de movimento.
- **Barreiras (L2-16):**
  - **barreira que devolve o carro** (pneus): ΔQ maior, força média maior e energia dissipada menor;
  - **barreira em que o carro fica** (blocos deformáveis): ΔQ menor, força média menor e energia dissipada maior.
- **Salto (L2-41):** tem as fases de impulsão (contato), voo e queda.

#### ✏️ Enunciado
Uma ginasta cai da mesma altura duas vezes: uma sobre um piso rígido e outra sobre um colchão espesso. Em ambas ela para totalmente. Comparando o colchão com o piso,
- a) o impulso é menor no colchão, por isso a força é menor.
- b) o impulso é o mesmo, mas o tempo de contato é maior no colchão, o que reduz a força média.
- c) o impulso é maior no colchão, mas a força é menor porque o colchão absorve o peso.
- d) a força média é a mesma, mas o colchão diminui a velocidade de chegada.
- e) a quantidade de movimento não se conserva no piso rígido, por isso a força é maior.

#### 🔧 Resolução passo a passo
1. **Quantidade de movimento:** mesma altura, então mesma velocidade de chegada; v final é zero nos dois casos. Logo **ΔQ é o mesmo**, e o impulso também.
2. **Tempo de contato:** o colchão afunda e o freio dura mais, então **Δt é maior**.
3. **Força média:** F = ΔQ/Δt, então a força é **menor** no colchão.

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **a)** É a pegadinha "o colchão (ou airbag) reduz o impulso".
- **c)** O impulso não aumenta.
- **d)** A velocidade de chegada é a mesma, porque a altura é a mesma.
- **e)** Não tem relação com o que acontece no contato.

---

### 🧠 QUESTÃO 33 · P33 (Conservação da quantidade de movimento em 1D)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Sistema isolado** (choques, explosões, empurrões rápidos): **Q_antes = Q_depois**.
- **Recuo, partindo do repouso:** **m₁·v₁ = m₂·v₂**, em sentidos opostos. Exemplos: cosmonauta empurrando a bomba (L2-22), arma e projétil.
- **Corpos que grudam:** **m₁·v₁ = (m₁ + m₂)·v**.
- **Velocidade a partir de tabela (L2-32):** v = Δposição/Δtempo, antes e depois do choque.
- **Na colisão em que os corpos grudam, Q se conserva, mas a energia cinética DIMINUI** (vira calor, som e deformação).

#### ✏️ Enunciado
Um vagão de 20 t, a 3 m/s, engata num vagão de 10 t parado, e os dois seguem juntos. A velocidade do conjunto e a energia cinética perdida no engate são
- a) 1,5 m/s; 0 J
- b) 2 m/s; 30 kJ
- c) 2 m/s; 0 J
- d) 3 m/s; 45 kJ
- e) 1 m/s; 60 kJ

#### 🔧 Resolução passo a passo
1. **Conservação de Q:**
   - 20 000 × 3 = 30 000 × v;
   - **v = 2 m/s**.
2. **Energia cinética antes:** ½ × 20 000 × 3² = 90 000 J.
3. **Energia cinética depois:** ½ × 30 000 × 2² = 60 000 J.
4. **Perda:** 90 000 − 60 000 = **30 kJ**, que viram calor, som e deformação.

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **c)** Supõe que a energia cinética se conserva quando os corpos grudam.
- **d)** Ignorou a massa do vagão parado.
- **a)** Dividiu a velocidade pela metade, como se as massas fossem iguais.

---

### 🧠 QUESTÃO 34 · P34 (Conservação de Q vetorial em 2D)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Q é vetor:** conserve **cada eixo separadamente**.
- **Colisão em cruzamento a 90° com os veículos grudando:**
  - Q_x = m₁·v₁ (de um dos veículos);
  - Q_y = m₂·v₂ (do outro).
- **Direção depois da colisão:** tg θ = Q_y/Q_x. **Se o conjunto sai a 45°, então Q_x = Q_y.**
- **Perícia (L2-64):** com a saída a 45°, iguale os dois Q e descubra a velocidade que falta.

#### ✏️ Enunciado
Num cruzamento a 90°, um carro, vindo do oeste, colide com um caminhão de massa 3 vezes maior, vindo do sul a 30 km/h. Os dois ficam presos e saem a **45°** em relação às direções iniciais. A placa da rua indica 60 km/h.

A velocidade do carro antes da colisão era
- a) 30 km/h, dentro do limite.
- b) 45 km/h, dentro do limite.
- c) 60 km/h, no limite.
- d) 90 km/h, acima do limite.
- e) 90√2 km/h, acima do limite.

#### 🔧 Resolução passo a passo
1. **Saída a 45°:** isso significa Q_x = Q_y.
2. **Monte a igualdade:**
   - Q_x = m·v_carro;
   - Q_y = 3m × 30;
   - m·v_carro = 3m × 30.
3. **Resolva:** v_carro = **90 km/h**, acima do limite.

#### ✅ Gabarito: **D**

#### 🚫 Eliminação
- **e)** Aplicou √2 indevidamente. O √2 aparece no módulo da quantidade de movimento total, não na velocidade do carro.
- **a)** Ignorou a diferença de massas.

---

### 🧠 QUESTÃO 35 · P35 (Colisão elástica)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Colisão elástica:** conserva **Q e Ec** (coeficiente de restituição e = 1).
- **Massas iguais em choque frontal, com o alvo parado:** os corpos **trocam de velocidade**. Quem chega para, e quem estava parado sai com a velocidade de chegada.
- **Pêndulo de Newton (L1-17 = L2-3):** se N esferas chegam, N esferas saem do outro lado com a mesma velocidade.
- **Fórmulas do nêutron com o alvo parado (L2-40):** v_nf = (m_n − m_s)/(m_n + m_s)·v₀.
  - Alvo de **massa igual à do nêutron:** v_nf = 0. É a máxima redução de velocidade.
  - Alvo **muito pesado:** o nêutron volta quase com a mesma velocidade e quase não freia.
- **Moderador nuclear:** escolha o núcleo de **massa mais próxima** da do nêutron (hidrogênio, depois deutério).

#### ✏️ Enunciado
Um reator precisa frear nêutrons rápidos por meio de colisões elásticas e frontais com núcleos parados de um moderador. As opções disponíveis são:
- hidrogênio-1 (massa ≈ 1 u);
- deutério (≈ 2 u);
- carbono-12 (≈ 12 u);
- chumbo-207 (≈ 207 u).

O nêutron tem massa ≈ 1 u. O melhor moderador e o comportamento do nêutron ao colidir com o chumbo são
- a) chumbo; o nêutron para.
- b) hidrogênio-1; com o chumbo, o nêutron volta quase com a mesma velocidade.
- c) carbono-12; com o chumbo, o nêutron é absorvido.
- d) deutério; com o chumbo, o nêutron dobra de velocidade.
- e) hidrogênio-1; com o chumbo, o nêutron para.

#### 🔧 Resolução passo a passo
1. **Melhor moderador:** a velocidade final do nêutron é zero quando m_s = m_n. A massa igual à do nêutron é a do **hidrogênio-1**.
2. **Choque com o chumbo:**
   - v_nf = (1 − 207)/(1 + 207)·v₀ ≈ −0,99·v₀;
   - o nêutron **volta quase com a mesma velocidade**. É como uma bola batendo numa parede.

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **a)** "Mais pesado freia mais" é intuitivo, mas está errado.
- **e)** Confundiu o comportamento com o do alvo de massa igual.
- **d)** A velocidade do nêutron não pode aumentar, porque a energia se conserva e o alvo estava parado.

---

## 📊 Balanço da Rodada 4
- **Padrões abordados nesta rodada:** 10 (P26 a P35)
- **Total coberto:** **35 de 63**
- **Restam: 28 padrões**, o que dá mais 3 rodadas (duas com 10 padrões e a última com 8).
- **Próxima rodada (P36 a P45):** conceito de trabalho · teorema da energia cinética · cadeias de transformação de energia · energia mecânica qualitativa · conservação de energia com números · gráficos de energia · dissipação percentual · Ec com conversões · energia elástica · potência como taxa.

Para seguir, é só mandar **"VAI"**.