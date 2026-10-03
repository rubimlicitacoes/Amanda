# Lista 3: 15 questões inéditas (padrões P19, P20, P21, P23, P26, P27, P29, P30, P32, P33, P34, P35, P36, P37, P39)

> Tema da lista: **eco e localização, fenômenos ondulatórios (difração, interferência, ressonância, ondas estacionárias, polarização, refração, reflexão) e Doppler algébrico**.

---

## Questão 1 (Padrão P19: eco em camadas)

### O que você precisa saber antes de fazer essa questão
- Um pulso enviado para baixo encontra **várias interfaces** (fronteiras entre materiais). Cada interface devolve um eco.
  - 1º eco: reflexão na interface **superior** da camada.
  - 2º eco: reflexão na interface **inferior** da camada.
- **O pulo do gato** (Q78): a diferença de tempo entre os dois ecos (Δt) é o tempo que o pulso gasta para **descer e subir dentro da camada**. O trecho acima da camada é igual para os dois ecos e se cancela.
  - **2 × espessura = v_camada × Δt**
- **Pegadinha:** usar o tempo total do 2º eco (que inclui a rocha de cima) ou esquecer o fator 2 da ida e volta.
- **Como memorizar:** "**A diferença dos ecos é a viagem só dentro da camada**".

### Questão
Em um estudo para localizar um aquífero, geólogos emitiram um pulso sísmico a partir da superfície. Sabe-se que há uma camada de rocha seca sobre uma camada saturada de água, que por sua vez está sobre uma rocha impermeável. O detector registrou o primeiro eco, refletido no topo da camada de água, 0,40 s após a emissão, e o segundo eco, refletido na base dessa camada, 0,60 s após a emissão. Considere que a velocidade do pulso na camada saturada de água é de 1 500 m/s.

A espessura da camada saturada de água, em metros, é
- a) 75.
- b) 150.
- c) 300.
- d) 450.
- e) 900.

### Resolução passo a passo
1. **Tempo dentro da camada (ida e volta):** Δt = 0,60 − 0,40 = **0,20 s**.
2. **Distância percorrida na camada:** 1 500 × 0,20 = 300 m (desce e sobe).
3. **Espessura:** 300/2 = **150 m**.
4. Por que cada distrator cai:
   - a) Dividiu por 4.
   - c) Esqueceu de dividir por 2 (ida e volta).
   - d) 1 500 × 0,60/2: usou o tempo total, que inclui a rocha de cima, com a velocidade da água.
   - e) 1 500 × 0,60: tempo total e sem dividir por 2.

**Gabarito: B**

---

## Questão 2 (Padrão P20: impedância acústica Z = ρ·v)

### O que você precisa saber antes de fazer essa questão
- **Impedância acústica** é a "resistência" do meio à passagem do som: **Z = ρ·v** (densidade × velocidade do som no meio).
- **Regra do ultrassom** (Q57): quando o som passa de um meio para outro, **quanto maior a diferença de Z, maior a reflexão**. Mais reflexão = eco mais forte = estruturas mais fáceis de diferenciar na imagem.
- **Roteiro:** calcule Z de cada estrutura (pode deixar em notação científica, só precisa comparar) e compare as **diferenças**.
- **Curiosidade útil:** o **gel** no exame existe porque o ar tem Z minúsculo (~400) e a pele tem Z ~1,6·10⁶. Sem gel, quase todo o ultrassom refletiria na pele.
- **Pegadinha:** comparar só a densidade ou só a velocidade. É o **produto** que importa.
- **Como memorizar:** "**Z diferente = Zona de reflexão**".

### Questão
O quadro apresenta a densidade (ρ) e a velocidade do som (v) em alguns tecidos do corpo humano.

| Tecido | ρ (kg/m³) | v (m/s) |
|---|---|---|
| Fígado | 1 060 | 1 570 |
| Sangue | 1 060 | 1 580 |
| Rim | 1 040 | 1 560 |
| Gordura | 950 | 1 450 |
| Osso | 1 900 | 4 000 |

Em uma imagem de ultrassom, o par de estruturas **mais difícil** de diferenciar é
- a) osso e gordura.
- b) fígado e sangue.
- c) rim e gordura.
- d) osso e fígado.
- e) gordura e sangue.

### Resolução passo a passo
1. **Calcule Z = ρ·v:**

| Tecido | Z (kg/m²·s) |
|---|---|
| Fígado | 1 060 × 1 570 = 1 664 200 |
| Sangue | 1 060 × 1 580 = 1 674 800 |
| Rim | 1 040 × 1 560 = 1 622 400 |
| Gordura | 950 × 1 450 = 1 377 500 |
| Osso | 1 900 × 4 000 = 7 600 000 |

2. A questão pede o **mais difícil**: a **menor** diferença de Z (menor reflexão).
3. Diferenças:
   - Fígado e sangue: 10 600 (**a menor**).
   - Rim e gordura: 244 900.
   - Gordura e sangue: 297 300.
   - Osso com qualquer tecido mole: cerca de 6 milhões (os **mais fáceis**).
