# Lista 2: 15 questões inéditas (padrões P2, P3, P4, P5, P6, P8, P9, P10, P11, P12, P14, P15, P16, P17, P18)

> Tema da lista: **cálculos básicos de ondas e acústica**. Relembre a caixa de ferramentas da Lista 1: **v = λ·f**, **T = 1/f**, a fonte define f e o meio define v.

---

## Questão 1 (Padrão P2: velocidade dada por fórmula + período)

### O que você precisa saber antes de fazer essa questão
- **Intuição:** às vezes o ENEM não dá a velocidade da onda. Ele dá uma **fórmula** para calculá-la (que você não precisa decorar) e espera que você combine com **v = λ/T**.
- **Ondas em água rasa** (tsunami, Q22 e Q66): quando λ é muito maior que a profundidade d, a velocidade depende só de d: **v = √(g·d)**.
- **Roteiro em 3 passos:**
  1. Calcule v pela fórmula do texto (atenção às unidades: d em metros).
  2. Converta λ para metros.
  3. T = λ/v (e converta segundos para minutos, se pedido).
- **Consequência física bonita (P6):** perto da costa, d diminui, então v diminui. Como o período não muda (quem define é a fonte), λ = v·T encolhe e a energia se concentra: **a onda cresce em altura**.
- **Pegadinha:** "intervalo de tempo entre duas ondas consecutivas" é o **período** T.
- **Como memorizar:** "**Fórmula dá v, desenho dá λ, e T é a divisão dos dois**".

### Questão
Modelos de alerta de tsunami consideram que, em mar aberto, as ondas geradas por um terremoto submarino se comportam como ondas em águas rasas, pois seu comprimento de onda é muito maior que a profundidade do oceano. Nessas condições, a velocidade de propagação é dada por v = √(g·d), em que g = 10 m/s² e d é a profundidade local. Em uma região do Oceano Pacífico com profundidade média de 6 250 m, foi detectado um tsunami com comprimento de onda de 150 km.

O intervalo de tempo entre a passagem de duas cristas consecutivas desse tsunami por uma boia de monitoramento é mais próximo de
- a) 1 min.
- b) 4 min.
- c) 10 min.
- d) 32 min.
- e) 600 min.

### Resolução passo a passo
1. **Velocidade:** v = √(10 × 6 250) = √62 500 = **250 m/s** (900 km/h, velocidade de avião a jato).
2. **Comprimento de onda em metros:** λ = 150 km = **150 000 m**.
3. **Período:** T = λ/v = 150 000/250 = **600 s**.
4. **Em minutos:** 600/60 = **10 min**.
5. Por que cada distrator cai:
   - d) Esqueceu o g: v = √6 250 ≈ 79 m/s, T ≈ 1 900 s ≈ 32 min.
   - e) Achou 600 e não converteu segundos para minutos.
   - a), b) Não correspondem a nenhum cálculo coerente.

**Gabarito: C**

---

## Questão 2 (Padrão P3: eventos periódicos no espaço, f = v/espaçamento)

### O que você precisa saber antes de fazer essa questão
- **Intuição:** se obstáculos iguais estão espaçados de uma distância d e você passa por eles com velocidade v, você "bate" em um a cada intervalo **T = d/v**. Logo, **f = v/d**. É o v = λ·f, com o espaçamento fazendo o papel de λ.
- **Onde aparece:**
  - Sonorizadores na estrada (Q19): faixas a cada 8 cm, carro a 30 m/s → f = 30/0,08 = 375 Hz.
  - Comprimento de um **bit** (Q41): se a informação anda a v e passam N bits por segundo, cada bit "ocupa" **d = v/N** metros.
  - Juntas dos trilhos do trem, ondulações na areia, degraus de escada.
- **Pegadinha:** inverter a divisão (d/v dá o **período**, não a frequência) e esquecer de converter km/h para m/s.
- **Como memorizar:** "**Quantos passam por segundo?** Velocidade dividida pelo espaço de cada um".

### Questão
Nas ferrovias mais antigas, os trilhos são formados por barras de aço de 12 m de comprimento, separadas por pequenas juntas de dilatação. Cada vez que uma roda passa sobre uma junta, ouve-se o característico "tec-tec" do trem. Um passageiro percebe esse ruído enquanto o trem se desloca com velocidade constante de 72 km/h.

A frequência com que uma mesma roda passa sobre as juntas, em hertz, é mais próxima de
- a) 0,60.
- b) 1,7.
- c) 6,0.
- d) 20.
- e) 240.

