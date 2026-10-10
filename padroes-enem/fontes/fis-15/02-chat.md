# Lista 2: padrões P11 a P20

> 💡 **Lembrete do método:** leia o mini guia, **tape a resolução** e tente resolver sozinha. Errar tentando fixa mais do que acertar lendo.

---

### 📘 O que você precisa saber antes da Questão 11 (Padrão P11)

**Intuição:** no gráfico **posição × tempo**, a velocidade é **o quanto a curva está inclinada** naquele ponto. Imagine uma régua encostada na curva (a reta tangente): quanto mais em pé a régua, maior a velocidade.

**Conceito:**
- velocidade = inclinação da reta tangente ao gráfico s × t
- topo ou fundo da curva (reta tangente horizontal): **v = 0** (é ali que o corpo inverte o sentido)
- trecho mais íngreme: **maior velocidade**
- curva descendo: o corpo está **voltando** (velocidade negativa); compare os módulos pela inclinação

**Como o ENEM cobra:** uma curva com pontos marcados e a pergunta "onde a velocidade é menor e maior?".

**Pegadinha:** achar que o ponto **mais alto** do gráfico é o de maior velocidade. O mais alto é a maior **posição**, e ali a velocidade é **zero**.

#### Questão 11
Um drone de entregas se move ao longo de uma linha reta. O esboço abaixo mostra sua posição em função do tempo, com quatro pontos destacados.

```
 Posição
   ^
   |                    C
   |                .---●---.
   |              ●B          '--.
   |             /                '--●D
   |            /                      '----.____
   |          .'
   |      ●A-'
   | __.-'
   +-------------------------------------------> Tempo
```

Os pontos em que o **módulo** da velocidade do drone é **menor** e **maior** são, respectivamente:
(a) A e C (b) C e B (c) D e B (d) C e D (e) A e B

#### ✅ Resolução passo a passo
1. **Ponto C (topo):** a tangente é horizontal, então **v = 0**. É o menor módulo possível.
2. **Ponto A:** a curva ainda está "deitada", então a velocidade é pequena, mas não nula.
3. **Ponto B:** é o trecho mais íngreme do gráfico, então tem a **maior velocidade**.
4. **Ponto D:** a curva desce (o drone volta), mas com inclinação suave. O módulo é moderado.

**Gabarito: (b)**

⚠️ **Armadilha:** escolher C como "maior", porque é o ponto mais alto. Altura no gráfico s × t é **posição**, não velocidade.
🧠 **Para fixar:** "No s×t, a velocidade está na **inclinação**, não na **altura**."

---

### 📘 O que você precisa saber antes da Questão 12 (Padrão P12)

**Intuição:** no gráfico **velocidade × tempo**, a inclinação mostra o quão rápido a velocidade muda, ou seja, a **aceleração**.

**Conceito:**
$$a = \frac{\Delta v}{\Delta t} = \frac{v_{final} - v_{inicial}}{t_{final} - t_{inicial}}$$

| Trecho do gráfico v × t | Significado |
|---|---|
| Reta subindo | acelera (a > 0) |
| Reta horizontal | MU (a = 0) |
| Reta descendo | freia (a < 0); o ENEM costuma pedir o **módulo** |

**Bônus (aparece em outras questões):** a **área** sob o gráfico v × t é o **deslocamento**.

**Pegadinha:** pegar os dados do veículo errado, ou responder só Δv sem dividir por Δt.

#### Questão 12
Dois veículos, uma moto **X** (condutor imprudente) e um carro **Y** (condutor prudente), estão lado a lado em t = 0 quando um semáforo fica amarelo. Os gráficos v × t são formados por segmentos de reta que ligam os pontos (t em s; v em m/s):

- **Moto X:** (0; 5) → (5; 25) → (15; 25) → (20; 0)
- **Carro Y:** (0; 20) → (10; 10) → (20; 0)

