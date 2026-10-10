# 📝 Rodada 2: 10 questões inéditas

Nesta rodada entram 10 padrões novos, misturando os blocos como na anterior.

---

## Questão 11 · Padrão P02 (lâmina de faces paralelas)

### 📘 O que você precisa saber antes de fazer essa questão
- **Lâmina de faces paralelas** é um bloco transparente com as duas faces paralelas, como uma janela de vidro. A luz refrata **duas vezes**: ao entrar e ao sair.
- **Ao entrar** (ar → vidro, n maior), o raio se **aproxima** da normal.
- **Ao sair** (vidro → ar), o raio se **afasta** da normal na mesma medida. Ele volta ao ângulo original.
- Resultado: o raio que sai é **paralelo ao que entrou**, apenas **deslocado para o lado**.

```
  \                    raio incidente
   \
 ---\------------      face de entrada
     \_                dentro do vidro: mais "em pé" (perto da normal)
       \_
 ---------\------      face de saída
           \           sai paralelo ao incidente
            \  · ·  ← a linha pontilhada (sem refração) fica ao lado: houve deslocamento lateral
```

- Na Q10 oficial, a alternativa certa era a que mostrava: dentro do vidro, o raio acima da linha pontilhada e, na saída, o raio **paralelo** à pontilhada.

### Questão
Um feixe de laser no ar incide com ângulo de 60° com a normal sobre uma placa de vidro de faces paralelas, de índice de refração √3.

Dados: sen 60° = √3/2 e sen 30° = 1/2.

Qual é o ângulo do feixe com a normal dentro do vidro e qual é o ângulo ao sair da placa, de volta ao ar?

a) 60° dentro e 60° na saída, sem nenhum desvio.
b) 30° dentro e 30° na saída.
c) 30° dentro e 60° na saída; o raio que sai é paralelo ao incidente e deslocado lateralmente.
d) 30° dentro e 90° na saída, rasante à placa.
e) 45° dentro e 60° na saída; o raio que sai está na mesma reta do incidente.

### ✏️ Resolução passo a passo
1. **Entrada:** 1 · sen 60° = √3 · sen r, então sen r = (√3/2)/√3 = 1/2 e **r = 30°**.
2. **Saída:** √3 · sen 30° = 1 · sen e, então sen e = √3/2 e **e = 60°**.
3. O ângulo de saída é igual ao de entrada, logo o raio sai **paralelo** ao incidente. Ele está deslocado porque percorreu o vidro numa direção diferente.

✅ **Gabarito: C**

⚠️ **Pegadinha:** a E afirma que o raio sai "na mesma reta". Ele sai **paralelo**, mas **deslocado**. Paralelo não quer dizer na mesma reta.

🧠 **Para memorizar:** **"Entra abraçando a normal, sai soltando, e termina paralelo e deslocado."**

---

## Questão 12 · Padrão P25 (cores-luz aditivas e daltonismo)

### 📘 O que você precisa saber antes de fazer essa questão
- **Cores-luz primárias:** vermelho (R), verde (G) e azul (B). Cada uma estimula um tipo de cone.
- **Mistura aditiva** (a mesma do diagrama da Q8):

| Cor | Cones ativados |
|---|---|
| Vermelho | R |
| Verde | G |
| Azul | B |
| Amarelo | R + G |
| Ciano | G + B |
| Magenta | R + B |
| Branco | R + G + B |

- **Daltonismo:**
  - **protanopia:** faltam cones **vermelhos**;
  - **deuteranopia:** faltam cones **verdes**;
  - **tritanopia:** faltam cones **azuis**.
- **Método:** a pessoa daltônica vê a mesma cor que a pessoa normal **somente nas cores que não dependem do cone que falta**.

### Questão
Em um teste de visão, uma pessoa com visão normal e outra com deuteranopia severa (ausência de cones sensíveis ao verde) precisam escrever a cor de cartões iluminados com luz branca. As cores dos cartões seguem o modelo aditivo de cores-luz.