### Resolução passo a passo
1. **Velocidade em m/s:** 72 ÷ 3,6 = **20 m/s**.
2. **Espaçamento entre juntas:** d = 12 m.
3. **Frequência:** f = v/d = 20/12 ≈ **1,7 Hz** (quase duas batidas por segundo).
4. Por que cada distrator cai:
   - a) 12/20 = 0,6: calculou o **período** (d/v).
   - c) 72/12 = 6: não converteu km/h.
   - d) 20 é a velocidade, não a frequência.
   - e) 20 × 12: multiplicou em vez de dividir.

**Gabarito: B**

---

## Questão 3 (Padrão P4: período por contagem de eventos)

### O que você precisa saber antes de fazer essa questão
- **Regra:** T = (tempo total) ÷ (nº de **ciclos completos**). f = 1/T. Em batimentos por minuto: **bpm = 60/T** (T em segundos).
- **O que é "um ciclo"?** É o tempo até o movimento **se repetir igualzinho**:
  - **Pé direito** (Q74): passada direita, passada esquerda, e só então o pé direito volta a apoiar. **Um ciclo do pé = 2 passadas.**
  - **Coração** (Q42, Q51): de um pico R (o "espeto" do ECG) até o próximo pico R.
- **ECG em quadradinhos:** descubra quanto vale cada quadrado no eixo do tempo, conte quantos há entre dois picos e multiplique. Ex.: picos a cada 1,8 s → 60/1,8 ≈ 33 bpm (abaixo do normal, que é 60 a 100 bpm).
- **Pegadinha:** contar cada passada como um ciclo completo do pé. A questão Q74 tinha 41 passadas em 10 s: o pé direito fez ~20 ciclos, T ≈ 0,5 s.
- **Como memorizar:** "**Ciclo é quando o filme recomeça**".

### Questão
Aplicativos de corrida medem a cadência do atleta, isto é, o número de passadas por minuto (cada vez que um dos pés toca o chão conta como uma passada). Uma corredora de rua manteve, durante toda uma prova, cadência constante de 180 passadas por minuto, alternando sempre os pés.

O período do movimento do pé esquerdo dessa corredora, em segundos, é mais próximo de
- a) 0,33.
- b) 0,67.
- c) 1,5.
- d) 3,0.
- e) 90.

### Resolução passo a passo
1. Em 1 minuto há 180 passadas, alternando esquerdo e direito: o **pé esquerdo** toca o chão **90 vezes** por minuto.
2. O pé esquerdo completa **90 ciclos em 60 s**.
3. T = 60/90 = **0,67 s**.
4. Por que cada distrator cai:
   - a) 60/180 = 0,33: contou cada passada como um ciclo do pé esquerdo.
   - c) 90/60 = 1,5: é a **frequência** do pé (em Hz), não o período.
   - d) 180/60 = 3: frequência de passadas, não período.
   - e) 90 é o número de ciclos por minuto.

**Gabarito: B**

---

## Questão 4 (Padrão P5: período lido no oscilograma)

### O que você precisa saber antes de fazer essa questão
- **Osciloscópio** desenha o sinal (tensão) em função do tempo. Você não lê f diretamente; você lê **T** no eixo horizontal e calcula **f = 1/T**.
- **Formas de achar T no gráfico** (Q26):

| Do ponto | Até o ponto | Isso vale |
|---|---|---|
| um máximo | o próximo máximo | **T** |
| um máximo | o mínimo seguinte | **T/2** |
| um zero subindo | o zero descendo | **T/2** |
| um máximo | o zero seguinte | **T/4** |

- **Unidades:** ms = 10⁻³ s. f = 1/(4 ms) = 1/0,004 = 250 Hz.
- **Pegadinha:** o gráfico mostra **menos de um ciclo completo** e você toma a distância máximo-mínimo como se fosse T. Resultado: o dobro da frequência certa.
- **Como memorizar:** "**Pico a pico do mesmo lado = período inteiro**".

### Questão
Em uma aula de laboratório, um gerador de sinais foi ligado a um osciloscópio. A tela mostrava apenas um trecho do sinal senoidal, como no esquema:

```
 V (V)
  +5 |      *
     |   *     *
   0 |*-----------*-------------------> t (ms)
     |               *        *
  -5 |                   *
     0   0,5  1,0  1,5  2,0  2,5  3,0
```

O professor informou que o máximo (+5 V) ocorre em t = 1,0 ms e o mínimo (−5 V) ocorre em t = 3,0 ms, e que não há outros máximos ou mínimos entre esses instantes.

