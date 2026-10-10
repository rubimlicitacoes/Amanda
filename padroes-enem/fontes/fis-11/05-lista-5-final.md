# Lista 5 (final): últimos 5 padrões (P40, P41, P43, P44, P45) + 5 questões de revisão integrada

> Constantes: água com c = 1 cal/(g·°C) = 4 200 J/(kg·°C), L_fusão do gelo = 80 cal/g, T(K) = T(°C) + 273.

---

## Questão 1 (Padrão P40: ciclos no diagrama P×V, Otto e Diesel)

### O que você precisa saber antes de fazer essa questão
**Intuição:** o motor é um "pulmão" que respira mistura, aperta, explode, empurra e expira. Cada movimento é um trecho do diagrama pressão × volume.

**Conceito: ciclo Otto (motor a gasolina/etanol, quatro tempos)**

| Tempo | Trecho no P×V | O que acontece | Calor / trabalho |
|---|---|---|---|
| 1. Admissão | **Horizontal** (P constante, V aumenta) | Pistão desce e entra a mistura | — |
| 2. Compressão | **Curva subindo** para a esquerda (V diminui, P aumenta) | **Compressão adiabática** | trabalho **sobre** o gás; T sobe |
| 3. Explosão | **Vertical para cima** (V constante, P dispara) | **Centelha** da vela, combustão | **calor entra** |
| 4. Expansão | **Curva descendo** para a direita (V aumenta) | **Expansão adiabática** | **trabalho útil** (o gás empurra o pistão) |
| 5. Abertura do escape | **Vertical para baixo** (V constante, P cai) | Válvula de escape abre | **calor sai** |
| 6. Escape | **Horizontal** de volta | Gases queimados saem | — |

- **A centelha ocorre no fim da compressão** (volume mínimo), no ponto em que começa a subida vertical. Na Q44, é o **ponto C**.
- **Trabalho útil = expansão adiabática** (Q71: etapa IV, 3 → 4). A **área dentro do ciclo** é o trabalho líquido.
- **Ciclo Diesel (Q32):** não há vela. O ar é comprimido até esquentar o bastante, o diesel é injetado e queima **a pressão constante**. O calor entra num trecho **horizontal** (B → C, expansão isobárica, temperatura sobe).

**Pegadinhas:**
- Achar que a centelha acontece no **pico** de pressão: o pico é **consequência** dela.
- Dizer que o trabalho útil está na **compressão**: lá o motor **gasta** trabalho.
- No Diesel, o calor entra na **isobárica** (horizontal), não numa vertical.

**Como memorizar:** "**Aperta (adiabática), explode (vertical), empurra (adiabática), solta (vertical).**" Calor entra na explosão e o trabalho útil sai no empurrão.

### Questão
O diagrama pressão × volume de um motor a etanol, em funcionamento ideal, é descrito pelos trechos a seguir, percorridos na ordem A → B → C → D → E → B → A.

```
  P
  │        D
  │        │╲
  │        │ ╲
  │        │  ╲
  │        │   ╲
  │        C    ╲
  │         ╲    ╲
  │          ╲    E
  │           ╲   │
  │  A ─────── B ─┘
  └──────────────────── V
```

- A → B: pressão constante, volume aumenta.
- B → C: volume diminui ao longo de uma curva, sem troca de calor.
- C → D: volume constante, pressão aumenta bruscamente.
- D → E: volume aumenta ao longo de uma curva, sem troca de calor.
- E → B: volume constante, pressão diminui.
- B → A: pressão constante, volume diminui.

As etapas em que ocorrem, respectivamente, a combustão da mistura iniciada pela centelha e a realização do trabalho útil que movimenta o pistão são
- a) B → C e D → E.
- b) C → D e D → E.
- c) C → D e B → C.
- d) A → B e E → B.
- e) D → E e C → D.

### Resolução passo a passo
1. **Combustão:** a centelha dispara no **ponto C** (fim da compressão, volume mínimo). A queima é tão rápida que ocorre **a volume constante**, e a pressão dispara: trecho **C → D** (calor entra).
2. **Trabalho útil:** os gases quentes e em alta pressão **se expandem** empurrando o pistão, sem tempo para trocar calor: **D → E** (expansão adiabática).
3. Eliminando:
   - a) B → C é a compressão, em que o motor **consome** trabalho.
   - c) Associa o trabalho útil à compressão.
   - d) Admissão e abertura do escape.
   - e) Ordem invertida.

