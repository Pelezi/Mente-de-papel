let enviado = 0;

function validarFormulario(){
    
    if (enviado === 1){
        const form = document.querySelector('form');
        const inputs = form.querySelectorAll('input');

        let isFormValid = true;


        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('invalid');
                isFormValid = false;
            } else {
                input.classList.remove('invalid');
            }
        });

        return isFormValid;

    }
}

function enviarFormulario(){
    enviado = 1;
    if (validarFormulario()){
        enviarParaWhatsapp();
    }
}

function enviarParaWhatsapp(){
    const nome = document.getElementById('input-nome').value;
    const email = document.getElementById('input-email').value;
    const telefone = document.getElementById('input-tel').value;
    const mensagem = document.getElementById('input-message').value;

    const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '5581998625899'; // Insira o número de telefone do WhatsApp aqui (apenas números)
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
}

const numeroTelefone = (event) => {
    let input = event.target
    input.value = mascaraTelefone(input.value)
}

const mascaraTelefone = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}