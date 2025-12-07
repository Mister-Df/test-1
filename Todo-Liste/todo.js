const input = document.querySelector('.inputDta')
const btnValid = document.querySelector('.btnValid')
const ul = document.querySelector('.parentUl')
const formData = document.querySelector('form')
let tacheFai = []

formData.onsubmit = handleSubmite

function handleSubmite(e){
    e.preventDefault()

    const text = input.value.trim()
    if (text !== '') {
        createId(text)
        input.value = ''
    }
}

function createId(text){
    const todo ={
        text,
        id: Date.now()
    }

    createTodoListe(todo)
}

function createTodoListe(todo){
    const itemLi = document.createElement('li')
    itemLi.setAttribute('data-key', todo.id)
    itemLi.className = 'todoLi'
    
    const span = document.createElement('span')
    span.innerText = todo.text
    itemLi.appendChild(span)
    
    const btn = document.createElement('button')
    btn.className = 'btnValid'
    btn.innerText = 'x'
    btn.onclick = supprimerTache
    
    itemLi.appendChild(btn)
    console.log(itemLi);
    ul.appendChild(itemLi)
    let tach = tacheFai.push(itemLi)
    console.log(tach);
    
    
}

function supprimerTache(e){
    // let tag = e.target.parentNode.getAttribute('data-key')
    tacheFai.forEach(el =>{
        if (e.target.getAttribute('data-key') === el.getAttribute('data-key')) {
            el.remove()
            tacheFai = tacheFai.filter(li => li.dataset.key !== el.dataset.key)
        }
        // console.log(el.target.children.getAttribute('data-key'))
        // console.log(el.target.childNodes.getAttribute('data-key'))
        // let node = el.firstElementChild.getAttribute('data-key')
        // console.log(node)
        
        
    })
    
}
// supprimerTache()



// handleSubmite()