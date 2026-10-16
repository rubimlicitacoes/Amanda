# Lista 3: Bloco C · Indução Eletromagnética

## Questão 18 (Padrão P13)

### O que você precisa saber antes de fazer essa questão

- Corrente induzida exige **fluxo magnético variável**.
- Corrente **alternada** gera campo magnético **variável**; corrente **contínua** gera campo **constante**.
- Transformadores e carregadores por indução **não funcionam com CC**.

### Questão

Os carregadores sem fio de celular possuem, na base, uma bobina ligada à rede elétrica; o celular possui outra bobina, ligada à bateria. Basta apoiar o aparelho na base para que ele carregue, sem nenhum contato elétrico entre eles. Um estudante tentou construir uma versão caseira ligando a bobina da base diretamente a uma bateria de carro (corrente contínua) e verificou que o celular **não carregava**.

O carregador original funciona e o caseiro não porque

a) a corrente contínua gera um campo magnético mais fraco que a alternada, insuficiente para atravessar o celular.
b) a corrente alternada gera, na base, um campo magnético variável, que produz variação de fluxo e induz corrente na bobina do celular.
c) os elétrons da base saltam diretamente para a bobina do celular apenas quando a corrente é alternada.
d) a bateria de carro gera campo elétrico, e não magnético.
e) a corrente contínua aquece a bobina, destruindo seu campo magnético.

### Resolução passo a passo

**Resposta: B**

Pela Lei de Faraday, a fem induzida na bobina do celular depende da **variação do fluxo**. Com corrente **alternada**, o campo da base **varia** continuamente → fluxo variável → corrente induzida. Com corrente **contínua**, o campo é **constante** (pode ser intenso!) → ΔΦ = 0 → **nenhuma corrente induzida**.

**Erros:** (a) o problema não é intensidade, é **variação**; (c) não há salto de elétrons; (d) corrente contínua também gera campo magnético (só que constante); (e) sem sentido físico.

---

## Questão 19 (Padrão P13)

### O que você precisa saber antes de fazer essa questão

- Um dispositivo **sem bateria** pode funcionar se receber energia por **indução**.
- O emissor (leitor) gera um **campo magnético variável**; a antena-bobina do receptor capta a **variação de fluxo**.
- Lembre os distratores: “campo constante”, “radiação aquece”, “atrito”.
Mesma ideia do fogão de indução (Ind Q8, Q13), da estimulação cerebral (Ind Q7) e do carregador sem fio: **“campo magnético variável induz corrente”**.

### Questão

Cartões de transporte por aproximação não possuem bateria. Dentro deles há um pequeno chip ligado a uma antena em forma de bobina plana. Quando o cartão é aproximado do leitor da catraca, o chip é energizado e transmite seus dados.

O chip do cartão é energizado porque o leitor

a) emite um campo magnético constante, que magnetiza o chip.
b) produz um campo magnético variável, que induz corrente elétrica na bobina do cartão.
c) aquece o cartão por radiação, gerando corrente por efeito térmico.
d) transfere elétrons ao cartão por contato através do ar.
e) cria atrito eletrostático com o cartão, eletrizando o chip.

### Resolução passo a passo

**Resposta: B**

A bobina do leitor é percorrida por corrente variável → **campo magnético variável** → ao aproximar o cartão, o **fluxo** em sua bobina **varia** → **fem induzida** (Faraday) → corrente que alimenta o chip.

---

## Questão 20 (Padrão P14)

### O que você precisa saber antes de fazer essa questão

- Polo **aproximando** → espira cria o **mesmo** polo (repele).
- Polo **afastando** → espira cria polo **oposto** (atrai).
- Inverter polaridade **e** movimento ao mesmo tempo **mantém** a corrente.
- Sem movimento relativo → sem corrente.
Na Ind Q10 era o contrário: original “N afastando” ≡ alternativa A, “S aproximando”.

### Questão

Em um experimento, o **polo norte** de um ímã é **aproximado** de uma espira condutora fixa, ligada a um amperímetro, e observa-se uma corrente induzida em determinado sentido.

Qual procedimento produz corrente induzida no **mesmo sentido**?

a) Afastar o ímã da espira, mantendo o polo norte voltado para ela.
b) Aproximar o ímã da espira, com o polo sul voltado para ela.
c) Afastar o ímã da espira, com o polo sul voltado para ela.
d) Mover o ímã e a espira juntos, com a mesma velocidade e no mesmo sentido.
e) Manter o ímã parado dentro da espira, com o polo norte voltado para ela.

### Resolução passo a passo

**Resposta: C**

**Original:** N aproximando → a espira cria **N** na face voltada ao ímã.

