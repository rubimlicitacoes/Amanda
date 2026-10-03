# Lista 1: 10 questões inéditas (padrões P1, P7, P13, P22, P24, P25, P28, P31, P38, P42)

> Antes de tudo, a "caixa de ferramentas" da ondulatória, que vale para todas as questões:
>
> | Grandeza | Símbolo | Unidade | O que é | Quem define |
> |---|---|---|---|---|
> | Frequência | f | Hz (1/s) | nº de oscilações por segundo | **a fonte** |
> | Período | T | s | tempo de 1 oscilação (T = 1/f) | **a fonte** |
> | Velocidade | v | m/s | rapidez com que a onda avança | **o meio** |
> | Comprimento de onda | λ | m | distância entre duas cristas | se ajusta: λ = v/f |
> | Amplitude | A | depende | "tamanho" da oscilação | **energia** da fonte |
>
> **Equação fundamental:** v = λ·f (ou v = λ/T).

---

## Questão 1 (Padrão P1: equação fundamental v = λ·f)

### O que você precisa saber antes de fazer essa questão
- **Intuição:** uma onda anda um comprimento de onda (λ) a cada período (T). Então v = λ/T = λ·f.
- **De onde vem o λ quando não há desenho de onda:** o ENEM descreve a onda em palavras. "Cada período de oscilação contém N pessoas distanciadas d" significa **λ = N·d** (é o "tamanho" de uma onda completa, Q80).
- **Conversões obrigatórias** (o erro número 1 nesse padrão):

| De | Para | Como |
|---|---|---|
| km/h | m/s | ÷ 3,6 |
| cm | m | ÷ 100 |
| nm | m | × 10⁻⁹ |
| MHz / GHz | Hz | × 10⁶ / × 10⁹ |

- **Exemplo rápido (Q50):** micro-ondas de 2,45 GHz → λ = 3·10⁸ / 2,45·10⁹ ≈ 0,122 m = **12,2 cm**.
- **Pegadinha:** as alternativas sempre trazem o resultado "sem converter" (ex.: usar 45 km/h direto). Desconfie da alternativa que aparece rápido demais.
- **Como memorizar:** "**V**ai **L**onge **F**ácil": V = L(λ)·F.

### Questão
Na abertura de um festival, 240 dançarinos foram posicionados em fila, espaçados de 50 cm uns dos outros. Ao sinal do coreógrafo, cada um levanta e abaixa os braços, em sincronia com o vizinho, formando uma "onda humana" que percorre a fila com velocidade de 10,8 km/h. Observou-se que cada oscilação completa (do braço erguido de um dançarino até o próximo braço erguido) envolve 24 dançarinos.

A frequência dessa onda, em hertz, é
- a) 0,25.
- b) 0,90.
- c) 2,0.
- d) 4,0.
- e) 6,0.

### Resolução passo a passo
1. **Comprimento de onda:** uma oscilação completa envolve 24 dançarinos espaçados de 0,5 m.
   λ = 24 × 0,5 = **12 m**.
   (O total de 240 dançarinos é informação inútil, colocada para distrair.)
2. **Velocidade em m/s:** v = 10,8 ÷ 3,6 = **3 m/s**.
3. **Frequência:** f = v/λ = 3/12 = **0,25 Hz** (um "braço erguido" passa a cada 4 s).
4. Por que cada distrator cai:
   - b) 10,8/12 = 0,9: esqueceu de converter km/h para m/s.
   - d) 12/3 = 4: calculou o **período** (T), não a frequência.
   - e) 3/0,5 = 6: usou o espaçamento entre dançarinos como se fosse λ.

**Gabarito: A**

---

## Questão 2 (Padrão P7: onda mecânica × eletromagnética)

### O que você precisa saber antes de fazer essa questão
- **Onda mecânica:** é uma vibração **da matéria** (ar, água, barbante, osso). Sem matéria, não existe. Exemplos: som, ultrassom, ondas do mar, onda numa corda.
- **Onda eletromagnética (EM):** é a oscilação de campos elétrico e magnético. **Não precisa de meio** e no vácuo anda a **c = 3·10⁸ m/s**. Exemplos: luz, rádio, micro-ondas, raio X, radar.

