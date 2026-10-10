# Teoria essencial: circuitos e potência elétrica

Tudo o que a lista cobra, em 10 blocos. Cada bloco segue a ordem: **intuição → fórmulas → como cai no ENEM → pegadinhas → como memorizar**.

---

## 1. Carga, corrente e tensão

**Intuição:** pense num circuito como um encanamento. A **carga** é a água, a **corrente** é a vazão (quanta água passa por segundo) e a **tensão** é o "empurrão" (a diferença de pressão) que faz a água andar.

| Grandeza | Fórmula | Unidade |
|---|---|---|
| Corrente | i = Q/Δt | ampère (A) = C/s |
| Carga de n elétrons | Q = n·e (e = 1,6 × 10⁻¹⁹ C) | coulomb (C) |
| Tensão (ddp) | U = E/Q (energia por carga) | volt (V) = J/C |

**Capacidade de bateria (mAh ou Ah) é carga, não energia.**
- 1 mAh = 10⁻³ A × 3 600 s = **3,6 C**. Exemplo: 1 500 mAh = 5 400 C.
- Tempo de uso = capacidade ÷ corrente: 4 400 mAh ÷ 2 000 mA = 2,2 h = 132 min.
- Energia da bateria = U × capacidade: 12 V × 100 Ah = 1 200 Wh.

**Modelo de corrente:** os elétrons andam devagar (milímetros por segundo), mas a lâmpada acende na hora porque o **campo elétrico** se estabelece quase instantaneamente no fio inteiro, e todos os elétrons começam a se mover juntos.

**Pegadinhas:**
- "19 V" na etiqueta do carregador significa 19 **J por coulomb**.
- mAh ÷ mA dá **hora**. Converta para minuto só no fim.

---

## 2. Resistência e Leis de Ohm

**Intuição:** resistência é a "dificuldade" que o material oferece à corrente. Fio fino e comprido é como cano fino e comprido: passa menos.

**1ª Lei de Ohm:** **U = R·i**
- Resistor **ôhmico**: R constante, gráfico U × i é uma **reta pela origem**.
- Não ôhmico: a curva não é reta; calcule R = U/i ponto a ponto. Se U = 10i + i², então R = U/i = 10 + i (reta que começa em 10).

**2ª Lei de Ohm:** **R = ρ·L/A**
- ρ = resistividade (propriedade do material). Condutividade σ = 1/ρ.
- R é **diretamente** proporcional ao comprimento L e **inversamente** proporcional à área A.
- Converta: 1 mm² = 10⁻⁶ m².
- Fio de instalação tem **ida e volta**: o comprimento total é o dobro da distância.

**Queda de tensão no fio:** U_fio = R_fio·i. O aparelho recebe U_fonte − U_fio.

**Choque elétrico:** i = U/R_corpo. Pele seca ≈ 100 kΩ; pele molhada ≈ 1 kΩ. "Corrente máxima" usa a resistência **mínima**.

| Corrente no corpo | Efeito |
|---|---|
| até 10 mA | dor e contração muscular |
| 10 a 20 mA | aumento das contrações |
| 20 a 100 mA | parada respiratória |
| 100 mA a 3 A | fibrilação ventricular |
| acima de 3 A | parada cardíaca e queimaduras |

**Como memorizar:** "**U**ma **R**isada **i**nteira": U = R·i. "**Rô** **L**ê **A**ntes": R = ρL/A.

**Erros comuns:** esquecer que a área está no denominador; achar que um fio mais grosso tem mais resistência; esquecer o micro (μ = 10⁻⁶) em gráficos.

---

## 3. Potência e energia

**Intuição:** potência é a **rapidez** com que a energia é transformada. Energia é o total gasto. A conta de luz cobra **energia** (kWh), não potência.

**Três formas da potência (todas equivalentes):**

| Fórmula | Use quando... |
|---|---|
| **P = U·i** | conhece tensão e corrente (dimensionar disjuntor) |
| **P = R·i²** | a corrente é a mesma (resistores em **série**, lâmpadas iguais) |
| **P = U²/R** | a tensão é a mesma ou a **resistência é fixa** e a tensão muda |

**Aparelho ligado em outra tensão:** a resistência do aparelho não muda. Então:
- P_nova = P_nominal × (U_nova/U_nominal)².
- Lâmpada de 220 V/100 W em 110 V: tensão cai à metade, potência cai a **um quarto** (25 W) e a corrente cai à **metade**.
- Para manter a mesma potência em tensão diferente: R_nova/R_antiga = (U_nova/U_antiga)². Dobrar a tensão exige **quadruplicar** R.

