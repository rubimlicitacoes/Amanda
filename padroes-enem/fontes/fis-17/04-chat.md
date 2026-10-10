# Rodada 2: padrões P6 a P15 (bloco de 10)

Daqui em diante cada rodada cobre 10 padrões, como você pediu. Esta rodada fecha os Blocos 1 (Leis de Newton e forças) e 2 (Atrito).

---

### 🧠 QUESTÃO 6 · P6 (Diagrama de corpo livre e forças de contato)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Onde cada força atua:**
  - **peso:** no **centro de massa (CM)**, sempre vertical para baixo;
  - **normal:** no **ponto de contato**, perpendicular à superfície, empurrando;
  - **atrito:** no **ponto de contato**, paralelo à superfície e **contrário ao deslizamento** (ou à tendência de deslizar).
- **A força do chão é uma só:** o chão exerce normal + atrito, e a soma das duas é a "força do chão". Se há atrito, essa força sai **inclinada**, para cima e para trás em relação ao deslizamento (L1-22, Calvin).
- **Muleta e bengala (L1-31):** desenhe P no CM e coloque N e atrito no pé da muleta. Uma alternativa que põe o peso no ponto de contato está errada.

#### ✏️ Enunciado
Um ciclista salta da bicicleta em movimento e toca o chão com os pés enquanto ainda escorrega para a **direita**. O vetor que representa a **força total exercida pelo chão** sobre ele nesse instante aponta
- a) para cima e para a direita.
- b) horizontalmente para a esquerda.
- c) para cima e para a esquerda.
- d) verticalmente para cima.
- e) horizontalmente para a direita.

#### 🔧 Resolução passo a passo
1. **Liste as forças de contato do chão:**
   - a **normal** aponta para cima;
   - o **atrito** é contrário ao deslizamento, que é para a direita, então aponta para a **esquerda**.
2. **Some como vetores:** para cima + para a esquerda dá uma força **diagonal para cima e para a esquerda**.

#### ✅ Gabarito: **C**

#### 🚫 Eliminação
- **d)** Esqueceu o atrito.
- **b)** Esqueceu a normal.
- **a) e e)** Puseram o atrito a favor do deslizamento.

---

### 🧠 QUESTÃO 7 · P7 (Equilíbrio com decomposição em ângulo)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Corpo pendurado no meio de um cabo:** cada metade do cabo puxa com tração T, inclinada de θ em relação à horizontal.
- **No eixo vertical**, só as componentes verticais seguram o peso: **2T·sen θ = P**.
- **As componentes horizontais** (T·cos θ) se anulam entre si. É isso que puxa as árvores ou os postes.
- **Ângulo pequeno → seno pequeno → tração ENORME.** É por isso que um cabo esticado "quase reto" pode arrebentar.
- **Pegadinha:** usar cosseno no lugar de seno. O ângulo foi dado com a **horizontal**, então a componente vertical leva **seno**.

#### ✏️ Enunciado
Um equilibrista de 70 kg está parado no meio de uma corda bamba. Cada metade da corda forma 5° com a horizontal. Use g = 10 m/s², sen 5° ≈ 0,087 e cos 5° ≈ 0,996.

A força que a corda exerce em cada ponto de fixação é aproximadamente
- a) 3,5 × 10² N
- b) 7,0 × 10² N
- c) 3,5 × 10² N, pois o ângulo é desprezível
- d) 4,0 × 10³ N
- e) 8,0 × 10³ N

#### 🔧 Resolução passo a passo
1. **Peso:** P = 70 × 10 = 700 N.
2. **Vertical:** 2T·sen 5° = 700, ou seja, 2T × 0,087 = 700.
3. **Resolva:** T = 700 ÷ 0,174 ≈ **4 023 N ≈ 4,0 × 10³ N**.
4. **Confira a ordem de grandeza:** o ângulo é pequeno, então T tem de ser muito maior que P. A resposta passa no teste.

#### ✅ Gabarito: **D**

#### 🚫 Eliminação
- **a) e c)** Dividiram o peso por 2 e ignoraram o ângulo, ou usaram cosseno no lugar de seno.
- **e)** Esqueceu que são **duas** metades de corda.
- **b)** Igualou a tração ao peso.

