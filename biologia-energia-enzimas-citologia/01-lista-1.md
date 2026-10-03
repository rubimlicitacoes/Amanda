# Lista 1: 15 questões inéditas (padrões P1, P2, P3, P7, P8, P10, P12, P16, P20, P21, P26, P38, P43, P48, P52)

> Estrutura de cada questão: **O que você precisa saber antes de fazer essa questão** → enunciado → **resolução passo a passo** → **como reconhecer esse padrão na prova**.

---

## Questão 1 (Padrão P1: desacopladores do gradiente de prótons)

### O que você precisa saber antes de fazer essa questão
**Onde e como o ATP é feito na respiração aeróbia**

| Etapa | Local | Saldo principal |
|---|---|---|
| Glicólise | citosol | 2 ATP + 2 NADH + 2 piruvato |
| Ciclo de Krebs | matriz mitocondrial | NADH, FADH₂ e CO₂ (o CO₂ da respiração sai daqui) |
| Cadeia respiratória + fosforilação oxidativa | membrana interna da mitocôndria | a maior parte do ATP (≈ 30 a 38 por glicose) |

**O mecanismo (quimiosmose), em 4 passos:**
1. NADH e FADH₂ entregam elétrons à cadeia de transportadores.
2. Enquanto os elétrons passam, os complexos **bombeiam H⁺ da matriz para o espaço intermembranas**.
3. Forma-se um **gradiente de prótons** (muito H⁺ fora, pouco dentro), como água acumulada numa represa.
4. O H⁺ só volta para a matriz pela **ATP sintase**, que gira e produz ATP. No fim da cadeia, o **O₂ recebe os elétrons** e forma água.

**Desacoplador** (DNP, termogenina da gordura marrom, toxinas formadoras de poros) abre um "atalho" para o H⁺ voltar **sem passar pela ATP sintase**:
- a cadeia **continua funcionando** (até acelera);
- o **consumo de O₂ continua ou aumenta**;
- a **produção de ATP cai**;
- a energia do gradiente é **liberada como calor**;
- com pouco ATP, a célula **queima mais glicose e gordura** (por isso o DNP emagrece e é perigoso).

| | Bloqueador (cianeto, CO) | Desacoplador (DNP, termogenina) |
|---|---|---|
| Fluxo de elétrons | para | continua |
| Consumo de O₂ | cai | mantém ou aumenta |
| ATP | cai | cai |
| Calor | não aumenta | **aumenta** |

### Questão
Pesquisadores isolaram de um fungo uma toxina que se insere na membrana interna das mitocôndrias e forma pequenos poros, pelos quais os íons H⁺ atravessam livremente do espaço intermembranas para a matriz. Camundongos expostos a doses baixas da toxina apresentaram aumento da temperatura corporal, aumento do consumo de oxigênio e perda de massa corporal, mesmo sem alteração na dieta.

Os efeitos observados nos camundongos ocorrem porque a toxina
- a) inibe a citocromo c oxidase, impedindo a formação de água ao final da cadeia respiratória.
- b) bloqueia o ciclo de Krebs, reduzindo a produção de NADH na matriz mitocondrial.
- c) dissipa o gradiente de prótons, fazendo com que a energia da cadeia respiratória seja liberada como calor em vez de ser usada na síntese de ATP.
- d) estimula a ATP sintase, aumentando o estoque de ATP e a atividade metabólica das células.
- e) impede a entrada do piruvato na mitocôndria, desviando a glicose para a fermentação lática.

### Resolução passo a passo
1. **Pista do texto:** "H⁺ atravessam livremente para a matriz". O H⁺ está voltando por fora da ATP sintase, então é um **desacoplador**.
2. **Consequência no ATP:** o gradiente se desfaz, a ATP sintase fica sem "correnteza" e **o ATP cai**.
3. **Calor:** a energia que seria guardada no ATP é dissipada como calor, o que explica a temperatura maior.
4. **Consumo de O₂ maior:** com pouco ATP, a célula acelera a oxidação de nutrientes. Isso gera mais NADH, a cadeia trabalha mais e o O₂ (aceptor final) é mais consumido.
5. **Perda de massa:** reservas (gordura) são queimadas para tentar repor o ATP.
6. Por que cada distrator cai:
   - a) É o efeito do cianeto. Com a cadeia bloqueada, o consumo de O₂ **cairia**, e o texto diz que aumentou.
   - b) Krebs bloqueado diminuiria o consumo de O₂ (falta NADH para a cadeia).
   - d) Contraria o mecanismo: sem gradiente, a ATP sintase **para**.
   - e) Fermentação não explica o aumento do consumo de O₂.

**Gabarito: C**

**Como reconhecer esse padrão na prova:** "prótons retornam à matriz sem passar pela ATP sintase", "emagrecedor", "calor", "hibernação". Pense em desacoplador: ATP cai, calor sobe, nutrientes são mais consumidos.

---

## Questão 2 (Padrão P2: bloqueio da cadeia respiratória)

### O que você precisa saber antes de fazer essa questão
**A cadeia é uma fila de transportadores:**

```
NADH → Complexo I → Q → Complexo III → citocromo c → Complexo IV (citocromo c oxidase) → O₂ → H₂O
           ↑
FADH₂ → Complexo II (entra um pouco depois do complexo I)
```

**Regra do engarrafamento:** se um ponto da fila é bloqueado,
- tudo que está **antes** do bloqueio fica **acumulado na forma reduzida** (cheio de elétrons): NADH, FADH₂, transportadores anteriores;
- tudo que está **depois** fica **em falta**: água formada, consumo de O₂, gradiente de H⁺ e **ATP**.

**Efeito em cascata:** com NADH acumulado, falta NAD⁺ para a glicólise continuar. A célula passa a fazer **fermentação lática**, que regenera NAD⁺, e o **ácido lático aumenta**.

| Inibidor | Onde bloqueia |
|---|---|
| Rotenona (inseticida/piscicida) | Complexo I |
| Antimicina A | Complexo III |
| Cianeto, monóxido de carbono, azida | Complexo IV (citocromo c oxidase) |
| Oligomicina | ATP sintase |

### Questão
A rotenona, substância extraída de raízes de plantas como o timbó, era usada por povos indígenas para a pesca, pois provoca a morte dos peixes. Ela se liga ao complexo I da cadeia respiratória, enzima que recebe os elétrons provenientes do NADH, impedindo que esses elétrons sigam para os demais transportadores da cadeia.

Nas células musculares dos peixes expostos à rotenona, espera-se encontrar
- a) aumento da concentração de NADH na matriz mitocondrial e de ácido lático no citosol.
- b) aumento do consumo de O₂ pela citocromo c oxidase.
- c) aumento da síntese de ATP pela ATP sintase.
- d) diminuição da concentração de NADH, que seria oxidado mais rapidamente.
- e) aumento da produção de água ao final da cadeia respiratória.

