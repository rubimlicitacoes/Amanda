# Lista 2: 10 questões inéditas (padrões P2, P3, P5, P7, P15, P18, P20, P21, P23, P27)

> Constantes: água com c = 1 cal/(g·°C) = 4,2 kJ/(kg·°C), 1 L de água = 1 kg, 1 cal = 4,2 J (ou 4 J quando o enunciado disser), 1 W = 1 J/s.

---

## Questão 1 (Padrão P2: calor ≠ temperatura, patamares da curva de aquecimento)

### O que você precisa saber antes de fazer essa questão
**Intuição:** quando o gelo derrete, ele recebe calor sem esquentar. Toda a energia vai para "desmontar" a estrutura do sólido, não para agitar mais as partículas. Por isso aparece um **patamar** (trecho horizontal) no gráfico.

**Conceito:**
- **Calor sensível:** muda a **temperatura**, sem mudar o estado. Q = m·c·ΔT. No gráfico T × tempo (ou T × energia), é o trecho **inclinado**.
- **Calor latente:** muda o **estado**, com temperatura **constante** (substância pura, pressão constante). Q = m·L. No gráfico, é o **patamar**.
- Com fonte de **potência constante**, energia é proporcional ao tempo (Q = P·Δt). Então:
  - **Comprimento do patamar** ∝ calor latente. O patamar de vaporização da água é ~6,75 vezes mais longo que o de fusão (540/80).
  - **Inclinação do trecho** ∝ 1/c. Quanto mais inclinado, menor o calor específico daquela fase.
- **Substância pura** tem patamares bem definidos; mistura (ex.: água com sal) não tem temperatura constante na mudança de fase.

**Como o ENEM cobra:**
- Q62: diagrama da água; a correta é "temperatura constante durante as mudanças de fase".
- Q75: "que situação mostra a limitação da ideia de que calor = coisa quente?" Resposta: água fervendo continua recebendo calor e **não esquenta**.

**Pegadinhas:**
- "No patamar a substância não recebe calor": recebe sim, a fonte continua ligada.
- "A temperatura varia proporcionalmente à energia **durante a fusão**": é o contrário, no patamar ela não varia.
- "Para mudar de fase, a água **libera** 540 cal/g": vaporizar **absorve**.
- Comparar fusão e vaporização: para a **mesma massa**, vaporizar exige **mais** energia (540 > 80).

**Como memorizar:** "**Rampa esquenta, degrau transforma.**" (Rampa = sensível; degrau/patamar = latente.)

### Questão
Em uma aula de laboratório, um estudante aqueceu 100 g de uma substância pura, inicialmente sólida a 20 °C, utilizando uma fonte que fornece calor a uma taxa constante de 200 cal/min. Ele registrou a temperatura a cada 2 minutos:

| Tempo (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 |
|---|---|---|---|---|---|---|---|---|---|
| Temperatura (°C) | 20 | 50 | 80 | 80 | 80 | 80 | 80 | 100 | 120 |

A respeito desse experimento, conclui-se que
- a) entre 4 e 12 minutos a substância não recebeu calor, pois sua temperatura não variou.
- b) entre 4 e 12 minutos a substância recebeu 1 600 cal, utilizadas na mudança de fase, sem variação de temperatura.
- c) a substância é uma mistura, pois apresentou um intervalo de temperatura constante.
- d) a temperatura da substância variou proporcionalmente à energia recebida durante todo o experimento.
- e) após 12 minutos a substância passou a liberar energia, pois sua temperatura voltou a subir.

### Resolução passo a passo
1. **Leia o gráfico em forma de tabela:**
   - 0–4 min: 20 → 80 °C, a temperatura sobe (calor **sensível**, fase sólida).
   - 4–12 min: fica em **80 °C**, é o **patamar** (fusão).
   - 12–16 min: volta a subir (calor sensível, fase líquida).
2. **A fonte nunca desligou:** no patamar, a energia recebida foi Q = P·Δt = 200 cal/min × 8 min = **1 600 cal**. Ela foi usada para **derreter** a substância.
3. **Bônus (calor latente):** L = Q/m = 1 600/100 = **16 cal/g**.
4. Eliminando:
   - a) Recebeu calor sim, a fonte estava ligada.
   - c) Patamar bem definido indica substância **pura**.
   - d) No patamar a energia aumenta e a temperatura não.
   - e) A temperatura subiu porque continuou **recebendo** calor (agora como líquido).
