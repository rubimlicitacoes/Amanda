# Lista 3: padrões P21 a P30, lançamentos e composição de movimentos

> 💡 **Ideia que vale para a lista inteira (Princípio de Galileu):** um movimento complicado pode ser **separado em movimentos simples e perpendiculares**, que acontecem ao mesmo tempo **sem interferir um no outro**. O **tempo** é o elo entre eles. Quase todas as questões desta lista são resolvidas assim.

---

### 📘 O que você precisa saber antes da Questão 21 (Padrão P21)

**Intuição:** nos desenhos animados o personagem anda reto no vazio e só depois despenca. Na vida real, assim que perde o apoio, **duas coisas acontecem ao mesmo tempo**:
- **na horizontal**, ele continua com a mesma velocidade (inércia, MU);
- **na vertical**, começa a cair, cada vez mais rápido (queda livre, MUV).

A soma desses dois movimentos é uma **parábola** que começa horizontal e vai ficando cada vez mais inclinada para baixo.

**Bônus de referencial:** se algo é solto de um avião em MU, a horizontal do objeto é igual à do avião. Ele fica **sempre exatamente abaixo do avião**. Quem está no avião vê uma queda vertical; quem está no chão vê uma parábola.

**Pegadinha:** escolher "segue reto e depois cai" (o desenho animado) ou "fica para trás do avião" (isso só aconteceria com resistência do ar).

#### Questão 21
Um avião de resgate voa horizontalmente, com velocidade constante, e solta uma caixa de suprimentos sobre uma região isolada. Despreze a resistência do ar.

Para um observador **parado no solo**, a trajetória da caixa é:
(a) uma reta vertical, pois a caixa apenas cai.
(b) uma reta inclinada, pois a caixa tem velocidade horizontal e vertical.
(c) um arco de parábola, com a caixa permanecendo sempre verticalmente abaixo do avião.
(d) um arco de parábola, com a caixa ficando cada vez mais para trás do avião.
(e) um trecho horizontal seguido de uma queda vertical.

#### ✅ Resolução passo a passo
1. **Horizontal:** a caixa sai com a velocidade do avião e, sem ar, **mantém essa velocidade** (MU)
2. **Vertical:** a caixa parte com velocidade vertical zero e cai acelerando (MUV)
3. **Composição:** MU + MUV perpendiculares formam uma **parábola**
4. **Posição relativa:** as horizontais da caixa e do avião são iguais, então a caixa fica **sempre embaixo do avião**

**Gabarito: (c)**

⚠️ **Armadilhas:** (a) é o que vê o **piloto**, não o observador no solo. (d) só seria verdade com resistência do ar. (b) não é reta porque a vertical é acelerada.
🧠 **Para fixar:** "Lançamento horizontal: MU deitado + queda livre em pé = parábola."

---

### 📘 O que você precisa saber antes da Questão 22 (Padrão P22)

**Intuição:** muita gente acha que existe uma "força do chute" acompanhando a bola. **Não existe.** A força do chute só atua durante o contato com o pé. Depois, sem resistência do ar, a **única** força é o **peso**.

**Conceito, em qualquer ponto da trajetória de um projétil:**
- **Força resultante = peso:** vertical, **para baixo**, sempre igual (subida, topo e descida)
- **Velocidade:** sempre **tangente à trajetória** (aponta "para onde o corpo vai")
- **No topo:** v é horizontal (não nula, no lançamento oblíquo) e a força continua para baixo

**De onde vem o erro histórico (Q43 oficial):** Aristóteles achava que a força tinha o sentido do movimento. Newton mostrou que a força muda a velocidade; ela não acompanha a velocidade.

**Pegadinha:** desenhar a força na direção da velocidade, ou dizer que no topo a força é nula.

#### Questão 22
Um goleiro chuta a bola obliquamente. Considere três pontos da trajetória: **P** (subindo), **Q** (altura máxima) e **R** (descendo). Despreze a resistência do ar.

A direção e o sentido da **força resultante** sobre a bola em P, Q e R são, respectivamente:
(a) para cima, nula, para baixo.
(b) vertical para baixo, vertical para baixo, vertical para baixo.
(c) inclinada no sentido do movimento nos três pontos.
(d) vertical para baixo, nula, vertical para baixo.
(e) inclinada para cima, horizontal, inclinada para baixo.