A frequência do sinal produzido pelo gerador é
- a) 125 Hz.
- b) 250 Hz.
- c) 333 Hz.
- d) 500 Hz.
- e) 1 000 Hz.

### Resolução passo a passo
1. Do máximo ao mínimo seguinte passa **meio período**: T/2 = 3,0 − 1,0 = 2,0 ms.
2. T = 2 × 2,0 = **4,0 ms = 0,004 s**.
3. f = 1/T = 1/0,004 = **250 Hz**.
4. Por que cada distrator cai:
   - a) 1/8 ms: dobrou duas vezes.
   - c) 1/3 ms: usou o instante do mínimo como período.
   - d) 1/2 ms: tomou máximo-mínimo como período inteiro (a pegadinha clássica).
   - e) 1/1 ms: usou o instante do máximo.

**Gabarito: B**

---

## Questão 5 (Padrão P6: a fonte define f, o meio define v)

### O que você precisa saber antes de fazer essa questão
- **Regra de ouro da ondulatória:**
  - **f** é a "assinatura" da **fonte**. Se a fonte não muda, f não muda, nem quando a onda troca de meio.
  - **v** depende **só do meio** (do material e do seu estado). No mesmo meio, todas as frequências andam com a mesma velocidade (Q13, Q99).
  - **λ = v/f** se ajusta ao que sobrou.
- **Velocidades do som:** ar ~340 m/s, água ~1 500 m/s, aço ~5 000 m/s.
- **Exemplo da lista (Q35):** a goteira passa de 2 gotas/s para 1 gota/s. O meio (água) é o mesmo, então v é a mesma; f caiu pela metade, então λ **dobra** (de 25 cm para 50 cm).
- **Pegadinha:** achar que "mais frequência = mais velocidade". Não: mais frequência no mesmo meio = **λ menor**.
- **Como memorizar:** "**Fonte manda na f, meio manda na v, λ obedece os dois**".

### Questão
Um diapasão vibrando com frequência de 440 Hz é segurado por um mergulhador na beira de uma piscina, com a metade inferior dentro da água. Parte do som se propaga pelo ar e parte pela água. Considere a velocidade do som no ar igual a 340 m/s e na água igual a 1 480 m/s.

Comparando a onda sonora na água com a onda sonora no ar, na água ela tem
- a) mesma frequência, maior velocidade e maior comprimento de onda.
- b) mesma frequência, maior velocidade e menor comprimento de onda.
- c) maior frequência, maior velocidade e mesmo comprimento de onda.
- d) menor frequência, mesma velocidade e maior comprimento de onda.
- e) maior frequência, mesma velocidade e menor comprimento de onda.

### Resolução passo a passo
1. **Frequência:** a fonte é o mesmo diapasão, então f = 440 Hz nos dois meios. (Elimina c, d, e.)
2. **Velocidade:** depende do meio: 1 480 m/s na água contra 340 m/s no ar. **Maior na água.**
3. **Comprimento de onda:**
   - Ar: λ = 340/440 ≈ 0,77 m.
   - Água: λ = 1 480/440 ≈ 3,4 m. **Maior na água.**
4. Por que b) cai: com f igual e v maior, λ = v/f **tem** que ser maior.

**Gabarito: A**

---

## Questão 6 (Padrão P8: transdução piezoelétrica)

### O que você precisa saber antes de fazer essa questão
- **Piezoeletricidade:** certos cristais (quartzo, óxido de zinco, cerâmicas especiais) geram **tensão elétrica quando são deformados** (apertados, dobrados, vibrados). E o inverso: **vibram quando recebem tensão**.

| Sentido | Exemplo |
|---|---|
| Mecânico → elétrico | **microfone** de cristal (Q5), acendedor de fogão sem pilha, piso que gera energia com passos, nanotubos que captam ruído (Q85) |
| Elétrico → mecânico | relógio de quartzo (Q5), alto-falante piezo (buzzer), transdutor de ultrassom |

- **Ligação com ondas:** o **som** é vibração mecânica. Um piezoelétrico transforma a energia dessa onda sonora em energia elétrica (Q85: a resposta é "ondas sonoras").
- **Pegadinha:** confundir com efeito **fotovoltaico** (luz → eletricidade, placa solar) ou com **indução** (ímã em movimento → corrente, dínamo).
- **Como memorizar:** "**Piezo = Pressão**" (do grego *piezein*, apertar).

### Questão
Algumas estações de metrô no Japão instalaram, nas catracas, placas de piso que geram eletricidade a partir dos passos dos usuários. Cada placa contém discos cerâmicos que, ao serem comprimidos e liberados pelo peso das pessoas, produzem pulsos de tensão elétrica, usados para alimentar painéis luminosos.

