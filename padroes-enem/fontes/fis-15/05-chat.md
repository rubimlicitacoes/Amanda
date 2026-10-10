# Lista 5: padrões P41 a P48 (a última)

> 💡 **Ideia da lista:** estes padrões ficam na fronteira da Cinemática com a **Dinâmica** (forças e quantidade de movimento) e com a **Matemática** (taxas, funções e proporções). O ENEM os coloca na mesma lista porque o raciocínio é o mesmo: **grandeza = taxa × tempo**, **proporcionalidade** e **leitura de vetores**.

---

### 📘 O que você precisa saber antes da Questão 41 (Padrão P41)

**Intuição:** imagine um eixo que é empurrado ora para um lado, ora para o outro, de forma **aleatória** (moléculas, ondas, vento). Ele vai e volta e, na média, **não sai do lugar**. Para tirar trabalho útil disso, é preciso um mecanismo que **só deixe girar num sentido**: a **catraca** (engrenagem com dente assimétrico e trava).

**Como funciona:**
- empurrão no sentido "permitido": o dente desliza e o eixo **gira**
- empurrão no sentido "proibido": a trava segura e o eixo **não volta**
- resultado: o movimento aleatório de vai e vem vira uma **rotação num único sentido**

**Exemplos do cotidiano:** a roda livre da bicicleta (pedalar para trás não gira a roda para trás), a chave de catraca e o mecanismo de corda de relógios.

**Pegadinha:** dizer que a catraca **aumenta** a velocidade, **mede** ângulos ou **elimina** a aleatoriedade. Ela não muda a causa do movimento; ela **seleciona o sentido**.

#### Questão 41
Um protótipo de gerador de energia das ondas usa uma boia ligada a um eixo. Conforme as ondas sobem e descem de forma irregular, a boia faz o eixo girar ora num sentido, ora no outro. Para que o gerador funcione, os engenheiros instalaram no eixo uma **engrenagem de dentes assimétricos com uma trava** (catraca).

A função desse mecanismo é:
(a) aumentar a velocidade angular do eixo, multiplicando a frequência das ondas.
(b) travar o gerador, impedindo que ele se solte com as ondas fortes.
(c) controlar o sentido de rotação, permitindo que o eixo gire em um único sentido e aproveitando apenas os movimentos favoráveis.
(d) eliminar o caráter aleatório das ondas, tornando seu movimento regular.
(e) medir o ângulo girado pelo eixo, contando o número de dentes da engrenagem.

#### ✅ Resolução passo a passo
1. **O problema:** as ondas giram o eixo nos **dois sentidos**, e um gerador que vai e volta, na média, não acumula giro útil
2. **O que a catraca faz:** bloqueia um sentido e libera o outro
3. **Consequência:** o eixo só avança num sentido, e o movimento aleatório é "retificado"
4. **Eliminando:** (a) a catraca não multiplica frequência (isso seria um trem de engrenagens). (b) "travar" não é a função; ela trava só um sentido. (d) as ondas continuam irregulares. (e) medir não é o objetivo.

**Gabarito: (c)**

🧠 **Para fixar:** "Catraca = filtro de sentido. Transforma vai e vem em giro num único sentido."

> 💬 **Na oficial (Q17):** é a mesma lógica com o movimento browniano. A resposta é "controle do sentido da velocidade tangencial".

---

### 📘 O que você precisa saber antes da Questão 42 (Padrão P42)

**Intuição:** no espaço ou no gelo (sem atrito), se você empurra algo para frente, **é empurrado para trás**. Quem tem **menos massa** sai **mais rápido**.

**Conceito (sistema isolado, parte do repouso):**
$$Q_{antes} = Q_{depois} \quad\Rightarrow\quad 0 = m_1 v_1 - m_2 v_2 \quad\Rightarrow\quad m_1 v_1 = m_2 v_2$$

**Leitura rápida:** a velocidade é **inversamente proporcional** à massa. Massa 40× maior dá velocidade 40× menor.

**Pegadinha:** inverter a proporção (dar a velocidade maior ao mais pesado) ou somar as massas sem necessidade.

#### Questão 42
Durante uma caminhada espacial, um astronauta de 80 kg (com traje) fica solto no espaço, em repouso em relação à estação. Para voltar, ele arremessa uma ferramenta de 2 kg com velocidade de 12 m/s em relação à estação, no sentido oposto ao da estação.

