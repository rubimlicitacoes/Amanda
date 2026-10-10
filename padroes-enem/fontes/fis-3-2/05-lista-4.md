# Lista 4: Montagem, segurança e leitura técnica (padrões P29 a P35)

---

## Questão 29 (Padrão P29: circuito fechado com lâmpada e pilha)

### O que você precisa saber antes de fazer essa questão
- Lâmpada de lanterna tem **dois contatos isolados entre si**: a **rosca** metálica (lateral) e o **pino** no centro da base.
- Pilha tem dois polos: **+** (o pino de cima) e **−** (a base).
- A lâmpada acende quando **cada contato toca um polo diferente**, fechando o caminho: polo → contato 1 → filamento → contato 2 → outro polo.
- **Não acende** se: os dois contatos estão no mesmo polo; ou um fio liga os dois polos direto (curto na pilha).
- Lâmpada incandescente não tem polaridade: inverter + e − não importa.

### Questão
Um estudante tem uma pilha, uma lâmpada de lanterna e um fio. Ele testa seis montagens:

1. Pino da lâmpada apoiado no polo +; fio ligando a rosca ao polo −.
2. Lâmpada deitada, com a rosca encostada no polo +; fio ligando o polo − ao pino da lâmpada.
3. Pino da lâmpada apoiado no polo +; fio ligando o polo − diretamente ao polo +.
4. Rosca encostada no polo −; fio ligando o polo − ao pino da lâmpada.
5. Pino da lâmpada apoiado no polo −; fio ligando a rosca ao polo +.
6. Pino e rosca encostados ao mesmo tempo no polo +; fio solto no polo −.

A lâmpada acende nas montagens
- a) 1, 2 e 5.
- b) 1, 3 e 5.
- c) 1 e 5, apenas.
- d) 2, 4 e 6.
- e) 1, 3 e 6.

### Resolução passo a passo
1. Montagem 1: pino no +, rosca no − → **acende**.
2. Montagem 2: rosca no +, pino no − → **acende**.
3. Montagem 3: o fio liga + ao − direto (curto); a rosca não toca nada → não acende.
4. Montagem 4: rosca e pino ligados ao mesmo polo (−) → não acende.
5. Montagem 5: pino no −, rosca no + → **acende** (não há polaridade).
6. Montagem 6: os dois contatos no + → não acende.
7. **Pegadinha:** c) esquece a montagem 2 (lâmpada deitada também vale).

**Gabarito: A**

---

## Questão 30 (Padrão P30: interruptores paralelos, three-way)

### O que você precisa saber antes de fazer essa questão
- Cada interruptor three-way tem um **comum (C)** e dois terminais (**T1** e **T2**). Posição I liga C a T1; posição II liga C a T2.
- Montagem correta:
  1. fase → C do interruptor 1;
  2. T1 do 1 → T1 do 2 e T2 do 1 → T2 do 2 (os dois fios "de retorno");
  3. C do interruptor 2 → lâmpada → neutro.
- **Teste da tabela verdade:** mudar **qualquer** interruptor deve inverter o estado da lâmpada.

### Questão
Um casal quer acender e apagar a luz do quarto tanto pelo interruptor S1, perto da porta, quanto pelo interruptor S2, perto da cama. Cada interruptor tem um terminal comum C e dois terminais T1 e T2: na posição I, C se liga a T1; na posição II, C se liga a T2.

A ligação que cumpre essa finalidade é
- a) Fase → C de S1; T1 de S1 → lâmpada; lâmpada → C de S2; T1 de S2 → neutro; terminais T2 sem ligação.
- b) Fase → C de S1; T1 e T2 de S1 → C de S2; T1 de S2 → lâmpada → neutro.
- c) Fase → T1 de S1 e → T1 de S2; C de S1 e C de S2 → lâmpada → neutro.
- d) Fase → C de S1; T1 de S1 → T1 de S2; T2 de S1 → T2 de S2; C de S2 → lâmpada → neutro.
- e) Fase → C de S1; T1 de S1 → C de S2; T2 de S1 → neutro; T1 de S2 → lâmpada → neutro.

### Resolução passo a passo
1. Tabela verdade da alternativa d:

| S1 | S2 | Caminho | Lâmpada |
|---|---|---|---|
| I | I | C1 → T1 → T1 → C2 | acesa |
| I | II | C1 → T1, mas C2 está em T2 | apagada |
| II | I | C1 → T2, mas C2 está em T1 | apagada |
| II | II | C1 → T2 → T2 → C2 | acesa |

   Mudar qualquer um dos dois inverte o estado. ✔
2. Por que as outras falham:
   - a) Série: só acende com os dois em I. Se S2 estiver em II, S1 não acende a luz.
   - b) S1 é inútil (T1 e T2 levam ao mesmo lugar); só S2 controla.
   - c) "Ou": com um deles em I, o outro não consegue apagar.
   - e) S1 em II liga a fase direto ao neutro: **curto-circuito**.

