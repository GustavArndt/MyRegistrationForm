//variables
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


//functions
function reset() {
    addEventListener('keydown', (e) => {

        if (messageAppended == true) {
            const message = document.querySelector('.not-matched')
            tois.removeChild(message)
            messageAppended = false
        }

    })
}



function nameCheck() {
    if (name.value == '') {
        name.placeholder = "invalid username !!!"
        name.className = 'name-error'
    } else {
        name.className = 'name-ok'
        nameStatus = true
    }

}

function emailCheck() {
    if (email.value == '') {
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

    } else {
        const message = document.createElement('div')
        message.className = 'not-matched'
        message.innerHTML = "Passwords didn't match !!!"
        tois.appendChild(message)
        messageAppended = true
        confPass.className = 'conPass-error'
    }
}

function fillUpCheck() {
    nameCheck()
    emailCheck()
    passwordCheck()
    confPassCheck()
}


//Program looping

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fillUpCheck()
})

reset()