### Resolução passo a passo
1. **Localize o bloqueio:** complexo I, o primeiro da fila, que recebe elétrons do NADH.
2. **Antes do bloqueio:** o NADH não consegue entregar seus elétrons, logo **acumula**.
3. **Depois do bloqueio:** os elétrons não chegam ao O₂. **Cai** o consumo de O₂, a formação de água, o gradiente e o ATP.
4. **Efeito em cascata:** sem NAD⁺ disponível e com pouco ATP, a célula recorre à **fermentação lática**, e o ácido lático aumenta.
5. Por que cada distrator cai:
   - b), c) e e) São etapas **depois** do bloqueio, então diminuem.
   - d) Inverte a regra: quem está antes do bloqueio **acumula**.
6. Observação: o FADH₂ entra pelo complexo II e ainda mantém um fluxo pequeno, mas não compensa a perda. A tendência geral continua sendo NADH alto e ATP baixo.

**Gabarito: A**

**Como reconhecer esse padrão na prova:** o texto diz **onde** a substância se liga e pergunta o que "aumenta" ou "diminui". Desenhe a fila e aplique: antes acumula, depois falta.

---

## Questão 3 (Padrão P3: mitocôndria ↔ ATP)

### O que você precisa saber antes de fazer essa questão
- **Glicólise** acontece no **citosol**, não precisa de O₂ nem de mitocôndria e rende **2 ATP** por glicose.
- **Ciclo de Krebs + cadeia respiratória** acontecem na **mitocôndria**, precisam de O₂ e rendem a maior parte do ATP (≈ 30 a 38 por glicose; o ENEM costuma usar 36 ou 38).
- **Sem O₂ ou com mitocôndria defeituosa**, sobra só a glicólise (2 ATP). O piruvato vira **lactato** (fermentação lática).
- Se o rendimento de uma célula caiu de ≈ 30 para ≈ 2 ATP, **a mitocôndria parou** (a glicólise continua funcionando).

**Células que mais dependem de mitocôndrias:** músculos (esqueléticos e cardíaco), neurônios e espermatozoides (as mitocôndrias ficam na peça intermediária, para o batimento do flagelo).

**Causas comuns de ATP baixo na prova:** metais pesados (cádmio), mutação no DNA mitocondrial, falta de O₂ (a EPO aumenta as hemácias, o transporte de O₂ e o ATP), drogas.

### Questão
Miopatias mitocondriais são doenças que causam fadiga muscular intensa e acúmulo de ácido lático no sangue, mesmo em repouso. Para investigar o mecanismo, pesquisadores cultivaram células musculares em três condições e mediram o rendimento energético.

| Cultura | Condição | ATP produzido por glicose consumida | Consumo de O₂ |
|---|---|---|---|
| I | glicose + O₂ | 30 | normal |
| II | glicose + O₂ + droga X | 2 | quase nulo |
| III | glicose, sem O₂ | 2 | nulo |

A droga X compromete diretamente o funcionamento de qual estrutura celular?
- a) Ribossomos.
- b) Retículo endoplasmático liso.
- c) Complexo golgiense.
- d) Mitocôndrias.
- e) Lisossomos.

### Resolução passo a passo
1. **Compare II com I:** há O₂ disponível, mas o rendimento caiu de 30 para 2 ATP e a célula quase não consome O₂.
2. **Compare II com III:** o rendimento é o mesmo da cultura sem O₂. A célula com droga se comporta como se não houvesse oxigênio.
3. **O que sobrou?** Os 2 ATP vêm da glicólise (citosol), que continua funcionando. O que parou foi a etapa que **usa O₂ e rende muito ATP**: Krebs + cadeia respiratória, na **mitocôndria**.
4. **Ligação com a doença:** sem mitocôndria funcional, o piruvato vira lactato, daí o ácido lático no sangue e a fadiga (pouco ATP para contrair o músculo).
5. Por que cada distrator cai:
   - a) Ribossomos fazem proteínas, não ATP.
   - b) RE liso sintetiza lipídios e faz desintoxicação.
   - c) Golgi empacota e secreta.
   - e) Lisossomos fazem digestão intracelular.

**Gabarito: D**

**Como reconhecer esse padrão na prova:** tabela ou texto com "rendimento energético", "kcal/mol", "2 ATP × 38 ATP", "falha na cadeia respiratória". A organela em jogo é sempre a mitocôndria, e a consequência é ATP baixo.

---

## Questão 4 (Padrão P7: fermentação alcoólica identificada pelo produto)

### O que você precisa saber antes de fazer essa questão
**Fermentação alcoólica (leveduras, como *Saccharomyces cerevisiae*):**

```
Glicose → (glicólise) → 2 Piruvato → (descarboxilação: sai CO₂) → 2 Acetaldeído → (recebe H do NADH) → 2 Etanol
C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ + 2 ATP
```

- Acontece **sem O₂** (a levedura é anaeróbia facultativa: com O₂ ela respira).
- Rende **2 ATP** por glicose (só os da glicólise).
- A etapa final serve para **regenerar NAD⁺**, que mantém a glicólise funcionando.

| Aplicação | Produto que interessa |
|---|---|
| Pão (fermento biológico) | **CO₂**: as bolhas fazem a massa crescer; o etanol evapora no forno |
| Cerveja, vinho, cachaça, etanol combustível | **etanol** |
| Espumante, dorna fechada | o **CO₂** acumula e gera **pressão** (precisa ser liberado ou contido) |

**Pegadinhas:**
- A fermentação **lática** não libera gás.
- A levedura não libera O₂ (ela consome).
- Na fermentação, a etapa biológica é a que tem micro-organismo agindo (filtrar, ferver e pasteurizar são etapas físicas).

### Questão
No método tradicional de produção de espumantes, um vinho já pronto é engarrafado com pequena quantidade de açúcar e de leveduras, e a garrafa é hermeticamente fechada. Após algumas semanas, formam-se as bolhas características da bebida e a pressão interna chega a cerca de 6 atmosferas, o que exige garrafas de vidro mais espesso que as de vinhos comuns.

O aumento de pressão dentro da garrafa é consequência da
- a) produção de ácido lático por bactérias, que acidifica a bebida e libera gases.
- b) liberação de gás carbônico na descarboxilação do piruvato, durante a fermentação alcoólica realizada pelas leveduras.
- c) liberação de gás oxigênio pela respiração aeróbia das leveduras.
- d) evaporação do etanol formado durante a glicólise.
- e) produção de vapor d'água pela respiração aeróbia das leveduras.