**Gabarito: B**

---

## Questão 2 (Padrão P41: 2ª lei, o rendimento nunca é 100%)

### O que você precisa saber antes de fazer essa questão
**Intuição:** uma máquina térmica é uma roda d'água movida por calor. Ela só gira se o calor **descer** de uma fonte quente para uma fria, e parte dele **sempre** chega lá embaixo sem virar trabalho.

**Conceito:**
- **Máquina térmica:** recebe Q_q da fonte quente, realiza trabalho W e rejeita Q_f para a fonte fria.
  - **Q_q = W + Q_f** (1ª lei, conservação de energia).
  - **η = W/Q_q = 1 − Q_f/Q_q**.
- **2ª lei (Kelvin-Planck):** é **impossível** uma máquina, operando em ciclos, converter **integralmente** calor em trabalho. **Q_f nunca é zero**, então η < 100% (Q3, Q82, Q90).
- **Carnot:** o maior rendimento possível entre duas temperaturas é **η_Carnot = 1 − T_f/T_q**, com T **em kelvin**. Nenhuma máquina real o supera.
- **Entropia (Q82):** em processos reais, a entropia (o "espalhamento" da energia) do universo **aumenta**. Essa é a raiz da limitação.
- **1ª × 2ª lei:**
  - A **1ª** proíbe criar energia.
  - A **2ª** proíbe converter todo o calor em trabalho.
  
  Uma máquina com η = 100% **não** viola a 1ª lei (a energia se conserva); viola a **2ª**.

**Pegadinhas:**
- Responder "contraria a conservação de energia" (distrator da Q82).
- Usar **°C** em Carnot. Dá um rendimento absurdo.
- Q90: a resposta é "**conversão integral de calor em trabalho ser impossível**", não "liberação de calor impossível".

**Como memorizar:** "**1ª lei: não se ganha. 2ª lei: nem se empata.**"

### Questão
Um inventor apresenta a investidores um motor térmico que, segundo ele, opera em ciclos entre uma câmara de combustão a 527 °C e o ar ambiente a 27 °C, com rendimento de 70%. Um engenheiro presente afirma, sem precisar ver o protótipo, que a alegação é fisicamente impossível.

O argumento correto do engenheiro é que
- a) o motor é possível, pois seu rendimento é menor que 100% e respeita a conservação de energia.
- b) o motor é impossível, pois o rendimento máximo de uma máquina operando entre essas temperaturas é de 62,5%.
- c) o motor é impossível, pois violaria a lei da conservação da energia.
- d) o motor é possível, pois o rendimento máximo entre essas temperaturas é de cerca de 95%.
- e) o motor é impossível, pois nenhuma máquina térmica pode ter rendimento superior a 50%.

### Resolução passo a passo
1. **Converter para kelvin:** T_q = 527 + 273 = **800 K**; T_f = 27 + 273 = **300 K**.
2. **Rendimento de Carnot:** η_máx = 1 − 300/800 = 1 − 0,375 = **0,625 = 62,5%**.
3. **Comparar:** 70% > 62,5%, então é impossível pela **2ª lei** (nenhuma máquina supera Carnot).
4. Eliminando:
   - a) Respeitar a conservação de energia não basta: a 2ª lei impõe um limite menor.
   - c) Não viola a 1ª lei (70% de W + 30% de Q_f = 100%).
   - d) É a **armadilha do °C**: 1 − 27/527 ≈ 95%.
   - e) Não existe limite fixo de 50%; o limite depende das temperaturas.

**Gabarito: B**

---

## Questão 3 (Padrão P43: COP de refrigerador, cálculo)

### O que você precisa saber antes de fazer essa questão
**Intuição:** o COP mede "quanto calor eu tiro de dentro para cada joule que pago na conta de luz". Um COP 5 retira 5 J de calor para cada 1 J de trabalho.

