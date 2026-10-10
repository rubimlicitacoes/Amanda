<div class="capa" markdown="1">
<p class="kicker">Biologia · ENEM · Genética e Imunologia</p>

# Lista 2 — Padrões 16 a 30

<p class="sub">Tipagem sanguínea, populações, cromossomos, material genético e testes de DNA · 15 questões inéditas com mini-guia e resolução passo a passo</p>
</div>

<div class="destaque" markdown="1">
As questões estão numeradas de 16 a 30 para coincidir com o número de cada padrão do mapeamento (59 padrões no total). Cobertos antes desta lista: padrões 1 a 15.
</div>

## Questão 16 — Padrão 16: tipagem sanguínea por aglutinação

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Intuição:** o soro anti-A tem anticorpos que "grudam" nas hemácias que possuem o **antígeno A** e as aglutinam. Se aglutinou, a hemácia **tem** o antígeno.

| Tipo | Antígeno na hemácia | Anti-A aglutina? | Anti-B aglutina? | Pode receber de |
|---|---|---|---|---|
| A | A | sim | não | A, O |
| B | B | não | sim | B, O |
| AB | A e B | sim | sim | todos (receptor universal) |
| O | nenhum | não | não | só O (doador universal) |

- **Regra da transfusão:** o receptor **não pode receber um antígeno que ele não tem**.
- **Pegadinhas:** confundir "aglutinou com anti-A" com "tem anticorpo anti-A", e esquecer que o **O** também serve como doador.
- **Macete:** "**Aglutinou com anti-X → tem o X.** Recebe o próprio tipo + O."
</div>

<div class="questao" markdown="1">
**Questão 16.** Um hemocentro recebeu cinco lotes de sangue sem identificação. Cada lote tinha um único tipo sanguíneo. O técnico testou cada lote com soros anti-A e anti-B:

| Lote | Volume (L) | Anti-A | Anti-B |
|---|---|---|---|
| I | 18 | Aglutinou | Não aglutinou |
| II | 20 | Não aglutinou | Não aglutinou |
| III | 12 | Aglutinou | Aglutinou |
| IV | 25 | Não aglutinou | Aglutinou |
| V | 15 | Não aglutinou | Não aglutinou |

Quantos litros podem ser usados em transfusões para pacientes do tipo B, considerando apenas o sistema ABO?

a) 25  
b) 35  
c) 45  
d) 60  
e) 72
</div>

<div class="resolucao" markdown="1">
### Resolução

1. Identifique os tipos: I = A; II = O; III = AB; IV = B; V = O.
2. O paciente B recebe sangue **B ou O**.
3. Some: IV (25) + II (20) + V (15) = **60 L**.
4. Armadilhas: 25 (esqueceu o O) e 72 (incluiu o AB, cujo antígeno A causaria aglutinação).

**Resposta: D.**
</div>

## Questão 17 — Padrão 17: Hardy-Weinberg com o sistema ABO + transfusão

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Equilíbrio de Hardy-Weinberg:** sem seleção, mutação, migração ou deriva, as frequências se mantêm de uma geração para outra.
- **Com três alelos:** p (I<sup>A</sup>) + q (I<sup>B</sup>) + r (i) = 1.
- **Fenótipos:**
    - O = r<sup>2</sup>;
    - A = p<sup>2</sup> + 2pr;
    - B = q<sup>2</sup> + 2qr;
    - AB = 2pq.
- **Estratégia:** comece **sempre pelo recessivo**, porque O = r<sup>2</sup> dá r direto pela raiz quadrada. Depois use os outros dados.
- **Atalho de ouro:**
    - doadores compatíveis para A = A + O = (p + r)<sup>2</sup>;
    - doadores compatíveis para B = B + O = (q + r)<sup>2</sup>.
- **Pegadinha:** dar como resposta só a frequência do próprio grupo e esquecer o O.
- **Macete:** "**Raiz do O → r.** Raiz do homozigoto → p ou q. O resto fecha em 1."
</div>

<div class="questao" markdown="1">
**Questão 17.** Uma população está em equilíbrio de Hardy-Weinberg para o sistema ABO. Nela, 36% das pessoas são do grupo O, e 4% são do grupo A homozigoto (I<sup>A</sup>I<sup>A</sup>).

