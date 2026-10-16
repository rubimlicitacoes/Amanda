# Lista 4 (final): 8 questões inéditas (padrões P13, P14, P15, P16)

> Notação usada: n! (fatorial), C(n,p) (combinação), A(n,p) (arranjo), · (vezes), ÷ (dividido).
> Tente resolver antes de ler a resolução. Cubra a parte de baixo com a mão.

---

## Questão 25 (Padrão P13: não adjacência, método das lacunas)

### Macetes antes de fazer essa questão
- "**Nenhum ao lado de outro**": primeiro posicione o que está **livre** (lugares vazios, ou pessoas sem restrição). Eles criam **lacunas**: antes do primeiro, entre cada par e depois do último. Com v livres, são **v + 1 lacunas**.
- Cada elemento restrito vai para uma lacuna diferente, o que garante que nenhum fique colado ao outro.
- Elementos restritos **distintos** (pessoas, carros diferentes): C(lacunas, p) · p! = A(lacunas, p).
- Esquema com 5 vagas vazias (V): `_ V _ V _ V _ V _ V _` → 6 lacunas.

### Questão
Um estacionamento tem uma fileira de 8 vagas lado a lado. Três carros de modelos diferentes chegarão para estacionar nessa fileira, que está vazia. Por causa do tamanho dos carros, o manobrista decidiu que nenhum carro poderá ficar em uma vaga vizinha à de outro carro.

A quantidade de maneiras distintas de estacionar os três carros é dada por
- a) C(6,3) · 3!
- b) C(8,3)
- c) A(8,3)
- d) C(5,3) · 3!
- e) C(6,3)

### Resolução em 3 minutos
1. Vagas vazias: 8 − 3 = 5. Elas criam 6 lacunas.
2. Escolher 3 lacunas para os carros: C(6,3) = 20.
3. Carros diferentes: × 3! = 6.
4. 20 · 6 = 120.

**Gabarito: A**

### Resolução comentada
Deixe as 5 vagas que ficarão vazias enfileiradas. Entre elas e nas pontas há 6 espaços possíveis para os carros. Se cada carro for para um espaço diferente, sempre haverá pelo menos uma vaga vazia entre dois carros. Escolher quais 3 espaços recebem carros: C(6,3) = 20. Como os carros são de modelos diferentes, trocá-los de lugar gera outra arrumação: × 3! = 6. Total 120. É a Q37 da lista original (3 agentes em 6 vagões: C(4,3) · 3!).

### Armadilha
- Esquecer o 3! (alternativa e). Só serviria se os carros fossem idênticos.
- Contar lacunas = vazios (5) e marcar C(5,3) · 3! (alternativa d). São sempre **vazios + 1**.
- Ignorar a restrição: A(8,3) = 336 (alternativa c).

---

## Questão 26 (Padrão P13: não adjacência com pessoas dos dois grupos)

### Macetes antes de fazer essa questão
- Quando **todos** são pessoas distintas (ninguém é vazio), o método é o mesmo:
  1. permute o grupo **sem restrição** (n!);
  2. conte as lacunas (n + 1);
  3. coloque o grupo restrito nas lacunas, com ordem: A(n+1, p).
- Não confunda com "**não ficarem as três juntas**". Esse caso é diferente e se resolve por complementar (total − todas juntas).

### Questão
Para a foto oficial de um grupo de teatro, 5 atores e 3 atrizes ficarão lado a lado em uma única fila. O fotógrafo pediu que duas atrizes nunca fiquem uma ao lado da outra.

O número de maneiras de organizar a fila é dado por
- a) 8!
- b) 5! · 3!
- c) 5! · C(6,3)
- d) 5! · A(6,3)
- e) 8! − 6! · 3!

### Resolução em 3 minutos
1. Atores em fila: 5! = 120.
2. Lacunas: 6.
3. Atrizes distintas em 3 lacunas, com ordem: A(6,3) = 6 · 5 · 4 = 120.
4. Total: 5! · A(6,3) = 14 400.

**Gabarito: D**

### Resolução comentada
Primeiro organize os 5 atores: 5! = 120 ordens. Eles criam 6 lacunas: `_ A _ A _ A _ A _ A _`. Cada atriz ocupa uma lacuna diferente, o que impede que duas atrizes fiquem lado a lado. Como as atrizes são pessoas diferentes, importa quem fica em qual lacuna: A(6,3) = 120. Total 120 · 120 = 14 400.

### Armadilha
- Usar C(6,3) (alternativa c). Isso trataria as atrizes como iguais.
- Marcar 8! − 6! · 3! (alternativa e). Essa conta tira só os casos com as **três** atrizes juntas, e ainda sobram filas com duas atrizes vizinhas.

---

## Questão 27 (Padrão P14: combinação com repetição, sabores repetíveis)