4. Atalho: fígado e sangue têm **a mesma densidade** e velocidades quase iguais.
5. Pegadinha: a) e d) seriam a resposta se a pergunta fosse "mais fácil" (como na Q57).

**Gabarito: B**

---

## Questão 3 (Padrão P21: localização por tempo de resposta)

### O que você precisa saber antes de fazer essa questão
- **Cada tempo de resposta vira uma distância:** d = v·t (ou v·t/2 se o sinal vai e volta).
- Saber a **distância** até uma torre não diz a direção: o aparelho pode estar em **qualquer ponto de uma circunferência** com centro na torre.
- **Quantas torres são necessárias no plano** (Q64):

| Torres | Onde o aparelho pode estar |
|---|---|
| 1 | qualquer ponto de uma circunferência (infinitos) |
| 2 | nas **2 interseções** das duas circunferências |
| 3 | em **1 único ponto** (a 3ª decide entre os dois) |

- No **espaço** (GPS), são esferas: precisa de 3 satélites para a posição e, na prática, de um 4º para corrigir o relógio do receptor.
- **Pegadinha:** responder "duas" achando que duas circunferências se cruzam em um ponto só.
- **Como memorizar:** "**Uma dá um círculo, duas dão dois pontos, três dão o ponto**".

### Questão
Durante uma operação de resgate em área rural, as equipes tentam localizar o celular de uma pessoa perdida. Duas torres de telefonia, A e B, conseguiram registrar o tempo de resposta do aparelho. Considerando a velocidade do sinal e o tempo de ida e volta, calculou-se que o celular está a 3,0 km da torre A e a 4,0 km da torre B. As torres estão a 5,0 km uma da outra e tudo pode ser considerado num mesmo plano.

Com apenas essas duas informações, a posição do celular
- a) fica determinada em um único ponto.
- b) fica restrita a dois pontos possíveis.
- c) fica restrita a três pontos possíveis.
- d) pode estar em qualquer ponto de uma circunferência.
- e) pode estar em qualquer ponto da reta que une as torres.

### Resolução passo a passo
1. Distância de A = 3 km: o celular está numa circunferência de raio 3 km centrada em A.
2. Distância de B = 4 km: está também numa circunferência de raio 4 km centrada em B.
3. As torres distam 5 km. Como 3 + 4 = 7 > 5, as circunferências **se cruzam em dois pontos**, simétricos em relação à reta AB (é o triângulo 3-4-5: um ponto de cada lado da reta).
4. Sem uma **terceira torre**, não dá para saber de que lado está. Posição restrita a **dois pontos**.
5. Por que cada distrator cai:
   - a) Seria o caso com 3 torres.
   - d) Seria o caso com 1 torre.
   - e) A reta não tem relação com as distâncias medidas.

**Gabarito: B**

---

## Questão 4 (Padrão P23: difração limita a resolução)

### O que você precisa saber antes de fazer essa questão
- Quando a luz encontra detalhes de tamanho **comparável ao seu λ**, ela **difrata** (se espalha) e os detalhes "borram". Isso impõe um limite: **não dá para gravar, ler ou enxergar detalhes muito menores que λ**.
- **Consequência tecnológica** (Q37, Q95, Q98): para gravar mais dados na mesma área (cavidades menores), é preciso **λ menor**, ou seja, **frequência maior**.

| Mídia | Laser | λ |
|---|---|---|
| CD | infravermelho | 780 nm |
| DVD | vermelho | 650 nm |
| Blu-ray | **azul-violeta** | 405 nm |

- O mesmo vale para microscópios (luz azul resolve mais que vermelha; elétrons resolvem muito mais) e para a fabricação de chips.
- **Pegadinha:** escolher "aumento da intensidade" ou "da amplitude". Mais brilho não diminui a difração. Também não é "diminuição da velocidade": no vácuo, toda luz tem a mesma velocidade.
- **Como memorizar:** "**Detalhe pequeno pede λ pequeno**".

### Questão
Os processadores de computadores são fabricados por fotolitografia: um feixe de radiação eletromagnética projeta o desenho dos circuitos sobre uma placa de silício coberta por uma resina sensível. Durante muitos anos, a indústria usou radiação ultravioleta de 193 nm. Os chips mais modernos passaram a ser produzidos com ultravioleta extremo, de 13,5 nm, permitindo gravar transistores muito menores na mesma área.

A mudança na radiação utilizada permitiu esse avanço porque a nova radiação tem
- a) maior velocidade de propagação, chegando mais rápido à placa.
- b) maior amplitude, tornando o desenho mais intenso.
- c) menor frequência, penetrando mais profundamente no silício.
- d) menor comprimento de onda, sofrendo menos difração em estruturas muito pequenas.
- e) maior intensidade, queimando a resina em menos tempo.