---

### 🧠 QUESTÃO 8 · P8 (Equilíbrio vertical sustentado por atrito)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Corpo prensado contra a parede:** a força horizontal gera a **normal**, e é o **atrito vertical** que segura o peso.
- **Corpo parado → F_R = 0 → o atrito estático iguala o que tenta derrubar.** Ele **não** é μ·N, a menos que o corpo esteja na iminência de escorregar.
- **Vários corpos empilhados:**
  - trate o **conjunto** para achar a força externa (o atrito da parede segura **o peso total**);
  - depois **isole um corpo** para achar as forças entre os corpos.
- **As forças internas** entre os corpos são pares ação-reação e se cancelam no conjunto (L1-20, moedas).

#### ✏️ Enunciado
Uma placa lisa (sem atrito) empurra horizontalmente dois blocos contra uma parede vertical. O bloco A, de peso 3 N, encosta na placa. O bloco B, de peso 5 N, fica entre A e a parede. Os blocos estão parados.

A força de atrito que a parede exerce em B e a força de atrito que B exerce em A valem, respectivamente,
- a) 5 N e 3 N
- b) 8 N e 3 N
- c) 8 N e 5 N
- d) 5 N e 0 N
- e) 8 N e 8 N

#### 🔧 Resolução passo a passo
1. **Conjunto A + B (peso total de 8 N):**
   - a placa é lisa, então não tem atrito;
   - o único atrito externo é o da parede, que vale **8 N para cima**.
2. **Isole A (peso de 3 N):**
   - a placa não segura nada na vertical;
   - quem segura A é o atrito de B: **3 N para cima**.
3. **Prova real com B isolado:**
   - para baixo, o peso de 5 N mais a reação de A sobre B, de 3 N, somam 8 N;
   - para cima, o atrito da parede de 8 N. Bate.

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **a)** Esqueceu que a parede sustenta o conjunto inteiro.
- **e)** Somou a força interna a B como se fosse externa.
- **d)** Achou que nada segura A.

---

### 🧠 QUESTÃO 9 · P9 (Polias)

#### 📘 O que você precisa saber antes de fazer essa questão
| Arranjo | Força ideal | Corda puxada |
|---|---|---|
| Polia **fixa** | F = P (só muda a direção) | igual ao deslocamento da carga |
| 1 polia **móvel** | F = P/2 | o dobro |
| **n** móveis em série (talha exponencial) | F = P/2ⁿ | 2ⁿ vezes |
| Talha com k ramos sustentando a carga | F = P/k | k vezes |

- **Aparelhos de academia (L1-4):**
  - com polia fixa, F = M₁g;
  - com polia móvel, F = M₂g/2;
  - para a mesma força, M₂/M₁ = **2**.
- **Arrastar na horizontal (L1-45):** a carga a vencer é o **atrito estático máximo** (μe·N), e não o peso.
- **Polias não economizam trabalho:** a força cai na mesma proporção em que a corda puxada aumenta.

#### ✏️ Enunciado
Um operário precisa arrastar, sobre piso horizontal, um contêiner de 2 000 kg (μe = 0,5 entre contêiner e piso). Ele usa uma talha exponencial com polias e fios ideais. A força máxima que consegue aplicar é 400 N. Use g = 10 m/s².

O número mínimo de polias móveis é
- a) 3
- b) 4
- c) 5
- d) 6
- e) 25

#### 🔧 Resolução passo a passo
1. **Força a vencer:** fe,máx = μe·N = 0,5 × 20 000 = **10 000 N**.
2. **Quantas vezes a talha precisa dividir:** 10 000 ÷ 400 = **25**.
3. **Procure a menor potência de 2 que chegue a 25:**
   - 2⁴ = 16 não basta;
   - 2⁵ = 32 basta.
   - Logo, **n = 5**.

#### ✅ Gabarito: **C**

#### 🚫 Eliminação
- **e)** Dividiu pelo número de vezes, como se fosse uma talha de ramos.
- **b)** Arredondou para baixo.
- Quem usou o peso inteiro (20 000 N) no lugar do atrito chegou a 50, ou seja, n = 6, alternativa **d)**.