#### ✅ Resolução passo a passo
1. **Quais forças atuam após o chute?** Só o **peso** (o pé não está mais em contato e o ar foi desprezado)
2. **Como é o peso?** Sempre **vertical para baixo** e com o mesmo valor (mg)
3. **Então:** a resultante é a mesma nos três pontos
4. **Observação:** a **velocidade** é que muda de direção (tangente à curva: inclinada para cima em P, horizontal em Q, inclinada para baixo em R). As alternativas (e) e (c) descrevem a velocidade, não a força.

**Gabarito: (b)**

🧠 **Para fixar:** "No projétil, a força é sempre o peso, para baixo. A velocidade é sempre tangente."

---

### 📘 O que você precisa saber antes da Questão 23 (Padrão P23)

**Intuição:** é um problema em **duas etapas** com a **mesma velocidade de saída**:
1. com o lançamento **horizontal** você **descobre v₀**;
2. com esse v₀, calcula a **altura** de um lançamento **vertical**.

**Etapa 1 (horizontal, altura h e alcance D):**
- tempo de queda: h = g·t²/2, logo t = √(2h/g)
- velocidade de saída: v₀ = D/t

**Etapa 2 (vertical para cima, Torricelli com v = 0 no topo):**
$$H = \frac{v_0^2}{2g}$$

**⚡ Atalho (juntando tudo):**
$$H = \frac{D^2}{4h}$$
Confira na oficial Q14: D = 3, h = 1, então H = 9/4 = 2,25 m ✔

**Pegadinha:** esquecer o "2" do 2g, ou responder o v₀ em vez da altura.

#### Questão 23
Uma criança segura uma pistola d'água com o cano **horizontal**, a 1,25 m do chão, e observa que o jato atinge o solo a 4,0 m de distância horizontal. Em seguida, ela aponta a pistola **verticalmente para cima**, disparando com a mesma velocidade de saída. Considere g = 10 m/s² e despreze a resistência do ar.

A altura máxima atingida pelo jato, **acima da saída da pistola**, é:
(a) 1,25 m (b) 2,0 m (c) 3,2 m (d) 4,0 m (e) 6,4 m

#### ✅ Resolução passo a passo
1. **Tempo de queda:** 1,25 = 5t², então t² = 0,25 e **t = 0,5 s**
2. **Velocidade de saída:** v₀ = 4,0/0,5 = **8 m/s**
3. **Altura vertical:** H = 8²/(2 × 10) = 64/20 = **3,2 m**
4. **Pelo atalho:** H = 4²/(4 × 1,25) = 16/5 = 3,2 m ✔

**Gabarito: (c)**

⚠️ **Armadilhas:** (e) 6,4 esqueceu o 2 de 2g. (d) 4,0 é o alcance horizontal.
🧠 **Para fixar:** "Horizontal dá v₀, e com v₀ você calcula a altura vertical por v₀²/2g."

---

### 📘 O que você precisa saber antes da Questão 24 (Padrão P24)

**Intuição:** quando um corpo sai **inclinado** (de um telhado ou de uma rampa), a velocidade tem uma parte horizontal e uma vertical. A horizontal é constante. Se o enunciado **já dá o tempo de voo**, basta multiplicar.

**Decomposição (θ = ângulo com a horizontal):**
$$v_x = v\cos\theta \qquad v_y = v\,\text{sen}\,\theta$$
$$D = v_x \cdot t$$

**Como saber se é sen ou cos?** A componente **vizinha** ao ângulo leva **cosseno**. Se o ângulo é medido a partir da horizontal, a horizontal é vizinha, então cos.

**Valores que o ENEM usa:** sen 30° = 0,5 e cos 30° ≈ 0,87; sen 37° = 0,6 e cos 37° = 0,8; sen 53° = 0,8 e cos 53° = 0,6.

**Pegadinha:** usar o v inteiro (sem decompor), usar seno no lugar de cosseno, ou responder a altura em vez da distância horizontal.

#### Questão 24
Um toboágua termina em uma pequena rampa inclinada **37° abaixo da horizontal**, a 2,75 m acima da superfície da piscina. Uma pessoa deixa a rampa com velocidade de 5 m/s, na direção da rampa, e atinge a água **0,5 s** depois. Considere sen 37° = 0,6, cos 37° = 0,8 e despreze a resistência do ar.