Para qual cartão as duas pessoas vão perceber a mesma cor?

a) Amarelo
b) Verde
c) Ciano
d) Branco
e) Magenta

### ✏️ Resolução passo a passo
1. O cone que falta é o **G (verde)**.
2. Elimine toda cor que tem G na composição:
   - Amarelo (R+G) ❌
   - Verde (G) ❌
   - Ciano (G+B) ❌
   - Branco (R+G+B) ❌
3. Sobra **Magenta (R+B)**: ela depende só dos cones vermelho e azul, que funcionam normalmente.

✅ **Gabarito: E**

⚠️ **Pegadinha:** na Q8 oficial (protanopia, sem vermelho) a resposta era **azul**. Mudou o cone que falta, mudou a resposta. Sempre comece perguntando **qual cone falta**.

🧠 **Para memorizar:** **"Corte o cone, corte a cor."** Risque toda cor que contém a primária ausente.

---

## Questão 13 · Padrão P18 (intensidade, potência e rendimento)

### 📘 O que você precisa saber antes de fazer essa questão
- **Intensidade (irradiância):** I = P/A, em W/m². É a potência que chega por metro quadrado.
- **Rendimento:** η = P_útil / P_recebida, de onde vem P_recebida = P_útil / η.
- **Área do círculo:** A = π·R². Atenção: a questão pode pedir **raio** ou **diâmetro**.
- **Roteiro:**
  1. Encontre a potência que o equipamento precisa **receber** (P_útil ÷ η).
  2. Encontre a **área** (P ÷ I).
  3. Encontre a **dimensão** pedida (R ou D).

### Questão
Um dessalinizador solar usa uma lente convergente circular para concentrar luz e precisa de 750 W de potência útil. No local, a intensidade da radiação solar é de 1 000 W/m², e o sistema converte 25% da energia incidente em energia útil.

Considere π = 3. Qual deve ser o **diâmetro** da lente, em metro?

a) 1,0
b) 2,0
c) 3,0
d) 4,0
e) 0,5

### ✏️ Resolução passo a passo
1. **Potência que precisa chegar à lente:** P = 750 / 0,25 = **3 000 W**.
2. **Área:** A = 3 000 / 1 000 = **3 m²**.
3. **Raio:** 3·R² = 3, então R² = 1 e **R = 1 m**.
4. **Diâmetro:** D = 2R = **2,0 m**.

✅ **Gabarito: B**

⚠️ **Pegadinhas:**
- A alternativa A (1,0) é o **raio**. A Q41 oficial pedia o raio; esta pede o diâmetro.
- Quem multiplica pelo rendimento em vez de dividir encontra P = 187,5 W e chega a um valor errado.

🧠 **Para memorizar:** **"Útil ÷ η = o que precisa entrar."** O rendimento sempre aumenta o que você precisa captar.

---

## Questão 14 · Padrão P08 (dioptro plano e posição aparente)

### 📘 O que você precisa saber antes de fazer essa questão
- Você vê um objeto porque a **luz sai dele e chega ao seu olho**. O olho **não emite** raios.
- Quando a luz atravessa uma superfície plana entre dois meios (água e ar), ela se desvia. O cérebro supõe que a luz veio em linha reta e "vê" o objeto num **lugar falso**, a imagem virtual.
- **Regra prática:**
  - Observador **fora** d'água olhando para dentro: o objeto parece **mais raso e mais próximo**. Por isso o pescador mira **abaixo** do peixe (Q33).
  - Observador **dentro** d'água olhando para fora: o objeto parece **mais alto e mais afastado** da superfície.

### Questão
O peixe-arqueiro vive em rios e caça insetos pousados em folhas acima da água: ele lança um jato d'água para derrubá-los. Ao mirar, o peixe precisa compensar o fato de enxergar o inseto numa posição diferente da real.

Isso acontece porque os raios de luz

