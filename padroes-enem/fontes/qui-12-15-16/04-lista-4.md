# Lista 4: 15 questões inéditas (padrões P45, P46, P47, P48, P49, P50, P51, P52, P54, P55, P56, P57, P58, P59, P60)

> Foco desta lista: o restante da eletroquímica (montagem de pilhas, eletrólise, refino e corrosão) e os temas de equilíbrio e condutividade que aparecem na lista oficial.

---

## Revisão rápida antes de começar

| | Pilha (galvânica) | Eletrólise |
|---|---|---|
| Espontânea? | **Sim** | **Não** (precisa de fonte externa) |
| Energia | química → **elétrica** | elétrica → **química** |
| Ânodo | oxidação, polo **−** | oxidação, polo **+** |
| Cátodo | redução, polo **+** | redução, polo **−** |

Em **qualquer** caso, o **ânodo oxida** e o **cátodo reduz**. O que troca é o sinal do polo.

---

## Questão 1 (Padrão P45: montagem de pilhas em série)

### O que você precisa saber antes de fazer essa questão
- **Em série, as ddp se somam** só se cada pilha estiver ligada "**+ com −**": o cátodo (polo +) de uma ligado ao ânodo (polo −) da seguinte. É como pilhas num controle remoto, encostando a ponta de uma na base da outra.
- **Os dois terminais livres** (que vão ao LED ou aparelho) são: o **ânodo** da primeira e o **cátodo** da última.
- **Ligações erradas:**
  - **+ com +** ou **− com −**: as pilhas ficam em oposição e as ddp se **subtraem**.
  - Pilha **sem ponte salina**: o circuito interno fica aberto e não há corrente.
- **Em cada pilha, identifique:** maior E° → cátodo (+); menor E° → ânodo (−).
- **Ele 32:** a questão mostra cinco montagens desenhadas. Aqui as montagens estão descritas em texto, mas a lógica é a mesma.

### Questão
Em um laboratório, um estudante dispõe de duas pilhas montadas em béqueres, cada uma com ponte salina, para acender um LED que exige pelo menos 4,0 V:

- **Pilha A:** placa de magnésio em solução de Mg²⁺ e placa de cobre em solução de Cu²⁺.
- **Pilha B:** placa de zinco em solução de Zn²⁺ e placa de prata em solução de Ag⁺.

| Semirreação de redução | E° (V) |
|---|---|
| Mg²⁺ + 2 e⁻ → Mg | −2,37 |
| Zn²⁺ + 2 e⁻ → Zn | −0,76 |
| Cu²⁺ + 2 e⁻ → Cu | +0,34 |
| Ag⁺ + e⁻ → Ag | +0,80 |

A montagem que acende o LED, nas condições-padrão, é:
- a) LED ligado entre as placas de Mg (A) e de Zn (B), e um fio ligando a placa de Cu (A) à de Ag (B).
- b) LED ligado entre as placas de Mg (A) e de Ag (B), e um fio ligando a placa de Cu (A) à de Zn (B).
- c) LED ligado entre as placas de Cu (A) e de Ag (B), e um fio ligando a placa de Mg (A) à de Zn (B).
- d) Pilha A montada sem ponte salina, com o LED ligado entre as placas de Mg (A) e de Ag (B), e um fio ligando a placa de Cu (A) à de Zn (B).
- e) LED ligado apenas entre as placas de Mg e de Cu da pilha A, com a pilha B desconectada.

### Resolução passo a passo
1. **Pilha A:** Mg (−2,37) é ânodo (−); Cu (+0,34) é cátodo (+). ΔE = 0,34 − (−2,37) = 2,71 V.
2. **Pilha B:** Zn (−0,76) é ânodo (−); Ag (+0,80) é cátodo (+). ΔE = 0,80 − (−0,76) = 1,56 V.
3. **Em série:** 2,71 + 1,56 = 4,27 V ≥ 4,0 V. Basta ligar certo.
4. **Alternativa b:** o fio liga Cu (+ de A) a Zn (− de B): ligação + com −. Os terminais livres são Mg (−) e Ag (+). **Série correta: 4,27 V.**
5. Por que cada distrator cai:
   - a) O fio liga Cu (+) com Ag (+): pilhas em oposição, 2,71 − 1,56 = 1,15 V.
   - c) O fio liga Mg (−) com Zn (−): também em oposição, 1,15 V.
   - d) Sem ponte salina, a pilha A não funciona.
   - e) Só a pilha A: 2,71 V, insuficiente.

**Gabarito: B**

---

## Questão 2 (Padrão P46: pilha × eletrólise)