| | Mecânica (som) | Eletromagnética (luz, rádio) |
|---|---|---|
| Precisa de meio? | **Sim** | Não |
| Propaga no vácuo? | **Não** | Sim |
| Velocidade típica | 340 m/s (ar), 1 500 m/s (água), 5 000 m/s (aço) | 3·10⁸ m/s |
| Onde é mais rápida | sólidos | vácuo |

- **Pegadinhas do ENEM:**
  - "Telefone de copos" (Q44, Q73): o som viaja **pelo barbante** como vibração mecânica, não como onda EM.
  - Radar (Q29): a onda refletida pelo carro é **EM** e volta na velocidade da luz; muda só a frequência (Doppler).
  - Ultrassom é som (mecânica), mesmo sendo inaudível.
- **Como memorizar:** "**Som precisa de alguém para empurrar**" (molécula empurra molécula). No vácuo não há ninguém.

### Questão
Em uma cena de um filme de ficção científica, duas naves estão paradas no espaço sideral, a alguns quilômetros de distância uma da outra. Um asteroide atinge a primeira nave, que explode. Na cena, os tripulantes da segunda nave veem o clarão da explosão e, logo em seguida, ouvem um estrondo pelas janelas.

Do ponto de vista da Física, a cena está
- a) correta, pois tanto a luz quanto o som são ondas eletromagnéticas e se propagam no vácuo.
- b) correta, pois o som se propaga no vácuo, mas com velocidade menor que a da luz.
- c) incorreta, pois a luz, por ser uma onda mecânica, não chegaria à segunda nave.
- d) incorreta, pois o som é uma onda mecânica e não se propaga no vácuo entre as naves.
- e) incorreta, pois o estrondo deveria ser ouvido antes do clarão, já que o som tem maior energia.

### Resolução passo a passo
1. Classifique cada onda:
   - **Clarão** = luz = onda **eletromagnética**: atravessa o vácuo e chega à segunda nave.
   - **Estrondo** = som = onda **mecânica**: precisa de matéria para vibrar.
2. Entre as naves há **vácuo** (espaço sideral). Não há moléculas para transmitir a vibração.
3. Conclusão: os tripulantes veriam o clarão, mas **não ouviriam nada**. A cena está incorreta por causa do som.
4. Por que cada distrator cai:
   - a) O som não é onda EM.
   - b) O som não se propaga no vácuo, com nenhuma velocidade.
   - c) Inverte a classificação: a luz é EM.
   - e) Energia não define velocidade; e mesmo no ar o som chega **depois** da luz (por isso o trovão vem depois do relâmpago).

**Gabarito: D**

---

## Questão 3 (Padrão P13: intensidade ↔ amplitude)

### O que você precisa saber antes de fazer essa questão
- **As três qualidades fisiológicas do som** (o ENEM cobra muito confundir uma com a outra):

| Qualidade | Pergunta que responde | Grandeza física | Exemplo |
|---|---|---|---|
| **Altura** | grave ou agudo? | **frequência** | voz de homem (grave) × de criança (aguda) |
| **Intensidade** (volume) | forte ou fraco? | **amplitude** (energia) | botão de volume, limite em dB |
| **Timbre** | quem está tocando? | **forma da onda** (harmônicos) | flauta × piano na mesma nota |

- **Pegadinha da língua portuguesa:** no dia a dia, "som alto" significa som **forte**. Na Física, "som alto" significa **agudo** (alta frequência). Se a questão fala em "volume", "barulho", "dB", "fraco", "forte", é **intensidade/amplitude**.
- **Atenuação (Q81):** quando a onda percorre um caminho mais longo, parte da energia é dissipada. Cai a **amplitude**. A frequência continua a mesma (quem define f é a fonte).
- **Para a luz vale o mesmo (Q97):** brilho mais intenso = maior amplitude. A cor (frequência) não muda.
- **Como memorizar:** "**A**mplitude = **A**ltura do **A**lto-falante no volume" (a onda fica "mais alta" no desenho, não mais aguda).

### Questão
Em uma praça, uma caixa de som toca continuamente a mesma nota musical. Uma pessoa caminha em linha reta afastando-se da caixa e percebe que a nota continua a mesma, mas o som chega a ela cada vez mais fraco, até que, a certa distância, deixa de ser ouvido.