Considere os intervalos **(I)** de 0 s a 5 s e **(II)** de 15 s a 20 s. Os módulos das acelerações da **moto X** nesses intervalos, em m/s², são:
(a) 4,0 e 5,0 (b) 1,0 e 1,0 (c) 5,0 e 4,0 (d) 20 e 25 (e) 4,0 e 1,25

#### ✅ Resolução passo a passo
1. **Intervalo I (0 a 5 s):** v vai de 5 para 25 m/s, então a = (25 − 5)/(5 − 0) = 20/5 = **4,0 m/s²**
2. **Intervalo II (15 a 20 s):** v vai de 25 para 0 m/s, então a = (0 − 25)/(20 − 15) = −25/5 = −5, e |a| = **5,0 m/s²**

**Gabarito: (a)**

⚠️ **Armadilhas:** (b) usa os dados do carro Y. (d) deu só o Δv. (c) inverteu a ordem pedida.
🧠 **Para fixar:** "No v×t, a inclinação é a aceleração e a área é o deslocamento."

---

### 📘 O que você precisa saber antes da Questão 13 (Padrão P13)

**Intuição:** parar um carro tem duas etapas:
1. **Reação:** o motorista percebe o perigo, mas ainda não pisou no freio. O carro segue com **v constante**.
2. **Frenagem:** com o freio acionado, a velocidade cai com desaceleração constante.

**Por que a curva é "arredondada" no gráfico v × distância?** Por Torricelli, v² = v₀² − 2a·d. A velocidade é uma **raiz**, não uma reta.
- No início da frenagem o carro está rápido e percorre **muitos metros** perdendo pouca velocidade, então a curva cai devagar.
- No fim, ele está lento e perde o resto da velocidade em **poucos metros**, então a curva despenca.
- Resultado: **concavidade para baixo**, terminando quase vertical.

**Distâncias:**
- reação: d₁ = v₀ · t(reação)
- frenagem: d₂ = v₀² / (2a)

**Pegadinha:** desenhar a frenagem como **reta**. Ela só é reta no gráfico v × **tempo**.

#### Questão 13
Um motorista trafega a 20 m/s quando detecta um obstáculo. Seu tempo de reação é de 0,8 s, e os freios produzem desaceleração constante de 5 m/s².

Qual descrição representa o gráfico **velocidade × distância percorrida**, desde a detecção até a parada?
(a) Trecho horizontal até 16 m; depois, reta descendente até zerar em 56 m.
(b) Trecho horizontal até 16 m; depois, curva com concavidade para baixo até zerar em 56 m.
(c) Trecho horizontal até 16 m; depois, curva com concavidade para cima até zerar em 56 m.
(d) Trecho horizontal até 16 m; depois, curva com concavidade para baixo até zerar em 40 m.
(e) Reta descendente desde a origem até zerar em 40 m.

#### ✅ Resolução passo a passo
1. **Reação:** d₁ = 20 × 0,8 = **16 m**, com v constante (trecho horizontal)
2. **Frenagem:** d₂ = 20²/(2 × 5) = 400/10 = **40 m**
3. **Distância total:** 16 + 40 = **56 m**
4. **Forma da frenagem:** v = √(v₀² − 2a·x) dá uma curva com **concavidade para baixo**

**Gabarito: (b)**

⚠️ **Armadilhas:** (a) desenhou a frenagem como reta (confusão com v × t). (d) esqueceu de somar a reação. (e) ignorou a reação.
🧠 **Para fixar:** "v × d: reto na reação, 'cúpula' na frenagem."

---

### 📘 O que você precisa saber antes da Questão 14 (Padrão P14)

**Intuição:** essas questões quase não pedem cálculo. Pedem **leitura cuidadosa**. O ENEM apresenta dois gráficos (ou duas tabelas) e você precisa **combinar as condições**.

**Método (filtro em camadas):**
1. Identifique o que se quer **maximizar ou minimizar**.
2. Analise **uma variável por vez**: "nesta tabela, qual condição dá o menor valor?"
3. Junte as melhores condições de cada análise.
4. Desconfie de tendências: nem toda relação é "quanto mais, melhor". Às vezes existe um **ponto ótimo** no meio.