O mesmo princípio físico é utilizado no funcionamento de um(a)
- a) painel solar fotovoltaico.
- b) acendedor elétrico de fogão que funciona sem pilha nem tomada.
- c) lâmpada fluorescente.
- d) motor de ventilador.
- e) chuveiro elétrico.

### Resolução passo a passo
1. Identifique a conversão: **pressão mecânica** (passos) → **tensão elétrica**. É o efeito **piezoelétrico**.
2. Procure o equipamento que faz o mesmo: o acendedor de fogão "clic" tem um cristal que, ao ser golpeado por uma mola, gera uma tensão alta o bastante para produzir a faísca. Sem pilha e sem tomada.
3. Por que cada distrator cai:
   - a) Converte **luz** em eletricidade (fotovoltaico).
   - c) Converte eletricidade em luz (descarga num gás + fluorescência).
   - d) Converte eletricidade em movimento (motor, efeito magnético).
   - e) Converte eletricidade em calor (efeito Joule).

**Gabarito: B**

---

## Questão 7 (Padrão P9: tempo = distância ÷ velocidade em sensores)

### O que você precisa saber antes de fazer essa questão
- **Sensores de barreira** (Q100): um feixe de largura d liga o transmissor ao receptor. Para o sistema "ter certeza" de que algo passou, o objeto precisa **atravessar o feixe completamente**:
  - distância percorrida = **espessura do objeto + largura do feixe**;
  - tempo = distância/velocidade.
- **"Menor tempo de resposta que garante a detecção":** o sistema tem que funcionar no **pior caso**, que é o objeto **mais rápido** (passa em menos tempo).
- **Radares de velocidade** (Q96): v = Δs/Δt; para calcular v é preciso conhecer a **distância entre os sensores**.
- **Pegadinha:** usar só a espessura do objeto (esquecer o feixe) ou usar a velocidade mais lenta.
- **Como memorizar:** "**Atravessar inteiro = corpo + feixe. Pior caso = o mais rápido**".

### Questão
Um sistema de proteção de uma loja usa um sensor de barreira com feixe infravermelho de 2 cm de diâmetro, instalado próximo ao chão para detectar a entrada de animais à noite. O tempo de resposta do sensor corresponde ao intervalo necessário para que um animal atravesse completamente o feixe. O menor animal que deve ser detectado é um gato, cuja menor espessura de perfil é 14 cm. O manual informa que gatos podem cruzar o feixe rastejando (1 m/s), andando (2 m/s) ou correndo (4 m/s).

O maior tempo de resposta que ainda garante a detecção do gato em qualquer situação é mais próximo de
- a) 5 ms.
- b) 35 ms.
- c) 40 ms.
- d) 80 ms.
- e) 160 ms.

### Resolução passo a passo
1. **Distância para atravessar o feixe inteiro:** 14 cm + 2 cm = 16 cm = **0,16 m**.
2. **Pior caso:** o gato **correndo** (4 m/s), que passa mais rápido.
3. t = 0,16/4 = **0,04 s = 40 ms**. Se o sensor demorar mais que isso, um gato correndo passa sem ser registrado.
4. Por que cada distrator cai:
   - a) 0,02/4: usou só a largura do feixe.
   - b) 0,14/4: esqueceu a largura do feixe.
   - d) 0,16/2: usou o gato andando.
   - e) 0,16/1: usou o gato rastejando (o melhor caso, não o pior).

**Gabarito: C**

---

## Questão 8 (Padrão P10: altura = frequência)

### O que você precisa saber antes de fazer essa questão
- **Altura** é a qualidade que classifica o som em **grave** (baixo) ou **agudo** (alto). Depende **só da frequência**.
- **Escala musical** (Q61): dó, ré, mi, fá, sol, lá, si estão em **ordem crescente de frequência** dentro de uma oitava. O dó é a mais grave e o si a mais aguda.
- **Ligação com λ:** no ar, todas têm a mesma velocidade. Então **maior f → menor λ** e **menor f → maior λ**.

| Nota (uma oitava) | Frequência | λ no ar |
|---|---|---|
| Dó | ~262 Hz (menor) | ~1,30 m (**maior**) |
| Lá | 440 Hz | ~0,77 m |
| Si | ~494 Hz (maior) | ~0,69 m (**menor**) |

- **Ouvido absoluto** (Q31): reconhecer uma nota isolada = reconhecer sua **frequência**.
- **Pegadinha:** "a nota mais alta" é a mais **aguda**, não a mais forte. E velocidade não muda de nota para nota.
- **Como memorizar:** "**Agudo = Alta frequência = λ Acanhado**".