À medida que a pessoa se afasta, a característica da onda sonora que diminui é o(a)
- a) frequência.
- b) período.
- c) amplitude.
- d) velocidade.
- e) comprimento de onda.

### Resolução passo a passo
1. "A nota continua a mesma": a **altura** não muda, logo a **frequência** não muda. Elimina a), e por consequência b) (T = 1/f) e e) (λ = v/f).
2. "O som chega cada vez mais fraco": é a **intensidade** diminuindo. A energia se espalha por uma área cada vez maior e parte é dissipada no ar.
3. Intensidade está ligada à **amplitude**: ela diminui.
4. Por que cada distrator cai:
   - a), b), e) Mesma nota significa mesma f, mesmo T e mesmo λ.
   - d) A velocidade depende do meio (ar), que é o mesmo durante todo o percurso.

**Gabarito: C**

---

## Questão 4 (Padrão P22: difração)

### O que você precisa saber antes de fazer essa questão
- **Intuição:** difração é a capacidade da onda de **contornar obstáculos** e "dobrar esquinas". É por isso que você ouve alguém atrás de um muro sem vê-lo.
- **Regra de ouro:** a difração é forte quando **λ é comparável ou maior que o obstáculo/fenda**.
  - Som grave: f baixa → λ grande (metros) → **difrata muito**.
  - Som agudo: f alta → λ pequeno (centímetros) → difrata pouco.
  - Luz: λ ~ 500 nm → só difrata em fendas microscópicas (por isso não "vemos" atrás do muro).
  - Rádio AM/FM e TV de baixa frequência: λ de metros → contornam prédios e morros (Q14, Q84).
- **Cálculo que resolve:** λ = v/f com v = 340 m/s no ar.
  - 20 Hz → λ = 17 m · 340 Hz → λ = 1 m · 4 000 Hz → λ = 8,5 cm.
- **Pegadinha:** confundir com **reflexão** (eco, o som volta) e **refração** (mudança de meio). Se a palavra-chave é "contornar", "obstáculo", "atrás de", "esquina", é **difração**.
- **Como memorizar:** "**Grave Gira** a esquina": o grave contorna, o agudo vai reto.

### Questão
Durante o Carnaval, um folião está em uma rua transversal, sem visão direta do trio elétrico, que passa na avenida principal, oculto pela esquina de um prédio. Ele percebe com clareza as batidas graves do contrabaixo, por volta de 85 Hz, mas quase não ouve os sons agudos dos pratos da bateria, por volta de 8 500 Hz. Considere a velocidade do som no ar igual a 340 m/s.

O fenômeno ondulatório e a justificativa para a diferença percebida pelo folião são
- a) difração, pois o som grave tem comprimento de onda de cerca de 4 m, comparável às dimensões dos obstáculos, e contorna a esquina com mais facilidade.
- b) difração, pois o som agudo tem comprimento de onda de cerca de 4 m, maior que o do grave, e por isso se espalha menos.
- c) reflexão, pois o som grave é refletido pelas paredes dos prédios, enquanto o agudo é absorvido por elas.
- d) refração, pois o som grave muda de velocidade ao dobrar a esquina, enquanto o agudo mantém sua velocidade.
- e) interferência, pois os sons agudos de diferentes instrumentos se cancelam na rua transversal.

### Resolução passo a passo
1. Situação: o folião **não vê** a fonte, há um **obstáculo** (a esquina) entre eles e mesmo assim ouve. Palavra-chave de **difração**.
2. Calcule os comprimentos de onda:
   - Grave: λ = 340/85 = **4 m**.
   - Agudo: λ = 340/8 500 = **0,04 m = 4 cm**.
3. O λ do grave (4 m) é da ordem das dimensões de esquinas, portas e carros: **difrata bastante**. O agudo (4 cm) é muito menor: difrata pouco e "segue reto".
4. Por que cada distrator cai:
   - b) Inverte os valores: quem tem λ = 4 m é o grave.
   - c) Reflexão é a onda voltar ao bater numa superfície (eco). O que explica o grave "dobrar a esquina" e o agudo não é a relação entre λ e o tamanho do obstáculo.
   - d) No mesmo meio (ar), todas as frequências têm a mesma velocidade (P6).
   - e) Interferência exige superposição organizada de ondas de mesma frequência; não explica "contornar a esquina".