5. **Observação (inclinação × calor específico):** nos dois trechos inclinados a fonte forneceu 200 × 4 = 800 cal.
   - Sólido: subiu 60 °C, então c = 800/(100 × 60) ≈ 0,13 cal/(g·°C).
   - Líquido: subiu só 40 °C, então c = 800/(100 × 40) = 0,20 cal/(g·°C).
   
   O trecho menos inclinado (líquido) é o de **maior** calor específico.

**Gabarito: B**

---

## Questão 2 (Padrão P3: equilíbrio térmico, lei zero)

### O que você precisa saber antes de fazer essa questão
**Intuição:** coloque algo frio dentro de algo quente e os dois "se encontram no meio". O quente esfria, o frio esquenta, até ficarem com a **mesma temperatura**.

**Conceito:**
- **Lei zero da termodinâmica:** corpos em contato trocam calor até atingirem a **mesma temperatura** (equilíbrio térmico). Se A está em equilíbrio com B e B com C, então A está em equilíbrio com C. É por isso que o **termômetro** funciona.
- **Termômetro (Q56):** precisa ficar em contato o tempo suficiente para **atingir o equilíbrio** com o corpo. Só então indica a temperatura do corpo.
- **Objeto frio em líquido quente (Q74):** o líquido **cede calor** e **sua temperatura cai**. Se cair abaixo de um valor crítico (ponto de ebulição, temperatura de fritura), o processo esperado para.
- O que se iguala é a **temperatura**, não a energia interna nem a "quantidade de calor".

**Pegadinhas (distratores típicos da Q56):**
- "O termômetro e o corpo tenham a **mesma energia interna**": errado, energia interna depende da massa.
- "A **temperatura** passe do corpo para o termômetro": temperatura não passa; quem passa é calor.
- "A quantidade de calor dos corpos seja a mesma": corpos não "têm calor".
- Q74: a culpa não é de "barreira do empanamento" nem de "evaporação do óleo"; é a **queda da temperatura do óleo** causada pela troca de calor com o frango congelado.

**Como memorizar:** "**Equilíbrio = mesma temperatura, não mesma energia.**"

### Questão
Ao preparar macarrão, uma pessoa aguarda a água ferver vigorosamente na panela e então despeja de uma só vez 500 g de massa seca, que estava na despensa. Ela percebe que a fervura cessa imediatamente e só volta após alguns minutos, mesmo com o fogo mantido na mesma intensidade.

A interrupção da fervura ocorre porque
- a) a massa libera frio para a água, que deixa de borbulhar.
- b) o amido dissolvido aumenta a pressão sobre a superfície da água, impedindo a ebulição.
- c) a água cede calor à massa até ambas tenderem à mesma temperatura, e a temperatura da água cai abaixo de 100 °C.
- d) a massa absorve a temperatura da água, igualando suas energias internas.
- e) a chama passa a fornecer calor apenas para a massa, e não mais para a água.

### Resolução passo a passo
1. **Antes:** água a 100 °C (fervendo). Massa a ~25 °C (ambiente).
2. **Contato:** o calor flui da água (quente) para a massa (fria), rumo ao **equilíbrio térmico**.
3. A água **perde calor** e sua temperatura cai **abaixo de 100 °C**, então deixa de ferver.
4. O fogo continua fornecendo calor e, depois de alguns minutos, o conjunto (água + massa) volta a 100 °C e a fervura retorna.
5. É exatamente a lógica da Q74 (frango congelado no óleo a 170 °C): o alimento frio **derruba a temperatura do líquido**.
6. Eliminando:
   - a) "Frio" não é energia.
   - b) O amido não muda a pressão atmosférica sobre a panela.
   - d) Temperatura não é absorvida, e no equilíbrio o que se iguala é a temperatura, não a energia interna.
   - e) A chama aquece o fundo da panela, que aquece tudo o que está dentro.

**Gabarito: C**

---

## Questão 3 (Padrão P5: convecção e posicionamento de equipamentos)

### O que você precisa saber antes de fazer essa questão
**Intuição:** balão de ar quente sobe; ar gelado de uma geladeira aberta "escorre" pelo chão. Fluido quente sobe, fluido frio desce.

**Conceito:**
- Aquecido, o fluido **dilata**, sua **densidade diminui** e ele **sobe** (empuxo). Resfriado, **contrai**, fica **mais denso** e **desce**.
- Esse movimento cíclico forma as **correntes de convecção**, que espalham o calor pelo ambiente.
- **Regras de posicionamento:**