A porcentagem de doadores compatíveis para uma pessoa do grupo A nessa população é

a) 24%.  
b) 28%.  
c) 36%.  
d) 40%.  
e) 64%.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. r<sup>2</sup> = 0,36, então **r = 0,6**.
2. p<sup>2</sup> = 0,04, então **p = 0,2**.
3. q = 1 − 0,6 − 0,2 = **0,2**.
4. Os doadores para A são os grupos A + O = p<sup>2</sup> + 2pr + r<sup>2</sup> = 0,04 + 0,24 + 0,36 = **0,64**.
5. Pelo atalho: (p + r)<sup>2</sup> = 0,8<sup>2</sup> = 0,64 ✔.
6. Armadilhas: 28% (só o grupo A) e 36% (só o grupo O).

**Resposta: E.**
</div>

## Questão 18 — Padrão 18: haplodiploidia em abelhas

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Abelhas:**
    - óvulo **não fecundado** → macho (zangão) **haploide (n)**, por partenogênese;
    - óvulo **fecundado** → fêmea **diploide (2n)**, que pode ser operária ou rainha conforme a alimentação.
- O zangão é haploide e produz espermatozoides por **mitose**. Todos os espermatozoides de um mesmo macho são **iguais**.
- **Determinação complementar do sexo:**
    - indivíduo diploide **heterozigoto** para o gene sexual → fêmea;
    - diploide **homozigoto** → **macho diploide**, que é estéril e eliminado pelas operárias.
- **Estratégia:** faça um cruzamento para **cada macho** e tire a **média**.
- **Macete:** "**Diploide igual-igual = macho. Diploide diferente = fêmea.**"
</div>

<div class="questao" markdown="1">
**Questão 18.** Em abelhas, o sexo é determinado por um gene com vários alelos. Indivíduos diploides heterozigotos para esse gene são fêmeas, e indivíduos diploides homozigotos são machos diploides. Uma rainha de genótipo AB acasalou com quatro zangões, de alelos A, B, C e D, e cada um fecundou o mesmo número de óvulos.

Entre os ovos fecundados, a porcentagem esperada de machos diploides é

a) 0%.  
b) 12,5%.  
c) 25%.  
d) 50%.  
e) 100%.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. A rainha AB produz óvulos A (50%) e B (50%).
2. Veja cada macho:
    - zangão A: AA (macho) 50% e AB (fêmea) 50% → **50%** de machos;
    - zangão B: AB (fêmea) e BB (macho) → **50%**;
    - zangão C: AC e BC → **0%**;
    - zangão D: AD e BD → **0%**.
3. Média: (50 + 50 + 0 + 0) ÷ 4 = **25%**.

**Resposta: C.**
</div>

## Questão 19 — Padrão 19: fenótipo = genótipo + ambiente

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Genótipo** é o conjunto de genes. **Fenótipo** é o que se observa.
- **Fórmula:** **fenótipo = genótipo + ambiente**.
- **Clones** (estaquia, enxertia, clonagem, gêmeos monozigóticos) têm **genótipos idênticos**. Se os fenótipos diferem, a causa é **ambiental**.
- **Exemplos clássicos:**
    - folhas amareladas no escuro (G8): sem luz, não há síntese de clorofila;
    - coelho himalaia, cujas extremidades frias ficam escuras;
    - hortênsia, cuja cor muda com o pH do solo.
- **Pegadinha:** a alternativa "mutação causada pelo ambiente". O ambiente muda **a expressão**, não a sequência do DNA.
- **Macete:** "**Mesmo DNA, ambiente diferente → fenótipo diferente.**"
</div>

<div class="questao" markdown="1">
**Questão 19.** Um jardineiro obteve várias mudas de hortênsia por estaquia, cortando ramos de uma mesma planta-mãe. Metade das mudas foi plantada em solo ácido, rico em alumínio disponível, e metade em solo alcalino. Meses depois, as plantas do solo ácido tinham flores azuis, e as do solo alcalino, flores rosadas.

Ao final, os dois grupos de plantas apresentavam

