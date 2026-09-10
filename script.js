// ======================================================
// BIOESTATÍSTICA - SALA UNIFICADA
// Prof. Me Miderson Andrei Santana
// ======================================================

const SENHA_CORRETA = "UNIFICADA2026";
const TOTAL_QUESTOES = 12;


// ======================================================
// BANCO DE QUESTÕES
// ======================================================

const bancoQuestoes = [

    // ==================================================
    // TABELAS
    // ==================================================

    {
        categoria: "Tabela",
        contexto: "Um laboratório classificou 60 amostras de acordo com o resultado obtido.",
        pergunta: "Qual resultado apresentou a maior frequência?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Resultado", "Frequência"],
            linhas: [
                ["Normal", 30],
                ["Alterado", 18],
                ["Inconclusivo", 12]
            ]
        },

        alternativas: [
            "Normal",
            "Alterado",
            "Inconclusivo",
            "Todos apresentaram a mesma frequência",
            "Não é possível determinar"
        ],

        correta: "Normal"
    },


    {
        categoria: "Tabela",
        contexto: "Observe a distribuição dos pacientes segundo o tipo sanguíneo.",
        pergunta: "Quantos pacientes foram avaliados no total?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Tipo sanguíneo", "Pacientes"],
            linhas: [
                ["A", 24],
                ["B", 12],
                ["AB", 6],
                ["O", 18]
            ]
        },

        alternativas: [
            "50",
            "54",
            "60",
            "64",
            "70"
        ],

        correta: "60"
    },


    {
        categoria: "Tabela",
        contexto: "Pacientes foram classificados de acordo com a intensidade dos sintomas.",
        pergunta: "Qual categoria corresponde à moda da distribuição?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Sintomas", "Pacientes"],
            linhas: [
                ["Leves", 28],
                ["Moderados", 17],
                ["Intensos", 10],
                ["Ausentes", 5]
            ]
        },

        alternativas: [
            "Leves",
            "Moderados",
            "Intensos",
            "Ausentes",
            "Não existe moda"
        ],

        correta: "Leves"
    },


    {
        categoria: "Tabela",
        contexto: "Um hospital registrou os atendimentos realizados em três períodos.",
        pergunta: "Qual a diferença entre o período com maior e menor número de atendimentos?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Período", "Atendimentos"],
            linhas: [
                ["Manhã", 35],
                ["Tarde", 50],
                ["Noite", 20]
            ]
        },

        alternativas: [
            "15",
            "20",
            "25",
            "30",
            "35"
        ],

        correta: "30"
    },


    {
        categoria: "Tabela",
        contexto: "Uma pesquisa avaliou a classificação nutricional de 80 participantes.",
        pergunta: "Quantos participantes não estavam na categoria 'Adequado'?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Classificação", "Participantes"],
            linhas: [
                ["Baixo peso", 8],
                ["Adequado", 40],
                ["Sobrepeso", 22],
                ["Obesidade", 10]
            ]
        },

        alternativas: [
            "30",
            "32",
            "35",
            "40",
            "48"
        ],

        correta: "40"
    },


    {
        categoria: "Tabela",
        contexto: "Foram analisados os desfechos de 70 pacientes.",
        pergunta: "Qual conclusão é sustentada pelos dados?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Desfecho", "Pacientes"],
            linhas: [
                ["Alta", 40],
                ["Internação", 20],
                ["Transferência", 10]
            ]
        },

        alternativas: [
            "Alta foi o desfecho mais frequente",
            "Internação foi o desfecho mais frequente",
            "Transferência ocorreu em metade dos pacientes",
            "Os três desfechos tiveram a mesma frequência",
            "Não é possível comparar os grupos"
        ],

        correta: "Alta foi o desfecho mais frequente"
    },


    {
        categoria: "Tabela",
        contexto: "Uma unidade de saúde registrou a quantidade de exames realizados.",
        pergunta: "Qual foi o total de exames realizados?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Exame", "Quantidade"],
            linhas: [
                ["Hemograma", 25],
                ["Glicemia", 30],
                ["Colesterol", 15],
                ["Urina", 10]
            ]
        },

        alternativas: [
            "60",
            "70",
            "75",
            "80",
            "90"
        ],

        correta: "80"
    },


    {
        categoria: "Tabela",
        contexto: "Uma pesquisa registrou o número de sintomas apresentados por pacientes.",
        pergunta: "Qual número de sintomas foi mais frequente?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Número de sintomas", "Frequência"],
            linhas: [
                ["0", 4],
                ["1", 10],
                ["2", 18],
                ["3", 12],
                ["4", 6]
            ]
        },

        alternativas: [
            "0",
            "1",
            "2",
            "3",
            "4"
        ],

        correta: "2"
    },


    {
        categoria: "Tabela",
        contexto: "Os participantes foram distribuídos em faixas etárias.",
        pergunta: "Qual faixa etária possui maior frequência?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Faixa etária", "Participantes"],
            linhas: [
                ["18–29", 18],
                ["30–39", 26],
                ["40–49", 32],
                ["50–59", 14]
            ]
        },

        alternativas: [
            "18–29",
            "30–39",
            "40–49",
            "50–59",
            "Todas são iguais"
        ],

        correta: "40–49"
    },


    {
        categoria: "Tabela",
        contexto: "Um laboratório comparou quatro setores.",
        pergunta: "Qual setor realizou exatamente 20 exames?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Setor", "Exames"],
            linhas: [
                ["A", 15],
                ["B", 20],
                ["C", 30],
                ["D", 25]
            ]
        },

        alternativas: [
            "Setor A",
            "Setor B",
            "Setor C",
            "Setor D",
            "Nenhum setor"
        ],

        correta: "Setor B"
    },


    // ==================================================
    // GRÁFICOS DE BARRAS
    // ==================================================

    {
        categoria: "Gráfico de Barras",
        contexto: "O gráfico apresenta o número de exames realizados por setor.",
        pergunta: "Qual setor realizou mais exames?",
        tipo: "barra",

        dados: {
            titulo: "Exames realizados",
            linhas: [
                ["Hematologia", 28],
                ["Bioquímica", 40],
                ["Microbiologia", 22],
                ["Imunologia", 18]
            ]
        },

        alternativas: [
            "Hematologia",
            "Bioquímica",
            "Microbiologia",
            "Imunologia",
            "Todos realizaram a mesma quantidade"
        ],

        correta: "Bioquímica"
    },


    {
        categoria: "Gráfico de Barras",
        contexto: "Observe a quantidade de pacientes atendidos em quatro clínicas.",
        pergunta: "Qual clínica apresentou o menor número de pacientes?",
        tipo: "barra",

        dados: {
            titulo: "Pacientes atendidos",
            linhas: [
                ["Clínica A", 30],
                ["Clínica B", 20],
                ["Clínica C", 35],
                ["Clínica D", 15]
            ]
        },

        alternativas: [
            "Clínica A",
            "Clínica B",
            "Clínica C",
            "Clínica D",
            "Todas"
        ],

        correta: "Clínica D"
    },


    {
        categoria: "Gráfico de Barras",
        contexto: "Um estudo comparou a resposta ao tratamento.",
        pergunta: "Qual categoria foi mais frequente?",
        tipo: "barra",

        dados: {
            titulo: "Resposta ao tratamento",
            linhas: [
                ["Excelente", 25],
                ["Boa", 40],
                ["Regular", 20],
                ["Ruim", 10]
            ]
        },

        alternativas: [
            "Excelente",
            "Boa",
            "Regular",
            "Ruim",
            "Todas"
        ],

        correta: "Boa"
    },


    {
        categoria: "Gráfico de Barras",
        contexto: "O gráfico mostra casos registrados em quatro regiões.",
        pergunta: "Qual a diferença entre a região com maior e menor número de casos?",
        tipo: "barra",

        dados: {
            titulo: "Casos por região",
            linhas: [
                ["Norte", 20],
                ["Sul", 35],
                ["Leste", 25],
                ["Oeste", 15]
            ]
        },

        alternativas: [
            "10",
            "15",
            "20",
            "25",
            "30"
        ],

        correta: "20"
    },


    {
        categoria: "Gráfico de Barras",
        contexto: "Foram registrados procedimentos em quatro setores.",
        pergunta: "Quais setores possuem, respectivamente, a maior e a menor frequência?",
        tipo: "barra",

        dados: {
            titulo: "Procedimentos",
            linhas: [
                ["A", 18],
                ["B", 30],
                ["C", 12],
                ["D", 24]
            ]
        },

        alternativas: [
            "A e B",
            "B e C",
            "C e D",
            "D e A",
            "B e D"
        ],

        correta: "B e C"
    },


    {
        categoria: "Gráfico de Barras",
        contexto: "Uma campanha registrou participantes por faixa de horário.",
        pergunta: "Qual horário teve 30 participantes?",
        tipo: "barra",

        dados: {
            titulo: "Participantes",
            linhas: [
                ["8h", 15],
                ["10h", 30],
                ["14h", 25],
                ["16h", 20]
            ]
        },

        alternativas: [
            "8h",
            "10h",
            "14h",
            "16h",
            "Nenhum"
        ],

        correta: "10h"
    },


    {
        categoria: "Gráfico de Barras",
        contexto: "O gráfico compara quatro grupos de pacientes.",
        pergunta: "Qual grupo possui exatamente o dobro do número de pacientes do Grupo A?",
        tipo: "barra",

        dados: {
            titulo: "Pacientes por grupo",
            linhas: [
                ["Grupo A", 10],
                ["Grupo B", 15],
                ["Grupo C", 20],
                ["Grupo D", 25]
            ]
        },

        alternativas: [
            "Grupo A",
            "Grupo B",
            "Grupo C",
            "Grupo D",
            "Nenhum"
        ],

        correta: "Grupo C"
    },


    {
        categoria: "Gráfico de Barras",
        contexto: "Uma unidade registrou atendimentos por dia.",
        pergunta: "Em qual dia ocorreu o maior número de atendimentos?",
        tipo: "barra",

        dados: {
            titulo: "Atendimentos",
            linhas: [
                ["Segunda", 20],
                ["Terça", 25],
                ["Quarta", 35],
                ["Quinta", 30]
            ]
        },

        alternativas: [
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Todos"
        ],

        correta: "Quarta"
    },


    {
        categoria: "Gráfico de Barras",
        contexto: "O gráfico apresenta o número de amostras processadas.",
        pergunta: "Quantas amostras foram processadas nos setores A e B juntos?",
        tipo: "barra",

        dados: {
            titulo: "Amostras processadas",
            linhas: [
                ["A", 20],
                ["B", 30],
                ["C", 15],
                ["D", 25]
            ]
        },

        alternativas: [
            "35",
            "40",
            "45",
            "50",
            "55"
        ],

        correta: "50"
    },


    {
        categoria: "Gráfico de Barras",
        contexto: "O gráfico compara resultados de quatro categorias.",
        pergunta: "Qual afirmação é correta?",
        tipo: "barra",

        dados: {
            titulo: "Resultados",
            linhas: [
                ["A", 10],
                ["B", 20],
                ["C", 30],
                ["D", 40]
            ]
        },

        alternativas: [
            "A possui o maior valor",
            "D possui o maior valor",
            "B e C possuem valores iguais",
            "C possui o menor valor",
            "Todos possuem valores iguais"
        ],

        correta: "D possui o maior valor"
    },


    // ==================================================
    // GRÁFICOS DE LINHAS
    // ==================================================

    {
        categoria: "Gráfico de Linhas",
        contexto: "A glicemia de um paciente foi acompanhada durante cinco dias.",
        pergunta: "Qual tendência geral pode ser observada?",
        tipo: "linha",

        dados: {
            titulo: "Glicemia",
            linhas: [
                ["Dia 1", 110],
                ["Dia 2", 105],
                ["Dia 3", 100],
                ["Dia 4", 95],
                ["Dia 5", 90]
            ]
        },

        alternativas: [
            "Aumento",
            "Redução",
            "Estabilidade",
            "Aumento seguido de estabilidade",
            "Não é possível comparar"
        ],

        correta: "Redução"
    },


    {
        categoria: "Gráfico de Linhas",
        contexto: "O número de casos foi registrado durante cinco semanas.",
        pergunta: "Em qual semana ocorreu o maior número de casos?",
        tipo: "linha",

        dados: {
            titulo: "Casos por semana",
            linhas: [
                ["Semana 1", 10],
                ["Semana 2", 20],
                ["Semana 3", 35],
                ["Semana 4", 30],
                ["Semana 5", 25]
            ]
        },

        alternativas: [
            "Semana 1",
            "Semana 2",
            "Semana 3",
            "Semana 4",
            "Semana 5"
        ],

        correta: "Semana 3"
    },


    {
        categoria: "Gráfico de Linhas",
        contexto: "A temperatura corporal foi acompanhada ao longo do dia.",
        pergunta: "Em qual intervalo a temperatura permaneceu estável?",
        tipo: "linha",

        dados: {
            titulo: "Temperatura",
            linhas: [
                ["8h", 38],
                ["10h", 37],
                ["12h", 37],
                ["14h", 36],
                ["16h", 35]
            ]
        },

        alternativas: [
            "8h–10h",
            "10h–12h",
            "12h–14h",
            "14h–16h",
            "Não houve estabilidade"
        ],

        correta: "10h–12h"
    },


    {
        categoria: "Gráfico de Linhas",
        contexto: "Um marcador biológico foi medido em diferentes momentos.",
        pergunta: "Entre quais momentos ocorreu estabilidade?",
        tipo: "linha",

        dados: {
            titulo: "Marcador biológico",
            linhas: [
                ["T0", 20],
                ["T1", 30],
                ["T2", 40],
                ["T3", 40],
                ["T4", 50]
            ]
        },

        alternativas: [
            "T0 e T1",
            "T1 e T2",
            "T2 e T3",
            "T3 e T4",
            "Não houve estabilidade"
        ],

        correta: "T2 e T3"
    },


    {
        categoria: "Gráfico de Linhas",
        contexto: "Uma clínica registrou consultas ao longo de cinco meses.",
        pergunta: "Qual foi o comportamento geral da quantidade de consultas?",
        tipo: "linha",

        dados: {
            titulo: "Consultas",
            linhas: [
                ["Jan", 20],
                ["Fev", 25],
                ["Mar", 30],
                ["Abr", 35],
                ["Mai", 40]
            ]
        },

        alternativas: [
            "Crescente",
            "Decrescente",
            "Constante",
            "Sem padrão",
            "Crescente e depois decrescente"
        ],

        correta: "Crescente"
    },


    {
        categoria: "Gráfico de Linhas",
        contexto: "A frequência cardíaca foi medida após o exercício.",
        pergunta: "O que ocorreu entre o primeiro e o último minuto?",
        tipo: "linha",

        dados: {
            titulo: "Frequência cardíaca",
            linhas: [
                ["1 min", 100],
                ["2 min", 90],
                ["3 min", 80],
                ["4 min", 75],
                ["5 min", 70]
            ]
        },

        alternativas: [
            "Aumentou 30",
            "Reduziu 30",
            "Reduziu 20",
            "Permaneceu constante",
            "Aumentou 20"
        ],

        correta: "Reduziu 30"
    },


    {
        categoria: "Gráfico de Linhas",
        contexto: "O número de pacientes foi registrado ao longo de quatro dias.",
        pergunta: "Entre quais dias ocorreu o maior aumento?",
        tipo: "linha",

        dados: {
            titulo: "Pacientes",
            linhas: [
                ["Dia 1", 10],
                ["Dia 2", 15],
                ["Dia 3", 30],
                ["Dia 4", 35]
            ]
        },

        alternativas: [
            "Dia 1 e Dia 2",
            "Dia 2 e Dia 3",
            "Dia 3 e Dia 4",
            "Todos os aumentos foram iguais",
            "Não houve aumento"
        ],

        correta: "Dia 2 e Dia 3"
    },


    {
        categoria: "Gráfico de Linhas",
        contexto: "Uma substância foi medida em quatro momentos.",
        pergunta: "Qual foi a variação total entre o primeiro e o último momento?",
        tipo: "linha",

        dados: {
            titulo: "Concentração",
            linhas: [
                ["T1", 20],
                ["T2", 25],
                ["T3", 35],
                ["T4", 50]
            ]
        },

        alternativas: [
            "20",
            "25",
            "30",
            "35",
            "40"
        ],

        correta: "30"
    },


    {
        categoria: "Gráfico de Linhas",
        contexto: "Um gráfico mostra aumento de casos durante quatro semanas consecutivas.",
        pergunta: "Qual conclusão é mais adequada?",
        tipo: "linha",

        dados: {
            titulo: "Casos observados",
            linhas: [
                ["Semana 1", 10],
                ["Semana 2", 20],
                ["Semana 3", 30],
                ["Semana 4", 40]
            ]
        },

        alternativas: [
            "Os casos aumentaram no período observado",
            "Os casos continuarão aumentando obrigatoriamente",
            "O gráfico prova a causa do aumento",
            "Os casos diminuíram",
            "Não existe tendência"
        ],

        correta: "Os casos aumentaram no período observado"
    },


    {
        categoria: "Gráfico de Linhas",
        contexto: "Uma variável apresentou os valores 20, 20, 20 e 20.",
        pergunta: "Como o comportamento deve ser classificado?",
        tipo: "linha",

        dados: {
            titulo: "Evolução",
            linhas: [
                ["T1", 20],
                ["T2", 20],
                ["T3", 20],
                ["T4", 20]
            ]
        },

        alternativas: [
            "Crescente",
            "Decrescente",
            "Constante",
            "Irregular",
            "Exponencial"
        ],

        correta: "Constante"
    },


    // ==================================================
    // HISTOGRAMA
    // ==================================================

    {
        categoria: "Histograma",
        contexto: "As medidas de glicemia foram agrupadas em intervalos.",
        pergunta: "Qual intervalo apresenta maior frequência?",
        tipo: "barra",

        dados: {
            titulo: "Distribuição da glicemia",
            linhas: [
                ["70–79", 5],
                ["80–89", 12],
                ["90–99", 25],
                ["100–109", 10],
                ["110–119", 4]
            ]
        },

        alternativas: [
            "70–79",
            "80–89",
            "90–99",
            "100–109",
            "110–119"
        ],

        correta: "90–99"
    },


    {
        categoria: "Histograma",
        contexto: "As idades foram organizadas em intervalos.",
        pergunta: "Em qual faixa está concentrado o maior número de participantes?",
        tipo: "barra",

        dados: {
            titulo: "Distribuição das idades",
            linhas: [
                ["20–29", 8],
                ["30–39", 18],
                ["40–49", 30],
                ["50–59", 15],
                ["60–69", 5]
            ]
        },

        alternativas: [
            "20–29",
            "30–39",
            "40–49",
            "50–59",
            "60–69"
        ],

        correta: "40–49"
    },


    {
        categoria: "Histograma",
        contexto: "Os pesos foram agrupados em classes.",
        pergunta: "Qual intervalo possui a menor frequência?",
        tipo: "barra",

        dados: {
            titulo: "Distribuição do peso",
            linhas: [
                ["50–59", 4],
                ["60–69", 12],
                ["70–79", 22],
                ["80–89", 10],
                ["90–99", 2]
            ]
        },

        alternativas: [
            "50–59",
            "60–69",
            "70–79",
            "80–89",
            "90–99"
        ],

        correta: "90–99"
    },


    {
        categoria: "Histograma",
        contexto: "Um histograma representa valores de pressão arterial.",
        pergunta: "O que as barras representam nesse tipo de gráfico?",
        tipo: "barra",

        dados: {
            titulo: "Pressão arterial",
            linhas: [
                ["100–109", 5],
                ["110–119", 15],
                ["120–129", 25],
                ["130–139", 12]
            ]
        },

        alternativas: [
            "Intervalos de uma variável quantitativa",
            "Somente categorias qualitativas",
            "Apenas porcentagens",
            "Duas variáveis simultaneamente",
            "Causas e efeitos"
        ],

        correta: "Intervalos de uma variável quantitativa"
    },


    {
        categoria: "Histograma",
        contexto: "O tempo de atendimento foi agrupado em intervalos de minutos.",
        pergunta: "Qual faixa possui 18 atendimentos?",
        tipo: "barra",

        dados: {
            titulo: "Tempo de atendimento",
            linhas: [
                ["0–9", 3],
                ["10–19", 9],
                ["20–29", 18],
                ["30–39", 14],
                ["40–49", 6]
            ]
        },

        alternativas: [
            "0–9",
            "10–19",
            "20–29",
            "30–39",
            "40–49"
        ],

        correta: "20–29"
    },


    {
        categoria: "Histograma",
        contexto: "Observe a distribuição das alturas.",
        pergunta: "Qual intervalo apresenta maior concentração de observações?",
        tipo: "barra",

        dados: {
            titulo: "Altura em centímetros",
            linhas: [
                ["150–159", 5],
                ["160–169", 15],
                ["170–179", 28],
                ["180–189", 12]
            ]
        },

        alternativas: [
            "150–159",
            "160–169",
            "170–179",
            "180–189",
            "Todos"
        ],

        correta: "170–179"
    },


    {
        categoria: "Histograma",
        contexto: "Uma distribuição apresenta frequências por faixa de idade.",
        pergunta: "Quantas observações existem nas duas faixas centrais juntas?",
        tipo: "barra",

        dados: {
            titulo: "Idades",
            linhas: [
                ["20–29", 10],
                ["30–39", 20],
                ["40–49", 30],
                ["50–59", 15]
            ]
        },

        alternativas: [
            "30",
            "40",
            "45",
            "50",
            "60"
        ],

        correta: "50"
    },


    {
        categoria: "Histograma",
        contexto: "Um pesquisador deseja estudar a distribuição de 200 medidas de glicemia.",
        pergunta: "Qual representação é mais apropriada para observar em quais faixas os valores se concentram?",
        tipo: "texto",

        alternativas: [
            "Histograma",
            "Gráfico de setores",
            "Gráfico de dispersão",
            "Gráfico de linhas temporal",
            "Organograma"
        ],

        correta: "Histograma"
    },


    {
        categoria: "Histograma",
        contexto: "Um aluno compara um histograma com um gráfico de barras.",
        pergunta: "Qual afirmação é correta?",
        tipo: "texto",

        alternativas: [
            "O histograma representa intervalos de uma variável quantitativa",
            "Os dois gráficos são sempre idênticos",
            "O histograma só representa variáveis qualitativas",
            "O histograma não possui frequências",
            "O gráfico de barras só pode apresentar duas categorias"
        ],

        correta: "O histograma representa intervalos de uma variável quantitativa"
    },


    {
        categoria: "Histograma",
        contexto: "Em uma distribuição, a faixa 120–129 apresentou frequência 24.",
        pergunta: "Como esse valor deve ser interpretado?",
        tipo: "texto",

        alternativas: [
            "Existem 24 observações nesse intervalo",
            "O valor médio é obrigatoriamente 24",
            "Todos os indivíduos possuem valor 24",
            "Existem 129 observações",
            "O intervalo possui amplitude 24"
        ],

        correta: "Existem 24 observações nesse intervalo"
    },


    // ==================================================
    // GRÁFICO DE DISPERSÃO
    // ==================================================

    {
        categoria: "Gráfico de Dispersão",
        contexto: "Um estudo relacionou idade e pressão arterial.",
        pergunta: "À medida que a idade aumenta, qual comportamento aparece nos dados?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Idade", "Pressão"],
            linhas: [
                [20, 110],
                [30, 118],
                [40, 126],
                [50, 136],
                [60, 144]
            ]
        },

        alternativas: [
            "Tendência de aumento da pressão",
            "Tendência de redução da pressão",
            "Pressão constante",
            "Ausência total de padrão",
            "A idade diminui"
        ],

        correta: "Tendência de aumento da pressão"
    },


    {
        categoria: "Gráfico de Dispersão",
        contexto: "Foram observadas horas de sono e cansaço relatado.",
        pergunta: "Qual padrão aparece nos dados?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Horas de sono", "Cansaço"],
            linhas: [
                [4, 9],
                [5, 8],
                [6, 6],
                [7, 4],
                [8, 3]
            ]
        },

        alternativas: [
            "Quanto maior o sono, menor tende a ser o cansaço",
            "Quanto maior o sono, maior o cansaço",
            "O cansaço permanece constante",
            "Não existem duas variáveis",
            "Todos possuem o mesmo valor"
        ],

        correta: "Quanto maior o sono, menor tende a ser o cansaço"
    },


    {
        categoria: "Gráfico de Dispersão",
        contexto: "Um pesquisador observou associação entre duas variáveis.",
        pergunta: "O gráfico de dispersão, sozinho, permite afirmar causalidade?",
        tipo: "texto",

        alternativas: [
            "Não. Associação não prova causalidade",
            "Sim, sempre",
            "Sim, se existirem mais de cinco pontos",
            "Sim, quando as variáveis aumentam juntas",
            "Somente quando o gráfico possui cores"
        ],

        correta: "Não. Associação não prova causalidade"
    },


    {
        categoria: "Gráfico de Dispersão",
        contexto: "Um estudo relaciona dose e resposta.",
        pergunta: "Qual tendência é observada?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Dose", "Resposta"],
            linhas: [
                [1, 10],
                [2, 20],
                [3, 30],
                [4, 40],
                [5, 50]
            ]
        },

        alternativas: [
            "Aumento da resposta com o aumento da dose",
            "Redução da resposta",
            "Resposta constante",
            "Ausência de associação visual",
            "A dose não varia"
        ],

        correta: "Aumento da resposta com o aumento da dose"
    },


    {
        categoria: "Gráfico de Dispersão",
        contexto: "Foram registradas horas de atividade física e frequência cardíaca de repouso.",
        pergunta: "Qual tendência aparece nos dados?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Horas", "Frequência cardíaca"],
            linhas: [
                [1, 85],
                [2, 82],
                [3, 78],
                [4, 74],
                [5, 70]
            ]
        },

        alternativas: [
            "Tendência de redução",
            "Tendência de aumento",
            "Valores constantes",
            "Não existe variação",
            "A frequência dobra"
        ],

        correta: "Tendência de redução"
    },


    {
        categoria: "Gráfico de Dispersão",
        contexto: "O gráfico relaciona duas medidas quantitativas.",
        pergunta: "Qual é a principal finalidade de um gráfico de dispersão?",
        tipo: "texto",

        alternativas: [
            "Visualizar possível associação entre duas variáveis quantitativas",
            "Mostrar partes de um total",
            "Mostrar apenas uma categoria",
            "Substituir qualquer análise estatística",
            "Calcular automaticamente a média"
        ],

        correta: "Visualizar possível associação entre duas variáveis quantitativas"
    },


    {
        categoria: "Gráfico de Dispersão",
        contexto: "Um pesquisador estuda altura e peso.",
        pergunta: "Quais são as duas variáveis analisadas?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Altura (cm)", "Peso (kg)"],
            linhas: [
                [160, 55],
                [165, 60],
                [170, 68],
                [175, 75]
            ]
        },

        alternativas: [
            "Altura e peso",
            "Idade e altura",
            "Peso e glicemia",
            "Altura e pressão",
            "Somente peso"
        ],

        correta: "Altura e peso"
    },


    {
        categoria: "Gráfico de Dispersão",
        contexto: "Os pontos de um gráfico apresentam uma tendência crescente.",
        pergunta: "Qual interpretação é adequada?",
        tipo: "texto",

        alternativas: [
            "Valores maiores de uma variável tendem a estar associados a valores maiores da outra",
            "Uma variável obrigatoriamente causa a outra",
            "As duas variáveis são qualitativas",
            "Não existe associação visual",
            "Todos os valores são iguais"
        ],

        correta: "Valores maiores de uma variável tendem a estar associados a valores maiores da outra"
    },


    {
        categoria: "Gráfico de Dispersão",
        contexto: "Os pontos aparecem espalhados sem direção evidente.",
        pergunta: "Qual interpretação visual é mais adequada?",
        tipo: "texto",

        alternativas: [
            "Não há um padrão claro de associação",
            "Existe associação crescente perfeita",
            "Existe associação decrescente perfeita",
            "Uma variável causa a outra",
            "Os valores são todos iguais"
        ],

        correta: "Não há um padrão claro de associação"
    },


    {
        categoria: "Gráfico de Dispersão",
        contexto: "Um estudo relaciona tempo de estudo e nota.",
        pergunta: "Qual comportamento aparece?",
        tipo: "tabela",

        dados: {
            cabecalho: ["Horas de estudo", "Nota"],
            linhas: [
                [1, 50],
                [2, 60],
                [3, 70],
                [4, 80],
                [5, 90]
            ]
        },

        alternativas: [
            "Tendência crescente",
            "Tendência decrescente",
            "Valores constantes",
            "Ausência de variação",
            "A nota diminui"
        ],

        correta: "Tendência crescente"
    },


    // ==================================================
    // GRÁFICO DE SETORES
    // ==================================================

    {
        categoria: "Gráfico de Setores",
        contexto: "Uma amostra foi dividida em quatro categorias: A = 40%, B = 30%, C = 20% e D = 10%.",
        pergunta: "Qual categoria ocupa a maior parcela?",
        tipo: "texto",

        alternativas: [
            "A",
            "B",
            "C",
            "D",
            "Todas"
        ],

        correta: "A"
    },


    {
        categoria: "Gráfico de Setores",
        contexto: "Em uma pesquisa, 50% dos atendimentos foram presenciais, 30% remotos e 20% domiciliares.",
        pergunta: "Qual modalidade corresponde à metade do total?",
        tipo: "texto",

        alternativas: [
            "Presencial",
            "Remoto",
            "Domiciliar",
            "Remoto e domiciliar",
            "Nenhuma"
        ],

        correta: "Presencial"
    },


    {
        categoria: "Gráfico de Setores",
        contexto: "Uma amostra apresenta 60% de sangue, 25% de urina e 15% de saliva.",
        pergunta: "Qual material possui a menor participação?",
        tipo: "texto",

        alternativas: [
            "Sangue",
            "Urina",
            "Saliva",
            "Todos",
            "Não é possível determinar"
        ],

        correta: "Saliva"
    },


    {
        categoria: "Gráfico de Setores",
        contexto: "Em um gráfico, 70% responderam 'Sim', 20% 'Não' e 10% 'Não sei'.",
        pergunta: "O que significa o valor de 70%?",
        tipo: "texto",

        alternativas: [
            "70 em cada 100 respostas foram 'Sim'",
            "Existem obrigatoriamente 70 pessoas",
            "A média das respostas é 70",
            "70% responderam 'Não'",
            "O gráfico possui 70 categorias"
        ],

        correta: "70 em cada 100 respostas foram 'Sim'"
    },


    {
        categoria: "Gráfico de Setores",
        contexto: "Um pesquisador deseja representar a composição percentual de uma amostra.",
        pergunta: "Qual gráfico é apropriado para destacar partes de um total?",
        tipo: "texto",

        alternativas: [
            "Gráfico de setores",
            "Gráfico de dispersão",
            "Histograma",
            "Gráfico de linhas",
            "Plano cartesiano"
        ],

        correta: "Gráfico de setores"
    },


    {
        categoria: "Gráfico de Setores",
        contexto: "Um gráfico possui categorias de 40%, 35% e 25%.",
        pergunta: "Qual é a soma das três categorias?",
        tipo: "texto",

        alternativas: [
            "90%",
            "95%",
            "100%",
            "105%",
            "110%"
        ],

        correta: "100%"
    },


    {
        categoria: "Gráfico de Setores",
        contexto: "Uma pesquisa apresenta 30% na categoria A e 70% na categoria B.",
        pergunta: "Qual afirmação é correta?",
        tipo: "texto",

        alternativas: [
            "B possui maior participação",
            "A possui maior participação",
            "As categorias são iguais",
            "A representa 70%",
            "Não existe diferença"
        ],

        correta: "B possui maior participação"
    },


    {
        categoria: "Gráfico de Setores",
        contexto: "Em uma amostra de 100 pessoas, 25% pertencem ao Grupo A.",
        pergunta: "Quantas pessoas pertencem ao Grupo A?",
        tipo: "texto",

        alternativas: [
            "20",
            "25",
            "30",
            "40",
            "75"
        ],

        correta: "25"
    },


    {
        categoria: "Gráfico de Setores",
        contexto: "Um gráfico de setores apresenta 45% na categoria X.",
        pergunta: "Qual porcentagem pertence às demais categorias juntas?",
        tipo: "texto",

        alternativas: [
            "45%",
            "50%",
            "55%",
            "60%",
            "65%"
        ],

        correta: "55%"
    },


    {
        categoria: "Gráfico de Setores",
        contexto: "Uma amostra possui quatro categorias que formam todo o conjunto.",
        pergunta: "Quanto deve representar a soma de todos os setores?",
        tipo: "texto",

        alternativas: [
            "25%",
            "50%",
            "75%",
            "100%",
            "200%"
        ],

        correta: "100%"
    },


    // ==================================================
    // LEITURA CRÍTICA
    // ==================================================

    {
        categoria: "Leitura Crítica",
        contexto: "Antes de interpretar um gráfico, o leitor deve identificar o que está sendo representado.",
        pergunta: "Qual deve ser uma das primeiras ações?",
        tipo: "texto",

        alternativas: [
            "Ler o título",
            "Ignorar os eixos",
            "Escolher a maior barra sem verificar valores",
            "Desconsiderar as unidades",
            "Calcular uma média obrigatoriamente"
        ],

        correta: "Ler o título"
    },


    {
        categoria: "Leitura Crítica",
        contexto: "Um gráfico apresenta valores de glicemia.",
        pergunta: "Por que a unidade de medida é importante?",
        tipo: "texto",

        alternativas: [
            "Ela informa o significado e a escala dos valores",
            "Ela define a cor do gráfico",
            "Ela substitui o título",
            "Ela determina a causalidade",
            "Ela transforma o gráfico em tabela"
        ],

        correta: "Ela informa o significado e a escala dos valores"
    },


    {
        categoria: "Leitura Crítica",
        contexto: "O eixo vertical de um gráfico começa em 95, e não em zero.",
        pergunta: "Qual cuidado deve ser tomado?",
        tipo: "texto",

        alternativas: [
            "Observar a escala antes de avaliar a magnitude das diferenças",
            "Ignorar o eixo",
            "Considerar o gráfico automaticamente errado",
            "Somar todas as barras",
            "Concluir que o maior valor é o dobro do menor"
        ],

        correta: "Observar a escala antes de avaliar a magnitude das diferenças"
    },


    {
        categoria: "Leitura Crítica",
        contexto: "Uma tabela apresenta 25 pacientes no Grupo A e 25 no Grupo B.",
        pergunta: "Qual conclusão pode ser feita apenas com essa informação?",
        tipo: "texto",

        alternativas: [
            "Os grupos possuem o mesmo número de pacientes",
            "Os grupos possuem a mesma média de idade",
            "Os tratamentos possuem a mesma eficácia",
            "Os grupos possuem a mesma variabilidade",
            "Todos os pacientes possuem o mesmo diagnóstico"
        ],

        correta: "Os grupos possuem o mesmo número de pacientes"
    },


    {
        categoria: "Leitura Crítica",
        contexto: "Um gráfico mostra aumento durante quatro períodos consecutivos.",
        pergunta: "É correto afirmar que o aumento continuará obrigatoriamente no futuro?",
        tipo: "texto",

        alternativas: [
            "Não. O gráfico descreve o período observado",
            "Sim, obrigatoriamente",
            "Sim, porque todo gráfico prevê o futuro",
            "Sim, se houver quatro pontos",
            "Não, porque gráficos não mostram tendências"
        ],

        correta: "Não. O gráfico descreve o período observado"
    },


    {
        categoria: "Leitura Crítica",
        contexto: "Um pesquisador quer comparar quatro categorias de diagnóstico.",
        pergunta: "Qual representação é especialmente adequada?",
        tipo: "texto",

        alternativas: [
            "Gráfico de barras",
            "Gráfico de dispersão",
            "Histograma de variável contínua",
            "Gráfico de linhas temporal",
            "Nenhuma representação"
        ],

        correta: "Gráfico de barras"
    },


    {
        categoria: "Leitura Crítica",
        contexto: "Um laboratório quer acompanhar diariamente a concentração de um marcador durante dez dias.",
        pergunta: "Qual gráfico é especialmente adequado?",
        tipo: "texto",

        alternativas: [
            "Gráfico de linhas",
            "Gráfico de setores",
            "Histograma",
            "Gráfico de dispersão sem tempo",
            "Nenhum gráfico"
        ],

        correta: "Gráfico de linhas"
    },


    {
        categoria: "Leitura Crítica",
        contexto: "Um pesquisador quer relacionar idade e pressão arterial.",
        pergunta: "Qual representação é especialmente adequada?",
        tipo: "texto",

        alternativas: [
            "Gráfico de dispersão",
            "Gráfico de setores",
            "Histograma de uma única variável",
            "Gráfico de barras de categorias",
            "Organograma"
        ],

        correta: "Gráfico de dispersão"
    },


    {
        categoria: "Leitura Crítica",
        contexto: "Um gráfico apresenta uma forte associação entre duas variáveis.",
        pergunta: "Qual conclusão deve ser evitada sem outras evidências?",
        tipo: "texto",

        alternativas: [
            "Uma variável necessariamente causa a outra",
            "Existe um padrão visual entre as variáveis",
            "As variáveis podem ser comparadas",
            "Os dados apresentam associação",
            "É possível observar os pares de valores"
        ],

        correta: "Uma variável necessariamente causa a outra"
    },


    {
        categoria: "Leitura Crítica",
        contexto: "Um gráfico apresenta título, eixos e valores.",
        pergunta: "Qual atitude representa uma leitura estatística adequada?",
        tipo: "texto",

        alternativas: [
            "Interpretar os dados sem concluir além do que eles permitem",
            "Observar apenas as cores",
            "Ignorar a escala",
            "Considerar qualquer associação como causalidade",
            "Desconsiderar o contexto"
        ],

        correta: "Interpretar os dados sem concluir além do que eles permitem"
    },


    // ==================================================
    // APLICAÇÕES
    // ==================================================

    {
        categoria: "Aplicações",
        contexto: "Um hospital quer apresentar a evolução mensal do número de internações.",
        pergunta: "Qual gráfico é mais adequado?",
        tipo: "texto",

        alternativas: [
            "Gráfico de linhas",
            "Gráfico de setores",
            "Histograma",
            "Gráfico de dispersão",
            "Nenhum"
        ],

        correta: "Gráfico de linhas"
    },


    {
        categoria: "Aplicações",
        contexto: "Um laboratório quer comparar a quantidade de exames de quatro tipos.",
        pergunta: "Qual gráfico é adequado?",
        tipo: "texto",

        alternativas: [
            "Gráfico de barras",
            "Gráfico de dispersão",
            "Histograma",
            "Gráfico de linhas obrigatoriamente",
            "Nenhum"
        ],

        correta: "Gráfico de barras"
    },


    {
        categoria: "Aplicações",
        contexto: "Um estudo deseja verificar a distribuição das alturas de 300 pessoas em intervalos.",
        pergunta: "Qual gráfico é indicado?",
        tipo: "texto",

        alternativas: [
            "Histograma",
            "Gráfico de setores",
            "Gráfico de linhas",
            "Gráfico de dispersão",
            "Fluxograma"
        ],

        correta: "Histograma"
    },


    {
        categoria: "Aplicações",
        contexto: "Uma pesquisa deseja apresentar a porcentagem de participantes em cada grupo sanguíneo.",
        pergunta: "Qual representação pode destacar as partes do total?",
        tipo: "texto",

        alternativas: [
            "Gráfico de setores",
            "Gráfico de dispersão",
            "Histograma",
            "Gráfico de linhas",
            "Nenhuma"
        ],

        correta: "Gráfico de setores"
    },


    {
        categoria: "Aplicações",
        contexto: "Um pesquisador deseja estudar a possível associação entre peso e pressão arterial.",
        pergunta: "Qual gráfico é indicado?",
        tipo: "texto",

        alternativas: [
            "Gráfico de dispersão",
            "Gráfico de setores",
            "Histograma",
            "Gráfico de barras",
            "Gráfico de linhas temporal"
        ],

        correta: "Gráfico de dispersão"
    },


    {
        categoria: "Aplicações",
        contexto: "Um artigo científico apresenta uma tabela com resultados laboratoriais.",
        pergunta: "Qual vantagem principal da tabela?",
        tipo: "texto",

        alternativas: [
            "Organizar valores em linhas e colunas para facilitar comparação",
            "Provar causalidade",
            "Eliminar a necessidade de interpretação",
            "Mostrar somente imagens",
            "Substituir toda análise estatística"
        ],

        correta: "Organizar valores em linhas e colunas para facilitar comparação"
    },


    {
        categoria: "Aplicações",
        contexto: "Um profissional observa um gráfico de casos de uma doença ao longo dos meses.",
        pergunta: "O que ele pode identificar diretamente?",
        tipo: "texto",

        alternativas: [
            "Tendências de aumento, redução ou estabilidade",
            "A causa definitiva da doença",
            "O tratamento ideal de cada paciente",
            "A genética de cada indivíduo",
            "Causalidade obrigatória"
        ],

        correta: "Tendências de aumento, redução ou estabilidade"
    },


    {
        categoria: "Aplicações",
        contexto: "Uma pesquisa clínica compara a frequência de resposta em três tratamentos.",
        pergunta: "Qual informação um gráfico de barras facilita?",
        tipo: "texto",

        alternativas: [
            "Comparação visual entre os grupos",
            "Determinação automática de causalidade",
            "Previsão exata do futuro",
            "Diagnóstico individual",
            "Eliminação de erros de pesquisa"
        ],

        correta: "Comparação visual entre os grupos"
    },


    {
        categoria: "Aplicações",
        contexto: "Dados epidemiológicos mostram casos registrados em diferentes períodos.",
        pergunta: "Por que a interpretação gráfica é importante?",
        tipo: "texto",

        alternativas: [
            "Permite identificar padrões e mudanças nos dados",
            "Garante a causa dos casos",
            "Substitui todos os métodos estatísticos",
            "Elimina a necessidade de coleta de dados",
            "Transforma qualquer associação em causalidade"
        ],

        correta: "Permite identificar padrões e mudanças nos dados"
    },


    {
        categoria: "Aplicações",
        contexto: "Um profissional da saúde lê um artigo científico com vários gráficos.",
        pergunta: "Qual habilidade é fundamental?",
        tipo: "texto",

        alternativas: [
            "Interpretar criticamente o que os dados realmente mostram",
            "Aceitar qualquer conclusão apresentada",
            "Ignorar escalas e unidades",
            "Observar somente as cores",
            "Considerar todo gráfico como prova causal"
        ],

        correta: "Interpretar criticamente o que os dados realmente mostram"
    }

];