| Equipamento | Onde fica | Por quê |
|---|---|---|
| Ar-condicionado (resfriar) | **No alto** | Ar frio desce e empurra o quente para cima (Q80) |
| Aquecedor de ambiente | **Embaixo** | Ar quente sobe e circula |
| Congelador da geladeira antiga | **Em cima** | Ar frio desce pelas prateleiras |
| Reservatório de água quente | Entrada fria **embaixo**, saída quente **em cima** | Água quente acumula no topo (Q86) |
| Freezer horizontal aberto | Abertura **em cima** | Ar frio, denso, fica no fundo e não "derrama" |

- **Sem gravidade não há convecção natural** (o empuxo depende do peso).

**Pegadinhas:**
- Q80: a resposta é "facilita a circulação das correntes de ar frio e quente", não "aumenta a condução" nem "diminui a umidade".
- Q86: saída quente **no topo** (posição 4) e entrada fria **no fundo** (posição 3). Se a entrada fria fosse em cima, ela misturaria com a quente e esfriaria a água de saída.

**Como memorizar:** "**Quente é leve e sobe; frio é pesado e desce.**" Resfriar: equipamento em cima. Aquecer: equipamento embaixo.

### Questão
Em supermercados, é comum encontrar freezers horizontais, do tipo "ilha", **sem tampa**, com a abertura voltada para cima, nos quais produtos congelados ficam expostos para o consumidor pegar. Mesmo abertos durante todo o expediente, esses equipamentos mantêm os produtos congelados com consumo de energia aceitável. O mesmo não ocorreria com um freezer vertical cuja porta permanecesse aberta.

O bom funcionamento do freezer horizontal aberto se deve ao fato de que
- a) o ar frio é mais denso e permanece acumulado no fundo, o que dificulta sua troca com o ar quente do ambiente.
- b) o ar frio é menos denso e forma uma camada sobre os produtos, isolando-os do ambiente.
- c) a radiação térmica do ambiente não atinge superfícies voltadas para cima.
- d) o frio produzido pelo equipamento é aprisionado pelas paredes laterais do freezer.
- e) as correntes de convecção são intensificadas, acelerando a entrada de calor no freezer.

### Resolução passo a passo
1. **Ar frio = mais denso**, então tende a ficar **embaixo**.
2. No freezer horizontal, a abertura está **em cima**. O ar frio fica "empoçado" no fundo, como água num balde, e o ar quente do ambiente, menos denso, fica por cima. **Não se formam correntes** de troca intensas.
3. No freezer **vertical** com porta aberta, o ar frio "escorre" pela abertura lateral, sai pelo chão e é substituído por ar quente que entra pela parte de cima. É uma corrente de convecção contínua, e o gasto de energia dispara.
4. Eliminando:
   - b) Ar frio é **mais** denso, não menos.
   - c) Radiação atinge superfícies em qualquer direção.
   - d) "Frio aprisionado" é linguagem errada; o que importa é a densidade do ar.
   - e) O efeito é o **oposto**: a convecção é dificultada.

**Gabarito: A**

---

## Questão 4 (Padrão P7: escolher material por tabela de condutividade)

### O que você precisa saber antes de fazer essa questão
**Intuição:** condutividade térmica (k) é a "largura da estrada" por onde o calor passa. k grande é uma avenida (o calor flui fácil); k pequeno é uma trilha estreita.

**Conceito:**
- **k alto** (metais: cobre, alumínio, ferro): conduz bem. Use quando quer **transferir calor rápido** (fundo de panela, coletor solar, dissipador).
- **k baixo** (vidro, cerâmica, madeira, plástico, isopor, ar): **isolante**. Use quando quer **manter a temperatura** ou **proteger a mão** (travessa que mantém comida quente, cabo de panela, garrafa térmica).
- Unidades possíveis: W/(m·K) ou kcal/(h·m·°C). Para comparar, basta ver **qual número é maior ou menor**; não precisa converter.
- **Ordem típica:** cobre > alumínio > ferro/aço > vidro > cerâmica > madeira > isopor ≈ ar.

**Como o ENEM cobra (Q13 = Q43):** tabela cobre, alumínio, ferro, vidro e cerâmica. "Manter o alimento aquecido por mais tempo" pede o **menor k**, ou seja, a cerâmica (V).

