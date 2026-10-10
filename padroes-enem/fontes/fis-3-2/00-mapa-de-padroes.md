# Mapa de padrões: FIS 3 / FIS 2 (Circuitos e potência elétrica, 120 questões)

Observações da análise:
- Questões repetidas na lista: **Q7 = Q17**, **Q11 = Q98**, **Q12 = Q58**, **Q18 = Q88**, **Q45 = Q112** e **Q56 = Q103**. As questões **Q44 e Q59** cobram a mesma ideia (interruptores paralelos).
- Quase metade da lista é **"física de conta de luz"**: potência, energia, disjuntor, rendimento e fontes de energia. É o coração da matéria no ENEM.
- A outra metade é **circuito**: associação de resistores, pilhas, medidores, LED e montagem de instalações.
- No total, **35 padrões de resolução** distintos.

Como usar este material:
1. Leia o **mapa** (este arquivo) para saber o que cai e com qual lógica.
2. Estude a **teoria essencial** (`01-teoria-essencial.md`). Tudo o que as questões exigem está lá.
3. Faça as **listas inéditas** (`02` a `05`). Cada questão tem o mini-guia *"O que você precisa saber antes de fazer essa questão"*, a questão e a resolução passo a passo.

---

## Ranking: o que mais cai nesta lista

| Posição | Padrão | Nº de questões |
|---|---|---|
| 1º | P16: Energia solar e intensidade (irradiância × área × eficiência) | 8 |
| 2º | P9: P = U·i para dimensionar disjuntor, fusível ou fio | 6 |
| 2º | P13: Consumo em kWh e conta de luz | 6 |
| 2º | P18: Efeito Joule + calorimetria (chuveiro, aquecedor) | 6 |
| 2º | P26: Associação de pilhas e baterias | 6 |
| 6º | P17: Custo-benefício, payback e tarifas | 5 |
| 7º | P7, P12, P15, P23, P25, P27, P28, P1 | 4 cada |

---

## Bloco A: Carga, corrente e tensão

| # | Padrão | Passo a passo de resolução | Questões |
|---|---|---|---|
| P1 | Capacidade de bateria (mAh, Ah) → tempo, carga ou energia | 1) Capacidade é **carga**: Q = i·Δt. 2) Tempo = capacidade ÷ corrente (mAh ÷ mA dá hora). 3) Carga em coulomb: 1 mAh = 3,6 C. 4) Energia: E = U·Q (12 V × 100 Ah = 1 200 Wh). | 5, 28, 62, 79 |
| P2 | Tensão = energia por carga (J/C) e modelo de corrente | 1) U = E/q: "volts" é "joules por coulomb". 2) A lâmpada acende na hora porque o **campo elétrico** se estabelece quase instantaneamente no fio todo (os elétrons andam devagar). | 78, 84 |
| P3 | Capacitor | 1) Q = C·U (atenção ao micro = 10⁻⁶). 2) Energia: E = C·U²/2. 3) Capacitor armazena carga (flash, desfibrilador, tela touch). | 23, 53 |

## Bloco B: Resistência elétrica

| # | Padrão | Passo a passo de resolução | Questões |
|---|---|---|---|
| P4 | 1ª Lei de Ohm direta (inclui choque elétrico) | 1) U = R·i. 2) Corrente **máxima** usa a resistência **mínima** (pele molhada). 3) Em analogias (rotas de trânsito), R = U/i e compare. | 18, 88, 101 |
| P5 | Gráfico U × i → resistência | 1) Pegue um ponto do gráfico e faça R = U/i (cuidado com μA, mA). 2) Reta pela origem = ôhmico (R constante). 3) Curva: calcule R = U/i em cada ponto (se U = 10i + i², então R = 10 + i). 4) Aplique a mudança que o texto pede (quadruplica, cai à metade). | 43, 61 |
| P6 | 2ª Lei de Ohm numérica | 1) R = ρ·L/A. 2) Converta mm² → m² (× 10⁻⁶). 3) Fio de ida **e** volta: some os dois. 4) Queda de tensão no fio = R_fio·i; tensão no aparelho = U_fonte − queda. | 8, 10 |
| P7 | 2ª Lei qualitativa (proporções, condutividade, filamento) | 1) R ∝ L (direta) e R ∝ 1/A (inversa). 2) Condutividade σ = 1/ρ: maior σ = menor R. 3) Combine com P = U²/R: mesma U e mais potência pede **menor R** (fio curto e grosso). | 19, 33, 37, 87 |
| P8 | Tabela de resistências de sensores (seletividade) | 1) O bom sensor varia **muito** na presença do gás-alvo. 2) E varia **pouco** com o gás interferente. 3) Compare razões (R com gás ÷ R sem gás), não valores absolutos. | 13 |