### Resolução passo a passo
1. **Ambiente:** a garrafa está fechada, então o pouco O₂ acaba logo. A levedura passa a **fermentar**.
2. **Qual fermentação?** Levedura + açúcar faz **alcoólica**.
3. **Qual produto é gás?** O **CO₂**, liberado quando o piruvato perde um carbono (descarboxilação). Em sistema fechado, o gás acumula e a pressão sobe.
4. Por que cada distrator cai:
   - a) A fermentação lática **não libera gás**, e quem age aqui são leveduras.
   - c) Leveduras **consomem** O₂, nunca liberam.
   - d) O etanol se forma **depois** da glicólise (na fermentação), e fica dissolvido no líquido.
   - e) Sem O₂ não há respiração aeróbia, e água não gera essa pressão.

**Gabarito: B**

**Como reconhecer esse padrão na prova:** "fermento", "massa cresce", "bolhas", "dorna", "pressão", "levedura". A resposta é fermentação alcoólica, e o gás é o CO₂.

---

## Questão 5 (Padrão P8: fermentação lática)

### O que você precisa saber antes de fazer essa questão
**Fermentação lática:**

```
Glicose → (glicólise) → 2 Piruvato → (recebe H do NADH) → 2 Ácido lático (lactato)
```

- **Não há descarboxilação**: não sai CO₂, **não há gás**.
- Rende **2 ATP** por glicose.
- **Quem faz:** bactérias láticas (*Lactobacillus*, *Streptococcus*), células musculares em esforço intenso (falta O₂) e hemácias (não têm mitocôndria).

| Situação | Papel do ácido lático |
|---|---|
| Iogurte, coalhada, queijos | baixa o pH e coagula a caseína (proteína do leite) |
| Chucrute, picles, azeitona | o meio ácido impede micro-organismos que estragam o alimento (conservação) |
| Cárie | bactérias da placa fermentam o açúcar; o ácido desmineraliza o esmalte |
| Músculo em exercício intenso | o lactato acumula no sangue |

**Comparação rápida:**

| | Alcoólica | Lática | Acética |
|---|---|---|---|
| Organismo | levedura | lactobacilos | *Acetobacter* |
| Precisa de O₂? | não | não | **sim** |
| Produto | etanol + CO₂ | ácido lático | ácido acético (vinagre) |
| Gás? | sim | não | não |

### Questão
O chucrute é um alimento tradicional preparado com repolho fatiado e sal, deixado em recipiente fechado, sem contato com o ar. Após alguns dias, o repolho adquire sabor azedo, o pH cai para cerca de 3,5 e o alimento pode ser conservado por meses sem uso de conservantes. O sal adicionado favorece o crescimento de certos grupos de bactérias naturalmente presentes nas folhas.

O sabor azedo e a conservação do chucrute resultam da
- a) fermentação alcoólica de leveduras, que produz etanol de ação antisséptica.
- b) respiração aeróbia das células do repolho, que libera CO₂ e acidifica o meio.
- c) fermentação acética de bactérias, que produz ácido acético na presença de oxigênio.
- d) desidratação do repolho pelo sal, que concentra os ácidos naturais da planta.
- e) fermentação lática de bactérias, cujo produto diminui o pH e inibe micro-organismos deterioradores.

### Resolução passo a passo
1. **Pistas:** recipiente fechado (sem O₂), **bactérias**, sabor **azedo**, pH baixo.
2. Bactéria em ambiente sem O₂ que acidifica: **fermentação lática**.
3. **Por que conserva:** o ácido lático deixa o meio tão ácido que os micro-organismos que estragam o alimento não se multiplicam.
4. Por que cada distrator cai:
   - a) Etanol não deixa o sabor azedo, e o texto fala de bactérias, não leveduras.
   - b) Sem O₂ não há respiração aeróbia, e CO₂ não baixaria o pH a 3,5.
   - c) A fermentação acética **exige O₂**, e o recipiente está fechado.
   - d) O sal tira água das células e seleciona as bactérias láticas, mas **não produz** o ácido. Quem produz são as bactérias.

**Gabarito: E**

**Como reconhecer esse padrão na prova:** "iogurte", "azedo", "lactobacilos", "cárie", "pH baixa", "sem gás". A resposta é fermentação lática.

---

## Questão 6 (Padrão P10: tipo metabólico pela relação com o O₂)

### O que você precisa saber antes de fazer essa questão
**Classificação pelo uso de O₂:**

| Tipo | Relação com O₂ | Onde cresce num tubo com meio semissólido (O₂ entra por cima) |
|---|---|---|
| Aeróbio estrito | precisa de O₂ (só respira) | só no **topo** |
| Anaeróbio estrito | o O₂ é **tóxico** | só no **fundo** |
| Anaeróbio facultativo | respira com O₂, fermenta sem | **tubo todo** (mais denso no topo, onde rende mais ATP) |
| Microaerófilo | precisa de pouco O₂ | faixa logo **abaixo** da superfície |

**Fermentação acética** (*Acetobacter*): etanol + O₂ → ácido acético + água. Apesar do nome "fermentação", **usa O₂**. Por isso a "mãe do vinagre" (véu de bactérias) se forma **na superfície** do vinho, onde há ar, e a produção de vinagre usa tanques abertos ou aerados.

### Questão
Três espécies de bactérias foram cultivadas em tubos com o mesmo meio nutritivo semissólido. O oxigênio do ar penetra no meio apenas pela superfície. Após 48 horas, observou-se o seguinte padrão de crescimento (• = colônias):

```
             Tubo 1      Tubo 2      Tubo 3
superfície |        |  | ••••••• | | ••••••• |
           |        |  | •••••   | |         |
   meio    |        |  | •••     | |         |
           |        |  | ••      | |         |
  fundo    | •••••• |  | ••      | |         |
```

Uma indústria quer escolher uma dessas espécies para produzir vinagre a partir de vinho em tanques abertos. Sabe-se que essa conversão consome oxigênio e que a espécie ideal não deve crescer na ausência dele.

As espécies dos tubos 1, 2 e 3 e o tubo da espécie adequada à indústria são, respectivamente:
- a) aeróbia estrita, facultativa e anaeróbia estrita; tubo 1.
- b) anaeróbia estrita, aeróbia estrita e facultativa; tubo 2.
- c) anaeróbia estrita, facultativa e aeróbia estrita; tubo 3.
- d) facultativa, anaeróbia estrita e aeróbia estrita; tubo 2.
- e) anaeróbia estrita, facultativa e aeróbia estrita; tubo 1.