**Pegadinhas:**
- Pensar "material bom para cozinhar = bom para manter quente". São objetivos **opostos**.
- Escolher vidro porque "parece isolante": compare os números; cerâmica é menor.
- Na Q60, a panela "mais econômica" é a que **conduz mais** (maior k).

**Como memorizar:** "**Quer passar calor? k alto. Quer guardar calor? k baixo.**"

### Questão
Uma fabricante de utensílios de cozinha vai lançar uma frigideira profissional. O fundo deve distribuir e transferir calor para o alimento o mais rapidamente possível, e o cabo deve permitir que o cozinheiro a manuseie sem luvas, mesmo após longo tempo no fogo. O quadro apresenta a condutividade térmica (k) dos materiais disponíveis.

| Material | k (kcal·h⁻¹·m⁻¹·°C⁻¹) |
|---|---|
| Cobre | 332 |
| Alumínio | 175 |
| Aço inoxidável | 14 |
| Vidro temperado | 0,65 |
| Madeira | 0,10 |

O fundo e o cabo da frigideira devem ser feitos, respectivamente, de
- a) cobre e madeira.
- b) madeira e cobre.
- c) alumínio e aço inoxidável.
- d) vidro temperado e alumínio.
- e) aço inoxidável e vidro temperado.

### Resolução passo a passo
1. **Fundo:** precisa **transferir calor rapidamente**, então o **maior k**: cobre (332).
2. **Cabo:** precisa **dificultar** a chegada de calor à mão, então o **menor k**: madeira (0,10).
3. Liga com a Q77 (mãe pede para segurar pelo cabo de madeira, pois o metal tem maior condutividade).
4. Eliminando:
   - b) Inverteu os papéis.
   - c) O aço inox conduz 140 vezes mais que a madeira; queimaria a mão depois de muito tempo no fogo.
   - d) e e) O vidro no fundo transferiria calor muito devagar.

**Gabarito: A**

---

## Questão 5 (Padrão P15: Q = m·c·ΔT básico e energia interna)

### O que você precisa saber antes de fazer essa questão
**Intuição:** energia interna é o "saldo bancário" de energia das partículas. Se o corpo esfriou, gastou saldo, ou seja, perdeu energia na forma de calor.

**Conceito:**
- **Q = m·c·ΔT**, com ΔT = T_final − T_inicial.
  - Q > 0: o corpo **recebeu** calor (esquentou).
  - Q < 0: o corpo **cedeu** calor (esfriou). O módulo é o "calor perdido".
- **Energia interna (U):** soma das energias das partículas. Sem mudança de fase, **temperatura cai implica U diminui**.
- **Água:** c = 1 cal/(g·°C) e 1 L = 1 000 g. Logo, **1 L de água que varia 1 °C troca 1 000 cal (1 kcal)**.

**Como o ENEM cobra (Q7):** garrafa térmica de 1 L, água de 90 °C para 81 °C. Q = 1 000 × 1 × 9 = **9 000 cal**, e a energia interna **diminui** (alternativa C).

**Pegadinhas:**
- Esquecer de converter litros em gramas (resultado 1 000 vezes menor: 9 cal × 900 cal).
- Usar a temperatura final no lugar de ΔT (1 000 × 81 = 81 000 cal).
- Achar que a energia interna fica "constante" porque a garrafa é isolante.

**Como memorizar:** "**1 litro, 1 grau, 1 kcal.**"

### Questão
Para avaliar uma garrafa térmica, um laboratório enche o recipiente com 1,5 L de café a 85 °C e mede a temperatura após 6 horas, obtendo 70 °C. Considere que o café tem calor específico e densidade iguais aos da água: 1 cal/(g·°C) e 1 g/mL.

Nesse intervalo, a energia interna do café e a quantidade de calor que ele perdeu para o meio são, respectivamente,
- a) menor e de 22 500 cal.
- b) maior e de 22 500 cal.
- c) menor e de 2 250 cal.
- d) constante e de 22 500 cal.
- e) menor e de 105 000 cal.

### Resolução passo a passo
1. **Massa:** 1,5 L = 1 500 mL = **1 500 g**.
2. **ΔT** = 70 − 85 = **−15 °C** (esfriou).
3. **Q** = m·c·ΔT = 1 500 × 1 × (−15) = **−22 500 cal**. O sinal negativo indica calor **cedido**, então perdeu **22 500 cal**.
4. Temperatura caiu, sem mudança de fase: a **energia interna diminuiu**.
5. Atalho: 1,5 L × 15 °C = 22,5 kcal = 22 500 cal.
6. Distratores:
   - c) Usou 150 g (errou a conversão).
   - e) Usou 70 °C (temperatura final) no lugar de ΔT: 1 500 × 70 = 105 000.
   - b) e d) Erram o sentido da energia interna.