### Resolução passo a passo
1. Objetivo: gravar **estruturas menores**. O limite é a **difração**, que é forte quando λ é comparável ao tamanho do detalhe.
2. A radiação mudou de 193 nm para 13,5 nm: **λ cerca de 14 vezes menor**. Com λ menor, ela difrata menos em detalhes pequenos e o desenho fica nítido.
3. λ menor significa **frequência maior** (f = c/λ).
4. Por que cada distrator cai:
   - a) Toda onda EM tem a mesma velocidade no vácuo.
   - b), e) Amplitude e intensidade não mudam a difração.
   - c) A frequência **aumentou**, não diminuiu.

**Gabarito: D**

---

## Questão 5 (Padrão P26: interferência por diferença de caminho)

### O que você precisa saber antes de fazer essa questão
- Duas ondas **da mesma fonte** que percorrem **caminhos diferentes** chegam ao mesmo ponto com uma diferença de caminho **Δ**.

| Diferença de caminho Δ | Resultado |
|---|---|
| 0, λ, 2λ, 3λ... | crista com crista: **construtiva** (som forte) |
| λ/2, 3λ/2, 5λ/2... | crista com vale: **destrutiva** (silêncio) |

- **Trombone de Quincke** (Q32): o som entra, divide-se em dois ramos e se reencontra na saída. Ao puxar o ramo móvel uma distância **x**, o caminho aumenta **2x** (o som vai e volta nesse trecho).
- **Roteiro:** primeiro mínimo (som "praticamente nulo") → Δ = λ/2 → λ → f = v/λ.
- **Pegadinha:** esquecer que puxar x aumenta o caminho em 2x, ou usar Δ = λ no lugar de λ/2.
- **Como memorizar:** "**Meio λ de atraso = silêncio**" (mesma ideia do meio período da Lista 1).

### Questão
Em uma feira de ciências, um tubo de Quincke tem os dois ramos inicialmente iguais e, assim, o detector na saída capta um som muito intenso. A estudante então puxa lentamente o ramo móvel, em forma de U, e percebe que o som na saída fica praticamente nulo, pela primeira vez, quando esse ramo foi deslocado 8,5 cm. Considere a velocidade do som no ar do tubo igual a 340 m/s.

A frequência do som emitido pela fonte é
- a) 500 Hz.
- b) 1 000 Hz.
- c) 2 000 Hz.
- d) 4 000 Hz.
- e) 8 000 Hz.

### Resolução passo a passo
1. **Diferença de caminho:** o ramo em U foi puxado 8,5 cm. O som percorre esse trecho na ida e na volta: Δ = 2 × 8,5 = **17 cm**.
2. **Primeiro silêncio:** interferência destrutiva com Δ = λ/2 → λ = 2 × 17 = **34 cm = 0,34 m**.
3. **Frequência:** f = v/λ = 340/0,34 = **1 000 Hz**.
4. Por que cada distrator cai:
   - a) λ = 68 cm: considerou Δ = λ/4.
   - c) λ = 17 cm: esqueceu um dos fatores 2 (ou o 2x do U, ou o λ/2).
   - d) λ = 8,5 cm: esqueceu os dois fatores 2.
   - e) Não corresponde a nenhuma combinação coerente.

**Gabarito: B**

---

## Questão 6 (Padrão P27: experimento de Young e a natureza ondulatória)

### O que você precisa saber antes de fazer essa questão
- **Experimento de Young** (Q55): luz monocromática passa por uma fenda simples e depois por uma **fenda dupla**. Na tela aparecem **franjas claras e escuras alternadas**.
- **Leitura física:**
  1. A luz se espalha ao passar pelas fendas: **difração**.
  2. As duas ondas se sobrepõem e se reforçam (franja clara) ou se anulam (franja escura): **interferência**.
- **Conclusão:** só **ondas** se cancelam. Partículas simplesmente se somariam (duas faixas, sem franjas escuras no meio). Logo o padrão de franjas é a prova da **natureza ondulatória**.
- **Extensão moderna:** o mesmo experimento feito com **elétrons** gera franjas. Partículas de matéria também têm comportamento ondulatório (dualidade onda-partícula).
- **Pegadinha:** alternativas que citam "polarização", "dispersão" ou "reflexão". O par certo é sempre **difração + interferência**.
- **Como memorizar:** "**Franja = Fenda + Fusão**": difração nas fendas, interferência na fusão das ondas.

### Questão
Em 1961, o físico Claus Jönsson realizou com elétrons um experimento análogo ao de Thomas Young: um feixe de elétrons foi dirigido a uma placa com duas fendas extremamente estreitas e, em uma tela fluorescente posicionada após a placa, observou-se um padrão de faixas claras e escuras alternadas. Experimentos posteriores mostraram que o padrão se forma mesmo quando os elétrons são enviados um de cada vez.

Esse resultado indica que os elétrons apresentam comportamento
- a) corpuscular, justificado pelo fato de sofrerem dispersão e refração nas fendas.
- b) corpuscular, justificado pelo fato de sofrerem reflexão nas bordas das fendas.
- c) ondulatório, justificado pelo fato de sofrerem polarização ao atravessar as fendas.
- d) ondulatório, justificado pelo fato de sofrerem difração e interferência.
- e) ondulatório, justificado pelo fato de sofrerem refração e reflexão.