---

### 🧠 QUESTÃO 10 · P10 (Sentido do atrito / atrito que move)

#### 📘 O que você precisa saber antes de fazer essa questão
- **O atrito se opõe ao deslizamento relativo** (ou à tendência dele), **não ao movimento do corpo**.
- **Andar ou subir rampa (L1-42):** o pé empurra o chão para trás, e o atrito no pé aponta **para frente, paralelo ao plano**.
- **Roda motriz:** empurra o chão para trás, e o atrito do chão aponta **para frente**. É estático, porque a roda rola sem deslizar (L1-29).
- **Roda livre (puxada pelo quadro):** o atrito do chão faz a roda girar e aponta **para trás**, com valor pequeno.
- **Operários e pedra (L1-40):**
  - o atrito no pé de quem empurra ou puxa aponta para o lado em que a pessoa "vai";
  - o atrito na pedra que desliza é contrário ao deslizamento dela.

#### ✏️ Enunciado
Um ciclista acelera numa pista horizontal. A roda traseira é a motriz e a dianteira gira livre. As forças de atrito que o chão exerce nas rodas **traseira** e **dianteira** apontam, respectivamente,
- a) para trás e para trás.
- b) para frente e para frente.
- c) para frente e para trás.
- d) para trás e para frente.
- e) para frente, e na dianteira não há atrito.

#### 🔧 Resolução passo a passo
1. **Roda traseira:** a corrente faz a roda girar e o ponto de contato empurra o chão para trás. Pela 3ª lei, o chão empurra a roda **para frente**. É a força que acelera a bicicleta.
2. **Roda dianteira:** o quadro a empurra para frente, e o ponto de contato tenderia a escorregar para frente. O atrito aponta **para trás** e é ele que faz a roda girar.

#### ✅ Gabarito: **C**

#### 🚫 Pegadinha
"O atrito sempre atrapalha o movimento" está errado. Na roda motriz, e no pé de quem anda, o atrito **é** a força que produz o movimento.

---

### 🧠 QUESTÃO 11 · P11 (Atrito cinético constante e redução de μ)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Corpo deslizando:** fc = μc·N, um valor **constante**.
- **O atrito cinético não depende da força aplicada, da velocidade nem da área de contato.** Só depende de μc e de N.
- **Na rampa (L1-16):** N = P·cos θ. Se a inclinação não muda, o atrito fica constante, mesmo que a pessoa diminua a força.
- **O que reduz μ:** cera, óleo, varrer o gelo no curling (L1-28), lâmina d'água na aquaplanagem (L1-27). Com μ menor, a desaceleração é menor.

#### ✏️ Enunciado
Uma caixa de 40 kg desliza sobre piso horizontal com μc = 0,25. Um funcionário a puxa horizontalmente, primeiro com 150 N e depois com 300 N, e ela continua deslizando. Em seguida o piso é encerado e μc passa a 0,10. Use g = 10 m/s².

As forças de atrito nas três situações (150 N, 300 N e piso encerado) são
- a) 150 N; 300 N; 40 N
- b) 100 N; 100 N; 40 N
- c) 100 N; 200 N; 40 N
- d) 100 N; 100 N; 100 N
- e) 150 N; 100 N; 40 N

#### 🔧 Resolução passo a passo
1. **Normal:** N = P = 400 N, porque o piso é horizontal e não há força vertical extra.
2. **Atrito com puxão de 150 N:** fc = 0,25 × 400 = **100 N**.
3. **Atrito com puxão de 300 N:** a caixa continua deslizando, então **continua 100 N**. A força maior só aumenta a aceleração: a = (300 − 100)/40 = 5 m/s².
4. **Piso encerado:** fc = 0,10 × 400 = **40 N**.

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **a) e e)** Igualaram o atrito à força aplicada. Isso só vale para corpo **parado**.
- **c)** Acharam que o atrito cresce com a força.
- **d)** Ignoraram a mudança de μ.

---

### 🧠 QUESTÃO 12 · P12 (Atrito estático máximo como limite)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Para não escorregar:** força que tenta deslizar ≤ μe·N, ou seja, **μe ≥ F/N**.
- **Calcule o μ mínimo e só então consulte a tabela.**
- **Em questão de escolha de material (L1-55):**
  1. descarte quem tem μ abaixo do mínimo;
  2. entre os que sobram, pegue o **mais barato**.