**Gabarito: A**

---

## Questão 5 (Padrão P24: interferência destrutiva, fase oposta)

### O que você precisa saber antes de fazer essa questão
- **Princípio da superposição:** quando duas ondas se encontram, os deslocamentos **se somam**.
  - Crista + crista = crista maior: **interferência construtiva**.
  - Crista + vale = cancelamento: **interferência destrutiva**.
- **Para cancelar totalmente** um ruído (fones com cancelamento ativo, Q2, Q56, Q58), a onda "anti-ruído" precisa ter:
  1. **mesma frequência** (senão, ora soma, ora cancela);
  2. **mesma amplitude** (senão sobra um resto);
  3. **fase oposta** = defasagem de **180°** = atraso de **meio período (T/2)**.
- **Polaridade invertida (Q92):** trocar + e − de um alto-falante faz o cone empurrar quando o outro puxa. É a mesma coisa que defasar 180°: interferência destrutiva nos pontos equidistantes.
- **Atraso em tempo:** T = 1/f, defasagem de 180° = T/2. Defasagem de 360° (um período inteiro) é como **não ter defasagem nenhuma** (construtiva).
- **Pegadinha:** "amplitude maior" não cancela melhor; sobra ruído invertido. E 90° só cancela parcialmente.
- **Como memorizar:** "**Meio período, meio silêncio total**": 180° = T/2 = cancelamento.

### Questão
Algumas montadoras instalam nos carros um sistema de cancelamento de ruído. Um microfone na cabine capta o ronco do motor, que, em velocidade de cruzeiro, é dominado por uma componente de 120 Hz. Um circuito eletrônico processa esse sinal e o reproduz pelos alto-falantes do carro com modificações específicas, de modo que o ronco praticamente desapareça na posição da cabeça dos ocupantes.

Para que isso ocorra, em relação ao ronco captado, o sinal emitido pelos alto-falantes deve ter
- a) mesma frequência, mesma amplitude e estar atrasado de aproximadamente 4,2 ms.
- b) mesma frequência, mesma amplitude e estar atrasado de aproximadamente 8,3 ms.
- c) o dobro da frequência, mesma amplitude e estar atrasado de aproximadamente 4,2 ms.
- d) mesma frequência, o dobro da amplitude e estar atrasado de aproximadamente 4,2 ms.
- e) mesma frequência, mesma amplitude e nenhum atraso.

### Resolução passo a passo
1. O ronco deve "desaparecer": é **interferência destrutiva** total. Condições: mesma f, mesma amplitude, fase oposta (180°).
2. Converta 180° em tempo:
   - T = 1/f = 1/120 s ≈ 0,00833 s = **8,3 ms**.
   - Defasagem de 180° = T/2 ≈ **4,2 ms**.
3. A alternativa com mesma f, mesma amplitude e atraso de 4,2 ms é a **A**.
4. Por que cada distrator cai:
   - b) 8,3 ms = um período inteiro (360°): crista volta a coincidir com crista. Interferência **construtiva**, o ronco dobra.
   - c) Frequência diferente não produz cancelamento estável.
   - d) Amplitude dobrada sobra ruído com fase invertida (a soma tem amplitude igual à original).
   - e) Sem atraso, as ondas estão em fase: construtiva.

**Gabarito: A**

---

## Questão 6 (Padrão P25: interferência entre emissores de frequências próximas)

### O que você precisa saber antes de fazer essa questão
- Para que um sinal **atrapalhe** outro de forma significativa (interferência), as ondas precisam ter **frequências iguais ou muito próximas**, ou seja, **comprimentos de onda parecidos** (λ = c/f, com a mesma velocidade c para todas as ondas EM).
- Situações clássicas da lista:
  - Celular × rádio do avião (Q33, Q39): podem interferir se tiverem a **mesma frequência**.
  - Rádio pirata na mesma frequência da emissora (Q36): **comprimentos de onda semelhantes**.
  - Motor de carro elétrico × rádio AM (Q54): mesmo λ, "se cancelam" = **interferência**.