## Bloco C: Potência, energia e dimensionamento

| # | Padrão | Passo a passo de resolução | Questões |
|---|---|---|---|
| P9 | P = U·i → disjuntor, fusível ou fio (pela tabela) | 1) i = P/U usando a **maior** potência (posição inverno). 2) Escolha o **menor** valor da tabela **maior ou igual** a i. 3) Disjuntor protege o fio: i_aparelho ≤ i_disjuntor ≤ i_máx do fio. 4) Vários aparelhos simultâneos: some as potências. | 1, 14, 34, 51, 64, 114 |
| P10 | Soma de correntes em paralelo + margem de segurança | 1) Corrente de cada ramo: i = U/R, i = P/U ou valor dado. 2) Some (nó). 3) Margem de x%: multiplique por (1 + x/100). | 11, 98, 94 |
| P11 | Limite de régua, benjamim ou extensão | 1) P_máx = U·i_máx. 2) Some os aparelhos ligados **ao mesmo tempo**. 3) Teste um a um, **na ordem**. 4) Se o fusível queimou, **nada depois funciona**. 5) Benjamim: mais aparelhos em paralelo = mais corrente no adaptador = aquecimento. | 16, 56, 103 |
| P12 | Mesmo resistor em outra tensão: P = U²/R | 1) A resistência é do aparelho e fica **constante**. 2) P_nova = P_nominal·(U_nova/U_nominal)². 3) Metade da tensão = um quarto da potência; a corrente cai à metade. 4) Para manter P com outra U: R_nova/R_antiga = (U_nova/U_antiga)². | 29, 39, 115, 118 |
| P13 | Consumo em kWh e conta de luz | 1) E = P(kW) × t(h) para cada aparelho. 2) Converta minutos em hora (20 min = 1/3 h). 3) Multiplique pela quantidade de aparelhos e pelos dias. 4) Some e multiplique pela tarifa. 5) Medidor de ponteiros: atual − anterior. | 26, 40, 41, 57, 68, 96 |
| P14 | Energia em joules e conversões (kWh ↔ J) | 1) E = P·Δt com P em W e Δt em s dá joule. 2) 1 kWh = 3,6 × 10⁶ J. 3) Se a usina tem rendimento η, a energia produzida = energia usada ÷ η. | 32, 45, 112 |
| P15 | Rendimento de lâmpadas (luz útil × calor) | 1) Luz útil = η·P. 2) Mesma luminosidade = mesma luz útil. 3) P_nova = luz útil ÷ η_nova. 4) Calor = P − luz útil. 5) Eficiência luminosa: lúmen ÷ watt. | 21, 27, 63, 75 |
| P16 | Energia solar e intensidade (irradiância × área × eficiência) | 1) P_elétrica = η × I × A (I em W/m²). 2) Se a energia é "por m² por dia", divida a energia necessária por esse valor. 3) Área do círculo πr²; área da esfera 4πr² (intensidade de onda = P/4πr²). 4) Inversor: P_entrada = U·i e P_saída = η·P_entrada. | 12, 58, 30, 35, 38, 54, 91, 99 |
| P17 | Custo-benefício, payback e tarifas | 1) Economia mensal = energia economizada × tarifa. 2) Payback = investimento ÷ economia mensal. 3) Tarifa com taxa fixa: monte as duas funções e iguale. 4) Custo-benefício: some investimento + energia + trocas. | 4, 9, 60, 83, 90 |
| P18 | Efeito Joule + calorimetria (chuveiro, aquecedor) | 1) Q = m·c·ΔT. 2) P = Q/Δt, ou P = (vazão em kg/s)·c·ΔT. 3) Mesma vazão: P ∝ ΔT. 4) Depois: i = P/U → disjuntor. 5) Dois aquecedores iguais em série: P cai à metade, tempo dobra. | 36, 100, 102, 109, 110, 117 |
| P19 | Usinas: hidrelétrica, rendimento e transmissão | 1) P_teórica = ρ·Q_vazão·g·h. 2) Rendimento = P_real ÷ P_teórica. 3) Compare usinas por razões (energia ÷ potência, potência ÷ área). 4) Microgeração reduz perdas na transmissão de longa distância. | 52, 86, 105 |