#### ✏️ Enunciado
Num depósito, funcionários empurram carrinhos de carga. Cada pé precisa suportar uma força horizontal de até 360 N sem escorregar, e a normal sobre o pé é de 800 N. Revestimentos disponíveis:

| Revestimento | μe | Custo |
|---|---|---|
| Porcelanato | 0,30 | $ |
| Granito | 0,40 | $$ |
| Cerâmica antiderrapante | 0,50 | $$$ |
| Pedra rústica | 0,60 | $$ |
| Borracha | 0,70 | $$$$$ |

O revestimento mais barato que garante a segurança é
- a) Porcelanato
- b) Granito
- c) Cerâmica antiderrapante
- d) Pedra rústica
- e) Borracha

#### 🔧 Resolução passo a passo
1. **μ mínimo:** μe ≥ 360/800 = **0,45**.
2. **Filtre a tabela:** só passam Cerâmica (0,50), Pedra rústica (0,60) e Borracha (0,70).
3. **Escolha o mais barato entre esses:** a Pedra rústica custa **$$**.

#### ✅ Gabarito: **D**

#### 🚫 Pegadinhas
- **b)** O granito custa $$, mas tem μ = 0,40, abaixo de 0,45.
- **c)** Pegou o primeiro que passa no filtro sem comparar os preços.

---

### 🧠 QUESTÃO 13 · P13 (Carga em veículo acelerado: atrito máximo + cordas)

#### 📘 O que você precisa saber antes de fazer essa questão
- **A caixa precisa ter a mesma aceleração do veículo.** A força necessária é F = m·a, apontando **no sentido da aceleração**.
- **Quem fornece essa força:** primeiro o **atrito estático**, até no máximo μe·N. O que faltar é completado pela **corda** do lado certo.
- **Veículo acelerando para frente:** a caixa "quer ficar para trás", então trabalha a corda **dianteira**.
- **Veículo freando:** a caixa "quer seguir em frente", então trabalha a corda **traseira**.
- **Corda só puxa:** a corda do outro lado fica com T = 0, porque estava frouxa no início (L1-10).

#### ✏️ Enunciado
Uma caixa de 100 kg está na carroceria de uma caminhonete (μe = 0,3), presa por uma corda dianteira (ligada à cabine) e uma traseira (ligada à tampa). As cordas começam sem tensão e a caixa está sempre na iminência de deslizar. A caminhonete arranca com 4 m/s² e depois freia com 6 m/s². Use g = 10 m/s².

As trações (dianteira; traseira) na arrancada e na freada são
- a) arrancada 400; 0 · freada 0; 600
- b) arrancada 100; 0 · freada 0; 300
- c) arrancada 0; 100 · freada 300; 0
- d) arrancada 100; 0 · freada 300; 0
- e) arrancada 0; 0 · freada 0; 0

#### 🔧 Resolução passo a passo
1. **Atrito máximo:** 0,3 × 1 000 = **300 N**.
2. **Arrancada:**
   - precisa de m·a = 100 × 4 = 400 N para frente;
   - o atrito dá 300 N;
   - a corda **dianteira** completa com 100 N, e a traseira fica com 0.
3. **Freada:**
   - precisa de 100 × 6 = 600 N para trás;
   - o atrito dá 300 N;
   - a corda **traseira** completa com 300 N, e a dianteira fica com 0.

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **a)** Esqueceu o atrito.
- **c) e d)** Trocaram as cordas: pensaram no sentido da velocidade, e não no da aceleração.

---

### 🧠 QUESTÃO 14 · P14 (ABS: conceito e gráfico)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Roda travada desliza:** o atrito é **cinético**, μc menor.
- **Roda girando no limite, sem deslizar:** o atrito é **estático**, e pode chegar a μe·N, que é maior.
- **ABS** alivia e reaplica o freio várias vezes por segundo e mantém a roda no limite do rolamento. Resultado: **frenagem maior, distância menor e direção preservada** (roda que gira obedece ao volante).
- **Gráfico f_at × pressão no pedal (L1-26):**
  - **sem ABS:** reta subindo, pico em μe·N, **queda** para o patamar μc·N (a roda travou);
  - **com ABS:** reta subindo até perto do pico e, depois disso, **dente de serra** em torno do máximo.