- **O receptor é sintonizado em uma frequência** (ressonância, P28). Sinal em frequência muito diferente ele simplesmente ignora, por mais forte que seja.
- **Pegadinhas:** "maior potência", "maior intensidade", "velocidades diferentes" são distratores. Todas as ondas EM têm a mesma velocidade no ar, e intensidade não decide se há interferência.
- **Como memorizar:** "**Só briga quem fala a mesma língua**": mesma frequência.

### Questão
Um morador percebeu que a conexão do seu roteador Wi-Fi fica instável sempre que o forno de micro-ondas da cozinha está ligado. O manual do roteador informa que ele pode operar em duas bandas: 2,4 GHz ou 5,0 GHz. Já o forno opera em 2,45 GHz. Ao configurar o roteador para a banda de 5,0 GHz, o problema desapareceu, mesmo com o forno ligado.

A solução funcionou porque, na banda de 5,0 GHz, o sinal do roteador
- a) passa a ter potência muito maior que a do forno.
- b) passa a se propagar com velocidade maior que a das micro-ondas do forno.
- c) passa a ter frequência e comprimento de onda bem diferentes dos das ondas emitidas pelo forno.
- d) passa a ter amplitude menor, sendo menos afetado pelas ondas do forno.
- e) deixa de ser uma onda eletromagnética e não sofre mais interferência.

### Resolução passo a passo
1. Compare as frequências:
   - Forno: 2,45 GHz. Roteador na banda antiga: 2,4 GHz. São **muito próximas**: há interferência.
   - Roteador na banda nova: 5,0 GHz, **o dobro**: longe da faixa do forno.
2. Compare os comprimentos de onda (λ = c/f):
   - 2,45 GHz → 3·10⁸/2,45·10⁹ ≈ 12 cm.
   - 2,4 GHz → 12,5 cm (praticamente igual).
   - 5,0 GHz → 6 cm (bem diferente).
3. Com frequência e λ diferentes, o receptor sintonizado em 5,0 GHz não "enxerga" o sinal do forno.
4. Por que cada distrator cai:
   - a), d) Potência e amplitude não decidem se há interferência; o que decide é a coincidência de frequência.
   - b) Todas as ondas EM no ar têm a mesma velocidade (≈ 3·10⁸ m/s).
   - e) O Wi-Fi continua sendo onda EM em qualquer banda.

**Gabarito: C**

---

## Questão 7 (Padrão P28: ressonância)

### O que você precisa saber antes de fazer essa questão
- **Intuição:** empurrar um balanço. Se você empurra **no ritmo certo** (o ritmo natural do balanço), cada empurrão soma energia e ele vai cada vez mais alto. Fora do ritmo, os empurrões se atrapalham.
- **Conceito:** todo sistema tem uma (ou mais) **frequência natural** de vibração. Quando uma força externa periódica tem **a mesma frequência**, o sistema **absorve energia ao máximo** e a amplitude cresce muito: **ressonância**.
- **Onde aparece no ENEM:**

| Situação | Quem tem a f natural | Quem força |
|---|---|---|
| Taça quebrando com a voz (Q6) | taça de cristal | nota da cantora (**frequência**, não intensidade) |
| Forno de micro-ondas (Q38, Q50) | rotação das moléculas de água | campo elétrico oscilante |
| Sintonizar rádio/TV (Q90) | circuito receptor | onda da emissora |
| Nanoantena (Q40) | elétrons na nanoestrutura | luz incidente |
| Pêndulos acoplados (Q67) | pêndulo de mesmo comprimento | pêndulo que oscila |

- **Pegadinha:** a questão da taça diz explicitamente que **não é a intensidade** que quebra; é a coincidência de **frequência**.
- **Como memorizar:** "**Ressonância = mesma Sintonia**" (RS: Ritmo Sincronizado).

### Questão
Em 2000, uma passarela de pedestres recém-inaugurada sobre um rio passou a balançar lateralmente de forma intensa quando centenas de pessoas a atravessavam ao mesmo tempo. Engenheiros constataram que o ritmo lateral do caminhar humano, cerca de 1 oscilação por segundo, coincidia com uma das frequências de oscilação lateral da própria estrutura. A passarela foi fechada e só reaberta após a instalação de amortecedores.

O fenômeno físico responsável pelo balanço intenso e a grandeza cuja coincidência o provocou são, respectivamente,
- a) interferência e amplitude.
- b) ressonância e frequência.
- c) ressonância e intensidade.
- d) difração e comprimento de onda.
- e) efeito Doppler e velocidade.