A velocidade adquirida pelo astronauta, em relação à estação, é:
(a) 0,025 m/s (b) 0,15 m/s (c) 0,30 m/s (d) 0,60 m/s (e) 480 m/s

#### ✅ Resolução passo a passo
1. **Antes:** tudo em repouso, Q = 0
2. **Depois:** m(astronauta) · v = m(ferramenta) · v(ferramenta), em sentidos opostos
3. **Conta:** 80 · v = 2 · 12 = 24, então **v = 0,30 m/s**, no sentido da estação
4. **Bom senso:** a massa dele é 40× maior, então a velocidade é 40× menor: 12/40 = 0,3 ✔

**Gabarito: (c)**

⚠️ **Armadilhas:** (e) inverteu a proporção (80 × 12/2). (a) fez 2/80, esquecendo a velocidade.
🧠 **Para fixar:** "Empurrou do repouso: m₁v₁ = m₂v₂. Mais massa, menos velocidade."

> 💬 **Na oficial (Q25):** 90 · v = 360 · 0,2, então v = 0,8 m/s.

---

### 📘 O que você precisa saber antes da Questão 43 (Padrão P43)

**Intuição:** numa esteira que deve andar a **velocidade constante**, se alguém joga carga em cima (ou tira), a **quantidade de movimento** (Q = m·v) muda, porque a massa mudou. Para isso acontecer, é preciso uma **força** (impulso).

**Conceito (Teorema do Impulso):**
$$F\cdot\Delta t = \Delta Q = v\cdot\Delta m \quad\Rightarrow\quad F = v\cdot\frac{\Delta m}{\Delta t}$$

Aqui **v é constante** e **o que varia é a massa**.

**Leitura:** Δm/Δt é a **vazão de massa** (kg/s). Então força = velocidade × vazão.

**Pegadinha:** usar a massa total (1 200 kg) em vez da **variação** (Δm), ou esquecer de multiplicar pelo Δt.

#### Questão 43
Em uma mineradora, uma esteira transporta areia com velocidade constante. Em um intervalo de **2,0 s**, areia caindo verticalmente sobre a esteira faz a massa total transportada aumentar de **500 kg para 560 kg**. Para manter a velocidade constante, o motor aplica uma força horizontal adicional constante de **45 N**.

A velocidade da esteira é:
(a) 0,08 m/s (b) 0,75 m/s (c) 1,5 m/s (d) 3,0 m/s (e) 13,3 m/s

#### ✅ Resolução passo a passo
1. **Variação de massa:** Δm = 560 − 500 = **60 kg**
2. **Impulso = variação da quantidade de movimento:** F·Δt = v·Δm
3. **Substituir:** 45 × 2,0 = v × 60, então 90 = 60v e **v = 1,5 m/s**

**Gabarito: (c)**

⚠️ **Armadilhas:** (b) esqueceu o Δt (45/60). (a) usou a massa total (45/560).
🧠 **Para fixar:** "Massa variando com v constante: F·Δt = v·Δm."

> 💬 **Na oficial (Q56):** 250 × 0,10 = v × 200, então v = 0,125 m/s.

---

### 📘 O que você precisa saber antes da Questão 44 (Padrão P44)

**Intuição:** você não consegue se levantar puxando o próprio cabelo. Forças **internas** a um sistema (uma parte puxando ou empurrando outra parte do mesmo corpo) **se anulam aos pares** (ação e reação). Para o sistema **todo** se mover, é preciso interagir com algo **de fora**: o chão, a água ou o ar que é **expulso**.

**Conceito (3ª Lei de Newton):** ação e reação têm o mesmo módulo, sentidos opostos e atuam em **corpos diferentes**.

**Como analisar um carrinho:**
1. Defina o sistema (carrinho + tudo que está preso nele)
2. Pergunte: **algo sai do sistema** levando quantidade de movimento?
   - **Não** (ímã puxando o próprio carrinho): forças internas se cancelam e **não anda**
   - **Sim** (ar soprado para trás): o carrinho anda **no sentido oposto** ao do ar expulso

**Caso da oficial (Q27, ventoinha soprando a própria vela):** a ventoinha empurra o ar para frente e recua; o ar bate na vela curva e é **devolvido** para trás, empurrando a vela para frente com força um pouco **maior**. O resultado é um movimento **pequeno** para frente. A ventoinha virada para trás, sem vela no caminho, empurra o ar para fora e anda **mais**.

**Pegadinha:** pensar que "soprar a própria vela" funciona como o vento de verdade, ou que "forças iguais e opostas se anulam sempre" (elas só se anulam quando atuam **no mesmo** sistema analisado).

