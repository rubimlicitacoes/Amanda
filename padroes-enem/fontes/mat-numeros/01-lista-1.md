# Lista 1: 10 questões inéditas (padrões P1 a P10)

> Meta: no máximo **3 minutos por questão**. Leia primeiro os macetes, depois cronometre a questão.

---

## Questão 1 (Padrão P1: unidades em sequência)

### Macetes antes de fazer essa questão
- **Caminho lógico:** gotejadores × litros por hora × horas por dia × dias. É uma multiplicação só, numa linha.
- **O que ignorar:** a área da horta e a produção de hortaliças não entram em nenhuma conta.
- **Como eliminar:** a resposta está em m³, então 2 700 é a resposta em litros e é armadilha. Pela ordem de grandeza, 100 gotejadores × 1 L × 1 h × 30 dias ≈ 3 000 L ≈ 3 m³. Sobram 2,7 e 3,6. Como 45 min é menos que 1 h, fica o menor.
- **Conta mínima:** faça 1,2 × 3/4 = 0,9 primeiro. Depois 0,9 × 100 × 30 = 2 700 L.

### Questão
Uma horta comunitária ocupa 180 m² e produz cerca de 40 kg de hortaliças por semana. Ela é irrigada por gotejamento: são 4 canteiros, cada um com 25 gotejadores, e cada gotejador libera 1,2 litro de água por hora. O sistema fica ligado 45 minutos por dia, todos os dias.

Considerando um mês de 30 dias, o consumo mensal de água dessa irrigação, em metro cúbico, é
- a) 0,09
- b) 2,7
- c) 3,6
- d) 27
- e) 2 700

### Resolução em 3 minutos
1. 4 × 25 = 100 gotejadores. ⏱ 10 s
2. 1,2 L/h × 0,75 h = 0,9 L por gotejador por dia. ⏱ 20 s
3. 0,9 × 100 × 30 = 2 700 L. ⏱ 15 s
4. 2 700 L ÷ 1 000 = 2,7 m³. ⏱ 10 s

**Gabarito: B**

### Resolução comentada
São 100 gotejadores de 1,2 L/h, o que dá 120 L/h. Em 45 min (0,75 h) são 90 L por dia. Em 30 dias, 2 700 L. Como 1 m³ = 1 000 L, o consumo é 2,7 m³.

### Armadilha
Fazer 45 min = 0,45 h, ou usar 1 h direto (dá 3,6). Outra armadilha é parar no consumo **diário** em m³ (0,09). Antes de marcar, confira a unidade e o período (dia ou mês).

---

## Questão 2 (Padrão P2: razão parte/todo e comparação de taxas)

### Macetes antes de fazer essa questão
- **Caminho lógico:** a pergunta é sobre **taxa**, não sobre quantidade. O maior número absoluto quase sempre é armadilha.
- **O que ignorar:** a justificativa "maior número de cancelamentos" e o tamanho de cada unidade.
- **Como eliminar:** a alternativa precisa ter a unidade certa **e** o motivo certo. A alternativa E tem a unidade certa com o motivo errado, que é uma armadilha clássica do ENEM.
- **Conta mínima:** calcule 10% de cada total e veja quantas vezes os 10% cabem nos cancelamentos. Leste: 10% de 450 = 45, e 81 = 1,8 × 45, logo 18%. Não é preciso dividir.

### Questão
Uma rede de academias vai priorizar uma ação de retenção na unidade que tiver a **maior taxa de cancelamento**, definida como a razão entre cancelamentos e matrículas no semestre.

| Unidade | Matrículas | Cancelamentos |
|---|---|---|
| Centro | 1 200 | 180 |
| Norte | 800 | 136 |
| Sul | 2 500 | 300 |
| Leste | 450 | 81 |
| Oeste | 900 | 144 |

A unidade escolhida deve ser a
- a) Sul, pois registrou o maior número de cancelamentos.
- b) Norte, pois 17% de seus matriculados cancelaram, a maior taxa da rede.
- c) Leste, pois 18% de seus matriculados cancelaram.
- d) Centro, pois 15% de seus matriculados cancelaram, a maior taxa da rede.
- e) Leste, pois é a unidade com o menor número de matrículas.

### Resolução em 3 minutos
1. Descarte A e E porque o motivo é errado. ⏱ 15 s
2. Calcule 10% de cada total: 120, 80, 250, 45 e 90. ⏱ 20 s
3. Veja quantas vezes os 10% cabem nos cancelamentos: 1,5; 1,7; 1,2; 1,8; 1,6. A maior é Leste, com 18%. ⏱ 40 s

