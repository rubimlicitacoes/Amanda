# Lista 2: 5 questões inéditas (padrões P6, P7, P8, P9, P10)

---

## Questão 6 (Padrão P6: regra do produto em etapas)

### Macetes antes de fazer essa questão
- Sorteio em **etapas** ("primeiro sorteia a turma, depois o aluno") → **multiplica**: P(etapa 1) · P(etapa 2 | etapa 1).
- Sortear um grupo e depois uma pessoa dele **só** equivale a sortear direto entre todos quando os grupos têm o **mesmo tamanho**.
- Na lista original: Q4 (sala C e depois a aluna: 1/3 · 1/18 = 1/54) e Q53 (três modos de sorteio que dão o mesmo resultado porque as equipes têm o mesmo tamanho).

### Questão
Uma escola tem quatro turmas de 3º ano: A, com 30 alunos; B, com 25; C, com 20; e D, com 25. Um aluno será sorteado para representar a escola num congresso, e a direção discute dois modos de sorteio:
- **Modo I:** sortear diretamente um aluno entre todos os 100.
- **Modo II:** sortear primeiro uma das quatro turmas e, em seguida, um aluno da turma sorteada.

Mariana estuda na turma C. O modo que dá a Mariana a maior probabilidade de ser escolhida, e o valor dessa probabilidade, são
- a) Modo II, com probabilidade 1/80.
- b) Modo I, com probabilidade 1/100.
- c) Modo II, com probabilidade 1/20.
- d) os dois modos, com probabilidade 1/100.
- e) Modo I, com probabilidade 1/80.

### Resolução em 3 minutos
1. Modo I: 1/100.
2. Modo II: 1/4 · 1/20 = 1/80.
3. Como 1/80 > 1/100, o Modo II favorece Mariana.

**Gabarito: A**

### Resolução comentada
1. **Modo I:** um único sorteio entre 100 alunos igualmente prováveis: P = 1/100.
2. **Modo II, duas etapas:**
   - Etapa 1: a turma C precisa ser sorteada, P = 1/4.
   - Etapa 2: dentro da turma C, Mariana precisa ser sorteada, P = 1/20.
   - As etapas acontecem em sequência ("e"): P = 1/4 · 1/20 = **1/80**.
3. **Comparação:** 1/80 = 0,0125 e 1/100 = 0,01. O Modo II é melhor para Mariana.

**Por quê?** No Modo II, cada turma tem a mesma chance (1/4), mesmo sendo menor. Quem está numa turma pequena ganha vantagem, e quem está numa turma grande (como a A, com 1/4 · 1/30 = 1/120) perde.

### Armadilha
- Responder 1/20 (alternativa c) esquece a primeira etapa: a turma C ainda precisa ser sorteada.
- Achar que os modos são sempre equivalentes (alternativa d). Isso só vale com grupos do mesmo tamanho, como na Q53 original (20 equipes de 10 atletas).

---

## Questão 7 (Padrão P7: tentativas com eliminação)

### Macetes antes de fazer essa questão
- Primeiro conte quantas opções existem (n). Com letras ou algarismos repetidos, use anagrama com repetição: **n! ÷ (a! · b! · …)**.
- Uma tentativa errada é **eliminada**, então funciona como sorteio sem reposição.
- Acertar **exatamente na k-ésima** tentativa = errar as k − 1 anteriores e acertar a k-ésima:
  (n−1)/n · (n−2)/(n−1) · … · 1/(n−k+1), e o produto sempre simplifica para **1/n**.
- Acertar **em até k** tentativas = **k/n**.
- Na lista original: Q2 (Cifra de César, 25 opções, acertar na 3ª tentativa), Q30 (DETETIVE, 420 opções, 4 tentativas → 1/105) e Q28 (envelopes, 1/4! = 1/24).

### Questão
Lucas esqueceu a senha de 4 dígitos do celular. Ele lembra apenas que a senha usa os algarismos **1, 1, 7 e 9**, em alguma ordem. O aparelho bloqueia depois de três tentativas erradas, e Lucas não repete uma combinação já testada.

A probabilidade de Lucas desbloquear o celular **exatamente na terceira tentativa** é dada por
- a) 1/12 + 1/11 + 1/10
- b) 11/12 · 10/11 · 1/10
- c) 1/12 · 1/11 · 1/10
- d) 3/12
- e) 11/12 · 10/12 · 1/12