**Pegadinha:** generalizar ("velocidade maior gasta mais") sem olhar os números, ou ler a linha da categoria errada (aclive no lugar de plano).

#### Questão 14
Uma empresa testou o consumo de energia (kWh/km) de um ônibus elétrico em vias planas e em aclive, com distâncias iguais percorridas em linha reta.

**Tabela 1: consumo em função da lotação (velocidade média fixa)**
| Lotação | 20% | 50% | 80% | 100% |
|---|---|---|---|---|
| Via plana | 0,9 | 1,0 | 1,1 | 1,2 |
| Aclive | 1,3 | 1,5 | 1,7 | 1,9 |

**Tabela 2: consumo em função da velocidade média (lotação fixa)**
| Velocidade (km/h) | 20 | 30 | 40 | 50 | 60 |
|---|---|---|---|---|---|
| Via plana | 1,4 | 1,1 | 1,0 | 1,05 | 1,2 |
| Aclive | 1,9 | 1,6 | 1,5 | 1,55 | 1,7 |

A situação de **menor consumo** ocorre com o ônibus:
(a) lotado, a 20 km/h, em via plana.
(b) com pouca lotação, a 60 km/h, em aclive.
(c) com pouca lotação, a 40 km/h, em via plana.
(d) com pouca lotação, a 20 km/h, em via plana.
(e) lotado, a 40 km/h, em aclive.

#### ✅ Resolução passo a passo
1. **Tipo de via:** nas duas tabelas, a via plana sempre consome menos que o aclive, então a resposta é **plana**.
2. **Lotação (Tabela 1):** o consumo cresce com a lotação, então a melhor opção é **pouca lotação (20%)**.
3. **Velocidade (Tabela 2):** o consumo cai até 40 km/h e depois sobe. O mínimo está em **40 km/h**.
4. **Combinação:** pouca lotação, 40 km/h, via plana.

**Gabarito: (c)**

⚠️ **Armadilha:** (d) supõe que "mais devagar gasta menos". A tabela mostra que a 20 km/h o consumo é **alto** (1,4).
🧠 **Para fixar:** "Uma variável por vez, procure o mínimo e depois combine. Cuidado com o ponto ótimo no meio."

---

### 📘 O que você precisa saber antes da Questão 15 (Padrão P15)

**Intuição:** quando a pergunta envolve **velocidade e distância, sem tempo**, a ferramenta é **Torricelli**.

**Conceito:**
$$v^2 = v_0^2 + 2a\Delta s$$

Na frenagem até parar (v = 0), usando o módulo de a:
$$d = \frac{v_0^2}{2a} \qquad\text{ou}\qquad a = \frac{v_0^2}{2d}$$

**Detalhe importante:** a distância de frenagem é proporcional ao **quadrado** da velocidade. Uma redução pequena na velocidade gera uma redução grande na distância. É por isso que reduzir limites salva vidas.

**Conversões úteis:** 36 km/h = 10 m/s · 54 km/h = 15 m/s · 72 km/h = 20 m/s · 108 km/h = 30 m/s

**Pegadinha:** usar km/h direto na fórmula, ou esquecer de elevar ao quadrado.

#### Questão 15
Uma prefeitura estuda reduzir o limite de velocidade de uma avenida de 72 km/h para 54 km/h. Em pista seca, os carros conseguem frear com desaceleração constante de 5 m/s².

A distância necessária para a frenagem, desde a velocidade limite até a parada, será **reduzida** em:
(a) 3,6 m (b) 17,5 m (c) 18,0 m (d) 22,5 m (e) 40,0 m

#### ✅ Resolução passo a passo
1. **Converter:** 72 km/h = **20 m/s**; 54 km/h = **15 m/s**
2. **Distância antiga:** d₁ = 20²/(2 × 5) = 400/10 = **40 m**
3. **Distância nova:** d₂ = 15²/(2 × 5) = 225/10 = **22,5 m**
4. **Redução:** 40 − 22,5 = **17,5 m** (uma queda de 25% na velocidade cortou quase 44% da distância)