#### Questão 44
Dois carrinhos de brinquedo idênticos, feitos de ferro, estão sobre um piso horizontal com atrito desprezível nas rodas:
- **Carrinho A:** um ímã potente está preso a uma haste fixada na frente do próprio carrinho, atraindo-o para frente.
- **Carrinho B:** uma pequena ventoinha presa ao carrinho sopra ar **para trás**.

Os dois dispositivos são ligados ao mesmo tempo. Em relação ao movimento dos carrinhos:
(a) A e B se movem para frente.
(b) A não se move; B se move para frente, no sentido oposto ao do ar soprado.
(c) A se move para frente; B não se move.
(d) A não se move; B se move para trás, no mesmo sentido do ar soprado.
(e) Nenhum dos dois se move.

#### ✅ Resolução passo a passo
1. **Carrinho A:** o ímã puxa o carrinho para frente, e o carrinho puxa o ímã (preso a ele) para trás. As duas forças são **internas** ao mesmo sistema e se anulam. **Não anda.**
2. **Carrinho B:** a ventoinha empurra o ar para trás, e o ar empurra a ventoinha (e o carrinho) para frente. O ar **sai** do sistema, então há força externa resultante. **Anda para frente.**

**Gabarito: (b)**

🧠 **Para fixar:** "Para o sistema andar, algo precisa sair dele levando quantidade de movimento. Forças internas se anulam."

---

### 📘 O que você precisa saber antes da Questão 45 (Padrão P45)

**Intuição:** é a **mesma** estrutura do MU (s = s₀ + v·t), aplicada a outra grandeza. Se algo **entra** e algo **sai** com taxas constantes, a variação líquida é a diferença das taxas:

$$\text{Quantidade}(t) = \text{Quantidade}_0 + (\text{taxa de entrada} - \text{taxa de saída})\cdot t$$

**Paralelo com a Cinemática:**

| MU | Recipiente |
|---|---|
| posição s | volume V |
| posição inicial s₀ | volume inicial V₀ |
| velocidade v | taxa líquida (entrada − saída) |

**Sinal da taxa líquida:** positiva enche, negativa esvazia, zero mantém o nível constante.

**Pegadinha:** somar as taxas, multiplicar V₀ por uma taxa ou esquecer o V₀.

#### Questão 45
Uma piscina já contém V₀ litros de água quando uma bomba começa a enchê-la a uma vazão constante de **30 L/min**. Ao mesmo tempo, um vazamento no fundo deixa escapar **5 L/min**.

A expressão que representa o volume V de água (em litros) em função do tempo t (em minutos), até a piscina encher, é:
(a) V(t) = V₀ + 30t
(b) V(t) = V₀ + 25t
(c) V(t) = V₀ − 25t
(d) V(t) = 30V₀ − 5t
(e) V(t) = V₀ + 35t

#### ✅ Resolução passo a passo
1. **Ponto de partida:** V₀ (já havia água)
2. **Taxa líquida:** entra 30 e sai 5, então **+25 L/min**
3. **Função afim:** V(t) = V₀ + 25t (o "s = s₀ + v·t" da água)

**Gabarito: (b)**

⚠️ **Armadilhas:** (a) ignorou o vazamento. (e) somou as taxas. (c) inverteu o sinal.
🧠 **Para fixar:** "Quantidade = inicial + (entra − sai)·t. É o s = s₀ + vt disfarçado."

> 💬 **Na oficial (Q42):** entra 4 e sai 3, então V = V₀ + t.

---

### 📘 O que você precisa saber antes da Questão 46 (Padrão P46)

**Intuição:** muitas grandezas se acumulam com o tempo: distância (velocidade × tempo), radiação (dose por hora × horas), consumo e desgaste. O ENEM complica com **porcentagem do tempo** e com uma **unidade de comparação** no final.

**Roteiro em 3 passos:**
1. **Tempo efetivo:** tempo total × porcentagem
2. **Acúmulo:** taxa × tempo efetivo
3. **Comparação:** acúmulo ÷ valor de referência ("quantas radiografias", "quantos pneus", "quantos meses")

**Pegadinha:** esquecer a porcentagem, usar a taxa no tempo total ou fazer a divisão invertida no final.

#### Questão 46
Um motoboy trabalha **160 horas por mês**. Em **75%** desse tempo ele está efetivamente pilotando, a uma velocidade média de **30 km/h**. No restante, aguarda pedidos parado. O pneu traseiro da moto tem vida útil de cerca de **9 000 km**.

