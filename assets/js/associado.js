const equipe = [
    {
        "id": "1",
        "nome": "Aniello Aufiero",
        "registro": "OAB/AM 1.579",
        "especialidades": "Criminal",
        "email": "aufiero@aufiero.adv.br",
        "imagem": "../img/advogado-01.jpg",
        "curriculo": [
            "Graduado pela Universidade Federal do Amazonas – UFAM (1985).",
            "Há mais de três décadas de experiência como advogado na área criminal em Manaus e Brasília e nos Tribunais Superiores (STJ e STF).",
            "É sócio e fundador do escritório Aufiero & Associados Advogados.",
            "Professor de Direito Penal e Processo Penal há mais de 30 anos.",
            "Conferencista e Autor de livros Jurídicos.",
            "Integra a Academia de Ciências e Letras Jurídicas do Amazonas (2018).",
            "Presidente do Instituto dos Advogados Brasileiros no Amazonas (IAB/AM) desde 2019.",
            "Associado do Instituto Brasileiro de Ciências Criminais – IBCCRIM.",
            "Foi Conselheiro Federal efetivo da Ordem dos Advogados do Brasil de 2019 a 2022.",
            "Em 2010, foi o único representante do Amazonas a compor a lista Sêxtupla do Superior Tribunal de Justiça.",
            "Laureado a Medalha Ruy Araújo pela Assembleia Legislativa do Estado do Amazonas (2019).",
            "Medalha de Ouro Cidade de Manaus pela Câmara Municipal de Manaus (2022)."
        ]
    },
    {
        "id": "2",
        "nome": "Denize Aufiero",
        "registro": "OAB/AM 1.874",
        "especialidades": "Família",
        "email": "aufiero@aufiero.adv.br",
        "imagem": "../img/advogado-02.jpg",
        "curriculo": [
            "Graduada pela Universidade Federal do Amazonas – UFAM (1987).",
            "Há mais três décadas de experiência como advogada na área de Direito de Família.",
            "É sócia e fundadora do escritório Aufiero & Associados Advogados.",
            "Vice-presidente da Ordem dos Advogados do Amazonas (2022-2024).",
            "Presidente da Câmara Especial da Seccional do Amazonas (2022-2024).",
            "Presidente da Caixa de Assistência dos Advogados do Amazonas (CAAAM), por três mandados consecutivos, de 2013 a 2021.",
            "Presidente da Coordenação Nacional das Caixas de Assistência dos Advogados-CONCAD de 2019 a 2021 e coordenadora na Região Norte.",
            "Associada da Associação Brasileira das Mulheres De Carreira Jurídica (ABMCJ) da Região Norte - Membra do Instituto dos Advogados Brasileiros (IAB).",
            "Idiomas: Espanhol"
        ]
    },
    {
        "id": "3",
        "nome": "Danielle Aufiero M. de Paula",
        "registro": "OAB/AM 6.945",
        "especialidades": "Criminal e Família",
        "email": "danielle@aufiero.adv.br",
        "imagem": "../img/advogado-03.jpg",
        "curriculo": [
            "Graduada pelo Centro Universitário do Norte - UNINORTE (2007).",
            "Pós-graduada em Processo Judiciário pela Escola Superior de Advocacia (ESA/AM).",
            "Corregedora da Ordem dos Advogados do Brasil, Seção Amazonas (2016-2018).",
            "Secretária-Geral da Ordem dos Advogados do Brasil, Seção Amazonas (2019-2021)."

        ]
    },
    {
        "id": "4",
        "nome": "Mario Vitor M. Aufiero",
        "registro": "OAB/AM 8.787",
        "especialidades": "Cível e Improbidade Administrativa.",
        "email": "mario@aufiero.adv.br",
        "imagem": "../img/advogado-04.jpg",
        "curriculo": [
            "Graduado pela Universidade do Estado do Amazonas – UEA (2013).",
            "Doutor e mestre em Direito Processual pela Universidade de São Paulo - USP.",
            "Professor adjunto da Universidade do Estado do Amazonas – UEA.",
            "Advogado gestor do Aufiero & Associados Advogados.",
            "Membro do Tribunal de Ética da Ordem dos Advogados do Brasil, Seccional Amazonas (2019-2022; 2022-2024).",
            "Membro do Instituto Brasileiro de Direito Processual - IBDP.",
            "Membro da Associação Brasileira de Direito Processual - ABDPRO.",
            "Membro da Associação Norte e Nordeste de Professores de Processo - ANNEP.",
            "Associate no CIArb.",
            "Idiomas: Inglês e Italiano"
        ]
    },
    {
        "id": "5",
        "nome": "Adriana Gomes de Oliveira",
        "registro": "OAB/AM 12.202",
        "especialidades": "Cível e Consumidor",
        "email": "adriana@aufiero.adv.br",
        "imagem": "../img/advogado-05.jpg",
        "curriculo": [
            "Graduada pela Escola Superior Batista do Amazonas - ESBAM (2015).",
            "Pós-graduada em Direito Civil e Empresarial pela Universidade do Estado do Amazonas (2022)."
        ]
    }
];

// Obtendo o parâmetro da URL
const urlParams = new URLSearchParams(window.location.search);
const advogadoId = urlParams.get('advogado');

// Encontrando a advogado selecionada
const advogado = equipe.find(f => f.id.trim().toLowerCase() === advogadoId);

// Exibindo os curriculo da advogado
if (advogado) {
    document.getElementById('advogado-img').src = advogado.imagem;
    document.getElementById('advogado-img').alt = `${advogado.nome}`;
    document.getElementById('advogado-nome').textContent = advogado.nome;
    document.getElementById('advogado-registro').textContent = advogado.registro;
    document.getElementById('advogado-especialidades').textContent = advogado.especialidades;
    document.getElementById('advogado-email').textContent = advogado.email;

    const curriculoList = document.getElementById('advogado-curriculo');
    advogado.curriculo.forEach(curriculo => {
        const li = document.createElement('li');
        li.textContent = curriculo;
        curriculoList.appendChild(li);
    });

}