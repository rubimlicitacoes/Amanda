# -*- coding: utf-8 -*-
# Conteúdo das listas de Cinemática (padrões P23–P26 e P33–P48).
# Marcação ReportLab: <b>, <i>, <sub>, <super>.
# Blocos do guia: ("p", txt) parágrafo | ("b", txt) marcador | ("f", txt) fórmula | ("t", linhas) tabela

V0 = "v<sub>0</sub>"
AC = "a<sub>c</sub>"

ITENS = {}

ITENS["P23"] = dict(
    titulo="Lançamento horizontal → v<sub>0</sub> → altura de um lançamento vertical",
    origem="Questão 14 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> é um problema em <b>duas etapas</b> com a <b>mesma velocidade de saída</b>: "
              "1) com o lançamento <b>horizontal</b> você <b>descobre " + V0 + "</b>; 2) com esse " + V0 +
              ", calcula a <b>altura</b> de um lançamento <b>vertical</b>."),
        ("p", "<b>Etapa 1 (horizontal, altura h e alcance D):</b>"),
        ("b", "tempo de queda: h = g·t<super>2</super>/2, logo t = √(2h/g)"),
        ("b", "velocidade de saída: " + V0 + " = D/t"),
        ("p", "<b>Etapa 2 (vertical para cima, Torricelli com v = 0 no topo):</b>"),
        ("f", "H = " + V0 + "<super>2</super> / (2g)"),
        ("p", "<b>Atalho (juntando tudo):</b>"),
        ("f", "H = D<super>2</super> / (4h)"),
        ("p", "Confira na oficial (Q14): D = 3 m e h = 1 m, então H = 9/4 = 2,25 m ✔"),
        ("p", "<b>Pegadinha:</b> esquecer o \"2\" do 2g, ou responder " + V0 + " em vez da altura."),
    ],
    enunciado=[
        "Uma criança segura uma pistola d'água com o cano <b>horizontal</b>, a 1,25 m do chão, e observa que o jato "
        "atinge o solo a 4,0 m de distância horizontal. Em seguida, ela aponta a pistola <b>verticalmente para cima</b>, "
        "disparando com a mesma velocidade de saída. Considere g = 10 m/s<super>2</super> e despreze a resistência do ar.",
        "A altura máxima atingida pelo jato, <b>acima da saída da pistola</b>, é:",
    ],
    alternativas=["1,25 m", "2,0 m", "3,2 m", "4,0 m", "6,4 m"],
    resolucao=[
        "<b>Tempo de queda:</b> 1,25 = 5t<super>2</super>, então t<super>2</super> = 0,25 e <b>t = 0,5 s</b>.",
        "<b>Velocidade de saída:</b> " + V0 + " = 4,0 / 0,5 = <b>8 m/s</b>.",
        "<b>Altura vertical:</b> H = 8<super>2</super> / (2 × 10) = 64/20 = <b>3,2 m</b>.",
        "<b>Pelo atalho:</b> H = 4<super>2</super> / (4 × 1,25) = 16/5 = 3,2 m ✔",
    ],
    gabarito="C",
    armadilhas="(e) 6,4 m esqueceu o 2 de 2g. (d) 4,0 m é o alcance horizontal.",
    fixar="Horizontal dá " + V0 + "; com " + V0 + " você calcula a altura vertical por " + V0 + "<super>2</super>/2g.",
    oficial=None,
)

ITENS["P24"] = dict(
    titulo="Lançamento inclinado com tempo dado: Δx = v·cosθ·t",
    origem="Questão 2 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> quando um corpo sai <b>inclinado</b> (de um telhado ou de uma rampa), a velocidade tem uma "
              "parte horizontal e uma vertical. A horizontal é constante. Se o enunciado <b>já dá o tempo de voo</b>, basta multiplicar."),
        ("p", "<b>Decomposição (θ = ângulo com a horizontal):</b>"),
        ("f", "v<sub>x</sub> = v·cosθ      v<sub>y</sub> = v·senθ      D = v<sub>x</sub>·t"),
        ("p", "<b>Seno ou cosseno?</b> A componente <b>vizinha</b> ao ângulo leva <b>cosseno</b>. Se o ângulo é medido a partir "
              "da horizontal, a horizontal é vizinha, então cos."),
        ("t", [["Ângulo", "sen", "cos"], ["30°", "0,5", "≈ 0,87"], ["37°", "0,6", "0,8"], ["53°", "0,8", "0,6"]]),
        ("p", "<b>Pegadinha:</b> usar o v inteiro (sem decompor), usar seno no lugar de cosseno, ou responder a altura "
              "em vez da distância horizontal."),
    ],
    enunciado=[
        "Um toboágua termina em uma pequena rampa inclinada <b>37° abaixo da horizontal</b>, a 2,75 m acima da superfície "
        "da piscina. Uma pessoa deixa a rampa com velocidade de 5 m/s, na direção da rampa, e atinge a água <b>0,5 s</b> depois. "
        "Considere sen 37° = 0,6, cos 37° = 0,8 e despreze a resistência do ar.",
        "A distância horizontal entre o fim da rampa e o ponto onde a pessoa atinge a água é:",
    ],
    alternativas=["1,5 m", "2,0 m", "2,5 m", "2,75 m", "4,0 m"],
    resolucao=[
        "<b>Componente horizontal:</b> v<sub>x</sub> = 5 × cos 37° = 5 × 0,8 = <b>4 m/s</b>.",
        "<b>Horizontal é MU:</b> D = 4 × 0,5 = <b>2,0 m</b>.",
        "<b>Conferência (opcional):</b> v<sub>y</sub> = 5 × 0,6 = 3 m/s para baixo; queda = 3 × 0,5 + 5 × 0,5<super>2</super> "
        "= 1,5 + 1,25 = 2,75 m ✔ (bate com a altura dada).",
    ],
    gabarito="B",
    armadilhas="(a) usou seno. (c) não decompôs (5 × 0,5). (d) é a altura.",
    fixar="Ângulo com a horizontal: v<sub>x</sub> = v·cosθ. Com o tempo dado, D = v<sub>x</sub>·t.",
    oficial="Na Q2, a água sai do telhado a 4 m/s com 30°: D = 4 × 0,87 × 0,6 ≈ 2,1 m.",
)