A distância horizontal entre o fim da rampa e o ponto onde a pessoa atinge a água é:
(a) 1,5 m (b) 2,0 m (c) 2,5 m (d) 2,75 m (e) 4,0 m

#### ✅ Resolução passo a passo
1. **Componente horizontal:** vₓ = 5 × cos 37° = 5 × 0,8 = **4 m/s**
2. **Horizontal é MU:** D = 4 × 0,5 = **2,0 m**
3. **Conferência (opcional):** v_y = 5 × 0,6 = 3 m/s para baixo; queda = 3 × 0,5 + 5 × 0,5² = 1,5 + 1,25 = 2,75 m ✔ (bate com a altura dada)

**Gabarito: (b)**

⚠️ **Armadilhas:** (a) usou seno. (c) não decompôs (5 × 0,5). (d) é a altura.
🧠 **Para fixar:** "Ângulo com a horizontal: vₓ = v·cosθ. Com o tempo dado, D = vₓ·t."

---

### 📘 O que você precisa saber antes da Questão 25 (Padrão P25)

**Intuição:** com o ângulo de disparo fixo, só há **uma velocidade** que faz a trajetória passar exatamente pelo alvo. A estratégia é escrever a posição horizontal e a vertical em função do tempo e **forçar** que elas coincidam com o alvo.

**Método do tempo (o mais seguro):**
1. Horizontal (MU): x = v₀cosθ · t, então t = x/(v₀cosθ)
2. Vertical (MUV): y = v₀senθ · t − g·t²/2
3. Substitua t da etapa 1 na etapa 2 e isole v₀

**Equação pronta (se preferir):**
$$y = x\tan\theta - \frac{g\,x^2}{2v_0^2\cos^2\theta}$$

**Cuidado:** o y do alvo é **relativo ao ponto de lançamento**. Se o alvo está acima, y é positivo; se está abaixo, negativo.

**Pegadinha:** medir a altura do alvo a partir do chão, e não do ponto de disparo.

#### Questão 25
Em um jogo de celular, um estilingue dispara um projétil com ângulo de **53°** acima da horizontal. O alvo está **6 m** à frente e **3 m acima** do ponto de disparo. Considere g = 10 m/s², sen 53° = 0,8, cos 53° = 0,6 e despreze a resistência do ar.

A velocidade de disparo que faz o projétil atingir o alvo é:
(a) 6 m/s (b) 8 m/s (c) 10 m/s (d) 12 m/s (e) 15 m/s

#### ✅ Resolução passo a passo
1. **Horizontal:** 6 = (0,6·v₀)·t, então **t = 10/v₀**
2. **Vertical:** 3 = (0,8·v₀)·t − 5t²
3. **Substituir:** 3 = 0,8·v₀·(10/v₀) − 5·(100/v₀²), que dá 3 = 8 − 500/v₀²
4. **Isolar:** 500/v₀² = 5, então v₀² = 100 e **v₀ = 10 m/s**
5. **Teste rápido:** t = 1 s; x = 6 × 1 = 6 ✔; y = 8 − 5 = 3 ✔

**Gabarito: (c)**

🧠 **Para fixar:** "Alvo dado: tire t da horizontal e jogue na vertical."

> 💬 **Na oficial (Q37):** o alvo A estava 120 m à frente e 35 m acima do canhão B. Pelo mesmo método: 35 = 160 − 200 000/v₀², então v₀ = 40 m/s. A altura de P (45 m) era um dado distrator.

---

### 📘 O que você precisa saber antes da Questão 26 (Padrão P26)

**Intuição:** o alcance de um lançamento oblíquo (saída e chegada na mesma altura) depende de duas coisas: **quão rápido você lança** e **quão forte a gravidade puxa**.

**Fórmula:**
$$A = \frac{v_0^2\,\text{sen}(2\theta)}{g}$$

**Proporcionalidades (o ENEM cobra isso, não a conta):**
- **A ∝ v₀²:** velocidade ×2 dá alcance ×4
- **A ∝ 1/g:** na Lua (g/6), o alcance fica **6×** maior (Q30 oficial)
- **Alcance máximo em 45°**