**Conceito:**
- **COP = Q_f / W** (calor retirado da fonte fria / trabalho do compressor).
- **COP ideal (Carnot):** **COP = T_f / (T_q − T_f)**, com T **em kelvin** (fórmula da Q84).
  - T_f: temperatura do gás em contato com a fonte fria (interior).
  - T_q: temperatura do gás no dissipador (serpentina de trás).
- Quanto **menor a diferença** T_q − T_f, **maior o COP**. Por isso a geladeira gasta mais perto do fogão (Q54).
- **Isolar T_q:** T_q = T_f + T_f/COP. **Isolar T_f:** T_f = COP·T_q/(1 + COP).

**Como o ENEM cobra (Q84):** COP = 5,0 e T_f = −10 °C = 263 K. Então T_q − 263 = 263/5 = 52,6, e T_q ≈ **316 K**.

**Pegadinhas:**
- Usar °C na fórmula (resultado sem sentido).
- Responder em K quando pedem °C (ou o contrário).
- Inverter T_q e T_f.

**Como memorizar:** "**COP = frio sobre a diferença**", tudo em kelvin.

### Questão
Um freezer ideal opera com coeficiente de performance (COP) igual a 4,0. O gás refrigerante, ao passar pelo dissipador de calor na parte traseira do aparelho, encontra-se a 47 °C. O COP é dado por

  COP = T_f / (T_q − T_f),

em que T_q é a temperatura absoluta do gás no dissipador e T_f é a temperatura absoluta do gás em contato com o interior do freezer.

A temperatura do gás em contato com o interior do freezer, em grau Celsius, é mais próxima de
- a) −64 °C.
- b) −17 °C.
- c) 17 °C.
- d) 38 °C.
- e) 256 °C.

### Resolução passo a passo
1. **Kelvin:** T_q = 47 + 273 = **320 K**.
2. **Equação:** 4,0 = T_f/(320 − T_f), então 4(320 − T_f) = T_f, ou seja, 1 280 − 4T_f = T_f.
3. 5T_f = 1 280, logo T_f = **256 K**.
4. **Em Celsius:** 256 − 273 = **−17 °C**.
5. Distratores:
   - e) 256 é o valor em **kelvin**, rotulado como °C.
   - d) Usou °C na fórmula: 4 = T_f/(47 − T_f), o que dá T_f ≈ 37,6.

**Gabarito: B**

---

## Questão 4 (Padrão P44: esquema de usina térmica)

### O que você precisa saber antes de fazer essa questão
**Intuição:** toda usina térmica (carvão, gás, nuclear) é uma **chaleira gigante** que gira uma turbina. E toda máquina térmica precisa de uma **fonte fria**: o condensador, resfriado por água de rio, mar ou torre.

**Conceito: o ciclo de vapor**
1. **Fonte quente** (caldeira ou reator): a água vira vapor a alta pressão e temperatura.
2. **Turbina:** o vapor se expande, gira as pás e aciona o **gerador** (energia térmica → mecânica → elétrica).
3. **Condensador (fonte fria):** o vapor que saiu da turbina é **condensado** por água fria bombeada do ambiente. Isso mantém **baixa pressão na saída da turbina**, e a diferença de pressão é o que faz o vapor passar com força.
4. **Bomba:** devolve a água condensada à caldeira.
- **Bombas no esquema da Q12:**
  - bomba I circula a água pelo **reator** (retira o calor dele);
  - bomba II leva o condensado de volta;
  - bomba III traz água fria ao condensador.
- **Raciocínio de falha:** siga o fluxo. Se um circuito para, **o calor se acumula** onde ele deveria ser retirado.
  - Q12: bomba I para, o calor não sai do reator e o **reator aquece**.
- **Ligação com a 2ª lei:** sem fonte fria, a máquina não produz trabalho.

**Pegadinhas:** achar que, sem resfriamento, a usina "gera mais" (mais vapor = mais energia); confundir o circuito do reator com o do condensador.

**Como memorizar:** "**Siga a água: onde ela para de passar, o calor fica.**"

### Questão
Em uma usina termelétrica a gás natural, o vapor produzido na caldeira passa pela turbina e, em seguida, chega ao condensador, onde é transformado novamente em água líquida graças à água fria bombeada de um rio próximo. A água condensada retorna à caldeira por meio de outra bomba. Durante uma pane, apenas a bomba que leva a água do rio ao condensador deixa de funcionar, enquanto a caldeira continua produzindo vapor normalmente.

