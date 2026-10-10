# Lista 3: Associações, geradores e medidores (padrões P20 a P28)

---

## Questão 20 (Padrão P20: paralelo em casa e o benjamim)

### O que você precisa saber antes de fazer essa questão
- Aparelhos em **paralelo**: mesma tensão, correntes que **somam**.
- Cada aparelho a mais em paralelo **diminui** a resistência equivalente e **aumenta** a corrente total.
- Os contatos do adaptador (resistência r) ficam **em série** com tudo: toda a corrente passa por eles.
- Calor nos contatos: P = r·i². Dobrar a corrente quadruplica o aquecimento.

### Questão
Um adaptador de tomada tem resistência de contato **r**. Na situação 1, ele alimenta um aparelho de resistência R. Na situação 2, alimenta três aparelhos iguais, de resistência R, ligados em paralelo. Em ambas, C e D são os terminais da mesma tomada.

```
Situação 1:   C ●──[ r ]──[ R ]──● D

Situação 2:   C ●──[ r ]──┬──[ R ]──┬──● D
                          ├──[ R ]──┤
                          └──[ R ]──┘
```

O superaquecimento do adaptador na situação 2 se deve ao aumento da
- a) tensão em cada aparelho.
- b) resistência equivalente entre C e D.
- c) resistência r dos contatos.
- d) potência de cada aparelho.
- e) corrente que atravessa os contatos do adaptador.

### Resolução passo a passo
1. Situação 1: R_eq = r + R. Situação 2: R_eq = r + R/3 (**menor**).
2. Com a mesma tensão da tomada, i = U/R_eq **aumenta**.
3. Toda essa corrente passa por r, que dissipa P = r·i², muito maior.
4. Por que os distratores caem:
   - a) e d) Com mais corrente em r, sobra **um pouco menos** de tensão para os aparelhos.
   - b) A resistência equivalente **diminui**.
   - c) r é a mesma nas duas situações.

**Gabarito: E**

---

## Questão 21 (Padrão P21: resistência equivalente medida com ohmímetro)

### O que você precisa saber antes de fazer essa questão
- Ohmímetro entre dois pontos: veja **todos os caminhos** entre eles.
- Caminhos diferentes entre os mesmos dois pontos estão em **paralelo**.
- Resistores num mesmo caminho estão em **série**.
- Paralelo de dois: **produto ÷ soma**. Dois iguais: metade.

### Questão
Com lápis de grafite, um estudante desenhou uma bandeirinha triangular de festa junina. As resistências medidas em cada lado estão indicadas na figura.

```
   A ●─────────[ 12 kΩ ]─────────● B
       \                       /
      [ 4 kΩ ]           [ 8 kΩ ]
           \               /
             \           /
               \       /
                  ● C
```

Ele mediu, com um ohmímetro, R_AB (entre A e B) e depois R_AC (entre A e C). A razão R_AB / R_AC é
- a) 5/9.
- b) 1.
- c) 3/2.
- d) 9/5.
- e) 3.

### Resolução passo a passo
1. **Entre A e B**, dois caminhos:
   - direto: 12 kΩ;
   - por C: 4 + 8 = 12 kΩ.
   - Paralelo de dois iguais: R_AB = **6 kΩ**.
2. **Entre A e C**, dois caminhos:
   - direto: 4 kΩ;
   - por B: 12 + 8 = 20 kΩ.
   - R_AC = (4 × 20)/(4 + 20) = 80/24 = **10/3 kΩ**.
3. Razão: 6 ÷ (10/3) = 18/10 = **9/5**.
4. Distrator a) é a razão invertida.

**Gabarito: D**

---

## Questão 22 (Padrão P22: divisão de corrente e brilho)

### O que você precisa saber antes de fazer essa questão
- Lâmpadas idênticas: **brilho ∝ i²**. Mais corrente, mais brilho.
- Quem está no fio principal (em série com a bateria) recebe a corrente **total**.
- Num nó, a corrente se divide na razão **inversa** das resistências: o ramo de resistência menor leva mais.
- Resolva primeiro os paralelos mais internos.

### Questão
Cinco lâmpadas idênticas (resistência R) estão ligadas a uma bateria ideal. L1 está em série com a bateria. Entre os pontos X e Y há dois ramos: o ramo superior contém apenas L2; o ramo inferior contém L3 em série com o conjunto de L4 e L5 em paralelo.