### Resolução passo a passo
1. **Tubo 1:** cresce só no fundo, longe do O₂. O O₂ é tóxico para ela: **anaeróbia estrita**.
2. **Tubo 2:** cresce no tubo todo, mais denso no topo. Vive com e sem O₂: **facultativa**.
3. **Tubo 3:** cresce só na superfície. Precisa de O₂: **aeróbia estrita**.
4. **Indústria:** a fermentação acética consome O₂, e a espécie "não deve crescer sem ele", ou seja, é aeróbia estrita: **tubo 3** (o mesmo padrão do véu da "mãe do vinagre").
5. Por que cada distrator cai:
   - a) e d) Classificam os tubos de forma trocada.
   - b) Inverte o tubo 2 com o 3.
   - e) A classificação está certa, mas escolhe o tubo errado: a espécie do tubo 1 morreria com o O₂ do tanque aberto.

**Gabarito: C**

**Como reconhecer esse padrão na prova:** tubos com pontinhos em posições diferentes, "véu na superfície", "anaeróbio". Leia o tubo como um mapa do O₂: o topo tem O₂ e o fundo não tem.

---

## Questão 7 (Padrão P12: etapas da fotossíntese)

### O que você precisa saber antes de fazer essa questão
**Fotossíntese:** 6 CO₂ + 12 H₂O + luz → C₆H₁₂O₆ + 6 O₂ + 6 H₂O

| | Fase clara (fotoquímica) | Fase escura (química, ciclo de Calvin) |
|---|---|---|
| Local | membrana dos **tilacoides** | **estroma** do cloroplasto |
| Precisa de | **luz**, **água**, clorofila, ADP, NADP⁺ | **CO₂**, ATP e NADPH (vindos da fase clara) |
| Produz | **ATP**, **NADPH** e **O₂** | **açúcar** (triose-fosfato → glicose), ADP e NADP⁺ |
| Eventos-chave | a luz excita elétrons da clorofila (fotossistemas II e I); a **fotólise da água** repõe esses elétrons e libera O₂ | fixação do CO₂ pela rubisco |

**Dependência:** a fase escura não usa luz diretamente, mas **para quando acabam o ATP e o NADPH** da fase clara. Por isso, bloquear a fase clara acaba parando tudo.

**Raciocínio experimental:**
- Sem luz ou com o fluxo de elétrons bloqueado: param O₂, ATP e NADPH, e logo depois a fixação de CO₂.
- Sem CO₂: a fase escura para e o ATP e o NADPH se acumulam.

### Questão
Herbicidas do grupo das ureias substituídas, como o diuron, ligam-se a uma proteína do fotossistema II, nas membranas dos tilacoides, e impedem que os elétrons excitados pela luz sejam transferidos para os demais transportadores da cadeia fotossintética.

Uma planta tratada com esse herbicida e mantida sob iluminação, com água e CO₂ em abundância, apresentará
- a) interrupção da liberação de O₂ e da produção de ATP e NADPH, comprometendo em seguida a fixação de CO₂.
- b) aumento da fixação de CO₂, pois sobra mais energia luminosa para o ciclo de Calvin.
- c) interrupção apenas da fixação de CO₂ no estroma, mantendo a liberação de O₂.
- d) aumento da liberação de O₂, pois a água passa a ser quebrada mais rapidamente.
- e) manutenção da fotossíntese, já que a fase química independe da luz.

### Resolução passo a passo
1. **Onde o herbicida atua:** fotossistema II, nos tilacoides, ou seja, na **fase clara**.
2. **Efeito direto:** os elétrons não fluem. A água deixa de ser quebrada para repor elétrons, então **para a liberação de O₂**. Também **param o ATP e o NADPH**.
3. **Efeito em cascata:** sem ATP e NADPH, o ciclo de Calvin (estroma) **para** e o CO₂ deixa de ser fixado. A planta morre por falta de açúcar.
4. Por que cada distrator cai:
   - b) Energia luminosa só vira energia química **se houver fluxo de elétrons**.
   - c) A liberação de O₂ é justamente o que para primeiro.
   - d) Com os elétrons travados, o fotossistema II não precisa de reposição e a fotólise para.
   - e) A fase química depende dos produtos da fase clara.

**Gabarito: A**

**Como reconhecer esse padrão na prova:** "tilacoides", "fotossistema", "luz e água", "ATP e NADPH", "fixação de carbono". Separe as duas fases numa tabelinha e veja em qual delas o problema acontece.

---

## Questão 8 (Padrão P16: fluxo de energia)

### O que você precisa saber antes de fazer essa questão
- **A fonte de energia de quase toda a vida é o Sol.** Os produtores convertem energia luminosa em **energia química** (carboidratos) pela fotossíntese.
- **Só produtores** (plantas, algas, fitoplâncton e bactérias fotossintetizantes ou quimiossintetizantes) transformam carbono **inorgânico** (CO₂) em **orgânico**.
- Em cada nível trófico, a maior parte da energia é **gasta na respiração** (manter o próprio metabolismo, movimento, calor) e **não passa adiante**. Só cerca de 10% chega ao nível seguinte.
- **Energia flui** (é unidirecional e se perde como calor). **Matéria cicla** (os decompositores devolvem CO₂ e minerais).
- **Combustíveis fósseis e biomassa** são energia solar armazenada por fotossíntese antiga ou atual.

```
Sol → produtor → consumidor 1 → consumidor 2
         ↓             ↓              ↓
    calor (respiração em cada nível: energia que sai e não volta)
```

### Questão
Em uma aula sobre ecologia, um estudante afirmou que, ao comer um bife, estava aproveitando "a energia que o boi tirou do capim, que por sua vez a tirou do solo". O professor corrigiu parte da afirmação e propôs que a turma analisasse a cadeia alimentar capim → boi → ser humano.

Sobre a energia nessa cadeia, é correto afirmar que a energia química do bife
- a) é reciclada pelos decompositores e retorna ao capim, fechando um ciclo.
- b) corresponde a toda a energia química que o boi obteve ao comer o capim.
- c) foi obtida do solo pelas raízes do capim e armazenada nos carboidratos.
- d) tem origem na luz solar e corresponde a uma pequena parte dela, pois grande parte foi dissipada como calor pela respiração do capim e do boi.
- e) é maior que a do capim, pois o ser humano ocupa o último nível da cadeia.

### Resolução passo a passo
1. **Origem:** o capim faz fotossíntese, convertendo **luz solar** em energia química. Do solo vêm água e minerais, **não energia**. A afirmação do estudante erra aqui.
2. **Perda em cada nível:** o capim gasta parte da energia na própria respiração; o boi gasta muito mais (andar, manter a temperatura, digerir). Só uma fração vira carne.
3. **Fluxo, não ciclo:** a energia dissipada como calor **não volta** para a cadeia.
4. Por que cada distrator cai:
   - a) Quem cicla é a **matéria**. A energia flui num sentido só.
   - b) A maior parte da energia foi perdida na respiração do boi.
   - c) O solo fornece minerais e água, não energia. É o mesmo erro corrigido por van Helmont (Q105).
   - e) A energia **diminui** a cada nível.