### O que você precisa saber antes de fazer essa questão
- **Pilha:** reação **espontânea** que **gera** corrente elétrica (energia química → elétrica). Ex.: bateria descarregando, contato de dois metais diferentes com saliva (Ele 26).
- **Eletrólise:** reação **não espontânea** forçada por uma fonte externa (energia elétrica → química). Ex.: recarga de bateria, galvanoplastia, produção de Al e Cl₂.
- **Bateria recarregável:** funciona como **pilha** ao descarregar e como **eletrólise** ao recarregar (Ele 52). Na recarga, a reação é invertida.
- **Pegadinha:** dizer que a eletrólise tem "fluxo de elétrons espontâneo".

### Questão
Um celular é colocado para carregar durante a noite. Durante esse período, a bateria de íon-lítio recebe energia da tomada, e as reações que ocorreram durante o uso do aparelho são revertidas.

Durante a **recarga**, a bateria funciona como
- a) uma pilha, pois a reação é espontânea e gera corrente elétrica.
- b) uma célula eletrolítica, pois a reação não é espontânea e converte energia elétrica em energia química.
- c) uma célula eletrolítica, pois a reação é espontânea e converte energia química em elétrica.
- d) uma pilha, pois a reação não é espontânea e consome energia elétrica.
- e) uma célula eletrolítica, pois converte energia química em energia elétrica.

### Resolução passo a passo
1. **Na recarga, a bateria recebe energia** de uma fonte externa (a tomada) e as reações são **forçadas** no sentido inverso: não são espontâneas.
2. Reação não espontânea + fonte externa = **eletrólise**.
3. **Conversão de energia:** a energia elétrica da tomada fica armazenada como energia **química** na bateria.
4. Por que cada distrator cai:
   - a) Isso descreve a **descarga** (uso do celular).
   - c) Eletrólise não é espontânea.
   - d) Pilha é espontânea.
   - e) A conversão está invertida.

**Gabarito: B**

---

## Questão 3 (Padrão P47: célula a combustível e conversão de energia)

### O que você precisa saber antes de fazer essa questão
- **Célula a combustível** é uma pilha alimentada continuamente com combustível (H₂, metanol, etanol) e oxidante (O₂ do ar).
  - Converte energia **química** diretamente em **elétrica**, sem combustão (sem chama).
  - A de H₂/O₂ forma **apenas água**: 2 H₂ + O₂ → 2 H₂O.
- **Motor a combustão:** energia química → térmica → mecânica. Perde muito calor e emite CO₂ (se o combustível tem carbono).
- **Ponto de atenção:** "não emitir poluentes no uso" não significa que a **produção** do H₂ não emita. Se o H₂ vem do gás natural, há CO₂ na fábrica. O ENEM às vezes cobra essa diferença.

### Questão
Um ônibus movido a célula a combustível de hidrogênio circula em uma cidade. Nele, o hidrogênio armazenado em tanques reage com o oxigênio do ar em eletrodos separados por uma membrana, e a corrente produzida aciona o motor elétrico.

Em relação ao funcionamento desse ônibus, é correto afirmar que a célula a combustível
- a) transforma diretamente energia química em energia elétrica, e o único produto da reação é a água.
- b) queima o hidrogênio, transformando energia química em energia térmica, que move os pistões do motor.
- c) transforma energia elétrica em energia química, armazenando-a no hidrogênio.
- d) produz gás carbônico como subproduto, como os motores a diesel.
- e) obtém energia da fissão nuclear do hidrogênio.

### Resolução passo a passo
1. A célula a combustível é uma **pilha**: energia química → energia **elétrica**, diretamente, sem queima.
2. Reação global: 2 H₂ + O₂ → 2 H₂O. Não há carbono, então **não se forma CO₂**.
3. Por que cada distrator cai:
   - b) Não há combustão nem pistões; a energia vai para um motor elétrico.
   - c) Isso é eletrólise (o processo que **produz** H₂ a partir da água).
   - d) Não há carbono nos reagentes.
   - e) É reação química, não nuclear.

**Gabarito: A**

---

## Questão 4 (Padrão P48: escolher tecnologia por critérios de quadro)

### O que você precisa saber antes de fazer essa questão
- Questões de "qual tecnologia é mais adequada" escondem **dois ou três critérios** no texto. A tarefa é:
  1. Sublinhar cada critério (ex.: "baixa temperatura", "membrana polimérica", "meio ácido" em Ele 3).
  2. Eliminar as linhas da tabela que **falham em qualquer** critério.
- **Não escolha** a opção que é a melhor num critério só. Ela tem de passar em **todos**.
- **Metais pesados tóxicos** em baterias: chumbo (Pb), cádmio (Cd), mercúrio (Hg).

### Questão
Uma empresa vai desenvolver um drone para monitorar lavouras. A bateria escolhida deve, ao mesmo tempo:
- armazenar muita energia por massa (pelo menos 150 Wh/kg), porque o drone precisa ser leve;
- ser recarregável;
- não conter metais pesados tóxicos.