```
          L1        X                        Y
  ┌──────[L1]───────●─────────[L2]───────────●──────┐
  │                 │                        │      │
  │                 │          ┌──[L4]──┐    │      │
  │                 └──[L3]────●        ●────┘      │
  │                            └──[L5]──┘           │
  │                                                 │
  └──────────────(+) Bateria (−)────────────────────┘
```

A ordem das lâmpadas, do maior para o menor brilho, é
- a) L1 = L2 > L3 > L4 = L5.
- b) L1 > L2 > L3 > L4 = L5.
- c) L1 > L3 > L2 > L4 = L5.
- d) L2 > L1 > L3 > L4 = L5.
- e) L1 > L2 = L3 > L4 = L5.

### Resolução passo a passo
1. L4 ∥ L5 = R/2. Ramo inferior: L3 + R/2 = **3R/2**. Ramo superior: **R**.
2. Seja I a corrente total (em L1). Ela se divide na razão inversa: ramo superior/ramo inferior = (3R/2)/R = 3/2.
   - L2: **3I/5**
   - L3: **2I/5**
   - L4 e L5: dividem 2I/5 igualmente, **I/5** cada.
3. Ordem: L1 (I) > L2 (3I/5) > L3 (2I/5) > L4 = L5 (I/5).
4. **Pegadinha:** achar que L2 e L3 têm a mesma corrente porque estão "no mesmo nível" do desenho.

**Gabarito: B**

---

## Questão 23 (Padrão P23: cordão de lâmpadas, deduzir a associação)

### O que você precisa saber antes de fazer essa questão
- Se ao retirar **uma** lâmpada **n** apagam (contando ela), as lâmpadas estão em **grupos de n em série**.
- Os grupos ficam em **paralelo** entre si (os outros continuam acesos).
- Tensão em cada lâmpada = U_rede ÷ n.
- Corrente em cada lâmpada = corrente total ÷ número de grupos.

### Questão
Um cordão decorativo tem **120** lâmpadas idênticas e é ligado em **120 V**, consumindo **60 W** no total. Ao se retirar uma lâmpada qualquer, ela e outras **23** lâmpadas se apagam, enquanto as demais continuam acesas normalmente.

A tensão e a potência de cada lâmpada são, respectivamente,
- a) 1 V e 0,5 W.
- b) 5 V e 0,1 W.
- c) 5 V e 0,5 W.
- d) 5 V e 2,5 W.
- e) 24 V e 0,5 W.

### Resolução passo a passo
1. Apagam 24 (a retirada + 23): grupos de **24 em série**.
2. Número de grupos: 120 ÷ 24 = **5 grupos em paralelo**.
3. Tensão por lâmpada: 120 ÷ 24 = **5 V**.
4. Corrente total: 60/120 = 0,5 A. Por grupo: 0,5 ÷ 5 = **0,1 A**.
5. Potência por lâmpada: 5 × 0,1 = **0,5 W** (confere: 60 W ÷ 120 lâmpadas).
6. Distratores: a) supôs todas em série; b) confundiu corrente com potência; d) usou a corrente total.

**Gabarito: C**

---

## Questão 24 (Padrão P24: associar lâmpadas para adequar a tensão)

### O que você precisa saber antes de fazer essa questão
- Lâmpada de 110 V em rede de 220 V: precisa de **outra igual em série** para dividir a tensão (110 V em cada).
- Para ligar várias: monte **ramos de duas em série** e ligue os ramos **em paralelo**.
- Todas em paralelo: 220 V em cada, queimam. Todas em série: tensão pequena demais em cada.

### Questão
Em um sítio, um gerador fornece **220 V**. Uma pessoa tem **6** lâmpadas idênticas de **110 V / 60 W** e quer que todas funcionem conforme suas especificações.

A montagem correta é
- a) as seis lâmpadas em série.
- b) as seis lâmpadas em paralelo.
- c) dois ramos em paralelo, cada um com três lâmpadas em série.
- d) três ramos em paralelo, cada um com duas lâmpadas em série.
- e) três lâmpadas em série ligadas a três lâmpadas em paralelo.