**Gabarito: C**

### Resolução comentada
As taxas são Centro 15%, Norte 17%, Sul 12%, Leste 18% e Oeste 16%. A maior é a de Leste, mesmo sendo a unidade com menos cancelamentos em número absoluto.

### Armadilha
Comparar os números absolutos (Sul, com 300) ou aceitar a unidade certa com o motivo errado (E). Leia a justificativa de cada alternativa.

---

## Questão 3 (Padrão P3: sistemas de numeração e códigos)

### Macetes antes de fazer essa questão
- **Caminho lógico:** é a base 8 disfarçada. Os pesos são 1, 8 e 64. Divida pelo **maior peso primeiro**.
- **O que ignorar:** a história do jogo. A regra "nunca 8 ou mais de uma cor" só serve para eliminar alternativas.
- **Como eliminar:** a alternativa E tem 37 azuis, o que quebra a regra. A alternativa A é a leitura de "300" em base 10, que é armadilha. Para as outras, **teste** 64a + 8b + c: é mais rápido do que fazer a conversão.
- **Conta mínima:** 64 × 4 = 256, e 300 − 256 = 44 = 5 × 8 + 4.

### Questão
Em um jogo de tabuleiro, as moedas são representadas por fichas coloridas. Cada ficha verde vale 1, cada ficha azul vale 8 verdes e cada ficha vermelha vale 8 azuis. A regra proíbe ter 8 ou mais fichas de uma mesma cor: nesse caso, 8 delas são trocadas por 1 ficha da cor de valor imediatamente superior.

Um jogador tem o equivalente a 300 fichas verdes e respeita a regra. As quantidades de fichas vermelhas, azuis e verdes dele são, respectivamente,
- a) 3, 0 e 0
- b) 4, 5 e 4
- c) 4, 4 e 5
- d) 5, 4 e 4
- e) 0, 37 e 4

### Resolução em 3 minutos
1. Elimine a alternativa E (37 ≥ 8) e a alternativa A (3 × 64 = 192). ⏱ 20 s
2. Teste a alternativa B: 4 · 64 + 5 · 8 + 4 = 256 + 40 + 4 = 300. ⏱ 20 s

**Gabarito: B**

### Resolução comentada
300 ÷ 64 = 4 vermelhas, com resto 44. 44 ÷ 8 = 5 azuis, com resto 4 verdes. O resultado é (4, 5, 4). Confira: 4 · 64 + 5 · 8 + 4 = 300.

### Armadilha
Ler o número como se estivesse em base 10 (alternativa A) ou trocar a ordem das posições (C e D). Na lista original é o mesmo erro do ábaco com etiquetas fora de ordem (Q29) e do relógio de luz (Q52).

---

## Questão 4 (Padrão P4: comparar o custo de opções)

### Macetes antes de fazer essa questão
- **Caminho lógico:** não calcule o total da frota. Calcule **por veículo**: o resultado da comparação é o mesmo.
- **O que ignorar:** os 20 veículos só servem para dividir a taxa única do plano Z.
- **Como eliminar:** use o método da diferença, comparando tudo com o Y. O X paga 150 a mais na entrada e economiza 15 × 12 = 180: sai 30 mais barato. O Z paga 90 a mais na entrada (1 800 ÷ 20) e economiza 10 × 12 = 120: também sai 30 mais barato. Então X e Z empatam e o Y perde.
- **Conta mínima:** só diferenças pequenas, sem chegar a 12 600.

### Questão
Uma transportadora vai contratar rastreamento para seus 20 veículos durante 12 meses. Ela tem três propostas:

- **Plano X:** instalação de R$ 150,00 por veículo e mensalidade de R$ 40,00 por veículo.
- **Plano Y:** sem instalação, com mensalidade de R$ 55,00 por veículo.
- **Plano Z:** taxa única de R$ 1 800,00 para a frota toda e mensalidade de R$ 45,00 por veículo.

Para ter o menor custo no período, a empresa deve contratar o plano
- a) X, em vez de Y ou Z.
- b) Y, em vez de X ou Z.
- c) Z, em vez de X ou Y.
- d) X ou Z, em vez de Y.
- e) Y ou Z, em vez de X.

### Resolução em 3 minutos
1. Passe o Z para "por veículo": 1 800 ÷ 20 = 90. ⏱ 10 s
2. X contra Y: +150 na entrada e −180 nas mensalidades, logo X fica 30 mais barato. ⏱ 25 s
3. Z contra Y: +90 na entrada e −120 nas mensalidades, logo Z fica 30 mais barato. X e Z empatam. ⏱ 25 s

**Gabarito: D**