### Questão
Em uma aula de música, a professora toca no teclado, em sequência e com a mesma intensidade, as notas dó e si de uma mesma oitava. Os alunos percebem que o dó soa mais grave e o si mais agudo.

Comparada à onda sonora da nota si, a onda sonora da nota dó, ao se propagar no ar da sala, apresenta maior
- a) frequência.
- b) velocidade.
- c) comprimento de onda.
- d) intensidade.
- e) altura.

### Resolução passo a passo
1. O dó é **mais grave**: **menor frequência** que o si. Elimina a).
2. Mesmo meio (ar da sala): **mesma velocidade**. Elimina b).
3. λ = v/f: com mesma v e f menor, o dó tem **λ maior**.
4. Por que os outros distratores caem:
   - d) As notas foram tocadas com a mesma intensidade.
   - e) "Altura" maior significa mais agudo, e o dó é o mais grave (menor altura).

**Gabarito: C**

---

## Questão 9 (Padrão P11: oitava = dobro da frequência)

### O que você precisa saber antes de fazer essa questão
- **Oitava:** a mesma nota, uma "volta" acima na escala. Subir uma oitava **multiplica a frequência por 2**. Descer uma oitava divide por 2.
- **n oitavas acima:** f = f₀ × **2ⁿ**. Por isso a relação é **exponencial** (Q82), não linear: 110 → 220 → 440 → 880 → 1 760 → 3 520.
- **No oscilograma** (Q23): no mesmo intervalo T, a nota uma oitava acima mostra **o dobro de ciclos**. Razão f(grave)/f(aguda) = 1/2.
- **Pegadinha:** somar em vez de multiplicar ("cada oitava soma 440 Hz", errado) ou dizer que a variação é constante.
- **Como memorizar:** "**Oitava dobra**": 2, 4, 8, 16 vezes.

### Questão
Em um violão afinado no padrão, a corda solta mais grave (Mi grave) vibra com frequência fundamental de 82,5 Hz. A corda solta mais aguda (Mi agudo) soa exatamente a mesma nota, mas duas oitavas acima.

A frequência fundamental da corda Mi agudo é
- a) 165 Hz.
- b) 247,5 Hz.
- c) 330 Hz.
- d) 412,5 Hz.
- e) 660 Hz.

### Resolução passo a passo
1. Uma oitava acima: 82,5 × 2 = 165 Hz.
2. Duas oitavas acima: 165 × 2 = **330 Hz** (ou 82,5 × 2² = 82,5 × 4).
3. Por que cada distrator cai:
   - a) Subiu só uma oitava.
   - b) 82,5 × 3: tratou como progressão linear (82,5 + 2 × 82,5).
   - d) 82,5 × 5: nenhuma relação de oitava.
   - e) 82,5 × 8: subiu três oitavas.

**Gabarito: C**

---

## Questão 10 (Padrão P12: timbre)

### O que você precisa saber antes de fazer essa questão
- **Timbre** é o que permite distinguir **dois instrumentos (ou duas vozes) tocando a mesma nota com a mesma intensidade** (Q34, Q45).
- **Por que ele existe:** um instrumento real não emite uma senoide pura. Emite a fundamental **mais vários harmônicos** (2f, 3f, 4f...) com intensidades diferentes. A soma dá uma **forma de onda** própria, a "assinatura sonora" (Q99).
- **No osciloscópio:** mesma nota = **mesmo período**; mesma intensidade = **mesma amplitude**; timbres diferentes = **formatos diferentes**.
- **Pegadinha:** as alternativas costumam oferecer "intensidade", "potência", "altura" e "velocidade". Se a nota é a mesma e o volume é o mesmo, sobra o **timbre/forma da onda**.
- **Como memorizar:** "**Timbre = Tipo de onda**" (a forma do desenho).

### Questão
Assistentes virtuais de celular conseguem reconhecer se quem está falando é o dono do aparelho. Em um teste, duas pessoas disseram a mesma vogal "a", sustentada, com a mesma altura e o mesmo volume. Os registros feitos por um osciloscópio mostraram sinais com o mesmo período e a mesma amplitude máxima, mas com desenhos bem diferentes ao longo de cada ciclo, e o sistema identificou corretamente cada pessoa.

A característica do som que permitiu essa identificação é o(a)
- a) frequência.
- b) período.
- c) amplitude.
- d) timbre.
- e) velocidade de propagação.