**Gabarito: D**

**Como reconhecer esse padrão na prova:** "energia luminosa → química", "parte da energia fica indisponível", "fonte primária", "biomassa", "combustível fóssil". Origem = Sol; perda = respiração.

---

## Questão 9 (Padrão P20: enzima digestiva identificada por substrato + pH)

### O que você precisa saber antes de fazer essa questão
**Tabela das enzimas digestivas:**

| Enzima | Produzida por | Atua em | pH ótimo | Substrato → produto |
|---|---|---|---|---|
| Amilase salivar (ptialina) | glândulas salivares | boca | ≈ 7 | amido → maltose |
| **Pepsina** | estômago | estômago | **≈ 2** (ácido, por causa do HCl) | proteínas → peptídeos |
| **Tripsina / quimotripsina** | **pâncreas** | intestino delgado | **≈ 8** (básico, por causa do bicarbonato) | proteínas → peptídeos |
| Amilase pancreática | pâncreas | intestino delgado | ≈ 8 | amido → maltose |
| Lipase pancreática | pâncreas | intestino delgado | ≈ 8 | lipídios → ácidos graxos + glicerol |
| Maltase, sacarase, lactase, peptidases | intestino delgado | intestino delgado | ≈ 8 | dissacarídeos/peptídeos → monômeros |

**Atenção:**
- O **fígado** produz **bile**, que **não é enzima**: só emulsifica gordura. A **vesícula** apenas armazena a bile.
- Cada enzima é **específica** para um substrato (modelo chave-fechadura). A pepsina não digere amido.

**Método:**
1. Qual alimento foi digerido? Isso diz o **substrato**.
2. Em que pH? Isso diz o **local**.
3. Cruze os dois dados com a tabela.

### Questão
Uma enzima foi extraída de um órgão do sistema digestório humano e distribuída em quatro tubos de ensaio, todos mantidos a 37 °C por duas horas. Os resultados estão no quadro.

| Tubo | Alimento | pH do meio | Resultado |
|---|---|---|---|
| 1 | clara de ovo cozida | 2 | não digerida |
| 2 | clara de ovo cozida | 8 | digerida |
| 3 | amido cozido | 8 | não digerido |
| 4 | azeite de oliva | 8 | não digerido |

A enzima testada e o órgão que a produz são, respectivamente,
- a) pepsina, produzida pelo estômago.
- b) tripsina, produzida pelo pâncreas.
- c) amilase, produzida pelas glândulas salivares.
- d) lipase, produzida pelo fígado.
- e) bile, produzida pela vesícula biliar.

### Resolução passo a passo
1. **Substrato:** só a clara de ovo (proteína) foi digerida. Amido (carboidrato) e azeite (lipídio) não foram. A enzima é uma **protease**.
2. **pH:** funcionou em pH 8 e não em pH 2, então atua em **meio básico**, ou seja, no intestino delgado.
3. **Protease de meio básico:** tripsina (ou quimotripsina), **produzida pelo pâncreas** e lançada no intestino.
4. Por que cada distrator cai:
   - a) A pepsina funcionaria em pH 2 (tubo 1).
   - c) A amilase teria digerido o amido.
   - d) A lipase teria digerido o azeite, e quem a produz é o pâncreas, não o fígado.
   - e) Bile não é enzima, e é produzida pelo fígado.
5. **Variação do padrão (Q64):** se a enzima é dada (pepsina, por exemplo), escolha o alimento com **mais proteína** na tabela.

**Gabarito: B**

**Como reconhecer esse padrão na prova:** tubos de ensaio com alimentos diferentes + pH + "digestão ocorreu só no tubo X". Use substrato + pH para chegar à enzima e ao órgão.

---

## Questão 10 (Padrão P21: temperatura/pH e desnaturação)

### O que você precisa saber antes de fazer essa questão
- **Enzima = proteína catalisadora.** Ela **diminui a energia de ativação**, acelerando a reação, e **não é consumida**.
- O **sítio ativo** se encaixa no substrato graças à **estrutura tridimensional** da proteína, mantida por ligações fracas (de hidrogênio, iônicas) e pontes dissulfeto.

**Temperatura:**
```
atividade
   |         ótimo
   |          /\
   |         /  \
   |        /    \   ← desnaturação (a forma 3D se perde, geralmente de modo irreversível)
   |_______/      \______
          temperatura
```
- **Abaixo do ótimo:** a atividade é baixa porque há menos colisões, mas a enzima **não é danificada**. Ao aquecer de volta, ela volta a funcionar (geladeira e congelador conservam alimentos assim).
- **Acima do ótimo:** **desnaturação**. O sítio ativo se deforma e não encaixa mais no substrato.

**pH:** cada enzima tem um pH ótimo (pepsina ≈ 2, tripsina ≈ 8). Fora dele, a carga dos aminoácidos muda e a forma também.

**Aplicação (branqueamento, Q104):** mergulhar o alimento em água fervente desnatura as enzimas (por exemplo, as que transformam glicose em amido ou escurecem vegetais). Depois, água gelada interrompe o cozimento.

### Questão
A enzima polifenoloxidase é responsável pelo escurecimento de batatas e maçãs cortadas. Para avaliar formas de inativá-la, um laboratório incubou amostras da enzima por 10 minutos em diferentes temperaturas. Em seguida, todas as amostras foram trazidas a 25 °C e sua atividade foi medida nas mesmas condições.

| Temperatura de pré-incubação (°C) | Atividade medida a 25 °C (%) |
|---|---|
| 5 | 100 |
| 25 | 100 |
| 45 | 95 |
| 65 | 10 |
| 85 | 0 |

A redução da atividade nas amostras pré-incubadas a 65 °C e 85 °C deve-se à
- a) consumo da enzima durante a reação, que se esgota mais rápido em temperaturas altas.
- b) aumento da energia de ativação da reação, provocado pelo calor.
- c) congelamento do sítio ativo, revertido quando a amostra retorna a 25 °C.
- d) diminuição da concentração do substrato, causada pela evaporação.
- e) alteração irreversível da estrutura tridimensional da enzima, que deforma o sítio ativo.