a) emitidos pelos olhos do peixe desviam ao passar da água para o ar.
b) refletidos pelo inseto não sofrem desvio ao entrar na água.
c) refletidos pela superfície da água formam uma imagem do inseto no fundo do rio.
d) emitidos pelos olhos do peixe são espalhados pela superfície da água.
e) refletidos pelo inseto desviam ao passar do ar para a água.

### ✏️ Resolução passo a passo
1. **Qual é o sentido da luz?** Ela sai do inseto e vai até o olho do peixe. Isso elimina A e D, que falam em "olhos que emitem".
2. **Que caminho ela faz?** Sai do inseto no ar e entra na água: **ar → água**.
3. Ao mudar de meio, a luz sofre refração e se desvia, então a B está errada. O peixe vê o inseto deslocado, mais alto que a posição real.

✅ **Gabarito: E**

⚠️ **Pegadinha:** a Q33 oficial era o caso **inverso** (luz do peixe, **água → ar**). Aqui o observador está **dentro** d'água. Monte o caminho da luz sempre **do objeto para o olho**.

🧠 **Para memorizar:** **"A luz sai do objeto e chega ao olho; o olho não manda raio."**

---

## Questão 15 · Padrão P21 (defeito da visão e lente corretora)

### 📘 O que você precisa saber antes de fazer essa questão

| Defeito | Onde a imagem se forma | Causa | Lente corretora |
|---|---|---|---|
| **Miopia** | **antes** da retina | olho converge demais (alongado) | **divergente** (−) |
| **Hipermetropia** | **depois** da retina | olho converge de menos (curto) | **convergente** (+) |
| **Presbiopia** | dificuldade de ver perto | cristalino perde a acomodação (idade) | **convergente** (+) |
| **Astigmatismo** | imagem distorcida | córnea com curvatura irregular | **cilíndrica** |

- **Para ler um esquema:** lente **convergente** faz os raios se **aproximarem**; lente **divergente** faz os raios se **abrirem**. No olho corrigido, os raios se encontram **exatamente sobre a retina**.
- **Caso extremo (Q31):** se o olho tivesse o mesmo índice do ar, nada seria focalizado e o resultado seria **cegueira**.

### Questão
Uma pessoa com hipermetropia vai receber uma lente intraocular implantada à frente do cristalino. Antes do tratamento, a imagem de objetos se forma atrás da retina.

Qual tipo de lente deve ser implantado e qual é o comportamento de um feixe de raios paralelos depois da correção?

a) Convergente; os raios saem da lente já convergindo e, depois do cristalino, se encontram sobre a retina.
b) Divergente; os raios se abrem e passam a se encontrar sobre a retina.
c) Convergente; os raios passam a se encontrar antes da retina.
d) Divergente; os raios passam a se encontrar ainda mais atrás da retina.
e) Cilíndrica; ela corrige apenas um eixo da curvatura da córnea.

### ✏️ Resolução passo a passo
1. A imagem se forma **atrás** da retina, então falta convergência. A lente precisa ser **convergente**. Isso elimina B, D e E.
2. A correção certa leva o foco **exatamente para a retina**, e não para antes dela, o que eliminaria a C.

✅ **Gabarito: A**

⚠️ **Pegadinha:** na Q18 oficial (miopia), a lente fácica era **divergente**: os raios se abriam e depois convergiam na retina. Identifique o defeito antes de olhar o desenho.

🧠 **Para memorizar:** **"Míope Menos; Hipermetrope Há mais (+)."**

---

## Questão 16 · Padrão P13 (raios notáveis em associação de espelhos)

### 📘 O que você precisa saber antes de fazer essa questão
- **Raios notáveis do espelho côncavo:**
  1. raio que **sai do foco** reflete **paralelo** ao eixo;
  2. raio que chega **paralelo** ao eixo reflete **passando pelo foco**.