**Gabarito: D**

---

## Questão 31 (Padrão P31: instalação residencial)

### O que você precisa saber antes de fazer essa questão
- Tomadas e lâmpadas ficam em **paralelo** com a rede: todas recebem a tensão nominal e funcionam de forma independente.
- O interruptor fica em **série apenas** com a lâmpada que controla.
- Interruptor no fio principal desliga **tudo**. Interruptor em paralelo com a lâmpada, quando fechado, faz **curto**.

### Questão
Um estudante vai instalar no quarto **duas tomadas** (computador e monitor) e **uma lâmpada**. Exigências: as tomadas e a lâmpada devem receber a tensão nominal da rede, e a lâmpada deve ser ligada e desligada por um interruptor sem afetar as tomadas.

A montagem correta é
- a) interruptor, lâmpada e tomadas em série, num único caminho entre fase e neutro.
- b) lâmpada e tomadas em ramos paralelos entre fase e neutro, com o interruptor em série apenas no ramo da lâmpada.
- c) lâmpada e tomadas em ramos paralelos, com o interruptor no fio fase antes de todos os ramos.
- d) tomadas em série entre si e em paralelo com a lâmpada, com o interruptor em série com a lâmpada.
- e) lâmpada e tomadas em ramos paralelos, com o interruptor em paralelo com a lâmpada.

### Resolução passo a passo
1. "Tensão nominal para todos" → **paralelo**.
2. "Interruptor controla só a lâmpada" → **em série no ramo da lâmpada**.
3. Distratores:
   - a) Série divide a tensão e o interruptor desliga tudo.
   - c) O interruptor desligaria as tomadas também.
   - d) Tomadas em série dividem a tensão entre elas.
   - e) Interruptor fechado em paralelo com a lâmpada é curto.

**Gabarito: B**

---

## Questão 32 (Padrão P32: LED e resistor de proteção)

### O que você precisa saber antes de fazer essa questão
- O LED só conduz num sentido: **anodo voltado para o polo +** (a seta do símbolo aponta o sentido da corrente).
- Funciona com uma tensão fixa (lida na curva característica) e uma corrente máxima.
- O **resistor de proteção em série** "absorve" a sobra de tensão: **R = (U_fonte − U_LED)/i**.
- Um resistor em paralelo com o LED não limita a corrente no LED.
- LED com corrente abaixo do limiar não acende (ver questão 77 da lista).

### Questão
Um LED vermelho deve ser ligado a uma fonte USB de **5,0 V**. Pela curva característica fornecida pelo fabricante, ele opera com **2,0 V** e corrente de **20 mA**.

Para que o LED funcione corretamente, deve-se usar um resistor de
- a) 100 Ω em paralelo com o LED.
- b) 150 Ω em série, com o catodo do LED voltado para o polo positivo.
- c) 250 Ω em série, com o anodo do LED voltado para o polo positivo.
- d) 3,0 Ω em série, com o anodo do LED voltado para o polo positivo.
- e) 150 Ω em série, com o anodo do LED voltado para o polo positivo.

### Resolução passo a passo
1. Sobra de tensão: 5,0 − 2,0 = **3,0 V** sobre o resistor.
2. R = 3,0/0,020 = **150 Ω**, em **série** (mesma corrente do LED).
3. Polaridade: anodo no + (sentido permitido).
4. Distratores:
   - b) Polaridade invertida: o LED não conduz.
   - c) 250 Ω = 5/0,02 (esqueceu de descontar a tensão do LED).
   - d) Esqueceu o "mili" (3/1).

**Gabarito: E**

---

## Questão 33 (Padrão P33: aterramento e segurança)

### O que você precisa saber antes de fazer essa questão
- **Fio terra:** liga a carcaça metálica ao solo. Se um fio fase encostar na carcaça, a corrente de fuga vai pelo terra (caminho de baixíssima resistência), e não pela pessoa. Com a corrente alta de fuga, o disjuntor (ou o DR) desarma.
- O terra **não** fornece energia, **não** substitui o neutro e **não** controla a tensão da rede.
- **Fusível:** fio de material com ponto de fusão escolhido para derreter na corrente limite (questão 89 da lista).
- **Cerca elétrica:** o gerador tem resistência interna enorme para limitar a corrente (questão 81).

### Questão
Uma máquina de lavar tem carcaça metálica. Por um defeito no isolamento, o fio fase passa a encostar na carcaça. A máquina está corretamente ligada ao fio terra.