ITENS["P25"] = dict(
    titulo="Equação da trajetória para atingir um alvo",
    origem="Questão 37 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> com o ângulo de disparo fixo, só há <b>uma velocidade</b> que faz a trajetória passar exatamente "
              "pelo alvo. Escreva a posição horizontal e a vertical em função do tempo e <b>force</b> que coincidam com o alvo."),
        ("p", "<b>Método do tempo (o mais seguro):</b>"),
        ("b", "1. Horizontal (MU): x = " + V0 + "·cosθ·t, então t = x / (" + V0 + "·cosθ)"),
        ("b", "2. Vertical (MUV): y = " + V0 + "·senθ·t − g·t<super>2</super>/2"),
        ("b", "3. Substitua o t da etapa 1 na etapa 2 e isole " + V0),
        ("p", "<b>Equação pronta (se preferir):</b>"),
        ("f", "y = x·tgθ − g·x<super>2</super> / (2·" + V0 + "<super>2</super>·cos<super>2</super>θ)"),
        ("p", "<b>Cuidado:</b> o y do alvo é <b>relativo ao ponto de lançamento</b>: positivo se o alvo está acima, "
              "negativo se está abaixo."),
        ("p", "<b>Pegadinha:</b> medir a altura do alvo a partir do chão, e não do ponto de disparo."),
    ],
    enunciado=[
        "Em um jogo de celular, um estilingue dispara um projétil com ângulo de <b>53°</b> acima da horizontal. O alvo está "
        "<b>6 m</b> à frente e <b>3 m acima</b> do ponto de disparo. Considere g = 10 m/s<super>2</super>, sen 53° = 0,8, "
        "cos 53° = 0,6 e despreze a resistência do ar.",
        "A velocidade de disparo que faz o projétil atingir o alvo é:",
    ],
    alternativas=["6 m/s", "8 m/s", "10 m/s", "12 m/s", "15 m/s"],
    resolucao=[
        "<b>Horizontal:</b> 6 = (0,6·" + V0 + ")·t, então <b>t = 10/" + V0 + "</b>.",
        "<b>Vertical:</b> 3 = (0,8·" + V0 + ")·t − 5t<super>2</super>.",
        "<b>Substituir:</b> 3 = 0,8·" + V0 + "·(10/" + V0 + ") − 5·(100/" + V0 + "<super>2</super>), que dá 3 = 8 − 500/" + V0 + "<super>2</super>.",
        "<b>Isolar:</b> 500/" + V0 + "<super>2</super> = 5, então " + V0 + "<super>2</super> = 100 e <b>" + V0 + " = 10 m/s</b>.",
        "<b>Teste rápido:</b> t = 1 s; x = 6 × 1 = 6 ✔; y = 8 − 5 = 3 ✔",
    ],
    gabarito="C",
    armadilhas=None,
    fixar="Alvo dado: tire t da horizontal e jogue na vertical.",
    oficial="Na Q37, o alvo A estava 120 m à frente e 35 m acima do canhão B. Pelo mesmo método: "
            "35 = 160 − 200 000/" + V0 + "<super>2</super>, então " + V0 + " = 40 m/s. A altura de P (45 m) era um dado distrator.",
)

ITENS["P26"] = dict(
    titulo="Alcance ∝ v<sub>0</sub><super>2</super>/g (proporcionalidade)",
    origem="Questões 30 e 44 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> o alcance de um lançamento oblíquo (saída e chegada na mesma altura) depende de <b>quão rápido "
              "você lança</b> e de <b>quão forte a gravidade puxa</b>."),
        ("f", "A = " + V0 + "<super>2</super>·sen(2θ) / g"),
        ("p", "<b>Proporcionalidades (o ENEM cobra isso, não a conta):</b>"),
        ("b", "A ∝ " + V0 + "<super>2</super>: velocidade ×2 dá alcance ×4"),
        ("b", "A ∝ 1/g: na Lua (g/6), o alcance fica 6× maior (Q30 oficial)"),
        ("b", "alcance máximo em 45°"),
        ("p", "<b>Ligação com energia (estilingue, Q44 oficial):</b> E = m" + V0 + "<super>2</super>/2, então "
              "<b>A ∝ " + V0 + "<super>2</super> ∝ energia elástica</b>. Ela pode ser escrita de dois jeitos:"),
        ("b", "<b>mesma deformação x:</b> E = k·x<super>2</super>/2, então E ∝ k (elástico mais duro guarda <b>mais</b> energia)"),
        ("b", "<b>mesma força F:</b> E = F<super>2</super>/(2k), então E ∝ 1/k (elástico mais duro estica menos e guarda "
              "<b>menos</b> energia, como na oficial, em que deu 1/2)"),
        ("p", "<b>Pegadinha:</b> não ler qual grandeza é <b>igual</b> nas duas situações (força ou deformação)."),
    ],
    enunciado=[
        "Um garoto compara dois estilingues: um com elástico \"duro\", de constante elástica k<sub>d</sub>, e outro com elástico "
        "\"mole\", de constante k<sub>m</sub>, sendo <b>k<sub>d</sub> = 3·k<sub>m</sub></b>. Ele puxa os dois <b>até a mesma "
        "deformação</b> e lança pedras idênticas com o mesmo ângulo. Despreze perdas de energia e a resistência do ar.",
        "A razão D<sub>d</sub>/D<sub>m</sub> entre os alcances horizontais obtidos com o estilingue duro e com o mole é:",
    ],
    alternativas=["1/3", "1/√3", "1", "√3", "3"],
    resolucao=[
        "<b>Igual nas duas situações:</b> a <b>deformação</b> x, então E = k·x<super>2</super>/2 e "
        "E<sub>d</sub>/E<sub>m</sub> = k<sub>d</sub>/k<sub>m</sub> = <b>3</b>.",
        "<b>Energia vira cinética:</b> m" + V0 + "<super>2</super>/2 = E, então " + V0 + "<super>2</super> também fica <b>3×</b>.",
        "<b>Alcance:</b> A ∝ " + V0 + "<super>2</super>, então D<sub>d</sub>/D<sub>m</sub> = <b>3</b>.",
    ],
    gabarito="E",
    armadilhas="(a) é o raciocínio de \"mesma força\" (o caso da oficial), mas aqui a deformação é que é igual. "
               "(d) √3 compara velocidades, não alcances.",
    fixar="Alcance ∝ " + V0 + "<super>2</super>/g. Pela energia: mesma deformação, E ∝ k; mesma força, E ∝ 1/k.",
    oficial=None,
)

