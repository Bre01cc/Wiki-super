
'use strict'
import { trazerPersonagens } from '../buscar.js'
const caixaHeroi = document.getElementById('caixa-Heroi')

const marvelPersonagens = async (categoria) => {
    const personagens = await trazerPersonagens();
    const marvelHeroi = [];
    personagens.forEach(heroi => {
        if (heroi.biography.publisher == 'Marvel Comics' && heroi.biography.alignment == String(categoria)) {

            marvelHeroi.push(heroi)
        }
    });

    return marvelHeroi
}

const criarCard = (personagens) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const cardFundo = document.createElement('div')
    cardFundo.classList.add('card-fundo')

    const imgHeroi = document.createElement('img')
    imgHeroi.src = personagens.images.lg

    cardFundo.appendChild(imgHeroi)

    const cardTexto = document.createElement('div')
    cardTexto.classList.add('card-info')

    const pHeroi = document.createElement('p')
    pHeroi.textContent = personagens.name

    cardTexto.appendChild(pHeroi)

    card.append(cardFundo, cardTexto)

    caixaHeroi.appendChild(card)
}

const carregarCards = async (status) => {
    if (!status) {
        const marvelPersonagensC = await marvelPersonagens('good');
        marvelPersonagensC.forEach(criarCard)
    } else {
        const marvelPersonagensC = await marvelPersonagens(status);
        marvelPersonagensC.forEach(criarCard)
    }



}

const menu = document.getElementById('menu')

const alterarButton = async (categoriaHorV,nomeDiv) => {

    let nome = escolha.querySelector('h3')
    nome.textContent = nomeDiv
    caixaHeroi.innerHTML = ''
    await carregarCards(categoriaHorV)
}

document.getElementById('vilao').addEventListener('click', async () => alterarButton('bad','Vilão'))
document.getElementById('heroi').addEventListener('click', async () => alterarButton('good','Herói'))
const chamarMenu = (button) => {

    const seta = button.querySelector('.icone-seta')
    seta.style.transition = '2s'
    if (seta.style.transform == 'rotate(180deg)') {
        seta.style.transform = 'none'
        menu.style.display = 'none'
    } else {
        seta.style.transform = 'rotate(180deg)'
        menu.style.display = 'flex'
    }


}
const escolha = document.getElementById('escolha')
escolha.addEventListener('click', (event) => {
    chamarMenu(event.currentTarget)
})

await carregarCards();