### Resolução passo a passo
1. Palavras-chave do texto: "**coincidia** com uma das frequências de oscilação da própria estrutura" = frequência natural.
2. Força periódica externa (passos) com **mesma frequência** que a natural → absorção máxima de energia → amplitude enorme: **ressonância**.
3. A grandeza que precisa coincidir é a **frequência** (cerca de 1 Hz).
4. Os amortecedores dissipam a energia absorvida, limitando a amplitude.
5. Por que cada distrator cai:
   - a) Interferência é superposição de duas ondas; aqui é uma força agindo sobre um sistema com f natural.
   - c) Mesmo com muitas pessoas, o que importa é o ritmo, não a "força" dos passos (mesma lógica da taça, Q6).
   - d) Não há obstáculo sendo contornado.
   - e) Não há fonte em movimento relativo alterando a frequência percebida.

**Gabarito: B**

---

## Questão 8 (Padrão P31: harmônicos em tubo aberto e cordas)

### O que você precisa saber antes de fazer essa questão
- **Onda estacionária:** quando uma onda vai e volta num espaço limitado (corda presa, tubo), formam-se pontos parados (**nós**) e pontos de vibração máxima (**ventres**). Cada "gomo" (fuso) mede **λ/2**.
- **Corda presa nas duas pontas** e **tubo aberto nas duas pontas** seguem a mesma regra: cabem **n meios-comprimentos de onda** no comprimento L.

| Harmônico | Desenho (nº de fusos) | λ | f |
|---|---|---|---|
| 1º (fundamental) | 1 | 2L | v/(2L) |
| 2º | 2 | L | 2·v/(2L) |
| 3º | 3 | 2L/3 | 3·v/(2L) |
| n-ésimo | n | **2L/n** | **n·v/(2L)** = n·f₁ |

- **Consequências cobradas:**
  - Corda/tubo/barra **menor** → λ menor → **frequência maior** (Q13, sino dos ventos; Q69, metade da corda dobra a f).
  - Mesmo material e mesmo meio → **mesma velocidade** para todos.
  - Todos os harmônicos são **múltiplos inteiros** da fundamental.
- **Pegadinha:** confundir com tubo **fechado** (só ímpares, λ = 4L/n, padrão P32, fica para outra lista).
- **Como memorizar:** "**Aberto: 2L sobre n. Fechado: 4L sobre ímpar**".

### Questão
Um estudante construiu uma flauta simplificada com um tubo de PVC de 85 cm de comprimento, aberto nas duas extremidades. Ao soprar com intensidades diferentes, ele conseguiu produzir os três primeiros harmônicos desse tubo, cujos padrões de onda estacionária estão representados no esquema (ventres nas extremidades abertas).

```
 1º harmônico:   ><        (1 fuso, λ1 = 2L)
 2º harmônico:   ><><      (2 fusos, λ2 = L)
 3º harmônico:   ><><><    (3 fusos, λ3 = 2L/3)
```

Considere a velocidade do som no ar igual a 340 m/s. Se o estudante conseguir produzir o harmônico seguinte, sua frequência será de
- a) 200 Hz.
- b) 400 Hz.
- c) 600 Hz.
- d) 800 Hz.
- e) 1 000 Hz.

### Resolução passo a passo
1. O "harmônico seguinte" ao 3º é o **4º** (n = 4).
2. Comprimento de onda: λ₄ = 2L/4 = L/2 = 0,85/2 = **0,425 m**.
3. Frequência: f₄ = v/λ₄ = 340/0,425 = **800 Hz**.
4. Conferência pelo atalho: f₁ = v/(2L) = 340/1,7 = 200 Hz, e f₄ = 4 × 200 = **800 Hz**.
5. Por que cada distrator cai:
   - a) 200 Hz é a fundamental (1º harmônico).
   - b) 400 Hz é o 2º.
   - c) 600 Hz é o 3º, que ele já produziu.
   - e) 1 000 Hz seria o 5º.

**Gabarito: D**

---

## Questão 9 (Padrão P38: efeito Doppler conceitual)