ITENS["P33"] = dict(
    titulo="Direção da aceleração centrípeta (radial, para dentro)",
    origem="Questão 32 (ENEM Digital)",
    guia=[
        ("p", "<b>Intuição:</b> velocidade é um <b>vetor</b> (módulo, direção e sentido). Numa curva, mesmo com o velocímetro "
              "parado no mesmo número, a <b>direção</b> da velocidade muda o tempo todo. Mudar a velocidade significa ter "
              "<b>aceleração</b>."),
        ("p", "<b>Conceito (MCU ou curva com velocidade escalar constante):</b>"),
        ("b", "<b>velocidade:</b> tangente à trajetória"),
        ("b", "<b>aceleração centrípeta:</b> radial, apontando para o centro da curva"),
        ("b", "<b>aceleração tangencial:</b> zero (o módulo não muda)"),
        ("p", "<b>Se o velocímetro variasse:</b> apareceria também a aceleração tangencial (no sentido de v se acelera, "
              "contra v se freia)."),
        ("p", "<b>Pegadinha:</b> \"velocidade constante, então aceleração nula\" ✗. Outro erro é a aceleração \"para fora\": "
              "a sensação de ser jogado para fora é <b>inércia</b>, não aceleração."),
    ],
    enunciado=[
        "Um ciclista contorna uma rotatória circular e seu ciclocomputador indica <b>velocidade constante</b> durante toda a volta.",
        "Sobre a velocidade e a aceleração do ciclista nesse trecho, é correto afirmar que:",
    ],
    alternativas=[
        "a velocidade é constante e a aceleração é nula.",
        "a velocidade é tangente à curva e a aceleração é radial, apontando para fora da rotatória.",
        "a velocidade é tangente à curva e a aceleração é radial, apontando para o centro da rotatória.",
        "a velocidade e a aceleração são tangentes à curva, no mesmo sentido.",
        "a velocidade aponta para o centro e a aceleração é tangente à curva.",
    ],
    resolucao=[
        "<b>\"Velocidade constante\" no aparelho:</b> só o <b>módulo</b> é constante.",
        "<b>Direção:</b> muda a cada instante, então <b>há aceleração</b>.",
        "<b>Como o módulo não muda:</b> não há componente tangencial, só a <b>centrípeta</b>, apontando <b>para o centro</b>.",
        "<b>A velocidade:</b> sempre <b>tangente</b> à trajetória.",
    ],
    gabarito="C",
    armadilhas="(a) confunde módulo com vetor. (b) confunde a sensação de inércia com aceleração.",
    fixar="Curva com velocímetro fixo: v tangente, a aponta para o centro.",
    oficial=None,
)

ITENS["P34"] = dict(
    titulo="a<sub>c</sub> = v<super>2</super>/R quantitativo (raio mínimo de curva)",
    origem="Questão 57 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> quanto <b>mais rápido</b> e quanto <b>mais fechada</b> a curva, maior a aceleração para o centro, "
              "e maior o \"empurrão\" que o passageiro sente."),
        ("f", AC + " = v<super>2</super> / R      ⟹      R = v<super>2</super> / " + AC),
        ("p", "<b>Como o ENEM cobra (Q57 oficial):</b> dá a distância e o tempo da viagem (para tirar a velocidade média), "
              "limita a aceleração como fração de g (ex.: 0,1·g = 1 m/s<super>2</super>) e pede o <b>raio mínimo</b> da curva."),
        ("p", "<b>Raio mínimo:</b> a curva não pode ser mais fechada que esse valor, senão a aceleração ultrapassa o limite de conforto."),
        ("p", "<b>Pegadinha:</b> usar v em km/h na fórmula (dá um número absurdo), ou não elevar v ao quadrado."),
    ],
    enunciado=[
        "Um projeto de trem de alta velocidade ligará duas cidades separadas por 324 km, em 1 hora e 30 minutos, com velocidade "
        "praticamente constante. Para conforto dos passageiros, a aceleração lateral nas curvas não deve ultrapassar "
        "<b>0,05·g</b> (use g = 10 m/s<super>2</super>).",
        "O raio de curvatura <b>mínimo</b> das curvas deve ser, aproximadamente:",
    ],
    alternativas=["120 m", "432 m", "3 600 m", "7 200 m", "93 312 m"],
    resolucao=[
        "<b>Velocidade:</b> 324 km ÷ 1,5 h = <b>216 km/h</b>, que dividido por 3,6 dá <b>60 m/s</b>.",
        "<b>Aceleração máxima:</b> 0,05 × 10 = <b>0,5 m/s<super>2</super></b>.",
        "<b>Raio mínimo:</b> R = 60<super>2</super> / 0,5 = 3600 / 0,5 = <b>7 200 m</b>.",
    ],
    gabarito="D",
    armadilhas="(e) usou km/h. (c) usou " + AC + " = 1 m/s<super>2</super> (0,1·g, o valor da oficial). "
               "(a) não elevou ao quadrado (60/0,5).",
    fixar=AC + " = v<super>2</super>/R, com v em m/s. Aceleração máxima dá o raio mínimo.",
    oficial=None,
)

ITENS["P35"] = dict(
    titulo="v = 2πR/T com o raio dependente da latitude",
    origem="Questão 34 (ENEM PPL)",
    guia=[
        ("p", "<b>Intuição:</b> a Terra gira uma volta a cada 24 h, mas <b>nem todo ponto anda à mesma velocidade</b>. "
              "Quem está no Equador percorre um círculo enorme; quem está perto do polo, um círculo pequeno. Os dois levam 24 h."),
        ("b", "<b>velocidade angular:</b> igual para todos os pontos (uma volta em 24 h)"),
        ("b", "<b>raio do círculo descrito numa latitude φ:</b> r = R·cos φ"),
        ("b", "<b>velocidade linear:</b> v = 2πr/T"),
        ("p", "<b>Por que cosseno?</b> Desenhe o raio da Terra até o ponto. A distância até o <b>eixo</b> é o cateto "
              "<b>vizinho</b> ao ângulo de latitude."),
        ("p", "<b>Referência:</b> no Equador, com π = 3, v = 2 · 3 · 6400 / 24 = <b>1600 km/h</b>."),
        ("p", "<b>Pegadinha:</b> usar o raio da Terra direto (dá a velocidade do Equador) ou usar seno."),
    ],
    enunciado=[
        "Uma estudante em Oslo, na Noruega (latitude ≈ 60° N), quer estimar a velocidade linear com que a cidade se move por "
        "causa da rotação da Terra. Considere o raio da Terra igual a 6 400 km, o período de rotação igual a 24 h, π = 3, "
        "cos 60° = 0,5 e sen 60° ≈ 0,87.",
        "A velocidade linear obtida, em km/h, é aproximadamente:",
    ],
    alternativas=["400", "800", "1 392", "1 600", "3 200"],
    resolucao=[
        "<b>Raio do círculo em Oslo:</b> r = 6400 × cos 60° = 6400 × 0,5 = <b>3200 km</b>.",
        "<b>Comprimento da volta:</b> 2πr = 2 × 3 × 3200 = <b>19 200 km</b>.",
        "<b>Velocidade:</b> 19 200 / 24 = <b>800 km/h</b>.",
    ],
    gabarito="B",
    armadilhas="(d) é a velocidade do Equador (esqueceu a latitude). (c) usou seno. (e) é o raio, não a velocidade.",
    fixar="Latitude φ: raio = R·cosφ. Mesmo ω para todos; v diminui em direção aos polos.",
    oficial="Na Q34 (Brasília, 16°): r = 6400 × 0,9 = 5760 km, então v = 2 × 3 × 5760 / 24 = 1440 km/h.",
)