**Gabarito: (b)**

⚠️ **Armadilhas:** (c) 18 é a diferença de velocidades em km/h. (d) e (e) são as distâncias separadas, não a redução.
🧠 **Para fixar:** "Sem tempo no problema, use Torricelli. Distância de frenagem ∝ v²."

> 💬 **Variação da Q29 oficial:** em vez da distância, o problema dá as distâncias e pede a **aceleração** (a = v²/2d). A lógica é a mesma, isolando outra variável.

---

### 📘 O que você precisa saber antes da Questão 16 (Padrão P16)

**Intuição:** dois motoristas na mesma velocidade e com o mesmo freio têm **frenagens idênticas**. A única diferença é o tempo **antes** de frear, e nesse tempo o carro anda em **velocidade constante**.

**Conceito:**
$$\Delta d_{extra} = v \cdot \Delta t_{reação\ extra}$$

**O truque:** a parte da frenagem **se cancela** na comparação. O ENEM coloca dados "de enfeite" (aceleração inicial, desaceleração) para você fazer conta à toa.

**Pegadinha:** calcular a distância total de cada um quando a pergunta só quer a **diferença**.

#### Questão 16
Dois motoristas trafegam a 25 m/s em uma rodovia. O primeiro está atento e tem tempo de reação de 0,7 s. O segundo está digitando no celular e seu tempo de reação sobe para 1,9 s. Diante de uma emergência, ambos freiam com desaceleração constante de 8 m/s² até parar.

Quantos metros o motorista distraído percorre **a mais** que o atento, até a parada total?
(a) 1,2 m (b) 30,0 m (c) 39,1 m (d) 47,5 m (e) 86,6 m

#### ✅ Resolução passo a passo
1. **Frenagem:** igual para os dois (mesmo v₀ e mesmo a), então **se cancela**
2. **Tempo de reação a mais:** 1,9 − 0,7 = **1,2 s**
3. **Distância extra:** 25 × 1,2 = **30 m**
4. **Conferência:** distraído = 25 × 1,9 + 625/16 ≈ 47,5 + 39,1 = 86,6 m; atento = 17,5 + 39,1 = 56,6 m; diferença = 30 m ✔

**Gabarito: (b)**

⚠️ **Armadilhas:** (c) é só a frenagem. (d) é só a reação do distraído. (e) é a distância total dele.
🧠 **Para fixar:** "Mesmo freio, mesma frenagem. A diferença está toda na reação: v × Δt."

---

### 📘 O que você precisa saber antes da Questão 17 (Padrão P17)

**Intuição:** o veículo tem duas fases: **acelera** (MUV) até certa velocidade e depois **segue constante** (MU). Para saber quando ele chega a um ponto, descubra **em qual fase** ele está nesse ponto.

**Roteiro:**
1. **Fim da aceleração:** t₁ = v/a e d₁ = v²/(2a)
2. **Ponto dentro da fase MUV:** use s = a·t²/2
3. **Ponto depois de d₁:** t = t₁ + (d − d₁)/v

**Pegadinha:** o enunciado costuma pedir o instante em que o veículo está **antes** do ponto ("a 100 m de cruzar"). Subtraia essa distância.

#### Questão 17
Em uma linha de VLT, o veículo parte do repouso na estação com aceleração constante de 0,5 m/s² até atingir 15 m/s e, a partir daí, segue com velocidade constante. Ao longo da via há três cancelas, a **300 m**, **750 m** e **1 200 m** da estação. Cada cancela deve abrir quando o VLT estiver **75 m antes** dela, para que ele nunca precise reduzir a velocidade.

Quanto tempo após a partida as três cancelas devem abrir, respectivamente?
(a) 15 s, 45 s e 75 s
(b) 30 s, 60 s e 90 s
(c) 35 s, 65 s e 95 s
(d) 40 s, 70 s e 100 s
(e) 45 s, 75 s e 105 s