### Resolução passo a passo
1. **Detalhe do experimento:** todas as medidas foram feitas a **25 °C**. Se a perda fosse só "efeito do momento", ela teria sumido ao voltar a 25 °C.
2. **5 °C → 100%:** o frio não danifica a enzima. O efeito do frio é reversível.
3. **65 °C e 85 °C → 10% e 0%**, mesmo de volta a 25 °C: o dano é **permanente**. A estrutura 3D se desfez (**desnaturação**).
4. Por que cada distrator cai:
   - a) Enzimas não são consumidas na reação.
   - b) O calor não aumenta a energia de ativação. A enzima desnaturada simplesmente deixa de diminuí-la.
   - c) A 65 °C não há congelamento, e o dano **não foi revertido**.
   - d) O substrato foi adicionado na hora da medida, igual para todos os tubos.
5. **Aplicação prática:** branquear batatas a mais de 65 °C antes de congelar evita o escurecimento.

**Gabarito: E**

**Como reconhecer esse padrão na prova:** tabela ou gráfico de "atividade × temperatura (ou pH)", "água fervente", "choque térmico". A resposta é desnaturação, ou seja, mudança na estrutura tridimensional.

---

## Questão 11 (Padrão P26: vitamina A / betacaroteno → visão)

### O que você precisa saber antes de fazer essa questão
**Tabela das vitaminas mais cobradas:**

| Vitamina | Fontes | Função | Carência |
|---|---|---|---|
| **A** (retinol) | fígado, leite; **betacaroteno** (precursor) em cenoura, abóbora, manga, batata-doce alaranjada, folhas verde-escuras, arroz dourado | forma a **rodopsina** (pigmento dos bastonetes da retina); mantém os epitélios | **cegueira noturna** (nictalopia), xeroftalmia (olho e córnea ressecados) |
| D (calciferol) | **sol na pele**, peixes, ovos | absorção de **cálcio** e fósforo | raquitismo, osteomalácia |
| E (tocoferol) | óleos vegetais, castanhas | **antioxidante** | anemia, problemas neuromusculares |
| K | folhas verdes, bactérias intestinais | **coagulação** | hemorragias |
| C (ácido ascórbico) | frutas cítricas, acerola | colágeno, antioxidante | **escorbuto** (sangramento gengival) |
| B1 (tiamina) | cereais integrais | metabolismo de carboidratos | beribéri |
| B12 | carnes, ovos | formação de hemácias | **anemia perniciosa** |
| B9 (ácido fólico) | folhas verdes | divisão celular | anemia, defeitos do tubo neural |

- **Lipossolúveis:** A, D, E e K (absorvidas junto com gordura; acumulam no fígado).
- **Hidrossolúveis:** complexo B e C (o excesso sai na urina).
- **Truque de memória:** a cor **alaranjada** do alimento sugere betacaroteno, que leva à vitamina A e à visão.

### Questão
Um programa de biofortificação distribuiu mudas de batata-doce de polpa alaranjada para comunidades rurais onde era frequente encontrar crianças com dificuldade de enxergar ao entardecer e com ressecamento da superfície dos olhos. Após dois anos de consumo regular, houve redução significativa desses quadros.

O êxito do programa deve-se ao fato de a batata-doce de polpa alaranjada
- a) conter vitamina C, que estimula a produção de colágeno na córnea.
- b) ser rica em vitamina K, necessária para a coagulação e a cicatrização ocular.
- c) conter betacaroteno, convertido no organismo em vitamina A, que compõe os pigmentos visuais da retina.
- d) possuir ferro em abundância, que transporta oxigênio para os cones e bastonetes.
- e) fornecer vitamina D, que fixa cálcio nos ossos da órbita ocular.

### Resolução passo a passo
1. **Sintomas:** "dificuldade de enxergar ao entardecer" é **cegueira noturna**; "ressecamento dos olhos" é **xeroftalmia**. Os dois indicam falta de **vitamina A**.
2. **Alimento:** polpa alaranjada indica **betacaroteno** (pró-vitamina A). No intestino e no fígado, ele é convertido em vitamina A.
3. **Mecanismo:** a vitamina A forma o **retinal**, que compõe a **rodopsina** dos bastonetes, as células da visão com pouca luz.
4. Por que cada distrator cai:
   - a) A falta de vitamina C causa escorbuto (gengiva, cicatrização), não cegueira noturna.
   - b) A vitamina K atua na coagulação.
   - d) O ferro está ligado à anemia.
   - e) A vitamina D atua nos ossos e no cálcio, não na visão.

**Gabarito: C**

**Como reconhecer esse padrão na prova:** "betacaroteno", "carotenoides", "arroz dourado", "cenoura", "cegueira noturna", "fotorreceptores". A resposta é vitamina A.

---

## Questão 12 (Padrão P38: osmose em meio hipertônico)

### O que você precisa saber antes de fazer essa questão
- **Osmose:** passagem do **solvente (água)** por uma membrana semipermeável, do meio **menos concentrado** (hipotônico) para o **mais concentrado** (hipertônico).
- **Classificação do meio (sempre em relação à célula):**

| Meio externo | Célula animal / micro-organismo | Célula vegetal |
|---|---|---|
| Hipertônico | perde água e murcha (crenação) | plasmólise |
| Isotônico | sem mudança | sem mudança (flácida) |
| Hipotônico | ganha água, incha e pode estourar (hemólise) | túrgida (a parede impede a lise) |

- **Referência:** NaCl 0,15 mol/L (≈ 0,9%, soro fisiológico) é isotônico ao sangue. Uma solução de NaCl 0,20 mol/L é hipertônica, e a hemácia perde água (Q99).
- **Conservação de alimentos** (charque, bacalhau, compotas, geleias, desidratação osmótica): muito sal ou açúcar deixam o meio **hipertônico**. O micro-organismo **perde água**, desidrata e **não se reproduz**.
- **Pegadinha clássica:** não é o sal ou o açúcar que "entra e mata". Quem se move é a **água, saindo** da célula.

### Questão
Compotas e geleias de frutas são preparadas por cozimento em xarope com cerca de 65% de sacarose. Mesmo sem adição de conservantes químicos, esses produtos resistem por longos períodos à proliferação de fungos e bactérias, que, no entanto, crescem facilmente na fruta fresca.

O efeito conservante do xarope deve-se ao fato de ele
- a) ser hipertônico em relação às células dos micro-organismos, que perdem água por osmose e não conseguem se multiplicar.
- b) ser hipotônico em relação aos micro-organismos, que absorvem água até se romperem.
- c) fornecer sacarose que, ao entrar nas células microbianas por difusão, desnatura suas proteínas.
- d) impedir a entrada de oxigênio no frasco, matando todos os micro-organismos aeróbios.
- e) ser isotônico, o que paralisa as trocas de substâncias entre os micro-organismos e o meio.