ITENS["P36"] = dict(
    titulo="Transmissão por engrenagens e correntes",
    origem="Questão 21 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> há dois tipos de acoplamento, e cada um tem sua regra:"),
        ("t", [["Acoplamento", "Exemplo", "O que é igual", "Consequência"],
               ["Pela borda (dentes ou corrente)", "coroa e catraca da bike", "velocidade linear da borda",
                "f<sub>1</sub>·N<sub>1</sub> = f<sub>2</sub>·N<sub>2</sub>; a menor gira mais rápido"],
               ["Pelo eixo (coaxiais)", "catraca e roda traseira", "frequência (e ω)", "giram juntas, com a mesma f"]]),
        ("p", "<b>Método para trens de engrenagens:</b> vá <b>elo por elo</b>, aplicando a regra certa em cada ligação."),
        ("p", "<b>Velocidade de uma roda:</b> v = 2πR·f (f em voltas por segundo)."),
        ("p", "<b>Pegadinha:</b> inverter a razão (a engrenagem <b>menor</b> gira <b>mais</b>), ou esquecer de converter rpm "
              "para Hz (÷60)."),
    ],
    enunciado=[
        "Uma bicicleta tem coroa (engrenagem do pedal) com <b>48 dentes</b> e catraca (engrenagem da roda traseira) com "
        "<b>16 dentes</b>, ligadas por corrente. A catraca está presa ao eixo da roda traseira, cujo raio é 0,35 m. "
        "O ciclista pedala a <b>60 rpm</b>. Considere π = 3 e que a roda não desliza.",
        "A velocidade da bicicleta é, aproximadamente:",
    ],
    alternativas=["6,3 km/h", "7,6 km/h", "11,3 km/h", "22,7 km/h", "45,4 km/h"],
    resolucao=[
        "<b>Coroa → catraca (corrente, borda):</b> f<sub>cat</sub> × 16 = 60 × 48, então f<sub>cat</sub> = <b>180 rpm</b>.",
        "<b>Catraca → roda (mesmo eixo):</b> f<sub>roda</sub> = 180 rpm = 180/60 = <b>3 Hz</b>.",
        "<b>Velocidade da roda (que é a da bicicleta):</b> v = 2 × 3 × 0,35 × 3 = <b>6,3 m/s</b>.",
        "<b>Converter:</b> 6,3 × 3,6 ≈ <b>22,7 km/h</b>.",
    ],
    gabarito="D",
    armadilhas="(a) não converteu m/s para km/h. (b) inverteu a razão (a roda giraria a 20 rpm). (c) esqueceu o \"2\" de 2πR.",
    fixar="Pela borda: f·N igual (menor gira mais). Pelo eixo: mesma f.",
    oficial="Na Q21: A (24) → B (72) dá 18 × 24/72 = 6 rpm; B e C são coaxiais (6 rpm); C (36) → D (108) dá "
            "6 × 36/108 = 2 rpm.",
)

ITENS["P37"] = dict(
    titulo="Mesmo período → mesma velocidade angular",
    origem="Questão 19 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> se duas coisas completam uma volta <b>no mesmo tempo</b>, giram com a <b>mesma velocidade "
              "angular</b>, não importa o tamanho delas."),
        ("f", "T<sub>1</sub> = T<sub>2</sub>   ⟺   ω<sub>1</sub> = ω<sub>2</sub>      (ω = 2π/T)"),
        ("b", "<b>Satélite geoestacionário (Q19 oficial):</b> dá uma volta na Terra a cada 24 h. Para os painéis ficarem "
              "sempre virados para o Sol, eles giram uma volta a cada 24 h em relação ao satélite: ω = ω<sub>Terra</sub>."),
        ("b", "<b>Lua:</b> mostra sempre a mesma face para a Terra."),
        ("p", "<b>Pegadinha:</b> \"mostra sempre a mesma face, então não gira\" ✗. Se não girasse, mostraria <b>todas</b> "
              "as faces ao longo da órbita."),
        ("p", "<b>Experimento mental:</b> ande em volta de uma cadeira sempre olhando para ela. Ao completar a volta, "
              "<b>você também girou 360° sobre si mesma</b>."),
    ],
    enunciado=[
        "A Lua leva cerca de 27,3 dias para completar uma volta em torno da Terra e, mesmo assim, mostra <b>sempre a mesma "
        "face</b> para nós.",
        "A velocidade angular de <b>rotação</b> da Lua em torno do próprio eixo, comparada à sua velocidade angular de "
        "<b>translação</b> em torno da Terra, é:",
    ],
    alternativas=["nula, pois a Lua não gira em torno do próprio eixo.", "metade.", "igual.", "o dobro.", "27,3 vezes maior."],
    resolucao=[
        "<b>Mesma face voltada para a Terra:</b> a cada volta em torno da Terra, a Lua precisa girar <b>exatamente uma volta</b> "
        "sobre si mesma.",
        "<b>Então:</b> T<sub>rotação</sub> = T<sub>translação</sub> = 27,3 dias.",
        "<b>Mesmo período:</b> <b>mesma velocidade angular</b>.",
        "<b>Teste da alternativa (a):</b> se a Lua não girasse, depois de meia órbita veríamos o lado oposto, o que contradiz o enunciado.",
    ],
    gabarito="C",
    armadilhas=None,
    fixar="Mesmo período = mesmo ω. Mostrar sempre a mesma face exige girar.",
    oficial=None,
)

ITENS["P38"] = dict(
    titulo="Velocidade angular relativa (sentido)",
    origem="Questão 58 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> a Terra gira de <b>oeste para leste</b>. Algo no céu pode girar em torno do eixo da Terra "
              "<b>mais rápido, igual ou mais devagar</b>, no mesmo sentido ou no oposto. O que um observador no chão vê depende "
              "da <b>velocidade angular relativa</b>:"),
        ("f", "ω<sub>rel</sub> = ω<sub>objeto</sub> − ω<sub>Terra</sub>"),
        ("t", [["O observador no solo vê o objeto...", "Conclusão"],
               ["parado no céu", "ω<sub>obj</sub> = ω<sub>Terra</sub>, mesmo sentido (geoestacionário)"],
               ["andar de oeste para leste", "mesmo sentido e ω<sub>obj</sub> &gt; ω<sub>Terra</sub>"],
               ["andar de leste para oeste", "ω<sub>obj</sub> &lt; ω<sub>Terra</sub> (como o Sol e as estrelas) ou sentido oposto"]]),
        ("p", "<b>Pegadinha:</b> \"geoestacionário está parado, então ω = 0\" ✗. Ele está parado <b>em relação à Terra</b>, "
              "mas gira junto com ela."),
    ],
    enunciado=[
        "Um observador em Fortaleza vê a Estação Espacial Internacional (ISS) cruzar o céu <b>de oeste para leste</b> em poucos "
        "minutos, enquanto um satélite geoestacionário de TV parece <b>sempre parado</b> no mesmo ponto do céu.",
        "Em relação ao eixo de rotação da Terra, as velocidades angulares da ISS e do satélite geoestacionário são, respectivamente:",
    ],
    alternativas=[
        "superior à da Terra e no mesmo sentido; igual à da Terra e no mesmo sentido.",
        "igual à da Terra; nula.",
        "inferior à da Terra e no sentido oposto; igual à da Terra.",
        "superior à da Terra e no sentido oposto; nula.",
        "superior à da Terra e no mesmo sentido; nula.",
    ],
    resolucao=[
        "<b>Satélite geoestacionário:</b> parece parado, então acompanha a Terra: <b>ω igual, mesmo sentido</b>.",
        "<b>ISS:</b> \"ultrapassa\" o observador de oeste para leste, ou seja, avança no sentido da rotação <b>mais rápido</b> "
        "que o solo: <b>ω superior, mesmo sentido</b> (uma volta em cerca de 1,5 h, contra 24 h da Terra).",
        "<b>Eliminando:</b> (b), (d) e (e) dizem que o geoestacionário tem ω nulo, confundindo \"parado em relação à Terra\" "
        "com \"parado no espaço\".",
    ],
    gabarito="A",
    armadilhas=None,
    fixar="Parado no céu = gira junto com a Terra. Andando para leste = mais rápido que a Terra.",
    oficial=None,
)