**Gabarito: A**

---

## Questão 6 (Padrão P18: rendimento)

### O que você precisa saber antes de fazer essa questão
**Intuição:** rendimento é a pergunta "de tudo o que eu paguei, quanto foi realmente usado?".

**Conceito:**
- **η = E_útil / E_fornecida** (vezes 100 para porcentagem).
- **E_fornecida** por um aparelho elétrico: P·Δt (W × s = J).
- **E_útil** em aquecimento: **soma** de m·c·ΔT de **tudo o que foi aquecido** e que o enunciado considera útil (água **e** recipiente, como na Q21).
- Se o enunciado dá calor em cal e potência em W, converta cal → J (× 4,2) **antes** de dividir.
- **Caminho inverso (Q8):** se você sabe a energia útil e o rendimento, a potência total é P_total = P_útil / η.

**Como o ENEM cobra:**
- Q8: refrigerador resfria 700 g em 15 °C em 7 min; essa refrigeração é 21% da potência, então a potência total é 500 W.
- Q21: micro-ondas aquece 500 g de água + 300 g de vidro de 6 °C para 40 °C em 2,5 min a 800 W; η ≈ 66,7%.

**Pegadinhas:** esquecer o recipiente; não converter minutos em segundos; não converter cal → J; dividir ao contrário (dá mais de 100%: impossível, então refaça).

**Como memorizar:** "**Útil em cima, pago embaixo.**" η sempre menor que 100%.

### Questão
Para avaliar um micro-ondas, um técnico aquece, em uma jarra de vidro de 500 g, 800 g de água inicialmente a 20 °C. Com o aparelho operando à potência de 1 200 W, a jarra e a água atingem juntas 100 °C, sem ebulição, em 5 minutos. Considere os calores específicos da água e do vidro, respectivamente, 1,0 cal/(g·°C) e 0,2 cal/(g·°C), e 1 cal = 4,2 J.

O percentual da energia consumida pelo micro-ondas que foi efetivamente convertido em aquecimento da jarra e da água é mais próximo de
- a) 20,0%.
- b) 64,0%.
- c) 74,7%.
- d) 84,0%.
- e) 93,3%.

### Resolução passo a passo
1. **ΔT** = 100 − 20 = 80 °C (igual para os dois, que atingem juntos a mesma temperatura).
2. **Calor útil:**
   - Água: 800 × 1,0 × 80 = 64 000 cal.
   - Vidro: 500 × 0,2 × 80 = 8 000 cal.
   - **Total = 72 000 cal**, e 72 000 × 4,2 = **302 400 J**.
3. **Energia fornecida:** P·Δt = 1 200 × (5 × 60) = 1 200 × 300 = **360 000 J**.
4. **η** = 302 400 / 360 000 = **0,84 = 84%**.
5. Distratores:
   - c) Esqueceu a jarra: 64 000 × 4,2 / 360 000 ≈ 74,7%.
   - a) Esqueceu de converter cal → J: 72 000 / 360 000 = 20%.

**Gabarito: D**

---

## Questão 7 (Padrão P20: calor latente quantitativo)

### O que você precisa saber antes de fazer essa questão
**Intuição:** suar refresca porque, para evaporar, o suor "rouba" energia da pele. Cada grama evaporada leva embora uma quantidade fixa de energia: o **calor latente**.

**Conceito:**
- **Q = m·L** (sem ΔT: temperatura constante na mudança de fase).
- Valores da água (memorize):
  - **L_fusão = 80 cal/g** (≈ 3,3 × 10⁵ J/kg).
  - **L_vaporização = 540 cal/g** (≈ 2,3 × 10⁶ J/kg).
- **Roteiro típico do ENEM:**
  1. Energia total = P·Δt (W × s).
  2. Aplicar a **fração** indicada (20%, 75%...).
  3. Converter J ↔ cal (o enunciado dá o fator: 4 J ou 4,2 J).
  4. m = Q/L.
- **Notação científica (Q36):** m = 1,6 × 10²² / 3,2 × 10⁵ = 0,5 × 10¹⁷ = 5 × 10¹⁶ kg = 5 × 10¹³ t = 50 trilhões de toneladas. Lembre: **1 t = 10³ kg**; trilhão = 10¹²; bilhão = 10⁹.