Aproximadamente quantos meses dura o pneu traseiro desse motoboy?
(a) 0,4 (b) 1,9 (c) 2,5 (d) 3,3 (e) 75

#### ✅ Resolução passo a passo
1. **Tempo efetivo:** 160 × 0,75 = **120 h/mês**
2. **Acúmulo (distância):** 30 × 120 = **3 600 km/mês**
3. **Comparação:** 9 000 ÷ 3 600 = **2,5 meses**

**Gabarito: (c)**

⚠️ **Armadilhas:** (b) esqueceu os 75% (9000/4800). (a) dividiu ao contrário (3600/9000).
🧠 **Para fixar:** "Tempo efetivo × taxa = acúmulo. Depois compare com a referência."

> 💬 **Na oficial (Q49):** 1000 h × 0,8 = 800 h; 800 × 2 μSv = 1600 μSv = 1,6 mSv; 1,6 ÷ 0,2 = **8 radiografias**.

---

### 📘 O que você precisa saber antes da Questão 47 (Padrão P47)

**Intuição:** na sequência de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …), a **razão entre termos consecutivos** se aproxima de **1,618** (a razão áurea). Por coincidência, **1 milha ≈ 1,609 km**, quase o mesmo número. Por isso:

$$\text{um termo em milhas} \;\longleftrightarrow\; \text{o termo seguinte em km}$$

**Regras de uso:**
- **milha → km:** ande **um termo para frente** (55 mi → 89 km)
- **km → milha:** ande **um termo para trás** (89 km → 55 mi)
- **valor fora da sequência:** use a razão ≈ 1,6 (multiplique ou divida)

**Bom senso:** a milha é **maior** que o km, então o número em milhas é sempre **menor**.

**Pegadinha:** andar na direção errada da sequência.

#### Questão 47
Usando a relação de Fibonacci entre quilômetros e milhas (… 34 km ↔ 21 mi; 55 km ↔ 34 mi; 89 km ↔ 55 mi; 144 km ↔ 89 mi …), um brasileiro quer explicar a um amigo americano que o limite numa rodovia é **100 km/h**.

Em milhas por hora, esse limite é mais próximo de:
(a) 34 (b) 55 (c) 62 (d) 89 (e) 160

#### ✅ Resolução passo a passo
1. **100 km não está na sequência:** fica entre 89 km (55 mi) e 144 km (89 mi)
2. **Razão consecutiva:** 89/55 ≈ 144/89 ≈ **1,6**
3. **km → milha:** divida, 100 ÷ 1,6 ≈ **62 mi/h**
4. **Teste de coerência:** 62 está entre 55 e 89 ✔, e é menor que 100 (a milha é maior) ✔

**Gabarito: (c)**

⚠️ **Armadilhas:** (e) multiplicou por 1,6 (direção errada). (d) "andou um termo para frente".
🧠 **Para fixar:** "Milha é maior. De mi para km, um termo para frente (×1,6); de km para mi, um termo para trás (÷1,6)."

> 💬 **Na oficial (Q40):** 55 mi/h → um termo para frente → **89 km/h**.

---

### 📘 O que você precisa saber antes da Questão 48 (Padrão P48)

**Intuição:** muitas leis da natureza são proporções simples: **y = k·x**. A dificuldade no ENEM não é a física, é **a unidade estranha da constante** e a **notação científica**.

**Lei de Hubble:** galáxias mais distantes se afastam mais rápido:
$$v = H_0 \cdot d \quad\Rightarrow\quad d = \frac{v}{H_0}$$
- H₀ ≈ 70 km/s **por megaparsec** (Mpc)
- 1 Mpc = 10⁶ pc; 1 pc ≈ 3,1 × 10¹³ km

**Roteiro:**
1. Isole a grandeza pedida (d = v/H₀)
2. Calcule na unidade "natural" da constante (aqui, Mpc)
3. Converta passo a passo (Mpc → pc → km), somando expoentes

**Notação científica:** (a × 10ᵐ) · (b × 10ⁿ) = (a·b) × 10ᵐ⁺ⁿ. Ajuste para 1 ≤ a < 10.

**Pegadinha:** esquecer o "mega" (10⁶) ou multiplicar v por H₀ em vez de dividir.