ITENS["P39"] = dict(
    titulo="Projeção do MCU = MHS",
    origem="Questão 9 (ENEM PPL)",
    guia=[
        ("p", "<b>Intuição:</b> olhe uma roda girando <b>de perfil</b> (ou a sombra dela). Um ponto da borda parece apenas "
              "<b>ir e vir em linha reta</b>: rápido no meio, desacelerando nas pontas, parando por um instante e voltando. "
              "Esse vai e vem é o <b>Movimento Harmônico Simples (MHS)</b>."),
        ("b", "a <b>projeção</b> de um MCU sobre um diâmetro é um <b>MHS</b>"),
        ("b", "período do MHS = período do MCU; amplitude do MHS = raio do MCU"),
        ("b", "velocidade <b>máxima no centro</b> e <b>zero nas extremidades</b>"),
        ("p", "<b>Pegadinha:</b> escolher \"retilíneo uniforme\" (a velocidade não é constante) ou \"uniformemente variado\" "
              "(a aceleração muda de valor e de sentido)."),
    ],
    enunciado=[
        "Ao meio-dia, com o Sol a pino, uma bicicleta é virada de cabeça para baixo e sua roda é posta para girar com "
        "velocidade angular constante, num plano vertical. Uma criança observa a <b>sombra da válvula do pneu</b> projetada no chão.",
        "A sombra da válvula descreve um movimento:",
    ],
    alternativas=[
        "retilíneo uniforme, com velocidade constante.",
        "harmônico simples, com velocidade máxima nas extremidades da trajetória.",
        "harmônico simples, com velocidade máxima no centro da trajetória.",
        "retilíneo uniformemente variado, com velocidade máxima em uma das extremidades.",
        "circular uniforme, com velocidade de módulo constante.",
    ],
    resolucao=[
        "<b>A válvula:</b> está em MCU.",
        "<b>A sombra (luz vertical):</b> é a projeção do MCU sobre o chão, um segmento de reta: <b>MHS</b>.",
        "<b>Velocidade:</b> com a válvula no topo ou embaixo, ela se move na horizontal e a sombra tem <b>velocidade máxima</b> "
        "(centro do segmento). Nas laterais, a válvula se move na vertical e a sombra <b>para</b> (extremidades).",
    ],
    gabarito="C",
    armadilhas=None,
    fixar="Sombra de MCU = MHS: rápido no meio, parado nas pontas.",
    oficial=None,
)

ITENS["P40"] = dict(
    titulo="Período por contagem de ciclos (movimentos alternados)",
    origem="Questão 10 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> <b>período</b> é o tempo de <b>um ciclo completo</b>, até o movimento se repetir exatamente igual."),
        ("p", "<b>O detalhe que o ENEM explora:</b> em movimentos <b>alternados</b> (pés na corrida, braços no nado crawl), "
              "um ciclo de <b>um</b> membro inclui <b>dois</b> movimentos totais."),
        ("b", "passadas ou braçadas totais = N; ciclos de um membro ≈ N/2"),
        ("b", "período de um membro = tempo total ÷ (N/2) = <b>2 × (tempo de uma passada)</b>"),
        ("b", "frequência: f = 1/T (ciclos por segundo, Hz)"),
        ("p", "<b>Pegadinha:</b> dar o tempo de <b>uma</b> passada como período do pé, ou responder a frequência quando se "
              "pede o período."),
    ],
    enunciado=[
        "Uma nadadora completa 50 m no estilo crawl em <b>25 s</b>, executando <b>40 braçadas</b> no total, alternando braço "
        "direito e esquerdo. Ela começa a prova com o braço direito.",
        "O período do movimento do <b>braço direito</b> dessa nadadora é mais próximo de:",
    ],
    alternativas=["0,625 s", "0,8 s", "1,25 s", "1,6 s", "2,5 s"],
    resolucao=[
        "<b>Braçadas do braço direito:</b> alternadas, começando pela direita: 1ª, 3ª, 5ª, …, 39ª, ou seja, <b>20 braçadas</b>.",
        "<b>Ciclos do braço direito:</b> ≈ 20 em 25 s.",
        "<b>Período:</b> T = 25/20 = <b>1,25 s</b>.",
        "<b>Outro caminho:</b> uma braçada leva 25/40 = 0,625 s; o braço direito repete a cada 2 braçadas: 2 × 0,625 = 1,25 s ✔",
    ],
    gabarito="C",
    armadilhas="(a) é o tempo de uma braçada. (b) é a frequência (1/1,25 = 0,8 Hz). (d) é 40/25 (braçadas por segundo).",
    fixar="Movimento alternado: o período de um membro é o tempo de dois movimentos.",
    oficial="Na Q10: 41 passadas em 10 s, começando com o pé direito, dão ≈ 20 ciclos do pé direito: T ≈ 10/20 = 1/2 s.",
)