- Com dois espelhos, aplique essas regras **em sequência**: a saída do primeiro é a entrada do segundo.
- **Imagem real:** os raios refletidos **se cruzam de verdade**. Ela pode ser projetada e aparece "flutuando" no ar.
- **Imagem virtual:** só os **prolongamentos** dos raios se cruzam.

### Questão
Dois espelhos côncavos, E₁ e E₂, estão frente a frente com o mesmo eixo principal, e a distância entre seus vértices é de 30 cm. A distância focal de E₁ é 10 cm e a de E₂ é 12 cm. Um pequeno LED fica sobre o eixo, no foco de E₁, e só emite luz em direção a E₁.

Considerando os raios que refletem primeiro em E₁ e depois em E₂, qual é a natureza da imagem final e a distância entre o LED e sua imagem?

a) Virtual, 8 cm.
b) Real, 2 cm.
c) Real, 22 cm.
d) Real, 8 cm.
e) Virtual, 18 cm.

### ✏️ Resolução passo a passo
1. **Em E₁:** os raios saem do **foco** de E₁ e refletem **paralelos** ao eixo.
2. **Em E₂:** os raios chegam **paralelos** e convergem no **foco** de E₂, a 12 cm de V₂.
3. **Posição em relação a V₁:** 30 − 12 = **18 cm**.
4. **Distância LED–imagem:** 18 − 10 = **8 cm**.
5. Os raios **se cruzam de verdade** nesse ponto, então a imagem é **real**.

✅ **Gabarito: D**

⚠️ **Pegadinha:** na Q2 oficial (o "mirascópio"), o foco de cada espelho ficava no vértice do outro, então a imagem aparecia no topo, a 3,8 + 3,8 = 7,6 cm do objeto. Não decore o número: **siga os raios**.

🧠 **Para memorizar:** **"Do foco sai paralelo; o paralelo vai ao foco."** Use em cadeia, espelho por espelho.

---

## Questão 17 · Padrão P28 (deslocamento do pico usando c = λf)

### 📘 O que você precisa saber antes de fazer essa questão
- **c = λ·f**: a velocidade da luz é constante, então **λ e f são inversamente proporcionais**.
- **Frequência aumenta** → λ diminui → o pico vai para a **esquerda** (sentido do azul e do violeta).
- **Frequência diminui** → λ aumenta → o pico vai para a **direita** (sentido do laranja e do vermelho).
- **Faixas aproximadas:** violeta ~400–430 nm, azul ~430–490, verde ~490–560, amarelo ~560–590, laranja ~590–630, vermelho ~630–750.
- **Num gráfico de espectro:** mudar a cor desloca o **pico no eixo horizontal**. Mudar só a altura muda a intensidade, mas não a cor.

### Questão
Etiquetas de controle térmico de vacinas usam um material fotoluminescente que, novo, emite luz com pico em 520 nm (verde). Quando a vacina fica exposta ao calor, a frequência da luz emitida pela etiqueta diminui progressivamente, até ela ficar vermelho-alaranjada, o que indica descarte.

Em relação ao espectro inicial, o espectro de emissão de uma etiqueta que deve ser descartada mostra

a) o pico deslocado para comprimentos de onda maiores, perto de 620 nm.
b) o pico deslocado para comprimentos de onda menores, perto de 450 nm.
c) o pico ainda em 520 nm, com intensidade maior.
d) o pico ainda em 520 nm, com intensidade menor.
e) o pico deslocado para a região do ultravioleta.

### ✏️ Resolução passo a passo
1. A frequência **diminui**, então λ **aumenta** (c = λf).
2. A cor muda, logo o pico **se desloca**. Isso elimina C e D, em que o pico fica parado.
3. O deslocamento é para a direita, chegando à região laranja-vermelho: ~**620 nm**.

✅ **Gabarito: A**

⚠️ **Pegadinha:** na Q11 oficial, a frequência **aumentava** (vermelho → verde) e o pico ia para a **esquerda**, de ~600 para ~550 nm. Aqui acontece o inverso.