**Pegadinhas:**
- Esquecer a fração (usar 100% da potência).
- Esquecer de converter horas em segundos.
- Dividir J por cal/g sem converter (resultado 4 vezes maior).
- Q36: errar a conversão kg → toneladas → trilhões.

**Como memorizar:** "**Latente é 'escondido': energia sem termômetro.**" Q = m·L, com **80** para derreter e **540** para evaporar.

### Questão
Durante uma prova de ciclismo de 3 horas, em um dia em que a temperatura ambiente é próxima à da pele, um atleta precisa dissipar continuamente 600 W de calor para manter sua temperatura corporal estável. Nessas condições, 75% desse calor é eliminado pela evaporação do suor. Considere que o calor latente de vaporização do suor é igual ao da água (540 cal/g), que 1 cal = 4 J e que 1 g de água ocupa 1 mL.

O volume de líquido, em litro, que o ciclista deve ingerir ao longo da prova para repor a água perdida pela transpiração é mais próximo de
- a) 0,75.
- b) 2,25.
- c) 3,00.
- d) 9,00.
- e) 12,0.

### Resolução passo a passo
1. **Tempo:** 3 h = 3 × 3 600 = **10 800 s**.
2. **Energia dissipada no total:** 600 × 10 800 = 6,48 × 10⁶ J.
3. **Parte pela evaporação (75%):** 0,75 × 6,48 × 10⁶ = **4,86 × 10⁶ J**.
4. **Calor latente em J/g:** 540 cal/g × 4 J/cal = **2 160 J/g**.
5. **Massa evaporada:** m = Q/L = 4,86 × 10⁶ / 2 160 = **2 250 g**, ou seja, 2,25 L.
6. Distratores:
   - a) Usou só 1 h.
   - c) Ignorou os 75% (usou 100%).
   - d) Não converteu cal → J (4,86 × 10⁶ / 540).
   - e) Ignorou os 75% **e** não converteu.

**Gabarito: B**

---

## Questão 8 (Padrão P21: separar calor sensível de calor latente no processo)

### O que você precisa saber antes de fazer essa questão
**Intuição:** siga a substância do começo ao fim e pergunte, a cada etapa: "mudou a temperatura ou mudou o estado?".

**Conceito:**
- **Mudou a temperatura** (sem mudar o estado): **calor sensível**.
- **Mudou o estado** (com temperatura constante): **calor latente**, e você precisa nomear a transição:
  - vapor → líquido = **condensação** (libera energia);
  - líquido → vapor = **vaporização** (absorve energia).
- **Vapor superaquecido** (acima de 100 °C) que vira água a 100 °C passa por **duas** etapas:
  1. vapor esfria de T até 100 °C: **sensível**;
  2. vapor condensa a 100 °C: **latente de condensação**.
  
  Se a água condensada ainda esfriar abaixo de 100 °C, há uma **terceira** etapa: **sensível** do líquido.
- Para quem **recebe** essa energia, a fonte é aquilo que o **vapor perde**: sensível + latente de **condensação** (não de vaporização).

**Como o ENEM cobra (Q16):** tacho de doce de leite com vapor entrando a 120 °C e saindo como água líquida a 100 °C. Resposta: calor sensível **e** calor latente de **condensação** (D).

**Pegadinhas:**
- Escolher "somente latente": esquece o resfriamento do vapor (120 → 100 °C).
- Escolher "latente de **vaporização**": quem vaporiza é a água do doce; a energia **vem** do vapor que **condensa**.
- Ler o estado e a temperatura de **entrada e saída** com cuidado: elas dizem quantas etapas existem.

**Como memorizar:** "**Siga a gota:** a cada mudança de temperatura, calor sensível; a cada mudança de estado, calor latente (e dê nome a ela)."

### Questão
Em cafeterias, o leite é aquecido pelo bico vaporizador da máquina de espresso: vapor de água a 130 °C é injetado diretamente no leite frio. O vapor se transforma em água líquida que se mistura ao leite, e todo o conteúdo da jarra atinge cerca de 65 °C.

A energia transferida ao leite pelo vapor injetado provém
- a) somente do calor latente de vaporização da água.
- b) somente do calor sensível do vapor ao ser resfriado de 130 °C a 100 °C.
- c) do calor latente de vaporização e do calor sensível da água líquida.
- d) do calor sensível do vapor e do calor latente de condensação, apenas.
- e) do calor sensível do vapor, do calor latente de condensação e do calor sensível da água condensada.