### Resolução comentada
Por veículo, X custa 150 + 480 = 630, Y custa 660 e Z custa 90 + 540 = 630. Para a frota, X = Z = R$ 12 600,00 e Y = R$ 13 200,00.

### Armadilha
Somar a taxa única do Z inteira ao custo de **um** veículo, ou fazer os três totais da frota completos, o que gasta tempo sem necessidade. Quando houver empate, a resposta costuma ser "A ou C" (como na Q30 da lista original).

---

## Questão 5 (Padrão P5: maior/menor inteiro dentro de um limite)

### Macetes antes de fazer essa questão
- **Caminho lógico:** a escala dá a miniatura, a folga dá a caixa, e a caixa precisa caber nas **duas** dimensões da prateleira.
- **O que ignorar:** a marca e o modelo do ônibus. Bastam as medidas reais.
- **Como eliminar:** a profundidade de 8 cm não comporta 26 cm, então a caixa só entra deitada no comprimento. Isso derruba 17 e 24. O valor 5 vem de esquecer a folga (120 ÷ 24).
- **Conta mínima:** 1 200 ÷ 50 = 24 e 250 ÷ 50 = 5. Somando a folga, 26 e 7. Depois 26 × 4 = 104 < 120 < 130 = 26 × 5.

### Questão
Uma loja de colecionáveis vai expor miniaturas de um ônibus de turismo na escala 1:50. O ônibus real tem 12 m de comprimento e 2,5 m de largura. Cada miniatura fica numa caixa com folga de 1 cm em cada lado, no comprimento e na largura. Cada prateleira tem 1,20 m de comprimento e 8 cm de profundidade, e as caixas devem ficar inteiramente sobre ela, sem empilhar.

O número máximo de caixas por prateleira é
- a) 4
- b) 5
- c) 17
- d) 24
- e) 26

### Resolução em 3 minutos
1. Miniatura: 24 cm × 5 cm. Com a folga, a caixa fica com 26 cm × 7 cm. ⏱ 30 s
2. A profundidade de 8 cm só aceita a medida de 7 cm, então a caixa vai com os 26 cm no comprimento da prateleira. ⏱ 15 s
3. 120 ÷ 26 ≈ 4,6, logo cabem 4. ⏱ 15 s

**Gabarito: A**

### Resolução comentada
12 m = 1 200 cm, que na escala dá 24 cm. 2,5 m = 250 cm, que dá 5 cm. Com 1 cm de folga em cada lado, a caixa tem 26 × 7. Como a caixa não pode ficar com os 26 cm na profundidade de 8 cm, ela vai com os 26 cm no sentido do comprimento: 4 × 26 = 104 cm, e uma quinta caixa passaria de 120 cm.

### Armadilha
Somar a folga só uma vez (1 cm em vez de 2 cm por dimensão), esquecer de checar a outra dimensão, ou arredondar 4,6 para cima. "Caber" sempre arredonda para baixo.

---

## Questão 6 (Padrão P6: achar o total a partir de uma parte percentual)

### Macetes antes de fazer essa questão
- **Caminho lógico:** os 2 200 t que vão para o aterro são 55% do total. Daí 1 ponto percentual = 40 t.
- **O que ignorar:** você não precisa do total (4 000) para responder.
- **Como eliminar:** a reciclagem precisa **subir**, então 15% e 27,3% saem (são variações, não o novo percentual). 40% é a nova fração do aterro, não da reciclagem. 55% é a fração antiga do aterro.
- **Conta mínima:** o aterro cai 600 t, que são 600 ÷ 40 = 15 pontos percentuais. A reciclagem vai de 45% para 60%.

### Questão
Um município recicla 45% do lixo que coleta, o que significa que 2 200 toneladas por mês ainda vão para o aterro sem reciclagem. Uma meta municipal quer reduzir esse envio para 1 600 toneladas por mês, mantendo a mesma quantidade total de lixo coletado.

Se a meta for cumprida, o percentual de lixo reciclado passará a ser
- a) 15%
- b) 27,3%
- c) 40%
- d) 55%
- e) 60%

### Resolução em 3 minutos
1. Aterro = 100% − 45% = 55% = 2 200 t, logo 1 ponto percentual = 40 t. ⏱ 20 s
2. A redução é de 600 t, ou 15 pontos percentuais. ⏱ 15 s
3. Reciclagem: 45 + 15 = 60%. ⏱ 5 s

**Gabarito: E**

### Resolução comentada
Total = 2 200 ÷ 0,55 = 4 000 t. O novo aterro de 1 600 t é 1 600 ÷ 4 000 = 40% do total, então a reciclagem passa a 100% − 40% = 60%.