### Resolução passo a passo
1. **Mesmo período** → mesma frequência → mesma altura. Elimina a) e b).
2. **Mesma amplitude máxima** → mesma intensidade. Elimina c).
3. **Velocidade** depende do ar, que é o mesmo. Elimina e).
4. O que muda é o **desenho dentro de cada ciclo**: a forma da onda, resultado da mistura de harmônicos de cada aparelho vocal. Isso é o **timbre**.

**Gabarito: D**

---

## Questão 11 (Padrão P14: nível sonoro em decibéis)

### O que você precisa saber antes de fazer essa questão
- **Nível sonoro:** β = 10·log(I/I₀), com I₀ = 10⁻¹² W/m² (limiar da audição).
- **A regra que resolve 90% das questões:**

| Intensidade multiplicada por | Nível sonoro |
|---|---|
| 2 | + 3 dB |
| 10 | + 10 dB |
| 100 | + 20 dB |
| 1 000 | + 30 dB |
| 10 000 | + 40 dB |

- **Várias fontes iguais** (Q59): as **intensidades se somam**, os dB não. N fontes iguais: β_total = β₁ + 10·log N. Ex.: 10 000 pessoas a 100 dB → 100 + 40 = 140 dB.
- **Pressão sonora** (Q71): β = **20**·log(P/P₀). Para inverter: P = P₀ × 10^(β/20). Ex.: 80 dB → P = 2·10⁻⁵ × 10⁴ = 0,2 N/m².
- **Pegadinha:** somar os dB (100 + 100 = 200 dB) ou multiplicar o nível pelo número de fontes.
- **Como memorizar:** "**Cada zero a mais na intensidade = +10 dB**".

### Questão
Em um canteiro de obras, uma única britadeira em funcionamento produz, em determinado ponto, nível sonoro de 85 dB. O nível sonoro é calculado por β = 10·log(I/I₀). Em certo momento, 100 britadeiras idênticas passam a funcionar simultaneamente, todas à mesma distância desse ponto.

O nível sonoro nesse ponto passa a ser de
- a) 87 dB.
- b) 95 dB.
- c) 105 dB.
- d) 185 dB.
- e) 8 500 dB.

### Resolução passo a passo
1. 100 britadeiras iguais: a **intensidade** total é 100 vezes maior: I_total = 100·I.
2. β_total = 10·log(100·I/I₀) = 10·log 100 + 10·log(I/I₀) = 10 × 2 + 85.
3. β_total = 20 + 85 = **105 dB**.
4. Por que cada distrator cai:
   - a) 85 + log 100: esqueceu o fator 10 da fórmula.
   - b) 85 + 10: usou 10 britadeiras (só um "zero" a mais).
   - d) 85 + 100: somou o número de máquinas aos dB.
   - e) 85 × 100: multiplicou os dB.

**Gabarito: C**

---

## Questão 12 (Padrão P15: curvas de audição e limiar de audibilidade)

### O que você precisa saber antes de fazer essa questão
- O ouvido **não é igualmente sensível** a todas as frequências. O **limiar de audibilidade** é o menor nível (dB) que se consegue ouvir em cada frequência.
- **Formato típico do limiar:** alto nos graves, mínimo entre **2 000 e 5 000 Hz** (a região da fala, onde somos mais sensíveis) e volta a subir nos agudos extremos.
- **Como ler** (Q18, Q76):
  - Um som só é ouvido se o seu nível estiver **acima** do limiar naquela frequência.
  - **Maior sensibilidade = menor limiar** (precisa de menos dB para ouvir).
- **Pegadinha:** achar que 30 dB é audível em qualquer frequência. Nos graves, o limiar pode passar de 40 dB.
- **Como memorizar:** "**Sensível é quem ouve baixinho**": o vale da curva é onde o ouvido é mais sensível.

### Questão
O quadro apresenta valores aproximados do limiar de audibilidade de uma pessoa jovem com audição normal, obtidos a partir da curva de 0 fon.

| Frequência (Hz) | 20 | 50 | 100 | 500 | 1 000 | 4 000 | 8 000 |
|---|---|---|---|---|---|---|---|
| Limiar (dB) | 76 | 44 | 26 | 6 | 2 | −5 | 11 |

Em um teste, essa pessoa foi exposta, um de cada vez, a três sons puros, todos com nível de 30 dB: um zumbido de 50 Hz, um tom de 1 000 Hz e um apito de 4 000 Hz.

Ela consegue perceber
- a) apenas o zumbido de 50 Hz.
- b) apenas o tom de 1 000 Hz.
- c) apenas o apito de 4 000 Hz.
- d) o tom de 1 000 Hz e o apito de 4 000 Hz.
- e) os três sons.