- **Justificativas erradas** que aparecem nas alternativas: "aumenta a normal", "aumenta a área de contato", "μe = μc".

#### ✏️ Enunciado
Sobre frear forte com e sem ABS, está correto afirmar que
- a) o ABS aumenta a área de contato pneu-asfalto, elevando o atrito.
- b) sem ABS, o atrito cresce até um pico e cai para um valor constante menor; com ABS, oscila em torno do pico, pois μe > μc.
- c) com ABS, o atrito é cinético o tempo todo, mas a normal aumenta.
- d) sem ABS, o atrito cresce indefinidamente com a pressão no pedal.
- e) o ABS funciona porque torna μe igual a μc.

#### 🔧 Resolução passo a passo
1. **Identifique o tipo de atrito em cada caso:** roda travada → cinético; roda girando no limite → estático.
2. **Compare:** como μe > μc, o atrito com ABS é maior.
3. **Monte o desenho dos gráficos:**
   - sem ABS: subida, pico, queda e patamar;
   - com ABS: subida e dente de serra perto do pico.
4. **Compare com as alternativas:** só a B descreve os dois gráficos e a justificativa certa.

#### ✅ Gabarito: **B**

#### 🚫 Eliminação
- **a) e c)** São as justificativas proibidas ("área" e "normal").
- **d)** O atrito tem limite.
- **e)** Inverte a lógica do ABS.

---

### 🧠 QUESTÃO 15 · P15 (Distância de frenagem)

#### 📘 O que você precisa saber antes de fazer essa questão
- **Freando só com atrito:** a = μ·g, e a **massa cancela**.
- **Pela equação de Torricelli:** **d = v₀²/(2μg)**.
- **Converta antes de calcular:** km/h ÷ 3,6 = m/s. Ex.: 108 km/h = 30 m/s.
- **Dobrar a velocidade quadruplica a distância.** Um μ menor (pista molhada, roda travada) aumenta a distância.
- **Com ABS** use μe; **com roda travada** use μc (L1-48).

#### ✏️ Enunciado
Dois veículos trafegam a 108 km/h numa estrada horizontal e freiam no mesmo ponto. O primeiro é um carro de 1 000 kg com ABS (μe = 0,9). O segundo é uma van de 2 000 kg sem ABS, que trava as rodas (μc = 0,6). Use g = 10 m/s².

As distâncias até parar são
- a) carro 50 m; van 75 m
- b) carro 50 m; van 150 m
- c) carro 75 m; van 50 m
- d) carro 25 m; van 37,5 m
- e) carro 50 m; van 37,5 m

#### 🔧 Resolução passo a passo
1. **Converta:** v = 108 ÷ 3,6 = 30 m/s, e v² = 900.
2. **Carro (ABS):** d = 900/(2 × 0,9 × 10) = 900/18 = **50 m**.
3. **Van (rodas travadas):** d = 900/(2 × 0,6 × 10) = 900/12 = **75 m**.
4. **A massa não entra na conta:** a van ser mais pesada não muda nada.

#### ✅ Gabarito: **A**

#### 🚫 Eliminação
- **b)** Multiplicou pela razão das massas.
- **d)** Esqueceu o fator 2 do denominador.
- **e)** Dividiu pela razão das massas.
- **c)** Trocou μe por μc.

---

## 📊 Balanço da Rodada 2
- **Padrões abordados nesta rodada:** 10 (P6 a P15)
- **Total coberto:** **15 de 63**
- **Restam: 48 padrões**, ou seja, mais 5 rodadas (4 com 10 padrões e a última com 8).
- **Próxima rodada (P16 a P25):** resistência do ar · velocidade terminal · peso constante e MUV · composição de velocidades · quem faz a centrípeta · tração no ponto mais baixo · transmissão por correia · pêndulo simples · mola e oscilador · MHS como projeção do MCU.

Para seguir, é só mandar **"VAI"**.