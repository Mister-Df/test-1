const form = document.getElementById('submit')
const input = document.querySelectorAll('input')
const user = document.getElementById('user')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('passwordConfirm')
const mail = document.getElementById('mail')


form.addEventListener('click', (e) => {
    e.preventDefault()

    input.forEach(input => {
        console.log(input[1]);
        input.addEventListener('keyup', (e) => {

            /////////////User connexion////////////////////
            let errorUser
            errorUser = document.querySelector('.user').innerHTML = ''
            if (input.name === 'user') {
                if (input.value.length < 6) {
                    console.log('La valeur doit avoir plus de 6 caractère');
                    errorUser = document.querySelector('.user').innerHTML = 'Choisissez un pseudo entre 3 et 24 caractères'
                    
                }else{
                    errorUser = document.querySelector('.usesSpan').innerHTML ='✔'
                }
            }


            /////////////mail connexion////////////////////
            let errormail
            errormail = document.querySelector('.mail').innerHTML = ''
            if (input.name === 'mail') {
                if (input.value.length < 6) {
                    console.log('La valeur doit avoir plus de 6 caractère');
                    errormail = document.querySelector('.mail').innerHTML = 'Rentrez un email valide'
                    
                }else{
                    errormail = document.querySelector('.mailspan').innerHTML ='✔'
                }
            }


             /////////////mail connexion////////////////////
            let errorpassword
            errorpassword = document.querySelector('.password').innerHTML = ''
            if (input.name === 'password') {
                if (input.value.length < 6) {
                    console.log('La valeur doit avoir plus de 6 caractère');
                    errorpassword = document.querySelector('.password').innerHTML = 'Un symbole, une lettre minuscule, un chiffre'
                    
                }else{
                    errorpassword = document.querySelector('.passwordspan').innerHTML ='✔'
                }
            }


             /////////////mail connexion////////////////////
            let error
            error = document.querySelector('.passwordConfirm').innerHTML = ''
            if (input.name === 'password') {
                if (input.value.length < 6) {
                    console.log('La valeur doit avoir plus de 6 caractère');
                    error = document.querySelector('.passwordConfirm').innerHTML = 'Mot de passe ne corresponds pas'
                    
                }else{
                    error = document.querySelector('.passwordspan').innerHTML ='✔'
                }
            }


        })

    });
})

// function checkInput(value) {
//     if (value[input.length] < 6) {
//         console.log('La valeur doit avoir plus de 6 caractère');
//     }


// }