// ======================================================
// COMPLETAR O BANCO ATÉ 80 QUESTÕES
// Gera variações adicionais contextualizadas
// ======================================================

const questoesExtras = [

    ["Tabela", "Em uma tabela, a categoria A possui 40 registros e B possui 20.", "Quantos registros existem nas duas categorias?", ["40","50","60","70","80"], "60"],

    ["Tabela", "Uma pesquisa apresenta 15 resultados positivos e 25 negativos.", "Qual resultado foi mais frequente?", ["Positivo","Negativo","Ambos iguais","Nenhum","Não é possível"], "Negativo"],

    ["Gráfico de Barras", "As barras A, B e C possuem valores 10, 20 e 30.", "Qual barra representa o maior valor?", ["A","B","C","A e B","Todas"], "C"],

    ["Gráfico de Barras", "As categorias X e Y apresentam 25 e 40 pacientes.", "Qual é a diferença entre elas?", ["10","15","20","25","40"], "15"],

    ["Gráfico de Linhas", "Uma variável passa de 20 para 30, depois 40 e 50.", "Qual tendência é observada?", ["Crescente","Decrescente","Constante","Sem padrão","Nula"], "Crescente"],

    ["Gráfico de Linhas", "Os valores observados foram 50, 40, 30 e 20.", "Qual tendência é observada?", ["Crescente","Decrescente","Constante","Sem variação","Crescente e decrescente"], "Decrescente"],

    ["Histograma", "A faixa 30–39 possui frequência 25 e as demais possuem frequências menores.", "Qual intervalo concentra mais observações?", ["10–19","20–29","30–39","40–49","Não é possível"], "30–39"],

    ["Histograma", "Os dados de peso foram agrupados em faixas.", "Que tipo de variável está sendo representada?", ["Quantitativa","Somente qualitativa nominal","Texto livre","Cor","Categoria sem medida"], "Quantitativa"],

    ["Gráfico de Dispersão", "À medida que X aumenta, Y também tende a aumentar.", "Qual padrão é observado?", ["Associação crescente","Associação decrescente","Ausência de variação","Constância","Causalidade comprovada"], "Associação crescente"],

    ["Gráfico de Dispersão", "À medida que X aumenta, Y tende a diminuir.", "Qual padrão é observado?", ["Associação crescente","Associação decrescente","Constância","Sem dados","Causalidade comprovada"], "Associação decrescente"],

    ["Gráfico de Setores", "Uma categoria ocupa 20% do total.", "Qual porcentagem corresponde ao restante?", ["20%","40%","60%","80%","100%"], "80%"],

    ["Gráfico de Setores", "Duas categorias representam 30% e 40% do total.", "Quanto representam juntas?", ["50%","60%","70%","80%","90%"], "70%"],

    ["Leitura Crítica", "Um gráfico não apresenta unidade no eixo vertical.", "Qual problema isso pode causar?", ["Dificultar a interpretação dos valores","Provar causalidade","Aumentar a amostra","Alterar automaticamente os dados","Nenhum"], "Dificultar a interpretação dos valores"],

    ["Leitura Crítica", "Uma barra parece muito maior porque o eixo foi cortado.", "O que o leitor deve verificar?", ["A escala do eixo","Somente a cor","O nome do autor apenas","A fonte do computador","O tamanho da tela"], "A escala do eixo"],

    ["Aplicações", "Um pesquisador quer mostrar valores exatos organizados por categoria.", "Qual recurso é especialmente útil?", ["Tabela","Somente fotografia","Mapa","Áudio","Nenhum"], "Tabela"],

    ["Aplicações", "Um profissional quer observar a evolução de um marcador no tempo.", "Qual gráfico é indicado?", ["Linhas","Setores","Dispersão sem tempo","Histograma","Pizza"], "Linhas"],

    ["Aplicações", "Um estudo compara categorias de diagnóstico.", "Qual gráfico facilita a comparação?", ["Barras","Dispersão","Histograma","Linha temporal obrigatoriamente","Nenhum"], "Barras"],

    ["Aplicações", "Um estudo quer visualizar a distribuição de valores contínuos.", "Qual gráfico é indicado?", ["Histograma","Setores","Barras de categorias apenas","Pizza","Organograma"], "Histograma"],

    ["Aplicações", "Um estudo quer analisar duas variáveis quantitativas simultaneamente.", "Qual gráfico é indicado?", ["Dispersão","Setores","Histograma de uma variável","Pizza","Nenhum"], "Dispersão"],

    ["Leitura Crítica", "Um gráfico mostra uma associação entre consumo de um alimento e um marcador biológico.", "Qual conclusão é mais cuidadosa?", ["Existe associação nos dados observados, mas não se prova causalidade apenas pelo gráfico","O alimento certamente causou a alteração","O marcador causou o consumo","A associação é impossível","Todo gráfico prova causa"], "Existe associação nos dados observados, mas não se prova causalidade apenas pelo gráfico"]

];