a) genótipos idênticos e fenótipos diferentes.  
b) genótipos diferentes e fenótipos idênticos.  
c) genótipos e fenótipos diferentes, por mutações causadas pelo solo.  
d) genótipos e fenótipos idênticos.  
e) fenótipos diferentes, por segregação de alelos durante a estaquia.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. A estaquia é reprodução assexuada (mitose), então todas as mudas são **clones**, com **genótipos idênticos**.
2. A cor das flores mudou conforme o solo, então os **fenótipos são diferentes**, por causa do ambiente.
3. A alternativa E está errada porque **não há meiose** na estaquia, logo não há segregação de alelos.

**Resposta: A.**
</div>

## Questão 20 — Padrão 20: DNA mitocondrial e a linhagem materna

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **As mitocôndrias do zigoto vêm do óvulo.** O espermatozoide não deixa mitocôndrias no zigoto.
- **Consequências:**
    - todos os filhos, **homens e mulheres**, têm o mtDNA da **mãe**;
    - **homens têm mtDNA, mas não o transmitem**;
    - o mtDNA é igual em toda a "linha das mulheres": avó materna → mãe → filhos.
- **Estratégia:** suba da vítima pela mãe e pela avó materna, e depois desça **apenas por mulheres**. Todos os que estão nesse caminho, inclusive os homens da última geração, têm o mesmo mtDNA.
- **Vantagem pericial (G34):** há **centenas de cópias** de mtDNA por célula, então sobra material mesmo em ossos degradados.
- **Pegadinha:** excluir parentes homens. O **tio materno** tem o mtDNA da avó materna e serve como doador.
- **Macete:** "**mtDNA: só as mães passam, mas todos os filhos recebem.**"
</div>

<div class="questao" markdown="1">
**Questão 20.** A ossada de um homem desaparecido foi encontrada, e a perícia decidiu identificá-la pelo DNA mitocondrial. Os seguintes parentes se ofereceram para doar material:

1. o pai do desaparecido;
2. o filho do desaparecido;
3. a irmã do pai do desaparecido;
4. o irmão da mãe do desaparecido;
5. o filho do irmão do desaparecido.

A comparação de mtDNA permitirá a identificação usando o material do(a)

a) pai.  
b) filho.  
c) tia paterna.  
d) tio materno.  
e) sobrinho.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. O mtDNA da vítima veio da mãe, que o recebeu da **avó materna**.
2. Confira cada parente:
    - **Pai:** tem o mtDNA da mãe dele (a avó paterna). ❌
    - **Filho:** tem o mtDNA da esposa do desaparecido. ❌
    - **Tia paterna:** tem o mtDNA da avó paterna. ❌
    - **Tio materno:** é filho da avó materna e tem **o mesmo mtDNA**. ✅
    - **Sobrinho, filho do irmão:** tem o mtDNA da cunhada. ❌

**Resposta: D.**
</div>

## Questão 21 — Padrão 21: classificar alterações cromossômicas

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

| Tipo | Subtipo | O que acontece | Exemplo |
|---|---|---|---|
| **Numérica** | **Euploidia** | muda o **conjunto inteiro** (n) | triploidia (3n = 69) |
| | **Aneuploidia** | **um** cromossomo a mais ou a menos | Down (47, +21), Edwards (47, +18), Turner (45, X), Klinefelter (47, XXY) |
| **Estrutural** | **Deleção** | perde um pedaço | miado do gato (5p–) |
| | **Duplicação** | pedaço repetido | — |
| | **Inversão** | pedaço girado 180° | — |
| | **Translocação** | pedaço passa para outro cromossomo, **funde genes** | LMC (cromossomo Philadelphia, BCR-ABL) |

- **Como ler o cariótipo:**
    - "47" ou "45" → numérica, aneuploidia;
    - "46" com um sinal de "–" ou "p/q" → estrutural.
- **Pegadinha:** poliploidia × aneuploidia. Quem tem **um** cromossomo extra é aneuploide.
- **Macete:** "**Mudou o número total? Numérica. 46 com defeito? Estrutural.**"
</div>

