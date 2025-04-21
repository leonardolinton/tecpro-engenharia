document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    // Pegando os valores dos inputs
    let nome = document.getElementById('nome').value;
    let assunto = document.getElementById('assunto').value;
    let mensagem = document.getElementById('mensagem').value;

    // Montando a mensagem do WhatsApp
    let textoMensagem = `Olá, sou: ${nome}.\nAssunto: ${assunto}.\nMensagem: ${mensagem}.`;

    // Codificando a mensagem para que ela seja compatível com URLs
    let textoCodificado = encodeURIComponent(textoMensagem);

    // Número do WhatsApp para onde a mensagem será enviada (adicione o número desejado)
    let numeroWhatsApp = '559232326100'; // Substitua pelo número desejado com o código do país

    // URL do WhatsApp com a mensagem
    let urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    // Abrindo a URL do WhatsApp em uma nova aba/janela
    window.open(urlWhatsApp, '_blank');

    // Limpar o formulário após o envio
    document.getElementById('whatsappForm').reset();
});