ITENS["P41"] = dict(
    titulo="Catraca: controle do sentido de rotação (conceitual)",
    origem="Questão 17 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> um eixo empurrado ora para um lado, ora para o outro, de forma <b>aleatória</b> (moléculas, "
              "ondas, vento), vai e volta e, na média, <b>não sai do lugar</b>. Para tirar trabalho útil disso, é preciso um "
              "mecanismo que <b>só deixe girar num sentido</b>: a <b>catraca</b> (engrenagem com dente assimétrico e trava)."),
        ("b", "empurrão no sentido \"permitido\": o dente desliza e o eixo <b>gira</b>"),
        ("b", "empurrão no sentido \"proibido\": a trava segura e o eixo <b>não volta</b>"),
        ("b", "resultado: o vai e vem aleatório vira uma <b>rotação num único sentido</b>"),
        ("p", "<b>Exemplos do cotidiano:</b> a roda livre da bicicleta, a chave de catraca, o mecanismo de corda de relógios."),
        ("p", "<b>Pegadinha:</b> dizer que a catraca <b>aumenta</b> a velocidade, <b>mede</b> ângulos ou <b>elimina</b> a "
              "aleatoriedade. Ela <b>seleciona o sentido</b>."),
    ],
    enunciado=[
        "Um protótipo de gerador de energia das ondas usa uma boia ligada a um eixo. Conforme as ondas sobem e descem de forma "
        "irregular, a boia faz o eixo girar ora num sentido, ora no outro. Para que o gerador funcione, os engenheiros "
        "instalaram no eixo uma <b>engrenagem de dentes assimétricos com uma trava</b> (catraca).",
        "A função desse mecanismo é:",
    ],
    alternativas=[
        "aumentar a velocidade angular do eixo, multiplicando a frequência das ondas.",
        "travar o gerador, impedindo que ele se solte com as ondas fortes.",
        "controlar o sentido de rotação, permitindo que o eixo gire em um único sentido e aproveitando apenas os movimentos favoráveis.",
        "eliminar o caráter aleatório das ondas, tornando seu movimento regular.",
        "medir o ângulo girado pelo eixo, contando o número de dentes da engrenagem.",
    ],
    resolucao=[
        "<b>O problema:</b> as ondas giram o eixo nos <b>dois sentidos</b>; na média, não há giro útil.",
        "<b>O que a catraca faz:</b> bloqueia um sentido e libera o outro.",
        "<b>Consequência:</b> o eixo só avança num sentido; o movimento aleatório é \"retificado\".",
        "<b>Eliminando:</b> (a) multiplicar frequência seria um trem de engrenagens; (b) ela trava só um sentido; "
        "(d) as ondas continuam irregulares; (e) medir não é o objetivo.",
    ],
    gabarito="C",
    armadilhas=None,
    fixar="Catraca = filtro de sentido. Transforma vai e vem em giro num único sentido.",
    oficial="Na Q17, a mesma lógica com o movimento browniano: \"controle do sentido da velocidade tangencial\".",
)

ITENS["P42"] = dict(
    titulo="Conservação da quantidade de movimento",
    origem="Questão 25 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> no espaço ou no gelo (sem atrito), se você empurra algo para frente, <b>é empurrado para trás</b>. "
              "Quem tem <b>menos massa</b> sai <b>mais rápido</b>."),
        ("p", "<b>Conceito (sistema isolado, partindo do repouso):</b>"),
        ("f", "Q<sub>antes</sub> = Q<sub>depois</sub>   ⟹   0 = m<sub>1</sub>v<sub>1</sub> − m<sub>2</sub>v<sub>2</sub>   ⟹   "
              "m<sub>1</sub>v<sub>1</sub> = m<sub>2</sub>v<sub>2</sub>"),
        ("p", "<b>Leitura rápida:</b> a velocidade é <b>inversamente proporcional</b> à massa. Massa 40× maior dá velocidade 40× menor."),
        ("p", "<b>Pegadinha:</b> inverter a proporção (dar a velocidade maior ao mais pesado) ou somar as massas sem necessidade."),
    ],
    enunciado=[
        "Durante uma caminhada espacial, um astronauta de 80 kg (com traje) fica solto no espaço, em repouso em relação à "
        "estação. Para voltar, ele arremessa uma ferramenta de 2 kg com velocidade de 12 m/s em relação à estação, no sentido "
        "oposto ao da estação.",
        "A velocidade adquirida pelo astronauta, em relação à estação, é:",
    ],
    alternativas=["0,025 m/s", "0,15 m/s", "0,30 m/s", "0,60 m/s", "480 m/s"],
    resolucao=[
        "<b>Antes:</b> tudo em repouso, Q = 0.",
        "<b>Depois:</b> m<sub>astronauta</sub>·v = m<sub>ferramenta</sub>·v<sub>ferramenta</sub>, em sentidos opostos.",
        "<b>Conta:</b> 80·v = 2·12 = 24, então <b>v = 0,30 m/s</b>, no sentido da estação.",
        "<b>Bom senso:</b> a massa dele é 40× maior, então a velocidade é 40× menor: 12/40 = 0,3 ✔",
    ],
    gabarito="C",
    armadilhas="(e) inverteu a proporção (80 × 12/2). (a) fez 2/80, esquecendo a velocidade.",
    fixar="Empurrou do repouso: m<sub>1</sub>v<sub>1</sub> = m<sub>2</sub>v<sub>2</sub>. Mais massa, menos velocidade.",
    oficial="Na Q25: 90·v = 360·0,2, então v = 0,8 m/s.",
)

ITENS["P43"] = dict(
    titulo="Impulso com variação de massa (F·Δt = v·Δm)",
    origem="Questão 56 (ENEM PPL)",
    guia=[
        ("p", "<b>Intuição:</b> numa esteira que deve andar a <b>velocidade constante</b>, se alguém joga carga em cima (ou tira), "
              "a <b>quantidade de movimento</b> (Q = m·v) muda, porque a massa mudou. Para isso, é preciso uma <b>força</b> (impulso)."),
        ("p", "<b>Conceito (Teorema do Impulso):</b>"),
        ("f", "F·Δt = ΔQ = v·Δm      ⟹      F = v·(Δm/Δt)"),
        ("p", "Aqui <b>v é constante</b> e <b>o que varia é a massa</b>. Δm/Δt é a <b>vazão de massa</b> (kg/s): "
              "força = velocidade × vazão."),
        ("p", "<b>Pegadinha:</b> usar a massa total em vez da <b>variação</b> (Δm), ou esquecer de multiplicar pelo Δt."),
    ],
    enunciado=[
        "Em uma mineradora, uma esteira transporta areia com velocidade constante. Em um intervalo de <b>2,0 s</b>, areia "
        "caindo verticalmente sobre a esteira faz a massa total transportada aumentar de <b>500 kg para 560 kg</b>. Para manter "
        "a velocidade constante, o motor aplica uma força horizontal adicional constante de <b>45 N</b>.",
        "A velocidade da esteira é:",
    ],
    alternativas=["0,08 m/s", "0,75 m/s", "1,5 m/s", "3,0 m/s", "13,3 m/s"],
    resolucao=[
        "<b>Variação de massa:</b> Δm = 560 − 500 = <b>60 kg</b>.",
        "<b>Impulso = variação da quantidade de movimento:</b> F·Δt = v·Δm.",
        "<b>Substituir:</b> 45 × 2,0 = v × 60, então 90 = 60v e <b>v = 1,5 m/s</b>.",
    ],
    gabarito="C",
    armadilhas="(b) esqueceu o Δt (45/60). (a) usou a massa total (45/560).",
    fixar="Massa variando com v constante: F·Δt = v·Δm.",
    oficial="Na Q56: 250 × 0,10 = v × 200, então v = 0,125 m/s.",
)