| Bateria | Energia por massa (Wh/kg) | Recarregável? | Componentes principais |
|---|---|---|---|
| Chumbo-ácido | 35 | Sim | Pb, PbO₂, H₂SO₄ |
| Níquel-cádmio | 50 | Sim | Ni(OH)₂, Cd |
| Níquel-hidreto metálico | 80 | Sim | Ni(OH)₂, liga metálica |
| Íon-lítio | 180 | Sim | LiCoO₂, grafite |
| Alcalina | 160 | Não | Zn, MnO₂, KOH |

A bateria mais adequada é a
- a) chumbo-ácido.
- b) níquel-cádmio.
- c) níquel-hidreto metálico.
- d) íon-lítio.
- e) alcalina.

### Resolução passo a passo
1. **Critério 1 (≥ 150 Wh/kg):** só íon-lítio (180) e alcalina (160).
2. **Critério 2 (recarregável):** a alcalina não é. Sobra a **íon-lítio**.
3. **Critério 3 (sem metal pesado):** a íon-lítio não tem Pb, Cd ou Hg. Passa.
4. Por que cada distrator cai:
   - a) e b) Baixa energia por massa e contêm Pb e Cd.
   - c) Recarregável e sem metal pesado, mas só 80 Wh/kg.
   - e) Boa energia por massa, mas não é recarregável.

**Gabarito: D**

---

## Questão 5 (Padrão P49: funcionamento interno da pilha)

### O que você precisa saber antes de fazer essa questão
- **Dois circuitos numa pilha:**
  - **Externo (fio):** quem anda são os **elétrons**, do ânodo para o cátodo.
  - **Interno (solução, ponte salina, membrana ou eletrólito polimérico):** quem anda são os **íons**. Os elétrons **não** passam pela solução.
- **Ponte salina:** contém um sal (KCl, KNO₃). Seus íons migram para manter a **neutralidade elétrica** de cada compartimento:
  - cátions (K⁺) vão para o lado do **cátodo**, onde cátions estão sendo consumidos;
  - ânions (Cl⁻) vão para o lado do **ânodo**, onde cátions estão sendo produzidos.
- **Sem ponte salina**, as cargas se acumulam e a corrente para.
- **Outros fatores (Ele 45):** gás produzido pode bloquear o eletrodo; no frio, o gás fica mais solúvel e a pilha volta a funcionar por um tempo.

### Questão
Em uma aula, montou-se uma pilha de Daniell (zinco em solução de ZnSO₄ e cobre em solução de CuSO₄), com os béqueres ligados por um tubo em U contendo solução saturada de KCl. Uma pequena lâmpada acendeu. Quando o professor retirou o tubo em U, a lâmpada apagou imediatamente, embora os eletrodos e o fio continuassem no lugar.

A lâmpada apagou porque o tubo em U
- a) conduzia os elétrons do eletrodo de zinco para o de cobre.
- b) permitia a migração de íons entre as soluções, mantendo a neutralidade elétrica e fechando o circuito.
- c) fornecia os íons Cu²⁺ que se depositam no cátodo.
- d) era o local onde ocorria a redução dos íons cobre.
- e) impedia que o zinco reagisse com a solução de sulfato de zinco.

### Resolução passo a passo
1. Os **elétrons** vão pelo **fio** (Zn → Cu), que continuou no lugar.
2. Dentro das soluções, quem carrega a carga são os **íons**. Sem a ponte:
   - o béquer do zinco acumula carga positiva (forma Zn²⁺);
   - o béquer do cobre acumula carga negativa (consome Cu²⁺, sobra SO₄²⁻).
   - A corrente para.
3. A ponte salina permite que K⁺ e Cl⁻ migrem e **neutralizem** essas cargas, fechando o circuito (Ele 37 tem a mesma ideia no eletrólito polimérico).
4. Por que cada distrator cai:
   - a) Elétrons não atravessam a ponte salina.
   - c) O Cu²⁺ já está na solução de CuSO₄.
   - d) A redução ocorre na superfície do eletrodo de cobre.
   - e) A ponte não tem essa função.

**Gabarito: B**

---

## Questão 6 (Padrão P50: eletrólise aquosa do NaCl)

### O que você precisa saber antes de fazer essa questão
- **Em solução aquosa, a água compete com os íons.** Prioridade de descarga:
  - **Cátodo (redução):** cátions de metais muito reativos (Na⁺, K⁺, Ca²⁺, Al³⁺) **não** se reduzem na água. Quem reduz é a água: 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻.
  - **Ânodo (oxidação):** haletos (Cl⁻, Br⁻, I⁻) oxidam antes da água: 2 Cl⁻ → Cl₂ + 2 e⁻. Ânions oxigenados (SO₄²⁻, NO₃⁻) não oxidam; aí oxida a água (forma O₂).
- **Eletrólise da salmoura (NaCl aq):**
  - ânodo: **Cl₂**
  - cátodo: **H₂** (e OH⁻, que com Na⁺ forma **NaOH**: a solução fica básica)
  - Global: 2 NaCl + 2 H₂O → Cl₂ + H₂ + 2 NaOH.
