# Lista 2: 8 questões inéditas (padrões P5, P6, P7, P8)

> Notação usada: n! (fatorial), C(n,p) (combinação), A(n,p) (arranjo), · (vezes), ÷ (dividido).
> Tente resolver antes de ler a resolução. Cubra a parte de baixo com a mão.

---

## Questão 9 (Padrão P5: arranjo com restrição, "no máximo um por par")

### Macetes antes de fazer essa questão
- **Cargos diferentes** (presidente, vice…) fazem a ordem importar. Use PFC sem repetição: um fator por cargo, cada um com uma opção a menos.
- Restrição do tipo "no máximo uma pessoa por casal/dupla": quando alguém é escolhido, **o par dele também sai**. Cada escolha tira 2 pessoas da lista.
- Comece pela etapa com a restrição mais forte. Aqui todas pesam igual, então siga a ordem dos cargos.

### Questão
Um clube de atletismo tem 8 duplas de irmãos inscritas (16 atletas no total). O clube vai escolher um capitão, um vice-capitão e um porta-voz entre esses atletas. Para dar espaço a mais famílias, no máximo um atleta de cada dupla de irmãos pode ocupar um desses cargos.

Quantas escolhas diferentes são possíveis?
- a) 8 · 7 · 6
- b) 16 · 15 · 14
- c) 16 · 14 · 12
- d) 8 · 7 · 6 · 2
- e) 16 · 14 · 12 · 2

### Resolução em 3 minutos
1. Capitão: 16.
2. Vice: tira o capitão e o irmão dele: 14.
3. Porta-voz: tira mais duas pessoas: 12.
4. 16 · 14 · 12 = 2 688.

**Gabarito: C**

### Resolução comentada
Os cargos são diferentes, então trocar capitão e vice gera outra diretoria: a ordem importa. Para o capitão há 16 atletas. Escolhido o capitão, nem ele nem o irmão podem ser vice, sobram 14. Escolhido o vice, saem mais dois, sobram 12 para porta-voz. Total 16 · 14 · 12 = 2 688. É a Q3 da lista original (dez casais: 20 · 18 · 16).

Outra forma de ver: escolha as 3 duplas que terão cargo, em ordem (8 · 7 · 6), e em cada uma decida qual irmão entra (2 · 2 · 2). Total 8 · 7 · 6 · 8 = 2 688, o mesmo valor.

### Armadilha
- Ignorar a restrição: 16 · 15 · 14 (alternativa b).
- Na segunda forma de pensar, colocar só um fator 2 (alternativa d). São **três** cargos, então são três escolhas de irmão: 2³.
- Multiplicar por 2 no final "porque são irmãos" (alternativa e). A escolha do irmão já está dentro do 16 · 14 · 12.

---

## Questão 10 (Padrão P5: arranjo, pessoas em lugares livres)

### Macetes antes de fazer essa questão
- **Arranjo:** escolher p lugares de n e importar quem senta onde. A(n,p) = n! ÷ (n−p)! = n · (n−1) · … (p fatores).
- Pessoas distintas em lugares distintos: trocar duas pessoas de lugar gera outra arrumação, então a ordem importa.
- Primeiro passo de leitura: **conte os lugares disponíveis** com cuidado (na Q6 original eram 9 poltronas brancas).

### Questão
Quatro amigos compraram ingressos de última hora para uma peça de teatro. Quando foram escolher os assentos no site, só restavam 6 poltronas livres, espalhadas pela plateia. Cada amigo ocupará uma dessas poltronas.

O número de maneiras distintas de acomodar os quatro amigos é dado por
- a) 6! ÷ 2!
- b) 6! ÷ (4! · 2!)
- c) 4!
- d) 6!
- e) 6! ÷ 4!

### Resolução em 3 minutos
1. 1º amigo: 6 poltronas; 2º: 5; 3º: 4; 4º: 3.
2. 6 · 5 · 4 · 3 = 360 = 6! ÷ 2!.

**Gabarito: A**

### Resolução comentada
Cada amigo escolhe uma poltrona entre as que ainda estão livres. Pelo PFC: 6 · 5 · 4 · 3 = 360. Na forma fatorial, A(6,4) = 6! ÷ (6−4)! = 6! ÷ 2!. As 2 poltronas que ficam vazias são as que "sobram" no denominador. É a Q6 da lista original (7 pessoas em 9 poltronas: 9! ÷ 2!).

