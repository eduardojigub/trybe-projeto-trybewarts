// recuperar os elementos na tela
const email = document.querySelector('#input-email-header');
const password = document.querySelector('#input-password-header');
const btnEntrar = document.querySelector('#btn-entrar');

function validaLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEntrar.addEventListener('click', validaLogin);