#### ✅ Resolução passo a passo
1. **Fim da aceleração:** t₁ = 15/0,5 = **30 s**; d₁ = 15²/(2 × 0,5) = 225/1 = **225 m**
2. **Pontos de abertura (75 m antes):** 300 − 75 = **225 m**; 750 − 75 = **675 m**; 1200 − 75 = **1125 m**
3. **Primeira cancela (225 m):** coincide com o fim da aceleração, então **30 s**
4. **Segunda (675 m):** 30 + (675 − 225)/15 = 30 + 30 = **60 s**
5. **Terceira (1125 m):** 30 + (1125 − 225)/15 = 30 + 60 = **90 s**

**Gabarito: (b)**

⚠️ **Armadilhas:** (c) esqueceu os 75 m de antecedência. (a) tratou como MU desde a partida (225/15 = 15 s).
🧠 **Para fixar:** "Duas fases: ache onde termina a aceleração e só depois use o MU."

---

### 📘 O que você precisa saber antes da Questão 18 (Padrão P18)

**Intuição:** objetos pesados não caem mais rápido. No dia a dia parece que caem porque o **ar** atrapalha mais os leves e largos (pena, folha). Sem ar, tudo cai junto.

**Conceito:** o corpo mais pesado tem mais peso (P = m·g), mas também tem mais **massa** (mais inércia, mais difícil de acelerar). Os dois efeitos se compensam:
$$a = \frac{P}{m} = \frac{m\cdot g}{m} = g$$

**O que é igual:** a **aceleração** (e por isso o tempo de queda, para a mesma altura).
**O que é diferente:** peso, inércia, energia potencial e quantidade de movimento, que dependem da massa.

**Pegadinha:** a alternativa "mesma força peso" parece boa, mas está **errada**. O peso depende da massa.

#### Questão 18
Em um museu de ciências, uma bola de boliche (6 kg) e uma bola de pingue-pongue (2,7 g) são soltas no mesmo instante e da mesma altura dentro de uma grande câmara de vácuo. As duas tocam o fundo da câmara **ao mesmo tempo**.

Isso ocorre porque as bolas:
(a) estão sujeitas à mesma força peso.
(b) possuem a mesma energia potencial gravitacional inicial.
(c) têm a mesma aceleração, pois a razão entre peso e massa é igual a g para ambas.
(d) caem com velocidade constante, já que no vácuo não há gravidade.
(e) possuem a mesma inércia, já que estão no vácuo.

#### ✅ Resolução passo a passo
1. **O que precisa ser igual** para chegarem juntas, partindo do repouso e da mesma altura? A **aceleração**.
2. **Eliminando:** (a), (b) e (e) dependem da massa, e as massas são diferentes. (d) está errada porque o vácuo tira o **ar**, não a gravidade (se não houvesse gravidade, nem cairiam).
3. **Correta:** a = P/m = g para as duas.

**Gabarito: (c)**

🧠 **Para fixar:** "Sem ar, todos caem com a mesma aceleração g. Peso maior compensa inércia maior."

---

### 📘 O que você precisa saber antes da Questão 19 (Padrão P19)

**Intuição:** na queda livre a velocidade **aumenta a cada segundo**. Por isso, nos segundos finais o corpo percorre muito mais distância que nos iniciais. A distância **não** cresce na mesma proporção do tempo: cresce com o **quadrado** do tempo.

**Conceito (partindo do repouso, g = 10 m/s²):**
$$d = \frac{g\,t^2}{2} = 5t^2$$

**Consequência poderosa:**
- dobrou o tempo: a distância fica **4×**
- triplicou o tempo: a distância fica **9×**

**Por que acelerado?** O peso é constante, então a aceleração é constante (MUV).

**Pegadinha:** pensar proporcionalmente ("tempo dobra, distância dobra").

#### Questão 19
No teste da régua para medir tempo de reação, uma régua é solta verticalmente e a pessoa deve segurá-la o mais rápido possível. Uma pessoa A, com tempo de reação de 0,2 s, segura a régua após ela cair 20 cm. Uma pessoa B, cansada, tem tempo de reação **igual ao dobro** do de A.