<div class="questao" markdown="1">
**Questão 21.** A síndrome do miado do gato (*cri-du-chat*) causa um choro agudo característico nos recém-nascidos e atraso no desenvolvimento. Os portadores apresentam a fórmula cariotípica 46,XY,5p– ou 46,XX,5p–, que indica a perda de parte do braço curto (p) do cromossomo 5.

Essa alteração cromossômica é classificada como

a) numérica, do tipo euploidia.  
b) estrutural, do tipo deleção.  
c) estrutural, do tipo translocação.  
d) numérica, do tipo aneuploidia.  
e) estrutural, do tipo duplicação.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. O total continua sendo **46**, então a alteração **não é numérica**.
2. "5p–" indica **perda** de um pedaço do cromossomo 5.
3. É uma alteração **estrutural** do tipo **deleção**.

**Resposta: B.**
</div>

## Questão 22 — Padrão 22: não disjunção e contagem de cromossomos

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- Um gameta normal tem **23 cromossomos** (22 autossomos + 1 sexual).
- A **não disjunção** acontece quando os cromossomos não se separam na meiose. Formam-se gametas com **24 (n + 1)** e **22 (n − 1)** cromossomos.
- **Zigotos:**
    - 24 + 23 = **47** (trissomia);
    - 22 + 23 = **45** (monossomia).
- **Meiose I × meiose II nos cromossomos sexuais do pai:**
    - erro na **meiose I** (os homólogos X e Y não se separam) → espermatozoide **XY**;
    - erro na **meiose II** (as cromátides não se separam) → espermatozoide **XX** ou **YY**.
- **G65:** se os dois pais têm Down, os gametas são n ou n + 1. Os zigotos podem ser **normais, trissômicos ou tetrassômicos**.
- **Macete:** "**Gameta anormal: 24 ou 22. Zigoto anormal: 47 ou 45.**"
</div>

<div class="questao" markdown="1">
**Questão 22.** A síndrome de Klinefelter (47,XXY) causa infertilidade em homens. Em um caso estudado, a análise de marcadores genéticos mostrou que o ovócito era normal e que a alteração veio do espermatozoide, formado com erro na separação dos cromossomos homólogos durante a meiose.

O espermatozoide que originou esse indivíduo tinha

a) 22 cromossomos, sem cromossomo sexual.  
b) 23 cromossomos, com o X.  
c) 23 cromossomos, com o Y.  
d) 24 cromossomos, com X e Y.  
e) 24 cromossomos, com dois X.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. O indivíduo é 47,XXY, e o ovócito normal levou 23 cromossomos, um deles o X.
2. O espermatozoide levou 47 − 23 = **24** cromossomos, incluindo **X e Y**.
3. Isso é coerente com o erro nos **homólogos** (meiose I): X e Y foram juntos.

**Resposta: D.**
</div>

## Questão 23 — Padrão 23: mutação germinativa × somática

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Mutação somática** acontece em células do corpo (pele, fígado, pulmão). Ela pode causar **câncer na própria pessoa**, mas **não passa para os filhos**.
- **Mutação germinativa** acontece nas células que formam os gametas (ovócitos e espermatozoides). Ela **é herdada**.
- **G42:** a radiação atingiu o ovário, o **gameta materno sofreu a mutação** e a criança herdou a alteração.
- **Câncer hereditário:** existe quando a pessoa já **nasce** com a mutação em todas as células (como no gene BRCA1), porque herdou uma mutação germinativa.
- **Pegadinha:** pensar que "está no DNA dela, então passa". Passa apenas o DNA dos gametas.
- **Macete:** "**Só herda quem estava no gameta.**"
</div>

<div class="questao" markdown="1">
**Questão 23.** Uma agricultora ficou exposta por anos a um agrotóxico mutagênico, sem proteção, e desenvolveu um tumor no fígado. Exames mostraram que o tumor surgiu de uma mutação em um gene das células hepáticas. Grávida, ela teme que o bebê herde essa mutação.

Sobre a transmissão dessa mutação, é correto afirmar que ela

