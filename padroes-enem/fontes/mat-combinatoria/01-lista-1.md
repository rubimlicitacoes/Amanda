# Lista 1: 8 questões inéditas (padrões P1, P2, P3, P4)

> Notação usada: n! (fatorial), C(n,p) (combinação), A(n,p) (arranjo), · (vezes), ÷ (dividido).
> Tente resolver antes de ler a resolução. Cubra a parte de baixo com a mão.

---

## Questão 1 (Padrão P1: PFC com repetição, "ficará multiplicado por")

### Macetes antes de fazer essa questão
- **PFC (princípio fundamental da contagem):** quando uma escolha é feita em etapas independentes, multiplique o número de opções de cada etapa.
- Desenhe **uma casa (tracinho) para cada posição** e escreva embaixo quantas opções ela tem: `__ __ __` → 8 · N · 10.
- "Ficará multiplicado por" é uma **razão**: novo ÷ antigo. Tudo o que já existia se cancela e só sobram os **fatores novos**. Você não precisa saber o total antigo.
- Repetição permitida: cada casa tem sempre o total de opções.

### Questão
Um aplicativo de banco usa códigos de verificação de 6 caracteres. Para aumentar a segurança, a equipe decidiu acrescentar mais dois caracteres ao código: no início, um dos 8 símbolos especiais disponíveis (!, @, #, $, %, &, * ou ?); no final, um algarismo de 0 a 9.

Com essa mudança, o número de códigos possíveis ficará multiplicado por
- a) 18.
- b) 80.
- c) 90.
- d) 800.
- e) 8¹⁰.

### Resolução em 3 minutos
1. Antigo: N códigos.
2. Novo: `[símbolo] [6 caracteres antigos] [algarismo]` = 8 · N · 10 = 80 · N.
3. Novo ÷ antigo = 80.

**Gabarito: B**

### Resolução comentada
Chame de N a quantidade de códigos de 6 caracteres. O código novo é montado em três etapas independentes:
- escolher o símbolo inicial: 8 opções;
- escolher os 6 caracteres do meio: N opções (o mesmo de antes);
- escolher o algarismo final: 10 opções.

Pelo PFC, o total novo é 8 · N · 10 = 80N. A razão entre o total novo e o antigo é 80N ÷ N = 80. É a mesma lógica da Q1/Q18 da lista original (vogais maiúsculas e minúsculas, 10 · 10 = 100).

### Armadilha
- **Somar** 8 + 10 = 18 (alternativa a). As duas escolhas acontecem **juntas** (símbolo **e** algarismo), então multiplica.
- Achar que precisa saber quantos caracteres havia antes e travar. Na razão, o total antigo se cancela.

---

## Questão 2 (Padrão P1: PFC com repetição, base × expoente)

### Macetes antes de fazer essa questão
- Quando **várias casas têm o mesmo número de opções**, o produto vira potência: 3 · 3 · 3 · 3 · 3 = 3⁵.
- Regra de ouro: **base = opções por casa; expoente = número de casas.**
- Peças com quantidades de opções diferentes entram como fatores separados.

### Questão
O painel de controle de um equipamento de laboratório tem 5 interruptores idênticos, cada um com três posições (desligado, médio e máximo), e um seletor giratório com 4 posições. Cada configuração do painel corresponde a um modo de operação diferente.

A quantidade de modos de operação diferentes é dada por
- a) 3 · 5 · 4
- b) 5³ · 4
- c) 3⁵ · 4
- d) (3 · 5)⁴
- e) 3⁵ + 4

### Resolução em 3 minutos
1. 5 casas (interruptores), cada uma com 3 opções: 3⁵.
2. Seletor: 4 opções.
3. Tudo junto: 3⁵ · 4 = 243 · 4 = 972.

**Gabarito: C**

### Resolução comentada
Cada interruptor é uma etapa com 3 opções, e há 5 interruptores: 3 · 3 · 3 · 3 · 3 = 3⁵ = 243. O seletor é mais uma etapa, com 4 opções. Como interruptores **e** seletor são ajustados juntos, multiplica: 243 · 4 = 972. É a mesma estrutura da Q39 da lista original (4 chaves de 2 posições = 2⁴).