- **Uso industrial (Ele 29):** é a principal fonte de cloro (para PVC, tratamento de água) e soda cáustica.
- **Sódio metálico** só se obtém por eletrólise **ígnea** (NaCl fundido, sem água).

### Questão
Uma indústria cloro-álcali realiza a eletrólise de uma solução aquosa concentrada de cloreto de sódio (salmoura), em uma cela com diafragma que separa os compartimentos dos eletrodos.

Sobre os produtos desse processo, é correto afirmar que
- a) forma-se sódio metálico no cátodo e gás cloro no ânodo.
- b) forma-se gás cloro no ânodo e gás hidrogênio no cátodo, e a solução do compartimento catódico torna-se básica.
- c) forma-se gás oxigênio no ânodo, pois a água se oxida antes dos íons cloreto.
- d) forma-se gás hidrogênio no ânodo, pela oxidação da água.
- e) a solução do compartimento catódico torna-se ácida, pela formação de HCl.

### Resolução passo a passo
1. **Ânodo (oxidação):** o Cl⁻ oxida antes da água: 2 Cl⁻ → **Cl₂** + 2 e⁻.
2. **Cátodo (redução):** o Na⁺ não se reduz em meio aquoso; reduz a água: 2 H₂O + 2 e⁻ → **H₂** + 2 OH⁻.
3. **Os OH⁻** acumulados com o Na⁺ formam **NaOH**: meio **básico**.
4. Por que cada distrator cai:
   - a) Sódio metálico só na eletrólise ígnea.
   - c) O cloreto tem prioridade sobre a água no ânodo.
   - d) H₂ vem de **redução**, que é no cátodo.
   - e) O meio catódico fica básico (OH⁻).

**Gabarito: B**

---

## Questão 7 (Padrão P51: eletrólise ígnea do alumínio)

### O que você precisa saber antes de fazer essa questão
- **Processo Hall-Héroult:** a alumina (Al₂O₃) da bauxita é dissolvida em **criolita fundida** (Na₃AlF₆), que abaixa a temperatura de fusão (de ~2 000 °C para ~1 000 °C).
- **Íons no fundido:** Al³⁺ e O²⁻ (não há água).
- **Cátodo (−):** Al³⁺ + 3 e⁻ → Al (alumínio líquido, depositado na cuba de aço revestida de grafite).
- **Ânodo (+):** 2 O²⁻ → O₂ + 4 e⁻. Em ~1 000 °C, o O₂ **reage com o carbono do ânodo**: C + O₂ → CO₂. Por isso os ânodos de grafite são **consumidos** e precisam ser trocados.
- **Global:** 2 Al₂O₃ + 3 C → 4 Al + 3 CO₂.
- **Gasta muita energia elétrica:** por isso reciclar alumínio economiza ~95% da energia.

### Questão
Na produção de alumínio por eletrólise ígnea, as cubas são equipadas com blocos de grafite que funcionam como ânodos e que precisam ser substituídos periodicamente, porque se desgastam durante o processo.

O desgaste dos ânodos ocorre porque
- a) o alumínio formado se deposita sobre eles e precisa ser raspado.
- b) o oxigênio produzido pela oxidação dos íons O²⁻ reage com o carbono, formando CO₂.
- c) os íons Al³⁺ oxidam o carbono, formando carbeto de alumínio.
- d) o carbono sofre redução, formando metano com o hidrogênio da água.
- e) os íons Na⁺ da criolita se reduzem sobre o grafite, formando sódio metálico.

### Resolução passo a passo
1. **No ânodo** ocorre oxidação: 2 O²⁻ → O₂ + 4 e⁻.
2. **O O₂ quente reage com o grafite:** C + O₂ → CO₂. O ânodo é queimado aos poucos.
3. Por que cada distrator cai:
   - a) O Al se forma no **cátodo**.
   - c) O Al³⁺ é reduzido (vira Al), não oxida nada; e vai para o cátodo.
   - d) Não há água no processo; o carbono é **oxidado**.
   - e) O Na⁺ não é reduzido no ânodo (redução ocorre no cátodo, e o Al³⁺ tem prioridade).

**Gabarito: B**

---

## Questão 8 (Padrão P52: eletrólise em dispositivo, polo + é ânodo)

### O que você precisa saber antes de fazer essa questão
- **Na eletrólise, o polo positivo da fonte é o ânodo:** ele "puxa" elétrons, então ali ocorre **oxidação**.
- **O polo negativo é o cátodo:** ele "empurra" elétrons, então ali ocorre **redução**.
- **Ânions** migram para o polo + (ânodo); **cátions** migram para o polo − (cátodo). Em Ele 16, o Cl⁻ vai para o eletrodo de Bi (+) e forma BiOCl.
- **Eletrodo metálico ativo no ânodo** (Al, Fe, Cu) pode ele mesmo se oxidar e se dissolver (é o que acontece no refino do cobre e na eletrocoagulação).
- **Água no cátodo:** 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻.