a) será transmitida a todos os filhos, pois faz parte do DNA da mãe.  
b) não será transmitida, pois ocorreu em células somáticas, e não em células da linhagem germinativa.  
c) será transmitida apenas às filhas.  
d) passará ao bebê pela placenta, junto com as células tumorais.  
e) será transmitida a 50% dos filhos, por ser dominante.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. A mutação ocorreu nas células do **fígado**, que são células **somáticas**.
2. Os ovócitos dela não carregam essa mutação.
3. O bebê não a herda. A exposição pode afetar os gametas por outro caminho, mas **esta** mutação do fígado não é herdável.

**Resposta: B.**
</div>

## Questão 24 — Padrão 24: conceitos de genoma

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Genoma:** todo o material genético de uma espécie, incluindo genes e regiões não codificantes.
- **Código genético:** a correspondência entre **trincas de nucleotídeos (códons)** e **aminoácidos**. É universal e degenerado (vários códons para o mesmo aminoácido). É isso que a G12 cobra.
- **Gene:** trecho que codifica um produto, como uma proteína ou um RNA.
- **DNA não codificante:** **não** vira proteína, mas **regula** quando, onde e quanto cada gene é expresso (promotores, intensificadores, RNAs reguladores). Explica diferenças de fenótipo entre espécies com genes parecidos (G96).
- **Paradoxo do valor C:** o tamanho do genoma **não acompanha** a complexidade do organismo (G63).
- **Pegadinha:** a alternativa "quanto maior o genoma, mais complexo o organismo".
- **Macete:** "**Complexidade vem da regulação, não do tamanho.**"
</div>

<div class="questao" markdown="1">
**Questão 24.** A tabela compara o tamanho do genoma e o número de genes que codificam proteínas em algumas espécies.

| Espécie | Tamanho do genoma (milhões de pb) | Genes que codificam proteínas (aprox.) |
|---|---|---|
| Ser humano | 3 100 | 20 000 |
| Milho | 2 300 | 39 000 |
| Nematoide *C. elegans* | 100 | 20 000 |
| Mosca-da-fruta | 140 | 14 000 |

De acordo com os dados,

a) quanto maior o genoma, mais complexo é o organismo.  
b) o número de genes que codificam proteínas determina a complexidade do organismo.  
c) o milho é mais complexo que o ser humano, por ter mais genes.  
d) organismos com genomas pequenos possuem poucos genes.  
e) a complexidade depende não só do número de genes, mas também da regulação da sua expressão, feita em parte por regiões não codificantes.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. A: o ser humano tem um genoma maior que o do milho, mas o nematoide é muito menor e tem o mesmo número de genes que o humano. Não há proporção. ❌
2. B e C: o milho tem mais genes que o humano, o que levaria a um absurdo biológico. ❌
3. D: o *C. elegans* tem um genoma pequeno e 20 000 genes. ❌
4. E: é a única alternativa coerente com os dados e com o papel regulador do DNA não codificante. ✅

**Resposta: E.**
</div>

## Questão 25 — Padrão 25: epigenética e regulação da expressão

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Epigenética:** mudanças **herdáveis entre células** (e às vezes entre gerações) na **atividade dos genes**, **sem alterar a sequência de bases**.
- **Mecanismos:**
    - **metilação do DNA** (grupo –CH<sub>3</sub> nas citosinas) → **silencia** o gene;
    - **acetilação de histonas** → **abre** a cromatina e **ativa** a transcrição.
- **Fatores que influenciam:** dieta (a G16 cita B12 e folato, que são doadores de metil), tabagismo, estresse e envelhecimento.
- **Câncer esporádico:** genes supressores de tumor são **silenciados por metilação**.
- **Expressão diferencial (G38):** todas as células têm os mesmos genes, mas **ligam conjuntos diferentes** conforme a fase, o tecido e o ambiente.
- **Pegadinha:** toda alternativa que fala em "alterar a sequência de bases" ou "mutação" está errada para epigenética.
- **Macete:** "**Epigenética = interruptor, não reescrita.**"
</div>

<div class="questao" markdown="1">
**Questão 25.** Um estudo comparou gêmeos monozigóticos em diferentes idades. Aos 3 anos, os pares de gêmeos tinham padrões de metilação do DNA e de acetilação das histonas quase idênticos. Aos 50 anos, esses padrões eram bem diferentes, sobretudo nos pares em que só um dos irmãos fumava. Os pesquisadores observaram também que alguns genes estavam ativos em apenas um dos gêmeos.