### Resolução em 3 minutos
1. Senhas possíveis: 4! ÷ 2! = 24 ÷ 2 = 12.
2. Errar a 1ª (11/12), errar a 2ª (10/11) e acertar a 3ª (1/10).
3. A expressão é 11/12 · 10/11 · 1/10 (que vale 1/12).

**Gabarito: B**

### Resolução comentada
1. **Espaço amostral:** permutações de 1, 1, 7, 9. São 4! = 24 ordens, mas trocar os dois "1" entre si não muda a senha, então dividimos por 2! = 2: **12 senhas distintas**.
2. **1ª tentativa errada:** 11 das 12 senhas estão erradas, P = 11/12.
3. **2ª tentativa errada:** a senha testada foi eliminada, restam 11, das quais 10 erradas: P = 10/11.
4. **3ª tentativa certa:** restam 10, uma delas correta: P = 1/10.
5. **Produto:** 11/12 · 10/11 · 1/10 = 1/12.

Faz sentido: a senha correta tem a mesma chance de estar em qualquer posição da ordem de tentativas, então cair exatamente na 3ª posição tem chance 1/12.

### Armadilha
- 3/12 (alternativa d) é a probabilidade de acertar **em até** três tentativas, não **exatamente** na terceira.
- A alternativa e mantém o denominador 12, como se as tentativas erradas pudessem se repetir (com reposição). Lucas não repete senhas.
- Usar 4! = 24 senhas, sem dividir pelos "1" repetidos.

---

## Questão 8 (Padrão P8: complementar, "pelo menos um")

### Macetes antes de fazer essa questão
- **P(pelo menos um) = 1 − P(nenhum).**
- Com eventos independentes, P(nenhum) = produto das probabilidades de **falha**.
- Fazer pelo complementar evita somar "exatamente 1" + "exatamente 2" + ….
- Na lista original: Q3 (pelo menos um dos dois vivo aos 80 anos: 1 − 0,8 · 0,7 = 44%), Q39 (soma de pelo menos R$ 55,00) e Q47 (rota com menor chance de engarrafamento).

### Questão
Dois irmãos prestam vestibular para universidades diferentes. Estima-se que a probabilidade de aprovação do mais velho seja de 30% e a do mais novo, de 40%. Considere que os resultados são independentes.

A probabilidade de **pelo menos um** dos irmãos ser aprovado é
- a) 12%.
- b) 42%.
- c) 58%.
- d) 46%.
- e) 70%.

### Resolução em 3 minutos
1. Nenhum aprovado: 0,7 · 0,6 = 0,42.
2. Pelo menos um: 1 − 0,42 = 0,58 = 58%.

**Gabarito: C**

### Resolução comentada
1. **Falhas:** o mais velho reprova com 1 − 0,3 = 0,7; o mais novo, com 1 − 0,4 = 0,6.
2. **Nenhum aprovado (independentes):** 0,7 · 0,6 = 0,42.
3. **Complementar:** 1 − 0,42 = **0,58**.
4. **Conferência pela soma direta:**
   - só o velho: 0,3 · 0,6 = 0,18
   - só o novo: 0,7 · 0,4 = 0,28
   - os dois: 0,3 · 0,4 = 0,12
   - total: 0,18 + 0,28 + 0,12 = 0,58 ✓

### Armadilha
Cada distrator corresponde a outro evento:
- a) 12%: os dois aprovados.
- b) 42%: nenhum aprovado.
- d) 46%: **exatamente** um aprovado.
- e) 70%: soma direta 30% + 40%, que conta duas vezes o caso "os dois". Com chances maiores, essa soma passaria de 100%.

---

## Questão 9 (Padrão P9: número mínimo de tentativas)

### Macetes antes de fazer essa questão
- Monte: **1 − (falha)ⁿ ≥ meta**, ou seja, **(falha)ⁿ ≤ 1 − meta**.
- Não precisa de logaritmo: teste n = 1, 2, 3… com potências pequenas.
- **Leia a pergunta duas vezes:** ela quer o **total** de tentativas ou só as **novas/adicionais**?
- Na lista original: Q8 (dardos: (1/2)ⁿ ≤ 1/10, n = 4), Q19 (duchas: n = 2) e Q22 (placas: 7 no total, mas a resposta era **6 novas**).