ITENS["P44"] = dict(
    titulo="Ação e reação: forças internas × forças externas",
    origem="Questão 27 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> você não consegue se levantar puxando o próprio cabelo. Forças <b>internas</b> a um sistema "
              "<b>se anulam aos pares</b> (ação e reação). Para o sistema <b>todo</b> se mover, é preciso interagir com algo "
              "<b>de fora</b>: o chão, a água ou o ar que é <b>expulso</b>."),
        ("p", "<b>3ª Lei de Newton:</b> ação e reação têm o mesmo módulo, sentidos opostos e atuam em <b>corpos diferentes</b>."),
        ("p", "<b>Como analisar um carrinho:</b>"),
        ("b", "1. Defina o sistema (carrinho + tudo que está preso nele)."),
        ("b", "2. Pergunte: <b>algo sai do sistema</b> levando quantidade de movimento? <b>Não</b> (ímã puxando o próprio "
              "carrinho): forças internas se cancelam e ele <b>não anda</b>. <b>Sim</b> (ar soprado para trás): o carrinho "
              "anda <b>no sentido oposto</b> ao do ar expulso."),
        ("p", "<b>Caso da oficial (Q27, ventoinha soprando a própria vela):</b> a ventoinha empurra o ar para frente e recua; "
              "o ar bate na vela curva e é <b>devolvido</b>, empurrando a vela para frente com força um pouco <b>maior</b>. "
              "O resultado é um movimento <b>pequeno</b> para frente. A ventoinha virada para trás, sem vela no caminho, anda <b>mais</b>."),
        ("p", "<b>Pegadinha:</b> achar que \"soprar a própria vela\" funciona como vento de verdade, ou que forças iguais e "
              "opostas se anulam sempre (só se anulam quando atuam <b>no mesmo</b> sistema analisado)."),
    ],
    enunciado=[
        "Dois carrinhos de brinquedo idênticos, feitos de ferro, estão sobre um piso horizontal com atrito desprezível nas rodas. "
        "<b>Carrinho A:</b> um ímã potente está preso a uma haste fixada na frente do próprio carrinho, atraindo-o para frente. "
        "<b>Carrinho B:</b> uma pequena ventoinha presa ao carrinho sopra ar <b>para trás</b>.",
        "Os dois dispositivos são ligados ao mesmo tempo. Em relação ao movimento dos carrinhos:",
    ],
    alternativas=[
        "A e B se movem para frente.",
        "A não se move; B se move para frente, no sentido oposto ao do ar soprado.",
        "A se move para frente; B não se move.",
        "A não se move; B se move para trás, no mesmo sentido do ar soprado.",
        "Nenhum dos dois se move.",
    ],
    resolucao=[
        "<b>Carrinho A:</b> o ímã puxa o carrinho para frente e o carrinho puxa o ímã (preso a ele) para trás. São forças "
        "<b>internas</b> ao mesmo sistema e se anulam: <b>não anda</b>.",
        "<b>Carrinho B:</b> a ventoinha empurra o ar para trás e o ar empurra a ventoinha (e o carrinho) para frente. O ar "
        "<b>sai</b> do sistema, então há força externa resultante: <b>anda para frente</b>.",
    ],
    gabarito="B",
    armadilhas=None,
    fixar="Para o sistema andar, algo precisa sair dele levando quantidade de movimento. Forças internas se anulam.",
    oficial=None,
)

ITENS["P45"] = dict(
    titulo="Taxa líquida → função afim: V = V<sub>0</sub> + (entra − sai)·t",
    origem="Questão 42 (ENCCEJA)",
    guia=[
        ("p", "<b>Intuição:</b> é a <b>mesma</b> estrutura do MU (s = s<sub>0</sub> + v·t), aplicada a outra grandeza. "
              "Se algo <b>entra</b> e algo <b>sai</b> com taxas constantes, a variação líquida é a diferença das taxas:"),
        ("f", "Quantidade(t) = Quantidade<sub>0</sub> + (taxa de entrada − taxa de saída)·t"),
        ("t", [["MU", "Recipiente"], ["posição s", "volume V"], ["posição inicial s<sub>0</sub>", "volume inicial V<sub>0</sub>"],
               ["velocidade v", "taxa líquida (entrada − saída)"]]),
        ("p", "<b>Sinal da taxa líquida:</b> positiva enche, negativa esvazia, zero mantém o nível constante."),
        ("p", "<b>Pegadinha:</b> somar as taxas, multiplicar V<sub>0</sub> por uma taxa ou esquecer o V<sub>0</sub>."),
    ],
    enunciado=[
        "Uma piscina já contém V<sub>0</sub> litros de água quando uma bomba começa a enchê-la a uma vazão constante de "
        "<b>30 L/min</b>. Ao mesmo tempo, um vazamento no fundo deixa escapar <b>5 L/min</b>.",
        "A expressão que representa o volume V de água (em litros) em função do tempo t (em minutos), até a piscina encher, é:",
    ],
    alternativas=["V(t) = V<sub>0</sub> + 30t", "V(t) = V<sub>0</sub> + 25t", "V(t) = V<sub>0</sub> − 25t",
                  "V(t) = 30V<sub>0</sub> − 5t", "V(t) = V<sub>0</sub> + 35t"],
    resolucao=[
        "<b>Ponto de partida:</b> V<sub>0</sub> (já havia água).",
        "<b>Taxa líquida:</b> entra 30 e sai 5, então <b>+25 L/min</b>.",
        "<b>Função afim:</b> V(t) = V<sub>0</sub> + 25t (o \"s = s<sub>0</sub> + v·t\" da água).",
    ],
    gabarito="B",
    armadilhas="(a) ignorou o vazamento. (e) somou as taxas. (c) inverteu o sinal.",
    fixar="Quantidade = inicial + (entra − sai)·t. É o s = s<sub>0</sub> + vt disfarçado.",
    oficial="Na Q42: entra 4 e sai 3, então V = V<sub>0</sub> + t.",
)

ITENS["P46"] = dict(
    titulo="Taxa × tempo com porcentagem",
    origem="Questão 49 (ENEM)",
    guia=[
        ("p", "<b>Intuição:</b> muitas grandezas se acumulam com o tempo: distância (velocidade × tempo), radiação (dose por "
              "hora × horas), consumo, desgaste. O ENEM complica com <b>porcentagem do tempo</b> e com uma <b>unidade de "
              "comparação</b> no final."),
        ("p", "<b>Roteiro em 3 passos:</b>"),
        ("b", "1. <b>Tempo efetivo:</b> tempo total × porcentagem"),
        ("b", "2. <b>Acúmulo:</b> taxa × tempo efetivo"),
        ("b", "3. <b>Comparação:</b> acúmulo ÷ valor de referência (\"quantas radiografias\", \"quantos meses\")"),
        ("p", "<b>Pegadinha:</b> esquecer a porcentagem, usar a taxa no tempo total ou fazer a divisão invertida no final."),
    ],
    enunciado=[
        "Um motoboy trabalha <b>160 horas por mês</b>. Em <b>75%</b> desse tempo ele está efetivamente pilotando, a uma "
        "velocidade média de <b>30 km/h</b>. No restante, aguarda pedidos parado. O pneu traseiro da moto tem vida útil de "
        "cerca de <b>9 000 km</b>.",
        "Aproximadamente quantos meses dura o pneu traseiro desse motoboy?",
    ],
    alternativas=["0,4", "1,9", "2,5", "3,3", "75"],
    resolucao=[
        "<b>Tempo efetivo:</b> 160 × 0,75 = <b>120 h/mês</b>.",
        "<b>Acúmulo (distância):</b> 30 × 120 = <b>3 600 km/mês</b>.",
        "<b>Comparação:</b> 9 000 ÷ 3 600 = <b>2,5 meses</b>.",
    ],
    gabarito="C",
    armadilhas="(b) esqueceu os 75% (9000/4800). (a) dividiu ao contrário (3600/9000).",
    fixar="Tempo efetivo × taxa = acúmulo. Depois compare com a referência.",
    oficial="Na Q49: 1000 h × 0,8 = 800 h; 800 × 2 μSv = 1600 μSv = 1,6 mSv; 1,6 ÷ 0,2 = 8 radiografias.",
)