### Resolução passo a passo
1. **Siga o vapor injetado:**
   - Etapa 1: **vapor** 130 °C → **vapor** 100 °C. Mudou a temperatura: **sensível** (do vapor).
   - Etapa 2: **vapor** 100 °C → **líquido** 100 °C. Mudou o estado: **latente de condensação** (libera energia).
   - Etapa 3: **líquido** 100 °C → **líquido** 65 °C (temperatura final da jarra). Mudou a temperatura: **sensível** (da água condensada).
2. Nas três etapas, o vapor/água **perde** energia, e quem recebe é o leite.
3. **Diferença em relação à Q16:** lá a água saía a 100 °C (só duas etapas). Aqui ela continua esfriando até 65 °C, então há uma terceira parcela.
4. Eliminando:
   - a) e c) Falam em **vaporização**, sentido errado.
   - b) e d) Esquecem parcelas.

**Gabarito: E**

---

## Questão 9 (Padrão P23: calorímetro com alimento ou combustível)

### O que você precisa saber antes de fazer essa questão
**Intuição:** para "medir" a energia de um alimento, queime-o embaixo de uma quantidade conhecida de água e veja quanto ela esquenta. A água funciona como uma "balança de energia".

**Conceito:**
- **Montagem:** massa de água conhecida + alimento queimado embaixo + **termômetro** (o instrumento essencial; Q66).
- **Energia que a água recebeu:** Q_água = m_água·c·ΔT.
- **Perdas:** se só uma fração foi aproveitada (Q46: 50%), então **Q_liberado = Q_água / fração**.
- **Calor de combustão (poder calorífico):** Q_liberado / massa queimada (cal/g ou kcal/g).
- **Valor energético em tabela (Q46):** "70 kcal por porção de 10 g" equivale a 7 kcal/g. Para 2,5 g: 17,5 kcal.
- **Referências:** carboidrato ≈ 4 kcal/g, proteína ≈ 4 kcal/g, gordura ≈ 9 kcal/g.
- **Atenção:** 1 kcal (a "Caloria" do rótulo) = 1 000 cal.

**Como o ENEM cobra:**
- Q46: a partir do rótulo, calcula a temperatura final.
- Q88: a partir do ΔT, identifica o alimento na tabela.
- Q66: qual instrumento é essencial (termômetro).

**Pegadinhas:** esquecer a fração aproveitada (divide-se a energia da água pela fração); confundir kcal com cal; somar a temperatura inicial no fim (Q46 pede temperatura **final**: 20 + 25 = 45 °C).

**Como memorizar:** "**A água é a balança: m·c·ΔT dá a energia; divida pelo aproveitamento; divida pela massa queimada.**"

### Questão
Em uma aula prática, uma professora entrega a um grupo 0,8 g de um alimento não identificado. Os estudantes colocam 150 mL de água a 20 °C em uma lata de alumínio, queimam completamente a amostra logo abaixo dela e verificam que a água atinge 36 °C. A professora informa que, nessa montagem, apenas metade da energia liberada na queima é transferida para a água. Considere o calor específico da água 1 cal/(g·°C) e sua densidade 1 g/mL.

| Alimento | Valor energético (kcal/g) |
|---|---|
| I. Feijão cozido | 0,8 |
| II. Pão francês | 3,0 |
| III. Açúcar refinado | 4,0 |
| IV. Castanha-de-caju | 6,0 |
| V. Manteiga | 7,5 |

O alimento recebido pelo grupo foi o
- a) I.
- b) II.
- c) III.
- d) IV.
- e) V.

### Resolução passo a passo
1. **Energia recebida pela água:** Q = 150 × 1 × (36 − 20) = 150 × 16 = **2 400 cal**.
2. **Só metade foi aproveitada**, então a energia liberada na queima foi 2 400 / 0,5 = **4 800 cal**.
3. **Por grama:** 4 800 / 0,8 = **6 000 cal/g = 6,0 kcal/g**, a castanha-de-caju (IV).
4. **Armadilha:** sem considerar a perda, 2 400 / 0,8 = 3 000 cal/g = 3,0 kcal/g, que leva ao pão francês (II).
5. Faz sentido: a castanha é rica em gordura (≈ 9 kcal/g), o que puxa o valor para cima.

**Gabarito: D**

---