#### Questão 48
A Lei de Hubble afirma que a velocidade de afastamento de uma galáxia é proporcional à sua distância até a Terra, com constante de proporcionalidade H₀ = 70 km/s por megaparsec (1 Mpc = 10⁶ pc). Observações indicam que certa galáxia se afasta com velocidade de **2,1 × 10⁴ km/s**. Considere 1 pc ≈ 3,1 × 10¹³ km.

A distância até essa galáxia, em quilômetros, é aproximadamente:
(a) 3,0 × 10² (b) 1,5 × 10⁶ (c) 3,0 × 10⁸ (d) 9,3 × 10¹⁵ (e) 9,3 × 10²¹

#### ✅ Resolução passo a passo
1. **Isolar d:** d = v/H₀ = 2,1 × 10⁴ / 70 = 21 000/70 = **300 Mpc**
2. **Mpc → pc:** 300 × 10⁶ = **3 × 10⁸ pc**
3. **pc → km:** 3 × 10⁸ × 3,1 × 10¹³ = 9,3 × 10⁸⁺¹³ = **9,3 × 10²¹ km**

**Gabarito: (e)**

⚠️ **Armadilhas:** (a) parou em Mpc. (c) parou em pc. (d) esqueceu o "mega". (b) multiplicou v·H₀ (2,1 × 10⁴ × 70 ≈ 1,5 × 10⁶).
🧠 **Para fixar:** "Lei proporcional: isole, calcule na unidade da constante e converta somando expoentes."

---

## 📊 Balanço final

| | |
|---|---|
| **Padrões mapeados no total** | 48 |
| **Padrões abordados até agora** | **48 (P1 a P48)** |
| **Abordados nesta lista** | 8 (P41 a P48) |
| **Padrões que ainda faltam** | **0. Todos os padrões da lista oficial foram cobertos.** |

Foram 48 questões inéditas, uma por padrão, em 5 listas.

---

## 🧭 Bônus: como reconhecer o padrão na prova

Na prova, o mais difícil é **reconhecer qual padrão** está diante de você. Use esta tabela de gatilhos:

| Se o enunciado tem… | Pense em… | Padrão |
|---|---|---|
| "tempo mínimo", "velocidade máxima na placa", km/h e minutos | v = Δs/Δt e ÷3,6 | P1 |
| sensores, cm, milissegundos, "tolerância" | v = d/t; medida − tolerância | P2 |
| trechos diferentes, pedágios, paradas | soma dos tempos | P3 |
| "atravessar completamente" | L(corpo) + L(região) | P4 |
| ida e volta, "encontram-se pela primeira vez" | soma das distâncias = 2D | P5 |
| "saiu depois e chegou junto" | t₂ = t₁ − atraso | P6 |
| "chegar ao mesmo tempo" com velocidades diferentes | mesmo t | P7 |
| velocidade e distância, **sem tempo** | Torricelli | P15, P13 |
| "tempo de reação", celular | v × Δt(reação) | P16 |
| acelera e depois segue constante | MUV até v_final, depois MU | P17 |
| gráfico s × t | inclinação = v | P10, P11 |
| gráfico v × t | inclinação = a; área = Δs | P12 |
| massas diferentes caindo juntas | mesma aceleração g | P18 |
| ponto mais alto | v = 0 (vertical), a = g, F = peso | P20, P22 |
| lançado na horizontal | MU + queda livre = parábola | P21, P23 |
| ângulo de lançamento e alvo | t pela horizontal, substitui na vertical | P24, P25 |
| "alcance" comparado (Lua, estilingue) | A ∝ v₀²/g | P26 |
| barco, correnteza, vento | componentes independentes | P27, P28, P29 |
| "apanhar", "acoplar" | velocidade relativa ≈ 0 | P30 |
| curva com velocímetro constante | a꜀ radial para o centro; v²/R | P33, P34 |
| latitude | r = R·cos φ | P35 |
| engrenagens, corrente, bicicleta | borda: f·N igual; eixo: mesma f | P36 |
| "sempre virado para…", geoestacionário | mesmo período, mesmo ω | P37, P38 |
| sombra de algo girando | MHS | P39 |
| passadas e braçadas alternadas | período = tempo de 2 movimentos | P40 |
| empurrão no espaço ou no gelo | m₁v₁ = m₂v₂ | P42 |
| massa variando com v constante | F·Δt = v·Δm | P43 |
| entra e sai com vazões | V = V₀ + (entra − sai)t | P45 |

Se quiser fixar de verdade, o próximo passo é um **simulado misturado**: as questões vêm em ordem aleatória, sem mini guia, e você precisa identificar o padrão sozinha. É só pedir.