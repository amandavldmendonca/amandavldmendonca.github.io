document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('meuFormulario');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const nome = document.getElementById('nome');
            const email = document.getElementById('email');
            const erroNome = document.getElementById('erro-nome');
            const erroEmail = document.getElementById('erro-email');

            let valido = true;

            if (nome.value.trim() === '') {
                erroNome.textContent = `Por favor, digite seu nome.`;
                erroNome.style.display = `block`;
                valido = false;
            } else {
                erroNome.style.display = `none`;
            }

            if (email.value.trim() === '') {
                erroEmail.textContent = `Por favor, digite seu e-mail.`;
                erroEmail.style.display = `block`;
                valido = false;
            } else {
                erroEmail.style.display = `none`;
            }

            if (valido) {
                alert(`Formulário enviado!`);
                formulario.reset();
            }
        });
    }
});