### Macetes antes de fazer essa questão
- **Combinação com repetição:** escolher p itens entre n tipos, podendo repetir o tipo, sem importar a ordem. CR(n,p) = C(n+p−1, p).
- **Bolinhas e barras:** as p bolas são **bolinhas** e os n tipos são separados por n − 1 **barras**. Cada arrumação de bolinhas e barras é uma escolha: C(bolinhas + barras, barras).
  - Exemplo com 3 bolas e 5 sabores: `●●|●|||` = 2 do sabor 1 e 1 do sabor 2.
- Compare com as outras ferramentas: 5³ conta ordem (1ª bola, 2ª bola…), e C(5,3) não deixa repetir.

### Questão
Uma sorveteria oferece 5 sabores de sorvete. O copo médio leva exatamente 3 bolas, e o cliente pode repetir sabores (por exemplo, 2 de chocolate e 1 de morango). A ordem em que as bolas são colocadas no copo não faz diferença.

Quantos copos médios diferentes podem ser montados?
- a) 10
- b) 35
- c) 60
- d) 125
- e) 15

### Resolução em 3 minutos
1. 3 bolinhas e 4 barras (5 sabores): 7 símbolos.
2. Posição das barras: C(7,4) = C(7,3) = 35.

**Gabarito: B**

### Resolução comentada
Um copo é definido por **quantas bolas de cada sabor** ele tem: x₁ + x₂ + x₃ + x₄ + x₅ = 3, com cada xᵢ ≥ 0. Represente as 3 bolas como ●●● e use 4 barras para separar os 5 sabores. Cada fila com 3 ● e 4 | é um copo diferente. Escolher onde ficam as 4 barras entre 7 posições: C(7,4) = 35.

Conferência por casos: 3 sabores diferentes: C(5,3) = 10; um sabor repetido 2 vezes e outro diferente: 5 · 4 = 20; um sabor só: 5. Total 10 + 20 + 5 = 35.

### Armadilha
- C(5,3) = 10 (alternativa a): proíbe repetir sabores.
- 5³ = 125 (alternativa d): conta a ordem das bolas (chocolate em cima ≠ chocolate embaixo).
- A(5,3) = 60 (alternativa c): ordem e sem repetição, as duas coisas erradas.

---

## Questão 28 (Padrão P14: bolinhas e barras com mínimo obrigatório)

### Macetes antes de fazer essa questão
- "**Pelo menos k de cada tipo**": **distribua o mínimo antes**, depois conte só o que sobrou com bolinhas e barras.
- Com n objetos iguais em t tipos e pelo menos 1 de cada: C(n−1, t−1) (Q43 da lista original: C(9,3)).
- Com pelo menos 2 de cada: tire 2 · t objetos e distribua o resto livremente (xᵢ ≥ 0): C(resto + t − 1, t − 1).

### Questão
Uma fábrica de chocolates vende caixas com 12 bombons. Há 4 sabores disponíveis, e toda caixa deve ter pelo menos 2 bombons de cada sabor. Bombons do mesmo sabor são idênticos, e a posição dos bombons na caixa não diferencia uma caixa da outra.

O número de caixas diferentes que a fábrica pode montar é dado por
- a) C(11,3)
- b) C(7,3)
- c) C(12,4)
- d) 4⁴
- e) C(8,4)

### Resolução em 3 minutos
1. Garanta 2 de cada sabor: 4 · 2 = 8 bombons. Sobram 4.
2. Distribuir 4 bombons livres em 4 sabores: 4 bolinhas e 3 barras.
3. C(7,3) = 35.

**Gabarito: B**

### Resolução comentada
Uma caixa é definida por x₁ + x₂ + x₃ + x₄ = 12, com cada xᵢ ≥ 2. Coloque logo 2 bombons de cada sabor (8 no total). Faltam 4 bombons, que podem ir para qualquer sabor, inclusive todos para o mesmo: y₁ + y₂ + y₃ + y₄ = 4, com yᵢ ≥ 0. Pelas bolinhas e barras: 4 bolinhas e 3 barras, C(7,3) = 35.

### Armadilha
- Usar a fórmula de "pelo menos 1": C(11,3) (alternativa a). O mínimo aqui é 2.
- Escolher bombons como se fossem distintos: C(12,4) (alternativa c).
- 4⁴ (alternativa d) trata os 4 bombons extras como distintos e ordenados.

---

## Questão 29 (Padrão P15: comparar apostas pelo número de casos cobertos)

### Macetes antes de fazer essa questão
- Numa loteria em que se sorteiam p números, uma cartela com k números marcados (k ≥ p) **contém C(k,p) resultados** possíveis. Ela vale como C(k,p) apostas simples.
- Para comparar chances com o mesmo dinheiro, compare **quantos resultados cada opção cobre**. O total de resultados possíveis é o mesmo para todos e se cancela.
- Cartelas simples diferentes cobrem resultados diferentes: n cartelas cobrem n resultados.