## Questão 10 (Padrão P27: nome e sentido energético das transições de fase)

### O que você precisa saber antes de fazer essa questão
**Intuição:** para "soltar" as partículas (sólido → líquido → gás) é preciso **dar** energia. Quando elas se "prendem" de novo (gás → líquido → sólido), **devolvem** essa energia.

**Conceito:**

| Transição | Sentido | Energia |
|---|---|---|
| **Fusão** | sólido → líquido | **absorve** |
| **Vaporização** (evaporação/ebulição) | líquido → gás | **absorve** |
| **Sublimação** | sólido → gás | **absorve** |
| **Solidificação** | líquido → sólido | **libera** |
| **Condensação (liquefação)** | gás → líquido | **libera** |
| **Ressublimação (deposição)** | gás → sólido | **libera** |

- **Simetria:** a energia **absorvida** numa transição é igual (em módulo) à **liberada** na transição **inversa**, para a mesma massa. Ex.: vaporizar 1 g absorve 540 cal; condensar 1 g libera 540 cal.
- **Sublimação = fusão + vaporização** em energia: L_sub ≈ 80 + 540 = 620 cal/g (para o gelo).
- **Aplicação curiosa:** agricultores borrifam água nas plantações antes da geada; ao **solidificar**, a água **libera** calor e protege as folhas.

**Como o ENEM cobra (Q89):** diagrama vapor ⇄ líquido ⇄ gelo com setas numeradas. A energia **absorvida** na etapa 2 (vaporização) é igual à **liberada** na etapa 1 (condensação).

**Pegadinhas:** trocar "absorvida" por "liberada"; casar a transição com outra que **não** é a inversa (ex.: vaporização × solidificação); ler a seta no sentido errado (confira sempre de onde sai e para onde vai).

**Como memorizar:** "**Subindo a escada (sólido → gás) paga energia; descendo, recebe o troco igualzinho.**"

### Questão
Em noites frias e de céu limpo em regiões serranas, forma-se a geada: o vapor de água presente no ar passa diretamente para o estado sólido ao entrar em contato com superfícies muito frias, como folhas e gramados, formando finos cristais de gelo. No processo inverso, ao amanhecer, parte desses cristais passa diretamente para o estado gasoso, sem derreter.

Considerando uma mesma massa de água, a energia envolvida na formação da geada é
- a) absorvida e igual à energia absorvida na sublimação.
- b) liberada e igual, em módulo, à energia absorvida na sublimação.
- c) liberada e igual à energia liberada na solidificação da água líquida.
- d) absorvida e igual à energia absorvida na vaporização.
- e) liberada e menor que a energia liberada na condensação do vapor.

### Resolução passo a passo
1. **Formação da geada:** vapor → sólido, direto. É a **ressublimação (deposição)**. Vai de gás para sólido (descendo a escada), então **libera** energia.
2. **Processo inverso** (cristais → vapor) é a **sublimação**, que **absorve** energia.
3. **Simetria:** |energia liberada na ressublimação| = |energia absorvida na sublimação|.
4. Eliminando:
   - a) e d) Dizem "absorvida", sentido errado.
   - c) Solidificação libera só 80 cal/g; a ressublimação libera 80 + 540 = 620 cal/g.
   - e) A ressublimação libera **mais** que a condensação (620 > 540), não menos.

**Gabarito: B**

---

## Placar da Lista 2

| Questão | Padrão | Questões oficiais com a mesma lógica |
|---|---|---|
| 1 | P2: patamares da curva de aquecimento | 62, 75 |
| 2 | P3: equilíbrio térmico | 56, 74 |
| 3 | P5: convecção e posicionamento | 80, 86 |
| 4 | P7: escolher material por k | 13, 43 |
| 5 | P15: Q = mcΔT e energia interna | 7 |
| 6 | P18: rendimento | 8, 21 |
| 7 | P20: calor latente quantitativo | 6, 36 |
| 8 | P21: sensível × latente no processo | 16 |
| 9 | P23: calorímetro com alimento | 46, 66, 88 |
| 10 | P27: transições de fase | 89 |

**Padrões abordados nesta lista: 10.** Acumulado: **20 de 45**, cobrindo 51 das 92 questões oficiais (cerca de 55%).
**Padrões que ainda faltam: 25.**

Próxima lista (sugestão): P8, P9, P10, P12, P13, P17, P24, P26, P28, P29 (Fourier quantitativo, energia solar, mudanças de fase no dia a dia).
