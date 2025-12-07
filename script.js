
const KeyAPI = "c9a52c3d0fa783fc1138659ec73e1b51"

const request = ' https://pokeapi.co/api/v2/pokemon?limit=150'

const types ={
    grass: '#78c850',
    ground: '#E2BF65',
    dragon: '#6F35FC',
    fire: '#F58271',
    electric: '#F7D02C',
    fairy: '#D685AD',
    poison: '#966DA3',
    bug: '#B3F594',
    water: '#6390F0',
    normal: '#D930F0',
    psychic: '#F9D5D8',
    flying: '#A98FF3',
    fighting: '#C25956',
    rock: '#B6A136',
    ghost: '#735797',
    ice: '#45ff53'
}

let allPokemons = [];
let tableauFin = [];


let fetchPokemonBase = () =>{
    fetch(request)
    .then(response => response.json())
    .then(data => {

        data.results.forEach(pokemon => {
            fetchPokemonComplet(pokemon)
        });
        
    }
    )
}



window.addEventListener('scroll', () =>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement
    console.log(scrollTop, scrollHeight, clientHeight)
    if (scrollTop + clientHeight >= scrollHeight -20) {
        return
    }
    addPoket(6)
    
})  

let index = 21

function addPoket(nb){
    if (index > 150) {
        return
    }
    const arrToAdd = allPokemons.slice(index, index + nb)
    createCart(arrToAdd)
    
}

fetchPokemonBase()


let loadind = document.querySelector('.loading')

function fetchPokemonComplet(pokemon){
    let objPokemon = {};
    let name = pokemon.name;
    let url = pokemon.url;
    // console.log(url);
    
    fetch(url)
    .then(response => response.json())
    .then(dataPokemon => {
        objPokemon.pic = dataPokemon.sprites.front_default
        objPokemon.type = dataPokemon.types[0].type.name
        objPokemon.id = dataPokemon.id
        allPokemons.push[objPokemon]

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        .then(response => response.json())
        .then(pokemonData => {
            objPokemon.name = pokemonData.names[4].name
            allPokemons.push(objPokemon)
            if (allPokemons.length === 150) {
                // console.log(allPokemons);
                allPokemons.sort((a,b) => {
                    return a.id - b.id
                }).slice(0, 20)

               createCart(allPokemons) 
            //    loadind.style.display = 'none'
            }
        })
    })   
}

function elementNode(name){
    return document.createElement(name)
}
function textNode(name){
    return document.createTextNode(name)
}

function createCart(arr){
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        // console.log(element);
        
        let img = elementNode('img')
        let li = elementNode('li')
        let h5 = elementNode('h5')
        let textH3 = textNode(`#${element.id}`)
        h5.appendChild(textH3)
        let p = elementNode('p')
        let textP = textNode(`${element.name}`)
        p.appendChild(textP)
        li.style.background = types[element.type]
        img.src = element.pic
        img.className = 'img-widht'
        li.className = 'li-display'
        li.appendChild(p)
        li.appendChild(h5)
        li.appendChild(img)
        // console.log(ul);
        let doc = document.querySelector('.img-container').appendChild(li)
        // console.log(doc);
        
    }
}

// createCart()

///////////////recherche/////////////////


const inputTag = document.querySelector('.inputTag')

inputTag.addEventListener('keyup', recherche)

function recherche(){
    let filter, allTitle, titleValue, allLi

    filter = inputTag.value.toUpperCase() 
    allLi = document.querySelectorAll('li')
    allTitle = document.querySelectorAll('li > p')


    for (let index = 0; index < allLi.length; index++) {
        titleValue = allTitle[index].innerText
        console.log(allTitle);
        
        if (titleValue.toUpperCase().indexOf(filter) > -1) {
             allLi[index].style.display ='flex'
        }else{
             allLi[index].style.display = 'none'
        }
        
    }
}

recherche()




///////////////// Animation/////////////////////////

let button = document.querySelector('.container input')




let listenerFunction = () =>{
    button.addEventListener('input', function(e){
        let value = e.target.value
        if (value !== '') {
            e.target.parentNode.classList.add('active-input')
        }else if (value === '') {
            e.target.parentNode.classList.remove('active-input')
        }
    })  

}

listenerFunction()