Nessa situação, o fio terra protege o usuário porque
- a) a corrente de fuga escoa pelo fio terra, um caminho de baixíssima resistência, mantendo a carcaça com potencial próximo ao do solo e fazendo o dispositivo de proteção desarmar.
- b) o fio terra fornece cargas elétricas do solo, que neutralizam as cargas da carcaça e permitem que a máquina continue funcionando normalmente.
- c) o fio terra impede que a tensão da rede ultrapasse 127 V.
- d) o fio terra aumenta a resistência elétrica do corpo de quem toca a máquina.
- e) o fio terra substitui o neutro, o que reduz o consumo de energia.

### Resolução passo a passo
1. Sem terra: a carcaça fica com a tensão da fase. Quem toca fecha o circuito pelo corpo até o chão (choque).
2. Com terra: existe um caminho de resistência quase nula até o solo. A corrente de fuga vai por ele, a carcaça fica perto de 0 V e a corrente alta faz o disjuntor ou o DR desarmar.
3. Distratores: b) e e) são ideias erradas sobre "energia do solo"; c) e d) o terra não muda a tensão da rede nem o corpo.

**Gabarito: A**

---

## Questão 34 (Padrão P34: frequência da rede)

### O que você precisa saber antes de fazer essa questão
- Frequência = ciclos por segundo. 60 Hz = 60 ciclos a cada segundo.
- Um aparelho que **conta ciclos** para medir tempo "pensa" que 1 s passou quando conta o número de ciclos da frequência de **calibração**.
- **Tempo indicado = ciclos contados ÷ frequência de calibração.**
  - Rede mais rápida que a calibração: adianta.
  - Rede mais lenta: atrasa.

### Questão
Um relógio de parede digital mede o tempo contando os ciclos da tensão da rede elétrica. Ele foi fabricado para uma rede de **60 Hz**, mas foi levado para um país cuja rede opera em **50 Hz**.

Depois de exatamente 1 hora real, o relógio terá registrado um intervalo de
- a) 42 min.
- b) 50 min.
- c) 60 min.
- d) 72 min.
- e) 83 min.

### Resolução passo a passo
1. Ciclos em 1 h real a 50 Hz: 50 × 3 600 = **180 000 ciclos**.
2. O relógio divide por 60 (calibração): 180 000 ÷ 60 = 3 000 s = **50 min**.
3. Ele **atrasa** porque a rede é mais lenta que a calibração.
4. **Pegadinha:** d) 72 min é a razão invertida (situação da questão 31 da lista, com 50 → 60 Hz).

**Gabarito: B**

---

## Questão 35 (Padrão P35: leitura de manual, qual informação é essencial)

### O que você precisa saber antes de fazer essa questão
- Antes de ler a tabela, pergunte: **qual grandeza responde ao que foi pedido?**
  - Cabe na tomada, fio ou disjuntor? → **corrente**.
  - Funciona na minha rede? → **tensão**.
  - Quanto gasta? → **potência** (e tempo de uso).
  - Quantos aparelhos para um ambiente? → **capacidade** (refrigeração, aquecimento).
- Peso, frequência, grau de proteção e dimensões quase nunca respondem a essas perguntas.

### Questão
O manual de um aquecedor portátil traz a tabela abaixo.

| Especificação | Valor |
|---|---|
| Tensão | 127 V |
| Potência | 1 500 W |
| Corrente nominal | 11,8 A |
| Frequência | 60 Hz |
| Grau de proteção | IP21 |
| Peso | 3,2 kg |
| Vazão de ar | 2,5 m³/min |

Uma pessoa quer saber (1) se pode ligar o aquecedor em uma tomada que suporta, no máximo, 10 A e (2) quanto ele vai gastar de energia por hora de uso. As informações essenciais para responder a essas duas dúvidas são, respectivamente,
- a) frequência e grau de proteção.
- b) peso e tensão.
- c) tensão e frequência.
- d) vazão de ar e potência.
- e) corrente nominal e potência.

### Resolução passo a passo
1. Dúvida 1 (tomada de 10 A): compare com a **corrente nominal** (11,8 A > 10 A, então **não pode**).
2. Dúvida 2 (gasto por hora): **potência** (1,5 kW × 1 h = 1,5 kWh).
3. As demais informações não respondem às dúvidas. É a mesma lógica da questão 69 da lista (capacidade para "quantos aparelhos" e corrente para "espessura da fiação").

**Gabarito: E**

---

## Balanço da Lista 4

| Questão | Padrão | Gabarito |
|---|---|---|
| 29 | P29: Lâmpada e pilha | A |
| 30 | P30: Interruptores paralelos | D |
| 31 | P31: Instalação residencial | B |
| 32 | P32: LED | E |
| 33 | P33: Aterramento | A |
| 34 | P34: Frequência da rede | B |
| 35 | P35: Leitura de manual | E |

## Balanço final

- Padrões mapeados: **35** (das 120 questões da lista).
- Questões inéditas: **35**, uma por padrão.
- **Restam: 0.** Todos os padrões foram cobertos.