🧠 **Para memorizar:** **"Frequência e comprimento de onda andam sempre em sentidos opostos."**

---

## Questão 18 · Padrão P14 (espelho convexo e percepção)

### 📘 O que você precisa saber antes de fazer essa questão
- A imagem de um **espelho convexo** é sempre **virtual, direita e menor**. Ela se forma **atrás** do espelho, mais perto dele do que o objeto está.
- **Vantagem:** campo visual amplo. Por isso é usado em retrovisores, saídas de garagem e lojas.
- **Efeito na percepção:** o cérebro avalia distâncias pelo **tamanho aparente**. Como a imagem é pequena, o cérebro conclui que o objeto está **mais longe** do que está.
- A Q19 oficial também cobra a diferença entre uma afirmação **verdadeira** e uma afirmação que **explica o que foi perguntado**.

### Questão
Na saída de um estacionamento subterrâneo há um espelho convexo para que os motoristas vejam os pedestres na calçada. Vários motoristas relatam que os pedestres parecem estar mais longe do que realmente estão, embora a imagem de um espelho convexo se forme mais perto do espelho do que o objeto.

Essa aparente contradição é explicada pelo fato de

a) a imagem formada pelo espelho convexo ser real e invertida.
b) a imagem ser menor que o objeto, e o cérebro associar imagem pequena a objeto distante.
c) o espelho convexo aumentar o campo visual do motorista.
d) a luz refletida pelo espelho convexo percorrer um caminho mais longo.
e) a imagem se formar atrás do observador.

### ✏️ Resolução passo a passo
1. A imagem do espelho convexo é **virtual e menor**, então a A está errada.
2. O que explica a sensação de distância é o **tamanho reduzido** da imagem, interpretado pelo cérebro.
3. A C é **verdadeira**, mas explica **para que serve** o espelho, e não a **ilusão de distância**.

✅ **Gabarito: B**

⚠️ **Pegadinha:** cuidado com a alternativa verdadeira que não responde à pergunta. Isso é muito comum no ENEM.

🧠 **Para memorizar:** **"Convexo: Virtual, Direita, Diminuída."** Pequeno parece longe.

---

## Questão 19 · Padrão P03 (Snell quantitativo e ângulo de Brewster)

### 📘 O que você precisa saber antes de fazer essa questão
- **Lei de Snell:** n₁·sen θ₁ = n₂·sen θ₂.
- **Condição de Brewster:** quando os raios **refletido e refratado formam 90° entre si**, a luz refletida sai **totalmente polarizada**.
- **Geometria:** ângulo de incidência θp + ângulo de refração θr = **90°** (as duas parcelas são complementares).
- **Roteiro:**
  1. Descubra o ângulo que falta com θp = 90° − θr.
  2. Aplique Snell: n = sen θp / sen θr, quando o primeiro meio é o ar.
- Atalho opcional: tg θp = n.

### Questão
Óculos de sol polarizados são usados por pescadores para reduzir o reflexo da superfície de lagos. O reflexo é totalmente polarizado quando os raios refletido e refratado formam 90° entre si. Num lago, isso ocorre quando o raio refratado forma 37° com a normal.

Dados: sen 37° = 0,6 e sen 53° = 0,8. Índice de refração do ar = 1.

Qual é o índice de refração da água?

a) 3/4
b) 5/4
c) 4/3
d) 5/3
e) √3

### ✏️ Resolução passo a passo
1. θp + θr = 90°, então θp = 90° − 37° = **53°**.
2. Snell: 1·sen 53° = n·sen 37°, então n = 0,8/0,6 = **4/3 ≈ 1,33**. É mesmo o índice da água.

✅ **Gabarito: C**

⚠️ **Pegadinha:** a alternativa A (3/4) é a fração **invertida**. Lembre que o meio mais refringente (água) tem o ângulo **menor**, e n > 1.

🧠 **Para memorizar:** **"Brewster: refletido e refratado formam 90°."** Esse é o dado escondido no desenho (o símbolo ⊾ na Q35).