### Armadilha
- **Inverter base e expoente** (5³ · 4, alternativa b). Pergunte sempre: "quantas opções tem **cada** casa?" Isso é a base.
- Somar o seletor (alternativa e). Ele é escolhido **junto** com os interruptores.

---

## Questão 3 (Padrão P2: PFC invertido, achar o número mínimo de dígitos)

### Macetes antes de fazer essa questão
- Aqui o ENEM dá a **meta** e pede o **tamanho**: escreva o total em função de n e encontre o menor n que atinge a meta.
- Com d símbolos por casa e n casas, o total é dⁿ. Faça uma tabela rápida de potências.
- **Leia quais símbolos podem ser usados.** "De 1 a 9" são 9 algarismos, não 10.

| n | 9ⁿ | 10ⁿ |
|---|---|---|
| 3 | 729 | 1 000 |
| 4 | 6 561 | 10 000 |
| 5 | 59 049 | 100 000 |

### Questão
Uma escola com 7 000 alunos vai criar números de matrícula formados apenas pelos algarismos de 1 a 9, podendo repetir algarismos. Para evitar confusão com a letra O, o algarismo 0 não será usado. Todos os números de matrícula terão a mesma quantidade de dígitos, que deve ser a menor possível para que cada aluno receba um número diferente.

Quantos dígitos terá cada número de matrícula?
- a) 3
- b) 4
- c) 5
- d) 6
- e) 7

### Resolução em 3 minutos
1. Total com n dígitos: 9ⁿ.
2. 9⁴ = 6 561 < 7 000 (não basta).
3. 9⁵ = 59 049 ≥ 7 000 (basta). Resposta: 5 dígitos.

**Gabarito: C**

### Resolução comentada
Cada dígito tem 9 opções (1 a 9). Com n dígitos, o PFC dá 9ⁿ números. Queremos o menor n com 9ⁿ ≥ 7 000.
- 9³ = 729
- 9⁴ = 6 561, ainda menor que 7 000 (faltariam 439 números)
- 9⁵ = 59 049, suficiente

Logo, 5 dígitos. É a lógica da Q23 da lista original (2ⁿ ≥ 2 560 → n = 12).

### Armadilha
- Usar 10 algarismos: 10⁴ = 10 000 ≥ 7 000 daria **4 dígitos** (alternativa b). O enunciado tirou o zero de propósito.
- Parar em 9⁴ = 6 561 por "estar perto". Perto não basta: a meta precisa ser atingida.

---

## Questão 4 (Padrão P2: PFC invertido, quantidade mínima para superar uma meta)

### Macetes antes de fazer essa questão
- "Incluir ou não" um item = **2 opções** (entra ou não entra). Com k itens desse tipo: 2ᵏ.
- Monte o total como (parte fixa) · n e resolva a inequação.
- "**Mais de** 1 000" é estritamente maior (>). Se o resultado der exatamente 1 000, não serve.

### Questão
Uma lanchonete quer anunciar que oferece "mais de 1 000 sanduíches diferentes". Cada sanduíche é montado com exatamente um dos 4 tipos de pão, exatamente um dos 5 recheios e exatamente um molho. Além disso, o cliente pode incluir ou não queijo e pode incluir ou não bacon. Hoje a lanchonete ainda não definiu quantos tipos de molho vai oferecer.

Para que o anúncio seja verdadeiro, a quantidade mínima de tipos de molho é
- a) 12.
- b) 13.
- c) 25.
- d) 50.
- e) 63.

### Resolução em 3 minutos
1. Sem contar o molho: 4 · 5 · 2 · 2 = 80.
2. Com n molhos: 80n > 1 000 → n > 12,5.
3. Menor inteiro: n = 13 (80 · 13 = 1 040).

**Gabarito: B**

### Resolução comentada
Etapas: pão (4) · recheio (5) · queijo sim/não (2) · bacon sim/não (2) · molho (n). Total = 80n.