ITENS["P47"] = dict(
    titulo="Conversão de unidades por sequência (Fibonacci: km ↔ milha)",
    origem="Questão 40 (ENCCEJA)",
    guia=[
        ("p", "<b>Intuição:</b> na sequência de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …), a <b>razão entre "
              "termos consecutivos</b> se aproxima de <b>1,618</b>. Por coincidência, <b>1 milha ≈ 1,609 km</b>. Por isso:"),
        ("f", "um termo em milhas   ⟷   o termo seguinte em km"),
        ("b", "<b>milha → km:</b> ande <b>um termo para frente</b> (55 mi → 89 km)"),
        ("b", "<b>km → milha:</b> ande <b>um termo para trás</b> (89 km → 55 mi)"),
        ("b", "<b>valor fora da sequência:</b> use a razão ≈ 1,6 (multiplique ou divida)"),
        ("p", "<b>Bom senso:</b> a milha é <b>maior</b> que o km, então o número em milhas é sempre <b>menor</b>."),
        ("p", "<b>Pegadinha:</b> andar na direção errada da sequência."),
    ],
    enunciado=[
        "Usando a relação de Fibonacci entre quilômetros e milhas (… 34 km ↔ 21 mi; 55 km ↔ 34 mi; 89 km ↔ 55 mi; "
        "144 km ↔ 89 mi …), um brasileiro quer explicar a um amigo americano que o limite numa rodovia é <b>100 km/h</b>.",
        "Em milhas por hora, esse limite é mais próximo de:",
    ],
    alternativas=["34", "55", "62", "89", "160"],
    resolucao=[
        "<b>100 km não está na sequência:</b> fica entre 89 km (55 mi) e 144 km (89 mi).",
        "<b>Razão consecutiva:</b> 89/55 ≈ 144/89 ≈ <b>1,6</b>.",
        "<b>km → milha:</b> divida: 100 ÷ 1,6 ≈ <b>62 mi/h</b>.",
        "<b>Coerência:</b> 62 está entre 55 e 89 ✔ e é menor que 100 (a milha é maior) ✔",
    ],
    gabarito="C",
    armadilhas="(e) multiplicou por 1,6 (direção errada). (d) \"andou um termo para frente\".",
    fixar="Milha é maior. De mi para km, um termo para frente (×1,6); de km para mi, um termo para trás (÷1,6).",
    oficial="Na Q40: 55 mi/h → um termo para frente → 89 km/h.",
)

ITENS["P48"] = dict(
    titulo="Lei de proporcionalidade com notação científica (Lei de Hubble)",
    origem="Questão 41 (ENEM PPL)",
    guia=[
        ("p", "<b>Intuição:</b> muitas leis da natureza são proporções simples: <b>y = k·x</b>. A dificuldade não é a física, "
              "é <b>a unidade estranha da constante</b> e a <b>notação científica</b>."),
        ("p", "<b>Lei de Hubble:</b> galáxias mais distantes se afastam mais rápido:"),
        ("f", "v = H<sub>0</sub>·d      ⟹      d = v / H<sub>0</sub>"),
        ("b", "H<sub>0</sub> ≈ 70 km/s <b>por megaparsec</b> (Mpc)"),
        ("b", "1 Mpc = 10<super>6</super> pc;  1 pc ≈ 3,1 × 10<super>13</super> km"),
        ("p", "<b>Roteiro:</b> 1) isole a grandeza pedida (d = v/H<sub>0</sub>); 2) calcule na unidade \"natural\" da "
              "constante (Mpc); 3) converta passo a passo (Mpc → pc → km), somando expoentes."),
        ("p", "<b>Notação científica:</b> (a × 10<super>m</super>)·(b × 10<super>n</super>) = (a·b) × 10<super>m+n</super>; "
              "ajuste para 1 ≤ a &lt; 10."),
        ("p", "<b>Pegadinha:</b> esquecer o \"mega\" (10<super>6</super>) ou multiplicar v por H<sub>0</sub> em vez de dividir."),
    ],
    enunciado=[
        "A Lei de Hubble afirma que a velocidade de afastamento de uma galáxia é proporcional à sua distância até a Terra, com "
        "constante de proporcionalidade H<sub>0</sub> = 70 km/s por megaparsec (1 Mpc = 10<super>6</super> pc). Observações "
        "indicam que certa galáxia se afasta com velocidade de <b>2,1 × 10<super>4</super> km/s</b>. "
        "Considere 1 pc ≈ 3,1 × 10<super>13</super> km.",
        "A distância até essa galáxia, em quilômetros, é aproximadamente:",
    ],
    alternativas=["3,0 × 10<super>2</super>", "1,5 × 10<super>6</super>", "3,0 × 10<super>8</super>",
                  "9,3 × 10<super>15</super>", "9,3 × 10<super>21</super>"],
    resolucao=[
        "<b>Isolar d:</b> d = v/H<sub>0</sub> = 2,1 × 10<super>4</super> / 70 = 21 000/70 = <b>300 Mpc</b>.",
        "<b>Mpc → pc:</b> 300 × 10<super>6</super> = <b>3 × 10<super>8</super> pc</b>.",
        "<b>pc → km:</b> 3 × 10<super>8</super> × 3,1 × 10<super>13</super> = <b>9,3 × 10<super>21</super> km</b>.",
    ],
    gabarito="E",
    armadilhas="(a) parou em Mpc. (c) parou em pc. (d) esqueceu o \"mega\". (b) multiplicou v·H<sub>0</sub>.",
    fixar="Lei proporcional: isole, calcule na unidade da constante e converta somando expoentes.",
    oficial=None,
)

LISTAS = [
    dict(
        arquivo="Cinematica_Lista_A_P23-P26_P33-P38.pdf",
        titulo="Lista A — Lançamentos e Movimento Circular",
        subtitulo="Padrões P23, P24, P25, P26, P33, P34, P35, P36, P37 e P38",
        padroes=["P23", "P24", "P25", "P26", "P33", "P34", "P35", "P36", "P37", "P38"],
    ),
    dict(
        arquivo="Cinematica_Lista_B_P39-P48.pdf",
        titulo="Lista B — Movimento Circular, Dinâmica e Taxas",
        subtitulo="Padrões P39, P40, P41, P42, P43, P44, P45, P46, P47 e P48",
        padroes=["P39", "P40", "P41", "P42", "P43", "P44", "P45", "P46", "P47", "P48"],
    ),
]