### Questão
Em uma loteria, são sorteados 5 números entre 1 e 30. O apostador ganha se os 5 números sorteados estiverem todos marcados em uma mesma cartela. A cartela simples tem 5 números marcados e custa R$ 3,00. A cartela especial tem 7 números marcados e custa R$ 60,00.

Um apostador tem R$ 60,00 e pensa em duas opções: comprar 20 cartelas simples diferentes ou comprar 1 cartela especial. A opção com maior probabilidade de ganhar é
- a) a das cartelas simples, porque cobre 20 resultados, contra 1 da especial.
- b) a das cartelas simples, porque cobre 20 resultados, contra 7 da especial.
- c) a da cartela especial, porque cobre 21 resultados, contra 20 das simples.
- d) a da cartela especial, porque cobre 35 resultados, contra 20 das simples.
- e) qualquer uma, porque as duas cobrem a mesma quantidade de resultados.

### Resolução em 3 minutos
1. 20 cartelas simples: 20 resultados.
2. Cartela especial: C(7,5) = C(7,2) = 21 resultados.
3. 21 > 20: a especial é melhor.

**Gabarito: C**

### Resolução comentada
A probabilidade de cada opção é (resultados cobertos) ÷ C(30,5). Como o denominador é igual, basta comparar os numeradores. As 20 cartelas simples cobrem 20 quinas diferentes. A cartela de 7 números cobre todas as quinas formadas com esses 7 números: C(7,5) = 7 · 6 ÷ 2 = 21. A especial ganha por pouco. É a lógica da Q20 da lista original (cartela de k números = C(k,6) senas) e da Q48.

### Armadilha
- Achar que uma cartela vale um resultado só (alternativa a).
- Contar 7 resultados, um por número marcado (alternativa b).
- Calcular C(7,3) = 35 (alternativa d), confundindo o p. São sorteados **5** números, então é C(7,5) = C(7,2) = 21.

---

## Questão 30 (Padrão P15: probabilidade com resultados de duas possibilidades)

### Macetes antes de fazer essa questão
- n eventos com 2 resultados igualmente prováveis (menino/menina, cara/coroa): **2ⁿ sequências** possíveis, todas com a mesma chance.
- "Exatamente k de um tipo": escolha **quais posições** são desse tipo: C(n,k).
- P = C(n,k) ÷ 2ⁿ (Q38 da lista original: C(4,2) ÷ 16 = 3/8).

### Questão
Um casal planeja ter 5 filhos. Considere que, em cada nascimento, as chances de nascer menino ou menina são iguais e independentes dos outros nascimentos.

A probabilidade de o casal ter exatamente 3 meninas é
- a) 1/32
- b) 3/32
- c) 5/16
- d) 1/2
- e) 3/5

### Resolução em 3 minutos
1. Sequências possíveis: 2⁵ = 32.
2. Escolher quais 3 dos 5 nascimentos são meninas: C(5,3) = 10.
3. P = 10/32 = 5/16.

**Gabarito: C**

### Resolução comentada
Cada filho tem 2 resultados possíveis, então há 2⁵ = 32 sequências igualmente prováveis (MMFFF, FMFMF…). As sequências com exatamente 3 meninas são aquelas em que escolhemos 3 das 5 posições para as meninas: C(5,3) = 10. Probabilidade: 10 ÷ 32 = 5/16 ≈ 31%.

### Armadilha
- Contar só uma ordem (FFFMM) e marcar 1/32 (alternativa a). A ordem de nascimento importa para formar sequências diferentes.
- Usar "3 de 5" = 3/5 (alternativa e). Proporção de meninas não é probabilidade.

---

## Questão 31 (Padrão P16: tabela de notas, contar configurações que garantem a vitória)

### Macetes antes de fazer essa questão
- Leia a tabela e responda: **quem ameaça** o candidato pedido? Muitas vezes só um concorrente importa.
- Veja a **regra de empate**. Ela decide se a desigualdade é ≥ ou >.
- Traduza para uma desigualdade entre as notas que faltam (por exemplo, y − x ≥ 2) e **liste os pares** que funcionam.
- Notas que **não afetam** o resultado são livres: multiplique pelas opções delas (Q24 da lista original: 6 pares · 5³).

### Questão
Num festival de bandas, três bandas (X, Y e Z) disputam o título. A campeã é a banda com a maior soma de notas. Em caso de empate entre bandas no primeiro lugar, a banda Y vence, por ter tido mais votos do público. Antes da divulgação das notas do jurado C, as somas parciais eram:

| Banda | Soma parcial |
|---|---|
| X | 30 |
| Y | 28 |
| Z | 25 |