As diferenças observadas entre os gêmeos adultos resultam de

a) alterações no padrão de expressão gênica, sem mudança na sequência de bases do DNA.  
b) mutações pontuais acumuladas nas sequências dos genes ao longo da vida.  
c) perda de genes inteiros durante as divisões celulares.  
d) recombinação entre cromossomos homólogos nas células somáticas.  
e) alteração na sequência de aminoácidos das histonas.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. Os gêmeos monozigóticos têm a **mesma sequência de DNA**.
2. Metilação e acetilação são **marcas epigenéticas** que ligam e desligam genes.
3. O tabagismo, um fator ambiental, alterou essas marcas.

**Resposta: A.**
</div>

## Questão 26 — Padrão 26: pontes de hidrogênio e PCR

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Pares de bases:**
    - **A = T** forma **2** ligações de hidrogênio;
    - **C ≡ G** forma **3** ligações de hidrogênio.
- **Mais pares C–G** = mais ligações = **mais estável** = precisa de **mais temperatura** para desnaturar.
- **Etapas da PCR:**
    1. desnaturação (cerca de 95 °C), que separa as fitas;
    2. anelamento dos *primers* (cerca de 55 °C);
    3. extensão pela **Taq polimerase** (cerca de 72 °C).
- **Estratégia:** conte os C e G de **uma fita**. Mais C+G significa maior temperatura de desnaturação.
- **Pegadinha:** a pergunta pode ser "o **primeiro** a desnaturar" (menos C–G, como na G79) ou "o que exige **maior** temperatura" (mais C–G). Leia com atenção.
- **Macete:** "**CG = três = trava mais.**"
</div>

<div class="questao" markdown="1">
**Questão 26.** Na PCR, as fitas do DNA são separadas por aquecimento. Considere cinco segmentos de DNA de mesmo tamanho, dos quais só uma fita está representada:

a) ATTAGCATTA  
b) GCGATCGCAT  
c) ATATCGATAT  
d) GGATCCTAAT  
e) CCGGCGTACG

Qual segmento exige a **maior** temperatura para desnaturar completamente?
</div>

<div class="resolucao" markdown="1">
### Resolução

1. Conte os C e G de cada segmento:
    - a) **2**
    - b) **6**
    - c) **2**
    - d) **4**
    - e) **8**
2. O segmento E tem 8 × 3 + 2 × 2 = **28 ligações de hidrogênio**, o maior número.

**Resposta: E.** Se a pergunta fosse "qual desnatura primeiro", a resposta seria A ou C.
</div>

## Questão 27 — Padrão 27: RT-PCR e técnicas moleculares

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **A PCR só amplifica DNA.**
- **Transcriptase reversa (RT)** é uma enzima de retrovírus que faz **RNA → DNA**. O DNA produzido se chama **cDNA** (DNA complementar).
- **RT-PCR:** primeiro o RNA é convertido em cDNA, depois a PCR amplifica o cDNA.
- **Para que serve:**
    - detectar **vírus de RNA** (covid-19, HIV, dengue);
    - detectar **genes expressos** (G57). Só genes **ativos** produzem RNAm, então partir do RNA mostra o que a célula está usando.
- **Pegadinha:** confundir a RT-PCR (detecta o **material genético** do vírus) com o teste de anticorpos (detecta a **resposta imune**).
- **Macete:** "**RT = Reverso: RNA → DNA.** Partiu de RNAm? Achou gene ligado."
</div>

<div class="questao" markdown="1">
**Questão 27.** O exame considerado padrão-ouro para diagnosticar a covid-19 é a RT-PCR, feita com material coletado da nasofaringe. Antes da amplificação, a amostra recebe a enzima transcriptase reversa.

O uso dessa enzima é necessário porque

a) o vírus tem DNA de fita dupla muito estável, que precisa ser desenrolado.  
b) o material genético do vírus é RNA, que precisa ser convertido em DNA complementar antes da amplificação.  
c) a enzima destrói as proteínas do envelope viral e libera o material genético.  
d) a PCR comum só amplifica genes de bactérias.  
e) a enzima produz anticorpos que se ligam ao vírus e permitem sua detecção.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. O SARS-CoV-2 é um **vírus de RNA**.
2. A PCR só copia **DNA**, então a transcriptase reversa precisa fazer **RNA → cDNA** primeiro.