---

## Questão 20 · Padrão P31 (interferência em película fina)

### 📘 O que você precisa saber antes de fazer essa questão
- A luz reflete nas **duas faces** da película. As duas ondas refletidas se sobrepõem e **interferem**.
- **Inversão de fase** (equivale a meio comprimento de onda): acontece quando a luz reflete ao chegar a um meio de **índice maior**. Do menor para o maior, há inversão; do maior para o menor, não há.
- **Diferença de caminho:** o raio que entra na película percorre **2E** a mais.
- **Tabela-chave**, para a espessura mínima:

| Inversões nas duas reflexões | Construtiva | Destrutiva |
|---|---|---|
| **Uma** reflexão inverte | 2E = λ/2 → **E = λ/4** | 2E = λ → E = λ/2 |
| **Nenhuma ou as duas** invertem | 2E = λ → E = λ/2 | 2E = λ/2 → **E = λ/4** |

- Na Q34 oficial (óleo sobre água), só a reflexão ar/óleo invertia e a interferência pedida era **construtiva**, então E = λ/4.

### Questão
Lentes de óculos com tratamento antirreflexo recebem uma película fina de fluoreto de magnésio (n = 1,38) sobre o vidro (n = 1,50). A ideia é que a luz refletida na interface ar/película e a luz refletida na interface película/vidro sofram **interferência destrutiva**, eliminando o reflexo. Nas duas interfaces, a luz passa de um meio de índice menor para um de índice maior. A diferença de caminho entre os dois raios refletidos é o dobro da espessura E da película.

Em termos do comprimento de onda λ da luz na película, qual é a espessura mínima para eliminar o reflexo?

a) λ/2
b) 3λ/4
c) λ
d) λ/4
e) 2λ

### ✏️ Resolução passo a passo
1. **Conte as inversões:**
   - ar (1,00) → película (1,38): vai para um índice maior, **inverte**;
   - película (1,38) → vidro (1,50): vai para um índice maior, **inverte**.
2. As duas invertem e uma inversão cancela a outra: as reflexões não criam defasagem.
3. Para ter **destrutiva**, a diferença de caminho precisa ser meio comprimento de onda: 2E = λ/2.
4. **E = λ/4**

✅ **Gabarito: D**

⚠️ **Pegadinha:** o resultado é λ/4, igual ao da Q34, mas **por outro caminho**. Lá havia uma inversão e a interferência era construtiva; aqui há duas inversões e a interferência é destrutiva. Se mudar só um dado (por exemplo, pedir construtiva aqui), a resposta vira λ/2. Conte sempre as inversões primeiro.

🧠 **Para memorizar:** **"Uma inversão inverte a regra."** Com zero ou duas inversões, construtiva é 2E = λ; com uma inversão, construtiva é 2E = λ/2.

---

## 📊 Balanço da Rodada 2

**Padrões abordados nesta rodada (10):** P02, P03, P08, P13, P14, P18, P21, P25, P28, P31

| Situação | Quantidade |
|---|---|
| Total de padrões mapeados | **37** |
| Abordados na Rodada 1 | 10 |
| Abordados na Rodada 2 | 10 |
| **Total já abordado** | **20** |
| **Restam** | **17** |

**Faltam:** P07 (refração no cotidiano), P09 (conceito novo: índice negativo), P11 (infravermelho além do vermelho), P15 (tipo de lente pela forma), P16 (instrumentos ópticos), P17 (proporcionalidade em fórmula dada), P22 (gráfico linear para equação), P24 (pupila), P26 (filtros), P29 (espectro antes e depois), P30 (razão de áreas), P32 (interação luz–matéria), P33 (luminoso × iluminado), P34 (modelos da luz), P35 (luz × som), P36 (tabela com vários critérios), P37 (poluição luminosa)

Faltam **2 rodadas**: a Rodada 3, com 10 padrões, e a Rodada 4, com 7.