| Alternativa | Situação | Polo criado na face | Corrente |
|---|---|---|---|
| a | N afastando | S | ❌ inversa |
| b | S aproximando | S | ❌ inversa |
| **c** | **S afastando** | **N** | ✅ **mesma** |
| d | sem movimento relativo | — | ❌ nula |
| e | fluxo constante | — | ❌ nula |

**Macete:** em (c) inverteu **duas** coisas (polo e movimento) → volta ao original.

---

## Questão 21 (Padrão P14)

### O que você precisa saber antes de fazer essa questão

- Um ímã em movimento perto de um condutor induz nele correntes (**correntes de Foucault**).
- Por Lenz, essas correntes geram um campo que **se opõe ao movimento** → efeito de **frenagem**.
- Cobre e alumínio **não** são atraídos por ímãs (não são ferromagnéticos).

### Questão

Em uma feira de ciências, um estudante solta um pequeno ímã de neodímio dentro de um tubo vertical de **cobre** e outro ímã idêntico dentro de um tubo de **PVC** de mesmas dimensões. O ímã no tubo de PVC cai rapidamente, enquanto o do tubo de cobre demora vários segundos para sair.

A queda lenta no tubo de cobre ocorre porque

a) o cobre é um material ferromagnético e atrai o ímã para as paredes.
b) o movimento do ímã induz correntes no tubo, que geram um campo magnético oposto ao movimento de queda.
c) o tubo de cobre é mais pesado, e sua gravidade compensa a da Terra.
d) o ar dentro do tubo de cobre é mais denso, aumentando o atrito.
e) o cobre blinda o campo gravitacional, como uma gaiola de Faraday.

### Resolução passo a passo

**Resposta: B**

Ao cair, o ímã faz o **fluxo magnético variar** em cada “anel” do tubo de cobre (condutor) → surgem **correntes induzidas** (Faraday). Pela **Lei de Lenz**, elas criam campos que **se opõem à causa** (a queda): acima do ímã, atraem; abaixo, repelem → frenagem. No **PVC** (isolante) não há corrente → queda livre.

**Erros:** (a) cobre **não** é ferromagnético; (c) e (d) absurdos; (e) gaiola de Faraday blinda campo **elétrico**, não gravidade.

---

## Questão 22 (Padrão P15, proporcionalidade)

### O que você precisa saber antes de fazer essa questão

- **ε = N·B·A·ω** (o fio **não** aparece aqui).
- **R = ρL/S**: S = área da seção do fio; dobrar o **diâmetro** quadruplica S.
- i_curto = ε/R.
É a Ind Q6 “do avesso”: lá se pedia dobrar **V** com **i** constante (resposta: dobrar N).

### Questão

Um estudante construiu um pequeno gerador com **N** espiras de fio de cobre girando com frequência **f** em um campo magnético **B**. Ele quer **dobrar a corrente de curto-circuito** sem alterar a **tensão máxima** do gerador.

Para isso, ele deve

a) dobrar o número de espiras.
b) dobrar a frequência de giro.
c) dobrar a intensidade do campo magnético.
d) dobrar o diâmetro do fio.
e) dobrar a área da seção transversal do fio, mantendo seu comprimento.

### Resolução passo a passo

**Resposta: E**

| | ε | R | i |
|---|---|---|---|
| a) N×2 | ×2 ❌ | ×2 | igual |
| b) f×2 | ×2 ❌ | — | ×2 |
| c) B×2 | ×2 ❌ | — | ×2 |
| d) D×2 | igual ✔ | ÷4 | **×4** ❌ |
| **e) S×2** | **igual** ✔ | **÷2** | **×2** ✔ |

A pegadinha é a (d): o diâmetro dobrado **quadruplica** a área da seção (S ∝ D²).

---

## Questão 23 (Padrão P15, cálculo)

### O que você precisa saber antes de fazer essa questão

- **ε_máx = N·B·A·ω**, **ω = 2πf**.
- Unidades SI: A em m², B em T, f em Hz.

### Questão

Um gerador didático possui **100 espiras** de área **0,01 m²** cada, que giram com frequência de **10 Hz** em um campo magnético uniforme de **0,2 T**. Use π = 3.

A tensão máxima produzida é de

a) 1,2 V.
b) 2 V.
c) 12 V.
d) 20 V.
e) 120 V.

### Resolução passo a passo

**Resposta: C**

1. ω = 2πf = 2 × 3 × 10 = 60 rad/s.
2. ε = NBAω = 100 × 0,2 × 0,01 × 60 = **12 V**.

**Distratores:** (b) 2 V = esqueceu o 2π (usou ω = f); (e) 120 V = erro de vírgula.