### Resolução passo a passo
1. Cada lâmpada precisa de 110 V. Em 220 V, duas iguais em série recebem 110 V cada.
2. Com 6 lâmpadas: **3 ramos de 2 em série**, ramos em paralelo.
3. Confere: potência total 6 × 60 = 360 W; corrente do gerador 360/220 ≈ 1,6 A.
4. Distratores: a) 220/6 ≈ 37 V em cada; b) 220 V em cada (queimam); c) ≈ 73 V em cada.

**Gabarito: D**

---

## Questão 25 (Padrão P25: ponte de Wheatstone e divisor de tensão)

### O que você precisa saber antes de fazer essa questão
- **Divisor de tensão:** em série, a tensão se divide proporcionalmente às resistências.
- Potencial de um ponto entre dois resistores (com o de baixo ligado ao 0 V):
  **V_ponto = U × R_baixo / (R_cima + R_baixo)**.
- O voltímetro (ideal, não desvia corrente) mostra **V(+) − V(−)**. O sinal depende de qual ponto está no terminal positivo.
- Ponte equilibrada: R_cima,esq × R_baixo,dir = R_cima,dir × R_baixo,esq e o voltímetro marca zero.

### Questão
Um termômetro digital usa o circuito abaixo. O sensor R_s muda de resistência com a temperatura. O terminal **positivo** do voltímetro ideal está ligado ao ponto **Q** e o **negativo** ao ponto **P**.

```
                   + 12 V
                      │
          ┌───────────┴───────────┐
          │                       │
     [R1 = 200 Ω]            [R3 = 300 Ω]
          │                       │
        P ●──────── (V) ──────────● Q
          │      (−)     (+)      │
       [ R_s ]               [R4 = 150 Ω]
          │                       │
          └───────────┬───────────┘
                      │
                     0 V
```

Em uma temperatura na qual R_s = **200 Ω**, a leitura do voltímetro será
- a) −4,0 V.
- b) −2,0 V.
- c) 0 V.
- d) +2,0 V.
- e) +4,0 V.

### Resolução passo a passo
1. Ramo esquerdo: V_P = 12 × 200/(200 + 200) = **6 V**.
2. Ramo direito: V_Q = 12 × 150/(300 + 150) = **4 V**.
3. Leitura = V(+) − V(−) = V_Q − V_P = 4 − 6 = **−2,0 V**.
4. **Pegadinha:** d) +2,0 V é quem inverte os terminais. Na questão 107 da lista, o mesmo cuidado dá −0,3 V.
5. Extra: a ponte ficaria equilibrada (0 V) com R_s = 200 × 150/300 = 100 Ω.

**Gabarito: B**

---

## Questão 26 (Padrão P26: associação de pilhas)

### O que você precisa saber antes de fazer essa questão
- **Série:** tensões **somam**; a capacidade (mAh) é a de uma pilha.
- **Paralelo:** tensão de uma pilha; capacidades **somam** (dura mais).
- Para ter certa tensão **e** maior duração: monte ramos em série com a tensão desejada e ligue os ramos em paralelo.
- Série correta: polo + de uma no polo − da seguinte.

### Questão
Um brinquedo funciona com **4,5 V**. Há disponíveis **6** pilhas de **1,5 V / 2 000 mAh**.

A associação que faz o brinquedo funcionar corretamente pelo maior tempo possível é
- a) as seis pilhas em série.
- b) as seis pilhas em paralelo.
- c) três pilhas em série (as outras três ficam guardadas).
- d) três ramos em paralelo, cada um com duas pilhas em série.
- e) dois ramos em paralelo, cada um com três pilhas em série.

### Resolução passo a passo
1. 4,5 V = 3 × 1,5 V: cada ramo precisa de **3 pilhas em série**.
2. Com 6 pilhas: **2 ramos** de 3, em paralelo.
3. Capacidade: 2 × 2 000 = **4 000 mAh** (o dobro de um ramo só).
4. Conferindo as outras:
   - a) 9 V (danifica o brinquedo).
   - b) 1,5 V (não funciona).
   - c) 4,5 V, mas só 2 000 mAh.
   - d) 3 V (não funciona).

**Gabarito: E**

---

## Questão 27 (Padrão P27: gerador real, U = ε − r·i)