**Ligação com energia (estilingue, Q44 oficial):** E = mv₀²/2, então **A ∝ v₀² ∝ energia elástica**. A energia elástica pode ser escrita de dois jeitos:
- **mesma deformação x:** E = k·x²/2, então E ∝ k (elástico mais duro guarda **mais** energia)
- **mesma força F:** E = F²/(2k), então E ∝ 1/k (elástico mais duro estica **menos** e guarda **menos** energia, como na oficial, em que deu 1/2)

**Pegadinha:** não ler qual grandeza é **igual** nas duas situações (força ou deformação).

#### Questão 26
Um garoto compara dois estilingues: um com elástico "duro", de constante elástica k_d, e outro com elástico "mole", de constante k_m, sendo **k_d = 3·k_m**. Ele puxa os dois **até a mesma deformação** e lança pedras idênticas com o mesmo ângulo. Despreze perdas de energia e a resistência do ar.

A razão D_d/D_m entre os alcances horizontais obtidos com o estilingue duro e com o mole é:
(a) 1/3 (b) 1/√3 (c) 1 (d) √3 (e) 3

#### ✅ Resolução passo a passo
1. **Igual nas duas situações:** a **deformação** x, então E = k·x²/2 e E_d/E_m = k_d/k_m = **3**
2. **Energia vira cinética:** mv₀²/2 = E, então v₀² ∝ E, e v₀² também fica **3×**
3. **Alcance:** A ∝ v₀², então D_d/D_m = **3**

**Gabarito: (e)**

⚠️ **Armadilhas:** (a) é o raciocínio de "mesma força" (o caso da oficial), mas aqui a deformação é que é igual. (d) √3 compara velocidades, não alcances.
🧠 **Para fixar:** "Alcance ∝ v₀²/g. Pela energia: mesma deformação, E ∝ k; mesma força, E ∝ 1/k."

---

### 📘 O que você precisa saber antes da Questão 27 (Padrão P27)

**Intuição:** o barco "aponta" para a outra margem, mas a correnteza o arrasta rio abaixo. São dois movimentos simultâneos e independentes:
- **atravessar:** só depende do motor (v_barco)
- **ser arrastado:** só depende da correnteza (v_corr)

**Fatos-chave:**
1. **Tempo de travessia:** t = largura / v_barco (a correnteza **não** muda esse tempo)
2. **Deriva (quanto desce o rio):** x = v_corr · t
3. **Trajetória real:** a hipotenusa, d = √(L² + x²)
4. **Com ângulo α em relação à perpendicular:** sen α = deriva/distância percorrida, ou tg α = deriva/largura

**Triângulos amigos:** 3-4-5 e o de 30° (cateto oposto = metade da hipotenusa).

**Pegadinha:** achar que a correnteza faz a travessia demorar mais. Ela muda **onde** você chega, não **quando**.

#### Questão 27
Um barco atravessa um rio de **120 m** de largura, com o motor mantendo-o sempre apontado perpendicularmente às margens, com velocidade de 4 m/s em relação à água. A correnteza tem velocidade de 3 m/s, paralela às margens.

A distância efetivamente percorrida pelo barco, em relação às margens, até chegar ao outro lado é:
(a) 90 m (b) 120 m (c) 150 m (d) 210 m (e) 240 m

#### ✅ Resolução passo a passo
1. **Tempo (só o motor atravessa):** t = 120/4 = **30 s**
2. **Deriva:** x = 3 × 30 = **90 m** rio abaixo
3. **Hipotenusa:** d = √(120² + 90²) = √(14400 + 8100) = √22500 = **150 m** (é o triângulo 3-4-5 × 30)
4. **Outro caminho:** a velocidade resultante é √(4² + 3²) = 5 m/s, e 5 × 30 = 150 m ✔

**Gabarito: (c)**

⚠️ **Armadilhas:** (a) é só a deriva. (b) é só a largura. (d) somou 120 + 90, mas vetores perpendiculares se combinam por Pitágoras.
🧠 **Para fixar:** "Atravessar depende do barco; a deriva depende da correnteza; o caminho real é a hipotenusa."

> 💬 **Na oficial (Q11):** deriva de 100 m e ângulo de 30° com a perpendicular dão distância = 100/sen 30° = 200 m.

---

### 📘 O que você precisa saber antes da Questão 28 (Padrão P28)