### Resolução passo a passo
1. **Faixas claras e escuras alternadas** atrás de uma fenda dupla: é exatamente o padrão do experimento de Young.
2. Para formar esse padrão, o feixe precisa **se espalhar** nas fendas (**difração**) e as partes que passam por fendas diferentes precisam **se reforçar e se anular** (**interferência**).
3. Esses dois fenômenos são típicos de **ondas**. Logo, os elétrons exibem comportamento **ondulatório**.
4. Por que cada distrator cai:
   - a), b) Partículas clássicas não produzem faixas escuras entre as fendas.
   - c) Polarização não gera franjas.
   - e) Refração e reflexão não explicam o padrão alternado.

**Gabarito: D**

---

## Questão 7 (Padrão P29: ressonância de pêndulos)

### O que você precisa saber antes de fazer essa questão
- **Período do pêndulo simples:** T = 2π·√(L/g). Ele depende **só do comprimento L** (e de g). **A massa não importa.**
- **Pêndulos acoplados** (Q67): um pêndulo oscilando transmite pequenos "empurrões" periódicos pelo suporte comum. Só entram em **ressonância** (passam a oscilar com amplitude grande) os pêndulos com **a mesma frequência natural**, ou seja, **o mesmo comprimento**.
- **Pegadinha:** escolher os de mesma massa, ou os de mesma razão massa/comprimento. Ignore a massa por completo.
- **Como memorizar:** "**Pêndulo só olha o barbante**".

### Questão
Em um museu de ciências, seis pêndulos simples estão pendurados em uma mesma barra horizontal flexível. O visitante coloca apenas o pêndulo A para oscilar e observa os demais. As características de cada pêndulo estão no quadro.

| Pêndulo | Massa | Comprimento do fio |
|---|---|---|
| A | m | 1,0 m |
| 1 | 2m | 1,0 m |
| 2 | m | 2,0 m |
| 3 | m/2 | 0,5 m |
| 4 | 3m | 1,0 m |
| 5 | m | 0,25 m |

Os pêndulos que passam a oscilar com grande amplitude, além do A, são
- a) 1 e 4.
- b) 2 e 3.
- c) 1, 2 e 4.
- d) 3 e 5.
- e) 1, 2, 3, 4 e 5.

### Resolução passo a passo
1. A frequência natural depende só de L. O pêndulo A tem L = 1,0 m.
2. Pêndulos com L = 1,0 m: **1** (massa 2m) e **4** (massa 3m). A massa diferente não importa.
3. Esses entram em **ressonância** com A.
4. Por que cada distrator cai:
   - b) Os pêndulos 2 e 3 têm comprimentos diferentes. O 3 tem a mesma razão m/L que A, mas essa razão não importa.
   - c) O pêndulo 2 tem L = 2,0 m.
   - d) Os pêndulos 3 e 5 têm comprimentos diferentes.
   - e) Todos podem tremer um pouco, mas só os de mesmo L oscilam com grande amplitude.

**Gabarito: A**

---

## Questão 8 (Padrão P30: ondas estacionárias, nós e ventres)

### O que você precisa saber antes de fazer essa questão
- **Onda estacionária:** superposição de uma onda com a sua reflexão. O padrão "fica parado no lugar":
  - **Nós:** pontos de amplitude **zero** (nada vibra).
  - **Ventres:** pontos de amplitude **máxima**.
- **Distâncias:** ventre a ventre (ou nó a nó) = **λ/2**. Ventre a nó = λ/4.
- **No forno de micro-ondas** (Q11): onde o campo elétrico é máximo (**ventres**), a comida esquenta mais. Pontos derretidos consecutivos estão a **λ/2** um do outro.
- **Experimento clássico:** tire o prato giratório, ponha uma barra de chocolate, meça a distância entre pontos derretidos, multiplique por 2 para ter λ e calcule **c = λ·f**.
- **Pegadinha:** usar a distância entre manchas como se fosse λ (esquecer o fator 2), ou escolher um nó como ponto quente.
- **Como memorizar:** "**Ventre esquenta, nó fica frio. Entre dois ventres, meio λ**".

### Questão
Para estimar a frequência de um forno de micro-ondas, um estudante retirou o prato giratório e colocou uma barra larga de chocolate em seu interior. Após alguns segundos, observou ao longo da barra pontos derretidos alinhados, com 6,0 cm de distância entre dois pontos derretidos consecutivos. Considere que esses pontos correspondem a ventres de uma onda estacionária e que a velocidade das micro-ondas é 3,0·10⁸ m/s.

A frequência de operação do forno é
- a) 1,25 GHz.
- b) 2,5 GHz.
- c) 5,0 GHz.
- d) 25 GHz.
- e) 50 GHz.

### Resolução passo a passo
1. Ventres consecutivos: distância = λ/2 = 6,0 cm.
2. λ = 12 cm = **0,12 m**.
3. f = v/λ = 3,0·10⁸ / 0,12 = **2,5·10⁹ Hz = 2,5 GHz** (muito próximo do valor real, 2,45 GHz).
4. Por que cada distrator cai:
   - a) λ = 24 cm: multiplicou por 4.
   - c) λ = 6 cm: usou a distância entre manchas como λ.
   - d), e) Erros de potência de 10 (cm não convertido para m).