### Armadilha
- Usar combinação (alternativa b). Ela só escolheria **quais** poltronas seriam ocupadas, sem dizer quem senta em cada uma.
- Confundir o denominador: 6! ÷ 4! (alternativa e) = 30, que seria arranjo de 2 lugares, não de 4.

---

## Questão 11 (Padrão P6: produto de combinações, escolher em categorias diferentes)

### Macetes antes de fazer essa questão
- **Combinação:** escolher p de n quando a ordem não importa. C(n,p) = n! ÷ [p! · (n−p)!].
- Valores para ter na ponta da língua: C(n,1) = n; C(n,2) = n · (n−1) ÷ 2; C(n,p) = C(n, n−p).
- Escolhas em **categorias diferentes** que acontecem juntas: calcule uma combinação por categoria e **multiplique**.

### Questão
Uma nutricionista vai montar o cardápio de um restaurante universitário. Cada prato do dia terá 2 tipos de proteína, escolhidos entre 5 disponíveis, e 3 tipos de vegetais, escolhidos entre 7 disponíveis. A ordem em que os itens aparecem no prato não faz diferença.

Quantos pratos diferentes podem ser montados?
- a) 45
- b) 350
- c) 4 200
- d) 792
- e) 70

### Resolução em 3 minutos
1. Proteínas: C(5,2) = 10.
2. Vegetais: C(7,3) = 35.
3. 10 · 35 = 350.

**Gabarito: B**

### Resolução comentada
Escolher as proteínas é uma etapa (sem ordem): C(5,2) = 5 · 4 ÷ 2 = 10. Escolher os vegetais é outra etapa: C(7,3) = 7 · 6 · 5 ÷ 6 = 35. As duas acontecem juntas (proteínas **e** vegetais), então multiplica: 350. É a Q2 da lista original (C(4,3) · C(4,2) = 24) e a Q29 (tecidos e pedras).

### Armadilha
- Somar as combinações: 10 + 35 = 45 (alternativa a).
- Misturar as categorias e escolher 5 de 12 itens: C(12,5) = 792 (alternativa d). Isso permitiria pratos com 4 proteínas e 1 vegetal.
- Usar arranjo: A(5,2) · A(7,3) = 20 · 210 = 4 200 (alternativa c). Num prato, a ordem dos ingredientes não importa.

---

## Questão 12 (Padrão P6: combinação simples, identificar a expressão)

### Macetes antes de fazer essa questão
- Expressões de **combinação** têm **dois fatoriais no denominador**: n! ÷ [(n−p)! · p!].
- Expressões de **arranjo** têm **um fatorial no denominador**: n! ÷ (n−p)!.
- Pistas de "ordem não importa": "grupo", "conjunto", "trio", "não importando a ordem", "seção de destaques" (sem posição).

### Questão
Um serviço de streaming vai escolher 3 séries de um catálogo de 8 lançamentos para a seção "Destaques da semana". As três séries escolhidas aparecerão juntas, sem ranking, e a ordem de exibição na tela é sorteada a cada acesso, ou seja, não faz diferença na escolha.

A quantidade de seleções possíveis para a seção é dada por
- a) 8! ÷ 5!
- b) 8! ÷ (5! · 3!)
- c) 8! ÷ 3!
- d) 8³
- e) 3⁸

### Resolução em 3 minutos
1. Escolher 3 de 8 sem ordem: C(8,3).
2. C(8,3) = 8! ÷ (5! · 3!) = 56.

**Gabarito: B**

### Resolução comentada
Teste da troca: o trio {Série A, Série B, Série C} é a mesma seleção que {Série C, Série A, Série B}. Trocar a ordem não gera algo novo, então é combinação. C(8,3) = 8! ÷ [(8−3)! · 3!] = 8 · 7 · 6 ÷ 6 = 56. É a Q19 da lista original (trios de flores: 5! ÷ [(5−3)! · 3!]).

### Armadilha
- Escolher 8! ÷ 5! (alternativa a), que é o arranjo A(8,3) = 336. Ele conta cada trio 3! = 6 vezes.
- Usar potência (d ou e). Potência só aparece quando os elementos podem se repetir.

---

## Questão 13 (Padrão P7: escolher o grupo e depois ordenar dentro dele)

### Macetes antes de fazer essa questão
- Muitas questões têm **duas etapas de natureza diferente**:
  1. formar um grupo, sem ordem → **combinação**;
  2. dentro do grupo, dar papéis diferentes → **arranjo**.