### Resolução passo a passo
1. **Compare as concentrações:** xarope com 65% de açúcar contra o citoplasma do micro-organismo, bem menos concentrado. O meio externo é **hipertônico**.
2. **Para onde vai a água?** Do menos concentrado (célula) para o mais concentrado (xarope). A célula **perde água**.
3. **Consequência:** o micro-organismo desidratado não mantém o metabolismo nem se divide, e o alimento fica conservado.
4. Por que cada distrator cai:
   - b) Inverte a tonicidade (hipotônico faria a célula inchar).
   - c) O mecanismo é a **saída de água**, não a entrada de açúcar desnaturando proteínas.
   - d) Fungos e muitas bactérias não dependem disso, e o texto não fala de vedação.
   - e) Se o meio fosse isotônico não haveria desidratação, e os micro-organismos cresceriam normalmente.

**Gabarito: A**

**Como reconhecer esse padrão na prova:** "sal", "salgamento", "açúcar", "desidratação osmótica", "solução X mol/L comparada a 0,15 mol/L". Descubra qual lado é mais concentrado: a água vai para ele.

---

## Questão 13 (Padrão P43: identificar organela pela função ou descrição)

### O que você precisa saber antes de fazer essa questão
**Tabela de organelas e funções:**

| Estrutura | Função-chave | Pistas típicas no enunciado |
|---|---|---|
| Núcleo | guarda o DNA; transcrição | "material genético", "de onde retirar o gene" (Q109) |
| Nucléolo | produz RNA ribossômico | célula com muita síntese tem nucléolo grande |
| Ribossomo | síntese de proteínas | "tradução" |
| **RE rugoso** | síntese de proteínas para exportação ou membrana | "ribossomos aderidos", "células secretoras de enzimas" |
| **RE liso** | síntese de **lipídios e hormônios esteroides**; **desintoxicação** (fígado); reserva de Ca²⁺ no músculo | "sem ribossomos", "testosterona/estrogênio", "álcool/medicamentos", "fígado" |
| Complexo golgiense | modifica, empacota e secreta; forma lisossomos e o acrossomo | "vesículas de secreção", "polissacarídeos secretados" |
| Lisossomo | digestão intracelular, autofagia, autólise | "enzimas ácidas", "cauda do girino" |
| Peroxissomo | decompõe H₂O₂ (catalase); oxida ácidos graxos | "água oxigenada" |
| Mitocôndria | respiração aeróbia, ATP; DNA próprio | "fornalha", "energia", "origem bacteriana" |
| Cloroplasto | fotossíntese; DNA próprio | "energia luminosa" |
| Centríolo | origina cílios e flagelos | "9 trincas de microtúbulos" |

**Método para textos enigmáticos ou poéticos (Q26):** sublinhe cada pista, ligue cada uma a uma função e escolha a organela que reúne **todas** as pistas.

### Questão
Usuários crônicos de barbitúricos, uma classe de sedativos, desenvolvem tolerância ao medicamento, pois suas células hepáticas passam a degradá-lo cada vez mais rapidamente. Ao microscópio eletrônico, observa-se nessas células um grande aumento de uma rede de membranas sem ribossomos aderidos. Essa mesma estrutura é muito desenvolvida nas células dos testículos e dos ovários responsáveis pela produção de testosterona e estrogênio.

A estrutura celular descrita é o(a)
- a) retículo endoplasmático rugoso.
- b) complexo golgiense.
- c) lisossomo.
- d) retículo endoplasmático liso.
- e) peroxissomo.

### Resolução passo a passo
1. **Pista 1:** "rede de membranas" indica um sistema de membranas interligadas: **retículo endoplasmático**.
2. **Pista 2:** "sem ribossomos aderidos" indica que é o **liso** (o rugoso tem ribossomos).
3. **Pista 3:** degradar medicamentos no fígado é **desintoxicação**, função do RE liso.
4. **Pista 4:** testosterona e estrogênio são **hormônios esteroides** (lipídios), sintetizados no RE liso.
5. Por que cada distrator cai:
   - a) O RE rugoso tem ribossomos e faz proteínas.
   - b) O Golgi é formado por bolsas achatadas empilhadas e secreta, mas não desintoxica.
   - c) O lisossomo faz digestão intracelular.
   - e) O peroxissomo é uma vesícula isolada, não uma rede, e não produz esteroides.

**Gabarito: D**

**Como reconhecer esse padrão na prova:** o enunciado descreve funções sem dar o nome da organela ("fornalha", "rede sem ribossomos", "bloqueador do ciclo de Krebs"). Monte a lista de pistas e cruze com a tabela.

---

## Questão 14 (Padrão P48: citoesqueleto, actina × microtúbulos)

### O que você precisa saber antes de fazer essa questão
**Os três componentes do citoesqueleto:**

| Componente | Proteína | Funções | Drogas que afetam |
|---|---|---|---|
| **Microfilamentos** (os mais finos) | **actina** (com miosina) | contração muscular; **pseudópodes** (movimento amebóide, fagocitose); forma da célula (córtex); **citocinese** em célula animal (anel contrátil); ciclose; microvilosidades | citocalasina |
| **Microtúbulos** (os mais grossos) | **tubulina** | **fuso mitótico** (separa os cromossomos); **cílios e flagelos** (9 + 2); centríolos; transporte de vesículas | colchicina, vimblastina (impedem a montagem); paclitaxel/taxol (impede a desmontagem) |
| Filamentos intermediários | queratina, laminas e outras | resistência mecânica | (pouco cobrado) |

**Lógica experimental (Q6, Q89):** liste o que **parou** e o que **continuou** normal após a droga.
- Parou só o que depende de actina: a droga age **só na actina**.
- Parou só o que depende de microtúbulos: a droga age **só nos microtúbulos**.
- Se uma função de um componente continua normal, esse componente **não** foi afetado.

### Questão
Para investigar o alvo de uma nova droga, pesquisadores trataram três tipos celulares e observaram os seguintes efeitos:
- **Macrófagos:** deixaram de emitir pseudópodes e não conseguiram mais englobar bactérias.
- **Células ciliadas da traqueia:** o batimento dos cílios permaneceu normal.
- **Células em divisão:** as cromátides-irmãs se separaram normalmente na anáfase, mas as células não se dividiram ao final da mitose, formando células com dois núcleos.

Os resultados indicam que a droga atua sobre
- a) os microtúbulos apenas.
- b) os microfilamentos de actina apenas.
- c) os filamentos intermediários apenas.
- d) os microtúbulos e os microfilamentos de actina.
- e) os microtúbulos e os filamentos intermediários.