### Questão
A eletrocoagulação é usada para tratar efluentes de indústrias têxteis. Duas placas de alumínio são mergulhadas no efluente e ligadas a uma fonte de corrente contínua. Na placa ligada ao polo positivo, o metal se dissolve, liberando íons Al³⁺, que depois formam flocos de Al(OH)₃ capazes de arrastar os corantes. Na placa ligada ao polo negativo, observa-se a formação de bolhas.

Na placa ligada ao polo positivo, ocorre
- a) a redução da água, com formação de gás hidrogênio.
- b) a oxidação do alumínio metálico a íons Al³⁺, e essa placa é o ânodo.
- c) a redução de íons Al³⁺ a alumínio metálico, e essa placa é o cátodo.
- d) a oxidação da água, com formação de gás hidrogênio.
- e) a redução do alumínio, com perda de três elétrons por átomo.

### Resolução passo a passo
1. **Polo positivo na eletrólise = ânodo = oxidação.**
2. O texto diz que ali o metal se dissolve: Al → Al³⁺ + 3 e⁻ (**oxidação do alumínio**).
3. **No polo negativo (cátodo):** 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻ (as bolhas). Os OH⁻ se juntam ao Al³⁺ e formam Al(OH)₃.
4. Por que cada distrator cai:
   - a) A redução da água ocorre no polo **negativo**.
   - c) O alumínio está se dissolvendo, não se depositando.
   - d) A oxidação da água formaria O₂, não H₂.
   - e) Perder elétrons é oxidação, não redução.

**Gabarito: B**

---

## Questão 9 (Padrão P54: refino eletrolítico)

### O que você precisa saber antes de fazer essa questão
- **Montagem:** o metal **impuro** é o **ânodo**; uma placa fina de metal puro é o **cátodo**; a solução contém íons do metal (CuSO₄ no refino do cobre).
- **No ânodo**, oxida-se o cobre e também as impurezas **mais fáceis de oxidar** que ele (mais redutoras, menor E°): Zn, Fe, Ni, Pb. Elas vão para a **solução** como íons.
- **As impurezas menos redutoras** que o cobre (maior E°: Ag, Au, Pt) **não oxidam**. Quando o cobre ao redor se dissolve, elas se soltam e caem no fundo: é a **lama anódica**, vendida para recuperar metais preciosos (Ele 47).
- **No cátodo**, só o Cu²⁺ se deposita (os outros íons, como Zn²⁺ e Fe²⁺, são mais difíceis de reduzir e ficam na solução).
- **Regra prática:** "acima" do cobre na série de força redutora (mais nobres) vão para o fundo; "abaixo" (mais redutores) vão para a solução.

### Questão
Na purificação eletrolítica do cobre, uma placa de cobre bruto, contendo como impurezas ferro, zinco, níquel, prata e ouro, é usada como ânodo em uma solução de sulfato de cobre(II).

| Semirreação de redução | E° (V) |
|---|---|
| Au³⁺ + 3 e⁻ → Au | +1,50 |
| Ag⁺ + e⁻ → Ag | +0,80 |
| Cu²⁺ + 2 e⁻ → Cu | +0,34 |
| Ni²⁺ + 2 e⁻ → Ni | −0,25 |
| Fe²⁺ + 2 e⁻ → Fe | −0,44 |
| Zn²⁺ + 2 e⁻ → Zn | −0,76 |

As impurezas que passam para a solução na forma de íons durante o processo são
- a) prata e ouro.
- b) ferro, zinco e níquel.
- c) apenas zinco.
- d) prata, ouro e níquel.
- e) todas as impurezas.

### Resolução passo a passo
1. **No ânodo se oxidam** o cobre e as impurezas com **E° menor** que o do cobre (+0,34 V): Ni (−0,25), Fe (−0,44), Zn (−0,76). Elas vão para a solução como Ni²⁺, Fe²⁺ e Zn²⁺.
2. **Ag (+0,80) e Au (+1,50)** têm E° maior, não oxidam e caem como **lama anódica**.
3. Por que cada distrator cai:
   - a) Prata e ouro são os que vão para o **fundo** (é a resposta de Ele 47, que perguntava o contrário).
   - c) Não é só o zinco: Fe e Ni também têm E° menor que o cobre.
   - d) Mistura os dois grupos.
   - e) Os metais nobres não oxidam.

**Gabarito: B**

---

## Questão 10 (Padrão P55: metal de sacrifício)