### O que você precisa saber antes de fazer essa questão
- **ε** é a tensão em **circuito aberto** (sem corrente).
- Com corrente, a tensão nos terminais cai: **U = ε − r·i**. Então **r = (ε − U)/i**.
- Geradores iguais em série: **ε somam e r somam**.
- **Pegadinha:** a figura do gerador mostra ε, não a tensão de operação.

### Questão
Uma bomba d'água funciona com **72 V** (tolerância de ±4 V) e consome **5,0 A**. Ela será alimentada por placas fotovoltaicas idênticas ligadas em série. Cada placa fornece **24 V** em circuito aberto e **18 V** quando opera com corrente de **5,0 A**. Usa-se o menor número possível de placas, e o conjunto é representado como um único gerador não ideal.

A força eletromotriz e a resistência interna desse gerador equivalente são
- a) 96 V e 4,8 Ω.
- b) 96 V e 1,2 Ω.
- c) 72 V e 4,8 Ω.
- d) 72 V e 1,2 Ω.
- e) 120 V e 6,0 Ω.

### Resolução passo a passo
1. Cada placa: r = (24 − 18)/5 = **1,2 Ω**.
2. Número de placas: em operação, cada uma dá 18 V. 72 ÷ 18 = **4 placas** (3 dariam 54 V, fora da tolerância).
3. Equivalente: ε = 4 × 24 = **96 V**; r = 4 × 1,2 = **4,8 Ω**.
4. Confere: U = 96 − 4,8 × 5 = 72 V. ✔
5. Distratores: c) e d) usaram a tensão de operação como ε; b) não somou as resistências.

**Gabarito: A**

---

## Questão 28 (Padrão P28: amperímetro e voltímetro)

### O que você precisa saber antes de fazer essa questão
- **Amperímetro: em série** (a corrente tem que passar por dentro dele). Ideal: resistência ≈ 0.
- **Voltímetro: em paralelo** (nos dois terminais do que se mede). Ideal: resistência muito grande.
- Corrente **total** da instalação: amperímetro no fio fase **antes** de qualquer derivação.
- Corrente de **um** aparelho: amperímetro em série **dentro do ramo** desse aparelho.
- Amperímetro em paralelo = curto-circuito. Voltímetro em série = corta a corrente.

### Questão
Na cozinha de uma casa estão ligados, entre o fio fase e o neutro, um chuveiro, uma geladeira e uma lâmpada. Um eletricista quer medir, ao mesmo tempo, a **corrente total** da cozinha, a **tensão na geladeira** e a **corrente apenas no chuveiro**. Ele dispõe de dois amperímetros (A1 e A2) e de um voltímetro (V).

A ligação correta é
- a) A1 em paralelo com a rede; V em série com a geladeira; A2 em série com o chuveiro.
- b) A1 em série no fio fase antes das derivações; V em paralelo com a geladeira; A2 em paralelo com o chuveiro.
- c) A1 em série no fio fase antes das derivações; V em paralelo com a geladeira; A2 em série no ramo do chuveiro.
- d) A1 em série no ramo da lâmpada; V em paralelo com a geladeira; A2 em série no ramo do chuveiro.
- e) A1 em série no fio fase antes das derivações; V em série com a geladeira; A2 em série no ramo do chuveiro.

### Resolução passo a passo
1. Corrente total: A1 **em série no fio fase antes das derivações**.
2. Tensão na geladeira: V **em paralelo** com a geladeira.
3. Corrente do chuveiro: A2 **em série no ramo do chuveiro**.
4. Distratores:
   - a) Amperímetro em paralelo com a rede é um curto.
   - b) A2 em paralelo com o chuveiro faz curto no ramo.
   - d) A1 mediria só a lâmpada.
   - e) V em série desliga a geladeira.

**Gabarito: C**

---

## Balanço da Lista 3

| Questão | Padrão | Gabarito |
|---|---|---|
| 20 | P20: Benjamim / paralelo | E |
| 21 | P21: Resistência equivalente | D |
| 22 | P22: Divisão de corrente e brilho | B |
| 23 | P23: Cordão de lâmpadas | C |
| 24 | P24: Adequar a tensão | D |
| 25 | P25: Ponte de Wheatstone | B |
| 26 | P26: Associação de pilhas | E |
| 27 | P27: Gerador real | A |
| 28 | P28: Medidores | C |