Nessa situação, espera-se que ocorra
- a) aumento da potência elétrica gerada, pois todo o vapor permanece no circuito.
- b) diminuição da potência elétrica gerada, pois o vapor deixa de ser condensado e a diferença de pressão entre a entrada e a saída da turbina diminui.
- c) resfriamento da caldeira, pois o vapor quente deixa de retornar a ela.
- d) congelamento da água do condensador, pois a água do rio deixa de circular.
- e) aumento da temperatura da água do rio, pois mais calor passa a ser despejado nele.

### Resolução passo a passo
1. **Siga o fluxo:** sem água fria chegando, o condensador **não retira calor** do vapor.
2. O vapor se acumula no condensador, a **pressão na saída da turbina sobe** e a diferença de pressão que movimenta a turbina **diminui**.
3. Turbina mais lenta significa **menos energia elétrica**. Em termos de 2ª lei: a máquina perdeu sua **fonte fria**.
4. Eliminando:
   - a) Vapor acumulado não gera trabalho; sem diferença de pressão, a turbina para.
   - c) A caldeira continua recebendo calor do gás; se faltar água de retorno, ela tende a **superaquecer**.
   - d) Não há o que congele: o condensador está cheio de vapor quente.
   - e) Sem a bomba, a água do rio **não passa** pelo condensador e recebe **menos** calor.

**Gabarito: B**

---

## Questão 5 (Padrão P45: gráficos e tabelas ambientais)

### O que você precisa saber antes de fazer essa questão
**Intuição:** em questões de dados, o ENEM não quer que você **saiba** a resposta; quer que você a **prove com a tabela**. Teste cada alternativa nos números.

**Conceito:**
- **Umidade absoluta:** quantidade real de vapor (g/m³).
- **Umidade relativa (UR):** umidade absoluta / máximo possível naquela temperatura (× 100%).
- O máximo de vapor que o ar suporta **aumenta com a temperatura**. Se a quantidade de vapor fica igual e a temperatura sobe, a **UR cai**. Por isso a UR é mínima à tarde e máxima de madrugada (Q22).
- **Q22:** a alternativa certa é "a **insolação** é um fator que provoca variação da UR" (o Sol aquece o ar, e a UR cai).
- **Q63 (coletores solares):** comparar colunas e checar cada afirmação. A radiação incidente difere mais de 20% entre capitais, mas a **energia útil** não segue a mesma ordem (Curitiba tem menos radiação que Cuiabá e mais energia útil), então a radiação "deixa de ser determinante em algumas situações".
- **Método:** para cada alternativa, procure **um contraexemplo** na tabela. Se achar, elimine.

**Pegadinhas:** "diretamente proporcional" (quase sempre falso em dados reais); confundir UR com quantidade absoluta de vapor; generalizar a partir de um único ponto.

**Como memorizar:** "**Dado manda: cada alternativa é uma hipótese, e a tabela é o juiz.**"

### Questão
Uma estação meteorológica registrou, ao longo de um dia sem chuva, a temperatura do ar, a umidade relativa (UR) e a umidade absoluta (massa de vapor de água por metro cúbico de ar).

| Hora | 0 h | 4 h | 8 h | 12 h | 16 h | 20 h |
|---|---|---|---|---|---|---|
| Temperatura (°C) | 18 | 16 | 20 | 28 | 30 | 22 |
| Umidade relativa (%) | 85 | 90 | 75 | 45 | 40 | 70 |
| Umidade absoluta (g/m³) | 13,1 | 12,3 | 13,0 | 12,3 | 12,1 | 13,6 |

Com base nos dados, conclui-se que
- a) o ar adquiriu maior quantidade de vapor de água à medida que se aqueceu.
- b) a umidade relativa é diretamente proporcional à temperatura do ar.
- c) a variação da umidade relativa ao longo do dia deveu-se principalmente à variação da temperatura, já que a quantidade de vapor variou pouco.
- d) a umidade relativa indica, em termos absolutos, a quantidade de vapor de água presente no ar.
- e) o horário de maior umidade relativa coincidiu com o de maior quantidade de vapor de água no ar.