### Resolução passo a passo
1. **Pseudópodes e fagocitose pararam.** Eles dependem de **actina**, então a actina foi afetada.
2. **Cílios normais.** Cílios são **microtúbulos**, então os microtúbulos não foram afetados.
3. **Cromátides se separaram normalmente.** Quem separa é o fuso (**microtúbulos**), que funciona. Isso confirma o item 2.
4. **Citocinese falhou.** Em célula animal, a divisão do citoplasma é feita pelo **anel contrátil de actina e miosina**. Isso confirma o item 1.
5. **Conclusão:** só os **microfilamentos de actina** foram afetados.
6. Por que cada distrator cai:
   - a), d) e e) Os microtúbulos funcionam (cílios e fuso estão normais).
   - c) Filamentos intermediários não explicam a perda de pseudópodes nem a falha na citocinese.

**Gabarito: B**

**Como reconhecer esse padrão na prova:** "droga" + "deslocamento", "forma da célula", "ameba", "flagelo", "fuso". Monte a lista do que parou e do que continuou, e associe cada item ao componente correspondente.

---

## Questão 15 (Padrão P52: fuso mitótico e drogas antimitóticas)

### O que você precisa saber antes de fazer essa questão
**Fases da mitose (o que o ENEM cobra):**

| Fase | Evento-chave |
|---|---|
| Intérfase (G1, S, G2) | DNA se duplica (fase S); cromatina descondensada |
| Prófase | cromossomos começam a **condensar**; fuso se forma; envoltório nuclear se fragmenta |
| **Metáfase** | **condensação máxima**; cromossomos **alinhados na placa equatorial**, presos ao fuso pelo cinetócoro (melhor fase para o cariótipo) |
| Anáfase | cromátides-irmãs **separadas e puxadas** para os polos pelo encurtamento dos microtúbulos |
| Telófase + citocinese | núcleos se refazem; o citoplasma se divide |

**Fuso mitótico = microtúbulos** (tubulina), que precisam **montar e desmontar**.

| Droga | Efeito no fuso | Resultado |
|---|---|---|
| Colchicina, vimblastina, vincristina | **impedem a polimerização** (o fuso não se forma) | célula **parada em metáfase**, cromossomos condensados e **não alinhados** |
| Paclitaxel (taxol) | **impede a despolimerização** (o fuso não encurta) | cromossomos não se separam |

- **Uso no câncer:** células tumorais se dividem muito, então são as mais atingidas.
- **Efeitos colaterais:** atingem também tecidos normais de **divisão rápida** (folículos capilares, mucosa intestinal, medula óssea). Daí a queda de cabelo, as lesões na boca e no intestino e a baixa imunidade.
- **Micronúcleos (Q79):** cromossomos ou fragmentos que ficaram para trás no fuso formam pequenos núcleos extras.

### Questão
Na preparação de cariótipos humanos, adiciona-se colchicina às culturas de linfócitos algumas horas antes da análise ao microscópio. Fármacos com mecanismo de ação semelhante, como os alcaloides da vinca, são usados na quimioterapia contra o câncer, e os pacientes tratados frequentemente apresentam queda de cabelo e lesões na mucosa do intestino.

O uso da colchicina na preparação de cariótipos e os efeitos colaterais citados explicam-se, respectivamente, porque essa classe de fármacos
- a) induz a duplicação do DNA, aumentando o número de cromossomos; e destrói as mitocôndrias das células do cabelo.
- b) estimula a condensação da cromatina na intérfase; e inibe a síntese de proteínas das células da mucosa.
- c) degrada o envoltório nuclear durante a prófase; e bloqueia a respiração celular das células epiteliais.
- d) promove a separação precoce das cromátides-irmãs; e provoca mutações apenas nas células tumorais.
- e) impede a formação do fuso, acumulando células em metáfase, com cromossomos bem condensados; e atinge também células normais com alta taxa de divisão.

### Resolução passo a passo
1. **O que a colchicina faz:** impede a polimerização dos microtúbulos, então **não se forma o fuso**.
2. **Por que ajuda no cariótipo:** sem fuso, a célula não passa da **metáfase**. Muitas células ficam paradas justamente na fase de **condensação máxima**, quando os cromossomos são mais fáceis de ver e contar.
3. **Por que causa queda de cabelo e lesões intestinais:** a droga atinge **qualquer célula em divisão**. Folículos capilares e mucosa intestinal se renovam o tempo todo, então sofrem junto com o tumor.
4. Por que cada distrator cai:
   - a) A colchicina não induz a duplicação do DNA nem age em mitocôndrias.
   - b) A condensação faz parte da prófase normal, a droga não a estimula; e o alvo não é a síntese proteica.
   - c) A fragmentação do envoltório nuclear ocorre normalmente, e a droga não bloqueia a respiração.
   - d) Sem fuso, as cromátides **não se separam**. E a droga não é seletiva para células tumorais.

**Gabarito: E**

**Como reconhecer esse padrão na prova:** "colchicina", "paclitaxel", "tubulina", "fuso", "cromossomos não alinhados", "micronúcleos". O alvo é o microtúbulo do fuso, a divisão é bloqueada, e o efeito atinge células de divisão rápida.

---

## Balanço da Lista 1

| Questão | Padrão | Gabarito |
|---|---|---|
| 1 | P1: Desacopladores do gradiente de prótons | C |
| 2 | P2: Bloqueio da cadeia respiratória | A |
| 3 | P3: Mitocôndria ↔ ATP | D |
| 4 | P7: Fermentação alcoólica pelo produto | B |
| 5 | P8: Fermentação lática | E |
| 6 | P10: Tipo metabólico × O₂ | C |
| 7 | P12: Etapas da fotossíntese | A |
| 8 | P16: Fluxo de energia | D |
| 9 | P20: Enzima digestiva (substrato + pH) | B |
| 10 | P21: Temperatura e desnaturação | E |
| 11 | P26: Vitamina A / betacaroteno | C |
| 12 | P38: Osmose em meio hipertônico | A |
| 13 | P43: Identificar organela pela função | D |
| 14 | P48: Citoesqueleto (actina × microtúbulos) | B |
| 15 | P52: Fuso mitótico e drogas antimitóticas | E |

- Padrões abordados nesta lista: **15**
- Padrões abordados no total: **15 de 59**
- **Restam: 44 padrões**

Padrões restantes: P4, P5, P6, P9, P11, P13, P14, P15, P17, P18, P19, P22, P23, P24, P25, P27, P28, P29, P30, P31, P32, P33, P34, P35, P36, P37, P39, P40, P41, P42, P44, P45, P46, P47, P49, P50, P51, P53, P54, P55, P56, P57, P58, P59.

Ritmo previsto: Lista 2 (15 padrões, restam 29) → Lista 3 (15 padrões, restam 14) → Lista 4 (14 padrões finais + 1 questão de revisão integrada, restam 0).