- Faça o teste da troca **em cada etapa separadamente**.
- Como as etapas acontecem em sequência, multiplique.

### Questão
Uma empresa de tecnologia recebeu 12 candidatos para um programa de trainee. Primeiro, serão selecionados 5 candidatos para o treinamento, sem qualquer classificação entre eles. Depois, entre esses 5, serão escolhidos um líder de equipe e um vice-líder.

A quantidade total de escolhas possíveis pode ser calculada por
- a) A(12,5) · C(5,2)
- b) C(12,5) · C(5,2)
- c) A(12,7)
- d) C(12,5) · A(5,2)
- e) C(12,7)

### Resolução em 3 minutos
1. Grupo de 5 entre 12, sem classificação: C(12,5).
2. Líder e vice entre os 5 (cargos diferentes): A(5,2).
3. Total: C(12,5) · A(5,2) = 792 · 20 = 15 840.

**Gabarito: D**

### Resolução comentada
Etapa 1: trocar dois candidatos de lugar dentro do grupo selecionado não muda o grupo, então é combinação: C(12,5) = 792.
Etapa 2: trocar líder e vice gera outra escolha (Ana líder e Beto vice ≠ Beto líder e Ana vice), então é arranjo: A(5,2) = 5 · 4 = 20.
As etapas acontecem em sequência: 792 · 20 = 15 840. É a lógica da Q33 da lista original (grupo A = combinação; jogo de abertura com mandante e visitante = arranjo).

### Armadilha
- Inverter as naturezas (alternativa a): o grupo é que não tem ordem, e os cargos é que têm.
- Usar combinação nas duas etapas (alternativa b), esquecendo que líder ≠ vice.

---

## Questão 14 (Padrão P7: distribuir objetos entre pessoas diferentes, com restrição)

### Macetes antes de fazer essa questão
- Distribuir objetos distintos entre pessoas **diferentes** = escolher, pessoa por pessoa, o que cada uma recebe (combinações em sequência) e multiplicar.
- **Comece pela pessoa que tem restrição.** Depois que ela recebe, o resto é livre.
- "**A ou B, mas não ambos**" = 2 opções (fica com A ou fica com B), e o outro item **vai para o restante**.

### Questão
Uma avó tem 7 livros diferentes para dar aos três netos, entre eles um atlas e um dicionário. Ana receberá 3 livros, Bruno receberá 2 e Carla receberá 2. Ana está no ensino médio e deve receber o atlas ou o dicionário, mas não os dois.

De quantas maneiras distintas a avó pode distribuir os livros?
- a) 60
- b) 120
- c) 210
- d) 240
- e) 630

### Resolução em 3 minutos
1. Ana: atlas ou dicionário (2) e mais 2 dos 5 livros "comuns": C(5,2) = 10. Total 20.
2. Sobram 4 livros. Bruno: C(4,2) = 6.
3. Carla fica com os 2 últimos: 1.
4. 20 · 6 · 1 = 120.

**Gabarito: B**

### Resolução comentada
Ana tem a restrição, então começa por ela. Ela fica com exatamente um dos dois livros especiais (2 opções) e completa com 2 dos 5 livros que não são atlas nem dicionário: C(5,2) = 10. Ana tem 20 possibilidades. O livro especial que Ana não recebeu vai para o "monte" dos 4 restantes, que é livre. Bruno escolhe 2 desses 4: C(4,2) = 6. Carla recebe o que sobrou. Total: 20 · 6 = 120. É a Q10 da lista original (bicicleta ou celular, 300).

### Armadilha
- Ignorar a restrição: C(7,3) · C(4,2) = 35 · 6 = 210 (alternativa c).
- Escolher os 2 livros comuns de Ana entre 6 (incluindo o outro especial). Isso permitiria Ana ficar com os dois.
- Achar que o especial que sobrou "não pode" ir para os outros netos e eliminar casos. Ele vai normalmente para Bruno ou Carla.

---

## Questão 15 (Padrão P8: combinações sucessivas = permutação com repetição)

### Macetes antes de fazer essa questão
- Posições **numeradas/fixas** recebendo **cores repetidas**: escolha as posições da 1ª cor, depois as da 2ª entre as que sobraram, e assim por diante.
- C(9,4) · C(5,3) · C(2,2) = 9! ÷ (4! · 3! · 2!). É a mesma conta da permutação com repetição: a cadeira azul 1 e a cadeira azul 2 são iguais, então divide-se pelas trocas entre elas.
- O ENEM costuma cobrar a **forma** com combinações (Q4 da lista original).

