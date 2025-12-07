const input = document.querySelectorAll('input')
const button = document.querySelectorAll('button')
const elementChild = document.getElementById('textCookie')
const afficher = document.querySelector('.container-cookie')



let date = new Date()
let nexWeek = new Date(date.getTime() + 7 *24 *60 *60 *1000)

let day = ('0' + nexWeek).slice(9,11)
let month = ('0' +(date.getMonth() +1)).slice(-2)
let year = date.getFullYear()
document.querySelector('input[type=date]').value =`${year}-${month}-${day}`

button.forEach(element => {
    element.addEventListener('click', buttonFunct)
});

function buttonFunct(e){
    e.preventDefault()
    let obj ={}
   input.forEach(input => {
        let attrName = input.getAttribute('name');
        let attValue = attrName !== 'cookieExpire' ? input.value : input.valueAsDate;
        obj[attrName] = attValue;
        // console.log(obj);
        
    });
    console.log(obj);

    let description = e.target.getAttribute('data-cookie')
    if (description === 'creer') {
        cookieCreer(obj.cookieName, obj.cookieValue, obj.cookieExpire)
        return
    }
    else if (description === 'afficher') {
       afficheCookie(obj.cookieName, obj.cookieValue)
        
    }
   
}

function cookieCreer(name, value, exp){

    let cookies = document.cookie
    console.log(cookies);
    

    if (name.length === 0) {
        elementChild.innerText = 'impossible de créer un cookie sans Nom'
        return
    }

    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expire=${exp.toUTCString()}`
    
    let elementLi = document.createElement('li');
    elementLi.innerText = `Cookie ${name} créer`;
    elementChild.appendChild(elementLi);
    // setTimeout(() =>{
    //     elementChild.remove()
    // }, 1000);

}  

// function afficheCookie(name, value){
//     let result = document.createElement('span')
//     result.innerText = `Nom = ${name}, 
//     Value = ${value}`
//     afficher.appendChild(result)
// }