### O que você precisa saber antes de fazer essa questão
- **Metal de sacrifício** (ou ânodo de sacrifício): um metal ligado à estrutura que se **oxida no lugar dela**.
- **Condição:** ele precisa ter **E° de redução menor** que o do metal protegido (é mais redutor, oxida com mais facilidade). Assim, ele vira o ânodo da pilha de corrosão e a estrutura vira o cátodo (protegido).
- **Para proteger o ferro (E° = −0,44 V):** servem Zn (−0,76), Mg (−2,37), Al (−1,66). **Não servem** Sn, Pb, Ni, Cu (E° maiores): eles fariam o ferro corroer **mais rápido**.
- **Aplicações:** blocos de zinco em cascos de navios, magnésio em tubulações enterradas, aquecedores e tanques (Ele 50).
- **Ele 39 e Ele 41:** mesma ideia aplicada ao alumínio (Mg protege o Al) e ao cobre das moedas.

### Questão
O casco de aço (ferro) de navios é protegido contra a corrosão pela água do mar com blocos metálicos fixados no casco, que são consumidos com o tempo e trocados periodicamente.

| Semirreação de redução | E° (V) |
|---|---|
| Mg²⁺ + 2 e⁻ → Mg | −2,37 |
| Zn²⁺ + 2 e⁻ → Zn | −0,76 |
| Fe²⁺ + 2 e⁻ → Fe | −0,44 |
| Sn²⁺ + 2 e⁻ → Sn | −0,14 |
| Pb²⁺ + 2 e⁻ → Pb | −0,13 |
| Cu²⁺ + 2 e⁻ → Cu | +0,34 |

Os metais que podem ser usados nesses blocos são
- a) estanho e chumbo.
- b) cobre, apenas.
- c) magnésio e zinco.
- d) cobre e estanho.
- e) magnésio, zinco e estanho.

### Resolução passo a passo
1. **Metal a proteger:** ferro (E° = −0,44 V).
2. **O bloco tem de se oxidar antes do ferro:** E° **menor** que −0,44 V.
3. **Mg (−2,37) e Zn (−0,76):** servem.
4. **Sn (−0,14), Pb (−0,13), Cu (+0,34):** E° maiores. Ligados ao ferro, eles fariam o **ferro** ser o ânodo e corroer mais rápido.
5. Por que cada distrator cai:
   - a), b), d) Metais com E° maior que o do ferro.
   - e) Inclui o estanho, que acelera a corrosão do ferro.

**Gabarito: C**

---

## Questão 11 (Padrão P56: proteção por barreira)

### O que você precisa saber antes de fazer essa questão
- **Corrosão do ferro precisa de O₂ e água** (de preferência com sais dissolvidos). Tirando um deles, a corrosão para.
- **Proteção por barreira:** uma camada que **isola** o metal do ambiente: tinta, verniz, graxa, plástico, filme cerâmico (Ele 4), estanho na folha de flandres.
- **Diferença em relação ao metal de sacrifício:**
  - **barreira** protege só enquanto está **intacta**;
  - **sacrifício** protege mesmo riscado, porque o metal mais reativo continua se oxidando no lugar.
- **Folha de flandres (aço + estanho):** o estanho tem E° (−0,14 V) **maior** que o do ferro (−0,44 V). Enquanto intacto, é barreira. **Riscado**, forma-se uma pilha em que o **ferro é o ânodo**, e a lata enferruja **mais rápido** no risco. (No aço galvanizado, com zinco, ocorre o contrário: o zinco se sacrifica.)

### Questão
As latas de conserva são feitas de folha de flandres, um aço revestido por uma fina camada de estanho. Recomenda-se não comprar latas amassadas ou riscadas.

Considere: E°(Fe²⁺/Fe) = −0,44 V; E°(Sn²⁺/Sn) = −0,14 V.

O mecanismo de proteção do estanho e a consequência de um risco na lata são, respectivamente,
- a) metal de sacrifício; o estanho continua se oxidando no lugar do ferro.
- b) barreira; no risco, o ferro se oxida preferencialmente e a corrosão é acelerada.
- c) barreira; no risco, o estanho se oxida e protege o ferro exposto.
- d) proteção catódica por corrente externa; o risco não altera a proteção.
- e) passivação do ferro; o risco é rapidamente coberto por óxido de ferro protetor.

### Resolução passo a passo
1. **Enquanto intacto,** o estanho isola o aço do ar e da umidade: **barreira**.
2. **No risco,** ferro e estanho ficam em contato com a umidade e formam uma pilha:
   - Fe (E° = −0,44 V, menor) é o **ânodo** e se oxida.
   - Sn (−0,14 V) é o cátodo.
   - O ferro corrói **mais rápido** do que se estivesse sozinho.
3. Por que cada distrator cai:
   - a) Para ser de sacrifício, o estanho precisaria ter E° menor que o do ferro.
   - c) No risco é o ferro que se oxida, não o estanho.
   - d) Não há corrente externa.
   - e) A ferrugem é porosa e não protege (diferente do óxido de alumínio).

**Gabarito: B**

---

## Questão 12 (Padrão P57: fatores que aceleram a corrosão)