// adiciona as extras ao banco

questoesExtras.forEach(q => {

    bancoQuestoes.push({

        categoria: q[0],

        contexto: q[1],

        pergunta: q[2],

        tipo: "texto",

        alternativas: q[3],

        correta: q[4]

    });

});


// ======================================================
// GARANTE EXATAMENTE 80 QUESTÕES
// ======================================================

while (bancoQuestoes.length < 80) {

    const numero = bancoQuestoes.length + 1;

    bancoQuestoes.push({

        categoria: "Interpretação de Dados",

        contexto:
            "Em uma pesquisa de saúde, o Grupo A apresentou " +
            numero +
            " registros e o Grupo B apresentou " +
            (numero + 10) +
            " registros.",

        pergunta:
            "Qual grupo apresentou maior frequência?",

        tipo: "texto",

        alternativas: [
            "Grupo A",
            "Grupo B",
            "Os dois grupos são iguais",
            "Não existe frequência",
            "Não é possível comparar"
        ],

        correta: "Grupo B"

    });

}


// Se por algum motivo ultrapassar 80,
// mantém somente as primeiras 80.

if (bancoQuestoes.length > 80) {

    bancoQuestoes.splice(
        80,
        bancoQuestoes.length - 80
    );

}


console.log(
    "Questões disponíveis:",
    bancoQuestoes.length
);