**Energia:** **E = P·Δt**
- Em joule: P em W e Δt em s.
- Em kWh: P em kW e Δt em h. **1 kWh = 3,6 × 10⁶ J.**
- Conta de luz: some kWh de cada aparelho × dias × tarifa.

**Rendimento (eficiência):** η = P_útil/P_total.
- Lâmpada incandescente: ~5 a 20% vira luz, o resto é calor. LED: 40 a 80%.
- "Mesma luminosidade" = mesma potência **útil** (luz).
- Usina com rendimento de 30%: energia produzida = energia consumida ÷ 0,3.
- Eficiência luminosa: lúmen por watt (lm/W). Maior lm/W = lâmpada mais eficiente.

**Dimensionamento (o padrão mais cobrado):**
1. i = P/U (com a **maior** potência do aparelho).
2. Disjuntor ou fusível: o **menor** valor disponível que seja **≥ i**.
3. Fio: a menor seção cuja corrente máxima seja ≥ i.
4. Regra de ouro da instalação: **i_aparelho ≤ i_disjuntor ≤ i_máx do fio** (o disjuntor protege o fio).
5. Margem de segurança de 20%: multiplique a corrente por 1,2.
- Mesma potência em 220 V puxa **metade** da corrente de 127 V. Por isso o chuveiro de 220 V usa fio mais fino e disjuntor menor.

**Pegadinhas:**
- 20 min = 1/3 h (não 0,2 h).
- "6 lâmpadas de 15 W": multiplique pela quantidade.
- Fusível de régua queimou: nada mais funciona depois.

**Como memorizar:** "**PUI**": P = U·i. "Conta de luz = **P**otência × **T**empo × **T**arifa".

---

## 4. Efeito Joule e calorimetria (chuveiro e aquecedor)

**Intuição:** toda a energia elétrica do resistor vira calor na água.

- Q = m·c·ΔT (c da água ≈ 4 200 J/kg·°C; 1 L de água = 1 kg).
- Potência do chuveiro: **P = (vazão em kg/s)·c·ΔT**. Ex.: 3 L/min = 0,05 kg/s.
- Com a mesma vazão, P é proporcional a ΔT (morno, quente, superquente).
- Com a mesma potência, dobrar a vazão reduz ΔT à metade.
- Dois aquecedores iguais **em série** na mesma tensão: R dobra, P = U²/2R cai à **metade**, o tempo para ferver **dobra**.

**Erro comum:** esquecer de passar a vazão de L/min para kg/s (divida por 60).

---

## 5. Energia solar, hidrelétrica e transmissão

- **Placa solar:** P_elétrica = η × I × A (I = irradiância em W/m²).
- Lente ou área circular: A = πr². Onda que se espalha em todas as direções: I = P/(4πr²).
- **Hidrelétrica:** P_teórica = ρ·Q·g·h (ρ = 1 000 kg/m³; Q = vazão em m³/s). A diferença para a potência instalada é a potência não aproveitada.
- **Inversor:** converte contínua em alternada. P_saída = η·P_entrada e cada lado tem i = P/U.
- **Transmissão:** quanto mais longe a usina, mais perdas e mais custo de rede. Por isso, microgeração local reduz perdas e a energia solar vence em regiões isoladas.

---

## 6. Associação de resistores

**Intuição:** em **série**, um caminho só (a mesma corrente passa por todos). Em **paralelo**, vários caminhos lado a lado (todos com a mesma tensão).

| | Série | Paralelo |
|---|---|---|
| O que é igual | corrente | tensão |
| O que se divide | tensão | corrente |
| R equivalente | R₁ + R₂ + ... | 1/R = 1/R₁ + 1/R₂ + ... |
| Dois resistores | soma | produto ÷ soma |
| n iguais | n·R | R/n |
| Um queima | todos apagam | os outros continuam |

**Regras práticas:**
- Em paralelo, R_eq é **menor que o menor** resistor. Mais aparelhos ligados = menos resistência = **mais corrente total**. É por isso que o benjamim esquenta.
- A casa é toda em **paralelo**: todos os aparelhos recebem 127 V ou 220 V e funcionam de forma independente.
- Num nó, a corrente se divide na razão **inversa** das resistências (o ramo mais "fácil" leva mais).
- Lâmpadas iguais: **brilho ∝ corrente²**. Quem recebe mais corrente brilha mais.
- Fio sem resistência ligando dois pontos = **curto-circuito** (o que está entre esses pontos apaga).
- Lâmpadas de 110 V em rede de 220 V: **duas em série** em cada ramo.
- Cordão de Natal: se ao retirar uma lâmpada **n** se apagam (contando ela), há grupos de **n em série**, e os grupos estão em paralelo.