### O que você precisa saber antes de fazer essa questão
- **Intuição:** quando a fonte vem na sua direção, ela "persegue" as próprias ondas. As frentes de onda chegam **amontoadas** (λ menor) e com mais frequência. Quando se afasta, as frentes chegam **espaçadas**.

| Movimento relativo | Frequência percebida | Som |
|---|---|---|
| Aproximação | **maior** que a emitida | mais **agudo** |
| Afastamento | **menor** que a emitida | mais **grave** |
| Sem movimento relativo | igual à emitida | normal |

- **Detalhes que o ENEM cobra:**
  - A grandeza alterada é a **frequência** (altura), não a velocidade do som (Q60).
  - Durante a aproximação **com velocidade constante**, a frequência percebida é **constante e maior**; não vai aumentando aos poucos (Q25).
  - Quem viaja **junto** com a fonte não percebe Doppler (não há movimento relativo).
  - Vale também para ondas EM: o radar recebe a onda refletida pelo carro que se aproxima com f maior (Q94: f_refletida > f_emitida).
- **Pegadinha:** achar que o som fica mais agudo por ficar mais **forte** perto da fonte. Intensidade (volume) e altura são coisas diferentes.
- **Como memorizar:** "**Chegando = Comprimido = agudo**" (os três C).

### Questão
Um trem se desloca em linha reta e com velocidade constante, tocando continuamente uma buzina de frequência fixa. Ele passa direto, sem parar, por uma estação onde um passageiro aguarda outro trem na plataforma. O maquinista, sentado na cabine, também ouve a buzina durante todo o trajeto.

Comparando com a frequência emitida pela buzina, a frequência percebida
- a) pelo passageiro é maior na aproximação e menor no afastamento; pelo maquinista, é sempre igual à emitida.
- b) pelo passageiro é menor na aproximação e maior no afastamento; pelo maquinista, é sempre maior que a emitida.
- c) pelo passageiro é sempre igual à emitida, mas a intensidade aumenta na aproximação; pelo maquinista, é sempre igual à emitida.
- d) pelo passageiro aumenta continuamente na aproximação e diminui continuamente no afastamento; pelo maquinista, é sempre menor que a emitida.
- e) pelo passageiro e pelo maquinista é maior na aproximação e menor no afastamento.

### Resolução passo a passo
1. **Passageiro na plataforma:** há movimento relativo entre ele e a fonte.
   - Trem chegando: frentes de onda comprimidas → **f percebida maior** (mais agudo).
   - Trem indo embora: frentes espaçadas → **f percebida menor** (mais grave).
2. **Maquinista:** viaja junto com a buzina. A distância entre ele e a fonte não muda: **não há Doppler**. Ouve a frequência emitida o tempo todo.
3. Por que cada distrator cai:
   - b) Inverte o efeito.
   - c) A intensidade de fato aumenta na aproximação, mas a frequência **também** muda para o passageiro.
   - d) Com velocidade constante, a frequência percebida é **constante** em cada fase (gráfico em "degrau", Q25). E o maquinista não percebe alteração.
   - e) O maquinista não tem movimento relativo em relação à buzina.

**Gabarito: A**

---

## Questão 10 (Padrão P42: faixas do espectro eletromagnético e aplicações)

### O que você precisa saber antes de fazer essa questão
- **A régua do espectro** (todas com velocidade c no vácuo; a diferença está em f e λ):

```
 f cresce, energia cresce  →→→→→→→→→→→→→→→→→→→→→→→→→→→→→→
 RÁDIO | MICRO-ONDAS | INFRAVERMELHO | VISÍVEL | ULTRAVIOLETA | RAIOS X | GAMA
 ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←  λ cresce
                                  (VERMELHO ... VIOLETA)
```

- **Aplicações que o ENEM associa a cada faixa:**

| Faixa | Assinatura no texto | Exemplos |
|---|---|---|
| Rádio | longas distâncias, contorna obstáculos | AM/FM, controle de drone (Q21), TV |
| Micro-ondas | aquece água, comunicação | forno, celular, Wi-Fi, radar |
| **Infravermelho** | **calor**, corpo humano emite | controle remoto de TV (Q21), sensor de presença (Q65), câmera térmica, Herschel (Q3) |
| Visível | cores | lâmpadas, laser |
| **Ultravioleta** | queima, bronzeia, **esteriliza** | sol (Q8), melanina (Q63), lâmpada germicida |
| Raios X | atravessa tecidos moles, ionizante | radiografia (Q10), aeroporto (Q91) |