// ======================================================
// VARIÁVEIS DO SISTEMA
// ======================================================

let aluno = "";

let questoesSorteadas = [];

let indiceAtual = 0;

let respostaSelecionada = null;

let acertos = 0;


// ======================================================
// ELEMENTOS HTML
// ======================================================

const telaLogin =
    document.getElementById("telaLogin");

const telaQuiz =
    document.getElementById("telaQuiz");

const telaResultado =
    document.getElementById("telaResultado");


const inputNome =
    document.getElementById("nome");

const inputSenha =
    document.getElementById("senha");

const erroLogin =
    document.getElementById("erroLogin");


const btnEntrar =
    document.getElementById("btnEntrar");

const btnProxima =
    document.getElementById("btnProxima");

const btnRefazer =
    document.getElementById("btnRefazer");

const btnSair =
    document.getElementById("btnSair");


const nomeAluno =
    document.getElementById("nomeAluno");

const numeroQuestao =
    document.getElementById("numeroQuestao");

const categoriaQuestao =
    document.getElementById("categoriaQuestao");

const textoProgresso =
    document.getElementById("textoProgresso");

const progresso =
    document.getElementById("progresso");


const enunciado =
    document.getElementById("enunciado");

const graficoArea =
    document.getElementById("graficoArea");

const alternativas =
    document.getElementById("alternativas");