### Resolução passo a passo
1. Compare 30 dB com o limiar de cada frequência:
   - 50 Hz: limiar 44 dB. 30 < 44: **não ouve**.
   - 1 000 Hz: limiar 2 dB. 30 > 2: **ouve**.
   - 4 000 Hz: limiar −5 dB. 30 > −5: **ouve** (e com folga, é a região de maior sensibilidade).
2. Ouve apenas os sons de 1 000 Hz e 4 000 Hz.
3. Por que cada distrator cai:
   - a) Justamente o grave é o único inaudível.
   - b), c) Ignoram um dos sons audíveis.
   - e) Supõe que 30 dB é audível em qualquer frequência.

**Gabarito: D**

---

## Questão 13 (Padrão P16: gráfico de nível sonoro com limiar)

### O que você precisa saber antes de fazer essa questão
- **Roteiro:**
  1. Descubra o **valor de referência** (limite legal, ruído + margem, etc.).
  2. Trace mentalmente uma **linha horizontal** nesse valor.
  3. Leia onde a curva fica acima ou abaixo dela.
- **Variações cobradas:**
  - **Contar quantas vezes** a curva ultrapassa o limite (Q47). Atenção: um pico que só **encosta** na linha não ultrapassa, e dois picos separados por um vale abaixo da linha contam como duas vezes.
  - **Achar a distância máxima** em que a fala ainda é compreendida (Q79): nível exigido = ruído + margem.
  - **Comparar curvas** de várias distâncias ou faixas (Q17).
- **Pegadinha:** esquecer a margem ("5 dB acima do ruído") e usar o ruído puro como referência.
- **Como memorizar:** "**Primeiro a linha, depois a leitura**".

### Questão
Um museu avaliou a acústica de uma galeria para visitas guiadas. O quadro mostra o nível sonoro da voz de um guia, medido a diferentes distâncias dele.

| Distância (m) | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|---|---|
| Nível da voz (dB) | 64 | 60 | 57 | 55 | 53 | 52 | 50 | 47 |

O ruído de fundo da galeria, nos horários de maior movimento, chega a 42 dB. Para que a explicação seja bem compreendida, o nível da voz do guia deve estar pelo menos 10 dB acima do ruído de fundo.

Nos horários de maior movimento, a maior distância a que um visitante pode estar do guia para compreendê-lo bem é
- a) 3 m.
- b) 5 m.
- c) 6 m.
- d) 8 m.
- e) 10 m.

### Resolução passo a passo
1. **Referência:** 42 + 10 = **52 dB**. É o nível mínimo exigido.
2. Leia o quadro: a voz é ≥ 52 dB até **6 m** (52 dB). Em 8 m já cai para 50 dB.
3. Maior distância: **6 m**.
4. Por que cada distrator cai:
   - e) 10 m (47 dB) seria a resposta usando margem de 5 dB.
   - d) 8 m (50 dB) não atinge os 52 dB.
   - a), b) Atendem ao critério, mas não são a **maior** distância.

**Gabarito: C**

---

## Questão 14 (Padrão P17: atenuação em dB/km)

### O que você precisa saber antes de fazer essa questão
- Em fibras ópticas e cabos, a perda de sinal é dada em **dB por km**. Como dB é escala logarítmica, as perdas **se somam** ao longo do caminho: perda total = (dB/km) × distância.
- **Roteiro** (Q86):
  1. **Orçamento de perda** = nível máximo que se pode injetar − nível mínimo aceitável na chegada.
  2. Escolha o **λ de menor perda** no gráfico ou tabela (o "vale" da curva).
  3. Distância máxima = orçamento ÷ perda por km.
- **Exemplo da Q86:** pode-se injetar até 100 dB e é preciso retransmitir abaixo de 10 dB → orçamento de 90 dB. Menor perda = 1 dB/km (em 1,5 μm) → **90 km**.
- **Pegadinha:** usar o nível máximo inteiro (sem descontar o mínimo) ou pegar um λ que não é o de menor perda.
- **Como memorizar:** "**O que posso perder ÷ quanto perco por km**".

### Questão
Em um projeto de rede de fibra óptica entre duas cidades, o transmissor pode injetar o sinal com nível máximo de 60 dB, e o receptor só interpreta corretamente sinais com nível de pelo menos 15 dB. Para valores menores, é preciso instalar um repetidor. O quadro mostra a perda óptica da fibra escolhida em três comprimentos de onda disponíveis.

