
'use strict'
//Import de funções que
import { trazerPersonagens } from '../buscar.js'
import { buscarPersonagens } from '../buscar.js'
import {buscarPersonagem} from '../buscar.js'
const caixaHeroi = document.getElementById('caixa-Heroi')




 

//Retorna todos os personagens cuja  a publicadora seja a marvel
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
//Com o retorno dos personagens da marvel cria cards é adiciona em um container
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

//Carrega os cards na tela
const carregarCards = async (status) => {
    if (!status) {
        const marvelPersonagensC = await marvelPersonagens('good');
        marvelPersonagensC.forEach(criarCard)
    } else {
        const marvelPersonagensC = await marvelPersonagens(status);
        marvelPersonagensC.forEach(criarCard)
    }



}

//Quando o card de um personagem for clicado acontecerá um redirecionamento para uma tela onde informações desse personagem serão exibidas
const namePersonagem =()=>caixaHeroi.addEventListener('click', async (event)=>{
    //Pega o elemento que foi alvo do click e busca o ansestral que corresponda a classe card
    const card = event.target.closest('.card').textContent
    let personagem = await buscarPersonagem(card);
    if(personagem.length>0){
        sessionStorage.setItem('personagemSecao',JSON.stringify(personagem))
        window.location.href ='../personagem/personagem.html'
    }
})
namePersonagem()

const menu = document.getElementById('menu')

//Menu de escolha entre personagens hérois e vilões
const alterarButton = async (categoriaHorV, nomeDiv) => {

    let nome = escolha.querySelector('h3')
    nome.textContent = nomeDiv
    caixaHeroi.innerHTML = ''
    await carregarCards(categoriaHorV)
}

//Adicionando um ovinte de click nos butões do menu
document.getElementById('vilao').addEventListener('click', async () => alterarButton('bad', 'Vilão'))
document.getElementById('heroi').addEventListener('click', async () => alterarButton('good', 'Herói'))

//Vai exibir o menu de escolha de personagens herois ou vilões
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

//Botão padrão que quando clicado vai chamar a função que tornará o menu de escolha visivel
const escolha = document.getElementById('escolha')
escolha.addEventListener('click', (event) => {
    chamarMenu(event.currentTarget)
})

//
const resultadoDaPesquisa = async (pesquisa) => {

    let nome = pesquisa.value
    if (nome != null && nome != undefined && nome != '') {
        let personagem = await buscarPersonagens(nome)
        if (personagem) {
            //sessionStorage em resumo ela é responsavel por armazenar uma mémoria temporaria que nesse caso será a variável personagem que contém o json
            //JSON.stringify converte um JSON em um texto
            sessionStorage.setItem('personagem', JSON.stringify(personagem))
            
            window.location.href = '../pesquisa/pesquisa.html'
           
        } else {
            return undefined
        }
    } else {
        return false
    }
}

//AddEventListener é capaz de devolver uma série de informações sobre o item clicado através de um objeto chamado event , 
const pesquisa = document.getElementById('pesquisa')


const mapear = (event) => {
    if (event.key == 'Enter') {

        resultadoDaPesquisa(pesquisa)
    }
}
document.addEventListener('keydown', mapear)

await carregarCards();