### Resolução passo a passo
1. **Testando cada alternativa:**
   - a) Às 16 h (mais quente) a umidade absoluta é **12,1**, o **menor** valor. **Falsa.**
   - b) A temperatura sobe de 20 °C para 30 °C e a UR **cai** de 75% para 40%. A relação é **inversa**. **Falsa.**
   - c) A umidade absoluta oscila apenas entre 12,1 e 13,6 g/m³ (~12%), enquanto a UR vai de 40% a 90%. E a UR cai exatamente quando a temperatura sobe. **Verdadeira.**
   - d) UR é **relativa**: às 4 h a UR é 90% com 12,3 g/m³; às 12 h a UR é 45% com os **mesmos** 12,3 g/m³. **Falsa.**
   - e) Maior UR: 4 h (90%, 12,3 g/m³). Maior vapor: 20 h (13,6 g/m³). **Falsa.**
2. **Física por trás:** o ar quente "comporta" mais vapor. Com a mesma quantidade de vapor, a UR cai à tarde. É a explicação do gráfico da Q22.

**Gabarito: C**

---

# Revisão integrada (questões que misturam padrões)

> Na prova, as questões raramente vêm "puras". Estas cinco cruzam padrões de listas diferentes. Antes de resolver, tente identificar por conta própria quais padrões estão em jogo.

---

## Questão 6 (Revisão: P4 + P11 + P1, garrafa térmica)

### O que você precisa saber antes de fazer essa questão
- **P4:** condução precisa de meio material; convecção precisa de fluido em movimento; irradiação atravessa o vácuo.
- **P11:** superfícies **espelhadas** absorvem e emitem pouca radiação.
- **P1:** a garrafa não "guarda o calor"; ela **reduz as taxas** de troca (Q34 mostra que a temperatura muda mesmo assim).
- **Estratégia:** associe cada parte da garrafa ao processo que **ela bloqueia**.

### Questão
Uma garrafa térmica é formada por uma ampola de vidro de parede dupla com **vácuo** entre as paredes, cujas faces internas são **espelhadas**, e por uma **tampa** que veda a abertura. Essas três características reduzem, respectivamente, as trocas de calor por
- a) convecção e irradiação; condução; irradiação.
- b) condução e convecção; irradiação; convecção.
- c) irradiação; condução e convecção; condução.
- d) condução; convecção; irradiação.
- e) irradiação; irradiação; condução e convecção.

### Resolução passo a passo
1. **Vácuo:** sem matéria entre as paredes não há **condução** (falta meio) nem **convecção** (falta fluido). A irradiação, porém, atravessa o vácuo.
2. **Faces espelhadas:** refletem o infravermelho e são más emissoras, o que reduz a **irradiação**, justamente o que o vácuo não barra.
3. **Tampa:** impede que o ar aquecido acima do líquido saia e seja trocado por ar frio, bloqueando a **convecção** (e também a evaporação).
4. Combinação: (condução e convecção); irradiação; convecção.

**Gabarito: B**

---

## Questão 7 (Revisão: P22 + P20 + P21, mistura com mudança de fase)

### O que você precisa saber antes de fazer essa questão
- **P22:** num sistema isolado, |calor cedido| = |calor recebido|.
- **P20:** derreter gelo exige Q = m·L (L_fusão = 80 cal/g).
- **P21:** o gelo passa por **duas** etapas: derrete a 0 °C (**latente**) e depois a água formada esquenta até a temperatura final (**sensível**).
- **Estratégia:** liste tudo o que **perde** calor de um lado e tudo o que **ganha** do outro, e iguale.

### Questão
Uma pessoa deseja resfriar 200 g de suco, inicialmente a 25 °C, até 10 °C, adicionando cubos de gelo a 0 °C. Considere que o suco tem calor específico igual ao da água (1 cal/g·°C), que o calor latente de fusão do gelo é 80 cal/g e que não há trocas de calor com o copo nem com o ambiente.

A massa mínima de gelo, em grama, necessária para isso é mais próxima de
- a) 20.
- b) 33.
- c) 38.
- d) 60.
- e) 300.

