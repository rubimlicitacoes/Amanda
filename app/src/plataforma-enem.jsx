import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  Home, Target, BarChart3, TrendingUp, ClipboardList, RefreshCw, AlertTriangle,
  Calendar, PieChart as PieIcon, Map as MapIcon, Award, Timer, Flame, Zap, Check, X, Plus, ChevronRight,
  ChevronLeft, Clock, BookOpen, PenTool, Brain, Trophy, Lock, Play, Pause, RotateCcw,
  Sparkles, ArrowUp, ArrowDown, Minus, Crosshair, Layers, Shield, Star, Info, Trash2,
  CheckCircle2, Circle, Hourglass, Gauge, Swords, Compass, Volume2, VolumeX,
  ListChecks, ArrowRightLeft, Scissors, Search, GraduationCap
} from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area, Legend
} from "recharts";

/* ============================================================================
   PLATAFORMA ENEM 2026 — "REINOS"
   Fonte de verdade: 01-PERFIL-E-METAS, 02-METODO-E-ESTRATEGIA,
   BASE-CONTEUDOS-ENEM-2025, 03-HISTORICO-SIMULADOS, macroplano jul–nov 2026.
   ========================================================================== */

/* ---------------------------------- TOKENS -------------------------------- */
const T = {
  paper: "#F6F7FB",
  paperDeep: "#EDEFF7",
  surface: "#FFFFFF",
  ink: "#141A2E",
  ink70: "#3E4763",
  ink50: "#6B7492",
  ink30: "#A3AAC2",
  line: "#E3E7F1",
  lineSoft: "#EFF2F8",
  primary: "#4C42D6",
  primarySoft: "#EDEBFC",
  primaryDeep: "#332BA6",
  gold: "#E9962A",
  goldSoft: "#FDF1DE",
  jade: "#0E9C74",
  jadeSoft: "#E1F5EF",
  amber: "#D08B04",
  amberSoft: "#FCF2DC",
  rose: "#DB3B57",
  roseSoft: "#FCE8EC",
  ice: "#3FA3D6",
};

const AREA = {
  CN: { nome: "Ciências da Natureza", meta: 41, cor: "#0E9C74", curto: "CN" },
  MAT: { nome: "Matemática", meta: 42, cor: "#4C42D6", curto: "MAT" },
  CH: { nome: "Ciências Humanas", meta: 40, cor: "#9B3F63", curto: "CH" },
  LC: { nome: "Linguagens", meta: 40, cor: "#E2643C", curto: "LC" },
};

/* Reinos: nomes vindos da BASE-CONTEUDOS-ENEM-2025 (cronograma LumberGeek) */
const REINOS = {
  BIO: { nome: "Biologia", reino: "A Floresta dos Lobisomens", cor: "#2F9E5E", soft: "#E4F4EA", area: "CN", total: 26 },
  QUI: { nome: "Química", reino: "A Geleira dos Fantasmas", cor: "#3FA3D6", soft: "#E3F2FA", area: "CN", total: 24 },
  FIS: { nome: "Física", reino: "A Ruína dos Zumbis", cor: "#7C5CD6", soft: "#EDE8FB", area: "CN", total: 20 },
  MAT: { nome: "Matemática", reino: "O Deserto das Múmias", cor: "#D69A2E", soft: "#FBF1DD", area: "MAT", total: 22 },
  GEO: { nome: "Geografia", reino: "O Pântano dos Mutantes", cor: "#6F9B3C", soft: "#EDF3E4", area: "CH", total: 26 },
  HIS: { nome: "História", reino: "A Caverna dos Vampiros", cor: "#9B3F63", soft: "#F6E7ED", area: "CH", total: 28 },
  LIN: { nome: "Linguagens", reino: "O Vulcão dos Demônios", cor: "#E2643C", soft: "#FCEAE4", area: "LC", total: 23 },
};

/* --------------------------- 169 BLOCOS DA BASE --------------------------- */
/* [n, nome, ranking, tópicos] */
const RAW = {
  BIO: [
    [1, "Ecologia Básica", 17, "Conceitos básicos · Níveis de organização · Biocenose e fatores abióticos · Habitat e nicho · Cadeia e teia alimentar · Bioacumulação e POPs"],
    [2, "Ecologia Avançada", 10, "Potencial biótico · Pirâmides ecológicas · Hábitos alimentares · Especiação alopátrica e simpátrica · Sucessão ecológica"],
    [3, "Evolução", 6, "Seleção natural e artificial · Convergência e divergência · Mutação · Coevolução, mimetismo e camuflagem · Lamarckismo · Relações inter e intraespecíficas"],
    [4, "Impacto Ambiental", 1, "Poluição das águas, DBO e eutrofização · Desmatamento · Corredores ecológicos · Biomas e adaptações · Unidades de conservação e hotspots · Hidrelétricas · Espécies invasoras"],
    [5, "Moléculas Orgânicas", 25, "Aminoácidos e proteínas · Carboidratos · Lipídios e colesterol · Bases nitrogenadas · Vitaminas · Calorias nos alimentos"],
    [6, "Transporte de Moléculas", 19, "Osmose e osmose reversa · Difusão · Membrana semipermeável · Meios hipo e hipertônico · Transporte ativo e passivo · Fagocitose e pinocitose · Bomba de sódio e potássio"],
    [7, "Citologia", 21, "Membrana celular · Célula animal · Célula vegetal · Organelas citoplasmáticas"],
    [8, "Energia Celular", 2, "Respiração celular · Glicólise, Krebs, cadeia respiratória · Fotossíntese · Fase clara e escura, ponto de compensação · Fermentação alcoólica, lática e acética"],
    [9, "Origem da Vida", 26, "Criacionismo e panspermia · Abiogênese e biogênese · Redi e Pasteur · Oparin e Haldane · Hipóteses autotrófica e heterotrófica"],
    [10, "Bactérias, Algas e Fungos", 20, "Bactérias: características e usos · Doenças bacterianas · Algas · Fungos · Biorremediação · Tropismos"],
    [11, "Filogenia e Botânica", 23, "Taxonomia · Nomenclatura · Cladogramas · Classificação das plantas · Briófitas e pteridófitas · Gimnospermas e angiospermas"],
    [12, "Morfologia e Reprodução de Plantas", 3, "Morfologia de flores e folhas · Caules, raízes e frutos · Reprodução e conquista terrestre · Técnicas agrícolas · Enxertia e estaquia · Rotação de cultura e plantio direto · Hidroponia e curvas de nível"],
    [13, "Transporte de Seiva e Sementes", 13, "Morfologia do caule · Seiva bruta e elaborada · Mecanismos de transporte · Dispersão de sementes · Amadurecimento e etileno"],
    [14, "Invertebrados", 22, "Filos do reino animal · Características por filo · Classes de artrópodes"],
    [15, "Parasitoses e Doenças Endêmicas", 18, "Principais parasitoses e ciclos · Doenças endêmicas brasileiras · Dengue e febre amarela · Combate às arboviroses"],
    [16, "Vertebrados e Conquista Terrestre", 5, "Protocordados · Classificação dos cordados · Mamíferos · Ovo e anexos embrionários · Controle hídrico"],
    [17, "Digestório, Endócrino e Excretor", 7, "Sistema digestório · Sistema endócrino e tecido adiposo · Controle glicêmico (insulina e glucagon) · Sistema urinário"],
    [18, "Sistema Reprodutor e Reprodução Humana", 24, "Sistema reprodutor · Ciclo menstrual · Fecundação · Espermatogênese · Morfologia do espermatozoide"],
    [19, "Cardiorrespiratório e Sangue", 16, "Composição e produção do sangue · Coagulação · Circulação e coração · Sistema respiratório e troca gasosa · Monóxido de carbono · Anemia"],
    [20, "Sistema Nervoso e Musculoesquelético", 12, "Sistema nervoso e arco reflexo · Neurônio · Sistema sensorial e visão · Junção neuromuscular · Tipos de músculos · Fibras branca e vermelha"],
    [21, "Estrutura do DNA e Dogma Central", 9, "Estrutura de DNA e RNA · Desnaturação · Tipos de RNA, transcrição e tradução · Dogma central · Ciclo celular, mitose e meiose"],
    [22, "Genética", 15, "Leis de Mendel · Conceitos básicos · Gene, genoma, genótipo · Variabilidade genética · Epigenética"],
    [23, "Hereditariedade", 4, "Heredograma e símbolos · Probabilidade em heredograma · Doenças genéticas e gene letal · Polialelia, poligenia, pleiotropia · Penetrância incompleta · Sistema ABO e Rh · Teste de paternidade"],
    [24, "Genética Avançada", 14, "Técnicas genéticas · Terapia gênica, transgenia, PCR, CRISPR · Mapeamento genético · Clonagem · Hardy-Weinberg"],
    [25, "Vírus e Imunidade", 8, "Vírus e príons · Doenças virais · Tipos de imunidade · Inata, adquirida, ativa e passiva · Soro e vacina · Antibióticos e meia-vida · Resistência a fármacos"],
    [26, "Neoplasia e Farmacologia", 11, "Conceito de neoplasia · Terapias contra o câncer · Absorção de fármacos · Metabolismo de fármacos · Dose letal e janela terapêutica"],
  ],
  QUI: [
    [1, "Modelos Atômicos", 23, "Quatro elementos · Leucipo e Demócrito · Dalton, Thomson, Rutherford e Bohr · Orbitais de Schrödinger · Nêutron de Chadwick · Estrutura do átomo"],
    [2, "Camadas Eletrônicas", 15, "Camadas eletrônicas · Distribuição eletrônica · Transição eletrônica e emissão de luz · Fosforescência e fluorescência · Espectroscopia · Fogos de artifício"],
    [3, "Tabela Periódica", 17, "Propriedades periódicas · Raio atômico e eletronegatividade · Famílias · Principais elementos · Terras raras · Metais ferromagnéticos"],
    [4, "Ligações Químicas", 18, "Ligações químicas · Geometria molecular · Hibridização orbital"],
    [5, "Forças Intermoleculares", 7, "Forças intermoleculares · Estados da matéria · Substância pura e misturas · Solubilidade e miscibilidade · Tensoativos · Polaridade de ligações e moléculas"],
    [6, "Sistemas e Misturas", 1, "Conceito e cálculo de densidade · Métodos de separação de misturas"],
    [7, "Fórmulas Químicas", 24, "Tipos de fórmulas · Estrutural e molecular · Lewis e fórmula mínima · Balanceamento"],
    [8, "Reações Químicas", 4, "Tipos de reações · Cinética química · Energia de ativação e catalisadores · Enzimas e estrutura proteica · Ponto ótimo e desnaturação · Ionização"],
    [9, "Ácido e Base", 5, "Definição de ácido e base · Força dos ácidos · Cálculo de pH · Indicadores · Síntese da amônia · Neutralização · Principais ácidos"],
    [10, "Reações com Ácido", 19, "Ácido carbônico · Corrosão do mármore · Chuva ácida e impactos · Substâncias anfóteras"],
    [11, "Sais e Óxidos", 13, "Sais e óxidos · Dissociação e precipitação · Calcinação do calcário · Hidratação da cal virgem · Caiação"],
    [12, "Estequiometria", 2, "Regra de 3 · Estequiometria · Conceito de mol · Lavoisier e Proust · Concentração e volume · Rendimento e pureza"],
    [13, "Termoquímica", 22, "Entalpia · Reações endo e exotérmicas · Lei de Hess · Entropia · Energia livre de Gibbs"],
    [14, "Equilíbrio Químico", 21, "Constante de equilíbrio · Deslocamento de equilíbrio"],
    [15, "Reação de Oxirredução", 8, "Reações de oxirredução · Cálculo de Nox · Metal de sacrifício · Galvanização"],
    [16, "Pilha", 6, "Potencial de redução · Pilhas · Eletrólise · Associação de baterias"],
    [17, "Química Orgânica", 12, "Química orgânica · Nomenclatura · Funções químicas · Acidez e basicidade das funções"],
    [18, "Cadeias Orgânicas", 3, "Cadeias carbônicas e classificação · Principais polímeros · Tipos de gordura"],
    [19, "Isomeria", 20, "Isomeria plana · Isomeria geométrica"],
    [20, "Reações Orgânicas", 10, "Reações orgânicas · Saponificação e esterificação · Transesterificação e biocombustível · Combustão"],
    [21, "Ciclos da Matéria", 14, "Ciclo da água · Ciclo do carbono · Ciclo do oxigênio · Ciclo do nitrogênio"],
    [22, "Derivados do Petróleo", 16, "Derivados do petróleo · Craqueamento · Gases poluidores · Gases tóxicos"],
    [23, "Descarte de Materiais", 11, "Reciclagem · Materiais biodegradáveis · Manejo e coleta de lixo · Tratamento de água e esgoto · Metais pesados"],
    [24, "Reações Nucleares", 9, "Decaimento nuclear, meia-vida e carbono-14 · Radioatividade e raio-X · Reações nucleares · Energia nuclear · Bomba atômica · Partículas alfa, beta e gama"],
  ],
  FIS: [
    [1, "Eletricidade", 13, "Processos de eletrização · Vetores · Corrente elétrica · Cálculo de carga e corrente · Placa fotovoltaica"],
    [2, "Potencial Elétrico", 10, "Diferença de potencial · Potência elétrica e conta de luz · Energia de painel solar · Choque elétrico · Raio · Para-raios"],
    [3, "Eletrodinâmica Básica", 1, "Leis de Ohm · Circuitos e associação de resistores · Voltímetro e amperímetro · Gaiola de Faraday · Chuveiro elétrico"],
    [4, "Eletrodinâmica Avançada", 18, "Campo elétrico · Força elétrica · Energia elétrica · Geração de energia · Matriz energética e renováveis · Capacitor · Touch screen"],
    [5, "Eletromagnetismo", 7, "Magnetismo · Campo e força magnética · Indução eletromagnética · Regras da mão · Bobinas · Tipos de hidrelétricas"],
    [6, "Óptica Básica", 4, "Dualidade onda-partícula · Espectro eletromagnético · Teoria das cores e RGB"],
    [7, "Fenômenos Ópticos", 15, "Princípios da óptica · Propagação retilínea · Difração, refração, reflexão · Sombra, penumbra e eclipse · Prisma e arco-íris · Câmara escura"],
    [8, "Óptica Avançada", 19, "Espelhos planos e esféricos · Imagem real e virtual · Lentes, microscópio e telescópio · Óptica do olho · Lei de Snell · Fibra óptica"],
    [9, "Ondulatória Básica", 8, "Tipos de ondas · Propriedades das ondas · Frequência, período e comprimento · Velocidade de propagação · Ressonância · Micro-ondas · Reflexão em cordas"],
    [10, "Ondulatória Avançada e Acústica", 5, "Características do som · Altura, intensidade e timbre · Propagação em diferentes meios · Ondas estacionárias e harmônicos · Interferência · Instrumentos · Efeito Doppler e ultrassom"],
    [11, "Termologia", 2, "Calor específico, capacidade térmica e calor latente · Mudanças de fase · Isolamento térmico · Quantidade de calor · Transferência de calor · Pressão de vapor"],
    [12, "Dilatação e Escalas de Temperatura", 20, "Escalas de temperatura · Dilatação térmica"],
    [13, "Energia, Potência e Termodinâmica", 6, "Termodinâmica · Pressão, potência e rendimento · Ciclo de Carnot · Energia mecânica, potencial e cinética · Motor a combustão"],
    [14, "Estudo dos Gases", 14, "Estudo dos gases · Funcionamento do refrigerador"],
    [15, "Cinemática", 3, "Ponto material e corpo extenso · Referencial e trajetória · Velocidade média e MU · MUV · Queda livre · Encontro de corpos · Lançamento oblíquo · Movimento circular"],
    [16, "Quantidade de Movimento", 11, "Impulso · Quantidade de movimento · Colisões elásticas e inelásticas · Airbag"],
    [17, "Dinâmica", 9, "Leis de Newton · Decomposição de vetores · Peso, normal e trabalho · Atrito estático e cinético · Resistência do ar · Tração, polias e roldanas · Freio ABS"],
    [18, "Gravitação", 16, "Inércia · Gravitação universal e Kepler · Astronomia básica · Translação e rotação · Solstício e equinócio · Satélite geoestacionário · Big Bang e buraco negro"],
    [19, "Molas e Estática", 12, "Força e energia elástica · Centro de massa, equilíbrio e alavanca · Conversão de unidades · Análise dimensional"],
    [20, "Hidrostática", 17, "Pressão hidrostática · Empuxo e peso aparente · Lei de Stevin · Princípio de Pascal"],
  ],
  MAT: [
    [1, "Matemática Básica", 7, "Conjuntos numéricos · Multiplicação e divisão · Número primo, MMC e MDC"],
    [2, "Potenciação", 17, "Potenciação e radiciação · Notação científica"],
    [3, "Porcentagem e Conversões", 1, "Porcentagem e fração · Conversão de unidades · Taxa de câmbio · Código binário"],
    [4, "Razão e Matemática Financeira", 6, "Razão, proporção e escala · Rendimento e taxa de crescimento · Juros simples e compostos · Receita e lucro · Custo fixo e variável"],
    [5, "Sistemas e Vazão", 3, "Sistemas de equações · Regra de 3 · Proporcionalidade · Cálculo de vazão"],
    [6, "Equação de 1º Grau", 1, "Funções · Equação de 1º grau · Equações da reta · Encontro de retas"],
    [7, "Estatística Básica", 2, "Sequência numérica e ordenação · Média, moda, mediana e frequência · Desvio padrão e percentil · Eventos cíclicos"],
    [8, "Progressões Matemáticas", 15, "Progressão aritmética · Progressão geométrica · Outras progressões"],
    [9, "Equação de 2º Grau", 2, "Produtos notáveis · Equação de segundo grau · Inequação"],
    [10, "Equação da Circunferência", 22, "Equação da circunferência · Geometria analítica"],
    [11, "Logaritmo", 16, "Logaritmo · Equação exponencial · Meia-vida (radioatividade e fármacos)"],
    [12, "Ciclo Trigonométrico", 14, "Ciclo trigonométrico · Rotação de figuras · Função seno e cosseno"],
    [13, "Diagrama de Venn e Mapas", 19, "Diagrama de Venn · Mapas de ruas"],
    [14, "Análise de Gráficos", 5, "Interpretação de gráficos e tabelas"],
    [15, "Paralelogramos", 18, "Polígonos · Paralelogramos, quadrados e retângulos · Losangos"],
    [16, "Triângulos", 9, "Triângulos · Inscrito e circunscrito · Trapézios"],
    [17, "Círculos e Projeção", 4, "Perspectiva e objetos 3D · Projeção ortogonal e sombra · Círculos e setor circular · Sólidos de revolução"],
    [18, "Prismas e Pirâmides", 13, "Cubos, paralelepípedos e prismas · Faces, arestas e vértices · Pirâmides"],
    [19, "Esferas e Cones", 10, "Cilindros, esferas e cones"],
    [20, "Análise Combinatória", 11, "Análise combinatória"],
    [21, "Probabilidade", 8, "Probabilidade"],
    [22, "Matriz e Determinante", 21, "Classificação de sistemas (SPD, SPI e SI) · Escalonamento · Matriz e determinante"],
  ],
  GEO: [
    [1, "Cartografia e Meteorologia", 11, "Projeções cartográficas · Coordenadas e escala · Meteorologia · Fuso horário · Fatores climáticos"],
    [2, "Tectonismo", 19, "Camadas do interior da Terra · Processos tectônicos · Pangeia e placas · Deriva continental e fósseis"],
    [3, "Estrutura Geológica e Rochas", 10, "Estruturas geológicas · Formas de relevo · Agentes do relevo e erosão · Formação e tipos de rocha · Recursos minerais no Brasil"],
    [4, "Relevo Brasileiro", 21, "Relevo brasileiro · Regionalização, estados e capitais · Conceitos geográficos · Território, país, Estado, povo · Milton Santos · Paisagem e espaço geográfico"],
    [5, "Clima Brasileiro", 14, "Climas brasileiros · Climogramas · Biomas e domínios · Hotspots brasileiros"],
    [6, "Massas de Ar e Correntes Marítimas", 16, "Massas de ar no Brasil · Alta e baixa pressão · Furacão e brisa marinha · Correntes marítimas · El Niño e La Niña · Ciclo hidrológico e rios voadores · Energia eólica e solar · Pesca"],
    [7, "Geografia Mundo", 25, "Climas do mundo · Dobramentos modernos · Florestas tropicais · Desertos · Principais rios"],
    [8, "Demografia", 1, "Conceitos de demografia · Pirâmides e processos demográficos · Migração no Brasil · Migração sazonal, pendular e de retorno · Povos indígenas e quilombolas · Agricultura familiar · Patrimônio imaterial · Imigrações"],
    [9, "Urbanização", 6, "Urbanização · Metrópoles e macrocefalia · Segregação socioespacial e gentrificação · Gestão participativa · Função social do espaço público · Reforma Pereira Passos · Ilhas de calor e inversão térmica · Poluição urbana"],
    [10, "Agricultura Moderna", 8, "Revolução Verde · Agricultura moderna · Agronegócio · Urbanização do campo · Ocupação do Centro-Oeste · Fronteira agrícola · Terras devolutas e grilagem · Reforma agrária"],
    [11, "Sistemas Agrários e Solos", 17, "Tipos de solos · Sistemas de cultivo · Técnicas de plantio · Controle biológico · Conservação do solo · Desertificação e salinização · Lixiviação e laterização"],
    [12, "Impacto Ambiental", 7, "Ação antrópica · Sustentabilidade e exploração predatória · Queimadas e deslizamentos · Assoreamento e enchentes · Tragédia de Mariana · Tratamento de lixo e 3R"],
    [13, "Hidrografia Brasileira", 23, "Hidrografia brasileira · Bacias, aquíferos e rios · Hidrelétricas e portos · Matriz energética · Saneamento básico"],
    [14, "Preservação do Meio Ambiente", 13, "Preservação ambiental · Chico Mendes e seringueiros · Aquecimento global e pegada de carbono · Kyoto e Acordo de Paris · COPs"],
    [15, "ONU e Direitos Humanos", 5, "Criação e organização da ONU · Conselho de Segurança · Direitos humanos · Patrimônios da humanidade · Refugiados e Declaração de Salamanca · Fluxos migratórios e apátridas"],
    [16, "Conflitos do Oriente Médio", 22, "Formação de Israel · Estado palestino · Conflitos do Oriente Médio · OPEP e crises do petróleo"],
    [17, "Conceitos de Sociologia", 26, "Fato social de Durkheim · Campo social de Bourdieu · Construção social"],
    [18, "Segregação Racial e Lutas Sociais", 3, "Apartheid · Segregação nos EUA e Black Lives Matter · Rosa Parks e Luther King · Marginalização e estratificação · Ações afirmativas · Carolina Maria de Jesus · Paulo Freire · Trabalho análogo à escravidão"],
    [19, "Questões de Gênero", 4, "Opressão contra a mulher · Igualdade de direitos · Pílula e feminismo dos anos 1960 · Apagamento social · Lei Maria da Penha · Estereótipos de gênero · MeToo"],
    [20, "Globalização e Precarização do Trabalho", 2, "Globalização e cultura global · Divisão internacional do trabalho · Desterritorialização da produção · Redes e fluxos · Dumping, cartel, truste · Commodities · Precarização do trabalho"],
    [21, "Tecnologia", 9, "Inovação, internet e mídias sociais · Satélites, albedo e GPS · Nova corrida espacial · Desemprego tecnológico · Hiperconectividade · Pós-verdade e fake news · Inteligência artificial"],
    [22, "Pós-Modernidade", 20, "Individualismo, consumismo e tribalismo · Sujeito pós-moderno · Lipovetsky · Bauman · Debord"],
    [23, "Indústria Cultural", 15, "Escola de Frankfurt · Adorno · Apropriação e ressignificação cultural · Aceitação social"],
    [24, "Modelos de Produção", 12, "Balança comercial e PIB · Substituição de importações · Infraestrutura logística · Taylorismo, fordismo, toyotismo · Terceirização"],
    [25, "Economia Mundial Recente", 24, "Liberalismo e Estado mínimo · Protecionismo · New Deal e bem-estar social · Neoliberalismo · Tigres asiáticos · China e ZEEs · Crise de 2008 e BRICS"],
    [26, "Blocos Econômicos e Separatismo", 18, "Blocos econômicos · Tipos de blocos · Livre comércio e circulação · União aduaneira e monetária · Movimentos separatistas"],
  ],
  HIS: [
    [1, "Antiguidade Oriental", 21, "Desenvolvimento cultural do Homo sapiens · Origem da linguagem e da arte · Idade da Pedra e Revolução Neolítica · Civilizações hidráulicas"],
    [2, "Mundo Grego", 26, "Cultura e religião gregas · Atenas e Esparta · Legisladores atenienses · Helenismo"],
    [3, "Surgimento da Filosofia", 1, "Origem da filosofia · Metafísica, ontologia, ética e lógica · Pré-socráticos e sofistas · Sócrates, Platão e Aristóteles · Ignorância socrática · Dialética · Caverna de Platão · Eudaimonia · Epicuristas, estoicos, céticos e cínicos"],
    [4, "Império Romano", 24, "Ascensão e queda de Roma · Surgimento do cristianismo · Invasões bárbaras · Heranças greco-latinas"],
    [5, "História do Direito e da Democracia", 3, "Origens da democracia · Democracia antiga e atual · Código de Hamurabi · Teoria da justiça de Rawls · Constitucionalismo e Estado de Direito · Mito da meritocracia · Participação sociopolítica"],
    [6, "Ascensão do Feudalismo", 5, "Estrutura do feudalismo · Poder da Igreja Católica · Santo Agostinho e Tomás de Aquino"],
    [7, "Queda do Feudalismo", 11, "Cruzadas · Constantinopla · Povos árabes e islamismo · Crise do feudalismo · Burgos · Transição para o capitalismo"],
    [8, "Revolução Científica", 4, "Renascimento · Descartes e racionalismo · Pensamento indutivo e dedutivo · Reforma protestante e católica · Montaigne"],
    [9, "Pré-Colombiana e América Espanhola", 13, "Povos nativos da América · Incas, astecas e maias · Nativos brasileiros · América espanhola"],
    [10, "Escravidão e Pacto Colonial", 2, "Escola de Sagres e grandes navegações · Pacto colonial · Brasil Colônia · Escravidão · Companhia de Jesus"],
    [11, "Ciclos Econômicos Brasileiros", 22, "Feitorias e pau-brasil · Economia açucareira e plantation · Ciclo do ouro · Drogas do sertão · Ciclo do café · Ciclo da borracha"],
    [12, "Contratualismo e Estados Modernos", 23, "Magna Carta · Maquiavel · Formação dos Estados modernos · Hobbes, Locke e Rousseau · Monopólio da força · Utilitarismo"],
    [13, "Antigo Regime e Iluminismo", 17, "Antigo Regime · Mercantilismo · Absolutismo · Iluminismo · Pensadores iluministas"],
    [14, "Revolução Francesa", 25, "Revolução Francesa · Império napoleônico · Declaração dos Direitos do Homem"],
    [15, "Revolução Industrial", 14, "Leis de cercamento · Revolução Inglesa · Revolução Industrial · Ludismo · Socialismo e luta de classes · Alienação do trabalho · Fetichização da mercadoria"],
    [16, "Kant e Nietzsche", 15, "Menoridade e emancipação · Imperativo categórico · Genealogia da moral · Além-homem · Schopenhauer · Solipsismo"],
    [17, "Brasil Imperial", 9, "Independência · Primeiro Reinado e Regência · Poder Moderador · Relação com a Inglaterra · Identidade brasileira · Segundo Reinado · Abolicionismo e República"],
    [18, "República Velha", 20, "República da Espada · Café com leite · Coronelismo e voto de cabresto · Política dos governadores · Tenentismo"],
    [19, "Revoltas e Guerras do Brasil", 18, "Invasões holandesas e francesas · Palmares · Revoltas nativistas e separatistas · Inconfidência Mineira · Guerra do Paraguai · Revoltas regenciais · Canudos e Contestado · Revolta da Vacina e da Chibata"],
    [20, "Imperialismo", 19, "Imperialismo e neocolonialismo · Partilha da África · Autodeterminação dos povos · Primeira Guerra · Grande Depressão"],
    [21, "História dos EUA e da Rússia", 27, "Formação e independência dos EUA · Guerra de Secessão · Rússia czarista até o fim da URSS"],
    [22, "Era Vargas", 7, "Governo provisório · Populismo · Governo constitucional · Plano Cohen · Estado Novo · DIP"],
    [23, "Industrialização Brasileira", 28, "Surto industrial · Barão de Mauá · Ferrovias · Tarifa Alves Branco · Industrialização de Vargas · Abertura de JK · Zona Franca de Manaus"],
    [24, "Segunda Guerra e Totalitarismo", 6, "Nazismo, fascismo e stalinismo · Segunda Guerra · Hannah Arendt e banalidade do mal · Existencialismo · Sartre · Foucault, vigiar e punir"],
    [25, "Guerra Fria", 8, "Comunismo · Guerra Fria · Coreia, Vietnã e Revolução Cubana · Plano Marshall · OTAN e Pacto de Varsóvia · Crise dos mísseis e corrida espacial"],
    [26, "República Populista", 12, "Juscelino Kubitschek · Construção de Brasília · João Goulart e Ligas Camponesas"],
    [27, "Ditadura e Nova República", 10, "Ditadura · Atos institucionais · Censura · Tortura e caso Herzog · Anos 90 e hiperinflação · URV e Plano Real"],
    [28, "Constituições Brasileiras", 16, "Constituições brasileiras · Participação eleitoral"],
  ],
  LIN: [
    [1, "Comunicação e Funções da Linguagem", 13, "Elementos da comunicação · Funções da linguagem"],
    [2, "Gêneros e Tipos Textuais", 6, "Gêneros textuais · Tipos textuais · Linguagem expressiva · Linguagem não verbal · Charge e efeito de humor · Veículos de comunicação"],
    [3, "Linguística e Formação do Português", 8, "Linguística · Função social da linguagem · Formação do português brasileiro · Plurilinguismo · Acessibilidade e Libras"],
    [4, "Variantes Linguísticas", 7, "Variantes linguísticas · Popular e erudito · Regionalismos · Identidade linguística · Coloquialidade e oralidade · Preconceito linguístico"],
    [5, "Linguagem Formal e Informal", 14, "Formal e informal · Norma culta e norma padrão · Formação de palavras e cognatos · Neologismos · Ditados populares · Intertextualidade"],
    [6, "Argumentação e Progressão Temática", 12, "Estratégias argumentativas · Argumento de autoridade · Cenário hipotético · Progressão e unidade temática · Relações semânticas · Marcadores textuais · Conjunções e advérbios"],
    [7, "Recursos Expressivos", 10, "Recursos expressivos · Expressividade · Recursos e procedimentos linguísticos · Efeito de sentido"],
    [8, "Figuras de Linguagem", 11, "Figuras de linguagem · Ironia machadiana · Uso de aspas"],
    [9, "Seleção Lexical", 19, "Seleção lexical · Substantivos · Subjetividade · Sequência nominal · Adjetivação"],
    [10, "Texto Literário e Utilitário", 22, "Conotação e denotação · Sentido literal e figurado · Discurso implícito e explícito · Ambiguidade e polissemia · Pressuposto e inferência"],
    [11, "Modos e Tempos Verbais", 20, "Modos verbais · Tempos verbais · Conjugação · Sequência verbal"],
    [12, "Concordância Verbal e Nominal", 23, "Concordância verbal · Concordância nominal · Preposições e artigos · Uso de crase"],
    [13, "Estrutura Sintática", 21, "Análise sintática · Estruturas sintáticas · Ordem direta e indireta · Vírgula, dois pontos e enumerações"],
    [14, "Análise de Poemas", 4, "Lirismo · Análise de poema · Análise de poesia · Análise de música"],
    [15, "Romantismo e Realismo", 15, "Romantismo · Realismo · Machado de Assis · Naturalismo · Realismo mágico"],
    [16, "Vanguardas e Pré-Modernismo", 17, "Pré-modernismo · Vanguardas europeias · Literatura impressionista"],
    [17, "Modernismo", 18, "Semana de Arte Moderna · Modernismo e Romance de 30 · Pós-modernismo"],
    [18, "Artes e Expressão Artística no Brasil", 1, "História e conceito de arte · Função e intenção da arte · Movimentos e linguagens artísticas · Análise de obras · Tropicália e Cinema Novo · Influência africana e indígena · Carnaval, teatro e dança · Maneirismo"],
    [19, "Mundo Globalizado e Tecnologia", 2, "Tecnologia e mídias sociais · Globalização e atualidades · Modernidade líquida · Sociedade do espetáculo · Indústria cultural · Pós-verdade e fake news"],
    [20, "Direitos Humanos e Luta Social", 9, "Direitos humanos · Status quo e desigualdade · Minorias e marginalização · Determinantes socioeconômicos · Apropriação cultural · Luta política e censura · Memória cultural"],
    [21, "Preconceito e Violência contra a Mulher", 5, "Segregação racial e opressão · Violência contra a mulher · Estereótipos de gênero · Apagamento histórico · Racismo estrutural e institucional"],
    [22, "Educação Física, Saúde e Estética", 3, "Campanhas de conscientização · Exercício físico e esporte · Saúde, estética e padrões de beleza · Lazer e ludicidade · Natureza e sustentabilidade"],
    [23, "Interpretação de Temas Diversos", 16, "Interpretação de textos de temas variados"],
  ],
};

const BLOCOS = [];
Object.entries(RAW).forEach(([sig, arr]) => {
  arr.forEach(([n, nome, rank, topicos]) => {
    BLOCOS.push({
      id: `${sig}${n}`,
      sig,
      n,
      nome,
      rank,
      topicos: topicos.split(" · "),
      reino: REINOS[sig].reino,
      area: REINOS[sig].area,
      cor: REINOS[sig].cor,
    });
  });
});
const BLOCO_BY_ID = Object.fromEntries(BLOCOS.map((b) => [b.id, b]));

/* ------------------------------ MACROPLANO -------------------------------- */
/* Semanas conforme o macroplano jul–nov 2026 já aprovado no Projeto */
const SEMANAS_BASE = [
  { n: 0, ini: "2026-07-24", fase: 1, titulo: "Preparação e diagnóstico", blocos: [], nota: "Antes da Semana 1: diagnóstico, montagem de rotina e primeiro contato com os tópicos de ranking 1º." },
  { n: 1, ini: "2026-07-27", fase: 1, blocos: [], nota: "Conteúdo remanejado para a Semana 2 — recomeço do ciclo." },
  { n: 2, ini: "2026-08-03", fase: 1, blocos: ["BIO4", "BIO8", "QUI6", "QUI12", "FIS3", "FIS11", "MAT3", "MAT6", "MAT7", "MAT9", "GEO8", "GEO20", "HIS3", "HIS10", "LIN18", "LIN19"] },
  { n: 3, ini: "2026-08-10", fase: 1, blocos: ["BIO16", "BIO3", "QUI9", "QUI16", "FIS15", "MAT5", "MAT17", "GEO18", "HIS5", "LIN22"] },
  { n: 4, ini: "2026-08-17", fase: 1, blocos: ["BIO17", "BIO25", "QUI5", "QUI15", "FIS6", "MAT14", "MAT4", "GEO19", "HIS8", "LIN14"] },
  { n: 5, ini: "2026-08-24", fase: 2, blocos: ["BIO21", "BIO2", "QUI24", "QUI20", "FIS10", "MAT1", "MAT21", "GEO15", "HIS6", "LIN21"] },
  { n: 6, ini: "2026-08-31", fase: 2, blocos: ["BIO26", "BIO20", "QUI23", "QUI17", "FIS13", "MAT16", "MAT19", "GEO9", "HIS24", "LIN2"] },
  { n: 7, ini: "2026-09-07", fase: 2, blocos: ["BIO13", "BIO24", "QUI11", "QUI21", "FIS5", "MAT20", "MAT18", "GEO12", "HIS22", "LIN4"] },
  { n: 8, ini: "2026-09-14", fase: 2, blocos: ["BIO22", "BIO19", "QUI2", "QUI22", "FIS9", "MAT12", "MAT8", "GEO10", "HIS25", "LIN3"] },
  { n: 9, ini: "2026-09-21", fase: 3, blocos: ["BIO12", "QUI18", "BIO1", "BIO15", "QUI3", "QUI4", "FIS17", "FIS2", "MAT11", "MAT2", "GEO21", "GEO3", "HIS17", "HIS27", "LIN20", "LIN7"] },
  { n: 10, ini: "2026-09-28", fase: 3, blocos: ["BIO23", "QUI8", "BIO6", "BIO10", "QUI10", "QUI19", "FIS16", "FIS19", "MAT15", "MAT13", "GEO1", "GEO24", "HIS7", "HIS26", "LIN8", "LIN6"] },
  { n: 11, ini: "2026-10-05", fase: 3, blocos: ["BIO7", "BIO14", "BIO11", "QUI14", "QUI13", "QUI1", "FIS1", "FIS14", "FIS7", "MAT22", "MAT10", "GEO14", "GEO5", "GEO23", "HIS9", "HIS15", "HIS16", "LIN1", "LIN5", "LIN15"] },
  { n: 12, ini: "2026-10-12", fase: 3, blocos: "RESTO" },
  { n: 13, ini: "2026-10-19", fase: 4, blocos: [], revisao: "top8", nota: "Revisão dos rankings 1º–8º de todas as matérias + banco de erros. Zero conteúdo novo pesado." },
  { n: 14, ini: "2026-10-26", fase: 4, blocos: [], revisao: "fracas", nota: "Áreas mais fracas dos simulados + gestão de tempo e ordem de resolução." },
  { n: 15, ini: "2026-11-02", fase: 4, blocos: [], revisao: "dia1", nota: "Semana da prova dia 1: Linguagens, Humanas e Redação. Manutenção leve de CN/MAT." },
  { n: 16, ini: "2026-11-09", fase: 4, blocos: [], revisao: "dia2", nota: "Entre as provas: 100% Ciências da Natureza e Matemática para o dia 2." },
];

const FASES = {
  1: { nome: "Fundamentos de alta incidência", cor: "#4C42D6", desc: "Rankings 1º–8º de cada matéria. Núcleo duro do ENEM." },
  2: { nome: "Consolidação e média incidência", cor: "#0E9C74", desc: "Rankings 5º–16º com D+30 da Fase 1 rodando." },
  3: { nome: "Lacunas e tópicos restantes", cor: "#D08B04", desc: "Conteúdo novo vira secundário. Erro recorrente manda." },
  4: { nome: "Revisão intensiva e simulados", cor: "#DB3B57", desc: "Sem conteúdo novo pesado. Treino de prova." },
};

const VERSAO_APP = "3.6.0";
const ENEM_D1 = "2026-11-08";
const ENEM_D2 = "2026-11-15";
const META_GERAL = 810;
const MEDIA_INICIAL = 734; // padrão histórico — usado só quando o usuário nunca configurou

/* Nota de partida do termômetro: valor do usuário, com queda para o padrão. */
const notaPartida = (estado) => {
  const v = +(estado?.notaInicial);
  return Number.isFinite(v) && v > 0 && v <= 1000 ? v : MEDIA_INICIAL;
};

/* ============================== MOTOR / ENGINE ============================= */

const DIAS_SEM = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const DIAS_CURTO = ["D", "S", "T", "Q", "Q", "S", "S"];
const MESES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const MESES_CURTO = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

const iso = (d) => {
  const x = new Date(d);
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`;
};
const parse = (s) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
const diffDays = (a, b) => Math.round((parse(b) - parse(a)) / 86400000);
const fmtBR = (s) => { const d = parse(s); return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`; };
const fmtLongo = (s) => { const d = parse(s); return `${DIAS_SEM[d.getDay()]}, ${d.getDate()} de ${MESES[d.getMonth()]}`; };

/* Semana 12 = complemento (tudo que sobrou dos 169) */
const SEMANAS = (() => {
  const usados = new Set();
  SEMANAS_BASE.forEach((s) => Array.isArray(s.blocos) && s.blocos.forEach((b) => usados.add(b)));
  const resto = BLOCOS.filter((b) => !usados.has(b.id)).map((b) => b.id);
  return SEMANAS_BASE.map((s) => {
    const blocos = s.blocos === "RESTO" ? resto : s.blocos;
    return { ...s, blocos, fim: addDays(s.ini, s.n === 0 ? 2 : 6) };
  });
})();

const semanaDe = (dateStr) => {
  for (let i = SEMANAS.length - 1; i >= 0; i--) {
    if (dateStr >= SEMANAS[i].ini) return SEMANAS[i];
  }
  return SEMANAS[0];
};

/* Distribui os blocos da semana entre segunda e sábado */
const blocosDoDia = (dateStr) => {
  const sem = semanaDe(dateStr);
  if (!sem.blocos.length) return [];
  const dow = parse(dateStr).getDay();
  if (dow === 0) return [];
  if (sem.n === 0) {
    const off = diffDays(sem.ini, dateStr);
    return BLOCOS.filter((b) => b.rank === 1).slice(off * 3, off * 3 + 3).map((b) => b.id);
  }
  const idx = dow - 1;
  const perDia = Math.ceil(sem.blocos.length / 6);
  return sem.blocos.slice(idx * perDia, idx * perDia + perDia);
};

/* --------------------------------- XP ------------------------------------- */
const XP = {
  bloco: 120, questoes10: 25, revisao: 60, erro: 40, redacao: 200,
  simulado: 500, flashcards: 40, foco25: 30, diaPerfeito: 150,
  flashcardNovo: 15, flashcardRevisado: 12,
};

/* Ciclo do flashcard: 0 (novo) -> 1 -> 7 -> 30 dias, igual ao ciclo dos blocos.
   "Não lembrei" reinicia em D+1, mesma regra usada para conteúdo que reincide em erro. */
const CICLO_FLASHCARD = { 0: 1, 1: 7, 7: 30, 30: 30 };

/* ------------------- AGENDA DIÁRIA: CAPACIDADE E ESTIMATIVAS ------------- */
const TETO_DIARIO_MIN = 240;            // 4h efetivas — teto do 01-PERFIL-E-METAS na rotina de cursinho
const MIN_PADRAO = { bloco: 45, revisao: 20, questoes: 90, erros: 20, flashcards: 15, redacao: 60, simulado: 330 };

/* ---------------------- MODELO DE PROGRESSO EM 4 ESTADOS ------------------
   NAO_VISTO -> AULA_VISTA -> PRATICADO -> DOMINADO
   Registrar aula do cursinho para em AULA_VISTA e nunca avança além disso.
   Só prática de questões ou fechamento manual avança o estado.
   AULA_VISTA sozinho NÃO dispara revisão espaçada. */
const EST = { NAO_VISTO: "nao_visto", AULA_VISTA: "aula_vista", PRATICADO: "praticado", DOMINADO: "dominado" };
const ORDEM_EST = { nao_visto: 0, aula_vista: 1, praticado: 2, dominado: 3 };

const ESTADO_UI = {
  nao_visto:  { cor: T.ink30,  soft: T.lineSoft,   t: "Não visto",  curto: "—" },
  aula_vista: { cor: T.ice,    soft: "#E4F2FA",    t: "Aula vista", curto: "aula" },
  praticado:  { cor: T.amber,  soft: T.amberSoft,  t: "Praticado",  curto: "prática" },
  dominado:   { cor: T.jade,   soft: T.jadeSoft,   t: "Dominado",   curto: "domínio" },
};

const progressoDe = (estado, blocoId) =>
  estado.progresso?.[blocoId] || { estado: EST.NAO_VISTO, origemDominio: null, furada: false };

const estadoDoBloco = (estado, blocoId) => progressoDe(estado, blocoId).estado;

/* Avanço monotônico: nunca rebaixa por acidente (só o alerta de furada rebaixa). */
const avancarEstado = (prog, novo, extra = {}) => {
  const atual = prog?.estado || EST.NAO_VISTO;
  const vencedor = ORDEM_EST[novo] > ORDEM_EST[atual] ? novo : atual;
  return { ...prog, ...extra, estado: vencedor };
};

/* Bloco já visto (aula ou mais) não é conteúdo novo: vira revisão e custa metade. */
const blocoCoberto = (estado, blocoId) => ORDEM_EST[estadoDoBloco(estado, blocoId)] >= 1;

const estimarMinutos = (item, estado) => {
  if (Number.isFinite(+item.minutos) && +item.minutos > 0) return +item.minutos;
  const base = MIN_PADRAO[item.tipo] ?? 30;
  if (item.tipo === "questoes" && item.meta) return Math.round(+item.meta * 1.5);
  if (item.tipo === "bloco" && item.blocoId && blocoCoberto(estado, item.blocoId)) return Math.round(base / 2);
  return base;
};

/* Ranking do bloco — usado para ordenar a agenda por incidência, não por origem. */
const rankDoItem = (item) => {
  const b = item.blocoId ? BLOCO_BY_ID[item.blocoId] : null;
  if (b) return b.rank;
  if (item.classificacao === "extra") return 90;   // fora dos 169: último da fila
  return 30;                                        // itens sem bloco (questões, erros, redação)
};

/* --------------------- TRILHO A: PROGRESSÃO DE VOLUME -------------------- */
/* Começa em 15/dia e sobe até 45/dia. O aumento só é liberado pelo gate do
   Prompt 6; até lá, a meta é a que o usuário destravou (nivelQuestoes). */
const VOLUMES = [15, 20, 25, 30, 35, 40, 45];
const metaQuestoesSemana = (estado, data) => {
  const n = Number.isFinite(+estado.nivelQuestoes) ? +estado.nivelQuestoes : 0;
  return VOLUMES[Math.max(0, Math.min(VOLUMES.length - 1, n))];
};

/* ------------------------- FILA DE PRIORIDADE ---------------------------- */
/* Ordem de alimentação (02-METODO-E-ESTRATEGIA):
   1) blocos priorizados manualmente  2) ALTA no caderno de erros
   3) top-8 ainda não tocados         4) demais por ranking            */
const erroAltaNoBloco = (estado, blocoId) =>
  (estado.erros || []).some((e) => e.blocoId === blocoId && e.prioridade === "ALTA");

function filaMacroplano(estado) {
  const prio = estado.prioridades || [];
  return BLOCOS
    .filter((b) => estadoDoBloco(estado, b.id) !== EST.DOMINADO)
    .map((b) => {
      const idxManual = prio.indexOf(b.id);
      const est = estadoDoBloco(estado, b.id);
      let peso;
      if (idxManual >= 0) peso = -1000 + idxManual;                       // fila manual manda
      else if (erroAltaNoBloco(estado, b.id)) peso = -500 + b.rank;        // erro ALTA
      else if (b.rank <= 8 && est === EST.NAO_VISTO) peso = -200 + b.rank; // top-8 intocado
      else peso = b.rank + (est === EST.AULA_VISTA ? -10 : 0);             // aula vista adianta
      return { bloco: b, peso, manual: idxManual >= 0, alta: erroAltaNoBloco(estado, b.id) };
    })
    .sort((a, b) => a.peso - b.peso || a.bloco.rank - b.bloco.rank);
}

/* Prazo de 3 dias para item ALTA virar bloco de estudo (02-METODO-E-ESTRATEGIA). */
const prazoAlta = (estado, blocoId, hoje) => {
  const e = (estado.erros || []).filter((x) => x.blocoId === blocoId && x.prioridade === "ALTA")
    .sort((a, b) => a.data.localeCompare(b.data))[0];
  return e ? 3 - diffDays(e.data, hoje) : null;
};

const errosDoBloco = (estado, blocoId) =>
  blocoId ? (estado.erros || []).filter((e) => e.blocoId === blocoId).length : 0;

/* Busca na BASE-CONTEUDOS por nome do bloco ou por qualquer um de seus tópicos. */
const normalizar = (t) => (t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

/* Palavras genéricas demais para decidir um match sozinhas (ex.: "sistema"
   casaria com "Sistemas e Misturas" ao digitar "sistema cardiovascular"). */
const GENERICAS = new Set(["sistema","sistemas","estudo","estudos","tipos","tipo","conceito","conceitos",
  "principais","introducao","geral","aula","parte","basico","basica","avancado","avancada","teoria","revisao"]);

/* Sinônimos usados em cursinho que não aparecem literalmente na BASE-CONTEUDOS. */
const APELIDOS = {
  BIO19: ["cardiovascular","circulatorio","cardiaco","coracao","hemacia","hematose","sanguineo"],
  BIO17: ["digestorio","digestivo","endocrino","hormonio","hormonios","excretor","renal","rim","rins","glicemia"],
  BIO20: ["nervoso","neuronio","sinapse","muscular","musculo","esqueletico","sensorial"],
  BIO18: ["reprodutor","reproducao humana","gametogenese","menstrual"],
  BIO25: ["imunologia","imune","imunidade","vacina","soro","anticorpo","virus"],
  BIO21: ["dna","rna","transcricao","traducao","mitose","meiose","ciclo celular","dogma"],
  BIO23: ["heranca","hereditariedade","mendel aplicado","abo","fator rh","genetica probabilidade"],
  BIO8: ["respiracao celular","krebs","glicolise","fermentacao","fotossintese","atp"],
  BIO7: ["organela","organelas","celula","membrana plasmatica"],
  QUI12: ["mol","molar","calculo estequiometrico","rendimento","pureza"],
  QUI9: ["ph","poh","acido","base","neutralizacao","indicador"],
  QUI16: ["pilha","eletroquimica","eletrolise","potencial de reducao"],
  QUI15: ["nox","oxidacao","reducao","oxirreducao"],
  QUI24: ["radioatividade","meia vida","nuclear","isotopo"],
  FIS3: ["ohm","resistor","circuito","corrente","chuveiro"],
  FIS11: ["calorimetria","calor especifico","calor latente","temperatura","termica"],
  FIS15: ["mru","muv","queda livre","lancamento","velocidade","aceleracao"],
  FIS17: ["newton","atrito","forca","tracao","polia"],
  FIS13: ["termodinamica","carnot","energia mecanica","potencia"],
  FIS10: ["som","acustica","doppler","harmonico"],
  MAT3: ["porcentagem","desconto","acrescimo","regra de tres percentual"],
  MAT7: ["media","mediana","moda","desvio padrao","estatistica"],
  MAT21: ["probabilidade","chance"],
  MAT20: ["combinatoria","permutacao","arranjo","combinacao","fatorial"],
  MAT14: ["grafico","graficos","tabela","tabelas"],
  GEO8: ["demografia","piramide etaria","migracao","natalidade","mortalidade"],
  HIS3: ["filosofia","socrates","platao","aristoteles","pre socraticos"],
  LIN14: ["poema","poesia","soneto","lirico"],
  LIN8: ["metafora","metonimia","figuras de linguagem","hiperbole"],
};

function casarBloco(texto, limite = 6) {
  const q = normalizar(texto);
  if (q.length < 3) return [];
  const palavras = q.split(/\s+/).filter((w) => w.length > 3 && !GENERICAS.has(w));
  const pontos = [];

  BLOCOS.forEach((b) => {
    const nome = normalizar(b.nome);
    const topicos = normalizar(b.topicos.join(" "));
    const apelidos = (APELIDOS[b.id] || []).map(normalizar);
    let p = 0;

    if (nome === q) p = 100;
    else if (apelidos.some((a) => q.includes(a))) p = 92;              // sinônimo de cursinho
    else if (nome.includes(q) && q.length >= 5) p = 82;
    else if (q.includes(nome) && nome.length > 6) p = 74;
    else if (topicos.includes(q) && q.length >= 5) p = 60;
    else if (palavras.length) {
      const achou = palavras.filter((w) => nome.includes(w) || topicos.includes(w) || apelidos.some((a) => a.includes(w))).length;
      if (achou) p = 24 + (achou / palavras.length) * 34;              // proporção das palavras úteis
    }

    if (p > 0) pontos.push({ bloco: b, p: p + (27 - Math.min(26, b.rank)) * 0.25 });
  });

  return pontos.sort((a, b) => b.p - a.p).slice(0, limite).map((x) => x.bloco);
}
const proximaEtapaFlashcard = (etapa, lembrou) => (lembrou ? (CICLO_FLASHCARD[etapa] ?? 30) : 0);
const flashcardsPendentes = (estado, hoje) => (estado.flashcards || []).filter((f) => f.venc <= hoje);

const NIVEIS = [
  "Calouro", "Iniciante", "Aprendiz", "Disciplinado", "Consistente", "Focado",
  "Resolvedor", "Analista", "Tático", "Metódico", "Persistente", "Afiado",
  "Estrategista", "Dominante", "Implacável", "Cirúrgico", "Elite", "Veterano",
  "Mestre de Reinos", "Candidato de Medicina",
];
const xpParaNivel = (n) => Math.round(400 * Math.pow(n, 1.55));
const nivelDe = (xp) => {
  let n = 1;
  while (n < 60 && xp >= xpParaNivel(n)) n++;
  const atual = n === 1 ? 0 : xpParaNivel(n - 1);
  const prox = xpParaNivel(n);
  return {
    nivel: n,
    titulo: NIVEIS[Math.min(NIVEIS.length - 1, Math.floor((n - 1) / 3))],
    atual, prox,
    pct: Math.min(100, Math.round(((xp - atual) / (prox - atual)) * 100)),
    falta: prox - xp,
  };
};

/* ------------------------- NOTA ESTIMADA (termômetro) --------------------- */
/* Estimativa de acerto bruto. NÃO é TRI real — ver 02-METODO-E-ESTRATEGIA. */
const COEF = { CN: [350, 11.22], MAT: [350, 10.95], CH: [350, 11.5], LC: [350, 11.5] };
const notaArea = (area, acertos) => {
  const [b, m] = COEF[area];
  return Math.max(0, Math.min(1000, Math.round(b + m * acertos)));
};
/* Média só sobre o que foi de fato preenchido — simulado parcial (só MAT, por
   exemplo) não é mais penalizado com zeros nas áreas ausentes. */
const areasPreenchidas = (s) => Object.keys(AREA).filter((a) => s.areas?.[a] != null && s.areas[a] !== "");
const mediaSimulado = (s) => {
  const as = areasPreenchidas(s);
  if (!as.length) return s.redacao || 0;
  const notas = as.map((a) => notaArea(a, s.areas[a]));
  const total = notas.reduce((x, y) => x + y, 0) + (s.redacao ? s.redacao : 0);
  return Math.round(total / (as.length + (s.redacao ? 1 : 0)));
};
const ehParcial = (s) => areasPreenchidas(s).length < Object.keys(AREA).length;

/* ------------------------------ CONQUISTAS -------------------------------- */
const mkTier = (base, nome, icone, valores, campo, fmt) =>
  valores.map((v, i) => ({
    id: `${base}${v}`, nome: nome(v), icone, tier: i,
    desc: fmt(v), campo, alvo: v, grupo: base,
  }));

const CONQUISTAS = [
  ...mkTier("q", (v) => `${v} questões`, "target", [100, 250, 500, 1000, 2500, 5000], "questoes", (v) => `Resolver ${v} questões no total`),
  ...mkTier("h", (v) => `${v} horas`, "clock", [25, 50, 100, 200, 300, 400], "horas", (v) => `Acumular ${v} horas de estudo efetivo`),
  ...mkTier("s", (v) => `${v} dias seguidos`, "flame", [3, 7, 14, 30, 60, 100], "streak", (v) => `Manter ${v} dias consecutivos de estudo`),
  ...mkTier("r", (v) => `${v} revisões`, "refresh", [25, 50, 100, 300], "revisoes", (v) => `Concluir ${v} revisões espaçadas`),
  ...mkTier("e", (v) => `${v} erros catalogados`, "alert", [25, 100, 250], "erros", (v) => `Registrar ${v} erros no caderno`),
  ...mkTier("w", (v) => `${v} redações`, "pen", [1, 5, 10, 20, 30], "redacoes", (v) => `Escrever ${v} redações completas`),
  ...mkTier("sim", (v) => `${v} simulados`, "clipboard", [1, 5, 10, 15], "simulados", (v) => `Realizar ${v} simulados`),
  ...mkTier("m", (v) => `${v} dias de missão completa`, "check", [10, 30, 60, 100], "diasPerfeitos", (v) => `Fechar a missão do dia ${v} vezes`),
  { id: "red900", nome: "Redação 900+", icone: "star", desc: "Tirar 900 ou mais em uma redação", especial: true },
  { id: "red1000", nome: "Redação nota 1000", icone: "trophy", desc: "A nota máxima na redação", especial: true },
  { id: "meta810", nome: "Termômetro em 810", icone: "gauge", desc: "Atingir 810 de média estimada em um simulado", especial: true },
  { id: "metaArea", nome: "Meta de área batida", icone: "crosshair", desc: "Atingir a meta de acertos de qualquer área", especial: true },
  { id: "semanaPerfeita", nome: "Semana perfeita", icone: "shield", desc: "Sete dias seguidos com a missão fechada", especial: true },
  { id: "mesPerfeito", nome: "Mês perfeito", icone: "award", desc: "Trinta dias seguidos com a missão fechada", especial: true },
  ...Object.entries(REINOS).map(([sig, r]) => ({
    id: `reino${sig}`, nome: `${r.reino} conquistado`, icone: "swords",
    desc: `Concluir os ${r.total} blocos de ${r.nome}`, reino: sig,
  })),
  { id: "todosReinos", nome: "Os sete reinos", icone: "compass", desc: "Concluir os 169 blocos da base", especial: true },
  ...[1, 2, 3, 4].map((f) => ({ id: `fase${f}`, nome: `Fase ${f} concluída`, icone: "layers", desc: FASES[f].nome, fase: f })),
];

/* ------------------------------ ESTADO ------------------------------------ */
const ESTADO_INICIAL = {
  v: 1,
  nome: "",
  notaInicial: null,   // null = usa MEDIA_INICIAL
  criadoEm: "2026-07-24",
  xp: 0,
  sessoes: [],      // {id,data,blocoId,minutos,questoes,acertos}
  missoes: {},      // "YYYY-MM-DD": {itens:{id:true}, extras:[]}
  revisoes: [],     // {id,blocoId,venc,etapa,feita,feitaEm}
  simulados: [],    // {id,data,nome,minutos,areas:{},redacao,obs}
  erros: [],        // {id,data,blocoId,tipo,motivo,evitar,vezes}
  redacoes: [],     // {id,data,tema,nota,comps:[]}
  conquistas: {},   // id: dataISO
  descanso: [],     // ["YYYY-MM-DD"]
  focoMin: 0,
  vistas: {},
  resumos: {},      // { [blocoId]: { texto, atualizadoEm } }
  flashcards: [],   // { id, blocoId, frente, verso, criadoEm, etapa: 0|1|7|30, venc }
  somAtivo: true,
  missoesManuais: {}, // { "YYYY-MM-DD": [ {id,tipo,titulo,sub,xp,meta,origem} ] } — itens adicionados ou importados pelo usuário
  agenda: {},         // { "YYYY-MM-DD": [item] } — instância mutável do dia (o macroplano segue imutável)
  cobertura: {},      // legado v3.0 — migrado para `progresso`
  progresso: {},      // { [blocoId]: { estado, origemDominio, furada, aulaEm, praticaEm, dominioEm } }
  tetoRevisoes: 4,
  prioridades: [],   // ordem manual da fila do macroplano (ids de bloco)
  nivelQuestoes: 0,  // índice em VOLUMES — sobe só quando o gate libera
  questoesDia: {},   // { "YYYY-MM-DD": { feitas, corrigidas } } — contador do Trilho A
  gateHist: {},      // { "YYYY-MM-DD-semana": true } — semanas em que o gate já liberou
  jogo: { golpesDados: {}, ultimaVisita: null },
  padroesEnem: {},    // { [questaoId]: "Cc261013" } — respostas da aba Padrões do ENEM (ver lerRegistro)
  rotulosLivres: [], // nomes de conteúdo fora da base — só anotação, não entra em ranking/fila/cobertura // { [blocoId]: estadoJáCelebrado } — só celebração, nunca fonte de verdade
  nivelQuestoes: 0,  // índice em VOLUMES — sobe pelo gate semanal
};

/* ---------------------------- GERADOR DE MISSÃO --------------------------- */
const TIPOS_MISSAO = {
  bloco: { icone: "book", cor: T.primary, xp: XP.bloco },
  questoes: { icone: "target", cor: T.jade, xp: XP.questoes10 * 6 },
  revisao: { icone: "refresh", cor: T.ice, xp: XP.revisao },
  erros: { icone: "alert", cor: T.rose, xp: XP.erro },
  flashcards: { icone: "brain", cor: "#7C5CD6", xp: XP.flashcards },
  redacao: { icone: "pen", cor: T.gold, xp: XP.redacao },
  simulado: { icone: "clipboard", cor: T.primaryDeep, xp: XP.simulado },
};

function gerarMissao(dateStr, estado) {
  const sem = semanaDe(dateStr);
  const dow = parse(dateStr).getDay();
  const itens = [];
  const push = (tipo, titulo, sub, xp, meta) => itens.push({ id: `${tipo}-${itens.length}`, tipo, titulo, sub, xp: xp ?? TIPOS_MISSAO[tipo].xp, meta });

  // Revisões vencidas ou do dia
  const pend = (estado.revisoes || []).filter((r) => !r.feita && r.venc <= dateStr);
  if (pend.length) {
    const atrasadas = pend.filter((r) => r.venc < dateStr).length;
    push("revisao", `Revisar ${pend.length} ${pend.length === 1 ? "conteúdo" : "conteúdos"}`,
      atrasadas ? `${atrasadas} em atraso · prioridade máxima` : "Ciclo D+1 / D+7 / D+30 em dia",
      XP.revisao * Math.min(4, pend.length));
  }

  if (dow === 0) {
    // Domingo: simulado
    const nSim = (estado.simulados || []).length;
    push("simulado", sem.n <= 3 && sem.n > 0 ? "Simulado por área" : "Simulado completo",
      sem.n === 0 ? "Diagnóstico inicial por área" : nSim === 0 ? "Primeiro registro do histórico" : "Cronometrado, nas condições da prova");
    push("erros", "Corrigir e catalogar os erros do simulado", "Cada erro vira uma entrada no caderno", XP.erro * 3);
    (estado.missoesManuais?.[dateStr] || []).forEach((it) => itens.push(it));
    return { itens, tipoDia: "simulado", sem };
  }

  // Blocos de conteúdo
  const bl = blocosDoDia(dateStr);
  bl.forEach((id) => {
    const b = BLOCO_BY_ID[id];
    if (!b) return;
    push("bloco", `${b.sig} ${b.n} · ${b.nome}`, `${REINOS[b.sig].nome} · ranking ${b.rank}º · ${b.topicos.length} tópicos`, XP.bloco, id);
  });

  if (sem.fase === 4) {
    const foco = sem.revisao === "dia1" ? ["LIN", "GEO", "HIS"] : sem.revisao === "dia2" ? ["BIO", "QUI", "FIS", "MAT"] : null;
    const pool = BLOCOS.filter((b) => b.rank <= 8 && (!foco || foco.includes(b.sig)));
    const off = (diffDays(sem.ini, dateStr) * 3) % Math.max(1, pool.length);
    pool.slice(off, off + 3).forEach((b) => {
      push("revisao", `Revisão dirigida · ${b.sig} ${b.n} ${b.nome}`, `Ranking ${b.rank}º · sem conteúdo novo`, XP.revisao, b.id);
    });
  }

  // Questões
  const alvoQ = dow === 6 ? 40 : 60;
  push("questoes", `Resolver ${alvoQ} questões`, "Questões antes de teoria — método do Projeto", XP.questoes10 * (alvoQ / 10), alvoQ);

  // Análise de erros
  push("erros", "Analisar os erros do dia", "Todo erro entra no caderno com motivo e como evitar", XP.erro);

  // Flashcards — se existem cartões de verdade, o item aponta para eles; senão, fica o lembrete genérico.
  const pendFlash = flashcardsPendentes(estado, dateStr).length;
  if (pendFlash > 0) {
    push("flashcards", `Revisar ${pendFlash} flashcard${pendFlash > 1 ? "s" : ""}`,
      "Modelo Anki: veja a frente, tente responder, só depois vire o cartão", XP.flashcards);
  } else if (dow !== 6) {
    push("flashcards", "Rodar flashcards do que travou", "15 minutos, ativo, sem reler resumo");
  }

  // Redação: sábado sempre; a partir da semana 9, também na quarta
  if (dow === 6 || (sem.n >= 9 && dow === 3)) {
    push("redacao", "Redação completa", sem.n >= 9 ? "Cronometrada: 30 min de plano + escrita" : "Uma competência em foco esta semana");
  }

  (estado.missoesManuais?.[dateStr] || []).forEach((it) => itens.push(it));

  return { itens, tipoDia: dow === 6 ? "sabado" : "estudo", sem };
}

/* ===================== TRILHO A: CONTADOR E GATE ==========================
   Volume sobe de 15 até 45 questões/dia, mas só quando os TRÊS critérios do
   04-ROTINA-DIARIA forem atendidos na semana. Se qualquer um falhar, mantém. */
const segundaDa = (data) => addDays(data, -((parse(data).getDay() + 6) % 7));

function avaliarGate(estado, hoje) {
  const ini = segundaDa(hoje);
  const anteriorIni = addDays(ini, -7);
  const dias = (base) => Array.from({ length: 7 }, (_, i) => addDays(base, i)).filter((d) => d <= hoje);

  const diasSem = dias(ini);
  const meta = metaQuestoesSemana(estado, hoje);

  /* 1. corrigiu 100% das questões, todos os dias com atividade */
  const comAtividade = diasSem.filter((d) => (estado.questoesDia?.[d]?.feitas || 0) > 0);
  const todosCorrigidos = comAtividade.length > 0 &&
    comAtividade.every((d) => (estado.questoesDia[d].corrigidas || 0) >= (estado.questoesDia[d].feitas || 0));

  /* 2. sobrou tempo para o Trilho B — proxy: bloco B concluído nos dias de atividade */
  const blocoFeito = comAtividade.filter((d) =>
    (estado.agenda?.[d] || []).some((it) => it.trilho === "B" && it.tipo === "bloco" && it.status === "feito")).length;
  const sobrouTempo = comAtividade.length > 0 && blocoFeito >= Math.ceil(comAtividade.length * 0.6);

  /* 3. taxa de acerto não caiu vs. semana anterior */
  const taxa = (base) => {
    const ds = new Set(dias(base));
    const ses = (estado.sessoes || []).filter((x) => ds.has(x.data) && x.questoes > 0);
    const q = ses.reduce((a, x) => a + x.questoes, 0);
    const ac = ses.reduce((a, x) => a + x.acertos, 0);
    return q ? (ac / q) * 100 : null;
  };
  const tAtual = taxa(ini), tAnt = taxa(anteriorIni);
  const manteveAcerto = tAtual == null || tAnt == null || tAtual >= tAnt - 2;

  const criterios = [
    { ok: todosCorrigidos, t: "Corrigir 100% das questões todos os dias",
      d: comAtividade.length ? `${comAtividade.filter((d) => (estado.questoesDia[d].corrigidas || 0) >= estado.questoesDia[d].feitas).length}/${comAtividade.length} dias` : "sem registro ainda" },
    { ok: sobrouTempo, t: "Sobrar tempo para o bloco do Trilho B",
      d: comAtividade.length ? `${blocoFeito}/${comAtividade.length} dias com bloco fechado` : "sem registro ainda" },
    { ok: manteveAcerto, t: "Taxa de acerto não cair vs. semana anterior",
      d: tAtual != null && tAnt != null ? `${Math.round(tAtual)}% agora vs ${Math.round(tAnt)}% antes` : "sem base de comparação" },
  ];

  const nivel = Math.max(0, Math.min(VOLUMES.length - 1, +estado.nivelQuestoes || 0));
  return {
    criterios, meta,
    liberado: criterios.every((c) => c.ok) && nivel < VOLUMES.length - 1,
    bloqueadoPor: criterios.filter((c) => !c.ok).map((c) => c.t),
    proximo: VOLUMES[Math.min(VOLUMES.length - 1, nivel + 1)],
    noTeto: nivel >= VOLUMES.length - 1,
  };
}

/* ====================== TETO DIÁRIO DE REVISÕES ===========================
   A fila não acumula "atrasado": o que não cabe no teto é redistribuído para
   os próximos dias, preservando a ordem de prioridade.
   Ordem: ALTA no caderno -> mais atrasada -> ranking de incidência. */
function revisoesDoDia(estado, hoje) {
  const teto = Math.max(1, +estado.tetoRevisoes || 4);
  const pendentes = (estado.revisoes || []).filter((r) => !r.feita && r.venc <= hoje);

  const ordenadas = pendentes.map((r) => {
    const b = BLOCO_BY_ID[r.blocoId];
    return { ...r, alta: erroAltaNoBloco(estado, r.blocoId), atraso: diffDays(r.venc, hoje), rank: b ? b.rank : 99 };
  }).sort((a, b) => (b.alta - a.alta) || (b.atraso - a.atraso) || (a.rank - b.rank));

  return {
    hoje: ordenadas.slice(0, teto),
    fila: ordenadas.slice(teto),
    teto,
    /* previsão: em quantos dias a fila zera no ritmo atual */
    diasParaZerar: Math.ceil(ordenadas.length / teto),
  };
}

/* ================================ JOGO ===================================
   PURAMENTE DERIVADO. Lê o status dos 169 blocos e o XP que já existem.
   Nada aqui cria, altera ou apaga dado de estudo. Fluxo de sentido único.
   A única persistência é `jogo.golpesDados`: quais celebrações já rodaram. */
const HP_POR_ESTADO = { nao_visto: 100, aula_vista: 66, praticado: 33, dominado: 0 };

const MONSTRO_REINO = {
  BIO: { chefe: "🐺", monstro: "🌿", acento: "#2F9E5E" },
  QUI: { chefe: "👻", monstro: "❄️", acento: "#3FA3D6" },
  FIS: { chefe: "🧟", monstro: "🧱", acento: "#7C5CD6" },
  GEO: { chefe: "🦎", monstro: "🍃", acento: "#6F9B3C" },
  LIN: { chefe: "😈", monstro: "🔥", acento: "#E2643C" },
  HIS: { chefe: "🧛", monstro: "🦇", acento: "#9B3F63" },
  MAT: { chefe: "🗿", monstro: "🏺", acento: "#D69A2E" },
};

/* Estado do monstro = status do bloco. Sempre. Sem cache, sem dessincronia. */
const monstroDoBloco = (estado, bloco) => {
  const st = estadoDoBloco(estado, bloco.id);
  return { bloco, status: st, hp: HP_POR_ESTADO[st], derrotado: st === EST.DOMINADO };
};

const reinoDoJogo = (estado, sig) => {
  const blocos = BLOCOS.filter((b) => b.sig === sig).map((b) => monstroDoBloco(estado, b));
  const derrotados = blocos.filter((m) => m.derrotado).length;
  return {
    sig, ...REINOS[sig], ...MONSTRO_REINO[sig], blocos, derrotados,
    total: blocos.length,
    pct: Math.round((derrotados / blocos.length) * 100),
    chefeCaido: derrotados === blocos.length,
  };
};

/* Golpes pendentes: blocos cujo status avançou além do que o jogo já celebrou. */
function golpesPendentes(estado) {
  const dados = estado.jogo?.golpesDados || {};
  return BLOCOS
    .map((b) => ({ bloco: b, atual: estadoDoBloco(estado, b.id), celebrado: dados[b.id] || EST.NAO_VISTO }))
    .filter((x) => ORDEM_EST[x.atual] > ORDEM_EST[x.celebrado]);
}

/* ====================== IMPORTAÇÃO DE PROVA EM PDF ========================
   pdf.js é carregado SOB DEMANDA (arquivo pdfjs.js, mesma origem, sem CDN),
   só quando a tela de importação abre. Não pesa na abertura do app. */
let _pdfPromise = null;
function carregarPdfJs() {
  if (window.__PDFJS) return Promise.resolve(window.__PDFJS);
  if (_pdfPromise) return _pdfPromise;
  _pdfPromise = new Promise((ok, erro) => {
    const tag = document.createElement("script");
    tag.src = "pdfjs.js?v=" + VERSAO_APP;
    tag.onload = () => (window.__PDFJS ? ok(window.__PDFJS) : erro(new Error("pdfjs carregou mas não expôs a biblioteca")));
    tag.onerror = () => erro(new Error("Não consegui carregar pdfjs.js — confirme que o arquivo está na pasta publicada"));
    document.head.appendChild(tag);
  });
  return _pdfPromise;
}

/* Extrai o texto por página e separa em questões pelo padrão oficial do ENEM. */
async function lerProvaPdf(arquivo, aoProgresso) {
  const pdfjs = await carregarPdfJs();
  const buf = await arquivo.arrayBuffer();
  const doc = await pdfjs.getDocument({ data: buf }).promise;

  let texto = "";
  for (let i = 1; i <= doc.numPages; i++) {
    const pag = await doc.getPage(i);
    const c = await pag.getTextContent();
    texto += "\n" + c.items.map((x) => x.str).join(" ");
    aoProgresso?.(Math.round((i / doc.numPages) * 100));
  }

  /* "QUESTÃO 136" / "QUESTAO 136" / "Questão 136" — padrão das provas oficiais */
  const re = /QUEST[ÃA]O\s+(\d{1,3})/gi;
  const marcas = [];
  let m;
  while ((m = re.exec(texto)) !== null) marcas.push({ n: +m[1], pos: m.index });

  const vistos = new Set();
  const questoes = [];
  marcas.forEach((mk, i) => {
    if (vistos.has(mk.n)) return;
    vistos.add(mk.n);
    const fim = i + 1 < marcas.length ? marcas[i + 1].pos : texto.length;
    const corpo = texto.slice(mk.pos, fim).replace(/\s+/g, " ").trim();
    questoes.push({ n: mk.n, trecho: corpo.slice(0, 320) });
  });
  questoes.sort((a, b) => a.n - b.n);

  return { questoes, paginas: doc.numPages, totalTexto: texto.length };
}

/* Área provável a partir da numeração oficial do ENEM (1º e 2º dia). */
const areaPorNumero = (n) => (n <= 45 ? "LC" : n <= 90 ? "CH" : n <= 135 ? "CN" : "MAT");

/* ========================= MATERIALIZAÇÃO DA AGENDA ======================= */
/* O macroplano é template imutável. Ao abrir um dia, ele é MATERIALIZADO como
   itens de agenda editáveis. A partir daí a agenda é a instância mutável — o
   macroplano nunca é tocado. Idempotente: reabrir o dia não duplica nada. */
function materializarDia(estado, data) {
  const jaTem = estado.agenda?.[data];
  if (Array.isArray(jaTem)) return jaTem;

  const dow = parse(data).getDay();
  const sem = semanaDe(data);
  const itens = [];
  const add = (o) => itens.push({
    status: "pendente", ordem: itens.length, vezesAdiado: 0, revisaoAtiva: true,
    origem: "macroplano", classificacao: "normal", blocoId: null, ...o,
  });

  if (dow === 0) {
    add({ id: "sim-0", trilho: "A", tipo: "simulado", titulo: sem.n <= 3 && sem.n > 0 ? "Simulado por área" : "Simulado completo",
      sub: "Cronometrado, nas condições da prova", xp: XP.simulado });
    add({ id: "err-0", trilho: "A", tipo: "erros", titulo: "Corrigir e catalogar os erros do simulado",
      sub: "Cada erro vira uma entrada no caderno", xp: XP.erro * 3 });
    return itens;
  }

  /* TRILHO A — simulado diário (radar). Volume da semana vigente. */
  const meta = metaQuestoesSemana(estado, data);
  add({ id: "trilhoA-0", trilho: "A", tipo: "questoes", titulo: `Simulado diário · ${meta} questões`,
    sub: "Questões misturadas, cronometradas — fluência e detecção de lacunas", xp: XP.questoes10 * (meta / 10), meta });
  add({ id: "trilhoA-1", trilho: "A", tipo: "erros", titulo: "Corrigir e registrar os erros",
    sub: "Todo erro vira entrada no caderno, com tipo e prioridade", xp: XP.erro });

  /* TRILHO B — 1 bloco por dia, puxado do topo da fila. Recomendação única. */
  const fila = filaMacroplano(estado);
  const jaUsados = new Set();
  Object.entries(estado.agenda || {}).forEach(([d, arr]) => {
    if (d < data) (arr || []).forEach((it) => it.blocoId && it.trilho === "B" && jaUsados.add(it.blocoId));
  });
  const escolhido = fila.find((f) => !jaUsados.has(f.bloco.id));
  if (escolhido) {
    const b = escolhido.bloco;
    const jaViu = estadoDoBloco(estado, b.id) === EST.AULA_VISTA;
    add({ id: `trilhoB-${b.id}`, trilho: "B", tipo: "bloco", blocoId: b.id, meta: b.id,
      titulo: `${jaViu ? "Fechar" : "Estudar"} · ${b.sig} ${b.n} ${b.nome}`,
      sub: `${REINOS[b.sig].nome} · ranking ${b.rank}º${jaViu ? " · aula já vista no cursinho" : ""}${escolhido.alta ? " · ALTA no caderno de erros" : ""}`,
      xp: XP.bloco });
  }

  if (dow === 6 || (sem.n >= 9 && dow === 3)) {
    add({ id: "red-0", trilho: "B", tipo: "redacao", titulo: "Redação completa", sub: "Cronometrada: 30 min de plano + escrita", xp: XP.redacao });
  }

  (estado.missoesManuais?.[data] || []).forEach((it) => add({ ...it, trilho: it.trilho || "B", origem: "avulso" }));

  return itens.map((it) => ({ ...it, minutos: estimarMinutos(it, estado) }));
}

/* Agenda do dia pronta para render: materializa, aplica adiados e ordena.
   Ordenação por incidência (ranking), com erro recente puxando para cima —
   assim, se o dia estourar, o que sobra é sempre o menos valioso. */
function agendaDoDia(estado, data) {
  const itens = materializarDia(estado, data).map((it) => ({
    ...it,
    minutos: estimarMinutos(it, estado),
    erros: errosDoBloco(estado, it.blocoId),
  }));
  return itens.sort((a, b) => {
    if (a.status !== b.status) return a.status === "feito" ? 1 : -1;
    const pa = rankDoItem(a) - Math.min(12, a.erros * 4);
    const pb = rankDoItem(b) - Math.min(12, b.erros * 4);
    if (pa !== pb) return pa - pb;
    return (a.ordem ?? 0) - (b.ordem ?? 0);
  });
}

/* ---------------------------- ANÁLISES / DADOS ---------------------------- */
function agregarPorBloco(estado) {
  const map = {};
  (estado.sessoes || []).forEach((s) => {
    if (!s.blocoId) return;
    const m = (map[s.blocoId] ||= { questoes: 0, acertos: 0, minutos: 0, hist: [] });
    m.questoes += s.questoes || 0;
    m.acertos += s.acertos || 0;
    m.minutos += s.minutos || 0;
    if (s.questoes) m.hist.push({ data: s.data, pct: Math.round((s.acertos / s.questoes) * 100) });
  });
  Object.values(map).forEach((m) => {
    m.pct = m.questoes ? Math.round((m.acertos / m.questoes) * 100) : null;
    m.hist.sort((a, b) => a.data.localeCompare(b.data));
    if (m.hist.length >= 2) {
      const meio = Math.floor(m.hist.length / 2);
      const ant = m.hist.slice(0, meio);
      const rec = m.hist.slice(meio);
      const md = (arr) => Math.round(arr.reduce((x, y) => x + y.pct, 0) / arr.length);
      m.delta = md(rec) - md(ant);
    } else m.delta = null;
    m.status = m.pct == null ? "novo" : m.pct >= 80 ? "forte" : m.pct >= 60 ? "atencao" : "critico";
  });
  return map;
}

const STATUS_COR = {
  forte: { cor: T.jade, soft: T.jadeSoft, label: "Forte" },
  atencao: { cor: T.amber, soft: T.amberSoft, label: "Atenção" },
  critico: { cor: T.rose, soft: T.roseSoft, label: "Crítico" },
  novo: { cor: T.ink30, soft: T.lineSoft, label: "Sem dados" },
};

function gerarInsights(estado, agg) {
  const out = [];
  Object.entries(agg).forEach(([id, m]) => {
    const b = BLOCO_BY_ID[id];
    if (!b || m.questoes < 10) return;
    if (m.delta != null && m.delta <= -6) out.push({ tom: "queda", txt: `Você caiu ${Math.abs(m.delta)}% em ${b.nome}.`, acao: "Reinicie o ciclo de revisão deste bloco.", blocoId: id, peso: 100 + Math.abs(m.delta) + (9 - Math.min(8, b.rank)) * 3 });
    else if (m.delta != null && m.delta >= 8) out.push({ tom: "alta", txt: `Seu desempenho em ${b.nome} subiu ${m.delta}%.`, acao: "Mantenha só a revisão espaçada e realoque tempo.", blocoId: id, peso: 40 + m.delta });
    if (m.status === "critico") out.push({ tom: "critico", txt: `${b.nome} está em ${m.pct}% de acerto.`, acao: b.rank <= 8 ? `Ranking ${b.rank}º — é ponto que decide a meta. Prioridade imediata.` : "Entre na próxima revisão dirigida.", blocoId: id, peso: 200 - b.rank * 4 });
    else if (m.status === "atencao") out.push({ tom: "atencao", txt: `${b.nome} está em ${m.pct}%, abaixo do seguro.`, acao: "Recomendamos revisar antes de avançar.", blocoId: id, peso: 90 - b.rank });
  });

  const sims = [...(estado.simulados || [])].sort((a, b) => a.data.localeCompare(b.data));
  if (sims.length >= 2) {
    const [p, u] = [sims[sims.length - 2], sims[sims.length - 1]];
    Object.keys(AREA).forEach((a) => {
      const d = (u.areas?.[a] ?? 0) - (p.areas?.[a] ?? 0);
      if (d <= -3) out.push({ tom: "queda", txt: `${AREA[a].nome} caiu ${Math.abs(d)} acertos entre os dois últimos simulados.`, acao: "Realocar tempo semanal para esta área.", peso: 180 });
      if (d >= 3) out.push({ tom: "alta", txt: `${AREA[a].nome} subiu ${d} acertos no último simulado.`, acao: "Sustente o ritmo, não relaxe a revisão.", peso: 60 });
    });
  }
  if (sims.length >= 1) {
    const u = sims[sims.length - 1];
    Object.keys(AREA).forEach((a) => {
      const gap = AREA[a].meta - (u.areas?.[a] ?? 0);
      if (gap > 0) out.push({ tom: "atencao", txt: `${AREA[a].nome}: faltam ${gap} acertos para a meta de ${AREA[a].meta}.`, acao: "É o gap direto entre você e os 810.", peso: 120 + gap * 2 });
    });
  }
  const atrasadas = (estado.revisoes || []).filter((r) => !r.feita && r.venc < iso(new Date())).length;
  if (atrasadas) out.push({ tom: "critico", txt: `${atrasadas} ${atrasadas === 1 ? "revisão está atrasada" : "revisões estão atrasadas"}.`, acao: "Revisão vem antes de conteúdo novo. Feche hoje.", peso: 300 });

  return out.sort((a, b) => b.peso - a.peso);
}

/* ------------------------------ MOTOR DE SOM ------------------------------ */
/* Tons sintetizados via Web Audio — sem arquivo de áudio, sem CDN.
   iOS exige que o AudioContext seja criado/retomado a partir de um gesto do
   usuário; por isso `desbloquear()` é chamado no primeiro clique da sessão. */
function useSom(ativo) {
  const refCtx = useRef(null);
  const refAtivo = useRef(ativo);
  refAtivo.current = ativo;

  const obterCtx = useCallback(() => {
    if (typeof window === "undefined") return null;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!refCtx.current) refCtx.current = new AC();
    if (refCtx.current.state === "suspended") refCtx.current.resume().catch(() => {});
    return refCtx.current;
  }, []);

  const tocarTons = useCallback((notas) => {
    if (!refAtivo.current) return;
    const ctx = obterCtx();
    if (!ctx) return;
    const agora = ctx.currentTime;
    notas.forEach(([freq, inicio, dur, vol]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, agora + inicio);
      gain.gain.setValueAtTime(0, agora + inicio);
      gain.gain.linearRampToValueAtTime(vol ?? 0.11, agora + inicio + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, agora + inicio + dur);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(agora + inicio); osc.stop(agora + inicio + dur + 0.02);
    });
  }, [obterCtx]);

  return {
    desbloquear: () => obterCtx(),
    tocarDing: () => tocarTons([[880, 0, 0.10], [1318.5, 0.07, 0.16]]),
    tocarSino: () => tocarTons([[659.3, 0, 0.16], [830.6, 0.10, 0.16], [1046.5, 0.20, 0.32]]),
  };
}

function calcStreak(estado, hoje) {
  const dias = new Set();
  (estado.sessoes || []).forEach((s) => dias.add(s.data));
  Object.entries(estado.missoes || {}).forEach(([d, m]) => {
    if (Object.values(m.itens || {}).some(Boolean)) dias.add(d);
  });
  const descanso = new Set(estado.descanso || []);
  let streak = 0;
  let cur = dias.has(hoje) ? hoje : addDays(hoje, -1);
  while (dias.has(cur) || descanso.has(cur)) {
    if (dias.has(cur)) streak++;
    cur = addDays(cur, -1);
    if (streak > 400) break;
  }
  return streak;
}

function calcTotais(estado, hoje) {
  const ses = estado.sessoes || [];
  const questoes = ses.reduce((a, s) => a + (s.questoes || 0), 0);
  const acertos = ses.reduce((a, s) => a + (s.acertos || 0), 0);
  const minutos = ses.reduce((a, s) => a + (s.minutos || 0), 0) + (estado.focoMin || 0);
  const revisoes = (estado.revisoes || []).filter((r) => r.feita).length;
  const diasPerfeitos = Object.entries(estado.missoes || {}).filter(([d, m]) => m.completa).length;
  const blocosFeitos = new Set();
  Object.values(estado.missoes || {}).forEach((m) => (m.blocosConcluidos || []).forEach((b) => blocosFeitos.add(b)));
  /* Dominado por check manual também conta como bloco fechado. */
  Object.entries(estado.progresso || {}).forEach(([id, v]) => { if (v?.estado === "dominado") blocosFeitos.add(id); });
  Object.entries(estado.progresso || {}).forEach(([id, v]) => { if (v?.estado && v.estado !== "dominado") blocosFeitos.delete(id); });
  return {
    questoes, acertos, minutos, horas: +(minutos / 60).toFixed(1),
    precisao: questoes ? Math.round((acertos / questoes) * 100) : 0,
    revisoes, erros: (estado.erros || []).length,
    redacoes: (estado.redacoes || []).length,
    simulados: (estado.simulados || []).length,
    diasPerfeitos, streak: calcStreak(estado, hoje),
    blocosFeitos,
    diasAtivos: new Set([...ses.map((s) => s.data), ...Object.keys(estado.missoes || {}).filter((d) => Object.values(estado.missoes[d].itens || {}).some(Boolean))]).size,
  };
}

function checarConquistas(estado, tot) {
  const novas = [];
  const val = { questoes: tot.questoes, horas: tot.horas, streak: tot.streak, revisoes: tot.revisoes, erros: tot.erros, redacoes: tot.redacoes, simulados: tot.simulados, diasPerfeitos: tot.diasPerfeitos };
  CONQUISTAS.forEach((c) => {
    if (estado.conquistas?.[c.id]) return;
    let ok = false;
    if (c.campo) ok = (val[c.campo] || 0) >= c.alvo;
    else if (c.reino) ok = BLOCOS.filter((b) => b.sig === c.reino).every((b) => tot.blocosFeitos.has(b.id));
    else if (c.fase) ok = SEMANAS.filter((s) => s.fase === c.fase).flatMap((s) => s.blocos).every((b) => tot.blocosFeitos.has(b)) && SEMANAS.filter((s) => s.fase === c.fase).some((s) => s.blocos.length);
    else if (c.id === "todosReinos") ok = tot.blocosFeitos.size >= BLOCOS.length;
    else if (c.id === "red900") ok = (estado.redacoes || []).some((r) => r.nota >= 900);
    else if (c.id === "red1000") ok = (estado.redacoes || []).some((r) => r.nota >= 1000);
    else if (c.id === "meta810") ok = (estado.simulados || []).some((s) => mediaSimulado(s) >= META_GERAL);
    else if (c.id === "metaArea") ok = (estado.simulados || []).some((s) => Object.keys(AREA).some((a) => (s.areas?.[a] ?? 0) >= AREA[a].meta));
    else if (c.id === "semanaPerfeita") ok = tot.streakPerfeito >= 7;
    else if (c.id === "mesPerfeito") ok = tot.streakPerfeito >= 30;
    if (ok) novas.push(c.id);
  });
  return novas;
}

/* ============================ CSS GLOBAL / TEMA =========================== */
const GlobalCSS = () => (
  <style>{`
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap');

*, *::before, *::after { box-sizing: border-box; }
.enem-root {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: ${T.ink};
  background: ${T.paper};
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.011em;
}
.enem-root h1, .enem-root h2, .enem-root h3, .display {
  font-family: 'Bricolage Grotesque', 'Inter', sans-serif;
  letter-spacing: -0.03em;
  font-weight: 700;
}
.mono { font-family: 'JetBrains Mono', ui-monospace, monospace; font-variant-numeric: tabular-nums; }
.enem-root ::-webkit-scrollbar { width: 10px; height: 10px; }
.enem-root ::-webkit-scrollbar-thumb { background: ${T.line}; border-radius: 99px; border: 3px solid ${T.paper}; }
.enem-root ::-webkit-scrollbar-track { background: transparent; }

.card { background: ${T.surface}; border: 1px solid ${T.line}; border-radius: 18px; }
.card-hover { transition: transform .18s cubic-bezier(.2,.8,.3,1), box-shadow .18s ease, border-color .18s ease; }
.card-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 28px -14px rgba(20,26,46,.22); border-color: ${T.ink30}; }

button { font-family: inherit; cursor: pointer; }
button:focus-visible, [tabindex]:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
  outline: 2px solid ${T.primary}; outline-offset: 2px;
}
input, select, textarea { font-family: inherit; color: ${T.ink}; }
input::placeholder, textarea::placeholder { color: ${T.ink30}; }

@keyframes riseIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
@keyframes popIn { 0% { opacity:0; transform: scale(.88); } 60% { transform: scale(1.04); } 100% { opacity:1; transform: scale(1); } }
@keyframes slideL { from { opacity:0; transform: translateX(24px); } to { opacity:1; transform:none; } }
@keyframes fillBar { from { width: 0 !important; } }
@keyframes pulseRing { 0%,100% { box-shadow: 0 0 0 0 rgba(76,66,214,.28); } 50% { box-shadow: 0 0 0 10px rgba(76,66,214,0); } }
@keyframes flameFlick { 0%,100% { transform: scale(1) rotate(-2deg); } 50% { transform: scale(1.09) rotate(2deg); } }
@keyframes sparkle { 0% { opacity:0; transform: scale(.4) rotate(0); } 50% { opacity:1; } 100% { opacity:0; transform: scale(1.5) rotate(90deg); } }
@keyframes xpFloat { 0% { opacity:0; transform: translateY(6px) scale(.9);} 15%{opacity:1;} 80%{opacity:1;} 100% { opacity:0; transform: translateY(-34px) scale(1.05);} }
@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
@keyframes checkPop { 0% { transform: scale(.5); } 55% { transform: scale(1.25); } 100% { transform: scale(1); } }

.anim-rise { animation: riseIn .42s cubic-bezier(.2,.8,.3,1) both; }
.anim-pop { animation: popIn .38s cubic-bezier(.2,.9,.3,1) both; }
.anim-slide { animation: slideL .34s cubic-bezier(.2,.8,.3,1) both; }
.anim-flame { animation: flameFlick 2.1s ease-in-out infinite; transform-origin: 50% 80%; }
.anim-check { animation: checkPop .34s cubic-bezier(.2,.9,.3,1) both; }
.bar-fill { transition: width .7s cubic-bezier(.2,.8,.3,1); }
.xp-float { animation: xpFloat 1.5s ease-out forwards; }
.shimmer { background-image: linear-gradient(100deg, transparent 30%, rgba(255,255,255,.6) 50%, transparent 70%); background-size: 200% 100%; animation: shimmer 2.4s linear infinite; }

.tab-ind { transition: all .28s cubic-bezier(.2,.8,.3,1); }
.strike { text-decoration: line-through; text-decoration-thickness: 1.5px; }
.bubble { transition: all .25s cubic-bezier(.2,.8,.3,1); }
.bubble:hover { transform: scale(1.45); z-index: 5; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .001ms !important; }
}
`}</style>
);

/* ============================== PRIMITIVAS UI ============================= */
const ICONS = {
  book: BookOpen, target: Target, refresh: RefreshCw, alert: AlertTriangle, brain: Brain,
  pen: PenTool, clipboard: ClipboardList, flame: Flame, clock: Clock, star: Star,
  trophy: Trophy, gauge: Gauge, crosshair: Crosshair, shield: Shield, award: Award,
  swords: Swords, compass: Compass, layers: Layers, check: CheckCircle2,
};
const Ico = ({ name, ...p }) => { const C = ICONS[name] || Circle; return <C {...p} />; };

const Card = ({ children, className = "", style, hover, ...rest }) => (
  <div className={`card ${hover ? "card-hover" : ""} ${className}`} style={style} {...rest}>{children}</div>
);

const Eyebrow = ({ children, cor = T.ink50 }) => (
  <div className="mono uppercase" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: cor, fontWeight: 700 }}>{children}</div>
);

const Barra = ({ pct, cor = T.primary, h = 8, track = T.lineSoft, delay = 0 }) => (
  <div style={{ height: h, background: track, borderRadius: 99, overflow: "hidden", width: "100%" }}>
    <div className="bar-fill" style={{
      width: `${Math.max(0, Math.min(100, pct))}%`, height: "100%", background: cor,
      borderRadius: 99, transitionDelay: `${delay}ms`,
    }} />
  </div>
);

const Ring = ({ pct, size = 92, stroke = 9, cor = T.primary, track = T.lineSoft, children }) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={cor} strokeWidth={stroke}
          strokeDasharray={c} strokeDashoffset={c - (c * Math.min(100, Math.max(0, pct))) / 100}
          strokeLinecap="round" style={{ transition: "stroke-dashoffset .9s cubic-bezier(.2,.8,.3,1)" }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
    </div>
  );
};

const Pill = ({ children, cor = T.primary, soft, style }) => (
  <span className="mono inline-flex items-center gap-1" style={{
    background: soft || `${cor}14`, color: cor, borderRadius: 99, padding: "3px 9px",
    fontSize: 10.5, fontWeight: 700, letterSpacing: "0.04em", whiteSpace: "nowrap", ...style,
  }}>{children}</span>
);

const Btn = ({ children, onClick, variant = "primary", size = "md", icon: I, disabled, full, style }) => {
  const base = { borderRadius: 12, fontWeight: 600, border: "1px solid transparent", transition: "all .16s ease", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7, whiteSpace: "nowrap" };
  const sizes = { sm: { padding: "7px 12px", fontSize: 12.5 }, md: { padding: "10px 16px", fontSize: 13.5 }, lg: { padding: "13px 22px", fontSize: 15 } };
  const vs = {
    primary: { background: T.primary, color: "#fff" },
    dark: { background: T.ink, color: "#fff" },
    soft: { background: T.primarySoft, color: T.primaryDeep },
    ghost: { background: "transparent", color: T.ink70, borderColor: T.line },
    danger: { background: T.roseSoft, color: T.rose },
    success: { background: T.jadeSoft, color: T.jade },
  };
  return (
    <button onClick={onClick} disabled={disabled}
      style={{ ...base, ...sizes[size], ...vs[variant], opacity: disabled ? 0.45 : 1, width: full ? "100%" : undefined, ...style }}
      onMouseEnter={(e) => !disabled && (e.currentTarget.style.filter = "brightness(.94)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}>
      {I && <I size={size === "sm" ? 13 : 15} strokeWidth={2.4} />}{children}
    </button>
  );
};

const Field = ({ label, children, hint }) => (
  <label className="block">
    <div style={{ fontSize: 11.5, fontWeight: 600, color: T.ink50, marginBottom: 6 }}>{label}</div>
    {children}
    {hint && <div style={{ fontSize: 11, color: T.ink30, marginTop: 4 }}>{hint}</div>}
  </label>
);
const inputCss = { width: "100%", border: `1px solid ${T.line}`, borderRadius: 11, padding: "10px 12px", fontSize: 14, background: T.surface, outline: "none" };

const Modal = ({ open, onClose, title, sub, children, wide }) => {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: "rgba(20,26,46,.42)", backdropFilter: "blur(3px)" }} onClick={onClose}>
      <div className="anim-pop w-full card" style={{ maxWidth: wide ? 780 : 500, maxHeight: "92vh", overflowY: "auto", borderRadius: 22 }}
        onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 p-5" style={{ borderBottom: `1px solid ${T.lineSoft}`, position: "sticky", top: 0, background: T.surface, zIndex: 2, borderRadius: "22px 22px 0 0" }}>
          <div>
            <h3 style={{ fontSize: 18 }}>{title}</h3>
            {sub && <div style={{ fontSize: 12.5, color: T.ink50, marginTop: 2 }}>{sub}</div>}
          </div>
          <button onClick={onClose} style={{ background: T.lineSoft, borderRadius: 10, padding: 6, border: "none", color: T.ink50 }}><X size={16} /></button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

const Empty = ({ icon: I = Sparkles, titulo, txt, acao }) => (
  <div className="flex flex-col items-center text-center py-12 px-6">
    <div style={{ background: T.primarySoft, borderRadius: 16, padding: 14, marginBottom: 14 }}>
      <I size={24} color={T.primary} strokeWidth={2} />
    </div>
    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 5 }}>{titulo}</div>
    <div style={{ fontSize: 13, color: T.ink50, maxWidth: 380, lineHeight: 1.6 }}>{txt}</div>
    {acao && <div className="mt-4">{acao}</div>}
  </div>
);

const Stat = ({ label, valor, sub, cor = T.ink, icon: I, delay = 0 }) => (
  <Card className="p-4 anim-rise" style={{ animationDelay: `${delay}ms` }}>
    <div className="flex items-center justify-between mb-2">
      <Eyebrow>{label}</Eyebrow>
      {I && <I size={14} color={T.ink30} strokeWidth={2.2} />}
    </div>
    <div className="mono" style={{ fontSize: 25, fontWeight: 700, color: cor, lineHeight: 1 }}>{valor}</div>
    {sub && <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 5 }}>{sub}</div>}
  </Card>
);

/* Assinatura visual: grade de bolhas no formato do cartão-resposta do ENEM */
const BubbleGrid = ({ dias, onPick, hoje }) => {
  const cores = {
    perfeito: T.jade, parcial: T.gold, simulado: T.primary, redacao: "#7C5CD6",
    descanso: T.ink30, vazio: "transparent", futuro: "transparent",
  };
  return (
    <div className="flex flex-wrap" style={{ gap: 5 }}>
      {dias.map((d) => {
        const preenchido = d.tipo !== "vazio" && d.tipo !== "futuro";
        const cor = cores[d.tipo];
        return (
          <button key={d.data} onClick={() => onPick?.(d)} title={`${fmtBR(d.data)} · ${d.label}`}
            className="bubble" aria-label={`${fmtBR(d.data)} ${d.label}`}
            style={{
              width: 15, height: 15, borderRadius: 99, border: `1.5px solid ${preenchido ? cor : d.data === hoje ? T.primary : T.line}`,
              background: preenchido ? cor : d.data === hoje ? T.primarySoft : "transparent",
              padding: 0, cursor: "pointer",
              boxShadow: d.data === hoje ? `0 0 0 3px ${T.primarySoft}` : "none",
            }} />
        );
      })}
    </div>
  );
};

/* ============================== TELA: HOME =============================== */
function TelaHome({ ctx }) {
  const { estado, hoje, tot, nivel, missao, toggleItem, ir, insights, aplicar } = ctx;
  const [editandoMissao, setEditandoMissao] = useState(false);
  const [registrandoAula, setRegistrandoAula] = useState(false);
  const [trocandoBloco, setTrocandoBloco] = useState(false);
  const d1 = diffDays(hoje, ENEM_D1);
  const d2 = diffDays(hoje, ENEM_D2);
  const sem = semanaDe(hoje);
  const h = parse(hoje).getHours ? new Date().getHours() : 9;
  const saud = h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite";
  const nome = estado.nome ? `, ${estado.nome}` : "";

  const feitos = missao.itens.filter((i) => estado.missoes?.[hoje]?.itens?.[i.id]).length;
  const pctMissao = missao.itens.length ? Math.round((feitos / missao.itens.length) * 100) : 0;

  const blocosTotal = BLOCOS.length;
  const blocosOk = tot.blocosFeitos.size;
  const pctGeral = Math.round((blocosOk / blocosTotal) * 100);

  const iniSem = addDays(hoje, -((parse(hoje).getDay() + 6) % 7));
  const semDias = Array.from({ length: 7 }, (_, i) => addDays(iniSem, i));
  const semFeitos = semDias.filter((d) => estado.missoes?.[d]?.completa).length;
  const mesIni = hoje.slice(0, 8) + "01";
  const mesSes = (estado.sessoes || []).filter((s) => s.data >= mesIni);
  const mesMin = mesSes.reduce((a, s) => a + (s.minutos || 0), 0);
  const mesQ = mesSes.reduce((a, s) => a + (s.questoes || 0), 0);

  const ultSim = [...(estado.simulados || [])].sort((a, b) => b.data.localeCompare(a.data))[0];
  const mediaAtual = ultSim ? mediaSimulado(ultSim) : notaPartida(estado);
  const pctMeta = Math.min(100, Math.round((mediaAtual / META_GERAL) * 100));

  const objSemana = useMemo(() => {
    const s = semanaDe(hoje);
    const porReino = {};
    s.blocos.forEach((id) => { const b = BLOCO_BY_ID[id]; if (b) (porReino[b.sig] ||= []).push(b); });
    return porReino;
  }, [hoje]);

  return (
    <div className="space-y-5">
      {/* HERO */}
      <div className="anim-rise" style={{
        background: `linear-gradient(135deg, ${T.ink} 0%, #232C4B 46%, #35306E 100%)`,
        borderRadius: 22, padding: "24px 22px", color: "#fff", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", right: -70, top: -70, width: 240, height: 240, borderRadius: 999, background: "rgba(76,66,214,.30)", filter: "blur(18px)" }} />
        <div style={{ position: "absolute", right: 60, bottom: -100, width: 190, height: 190, borderRadius: 999, background: "rgba(233,150,42,.16)", filter: "blur(22px)" }} />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div style={{ minWidth: 240 }}>
              <Eyebrow cor="rgba(255,255,255,.55)">{fmtLongo(hoje)}</Eyebrow>
              <h1 style={{ fontSize: 27, marginTop: 7, lineHeight: 1.1 }}>{saud}{nome}.</h1>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.72)", marginTop: 7, maxWidth: 430, lineHeight: 1.55 }}>
                {sem.n === 0
                  ? "Semana 0 do macroplano: diagnóstico e montagem de rotina antes do ciclo pesado começar."
                  : sem.fase === 4
                    ? `Semana ${sem.n} · ${FASES[4].nome}. Sem conteúdo novo — o jogo agora é blindar o que já rende ponto.`
                    : `Semana ${sem.n} do macroplano · Fase ${sem.fase}: ${FASES[sem.fase].nome}.`}
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <Pill cor="#fff" soft="rgba(255,255,255,.14)"><Flame size={11} className="anim-flame" />{tot.streak} {tot.streak === 1 ? "dia" : "dias"} seguidos</Pill>
                <Pill cor="#fff" soft="rgba(255,255,255,.14)"><Zap size={11} />{estado.xp.toLocaleString("pt-BR")} XP</Pill>
                <Pill cor="#fff" soft="rgba(255,255,255,.14)"><Star size={11} />Nível {nivel.nivel} · {nivel.titulo}</Pill>
              </div>
            </div>

            {/* Contagem regressiva — os dois domingos */}
            <div className="flex gap-3">
              {[{ l: "Prova dia 1", d: d1, s: "LC · CH · Redação", data: ENEM_D1 }, { l: "Prova dia 2", d: d2, s: "CN · MAT", data: ENEM_D2 }].map((x, i) => (
                <div key={x.l} className="anim-pop" style={{
                  background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.16)",
                  borderRadius: 16, padding: "14px 16px", minWidth: 118, animationDelay: `${120 + i * 90}ms`,
                }}>
                  <div className="mono uppercase" style={{ fontSize: 9.5, letterSpacing: ".12em", color: "rgba(255,255,255,.6)", fontWeight: 700 }}>{x.l}</div>
                  <div className="mono" style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.05, marginTop: 4 }}>{x.d}</div>
                  <div style={{ fontSize: 10.5, color: "rgba(255,255,255,.62)", marginTop: 1 }}>dias · {fmtBR(x.data)}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.45)", marginTop: 5 }}>{x.s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Barra de nível */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2" style={{ fontSize: 11.5, color: "rgba(255,255,255,.66)" }}>
              <span className="mono">NÍVEL {nivel.nivel} · {nivel.titulo.toUpperCase()}</span>
              <span className="mono">{nivel.falta.toLocaleString("pt-BR")} XP para o nível {nivel.nivel + 1}</span>
            </div>
            <div style={{ height: 9, background: "rgba(255,255,255,.14)", borderRadius: 99, overflow: "hidden" }}>
              <div className="bar-fill" style={{ width: `${nivel.pct}%`, height: "100%", background: `linear-gradient(90deg, ${T.gold}, #F6C15A)`, borderRadius: 99 }} />
            </div>
          </div>
        </div>
      </div>

      {/* AGENDA DE HOJE */}
      <CardAgenda ctx={ctx} onEditar={() => setEditandoMissao(true)} onAula={() => setRegistrandoAula(true)} onTrocar={() => setTrocandoBloco(true)} />
      <ModalTrocarBloco aberto={trocandoBloco} onClose={() => setTrocandoBloco(false)} ctx={ctx} />

      <ModalMissaoDia aberto={editandoMissao} onClose={() => setEditandoMissao(false)} ctx={ctx} />
      <ModalAula aberto={registrandoAula} onClose={() => setRegistrandoAula(false)} ctx={ctx} />

      {/* NÚMEROS */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
        <Stat label="Horas estudadas" valor={tot.horas} sub="efetivas, no total" icon={Clock} delay={0} />
        <Stat label="Questões" valor={tot.questoes.toLocaleString("pt-BR")} sub={`${tot.precisao}% de acerto`} icon={Target} cor={T.jade} delay={40} />
        <Stat label="Revisões" valor={tot.revisoes} sub="D+1 / D+7 / D+30" icon={RefreshCw} cor={T.ice} delay={80} />
        <Stat label="Simulados" valor={tot.simulados} sub={ultSim ? `último: ${fmtBR(ultSim.data)}` : "nenhum ainda"} icon={ClipboardList} delay={120} />
        <Stat label="Redações" valor={tot.redacoes} sub={estado.redacoes?.length ? `melhor: ${Math.max(...estado.redacoes.map((r) => r.nota))}` : "meta: perto de 1000"} icon={PenTool} cor={T.gold} delay={160} />
        <Stat label="Erros no caderno" valor={tot.erros} sub="padrões identificáveis" icon={AlertTriangle} cor={T.rose} delay={200} />
      </div>

      {/* PROGRESSOS */}
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="p-5 anim-rise">
          <Eyebrow>Progresso geral do cronograma</Eyebrow>
          <div className="flex items-end gap-3 mt-3 mb-3">
            <div className="mono" style={{ fontSize: 34, fontWeight: 700, lineHeight: 1 }}>{blocosOk}</div>
            <div style={{ fontSize: 13, color: T.ink50, paddingBottom: 4 }}>de {blocosTotal} blocos da base</div>
          </div>
          <Barra pct={pctGeral} cor={T.primary} h={10} />
          <div className="flex justify-between mt-2" style={{ fontSize: 11.5, color: T.ink50 }}>
            <span>{pctGeral}% concluído</span><span>{blocosTotal - blocosOk} restantes</span>
          </div>
          <div className="mt-4 pt-4 space-y-2.5" style={{ borderTop: `1px solid ${T.lineSoft}` }}>
            {Object.entries(REINOS).map(([sig, r]) => {
              const feitosR = BLOCOS.filter((b) => b.sig === sig && tot.blocosFeitos.has(b.id)).length;
              return (
                <div key={sig} className="flex items-center gap-2.5">
                  <div style={{ width: 7, height: 7, borderRadius: 99, background: r.cor, flexShrink: 0 }} />
                  <div style={{ fontSize: 12, width: 74, flexShrink: 0, color: T.ink70 }}>{r.nome}</div>
                  <div className="flex-1"><Barra pct={(feitosR / r.total) * 100} cor={r.cor} h={5} /></div>
                  <div className="mono" style={{ fontSize: 11, color: T.ink50, width: 40, textAlign: "right" }}>{feitosR}/{r.total}</div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-5 anim-rise" style={{ animationDelay: "60ms" }}>
          <Eyebrow>Esta semana</Eyebrow>
          <div className="flex items-end gap-3 mt-3 mb-4">
            <div className="mono" style={{ fontSize: 34, fontWeight: 700, lineHeight: 1 }}>{semFeitos}</div>
            <div style={{ fontSize: 13, color: T.ink50, paddingBottom: 4 }}>de 7 dias com missão fechada</div>
          </div>
          <div className="flex gap-1.5 mb-4">
            {semDias.map((d) => {
              const m = estado.missoes?.[d];
              const ativo = m && Object.values(m.itens || {}).some(Boolean);
              const dow = parse(d).getDay();
              return (
                <div key={d} className="flex-1 text-center">
                  <div style={{ fontSize: 10, color: T.ink30, marginBottom: 4 }}>{DIAS_CURTO[dow]}</div>
                  <div style={{
                    height: 34, borderRadius: 9,
                    background: m?.completa ? T.jade : ativo ? T.jadeSoft : d === hoje ? T.primarySoft : T.lineSoft,
                    border: d === hoje ? `1.5px solid ${T.primary}` : "1px solid transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {m?.completa && <Check size={14} color="#fff" strokeWidth={3} />}
                  </div>
                </div>
              );
            })}
          </div>
          <Eyebrow>Objetivos da semana</Eyebrow>
          <div className="mt-2.5 space-y-1.5" style={{ maxHeight: 168, overflowY: "auto" }}>
            {Object.keys(objSemana).length === 0 && (
              <div style={{ fontSize: 12.5, color: T.ink50, lineHeight: 1.6 }}>{sem.nota || "Semana de revisão: sem blocos novos."}</div>
            )}
            {Object.entries(objSemana).map(([sig, bs]) => (
              <div key={sig} className="flex items-start gap-2" style={{ fontSize: 12 }}>
                <Pill cor={REINOS[sig].cor}>{sig}</Pill>
                <span style={{ color: T.ink70, lineHeight: 1.45 }}>{bs.map((b) => b.nome).join(" · ")}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5 anim-rise" style={{ animationDelay: "120ms" }}>
          <Eyebrow>Termômetro para a meta</Eyebrow>
          <div className="flex items-center gap-5 mt-4">
            <Ring pct={pctMeta} size={104} stroke={10} cor={mediaAtual >= META_GERAL ? T.jade : T.primary}>
              <div className="mono" style={{ fontSize: 23, fontWeight: 700 }}>{mediaAtual.toLocaleString("pt-BR")}</div>
              <div style={{ fontSize: 9.5, color: T.ink50 }}>de {META_GERAL}</div>
            </Ring>
            <div className="flex-1">
              <div style={{ fontSize: 12.5, color: T.ink70, lineHeight: 1.55 }}>
                {ultSim ? `Média estimada do simulado de ${fmtBR(ultSim.data)}.` : `Nota de partida: ${notaPartida(estado).toLocaleString("pt-BR")}. Sem simulado registrado ainda.`}
              </div>
              <div className="mono mt-3" style={{ fontSize: 12, color: mediaAtual >= META_GERAL ? T.jade : T.rose, fontWeight: 700 }}>
                {mediaAtual >= META_GERAL ? "Meta atingida no último registro" : `faltam ~${Math.round(META_GERAL - mediaAtual)} pontos`}
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 space-y-2" style={{ borderTop: `1px solid ${T.lineSoft}` }}>
            {Object.entries(AREA).map(([k, a]) => {
              const ac = ultSim?.areas?.[k];
              return (
                <div key={k} className="flex items-center gap-2.5">
                  <div style={{ fontSize: 12, width: 34, color: T.ink70, fontWeight: 600 }}>{a.curto}</div>
                  <div className="flex-1"><Barra pct={((ac ?? 0) / a.meta) * 100} cor={a.cor} h={5} /></div>
                  <div className="mono" style={{ fontSize: 11, color: T.ink50, width: 48, textAlign: "right" }}>{ac ?? "—"}/{a.meta}</div>
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: 10.5, color: T.ink30, marginTop: 12, lineHeight: 1.5 }}>
            Estimativa de acerto bruto. Não é nota TRI real — a TRI depende de todos os candidatos do ano.
          </div>
        </Card>
      </div>

      {/* INSIGHTS RÁPIDOS */}
      {insights.length > 0 && (
        <Card className="p-5 anim-rise">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Sparkles size={15} color={T.primary} strokeWidth={2.4} />
              <h3 style={{ fontSize: 15 }}>O que os seus dados estão dizendo</h3>
            </div>
            <Btn size="sm" variant="ghost" onClick={() => ir("desempenho")}>Ver mapa completo</Btn>
          </div>
          <div className="space-y-2">
            {insights.slice(0, 4).map((ins, i) => <InsightRow key={i} ins={ins} />)}
          </div>
        </Card>
      )}
    </div>
  );
}

/* ============================ AGENDA DE HOJE ============================== */
const SELO_CLASSIF = {
  antecipado: { cor: T.ice, soft: "#E4F2FA", txt: "antecipado" },
  extra: { cor: "#8A6512", soft: T.goldSoft, txt: "fora da base" },
};

function ItemAgenda({ item, i, ctx }) {
  const { toggleAgenda, adiarItem, removerItem } = ctx;
  const cfg = TIPOS_MISSAO[item.tipo] || TIPOS_MISSAO.bloco;
  const feito = item.status === "feito";
  const b = item.blocoId ? BLOCO_BY_ID[item.blocoId] : null;
  const selo = SELO_CLASSIF[item.classificacao];
  const teimoso = (item.vezesAdiado || 0) >= 3;

  return (
    <div className="flex items-center gap-3 px-5 py-3.5 anim-slide" style={{
      borderBottom: `1px solid ${T.lineSoft}`, animationDelay: `${i * 35}ms`,
      background: feito ? T.paper : teimoso ? "#FFF8F9" : "transparent", transition: "background .25s ease",
    }}>
      <button onClick={() => toggleAgenda(item)} aria-pressed={feito} style={{
        width: 26, height: 26, borderRadius: 9, flexShrink: 0, border: feito ? "none" : `2px solid ${T.line}`,
        background: feito ? cfg.cor : "transparent", display: "flex", alignItems: "center", justifyContent: "center",
      }}>{feito && <Check size={15} color="#fff" strokeWidth={3.2} className="anim-check" />}</button>

      <div style={{ background: feito ? T.lineSoft : `${cfg.cor}14`, borderRadius: 9, padding: 7, flexShrink: 0 }}>
        <Ico name={cfg.icone} size={14} color={feito ? T.ink30 : cfg.cor} strokeWidth={2.3} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={feito ? "strike" : ""} style={{ fontSize: 13.5, fontWeight: 600, color: feito ? T.ink30 : T.ink, lineHeight: 1.35 }}>{item.titulo}</span>
          {b && <Pill cor={b.rank <= 8 ? T.rose : T.ink50}>{b.rank}º</Pill>}
          {selo && <Pill cor={selo.cor} soft={selo.soft}>{selo.txt}</Pill>}
          {item.erros > 0 && <Pill cor={T.rose} soft={T.roseSoft}><AlertTriangle size={9} />{item.erros} erro{item.erros > 1 ? "s" : ""}</Pill>}
          {teimoso && <Pill cor={T.rose}>adiado {item.vezesAdiado}x</Pill>}
        </div>
        <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 1 }}>{item.sub}</div>
      </div>

      <div className="flex items-center gap-1.5" style={{ flexShrink: 0 }}>
        <Pill cor={feito ? T.ink30 : cfg.cor}>+{item.xp}</Pill>
        {!feito && (
          <button onClick={() => adiarItem(item)} title="Adiar para amanhã" style={{ background: "none", border: "none", color: T.ink30, padding: 3 }}>
            <ArrowRightLeft size={13} />
          </button>
        )}
        <button onClick={() => removerItem(item)} title="Remover do dia" style={{ background: "none", border: "none", color: T.ink30, padding: 3 }}>
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );
}

/* Fila do Trilho B: escolher outro bloco sem sair da execução do dia. */
function ModalTrocarBloco({ aberto, onClose, ctx }) {
  const { estado, trocarBlocoDoDia, priorizarBloco } = ctx;
  const [busca, setBusca] = useState("");
  useEffect(() => { if (aberto) setBusca(""); }, [aberto]);

  const fila = useMemo(() => {
    const f = filaMacroplano(estado).slice(0, 40);
    if (!busca.trim()) return f;
    const alvos = new Set(casarBloco(busca, 12).map((b) => b.id));
    return f.filter((x) => alvos.has(x.bloco.id));
  }, [estado, busca, aberto]);

  return (
    <Modal open={aberto} onClose={onClose} wide title="Trocar o bloco de hoje"
      sub="A fila já vem ordenada: erro ALTA no caderno, depois top-8 intocado, depois ranking.">
      <div className="space-y-3">
        <input value={busca} onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar assunto…" style={inputCss} />
        <div className="space-y-1.5" style={{ maxHeight: 400, overflowY: "auto" }}>
          {fila.length === 0 && <div style={{ fontSize: 12.5, color: T.ink50, textAlign: "center", padding: 20 }}>Nada encontrado.</div>}
          {fila.map(({ bloco: b, manual, alta }) => {
            const est = progressoDe(estado, b.id);
            const u = ESTADO_UI[est.estado];
            return (
              <div key={b.id} className="flex items-center gap-2.5 p-3" style={{ background: T.paper, borderRadius: 12 }}>
                <div style={{ width: 4, height: 30, borderRadius: 99, background: b.cor, flexShrink: 0 }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="mono" style={{ fontSize: 10, color: b.cor, fontWeight: 700 }}>{b.id}</span>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{b.nome}</span>
                    <Pill cor={b.rank <= 8 ? T.rose : T.ink50}>{b.rank}º</Pill>
                    <Pill cor={u.cor} soft={u.soft}>{u.t}</Pill>
                    {manual && <Pill cor={T.primary}>na fila</Pill>}
                    {alta && <Pill cor={T.rose} soft={T.roseSoft}>ALTA</Pill>}
                  </div>
                  <div style={{ fontSize: 11, color: T.ink50, marginTop: 2 }}>{REINOS[b.sig].nome}</div>
                </div>
                <button onClick={() => priorizarBloco(b.id)} title="Fixar no topo da fila"
                  style={{ background: T.lineSoft, border: "none", borderRadius: 9, padding: 6, color: T.ink50 }}>
                  <ArrowUp size={13} />
                </button>
                <Btn size="sm" onClick={() => { trocarBlocoDoDia(b.id); onClose(); }}>Usar hoje</Btn>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}

/* Contador do Trilho A com o gate de progressão de volume. */
function ContadorTrilhoA({ ctx }) {
  const { estado, hoje, contarQuestoes, definirQuestoes, subirVolume } = ctx;
  const d = estado.questoesDia?.[hoje] || { feitas: 0, corrigidas: 0 };
  const meta = metaQuestoesSemana(estado, hoje);
  const gate = useMemo(() => avaliarGate(estado, hoje), [estado, hoje]);
  const [verGate, setVerGate] = useState(false);
  const pct = meta ? Math.min(100, (d.feitas / meta) * 100) : 0;

  return (
    <div className="px-5 py-4" style={{ borderBottom: `1px solid ${T.lineSoft}`, background: "#F4FBF8" }}>
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <Target size={14} color={T.jade} strokeWidth={2.4} />
          <Eyebrow cor={T.jade}>Trilho A · radar</Eyebrow>
        </div>
        <button onClick={() => setVerGate(!verGate)} className="mono" style={{
          background: gate.liberado ? T.jade : "transparent", color: gate.liberado ? "#fff" : T.ink50,
          border: gate.liberado ? "none" : `1px solid ${T.line}`, borderRadius: 99, padding: "3px 9px", fontSize: 10, fontWeight: 700,
        }}>{gate.noTeto ? "NO TETO · 45" : gate.liberado ? `LIBERADO → ${gate.proximo}` : `META ${meta}`}</button>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={() => contarQuestoes(-1)} style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: 10, width: 34, height: 34, fontSize: 17, color: T.ink50 }}>−</button>
        <input type="number" value={d.feitas} onChange={(e) => definirQuestoes(e.target.value)} className="mono"
          style={{ ...inputCss, width: 74, textAlign: "center", fontSize: 17, fontWeight: 700, padding: "6px 4px" }} />
        <button onClick={() => contarQuestoes(1)} style={{ background: T.jade, border: "none", borderRadius: 10, width: 34, height: 34, fontSize: 17, color: "#fff" }}>+</button>
        <div className="flex-1">
          <Barra pct={pct} cor={T.jade} h={7} />
          <div className="mono flex justify-between" style={{ fontSize: 10.5, color: T.ink50, marginTop: 4 }}>
            <span>{d.feitas} de {meta} questões</span>
            <span>{d.corrigidas} corrigidas</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2.5">
        <span style={{ fontSize: 11.5, color: T.ink50 }}>Corrigidas:</span>
        <button onClick={() => contarQuestoes(-1, "corrigidas")} style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: 8, width: 26, height: 26, color: T.ink50 }}>−</button>
        <span className="mono" style={{ fontSize: 13, fontWeight: 700, minWidth: 26, textAlign: "center" }}>{d.corrigidas}</span>
        <button onClick={() => contarQuestoes(1, "corrigidas")} style={{ background: T.ink, border: "none", borderRadius: 8, width: 26, height: 26, color: "#fff" }}>+</button>
        <button onClick={() => definirQuestoes(d.feitas, "corrigidas")} className="mono" style={{
          background: T.lineSoft, border: "none", borderRadius: 8, padding: "5px 9px", fontSize: 10, fontWeight: 700, color: T.ink50, marginLeft: "auto",
        }}>TODAS</button>
      </div>

      {verGate && (
        <div className="mt-3 p-3" style={{ background: T.surface, borderRadius: 12, border: `1px solid ${T.line}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8 }}>
            {gate.noTeto ? "Você está no volume máximo (45/dia)." : gate.liberado ? `Pode subir para ${gate.proximo} questões/dia` : "Volume mantido esta semana"}
          </div>
          {gate.criterios.map((c) => (
            <div key={c.t} className="flex items-start gap-2 py-1.5">
              {c.ok ? <CheckCircle2 size={13} color={T.jade} strokeWidth={2.5} style={{ marginTop: 1, flexShrink: 0 }} />
                    : <X size={13} color={T.rose} strokeWidth={2.5} style={{ marginTop: 1, flexShrink: 0 }} />}
              <div>
                <div style={{ fontSize: 12, color: c.ok ? T.ink70 : T.ink }}>{c.t}</div>
                <div style={{ fontSize: 10.5, color: T.ink30 }}>{c.d}</div>
              </div>
            </div>
          ))}
          {gate.liberado && <div className="mt-2"><Btn size="sm" variant="success" full onClick={subirVolume}>Subir para {gate.proximo}/dia</Btn></div>}
        </div>
      )}
    </div>
  );
}

function CardAgenda({ ctx, onEditar, onAula, onTrocar }) {
  const { agendaHoje, hoje, ir, abrir } = ctx;
  const sem = semanaDe(hoje);
  const feitos = agendaHoje.filter((i) => i.status === "feito").length;
  const pct = agendaHoje.length ? Math.round((feitos / agendaHoje.length) * 100) : 0;

  const secoes = [
    { k: "cursinho", t: "Aula de hoje", itens: agendaHoje.filter((i) => i.origem === "cursinho") },
    { k: "macroplano", t: "Macroplano", itens: agendaHoje.filter((i) => i.origem === "macroplano" || i.origem === "avulso") },
    { k: "revisao", t: "Revisões", itens: agendaHoje.filter((i) => i.origem === "revisao") },
  ].filter((sec) => sec.itens.length);


  return (
    <Card className="overflow-hidden anim-rise" style={{ animationDelay: "60ms" }}>
      <div className="flex flex-wrap items-center justify-between gap-3 p-5" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
        <div className="flex items-center gap-3">
          <div style={{ background: T.primarySoft, borderRadius: 12, padding: 9 }}><Crosshair size={17} color={T.primary} strokeWidth={2.3} /></div>
          <div>
            <h2 style={{ fontSize: 17 }}>Agenda de hoje</h2>
            <div style={{ fontSize: 12, color: T.ink50 }}>Semana {sem.n} · ordenada por incidência</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onEditar} title="Editar a agenda de hoje" style={{ background: T.lineSoft, border: "none", borderRadius: 10, padding: 8, color: T.ink50 }}>
            <PenTool size={14} strokeWidth={2.2} />
          </button>
          <div className="text-right">
            <div className="mono" style={{ fontSize: 20, fontWeight: 700, color: pct === 100 ? T.jade : T.ink }}>{feitos}/{agendaHoje.length}</div>
            <div style={{ fontSize: 10.5, color: T.ink50 }}>concluídas</div>
          </div>
          <Ring pct={pct} size={52} stroke={6} cor={pct === 100 ? T.jade : T.primary}>
            {pct === 100 ? <Check size={18} color={T.jade} strokeWidth={3} className="anim-check" />
              : <span className="mono" style={{ fontSize: 12, fontWeight: 700 }}>{pct}</span>}
          </Ring>
        </div>
      </div>

      <ContadorTrilhoA ctx={ctx} />

      {agendaHoje.length === 0 ? (
        <Empty icon={ListChecks} titulo="Agenda vazia" txt="Registre a aula do cursinho ou adicione um item para começar o dia."
          acao={<Btn size="sm" icon={Plus} onClick={onAula}>Registrar aula de hoje</Btn>} />
      ) : secoes.map((sec) => (
        <div key={sec.k}>
          <div className="px-5 pt-3.5 pb-1.5 flex items-center justify-between">
            <Eyebrow>{sec.t}</Eyebrow>
            <span className="mono" style={{ fontSize: 10, color: T.ink30 }}>{sec.itens.length}</span>
          </div>
          {sec.itens.map((it, i) => <ItemAgenda key={it.id} item={it} i={i} ctx={ctx} />)}
        </div>
      ))}

      <div className="p-4 flex flex-wrap gap-2" style={{ background: T.paper, borderTop: `1px solid ${T.lineSoft}` }}>
        <Btn size="sm" variant="primary" icon={ListChecks} onClick={onAula}>Registrar aula de hoje</Btn>
        <Btn size="sm" variant="ghost" icon={ArrowRightLeft} onClick={onTrocar}>Trocar bloco</Btn>
        <Btn size="sm" variant="dark" icon={Timer} onClick={() => ir("foco")}>Modo foco</Btn>
        <Btn size="sm" variant="ghost" icon={Plus} onClick={() => abrir("sessao")}>Registrar estudo</Btn>
        <Btn size="sm" variant="ghost" icon={AlertTriangle} onClick={() => abrir("erro")}>Registrar erro</Btn>
      </div>
    </Card>
  );
}

/* -------------------- MODAL: REGISTRO DE AULA EM LOTE -------------------- */
function LinhaAula({ linha, onMudar, onRemover, podeRemover }) {
  const [sugestoes, setSugestoes] = useState([]);
  const [aberto, setAberto] = useState(false);

  const digitar = (v) => {
    onMudar({ ...linha, titulo: v, blocoId: null });
    const s = casarBloco(v);
    setSugestoes(s);
    setAberto(s.length > 0);
  };

  const escolher = (b) => {
    onMudar({ ...linha, titulo: linha.titulo, blocoId: b.id });
    setAberto(false);
  };

  const b = linha.blocoId ? BLOCO_BY_ID[linha.blocoId] : null;

  return (
    <div style={{ position: "relative" }}>
      <div className="flex items-center gap-2">
        <input value={linha.titulo} onChange={(e) => digitar(e.target.value)}
          onFocus={() => setAberto(sugestoes.length > 0 && !linha.blocoId)}
          placeholder="Ex.: sistema cardiovascular" style={inputCss} />
        {podeRemover && (
          <button onClick={onRemover} style={{ background: "none", border: "none", color: T.ink30, padding: 5 }}><X size={14} /></button>
        )}
      </div>

      <div className="mt-1.5" style={{ minHeight: 18 }}>
        {b ? (
          <div className="flex items-center gap-1.5">
            <Pill cor={b.cor}>{b.sig} {b.n}</Pill>
            <span style={{ fontSize: 11.5, color: T.ink70 }}>{b.nome}</span>
            <Pill cor={b.rank <= 8 ? T.rose : T.ink50}>ranking {b.rank}º</Pill>
          </div>
        ) : linha.titulo.trim() ? (
          <span style={{ fontSize: 11, color: T.ink30 }}>Sem bloco vinculado — entra como extra do cursinho</span>
        ) : null}
      </div>

      {aberto && sugestoes.length > 0 && (
        <div className="card" style={{ position: "absolute", top: 44, left: 0, right: 0, zIndex: 30, maxHeight: 220, overflowY: "auto", boxShadow: "0 12px 32px -14px rgba(20,26,46,.3)" }}>
          {sugestoes.map((sb) => (
            <button key={sb.id} onClick={() => escolher(sb)} className="w-full flex items-center gap-2 px-3 py-2.5 text-left"
              style={{ background: "transparent", border: "none", borderBottom: `1px solid ${T.lineSoft}` }}>
              <Pill cor={sb.cor}>{sb.sig} {sb.n}</Pill>
              <span className="flex-1 min-w-0" style={{ fontSize: 12.5, fontWeight: 600 }}>{sb.nome}</span>
              <Pill cor={sb.rank <= 8 ? T.rose : T.ink50}>{sb.rank}º</Pill>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ModalAula({ aberto, onClose, ctx }) {
  const { registrarAula } = ctx;
  const vazia = () => ({ k: Math.random().toString(36).slice(2), titulo: "", blocoId: null });
  const [linhas, setLinhas] = useState([vazia(), vazia(), vazia()]);

  useEffect(() => { if (aberto) setLinhas([vazia(), vazia(), vazia()]); }, [aberto]);

  const salvar = () => { registrarAula(linhas); onClose(); };
  const preenchidas = linhas.filter((l) => l.titulo.trim()).length;

  return (
    <Modal open={aberto} onClose={onClose} wide title="Aula de hoje"
      sub="Registre os assuntos da aula. Ao casar com a base, o assunto herda o ranking e entra na revisão espaçada.">
      <div className="space-y-4">
        {linhas.map((l, i) => (
          <LinhaAula key={l.k} linha={l}
            onMudar={(nova) => setLinhas((ls) => ls.map((x, j) => (j === i ? { ...nova, k: x.k } : x)))}
            onRemover={() => setLinhas((ls) => ls.filter((_, j) => j !== i))}
            podeRemover={linhas.length > 1} />
        ))}

        <Btn size="sm" variant="ghost" icon={Plus} onClick={() => setLinhas((ls) => [...ls, vazia()])}>Mais uma linha</Btn>

        <div className="flex justify-end gap-2 pt-2" style={{ borderTop: `1px solid ${T.lineSoft}` }}>
          <Btn variant="ghost" onClick={onClose}>Cancelar</Btn>
          <Btn disabled={!preenchidas} onClick={salvar}>Registrar {preenchidas || ""} na agenda</Btn>
        </div>
      </div>
    </Modal>
  );
}

function ItemMissao({ item, i, feito, onToggle }) {
  const cfg = TIPOS_MISSAO[item.tipo];
  const [flash, setFlash] = useState(false);
  const click = () => { if (!feito) { setFlash(true); setTimeout(() => setFlash(false), 1500); } onToggle(); };
  return (
    <div className="flex items-center gap-3 px-5 py-3.5 anim-slide" style={{
      borderBottom: `1px solid ${T.lineSoft}`, animationDelay: `${i * 45}ms`, position: "relative",
      background: feito ? T.paper : "transparent", transition: "background .25s ease",
    }}>
      <button onClick={click} aria-pressed={feito} style={{
        width: 26, height: 26, borderRadius: 9, flexShrink: 0, border: feito ? "none" : `2px solid ${T.line}`,
        background: feito ? cfg.cor : "transparent", display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all .2s ease",
      }}>
        {feito && <Check size={15} color="#fff" strokeWidth={3.2} className="anim-check" />}
      </button>
      <div style={{ background: feito ? T.lineSoft : `${cfg.cor}14`, borderRadius: 9, padding: 7, flexShrink: 0 }}>
        <Ico name={cfg.icone} size={14} color={feito ? T.ink30 : cfg.cor} strokeWidth={2.3} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className={feito ? "strike" : ""} style={{ fontSize: 13.5, fontWeight: 600, color: feito ? T.ink30 : T.ink, lineHeight: 1.35 }}>{item.titulo}</div>
          {item.origem === "manual" && <Pill cor={T.ice} soft="#E4F2FA">seu item</Pill>}
          {item.origem === "importado" && <Pill cor={T.ice} soft="#E4F2FA"><ArrowRightLeft size={9} />{item.deData ? fmtBR(item.deData) : "importado"}</Pill>}
        </div>
        <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 1 }}>{item.sub}</div>
      </div>
      <Pill cor={feito ? T.ink30 : cfg.cor}>+{item.xp} XP</Pill>
      {flash && <div className="xp-float mono" style={{ position: "absolute", right: 18, top: 8, color: cfg.cor, fontWeight: 700, fontSize: 13, pointerEvents: "none" }}>+{item.xp} XP</div>}
    </div>
  );
}

const InsightRow = ({ ins }) => {
  const map = { queda: { c: T.rose, s: T.roseSoft, I: ArrowDown }, critico: { c: T.rose, s: T.roseSoft, I: AlertTriangle }, atencao: { c: T.amber, s: T.amberSoft, I: Info }, alta: { c: T.jade, s: T.jadeSoft, I: ArrowUp } };
  const m = map[ins.tom] || map.atencao;
  return (
    <div className="flex items-start gap-3 p-3" style={{ background: m.s, borderRadius: 12 }}>
      <m.I size={14} color={m.c} strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{ins.txt}</div>
        <div style={{ fontSize: 12, color: T.ink50, marginTop: 2 }}>{ins.acao}</div>
      </div>
    </div>
  );
};

/* ========================= TELA: MAPA DOS REINOS ========================= */
function TelaReinos({ ctx }) {
  const { tot, hoje, estado, agg } = ctx;
  const [sel, setSel] = useState(null);
  const [estudar, setEstudar] = useState(null); // id do bloco aberto para resumo/flashcards
  const [modo, setModo] = useState("reinos");
  const semAtual = semanaDe(hoje);

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Mapa dos reinos" sub="Os 169 blocos da base oficial, divididos nos sete reinos do cronograma. Conquistar um reino é concluir todos os blocos dele."
        acao={
          <div className="flex gap-1 p-1" style={{ background: T.paperDeep, borderRadius: 12 }}>
            {[["reinos", "Por reino"], ["semanas", "Por semana"]].map(([k, l]) => (
              <button key={k} onClick={() => setModo(k)} className="tab-ind" style={{
                padding: "7px 13px", borderRadius: 9, border: "none", fontSize: 12.5, fontWeight: 600,
                background: modo === k ? T.surface : "transparent", color: modo === k ? T.ink : T.ink50,
                boxShadow: modo === k ? "0 1px 3px rgba(20,26,46,.1)" : "none",
              }}>{l}</button>
            ))}
          </div>
        } />

      {modo === "reinos" ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {Object.entries(REINOS).map(([sig, r], i) => {
            const bs = BLOCOS.filter((b) => b.sig === sig);
            const feitos = bs.filter((b) => tot.blocosFeitos.has(b.id)).length;
            const pct = Math.round((feitos / r.total) * 100);
            const conquistado = feitos === r.total;
            return (
              <Card key={sig} hover className="p-5 anim-rise" style={{ animationDelay: `${i * 50}ms`, cursor: "pointer", borderColor: conquistado ? r.cor : T.line }}
                onClick={() => setSel(sig)}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Eyebrow cor={r.cor}>{r.nome}</Eyebrow>
                    <h3 style={{ fontSize: 17, marginTop: 4 }}>{r.reino}</h3>
                    <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 2 }}>{AREA[r.area].nome} · meta {AREA[r.area].meta} acertos</div>
                  </div>
                  <Ring pct={pct} size={54} stroke={6} cor={r.cor}>
                    {conquistado ? <Trophy size={17} color={r.cor} /> : <span className="mono" style={{ fontSize: 12, fontWeight: 700 }}>{pct}</span>}
                  </Ring>
                </div>
                <Barra pct={pct} cor={r.cor} h={7} />
                <div className="flex items-center justify-between mt-2.5">
                  <div className="mono" style={{ fontSize: 11.5, color: T.ink50 }}>{feitos} de {r.total} blocos</div>
                  {conquistado ? <Pill cor={r.cor}><Trophy size={10} />Reino conquistado</Pill>
                    : <div style={{ fontSize: 11.5, color: T.ink30 }}>{r.total - feitos} restantes</div>}
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card className="overflow-hidden">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
              <thead>
                <tr style={{ background: T.paper }}>
                  {["Semana", "Período", "Fase", "Blocos que entram", "Progresso"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "11px 14px", fontSize: 10.5, letterSpacing: ".1em", color: T.ink50, fontWeight: 700, textTransform: "uppercase", borderBottom: `1px solid ${T.line}` }} className="mono">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SEMANAS.map((s) => {
                  const feitos = s.blocos.filter((b) => tot.blocosFeitos.has(b)).length;
                  const pct = s.blocos.length ? Math.round((feitos / s.blocos.length) * 100) : 0;
                  const atual = s.n === semAtual.n;
                  return (
                    <tr key={s.n} style={{ background: atual ? T.primarySoft : "transparent", borderBottom: `1px solid ${T.lineSoft}` }}>
                      <td style={{ padding: "12px 14px", verticalAlign: "top" }}>
                        <div className="mono" style={{ fontWeight: 700, fontSize: 14 }}>{s.n === 0 ? "S0" : `S${s.n}`}</div>
                        {atual && <Pill cor={T.primary} style={{ marginTop: 4 }}>agora</Pill>}
                      </td>
                      <td className="mono" style={{ padding: "12px 14px", fontSize: 12, color: T.ink50, verticalAlign: "top", whiteSpace: "nowrap" }}>{fmtBR(s.ini)}–{fmtBR(s.fim)}</td>
                      <td style={{ padding: "12px 14px", verticalAlign: "top" }}><Pill cor={FASES[s.fase].cor}>Fase {s.fase}</Pill></td>
                      <td style={{ padding: "12px 14px", fontSize: 12.5, verticalAlign: "top", lineHeight: 1.55 }}>
                        {s.blocos.length ? (
                          <div className="flex flex-wrap gap-1">
                            {s.blocos.map((id) => {
                              const b = BLOCO_BY_ID[id];
                              const ok = tot.blocosFeitos.has(id);
                              return <span key={id} title={`${b.nome} · ranking ${b.rank}º`} className="mono" style={{
                                fontSize: 10.5, padding: "2.5px 7px", borderRadius: 7, fontWeight: 700,
                                background: ok ? `${b.cor}22` : T.lineSoft, color: ok ? b.cor : T.ink50,
                                textDecoration: ok ? "none" : "none", border: `1px solid ${ok ? `${b.cor}44` : "transparent"}`,
                              }}>{id}</span>;
                            })}
                          </div>
                        ) : <span style={{ color: T.ink50 }}>{s.nota}</span>}
                      </td>
                      <td style={{ padding: "12px 14px", width: 130, verticalAlign: "top" }}>
                        {s.blocos.length ? (<><Barra pct={pct} cor={FASES[s.fase].cor} h={6} /><div className="mono" style={{ fontSize: 10.5, color: T.ink50, marginTop: 4 }}>{feitos}/{s.blocos.length}</div></>) : <span style={{ fontSize: 11, color: T.ink30 }}>revisão</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <Modal open={!!sel} onClose={() => setSel(null)} wide
        title={sel ? REINOS[sel].reino : ""} sub={sel ? `${REINOS[sel].nome} · ${REINOS[sel].total} blocos · ${AREA[REINOS[sel].area].nome}` : ""}>
        {sel && (
          <div className="space-y-2">
            {BLOCOS.filter((b) => b.sig === sel).sort((a, b) => a.rank - b.rank).map((b) => {
              const ok = tot.blocosFeitos.has(b.id);
              const m = agg[b.id];
              const st = STATUS_COR[m?.status || "novo"];
              return (
                <div key={b.id} className="p-3.5" style={{ background: ok ? T.paper : T.surface, border: `1px solid ${T.lineSoft}`, borderRadius: 13 }}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5 min-w-0">
                      {ok ? <CheckCircle2 size={16} color={REINOS[sel].cor} strokeWidth={2.4} style={{ flexShrink: 0, marginTop: 1 }} />
                        : <Circle size={16} color={T.ink30} strokeWidth={2} style={{ flexShrink: 0, marginTop: 1 }} />}
                      <div className="min-w-0">
                        <div style={{ fontSize: 13.5, fontWeight: 650 }}>{b.sig} {b.n} · {b.nome}</div>
                        <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 3, lineHeight: 1.5 }}>{b.topicos.join(" · ")}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5" style={{ flexShrink: 0 }}>
                      <Pill cor={b.rank <= 8 ? T.rose : T.ink50}>ranking {b.rank}º</Pill>
                      {m?.pct != null && <Pill cor={st.cor} soft={st.soft}>{m.pct}% em {m.questoes}q</Pill>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 pt-3 flex-wrap" style={{ borderTop: `1px solid ${T.lineSoft}` }}>
                    <SeletorEstado blocoId={b.id} ctx={ctx} />
                    {estadoDoBloco(estado, b.id) !== EST.DOMINADO && (
                      <button onClick={(ev) => { ev.stopPropagation(); ctx.priorizarBloco(b.id); }}
                        className="mono inline-flex items-center gap-1" style={{
                          background: (estado.prioridades || []).includes(b.id) ? T.primary : T.lineSoft,
                          color: (estado.prioridades || []).includes(b.id) ? "#fff" : T.ink50,
                          border: "none", borderRadius: 99, padding: "4px 10px", fontSize: 10.5, fontWeight: 700,
                        }}>
                        <ArrowUp size={10} />
                        {(estado.prioridades || []).includes(b.id)
                          ? `NA FILA · ${(estado.prioridades || []).indexOf(b.id) + 1}º`
                          : "PRIORIZAR"}
                      </button>
                    )}
                    {estado.resumos?.[b.id]?.texto && <Pill cor={T.primary}><BookOpen size={9} />resumo</Pill>}
                    {(estado.flashcards || []).filter((f) => f.blocoId === b.id).length > 0 && (
                      <Pill cor="#7C5CD6"><Brain size={9} />{(estado.flashcards || []).filter((f) => f.blocoId === b.id).length} flashcard{(estado.flashcards || []).filter((f) => f.blocoId === b.id).length > 1 ? "s" : ""}</Pill>
                    )}
                    <button onClick={() => setEstudar(b.id)} className="ml-auto" style={{
                      background: T.primarySoft, color: T.primaryDeep, border: "none", borderRadius: 9,
                      padding: "5px 11px", fontSize: 11.5, fontWeight: 650,
                    }}>Resumo e flashcards</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Modal>

      <ModalBloco blocoId={estudar} onClose={() => setEstudar(null)} ctx={ctx} />
    </div>
  );
}

/* ==================== MODAL: RESUMO E FLASHCARDS DO BLOCO ================= */
function CartaoFlashcard({ card, onLembrar, onEditar, onExcluir }) {
  const [virado, setVirado] = useState(false);
  const [editando, setEditando] = useState(false);
  const [frente, setFrente] = useState(card.frente);
  const [verso, setVerso] = useState(card.verso);

  if (editando) {
    return (
      <Card className="p-4">
        <Field label="Frente"><textarea rows={2} value={frente} onChange={(e) => setFrente(e.target.value)} style={{ ...inputCss, resize: "vertical" }} /></Field>
        <div className="mt-3"><Field label="Verso"><textarea rows={3} value={verso} onChange={(e) => setVerso(e.target.value)} style={{ ...inputCss, resize: "vertical" }} /></Field></div>
        <div className="flex gap-2 justify-end mt-3">
          <Btn size="sm" variant="ghost" onClick={() => setEditando(false)}>Cancelar</Btn>
          <Btn size="sm" disabled={!frente.trim() || !verso.trim()}
            onClick={() => { onEditar(card.id, frente.trim(), verso.trim()); setEditando(false); }}>Salvar</Btn>
        </div>
      </Card>
    );
  }

  return (
    <Card hover className="p-4 anim-rise" style={{ cursor: "pointer" }} onClick={() => setVirado(!virado)}>
      <div className="flex items-start justify-between gap-3">
        <Eyebrow cor={virado ? "#7C5CD6" : T.ink50}>{virado ? "Verso — clique para virar" : "Frente — clique para revelar"}</Eyebrow>
        <div className="flex items-center gap-1" style={{ flexShrink: 0 }} onClick={(e) => e.stopPropagation()}>
          <Pill cor={card.etapa === 0 ? T.ink30 : card.etapa >= 30 ? T.jade : T.primary}>
            {card.etapa === 0 ? "novo" : `D+${card.etapa}`}
          </Pill>
          <button onClick={() => setEditando(true)} style={{ background: "none", border: "none", color: T.ink30, padding: 4 }}><PenTool size={12} /></button>
          <button onClick={() => onExcluir(card.id)} style={{ background: "none", border: "none", color: T.ink30, padding: 4 }}><Trash2 size={12} /></button>
        </div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, marginTop: 8, lineHeight: 1.5, minHeight: 40 }}>
        {virado ? card.verso : card.frente}
      </div>
      {virado && (
        <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
          <Btn size="sm" variant="danger" full onClick={() => { onLembrar(card.id, false); setVirado(false); }}>Não lembrei</Btn>
          <Btn size="sm" variant="success" full onClick={() => { onLembrar(card.id, true); setVirado(false); }}>Lembrei</Btn>
        </div>
      )}
    </Card>
  );
}

function ModalBloco({ blocoId, onClose, ctx }) {
  const { estado, hoje, aplicar, toast } = ctx;
  const b = blocoId ? BLOCO_BY_ID[blocoId] : null;
  const [texto, setTexto] = useState("");
  const [salvo, setSalvo] = useState(true);
  const [novaFrente, setNovaFrente] = useState("");
  const [novoVerso, setNovoVerso] = useState("");
  const refTimer = useRef(null);

  useEffect(() => {
    if (blocoId) { setTexto(estado.resumos?.[blocoId]?.texto || ""); setSalvo(true); setNovaFrente(""); setNovoVerso(""); }
  }, [blocoId]);

  if (!b) return null;
  const cards = (estado.flashcards || []).filter((f) => f.blocoId === blocoId);
  const pendentesAqui = cards.filter((f) => f.venc <= hoje).length;

  const salvarResumo = (v) => {
    setTexto(v); setSalvo(false);
    clearTimeout(refTimer.current);
    refTimer.current = setTimeout(() => {
      aplicar((e) => ({ ...e, resumos: { ...(e.resumos || {}), [blocoId]: { texto: v, atualizadoEm: new Date().toISOString() } } }));
      setSalvo(true);
    }, 600);
  };

  const criarFlashcard = () => {
    if (!novaFrente.trim() || !novoVerso.trim()) return;
    aplicar((e) => ({
      ...e,
      flashcards: [...(e.flashcards || []), {
        id: `fc${Date.now()}`, blocoId, frente: novaFrente.trim(), verso: novoVerso.trim(),
        criadoEm: hoje, etapa: 0, venc: addDays(hoje, 1),
      }],
      xp: e.xp + XP.flashcardNovo,
    }));
    setNovaFrente(""); setNovoVerso("");
    toast(`+${XP.flashcardNovo} XP`, "Flashcard criado — primeira revisão amanhã", "#7C5CD6", Brain);
  };

  const editarFlashcard = (id, frente, verso) =>
    aplicar((e) => ({ ...e, flashcards: (e.flashcards || []).map((f) => (f.id === id ? { ...f, frente, verso } : f)) }));

  const excluirFlashcard = (id) =>
    aplicar((e) => ({ ...e, flashcards: (e.flashcards || []).filter((f) => f.id !== id) }));

  const revisarFlashcard = (id, lembrou) => {
    aplicar((e) => ({
      ...e,
      flashcards: (e.flashcards || []).map((f) => {
        if (f.id !== id) return f;
        const etapa = proximaEtapaFlashcard(f.etapa, lembrou);
        return { ...f, etapa, venc: addDays(hoje, etapa) };
      }),
      xp: e.xp + XP.flashcardRevisado,
    }));
    toast(lembrou ? `+${XP.flashcardRevisado} XP` : "Ciclo reiniciado", lembrou ? "Intervalo aumentou" : "D+1 de novo — sem problema, é assim que fixa", lembrou ? "#7C5CD6" : T.amber, lembrou ? Brain : RotateCcw);
  };

  return (
    <Modal open={!!blocoId} onClose={onClose} wide
      title={`${b.sig} ${b.n} · ${b.nome}`} sub={`${REINOS[b.sig].nome} · ranking ${b.rank}º${pendentesAqui ? ` · ${pendentesAqui} flashcard${pendentesAqui > 1 ? "s" : ""} pendente${pendentesAqui > 1 ? "s" : ""}` : ""}`}>
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2"><BookOpen size={14} color={T.primary} strokeWidth={2.3} /><h3 style={{ fontSize: 14.5 }}>Resumo</h3></div>
            <span className="mono" style={{ fontSize: 10.5, color: salvo ? T.jade : T.ink30 }}>{salvo ? "salvo" : "salvando…"}</span>
          </div>
          <textarea rows={7} value={texto} onChange={(e) => salvarResumo(e.target.value)}
            placeholder="Cole ou escreva aqui o resumo de hoje. Salva sozinho enquanto você digita — é o que você vai reler nos dias de revisão."
            style={{ ...inputCss, resize: "vertical", lineHeight: 1.6 }} />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3"><Brain size={14} color="#7C5CD6" strokeWidth={2.3} /><h3 style={{ fontSize: 14.5 }}>Flashcards · modelo Anki</h3></div>

          <Card className="p-4" style={{ background: T.paper }}>
            <div className="grid md:grid-cols-2 gap-3">
              <Field label="Frente (pergunta)"><textarea rows={2} value={novaFrente} onChange={(e) => setNovaFrente(e.target.value)} style={{ ...inputCss, resize: "vertical" }} /></Field>
              <Field label="Verso (resposta)"><textarea rows={2} value={novoVerso} onChange={(e) => setNovoVerso(e.target.value)} style={{ ...inputCss, resize: "vertical" }} /></Field>
            </div>
            <div className="flex justify-end mt-3">
              <Btn size="sm" icon={Plus} disabled={!novaFrente.trim() || !novoVerso.trim()} onClick={criarFlashcard}>Criar flashcard</Btn>
            </div>
          </Card>

          {cards.length === 0 ? (
            <div style={{ fontSize: 12.5, color: T.ink50, marginTop: 12, textAlign: "center" }}>Nenhum flashcard neste bloco ainda.</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-3 mt-3">
              {cards.sort((a, b) => a.venc.localeCompare(b.venc)).map((c) => (
                <CartaoFlashcard key={c.id} card={c} onLembrar={revisarFlashcard} onEditar={editarFlashcard} onExcluir={excluirFlashcard} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

/* ==================== MODAL: MISSÃO DO DIA — EDIÇÃO ======================= */
const TIPOS_ITEM_MANUAL = [
  { v: "bloco", l: "Estudo de bloco" },
  { v: "questoes", l: "Questões" },
  { v: "revisao", l: "Revisão" },
  { v: "erros", l: "Análise de erros" },
  { v: "flashcards", l: "Flashcards" },
  { v: "redacao", l: "Redação" },
];

function ModalMissaoDia({ aberto, onClose, ctx }) {
  const { estado, hoje, aplicar } = ctx;
  const [aba, setAba] = useState("importar"); // "importar" | "novo"

  // --- aba: trazer pendências de outro dia ---
  const [dataOrigem, setDataOrigem] = useState(addDays(hoje, -1));
  const [selecionados, setSelecionados] = useState({});

  const pendentesDaOrigem = useMemo(() => {
    if (dataOrigem >= hoje) return [];
    const m = gerarMissao(dataOrigem, estado);
    const feitos = estado.missoes?.[dataOrigem]?.itens || {};
    return m.itens.filter((it) => !feitos[it.id]);
  }, [dataOrigem, hoje, estado]);

  const importar = () => {
    const ids = Object.keys(selecionados).filter((id) => selecionados[id]);
    if (!ids.length) return;
    const trazer = pendentesDaOrigem.filter((it) => ids.includes(it.id));
    aplicar((e) => {
      const atuais = e.missoesManuais?.[hoje] || [];
      const novos = trazer.map((it, i) => ({
        ...it, id: `imp-${Date.now()}-${i}`, origem: "importado", deData: dataOrigem,
      }));
      return { ...e, missoesManuais: { ...(e.missoesManuais || {}), [hoje]: [...atuais, ...novos] } };
    });
    setSelecionados({});
    onClose();
  };

  // --- aba: adicionar item personalizado ---
  const [novoTipo, setNovoTipo] = useState("bloco");
  const [novoBloco, setNovoBloco] = useState("");
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novoSub, setNovoSub] = useState("");

  useEffect(() => {
    if (novoTipo === "bloco" && novoBloco) {
      const b = BLOCO_BY_ID[novoBloco];
      if (b) { setNovoTitulo(`${b.sig} ${b.n} · ${b.nome}`); setNovoSub(`${REINOS[b.sig].nome} · ranking ${b.rank}º`); }
    }
  }, [novoBloco, novoTipo]);

  const adicionar = () => {
    if (!novoTitulo.trim()) return;
    aplicar((e) => {
      const atuais = e.missoesManuais?.[hoje] || [];
      const item = {
        id: `man-${Date.now()}`, tipo: novoTipo, titulo: novoTitulo.trim(), sub: novoSub.trim(),
        xp: TIPOS_MISSAO[novoTipo].xp, meta: novoTipo === "bloco" ? (novoBloco || null) : null, origem: "manual",
      };
      return { ...e, missoesManuais: { ...(e.missoesManuais || {}), [hoje]: [...atuais, item] } };
    });
    setNovoTitulo(""); setNovoSub(""); setNovoBloco("");
    onClose();
  };

  // --- itens manuais já presentes hoje, com opção de remover ---
  const meusItensHoje = estado.missoesManuais?.[hoje] || [];
  const removerMeuItem = (id) => aplicar((e) => ({
    ...e, missoesManuais: { ...(e.missoesManuais || {}), [hoje]: (e.missoesManuais?.[hoje] || []).filter((it) => it.id !== id) },
  }));

  return (
    <Modal open={aberto} onClose={onClose} wide title="Editar a missão de hoje"
      sub="O cronograma automático continua. Isto só ajusta o que você já fez em outro dia ou o que quer adicionar por conta própria.">
      <div className="space-y-5">
        <div className="flex gap-1 p-1" style={{ background: T.paperDeep, borderRadius: 12, width: "fit-content" }}>
          {[["importar", "Trazer de outro dia"], ["novo", "Adicionar item"]].map(([k, l]) => (
            <button key={k} onClick={() => setAba(k)} style={{
              padding: "7px 13px", borderRadius: 9, border: "none", fontSize: 12.5, fontWeight: 600,
              background: aba === k ? T.surface : "transparent", color: aba === k ? T.ink : T.ink50,
              boxShadow: aba === k ? "0 1px 3px rgba(20,26,46,.1)" : "none",
            }}>{l}</button>
          ))}
        </div>

        {aba === "importar" ? (
          <div className="space-y-4">
            <Field label="Data em que você realmente estudou isso" hint="Ex.: não deu para estudar dia 27 — escolha 27/07 e traga o que ficou pendente para hoje.">
              <input type="date" max={addDays(hoje, -1)} value={dataOrigem} onChange={(e) => { setDataOrigem(e.target.value); setSelecionados({}); }} style={inputCss} />
            </Field>

            {pendentesDaOrigem.length === 0 ? (
              <div style={{ fontSize: 12.5, color: T.ink50, textAlign: "center", padding: "20px 0" }}>
                Nenhuma pendência nessa data — ou já estava tudo concluído.
              </div>
            ) : (
              <div className="space-y-1.5" style={{ maxHeight: 320, overflowY: "auto" }}>
                {pendentesDaOrigem.map((it) => {
                  const cfg = TIPOS_MISSAO[it.tipo];
                  const sel = !!selecionados[it.id];
                  return (
                    <button key={it.id} onClick={() => setSelecionados((s) => ({ ...s, [it.id]: !s[it.id] }))}
                      className="w-full flex items-center gap-3 p-3 text-left" style={{
                        background: sel ? T.primarySoft : T.paper, border: `1.5px solid ${sel ? T.primary : "transparent"}`, borderRadius: 12,
                      }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: 6, flexShrink: 0, border: sel ? "none" : `2px solid ${T.line}`,
                        background: sel ? T.primary : "transparent", display: "flex", alignItems: "center", justifyContent: "center",
                      }}>{sel && <Check size={13} color="#fff" strokeWidth={3} />}</div>
                      <div style={{ background: `${cfg.cor}14`, borderRadius: 8, padding: 6, flexShrink: 0 }}><Ico name={cfg.icone} size={12} color={cfg.cor} /></div>
                      <div className="flex-1 min-w-0">
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{it.titulo}</div>
                        <div style={{ fontSize: 11, color: T.ink50 }}>{it.sub}</div>
                      </div>
                      <Pill cor={cfg.cor}>+{it.xp} XP</Pill>
                    </button>
                  );
                })}
              </div>
            )}

            <div className="flex justify-end gap-2 pt-1">
              <Btn variant="ghost" onClick={onClose}>Cancelar</Btn>
              <Btn disabled={!Object.values(selecionados).some(Boolean)} onClick={importar}>
                Trazer {Object.values(selecionados).filter(Boolean).length || ""} para hoje
              </Btn>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Field label="Tipo">
              <select value={novoTipo} onChange={(e) => { setNovoTipo(e.target.value); setNovoBloco(""); setNovoTitulo(""); setNovoSub(""); }} style={inputCss}>
                {TIPOS_ITEM_MANUAL.map((t) => <option key={t.v} value={t.v}>{t.l}</option>)}
              </select>
            </Field>

            {novoTipo === "bloco" && (
              <Field label="Bloco da base (opcional, mas recomendado)" hint="Ligar a um bloco faz o progresso e as revisões contarem certo.">
                <select value={novoBloco} onChange={(e) => setNovoBloco(e.target.value)} style={inputCss}>
                  <option value="">Sem bloco específico…</option>
                  {Object.entries(REINOS).map(([sig, r]) => (
                    <optgroup key={sig} label={r.reino}>
                      {BLOCOS.filter((b) => b.sig === sig).map((b) => <option key={b.id} value={b.id}>{b.id} · {b.nome}</option>)}
                    </optgroup>
                  ))}
                </select>
              </Field>
            )}

            <Field label="Título"><input value={novoTitulo} onChange={(e) => setNovoTitulo(e.target.value)} placeholder="O que você vai fazer" style={inputCss} /></Field>
            <Field label="Descrição (opcional)"><input value={novoSub} onChange={(e) => setNovoSub(e.target.value)} placeholder="Um contexto rápido" style={inputCss} /></Field>

            <div className="flex justify-end gap-2 pt-1">
              <Btn variant="ghost" onClick={onClose}>Cancelar</Btn>
              <Btn disabled={!novoTitulo.trim()} onClick={adicionar}>Adicionar à missão de hoje</Btn>
            </div>
          </div>
        )}

        {meusItensHoje.length > 0 && (
          <div className="pt-4" style={{ borderTop: `1px solid ${T.lineSoft}` }}>
            <Eyebrow>Seus itens de hoje</Eyebrow>
            <div className="mt-2 space-y-1.5">
              {meusItensHoje.map((it) => (
                <div key={it.id} className="flex items-center gap-2.5 p-2.5" style={{ background: T.paper, borderRadius: 10 }}>
                  <div className="flex-1 min-w-0" style={{ fontSize: 12.5, fontWeight: 600 }}>{it.titulo}</div>
                  <button onClick={() => removerMeuItem(it.id)} style={{ background: "none", border: "none", color: T.ink30, padding: 3 }}><Trash2 size={13} /></button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

/* ===================== TELA: COBERTURA DA BASE ============================ */
function TelaCobertura({ ctx }) {
  const { estado, tot, vincularBloco } = ctx;
  const [filtroRank, setFiltroRank] = useState("todos");
  const [filtroStatus, setFiltroStatus] = useState("todos");

  const statusDe = (id) => estadoDoBloco(estado, id);
  const CFG = ESTADO_UI;

  const cont = { nao_visto: 0, aula_vista: 0, praticado: 0, dominado: 0 };
  BLOCOS.forEach((b) => cont[statusDe(b.id)]++);

  const furados = BLOCOS.filter((b) => progressoDe(estado, b.id).furada);

  const criticos = BLOCOS.filter((b) => b.rank <= 5 && statusDe(b.id) === EST.NAO_VISTO);

  const lista = BLOCOS
    .filter((b) => filtroRank === "todos" || (filtroRank === "alta" ? b.rank <= 8 : filtroRank === "media" ? b.rank > 8 && b.rank <= 16 : b.rank > 16))
    .filter((b) => filtroStatus === "todos" || statusDe(b.id) === filtroStatus)
    .sort((a, b) => a.rank - b.rank || a.id.localeCompare(b.id));

  // Extras do cursinho: itens sem bloco vinculado, em qualquer dia da agenda
  const extras = [];
  Object.entries(estado.agenda || {}).forEach(([data, arr]) =>
    (arr || []).forEach((it) => { if (it.origem === "cursinho" && !it.blocoId) extras.push({ ...it, data }); }));

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Cobertura da base" sub="Os 169 blocos oficiais e quem já cobriu cada um. Bloco intocado de ranking alto é emergência; de ranking baixo pode morrer sem culpa." />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(CFG).map(([k, c], i) => (
          <Card key={k} hover className="p-4 anim-rise" style={{ animationDelay: `${i * 40}ms`, cursor: "pointer", borderColor: filtroStatus === k ? c.cor : T.line }}
            onClick={() => setFiltroStatus(filtroStatus === k ? "todos" : k)}>
            <div className="flex items-center gap-2 mb-2">
              <div style={{ width: 9, height: 9, borderRadius: 99, background: c.cor }} />
              <Eyebrow>{c.t}</Eyebrow>
            </div>
            <div className="mono" style={{ fontSize: 27, fontWeight: 700, color: c.cor }}>{cont[k]}</div>
          </Card>
        ))}
      </div>

      {furados.length > 0 && (
        <Card className="p-4" style={{ background: T.amberSoft, borderColor: "#F0DFB6" }}>
          <div className="flex items-start gap-3">
            <AlertTriangle size={16} color={T.amber} strokeWidth={2.4} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: "#7A5B0A" }}>{furados.length} autoavaliação{furados.length > 1 ? "ões" : ""} furada{furados.length > 1 ? "s" : ""}</div>
              <div style={{ fontSize: 12.5, color: "#8A6512", marginTop: 4, lineHeight: 1.55 }}>
                Você marcou como dominado, mas depois errou questão: {furados.map((b) => `${b.sig} ${b.n} ${b.nome}`).join(" · ")}. Voltaram para Praticado.
              </div>
            </div>
          </div>
        </Card>
      )}

      {criticos.length > 0 && (
        <Card className="p-4" style={{ background: T.roseSoft, borderColor: "#F2C9D2" }}>
          <div className="flex items-start gap-3">
            <AlertTriangle size={16} color={T.rose} strokeWidth={2.4} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: "#96253C" }}>{criticos.length} bloco{criticos.length > 1 ? "s" : ""} de ranking 1º–5º ainda intocado{criticos.length > 1 ? "s" : ""}</div>
              <div style={{ fontSize: 12.5, color: "#96253C", marginTop: 4, lineHeight: 1.55 }}>
                {criticos.map((b) => `${b.sig} ${b.n} ${b.nome} (${b.rank}º)`).join(" · ")}
              </div>
            </div>
          </div>
        </Card>
      )}

      <Card className="overflow-hidden">
        <div className="flex flex-wrap items-center gap-2 p-4" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
          <span style={{ fontSize: 12, color: T.ink50, fontWeight: 600 }}>Incidência:</span>
          {[["todos", "Todos"], ["alta", "1º–8º"], ["media", "9º–16º"], ["baixa", "17º+"]].map(([k, l]) => (
            <button key={k} onClick={() => setFiltroRank(k)} style={{
              padding: "5px 11px", borderRadius: 99, fontSize: 11.5, fontWeight: 600, border: "none",
              background: filtroRank === k ? T.ink : T.lineSoft, color: filtroRank === k ? "#fff" : T.ink50,
            }}>{l}</button>
          ))}
        </div>
        <div style={{ maxHeight: 560, overflowY: "auto" }}>
          {lista.map((b) => {
            const st = statusDe(b.id);
            const c = CFG[st];
            return (
              <div key={b.id} className="flex items-center gap-3 px-4 py-2.5" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
                <div style={{ width: 4, height: 26, borderRadius: 99, background: c.cor, flexShrink: 0 }} />
                <span className="mono" style={{ fontSize: 10.5, color: b.cor, fontWeight: 700, width: 52, flexShrink: 0 }}>{b.id}</span>
                <span className="flex-1 min-w-0" style={{ fontSize: 13, fontWeight: 600 }}>{b.nome}</span>
                <Pill cor={b.rank <= 8 ? T.rose : T.ink50}>{b.rank}º</Pill>
                {progressoDe(estado, b.id).furada && <Pill cor={T.rose} soft={T.roseSoft}><AlertTriangle size={9} />furada</Pill>}
                <SeletorEstado blocoId={b.id} ctx={ctx} compacto />
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="p-4" style={{ background: T.goldSoft, borderBottom: `1px solid ${T.lineSoft}` }}>
          <h3 style={{ fontSize: 15, color: "#7A5B0A" }}>Extras do cursinho · {extras.length}</h3>
          <div style={{ fontSize: 12, color: "#8A6512", marginTop: 3, lineHeight: 1.5 }}>
            Assuntos da aula que não casaram com nenhum dos 169 blocos. Eles contam normalmente — esta é uma visão de auditoria, não uma quarentena.
          </div>
        </div>
        {extras.length === 0 ? (
          <div style={{ fontSize: 12.5, color: T.ink50, padding: "18px", textAlign: "center" }}>Nenhum extra registrado.</div>
        ) : extras.map((it) => (
          <div key={it.id} className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
            <span className="mono" style={{ fontSize: 10.5, color: T.ink30, width: 44, flexShrink: 0 }}>{fmtBR(it.data)}</span>
            <span className="flex-1 min-w-0" style={{ fontSize: 13, fontWeight: 600 }}>{it.titulo}</span>
            <select defaultValue="" onChange={(e) => e.target.value && vincularBloco(it.id, it.data, e.target.value)}
              style={{ ...inputCss, maxWidth: 210, padding: "6px 9px", fontSize: 11.5 }}>
              <option value="">Vincular a um bloco…</option>
              {Object.entries(REINOS).map(([sig, r]) => (
                <optgroup key={sig} label={r.nome}>
                  {BLOCOS.filter((x) => x.sig === sig).map((x) => <option key={x.id} value={x.id}>{x.id} · {x.nome}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
        ))}
      </Card>
    </div>
  );
}

/* Check manual livre: avança/rebaixa o bloco sem passar pelo plano do dia. */
function SeletorEstado({ blocoId, ctx, compacto }) {
  const { estado, marcarBloco } = ctx;
  const prog = progressoDe(estado, blocoId);
  const [aberto, setAberto] = useState(false);
  const ui = ESTADO_UI[prog.estado];
  const auto = prog.estado === EST.DOMINADO && prog.origemDominio === "autoavaliado";

  return (
    <div style={{ position: "relative" }}>
      <button onClick={(e) => { e.stopPropagation(); setAberto(!aberto); }}
        className="mono inline-flex items-center gap-1" style={{
          background: ui.soft, color: ui.cor, border: `1px solid ${ui.cor}33`, borderRadius: 99,
          padding: compacto ? "3px 8px" : "4px 10px", fontSize: 10.5, fontWeight: 700,
        }}>
        {prog.estado === EST.DOMINADO ? <CheckCircle2 size={10} /> : <Circle size={10} />}
        {ui.t.toUpperCase()}{auto ? " ·  AUTO" : ""}
        {prog.furada && <AlertTriangle size={10} />}
      </button>

      {aberto && (
        <>
          <div style={{ position: "fixed", inset: 0, zIndex: 40 }} onClick={(e) => { e.stopPropagation(); setAberto(false); }} />
          <div className="card" style={{ position: "absolute", top: 28, left: 0, zIndex: 41, minWidth: 190, boxShadow: "0 12px 32px -14px rgba(20,26,46,.35)" }}>
            {[EST.NAO_VISTO, EST.AULA_VISTA, EST.PRATICADO, EST.DOMINADO].map((k) => {
              const u = ESTADO_UI[k];
              return (
                <button key={k} onClick={(e) => { e.stopPropagation(); marcarBloco(blocoId, k); setAberto(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2.5 text-left"
                  style={{ background: prog.estado === k ? u.soft : "transparent", border: "none", borderBottom: `1px solid ${T.lineSoft}` }}>
                  <div style={{ width: 8, height: 8, borderRadius: 99, background: u.cor, flexShrink: 0 }} />
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: T.ink }}>{u.t}</span>
                  {prog.estado === k && <Check size={12} color={u.cor} style={{ marginLeft: "auto" }} />}
                </button>
              );
            })}
            <div style={{ fontSize: 10.5, color: T.ink30, padding: "8px 12px", lineHeight: 1.45 }}>
              Marcar "Dominado" aqui grava como autoavaliação. Se o bloco gerar erro depois, ele volta para Praticado.
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ============================== TELA: JOGO ===============================
   Componentes preparados para trocar emoji por <img> depois, sem refatorar:
   basta substituir o conteúdo de <Sprite/>. */
const Sprite = ({ icone, tamanho = 30, esmaecido }) => (
  <span style={{
    fontSize: tamanho, lineHeight: 1, display: "inline-block",
    filter: esmaecido ? "grayscale(1)" : "none", opacity: esmaecido ? 0.35 : 1,
    transition: "filter .4s ease, opacity .4s ease",
  }}>{icone}</span>
);

function CartaoMonstro({ m, acento, icone, golpeando }) {
  const u = ESTADO_UI[m.status];
  return (
    <div style={{
      background: m.derrotado ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.07)",
      border: `1px solid ${m.derrotado ? "rgba(255,255,255,.08)" : acento + "55"}`,
      borderRadius: 14, padding: 12, position: "relative", overflow: "hidden",
      animation: golpeando ? "golpe .55s cubic-bezier(.36,.07,.19,.97)" : "none",
    }}>
      {golpeando && <div style={{ position: "absolute", inset: 0, background: "#fff", opacity: .45, animation: "flash .55s ease-out" }} />}
      <div className="flex items-start gap-2.5" style={{ position: "relative" }}>
        <Sprite icone={icone} tamanho={26} esmaecido={m.derrotado} />
        <div className="flex-1 min-w-0">
          <div style={{ fontSize: 11.5, fontWeight: 650, color: m.derrotado ? "rgba(255,255,255,.4)" : "#fff",
            lineHeight: 1.3, textDecoration: m.derrotado ? "line-through" : "none" }}>{m.bloco.nome}</div>
          <div className="mono" style={{ fontSize: 9, color: "rgba(255,255,255,.45)", marginTop: 3 }}>
            {m.bloco.sig} {m.bloco.n} · {m.bloco.rank}º
          </div>
        </div>
      </div>
      <div style={{ marginTop: 9, height: 5, background: "rgba(255,255,255,.1)", borderRadius: 99, overflow: "hidden" }}>
        <div style={{ width: `${m.hp}%`, height: "100%", background: m.hp > 66 ? "#E1445E" : m.hp > 33 ? T.amber : m.hp > 0 ? T.gold : "transparent",
          borderRadius: 99, transition: "width .7s cubic-bezier(.2,.8,.3,1)" }} />
      </div>
      <div className="mono flex justify-between" style={{ fontSize: 8.5, color: "rgba(255,255,255,.4)", marginTop: 4 }}>
        <span>{u.t.toUpperCase()}</span><span>{m.hp}%</span>
      </div>
    </div>
  );
}

function TelaJogo({ ctx }) {
  const { estado, nivel, aplicar } = ctx;
  const [reinoAberto, setReinoAberto] = useState(null);
  const [golpeando, setGolpeando] = useState(null);

  const reinos = useMemo(() => Object.keys(REINOS).map((sig) => reinoDoJogo(estado, sig)), [estado]);
  const pendentes = useMemo(() => golpesPendentes(estado), [estado]);
  const totalDerrotados = reinos.reduce((a, r) => a + r.derrotados, 0);
  const chefesCaidos = reinos.filter((r) => r.chefeCaido).length;

  /* Executar o golpe é só celebração: grava que já foi comemorado, nada mais. */
  const darGolpe = (g) => {
    setGolpeando(g.bloco.id);
    setTimeout(() => setGolpeando(null), 600);
    aplicar((e) => ({
      ...e,
      jogo: { ...(e.jogo || {}), golpesDados: { ...(e.jogo?.golpesDados || {}), [g.bloco.id]: g.atual }, ultimaVisita: ctx.hoje },
    }));
    ctx.som.tocarDing();
  };

  const darTodos = () => {
    const mapa = {};
    pendentes.forEach((g) => { mapa[g.bloco.id] = g.atual; });
    aplicar((e) => ({ ...e, jogo: { ...(e.jogo || {}), golpesDados: { ...(e.jogo?.golpesDados || {}), ...mapa }, ultimaVisita: ctx.hoje } }));
    ctx.som.tocarSino();
  };

  const aberto = reinoAberto ? reinos.find((r) => r.sig === reinoAberto) : null;

  return (
    <div style={{ background: `linear-gradient(165deg, ${T.ink} 0%, #232C4B 55%, #35306E 100%)`,
      borderRadius: 22, padding: "22px 20px", color: "#fff", minHeight: "72vh" }}>
      <style>{`
        @keyframes golpe { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-7px) rotate(-2deg)} 40%{transform:translateX(6px) rotate(2deg)} 60%{transform:translateX(-4px)} 80%{transform:translateX(3px)} }
        @keyframes flash { from{opacity:.55} to{opacity:0} }
        @keyframes pulsa { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
      `}</style>

      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
        <div>
          <h1 style={{ fontSize: 24, color: "#fff" }}>Os Sete Reinos</h1>
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", marginTop: 5, maxWidth: 460, lineHeight: 1.55 }}>
            Cada monstro é um bloco da base. O estado deles espelha seu estudo automaticamente — o jogo só mostra, nunca decide.
          </p>
        </div>
        <div className="flex gap-2.5">
          {[["Monstros", `${totalDerrotados}/169`], ["Chefes", `${chefesCaidos}/7`], ["Nível", nivel.nivel]].map(([l, v]) => (
            <div key={l} style={{ background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 14, padding: "10px 14px", textAlign: "center" }}>
              <div className="mono" style={{ fontSize: 18, fontWeight: 700 }}>{v}</div>
              <div style={{ fontSize: 9.5, color: "rgba(255,255,255,.5)", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {pendentes.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 mb-5" style={{
          background: "rgba(233,150,42,.14)", border: `1px solid ${T.gold}55`, borderRadius: 16 }}>
          <div className="flex items-center gap-2.5">
            <Swords size={17} color={T.gold} strokeWidth={2.3} style={{ animation: "pulsa 1.8s ease-in-out infinite" }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Você tem {pendentes.length} golpe{pendentes.length > 1 ? "s" : ""} pendente{pendentes.length > 1 ? "s" : ""}</div>
              <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.6)", marginTop: 2 }}>Só celebração — o estado dos monstros já está atualizado.</div>
            </div>
          </div>
          <div className="flex gap-2">
            {pendentes.length > 1 && <Btn size="sm" variant="ghost" onClick={darTodos} style={{ borderColor: "rgba(255,255,255,.25)", color: "#fff", background: "rgba(255,255,255,.07)" }}>Desferir todos</Btn>}
            <Btn size="sm" onClick={() => { darGolpe(pendentes[0]); setReinoAberto(pendentes[0].bloco.sig); }} style={{ background: T.gold }}>Desferir golpe</Btn>
          </div>
        </div>
      )}

      {!aberto ? (
        <div style={{ position: "relative" }}>
          {/* estrada em CSS puro, sem imagem externa */}
          <div className="hidden lg:block" style={{ position: "absolute", left: 0, right: 0, top: 74, height: 3,
            background: "repeating-linear-gradient(90deg, rgba(255,255,255,.18) 0 14px, transparent 14px 28px)" }} />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3" style={{ position: "relative" }}>
            {reinos.map((r, i) => (
              <button key={r.sig} onClick={() => setReinoAberto(r.sig)} className="anim-rise text-left" style={{
                background: "rgba(255,255,255,.07)", border: `1px solid ${r.chefeCaido ? r.acento : "rgba(255,255,255,.14)"}`,
                borderRadius: 16, padding: 14, animationDelay: `${i * 55}ms`, cursor: "pointer",
                boxShadow: r.chefeCaido ? `0 0 22px -6px ${r.acento}` : "none",
              }}>
                <div className="flex items-center justify-center" style={{
                  width: 52, height: 52, borderRadius: 99, margin: "0 auto 10px",
                  background: `${r.acento}22`, border: `2px solid ${r.acento}${r.chefeCaido ? "" : "66"}`,
                }}>
                  <Sprite icone={r.chefe} tamanho={26} esmaecido={r.chefeCaido} />
                </div>
                <div style={{ fontSize: 11.5, fontWeight: 700, textAlign: "center", lineHeight: 1.3 }}>{r.reino}</div>
                <div style={{ fontSize: 9.5, color: "rgba(255,255,255,.5)", textAlign: "center", marginTop: 2 }}>{r.nome}</div>
                <div style={{ marginTop: 9, height: 5, background: "rgba(255,255,255,.12)", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ width: `${r.pct}%`, height: "100%", background: r.acento, borderRadius: 99, transition: "width .8s cubic-bezier(.2,.8,.3,1)" }} />
                </div>
                <div className="mono" style={{ fontSize: 9.5, color: "rgba(255,255,255,.55)", textAlign: "center", marginTop: 5 }}>
                  {r.derrotados}/{r.total}{r.chefeCaido ? " · CHEFE CAIU" : ""}
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setReinoAberto(null)} style={{ background: "rgba(255,255,255,.1)", border: "none", borderRadius: 10, padding: 8, color: "#fff" }}>
                <ChevronLeft size={16} />
              </button>
              <Sprite icone={aberto.chefe} tamanho={30} esmaecido={aberto.chefeCaido} />
              <div>
                <h2 style={{ fontSize: 18, color: "#fff" }}>{aberto.reino}</h2>
                <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.55)" }}>
                  {aberto.nome} · {aberto.derrotados} de {aberto.total} derrotados
                  {aberto.chefeCaido ? " · chefe derrotado" : ` · faltam ${aberto.total - aberto.derrotados} para o chefe`}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {aberto.blocos.sort((a, b) => a.bloco.rank - b.bloco.rank).map((m) => (
              <CartaoMonstro key={m.bloco.id} m={m} acento={aberto.acento} icone={aberto.monstro} golpeando={golpeando === m.bloco.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ======================= TELA: IMPORTAR PROVA (PDF) ======================= */
function TelaImportar({ ctx }) {
  const { estado, hoje, importarProva, ir, abrir } = ctx;
  const [fase, setFase] = useState("upload"); // upload | marcar | erros
  const [carregando, setCarregando] = useState(0);
  const [erro, setErro] = useState("");
  const [prova, setProva] = useState("");
  const [data, setData] = useState(hoje);
  const [itens, setItens] = useState([]);
  const [minutos, setMinutos] = useState({ LC: "", CH: "", CN: "", MAT: "" });
  const [faixa, setFaixa] = useState({ de: "", ate: "", busca: "", blocoId: "", livre: "" });
  const refInput = useRef(null);

  const abrirArquivo = async (arq) => {
    if (!arq) return;
    setErro(""); setCarregando(1);
    try {
      const r = await lerProvaPdf(arq, setCarregando);
      if (!r.questoes.length) {
        setErro(`Li ${r.paginas} páginas mas não encontrei o padrão "QUESTÃO N". Confira se é uma prova oficial em PDF de texto (não digitalizada como imagem).`);
        setCarregando(0); return;
      }
      setItens(r.questoes.map((q) => ({ ...q, marcado: null, blocoId: null, livre: "" })));
      setProva(arq.name.replace(/\.pdf$/i, ""));
      setFase("marcar"); setCarregando(0);
    } catch (e) { setErro(e.message || "Falha ao ler o PDF."); setCarregando(0); }
  };

  const marcar = (n, v) => setItens((xs) => xs.map((q) => (q.n === n ? { ...q, marcado: q.marcado === v ? null : v } : q)));

  const aplicarFaixa = () => {
    const de = +faixa.de, ate = +faixa.ate || +faixa.de;
    if (!de) return;
    setItens((xs) => xs.map((q) => (q.n >= de && q.n <= ate
      ? { ...q, blocoId: faixa.blocoId || null, livre: faixa.blocoId ? "" : faixa.livre.trim() } : q)));
    setFaixa({ de: "", ate: "", busca: "", blocoId: "", livre: "" });
  };

  const marcados = itens.filter((q) => q.marcado);
  const erradas = itens.filter((q) => q.marcado === "errada");
  const semConteudo = marcados.filter((q) => !q.blocoId && !q.livre).length;

  const concluir = () => {
    importarProva({ prova: prova.trim() || "Prova importada", data, itens,
      minutosPorArea: minutos, rotulos: itens.map((q) => q.livre).filter(Boolean) });
    if (erradas.length) setFase("erros"); else { setItens([]); setFase("upload"); ir("desempenho"); }
  };

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Importar prova" sub="Suba o PDF, marque certo e errado, e o app distribui: estatística vai para os blocos, erros vão para o caderno." />

      {fase === "upload" && (
        <Card className="p-6">
          <div onClick={() => refInput.current?.click()} style={{
            border: `2px dashed ${T.line}`, borderRadius: 16, padding: "40px 20px", textAlign: "center", cursor: "pointer",
          }}>
            <div style={{ background: T.primarySoft, borderRadius: 16, padding: 14, width: 56, margin: "0 auto 14px" }}>
              <ClipboardList size={26} color={T.primary} strokeWidth={2} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Escolher o PDF da prova</div>
            <div style={{ fontSize: 12.5, color: T.ink50, marginTop: 6, lineHeight: 1.6, maxWidth: 420, margin: "6px auto 0" }}>
              Funciona com provas oficiais do ENEM (regular, PPL, reaplicação) em PDF de texto.
              PDF digitalizado como imagem não é lido.
            </div>
            <input ref={refInput} type="file" accept="application/pdf" style={{ display: "none" }}
              onChange={(e) => abrirArquivo(e.target.files?.[0])} />
          </div>
          {carregando > 0 && (
            <div className="mt-4">
              <Barra pct={carregando} cor={T.primary} h={7} />
              <div className="mono" style={{ fontSize: 11.5, color: T.ink50, marginTop: 6, textAlign: "center" }}>lendo o PDF… {carregando}%</div>
            </div>
          )}
          {erro && (
            <div className="flex items-start gap-2.5 p-3 mt-4" style={{ background: T.roseSoft, borderRadius: 12 }}>
              <AlertTriangle size={15} color={T.rose} strokeWidth={2.4} style={{ marginTop: 1, flexShrink: 0 }} />
              <span style={{ fontSize: 12.5, color: "#96253C", lineHeight: 1.55 }}>{erro}</span>
            </div>
          )}
        </Card>
      )}

      {fase === "marcar" && (
        <>
          <Card className="p-5">
            <div className="grid md:grid-cols-2 gap-3">
              <Field label="Nome da prova"><input value={prova} onChange={(e) => setProva(e.target.value)} style={inputCss} /></Field>
              <Field label="Data"><input type="date" value={data} onChange={(e) => setData(e.target.value)} style={inputCss} /></Field>
            </div>
            <div className="mt-3">
              <Eyebrow>Tempo gasto por área (minutos)</Eyebrow>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {Object.entries(AREA).map(([k, a]) => (
                  <div key={k}>
                    <div style={{ fontSize: 11, color: T.ink50, marginBottom: 4 }}>{a.curto}</div>
                    <input type="number" value={minutos[k]} onChange={(e) => setMinutos({ ...minutos, [k]: e.target.value })}
                      placeholder="0" style={{ ...inputCss, padding: "8px 10px" }} className="mono" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-5" style={{ background: T.paper }}>
            <Eyebrow cor={T.primary}>Marcar conteúdo em lote</Eyebrow>
            <div style={{ fontSize: 12, color: T.ink50, marginTop: 4, marginBottom: 10, lineHeight: 1.5 }}>
              Provas agrupam assuntos. Marque uma faixa de uma vez — ex.: 136 a 140 = Razão e Matemática Financeira.
            </div>
            <div className="flex flex-wrap items-end gap-2">
              <div style={{ width: 76 }}><Field label="De"><input type="number" value={faixa.de} onChange={(e) => setFaixa({ ...faixa, de: e.target.value })} style={inputCss} className="mono" /></Field></div>
              <div style={{ width: 76 }}><Field label="Até"><input type="number" value={faixa.ate} onChange={(e) => setFaixa({ ...faixa, ate: e.target.value })} style={inputCss} className="mono" /></Field></div>
              <div className="flex-1" style={{ minWidth: 200 }}>
                <Field label="Conteúdo">
                  <input value={faixa.busca} onChange={(e) => setFaixa({ ...faixa, busca: e.target.value, blocoId: "" })}
                    placeholder="Digite o assunto…" style={inputCss} />
                </Field>
              </div>
              <Btn onClick={aplicarFaixa} disabled={!faixa.de || (!faixa.blocoId && !faixa.livre.trim())}>Aplicar</Btn>
            </div>
            {!faixa.blocoId && faixa.busca.trim().length >= 3 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {casarBloco(faixa.busca, 5).map((b) => (
                  <button key={b.id} onClick={() => setFaixa({ ...faixa, blocoId: b.id, busca: b.nome, livre: "" })}
                    style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: 9, padding: "6px 10px", fontSize: 11.5, fontWeight: 600 }}>
                    {b.sig} {b.n} · {b.nome}
                  </button>
                ))}
                <button onClick={() => setFaixa({ ...faixa, livre: faixa.busca, blocoId: "" })}
                  style={{ background: T.goldSoft, border: `1px solid #F0DFB6`, borderRadius: 9, padding: "6px 10px", fontSize: 11.5, fontWeight: 600, color: "#7A5B0A" }}>
                  Fora da base: "{faixa.busca}"
                </button>
              </div>
            )}
            {faixa.blocoId && <div className="mt-2"><Pill cor={T.jade} soft={T.jadeSoft}><Check size={9} />{BLOCO_BY_ID[faixa.blocoId].nome}</Pill></div>}
            {faixa.livre && <div className="mt-2"><Pill cor={T.gold} soft={T.goldSoft}>rótulo livre: {faixa.livre}</Pill></div>}
          </Card>

          <Card className="overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 p-4" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
              <div>
                <h3 style={{ fontSize: 15 }}>{itens.length} questões encontradas</h3>
                <div style={{ fontSize: 12, color: T.ink50, marginTop: 2 }}>
                  {marcados.length} marcadas · {marcados.filter((q) => q.marcado === "certa").length} certas · {erradas.length} erradas
                  {semConteudo > 0 && ` · ${semConteudo} sem conteúdo`}
                </div>
              </div>
              <Btn disabled={!marcados.length} onClick={concluir}>Importar {marcados.length || ""}</Btn>
            </div>
            <div style={{ maxHeight: 460, overflowY: "auto" }}>
              {itens.map((q) => {
                const b = q.blocoId ? BLOCO_BY_ID[q.blocoId] : null;
                return (
                  <div key={q.n} className="flex items-center gap-3 px-4 py-2.5" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
                    <span className="mono" style={{ fontSize: 12, fontWeight: 700, width: 34, flexShrink: 0, color: T.ink50 }}>{q.n}</span>
                    <div className="flex gap-1" style={{ flexShrink: 0 }}>
                      <button onClick={() => marcar(q.n, "certa")} style={{
                        width: 30, height: 30, borderRadius: 8, border: "none",
                        background: q.marcado === "certa" ? T.jade : T.lineSoft,
                        color: q.marcado === "certa" ? "#fff" : T.ink30,
                      }}><Check size={14} strokeWidth={3} style={{ margin: "0 auto" }} /></button>
                      <button onClick={() => marcar(q.n, "errada")} style={{
                        width: 30, height: 30, borderRadius: 8, border: "none",
                        background: q.marcado === "errada" ? T.rose : T.lineSoft,
                        color: q.marcado === "errada" ? "#fff" : T.ink30,
                      }}><X size={14} strokeWidth={3} style={{ margin: "0 auto" }} /></button>
                    </div>
                    <div className="flex-1 min-w-0">
                      {b ? <Pill cor={b.cor}>{b.sig} {b.n} · {b.nome}</Pill>
                        : q.livre ? <Pill cor={T.gold} soft={T.goldSoft}>{q.livre}</Pill>
                        : <span style={{ fontSize: 11, color: T.ink30 }}>sem conteúdo · {AREA[areaPorNumero(q.n)]?.curto}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </>
      )}

      {fase === "erros" && (
        <Card className="p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <CheckCircle2 size={18} color={T.jade} strokeWidth={2.4} />
            <h3 style={{ fontSize: 16 }}>Prova importada</h3>
          </div>
          <p style={{ fontSize: 13, color: T.ink70, lineHeight: 1.65 }}>
            A estatística já entrou nos blocos. Faltam <strong>{erradas.length} erro{erradas.length > 1 ? "s" : ""}</strong> para o caderno —
            lá você define tipo de erro, motivo e prioridade, que são julgamento seu.
          </p>
          <div className="mt-4 space-y-1.5" style={{ maxHeight: 240, overflowY: "auto" }}>
            {erradas.map((q) => {
              const b = q.blocoId ? BLOCO_BY_ID[q.blocoId] : null;
              return (
                <div key={q.n} className="flex items-center gap-2.5 p-2.5" style={{ background: T.paper, borderRadius: 10 }}>
                  <span className="mono" style={{ fontSize: 11.5, fontWeight: 700, width: 30 }}>{q.n}</span>
                  <span className="flex-1 min-w-0" style={{ fontSize: 12.5 }}>{b ? b.nome : q.livre || "sem conteúdo"}</span>
                </div>
              );
            })}
          </div>
          <div className="flex gap-2 mt-4">
            <Btn variant="ghost" onClick={() => { setItens([]); setFase("upload"); }}>Importar outra</Btn>
            <Btn onClick={() => ir("erros")}>Ir para o caderno de erros</Btn>
          </div>
        </Card>
      )}
    </div>
  );
}

const Cabecalho = ({ titulo, sub, acao }) => (
  <div className="flex flex-wrap items-start justify-between gap-4 anim-rise">
    <div style={{ maxWidth: 620 }}>
      <h1 style={{ fontSize: 25 }}>{titulo}</h1>
      {sub && <p style={{ fontSize: 13.5, color: T.ink50, marginTop: 6, lineHeight: 1.6 }}>{sub}</p>}
    </div>
    {acao}
  </div>
);

/* ========================== TELA: MAPA DE DESEMPENHO ===================== */
function TelaDesempenho({ ctx }) {
  const { agg, insights, estado } = ctx;
  const [filtro, setFiltro] = useState("todos");
  const [reino, setReino] = useState("todos");

  const linhas = BLOCOS.map((b) => ({ b, m: agg[b.id] || { status: "novo", questoes: 0, pct: null, delta: null } }))
    .filter((x) => (filtro === "todos" ? true : x.m.status === filtro))
    .filter((x) => (reino === "todos" ? true : x.b.sig === reino))
    .sort((a, b) => {
      const ord = { critico: 0, atencao: 1, forte: 2, novo: 3 };
      if (ord[a.m.status] !== ord[b.m.status]) return ord[a.m.status] - ord[b.m.status];
      return a.b.rank - b.b.rank;
    });

  const cont = { forte: 0, atencao: 0, critico: 0, novo: 0 };
  BLOCOS.forEach((b) => cont[agg[b.id]?.status || "novo"]++);

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Mapa de desempenho" sub="Cada bloco da base classificado pelo seu percentual de acerto real. Verde é forte, amarelo pede atenção, vermelho é crítico. A ordem já é a ordem de prioridade." />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[["forte", "Assuntos fortes", "80% ou mais"], ["atencao", "Precisam de atenção", "60% a 79%"], ["critico", "Assuntos críticos", "abaixo de 60%"], ["novo", "Sem dados", "ainda não medidos"]].map(([k, l, s], i) => (
          <Card key={k} hover className="p-4 anim-rise" style={{ animationDelay: `${i * 40}ms`, cursor: "pointer", borderColor: filtro === k ? STATUS_COR[k].cor : T.line }}
            onClick={() => setFiltro(filtro === k ? "todos" : k)}>
            <div className="flex items-center gap-2 mb-2">
              <div style={{ width: 9, height: 9, borderRadius: 99, background: STATUS_COR[k].cor }} />
              <Eyebrow>{l}</Eyebrow>
            </div>
            <div className="mono" style={{ fontSize: 27, fontWeight: 700, color: STATUS_COR[k].cor }}>{cont[k]}</div>
            <div style={{ fontSize: 11, color: T.ink50, marginTop: 3 }}>{s}</div>
          </Card>
        ))}
      </div>

      {insights.length > 0 && (
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={15} color={T.primary} strokeWidth={2.4} />
            <h3 style={{ fontSize: 15 }}>Recomendações automáticas</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            {insights.slice(0, 8).map((ins, i) => <InsightRow key={i} ins={ins} />)}
          </div>
        </Card>
      )}

      <Card className="overflow-hidden">
        <div className="flex flex-wrap items-center gap-2 p-4" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
          <span style={{ fontSize: 12, color: T.ink50, fontWeight: 600 }}>Reino:</span>
          {["todos", ...Object.keys(REINOS)].map((k) => (
            <button key={k} onClick={() => setReino(k)} style={{
              padding: "5px 11px", borderRadius: 99, fontSize: 11.5, fontWeight: 600, border: "none",
              background: reino === k ? (k === "todos" ? T.ink : REINOS[k].cor) : T.lineSoft,
              color: reino === k ? "#fff" : T.ink50,
            }}>{k === "todos" ? "Todos" : REINOS[k].nome}</button>
          ))}
        </div>
        {linhas.length === 0 ? (
          <Empty titulo="Nada nesse filtro" txt="Ajuste o status ou o reino para ver os blocos." />
        ) : (
          <div style={{ maxHeight: 620, overflowY: "auto" }}>
            {linhas.map(({ b, m }, i) => {
              const st = STATUS_COR[m.status];
              return (
                <div key={b.id} className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
                  <div style={{ width: 4, height: 30, borderRadius: 99, background: st.cor, flexShrink: 0 }} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="mono" style={{ fontSize: 10.5, color: b.cor, fontWeight: 700 }}>{b.id}</span>
                      <span style={{ fontSize: 13.5, fontWeight: 600 }}>{b.nome}</span>
                      {b.rank <= 8 && <Pill cor={T.rose}>ranking {b.rank}º</Pill>}
                    </div>
                    <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 2 }}>
                      {REINOS[b.sig].nome} · {m.questoes ? `${m.questoes} questões resolvidas` : "nenhuma questão registrada"}
                    </div>
                  </div>
                  <div style={{ width: 96, flexShrink: 0 }}>
                    {m.pct != null ? <Barra pct={m.pct} cor={st.cor} h={6} /> : <div style={{ height: 6, borderRadius: 99, background: T.lineSoft }} />}
                  </div>
                  <div className="mono text-right" style={{ width: 46, fontSize: 13, fontWeight: 700, color: st.cor, flexShrink: 0 }}>
                    {m.pct != null ? `${m.pct}%` : "—"}
                  </div>
                  <div style={{ width: 52, flexShrink: 0, textAlign: "right" }}>
                    {m.delta != null && m.delta !== 0 && (
                      <span className="mono inline-flex items-center gap-0.5" style={{ fontSize: 11, fontWeight: 700, color: m.delta > 0 ? T.jade : T.rose }}>
                        {m.delta > 0 ? <ArrowUp size={10} /> : <ArrowDown size={10} />}{Math.abs(m.delta)}%
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}

/* =========================== TELA: PAINEL DE EVOLUÇÃO ==================== */
/* Velocidade por área: minutos por questão ao longo das semanas.
   Curva caindo = você está ficando mais rápido, que é metade do jogo no ENEM. */
function GraficoTempoPorArea({ estado }) {
  const dados = useMemo(() => {
    const porSemana = {};
    (estado.sessoes || []).forEach((s) => {
      if (!s.minutos || !s.questoes) return;
      const area = s.area || BLOCO_BY_ID[s.blocoId]?.area;
      if (!area || !AREA[area]) return;
      const seg = addDays(s.data, -((parse(s.data).getDay() + 6) % 7));
      porSemana[seg] ||= { semana: fmtBR(seg), _m: {}, _q: {} };
      porSemana[seg]._m[area] = (porSemana[seg]._m[area] || 0) + s.minutos;
      porSemana[seg]._q[area] = (porSemana[seg]._q[area] || 0) + s.questoes;
    });
    return Object.entries(porSemana).sort(([a], [b]) => a.localeCompare(b)).map(([, v]) => {
      const linha = { semana: v.semana };
      Object.keys(AREA).forEach((a) => {
        if (v._q[a]) linha[a] = +(v._m[a] / v._q[a]).toFixed(2);
      });
      return linha;
    });
  }, [estado.sessoes]);

  const ultima = dados[dados.length - 1] || {};
  if (dados.length < 2) {
    return (
      <Card className="p-5">
        <h3 style={{ fontSize: 16 }}>Tempo por questão, por área</h3>
        <div style={{ fontSize: 12.5, color: T.ink50, marginTop: 8, lineHeight: 1.6 }}>
          Registre questões com tempo em pelo menos duas semanas — pelo "Registrar estudo" com tipo Simulado,
          ou importando uma prova com o tempo por área — e a curva de velocidade aparece aqui.
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 style={{ fontSize: 16 }}>Tempo por questão, por área</h3>
          <div style={{ fontSize: 12, color: T.ink50, marginTop: 2 }}>Minutos por questão. Curva caindo é ganho de velocidade.</div>
        </div>
        <div className="flex gap-2">
          {Object.entries(AREA).filter(([k]) => ultima[k] != null).map(([k, a]) => (
            <div key={k} className="text-center" style={{ background: T.paper, borderRadius: 10, padding: "7px 11px" }}>
              <div className="mono" style={{ fontSize: 14, fontWeight: 700, color: a.cor }}>{ultima[k]}</div>
              <div style={{ fontSize: 9.5, color: T.ink50 }}>{a.curto} min/q</div>
            </div>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={dados}>
          <CartesianGrid strokeDasharray="3 5" stroke={T.lineSoft} vertical={false} />
          <XAxis dataKey="semana" tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} width={34}
            label={{ value: "min/questão", angle: -90, position: "insideLeft", style: { fontSize: 10, fill: T.ink30 } }} />
          <Tooltip contentStyle={{ borderRadius: 12, border: `1px solid ${T.line}`, fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          {Object.entries(AREA).map(([k, a]) => (
            <Line key={k} type="monotone" dataKey={k} stroke={a.cor} strokeWidth={2.2} dot={{ r: 3 }} name={a.curto} connectNulls />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <div style={{ fontSize: 11, color: T.ink30, marginTop: 10, lineHeight: 1.5 }}>
        Referência do ENEM: 5h30 para 90 questões no dia 1 (~3,7 min/q) e 5h para 90 no dia 2 (~3,3 min/q), já descontando a redação.
      </div>
    </Card>
  );
}

function TelaEvolucao({ ctx }) {
  const { estado, agg, tot } = ctx;
  const sims = [...(estado.simulados || [])].sort((a, b) => a.data.localeCompare(b.data));

  const serieSim = sims.map((s, i) => ({
    nome: `S${i + 1}`, data: fmtBR(s.data), media: mediaSimulado(s),
    ...Object.fromEntries(Object.keys(AREA).map((a) => [a, notaArea(a, s.areas?.[a] ?? 0)])),
    redacao: s.redacao || 0,
  }));

  const porSemana = useMemo(() => {
    const map = {};
    (estado.sessoes || []).forEach((s) => {
      const seg = addDays(s.data, -((parse(s.data).getDay() + 6) % 7));
      const m = (map[seg] ||= { semana: fmtBR(seg), minutos: 0, questoes: 0, acertos: 0 });
      m.minutos += s.minutos || 0; m.questoes += s.questoes || 0; m.acertos += s.acertos || 0;
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b)).map(([, v]) => ({
      ...v, horas: +(v.minutos / 60).toFixed(1), precisao: v.questoes ? Math.round((v.acertos / v.questoes) * 100) : 0,
    }));
  }, [estado.sessoes]);

  const radar = Object.entries(REINOS).map(([sig, r]) => {
    const bs = BLOCOS.filter((b) => b.sig === sig).map((b) => agg[b.id]).filter((m) => m?.pct != null);
    return { reino: r.nome, valor: bs.length ? Math.round(bs.reduce((x, m) => x + m.pct, 0) / bs.length) : 0, meta: 80 };
  });

  const porDisciplina = Object.entries(REINOS).map(([sig, r]) => {
    const ses = (estado.sessoes || []).filter((s) => BLOCO_BY_ID[s.blocoId]?.sig === sig);
    const q = ses.reduce((a, s) => a + (s.questoes || 0), 0);
    const ac = ses.reduce((a, s) => a + (s.acertos || 0), 0);
    return { nome: r.nome, questoes: q, precisao: q ? Math.round((ac / q) * 100) : 0, horas: +(ses.reduce((a, s) => a + (s.minutos || 0), 0) / 60).toFixed(1), cor: r.cor };
  }).sort((a, b) => b.precisao - a.precisao);

  const semDados = sims.length === 0 && porSemana.length === 0;

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Painel de evolução" sub="Onde você estava, onde está e para onde a curva aponta. Tudo calculado a partir do que você registrou." />
      {semDados ? (
        <Card><Empty icon={TrendingUp} titulo="Sem dados para plotar ainda" txt="Registre uma sessão de estudo ou um simulado e os gráficos aparecem aqui automaticamente." /></Card>
      ) : (
        <>
          {sims.length > 0 && (
            <Card className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div><h3 style={{ fontSize: 16 }}>Média estimada por simulado</h3>
                  <div style={{ fontSize: 12, color: T.ink50, marginTop: 2 }}>Termômetro de acerto bruto contra a meta de {META_GERAL}</div></div>
                <Pill cor={T.primary}>{sims.length} simulados</Pill>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={serieSim}>
                  <defs>
                    <linearGradient id="gMedia" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={T.primary} stopOpacity={0.28} />
                      <stop offset="100%" stopColor={T.primary} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 5" stroke={T.lineSoft} vertical={false} />
                  <XAxis dataKey="data" tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[400, 1000]} tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} width={38} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: `1px solid ${T.line}`, fontSize: 12 }} />
                  <Area type="monotone" dataKey="media" stroke={T.primary} strokeWidth={2.5} fill="url(#gMedia)" name="Média estimada" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          )}

          <div className="grid lg:grid-cols-2 gap-4">
            {sims.length > 0 && (
              <Card className="p-5">
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>Evolução por área</h3>
                <div style={{ fontSize: 12, color: T.ink50, marginBottom: 14 }}>Nota estimada de cada área ao longo dos simulados</div>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={serieSim}>
                    <CartesianGrid strokeDasharray="3 5" stroke={T.lineSoft} vertical={false} />
                    <XAxis dataKey="data" tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} />
                    <YAxis domain={[300, 1000]} tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} width={38} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: `1px solid ${T.line}`, fontSize: 12 }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    {Object.entries(AREA).map(([k, a]) => (
                      <Line key={k} type="monotone" dataKey={k} stroke={a.cor} strokeWidth={2} dot={{ r: 3 }} name={a.curto} />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            )}

            <Card className="p-5">
              <h3 style={{ fontSize: 16, marginBottom: 4 }}>Precisão por reino</h3>
              <div style={{ fontSize: 12, color: T.ink50, marginBottom: 10 }}>Média de acerto nas questões registradas · linha de segurança em 80%</div>
              <ResponsiveContainer width="100%" height={240}>
                <RadarChart data={radar} outerRadius="72%">
                  <PolarGrid stroke={T.line} />
                  <PolarAngleAxis dataKey="reino" tick={{ fontSize: 10.5, fill: T.ink50 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 9, fill: T.ink30 }} axisLine={false} />
                  <Radar name="Precisão" dataKey="valor" stroke={T.primary} fill={T.primary} fillOpacity={0.24} strokeWidth={2} />
                  <Radar name="Segurança" dataKey="meta" stroke={T.jade} fill="none" strokeWidth={1.4} strokeDasharray="4 4" />
                  <Tooltip contentStyle={{ borderRadius: 12, border: `1px solid ${T.line}`, fontSize: 12 }} />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {porSemana.length > 0 && (
            <div className="grid lg:grid-cols-2 gap-4">
              <Card className="p-5">
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>Horas e questões por semana</h3>
                <div style={{ fontSize: 12, color: T.ink50, marginBottom: 14 }}>Volume real contra o teto de 8–9h efetivas por dia</div>
                <ResponsiveContainer width="100%" height={230}>
                  <BarChart data={porSemana}>
                    <CartesianGrid strokeDasharray="3 5" stroke={T.lineSoft} vertical={false} />
                    <XAxis dataKey="semana" tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} width={34} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: `1px solid ${T.line}`, fontSize: 12 }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Bar dataKey="horas" fill={T.primary} radius={[6, 6, 0, 0]} name="Horas" />
                    <Bar dataKey="questoes" fill={T.gold} radius={[6, 6, 0, 0]} name="Questões" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
              <Card className="p-5">
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>Taxa de acerto por semana</h3>
                <div style={{ fontSize: 12, color: T.ink50, marginBottom: 14 }}>A curva que precisa subir até novembro</div>
                <ResponsiveContainer width="100%" height={230}>
                  <LineChart data={porSemana}>
                    <CartesianGrid strokeDasharray="3 5" stroke={T.lineSoft} vertical={false} />
                    <XAxis dataKey="semana" tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} width={34} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: `1px solid ${T.line}`, fontSize: 12 }} />
                    <Line type="monotone" dataKey="precisao" stroke={T.jade} strokeWidth={2.6} dot={{ r: 3.5 }} name="Precisão %" />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>
          )}

          <GraficoTempoPorArea estado={estado} />

          <Card className="p-5">
            <h3 style={{ fontSize: 16, marginBottom: 14 }}>Ranking das disciplinas</h3>
            <div className="space-y-2.5">
              {porDisciplina.map((d, i) => (
                <div key={d.nome} className="flex items-center gap-3">
                  <div className="mono" style={{ width: 20, fontSize: 12, color: T.ink30, fontWeight: 700 }}>{i + 1}</div>
                  <div style={{ width: 92, fontSize: 12.5, fontWeight: 600 }}>{d.nome}</div>
                  <div className="flex-1"><Barra pct={d.precisao} cor={d.cor} h={7} /></div>
                  <div className="mono" style={{ width: 42, fontSize: 12.5, fontWeight: 700, textAlign: "right", color: d.cor }}>{d.precisao}%</div>
                  <div className="mono" style={{ width: 96, fontSize: 11, color: T.ink50, textAlign: "right" }}>{d.questoes}q · {d.horas}h</div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
}

/* ============================= TELA: SIMULADOS =========================== */
function TelaSimulados({ ctx }) {
  const { estado, addSimulado, delSimulado } = ctx;
  const [open, setOpen] = useState(false);
  const [f, setF] = useState({ data: ctx.hoje, nome: "", minutos: "", LC: "", CH: "", CN: "", MAT: "", redacao: "", obs: "", aguardando: false });
  const sims = [...(estado.simulados || [])].sort((a, b) => b.data.localeCompare(a.data));

  const salvar = () => {
    if (!f.nome.trim()) return;
    addSimulado({
      id: `sim${Date.now()}`, data: f.data, nome: f.nome.trim(), minutos: +f.minutos || 0,
      areas: { LC: +f.LC || 0, CH: +f.CH || 0, CN: +f.CN || 0, MAT: +f.MAT || 0 },
      redacao: +f.redacao || 0, obs: f.obs.trim(), aguardando: f.aguardando,
    });
    setF({ data: ctx.hoje, nome: "", minutos: "", LC: "", CH: "", CN: "", MAT: "", redacao: "", obs: "", aguardando: false });
    setOpen(false);
  };

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Simulados" sub="O histórico que calibra todo o resto. Cada registro atualiza suas prioridades, o mapa de desempenho e a projeção."
        acao={<Btn icon={Plus} onClick={() => setOpen(true)}>Registrar simulado</Btn>} />

      <Card className="p-4" style={{ background: T.amberSoft, borderColor: "#F0DFB6" }}>
        <div className="flex items-start gap-3">
          <Info size={15} color={T.amber} strokeWidth={2.4} style={{ flexShrink: 0, marginTop: 2 }} />
          <div style={{ fontSize: 12.5, color: "#7A5B0A", lineHeight: 1.6 }}>
            <strong>Sobre a nota estimada.</strong> A plataforma converte acertos brutos em uma nota aproximada para servir de termômetro.
            Isso não é TRI real — a TRI depende do desempenho de todos os candidatos do ano e só existe depois da prova. Use a tendência, não o número exato.
          </div>
        </div>
      </Card>

      {sims.filter((x) => x.aguardando).length > 0 && (
        <Card className="overflow-hidden">
          <div className="p-4" style={{ background: T.amberSoft, borderBottom: `1px solid ${T.lineSoft}` }}>
            <div className="flex items-center gap-2">
              <Hourglass size={15} color={T.amber} strokeWidth={2.4} />
              <h3 style={{ fontSize: 15, color: "#7A5B0A" }}>Aguardando resolução comentada · {sims.filter((x) => x.aguardando).length}</h3>
            </div>
            <div style={{ fontSize: 12, color: "#8A6512", marginTop: 3 }}>Não contam como atraso. Quando a correção sair, registre para os erros entrarem no fluxo.</div>
          </div>
          {sims.filter((x) => x.aguardando).map((x) => (
            <div key={x.id} className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{x.nome}</div>
                <div className="mono" style={{ fontSize: 11.5, color: T.ink50, marginTop: 2 }}>
                  aplicado em {fmtBR(x.data)} · {diffDays(x.data, ctx.hoje)} dias esperando
                </div>
              </div>
              <Btn size="sm" variant="ghost" onClick={() => ctx.marcarCorrigido(x.id)}>Correção saiu</Btn>
            </div>
          ))}
        </Card>
      )}

      {sims.length === 0 ? (
        <Card><Empty icon={ClipboardList} titulo="Nenhum simulado registrado" txt="O primeiro simulado completo está marcado no macroplano para o domingo da Semana 4 (23/08). Antes dele, os domingos são simulados por área."
          acao={<Btn icon={Plus} onClick={() => setOpen(true)}>Registrar o primeiro</Btn>} /></Card>
      ) : (
        <div className="space-y-3">
          {sims.map((s, i) => {
            const media = mediaSimulado(s);
            const ant = sims[i + 1];
            const delta = ant ? media - mediaSimulado(ant) : null;
            return (
              <Card key={s.id} className="p-5 anim-rise" style={{ animationDelay: `${i * 45}ms` }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 style={{ fontSize: 16 }}>{s.nome}</h3>
                      {media >= META_GERAL && <Pill cor={T.jade}><Trophy size={10} />acima da meta</Pill>}
                    </div>
                    <div className="mono" style={{ fontSize: 11.5, color: T.ink50, marginTop: 3 }}>
                      {fmtBR(s.data)}{s.minutos ? ` · ${Math.floor(s.minutos / 60)}h${String(s.minutos % 60).padStart(2, "0")}` : ""} · {Object.values(s.areas).reduce((a, b) => a + b, 0)} acertos de 180
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="mono" style={{ fontSize: 27, fontWeight: 700, color: media >= META_GERAL ? T.jade : T.ink, lineHeight: 1 }}>{media}</div>
                      <div style={{ fontSize: 10.5, color: T.ink50, marginTop: 3 }}>média estimada</div>
                    </div>
                    {delta != null && (
                      <Pill cor={delta >= 0 ? T.jade : T.rose}>{delta >= 0 ? <ArrowUp size={10} /> : <ArrowDown size={10} />}{Math.abs(delta)} pts</Pill>
                    )}
                    <button onClick={() => delSimulado(s.id)} style={{ background: "none", border: "none", color: T.ink30, padding: 4 }}><Trash2 size={14} /></button>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {Object.entries(AREA).map(([k, a]) => {
                    const ac = s.areas?.[k] ?? 0;
                    const gap = a.meta - ac;
                    return (
                      <div key={k} className="p-3" style={{ background: T.paper, borderRadius: 12 }}>
                        <div className="flex items-center justify-between mb-1.5">
                          <Eyebrow cor={a.cor}>{a.curto}</Eyebrow>
                          <span className="mono" style={{ fontSize: 10.5, color: gap <= 0 ? T.jade : T.ink50, fontWeight: 700 }}>{gap <= 0 ? "meta ok" : `-${gap}`}</span>
                        </div>
                        <div className="mono" style={{ fontSize: 19, fontWeight: 700 }}>{ac}<span style={{ fontSize: 11, color: T.ink30 }}>/45</span></div>
                        <div className="mt-2"><Barra pct={(ac / a.meta) * 100} cor={a.cor} h={5} /></div>
                        <div className="mono" style={{ fontSize: 10, color: T.ink50, marginTop: 4 }}>~{notaArea(k, ac)} pts</div>
                      </div>
                    );
                  })}
                  <div className="p-3" style={{ background: T.goldSoft, borderRadius: 12 }}>
                    <Eyebrow cor={T.gold}>Redação</Eyebrow>
                    <div className="mono" style={{ fontSize: 19, fontWeight: 700, marginTop: 4 }}>{s.redacao || "—"}</div>
                    <div className="mt-2"><Barra pct={(s.redacao || 0) / 10} cor={T.gold} h={5} track="#F5E4C6" /></div>
                    <div className="mono" style={{ fontSize: 10, color: "#8A6512", marginTop: 4 }}>alvo: perto de 1000</div>
                  </div>
                </div>
                {s.obs && <div className="mt-3 p-3" style={{ background: T.paper, borderRadius: 11, fontSize: 12.5, color: T.ink70, lineHeight: 1.6 }}>{s.obs}</div>}
              </Card>
            );
          })}
        </div>
      )}

      <Modal open={open} onClose={() => setOpen(false)} title="Registrar simulado" sub="Acertos por área, de 0 a 45. A plataforma calcula o resto.">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Data"><input type="date" value={f.data} onChange={(e) => setF({ ...f, data: e.target.value })} style={inputCss} /></Field>
            <Field label="Tempo total (minutos)"><input type="number" placeholder="330" value={f.minutos} onChange={(e) => setF({ ...f, minutos: e.target.value })} style={inputCss} /></Field>
          </div>
          <Field label="Nome ou fonte"><input placeholder="Ex.: Simulado ENEM completo — 1ª aplicação" value={f.nome} onChange={(e) => setF({ ...f, nome: e.target.value })} style={inputCss} /></Field>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(AREA).map(([k, a]) => (
              <Field key={k} label={`${a.curto} (meta ${a.meta})`}>
                <input type="number" min="0" max="45" placeholder="0" value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} style={inputCss} />
              </Field>
            ))}
          </div>
          <Field label="Nota da redação (0 a 1000)"><input type="number" min="0" max="1000" placeholder="0" value={f.redacao} onChange={(e) => setF({ ...f, redacao: e.target.value })} style={inputCss} /></Field>
          <button onClick={() => setF({ ...f, aguardando: !f.aguardando })} className="w-full flex items-start gap-2.5 p-3 text-left"
            style={{ background: f.aguardando ? T.amberSoft : T.paper, border: `1px solid ${f.aguardando ? "#F0DFB6" : T.line}`, borderRadius: 12 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
              border: f.aguardando ? "none" : `2px solid ${T.line}`, background: f.aguardando ? T.amber : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center" }}>
              {f.aguardando && <Check size={13} color="#fff" strokeWidth={3} />}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650 }}>Aguardando resolução comentada</div>
              <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 2, lineHeight: 1.5 }}>
                Simulado do cursinho já aplicado, correção ainda não saiu. Não conta como atraso nem entra no ciclo de revisão até você registrar a correção.
              </div>
            </div>
          </button>

          <Field label="Observações"><textarea rows={3} placeholder="Onde perdeu tempo, o que travou, o que já sabia que ia errar…" value={f.obs} onChange={(e) => setF({ ...f, obs: e.target.value })} style={{ ...inputCss, resize: "vertical" }} /></Field>
          <div className="flex gap-2 justify-end pt-1">
            <Btn variant="ghost" onClick={() => setOpen(false)}>Cancelar</Btn>
            <Btn onClick={salvar} disabled={!f.nome.trim()}>Salvar simulado</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}

/* ============================= TELA: REVISÕES ============================ */
function TelaRevisoes({ ctx }) {
  const { estado, hoje, concluirRevisao, agendarRevisao, aplicar, toast } = ctx;
  const [open, setOpen] = useState(false);
  const [pick, setPick] = useState("");

  const cardsPendentes = flashcardsPendentes(estado, hoje).sort((a, b) => a.venc.localeCompare(b.venc));
  const revisarFlashcard = (id, lembrou) => {
    aplicar((e) => ({
      ...e,
      flashcards: (e.flashcards || []).map((f) => {
        if (f.id !== id) return f;
        const etapa = proximaEtapaFlashcard(f.etapa, lembrou);
        return { ...f, etapa, venc: addDays(hoje, etapa) };
      }),
      xp: e.xp + XP.flashcardRevisado,
    }));
    toast(lembrou ? `+${XP.flashcardRevisado} XP` : "Ciclo reiniciado", lembrou ? "Intervalo aumentou" : "D+1 de novo — sem problema, é assim que fixa", lembrou ? "#7C5CD6" : T.amber, lembrou ? Brain : RotateCcw);
  };
  const editarFlashcard = (id, frente, verso) =>
    aplicar((e) => ({ ...e, flashcards: (e.flashcards || []).map((f) => (f.id === id ? { ...f, frente, verso } : f)) }));
  const excluirFlashcard = (id) =>
    aplicar((e) => ({ ...e, flashcards: (e.flashcards || []).filter((f) => f.id !== id) }));

  const plano = revisoesDoDia(estado, hoje);
  const revs = (estado.revisoes || []).filter((r) => !r.feita);
  const grupos = {
    atrasada: revs.filter((r) => r.venc < hoje),
    hoje: revs.filter((r) => r.venc === hoje),
    amanha: revs.filter((r) => r.venc === addDays(hoje, 1)),
    proximas: revs.filter((r) => r.venc > addDays(hoje, 1)).sort((a, b) => a.venc.localeCompare(b.venc)),
  };
  const cfg = {
    atrasada: { t: "Atrasadas", cor: T.rose, soft: T.roseSoft, sub: "Revisão vem antes de conteúdo novo. Estas são a prioridade zero do dia." },
    hoje: { t: "Vencem hoje", cor: T.primary, soft: T.primarySoft, sub: "No ciclo. Feche antes de abrir bloco novo." },
    amanha: { t: "Vencem amanhã", cor: T.amber, soft: T.amberSoft, sub: "Já entram no planejamento de amanhã." },
    proximas: { t: "Próximas", cor: T.ink50, soft: T.lineSoft, sub: "Agendadas pelo ciclo D+1 / D+7 / D+30." },
  };

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Revisões" sub="Todo bloco concluído entra automaticamente no ciclo D+1, D+7 e D+30. Se um conteúdo continuar gerando erro, o ciclo reinicia."
        acao={<Btn icon={Plus} variant="ghost" onClick={() => setOpen(true)}>Agendar manualmente</Btn>} />

      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Eyebrow cor={T.primary}>Plano de hoje</Eyebrow>
            <div className="flex items-baseline gap-2 mt-1.5">
              <span className="mono" style={{ fontSize: 30, fontWeight: 700, color: T.primary }}>{plano.hoje.length}</span>
              <span style={{ fontSize: 13, color: T.ink50 }}>revisões hoje</span>
              <span className="mono" style={{ fontSize: 15, fontWeight: 700, color: T.ink30, marginLeft: 10 }}>{plano.fila.length}</span>
              <span style={{ fontSize: 13, color: T.ink50 }}>na fila</span>
            </div>
            <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 5, lineHeight: 1.5 }}>
              A fila não acumula como atraso — o que não cabe hoje é redistribuído.
              {plano.fila.length > 0 && ` No ritmo atual, zera em ${plano.diasParaZerar} dias.`}
            </div>
          </div>
          <div>
            <Eyebrow>Teto diário</Eyebrow>
            <div className="flex items-center gap-1.5 mt-2">
              {[3, 4, 6, 8].map((n) => (
                <button key={n} onClick={() => ctx.definirTeto(n)} className="mono" style={{
                  background: plano.teto === n ? T.primary : T.lineSoft, color: plano.teto === n ? "#fff" : T.ink50,
                  border: "none", borderRadius: 9, padding: "7px 13px", fontSize: 12, fontWeight: 700,
                }}>{n}</button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {plano.hoje.length > 0 && (
        <Card className="overflow-hidden">
          <div className="p-4" style={{ background: T.primarySoft, borderBottom: `1px solid ${T.lineSoft}` }}>
            <h3 style={{ fontSize: 15, color: T.primaryDeep }}>Revisar hoje · {plano.hoje.length}</h3>
            <div style={{ fontSize: 12, color: T.ink50, marginTop: 3 }}>Ordem: prioridade ALTA no caderno, depois mais atrasada, depois ranking.</div>
          </div>
          {plano.hoje.map((r) => {
            const b = BLOCO_BY_ID[r.blocoId];
            if (!b) return null;
            return (
              <div key={r.id} className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
                <button onClick={() => concluirRevisao(r.id)} style={{ width: 24, height: 24, borderRadius: 8, border: `2px solid ${T.line}`, background: "transparent", flexShrink: 0 }} />
                <div style={{ width: 4, height: 26, borderRadius: 99, background: b.cor, flexShrink: 0 }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span style={{ fontSize: 13.5, fontWeight: 600 }}>{b.sig} {b.n} · {b.nome}</span>
                    {r.alta && <Pill cor={T.rose} soft={T.roseSoft}>ALTA</Pill>}
                  </div>
                  <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 1 }}>{REINOS[b.sig].nome} · ranking {b.rank}º</div>
                </div>
                <Pill cor={r.etapa === 1 ? T.primary : r.etapa === 7 ? T.ice : "#7C5CD6"}>D+{r.etapa}</Pill>
                {r.atraso > 0 && <span className="mono" style={{ fontSize: 11, color: T.ink30 }}>{r.atraso}d</span>}
              </div>
            );
          })}
        </Card>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ display: "none" }}>
        {Object.entries(grupos).map(([k, arr], i) => (
          <Card key={k} className="p-4 anim-rise" style={{ animationDelay: `${i * 40}ms`, borderColor: k === "atrasada" && arr.length ? T.rose : T.line }}>
            <Eyebrow cor={cfg[k].cor}>{cfg[k].t}</Eyebrow>
            <div className="mono" style={{ fontSize: 27, fontWeight: 700, color: arr.length ? cfg[k].cor : T.ink30, marginTop: 6 }}>{arr.length}</div>
          </Card>
        ))}
      </div>

      {cardsPendentes.length > 0 && (
        <Card className="overflow-hidden">
          <div className="p-4" style={{ background: "#F1EEFC", borderBottom: `1px solid ${T.lineSoft}` }}>
            <div className="flex items-center gap-2">
              <Brain size={15} color="#7C5CD6" strokeWidth={2.4} />
              <h3 style={{ fontSize: 15, color: "#5B3FBF" }}>Flashcards para revisar · {cardsPendentes.length}</h3>
            </div>
            <div style={{ fontSize: 12, color: T.ink50, marginTop: 3 }}>Veja a frente, tente responder de cabeça, só então vire o cartão — é isso que fixa.</div>
          </div>
          <div className="grid md:grid-cols-2 gap-3 p-4">
            {cardsPendentes.map((c) => (
              <CartaoFlashcard key={c.id} card={c} onLembrar={revisarFlashcard} onEditar={editarFlashcard} onExcluir={excluirFlashcard} />
            ))}
          </div>
        </Card>
      )}

      {revs.length === 0 ? (
        <Card><Empty icon={RefreshCw} titulo="Nenhuma revisão pendente" txt="Conclua um bloco na missão do dia e as revisões D+1, D+7 e D+30 são agendadas sozinhas." /></Card>
      ) : (
        Object.entries(grupos).filter(([, arr]) => arr.length).map(([k, arr]) => (
          <Card key={k} className="overflow-hidden">
            <div className="p-4" style={{ background: cfg[k].soft, borderBottom: `1px solid ${T.lineSoft}` }}>
              <div className="flex items-center justify-between">
                <h3 style={{ fontSize: 15, color: cfg[k].cor }}>{cfg[k].t} · {arr.length}</h3>
              </div>
              <div style={{ fontSize: 12, color: T.ink50, marginTop: 3 }}>{cfg[k].sub}</div>
            </div>
            {arr.map((r) => {
              const b = BLOCO_BY_ID[r.blocoId];
              if (!b) return null;
              const atraso = diffDays(r.venc, hoje);
              return (
                <div key={r.id} className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
                  <button onClick={() => concluirRevisao(r.id)} style={{
                    width: 24, height: 24, borderRadius: 8, border: `2px solid ${T.line}`, background: "transparent", flexShrink: 0,
                  }} title="Marcar como revisado" />
                  <div style={{ width: 4, height: 26, borderRadius: 99, background: b.cor, flexShrink: 0 }} />
                  <div className="flex-1 min-w-0">
                    <div style={{ fontSize: 13.5, fontWeight: 600 }}>{b.sig} {b.n} · {b.nome}</div>
                    <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 1 }}>{REINOS[b.sig].nome} · ranking {b.rank}º</div>
                  </div>
                  <Pill cor={r.etapa === 1 ? T.primary : r.etapa === 7 ? T.ice : "#7C5CD6"}>D+{r.etapa}</Pill>
                  <div className="mono text-right" style={{ width: 76, fontSize: 11.5, color: atraso > 0 ? T.rose : T.ink50, flexShrink: 0 }}>
                    {atraso > 0 ? `${atraso}d atrasada` : fmtBR(r.venc)}
                  </div>
                </div>
              );
            })}
          </Card>
        ))
      )}

      <Modal open={open} onClose={() => setOpen(false)} title="Agendar revisão" sub="Escolha o bloco e o ciclo começa em D+1.">
        <div className="space-y-4">
          <Field label="Bloco da base">
            <select value={pick} onChange={(e) => setPick(e.target.value)} style={inputCss}>
              <option value="">Selecione…</option>
              {Object.entries(REINOS).map(([sig, r]) => (
                <optgroup key={sig} label={r.nome}>
                  {BLOCOS.filter((b) => b.sig === sig).map((b) => <option key={b.id} value={b.id}>{b.id} · {b.nome} (ranking {b.rank}º)</option>)}
                </optgroup>
              ))}
            </select>
          </Field>
          <div className="flex gap-2 justify-end">
            <Btn variant="ghost" onClick={() => setOpen(false)}>Cancelar</Btn>
            <Btn disabled={!pick} onClick={() => { agendarRevisao(pick); setPick(""); setOpen(false); }}>Agendar ciclo completo</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}

/* ========================== TELA: CADERNO DE ERROS ======================= */
const TIPOS_ERRO = ["CONCEITO", "INTERPRETAÇÃO", "CÁLCULO", "ATENÇÃO", "PEGADINHA", "NÃO ESTUDADO"];
const STATUS_QUESTAO = ["Errei", "Acertei sem segurança", "Acertei no chute", "Demorei demais", "Padrão novo"];
const PRIORIDADES = ["BAIXA", "MÉDIA", "ALTA"];

/* Sugestão automática de prioridade (critério do 02-METODO-E-ESTRATEGIA):
   ALTA = CONCEITO em ranking alto, OU mesmo tipo repetido no tópico,
          OU NÃO ESTUDADO em bloco top-8. */
function sugerirPrioridade(estado, blocoId, tipo) {
  const b = blocoId ? BLOCO_BY_ID[blocoId] : null;
  if (!b) return { p: "MÉDIA", porque: "Sem bloco vinculado" };
  const mesmos = (estado.erros || []).filter((e) => e.blocoId === blocoId && e.tipo === tipo).length;
  if (tipo === "CONCEITO" && b.rank <= 10) return { p: "ALTA", porque: `Erro de conceito em bloco de ranking ${b.rank}º` };
  if (mesmos >= 1) return { p: "ALTA", porque: `${mesmos + 1}ª vez com erro de ${tipo} neste bloco` };
  if (tipo === "NÃO ESTUDADO" && b.rank <= 8) return { p: "ALTA", porque: `Conteúdo não estudado em bloco top-8 (${b.rank}º)` };
  if (tipo === "ATENÇÃO" || tipo === "CÁLCULO") return { p: "BAIXA", porque: "Erro de fluência — trata-se com volume diário, não com bloco de revisão" };
  if (b.rank <= 16) return { p: "MÉDIA", porque: `Incidência média (ranking ${b.rank}º)` };
  return { p: "BAIXA", porque: `Baixa incidência (ranking ${b.rank}º)` };
}

/* Tendência: distribuição de tipo de erro por área ao longo das semanas.
   Serve para ver se erro de ATENÇÃO em Matemática cai conforme o volume sobe. */
function PainelTendencia({ erros }) {
  const [area, setArea] = useState("todas");

  const dados = useMemo(() => {
    const filtrados = erros.filter((e) => {
      if (area === "todas") return true;
      const b = BLOCO_BY_ID[e.blocoId];
      return b && b.area === area;
    });
    const porSemana = {};
    filtrados.forEach((e) => {
      const seg = addDays(e.data, -((parse(e.data).getDay() + 6) % 7));
      porSemana[seg] ||= { semana: fmtBR(seg) };
      TIPOS_ERRO.forEach((t) => { porSemana[seg][t] ||= 0; });
      if (TIPOS_ERRO.includes(e.tipo)) porSemana[seg][e.tipo]++;
    });
    return Object.entries(porSemana).sort(([a], [b]) => a.localeCompare(b)).map(([, v]) => v);
  }, [erros, area]);

  const CORES = { "CONCEITO": T.rose, "INTERPRETAÇÃO": "#7C5CD6", "CÁLCULO": T.amber,
    "ATENÇÃO": T.ice, "PEGADINHA": T.gold, "NÃO ESTUDADO": T.ink30 };

  if (dados.length < 2) return null;

  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h3 style={{ fontSize: 15 }}>Tendência do tipo de erro</h3>
          <div style={{ fontSize: 12, color: T.ink50, marginTop: 2 }}>Erro de ATENÇÃO caindo = fluência subindo. CONCEITO caindo = lacuna fechando.</div>
        </div>
        <div className="flex gap-1.5">
          {["todas", ...Object.keys(AREA)].map((k) => (
            <button key={k} onClick={() => setArea(k)} style={{
              padding: "5px 10px", borderRadius: 99, fontSize: 11, fontWeight: 600, border: "none",
              background: area === k ? T.ink : T.lineSoft, color: area === k ? "#fff" : T.ink50,
            }}>{k === "todas" ? "Todas" : AREA[k].curto}</button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={dados}>
          <CartesianGrid strokeDasharray="3 5" stroke={T.lineSoft} vertical={false} />
          <XAxis dataKey="semana" tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: T.ink50 }} axisLine={false} tickLine={false} width={28} allowDecimals={false} />
          <Tooltip contentStyle={{ borderRadius: 12, border: `1px solid ${T.line}`, fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 10.5 }} />
          {TIPOS_ERRO.map((t) => <Bar key={t} dataKey={t} stackId="e" fill={CORES[t]} radius={[0, 0, 0, 0]} />)}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

function TelaErros({ ctx }) {
  const { estado, addErro, delErro, hoje } = ctx;
  const [open, setOpen] = useState(false);
  const [fTipo, setFTipo] = useState("todos");
  const [f, setF] = useState({ blocoId: "", busca: "", tipo: TIPOS_ERRO[0], status: STATUS_QUESTAO[0], prioridade: "", gatilho: "", motivo: "", evitar: "", obs: "" });

  const erros = [...(estado.erros || [])].sort((a, b) => b.data.localeCompare(a.data));
  const vis = erros.filter((e) => fTipo === "todos" || e.tipo === fTipo);

  const porTipo = TIPOS_ERRO.map((t) => ({ tipo: t, n: erros.filter((e) => e.tipo === t).length })).sort((a, b) => b.n - a.n);
  const porBloco = {};
  erros.forEach((e) => { porBloco[e.blocoId] = (porBloco[e.blocoId] || 0) + 1; });
  const reincidentes = Object.entries(porBloco).filter(([, n]) => n >= 2).sort(([, a], [, b]) => b - a).slice(0, 6);

  const sugestao = f.blocoId ? sugerirPrioridade(estado, f.blocoId, f.tipo) : null;
  const prioridadeFinal = f.prioridade || sugestao?.p || "MÉDIA";

  const salvar = () => {
    if (!f.blocoId) return;
    addErro({
      id: `err${Date.now()}`, data: hoje, blocoId: f.blocoId, tipo: f.tipo, status: f.status,
      prioridade: prioridadeFinal, gatilho: f.gatilho.trim(),
      motivo: f.motivo.trim(), evitar: f.evitar.trim(), obs: f.obs.trim(),
    });
    setF({ blocoId: "", busca: "", tipo: TIPOS_ERRO[0], status: STATUS_QUESTAO[0], prioridade: "", gatilho: "", motivo: "", evitar: "", obs: "" });
    setOpen(false);
  };

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Caderno de erros" sub="Errar uma vez é dado. Errar duas no mesmo assunto é padrão — e padrão a gente ataca no cronograma."
        acao={<Btn icon={Plus} onClick={() => setOpen(true)}>Registrar erro</Btn>} />

      {erros.length > 0 && (
        <div className="grid lg:grid-cols-2 gap-4">
          <Card className="p-5">
            <h3 style={{ fontSize: 15, marginBottom: 12 }}>Por tipo de erro</h3>
            <div className="space-y-2.5">
              {porTipo.filter((t) => t.n).map((t) => (
                <div key={t.tipo} className="flex items-center gap-3">
                  <div style={{ width: 148, fontSize: 12.5, color: T.ink70 }}>{t.tipo}</div>
                  <div className="flex-1"><Barra pct={(t.n / erros.length) * 100} cor={T.rose} h={7} /></div>
                  <div className="mono" style={{ width: 26, fontSize: 12, fontWeight: 700, textAlign: "right" }}>{t.n}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-5">
            <h3 style={{ fontSize: 15, marginBottom: 4 }}>Assuntos reincidentes</h3>
            <div style={{ fontSize: 12, color: T.ink50, marginBottom: 12 }}>Dois erros ou mais no mesmo bloco. Estes reiniciam o ciclo de revisão.</div>
            {reincidentes.length === 0 ? <div style={{ fontSize: 12.5, color: T.ink30 }}>Nenhum padrão de reincidência ainda.</div> : (
              <div className="space-y-2">
                {reincidentes.map(([id, n]) => {
                  const b = BLOCO_BY_ID[id];
                  return b ? (
                    <div key={id} className="flex items-center gap-3 p-2.5" style={{ background: T.roseSoft, borderRadius: 11 }}>
                      <div style={{ width: 4, height: 22, borderRadius: 99, background: b.cor }} />
                      <div className="flex-1" style={{ fontSize: 12.5, fontWeight: 600 }}>{b.sig} {b.n} · {b.nome}</div>
                      <Pill cor={T.rose}>{n}x</Pill>
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </Card>
        </div>
      )}

      {erros.length >= 3 && <PainelTendencia erros={erros} />}

      <Card className="overflow-hidden">
        <div className="flex flex-wrap items-center gap-2 p-4" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
          <span style={{ fontSize: 12, color: T.ink50, fontWeight: 600 }}>Tipo:</span>
          {["todos", ...TIPOS_ERRO].map((t) => (
            <button key={t} onClick={() => setFTipo(t)} style={{
              padding: "5px 11px", borderRadius: 99, fontSize: 11.5, fontWeight: 600, border: "none",
              background: fTipo === t ? T.ink : T.lineSoft, color: fTipo === t ? "#fff" : T.ink50,
            }}>{t === "todos" ? "Todos" : t}</button>
          ))}
        </div>
        {vis.length === 0 ? (
          <Empty icon={AlertTriangle} titulo="Caderno vazio" txt="Cada questão errada vira uma entrada aqui: disciplina, assunto, tipo, motivo e como evitar. É daqui que saem as prioridades de revisão."
            acao={<Btn icon={Plus} onClick={() => setOpen(true)}>Registrar o primeiro erro</Btn>} />
        ) : vis.map((e, i) => {
          const b = BLOCO_BY_ID[e.blocoId];
          const rep = porBloco[e.blocoId];
          return (
            <div key={e.id} className="p-4 anim-rise" style={{ borderBottom: `1px solid ${T.lineSoft}`, animationDelay: `${i * 30}ms` }}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {b && <Pill cor={b.cor}>{b.id}</Pill>}
                  <span style={{ fontSize: 13.5, fontWeight: 650 }}>{b ? b.nome : "Bloco removido"}</span>
                  <Pill cor={T.rose} soft={T.roseSoft}>{e.tipo}</Pill>
                  {rep >= 2 && <Pill cor={T.amber} soft={T.amberSoft}>{rep}ª vez neste bloco</Pill>}
                </div>
                <div className="flex items-center gap-2" style={{ flexShrink: 0 }}>
                  <span className="mono" style={{ fontSize: 11, color: T.ink30 }}>{fmtBR(e.data)}</span>
                  <button onClick={() => delErro(e.id)} style={{ background: "none", border: "none", color: T.ink30, padding: 2 }}><Trash2 size={13} /></button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-2 mt-2">
                <div className="p-3" style={{ background: T.paper, borderRadius: 11 }}>
                  <Eyebrow>Por que errei</Eyebrow>
                  <div style={{ fontSize: 12.5, marginTop: 5, lineHeight: 1.55, color: T.ink70 }}>{e.motivo}</div>
                </div>
                {e.evitar && (
                  <div className="p-3" style={{ background: T.jadeSoft, borderRadius: 11 }}>
                    <Eyebrow cor={T.jade}>Como não errar de novo</Eyebrow>
                    <div style={{ fontSize: 12.5, marginTop: 5, lineHeight: 1.55, color: "#0A6B50" }}>{e.evitar}</div>
                  </div>
                )}
              </div>
              {e.obs && <div style={{ fontSize: 12, color: T.ink50, marginTop: 8, lineHeight: 1.55 }}>{e.obs}</div>}
            </div>
          );
        })}
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} wide title="Registrar questão"
        sub="Sem enunciado nem alternativas — só o registro estruturado que vira dado.">
        <div className="space-y-4">
          <Field label="Conteúdo" hint="Digite o assunto — casa com os 169 blocos da base">
            <input value={f.busca} onChange={(e) => setF({ ...f, busca: e.target.value, blocoId: "" })}
              placeholder="Ex.: estequiometria" style={inputCss} />
          </Field>

          {!f.blocoId && f.busca.trim().length >= 3 && (
            <div className="space-y-1" style={{ maxHeight: 180, overflowY: "auto" }}>
              {casarBloco(f.busca, 6).map((b) => (
                <button key={b.id} onClick={() => setF({ ...f, blocoId: b.id, busca: b.nome })}
                  className="w-full flex items-center gap-2 p-2.5 text-left"
                  style={{ background: T.paper, border: "none", borderRadius: 10 }}>
                  <Pill cor={b.cor}>{b.sig} {b.n}</Pill>
                  <span className="flex-1" style={{ fontSize: 12.5, fontWeight: 600 }}>{b.nome}</span>
                  <Pill cor={b.rank <= 8 ? T.rose : T.ink50}>{b.rank}º</Pill>
                </button>
              ))}
            </div>
          )}

          {f.blocoId && (
            <div className="flex items-center gap-2 p-2.5" style={{ background: T.jadeSoft, borderRadius: 10 }}>
              <CheckCircle2 size={14} color={T.jade} />
              <span style={{ fontSize: 12.5, fontWeight: 600 }}>{BLOCO_BY_ID[f.blocoId].nome}</span>
              <Pill cor={T.ink50}>{REINOS[BLOCO_BY_ID[f.blocoId].sig].nome}</Pill>
              <Pill cor={BLOCO_BY_ID[f.blocoId].rank <= 8 ? T.rose : T.ink50}>ranking {BLOCO_BY_ID[f.blocoId].rank}º</Pill>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-3">
            <Field label="Status">
              <select value={f.status} onChange={(e) => setF({ ...f, status: e.target.value })} style={inputCss}>
                {STATUS_QUESTAO.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>
            <Field label="Tipo de erro">
              <select value={f.tipo} onChange={(e) => setF({ ...f, tipo: e.target.value, prioridade: "" })} style={inputCss}>
                {TIPOS_ERRO.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>
          </div>

          <Field label="Prioridade">
            <div className="flex gap-1.5">
              {PRIORIDADES.map((x) => {
                const ativo = prioridadeFinal === x;
                const c = x === "ALTA" ? T.rose : x === "MÉDIA" ? T.amber : T.ink50;
                return (
                  <button key={x} onClick={() => setF({ ...f, prioridade: x })} className="flex-1 mono" style={{
                    background: ativo ? c : T.lineSoft, color: ativo ? "#fff" : T.ink50,
                    border: "none", borderRadius: 10, padding: "9px 0", fontSize: 11.5, fontWeight: 700,
                  }}>{x}</button>
                );
              })}
            </div>
            {sugestao && (
              <div className="flex items-start gap-2 mt-2 p-2.5" style={{ background: T.primarySoft, borderRadius: 10 }}>
                <Sparkles size={12} color={T.primary} strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 11.5, color: T.primaryDeep, lineHeight: 1.5 }}>
                  Sugestão: <strong>{sugestao.p}</strong> — {sugestao.porque}
                </span>
              </div>
            )}
          </Field>

          <Field label="Gatilho de reconhecimento" hint="O que no enunciado entregava o conteúdo">
            <input value={f.gatilho} onChange={(e) => setF({ ...f, gatilho: e.target.value })}
              placeholder="Ex.: falou em 'mol' e deu massa molar" style={inputCss} />
          </Field>

          <Field label="Por que errei (opcional)">
            <textarea rows={2} value={f.motivo} onChange={(e) => setF({ ...f, motivo: e.target.value })} style={{ ...inputCss, resize: "vertical" }} />
          </Field>
          <Field label="Como evitar (opcional)">
            <textarea rows={2} value={f.evitar} onChange={(e) => setF({ ...f, evitar: e.target.value })} style={{ ...inputCss, resize: "vertical" }} />
          </Field>

          <div className="flex gap-2 justify-end pt-1">
            <Btn variant="ghost" onClick={() => setOpen(false)}>Cancelar</Btn>
            <Btn onClick={salvar} disabled={!f.blocoId}>Salvar no caderno</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}

/* ============================= TELA: CALENDÁRIO ========================== */
function TelaCalendario({ ctx }) {
  const { estado, hoje, toggleDescanso } = ctx;
  const [mesRef, setMesRef] = useState(hoje.slice(0, 7));

  const tipoDoDia = useCallback((d) => {
    if (d === ENEM_D1) return { tipo: "simulado", label: "PROVA — dia 1" };
    if (d === ENEM_D2) return { tipo: "simulado", label: "PROVA — dia 2" };
    if ((estado.descanso || []).includes(d)) return { tipo: "descanso", label: "descanso" };
    const sim = (estado.simulados || []).some((s) => s.data === d);
    if (sim) return { tipo: "simulado", label: "simulado" };
    const red = (estado.redacoes || []).some((r) => r.data === d);
    const m = estado.missoes?.[d];
    if (m?.completa) return { tipo: "perfeito", label: red ? "dia perfeito + redação" : "dia perfeito" };
    if (red) return { tipo: "redacao", label: "redação" };
    const ativo = (estado.sessoes || []).some((s) => s.data === d) || (m && Object.values(m.itens || {}).some(Boolean));
    if (ativo) return { tipo: "parcial", label: "dia incompleto" };
    return { tipo: d > hoje ? "futuro" : "vazio", label: d > hoje ? "ainda não chegou" : "sem registro" };
  }, [estado, hoje]);

  const dias = useMemo(() => {
    const arr = [];
    let d = estado.criadoEm;
    while (d <= ENEM_D2) { arr.push({ data: d, ...tipoDoDia(d) }); d = addDays(d, 1); }
    return arr;
  }, [estado, tipoDoDia]);

  const [ano, mes] = mesRef.split("-").map(Number);
  const primeiro = new Date(ano, mes - 1, 1);
  const offset = (primeiro.getDay() + 6) % 7;
  const nDias = new Date(ano, mes, 0).getDate();
  const grid = [...Array(offset).fill(null), ...Array.from({ length: nDias }, (_, i) => iso(new Date(ano, mes - 1, i + 1)))];

  const legenda = [["perfeito", T.jade, "Dia perfeito"], ["parcial", T.gold, "Dia incompleto"], ["simulado", T.primary, "Simulado / prova"], ["redacao", "#7C5CD6", "Redação"], ["descanso", T.ink30, "Descanso"]];
  const cores = { perfeito: T.jade, parcial: T.gold, simulado: T.primary, redacao: "#7C5CD6", descanso: T.ink30 };

  const cont = {};
  dias.forEach((d) => { cont[d.tipo] = (cont[d.tipo] || 0) + 1; });

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Calendário" sub="Cada dia entre hoje e 15 de novembro. A grade de bolhas é o seu cartão-resposta da preparação: preenchida é dia que rendeu." />

      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 style={{ fontSize: 16 }}>Da largada até a prova</h3>
            <div style={{ fontSize: 12, color: T.ink50, marginTop: 2 }}>{dias.length} dias · {cont.perfeito || 0} perfeitos · {cont.parcial || 0} incompletos</div>
          </div>
          <div className="flex flex-wrap gap-3">
            {legenda.map(([k, c, l]) => (
              <div key={k} className="flex items-center gap-1.5">
                <div style={{ width: 11, height: 11, borderRadius: 99, background: c }} />
                <span style={{ fontSize: 11, color: T.ink50 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
        <BubbleGrid dias={dias} hoje={hoje} onPick={(d) => setMesRef(d.data.slice(0, 7))} />
      </Card>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setMesRef(iso(new Date(ano, mes - 2, 1)).slice(0, 7))} style={{ background: T.lineSoft, border: "none", borderRadius: 10, padding: 7 }}><ChevronLeft size={15} /></button>
          <h3 style={{ fontSize: 17 }}>{MESES[mes - 1]} de {ano}</h3>
          <button onClick={() => setMesRef(iso(new Date(ano, mes, 1)).slice(0, 7))} style={{ background: T.lineSoft, border: "none", borderRadius: 10, padding: 7 }}><ChevronRight size={15} /></button>
        </div>
        <div className="grid grid-cols-7 gap-1.5 mb-2">
          {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
            <div key={d} className="mono text-center" style={{ fontSize: 10, color: T.ink30, fontWeight: 700, letterSpacing: ".08em" }}>{d.toUpperCase()}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {grid.map((d, i) => {
            if (!d) return <div key={`e${i}`} />;
            const t = tipoDoDia(d);
            const prova = d === ENEM_D1 || d === ENEM_D2;
            const cor = cores[t.tipo];
            const sem = semanaDe(d);
            return (
              <button key={d} onClick={() => toggleDescanso(d)} title={`${fmtBR(d)} · ${t.label} · Semana ${sem.n}`}
                style={{
                  aspectRatio: "1", borderRadius: 12, border: d === hoje ? `2px solid ${T.primary}` : `1px solid ${T.lineSoft}`,
                  background: prova ? T.ink : cor ? `${cor}1F` : T.surface,
                  color: prova ? "#fff" : cor || T.ink50,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2,
                  transition: "transform .16s ease", padding: 2,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}>
                <span className="mono" style={{ fontSize: 12.5, fontWeight: 700 }}>{parse(d).getDate()}</span>
                {prova ? <span style={{ fontSize: 7.5, fontWeight: 700 }}>PROVA</span>
                  : cor && <div style={{ width: 5, height: 5, borderRadius: 99, background: cor }} />}
              </button>
            );
          })}
        </div>
        <div style={{ fontSize: 11.5, color: T.ink30, marginTop: 12 }}>Clique em um dia para marcar ou desmarcar como descanso. Descanso não quebra a sequência.</div>
      </Card>
    </div>
  );
}

/* ============================ TELA: ESTATÍSTICAS ========================= */
function TelaEstatisticas({ ctx }) {
  const { estado, tot, hoje, agg, nivel } = ctx;
  const diasRestantes = diffDays(hoje, ENEM_D2);
  const blocosRestantes = BLOCOS.length - tot.blocosFeitos.size;
  const ritmo = tot.diasAtivos ? tot.blocosFeitos.size / tot.diasAtivos : 0;
  const diasNecessarios = ritmo > 0 ? Math.ceil(blocosRestantes / ritmo) : null;
  const mediaMinDia = tot.diasAtivos ? Math.round(tot.minutos / tot.diasAtivos) : 0;
  const qDia = tot.diasAtivos ? Math.round(tot.questoes / tot.diasAtivos) : 0;

  const blocosPorSemanaNecessario = diasRestantes > 0 ? (blocosRestantes / (diasRestantes / 7)).toFixed(1) : "—";

  const grade = [
    { l: "Dias ativos", v: tot.diasAtivos, s: "com algum registro" },
    { l: "Horas totais", v: tot.horas, s: `média de ${Math.floor(mediaMinDia / 60)}h${String(mediaMinDia % 60).padStart(2, "0")} por dia ativo` },
    { l: "Questões", v: tot.questoes.toLocaleString("pt-BR"), s: `${qDia} por dia ativo` },
    { l: "Taxa de acerto", v: `${tot.precisao}%`, s: tot.precisao >= 80 ? "zona segura" : tot.precisao >= 60 ? "abaixo do seguro" : "zona crítica", c: tot.precisao >= 80 ? T.jade : tot.precisao >= 60 ? T.amber : T.rose },
    { l: "Blocos concluídos", v: `${tot.blocosFeitos.size}/${BLOCOS.length}`, s: `${blocosRestantes} restantes` },
    { l: "Revisões feitas", v: tot.revisoes, s: "ciclo D+1 / D+7 / D+30" },
    { l: "Dias de missão fechada", v: tot.diasPerfeitos, s: "missão 100% concluída" },
    { l: "XP acumulado", v: estado.xp.toLocaleString("pt-BR"), s: `nível ${nivel.nivel} · ${nivel.titulo}`, c: T.gold },
  ];

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Estatísticas" sub="Os números frios da preparação. Sem interpretação bonita: é o que os registros dizem." />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {grade.map((g, i) => <Stat key={g.l} label={g.l} valor={g.v} sub={g.s} cor={g.c} delay={i * 35} />)}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Hourglass size={15} color={T.primary} strokeWidth={2.4} />
            <h3 style={{ fontSize: 16 }}>Estimativa de conclusão do cronograma</h3>
          </div>
          <div className="space-y-3">
            {[
              ["Dias até a prova do dia 2", `${diasRestantes} dias`, T.ink],
              ["Blocos ainda não concluídos", `${blocosRestantes} de ${BLOCOS.length}`, T.ink],
              ["Ritmo necessário", `${blocosPorSemanaNecessario} blocos por semana`, T.primary],
              ["Seu ritmo atual", ritmo ? `${ritmo.toFixed(1)} blocos por dia ativo` : "sem dados", T.ink50],
              ["Projeção no ritmo atual", diasNecessarios ? `${diasNecessarios} dias para fechar tudo` : "registre estudos para projetar", diasNecessarios && diasNecessarios > diasRestantes ? T.rose : T.jade],
            ].map(([l, v, c]) => (
              <div key={l} className="flex items-center justify-between py-2" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
                <span style={{ fontSize: 13, color: T.ink70 }}>{l}</span>
                <span className="mono" style={{ fontSize: 13, fontWeight: 700, color: c }}>{v}</span>
              </div>
            ))}
          </div>
          {diasNecessarios && diasNecessarios > diasRestantes && (
            <div className="mt-4 p-3 flex items-start gap-2.5" style={{ background: T.roseSoft, borderRadius: 12 }}>
              <AlertTriangle size={14} color={T.rose} strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
              <div style={{ fontSize: 12.5, color: "#96253C", lineHeight: 1.55 }}>
                No ritmo atual o cronograma não fecha antes da prova. Duas saídas: subir o ritmo ou cortar os blocos de menor incidência da Fase 3 e proteger os de ranking 1º–8º.
              </div>
            </div>
          )}
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Layers size={15} color={T.primary} strokeWidth={2.4} />
            <h3 style={{ fontSize: 16 }}>Progresso por fase do macroplano</h3>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((fn) => {
              const semsF = SEMANAS.filter((s) => s.fase === fn);
              const bs = semsF.flatMap((s) => s.blocos);
              const ok = bs.filter((b) => tot.blocosFeitos.has(b)).length;
              const pct = bs.length ? Math.round((ok / bs.length) * 100) : 0;
              return (
                <div key={fn}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Pill cor={FASES[fn].cor}>Fase {fn}</Pill>
                      <span style={{ fontSize: 12.5, fontWeight: 600 }}>{FASES[fn].nome}</span>
                    </div>
                    <span className="mono" style={{ fontSize: 11.5, color: T.ink50 }}>{bs.length ? `${ok}/${bs.length}` : "revisão"}</span>
                  </div>
                  <Barra pct={bs.length ? pct : 0} cor={FASES[fn].cor} h={7} />
                  <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 5, lineHeight: 1.5 }}>{FASES[fn].desc}</div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card className="p-5">
        <h3 style={{ fontSize: 16, marginBottom: 4 }}>Assuntos concluídos e restantes por reino</h3>
        <div style={{ fontSize: 12, color: T.ink50, marginBottom: 14 }}>Sobre os 169 blocos da base oficial de conteúdos</div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {Object.entries(REINOS).map(([sig, r]) => {
            const bs = BLOCOS.filter((b) => b.sig === sig);
            const ok = bs.filter((b) => tot.blocosFeitos.has(b.id)).length;
            const criticos = bs.filter((b) => agg[b.id]?.status === "critico").length;
            return (
              <div key={sig} className="flex items-center gap-3">
                <div style={{ width: 8, height: 8, borderRadius: 99, background: r.cor, flexShrink: 0 }} />
                <div style={{ width: 84, fontSize: 12.5, fontWeight: 600 }}>{r.nome}</div>
                <div className="flex-1"><Barra pct={(ok / r.total) * 100} cor={r.cor} h={6} /></div>
                <div className="mono" style={{ width: 46, fontSize: 11.5, color: T.ink50, textAlign: "right" }}>{ok}/{r.total}</div>
                {criticos > 0 && <Pill cor={T.rose}>{criticos} crítico{criticos > 1 ? "s" : ""}</Pill>}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

/* ============================= TELA: CONQUISTAS ========================== */
function TelaConquistas({ ctx }) {
  const { estado, tot, nivel } = ctx;
  const desbloqueadas = estado.conquistas || {};
  const n = Object.keys(desbloqueadas).length;

  const val = { questoes: tot.questoes, horas: tot.horas, streak: tot.streak, revisoes: tot.revisoes, erros: tot.erros, redacoes: tot.redacoes, simulados: tot.simulados, diasPerfeitos: tot.diasPerfeitos };
  const grupos = [
    { t: "Volume de questões", f: (c) => c.grupo === "q" },
    { t: "Tempo de estudo", f: (c) => c.grupo === "h" },
    { t: "Constância", f: (c) => c.grupo === "s" || c.grupo === "m" || ["semanaPerfeita", "mesPerfeito"].includes(c.id) },
    { t: "Revisão e erros", f: (c) => c.grupo === "r" || c.grupo === "e" },
    { t: "Redação", f: (c) => c.grupo === "w" || ["red900", "red1000"].includes(c.id) },
    { t: "Simulados e meta", f: (c) => c.grupo === "sim" || ["meta810", "metaArea"].includes(c.id) },
    { t: "Conquista de reinos", f: (c) => c.reino || c.id === "todosReinos" },
    { t: "Fases do macroplano", f: (c) => c.fase },
  ];

  return (
    <div className="space-y-5">
      <Cabecalho titulo="Conquistas" sub={`${n} de ${CONQUISTAS.length} desbloqueadas. Cada uma marca um marco real da preparação — não é enfeite, é evidência de que o método está rodando.`} />

      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-6">
          <Ring pct={(n / CONQUISTAS.length) * 100} size={104} stroke={10} cor={T.gold}>
            <div className="mono" style={{ fontSize: 24, fontWeight: 700 }}>{n}</div>
            <div style={{ fontSize: 9.5, color: T.ink50 }}>de {CONQUISTAS.length}</div>
          </Ring>
          <div className="flex-1" style={{ minWidth: 220 }}>
            <Eyebrow>Nível atual</Eyebrow>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="mono" style={{ fontSize: 30, fontWeight: 700 }}>{nivel.nivel}</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: T.primary }}>{nivel.titulo}</span>
            </div>
            <div className="mt-3"><Barra pct={nivel.pct} cor={T.gold} h={9} /></div>
            <div className="mono flex justify-between mt-2" style={{ fontSize: 11, color: T.ink50 }}>
              <span>{estado.xp.toLocaleString("pt-BR")} XP</span><span>{nivel.prox.toLocaleString("pt-BR")} XP para o nível {nivel.nivel + 1}</span>
            </div>
          </div>
        </div>
      </Card>

      {grupos.map((g) => {
        const cs = CONQUISTAS.filter(g.f);
        if (!cs.length) return null;
        return (
          <div key={g.t}>
            <div className="flex items-center gap-2 mb-3">
              <h3 style={{ fontSize: 15 }}>{g.t}</h3>
              <span className="mono" style={{ fontSize: 11, color: T.ink30 }}>{cs.filter((c) => desbloqueadas[c.id]).length}/{cs.length}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {cs.map((c, i) => {
                const ok = !!desbloqueadas[c.id];
                const prog = c.campo ? Math.min(100, Math.round(((val[c.campo] || 0) / c.alvo) * 100)) : ok ? 100 : 0;
                return (
                  <Card key={c.id} className="p-4 anim-rise" hover={ok} style={{
                    animationDelay: `${i * 25}ms`, borderColor: ok ? T.gold : T.line,
                    background: ok ? T.goldSoft : T.surface,
                  }}>
                    <div className="flex items-start gap-3">
                      <div style={{ background: ok ? T.gold : T.lineSoft, borderRadius: 11, padding: 8, flexShrink: 0 }}>
                        {ok ? <Ico name={c.icone} size={15} color="#fff" strokeWidth={2.4} /> : <Lock size={15} color={T.ink30} strokeWidth={2.2} />}
                      </div>
                      <div className="min-w-0">
                        <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3, color: ok ? "#7A5B0A" : T.ink70 }}>{c.nome}</div>
                        <div style={{ fontSize: 11.5, color: ok ? "#9C7620" : T.ink50, marginTop: 3, lineHeight: 1.45 }}>{c.desc}</div>
                      </div>
                    </div>
                    {!ok && c.campo && (
                      <div className="mt-3">
                        <Barra pct={prog} cor={T.ink30} h={4} />
                        <div className="mono" style={{ fontSize: 10, color: T.ink30, marginTop: 4 }}>{val[c.campo] || 0} / {c.alvo}</div>
                      </div>
                    )}
                    {ok && <div className="mono" style={{ fontSize: 10, color: "#9C7620", marginTop: 8 }}>desbloqueada em {fmtBR(desbloqueadas[c.id])}</div>}
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ============================== TELA: MODO FOCO ========================== */
function TelaFoco({ ctx }) {
  const { estado, hoje, agendaHoje, toggleAgenda, addFoco, sair, som } = ctx;
  /* Derivado da agenda em tempo real: qualquer edição na agenda aparece aqui
     na hora. O Modo Foco não gera nem guarda itens próprios. */
  const pendentes = agendaHoje.filter((i) => i.status !== "feito");
  const [alvoIdx, setAlvoIdx] = useState(0);
  const alvo = pendentes[alvoIdx] || pendentes[0] || agendaHoje[0];
  const toggleItem = toggleAgenda;
  const DUR = 50 * 60;
  const [seg, setSeg] = useState(DUR);
  const [rodando, setRodando] = useState(false);
  const [ciclos, setCiclos] = useState(0);
  const ref = useRef(null);
  const refFimEm = useRef(null); // horário absoluto de término — não um contador que o iOS possa atrasar

  /* Corrige o cronômetro pelo relógio real, não pela contagem do interval.
     No iOS, o interval é suspenso quando a tela trava ou o app sai de primeiro
     plano; recalcular por Date.now() garante que, ao voltar, o tempo mostrado
     é o correto — e que o ciclo conclui mesmo se o app tiver ficado em segundo
     plano no momento exato em que o tempo zerou. */
  const recalcular = useCallback(() => {
    if (!refFimEm.current) return;
    const restam = Math.round((refFimEm.current - Date.now()) / 1000);
    if (restam <= 0) {
      setSeg(0); setRodando(false); refFimEm.current = null;
      setCiclos((c) => c + 1); addFoco(50); som.tocarSino();
      setTimeout(() => setSeg(DUR), 600);
    } else {
      setSeg(restam);
    }
  }, [addFoco, som]);

  useEffect(() => {
    if (!rodando) return;
    ref.current = setInterval(recalcular, 1000);
    const aoVoltar = () => { if (document.visibilityState === "visible") recalcular(); };
    document.addEventListener("visibilitychange", aoVoltar);
    window.addEventListener("focus", aoVoltar);
    return () => {
      clearInterval(ref.current);
      document.removeEventListener("visibilitychange", aoVoltar);
      window.removeEventListener("focus", aoVoltar);
    };
  }, [rodando, recalcular]);

  const alternar = () => {
    som.desbloquear(); // gesto do usuário — necessário para o som tocar depois, vindo de um timer em segundo plano
    if (rodando) { refFimEm.current = null; setRodando(false); }
    else { refFimEm.current = Date.now() + seg * 1000; setRodando(true); }
  };

  const reiniciar = () => { refFimEm.current = null; setRodando(false); setSeg(DUR); };

  const mm = String(Math.floor(seg / 60)).padStart(2, "0");
  const ss = String(seg % 60).padStart(2, "0");
  const pct = ((DUR - seg) / DUR) * 100;

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(160deg, ${T.ink} 0%, #232C4B 60%, #35306E 100%)` }}>
      <button onClick={sair} className="absolute" style={{ top: 20, right: 20, background: "rgba(255,255,255,.1)", border: "none", borderRadius: 12, padding: 10, color: "#fff" }}>
        <X size={18} />
      </button>

      <div className="anim-pop text-center" style={{ maxWidth: 480, width: "100%" }}>
        <Eyebrow cor="rgba(255,255,255,.5)">Modo foco · bloco de 50 minutos</Eyebrow>

        {alvo ? (
          <>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: ".12em", fontWeight: 700, marginTop: 12,
              color: alvo.trilho === "A" ? "#7FD9C0" : "#F6C15A" }}>
              {alvo.trilho === "A" ? "TRILHO A · RADAR" : "TRILHO B · CONSTRUÇÃO"}
            </div>
            <h2 style={{ fontSize: 22, color: "#fff", marginTop: 6, lineHeight: 1.3 }}>{alvo.titulo}</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.62)", marginTop: 6 }}>{alvo.sub}</p>
          </>
        ) : (
          <h2 style={{ fontSize: 22, color: "#fff", marginTop: 14 }}>Missão do dia fechada. Descanse.</h2>
        )}

        <div className="flex justify-center my-9">
          <div style={{ position: "relative" }}>
            <Ring pct={pct} size={232} stroke={7} cor={T.gold} track="rgba(255,255,255,.12)">
              <div className="mono" style={{ fontSize: 56, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{mm}:{ss}</div>
              <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.5)", marginTop: 8 }}>
                {rodando ? "em andamento" : seg === DUR ? "pronto para começar" : "pausado"}
              </div>
            </Ring>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Btn size="lg" variant="primary" icon={rodando ? Pause : Play} onClick={alternar}
            style={{ background: T.gold, minWidth: 152 }}>
            {rodando ? "Pausar" : seg === DUR ? "Começar" : "Continuar"}
          </Btn>
          <button onClick={reiniciar} style={{ background: "rgba(255,255,255,.1)", border: "none", borderRadius: 12, padding: 13, color: "#fff" }}>
            <RotateCcw size={17} />
          </button>
        </div>

        {alvo && (
          <div className="mt-7">
            <Btn variant="ghost" icon={Check} onClick={() => { toggleItem(alvo); setAlvoIdx(0); reiniciar(); }}
              style={{ borderColor: "rgba(255,255,255,.22)", color: "#fff", background: "rgba(255,255,255,.06)" }}>
              Concluir esta tarefa
            </Btn>
            {pendentes.length > 1 && (
              <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                {pendentes.map((it, i) => (
                  <button key={it.id} onClick={() => setAlvoIdx(i)} className="mono" style={{
                    background: i === alvoIdx ? "rgba(255,255,255,.18)" : "rgba(255,255,255,.06)",
                    color: i === alvoIdx ? "#fff" : "rgba(255,255,255,.55)",
                    border: `1px solid ${i === alvoIdx ? "rgba(255,255,255,.3)" : "transparent"}`,
                    borderRadius: 99, padding: "4px 10px", fontSize: 10, fontWeight: 700,
                  }}>{it.trilho === "A" ? "A" : "B"} · {it.titulo.slice(0, 22)}{it.titulo.length > 22 ? "…" : ""}</button>
                ))}
              </div>
            )}
            {false && (
              <button onClick={() => setAlvoIdx((i) => (i + 1) % pendentes.length)}
                style={{ display: "block", margin: "14px auto 0", background: "none", border: "none", color: "rgba(255,255,255,.5)", fontSize: 12.5 }}>
                Trocar para outra tarefa ({alvoIdx + 1} de {pendentes.length})
              </button>
            )}
          </div>
        )}

        <div className="flex items-center justify-center gap-6 mt-9 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
          {[["Blocos de foco hoje", ciclos], ["Tarefas restantes", pendentes.length], ["Pausa recomendada", "10 min"]].map(([l, v]) => (
            <div key={l} className="text-center">
              <div className="mono" style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>{v}</div>
              <div style={{ fontSize: 10.5, color: "rgba(255,255,255,.45)", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========================= MODAIS DE REGISTRO RÁPIDO ===================== */
function ModalSessao({ open, onClose, onSave, hoje }) {
  const vazio = { data: hoje, tipo: "bloco", area: "MAT", blocoId: "", minutos: "", questoes: "", acertos: "" };
  const [f, setF] = useState(vazio);
  useEffect(() => { if (open) setF({ ...vazio, data: hoje }); }, [open, hoje]);
  const q = +f.questoes || 0, a = +f.acertos || 0;
  const invalido = (f.tipo === "bloco" ? !f.blocoId : !f.questoes) || (!f.minutos && !f.questoes) || a > q;
  return (
    <Modal open={open} onClose={onClose} title="Registrar estudo" sub="Isso alimenta o mapa de desempenho, a evolução e as estatísticas.">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Data"><input type="date" value={f.data} onChange={(e) => setF({ ...f, data: e.target.value })} style={inputCss} /></Field>
          <Field label="Minutos efetivos"><input type="number" placeholder="50" value={f.minutos} onChange={(e) => setF({ ...f, minutos: e.target.value })} style={inputCss} /></Field>
        </div>
        <Field label="Tipo">
          <div className="flex gap-1.5">
            {[["bloco", "Bloco de conteúdo"], ["simulado", "Simulado / questões"]].map(([k, l]) => (
              <button key={k} onClick={() => setF({ ...f, tipo: k, blocoId: "" })} className="flex-1" style={{
                background: f.tipo === k ? T.primary : T.lineSoft, color: f.tipo === k ? "#fff" : T.ink50,
                border: "none", borderRadius: 10, padding: "9px 0", fontSize: 12.5, fontWeight: 600,
              }}>{l}</button>
            ))}
          </div>
        </Field>

        {f.tipo === "simulado" ? (
          <Field label="Área">
            <div className="flex gap-1.5">
              {Object.entries(AREA).map(([k, a2]) => (
                <button key={k} onClick={() => setF({ ...f, area: k })} className="flex-1 mono" style={{
                  background: f.area === k ? a2.cor : T.lineSoft, color: f.area === k ? "#fff" : T.ink50,
                  border: "none", borderRadius: 10, padding: "9px 0", fontSize: 12, fontWeight: 700,
                }}>{a2.curto}</button>
              ))}
            </div>
          </Field>
        ) : (
        <Field label="Bloco estudado">
          <select value={f.blocoId} onChange={(e) => setF({ ...f, blocoId: e.target.value })} style={inputCss}>
            <option value="">Selecione…</option>
            {Object.entries(REINOS).map(([sig, r]) => (
              <optgroup key={sig} label={r.reino}>
                {BLOCOS.filter((b) => b.sig === sig).map((b) => <option key={b.id} value={b.id}>{b.id} · {b.nome} (ranking {b.rank}º)</option>)}
              </optgroup>
            ))}
          </select>
        </Field>
        )}
        <div className="grid grid-cols-2 gap-3">
          <Field label="Questões resolvidas"><input type="number" placeholder="20" value={f.questoes} onChange={(e) => setF({ ...f, questoes: e.target.value })} style={inputCss} /></Field>
          <Field label="Acertos" hint={q ? `${q ? Math.round((a / q) * 100) : 0}% de acerto` : " "}>
            <input type="number" placeholder="16" value={f.acertos} onChange={(e) => setF({ ...f, acertos: e.target.value })}
              style={{ ...inputCss, borderColor: a > q ? T.rose : T.line }} />
          </Field>
        </div>
        {a > q && <div style={{ fontSize: 12, color: T.rose }}>Acertos não podem passar do total de questões.</div>}
        <div className="flex gap-2 justify-end pt-1">
          <Btn variant="ghost" onClick={onClose}>Cancelar</Btn>
          <Btn disabled={invalido} onClick={() => { onSave({ id: `s${Date.now()}`, data: f.data, tipo: f.tipo, area: f.tipo === "simulado" ? f.area : (BLOCO_BY_ID[f.blocoId]?.area || null), blocoId: f.tipo === "bloco" ? f.blocoId : null, minutos: +f.minutos || 0, questoes: q, acertos: a }); onClose(); }}>Salvar sessão</Btn>
        </div>
      </div>
    </Modal>
  );
}

function ModalRedacao({ open, onClose, onSave, hoje }) {
  const [f, setF] = useState({ data: hoje, tema: "", comps: ["", "", "", "", ""] });
  useEffect(() => { if (open) setF({ data: hoje, tema: "", comps: ["", "", "", "", ""] }); }, [open, hoje]);
  const nota = f.comps.reduce((a, c) => a + (+c || 0), 0);
  return (
    <Modal open={open} onClose={onClose} title="Registrar redação" sub="As cinco competências, de 0 a 200 cada.">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Data"><input type="date" value={f.data} onChange={(e) => setF({ ...f, data: e.target.value })} style={inputCss} /></Field>
          <Field label="Nota total"><div className="mono" style={{ ...inputCss, background: T.paper, fontWeight: 700, fontSize: 17, color: nota >= 900 ? T.jade : T.ink }}>{nota}</div></Field>
        </div>
        <Field label="Tema"><input placeholder="Ex.: Desafios da valorização do trabalho de cuidado no Brasil" value={f.tema} onChange={(e) => setF({ ...f, tema: e.target.value })} style={inputCss} /></Field>
        <div className="grid grid-cols-5 gap-2">
          {["C1 Norma", "C2 Tema", "C3 Argumento", "C4 Coesão", "C5 Intervenção"].map((l, i) => (
            <Field key={l} label={l}>
              <input type="number" min="0" max="200" step="20" placeholder="0" value={f.comps[i]}
                onChange={(e) => { const c = [...f.comps]; c[i] = e.target.value; setF({ ...f, comps: c }); }} style={inputCss} />
            </Field>
          ))}
        </div>
        <div className="flex gap-2 justify-end pt-1">
          <Btn variant="ghost" onClick={onClose}>Cancelar</Btn>
          <Btn disabled={!f.tema.trim()} onClick={() => { onSave({ id: `r${Date.now()}`, data: f.data, tema: f.tema.trim(), nota, comps: f.comps.map((c) => +c || 0) }); onClose(); }}>Salvar redação</Btn>
        </div>
      </div>
    </Modal>
  );
}

/* =========================== CELEBRAÇÃO / TOASTS ========================== */
function Celebracao({ conquista, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 5200); return () => clearTimeout(t); }, [conquista, onClose]);
  if (!conquista) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6" style={{ background: "rgba(20,26,46,.5)", backdropFilter: "blur(4px)" }} onClick={onClose}>
      <div className="anim-pop card text-center" style={{ maxWidth: 380, padding: "34px 28px", borderRadius: 24, borderColor: T.gold, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 0%, ${T.goldSoft} 0%, transparent 62%)` }} />
        <div className="relative">
          <div className="shimmer" style={{ background: T.gold, borderRadius: 22, width: 68, height: 68, margin: "0 auto 18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Ico name={conquista.icone} size={30} color="#fff" strokeWidth={2.2} />
          </div>
          <Eyebrow cor={T.gold}>Conquista desbloqueada</Eyebrow>
          <h2 style={{ fontSize: 22, marginTop: 8 }}>{conquista.nome}</h2>
          <p style={{ fontSize: 13, color: T.ink50, marginTop: 8, lineHeight: 1.55 }}>{conquista.desc}</p>
          <div className="mt-6"><Btn variant="dark" onClick={onClose} full>Continuar</Btn></div>
        </div>
      </div>
    </div>
  );
}

function Toasts({ lista, remover }) {
  return (
    <div className="fixed z-50 flex flex-col gap-2" style={{ bottom: 88, right: 16, maxWidth: 320 }}>
      {lista.map((t) => (
        <div key={t.id} className="anim-slide card flex items-start gap-2.5 p-3" onClick={() => remover(t.id)}
          style={{ borderRadius: 14, boxShadow: "0 12px 32px -14px rgba(20,26,46,.3)", cursor: "pointer", borderColor: t.cor }}>
          <div style={{ background: `${t.cor}18`, borderRadius: 9, padding: 6, flexShrink: 0 }}>
            <t.icone size={14} color={t.cor} strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 650, lineHeight: 1.35 }}>{t.titulo}</div>
            {t.sub && <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 1 }}>{t.sub}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================================
   CAMADA DE PERSISTÊNCIA — SUPABASE  (v2.1)
   Correções desta revisão, em relação à v2.0:
   [1] migração assistida da chave antiga `enem_reinos_v1`, sem apagar nada;
   [2] gravação no fechamento via fetch keepalive + pagehide (iOS-safe);
   [3] todos os listeners nomeados e removidos na limpeza do efeito;
   [4] confirmação explícita antes de qualquer substituição total do progresso;
   [5] sessão com renovação proativa e armazenamento em camadas.
   ========================================================================== */

/* >>> PREENCHA COM OS DADOS DO SEU PROJETO SUPABASE <<<
   Settings > API. A chave "anon" é pública por design: quem protege os dados
   é o Row Level Security do schema, não o segredo da chave. */
const SUPABASE_URL = "https://qkxnyczkqhrvaaiasadg.supabase.co";
const SUPABASE_ANON = "sb_publishable__3QCRs_3eMwQUQIZdC9e9w_mkQ2HH0A";

/* Ative APENAS ao hospedar o app fora do Claude (Netlify, Vercel, etc.).
   Dentro do artifact, armazenamento de navegador não funciona e deve ficar
   desligado; hospedado, é ele que mantém você conectado entre aberturas. */
const MODO_HOSPEDADO = true;

const CFG_OK = !SUPABASE_URL.includes("SEU-PROJETO") && !SUPABASE_ANON.includes("SUA-CHAVE");
const CHAVE_ANTIGA = "enem_reinos_v1";   // v1.0 — apenas leitura, nunca apagada
const CACHE_SESSAO = "enem_sessao_v2";
const CACHE_ESTADO = "enem_cache_v2";
const FLAG_MIGRADO = "enem_migrado_v2";
const LIMITE_KEEPALIVE = 60 * 1024;      // navegadores limitam keepalive a ~64KB

/* ---------------------- ARMAZENAMENTO LOCAL EM CAMADAS -------------------- */
/* Tenta os backends disponíveis em ordem. Nenhum deles é fonte de verdade —
   a fonte de verdade é o Supabase. Isto só evita relogin e serve de cache. */
const backends = [
  {
    nome: "artifact",
    ok: () => typeof window !== "undefined" && !!window.storage,
    ler: async (k) => { const r = await window.storage.get(k); return r?.value ? JSON.parse(r.value) : null; },
    gravar: async (k, v) => { await window.storage.set(k, JSON.stringify(v)); },
  },
  {
    nome: "navegador",
    ok: () => {
      if (!MODO_HOSPEDADO) return false;
      try { const t = "__t"; window.localStorage.setItem(t, "1"); window.localStorage.removeItem(t); return true; }
      catch { return false; }
    },
    ler: async (k) => { const v = window.localStorage.getItem(k); return v ? JSON.parse(v) : null; },
    gravar: async (k, v) => { window.localStorage.setItem(k, JSON.stringify(v)); },
  },
];

const memoria = new Map();

const cache = {
  disponivel: [],
  detectar() {
    this.disponivel = backends.filter((b) => { try { return b.ok(); } catch { return false; } });
    return this.disponivel.map((b) => b.nome);
  },
  async ler(k) {
    for (const b of this.disponivel) { try { const v = await b.ler(k); if (v != null) return v; } catch { /* tenta o próximo */ } }
    return memoria.has(k) ? memoria.get(k) : null;
  },
  async gravar(k, v) {
    memoria.set(k, v);
    let algum = false;
    for (const b of this.disponivel) { try { await b.gravar(k, v); algum = true; } catch { /* tenta o próximo */ } }
    return algum;
  },
};

/* ------------------------ VALIDAÇÃO E MESCLAGEM --------------------------- */
/* Toda importação passa por aqui antes de virar estado. Um JSON corrompido
   nunca deve conseguir derrubar o app nem zerar campos silenciosamente. */
function validarEstado(o) {
  if (!o || typeof o !== "object" || Array.isArray(o)) return null;
  const lista = (k) => (Array.isArray(o[k]) ? o[k].filter((x) => x && typeof x === "object") : []);
  const mapa = (k) => (o[k] && typeof o[k] === "object" && !Array.isArray(o[k]) ? o[k] : {});
  return {
    ...ESTADO_INICIAL,
    ...o,
    nome: typeof o.nome === "string" ? o.nome : "",
    xp: Number.isFinite(+o.xp) ? Math.max(0, +o.xp) : 0,
    focoMin: Number.isFinite(+o.focoMin) ? Math.max(0, +o.focoMin) : 0,
    notaInicial: Number.isFinite(+o.notaInicial) && +o.notaInicial > 0 && +o.notaInicial <= 1000 ? +o.notaInicial : null,
    criadoEm: typeof o.criadoEm === "string" ? o.criadoEm : ESTADO_INICIAL.criadoEm,
    sessoes: lista("sessoes"), erros: lista("erros"),
    simulados: lista("simulados").map((x) => ({ ...x, aguardando: !!x.aguardando })),
    redacoes: lista("redacoes"), revisoes: lista("revisoes"),
    descanso: Array.isArray(o.descanso) ? o.descanso.filter((d) => typeof d === "string") : [],
    missoes: mapa("missoes"), conquistas: mapa("conquistas"),
    resumos: Object.fromEntries(
      Object.entries(mapa("resumos")).filter(([, v]) => v && typeof v.texto === "string")
    ),
    flashcards: lista("flashcards").filter((f) => typeof f.frente === "string" && typeof f.verso === "string")
      .map((f) => ({ ...f, etapa: [0, 1, 7, 30].includes(f.etapa) ? f.etapa : 0 })),
    somAtivo: typeof o.somAtivo === "boolean" ? o.somAtivo : true,
    agenda: Object.fromEntries(
      Object.entries(mapa("agenda"))
        .map(([d, arr]) => [d, Array.isArray(arr) ? arr.filter((it) => it && typeof it.id === "string") : []])
        .filter(([, arr]) => arr.length)
    ),
    cobertura: Object.fromEntries(
      Object.entries(mapa("cobertura")).filter(([k, v]) => BLOCO_BY_ID[k] && v && typeof v === "object")
    ),
    progresso: (() => {
      const p = {};
      /* migração do modelo binário da v3.0: cursinho -> aula_vista, macroplano -> dominado(questoes) */
      Object.entries(mapa("cobertura")).forEach(([id, v]) => {
        if (!BLOCO_BY_ID[id] || !v) return;
        if (v.macroplano) p[id] = { estado: EST.DOMINADO, origemDominio: "questoes", furada: false, dominioEm: v.ultimaEm || null };
        else if (v.cursinho) p[id] = { estado: EST.AULA_VISTA, origemDominio: null, furada: false, aulaEm: v.ultimaEm || null };
      });
      Object.entries(mapa("progresso")).forEach(([id, v]) => {
        if (!BLOCO_BY_ID[id] || !v || typeof v !== "object") return;
        p[id] = {
          estado: ORDEM_EST[v.estado] != null ? v.estado : EST.NAO_VISTO,
          origemDominio: v.origemDominio === "autoavaliado" || v.origemDominio === "questoes" ? v.origemDominio : null,
          furada: !!v.furada,
          aulaEm: v.aulaEm || null, praticaEm: v.praticaEm || null, dominioEm: v.dominioEm || null,
        };
      });
      return p;
    })(),
    tetoRevisoes: Number.isFinite(+o.tetoRevisoes) && +o.tetoRevisoes > 0 ? Math.min(20, +o.tetoRevisoes) : 4,
    prioridades: Array.isArray(o.prioridades) ? o.prioridades.filter((x) => BLOCO_BY_ID[x]) : [],
    nivelQuestoes: Number.isFinite(+o.nivelQuestoes) ? Math.max(0, Math.min(10, +o.nivelQuestoes)) : 0,
    questoesDia: Object.fromEntries(
      Object.entries(mapa("questoesDia")).map(([d, v]) => [d, {
        feitas: Math.max(0, +(v?.feitas) || 0), corrigidas: Math.max(0, +(v?.corrigidas) || 0),
      }])
    ),
    gateHist: mapa("gateHist"),
    rotulosLivres: (Array.isArray(o.rotulosLivres) ? o.rotulosLivres : []).filter((x) => typeof x === "string"),
    jogo: {
      golpesDados: Object.fromEntries(
        Object.entries((o.jogo && typeof o.jogo === "object" && o.jogo.golpesDados) || {})
          .filter(([k, v]) => BLOCO_BY_ID[k] && ORDEM_EST[v] != null)
      ),
      ultimaVisita: o.jogo?.ultimaVisita || null,
    },
    nivelQuestoes: Number.isFinite(+o.nivelQuestoes) ? Math.max(0, Math.min(6, +o.nivelQuestoes)) : 0,
    padroesEnem: Object.fromEntries(
      Object.entries(mapa("padroesEnem")).filter(([, v]) => lerRegistro(v))
    ),
    missoesManuais: Object.fromEntries(
      Object.entries(mapa("missoesManuais"))
        .map(([data, arr]) => [data, Array.isArray(arr) ? arr.filter((it) => it && typeof it.id === "string" && typeof it.titulo === "string") : []])
        .filter(([, arr]) => arr.length)
    ),
  };
}

function resumirEstado(e) {
  if (!e) return null;
  return {
    xp: e.xp || 0,
    sessoes: (e.sessoes || []).length,
    simulados: (e.simulados || []).length,
    erros: (e.erros || []).length,
    redacoes: (e.redacoes || []).length,
    revisoes: (e.revisoes || []).length,
    dias: Object.keys(e.missoes || {}).length,
    nome: e.nome || "",
    vazio: !(e.xp || (e.sessoes || []).length || (e.simulados || []).length ||
             (e.erros || []).length || (e.redacoes || []).length || Object.keys(e.missoes || {}).length),
  };
}

/* União por id: nada é descartado, duplicata não vira registro dobrado. */
function mesclarEstados(base, extra) {
  const unir = (a = [], b = []) => {
    const m = new Map();
    [...(b || []), ...(a || [])].forEach((x, i) => { if (x) m.set(x.id ?? `sem-id-${i}-${JSON.stringify(x).slice(0, 40)}`, x); });
    return [...m.values()];
  };
  const missoes = { ...(extra.missoes || {}) };
  Object.entries(base.missoes || {}).forEach(([d, m]) => {
    const ant = missoes[d];
    missoes[d] = ant ? { ...ant, ...m, itens: { ...(ant.itens || {}), ...(m.itens || {}) },
      blocosConcluidos: [...new Set([...(ant.blocosConcluidos || []), ...(m.blocosConcluidos || [])])] } : m;
  });
  const missoesManuais = { ...(extra.missoesManuais || {}) };
  Object.entries(base.missoesManuais || {}).forEach(([d, arr]) => {
    missoesManuais[d] = unir(missoesManuais[d], arr);
  });
  return {
    ...base,
    nome: base.nome || extra.nome || "",
    xp: Math.max(base.xp || 0, extra.xp || 0),
    focoMin: Math.max(base.focoMin || 0, extra.focoMin || 0),
    criadoEm: [base.criadoEm, extra.criadoEm].filter(Boolean).sort()[0] || base.criadoEm,
    sessoes: unir(base.sessoes, extra.sessoes),
    simulados: unir(base.simulados, extra.simulados),
    erros: unir(base.erros, extra.erros),
    redacoes: unir(base.redacoes, extra.redacoes),
    revisoes: unir(base.revisoes, extra.revisoes),
    descanso: [...new Set([...(base.descanso || []), ...(extra.descanso || [])])],
    missoes,
    conquistas: { ...(extra.conquistas || {}), ...(base.conquistas || {}) },
    missoesManuais,
    agenda: (() => {
      const a = { ...(extra.agenda || {}) };
      Object.entries(base.agenda || {}).forEach(([d, arr]) => { a[d] = unir(a[d], arr); });
      return a;
    })(),
    progresso: (() => {
      const p = { ...(extra.progresso || {}) };
      Object.entries(base.progresso || {}).forEach(([id, v]) => {
        const o = p[id];
        p[id] = !o ? v : (ORDEM_EST[v.estado] >= ORDEM_EST[o.estado] ? { ...o, ...v } : { ...v, ...o });
      });
      return p;
    })(),
    tetoRevisoes: base.tetoRevisoes ?? extra.tetoRevisoes ?? 4,
    jogo: {
      golpesDados: (() => {
        const g = { ...(extra.jogo?.golpesDados || {}) };
        Object.entries(base.jogo?.golpesDados || {}).forEach(([id, v]) => {
          g[id] = ORDEM_EST[v] >= ORDEM_EST[g[id] ?? "nao_visto"] ? v : g[id];
        });
        return g;
      })(),
      ultimaVisita: [base.jogo?.ultimaVisita, extra.jogo?.ultimaVisita].filter(Boolean).sort().pop() || null,
    },
    prioridades: [...new Set([...(base.prioridades || []), ...(extra.prioridades || [])])],
    nivelQuestoes: Math.max(base.nivelQuestoes || 0, extra.nivelQuestoes || 0),
    padroesEnem: (() => {
      /* por questão: resposta vence "só vi o gabarito"; entre duas, vale a mais recente com o maior nº de tentativas */
      const r = { ...(extra.padroesEnem || {}) };
      Object.entries(base.padroesEnem || {}).forEach(([id, v]) => {
        const a = lerRegistro(v), b = lerRegistro(r[id]);
        if (!a || !b) { if (a) r[id] = v; return; }
        if (!!a.r !== !!b.r) { r[id] = a.r ? v : r[id]; return; }
        r[id] = a.em >= b.em ? gravarRegistro({ ...a, t: Math.max(a.t, b.t) }) : gravarRegistro({ ...b, t: Math.max(a.t, b.t) });
      });
      return r;
    })(),
    cobertura: (() => {
      const c = { ...(extra.cobertura || {}) };
      Object.entries(base.cobertura || {}).forEach(([id, v]) => {
        const o = c[id];
        c[id] = o ? {
          macroplano: !!(o.macroplano || v.macroplano),
          cursinho: !!(o.cursinho || v.cursinho),
          ultimaEm: [o.ultimaEm, v.ultimaEm].filter(Boolean).sort().pop() || null,
        } : v;
      });
      return c;
    })(),
    flashcards: unir(base.flashcards, extra.flashcards),
    resumos: (() => {
      const r = { ...(extra.resumos || {}) };
      Object.entries(base.resumos || {}).forEach(([id, v]) => {
        const outro = r[id];
        r[id] = (!outro || (v.atualizadoEm || "") >= (outro.atualizadoEm || "")) ? v : outro;
      });
      return r;
    })(),
  };
}

/* ------------------------------ REDE ------------------------------------- */
function cabecalhos(token) {
  return { apikey: SUPABASE_ANON, Authorization: `Bearer ${token || SUPABASE_ANON}`, "Content-Type": "application/json" };
}

async function sbFetch(caminho, { metodo = "GET", corpo, token, headers = {} } = {}) {
  const res = await fetch(`${SUPABASE_URL}${caminho}`, {
    method: metodo, headers: { ...cabecalhos(token), ...headers },
    body: corpo ? JSON.stringify(corpo) : undefined,
  });
  const texto = await res.text();
  let json = null;
  try { json = texto ? JSON.parse(texto) : null; } catch { json = { raw: texto }; }
  if (!res.ok) {
    const msg = json?.msg || json?.message || json?.error_description || json?.error || `HTTP ${res.status}`;
    const err = new Error(msg); err.status = res.status; throw err;
  }
  return json;
}

const auth = {
  entrar: (email, senha) => sbFetch("/auth/v1/token?grant_type=password", { metodo: "POST", corpo: { email, password: senha } }),
  criar: (email, senha) => sbFetch("/auth/v1/signup", { metodo: "POST", corpo: { email, password: senha } }),
  renovar: (refresh_token) => sbFetch("/auth/v1/token?grant_type=refresh_token", { metodo: "POST", corpo: { refresh_token } }),
};

const dados = {
  ler: (token) => sbFetch("/rest/v1/enem_estado?select=dados,versao,atualizado_em", { token }),
  gravar: (token, estado, versaoBase) =>
    sbFetch("/rest/v1/rpc/fn_enem_salvar", { metodo: "POST", token, corpo: { p_dados: estado, p_versao_base: versaoBase } }),
  historico: (token) => sbFetch("/rest/v1/enem_historico?select=id,dados,criado_em&order=criado_em.desc&limit=50", { token }),
};

/* Gravação que sobrevive ao fechamento da aba.
   `sendBeacon` não serve aqui: ele não permite cabeçalhos personalizados, e o
   Supabase exige `apikey` e `Authorization`. `fetch` com keepalive permite. */
function gravarKeepalive(token, estado, versaoBase) {
  const corpo = JSON.stringify({ p_dados: estado, p_versao_base: versaoBase });
  if (corpo.length > LIMITE_KEEPALIVE) return false;
  try {
    fetch(`${SUPABASE_URL}/rest/v1/rpc/fn_enem_salvar`, {
      method: "POST", keepalive: true, headers: cabecalhos(token), body: corpo,
    }).catch(() => {});
    return true;
  } catch { return false; }
}

/* --------------------------- HOOK DE SINCRONIZAÇÃO ----------------------- */
/* status: "config" | "deslogado" | "carregando" | "ok" | "salvando" | "erro" | "conflito" */
function useSync() {
  const [sessao, setSessao] = useState(null);
  const [estado, setEstadoBruto] = useState(ESTADO_INICIAL);
  const [status, setStatus] = useState(CFG_OK ? "carregando" : "config");
  const [erroMsg, setErroMsg] = useState("");
  const [versao, setVersao] = useState(0);
  const [conflito, setConflito] = useState(null);
  const [ultimoSync, setUltimoSync] = useState(null);
  const [carregado, setCarregado] = useState(false);
  const [migracao, setMigracao] = useState(null);
  const [backendsAtivos, setBackendsAtivos] = useState([]);

  const refEstado = useRef(estado);
  const refVersao = useRef(0);
  const refSessao = useRef(null);
  const refTimer = useRef(null);
  const refRenov = useRef(null);
  const refPendente = useRef(false);

  refEstado.current = estado;
  refVersao.current = versao;
  refSessao.current = sessao;

  /* Guarda a sessão com o instante de expiração, para renovar antes de falhar. */
  const guardarSessao = useCallback(async (s) => {
    const comPrazo = { ...s, expira_em: Date.now() + ((s.expires_in || 3600) - 90) * 1000 };
    setSessao(comPrazo); refSessao.current = comPrazo;
    await cache.gravar(CACHE_SESSAO, comPrazo);
    return comPrazo;
  }, []);

  /* Renova proativamente: não espera o 401 para agir. */
  const comToken = useCallback(async (fn) => {
    let s = refSessao.current;
    if (!s) throw new Error("sem sessão");
    if (s.expira_em && Date.now() > s.expira_em) {
      try { s = await guardarSessao(await auth.renovar(s.refresh_token)); }
      catch (e) { throw new Error("Sua sessão expirou. Entre novamente."); }
    }
    try {
      return await fn(s.access_token);
    } catch (e) {
      if (e.status !== 401) throw e;
      const nova = await guardarSessao(await auth.renovar(s.refresh_token));
      return await fn(nova.access_token);
    }
  }, [guardarSessao]);

  /* ------------------------- MIGRAÇÃO DA v1.0 ---------------------------- */
  /* Lê a chave antiga, valida e OFERECE. Nunca apaga, nunca importa sozinha. */
  const verificarMigracao = useCallback(async (estadoNuvem) => {
    try {
      const jaFeita = await cache.ler(FLAG_MIGRADO);
      if (jaFeita) return null;
      const bruto = await cache.ler(CHAVE_ANTIGA);
      const antigo = validarEstado(bruto);
      if (!antigo) return null;
      const resumo = resumirEstado(antigo);
      if (resumo.vazio) return null;
      const pacote = { antigo, resumo, resumoNuvem: resumirEstado(estadoNuvem || ESTADO_INICIAL) };
      setMigracao(pacote);
      return pacote;
    } catch { return null; }
  }, []);

  /* ---------------------------- BAIXAR (pull) ---------------------------- */
  const baixar = useCallback(async ({ silencioso = false, checarMigracao = false } = {}) => {
    if (!refSessao.current) return;
    if (!silencioso) setStatus("carregando");
    try {
      const linhas = await comToken((t) => dados.ler(t));
      const linha = Array.isArray(linhas) ? linhas[0] : null;
      let atual = refEstado.current;

      if (linha) {
        const remoto = validarEstado(linha.dados) || ESTADO_INICIAL;
        if (linha.versao > refVersao.current) {
          setEstadoBruto(remoto); refEstado.current = remoto; atual = remoto;
          setVersao(linha.versao); refVersao.current = linha.versao;
          await cache.gravar(CACHE_ESTADO, { dados: remoto, versao: linha.versao });
        }
      } else {
        setVersao(0); refVersao.current = 0;
      }

      setStatus("ok"); setErroMsg(""); setUltimoSync(new Date()); setCarregado(true);
      if (checarMigracao) await verificarMigracao(atual);
      return { ok: true, temLinha: !!linha };
    } catch (e) {
      setStatus("erro");
      setErroMsg(e.message || "Não foi possível ler seus dados.");
      setCarregado(true);
      return { erro: true };
    }
  }, [comToken, verificarMigracao]);

  /* ---------------------------- ENVIAR (push) ---------------------------- */
  const enviar = useCallback(async () => {
    if (!refSessao.current) return;
    setStatus("salvando");
    try {
      const r = await comToken((t) => dados.gravar(t, refEstado.current, refVersao.current));
      const res = Array.isArray(r) ? r[0] : r;
      if (res?.conflito) {
        setConflito({ remoto: validarEstado(res.dados), versaoRemota: res.versao, local: refEstado.current });
        setStatus("conflito");
        return;
      }
      setVersao(res.versao); refVersao.current = res.versao;
      refPendente.current = false;
      setStatus("ok"); setErroMsg(""); setUltimoSync(new Date());
      await cache.gravar(CACHE_ESTADO, { dados: refEstado.current, versao: res.versao });
    } catch (e) {
      refPendente.current = true;
      setStatus("erro");
      setErroMsg(e.message || "Falha ao salvar. Seus dados seguem neste aparelho.");
      await cache.gravar(CACHE_ESTADO, { dados: refEstado.current, versao: refVersao.current });
    }
  }, [comToken]);

  const aplicar = useCallback((fn) => {
    setEstadoBruto((anterior) => {
      const novo = typeof fn === "function" ? fn(anterior) : fn;
      refEstado.current = novo;
      refPendente.current = true;
      clearTimeout(refTimer.current);
      refTimer.current = setTimeout(() => enviar(), 700);
      return novo;
    });
  }, [enviar]);

  const forcarEnvio = useCallback(() => { clearTimeout(refTimer.current); return enviar(); }, [enviar]);

  /* Descarga imediata e síncrona no fechamento — não depende de promessa. */
  const descarregar = useCallback(() => {
    if (!refPendente.current || !refSessao.current) return;
    clearTimeout(refTimer.current);
    const enviou = gravarKeepalive(refSessao.current.access_token, refEstado.current, refVersao.current);
    cache.gravar(CACHE_ESTADO, { dados: refEstado.current, versao: refVersao.current });
    if (enviou) refPendente.current = false;
  }, []);

  const resolverConflito = useCallback(async (escolha) => {
    if (!conflito) return;
    if (escolha === "remoto") {
      const merged = validarEstado(conflito.remoto) || ESTADO_INICIAL;
      setEstadoBruto(merged); refEstado.current = merged;
      setVersao(conflito.versaoRemota); refVersao.current = conflito.versaoRemota;
      setConflito(null); refPendente.current = false;
      setStatus("ok"); setUltimoSync(new Date());
    } else if (escolha === "mesclar") {
      const merged = mesclarEstados(conflito.local, conflito.remoto || {});
      setEstadoBruto(merged); refEstado.current = merged;
      setVersao(conflito.versaoRemota); refVersao.current = conflito.versaoRemota;
      setConflito(null);
      await enviar();
    } else {
      setVersao(conflito.versaoRemota); refVersao.current = conflito.versaoRemota;
      setConflito(null);
      await enviar();
    }
  }, [conflito, enviar]);

  /* -------------------- APLICAR A MIGRAÇÃO (escolha do usuário) ---------- */
  const aplicarMigracao = useCallback(async (modo) => {
    const pacote = migracao;
    if (!pacote) return;
    if (modo === "adiar") { setMigracao(null); return; }
    if (modo === "nunca") { await cache.gravar(FLAG_MIGRADO, { em: new Date().toISOString(), modo: "recusado" }); setMigracao(null); return; }

    const novo = modo === "substituir"
      ? pacote.antigo
      : mesclarEstados(refEstado.current, pacote.antigo);

    setEstadoBruto(novo); refEstado.current = novo; refPendente.current = true;
    setMigracao(null);
    await cache.gravar(FLAG_MIGRADO, { em: new Date().toISOString(), modo });
    await forcarEnvio();
  }, [migracao, forcarEnvio]);

  /* ------------------------------ LOGIN ---------------------------------- */
  const login = useCallback(async (email, senha, criarConta) => {
    setStatus("carregando"); setErroMsg("");
    try {
      const s = criarConta ? await auth.criar(email, senha) : await auth.entrar(email, senha);
      if (!s?.access_token) throw new Error("Conta criada. Confirme o e-mail na sua caixa de entrada e faça login.");
      await guardarSessao(s);
      return await baixar({ checarMigracao: true });
    } catch (e) {
      setStatus("deslogado");
      setErroMsg(e.message === "Invalid login credentials" ? "E-mail ou senha incorretos." : e.message);
      return { erro: true };
    }
  }, [baixar, guardarSessao]);

  const logout = useCallback(async () => {
    try { await forcarEnvio(); } catch { /* segue mesmo assim */ }
    await cache.gravar(CACHE_SESSAO, null);
    setSessao(null); refSessao.current = null;
    setEstadoBruto(ESTADO_INICIAL); refEstado.current = ESTADO_INICIAL;
    setVersao(0); refVersao.current = 0;
    setStatus("deslogado");
  }, [forcarEnvio]);

  /* --------------------- SESSÃO INICIAL + AUTO-SYNC ---------------------- */
  useEffect(() => {
    let vivo = true;
    (async () => {
      setBackendsAtivos(cache.detectar());
      if (!CFG_OK) { setStatus("config"); setCarregado(true); return; }
      const local = await cache.ler(CACHE_ESTADO);
      if (vivo && local?.dados) {
        const v = validarEstado(local.dados);
        if (v) { setEstadoBruto(v); refEstado.current = v; setVersao(local.versao || 0); refVersao.current = local.versao || 0; }
      }
      const s = await cache.ler(CACHE_SESSAO);
      if (!vivo) return;
      if (!s?.refresh_token) { setStatus("deslogado"); setCarregado(true); return; }
      try {
        await guardarSessao(await auth.renovar(s.refresh_token));
        if (vivo) await baixar({ checarMigracao: true });
      } catch { if (vivo) { setStatus("deslogado"); setCarregado(true); } }
    })();
    return () => { vivo = false; };
  }, [baixar, guardarSessao]);

  /* Listeners nomeados — todos removidos na limpeza, sem exceção. */
  useEffect(() => {
    if (!sessao) return;

    const aoMudarVisibilidade = () => {
      if (document.visibilityState === "hidden") { descarregar(); return; }
      if (refPendente.current) forcarEnvio(); else baixar({ silencioso: true });
    };
    const aoFocar = () => { if (refPendente.current) forcarEnvio(); else baixar({ silencioso: true }); };
    const aoSair = () => descarregar();
    const tick = () => { if (!refPendente.current) baixar({ silencioso: true }); };

    const intervalo = setInterval(tick, 45000);
    document.addEventListener("visibilitychange", aoMudarVisibilidade);
    window.addEventListener("focus", aoFocar);
    window.addEventListener("pagehide", aoSair);
    window.addEventListener("beforeunload", aoSair);

    return () => {
      clearInterval(intervalo);
      document.removeEventListener("visibilitychange", aoMudarVisibilidade);
      window.removeEventListener("focus", aoFocar);
      window.removeEventListener("pagehide", aoSair);
      window.removeEventListener("beforeunload", aoSair);
    };
  }, [sessao, baixar, forcarEnvio, descarregar]);

  /* Renovação agendada, para sessões longas não caírem no meio do estudo. */
  useEffect(() => {
    if (!sessao?.expira_em) return;
    const espera = Math.max(30000, sessao.expira_em - Date.now());
    refRenov.current = setTimeout(async () => {
      try { await guardarSessao(await auth.renovar(sessao.refresh_token)); } catch { /* o próximo pedido tenta de novo */ }
    }, espera);
    return () => clearTimeout(refRenov.current);
  }, [sessao, guardarSessao]);

  /* Limpa o debounce pendente ao desmontar. */
  useEffect(() => () => clearTimeout(refTimer.current), []);

  return { estado, aplicar, status, erroMsg, versao, conflito, resolverConflito, ultimoSync,
    sessao, login, logout, baixar, forcarEnvio, carregado, comToken,
    migracao, aplicarMigracao, backendsAtivos };
}

/* ---------------------------- INDICADOR DE SYNC -------------------------- */
const SYNC_UI = {
  ok: { cor: T.jade, txt: "Sincronizado", I: CheckCircle2 },
  salvando: { cor: T.primary, txt: "Salvando…", I: RefreshCw },
  carregando: { cor: T.primary, txt: "Carregando…", I: RefreshCw },
  erro: { cor: T.rose, txt: "Não salvo", I: AlertTriangle },
  conflito: { cor: T.amber, txt: "Conflito", I: AlertTriangle },
  deslogado: { cor: T.ink30, txt: "Desconectado", I: Lock },
  config: { cor: T.rose, txt: "Sem configuração", I: AlertTriangle },
};

const BotaoSom = ({ ativo, onToggle, compacto }) => (
  <button onClick={onToggle} title={ativo ? "Sons ligados — clique para silenciar" : "Sons desligados — clique para ativar"}
    style={{
      background: ativo ? `${T.gold}14` : T.lineSoft, color: ativo ? T.gold : T.ink30, border: "none",
      borderRadius: 99, padding: compacto ? "5px 8px" : "6px 8px", display: "inline-flex", alignItems: "center",
    }}>
    {ativo ? <Volume2 size={compacto ? 12 : 13} strokeWidth={2.4} /> : <VolumeX size={compacto ? 12 : 13} strokeWidth={2.4} />}
  </button>
);

const ChipSync = ({ status, ultimoSync, onClick, compacto }) => {
  const s = SYNC_UI[status] || SYNC_UI.ok;
  return (
    <button onClick={onClick} title={ultimoSync ? `Última sincronização: ${ultimoSync.toLocaleTimeString("pt-BR")}` : s.txt}
      className="mono inline-flex items-center gap-1.5" style={{
        background: `${s.cor}14`, color: s.cor, borderRadius: 99, padding: compacto ? "5px 8px" : "6px 11px",
        fontSize: 10.5, fontWeight: 700, border: "none", letterSpacing: ".03em",
      }}>
      <s.I size={11} strokeWidth={2.6} className={status === "salvando" || status === "carregando" ? "anim-flame" : ""} />
      {!compacto && s.txt.toUpperCase()}
    </button>
  );
};

/* ------------------- CONFIRMAÇÃO DE AÇÃO DESTRUTIVA ---------------------- */
function ModalConfirma({ aberto, onCancelar, onConfirmar, titulo, texto, detalhe, rotulo = "Continuar" }) {
  return (
    <Modal open={aberto} onClose={onCancelar} title={titulo} sub="Esta ação não pode ser desfeita com um clique.">
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-3.5" style={{ background: T.roseSoft, borderRadius: 12 }}>
          <AlertTriangle size={16} color={T.rose} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 1 }} />
          <div style={{ fontSize: 13, color: "#96253C", lineHeight: 1.6 }}>{texto}</div>
        </div>
        {detalhe && (
          <div className="p-3" style={{ background: T.paper, borderRadius: 11, fontSize: 12.5, color: T.ink70, lineHeight: 1.6 }}>{detalhe}</div>
        )}
        <div className="flex gap-2 justify-end">
          <Btn variant="ghost" onClick={onCancelar}>Cancelar</Btn>
          <Btn variant="danger" onClick={onConfirmar}>{rotulo}</Btn>
        </div>
      </div>
    </Modal>
  );
}

/* -------------------------- MIGRAÇÃO DA VERSÃO 1.0 ----------------------- */
function ModalMigracao({ pacote, onEscolher }) {
  if (!pacote) return null;
  const { resumo, resumoNuvem } = pacote;
  const nuvemVazia = resumoNuvem?.vazio;

  const linhas = [
    ["XP", resumo.xp, resumoNuvem.xp],
    ["Sessões de estudo", resumo.sessoes, resumoNuvem.sessoes],
    ["Simulados", resumo.simulados, resumoNuvem.simulados],
    ["Erros no caderno", resumo.erros, resumoNuvem.erros],
    ["Redações", resumo.redacoes, resumoNuvem.redacoes],
    ["Dias com missão", resumo.dias, resumoNuvem.dias],
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5" style={{ background: "rgba(20,26,46,.5)", backdropFilter: "blur(3px)" }}>
      <Card className="anim-pop" style={{ maxWidth: 520, width: "100%", maxHeight: "92vh", overflowY: "auto" }}>
        <div className="p-5" style={{ borderBottom: `1px solid ${T.lineSoft}` }}>
          <div className="flex items-center gap-2.5">
            <div style={{ background: T.goldSoft, borderRadius: 11, padding: 8 }}><Layers size={17} color={T.gold} strokeWidth={2.3} /></div>
            <div>
              <h3 style={{ fontSize: 17 }}>Encontrei progresso da versão anterior</h3>
              <div style={{ fontSize: 12, color: T.ink50, marginTop: 2 }}>Nada foi apagado. Você decide o que fazer.</div>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["", "Versão antiga", "Na nuvem"].map((h, i) => (
                    <th key={i} className="mono uppercase" style={{ textAlign: i ? "right" : "left", padding: "6px 8px", fontSize: 9.5, letterSpacing: ".1em", color: T.ink50, fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {linhas.map(([l, a, b]) => (
                  <tr key={l} style={{ borderTop: `1px solid ${T.lineSoft}` }}>
                    <td style={{ padding: "7px 8px", fontSize: 12.5, color: T.ink70 }}>{l}</td>
                    <td className="mono" style={{ padding: "7px 8px", fontSize: 13, fontWeight: 700, textAlign: "right", color: a ? T.gold : T.ink30 }}>{a}</td>
                    <td className="mono" style={{ padding: "7px 8px", fontSize: 13, fontWeight: 700, textAlign: "right", color: b ? T.primary : T.ink30 }}>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3" style={{ background: T.paper, borderRadius: 11, fontSize: 12.5, color: T.ink70, lineHeight: 1.6 }}>
            Os dados antigos continuam guardados na chave <span className="mono">enem_reinos_v1</span> mesmo depois da sua escolha.
            Esta versão nunca apaga nada — só lê e copia.
          </div>

          <div className="space-y-2">
            <button onClick={() => onEscolher("mesclar")} className="w-full p-3.5 text-left" style={{ background: T.jadeSoft, border: `1px solid #BFE6D9`, borderRadius: 13 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: "#0A6B50" }}>Juntar os dois (recomendado)</div>
              <div style={{ fontSize: 12, color: "#12805F", marginTop: 3, lineHeight: 1.5 }}>
                Une os registros pelos identificadores. Nada é descartado e duplicata não vira registro dobrado.
              </div>
            </button>

            <button onClick={() => onEscolher("substituir")} className="w-full p-3.5 text-left" style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: 13 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700 }}>Usar só a versão antiga</div>
              <div style={{ fontSize: 12, color: T.ink50, marginTop: 3, lineHeight: 1.5 }}>
                {nuvemVazia ? "A nuvem está vazia, então isto não descarta nada." : "Descarta o que já está na nuvem. Um snapshot do descartado fica no histórico do servidor."}
              </div>
            </button>

            <div className="flex gap-2">
              <Btn variant="ghost" size="sm" onClick={() => onEscolher("adiar")} full>Decidir depois</Btn>
              <Btn variant="ghost" size="sm" onClick={() => onEscolher("nunca")} full>Não perguntar mais</Btn>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ------------------------------ TELA DE LOGIN ---------------------------- */
function TelaLogin({ onLogin, status, erroMsg, backendsAtivos }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [criar, setCriar] = useState(false);
  const ocupado = status === "carregando";
  const enviar = () => { if (email.trim() && senha.length >= 6) onLogin(email.trim(), senha, criar); };
  const semPersistencia = (backendsAtivos || []).length === 0;

  if (!CFG_OK) {
    return (
      <div className="enem-root min-h-screen flex items-center justify-center p-6">
        <GlobalCSS />
        <Card className="p-6 anim-pop" style={{ maxWidth: 460 }}>
          <div style={{ background: T.roseSoft, borderRadius: 12, padding: 10, width: 42, marginBottom: 14 }}>
            <AlertTriangle size={20} color={T.rose} strokeWidth={2.3} />
          </div>
          <h2 style={{ fontSize: 19 }}>Falta configurar o Supabase</h2>
          <p style={{ fontSize: 13, color: T.ink50, marginTop: 8, lineHeight: 1.65 }}>
            As constantes <span className="mono">SUPABASE_URL</span> e <span className="mono">SUPABASE_ANON</span> ainda estão
            com os valores de exemplo no topo do arquivo. Enquanto isso, nada é salvo — e o app avisa em vez de fingir que salvou.
          </p>
          <div className="mt-4 p-3" style={{ background: T.paper, borderRadius: 12, fontSize: 12.5, color: T.ink70, lineHeight: 1.7 }}>
            No Supabase: <strong>Settings → API</strong>. Copie <em>Project URL</em> e a chave <em>anon public</em>.
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="enem-root min-h-screen flex items-center justify-center p-5" style={{ background: `linear-gradient(160deg, ${T.ink} 0%, #232C4B 55%, #35306E 100%)` }}>
      <GlobalCSS />
      <div className="anim-pop card" style={{ maxWidth: 400, width: "100%", padding: 28, borderRadius: 22 }}>
        <div className="flex items-center gap-2.5 mb-5">
          <div style={{ background: T.ink, borderRadius: 11, padding: 8 }}><Compass size={16} color="#fff" strokeWidth={2.4} /></div>
          <div>
            <div className="display" style={{ fontSize: 16, fontWeight: 700, lineHeight: 1 }}>Reinos</div>
            <div className="mono" style={{ fontSize: 9.5, color: T.ink30, letterSpacing: ".1em", marginTop: 2 }}>ENEM 2026 · v{VERSAO_APP}</div>
          </div>
        </div>

        <h2 style={{ fontSize: 19 }}>{criar ? "Criar sua conta" : "Entrar"}</h2>
        <p style={{ fontSize: 12.5, color: T.ink50, marginTop: 6, lineHeight: 1.6 }}>
          O login é o que liga o seu progresso à conta em vez do aparelho. Use o mesmo e-mail no iPhone, no iPad e no Windows.
        </p>

        <div className="space-y-3 mt-5">
          <Field label="E-mail">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputCss}
              placeholder="voce@email.com" autoComplete="email" onKeyDown={(e) => e.key === "Enter" && enviar()} />
          </Field>
          <Field label="Senha" hint={criar ? "mínimo de 6 caracteres" : undefined}>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} style={inputCss}
              placeholder="••••••••" autoComplete={criar ? "new-password" : "current-password"} onKeyDown={(e) => e.key === "Enter" && enviar()} />
          </Field>

          {erroMsg && (
            <div className="flex items-start gap-2 p-3" style={{ background: T.roseSoft, borderRadius: 11 }}>
              <AlertTriangle size={13} color={T.rose} strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
              <span style={{ fontSize: 12.5, color: "#96253C", lineHeight: 1.5 }}>{erroMsg}</span>
            </div>
          )}

          {semPersistencia && (
            <div className="flex items-start gap-2 p-3" style={{ background: T.amberSoft, borderRadius: 11 }}>
              <Info size={13} color={T.amber} strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "#7A5B0A", lineHeight: 1.5 }}>
                Este aparelho não tem onde guardar a sessão, então o login será pedido a cada abertura.
                Seu progresso continua salvo na nuvem — o incômodo é só o login.
              </span>
            </div>
          )}

          <Btn full size="lg" onClick={enviar} disabled={ocupado || !email.trim() || senha.length < 6}>
            {ocupado ? "Aguarde…" : criar ? "Criar conta e começar" : "Entrar"}
          </Btn>
          <button onClick={() => setCriar(!criar)} style={{ background: "none", border: "none", color: T.primary, fontSize: 12.5, fontWeight: 600, width: "100%", padding: 4 }}>
            {criar ? "Já tenho conta — entrar" : "Ainda não tenho conta — criar"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ----------------------- MODAL DE DADOS E BACKUP ------------------------- */
function ModalDados({ open, onClose, estado, versao, status, ultimoSync, onImportar, onLogout, onForcar, sessao, comToken, backendsAtivos, onSalvarNota }) {
  const [hist, setHist] = useState(null);
  const [notaTmp, setNotaTmp] = useState("");
  useEffect(() => { if (open) setNotaTmp(estado?.notaInicial != null ? String(estado.notaInicial).replace(".", ",") : ""); }, [open, estado?.notaInicial]);
  const [txt, setTxt] = useState("");
  const [msg, setMsg] = useState("");
  const [confirma, setConfirma] = useState(null);
  const [confirmaHoras, setConfirmaHoras] = useState(null); // "foco" | "tudo" | null
  const [confirmaReset, setConfirmaReset] = useState(false);

  const exportar = () => {
    const blob = new Blob([JSON.stringify(estado, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `enem-backup-${iso(new Date())}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const pedirImportacao = (novo, origem) => {
    const v = validarEstado(novo);
    if (!v) { setMsg("Não consegui ler esse JSON. Confira se colou o arquivo inteiro."); return; }
    const r = resumirEstado(v);
    const atual = resumirEstado(estado);
    setConfirma({
      dados: v, origem,
      detalhe: `Atual: ${atual.sessoes} sessões, ${atual.simulados} simulados, ${atual.xp} XP.  →  Após: ${r.sessoes} sessões, ${r.simulados} simulados, ${r.xp} XP.`,
    });
  };

  const confirmarImportacao = () => {
    onImportar(confirma.dados);
    setMsg(`${confirma.origem} restaurado e enviado para a nuvem.`);
    setTxt(""); setConfirma(null);
  };

  const totalHorasAtual = +((estado.sessoes || []).reduce((a, s2) => a + (s2.minutos || 0), 0) / 60 + (estado.focoMin || 0) / 60).toFixed(1);

  const corrigirHoras = (modo) => {
    onImportar({
      ...estado,
      focoMin: 0,
      sessoes: modo === "tudo" ? (estado.sessoes || []).map((s2) => ({ ...s2, minutos: 0 })) : (estado.sessoes || []),
    });
    setMsg(modo === "tudo" ? "Todo o tempo de estudo foi zerado. Questões, XP e blocos continuam intactos." : "O tempo do Modo Foco foi zerado.");
    setConfirmaHoras(null);
  };

  const blocosComProgresso = Object.values(estado.progresso || {}).filter((v) => v && v.estado && v.estado !== "nao_visto").length;

  /* Reset controlado: zera SÓ o status de conteúdo dos 169 blocos.
     Preserva simulados, caderno de erros, XP, conquistas e registros de aula. */
  const resetarBlocos = () => {
    const limpo = {
      ...estado,
      progresso: {},
      cobertura: {},
      revisoes: [],
      missoes: Object.fromEntries(
        Object.entries(estado.missoes || {}).map(([d, m]) => [d, { ...m, blocosConcluidos: [] }])
      ),
    };
    onImportar(limpo);
    setMsg(`${blocosComProgresso} blocos voltaram para "não visto". Simulados, erros, XP, conquistas e aulas foram preservados.`);
    setConfirmaReset(false);
  };

  const verHistorico = async () => {
    try { const h = await comToken((t) => dados.historico(t)); setHist(h || []); }
    catch (e) { setMsg(`Não consegui carregar o histórico: ${e.message}`); }
  };

  return (
    <>
      <Modal open={open} onClose={onClose} wide title="Dados e sincronização" sub="Onde seu progresso está e como recuperá-lo.">
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              ["Status", SYNC_UI[status]?.txt || "—"],
              ["Versão no servidor", versao || "—"],
              ["Última sync", ultimoSync ? ultimoSync.toLocaleTimeString("pt-BR") : "—"],
              ["Conta", sessao?.user?.email ? sessao.user.email.split("@")[0] : "—"],
              ["Versão do app", `v${VERSAO_APP}`],
            ].map(([l, v]) => (
              <div key={l} className="p-3" style={{ background: T.paper, borderRadius: 11 }}>
                <Eyebrow>{l}</Eyebrow>
                <div className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 4, wordBreak: "break-all" }}>{v}</div>
              </div>
            ))}
          </div>

          <div className="p-3" style={{ background: T.paper, borderRadius: 11 }}>
            <Eyebrow>Nota de partida do termômetro</Eyebrow>
            <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 4, lineHeight: 1.5 }}>
              Usada enquanto não houver simulado registrado. Depois do primeiro simulado, o termômetro passa a usar o resultado real.
            </div>
            <div className="flex items-center gap-2 mt-2.5">
              <input inputMode="decimal" placeholder={String(MEDIA_INICIAL)} value={notaTmp}
                onChange={(e) => setNotaTmp(e.target.value)}
                style={{ ...inputCss, maxWidth: 130 }} className="mono" />
              <Btn size="sm" onClick={() => {
                const v = parseFloat(String(notaTmp).replace(",", "."));
                onSalvarNota(Number.isFinite(v) && v > 0 && v <= 1000 ? v : null);
                setMsg(Number.isFinite(v) && v > 0 && v <= 1000
                  ? `Nota de partida salva: ${v.toLocaleString("pt-BR")}.`
                  : `Campo vazio — voltou ao padrão de ${MEDIA_INICIAL}.`);
              }}>Salvar</Btn>
            </div>
          </div>

          <div className="p-3" style={{ background: T.paper, borderRadius: 11 }}>
            <Eyebrow>Corrigir tempo de estudo</Eyebrow>
            <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 4, lineHeight: 1.5 }}>
              Total atual: <strong className="mono">{totalHorasAtual}h</strong>. Use se marcou algo errado no Modo Foco ou numa sessão.
            </div>
            <div className="flex flex-wrap gap-2 mt-2.5">
              <Btn size="sm" variant="ghost" onClick={() => setConfirmaHoras("foco")}>Zerar só o Modo Foco</Btn>
              <Btn size="sm" variant="danger" onClick={() => setConfirmaHoras("tudo")}>Zerar todo o tempo</Btn>
            </div>
          </div>

          <div className="p-3" style={{ background: T.paper, borderRadius: 11 }}>
            <Eyebrow>Recomeçar o progresso de conteúdo</Eyebrow>
            <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 4, lineHeight: 1.5 }}>
              Volta os 169 blocos para "não visto" e limpa a fila de revisões.
              <strong> Preserva</strong> simulados, caderno de erros, XP, conquistas e registros de aula.
              Atualmente <strong className="mono">{blocosComProgresso}</strong> blocos têm progresso.
            </div>
            <div className="mt-2.5">
              <Btn size="sm" variant="danger" icon={RotateCcw} onClick={() => setConfirmaReset(true)}>Resetar os 169 blocos</Btn>
            </div>
          </div>

          <div className="p-3" style={{ background: T.paper, borderRadius: 11 }}>
            <Eyebrow>Onde a sessão é guardada neste aparelho</Eyebrow>
            <div className="mono" style={{ fontSize: 12, marginTop: 5, color: (backendsAtivos || []).length ? T.jade : T.rose }}>
              {(backendsAtivos || []).length ? backendsAtivos.join(" · ") : "nenhum — o login será pedido a cada abertura"}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Btn size="sm" icon={RefreshCw} onClick={onForcar}>Sincronizar agora</Btn>
            <Btn size="sm" variant="ghost" icon={ArrowDown} onClick={exportar}>Baixar backup (JSON)</Btn>
            <Btn size="sm" variant="ghost" icon={Clock} onClick={verHistorico}>Ver histórico do servidor</Btn>
            <Btn size="sm" variant="danger" icon={Lock} onClick={onLogout}>Sair da conta</Btn>
          </div>

          {msg && <div className="p-3" style={{ background: T.primarySoft, borderRadius: 11, fontSize: 12.5, color: T.primaryDeep }}>{msg}</div>}

          {hist && (
            <div>
              <Eyebrow>Snapshots guardados no servidor</Eyebrow>
              <div className="mt-2 space-y-1" style={{ maxHeight: 190, overflowY: "auto" }}>
                {hist.length === 0 && <div style={{ fontSize: 12.5, color: T.ink50 }}>Ainda não há snapshots — eles aparecem a partir da segunda gravação.</div>}
                {hist.map((h) => (
                  <div key={h.id} className="flex items-center justify-between p-2.5" style={{ background: T.paper, borderRadius: 10 }}>
                    <span className="mono" style={{ fontSize: 11.5 }}>{new Date(h.criado_em).toLocaleString("pt-BR")}</span>
                    <Btn size="sm" variant="ghost" onClick={() => pedirImportacao(h.dados, "Snapshot")}>Restaurar</Btn>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Field label="Restaurar de um arquivo de backup" hint="Cole aqui o conteúdo de um .json baixado antes.">
            <textarea rows={4} value={txt} onChange={(e) => setTxt(e.target.value)} placeholder='{"xp": 1200, "sessoes": [...]}' style={{ ...inputCss, resize: "vertical", fontSize: 12 }} className="mono" />
          </Field>
          <Btn size="sm" variant="ghost" disabled={!txt.trim()} onClick={() => {
            try { pedirImportacao(JSON.parse(txt), "Backup"); }
            catch { setMsg("Não consegui ler esse JSON. Confira se colou o arquivo inteiro."); }
          }}>Restaurar backup colado</Btn>
        </div>
      </Modal>

      <ModalConfirma aberto={!!confirma} onCancelar={() => setConfirma(null)} onConfirmar={confirmarImportacao}
        titulo="Substituir todo o progresso?"
        texto="Esta ação substituirá todo seu progresso atual em todos os aparelhos. Deseja continuar?"
        detalhe={confirma?.detalhe}
        rotulo="Sim, substituir" />

      <ModalConfirma aberto={confirmaReset} onCancelar={() => setConfirmaReset(false)} onConfirmar={resetarBlocos}
        titulo="Resetar o progresso dos 169 blocos?"
        texto="Todos os blocos voltam para 'não visto' e a fila de revisão espaçada é limpa, em todos os aparelhos."
        detalhe={`Preservado: ${(estado.simulados || []).length} simulados · ${(estado.erros || []).length} erros no caderno · ${estado.xp} XP · ${Object.keys(estado.conquistas || {}).length} conquistas · registros de aula. Um snapshot do estado atual fica no histórico do servidor — dá para voltar atrás por "Ver histórico do servidor".`}
        rotulo="Sim, resetar" />

      <ModalConfirma aberto={!!confirmaHoras} onCancelar={() => setConfirmaHoras(null)} onConfirmar={() => corrigirHoras(confirmaHoras)}
        titulo={confirmaHoras === "tudo" ? "Zerar todo o tempo de estudo?" : "Zerar o tempo do Modo Foco?"}
        texto={confirmaHoras === "tudo"
          ? "Isto zera os minutos de todas as sessões e do Modo Foco em todos os aparelhos. Questões, acertos, blocos concluídos, XP e conquistas não são afetados."
          : "Isto zera só os minutos acumulados no Modo Foco. As sessões de estudo registradas continuam com seu tempo normal."}
        detalhe={`Um snapshot do estado atual (${totalHorasAtual}h) fica guardado no histórico do servidor, caso precise recuperar.`}
        rotulo="Sim, zerar" />
    </>
  );
}

/* --------------------------- BANNER DE CONFLITO -------------------------- */
const BannerConflito = ({ conflito, onResolver }) => {
  if (!conflito) return null;
  const contar = (e) => (e?.sessoes?.length || 0) + (e?.simulados?.length || 0) + (e?.erros?.length || 0);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5" style={{ background: "rgba(20,26,46,.5)", backdropFilter: "blur(3px)" }}>
      <Card className="anim-pop p-6" style={{ maxWidth: 470, borderColor: T.amber }}>
        <div className="flex items-center gap-2.5 mb-3">
          <AlertTriangle size={18} color={T.amber} strokeWidth={2.4} />
          <h3 style={{ fontSize: 17 }}>Outro aparelho gravou antes</h3>
        </div>
        <p style={{ fontSize: 13, color: T.ink70, lineHeight: 1.65 }}>
          Você editou aqui, mas a versão que está na nuvem é mais recente — provavelmente veio de outro aparelho.
          Nada foi apagado. Escolha o que fazer; a outra versão continua guardada no histórico do servidor.
        </p>
        <button onClick={() => onResolver("mesclar")} className="w-full p-3.5 text-left mt-4" style={{ background: T.jadeSoft, border: `1px solid #BFE6D9`, borderRadius: 13 }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: "#0A6B50" }}>Juntar as duas (recomendado)</div>
          <div style={{ fontSize: 12, color: "#12805F", marginTop: 3 }}>Une os registros pelos identificadores. Nada se perde.</div>
        </button>
        <div className="grid grid-cols-2 gap-2.5 mt-2.5">
          <button onClick={() => onResolver("remoto")} className="p-3.5 text-left" style={{ background: T.paper, border: `1px solid ${T.line}`, borderRadius: 13 }}>
            <Eyebrow cor={T.primary}>Versão da nuvem</Eyebrow>
            <div className="mono" style={{ fontSize: 18, fontWeight: 700, marginTop: 5 }}>{contar(conflito.remoto)}</div>
            <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 2 }}>registros · descarta o que fez agora</div>
          </button>
          <button onClick={() => onResolver("local")} className="p-3.5 text-left" style={{ background: T.paper, border: `1px solid ${T.line}`, borderRadius: 13 }}>
            <Eyebrow cor={T.jade}>Versão deste aparelho</Eyebrow>
            <div className="mono" style={{ fontSize: 18, fontWeight: 700, marginTop: 5 }}>{contar(conflito.local)}</div>
            <div style={{ fontSize: 11.5, color: T.ink50, marginTop: 2 }}>registros · sobrescreve a nuvem</div>
          </button>
        </div>
      </Card>
    </div>
  );
};
/* ================================= APP =================================== */
/* ======================== TELA: PADRÕES DO ENEM ===========================
   Banco de questões dos chats de padrões: um tópico por chat, com o mapa de
   padrões, as listas ensinadas pelo Claude e os dados do ENEM 2020–2025.
   O conteúdo vem de padroes-enem.js (gerado por padroes-enem/scripts/
   build_data.py) e só é baixado quando a aba abre, como o pdfjs.js.
   O progresso fica em estado.padroesEnem e sincroniza com o resto do app
   (formato em lerRegistro). */

let CACHE_PADROES = null;
function carregarPadroes() {
  if (window.__PADROES_ENEM) return Promise.resolve(window.__PADROES_ENEM);
  if (!CACHE_PADROES) {
    /* <script> e não fetch: funciona também com o app aberto direto dos arquivos */
    CACHE_PADROES = new Promise((ok, erro) => {
      const tag = document.createElement("script");
      tag.src = "padroes-enem.js?v=" + VERSAO_APP;
      tag.onload = () => (window.__PADROES_ENEM ? ok(window.__PADROES_ENEM) : erro(new Error("padroes-enem.js carregou mas não trouxe os dados")));
      tag.onerror = () => {
        tag.remove();
        CACHE_PADROES = null;
        erro(new Error("Não consegui carregar padroes-enem.js — confirme que o arquivo está na pasta publicada"));
      };
      document.head.appendChild(tag);
    });
  }
  return CACHE_PADROES;
}

const LETRAS = ["A", "B", "C", "D", "E"];

/* Progresso compacto, porque o estado inteiro vai para a nuvem a cada alteração
   e o salvamento de emergência (keepalive) aceita no máximo ~60 KB.
   Cada questão vira uma string: letra marcada (ou "-"), situação, data AAMMDD e,
   se houver mais de uma tentativa, ".n". Ex.: "Cc261013", "Be261014.2", "-v261013".
   Situação: c acertou · e errou · v só viu o gabarito · g/h acertou/errou depois de ver o gabarito. */
function lerRegistro(s) {
  const m = /^([A-E-])([cevgh])(\d{2})(\d{2})(\d{2})(?:\.(\d+))?$/.exec(typeof s === "string" ? s : "");
  if (!m) return null;
  const em = `20${m[3]}-${m[4]}-${m[5]}`;
  if (m[2] === "v") return { visto: true, em, t: 0 };
  return { r: m[1], ok: m[2] === "c" || m[2] === "g", gab: m[2] === "g" || m[2] === "h", em, t: +(m[6] || 1) };
}
function gravarRegistro(x) {
  const d = String(x.em || "").replace(/-/g, "").slice(2);
  if (!x.r) return `-v${d}`;
  const sit = x.gab ? (x.ok ? "g" : "h") : x.ok ? "c" : "e";
  return `${x.r}${sit}${d}${x.t > 1 ? "." + x.t : ""}`;
}
function registros(estado) {
  const o = {};
  Object.entries(estado.padroesEnem || {}).forEach(([k, v]) => { const x = lerRegistro(v); if (x) o[k] = x; });
  return o;
}
const POS_KEY = "reinos-padroes-pos";
const lerPos = () => { try { return JSON.parse(window.localStorage.getItem(POS_KEY) || "null"); } catch (e) { return null; } };
const gravarPos = (p) => { try { window.localStorage.setItem(POS_KEY, JSON.stringify(p)); } catch (e) { /* sem armazenamento local */ } };

/* ------------------------------- markdown -------------------------------- */
/* Os mapas e as listas vieram dos chats em markdown. Este conversor cobre o que
   eles usam: títulos, listas, tabelas, citações, blocos de código e negrito.
   Todo texto é escapado antes; só <sub>, <sup> e <br> voltam a valer. */
const escHtml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function mdInline(s) {
  let t = escHtml(s);
  t = t.replace(/&lt;(\/?)(sub|sup|br)\s*\/?&gt;/g, "<$1$2>");
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  t = t.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?![\w*])/g, "$1<em>$2</em>");
  return t;
}
function mdCells(linha) {
  let s = linha.trim();
  if (s.startsWith("|")) s = s.slice(1);
  if (s.endsWith("|")) s = s.slice(0, -1);
  return s.replace(/\\\|/g, "\u0000").split("|").map((c) => c.replace(/\u0000/g, "|").trim());
}
function mdTable(linhas) {
  const rows = linhas.filter((l) => !/^\s*\|[\s:|-]+\|?\s*$/.test(l)).map(mdCells);
  if (!rows.length) return "";
  const [cab, ...corpo] = rows;
  return `<div class="pe-tab"><table><thead><tr>${cab.map((c) => `<th>${mdInline(c)}</th>`).join("")}</tr></thead><tbody>${
    corpo.map((r) => `<tr>${r.map((c) => `<td>${mdInline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function mdList(linhas) {
  const ord = /^\s*\d+[.)]\s+/.test(linhas[0]);
  const base = linhas[0].match(/^\s*/)[0].length;
  const itens = [];
  linhas.forEach((ln) => {
    const ind = ln.match(/^\s*/)[0].length;
    const m = ln.match(/^\s*(?:[-*+]|\d+[.)])\s+(.*)$/);
    if (m && ind <= base + 1) itens.push({ txt: m[1], sub: [] });
    else if (itens.length) itens[itens.length - 1].sub.push(ln.slice(Math.min(ind, base + 2)));
  });
  const tag = ord ? "ol" : "ul";
  return `<${tag}>${itens.map((it) => `<li>${mdInline(it.txt)}${it.sub.length ? mdHtml(it.sub.join("\n")) : ""}</li>`).join("")}</${tag}>`;
}
const RE_ITEM = /^\s*(?:[-*+]|\d+[.)])\s+/;
function mdHtml(src) {
  if (!src) return "";
  const L = String(src).replace(/\r/g, "").split("\n");
  const out = [];
  let i = 0;
  while (i < L.length) {
    const l = L[i];
    if (/^\s*```/.test(l)) {
      const buf = [];
      i++;
      while (i < L.length && !/^\s*```/.test(L[i])) buf.push(L[i++]);
      i++;
      out.push(`<pre>${escHtml(buf.join("\n"))}</pre>`);
      continue;
    }
    if (!l.trim()) { i++; continue; }
    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(l)) { out.push("<hr/>"); i++; continue; }
    const h = l.match(/^(#{1,6})\s+(.*)$/);
    if (h) { out.push(`<p class="md-h">${mdInline(h[2])}</p>`); i++; continue; }
    if (/^\s*\|/.test(l)) {
      const buf = [];
      while (i < L.length && /^\s*\|/.test(L[i])) buf.push(L[i++]);
      out.push(mdTable(buf));
      continue;
    }
    if (/^\s*>/.test(l)) {
      const buf = [];
      while (i < L.length && /^\s*>/.test(L[i])) buf.push(L[i++].replace(/^\s*>\s?/, ""));
      out.push(`<blockquote>${mdHtml(buf.join("\n"))}</blockquote>`);
      continue;
    }
    if (RE_ITEM.test(l)) {
      const buf = [];
      while (i < L.length && (RE_ITEM.test(L[i]) || (buf.length && /^\s{2,}\S/.test(L[i])))) buf.push(L[i++]);
      out.push(mdList(buf));
      continue;
    }
    const buf = [];
    while (i < L.length && L[i].trim() && !/^\s*(```|>|\||#{1,6}\s)/.test(L[i]) && !RE_ITEM.test(L[i])) buf.push(L[i++]);
    if (!buf.length) buf.push(L[i++]);
    out.push(`<p>${buf.map((b) => mdInline(b.replace(/\s{2,}$/, ""))).join("<br/>")}</p>`);
  }
  return out.join("");
}
const Md = ({ src, inline, style, className = "" }) => (
  inline
    ? <span className={`pe-md ${className}`} style={style} dangerouslySetInnerHTML={{ __html: mdInline(src || "") }} />
    : <div className={`pe-md ${className}`} style={style} dangerouslySetInnerHTML={{ __html: mdHtml(src || "") }} />
);

const PadroesCSS = () => (
  <style>{`
.pe-md { font-size: 14px; line-height: 1.65; color: ${T.ink70}; overflow-wrap: anywhere; }
.pe-md p { margin: 0 0 10px; }
.pe-md p:last-child, .pe-md ul:last-child, .pe-md ol:last-child { margin-bottom: 0; }
.pe-md .md-h { font-weight: 700; color: ${T.ink}; margin-top: 14px; }
.pe-md ul, .pe-md ol { margin: 0 0 10px; padding-left: 20px; }
.pe-md ul { list-style: disc; } .pe-md ol { list-style: decimal; }
.pe-md li { margin: 3px 0; }
.pe-md li > p { margin: 4px 0; }
.pe-md strong { color: ${T.ink}; font-weight: 650; }
.pe-md code { font-family: 'JetBrains Mono', ui-monospace, monospace; background: ${T.lineSoft}; padding: 1px 5px; border-radius: 5px; font-size: .9em; }
.pe-md pre { background: ${T.paper}; border: 1px solid ${T.line}; border-radius: 10px; padding: 12px 14px; overflow-x: auto;
  font: 12.5px/1.45 'JetBrains Mono', ui-monospace, monospace; color: ${T.ink}; margin: 0 0 12px; white-space: pre; }
.pe-md blockquote { margin: 0 0 10px; padding: 9px 13px; border-left: 3px solid ${T.primary}; background: ${T.primarySoft}66; border-radius: 0 10px 10px 0; }
.pe-md hr { border: 0; border-top: 1px solid ${T.line}; margin: 14px 0; }
.pe-tab { overflow-x: auto; margin: 4px 0 12px; max-width: 100%; }
.pe-md table { border-collapse: collapse; font-size: 13px; min-width: 100%; }
.pe-md th, .pe-md td { border: 1px solid ${T.line}; padding: 6px 9px; text-align: left; vertical-align: top; }
.pe-md th { background: ${T.paper}; font-weight: 600; color: ${T.ink}; }
.pe-enun.pe-md { font-size: 15.5px; color: ${T.ink}; line-height: 1.6; }
.pe-alt { display: flex; align-items: stretch; border: 1px solid ${T.line}; border-radius: 8px; background: ${T.surface}; transition: border-color .15s ease, background .15s ease; }
.pe-alt:hover { border-color: ${T.ink30}; }
.pe-alt-txt { flex: 1; min-width: 0; display: flex; gap: 8px; text-align: left; background: none; border: none; padding: 12px 14px; font-size: 15px; color: ${T.ink}; line-height: 1.5; }
.pe-alt-tes { background: none; border: none; padding: 0 14px; color: ${T.ink50}; display: flex; align-items: center; }
.pe-alt-tes:hover { color: ${T.ink}; }
.pe-alt.cortada .pe-alt-txt { color: ${T.ink30}; text-decoration: line-through; }
.pe-alt.sel { border-color: ${T.primary}; background: ${T.primarySoft}; }
.pe-alt.certa { border-color: ${T.jade}; background: ${T.jadeSoft}; }
.pe-alt.errada { border-color: ${T.rose}; background: ${T.roseSoft}; }
.pe-chip { border: 1px solid ${T.line}; background: ${T.surface}; color: ${T.ink70}; border-radius: 99px; padding: 6px 12px; font-size: 12.5px; font-weight: 600; }
.pe-chip.on { background: ${T.ink}; color: #fff; border-color: ${T.ink}; }
.pe-bolha { width: 30px; height: 30px; border-radius: 99px; border: 1.5px solid ${T.line}; background: ${T.surface}; font-size: 11px; font-weight: 700; color: ${T.ink50}; display: inline-flex; align-items: center; justify-content: center; }
.pe-bolha.atual { border-color: ${T.primary}; color: ${T.primary}; box-shadow: 0 0 0 3px ${T.primarySoft}; }
.pe-bolha.ok { background: ${T.jade}; border-color: ${T.jade}; color: #fff; }
.pe-bolha.erro { background: ${T.rose}; border-color: ${T.rose}; color: #fff; }
.pe-bolha.visto { background: ${T.goldSoft}; border-color: ${T.gold}; color: ${T.ink70}; }
details.pe-det > summary { cursor: pointer; list-style: none; }
details.pe-det > summary::-webkit-details-marker { display: none; }
details.pe-det[open] .pe-seta { transform: rotate(90deg); }
.pe-seta { transition: transform .18s ease; }
`}</style>
);

/* ------------------------------- cálculos -------------------------------- */
const questoesDoTopico = (t) => t.listas.flatMap((L) => L.questoes.map((q) => ({ ...q, listaId: L.id })));

/* reg vem de registros(): por questão, { r, ok, em, t, gab } ou { visto, em }.
   Respostas dadas depois de ver o gabarito (gab) não contam no acerto.
   Um padrão está "feito" quando alguma questão dele foi respondida ou teve o gabarito visto. */
function progressoTopico(t, reg) {
  let tot = 0, resp = 0, ok = 0, feitas = 0;
  const feitos = {}, certos = new Set();
  t.listas.forEach((L) => L.questoes.forEach((q) => {
    tot++;
    const x = reg[q.id];
    if (!x) return;
    feitas++;
    if (x.r && !x.gab) { resp++; if (x.ok) ok++; }
    q.padroes.forEach((c) => {
      const res = x.r ? (x.ok ? "acertou" : "errou") : "viu";
      const ant = feitos[c];
      // por padrão, guarda o melhor resultado e a data mais recente
      const peso = { acertou: 3, errou: 2, viu: 1 };
      if (!ant || peso[res] > peso[ant.res] || (peso[res] === peso[ant.res] && (x.em || "") > (ant.em || ""))) feitos[c] = { res, em: x.em, q };
      if (x.r && x.ok && !x.gab) certos.add(c);
    });
  }));
  const padroes = t.padroes.length;
  const nFeitos = Object.keys(feitos).length;
  return {
    tot, resp, ok, feitas, feitos, padroes, nFeitos, certos: certos.size,
    pct: padroes ? Math.round((nFeitos * 100) / padroes) : 0,
    acerto: resp ? Math.round((ok * 100) / resp) : null,
  };
}
function progressoLista(L, reg) {
  let feitas = 0, ok = 0, resp = 0;
  L.questoes.forEach((q) => { const x = reg[q.id]; if (x) { feitas++; if (x.r && !x.gab) { resp++; if (x.ok) ok++; } } });
  return { tot: L.questoes.length, resp, ok, feitas, pct: L.questoes.length ? Math.round((feitas * 100) / L.questoes.length) : 0 };
}
/* Mesma regra dos Mapas de Física/Química/Biologia: 2020–22 contra 2023–25. */
function tendencia(v) {
  const a = v[0] + v[1] + v[2], b = v[3] + v[4] + v[5], d = b - a;
  if (a === 0 && b > 0) return { t: "✦ novo", cor: T.primary };
  if (d >= 3) return { t: "▲▲ subindo forte", cor: T.jade };
  if (d >= 2) return { t: "▲ subindo", cor: T.jade };
  if (d <= -3) return { t: "▼▼ caindo forte", cor: T.amber };
  if (d <= -2) return { t: "▼ caindo", cor: T.amber };
  return { t: "● estável", cor: T.ink50 };
}
/* "4, 7, 20" vira "Q4, Q7, Q20"; referências com prefixo (A10, Est 2, L1: 6) ficam como estão. */
function refsOficiais(refs) {
  const r = String(refs || "").replace(/\*\*/g, "").trim();
  if (/^[\d\s,e()=]+$/.test(r)) return r.replace(/(\d+)/g, "Q$1");
  return r;
}
function origemDaQuestao(q, mapa) {
  if (q.origem) return q.origem;
  const partes = q.padroes.map((c) => mapa[c]).filter(Boolean).map((p) => refsOficiais(p.refs)).filter(Boolean);
  if (!partes.length) return q.titulo === "Simulado misto" ? "Simulado misto · padrão não identificado" : "Questão ensinada";
  return "Lista oficial · " + [...new Set(partes)].join(" · ");
}
const corMateria = (sig) => (REINOS[sig] ? REINOS[sig].cor : T.primary);
const softMateria = (sig) => (REINOS[sig] ? REINOS[sig].soft : T.primarySoft);
const fmtData = (iso) => { const [, m, d] = iso.split("-"); return `${d}/${m}`; };
/* Faixa do Plano CN: "1–24" vira "padrões 1–24"; "14 padrões" e "20 para ler" ficam como estão. */
const fmtFaixa = (f) => (/^\d+\s*[–-]\s*\d+$/.test(String(f).trim()) ? `padrões ${f}` : String(f));

/* ------------------------------- tela raiz -------------------------------- */
function TelaPadroes({ ctx }) {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);
  const [tentativa, setTentativa] = useState(0);
  const [vista, setVistaBruta] = useState(() => lerPos() || { tipo: "inicio" });

  useEffect(() => {
    let vivo = true;
    setErro(null);
    carregarPadroes().then((d) => vivo && setDados(d)).catch((e) => vivo && setErro(e.message || String(e)));
    return () => { vivo = false; };
  }, [tentativa]);

  const setVista = useCallback((v) => {
    setVistaBruta(v);
    gravarPos(v);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (erro) {
    return (
      <Card className="p-2">
        <PadroesCSS />
        <Empty icon={AlertTriangle} titulo="Não consegui abrir o banco de padrões"
          txt={`O arquivo padroes-enem.js precisa estar na mesma pasta do app (junto do app.js). Detalhe: ${erro}`}
          acao={<Btn icon={RefreshCw} onClick={() => setTentativa((n) => n + 1)}>Tentar de novo</Btn>} />
      </Card>
    );
  }
  if (!dados) {
    return (
      <div style={{ display: "grid", gap: 14 }}>
        <PadroesCSS />
        <div className="shimmer card" style={{ height: 90 }} />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[0, 1, 2, 3, 4, 5].map((i) => <div key={i} className="shimmer card" style={{ height: 150 }} />)}
        </div>
      </div>
    );
  }

  const topico = vista.topicoId ? dados.topicos.find((t) => t.id === vista.topicoId) : null;
  let conteudo;
  if (!topico || vista.tipo === "inicio") conteudo = <PadroesInicio dados={dados} ctx={ctx} setVista={setVista} />;
  else if (vista.tipo === "topico") conteudo = <PadroesTopico dados={dados} t={topico} ctx={ctx} setVista={setVista} />;
  else if (vista.tipo === "listas") conteudo = <PadroesListas t={topico} ctx={ctx} setVista={setVista} />;
  else conteudo = <PadroesLista dados={dados} t={topico} ctx={ctx} vista={vista} setVista={setVista} />;
  return <div><PadroesCSS />{conteudo}</div>;
}

/* ------------------------------ 1. tópicos -------------------------------- */
function PadroesInicio({ dados, ctx, setVista }) {
  const { estado, hoje } = ctx;
  const reg = registros(estado);
  const [mat, setMat] = useState("todas");
  const [busca, setBusca] = useState("");

  const comProg = dados.topicos.map((t) => ({ t, p: progressoTopico(t, reg) }));
  const geral = comProg.reduce((a, { p }) => ({ tot: a.tot + p.tot, resp: a.resp + p.resp, ok: a.ok + p.ok, padroes: a.padroes + p.padroes, feitos: a.feitos + p.nFeitos }), { tot: 0, resp: 0, ok: 0, padroes: 0, feitos: 0 });
  const proximo = (t) => t.agenda.find((a) => a.data >= hoje);
  const deHoje = comProg.filter(({ t }) => t.agenda.some((a) => a.data === hoje));
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const lista = comProg
    .filter(({ t }) => mat === "todas" || t.materia === mat)
    .filter(({ t }) => !busca.trim() || norm(t.titulo + " " + t.padroes.map((p) => p.nome).join(" ")).includes(norm(busca.trim())));

  return (
    <div style={{ display: "grid", gap: 20 }}>
      <div className="anim-rise">
        <Eyebrow cor={T.primary}>Padrões do ENEM</Eyebrow>
        <h1 style={{ fontSize: 25, marginTop: 6 }}>Padrões do ENEM</h1>
        <p style={{ fontSize: 13.5, color: T.ink50, marginTop: 6, lineHeight: 1.6, maxWidth: 640 }}>
          Cada tópico é um chat de padrões: o mapa dos padrões da lista oficial, as listas de questões ensinadas e o que o ENEM cobrou de 2020 a 2025.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Tópicos" valor={dados.topicos.length} sub="um por chat de padrões" icon={Layers} />
        <Stat label="Padrões feitos" valor={`${geral.feitos}/${geral.padroes}`} sub={`${geral.padroes ? Math.round((geral.feitos * 100) / geral.padroes) : 0}% dos padrões mapeados`} icon={Crosshair} delay={40} cor={T.primary} />
        <Stat label="Respondidas" valor={`${geral.resp}/${geral.tot}`} sub="questões ensinadas do banco" icon={CheckCircle2} delay={80} />
        <Stat label="Acerto" valor={geral.resp ? `${Math.round((geral.ok * 100) / geral.resp)}%` : "—"} sub="sem contar as feitas depois do gabarito" icon={Target} delay={120} cor={T.jade} />
      </div>

      {deHoje.length > 0 && (
        <Card className="p-4 anim-rise" style={{ borderColor: T.primary, background: T.primarySoft }}>
          <Eyebrow cor={T.primaryDeep}>Hoje no Plano de Padrões CN</Eyebrow>
          <div className="flex flex-wrap gap-2 mt-2">
            {deHoje.map(({ t }) => {
              const a = t.agenda.find((x) => x.data === hoje);
              return (
                <button key={t.id} onClick={() => setVista({ tipo: "topico", topicoId: t.id })} className="pe-chip" style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
                  <span className="mono" style={{ color: corMateria(t.materia), fontWeight: 700 }}>{t.titulo.split(" · ")[0]}</span>
                  <span style={{ color: T.ink50, fontWeight: 500 }}>{fmtFaixa(a.faixa)} · {dados.modos[a.modo] || a.modo}</span>
                </button>
              );
            })}
          </div>
        </Card>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {[["todas", "Todas"], ["FIS", "Física"], ["QUI", "Química"], ["BIO", "Biologia"]].map(([k, l]) => (
          <button key={k} className={`pe-chip ${mat === k ? "on" : ""}`} onClick={() => setMat(k)}>{l}</button>
        ))}
        <div className="flex items-center gap-2" style={{ marginLeft: "auto", background: T.surface, border: `1px solid ${T.line}`, borderRadius: 99, padding: "6px 12px", minWidth: 0, flex: "1 1 200px", maxWidth: 320 }}>
          <Search size={14} color={T.ink30} />
          <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar tópico ou padrão"
            style={{ border: "none", outline: "none", background: "transparent", fontSize: 13, width: "100%" }} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {lista.map(({ t, p }, i) => {
          const prox = proximo(t);
          const [codigo, nome] = t.titulo.split(" · ");
          return (
            <Card key={t.id} hover className="p-5 anim-rise" style={{ animationDelay: `${Math.min(i, 12) * 30}ms`, cursor: "pointer", display: "flex", flexDirection: "column", gap: 12 }}
              onClick={() => setVista({ tipo: "topico", topicoId: t.id })} role="button" tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setVista({ tipo: "topico", topicoId: t.id })}>
              <div className="flex items-start justify-between gap-3">
                <Pill cor={corMateria(t.materia)} soft={softMateria(t.materia)}>{codigo}</Pill>
                <span className="mono" style={{ fontSize: 11, color: T.ink30 }}>{p.tot} questões</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 15.5, lineHeight: 1.35 }}>{nome || codigo}</div>
              <div style={{ marginTop: "auto" }}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <span style={{ fontSize: 12, color: T.ink50 }}>{p.nFeitos} de {p.padroes} padrões feitos</span>
                  <span className="mono" style={{ fontSize: 13, fontWeight: 700, color: corMateria(t.materia) }}>{p.pct}%</span>
                </div>
                <Barra pct={p.pct} cor={corMateria(t.materia)} h={6} />
                <div className="flex items-center justify-between mt-2" style={{ fontSize: 11.5, color: T.ink50 }}>
                  <span>{p.acerto != null ? `Acerto ${p.acerto}%` : "Ainda sem respostas"}</span>
                  {prox && <span>Plano: {fmtData(prox.data)}</span>}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      {!lista.length && <Card><Empty icon={Search} titulo="Nenhum tópico encontrado" txt="Tente outro termo ou limpe o filtro de matéria." /></Card>}
    </div>
  );
}

/* ------------------------------ 2. tópico --------------------------------- */
function Voltar({ onClick, children }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-1" style={{ background: "none", border: "none", color: T.ink50, fontSize: 12.5, fontWeight: 600, padding: 0 }}>
      <ChevronLeft size={15} strokeWidth={2.4} />{children}
    </button>
  );
}

function Secao({ titulo, sub, children, aberta = true }) {
  return (
    <Card className="p-0 overflow-hidden">
      <details className="pe-det" open={aberta}>
        <summary className="flex items-center justify-between gap-3 p-5">
          <div>
            <h3 style={{ fontSize: 16.5 }}>{titulo}</h3>
            {sub && <div style={{ fontSize: 12.5, color: T.ink50, marginTop: 3 }}>{sub}</div>}
          </div>
          <ChevronRight className="pe-seta" size={18} color={T.ink30} />
        </summary>
        <div className="px-5" style={{ paddingBottom: 20 }}>{children}</div>
      </details>
    </Card>
  );
}

function PadroesTopico({ dados, t, ctx, setVista }) {
  const { estado, hoje } = ctx;
  const reg = registros(estado);
  const p = progressoTopico(t, reg);
  const cor = corMateria(t.materia);
  const [codigo, nome] = t.titulo.split(" · ");
  const qs = questoesDoTopico(t);
  const erradas = qs.filter((q) => reg[q.id] && reg[q.id].r && !reg[q.id].ok);
  const pendentes = qs.filter((q) => !reg[q.id]);
  const RES = { acertou: { cor: T.jade, txt: "acertou", I: CheckCircle2 }, errou: { cor: T.rose, txt: "errou", I: X }, viu: { cor: T.gold, txt: "viu o gabarito", I: Info } };
  const feitosOrd = Object.entries(p.feitos).sort((a, b) => (b[1].em || "").localeCompare(a[1].em || ""));
  const faltam = t.padroes.filter((pd) => !p.feitos[pd.cod]);

  const statusPadrao = (c) => {
    const doPadrao = qs.filter((q) => q.padroes.includes(c));
    if (!doPadrao.length) return { cor: T.ink30, txt: "sem questão ensinada", q: null };
    const q0 = doPadrao.find((q) => !reg[q.id]) || doPadrao[0];
    const f = p.feitos[c];
    if (f) return { cor: RES[f.res].cor, txt: RES[f.res].txt, q: q0 };
    return { cor: T.ink30, txt: "a fazer", q: q0 };
  };
  const abrirQuestao = (q) => {
    const L = t.listas.find((x) => x.questoes.some((y) => y.id === q.id));
    setVista({ tipo: "lista", topicoId: t.id, listaId: L.id, idx: L.questoes.findIndex((x) => x.id === q.id) });
  };

  // padrões agrupados pelo bloco do mapa (e pelo grupo, no chat de BIO 4 + 11 + 12)
  const blocos = [];
  t.padroes.forEach((pd) => {
    const chave = [pd.grupo, pd.bloco].filter(Boolean).join(" · ") || "Padrões";
    let b = blocos.find((x) => x.chave === chave);
    if (!b) { b = { chave, itens: [] }; blocos.push(b); }
    b.itens.push(pd);
  });

  const anos = dados.anos;
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <Voltar onClick={() => setVista({ tipo: "inicio" })}>Padrões do ENEM</Voltar>

      <Card className="p-5 md:p-6 anim-rise" style={{ background: `linear-gradient(135deg, ${softMateria(t.materia)}, ${T.surface} 70%)` }}>
        <div className="flex flex-wrap items-center gap-5">
          <Ring pct={p.pct} size={104} stroke={10} cor={cor}>
            <div className="mono" style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>{p.pct}%</div>
            <div style={{ fontSize: 10, color: T.ink50, marginTop: 3 }}>dos padrões</div>
          </Ring>
          <div style={{ flex: "1 1 260px", minWidth: 0 }}>
            <Pill cor={cor} soft={T.surface}>{codigo}</Pill>
            <h1 style={{ fontSize: 23, marginTop: 8, lineHeight: 1.2 }}>{nome || codigo}</h1>
            <div className="flex flex-wrap mt-3" style={{ fontSize: 12.5, color: T.ink70, columnGap: 20, rowGap: 4 }}>
              <span><b className="mono">{p.nFeitos}</b> de {p.padroes} padrões feitos</span>
              <span><b className="mono">{p.certos}</b> acertados</span>
              <span><b className="mono">{p.feitas}</b> de {p.tot} questões</span>
              <span>Acerto <b className="mono">{p.acerto != null ? `${p.acerto}%` : "—"}</b></span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          <Btn size="lg" icon={Play} onClick={() => setVista({ tipo: "listas", topicoId: t.id })}>Ir para as questões</Btn>
          {pendentes.length > 0 && p.feitas > 0 && <Btn variant="ghost" onClick={() => abrirQuestao(pendentes[0])}>Continuar de onde parei</Btn>}
          {erradas.length > 0 && <Btn variant="danger" icon={RotateCcw} onClick={() => setVista({ tipo: "lista", topicoId: t.id, listaId: "erradas", idx: 0 })}>Refazer as {erradas.length} que errei</Btn>}
        </div>
      </Card>

      <Secao titulo={`Padrões já feitos (${p.nFeitos} de ${p.padroes})`} sub="Atualiza sozinha: entra aqui todo padrão cuja questão você respondeu ou cujo gabarito você viu.">
        {feitosOrd.length === 0 ? (
          <div style={{ fontSize: 13, color: T.ink50 }}>Nenhum padrão feito ainda. Comece pela Lista 1 em “Ir para as questões”.</div>
        ) : (
          <div style={{ display: "grid", gap: 6 }}>
            {feitosOrd.map(([cod, f]) => {
              const pd = t.padroes.find((x) => x.cod === cod);
              const R = RES[f.res];
              return (
                <button key={cod} onClick={() => abrirQuestao(f.q)} className="text-left flex items-center gap-3"
                  style={{ padding: "9px 12px", borderRadius: 10, border: `1px solid ${T.lineSoft}`, background: T.surface }}>
                  <R.I size={16} color={R.cor} strokeWidth={2.4} />
                  <span className="mono" style={{ fontSize: 11.5, fontWeight: 700, color: cor, minWidth: 34 }}>{cod}</span>
                  <span style={{ flex: 1, minWidth: 0, fontSize: 13.5, fontWeight: 600 }}>{pd ? <Md inline src={pd.nome} /> : cod}</span>
                  <span style={{ fontSize: 11.5, color: R.cor, fontWeight: 600, whiteSpace: "nowrap" }}>{R.txt}</span>
                  <span className="mono" style={{ fontSize: 11, color: T.ink30, whiteSpace: "nowrap" }}>{f.em ? fmtData(f.em) : ""}</span>
                </button>
              );
            })}
          </div>
        )}
        {faltam.length > 0 && feitosOrd.length > 0 && (
          <details className="pe-det mt-3">
            <summary className="inline-flex items-center gap-1" style={{ fontSize: 12.5, fontWeight: 600, color: T.primary }}>
              <ChevronRight className="pe-seta" size={14} /> Faltam {faltam.length} padrões
            </summary>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {faltam.map((pd) => <span key={pd.cod} className="mono" title={pd.nome.replace(/\*\*/g, "")} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 7, background: T.lineSoft, color: T.ink70 }}>{pd.cod}</span>)}
            </div>
          </details>
        )}
      </Secao>

      {t.porque.length > 0 && (
        <Card className="p-4" style={{ borderLeft: `4px solid ${cor}` }}>
          <Eyebrow>Por que estudar este tópico</Eyebrow>
          {t.porque.map((x, i) => <p key={i} style={{ fontSize: 13.5, color: T.ink70, marginTop: 6, lineHeight: 1.6 }}>{x}</p>)}
        </Card>
      )}

      <Secao titulo="No ENEM de 2020 a 2025" sub="Frequência, tendência e posição no ranking, dos Mapas de Física, Química e Biologia">
        <div style={{ display: "grid", gap: 18 }}>
          {t.modulos.map((m) => {
            const tot = m.freq.reduce((a, b) => a + b, 0);
            const tr = tendencia(m.freq);
            const max = Math.max(1, ...m.freq);
            return (
              <div key={m.num}>
                <div className="flex flex-wrap items-baseline" style={{ columnGap: 12, rowGap: 4 }}>
                  <span className="mono" style={{ fontSize: 12, fontWeight: 700, color: cor }}>{t.materia} {m.num}</span>
                  <span style={{ fontWeight: 700 }}>{m.nome}</span>
                  <span className="mono" style={{ fontSize: 11.5, color: tr.cor, fontWeight: 700 }}>{tr.t}</span>
                </div>
                <div className="flex flex-wrap items-end gap-5 mt-3">
                  <div className="flex items-end gap-1.5" aria-label="Questões por ano">
                    {m.freq.map((v, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <span className="mono" style={{ fontSize: 10.5, color: v ? T.ink : T.ink30 }}>{v}</span>
                        <div style={{ width: 22, height: 6 + (v / max) * 38, borderRadius: 5, background: v ? cor : T.lineSoft, opacity: v ? 0.35 + (0.65 * v) / max : 1 }} />
                        <span className="mono" style={{ fontSize: 9.5, color: T.ink30 }}>{String(anos[i]).slice(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "grid", gap: 2 }}>
                    <span className="mono" style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>{tot}</span>
                    <span style={{ fontSize: 11.5, color: T.ink50 }}>questões em {m.freq.filter(Boolean).length} de 6 anos</span>
                  </div>
                  {m.rank && (
                    <div style={{ display: "grid", gap: 2, flex: "1 1 220px" }}>
                      <span style={{ fontSize: 12.5 }}><b className="mono">{m.rank.novo}º</b> no ranking pelo ENEM <span style={{ color: T.ink50 }}>(era {m.rank.antes}º no seu ranking)</span></span>
                      <span style={{ fontSize: 12, color: T.ink50, lineHeight: 1.5 }}>{m.rank.porque}</span>
                    </div>
                  )}
                </div>
                {m.questoes.length > 0 && (
                  <details className="pe-det mt-3">
                    <summary className="inline-flex items-center gap-1" style={{ fontSize: 12.5, fontWeight: 600, color: T.primary }}>
                      <ChevronRight className="pe-seta" size={14} /> Ver as {m.questoes.length} questões do ENEM deste módulo
                    </summary>
                    <div className="mt-2" style={{ display: "grid", gap: 4 }}>
                      {m.questoes.map((q) => (
                        <div key={`${q.ano}-${q.n}`} className="flex gap-3" style={{ fontSize: 12.5, padding: "6px 10px", background: T.paper, borderRadius: 8 }}>
                          <span className="mono" style={{ color: T.ink50, whiteSpace: "nowrap" }}>{q.ano} · Q{q.n}</span>
                          <span style={{ color: T.ink70 }}>{q.tema}</span>
                          <span className="mono" style={{ marginLeft: "auto", color: T.ink30, fontSize: 10.5, whiteSpace: "nowrap" }}>{(dados.cadernos[t.materia] || {})[q.ano] || ""}</span>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            );
          })}
        </div>
      </Secao>

      {t.agenda.length > 0 && (
        <Secao titulo="No Plano de Padrões CN" sub="Dias em que este tópico entra no calendário de 07/10 a 13/11">
          <div style={{ display: "grid", gap: 6 }}>
            {t.agenda.map((a, i) => {
              const passado = a.data < hoje, ehHoje = a.data === hoje;
              return (
                <div key={i} className="flex flex-wrap items-center" style={{ columnGap: 12, rowGap: 4,
                  padding: "9px 12px", borderRadius: 10, fontSize: 13,
                  background: ehHoje ? T.primarySoft : T.paper, border: `1px solid ${ehHoje ? T.primary : "transparent"}`, opacity: passado ? 0.6 : 1,
                }}>
                  <span style={{ fontWeight: 650, minWidth: 92 }}>{a.dia}</span>
                  <span className="mono" style={{ color: T.ink70 }}>{fmtFaixa(a.faixa)}</span>
                  <Pill cor={a.modo === "L" ? T.ink50 : a.modo === "O" ? T.amber : T.primary}>{dados.modos[a.modo] || a.modo}</Pill>
                  {ehHoje && <Pill cor={T.primaryDeep}>hoje</Pill>}
                  {a.nome && <span style={{ color: T.ink50, fontSize: 12 }}>{a.nome}</span>}
                </div>
              );
            })}
          </div>
        </Secao>
      )}

      <Secao aberta={false} titulo={`Mapa de padrões (${t.padroes.length})`} sub="O padrão, a lógica de resolução e as questões da lista oficial em que ele aparece. Toque num padrão para ir à questão ensinada.">
        <div style={{ display: "grid", gap: 16 }}>
          {blocos.map((b) => (
            <div key={b.chave}>
              <Eyebrow>{b.chave}</Eyebrow>
              <div className="mt-2" style={{ display: "grid", gap: 6 }}>
                {b.itens.map((pd) => {
                  const st = statusPadrao(pd.cod);
                  return (
                    <button key={pd.cod} disabled={!st.q} onClick={() => st.q && abrirQuestao(st.q)} className="text-left"
                      style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, padding: "10px 12px", borderRadius: 10, border: `1px solid ${T.lineSoft}`, background: T.surface, opacity: st.q ? 1 : 0.7 }}>
                      <span className="mono" style={{ fontSize: 11.5, fontWeight: 700, color: st.cor === T.ink30 ? T.ink70 : "#fff", background: st.cor === T.ink30 ? T.lineSoft : st.cor, borderRadius: 7, padding: "3px 7px", height: "fit-content", minWidth: 38, textAlign: "center" }}>{pd.cod}</span>
                      <span style={{ minWidth: 0 }}>
                        <span style={{ fontWeight: 650, fontSize: 13.5, color: T.ink }}><Md inline src={pd.nome} /></span>
                        {pd.logica && <span style={{ display: "block", fontSize: 12.5, color: T.ink50, marginTop: 3, lineHeight: 1.5 }}><Md inline src={pd.logica} /></span>}
                        <span className="mono" style={{ display: "block", fontSize: 11, color: T.ink30, marginTop: 4 }}>Lista oficial: {refsOficiais(pd.refs)} · {st.txt}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Secao>

      <Secao titulo="Material do chat" sub="O mapa completo como saiu na conversa, com observações e roteiros" aberta={false}>
        <Md src={t.mapa} />
        {t.materiais.map((m, i) => (
          <details key={i} className="pe-det mt-4">
            <summary className="inline-flex items-center gap-1" style={{ fontWeight: 650, color: T.primary, fontSize: 13.5 }}>
              <ChevronRight className="pe-seta" size={14} /> {m.titulo}
            </summary>
            <div className="mt-2"><Md src={m.md} /></div>
          </details>
        ))}
      </Secao>
    </div>
  );
}

/* ------------------------------ 3. listas --------------------------------- */
function PadroesListas({ t, ctx, setVista }) {
  const reg = registros(ctx.estado);
  const cor = corMateria(t.materia);
  const grupos = [];
  t.listas.forEach((L) => {
    let g = grupos.find((x) => x.nome === L.grupo);
    if (!g) { g = { nome: L.grupo, listas: [] }; grupos.push(g); }
    g.listas.push(L);
  });
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <Voltar onClick={() => setVista({ tipo: "topico", topicoId: t.id })}>{t.titulo.split(" · ")[0]}</Voltar>
      <Cabecalho titulo="Listas de padrões" sub={`${t.titulo}. As listas seguem a divisão do chat: cada uma traz o guia do padrão, a questão e a resolução passo a passo.`} />
      {grupos.map((g) => (
        <div key={g.nome || "_"} style={{ display: "grid", gap: 10 }}>
          {g.nome && <Eyebrow>{g.nome}</Eyebrow>}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
            {g.listas.map((L) => {
              const p = progressoLista(L, reg);
              return (
                <Card key={L.id} hover className="p-4" style={{ cursor: "pointer", display: "grid", gap: 10 }}
                  onClick={() => setVista({ tipo: "lista", topicoId: t.id, listaId: L.id, idx: Math.max(0, L.questoes.findIndex((q) => !reg[q.id])) })}>
                  <div className="flex items-center justify-between gap-2">
                    <span style={{ fontWeight: 700, fontSize: 15.5 }}>{L.titulo}</span>
                    {p.feitas === p.tot && p.tot > 0 ? <Pill cor={T.jade}><Check size={10} />feita</Pill> : <span className="mono" style={{ fontSize: 11.5, color: T.ink50 }}>{p.feitas}/{p.tot}</span>}
                  </div>
                  <div style={{ fontSize: 12.5, color: T.ink50, lineHeight: 1.5 }}>
                    {L.subtitulo}{L.padroes.length ? ` · ${L.padroes.slice(0, 8).join(", ")}${L.padroes.length > 8 ? ` +${L.padroes.length - 8}` : ""}` : ""}
                  </div>
                  <Barra pct={p.pct} cor={cor} h={5} />
                  {p.resp > 0 && <div style={{ fontSize: 11.5, color: T.ink50 }}>{p.ok} acertos em {p.resp}</div>}
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------ 4. questões ------------------------------- */
function PadroesLista({ dados, t, ctx, vista, setVista }) {
  const { estado, aplicar, hoje, toast } = ctx;
  const reg = registros(estado);
  const mapa = useMemo(() => Object.fromEntries(t.padroes.map((p) => [p.cod, p])), [t]);
  const [gabAberto, setGabAberto] = useState(() => { try { return window.localStorage.getItem("reinos-padroes-gab") === "1"; } catch (e) { return false; } });
  const trocarGab = (v) => { setGabAberto(v); try { window.localStorage.setItem("reinos-padroes-gab", v ? "1" : "0"); } catch (e) { /* sem armazenamento local */ } };

  // "erradas" é uma lista virtual com as questões erradas do tópico
  const [errSnapshot] = useState(() => questoesDoTopico(t).filter((q) => reg[q.id] && reg[q.id].r && !reg[q.id].ok).map((q) => q.id));
  const L = vista.listaId === "erradas"
    ? { id: "erradas", titulo: "Questões que errei", grupo: "", intro: "", fim: "", questoes: questoesDoTopico(t).filter((q) => errSnapshot.includes(q.id)) }
    : t.listas.find((x) => x.id === vista.listaId);
  if (!L || !L.questoes.length) {
    return (
      <div style={{ display: "grid", gap: 14 }}>
        <Voltar onClick={() => setVista({ tipo: "listas", topicoId: t.id })}>Listas</Voltar>
        <Card><Empty icon={CheckCircle2} titulo="Nada por aqui" txt="Não há questões nesta lista agora." /></Card>
      </div>
    );
  }
  const idx = Math.min(Math.max(0, vista.idx || 0), L.questoes.length - 1);
  const q = L.questoes[idx];
  const ir = (i) => setVista({ ...vista, idx: i });
  const p = progressoLista(L, reg);
  const pt = progressoTopico(t, reg);
  const cor = corMateria(t.materia);

  const avisarFim = () => {
    const feitas = L.questoes.filter((x) => reg[x.id] || x.id === q.id).length;
    if (feitas === L.questoes.length) toast("Lista concluída", `${L.titulo} de ${t.titulo.split(" · ")[0]}`, T.jade, Trophy);
  };
  const responder = (letra) => {
    const ok = letra === q.gabarito;
    const ant = reg[q.id];
    aplicar((e) => {
      const r = { ...(e.padroesEnem || {}) };
      const antes = lerRegistro(r[q.id]);
      const viuAntes = !!(antes && (antes.gab || antes.visto));
      r[q.id] = gravarRegistro({ r: letra, ok, em: hoje, t: (antes?.t || 0) + 1, gab: viuAntes });
      return { ...e, padroesEnem: r, xp: e.xp + (antes?.r ? 0 : ok && !viuAntes ? 3 : 1) };
    });
    if (!ant?.r) {
      ctx.contarQuestoes(1, "feitas");
      ctx.contarQuestoes(1, "corrigidas");
    }
    if (!ant) avisarFim();
  };
  const verGabarito = () => {
    if (reg[q.id]) return;
    aplicar((e) => {
      const r = { ...(e.padroesEnem || {}) };
      if (!lerRegistro(r[q.id])) r[q.id] = gravarRegistro({ em: hoje });
      return { ...e, padroesEnem: r };
    });
    avisarFim();
  };

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Voltar onClick={() => setVista({ tipo: "listas", topicoId: t.id })}>Listas · {t.titulo.split(" · ")[0]}</Voltar>
        <span className="mono" style={{ fontSize: 11.5, color: T.ink50 }}>{p.feitas}/{p.tot} feitas · {p.ok} acertos · {pt.nFeitos}/{pt.padroes} padrões do tópico</span>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 style={{ fontSize: 22 }}>{L.titulo}{L.grupo ? <span style={{ color: T.ink50, fontWeight: 500 }}> · {L.grupo}</span> : null}</h1>
          <div style={{ fontSize: 12.5, color: T.ink50, marginTop: 4 }}>{t.titulo}</div>
        </div>
        <div className="inline-flex items-center gap-1" role="group" aria-label="Quando mostrar o gabarito"
          style={{ background: T.lineSoft, borderRadius: 11, padding: 3 }}>
          {[[false, "Gabarito ao clicar"], [true, "Gabarito aberto"]].map(([v, l]) => (
            <button key={l} onClick={() => trocarGab(v)} style={{
              border: "none", borderRadius: 8, padding: "6px 11px", fontSize: 12, fontWeight: 600,
              background: gabAberto === v ? T.surface : "transparent", color: gabAberto === v ? T.ink : T.ink50,
              boxShadow: gabAberto === v ? "0 1px 3px rgba(20,26,46,.1)" : "none",
            }}>{l}</button>
          ))}
        </div>
      </div>

      {L.intro && idx === 0 && (
        <details className="pe-det card p-4">
          <summary className="inline-flex items-center gap-1" style={{ fontWeight: 650, fontSize: 13.5, color: T.primary }}>
            <ChevronRight className="pe-seta" size={14} /> Antes de começar a lista
          </summary>
          <div className="mt-3"><Md src={L.intro} /></div>
        </details>
      )}

      <div className="flex flex-wrap gap-1.5" aria-label="Questões da lista">
        {L.questoes.map((x, i) => {
          const r = reg[x.id];
          const st = !r ? "" : !r.r ? "visto" : r.ok && !r.gab ? "ok" : r.ok ? "visto" : "erro";
          return (
            <button key={x.id} onClick={() => ir(i)} className={`pe-bolha mono ${i === idx ? "atual" : ""} ${st}`}
              aria-label={`Questão ${x.n}${st === "ok" ? ", acertou" : st === "erro" ? ", errou" : st === "visto" ? ", gabarito visto" : ""}`}>{x.n}</button>
          );
        })}
      </div>

      <CartaoQuestao key={q.id} q={q} t={t} mapa={mapa} reg={reg[q.id]} ctx={ctx} cor={cor}
        gabAberto={gabAberto} onResponder={responder} onVerGabarito={verGabarito} />

      <div className="flex items-center justify-between gap-3">
        <Btn variant="ghost" icon={ChevronLeft} disabled={idx === 0} onClick={() => ir(idx - 1)}>Anterior</Btn>
        {idx < L.questoes.length - 1
          ? <Btn onClick={() => ir(idx + 1)}>Próxima <ChevronRight size={15} strokeWidth={2.4} /></Btn>
          : <Btn variant="dark" onClick={() => setVista({ tipo: "topico", topicoId: t.id })}>Ver padrões feitos</Btn>}
      </div>

      {L.fim && idx === L.questoes.length - 1 && (
        <details className="pe-det card p-4">
          <summary className="inline-flex items-center gap-1" style={{ fontWeight: 650, fontSize: 13.5, color: T.primary }}>
            <ChevronRight className="pe-seta" size={14} /> Balanço e fechamento da lista
          </summary>
          <div className="mt-3"><Md src={L.fim} /></div>
        </details>
      )}
    </div>
  );
}

/* Cada questão começa pelo guia "O que você precisa saber"; o OK abre o enunciado.
   O gabarito pode ficar aberto desde o início ou aparecer ao clicar em "Ver gabarito". */
function CartaoQuestao({ q, t, mapa, reg, ctx, cor, gabAberto, onResponder, onVerGabarito }) {
  const [etapa, setEtapa] = useState(q.guia && !reg ? "guia" : "questao");
  const [sel, setSel] = useState(null);
  const [cortadas, setCortadas] = useState([]);
  const [verGuia, setVerGuia] = useState(false);
  const [revelado, setRevelado] = useState(false);
  const [refazendo, setRefazendo] = useState(false);
  const [modalErro, setModalErro] = useState(false);
  const respondida = !!(reg && reg.r) && !refazendo;
  const mostrarGab = respondida || ((revelado || gabAberto) && !refazendo) || (!q.gabarito && etapa === "questao");
  const nAlts = q.alternativas.length || 5;
  const padroesQ = q.padroes.map((c) => mapa[c]).filter(Boolean);

  // no modo "gabarito aberto", abrir a questão já conta o padrão como visto
  useEffect(() => {
    if (etapa === "questao" && gabAberto && !reg) onVerGabarito();
  }, [etapa, gabAberto]); // eslint-disable-line react-hooks/exhaustive-deps

  const cortar = (i) => setCortadas((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]));
  const confirmar = () => {
    if (sel == null) return;
    onResponder(LETRAS[sel]);
    setRefazendo(false);
  };
  const verGabarito = () => { setRevelado(true); onVerGabarito(); };
  const estadoAlt = (i) => {
    if (respondida) {
      if (LETRAS[i] === q.gabarito) return "certa";
      if (LETRAS[i] === reg.r) return "errada";
      return cortadas.includes(i) ? "cortada" : "";
    }
    const base = [sel === i ? "sel" : "", cortadas.includes(i) ? "cortada" : ""];
    if (mostrarGab && LETRAS[i] === q.gabarito) base.push("certa");
    return base.join(" ");
  };

  const cabecalho = (
    <div className="flex items-start justify-between gap-3" style={{ padding: "14px 18px", borderBottom: `1px solid ${T.line}` }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: T.ink70 }}>Questão {q.n}</div>
        <div style={{ fontSize: 12.5, color: T.ink50, marginTop: 1 }}>{origemDaQuestao(q, mapa)}</div>
      </div>
      <span className="mono" style={{ fontSize: 12, color: T.ink30, whiteSpace: "nowrap" }}>#{q.codigo}</span>
    </div>
  );
  const chips = padroesQ.length > 0 && (
    <div className="flex flex-wrap gap-1.5 mb-3">
      {padroesQ.map((pd) => (
        <span key={pd.cod} title={pd.logica} style={{ fontSize: 11.5, color: cor, background: softMateria(t.materia), borderRadius: 99, padding: "3px 9px", fontWeight: 600 }}>
          <span className="mono">{pd.cod}</span> · <Md inline src={pd.nome} />
        </span>
      ))}
    </div>
  );

  if (etapa === "guia") {
    return (
      <div className="card anim-rise" style={{ borderRadius: 10, overflow: "hidden" }}>
        {cabecalho}
        <div style={{ padding: "18px 18px 16px", background: `linear-gradient(180deg, ${T.goldSoft}, ${T.surface} 160px)` }}>
          {chips}
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={17} color={T.gold} />
            <h3 style={{ fontSize: 17 }}>O que você precisa saber antes de fazer essa questão</h3>
          </div>
          <Md src={q.guia} />
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <Btn size="lg" icon={Check} onClick={() => setEtapa("questao")}>OK, ir para a questão</Btn>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* Cartão no formato do banco de questões: número, origem (a questão oficial do padrão) e código */}
      <div className="card anim-rise" style={{ borderRadius: 10, overflow: "hidden" }}>
        {cabecalho}
        <div style={{ padding: "18px 18px 16px" }}>
          {chips}
          {q.guia && (
            <div className="mb-3">
              <button onClick={() => setVerGuia((v) => !v)} className="inline-flex items-center gap-1.5" style={{
                background: "none", border: "none", padding: 0, color: T.gold, fontSize: 12.5, fontWeight: 650,
              }}>
                <BookOpen size={14} /> {verGuia ? "Esconder o guia" : "Rever o guia do padrão"}
              </button>
              {verGuia && <Card className="p-4 mt-2" style={{ background: T.goldSoft, borderColor: "#F3D9AE" }}><Md src={q.guia} /></Card>}
            </div>
          )}
          <Md src={q.enunciado} className="pe-enun" />

          <div style={{ display: "grid", gap: 8, marginTop: 18 }}>
            {Array.from({ length: nAlts }).map((_, i) => (
              <div key={i} className={`pe-alt ${estadoAlt(i)}`}>
                <button className="pe-alt-txt" disabled={respondida} onClick={() => setSel(i)} aria-pressed={sel === i}>
                  <span style={{ whiteSpace: "nowrap" }}>{LETRAS[i].toLowerCase()})</span>
                  {q.alternativas.length ? <Md inline src={q.alternativas[i]} /> : <span style={{ color: T.ink50 }}>alternativa {LETRAS[i]}</span>}
                </button>
                {!respondida && !(mostrarGab && LETRAS[i] === q.gabarito) && (
                  <button className="pe-alt-tes" onClick={() => cortar(i)} aria-label={`Riscar a alternativa ${LETRAS[i]}`} title="Riscar alternativa">
                    <Scissors size={17} strokeWidth={2} />
                  </button>
                )}
                {mostrarGab && LETRAS[i] === q.gabarito && <span className="pe-alt-tes" style={{ color: T.jade }}><CheckCircle2 size={18} /></span>}
                {respondida && LETRAS[i] === reg.r && reg.r !== q.gabarito && <span className="pe-alt-tes" style={{ color: T.rose }}><X size={18} /></span>}
              </div>
            ))}
          </div>

          {!respondida && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <Btn disabled={sel == null || !q.gabarito} onClick={confirmar}>Responder</Btn>
              {!mostrarGab && <Btn variant="ghost" icon={Info} onClick={verGabarito}>Ver gabarito</Btn>}
              {mostrarGab && q.gabarito && <span style={{ fontSize: 12.5, color: T.jade, fontWeight: 650 }}>Gabarito: {q.gabarito}</span>}
              {!q.gabarito && <span style={{ fontSize: 12, color: T.ink50 }}>Esta questão veio sem gabarito no chat; confira na resolução.</span>}
              {refazendo && <Btn variant="ghost" onClick={() => setRefazendo(false)}>Cancelar</Btn>}
            </div>
          )}
        </div>
      </div>

      {mostrarGab && (
        <Card className="p-5 anim-rise" style={{ borderColor: respondida ? (reg.ok ? T.jade : T.rose) : T.line }}>
          {respondida && (
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                {reg.ok ? <CheckCircle2 size={20} color={T.jade} /> : <AlertTriangle size={20} color={T.rose} />}
                <span style={{ fontWeight: 700, fontSize: 15, color: reg.ok ? T.jade : T.rose }}>
                  {reg.ok ? "Acertou" : `Errou: a resposta é ${q.gabarito}`}
                </span>
                {reg.gab && <span style={{ fontSize: 11.5, color: T.ink50 }}>respondida depois de ver o gabarito</span>}
                {reg.t > 1 && <span style={{ fontSize: 11.5, color: T.ink50 }}>{reg.t}ª tentativa</span>}
              </div>
              <div className="flex flex-wrap gap-2">
                {!reg.ok && <Btn size="sm" variant="danger" icon={AlertTriangle} onClick={() => setModalErro(true)}>Registrar no caderno de erros</Btn>}
                <Btn size="sm" variant="ghost" icon={RotateCcw} onClick={() => { setRefazendo(true); setRevelado(false); setSel(null); setCortadas([]); }}>Refazer</Btn>
              </div>
            </div>
          )}
          {!respondida && q.gabarito && (
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 size={18} color={T.jade} />
              <span style={{ fontWeight: 700, fontSize: 15, color: T.jade }}>Gabarito: {q.gabarito}</span>
            </div>
          )}
          <Eyebrow>Resolução passo a passo</Eyebrow>
          <Md src={q.resolucao} style={{ marginTop: 8 }} />
          {q.extra && <div className="mt-4" style={{ paddingTop: 12, borderTop: `1px solid ${T.lineSoft}` }}><Md src={q.extra} /></div>}
        </Card>
      )}

      <ModalErroPadrao aberto={modalErro} onClose={() => setModalErro(false)} q={q} t={t} padroesQ={padroesQ} ctx={ctx} />
    </div>
  );
}
function ModalErroPadrao({ aberto, onClose, q, t, padroesQ, ctx }) {
  const { estado, hoje, addErro } = ctx;
  const blocos = t.modulos.map((m) => `${t.materia}${m.num}`).filter((id) => BLOCO_BY_ID[id]);
  const [f, setF] = useState(null);
  useEffect(() => {
    if (!aberto) return;
    const pd = padroesQ[0];
    setF({
      blocoId: blocos[0] || "",
      tipo: TIPOS_ERRO[0],
      gatilho: pd ? `${pd.cod} · ${pd.nome.replace(/\*\*/g, "")}` : "",
      motivo: "",
      evitar: pd && pd.logica ? pd.logica.replace(/\*\*/g, "") : "",
    });
  }, [aberto]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!aberto || !f) return null;
  const salvar = () => {
    if (!f.blocoId) return;
    const sug = sugerirPrioridade(estado, f.blocoId, f.tipo);
    addErro({
      id: `err${Date.now()}`, data: hoje, blocoId: f.blocoId, tipo: f.tipo, status: STATUS_QUESTAO[0],
      prioridade: sug?.p || "MÉDIA", gatilho: f.gatilho.trim(), motivo: f.motivo.trim(), evitar: f.evitar.trim(),
      obs: `Padrões do ENEM · ${t.titulo.split(" · ")[0]} · Questão ${q.n} (#${q.codigo})`,
    });
    onClose();
  };
  return (
    <Modal open={aberto} onClose={onClose} title="Registrar no caderno de erros" sub={`Questão ${q.n} · ${t.titulo.split(" · ")[0]}`}>
      <div style={{ display: "grid", gap: 14 }}>
        {blocos.length > 1 && (
          <Field label="Bloco">
            <select value={f.blocoId} onChange={(e) => setF({ ...f, blocoId: e.target.value })} style={inputCss}>
              {blocos.map((id) => <option key={id} value={id}>{id} · {BLOCO_BY_ID[id].nome}</option>)}
            </select>
          </Field>
        )}
        <Field label="Tipo de erro">
          <div className="flex flex-wrap gap-1.5">
            {TIPOS_ERRO.map((tp) => <button key={tp} className={`pe-chip ${f.tipo === tp ? "on" : ""}`} onClick={() => setF({ ...f, tipo: tp })}>{tp}</button>)}
          </div>
        </Field>
        <Field label="Padrão (gatilho)"><input value={f.gatilho} onChange={(e) => setF({ ...f, gatilho: e.target.value })} style={inputCss} /></Field>
        <Field label="Por que errei"><textarea value={f.motivo} onChange={(e) => setF({ ...f, motivo: e.target.value })} rows={2} style={{ ...inputCss, resize: "vertical" }} placeholder="Ex.: confundi fenol com álcool" /></Field>
        <Field label="Como evitar" hint="Preenchido com a lógica do padrão; ajuste com suas palavras.">
          <textarea value={f.evitar} onChange={(e) => setF({ ...f, evitar: e.target.value })} rows={3} style={{ ...inputCss, resize: "vertical" }} />
        </Field>
        <Btn full disabled={!f.blocoId} onClick={salvar}>Salvar no caderno</Btn>
      </div>
    </Modal>
  );
}

/* ================================ NAVEGAÇÃO =============================== */
const NAV = [
  { k: "home", l: "Início", I: Home },
  { k: "reinos", l: "Reinos", I: MapIcon },
  { k: "padroes", l: "Padrões do ENEM", c: "Padrões", I: GraduationCap },
  { k: "desempenho", l: "Desempenho", I: BarChart3 },
  { k: "evolucao", l: "Evolução", I: TrendingUp },
  { k: "simulados", l: "Simulados", I: ClipboardList },
  { k: "importar", l: "Importar prova", I: ArrowDown },
  { k: "revisoes", l: "Revisões", I: RefreshCw },
  { k: "erros", l: "Erros", I: AlertTriangle },
  { k: "jogo", l: "Jogo", I: Swords },
  { k: "cobertura", l: "Cobertura", I: ListChecks },
  { k: "calendario", l: "Calendário", I: Calendar },
  { k: "estatisticas", l: "Estatísticas", I: PieIcon },
  { k: "conquistas", l: "Conquistas", I: Award },
];

export default function PlataformaENEM() {
  const sync = useSync();
  const { estado, aplicar, status, erroMsg, versao, conflito, resolverConflito,
    ultimoSync, sessao, login, logout, forcarEnvio, carregado, comToken,
    migracao, aplicarMigracao, backendsAtivos } = sync;

  const [tela, setTela] = useState("home");
  const [foco, setFoco] = useState(false);
  const [modal, setModal] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [celebra, setCelebra] = useState(null);
  const [filaCelebra, setFilaCelebra] = useState([]);
  const [nomeTmp, setNomeTmp] = useState("");

  const hoje = iso(new Date());
  const som = useSom(estado.somAtivo);

  const toast = useCallback((titulo, sub, cor = T.primary, icone = Zap) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, titulo, sub, cor, icone }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3600);
  }, []);

  /* ------------------------------- derivados ----------------------------- */
  const tot = useMemo(() => {
    const base = calcTotais(estado, hoje);
    let sp = 0, cur = hoje;
    while (estado.missoes?.[cur]?.completa) { sp++; cur = addDays(cur, -1); if (sp > 400) break; }
    return { ...base, streakPerfeito: sp };
  }, [estado, hoje]);

  const nivel = useMemo(() => nivelDe(estado.xp), [estado.xp]);
  const agg = useMemo(() => agregarPorBloco(estado), [estado.sessoes]);
  const insights = useMemo(() => gerarInsights(estado, agg), [estado, agg]);
  const missao = useMemo(() => gerarMissao(hoje, estado), [hoje, estado.revisoes, estado.simulados]);

  /* Conquistas — agora com atualização funcional, sem clobber de closure. */
  useEffect(() => {
    if (!carregado || !sessao) return;
    const novas = checarConquistas(estado, tot);
    if (!novas.length) return;
    aplicar((e) => {
      const c = { ...(e.conquistas || {}) };
      novas.forEach((id) => { if (!c[id]) c[id] = hoje; });
      return { ...e, conquistas: c };
    });
    setFilaCelebra((f) => [...f, ...novas.map((id) => CONQUISTAS.find((x) => x.id === id))]);
  }, [tot.questoes, tot.horas, tot.streak, tot.revisoes, tot.erros, tot.redacoes,
      tot.simulados, tot.diasPerfeitos, tot.blocosFeitos.size, carregado, sessao]);

  useEffect(() => {
    if (!celebra && filaCelebra.length) { setCelebra(filaCelebra[0]); setFilaCelebra((f) => f.slice(1)); }
  }, [celebra, filaCelebra]);

  /* Avisa uma vez quando a gravação falhar, para nunca falhar em silêncio. */
  const refAvisou = useRef(false);
  useEffect(() => {
    if (status === "erro" && !refAvisou.current) {
      refAvisou.current = true;
      toast("Progresso não salvo na nuvem", erroMsg || "Toque para ver detalhes", T.rose, AlertTriangle);
    }
    if (status === "ok") refAvisou.current = false;
  }, [status, erroMsg, toast]);

  /* --------------------------------- ações ------------------------------- */
  const agendarCiclo = (revisoesAtuais, blocoId, base) => {
    const novas = [1, 7, 30]
      .filter((et) => !(revisoesAtuais || []).some((r) => r.blocoId === blocoId && r.etapa === et && !r.feita))
      .map((et) => ({ id: `rv${blocoId}${et}${Date.now()}`, blocoId, etapa: et, venc: addDays(base, et), feita: false }));
    return [...(revisoesAtuais || []), ...novas];
  };

  /* Garante que o dia esteja materializado antes de qualquer edição. */
  const garantirAgenda = (e, data) =>
    Array.isArray(e.agenda?.[data]) ? e : { ...e, agenda: { ...(e.agenda || {}), [data]: materializarDia(e, data) } };

  /* Conclusão de item da agenda. Mantém o registro em `missoes` intacto para
     que streak, dias perfeitos, conquistas e blocos concluídos sigam funcionando
     exatamente como antes — a agenda é uma camada acima, não uma substituição. */
  const toggleAgenda = (item) => {
    let aviso = null;
    aplicar((e0) => {
      const e = garantirAgenda(e0, hoje);
      const lista = e.agenda[hoje];
      const alvoItem = lista.find((x) => x.id === item.id);
      if (!alvoItem) return e;
      const feito = alvoItem.status === "feito";
      const novaLista = lista.map((x) => (x.id === item.id ? { ...x, status: feito ? "pendente" : "feito" } : x));

      const m = { ...(e.missoes || {}) };
      const dia = { itens: {}, blocosConcluidos: [], ...(m[hoje] || {}) };
      dia.itens = { ...dia.itens, [item.id]: !feito };

      let xp = e.xp + (feito ? -(item.xp || 0) : (item.xp || 0));
      let revisoes = e.revisoes || [];
      const blocos = new Set(dia.blocosConcluidos || []);
      const cobertura = { ...(e.cobertura || {}) };

      const progresso = { ...(e.progresso || {}) };
      if (item.blocoId) {
        if (!feito) {
          const prog = progresso[item.blocoId] || { estado: EST.NAO_VISTO, origemDominio: null, furada: false };
          if (item.origem === "cursinho") {
            /* Aula assistida para em AULA_VISTA e NÃO dispara revisão espaçada. */
            progresso[item.blocoId] = avancarEstado(prog, EST.AULA_VISTA, { aulaEm: hoje });
          } else {
            blocos.add(item.blocoId);
            revisoes = agendarCiclo(revisoes, item.blocoId, hoje);
            progresso[item.blocoId] = avancarEstado(prog, EST.DOMINADO, { origemDominio: "questoes", dominioEm: hoje });
          }
        } else blocos.delete(item.blocoId);
      }
      dia.blocosConcluidos = [...blocos];

      const total = novaLista.length;
      const nFeitos = novaLista.filter((x) => x.status === "feito").length;
      const eraCompleta = dia.completa;
      dia.completa = nFeitos === total && total > 0;
      if (dia.completa && !eraCompleta) {
        xp += XP.diaPerfeito + Math.min(100, tot.streak * 10);
        aviso = ["Agenda de hoje fechada", `+${XP.diaPerfeito} XP de bônus e a sequência segue viva`, T.jade, CheckCircle2];
      } else if (!feito) {
        aviso = [`+${item.xp} XP`, item.titulo, (TIPOS_MISSAO[item.tipo] || TIPOS_MISSAO.bloco).cor, Zap];
      }
      if (eraCompleta && !dia.completa) xp -= XP.diaPerfeito;

      m[hoje] = dia;
      return { ...e, agenda: { ...e.agenda, [hoje]: novaLista }, missoes: m, xp: Math.max(0, xp), revisoes, progresso };
    });
    if (aviso) { toast(...aviso); som.tocarDing(); }
  };

  /* Adiar não apaga: reemite o item para o dia seguinte e conta a idade. */
  const adiarItem = (item) => {
    aplicar((e0) => {
      const e = garantirAgenda(garantirAgenda(e0, hoje), addDays(hoje, 1));
      const amanha = addDays(hoje, 1);
      const deHoje = (e.agenda[hoje] || []).filter((x) => x.id !== item.id);
      const movido = { ...item, id: `adi-${Date.now()}`, status: "pendente", vezesAdiado: (item.vezesAdiado || 0) + 1 };
      return { ...e, agenda: { ...e.agenda, [hoje]: deHoje, [amanha]: [...(e.agenda[amanha] || []), movido] } };
    });
    toast("Adiado para amanhã", item.titulo, T.amber, ArrowRightLeft);
  };

  const removerItem = (item) => aplicar((e0) => {
    const e = garantirAgenda(e0, hoje);
    return { ...e, agenda: { ...e.agenda, [hoje]: (e.agenda[hoje] || []).filter((x) => x.id !== item.id) } };
  });

  const alternarRevisao = (item) => aplicar((e0) => {
    const e = garantirAgenda(e0, hoje);
    return { ...e, agenda: { ...e.agenda, [hoje]: (e.agenda[hoje] || []).map((x) => x.id === item.id ? { ...x, revisaoAtiva: !x.revisaoAtiva } : x) } };
  });

  /* Registro de aula em lote: cada linha vira um item, classificado na hora. */
  const registrarAula = (linhas) => {
    const validas = linhas.filter((l) => l.titulo.trim());
    if (!validas.length) return;
    aplicar((e0) => {
      const e = garantirAgenda(e0, hoje);
      const novos = validas.map((l, i) => {
        const b = l.blocoId ? BLOCO_BY_ID[l.blocoId] : null;
        const naJanela = b ? semanaDe(hoje).blocos.includes(b.id) : false;
        const item = {
          id: `aula-${Date.now()}-${i}`,
          origem: "cursinho",
          classificacao: !b ? "extra" : naJanela ? "normal" : "antecipado",
          blocoId: b ? b.id : null,
          tipo: "bloco",
          titulo: l.titulo.trim(),
          sub: b ? `${REINOS[b.sig].nome} · ${b.sig} ${b.n} · ranking ${b.rank}º` : "Fora dos 169 blocos da base",
          xp: XP.bloco,
          status: "pendente",
          ordem: 100 + i,
          vezesAdiado: 0,
          revisaoAtiva: true,
          meta: b ? b.id : null,
        };
        item.minutos = estimarMinutos(item, e);
        return item;
      });
      const progresso = { ...(e.progresso || {}) };
      novos.forEach((it) => {
        if (!it.blocoId) return;
        progresso[it.blocoId] = avancarEstado(progresso[it.blocoId], EST.AULA_VISTA, { aulaEm: hoje });
      });
      return { ...e, agenda: { ...e.agenda, [hoje]: [...(e.agenda[hoje] || []), ...novos] }, progresso };
    });
    toast(`${validas.length} ${validas.length === 1 ? "assunto registrado" : "assuntos registrados"}`, "Aula de hoje entrou na agenda", T.ice, ListChecks);
  };

  /* Check manual livre: marca DOMINADO por autoavaliação, sem passar pela agenda. */
  const marcarBloco = (blocoId, novoEstado) => {
    aplicar((e) => {
      const progresso = { ...(e.progresso || {}) };
      const prog = progresso[blocoId] || { estado: EST.NAO_VISTO, origemDominio: null, furada: false };
      if (novoEstado === EST.NAO_VISTO) {
        delete progresso[blocoId];
      } else if (novoEstado === EST.DOMINADO) {
        progresso[blocoId] = { ...prog, estado: EST.DOMINADO, origemDominio: prog.origemDominio === "questoes" ? "questoes" : "autoavaliado", furada: false, dominioEm: hoje };
      } else {
        progresso[blocoId] = { ...prog, estado: novoEstado, furada: false };
      }
      return { ...e, progresso };
    });
    const b = BLOCO_BY_ID[blocoId];
    toast(ESTADO_UI[novoEstado].t, b ? `${b.sig} ${b.n} · ${b.nome}` : "", ESTADO_UI[novoEstado].cor, CheckCircle2);
    som.tocarDing();
  };

  /* Fila manual do Trilho B: topo da lista = próximo bloco recomendado. */
  const priorizarBloco = (blocoId) => {
    let entrou = false;
    aplicar((e) => {
      const prio = e.prioridades || [];
      const nova = prio.includes(blocoId) ? prio.filter((x) => x !== blocoId) : [blocoId, ...prio];
      entrou = !prio.includes(blocoId);
      return { ...e, prioridades: nova };
    });
    const b = BLOCO_BY_ID[blocoId];
    toast(entrou ? "Priorizado" : "Removido da fila",
      entrou ? `${b.nome} é o próximo do Trilho B` : `${b.nome} volta à ordem por ranking`,
      entrou ? T.primary : T.ink50, entrou ? ArrowUp : Minus);
  };

  /* Troca o bloco do dia: joga o escolhido para o topo e refaz a agenda de hoje. */
  const trocarBlocoDoDia = (blocoId) => {
    aplicar((e) => {
      const prio = [blocoId, ...(e.prioridades || []).filter((x) => x !== blocoId)];
      const semB = (e.agenda?.[hoje] || []).filter((it) => !(it.trilho === "B" && it.tipo === "bloco"));
      const b = BLOCO_BY_ID[blocoId];
      const jaViu = estadoDoBloco(e, b.id) === EST.AULA_VISTA;
      const novo = {
        id: `trilhoB-${b.id}`, trilho: "B", tipo: "bloco", blocoId: b.id, meta: b.id,
        titulo: `${jaViu ? "Fechar" : "Estudar"} · ${b.sig} ${b.n} ${b.nome}`,
        sub: `${REINOS[b.sig].nome} · ranking ${b.rank}º${jaViu ? " · aula já vista no cursinho" : ""}`,
        xp: XP.bloco, status: "pendente", ordem: 50, vezesAdiado: 0, revisaoAtiva: true,
        origem: "macroplano", classificacao: "normal",
      };
      return { ...e, prioridades: prio, agenda: { ...(e.agenda || {}), [hoje]: [...semB, novo] } };
    });
    const b = BLOCO_BY_ID[blocoId];
    toast("Bloco do dia trocado", `${b.sig} ${b.n} · ${b.nome}`, T.primary, ArrowRightLeft);
  };

  /* Contador do Trilho A — sem fricção: incremento rápido. */
  const contarQuestoes = (delta, campo = "feitas") => aplicar((e) => {
    const d = e.questoesDia?.[hoje] || { feitas: 0, corrigidas: 0 };
    const novo = { ...d, [campo]: Math.max(0, (d[campo] || 0) + delta) };
    if (campo === "feitas" && novo.corrigidas > novo.feitas) novo.corrigidas = novo.feitas;
    return { ...e, questoesDia: { ...(e.questoesDia || {}), [hoje]: novo } };
  });

  const definirQuestoes = (valor, campo = "feitas") => aplicar((e) => {
    const d = e.questoesDia?.[hoje] || { feitas: 0, corrigidas: 0 };
    const novo = { ...d, [campo]: Math.max(0, +valor || 0) };
    if (novo.corrigidas > novo.feitas) novo.corrigidas = novo.feitas;
    return { ...e, questoesDia: { ...(e.questoesDia || {}), [hoje]: novo } };
  });

  const subirVolume = () => {
    aplicar((e) => ({ ...e, nivelQuestoes: Math.min(VOLUMES.length - 1, (+e.nivelQuestoes || 0) + 1) }));
    toast("Volume aumentado", `Meta agora: ${VOLUMES[Math.min(VOLUMES.length - 1, (+estado.nivelQuestoes || 0) + 1)]} questões/dia`, T.jade, ArrowUp);
    som.tocarSino();
  };

  const definirTeto = (n) => aplicar((e) => ({ ...e, tetoRevisoes: Math.max(1, Math.min(20, +n || 4)) }));

  /* Simulado do cursinho: fica aguardando a resolução comentada, sem contar atraso. */
  const marcarCorrigido = (id) => aplicar((e) => ({
    ...e, simulados: (e.simulados || []).map((x) => (x.id === id ? { ...x, aguardando: false, corrigidoEm: hoje } : x)),
  }));

  /* Importação de prova: certas vão para o bloco (estatística), erradas vão
     para o bloco E para o caderno (estatística + diagnóstico). */
  const importarProva = ({ prova, data, itens, minutosPorArea, rotulos }) => {
    const porBloco = {};
    const semBloco = { certas: 0, erradas: 0 };
    itens.forEach((q) => {
      if (q.marcado !== "certa" && q.marcado !== "errada") return;
      if (!q.blocoId) { semBloco[q.marcado === "certa" ? "certas" : "erradas"]++; return; }
      porBloco[q.blocoId] ||= { questoes: 0, acertos: 0 };
      porBloco[q.blocoId].questoes++;
      if (q.marcado === "certa") porBloco[q.blocoId].acertos++;
    });

    const sessoesNovas = Object.entries(porBloco).map(([blocoId, v], i) => ({
      id: `imp${Date.now()}-${i}`, data, blocoId, questoes: v.questoes, acertos: v.acertos,
      minutos: 0, origem: "prova", prova,
    }));

    /* Tempo por área entra como sessão própria, sem bloco — alimenta o gráfico. */
    const sessoesTempo = Object.entries(minutosPorArea || {})
      .filter(([, min]) => +min > 0)
      .map(([area, min], i) => {
        const doArea = itens.filter((q) => q.marcado && areaPorNumero(q.n) === area);
        return {
          id: `imp${Date.now()}-t${i}`, data, blocoId: null, area, minutos: +min,
          questoes: doArea.length, acertos: doArea.filter((q) => q.marcado === "certa").length,
          origem: "prova", prova, tipo: "simulado",
        };
      });

    aplicar((e) => {
      const progresso = { ...(e.progresso || {}) };
      Object.keys(porBloco).forEach((id) => {
        progresso[id] = avancarEstado(progresso[id], EST.PRATICADO, { praticaEm: data });
      });
      const novosRotulos = [...new Set([...(e.rotulosLivres || []), ...(rotulos || [])])].filter(Boolean);
      const qTotal = itens.filter((q) => q.marcado).length;
      return {
        ...e,
        sessoes: [...(e.sessoes || []), ...sessoesNovas, ...sessoesTempo],
        progresso, rotulosLivres: novosRotulos,
        xp: e.xp + Math.round((qTotal / 10) * XP.questoes10),
      };
    });

    const nErr = itens.filter((q) => q.marcado === "errada").length;
    toast("Prova importada", `${itens.filter((q) => q.marcado).length} questões · ${nErr} erro${nErr === 1 ? "" : "s"} para o caderno`, T.jade, ClipboardList);
    som.tocarSino();
  };

  const vincularBloco = (itemId, data, blocoId) => aplicar((e) => {
    const b = BLOCO_BY_ID[blocoId];
    if (!b) return e;
    return { ...e, agenda: { ...(e.agenda || {}), [data]: (e.agenda?.[data] || []).map((x) => x.id === itemId
      ? { ...x, blocoId: b.id, meta: b.id, classificacao: semanaDe(data).blocos.includes(b.id) ? "normal" : "antecipado",
          sub: `${REINOS[b.sig].nome} · ${b.sig} ${b.n} · ranking ${b.rank}º` }
      : x) } };
  });

  const toggleItem = (item) => {
    let aviso = null;
    aplicar((e) => {
      const m = { ...(e.missoes || {}) };
      const dia = { itens: {}, blocosConcluidos: [], ...(m[hoje] || {}) };
      const estavaFeito = !!dia.itens[item.id];
      dia.itens = { ...dia.itens, [item.id]: !estavaFeito };

      let xp = e.xp + (estavaFeito ? -item.xp : item.xp);
      let revisoes = e.revisoes || [];
      const blocos = new Set(dia.blocosConcluidos || []);

      if (item.tipo === "bloco" && item.meta) {
        if (!estavaFeito) { blocos.add(item.meta); revisoes = agendarCiclo(revisoes, item.meta, hoje); }
        else blocos.delete(item.meta);
      }
      dia.blocosConcluidos = [...blocos];

      const total = missao.itens.length;
      const feitos = missao.itens.filter((i) => dia.itens[i.id]).length;
      const eraCompleta = dia.completa;
      dia.completa = feitos === total && total > 0;

      if (dia.completa && !eraCompleta) {
        xp += XP.diaPerfeito + Math.min(100, tot.streak * 10);
        aviso = ["Missão do dia fechada", `+${XP.diaPerfeito} XP de bônus e a sequência segue viva`, T.jade, CheckCircle2];
      } else if (!estavaFeito) {
        aviso = [`+${item.xp} XP`, item.titulo, TIPOS_MISSAO[item.tipo].cor, Zap];
      }
      if (eraCompleta && !dia.completa) xp -= XP.diaPerfeito;

      m[hoje] = dia;
      return { ...e, missoes: m, xp: Math.max(0, xp), revisoes };
    });
    if (aviso) {
      toast(...aviso);
      som.tocarDing();
    }
  };

  const acoes = {
    addSessao: (s) => {
      aplicar((e) => {
        const progresso = { ...(e.progresso || {}) };
        if (s.blocoId && s.questoes > 0) {
          progresso[s.blocoId] = avancarEstado(progresso[s.blocoId], EST.PRATICADO, { praticaEm: s.data });
        }
        return { ...e, sessoes: [...(e.sessoes || []), s], progresso, xp: e.xp + Math.round((s.questoes / 10) * XP.questoes10) };
      });
      toast("Sessão registrada", `${s.questoes} questões · ${s.minutos} min`, T.jade, Check);
    },
    addSimulado: (s) => { aplicar((e) => ({ ...e, simulados: [...(e.simulados || []), s], xp: e.xp + XP.simulado })); toast("Simulado registrado", `Média estimada: ${mediaSimulado(s)}`, T.primary, ClipboardList); },
    delSimulado: (id) => aplicar((e) => ({ ...e, simulados: (e.simulados || []).filter((s) => s.id !== id) })),
    addErro: (x) => {
      let furou = false;
      aplicar((e) => {
        const progresso = { ...(e.progresso || {}) };
        const prog = progresso[x.blocoId];
        /* Autoavaliação furada: bloco declarado dominado que voltou a gerar erro. */
        if (prog && prog.estado === EST.DOMINADO && prog.origemDominio === "autoavaliado") {
          progresso[x.blocoId] = { ...prog, estado: EST.PRATICADO, furada: true, dominioEm: null };
          furou = true;
        }
        return { ...e, erros: [...(e.erros || []), x], progresso, xp: e.xp + XP.erro };
      });
      const b = BLOCO_BY_ID[x.blocoId];
      if (furou) toast("Autoavaliação furada", `${b ? b.nome : "Bloco"} voltou para Praticado e subiu na fila`, T.rose, AlertTriangle);
      else toast("Erro catalogado", "Padrão registrado para a próxima revisão", T.rose, AlertTriangle);
    },
    delErro: (id) => aplicar((e) => ({ ...e, erros: (e.erros || []).filter((x) => x.id !== id) })),
    addRedacao: (r) => { aplicar((e) => ({ ...e, redacoes: [...(e.redacoes || []), r], xp: e.xp + XP.redacao })); toast("Redação registrada", `Nota ${r.nota}`, T.gold, PenTool); },
    concluirRevisao: (id) => { aplicar((e) => ({ ...e, revisoes: (e.revisoes || []).map((r) => (r.id === id ? { ...r, feita: true, feitaEm: hoje } : r)), xp: e.xp + XP.revisao })); toast(`+${XP.revisao} XP`, "Revisão concluída", T.ice, RefreshCw); },
    agendarRevisao: (blocoId) => aplicar((e) => ({ ...e, revisoes: agendarCiclo(e.revisoes, blocoId, hoje) })),
    toggleDescanso: (d) => aplicar((e) => { const ds = e.descanso || []; return { ...e, descanso: ds.includes(d) ? ds.filter((x) => x !== d) : [...ds, d] }; }),
    addFoco: (min) => { aplicar((e) => ({ ...e, focoMin: (e.focoMin || 0) + min, xp: e.xp + XP.foco25 * 2 })); toast("Bloco de foco concluído", "50 minutos somados às horas efetivas", T.gold, Timer); },
  };

  const agendaHoje = useMemo(() => agendaDoDia(estado, hoje), [estado, hoje]);

  const ctx = { estado, hoje, tot, nivel, agg, insights, missao, toggleItem, aplicar, toast, som,
    agendaHoje, toggleAgenda, adiarItem, removerItem, registrarAula, vincularBloco, alternarRevisao, marcarBloco,
    priorizarBloco, trocarBlocoDoDia, contarQuestoes, definirQuestoes, subirVolume, definirTeto, marcarCorrigido, importarProva,
    ir: setTela, abrir: setModal, sair: () => setFoco(false), ...acoes };

  /* ------------------------------ renderização --------------------------- */
  if (!carregado) {
    return (
      <div className="enem-root min-h-screen flex items-center justify-center">
        <GlobalCSS />
        <div className="text-center">
          <div className="shimmer" style={{ width: 44, height: 44, borderRadius: 14, background: T.primarySoft, margin: "0 auto 14px" }} />
          <div style={{ fontSize: 13, color: T.ink50 }}>Buscando seu progresso na nuvem…</div>
        </div>
      </div>
    );
  }

  if (!sessao || status === "config") {
    return <TelaLogin onLogin={login} status={status} erroMsg={erroMsg} backendsAtivos={backendsAtivos} />;
  }

  /* Só pede o nome se a leitura FOI BEM-SUCEDIDA e o nome realmente não existe.
     Antes, qualquer erro de leitura caía aqui e parecia primeiro acesso. */
  const precisaNome = !estado.nome && status !== "erro" && status !== "carregando";

  const TELAS = {
    home: TelaHome, reinos: TelaReinos, desempenho: TelaDesempenho, evolucao: TelaEvolucao,
    simulados: TelaSimulados, revisoes: TelaRevisoes, erros: TelaErros, calendario: TelaCalendario,
    estatisticas: TelaEstatisticas, conquistas: TelaConquistas, cobertura: TelaCobertura, jogo: TelaJogo, importar: TelaImportar,
    padroes: TelaPadroes,
  };
  const Atual = TELAS[tela] || TelaHome;
  const revAtrasadas = (estado.revisoes || []).filter((r) => !r.feita && r.venc < hoje).length;

  return (
    <div className="enem-root min-h-screen">
      <GlobalCSS />
      {foco && <TelaFoco ctx={ctx} />}

      {status === "erro" && (
        <div className="flex items-center justify-center gap-2 px-4 py-2" style={{ background: T.roseSoft, borderBottom: `1px solid #F2C9D2`, position: "sticky", top: 0, zIndex: 40 }}>
          <AlertTriangle size={13} color={T.rose} strokeWidth={2.5} />
          <span style={{ fontSize: 12, color: "#96253C" }}>Alterações não salvas na nuvem: {erroMsg}</span>
          <button onClick={forcarEnvio} className="mono" style={{ background: T.rose, color: "#fff", border: "none", borderRadius: 8, padding: "3px 9px", fontSize: 10.5, fontWeight: 700 }}>TENTAR AGORA</button>
        </div>
      )}

      <div className="flex">
        <aside className="hidden lg:flex flex-col" style={{
          width: 224, borderRight: `1px solid ${T.line}`, background: T.surface,
          height: "100vh", position: "sticky", top: 0, padding: "20px 12px",
        }}>
          <div className="px-3 mb-5">
            <div className="flex items-center gap-2.5">
              <div style={{ background: T.ink, borderRadius: 11, padding: 8 }}><Compass size={16} color="#fff" strokeWidth={2.4} /></div>
              <div>
                <div className="display" style={{ fontSize: 15, fontWeight: 700, lineHeight: 1 }}>Reinos</div>
                <div className="mono" style={{ fontSize: 9.5, color: T.ink30, letterSpacing: ".1em", marginTop: 2 }}>ENEM 2026 · v{VERSAO_APP}</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <ChipSync status={status} ultimoSync={ultimoSync} onClick={() => setModal("dados")} />
              <BotaoSom ativo={estado.somAtivo} onToggle={() => aplicar((e) => ({ ...e, somAtivo: !e.somAtivo }))} />
            </div>
          </div>

          <nav className="flex-1 space-y-0.5">
            {NAV.map((n) => {
              const ativo = tela === n.k;
              return (
                <button key={n.k} onClick={() => setTela(n.k)} className="tab-ind w-full flex items-center gap-2.5" style={{
                  padding: "9px 12px", borderRadius: 11, border: "none", textAlign: "left",
                  background: ativo ? T.primarySoft : "transparent", color: ativo ? T.primaryDeep : T.ink50,
                  fontSize: 13, fontWeight: ativo ? 650 : 500,
                }}>
                  <n.I size={15} strokeWidth={2.2} />
                  <span className="flex-1">{n.l}</span>
                  {n.k === "revisoes" && revAtrasadas > 0 && <Pill cor={T.rose}>{revAtrasadas}</Pill>}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 p-3.5" style={{ background: T.paper, borderRadius: 14 }}>
            <div className="flex items-center gap-2 mb-2.5">
              <Flame size={13} color={T.gold} className="anim-flame" />
              <span className="mono" style={{ fontSize: 11, fontWeight: 700 }}>{tot.streak} {tot.streak === 1 ? "DIA" : "DIAS"}</span>
            </div>
            <Barra pct={nivel.pct} cor={T.gold} h={5} />
            <div className="mono" style={{ fontSize: 10, color: T.ink50, marginTop: 6 }}>Nível {nivel.nivel} · {estado.xp.toLocaleString("pt-BR")} XP</div>
          </div>

          <Btn size="sm" variant="dark" icon={Timer} onClick={() => setFoco(true)} full style={{ marginTop: 10 }}>Modo foco</Btn>
        </aside>

        <main className="flex-1 min-w-0" style={{ paddingBottom: 84 }}>
          <div className="lg:hidden flex items-center justify-between px-4 py-3" style={{ background: T.surface, borderBottom: `1px solid ${T.line}`, position: "sticky", top: 0, zIndex: 20 }}>
            <div className="flex items-center gap-2">
              <div style={{ background: T.ink, borderRadius: 9, padding: 6 }}><Compass size={14} color="#fff" strokeWidth={2.4} /></div>
              <span className="display" style={{ fontSize: 14, fontWeight: 700 }}>Reinos</span>
            </div>
            <div className="flex items-center gap-2">
              <ChipSync status={status} ultimoSync={ultimoSync} onClick={() => setModal("dados")} compacto />
              <BotaoSom ativo={estado.somAtivo} onToggle={() => aplicar((e) => ({ ...e, somAtivo: !e.somAtivo }))} compacto />
              <Pill cor={T.gold}><Flame size={10} className="anim-flame" />{tot.streak}</Pill>
              <button onClick={() => setFoco(true)} aria-label="Entrar no modo foco" style={{
                background: T.ink, border: "none", borderRadius: 10, width: 38, height: 38, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center", WebkitTapHighlightColor: "transparent",
              }}><Timer size={16} color="#fff" strokeWidth={2.3} /></button>
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8" style={{ maxWidth: 1280, margin: "0 auto" }}>
            <Atual ctx={ctx} />
            <footer className="mt-10 pt-6 flex flex-wrap items-center justify-between gap-3" style={{ borderTop: `1px solid ${T.line}` }}>
              <div style={{ fontSize: 11.5, color: T.ink30, lineHeight: 1.6, maxWidth: 520 }}>
                Conteúdos, ranking de incidência e cronograma vêm da base do Projeto. Projeções de nota são estimativas de acerto bruto, não TRI real.
              </div>
              <div className="flex gap-2">
                <Btn size="sm" variant="ghost" icon={Shield} onClick={() => setModal("dados")}>Dados</Btn>
                <Btn size="sm" variant="ghost" icon={PenTool} onClick={() => setModal("redacao")}>Redação</Btn>
                <Btn size="sm" variant="ghost" icon={Plus} onClick={() => setModal("sessao")}>Sessão</Btn>
              </div>
            </footer>
          </div>
        </main>
      </div>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 flex" style={{ background: T.surface, borderTop: `1px solid ${T.line}`, paddingBottom: "env(safe-area-inset-bottom)" }}>
        {NAV.slice(0, 5).map((n) => {
          const ativo = tela === n.k;
          return (
            <button key={n.k} onClick={() => setTela(n.k)} className="flex-1 flex flex-col items-center gap-1 py-2.5" style={{ background: "none", border: "none", color: ativo ? T.primary : T.ink30, position: "relative" }}>
              {ativo && <div style={{ position: "absolute", top: 0, width: 26, height: 2.5, borderRadius: 99, background: T.primary }} />}
              <n.I size={17} strokeWidth={ativo ? 2.5 : 2} />
              <span style={{ fontSize: 9.5, fontWeight: ativo ? 650 : 500 }}>{n.c || n.l}</span>
            </button>
          );
        })}
        <button onClick={() => setTela(tela === "menu" ? "home" : "menu")} className="flex-1 flex flex-col items-center gap-1 py-2.5" style={{ background: "none", border: "none", color: T.ink30 }}>
          <Layers size={17} strokeWidth={2} /><span style={{ fontSize: 9.5 }}>Mais</span>
        </button>
      </nav>

      {tela === "menu" && (
        <div className="lg:hidden fixed inset-0 z-40 flex items-end" style={{ background: "rgba(20,26,46,.42)" }} onClick={() => setTela("home")}>
          <div className="card w-full anim-pop p-4" style={{ borderRadius: "22px 22px 0 0", marginBottom: 62 }} onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-3 gap-2">
              {NAV.slice(5).map((n) => (
                <button key={n.k} onClick={() => setTela(n.k)} className="flex flex-col items-center gap-2 p-4" style={{ background: T.paper, borderRadius: 14, border: "none" }}>
                  <n.I size={18} color={T.primary} strokeWidth={2.2} />
                  <span style={{ fontSize: 11.5, fontWeight: 600 }}>{n.l}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <ModalSessao open={modal === "sessao"} onClose={() => setModal(null)} onSave={acoes.addSessao} hoje={hoje} />
      <ModalRedacao open={modal === "redacao"} onClose={() => setModal(null)} onSave={acoes.addRedacao} hoje={hoje} />
      <Modal open={modal === "erro"} onClose={() => setModal(null)} title="Registrar erro" sub="Abrindo o caderno de erros…">
        <Btn full onClick={() => { setModal(null); setTela("erros"); }}>Ir para o caderno de erros</Btn>
      </Modal>

      <ModalDados open={modal === "dados"} onClose={() => setModal(null)} estado={estado} versao={versao}
        status={status} ultimoSync={ultimoSync} sessao={sessao} comToken={comToken}
        backendsAtivos={backendsAtivos}
        onSalvarNota={(v) => aplicar((e) => ({ ...e, notaInicial: v }))}
        onImportar={(novo) => aplicar(() => validarEstado(novo) || ESTADO_INICIAL)}
        onLogout={logout} onForcar={forcarEnvio} />

      <Modal open={precisaNome} onClose={() => aplicar((e) => ({ ...e, nome: nomeTmp.trim() || "candidato" }))}
        title="Antes de começar" sub={`Faltam ${diffDays(hoje, ENEM_D1)} dias para a prova do dia 1.`}>
        <div className="space-y-4">
          <p style={{ fontSize: 13, color: T.ink70, lineHeight: 1.65 }}>
            Esta plataforma roda em cima do que já existe no seu Projeto: os 169 blocos da base oficial de conteúdos,
            o ranking de incidência de cada tópico, o macroplano de julho a novembro, o ciclo D+1 / D+7 / D+30
            e as metas de 42 em Matemática, 41 em Natureza, 40 em Humanas e 40 em Linguagens.
          </p>
          <Field label="Como quer ser chamado">
            <input placeholder="Seu nome" value={nomeTmp} onChange={(e) => setNomeTmp(e.target.value)} style={inputCss} autoFocus />
          </Field>
          <Btn full size="lg" onClick={() => aplicar((e) => ({ ...e, nome: nomeTmp.trim() || "candidato" }))}>Começar a jornada</Btn>
        </div>
      </Modal>

      <ModalMigracao pacote={migracao} onEscolher={aplicarMigracao} />
      <BannerConflito conflito={conflito} onResolver={resolverConflito} />
      <Celebracao conquista={celebra} onClose={() => setCelebra(null)} />
      <Toasts lista={toasts} remover={(id) => setToasts((t) => t.filter((x) => x.id !== id))} />
    </div>
  );
}