**Gabarito: B**

---

## Questão 9 (Padrão P32: tubo fechado)

### O que você precisa saber antes de fazer essa questão
- **Tubo fechado em uma extremidade** (poço, cavidade, garrafa): na ponta fechada há **nó**, na ponta aberta há **ventre**. Cabem **números ímpares de λ/4**:
  - λₙ = 4L/n e **fₙ = n·v/(4L)**, com **n ímpar** (1, 3, 5, 7...).
- **Duas ressonâncias consecutivas** (Q93): como só aparecem os ímpares, de uma para a próxima n aumenta 2:
  - **Δf = 2·v/(4L) = v/(2L)**.
- Isso permite medir a **profundidade** L sem conhecer qual harmônico está tocando: **L = v/(2·Δf)**. Ou prever a próxima ressonância: f_próxima = f_atual + v/(2L).
- **Comparação com o tubo aberto (P31):**

| | Aberto | Fechado |
|---|---|---|
| Harmônicos | todos (1, 2, 3...) | só ímpares (1, 3, 5...) |
| f₁ | v/(2L) | v/(4L) |
| Diferença entre consecutivas | v/(2L) | v/(2L) |

- **Pegadinha:** achar que a menor frequência medida é a fundamental. O aparelho pode começar a medir de um harmônico alto.
- **Como memorizar:** "**Fechado: 4L e ímpar. Pulo entre vizinhas: v sobre 2L**".

### Questão
Para conferir a profundidade de um poço artesiano seco, técnicos posicionaram na boca do poço um alto-falante ligado a um oscilador de frequência variável e um microfone. Aumentando aos poucos a frequência, eles registraram duas ressonâncias consecutivas, em 187 Hz e em 221 Hz. O poço comporta-se como um tubo sonoro fechado no fundo. Considere a velocidade do som no ar do poço igual a 340 m/s.

A profundidade do poço é
- a) 2,5 m.
- b) 5,0 m.
- c) 10 m.
- d) 0,45 m.
- e) 0,91 m.

### Resolução passo a passo
1. **Diferença entre ressonâncias consecutivas:** Δf = 221 − 187 = **34 Hz**.
2. Em tubo fechado, Δf = v/(2L). Então L = v/(2·Δf) = 340/(2 × 34) = 340/68 = **5,0 m**.
3. **Conferência:** f₁ = v/(4L) = 340/20 = 17 Hz. 187 = 11 × 17 e 221 = 13 × 17: dois ímpares consecutivos (11º e 13º harmônicos).
4. Por que cada distrator cai:
   - a) L = v/(4·Δf): fórmula errada.
   - c) L = v/Δf: esqueceu o 2.
   - d) λ/4 de 187 Hz: supôs que 187 Hz era a fundamental.
   - e) λ/2 de 187 Hz: usou a regra do tubo aberto e supôs fundamental.

**Gabarito: B**

---

## Questão 10 (Padrão P33: polarização)

### O que você precisa saber antes de fazer essa questão
- A luz é uma onda **transversal**: vibra perpendicularmente à direção em que anda. Luz comum (sol, lâmpada) vibra em **todas** as direções.
- **Polarizador (filtro):** deixa passar **apenas** a vibração **paralela ao seu eixo**. Uma luz já polarizada que encontra um filtro com eixo **perpendicular** é **bloqueada**.
- **Aplicações da lista:**
  - **Óculos para motorista** (Q1): o reflexo na água/asfalto é polarizado na **horizontal**, então o óculos tem eixo **vertical** (as linhas da lente na vertical).
  - **Óculos 3D** (Q43): cada lente deixa passar uma direção, e cada olho vê uma imagem diferente.
  - **Telas de LCD/celular:** emitem luz já polarizada.
- **Pegadinha:** só ondas **transversais** podem ser polarizadas. O som no ar (longitudinal) não pode.
- **Como memorizar:** "**Polarizador é uma grade: só passa quem vibra na direção da fresta**".

### Questão
Um motorista usando óculos de sol com lentes polarizadas percebe que, ao olhar para o visor do GPS do carro, consegue ver a imagem normalmente quando mantém a cabeça reta. Porém, quando inclina a cabeça de lado em cerca de 90°, a tela fica praticamente toda escura. Ao tirar os óculos, a tela pode ser vista em qualquer posição.

Esse comportamento ocorre porque
- a) a luz da tela sofre refração nas lentes, desviando-se para fora dos olhos quando a cabeça está inclinada.
- b) a luz da tela sofre difração nas lentes, espalhando-se quando a cabeça está inclinada.
- c) a tela emite luz polarizada, que é bloqueada quando o eixo de polarização das lentes fica perpendicular à direção de vibração dessa luz.
- d) a luz da tela sofre interferência destrutiva com a luz do ambiente quando a cabeça está inclinada.
- e) a tela emite luz não polarizada, que é totalmente absorvida por lentes polarizadas inclinadas.