### Resolução passo a passo
1. **Calor cedido pelo suco** (25 °C → 10 °C): 200 × 1 × 15 = **3 000 cal**.
2. **Calor recebido pelo gelo** (massa m):
   - derreter a 0 °C: m × 80;
   - a água do gelo derretido aquecer de 0 °C a 10 °C: m × 1 × 10.
   - Total: **90·m**.
3. **Igualando:** 90·m = 3 000, então m ≈ **33 g**.
4. Distratores:
   - c) Esqueceu a etapa sensível da água derretida (3 000/80 = 37,5 g).
   - e) Ignorou o calor latente (3 000/10).

**Gabarito: B**

---

## Questão 8 (Revisão: P25 + P19, chuveiro com efeito Joule e vazão)

### O que você precisa saber antes de fazer essa questão
- **P25:** potência do resistor, P = U²/R.
- **P19:** fluxo contínuo, P = (m/Δt)·c·ΔT, com ΔT = saída − entrada.
- **Conversões:** L/min ÷ 60 = L/s = kg/s (para água).
- **Estratégia:** primeiro a potência; depois o ΔT pela vazão; por fim, some ao valor da entrada.

### Questão
Um chuveiro elétrico ligado a 220 V tem, na posição "inverno", resistência de 8,8 Ω. A água chega ao chuveiro a 20 °C, com vazão de 3,0 L/min. Considere que toda a energia elétrica é transferida à água, cujo calor específico é 4 200 J/(kg·°C) e cuja densidade é 1 kg/L.

A temperatura da água na saída do chuveiro é mais próxima de
- a) 20,4 °C.
- b) 26,2 °C.
- c) 46,2 °C.
- d) 72,4 °C.
- e) 98,0 °C.

### Resolução passo a passo
1. **Potência:** P = 220²/8,8 = 48 400/8,8 = **5 500 W**.
2. **Vazão:** 3,0 L/min = 3,0/60 = **0,05 kg/s**.
3. **ΔT** = P/(vazão·c) = 5 500/(0,05 × 4 200) = 5 500/210 ≈ **26,2 °C**.
4. **Temperatura de saída:** 20 + 26,2 = **46,2 °C**.
5. Distratores:
   - b) É só o ΔT, sem somar a temperatura de entrada.
   - a) Usou 3 kg/s (esqueceu de dividir por 60).

**Gabarito: C**

---

## Questão 9 (Revisão: P42 + P39 + P27, o ciclo da geladeira por dentro)

### O que você precisa saber antes de fazer essa questão
- **P42:** a geladeira leva calor do interior (frio) para o ambiente (quente) gastando trabalho.
- **P39:** compressão adiabática **aquece** o gás; expansão adiabática **esfria**.
- **P27:** evaporação **absorve** calor; condensação **libera** calor.
- **Ideia-chave:** para o fluido **ceder** calor ao ambiente na serpentina traseira, ele precisa estar **mais quente que o ambiente**. Para **retirar** calor do interior, precisa estar **mais frio que o interior**.

### Questão
No circuito de uma geladeira, o fluido refrigerante passa sucessivamente pelo compressor, pela serpentina traseira (condensador), pela válvula de expansão e pela serpentina do congelador (evaporador). Para que o fluido consiga ceder calor ao ar da cozinha na serpentina traseira, ele precisa estar a uma temperatura superior à do ambiente.

Essa condição é obtida
- a) na válvula de expansão, onde o fluido se expande rapidamente e se aquece.
- b) no compressor, onde o fluido sofre uma compressão rápida e o trabalho realizado sobre ele eleva sua temperatura.
- c) no congelador, onde o fluido evapora e libera calor, aquecendo-se.
- d) no condensador, onde o fluido recebe calor do ambiente antes de condensar.
- e) no compressor, onde o fluido recebe calor do motor elétrico por condução.

### Resolução passo a passo
1. **Compressor:** compressão rápida, praticamente **adiabática** (P39). O trabalho realizado sobre o gás aumenta sua energia interna, e ele sai **mais quente que a cozinha**.
2. **Condensador:** o gás quente **cede calor** ao ambiente e **condensa** (libera calor latente, P27).
3. **Válvula de expansão:** expansão rápida, e o fluido **esfria** abaixo da temperatura interna.
4. **Evaporador:** o fluido **evapora**, **absorvendo** calor do interior (P27). E o ciclo recomeça.
5. Eliminando:
   - a) Expansão **esfria**.
   - c) Evaporação **absorve** calor.
   - d) No condensador o fluido **cede** calor.
   - e) O aquecimento relevante vem do **trabalho de compressão**, não do motor.

