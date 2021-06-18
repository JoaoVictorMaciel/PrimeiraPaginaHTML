let nome = window.document.getElementById('nome')
let usuario = window.document.getElementById('usuario')
let email = document.querySelector('#email')
var senha = document.querySelector('#senha')
 confSenha = document.querySelector('#txtConfSenha')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaUsuario() {
    let txtUsuario = document.querySelector('#txtUsuario')
    if (usuario.value.length < 3) {
       txtUsuario.innerHTML = 'Nome de Usuário Inválido'
       txtUsuario.style.color = 'red'
    } else {
        txtUsuario.innerHTML = 'Nome de Usuário Válido'
        txtUsuario.style.color = 'green'
        usuarioOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1 ) {
       txtEmail.innerHTML = 'E-mail Inválido'
       txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emaikOk = true
    }
}

function validaSenha() {
    let txtSenha = document.querySelector('#txtSenha')
    if (senha.value.length < 7) {
       txtSenha.innerHTML = 'Senha Inválida'
       txtSenha.style.color = 'red'
    } else {
        txtSenha.innerHTML = 'Senha Válida'
        txtSenha.style.color = 'green'
        senhaOk = true
    }
}

/* Confirmação de Senhas - Ainda em fase de correção
function confirmaSenha() {
    let txtConfSenha = document.querySelector('#txtConfSenha')
    let txtSenha = document.querySelector('#txtSenha')
    if (confSenha.value != senha.value) {
       txtConfSenha.innerHTML = 'Digite corretamente sua senha'
       txtConfSenha.style.color = 'red'
    } else {
        txtConfSenha.innerHTML = 'Senha Válida'
        txtConfSenha.style.color = 'green'
        confSenhaOk = true
    }
}*/

function enviar() {
    if (nomeOk == true && usuarioOk == true && emailOk == true && senhaOk == true) {
        alert ('Cadastro feito com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente.')
    }
}