### Armadilha
Calcular 600 ÷ 2 200 ≈ 27,3% (a redução relativa do aterro) e marcar, ou somar esse valor aos 45%. A conta precisa ser em pontos percentuais **do total**.

---

## Questão 7 (Padrão P7: notação científica e prefixos)

### Macetes antes de fazer essa questão
- **Caminho lógico:** a pergunta é "pólen ÷ vírus". O pólen é maior, então a razão é **maior que 1**.
- **O que ignorar:** o texto sobre alergia.
- **Como eliminar:** os expoentes negativos (A e B) já saem, porque a razão é maior que 1. Pela ordem de grandeza, micro ÷ nano = 10³, e 30 ÷ 120 ≈ 1/4. O resultado fica em torno de 250.
- **Conta mínima:** 30 ÷ 120 = 0,25 e 10⁻⁶ ÷ 10⁻⁹ = 10³. Juntando, 0,25 × 10³ = 2,5 × 10².

### Questão
Um grão de pólen típico de gramíneas, que costuma causar alergias respiratórias na primavera, tem cerca de 30 micrômetros de diâmetro. Um vírus respiratório comum tem cerca de 120 nanômetros. Considere 1 micrômetro = 10⁻⁶ m e 1 nanômetro = 10⁻⁹ m.

A razão entre o diâmetro do grão de pólen e o do vírus é
- a) 4 × 10⁻³
- b) 2,5 × 10⁻¹
- c) 4 × 10²
- d) 2,5 × 10²
- e) 2,5 × 10³

### Resolução em 3 minutos
1. A razão é maior que 1, então A e B saem. ⏱ 10 s
2. Mantissas: 30 ÷ 120 = 0,25. ⏱ 10 s
3. Potências: 10⁻⁶ ÷ 10⁻⁹ = 10³. Resultado: 0,25 × 10³ = 2,5 × 10². ⏱ 15 s

**Gabarito: D**

### Resolução comentada
(30 × 10⁻⁶ m) ÷ (120 × 10⁻⁹ m) = 0,25 × 10³ = 250 = 2,5 × 10².

### Armadilha
Inverter a razão (a alternativa A é vírus ÷ pólen), fazer 120 ÷ 30 = 4 (alternativa C) ou errar o sinal na subtração dos expoentes: −6 − (−9) = +3.

---

## Questão 8 (Padrão P8: fração de fração)

### Macetes antes de fazer essa questão
- **Caminho lógico:** são três filtros em sequência. A palavra "demais" pede o **complemento** da última fração.
- **O que ignorar:** as 40 vagas e a duração do processo.
- **Como eliminar:** 1 200 é parar no segundo filtro. 450 é usar 3/8 em vez de 5/8. 900 e 1 875 vêm de pular um filtro.
- **Conta mínima:** escreva 3 600 × 5/6 × 2/5 × 5/8. O 5 de cima corta com o 5 de baixo, e sobra 3 600 × 2 × 5 ÷ 48 = 3 600 × 10 ÷ 48 = 750.

### Questão
Um processo seletivo para estagiários recebeu 3 600 inscrições, com 40 vagas anunciadas e duração de dois meses. Dos inscritos, 5/6 fizeram a prova online. Dos que fizeram a prova, 2/5 foram aprovados para a entrevista. Dos entrevistados, 3/8 foram eliminados, e os demais entraram no banco de talentos da empresa.

Quantas pessoas entraram no banco de talentos?
- a) 750
- b) 450
- c) 900
- d) 1 200
- e) 1 875

### Resolução em 3 minutos
1. "Eliminados 3/8" vira "ficaram 5/8". ⏱ 10 s
2. 3 600 × 5/6 = 3 000. ⏱ 10 s
3. 3 000 × 2/5 = 1 200. ⏱ 10 s
4. 1 200 × 5/8 = 750. ⏱ 15 s

**Gabarito: A**

### Resolução comentada
3 600 × 5/6 = 3 000 fizeram a prova. 3 000 × 2/5 = 1 200 foram para a entrevista. 1 200 × 5/8 = 750 entraram no banco de talentos.

### Armadilha
Aplicar a fração dos **eliminados** como se fosse a dos que ficam (450), ou aplicar cada fração sobre o total inicial em vez de sobre o grupo anterior.

---

## Questão 9 (Padrão P9: proporcionalidade direta, inversa e composta)