**Resposta: B.**
</div>

## Questão 28 — Padrão 28: onde está o DNA (núcleo e organelas)

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Eucariotos:**
    - a maior parte do DNA fica no **núcleo**;
    - **mitocôndrias** e **cloroplastos** têm **DNA próprio**.
- **Por que essas organelas têm DNA (teoria endossimbiótica):** foram bactérias englobadas no passado. Por isso têm:
    - DNA **circular**;
    - ribossomos próprios;
    - **dupla membrana**;
    - divisão própria.
- **Ribossomos têm RNA (RNAr), não DNA.** Essa é a pegadinha mais comum.
- **G7:** a técnica de inserir genes no **cloroplasto** de plantas pode ser feita na **mitocôndria** de leveduras, que não fazem fotossíntese.
- **G33:** genes humanos, como o da insulina, são retirados do **núcleo**.
- **Macete:** "**DNA mora no núcleo e tem casa de veraneio na mitocôndria e no cloroplasto.**"
</div>

<div class="questao" markdown="1">
**Questão 28.** Em uma aula prática, estudantes extraíram DNA de folhas de espinafre usando detergente, sal de cozinha e álcool gelado. O detergente rompe as membranas e libera o material genético, que forma uma "nuvem" esbranquiçada no álcool.

Nas células da folha, o DNA obtido estava originalmente localizado

a) apenas no núcleo.  
b) no núcleo e nos ribossomos.  
c) no núcleo e no complexo golgiense.  
d) no núcleo, nos vacúolos e nos lisossomos.  
e) no núcleo, nas mitocôndrias e nos cloroplastos.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. A folha é uma célula vegetal com **núcleo, mitocôndrias e cloroplastos**, e as três estruturas têm DNA.
2. Os ribossomos contêm RNA, não DNA. Golgi, vacúolos e lisossomos não têm material genético.

**Resposta: E.**
</div>

## Questão 29 — Padrão 29: paternidade com a mãe conhecida

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Cada pessoa tem 2 alelos por região do genoma:** um veio da mãe e o outro do pai.
- **Passo a passo:**
    1. Em cada região, **risque o alelo do filho que pode ter vindo da mãe**.
    2. O alelo que sobra é o **alelo paterno obrigatório**.
    3. O verdadeiro pai precisa ter o alelo paterno obrigatório em **todas** as regiões.
- **Uma única região incompatível já exclui o suspeito.**
- **Em bandas de gel (G19, G97):** as bandas do garoto que **não aparecem na mãe** precisam aparecer no pai.
- **Em plantas (G14):** "matriz" = mãe e "doador de pólen" = pai. A lógica é a mesma.
- **Pegadinha:** escolher o suspeito com "mais semelhanças". Não importa quantas regiões batem: **uma falha exclui**.
- **Macete:** "**O que a mãe não explica, o pai tem que ter. Sempre.**"
</div>

<div class="questao" markdown="1">
**Questão 29.** Em um teste de paternidade, quatro regiões do genoma (L1 a L4) foram analisadas. Os números indicam os alelos de cada pessoa:

| Região | Mãe | Filho | Homem I | Homem II | Homem III |
|---|---|---|---|---|---|
| L1 | 3 e 5 | 2 e 5 | 1 e 4 | 2 e 3 | 2 e 6 |
| L2 | 1 e 1 | 1 e 4 | 4 e 6 | 2 e 4 | 3 e 4 |
| L3 | 2 e 7 | 7 e 8 | 5 e 8 | 1 e 8 | 8 e 8 |
| L4 | 4 e 6 | 3 e 4 | 3 e 3 | 1 e 5 | 3 e 6 |

Pode ser o pai biológico da criança

a) somente o Homem I.  
b) somente o Homem II.  
c) somente o Homem III.  
d) os Homens I e II.  
e) os Homens II e III.
</div>

<div class="resolucao" markdown="1">
### Resolução