### Resolução passo a passo
1. Sem óculos, a tela aparece em qualquer posição. Com óculos, ela escurece **só em certa orientação**. Isso depende da **direção de vibração** da luz: é **polarização**.
2. A tela de cristal líquido emite luz **já polarizada** numa direção. Com a cabeça reta, o eixo da lente é paralelo a essa direção e a luz passa.
3. Inclinando 90°, o eixo da lente fica **perpendicular** à vibração da luz da tela, que é **bloqueada**.
4. Por que cada distrator cai:
   - a), b), d) Nenhum desses fenômenos depende da rotação da lente desse jeito.
   - e) Luz não polarizada atravessaria um único polarizador pela metade em **qualquer** orientação; nunca escureceria só ao inclinar.

**Gabarito: C**

---

## Questão 11 (Padrão P34: refração)

### O que você precisa saber antes de fazer essa questão
- **Refração** = mudança na **velocidade** da onda ao passar de um meio para outro (ou por regiões de densidade diferente). Se a luz incide inclinada, essa mudança de velocidade provoca um **desvio**.
- A **frequência não muda**; mudam a velocidade e o λ (P6).
- **Exemplos da lista e do dia a dia:**
  - **Luz engarrafada** (Q9): a garrafa com água desvia (refrata) a luz do sol e a espalha pelo cômodo.
  - **Miragem** (Q89): o ar quente perto do chão é menos denso. A luz muda de velocidade gradualmente e se curva, parecendo vir do chão ("poça d'água" na estrada).
  - Lápis "quebrado" no copo, piscina que parece mais rasa, arco-íris (refração + dispersão).
- **Pegadinha:** confundir com **reflexão** (a luz volta para o mesmo meio) ou com **difração** (contornar obstáculo).
- **Como memorizar:** "**Refração = Rapidez muda**".

### Questão
Uma criança, olhando de fora de uma piscina para o fundo dela, tem a impressão de que a água ali tem cerca de 1 m de profundidade. Ao entrar, ela se assusta, pois a profundidade real é de aproximadamente 1,3 m. Essa ilusão é responsável por acidentes com banhistas que superestimam sua altura em relação à profundidade.

O fenômeno óptico responsável por essa ilusão é a
- a) reflexão total da luz na superfície da água.
- b) refração da luz, que muda de velocidade ao passar da água para o ar e sofre desvio.
- c) difração da luz, que contorna as bordas da piscina.
- d) polarização da luz refletida na superfície da água.
- e) interferência entre a luz refletida no fundo e a luz refletida na superfície.

### Resolução passo a passo
1. A luz que sai do fundo passa **da água para o ar**: troca de meio.
2. Na água a luz é mais lenta (n ≈ 1,33) do que no ar (n ≈ 1). Ao sair inclinada, ela **muda de velocidade e desvia**, afastando-se da normal.
3. O cérebro supõe que a luz veio em linha reta e "enxerga" o fundo **mais alto** do que é: a piscina parece mais rasa.
4. Por que cada distrator cai:
   - a) Se houvesse reflexão total, a luz do fundo **não sairia** da água.
   - c) Difração não altera a profundidade aparente.
   - d) Polarização afeta o brilho dos reflexos, não a posição aparente do fundo.
   - e) Interferência produziria franjas, não deslocamento da imagem.

**Gabarito: B**

---

## Questão 12 (Padrão P35: reflexão interna total)

### O que você precisa saber antes de fazer essa questão
- **Reflexão interna total (RIT):** quando a luz vai de um meio **mais refringente** (n maior) para um **menos refringente** (n menor) com ângulo de incidência **acima do ângulo limite**, ela não sai: é **totalmente refletida**.
- **Duas condições:**
  1. n(origem) > n(destino);
  2. ângulo de incidência > ângulo limite L, com **sen L = n_menor/n_maior**.
- **Fibra óptica** (Q15): o **núcleo** tem n **maior** que o **revestimento**. A luz fica "presa", ricocheteando por RIT ao longo da fibra, mesmo em curvas. Usos: internet, endoscopia, iluminação decorativa.
- **Exemplo numérico:** núcleo 1,48 e revestimento 1,46 → sen L = 1,46/1,48 ≈ 0,986 → L ≈ 80°. Só os raios bem "rasantes" seguem, e é assim que a fibra é usada.
- **Pegadinha:** inverter os índices (núcleo menor que o revestimento) ou trocar RIT por "reflexão parcial" ou "interferência".
- **Como memorizar:** "**Do Denso para o Diluído, de lado, a luz fica Detida**".

### Questão
Um fabricante de endoscópios médicos testou quatro combinações de materiais para o núcleo e para o revestimento das fibras ópticas que conduzem a luz até o interior do corpo do paciente.

| Combinação | Índice de refração do núcleo | Índice de refração do revestimento |
|---|---|---|
| I | 1,46 | 1,48 |
| II | 1,50 | 1,50 |
| III | 1,48 | 1,46 |
| IV | 1,33 | 1,50 |