Queremos 80n > 1 000, ou seja, n > 12,5. Com n = 12 o total é 960, que não passa de 1 000. Com n = 13, o total é 1 040. É a lógica da Q52 da lista original (112 · n > 1 000 → n = 9).

### Armadilha
- Arredondar 12,5 para baixo (alternativa a). Com 12 molhos são só 960 sanduíches.
- Esquecer que "incluir ou não" vale 2 e usar 1 para queijo e bacon. Aí o total por molho cai para 20 e você marcaria 50 ou 63.

---

## Questão 5 (Padrão P3: princípio aditivo, "4, 5 ou 6 dígitos")

### Macetes antes de fazer essa questão
- **"E" multiplica, "OU" soma.** Se o resultado pode ser de um tipo **ou** de outro, e os tipos não se misturam, conte cada tipo e some.
- Senhas de tamanhos diferentes nunca são iguais entre si, então os casos são separados (não há dupla contagem).

### Questão
Um cofre digital aceita senhas de 4, 5 ou 6 dígitos, à escolha do usuário. Cada dígito pode ser qualquer algarismo de 0 a 9, e os algarismos podem se repetir.

Qual expressão representa o número total de senhas possíveis?
- a) 10¹⁵
- b) 10⁴ · 10⁵ · 10⁶
- c) 10⁴ + 10⁵ + 10⁶
- d) 10⁶
- e) 10⁶ − 10⁴

### Resolução em 3 minutos
1. 4 dígitos: 10⁴. 5 dígitos: 10⁵. 6 dígitos: 10⁶.
2. A senha tem 4 **ou** 5 **ou** 6 dígitos: soma.
3. 10⁴ + 10⁵ + 10⁶ = 1 110 000.

**Gabarito: C**

### Resolução comentada
Cada tamanho é um caso separado. Dentro de cada caso, o PFC com repetição dá 10ⁿ. Uma senha não pode ter 4 e 5 dígitos ao mesmo tempo, então os casos são disjuntos e o total é a soma. É exatamente a Q7 da lista original (4³ + 4⁴ + 4⁵).

### Armadilha
- **Multiplicar** os casos (alternativa b, que é igual à a). Multiplicar significaria escolher uma senha de cada tamanho ao mesmo tempo.
- Achar que só conta a maior (alternativa d).

---

## Questão 6 (Padrão P3: princípio aditivo, "pelo menos k de um grupo")

### Macetes antes de fazer essa questão
- "**Pelo menos 3**" de um grupo, numa equipe de 4: os casos são "exatamente 3" **ou** "exatamente 4". Conte cada um e some.
- Dentro de cada caso, escolha de cada grupo com combinação e **multiplique**: C(professores, k) · C(alunos, 4 − k).
- Comissão sem cargos: a ordem não importa, então é combinação.

### Questão
Um colégio vai formar uma comissão de 4 pessoas para organizar a feira de ciências. Os membros serão escolhidos entre 6 professores e 5 alunos voluntários. A direção exige que a comissão tenha pelo menos 3 professores.

O número de comissões diferentes que podem ser formadas é
- a) 100.
- b) 115.
- c) 160.
- d) 330.
- e) 15.

### Resolução em 3 minutos
1. 3 professores e 1 aluno: C(6,3) · C(5,1) = 20 · 5 = 100.
2. 4 professores e 0 aluno: C(6,4) = 15.
3. Total: 100 + 15 = 115.

**Gabarito: B**

### Resolução comentada
Separe pelo número exato de professores:
- **Exatamente 3 professores:** C(6,3) = 6! ÷ (3! · 3!) = 20 formas de escolher os professores e C(5,1) = 5 para o aluno. Total 100.
- **Exatamente 4 professores:** C(6,4) = 15, sem aluno.

Os casos não se misturam (uma comissão tem 3 ou 4 professores, nunca os dois). Soma: 115. É a lógica da Q46 da lista original.

### Armadilha
- **Garantir 3 professores e depois escolher "qualquer um" dos 8 restantes:** C(6,3) · C(8,1) = 160 (alternativa c). Isso conta a mesma comissão de 4 professores várias vezes: {P1, P2, P3, P4} aparece quando você escolhe P1, P2, P3 e depois P4, e também quando escolhe P1, P2, P4 e depois P3, e assim por diante.
- Esquecer o caso de 4 professores e marcar 100 (alternativa a).