O jurado C dará a cada banda uma nota inteira entre 7 e 10 (7, 8, 9 ou 10).

Quantas configurações distintas das notas do jurado C (para X, Y e Z) dão o título à banda Y?
- a) 3
- b) 4
- c) 12
- d) 16
- e) 64

### Resolução em 3 minutos
1. Contra X: 28 + y ≥ 30 + x → y − x ≥ 2. Pares: (x, y) = (7, 9), (7, 10), (8, 10) → 3.
2. Contra Z: nos 3 pares, y ≥ 9, então Y tem pelo menos 37; Z chega no máximo a 35. Z não ameaça: nota livre, 4 opções.
3. Total: 3 · 4 = 12.

**Gabarito: C**

### Resolução comentada
Chame de x, y e z as notas do jurado C para X, Y e Z.
- **Y contra X:** Y vence se 28 + y > 30 + x, e também vence o empate. Então basta 28 + y ≥ 30 + x, ou seja, y − x ≥ 2. Com notas de 7 a 10, os pares são x = 7 com y = 9 ou 10, e x = 8 com y = 10. São 3 pares.
- **Y contra Z:** em todos esses pares, y ≥ 9, então Y termina com pelo menos 37. Z termina com no máximo 25 + 10 = 35. A nota z pode ser qualquer uma das 4.

Total de configurações: 3 · 4 = 12. Mesma estrutura da Q24 da lista original.

### Armadilha
- Esquecer que z é livre e marcar 3 (alternativa a).
- Ignorar a regra de empate e exigir y − x ≥ 3: só o par (7, 10), dando 4 configurações (alternativa b).
- 4³ = 64 (alternativa e) é o total de configurações, sem condição nenhuma.

---

## Questão 32 (Padrão P16: menor quantidade de peças para atingir uma medida)

### Macetes antes de fazer essa questão
- "Menor quantidade" pede **teste crescente**: tente com 2 peças; se não der, com 3, e assim por diante. A primeira quantidade que funciona é a resposta.
- Leia as condições com atenção. "Pelo menos dois tipos diferentes" proíbe usar um tipo só, mas **permite repetir** um dos tipos.
- Para acelerar: a soma das duas maiores peças diferentes dá o máximo possível com 2 peças.

### Questão
Um marceneiro vai montar uma prateleira de exatamente 120 cm de comprimento, encaixando módulos lado a lado. Ele dispõe de módulos de quatro larguras: 20 cm, 30 cm, 45 cm e 50 cm, com quantidade suficiente de cada um. Por questão estética, a prateleira deve usar pelo menos dois tipos de módulo com larguras diferentes, e ele quer usar a menor quantidade possível de módulos.

Quantos módulos ele deverá usar?
- a) 2
- b) 3
- c) 4
- d) 5
- e) 6

### Resolução em 3 minutos
1. Com 2 módulos de tipos diferentes, o máximo é 50 + 45 = 95 < 120. Não dá.
2. Com 3 módulos: 50 + 50 + 20 = 120 (dois tipos). Dá.
3. Resposta: 3.

**Gabarito: B**

### Resolução comentada
Com 2 módulos, eles precisam ser de tipos diferentes (pelo menos dois tipos). A maior soma possível é 50 + 45 = 95 cm, menor que 120. Não existe solução com 2.
Com 3 módulos, teste combinações: 50 + 50 + 20 = 120 funciona e usa dois tipos (50 e 20). Também funciona 45 + 45 + 30 = 120. Como 2 é impossível e 3 é possível, a menor quantidade é 3. É a Q50 da lista original (75 + 40 + 35 = 150).

### Armadilha
- Pensar que 60 + 60 resolveria com 2 peças. Não existe módulo de 60 cm. Leia a lista de larguras com cuidado.
- Achar que "pelo menos dois tipos" proíbe repetir um tipo e procurar só larguras distintas (20 + 45 + 50 = 115, 30 + 45 + 50 = 125…). Nenhuma soma de larguras todas diferentes dá 120, e você conclui, errado, que a prateleira é impossível ou precisa de mais módulos.

---

## Revisão intercalada (fazer depois de alguns dias)

Para treinar o reconhecimento de padrões sem a "dica" do título, refaça as 32 questões nesta ordem embaralhada, tapando o cabeçalho com o nome do padrão:

**1ª rodada:** 14, 3, 27, 20, 9, 31, 6, 22, 16, 25, 1, 18, 29, 11, 24, 8
**2ª rodada:** 19, 5, 30, 13, 2, 26, 21, 10, 32, 4, 17, 28, 7, 23, 12, 15

Antes de calcular, escreva só o número do padrão (P1 a P16). Se errar o padrão, volte à tabela do `00-mapa-de-padroes.md`.