### Questão
Uma fileira de 9 cadeiras numeradas de 1 a 9 será pintada para um auditório escolar: 4 cadeiras serão azuis, 3 brancas e 2 verdes. Cadeiras da mesma cor são indistinguíveis, e o que diferencia uma pintura da outra é a cor de cada posição.

A quantidade de pinturas diferentes da fileira, expressa por meio de combinações, é dada por
- a) C(9,4) · C(9,3) · C(9,2)
- b) C(9,4) + C(5,3) + C(2,2)
- c) 9!
- d) C(9,4) · C(5,3) · C(2,2)
- e) 4! · 3! · 2!

### Resolução em 3 minutos
1. Posições azuis: C(9,4) = 126.
2. Brancas entre as 5 que sobraram: C(5,3) = 10.
3. Verdes nas 2 últimas: C(2,2) = 1.
4. 126 · 10 · 1 = 1 260 = 9! ÷ (4! · 3! · 2!).

**Gabarito: D**

### Resolução comentada
O que define uma pintura é **onde** está cada cor. Escolha as 4 posições azuis entre 9: C(9,4). Essas posições já foram usadas, então as brancas são escolhidas entre as 5 restantes: C(5,3). As 2 verdes ficam no que sobrou: C(2,2) = 1. As escolhas são sucessivas, então multiplica: 1 260.

Conferência: 9! ÷ (4! · 3! · 2!) = 362 880 ÷ (24 · 6 · 2) = 1 260. É a Q4 da lista original (vagões: C(12,4) · C(8,3) · C(5,3) · C(2,2)).

### Armadilha
- Escolher cada cor entre as 9 posições (alternativa a). Isso deixaria duas cores ocuparem a mesma cadeira.
- Somar as combinações (alternativa b). As cores são pintadas juntas: é "e", então multiplica.
- 9! (alternativa c) trata as cadeiras de mesma cor como diferentes.

---

## Questão 16 (Padrão P8: escolher posições e depois o conteúdo)

### Macetes antes de fazer essa questão
- Quando a senha tem **tipos de caractere misturados em qualquer posição**, faça duas contas:
  1. **onde** fica cada tipo: permutação com repetição dos "rótulos" (por exemplo, AAALLL: 6! ÷ (3! · 3!) = 20);
  2. **o que** vai em cada casa: PFC com repetição (10 por algarismo, 26 por letra).
- Esquecer a etapa 1 é o erro mais comum (Q30 da lista original).

### Questão
Um sistema de reservas exige senhas de 6 caracteres formadas por exatamente 3 algarismos (0 a 9) e 3 letras minúsculas (26 letras do alfabeto). Algarismos e letras podem se repetir e podem aparecer em qualquer posição da senha.

O número total de senhas possíveis é dado por
- a) 10³ · 26³
- b) 10³ · 26³ · 6!
- c) 10³ · 26³ · 6! ÷ (3! · 3!)
- d) 10³ · 26³ · 6! ÷ 3!
- e) 36⁶

### Resolução em 3 minutos
1. Posições dos 3 algarismos entre as 6 casas: 6! ÷ (3! · 3!) = C(6,3) = 20.
2. Conteúdo: algarismos 10³ e letras 26³.
3. Total: 10³ · 26³ · 20.

**Gabarito: C**

### Resolução comentada
Primeiro decida o "molde" da senha: quais casas são de algarismo (A) e quais são de letra (L). É ordenar AAALLL, uma permutação com repetição: 6! ÷ (3! · 3!) = 20 moldes. Para cada molde, preencha as casas: cada A tem 10 opções e cada L tem 26, com repetição: 10³ · 26³. Total 10³ · 26³ · 20. É a Q30 da lista original (10² · 52² · 4! ÷ (2! · 2!)).

### Armadilha
- Esquecer as posições (alternativa a). Isso conta só senhas do tipo "AAALLL", com os algarismos sempre na frente.
- Multiplicar por 6! (alternativa b). Os 3 "rótulos A" são iguais entre si, assim como os 3 "rótulos L". Precisa dividir por 3! · 3!.
- 36⁶ (alternativa e) permite senhas com 6 letras ou 6 algarismos, que não atendem a regra.