**Divisor de tensão:** em série, a tensão se divide **proporcionalmente** à resistência. Quatro resistores iguais em 12 V: 3 V em cada.

**Ponte de Wheatstone:** dois divisores de tensão lado a lado. O potencial de cada ponto do meio é U × R_inferior/(R_superior + R_inferior). O voltímetro lê a diferença entre os dois pontos. Ponte equilibrada (leitura zero): R₁·R₄ = R₂·R₃ (produtos cruzados iguais).

**Como memorizar:** "**Série segura a corrente, paralelo preserva a tensão**".

---

## 7. Geradores (pilhas e baterias)

**Gerador ideal:** fornece a tensão ε (força eletromotriz) sempre.
**Gerador real:** tem resistência interna r. **U = ε − r·i**. Quanto mais corrente, menor a tensão nos terminais.
- Em circuito aberto (i = 0): U = ε.
- r = (ε − U)/i.

**Associação:**

| | Série | Paralelo (pilhas iguais) |
|---|---|---|
| Tensão | soma | igual à de uma |
| Capacidade (mAh) | igual à de uma | soma |
| r interna | soma | r/n |

- Série correta: **+ de uma no − da seguinte**. Se uma estiver invertida, as tensões se subtraem.
- Precisa de uma tensão **e** de mais duração? Faça ramos em série e ligue os ramos em paralelo.
- Para limitar a corrente de uma cerca elétrica, o gerador precisa de resistência interna **muito maior** que a do corpo.

---

## 8. Medidores

| Medidor | Mede | Liga em | Ideal |
|---|---|---|---|
| Amperímetro | corrente | **série** | resistência ≈ 0 |
| Voltímetro | tensão | **paralelo** | resistência → ∞ |
| Ohmímetro | resistência | entre os dois pontos, circuito desligado | |

- Para medir a resistência de uma lâmpada: amperímetro em série com ela e voltímetro em paralelo com ela; R = U/i.
- Amperímetro em paralelo vira um **curto**. Voltímetro em série corta a corrente.
- Para medir a corrente total da casa: amperímetro no fio fase **antes** das derivações.

---

## 9. Capacitor e LED

**Capacitor:** armazena carga. Q = C·U; energia E = C·U²/2. Usado em flash de câmera, desfibrilador e tela touch capacitiva.

**LED (diodo):**
- Conduz em **um sentido só** (do anodo para o catodo; o anodo vai para o lado +).
- Tem tensão de funcionamento (ex.: 3 V) e corrente máxima.
- Precisa de **resistor em série** para limitar a corrente: R = (U_fonte − U_LED)/i.
- Só acende se a corrente atingir o valor mínimo (limiar).
- Cada LED em seu ramo, com seu resistor, para que todos recebam a corrente certa.

---

## 10. Instalação elétrica e segurança

- **Fase** (tem tensão), **neutro** (volta) e **terra** (proteção).
- **Fio terra:** dá à corrente de fuga um caminho de baixíssima resistência para o solo. Assim a carcaça do aparelho não fica energizada e a pessoa não leva choque.
- **Disjuntor e fusível:** interrompem o circuito quando a corrente passa do limite. O fusível é um fio de **baixo ponto de fusão** que derrete.
- **Interruptor:** em **série** com a lâmpada que ele controla, e nunca em série com as tomadas.
- **Tomadas e lâmpadas:** em **paralelo**, todas com a tensão da rede.
- **Interruptores paralelos (three-way):** cada um tem um comum e dois terminais. Fase no comum do primeiro; os dois terminais do primeiro ligados aos dois terminais do segundo; o comum do segundo vai para a lâmpada. Mudar **qualquer** chave inverte o estado da lâmpada.
- **Frequência da rede:** no Brasil, 60 Hz. Um relógio que conta ciclos e foi calibrado em 50 Hz, ligado em 60 Hz, conta ciclos a mais e **adianta** (60 s reais viram 72 s).

---

## Tabela de conversões rápidas

| De | Para | Faça |
|---|---|---|
| mA | A | ÷ 1 000 |
| mAh | C | × 3,6 |
| min | h | ÷ 60 |
| kWh | J | × 3,6 × 10⁶ |
| mm² | m² | × 10⁻⁶ |
| μF | F | × 10⁻⁶ |
| L/min de água | kg/s | ÷ 60 |
| MW | W | × 10⁶ |
| GWh | kWh | × 10⁶ |
