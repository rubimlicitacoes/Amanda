# Mapa de padrões: FIS 10 / FIS 9 (Acústica e ondas, 100 questões)

Observações da análise:
- Questões repetidas na lista: **Q22 = Q66** e **Q37 = Q98**. Quase repetidas: **Q33 ≈ Q39** e **Q2 ≈ Q58**.
- A lista mistura três frentes: **ondulatória geral** (fenômenos e cálculos), **acústica** (som, decibéis, eco, Doppler) e **espectro eletromagnético** (luz, cor, radiações).
- Cerca de 45% das questões são **conceituais** (nomear o fenômeno), 30% são **leitura de gráfico ou tabela** e 25% são **cálculo** (quase sempre v = λ·f, f = 1/T ou d = v·t).
- Duas questões fogem um pouco do tema (Q96 e Q100, cinemática com sensores). Também foram mapeadas, porque estão na lista oficial.
- No total, **53 padrões de resolução** distintos.

## Bloco A: Fundamentos e cálculos básicos

| # | Padrão | Lógica de resolução | Questões |
|---|---|---|---|
| P1 | Equação fundamental v = λ·f | Converter unidades (km/h → m/s, GHz → Hz, cm → m) e aplicar v = λ·f. O λ pode vir de uma descrição geométrica (nº de pessoas × espaçamento). | 50, 80 |
| P2 | Velocidade dada por fórmula + período | Calcular v pela fórmula do texto (v = √(g·d)) e depois T = λ/v. | 22, 66 |
| P3 | Eventos periódicos no espaço: f = v/espaçamento | Cada "faixa" ou "bit" ocupa um espaço. A frequência é quantas passam por segundo: f = v/d, ou d = v/taxa. | 19, 41 |
| P4 | Período por contagem de eventos (passadas, batimentos) | T = tempo total ÷ nº de ciclos completos. Em bpm: f = 60/T. Cuidado com o que é "um ciclo" (pé direito = 2 passadas). | 42, 51, 74 |
| P5 | Período lido no oscilograma | Medir no eixo do tempo a distância entre dois picos (ou 2× a distância pico-vale) e fazer f = 1/T. | 26 |
| P6 | A fonte define f, o meio define v | Mudou a fonte: muda f. Mudou o meio: muda v. O λ se ajusta (λ = v/f). Mesmo meio = mesma velocidade para todas as frequências. | 35, 99 |
| P7 | Onda mecânica × eletromagnética | Mecânica precisa de meio material e é lenta (som ~340 m/s no ar). EM se propaga no vácuo a 3·10⁸ m/s. | 29, 44, 73 |
| P8 | Transdução piezoelétrica | Vibração mecânica ⇄ tensão elétrica. Microfone e coletores de energia sonora usam esse princípio. | 5, 85 |
| P9 | Tempo = distância ÷ velocidade (sensores) | Distância efetiva = soma das dimensões que precisam ser atravessadas. Usar a maior velocidade para o menor tempo. | 96, 100 |

## Bloco B: Acústica (qualidades do som e decibéis)

| # | Padrão | Lógica | Questões |
|---|---|---|---|
| P10 | Altura = frequência | Agudo = alta f = λ pequeno. Grave = baixa f = λ grande. Ouvido absoluto reconhece f. | 31, 61 |
| P11 | Oitava = dobro da frequência | Subir uma oitava multiplica f por 2 (função exponencial). Contar ciclos no mesmo intervalo de tempo. | 23, 82 |
| P12 | Timbre | Mesma nota (f) e mesma intensidade, instrumentos diferentes: o que muda é a forma da onda (harmônicos). | 34, 45 |
| P13 | Intensidade (volume) ↔ amplitude | "Alto/baixo" no sentido de volume é intensidade, ligada à amplitude. Atenuação reduz a amplitude. Brilho da luz também é amplitude. | 72, 81, 97 |
| P14 | Nível sonoro em dB (logaritmo) | β = 10·log(I/I₀). Multiplicar I por 10ⁿ soma 10·n dB. Para pressão, β = 20·log(P/P₀). | 59, 71 |
| P15 | Curvas de audição (limiar, audiograma) | Ler no gráfico o nível mínimo audível numa frequência. Maior sensibilidade = menor limiar. | 18, 76 |
| P16 | Gráfico de nível sonoro com limiar | Traçar a linha do limite e contar/ler onde a curva passa por cima (ou atinge o valor exigido). | 17, 47, 79 |
| P17 | Atenuação em dB/km | Perda permitida (dB) ÷ perda por km (no melhor λ) = distância máxima. | 86 |

## Bloco C: Eco, reflexão do som e localização

| # | Padrão | Lógica | Questões |
|---|---|---|---|
| P18 | Eco: d = v·t/2 | O som vai e volta. Distância mínima para eco: t = 0,1 s. Morcego, golfinho e sonar usam reflexão. | 48, 62 |
| P19 | Eco em camadas | A diferença de tempo entre dois ecos é o tempo de ida e volta dentro da camada: v = 2·espessura/Δt. | 78 |
| P20 | Impedância acústica Z = ρ·v | Calcular Z de cada tecido. Maior diferença de Z = maior reflexão = mais fácil diferenciar. | 57 |
| P21 | Localização por tempo de resposta | Cada tempo dá uma distância (circunferência). No plano, são necessárias 3 para um único ponto. | 64 |

## Bloco D: Fenômenos ondulatórios