1. Os alelos paternos obrigatórios são:
    - L1: o 5 veio da mãe, então o pai deu o **2**;
    - L2: o 1 veio da mãe, então o pai deu o **4**;
    - L3: o 7 veio da mãe, então o pai deu o **8**;
    - L4: o 4 veio da mãe, então o pai deu o **3**.
2. Confira cada homem:
    - **I:** em L1 tem 1 e 4, sem o 2. ❌
    - **II:** tem o 2, o 4 e o 8, mas em L4 tem 1 e 5, sem o 3. ❌ É a armadilha: bate em 3 das 4 regiões.
    - **III:** tem o 2, o 4, o 8 e o 3. ✅

**Resposta: C.**
</div>

## Questão 30 — Padrão 30: identificar o filho de um casal

<div class="guia" markdown="1">
### O que você precisa saber antes de fazer essa questão

- **Os dois pais são conhecidos.** Em **cada região**, o filho precisa ter **um alelo compatível com a mãe e outro compatível com o pai**.
- **Três formas de eliminar um candidato:**
    1. o candidato tem um alelo que **nenhum dos dois** pais tem;
    2. os **dois alelos** só podem ter vindo do **mesmo pai**, e o outro pai não contribuiu;
    3. o candidato é homozigoto para um alelo que **um dos pais não tem**.
- **Em bandas de gel (G10, G29):** toda banda do filho precisa estar no pai **ou** na mãe, e é preciso haver contribuição dos **dois**.
- **G25** usa a mesma lógica: o "filhote legítimo" é o que só tem bandas presentes nos pais.
- **Macete:** "**Um da mãe e um do pai, em todas as regiões.**"
</div>

<div class="questao" markdown="1">
**Questão 30.** Um casal procura o filho que lhe foi tirado na maternidade. Foram analisadas quatro regiões do DNA do casal e de cinco jovens:

| Região | Mãe | Pai | I | II | III | IV | V |
|---|---|---|---|---|---|---|---|
| L1 | 1 e 3 | 2 e 4 | 1 e 2 | 3 e 4 | 1 e 3 | 2 e 3 | 1 e 4 |
| L2 | 5 e 6 | 1 e 6 | 5 e 6 | 6 e 6 | 5 e 1 | 1 e 5 | 1 e 2 |
| L3 | 2 e 8 | 3 e 5 | 5 e 8 | 2 e 3 | 2 e 5 | 2 e 7 | 3 e 8 |
| L4 | 4 e 7 | 1 e 9 | 7 e 9 | 4 e 4 | 7 e 1 | 4 e 9 | 7 e 1 |

Qual dos jovens pode ser filho do casal?

a) I  
b) II  
c) III  
d) IV  
e) V
</div>

<div class="resolucao" markdown="1">
### Resolução

1. **I:** L1 = 1 (mãe) + 2 (pai); L2 = 5 (mãe) + 6 (pai); L3 = 8 (mãe) + 5 (pai); L4 = 7 (mãe) + 9 (pai). Compatível em tudo. ✅
2. **II:** em L4 é 4 e 4, e o pai não tem o alelo 4. ❌ As outras três regiões batem, e isso é a armadilha.
3. **III:** em L1 é 1 e 3, os dois alelos da mãe, e o pai não contribuiu. ❌
4. **IV:** em L3 tem o alelo 7, que nenhum dos pais tem. ❌
5. **V:** em L2 tem o alelo 2, que nenhum dos pais tem. ❌

**Resposta: A.**
</div>

<div class="balanco" markdown="1">
## Balanço da Lista 2

| | |
|---|---|
| Padrões mapeados no total | **59** |
| Padrões cobertos até agora | **30** (Lista 1: 1–15; Lista 2: 16–30) |
| **Padrões que ainda faltam** | **29** (padrões 31 a 59) |

**Revisão antes da Lista 3 (intercalada):** refaça sem olhar a Questão 2 da Lista 1 (o 2/3), a Questão 17 (Hardy-Weinberg) e a Questão 29 (paternidade). São os três padrões de cálculo com mais pegadinhas.
</div>

## Gabarito rápido

| Questão | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Resposta | D | E | C | A | D | B | D | B | E | A | E | B | E | C | A |