**Intuição:** na vida real, a correnteza **não é igual** em todo o rio. Perto das margens o atrito com o fundo e as bordas a freia (quase zero). No meio ela é **máxima**.

**Como desenhar a trajetória:** a inclinação da trajetória em cada ponto depende da razão v_corr/v_barco **naquele ponto**:
- **Junto à margem de saída:** v_corr ≈ 0, então o barco anda **perpendicular** à margem
- **Indo para o meio:** v_corr cresce, então a trajetória vai **inclinando** rio abaixo
- **No meio:** inclinação **máxima**
- **Indo para a outra margem:** v_corr diminui, então a trajetória volta a ficar **perpendicular**

O resultado é uma **curva em "S" suave**, perpendicular às margens nas duas pontas.

**Tempo:** continua t = largura/v_barco, igual ao de águas paradas (P27).

#### Questão 28
Uma nadadora atravessa um rio mantendo o corpo sempre orientado perpendicularmente às margens e nadando com velocidade constante em relação à água. A correnteza é praticamente nula junto às margens e máxima no centro do rio.

Observada de cima, a trajetória da nadadora e o tempo de travessia, comparado ao de um lago de águas paradas com a mesma largura, são:
(a) uma reta inclinada; tempo maior.
(b) uma curva em "S": perpendicular às margens nas extremidades e mais inclinada no meio; tempo igual.
(c) uma curva em "S", como em (b); tempo maior.
(d) uma reta perpendicular às margens; tempo igual.
(e) uma curva cada vez mais inclinada até a margem de chegada; tempo menor.

#### ✅ Resolução passo a passo
1. **Saída:** sem correnteza junto à margem, a nadadora segue **perpendicular**
2. **Centro:** com a correnteza máxima, a trajetória fica **mais inclinada**
3. **Chegada:** a correnteza volta a zero, então a trajetória fica **perpendicular** de novo, formando o **"S"**
4. **Tempo:** a travessia depende só da velocidade dela perpendicular às margens, que não mudou, então o tempo é **igual**
5. **Por que não é reta?** Reta exige correnteza **uniforme** (questão 27)

**Gabarito: (b)**

⚠️ **Armadilhas:** (e) seria o caso de uma correnteza que só aumenta. (c) e (a) caem no mito de que a correnteza atrasa a travessia.
🧠 **Para fixar:** "Correnteza uniforme dá reta. Correnteza variável dá curva. A inclinação acompanha a correnteza local."

---

### 📘 O que você precisa saber antes da Questão 29 (Padrão P29)

**Intuição:** um avião (ou drone) voa **dentro** do ar, e o ar se move (vento). O que o piloto controla é a velocidade **em relação ao ar**.

**Regra vetorial:**
$$\vec v_{solo} = \vec v_{ar} + \vec v_{vento} \quad\Longrightarrow\quad \vec v_{ar} = \vec v_{solo} - \vec v_{vento}$$

**Método por componentes (Galileu de novo):**
1. Calcule a velocidade necessária em relação ao **solo** em cada eixo: deslocamento ÷ tempo
2. Escreva o vento em cada eixo com **sinal** (Leste +, Oeste −; Norte +, Sul −; Cima +, Baixo −)
3. Subtraia **eixo por eixo**: v(ar) = v(solo) − v(vento)

**Lógica:** vento contra exige compensar com mais velocidade; vento a favor permite usar menos.

**Pegadinha:** somar o vento em vez de subtrair, errar sinais ou esquecer de converter minutos em horas.

#### Questão 29
Um drone de entregas deve chegar, em **10 minutos**, a um ponto situado 6 km a Leste, 8 km ao Norte e 0,5 km acima do ponto de partida. Durante todo o voo, sopra um vento com componentes de 12 km/h para **Oeste**, 6 km/h para **Norte** e 1 km/h **de cima para baixo**.

A velocidade que o drone deve manter **em relação ao ar** tem componentes:
(a) 48 km/h para Leste, 42 km/h para Norte e 4 km/h para cima.
(b) 24 km/h para Leste, 54 km/h para Norte e 2 km/h para cima.
(c) 36 km/h para Leste, 48 km/h para Norte e 3 km/h para cima.
(d) 6 km/h para Leste, 8 km/h para Norte e 0,5 km/h para cima.
(e) 48 km/h para Leste, 54 km/h para Norte e 4 km/h para cima.