| # | Padrão | Lógica | Questões |
|---|---|---|---|
| P22 | Difração (contornar obstáculos) | Difrata mais quem tem λ comparável ou maior que o obstáculo: graves e ondas de rádio de baixa f. | 4, 14, 16, 84 |
| P23 | Difração limita a resolução | Para "enxergar/gravar" detalhes menores, é preciso λ menor (f maior): violeta/azul (blu-ray). | 37, 95, 98 |
| P24 | Interferência destrutiva (fase oposta) | Mesma f, mesma amplitude, defasagem de 180° (meio período). Polaridade invertida = fase oposta. | 2, 56, 58, 92 |
| P25 | Interferência entre emissores | Só interferem ondas de frequências iguais ou próximas (mesmo λ). | 33, 36, 39, 54 |
| P26 | Interferência por diferença de caminho | Destrutiva quando Δ = λ/2 (3λ/2...). Construtiva quando Δ = λ (2λ...). Depois f = v/λ. | 32 |
| P27 | Experimento de Young | Franjas claras e escuras = difração + interferência, logo natureza ondulatória da luz. | 55 |
| P28 | Ressonância | Frequência externa = frequência natural do sistema → absorção máxima de energia (taça, micro-ondas, sintonia, nanoantena). | 6, 38, 40, 90 |
| P29 | Ressonância de pêndulos | f natural do pêndulo depende só do comprimento (não da massa). Oscilam os de mesmo L. | 67 |
| P30 | Onda estacionária: nós e ventres | Ventre = amplitude máxima (onde aquece). Ventres consecutivos distam λ/2. | 11 |
| P31 | Harmônicos (cordas, tubos abertos, barras) | λₙ = 2L/n e fₙ = n·v/(2L). Comprimento menor → f maior. Metade do comprimento → dobro da f. | 13, 28, 69 |
| P32 | Tubo fechado | Só harmônicos ímpares: fₙ = n·v/(4L). Duas ressonâncias consecutivas diferem de v/(2L). | 93 |
| P33 | Polarização | Filtro deixa passar só a vibração paralela ao seu eixo. Bloquear horizontal → eixo vertical. Óculos 3D. | 1, 43 |
| P34 | Refração | Mudança de meio (ou de densidade do ar) → mudança de velocidade → desvio. Miragem, luz engarrafada. | 9, 89 |
| P35 | Reflexão interna total | Do meio de maior n para o de menor n, acima do ângulo limite. Fibra: n(núcleo) > n(revestimento). | 15 |
| P36 | Reflexão na ionosfera | Ondas de rádio refletem na ionosfera e contornam a curvatura da Terra. | 88 |
| P37 | Alcance × frequência (intensidade com a distância) | A intensidade cai com a distância (≈ 1/r²) da mesma forma para qualquer frequência. | 27 |

## Bloco E: Efeito Doppler

| # | Padrão | Lógica | Questões |
|---|---|---|---|
| P38 | Doppler conceitual | Aproximação → f percebida maior (agudo). Afastamento → f menor (grave). A grandeza alterada é a frequência. | 60, 94 |
| P39 | Doppler algébrico | Reescrever cada f em função da f original: f' > f aproxima, f' < f afasta. | 24 |
| P40 | Doppler em gráfico f × t | Antes de passar: f constante e maior. Depois: f constante e menor. Transição no instante da passagem. | 25 |
| P41 | Doppler + eco | Alvo se afastando: intensidade diminui, tempo de retorno aumenta, f percebida diminui. | 77 |

## Bloco F: Espectro eletromagnético, luz e cor

| # | Padrão | Lógica | Questões |
|---|---|---|---|
| P42 | Faixas do espectro e aplicações | Rádio < micro-ondas < IV < visível < UV < X < gama (f crescente). IV = calor/controle remoto; rádio = longa distância. | 3, 21, 65 |
| P43 | Energia do fóton e efeitos biológicos | E = h·f. UV queima/bronzeia; lâmpada incandescente quase não emite UV. Maior f = mais energia absorvida na superfície. | 8, 52, 63 |
| P44 | Dose de radiação | E = P·t; dose = E/m (J/kg). Comparar com a tabela. | 10 |
| P45 | Espectro de emissão de lâmpadas | Comparar áreas sob a curva (visível/total). Lâmpada que não aquece = pouca área no IV. | 12, 83 |
| P46 | Absorção e reemissão | O material absorve uma faixa e reemite em outra de menor energia (azul → âmbar; raio X → visível). | 30, 53 |
| P47 | Cor por absorção | Objeto mostra a cor que reflete; absorve a complementar (disco de cores). | 20 |
| P48 | Escolher λ por espectro de absorção/reflectância | Achar a faixa onde a curva desejada é máxima e as indesejadas mínimas (ou onde as curvas mais se separam). Às vezes converter f → λ. | 68, 75, 87 |
| P49 | Curvas de sensibilidade dos cones | Sem um pigmento, dois λ que estimulam igualmente os pigmentos restantes ficam indistinguíveis. | 70 |
| P50 | Cor ↔ frequência ↔ temperatura | A cor do corpo aquecido indica a frequência dominante da radiação (pirômetro óptico). | 46 |
| P51 | Micro-ondas e metais | Metal no micro-ondas gera correntes induzidas e faíscas. | 49 |
| P52 | Raios X e materiais densos | Metais absorvem os raios X e escondem o que está atrás deles na imagem. | 91 |
| P53 | Gráfico de tempo em escala log | Ler início e fim de cada perturbação no eixo logarítmico e comparar durações. | 7 |

**Total: 53 padrões. Restavam 53 antes da Lista 1.**

## Progresso

| Lista | Padrões cobertos | Restantes |
|---|---|---|
| Lista 1 | P1, P7, P13, P22, P24, P25, P28, P31, P38, P42 | 43 |
