const name = document.getElementById('fname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confPass = document.getElementById('confPass')
const tois = document.querySelector('.tois')

const form = document.getElementById('form')

var nameStatus = false
var emailStatus = false
var passwordStatus = false
var confStatus = false
var messageAppended = false

form.addEventListener('submit', (e) => {
    //console.log('form enviado')
    //alert("form enviado")
    e.preventDefault()

    fillUpCheck()
})

function reset() {
    addEventListener('keydown', (e) => {
        console.log('tecla apertdada')
        if (messageAppended == true) {
            const message = document.querySelector('.not-matched')
            tois.removeChild(message)
            messageAppended = false
        }

    })
}

reset()

function nameCheck() {
    if (name.value == '') {
        console.log('nome invalido')
        name.placeholder = "invalid username !!!"
        name.className = 'name-error'
    } else {
        name.className = 'name-ok'
        nameStatus = true
    }

}

function emailCheck() {
    if (email.value == '') {
        console.log('nome invalido')
        email.placeholder = "invalid email !!!"
        email.className = 'email-error'
    } else {
        email.className = 'email-ok'
        emailStatus = true
    }

}

function passwordCheck() {
    if (password.value == '') {
        password.placeholder = "invalid password !!!"
        password.className = 'password-error'
    } else {
        password.className = 'password-ok'
        passwordStatus = true
    }
}

function confPassCheck() {
    if (password.value == confPass.value) {
        confPass.className = 'conPass-ok'
        console.log('igual')
    } else {
        const message = document.createElement('div')
        message.className = 'not-matched'
        message.innerHTML = "Passwords didn't match !!!"
        tois.appendChild(message)
        messageAppended = true
        confPass.className = 'conPass-error'
        console.log('igual')
    }
}


function fillUpCheck() {
    nameCheck()
    emailCheck()
    passwordCheck()
    confPassCheck()
}