// ======================================================
// FUNÇÃO EMBARALHAR
// ======================================================

function embaralhar(array) {

    const copia = [...array];

    for (
        let i = copia.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copia[i],
            copia[j]
        ] =
        [
            copia[j],
            copia[i]
        ];

    }

    return copia;

}


// ======================================================
// LOGIN
// ======================================================

btnEntrar.addEventListener(
    "click",
    iniciarLogin
);


function iniciarLogin() {

    const nome =
        inputNome.value.trim();

    const senha =
        inputSenha.value.trim();


    if (nome === "") {

        erroLogin.textContent =
            "Digite seu nome completo.";

        return;

    }


    const partesNome =
        nome.split(/\s+/);


    if (partesNome.length < 2) {

        erroLogin.textContent =
            "Digite nome e sobrenome.";

        return;

    }


    if (senha !== SENHA_CORRETA) {

        erroLogin.textContent =
            "Senha incorreta.";

        return;

    }


    erroLogin.textContent = "";

    aluno = nome;

    nomeAluno.textContent =
        aluno;


    iniciarTentativa();

}


// ======================================================
// INICIAR TENTATIVA
// ======================================================

function iniciarTentativa() {

    indiceAtual = 0;

    acertos = 0;

    respostaSelecionada = null;


    const bancoMisturado =
        embaralhar(bancoQuestoes);


    questoesSorteadas =
        bancoMisturado.slice(
            0,
            TOTAL_QUESTOES
        );


    mostrarTela(
        telaQuiz
    );


    mostrarQuestao();

}