A combinação adequada e o fenômeno que garante a condução da luz são, respectivamente,
- a) I e reflexão interna total.
- b) II e refração.
- c) III e reflexão interna total.
- d) IV e difração.
- e) III e refração.

### Resolução passo a passo
1. Para haver reflexão interna total na parede da fibra, a luz deve ir do meio de **maior n** (núcleo) para o de **menor n** (revestimento).
2. Verificando:
   - I: núcleo 1,46 < revestimento 1,48. Não serve.
   - II: índices iguais, a luz simplesmente atravessa. Não serve.
   - **III: núcleo 1,48 > revestimento 1,46. Serve.**
   - IV: núcleo menor. Não serve.
3. Fenômeno: **reflexão interna total** (a luz não refrata para o revestimento; é toda refletida de volta para o núcleo).
4. Por que cada distrator cai:
   - a) Índices invertidos.
   - b), e) Refração faria a luz **escapar** do núcleo.
   - d) A difração não confina a luz.

**Gabarito: C**

---

## Questão 13 (Padrão P36: reflexão na ionosfera)

### O que você precisa saber antes de fazer essa questão
- **Problema:** ondas EM viajam em linha reta. Por causa da **curvatura da Terra**, uma antena no litoral não "enxergaria" uma cidade a milhares de km.
- **Solução natural** (Q88): a **ionosfera** (camada da alta atmosfera, de 60 a 1 000 km de altitude, cheia de partículas ionizadas) **reflete** ondas de rádio de frequências mais baixas (AM, ondas curtas). O sinal "quica" entre a ionosfera e o chão e alcança grandes distâncias.
- **Frequências altas** (FM, TV digital, celular, satélite) **atravessam** a ionosfera. Por isso dependem de antenas próximas, repetidoras ou satélites.
- **Curiosidade:** à noite a camada mais baixa e absorvente da ionosfera desaparece, e as ondas AM e curtas chegam ainda mais longe.
- **Pegadinha:** responder "difração" (que contorna obstáculos de tamanho comparável a λ, mas não a curvatura da Terra inteira) ou "refração".
- **Como memorizar:** "**Ionosfera é o teto-espelho do rádio**".

### Questão
Radioamadores no Brasil conseguem conversar com colegas no Japão usando transmissores de ondas curtas (entre 3 MHz e 30 MHz), sem o auxílio de satélites ou da internet, mesmo com a curvatura da Terra impedindo uma linha reta entre as antenas. Já as emissoras de FM (cerca de 100 MHz) têm alcance limitado a algumas dezenas de quilômetros.

O fenômeno que permite às ondas curtas alcançar regiões tão distantes é a
- a) refração na troposfera, camada mais baixa da atmosfera.
- b) reflexão na ionosfera, que devolve as ondas em direção à superfície.
- c) difração nas montanhas e edifícios ao longo do caminho.
- d) polarização causada pelo campo magnético terrestre.
- e) interferência construtiva entre as ondas emitidas pelos dois radioamadores.

### Resolução passo a passo
1. O obstáculo é a **curvatura da Terra**: o sinal precisa "subir" e "descer" de volta muito longe.
2. Ondas curtas (frequências mais baixas que FM) são **refletidas pela ionosfera** e voltam ao solo. Repetindo o processo (solo-ionosfera-solo), cruzam o planeta.
3. A FM, de frequência maior, **atravessa** a ionosfera e se perde no espaço: alcance só até o horizonte.
4. Por que cada distrator cai:
   - a) A troposfera curva pouco as ondas; não explica alcance intercontinental.
   - c) Difração não contorna a curvatura do planeta inteiro.
   - d) Polarização não muda a direção de propagação.
   - e) Interferência entre transmissores diferentes não amplia o alcance.

**Gabarito: B**

---

## Questão 14 (Padrão P37: alcance × frequência, intensidade com a distância)

### O que você precisa saber antes de fazer essa questão
- Uma antena que emite igualmente em todas as direções espalha a potência P sobre uma esfera de área 4πr². A intensidade é:
  **I = P/(4π·r²)**.
- **Consequência:** dobrar a distância → intensidade cai para **1/4**. Triplicar → **1/9**.
- Essa queda é **geométrica**: não depende da frequência da onda. Duas antenas de mesma potência, em campo aberto e sem obstáculos, perdem intensidade **do mesmo jeito** (Q27).
- **Onde a frequência importa:** quando há **obstáculos** (difração, P22) ou absorção no meio. Sem esses fatores, o número de antenas para cobrir uma região é o mesmo.
- **Pegadinha:** achar que onda de frequência maior "chega mais longe" ou "mais perto" em qualquer situação.
- **Como memorizar:** "**Dobrou a distância, um quarto da intensidade**".

### Questão
Duas antenas, uma de rádio FM (100 MHz) e outra de telefonia celular (900 MHz), emitem com a mesma potência e irradiam igualmente em todas as direções. Elas estão instaladas lado a lado em uma planície, sem obstáculos, e a absorção pelo ar pode ser desprezada. A 2 km das antenas, a intensidade medida dos dois sinais é a mesma, igual a I.

