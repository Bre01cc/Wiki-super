'use strict'
import { buscarPersonagens } from '/buscar.js'
import {buscarPersonagem} from '/buscar.js'

const pesquisa = document.getElementById('caixa-texto')
const containerImagem = document.getElementById('container-heroi')
const resultadoDaPesquisa = () => {
    return JSON.parse(sessionStorage.getItem('personagem'))

}
//childNodes
//Convertendo um texto JSON em objeto

const namePersonagem =()=>containerImagem.addEventListener('click', async (event)=>{
    //Pega o elemento que foi alvo do click e busca o ansestral que corresponda a classe card
    const card = event.target.closest('.card').textContent
    let personagem = await buscarPersonagem(card);
    if(personagem.length>0){
        sessionStorage.setItem('personagemSecao',JSON.stringify(personagem))
        window.location.href ='/personagem/pesquisa.html'
    }
 
    console.log(personagem)
})
namePersonagem()

const pesquisaPersonagem = async ({ target }) => {

    let nome = target.value
    if (nome != null && nome != undefined && nome != '') {
        let personagem = await buscarPersonagens(nome)
        if (personagem) {
            containerImagem.innerHTML = ""

            carregarCards(personagem)

        } else {
            return undefined
        }
    } else {
        return false
    }
}
document.getElementById('caixa-texto').addEventListener('focusout', pesquisaPersonagem)



const card = (personagem) => {
    const card = document.createElement('div')
    card.classList.add('card')
    const heroiInfo = document.createElement('div')
    heroiInfo.classList.add('heroi-info')
    const imagem = document.createElement('img')
    const name = document.createElement('p')
    name.textContent = personagem.name
    imagem.src = personagem.images.lg

    heroiInfo.append(name)
    card.append(imagem, heroiInfo)
    containerImagem.appendChild(card)
}

function carregarCards(personagem) {
    if (!personagem) {
        const heroi = resultadoDaPesquisa();
        heroi.forEach(card)
    } else {
        personagem.forEach(card)
    }

}
carregarCards()