// ======================================================
// MOSTRAR TELAS
// ======================================================

function mostrarTela(tela) {

    telaLogin.classList.remove("ativa");

    telaQuiz.classList.remove("ativa");

    telaResultado.classList.remove("ativa");


    tela.classList.add("ativa");


    window.scrollTo(
        0,
        0
    );

}


// ======================================================
// MOSTRAR QUESTÃO
// ======================================================

function mostrarQuestao() {

    respostaSelecionada = null;

    btnProxima.disabled = true;


    const questao =
        questoesSorteadas[indiceAtual];


    const numero =
        indiceAtual + 1;


    numeroQuestao.textContent =
        "Questão " + numero;


    categoriaQuestao.textContent =
        questao.categoria;


    textoProgresso.textContent =
        "Questão " +
        numero +
        " de " +
        TOTAL_QUESTOES;


    progresso.style.width =
        (
            numero /
            TOTAL_QUESTOES *
            100
        ) +
        "%";


    enunciado.innerHTML =

        '<div class="contexto">' +

        questao.contexto +

        '</div>' +

        '<div class="pergunta">' +

        questao.pergunta +

        '</div>';


    desenharDados(
        questao
    );


    mostrarAlternativas(
        questao
    );


    if (
        numero ===
        TOTAL_QUESTOES
    ) {

        btnProxima.textContent =
            "FINALIZAR ATIVIDADE";

    }

    else {

        btnProxima.textContent =
            "PRÓXIMA QUESTÃO";

    }

}