- **Pegadinhas:**
  - Controle remoto de TV usa **infravermelho** (alcance curto e precisa de "visada" direta), não rádio.
  - O corpo humano a 37 °C emite principalmente **infravermelho**, não luz visível.
  - "Ultra" violeta está **acima** do violeta em frequência; "infra" vermelho está **abaixo** do vermelho.
- **Como memorizar a ordem:** "**R**aimundo **M**ora **I**nfeliz **V**endo **U**ma **X**ícara **G**rande" (Rádio, Micro-ondas, IV, Visível, UV, X, Gama).

### Questão
Considere três equipamentos utilizados em um hospital moderno:

- I. Uma câmera usada na triagem de pacientes, que forma imagens da temperatura da pele mesmo em ambientes totalmente escuros.
- II. Uma lâmpada instalada em cabines de segurança biológica, que inativa bactérias e vírus nas superfícies, mas exige que ninguém esteja presente durante o uso, pois causa queimaduras na pele e lesões nos olhos.
- III. Um sistema de rastreamento de equipamentos, com etiquetas que se comunicam com antenas espalhadas pelos andares, atravessando paredes e operando na mesma faixa do Wi-Fi.

As radiações eletromagnéticas utilizadas pelos equipamentos I, II e III pertencem, respectivamente, às faixas do
- a) visível, raios X e rádio.
- b) infravermelho, ultravioleta e micro-ondas.
- c) ultravioleta, infravermelho e micro-ondas.
- d) infravermelho, raios X e visível.
- e) micro-ondas, ultravioleta e infravermelho.

### Resolução passo a passo
1. **Equipamento I:** imagem da **temperatura** da pele, no escuro. Todo corpo quente emite radiação térmica; a 37 °C, ela está no **infravermelho**. (Elimina a, c, e.)
2. **Equipamento II:** inativa microrganismos, queima a pele e lesa os olhos, típico de lâmpada **germicida**: **ultravioleta** (UV-C). Raios X também são perigosos, mas não são produzidos por "lâmpadas" de cabine nem usados para esterilizar superfícies desse jeito.
3. **Equipamento III:** atravessa paredes, mesma faixa do Wi-Fi (2,4 a 5 GHz): **micro-ondas**.
4. Sequência: infravermelho, ultravioleta, micro-ondas.
5. Por que cada distrator cai:
   - a) Luz visível não forma imagem no escuro total.
   - c) Troca I e II.
   - d) O Wi-Fi não é luz visível (luz visível não atravessa paredes).
   - e) Câmera térmica não usa micro-ondas.

**Gabarito: B**

---

## Balanço da Lista 1

| Questão | Padrão | Questões da lista oficial com a mesma lógica |
|---|---|---|
| 1 | P1: Equação fundamental v = λ·f | 50, 80 |
| 2 | P7: Onda mecânica × eletromagnética | 29, 44, 73 |
| 3 | P13: Intensidade ↔ amplitude | 72, 81, 97 |
| 4 | P22: Difração (contornar obstáculos) | 4, 14, 16, 84 |
| 5 | P24: Interferência destrutiva (fase oposta) | 2, 56, 58, 92 |
| 6 | P25: Interferência entre emissores de mesma frequência | 33, 36, 39, 54 |
| 7 | P28: Ressonância | 6, 38, 40, 90 |
| 8 | P31: Harmônicos em tubo aberto e cordas | 13, 28, 69 |
| 9 | P38: Efeito Doppler conceitual | 60, 94 |
| 10 | P42: Faixas do espectro eletromagnético | 3, 21, 65 |

Esses 10 padrões cobrem **32 das 100 questões** da lista oficial.

- Padrões abordados nesta lista: **10**
- Padrões abordados no total: **10 de 53**
- **Restam: 43 padrões**

Padrões restantes: P2, P3, P4, P5, P6, P8, P9, P10, P11, P12, P14, P15, P16, P17, P18, P19, P20, P21, P23, P26, P27, P29, P30, P32, P33, P34, P35, P36, P37, P39, P40, P41, P43, P44, P45, P46, P47, P48, P49, P50, P51, P52, P53.