### Macetes antes de fazer essa questão
- **Caminho lógico:** não calcule o k. Multiplique as **razões novo/antigo**: dias (5/2), distância **ao quadrado** (4/3)² = 16/9 e ritmo **invertido** (6/5).
- **O que ignorar:** as calorias e o nível do usuário no aplicativo.
- **Como eliminar:** todas as grandezas melhoraram (mais dias, mais km, menos minutos por km), então a pontuação sobe muito. O fator passa de 3. Com fator ≈ 5, 30 × 5 ≈ 150, e só 160 fica perto.
- **Conta mínima:** (5 · 16 · 6) ÷ (2 · 9 · 5). Corte o 5 com o 5 e o 6 com o 18 (fica 1/3). Sobra 16/3, e 30 × 16/3 = 160.

### Questão
Um aplicativo de corrida dá aos usuários uma pontuação semanal P **diretamente proporcional** ao número de dias de treino e ao **quadrado** da distância média diária (em km), e **inversamente proporcional** ao ritmo médio (minutos por km). O aplicativo também mostra as calorias gastas e o nível do usuário, que não entram na pontuação.

Um usuário treinou 2 dias, correndo 3 km por dia num ritmo de 6 min/km, e fez 30 pontos. Outro treinou 5 dias, correndo 4 km por dia num ritmo de 5 min/km.

A pontuação do segundo usuário foi
- a) 40
- b) 96
- c) 111
- d) 120
- e) 160

### Resolução em 3 minutos
1. Razões: dias 5/2, distância (4/3)² = 16/9, ritmo 6/5 (invertido). ⏱ 30 s
2. Multiplique e corte: (5 · 16 · 6) ÷ (2 · 9 · 5) = 16/3. ⏱ 30 s
3. 30 × 16/3 = 160. ⏱ 10 s

**Gabarito: E**

### Resolução comentada
P = k · d · x² ÷ t. Com os dados do primeiro usuário: 30 = k · 2 · 9 ÷ 6, logo k = 10. Para o segundo: P = 10 · 5 · 16 ÷ 5 = 160.

### Armadilha
Esquecer o quadrado da distância (dá 120) ou não inverter o ritmo (dá ≈ 111). Antes de calcular, escreva o expoente e o sentido de cada grandeza.

---

## Questão 10 (Padrão P10: equação montada a partir do texto)

### Macetes antes de fazer essa questão
- **Caminho lógico:** a resposta pedida (D) é 3/4 de A, então **D precisa ser múltiplo de 3**. Teste as alternativas.
- **O que ignorar:** o nome das equipes e o tema da gincana.
- **Como eliminar:** 68 e 80 não são múltiplos de 3 (e são os valores de B e de A, as armadilhas). Sobram 45, 51 e 60. Comece pelo do meio.
- **Conta mínima:** testando D = 60: A = 80, B = 68, C = 136. Soma: 80 + 68 = 148; 148 + 136 + 60 = 344.

### Questão
Em uma gincana escolar, quatro equipes somaram, juntas, 344 pontos. A equipe Beta fez 12 pontos a menos que a Alfa. A Gama fez o dobro de pontos da Beta. A Delta fez 3/4 dos pontos da Alfa.

Quantos pontos fez a equipe Delta?
- a) 45
- b) 51
- c) 60
- d) 68
- e) 80

### Resolução em 3 minutos
1. Filtre pelos múltiplos de 3: sobram 45, 51 e 60. ⏱ 15 s
2. Teste D = 60: A = 80, B = 68, C = 136. ⏱ 25 s
3. 80 + 68 + 136 + 60 = 344. ⏱ 20 s

**Gabarito: C**

### Resolução comentada
A + (A − 12) + 2(A − 12) + 0,75A = 344, o que dá 4,75A − 36 = 344. Então 4,75A = 380, A = 80 e D = 0,75 · 80 = 60.

### Armadilha
Resolver a equação e marcar o valor de A (80) ou de B (68), que estão nas alternativas de propósito. Grife o que a pergunta pede antes de começar.

---

## Resumo da Lista 1

| Questão | Padrão | Gabarito |
|---|---|---|
| 1 | P1: unidades em sequência | B |
| 2 | P2: razão parte/todo | C |
| 3 | P3: sistemas de numeração | B |
| 4 | P4: comparar custo de opções | D |
| 5 | P5: inteiro dentro de um limite | A |
| 6 | P6: total a partir de parte percentual | E |
| 7 | P7: notação científica | D |
| 8 | P8: fração de fração | A |
| 9 | P9: proporcionalidade composta | E |
| 10 | P10: equação montada do texto | C |

- Padrões abordados nesta lista: **10**
- Padrões abordados no total: **10 de 25**
- **Restam: 15 padrões** (P11 a P25)