## Bloco D: Associação de resistores

| # | Padrão | Passo a passo de resolução | Questões |
|---|---|---|---|
| P20 | Paralelo em casa: tensão igual, corrente total soma | 1) Aparelhos de casa estão em paralelo, todos com a **mesma tensão**. 2) Desligar um não afeta os outros. 3) Mais aparelhos = R_eq menor = corrente total maior. | 6, 97 |
| P21 | Resistência equivalente | 1) Série: soma. 2) Paralelo de dois: produto ÷ soma. n iguais: R/n. 3) Resolva de dentro para fora (do ponto mais distante da fonte). 4) Ohmímetro entre dois pontos: o resto do circuito vira série e paralelo entre esses pontos. | 22, 25, 82 |
| P22 | Divisão de corrente e brilho em circuito misto | 1) Calcule R_eq e a corrente total. 2) No nó, a corrente se divide na razão **inversa** das resistências. 3) Lâmpadas iguais: mais corrente = mais brilho (P = R·i²). | 24, 74, 85 |
| P23 | Lâmpada queimada, chave e cordões de Natal | 1) Lâmpada queimada = ramo aberto. 2) Recalcule o circuito. 3) Se ao retirar uma lâmpada **n** apagam, há grupos de n em série. 4) Grupos ligados em paralelo dividem a corrente total. | 50, 72, 76, 108 |
| P24 | Associar para adequar a tensão | 1) Lâmpadas de 110 V em rede de 220 V: **duas em série** por ramo. 2) Ramos em paralelo. 3) Para manter a corrente com tensão maior: aumente R_total em série. | 55, 104, 111 |
| P25 | Divisor de tensão e ponte de Wheatstone | 1) Em série, a tensão se divide **proporcionalmente** às resistências. 2) Potencial de um ponto = U·R_de_baixo/(R_total). 3) Voltímetro mede a diferença entre dois pontos. 4) Ponte equilibrada: R1·R4 = R2·R3 e corrente zero no meio. | 70, 106, 107, 116 |

## Bloco E: Geradores e medidores

| # | Padrão | Passo a passo de resolução | Questões |
|---|---|---|---|
| P26 | Associação de pilhas e baterias | 1) Série: tensões **somam**, capacidade (mAh) igual. 2) Paralelo: tensão igual, capacidade **soma**. 3) Série correta: **+ de uma no − da outra**; invertida, as tensões se anulam. 4) Precisa de U e mais duração: ramos em série, ligados em paralelo. | 7, 17, 48, 71, 73, 92 |
| P27 | Gerador real (resistência interna) | 1) U = ε − r·i. 2) r = (ε − U)/i. 3) Em série: ε e r somam. 4) Para limitar a corrente: r muito grande (cerca elétrica). | 49, 66, 81, 113 |
| P28 | Amperímetro, voltímetro e ohmímetro | 1) Amperímetro em **série** (ideal: R ≈ 0). 2) Voltímetro em **paralelo** (ideal: R → ∞). 3) Medir R: A em série e V em paralelo com o elemento; R = U/i. | 20, 67, 80, 120 |

## Bloco F: Montagem, segurança e leitura técnica