### O que você precisa saber antes de fazer essa questão
- **Corrosão do ferro é uma pilha:** o ferro oxida (ânodo) e o O₂ dissolvido na água se reduz (cátodo). Reação global: 4 Fe + 3 O₂ + 2 H₂O → 2 Fe₂O₃·H₂O.
- **Precisa de:** ferro + **água** + **O₂**.
- **Acelera:** sais dissolvidos (NaCl da maresia, Ele 20), porque deixam a água **mais condutora** e a pilha de corrosão funciona melhor; acidez; temperatura mais alta.
- **Sem água** (ar seco com secante) ou **sem O₂** (água fervida coberta com óleo): a corrosão praticamente não ocorre.

### Questão
Para estudar a corrosão, um professor montou quatro tubos de ensaio, cada um com um prego de ferro limpo:

- **Tubo I:** ar seco, com um secante (cloreto de cálcio anidro) no fundo e tampa vedada.
- **Tubo II:** água fervida (sem oxigênio dissolvido), coberta por uma camada de óleo.
- **Tubo III:** água da torneira, em contato com o ar.
- **Tubo IV:** água com sal de cozinha dissolvido, em contato com o ar.

Após uma semana, a corrosão mais intensa foi observada no tubo
- a) I.
- b) II.
- c) III.
- d) IV.
- e) I, II, III e IV, igualmente.

### Resolução passo a passo
1. **Tubo I:** sem água. Não corrói.
2. **Tubo II:** sem O₂ (removido pela fervura; o óleo impede a entrada do ar). Praticamente não corrói.
3. **Tubo III:** água + O₂. Corrói.
4. **Tubo IV:** água + O₂ + **sal**. O sal aumenta a condutividade e acelera a pilha de corrosão. **Corrosão mais intensa.**
5. Por que cada distrator cai:
   - a) e b) Falta um dos ingredientes.
   - c) Corrói, mas mais devagar que com sal.
   - e) As condições são diferentes.

**Gabarito: D**

---

## Questão 13 (Padrão P58: pH × pKa)

### O que você precisa saber antes de fazer essa questão
- **Ácido fraco HA ⇄ H⁺ + A⁻.** O pKa é o pH em que metade está como HA e metade como A⁻.
- **Regra de ouro:**
  - **pH < pKa** (meio mais ácido que o pKa): predomina **HA** (forma molecular, protonada).
  - **pH > pKa** (meio menos ácido): predomina **A⁻** (forma ionizada).
- **Aplicações:**
  - Ele 12: o HClO (pKa 7,53) desinfeta 80× melhor que ClO⁻, então o pH da água deve ficar **abaixo** de 7,53 (pH ~5 a 7).
  - **Absorção de fármacos:** a forma **molecular** (sem carga) atravessa as membranas das células com mais facilidade que a forma iônica.

### Questão
O ácido acetilsalicílico (AAS) é um ácido fraco com pKa ≈ 3,5. Sabe-se que moléculas sem carga atravessam as membranas celulares com mais facilidade que íons. O pH do estômago é cerca de 1,5, e o do intestino delgado é cerca de 7,0.

Com base nessas informações, é correto afirmar que
- a) no estômago, o AAS está predominantemente na forma ionizada, o que favorece sua absorção.
- b) no estômago, o AAS está predominantemente na forma molecular, o que favorece sua absorção através da mucosa gástrica.
- c) no intestino, o AAS está predominantemente na forma molecular.
- d) o pH não interfere na forma em que o AAS se encontra.
- e) em qualquer pH, metade do AAS está na forma ionizada.

### Resolução passo a passo
1. **Estômago:** pH 1,5 < pKa 3,5. Predomina a forma **HA (molecular, sem carga)**: atravessa a membrana e é absorvida.
2. **Intestino:** pH 7,0 > pKa 3,5. Predomina **A⁻** (ionizada).
3. Por que cada distrator cai:
   - a) Inverteu a regra.
   - c) No intestino predomina a forma ionizada.
   - d) O pH decide a forma predominante.
   - e) Metade/metade só quando pH = pKa.

**Gabarito: B**

---

## Questão 14 (Padrão P59: comparar constantes de equilíbrio)

### O que você precisa saber antes de fazer essa questão
- **Constante de acidez (Ka):** quanto **maior** o Ka, mais o ácido se ioniza e mais forte ele é (mais H₃O⁺ na mesma concentração, pH menor).
- **Constante de basicidade (Kb):** quanto maior, mais forte a base (mais OH⁻). Em Ele 43, para remover gases ácidos, escolhe-se a espécie com o **maior K** na equação que gera OH⁻.
- **Comparar potências de 10:** 7,4 × 10⁻⁴ > 1,8 × 10⁻⁴ > 1,8 × 10⁻⁵ > 5,8 × 10⁻¹⁰. Quanto **menos negativo** o expoente, maior o número.
- **Pegadinha:** olhar o número da frente (1,8 ou 7,4) e esquecer o expoente.