### Questão
Um teste rápido detecta a presença de um vírus em 70% das aplicações feitas em pessoas infectadas, e as aplicações são independentes entre si. O protocolo de um hospital **já prevê uma aplicação** do teste. A direção quer que, para um paciente infectado, a probabilidade de o vírus ser detectado em pelo menos uma aplicação seja de, no mínimo, 99%.

A quantidade mínima de aplicações **adicionais** que deve ser incluída no protocolo é
- a) 1.
- b) 2.
- c) 4.
- d) 3.
- e) 99.

### Resolução em 3 minutos
1. Condição: 0,3ⁿ ≤ 0,01.
2. 0,3³ = 0,027 (não serve); 0,3⁴ = 0,0081 (serve), então são 4 aplicações no total.
3. Já existe 1, logo faltam 3.

**Gabarito: D**

### Resolução comentada
1. **Falha por aplicação:** 1 − 0,7 = 0,3.
2. **Pelo menos uma detecção em n aplicações:** 1 − 0,3ⁿ ≥ 0,99, ou seja, 0,3ⁿ ≤ 0,01.
3. **Testando:**

   | n | 0,3ⁿ | ≤ 0,01? |
   |---|---|---|
   | 1 | 0,3 | não |
   | 2 | 0,09 | não |
   | 3 | 0,027 | não |
   | 4 | 0,0081 | **sim** |

4. **Total mínimo:** 4 aplicações. O protocolo já tem 1, então as **adicionais** são 4 − 1 = **3**.

### Armadilha
- Marcar 4 (alternativa c), o **total**, quando a pergunta pede as adicionais. É exatamente a pegadinha da Q22 original ("novas placas").
- Pensar "99% exige 99 aplicações" (alternativa e). A falha cai **exponencialmente**, então poucas tentativas bastam.

---

## Questão 10 (Padrão P10: descobrir o parâmetro da urna)

### Macetes antes de fazer essa questão
- Acrescentar x bolas **favoráveis** muda numerador e denominador: **P = (f + x) ÷ (t + x)**.
- Acrescentar x bolas **desfavoráveis** muda só o denominador: **P = f ÷ (t + x)**.
- "Superior a" é desigualdade estrita: se a conta der exata, a resposta é o próximo inteiro (Q43 original: x > 60, resposta 61).
- "Pelo menos" (≥) aceita o valor exato.
- Na lista original: Q62 (acrescentar 40 perguntas fáceis), Q43 (61 fichas brancas), Q34 (64 bolinhas brancas) e Q23 (30 crianças).

### Questão
Em uma quermesse, uma urna contém 12 bolas premiadas e 48 bolas não premiadas, todas do mesmo tamanho. Para atrair mais participantes, o organizador decide acrescentar somente bolas premiadas, de modo que a probabilidade de se retirar ao acaso uma bola premiada seja de **pelo menos 40%**.

A quantidade mínima de bolas premiadas que deve ser acrescentada é
- a) 12.
- b) 24.
- c) 36.
- d) 48.
- e) 20.

### Resolução em 3 minutos
1. (12 + x) ÷ (60 + x) ≥ 0,4.
2. 12 + x ≥ 24 + 0,4x → 0,6x ≥ 12 → x ≥ 20.
3. Prova: 32 ÷ 80 = 0,4 ✓.

**Gabarito: E**

### Resolução comentada
1. **Situação inicial:** 12 premiadas de 60 bolas, P = 12/60 = 20%.
2. **Com x premiadas acrescentadas:** premiadas = 12 + x; total = 60 + x (o total **também** cresce).
3. **Inequação:** (12 + x)/(60 + x) ≥ 2/5.
   Multiplicando em cruz (o denominador é positivo): 5(12 + x) ≥ 2(60 + x) → 60 + 5x ≥ 120 + 2x → 3x ≥ 60 → **x ≥ 20**.
4. **Conferência:**
   - x = 20: 32/80 = 0,40 ✓ (vale porque o pedido é "pelo menos")
   - x = 19: 31/79 ≈ 0,392 ✗

### Armadilha
- Calcular 40% de 60 = 24 premiadas e concluir que faltam 24 − 12 = 12 (alternativa a). Essa conta esquece que o total de bolas também aumenta.
- Responder 24 (alternativa b), confundindo o total de premiadas da conta errada com o acréscimo.
- Se o enunciado dissesse "**superior** a 40%", a resposta seria 21.