// ======================================================
// MOSTRAR DADOS / GRÁFICOS
// ======================================================

function desenharDados(questao) {

    graficoArea.innerHTML = "";


    if (
        questao.tipo === "texto" ||
        !questao.dados
    ) {

        return;

    }


    // TABELA

    if (
        questao.tipo === "tabela"
    ) {

        let html =
            '<table class="tabela-dados">';


        html += "<thead><tr>";


        questao.dados.cabecalho
            .forEach(item => {

                html +=
                    "<th>" +
                    item +
                    "</th>";

            });


        html +=
            "</tr></thead>";


        html += "<tbody>";


        questao.dados.linhas
            .forEach(linha => {

                html += "<tr>";


                linha.forEach(
                    valor => {

                        html +=
                            "<td>" +
                            valor +
                            "</td>";

                    }
                );


                html += "</tr>";

            });


        html +=
            "</tbody></table>";


        graficoArea.innerHTML =
            html;

    }


    // GRÁFICO DE BARRAS

    if (
        questao.tipo === "barra"
    ) {

        const valores =
            questao.dados.linhas
                .map(item => item[1]);


        const maior =
            Math.max(...valores);


        let html =
            '<div class="grafico">';


        html +=
            "<h3>" +
            questao.dados.titulo +
            "</h3>";


        questao.dados.linhas
            .forEach(item => {

                const nome =
                    item[0];

                const valor =
                    item[1];

                const largura =
                    valor /
                    maior *
                    100;


                html +=

                    '<div class="linha-barra">' +

                    "<span>" +
                    nome +
                    "</span>" +

                    '<div class="fundo-barra">' +

                    '<div class="barra" style="width:' +
                    largura +
                    '%"></div>' +

                    "</div>" +

                    "<strong>" +
                    valor +
                    "</strong>" +

                    "</div>";

            });


        html += "</div>";


        graficoArea.innerHTML =
            html;

    }


    // LINHAS:
    // para manter compatibilidade simples,
    // os dados são mostrados em tabela temporal.

    if (
        questao.tipo === "linha"
    ) {

        let html =

            '<div class="grafico">' +

            "<h3>" +
            questao.dados.titulo +
            "</h3>" +

            '<table class="tabela-dados">' +

            "<tr>";


        questao.dados.linhas
            .forEach(item => {

                html +=
                    "<th>" +
                    item[0] +
                    "</th>";

            });


        html +=
            "</tr><tr>";


        questao.dados.linhas
            .forEach(item => {

                html +=
                    "<td>" +
                    item[1] +
                    "</td>";

            });


        html +=
            "</tr></table></div>";


        graficoArea.innerHTML =
            html;

    }

}


