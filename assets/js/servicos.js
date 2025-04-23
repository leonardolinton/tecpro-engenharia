const servicos = [
    {
        "id": "1",
        "nome": "PROJETOS DE INSTALAÇÕES PREDIAIS",
        "imagem": "../img/card_01.png",
        "projetos": [
            "Esgoto Sanitário;",
            "Há mais de três décadas de experiência como servico na área criminal em Manaus e Brasília e nos Tribunais Superiores (STJ e STF);",
            "Água Fria;",
            "Água Quente;",
            "Drenagem de Águas Pluviais;",
            "Combate à Incêndio;",
            "Elétrica;",
            "TV, Telefone, Som, Dados e Automação;",
            "SPDA;",
            "Alarme e CFTV;",
            "HVAC;"
        ]
    },
    {
        "id": "2",
        "nome": "PROJETOS DE FUNDAÇÕES",
        "imagem": "../img/card_02.png",
        "projetos": [
            "Sapatas;",
            "Há mais três décadas de experiência como advogada na área de Direito de Família.",
            "Radier;",
            "Vigas de Equilíbrio;",
            "Tubulões;",
            "Estacas Broca;",
            "Estacas Raiz;",
            "Estacas Hélice Contínua;",
            "Estacas Strauss;",
            "Estacas Cravadas;"
        ]
    },
    {
        "id": "3",
        "nome": "PROJETOS DE ESTRUTURAS",
        "imagem": "../img/card_03.png",
        "projetos": [
            "Estruturas de Concreto Armado;",
            "Estruturas de Concreto Protendido;",
            "Estruturas de Concreto Pré Fabricado;",
            "Alvenaria Estrutural;",
            "Estruturas Metálicas;",
            "Estruturas Mistas;",
            "Pisos Industriais;",
            "Bases para Equipamentos;",
            "Contenções;"
        ]
    },
    {
        "id": "4",
        "nome": "PROJETOS DE INFRAESTRUTURA URBANA",
        "imagem": "../img/card_04.png",
        "projetos": [
            "Projetos de Terraplanagem;",
            "Pavimentação;",
            "Redes de Esgoto Sanitário;",
            "Redes de Água Fria;",
            "Redes de Águas Pluviais;",
            "Redes Elétricas;",
            "Redes Telemáticas;",
            "Redes de Gás;",
            "Redes Combate à Incêndio;"
        ]
    },
    {
        "id": "5",
        "nome": "COORDENAÇÃO E COMPATIBILIZAÇÃO DE PROJETOS",
        "imagem": "../img/card_05.png",
        "projetos": [
            "Estudos Topográfico;",
            "Estudos de Metodologias Construtivas;",
            "Análise Energética e Sustentabilidade (Norma de Desempenho - NBR 15575);",
            "Coordenação Geral de Projetos Interdisciplinares;",
            "Compatibilização de Projetos (utilizando BIM - clash detection);"
        ]
    },
    {
        "id": "6",
        "nome": "GESTÃO DE CUSTOS",
        "imagem": "../img/card_06.png",
        "projetos": [
            "Estudos de Viabilidade;",
            "Levantamento de Quantitativos;",
            "Orçamentos;",
            "Composições de Custos;",
            "Cronogramas;",
            "Memoriais;",
            "Elaboração de Propostas Técnicas e Comerciais;"
        ]
    }
];

// Obtendo o parâmetro da URL
const urlParams = new URLSearchParams(window.location.search);
const servicoId = urlParams.get('servico');

// Encontrando a servico selecionada
const servico = servicos.find(f => f.id.trim().toLowerCase() === servicoId);

// Exibindo os projetos da servico
if (servico) {
    document.getElementById('servico-img').src = servico.imagem;
    document.getElementById('servico-nome').textContent = servico.nome;

    const projetosList = document.getElementById('servico-projetos');
    servico.projetos.forEach(projetos => {
        const li = document.createElement('li');
        li.textContent = projetos;
        projetosList.appendChild(li);
    });

}