#### ✅ Resolução passo a passo
1. **Tempo:** 10 min = 1/6 h
2. **Velocidade necessária em relação ao solo:** Leste 6 ÷ (1/6) = **36**; Norte 8 ÷ (1/6) = **48**; Cima 0,5 ÷ (1/6) = **3** (km/h)
3. **Vento com sinais:** Leste **−12** (vai para Oeste); Norte **+6**; Cima **−1** (vai para baixo)
4. **Subtrair eixo por eixo:**
   - Leste: 36 − (−12) = **48** (o vento empurra para trás, então é preciso compensar)
   - Norte: 48 − 6 = **42** (o vento ajuda)
   - Cima: 3 − (−1) = **4** (o vento empurra para baixo)

**Gabarito: (a)**

⚠️ **Armadilhas:** (b) somou o vento em vez de subtrair. (c) ignorou o vento. (d) esqueceu de dividir pelo tempo. (e) acertou só parte dos sinais.
🧠 **Para fixar:** "Velocidade em relação ao ar = velocidade em relação ao solo − vento, eixo por eixo, com sinal."

---

### 📘 O que você precisa saber antes da Questão 30 (Padrão P30)

**Intuição:** dois carros lado a lado na estrada, ambos a 100 km/h: de um para o outro, eles parecem **parados**. A velocidade que importa para "pegar" algo é a **relativa**.

**Conceito (mesma direção):**
- **mesmo sentido:** v_rel = v₁ − v₂ (se forem iguais, **v_rel = 0**)
- **sentidos opostos:** v_rel = v₁ + v₂ (aproximação muito rápida)

**Aplicações clássicas:** piloto que apanha um projétil com a mão (Q16 oficial), reabastecimento em voo, passagem de bastão no revezamento, acoplamento de naves espaciais.

**Pegadinha:** escolher a alternativa que fala de o objeto "estar parado" ou "freado". Ele não precisa estar parado **em relação ao solo**; precisa estar parado **em relação a quem o pega**.

#### Questão 30
A Estação Espacial Internacional orbita a Terra a cerca de 27 600 km/h. Ainda assim, cápsulas tripuladas conseguem acoplar a ela de forma suave, com um "toque" de poucos centímetros por segundo.

Esse acoplamento suave é possível porque, na aproximação final, a cápsula:
(a) fica parada em relação à Terra, e a estação passa por ela.
(b) move-se no sentido oposto ao da estação, com velocidade de mesmo valor.
(c) move-se no mesmo sentido da estação, com velocidade muito superior.
(d) move-se no mesmo sentido da estação, com velocidade praticamente igual.
(e) é freada pelo ar até a velocidade da estação.

#### ✅ Resolução passo a passo
1. **O que precisa ser pequeno?** A velocidade **relativa** entre cápsula e estação (poucos cm/s)
2. **Como conseguir isso?** Mesmo sentido e módulos quase iguais: v_rel = v₁ − v₂ ≈ 0
3. **Eliminando:** (a) daria v_rel = 27 600 km/h, uma colisão catastrófica. (b) é pior ainda (55 200 km/h). (c) daria uma batida violenta. (e) praticamente não há ar nessa altitude.

**Gabarito: (d)**

🧠 **Para fixar:** "Para pegar algo em movimento, a velocidade **relativa** precisa ser ≈ 0: mesmo sentido, mesmo módulo."

---

## 📊 Balanço da Lista 3

| | |
|---|---|
| **Padrões mapeados no total** | 48 |
| **Padrões abordados até agora** | 30 (P1 a P30) |
| **Abordados nesta lista** | 10 (P21 a P30) |
| **Padrões que ainda faltam** | **18** |

**Próxima lista (Lista 4, P31 a P40):** MU + aceleração perpendicular (foguete) e inércia, inércia da componente horizontal, direção da aceleração centrípeta, a꜀ = v²/R, v = 2πR/T com latitude, engrenagens, mesmo período e mesma velocidade angular, velocidade angular relativa, projeção do MCU (MHS) e período por contagem de ciclos.

Depois dela restarão **8 padrões**, para a **Lista 5**, a última.

Quando quiser, é só pedir a **Lista 4**.