// ======================================================
// ALTERNATIVAS
// ======================================================

function mostrarAlternativas(
    questao
) {

    alternativas.innerHTML = "";


    const opcoes =
        embaralhar(
            questao.alternativas
        );


    opcoes.forEach(
        (opcao, indice) => {

            const botao =
                document.createElement(
                    "button"
                );


            botao.type =
                "button";


            botao.className =
                "alternativa";


            const letra =
                String.fromCharCode(
                    65 + indice
                );


            botao.innerHTML =

                '<span class="letra">' +

                letra +

                "</span>" +

                "<span>" +

                opcao +

                "</span>";


            botao.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".alternativa"
                        )
                        .forEach(
                            elemento => {

                                elemento
                                    .classList
                                    .remove(
                                        "selecionada"
                                    );

                            }
                        );


                    botao
                        .classList
                        .add(
                            "selecionada"
                        );


                    respostaSelecionada =
                        opcao;


                    btnProxima.disabled =
                        false;

                }
            );


            alternativas.appendChild(
                botao
            );

        }
    );

}


// ======================================================
// PRÓXIMA QUESTÃO
// ======================================================

btnProxima.addEventListener(
    "click",
    function () {

        if (
            respostaSelecionada ===
            null
        ) {

            return;

        }


        const questaoAtual =
            questoesSorteadas[
                indiceAtual
            ];


        if (
            respostaSelecionada ===
            questaoAtual.correta
        ) {

            acertos++;

        }


        indiceAtual++;


        if (
            indiceAtual <
            TOTAL_QUESTOES
        ) {

            mostrarQuestao();

        }

        else {

            finalizar();

        }

    }
);


// ======================================================
// RESULTADO
// ======================================================

function finalizar() {

    const porcentagem =
        Math.round(
            acertos /
            TOTAL_QUESTOES *
            100
        );


    const erros =
        TOTAL_QUESTOES -
        acertos;


    document
        .getElementById(
            "resultadoNome"
        )
        .textContent =
        aluno;


    document
        .getElementById(
            "porcentagem"
        )
        .textContent =
        porcentagem + "%";


    document
        .getElementById(
            "totalAcertos"
        )
        .textContent =
        acertos;


    document
        .getElementById(
            "totalErros"
        )
        .textContent =
        erros;


    let titulo = "";

    let mensagem = "";


    if (
        porcentagem >= 90
    ) {

        titulo =
            "Excelente desempenho!";

        mensagem =
            "Você demonstrou excelente capacidade de leitura e interpretação de dados.";

    }

    else if (
        porcentagem >= 75
    ) {

        titulo =
            "Muito bom!";

        mensagem =
            "Você apresentou boa compreensão dos gráficos e tabelas.";

    }

    else if (
        porcentagem >= 60
    ) {

        titulo =
            "Bom desempenho";

        mensagem =
            "Você compreendeu boa parte do conteúdo, mas alguns pontos ainda podem ser revisados.";

    }

    else if (
        porcentagem >= 40
    ) {

        titulo =
            "Atenção";

        mensagem =
            "Revise os tipos de gráficos, tabelas e a interpretação das informações.";

    }

    else {

        titulo =
            "É importante revisar";

        mensagem =
            "Retome o material explicativo e faça uma nova tentativa.";

    }


    document
        .getElementById(
            "tituloDesempenho"
        )
        .textContent =
        titulo;


    document
        .getElementById(
            "mensagemDesempenho"
        )
        .textContent =
        mensagem;


    salvarResultado(
        porcentagem
    );


    mostrarTela(
        telaResultado
    );

}


// ======================================================
// SALVAR NO NAVEGADOR
// ======================================================

function salvarResultado(
    porcentagem
) {

    const historico =
        JSON.parse(
            localStorage.getItem(
                "bioestatisticaResultados"
            ) ||
            "[]"
        );


    historico.push({

        nome:
            aluno,

        acertos:
            acertos,

        total:
            TOTAL_QUESTOES,

        porcentagem:
            porcentagem,

        data:
            new Date()
                .toLocaleString(
                    "pt-BR"
                )

    });


    localStorage.setItem(

        "bioestatisticaResultados",

        JSON.stringify(
            historico
        )

    );

}


// ======================================================
// FAZER NOVAMENTE
// ======================================================

btnRefazer.addEventListener(
    "click",
    function () {

        iniciarTentativa();

    }
);


// ======================================================
// SAIR
// ======================================================

btnSair.addEventListener(
    "click",
    function () {

        inputNome.value = "";

        inputSenha.value = "";

        erroLogin.textContent = "";


        mostrarTela(
            telaLogin
        );

    }
);