### Questão
Uma indústria de alimentos precisa escolher um acidulante que, na mesma concentração em mol/L, deixe a bebida com o **menor pH** possível. O quadro mostra as constantes de ionização (a 25 °C) dos ácidos disponíveis:

| Ácido | Ka |
|---|---|
| Acético | 1,8 × 10⁻⁵ |
| Bórico | 5,8 × 10⁻¹⁰ |
| Cítrico | 7,4 × 10⁻⁴ |
| Fórmico | 1,8 × 10⁻⁴ |
| Lático | 1,4 × 10⁻⁴ |

O acidulante escolhido deve ser o ácido
- a) acético.
- b) bórico.
- c) cítrico.
- d) fórmico.
- e) lático.

### Resolução passo a passo
1. **Menor pH** = mais H₃O⁺ = ácido **mais forte** = **maior Ka**.
2. **Comparando:**
   - Expoente −4: cítrico (7,4), fórmico (1,8), lático (1,4). O maior é 7,4 × 10⁻⁴.
   - Expoentes −5 e −10 são bem menores.
3. **Maior Ka: ácido cítrico.**
4. Por que cada distrator cai:
   - a) e d) Têm o mesmo "1,8" na frente, mas expoentes diferentes; nenhum supera 7,4 × 10⁻⁴.
   - b) É o mais fraco (o expoente −10 engana quem olha só o número da frente).
   - e) 1,4 × 10⁻⁴ < 7,4 × 10⁻⁴.

**Gabarito: C**

---

## Questão 15 (Padrão P60: condutividade elétrica de soluções)

### O que você precisa saber antes de fazer essa questão
- **Conduz corrente elétrica** quem tem **íons livres** em solução.
- **Brilho intenso** (eletrólito forte, muito dissolvido e muito ionizado):
  - ácidos fortes: HCl, HNO₃, H₂SO₄, HClO₄;
  - bases fortes solúveis: NaOH, KOH;
  - sais solúveis: NaCl, KCl, KNO₃.
- **Brilho fraco:** ácidos e bases fracos (ácido acético, H₃BO₃, NH₃), que se ionizam pouco.
- **Brilho fraco ou nenhum:** substâncias **pouco solúveis** (AgCl, AgBr, Mg(OH)₂, CaSO₄), porque quase não há íons dissolvidos.
- **Não conduz:** compostos moleculares que não se ionizam (açúcar, glicose, etanol).
- **Ele 54:** só o kit com HClO₄, NaOH e NaCl tem as três soluções fortes. **Ele 40:** a glicose é não eletrólito.

### Questão
Em um experimento de condutividade, uma lâmpada foi ligada a dois eletrodos mergulhados, sucessivamente, em cinco amostras de mesma concentração (0,1 mol/L ou, para sólidos pouco solúveis, uma suspensão em água):

- I. Sacarose
- II. Ácido acético
- III. Ácido clorídrico
- IV. Cloreto de prata
- V. Etanol

A lâmpada acendeu com brilho intenso apenas na(s) amostra(s)
- a) I e V.
- b) II e III.
- c) III.
- d) III e IV.
- e) II, III e IV.

### Resolução passo a passo
1. **I. Sacarose e V. etanol:** moleculares, não se ionizam. Não acendem.
2. **II. Ácido acético:** ácido fraco, ioniza pouco. Brilho **fraco**.
3. **III. HCl:** ácido forte, totalmente ionizado. **Brilho intenso.**
4. **IV. AgCl:** sal, mas **muito pouco solúvel**: quase não há íons livres. Brilho fraco ou nenhum.
5. Por que cada distrator cai:
   - a) Não eletrólitos.
   - b) e e) Incluem o ácido acético (fraco).
   - d) e e) Incluem o AgCl (pouco solúvel).

**Gabarito: C**

---

## Balanço da Lista 4

| Questão | Padrão |
|---|---|
| 1 | P45: Montagem de pilhas em série |
| 2 | P46: Pilha × eletrólise |
| 3 | P47: Célula a combustível e conversão de energia |
| 4 | P48: Escolher tecnologia por critérios de quadro |
| 5 | P49: Funcionamento interno (ponte salina) |
| 6 | P50: Eletrólise aquosa do NaCl |
| 7 | P51: Eletrólise ígnea do alumínio |
| 8 | P52: Eletrólise em dispositivo (polo + é ânodo) |
| 9 | P54: Refino eletrolítico |
| 10 | P55: Metal de sacrifício |
| 11 | P56: Proteção por barreira |
| 12 | P57: Fatores que aceleram a corrosão |
| 13 | P58: pH × pKa |
| 14 | P59: Comparar constantes de equilíbrio |
| 15 | P60: Condutividade elétrica |

- Padrões abordados nesta lista: **15**
- Padrões abordados no total: **60 de 63**
- **Restam: 3 padrões**

Padrões restantes: P61, P62, P63.