---

## Questão 7 (Padrão P4: complementar, "pelo menos um")

### Macetes antes de fazer essa questão
- **Complementar:** casos bons = total − casos ruins.
- "Pelo menos um X" tem como contrário "**nenhum** X", que costuma ser muito mais fácil de contar.
- Use quando contar direto exige muitos casos (1 médico, 2 médicos, 3 médicos…).

### Questão
Uma ONG tem 9 voluntários disponíveis para uma missão de atendimento em uma comunidade ribeirinha; 3 deles são médicos. A equipe da missão terá 3 voluntários, sem cargos definidos, e deverá contar com pelo menos um médico.

De quantas maneiras a equipe pode ser formada?
- a) 20
- b) 63
- c) 64
- d) 84
- e) 504

### Resolução em 3 minutos
1. Total de equipes: C(9,3) = 84.
2. Equipes sem médico (só os 6 não médicos): C(6,3) = 20.
3. Com pelo menos um médico: 84 − 20 = 64.

**Gabarito: C**

### Resolução comentada
Sem restrição, escolhemos 3 de 9: C(9,3) = 9 · 8 · 7 ÷ 6 = 84. O contrário de "pelo menos um médico" é "nenhum médico": escolher os 3 entre os 6 não médicos, C(6,3) = 20. Subtraindo, 64.

Conferência pelo caminho direto: 1 médico: 3 · C(6,2) = 45; 2 médicos: C(3,2) · 6 = 18; 3 médicos: 1. Total 45 + 18 + 1 = 64. É a lógica da Q26 da lista original (C(10,2) − C(4,2)).

### Armadilha
- **"Fixar" um médico e escolher os outros 2 entre os 8 restantes:** 3 · C(8,2) = 84 (alternativa d). Equipes com 2 ou 3 médicos são contadas mais de uma vez.
- Marcar 20 (alternativa a), que é justamente o número de equipes **proibidas**.
- Usar arranjo: 9 · 8 · 7 = 504 (alternativa e). Equipe sem cargos não tem ordem.

---

## Questão 8 (Padrão P4: complementar, "pelo menos um repetido")

### Macetes antes de fazer essa questão
- "Pelo menos um algarismo repetido" inclui muitos formatos (um par, dois pares, trinca, quadra…). Contar direto é trabalhoso.
- O contrário é "**todos os algarismos distintos**", que é um arranjo simples: 10 · 9 · 8 · 7.
- Total com repetição livre: 10⁴.

### Questão
Um condomínio vai distribuir cartões de acesso com códigos de 4 algarismos, cada um de 0 a 9. Para facilitar a memorização, a administração decidiu usar apenas códigos que tenham pelo menos um algarismo repetido, como 1123 ou 7777.

Quantos códigos atendem a essa regra?
- a) 5 040
- b) 4 960
- c) 4 000
- d) 9 999
- e) 9 976

### Resolução em 3 minutos
1. Total: 10⁴ = 10 000.
2. Todos distintos: 10 · 9 · 8 · 7 = 5 040.
3. Pelo menos um repetido: 10 000 − 5 040 = 4 960.

**Gabarito: B**

### Resolução comentada
Sem regra, cada uma das 4 casas tem 10 opções: 10 000 códigos. Um código "não tem repetição" quando os 4 algarismos são diferentes: 10 opções para o primeiro, 9 para o segundo, 8 para o terceiro e 7 para o quarto, total 5 040. Todo código ou tem repetição ou não tem, então os que têm pelo menos uma repetição são 10 000 − 5 040 = 4 960. Lógica da Q27 (placas sem 0000) e da Q54 (Braille sem o vazio).

### Armadilha
- Marcar 5 040 (alternativa a), que é o número de códigos **sem** repetição.
- Tentar contar direto e esquecer formatos (como 1122 ou 7777).
- Subtrair só os códigos "todos iguais" (10 000 − 10 = 9 990) ou só o 0000 (9 999).