Desprezando a resistência do ar, a régua cairia, até B segurá-la:
(a) 20 cm (b) 40 cm (c) 60 cm (d) 80 cm (e) 160 cm

#### ✅ Resolução passo a passo
1. **Relação:** d ∝ t², e o tempo dobrou, então a distância fica 2² = **4 vezes** maior
2. **Distância:** 4 × 20 cm = **80 cm**
3. **Conferência pela fórmula:** d = 5 × (0,4)² = 5 × 0,16 = 0,80 m ✔ (A: 5 × 0,04 = 0,20 m ✔)

**Gabarito: (d)**

⚠️ **Armadilha:** (b) 40 cm é o raciocínio linear. Na prática a régua de 30 cm nem daria para o teste: B não conseguiria segurá-la.
🧠 **Para fixar:** "Na queda livre, d ∝ t²: tempo ×2 dá distância ×4."

---

### 📘 O que você precisa saber antes da Questão 20 (Padrão P20)

**Intuição:** jogue uma bola para cima. Ela sobe cada vez mais devagar, **para por um instante** no topo e volta. No topo, a velocidade é zero, **mas a gravidade não desligou**: é ela que faz a bola voltar.

**Conceito, no ponto mais alto do lançamento vertical:**
- **v = 0** (sentido indefinido)
- **a = g ≠ 0, para baixo** (a mesma aceleração da subida e da descida)

**Fases do salto (Q8 oficial):**
1. **Impulsão:** pés no chão, o corpo empurra o solo (o tempo de voo é decidido aqui)
2. **Voo:** sem contato; só o peso atua (lançamento vertical ou oblíquo)
3. **Queda e aterrissagem**

**Pegadinha:** "v = 0 então a = 0". Se a aceleração fosse zero com v = 0, o corpo ficaria **parado no ar para sempre**.

#### Questão 20
Um jogador de vôlei salta verticalmente para bloquear um ataque. Após perder o contato com a quadra, ele sobe, atinge a altura máxima e desce. Despreze a resistência do ar.

No instante em que o jogador atinge a **altura máxima**, a combinação correta para velocidade e aceleração é:
(a) v = 0 e a = 0.
(b) v = 0 e a ≠ 0, para baixo.
(c) v ≠ 0, para cima, e a = 0.
(d) v = 0 e a ≠ 0, para cima.
(e) v ≠ 0, para baixo, e a ≠ 0, para baixo.

#### ✅ Resolução passo a passo
1. **Velocidade:** no topo ele deixa de subir e ainda não começou a descer, então **v = 0**
2. **Aceleração:** durante todo o voo a única força é o **peso**, que é vertical para baixo, então **a = g, para baixo**
3. **Teste mental:** se a fosse 0 no topo, nada o faria descer. Absurdo.

**Gabarito: (b)**

⚠️ **Armadilhas:** (a) é o erro mais clássico do tema. (d) inverte o sentido da gravidade.
🧠 **Para fixar:** "No topo, para a velocidade, mas a gravidade continua."

---

## 📊 Balanço da Lista 2

| | |
|---|---|
| **Padrões mapeados no total** | 48 |
| **Padrões abordados até agora** | 20 (P1 a P20) |
| **Abordados nesta lista** | 10 (P11 a P20) |
| **Padrões que ainda faltam** | **28** |

**Próxima lista (Lista 3, P21 a P30):** trajetória do lançamento horizontal, vetores força e velocidade no projétil, lançamento horizontal → altura vertical, lançamento inclinado com tempo dado, equação da trajetória com alvo, alcance ∝ v₀²/g, travessia de rio com trigonometria, correnteza variável, velocidade relativa vetorial (vento 3D) e velocidade relativa nula.

Depois da Lista 3 restarão 18 padrões: **Lista 4** com 10 e **Lista 5** com os 8 últimos.

Quando quiser, é só pedir a **Lista 3**.