A 4 km das antenas, na mesma direção, as intensidades dos sinais de FM e de celular serão, respectivamente,
- a) I/2 e I/4.
- b) I/2 e I/2.
- c) I/4 e I/4.
- d) I/4 e I/16.
- e) I/16 e I/16.

### Resolução passo a passo
1. I = P/(4π·r²): ao passar de 2 km para 4 km, r dobra, r² quadruplica e I cai para **I/4**.
2. A fórmula **não contém a frequência**. Sem obstáculos e sem absorção, as duas antenas perdem intensidade da mesma forma.
3. Resultado: **I/4 para ambas**.
4. Por que cada distrator cai:
   - a), d) Atribuem à frequência um efeito que a fórmula não tem.
   - b) A queda não é linear (seria 1/2 se fosse proporcional a 1/r).
   - e) 1/16 seria para distância 4 vezes maior (8 km).

**Gabarito: C**

---

## Questão 15 (Padrão P39: efeito Doppler algébrico)

### O que você precisa saber antes de fazer essa questão
- **Regra do Doppler:**
  - frequência percebida **maior** que a emitida (f' > f) → fonte **se aproximou**;
  - f' **menor** que f → fonte **se afastou**.
- **Roteiro** (Q24): o ENEM "esconde" cada frequência em relações encadeadas. **Reescreva todas em função de f** (a frequência com a fonte parada) e compare com 1:
  - f₂ = 0,95·f₁ e f₁ = 1,05·f → f₂ = 0,95 × 1,05·f = 0,9975·f.
  - f = 0,92·f₃ → f₃ = f/0,92 ≈ 1,087·f (cuidado com o sentido da igualdade!).
- **Pegadinha:** olhar só o coeficiente (0,95 parece "afastou", 1,02 parece "aproximou") sem multiplicar pela frequência de referência certa. E inverter quando f aparece do lado esquerdo.
- **Como memorizar:** "**Tudo em função de f, depois compare com 1**".

### Questão
Uma fonte sonora emite um som de frequência f quando está parada em relação a um microfone. Em quatro experimentos, a fonte foi movimentada em relação ao microfone, que permaneceu parado, e foram registradas as frequências f₁, f₂, f₃ e f₄. Os resultados obedeceram às relações:

f₁ = 1,05·f  f₂ = 0,95·f₁  f = 0,92·f₃  f₄ = 1,02·f₂

Em quais experimentos a fonte sonora se aproximou do microfone?
- a) Somente nos experimentos 1 e 3.
- b) Somente nos experimentos 1, 3 e 4.
- c) Somente nos experimentos 2 e 4.
- d) Somente nos experimentos 1 e 4.
- e) Somente no experimento 3.

### Resolução passo a passo
1. **f₁** = 1,05·f > f: **aproximou**.
2. **f₂** = 0,95 × 1,05·f = 0,9975·f < f: **afastou** (por pouco!).
3. **f₃:** de f = 0,92·f₃ → f₃ = f/0,92 ≈ 1,087·f > f: **aproximou**.
4. **f₄** = 1,02·f₂ = 1,02 × 0,9975·f ≈ 1,017·f > f: **aproximou**.
5. Aproximou nos experimentos **1, 3 e 4**.
6. Por que cada distrator cai:
   - a) Supõe que f₄, por depender de f₂, "herda" o afastamento do experimento 2. É preciso calcular: 1,02 × 0,9975 > 1.
   - c) Julga f₂ e f₄ só pelo coeficiente.
   - d) Lê f = 0,92·f₃ ao contrário (como se f₃ = 0,92·f).
   - e) Erra 1 e 4.

**Gabarito: B**

---

## Balanço da Lista 3

| Questão | Padrão | Questões da lista oficial com a mesma lógica |
|---|---|---|
| 1 | P19: Eco em camadas | 78 |
| 2 | P20: Impedância acústica Z = ρ·v | 57 |
| 3 | P21: Localização por tempo de resposta | 64 |
| 4 | P23: Difração limita a resolução | 37, 95, 98 |
| 5 | P26: Interferência por diferença de caminho | 32 |
| 6 | P27: Experimento de Young | 55 |
| 7 | P29: Ressonância de pêndulos | 67 |
| 8 | P30: Onda estacionária, nós e ventres | 11 |
| 9 | P32: Tubo fechado | 93 |
| 10 | P33: Polarização | 1, 43 |
| 11 | P34: Refração | 9, 89 |
| 12 | P35: Reflexão interna total | 15 |
| 13 | P36: Reflexão na ionosfera | 88 |
| 14 | P37: Alcance × frequência | 27 |
| 15 | P39: Doppler algébrico | 24 |

Esses 15 padrões cobrem **19 questões** da lista oficial.

- Padrões abordados nesta lista: **15**
- Padrões abordados no total: **40 de 53**
- **Restam: 13 padrões**

Padrões restantes: P40, P41, P43, P44, P45, P46, P47, P48, P49, P50, P51, P52, P53.