**Gabarito: B**

---

## Questão 10 (Revisão: P14 + P4 + P5, brisa terrestre)

### O que você precisa saber antes de fazer essa questão
- **P14:** a água tem calor específico muito maior que o da areia ou terra, então **aquece e esfria mais devagar**.
- **P5:** ar mais quente fica menos denso e **sobe**; ar mais frio desce e ocupa o lugar.
- **P4:** o vento (movimento de ar causado por diferença de temperatura) é **convecção**.
- **Estratégia:** descubra quem está **mais quente** naquele horário. O ar sobe sobre ele e o vento sopra **em direção** a ele, pela superfície.

### Questão
Em cidades litorâneas, durante a noite, é comum soprar uma brisa da terra para o mar, chamada brisa terrestre, no sentido inverso ao da brisa marítima diurna.

A brisa terrestre noturna ocorre porque
- a) a terra, por ter maior calor específico, retém o calor do dia e aquece o ar sobre ela, que sopra em direção ao mar.
- b) a água, por ter maior calor específico, esfria mais lentamente que a terra; o ar sobre o mar, mais quente, sobe e é substituído pelo ar mais frio vindo da terra.
- c) a água irradia o frio acumulado durante o dia, que atrai o ar da terra.
- d) o ar sobre a terra fica menos denso à noite e desce em direção ao mar.
- e) a condução térmica da areia transfere o calor da praia para o mar, arrastando o ar consigo.

### Resolução passo a passo
1. **À noite, ambos perdem calor.** A terra (c baixo) **esfria rápido**; o mar (c alto) **esfria devagar**. Logo, o **mar fica mais quente** que a terra (P14).
2. **Sobre o mar:** o ar é aquecido, fica menos denso e **sobe** (P5).
3. **Reposição:** o ar mais frio e denso da terra **flui em direção ao mar** pela superfície. Esse movimento é a brisa terrestre (**convecção**, P4).
4. É o espelho da Q4 (dia: a terra esquenta mais rápido e a brisa vai do mar para a terra).
5. Eliminando:
   - a) A terra tem **menor** calor específico.
   - c) "Frio" não se irradia.
   - d) Ar menos denso **sobe**, não desce; e o ar sobre a terra fica **mais** denso à noite.
   - e) Vento não é condução.

**Gabarito: B**

---

## Placar final

| Questão | Padrão(ões) | Questões oficiais relacionadas |
|---|---|---|
| 1 | P40: ciclos Otto e Diesel | 32, 44, 71 |
| 2 | P41: 2ª lei e Carnot | 3, 82, 90 |
| 3 | P43: COP | 84 |
| 4 | P44: usina térmica | 12 |
| 5 | P45: dados ambientais | 22, 63 |
| 6 | Revisão P4 + P11 + P1 | 34, 69, 1 |
| 7 | Revisão P22 + P20 + P21 | 81, 36, 16 |
| 8 | Revisão P25 + P19 | 51, 17, 39 |
| 9 | Revisão P42 + P39 + P27 | 10, 38, 58, 89 |
| 10 | Revisão P14 + P4 + P5 | 4, 28, 80 |

**Padrões novos nesta lista: 5.** Acumulado: **45 de 45 (100%)**, cobrindo as **92 questões** da lista oficial.
**Padrões que faltam: 0.**

## Como revisar daqui para frente (repetição espaçada)
1. **Daqui a 1 dia:** refaça só as questões que errou em cada lista, sem olhar a resolução.
2. **Daqui a 3 dias:** resolva a lista oficial, questões 1 a 46, anotando ao lado de cada uma o número do padrão (P1 a P45) **antes** de resolver.
3. **Daqui a 7 dias:** resolva as questões 47 a 92 da mesma forma.
4. **Daqui a 15 dias:** refaça as cinco questões de revisão desta lista e as questões oficiais de padrão único (P8, P9, P10, P13, P24, P26, P31, P32, P34, P35, P37, P38, P43, P44), que são as mais fáceis de esquecer.