| Comprimento de onda (μm) | 0,85 | 1,31 | 1,55 |
|---|---|---|---|
| Perda (dB/km) | 3,0 | 0,50 | 0,25 |

Operando no comprimento de onda mais adequado, a maior distância, em km, que o sinal pode percorrer sem repetidor é
- a) 15.
- b) 90.
- c) 180.
- d) 240.
- e) 300.

### Resolução passo a passo
1. **Orçamento de perda:** 60 − 15 = **45 dB**.
2. **λ mais adequado:** o de menor perda, **1,55 μm** (0,25 dB/km).
3. **Distância máxima:** 45 ÷ 0,25 = **180 km**.
4. Por que cada distrator cai:
   - a) 45/3,0: usou o pior comprimento de onda.
   - b) 45/0,50: usou 1,31 μm.
   - d) 60/0,25: não descontou o mínimo exigido no receptor.
   - e) (60 + 15)/0,25: somou em vez de subtrair.

**Gabarito: C**

---

## Questão 15 (Padrão P18: eco, d = v·t/2)

### O que você precisa saber antes de fazer essa questão
- **Eco** = som **refletido** que volta à fonte. O tempo medido é de **ida e volta**:
  **2·d = v·t → d = v·t/2**.
- **Persistência auditiva** (Q48): o ouvido só separa dois sons se chegarem com pelo menos **0,1 s** de diferença. Distância mínima para eco no ar: d = 340 × 0,1/2 = **17 m**.
- **Ecolocalização** (Q62): morcegos e golfinhos emitem ultrassom e "enxergam" pelo tempo de retorno. O fenômeno é a **reflexão**.
- **Sonar:** o mesmo princípio na água, com v ≈ 1 500 m/s.
- **Pegadinha:** esquecer de dividir por 2, ou usar a velocidade do som no ar quando o pulso viaja na água.
- **Como memorizar:** "**Eco vai e volta: metade do caminho**".

### Questão
Um barco de pesquisa usa um sonar para mapear o fundo do mar. O aparelho emite um pulso de ultrassom verticalmente para baixo e registra o eco refletido no fundo 0,80 s após a emissão. Considere a velocidade do som na água do mar igual a 1 500 m/s e no ar igual a 340 m/s.

A profundidade do oceano nesse ponto é
- a) 136 m.
- b) 272 m.
- c) 600 m.
- d) 1 200 m.
- e) 1 875 m.

### Resolução passo a passo
1. O pulso viaja **na água**: v = 1 500 m/s.
2. O tempo de 0,80 s é de **ida e volta**.
3. d = v·t/2 = 1 500 × 0,80/2 = **600 m**.
4. Por que cada distrator cai:
   - a) 340 × 0,8/2: usou a velocidade no ar.
   - b) 340 × 0,8: velocidade no ar e sem dividir por 2.
   - d) 1 500 × 0,8: esqueceu de dividir por 2.
   - e) 1 500/0,8: dividiu em vez de multiplicar.

**Gabarito: C**

---

## Balanço da Lista 2

| Questão | Padrão | Questões da lista oficial com a mesma lógica |
|---|---|---|
| 1 | P2: Velocidade por fórmula + período | 22, 66 |
| 2 | P3: f = v/espaçamento | 19, 41 |
| 3 | P4: Período por contagem de eventos | 42, 51, 74 |
| 4 | P5: Período no oscilograma | 26 |
| 5 | P6: A fonte define f, o meio define v | 35, 99 |
| 6 | P8: Transdução piezoelétrica | 5, 85 |
| 7 | P9: Tempo = distância/velocidade em sensores | 96, 100 |
| 8 | P10: Altura = frequência | 31, 61 |
| 9 | P11: Oitava = dobro da frequência | 23, 82 |
| 10 | P12: Timbre | 34, 45 |
| 11 | P14: Nível sonoro em decibéis | 59, 71 |
| 12 | P15: Curvas de audição | 18, 76 |
| 13 | P16: Gráfico de nível sonoro com limiar | 17, 47, 79 |
| 14 | P17: Atenuação em dB/km | 86 |
| 15 | P18: Eco, d = v·t/2 | 48, 62 |

Esses 15 padrões cobrem **30 questões** da lista oficial.

- Padrões abordados nesta lista: **15**
- Padrões abordados no total: **25 de 53**
- **Restam: 28 padrões**

Padrões restantes: P19, P20, P21, P23, P26, P27, P29, P30, P32, P33, P34, P35, P36, P37, P39, P40, P41, P43, P44, P45, P46, P47, P48, P49, P50, P51, P52, P53.