| # | Padrão | Passo a passo de resolução | Questões |
|---|---|---|---|
| P29 | Circuito fechado: lâmpada + pilha | 1) A lâmpada tem dois contatos (rosca e pino da base). 2) Acende se cada contato tocar um polo diferente. 3) Os dois no mesmo polo ou fio ligando os polos direto: não acende. | 119 |
| P30 | Interruptores paralelos (three-way) e chaves de 3 pontos | 1) Fase no comum do interruptor 1. 2) Os dois terminais do 1 ligados aos dois terminais do 2 (fios "de retorno"). 3) Comum do 2 vai à lâmpada. 4) Teste a tabela verdade: mudar **qualquer** chave inverte o estado. | 44, 46, 59 |
| P31 | Instalação residencial (tomadas e interruptor) | 1) Tomadas e lâmpada em **paralelo** com a rede. 2) Interruptor em **série só** com a lâmpada. 3) Interruptor em paralelo com a lâmpada = curto. | 65 |
| P32 | LED (diodo) | 1) Só conduz em um sentido (anodo no +). 2) Resistor de proteção em série: R = (U_fonte − U_LED)/i. 3) Acende apenas se i ≥ corrente limiar. | 3, 42, 77 |
| P33 | Segurança: aterramento, fusível e choque | 1) Fio terra dá à corrente de fuga um caminho de baixíssima resistência. 2) Fusível: material que funde na temperatura atingida com a corrente limite. 3) Choque: i = U/R_corpo e consulte a tabela de efeitos. | 15, 47, 89 |
| P34 | Frequência da rede e ondas | 1) Aparelho que conta ciclos: tempo indicado = ciclos contados ÷ frequência de calibração. 2) Micro-ondas aquece pela potência (1 000 W) e não pela frequência; telefone emite pouco (~1 W). | 31, 93, 95 |
| P35 | Leitura de manual ou quadro técnico | 1) Pergunte: qual grandeza responde ao que se pede? 2) Quantidade de aparelhos: capacidade (refrigeração, potência). 3) Fiação e disjuntor: **corrente**. 4) Compatibilidade com a rede: **tensão**. | 2, 69 |

**Total: 35 padrões, todas as 120 questões mapeadas.**

---

## Gatilhos: palavra no enunciado → padrão

| Se o enunciado fala em... | Pense em... | Fórmula |
|---|---|---|
| disjuntor, fusível, bitola, seção do fio | P9, P10 | i = P/U |
| "mesma resistência", "ligado em outra tensão" | P12 | P = U²/R |
| kWh, conta, tarifa, R$ | P13, P17 | E = P·t |
| mAh, Ah, "tempo de uso da bateria" | P1 | Q = i·t |
| eficiência, rendimento, "converte X% em luz" | P15, P16 | P_útil = η·P_total |
| W/m², placa solar, irradiância | P16 | P = η·I·A |
| vazão, ΔT, calor específico, chuveiro | P18 | P = (m/t)·c·ΔT |
| ρ, comprimento, área de seção, espessura | P6, P7 | R = ρ·L/A |
| gráfico tensão × corrente | P5 | R = U/i |
| lâmpadas iguais, "maior brilho" | P22 | P = R·i² |
| "ao retirar uma lâmpada, outras apagam" | P23 | grupos em série |
| pilhas, baterias, polos | P26 | série soma U |
| "resistência interna", "não ideal" | P27 | U = ε − r·i |
| voltímetro, amperímetro, multímetro | P28 | série × paralelo |
| LED, diodo | P32 | R = (U − U_LED)/i |
| frequência, Hz, ciclos | P34 | t = ciclos/f |

## Roteiro universal (vale para qualquer questão da lista)

1. **Leia a pergunta primeiro** (a última frase). Anote a grandeza e a unidade pedidas.
2. **Liste os dados** e converta já: mAh → A·h, min → h, mm² → m², μ → 10⁻⁶, kWh → J.
3. **Identifique o padrão** pela tabela de gatilhos acima.
4. **Escreva a fórmula antes de pôr números.** Em razões (P nova ÷ P antiga), simplifique antes de calcular.
5. **Calcule com números redondos** (o ENEM aceita aproximações: 127/220 ≈ 0,58).
6. **Confira a ordem de grandeza** e descarte distratores típicos: esqueceu a eficiência, esqueceu ida e volta do fio, esqueceu ×30 dias, inverteu a razão.

---

## Onde está cada padrão nas listas inéditas

| Arquivo | Questões | Padrões |
|---|---|---|
| `02-lista-1.md`: Fundamentos e resistência | 1 a 8 | P1 a P8 |
| `03-lista-2.md`: Potência, energia e dimensionamento | 9 a 19 | P9 a P19 |
| `04-lista-3.md`: Associações, geradores e medidores | 20 a 28 | P20 a P28 |
| `05-lista-4.md`: Montagem, segurança e leitura técnica | 29 a 35 | P29 a P35 |
