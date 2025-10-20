const resultadoCard = () => {
    return JSON.parse(sessionStorage.getItem('personagemSecao'))

}
console.log(resultadoCard())

const containerHeroi = document.getElementById('container-heroi')
const criarCardHeroi = (personagem) => {
    if (personagem) {
        containerHeroi.innerHTML = ""

        const heroi = document.createElement('div')
        heroi.classList.add('heroi')

        const name = document.createElement('div')
        name.classList.add('nome')

        const nome = document.createElement('h1')
        nome.textContent = personagem.name

        name.appendChild(nome)

        const infohHeroi = document.createElement('div')
        infohHeroi.classList.add('info-heroi')

        const personagemH = document.createElement('div')
        personagemH.classList.add('personagem')

        const status = document.createElement('div')
        status.classList.add('status')

        let ulStatus = document.createElement('ul')
        let liC = document.createElement('li')
        liC.textContent ="Combate: " +personagem.powerstats.combat

         let liD = document.createElement('li')
        liD.textContent ="Combate: " +personagem.powerstats.combat

         let liI = document.createElement('li')
        liI.textContent ="Combate: " +personagem.powerstats.combat

        //  let liC = document.createElement('li')
        // liC.textContent ="Combate: " +personagem.powerstats.combat

        //  let liC = document.createElement('li')
        // liC.textContent ="Combate: " +personagem.powerstats.combat

        //  let liC = document.createElement('li')
        // liC.textContent ="Combate: " +personagem.powerstats.combat

        ulStatus.append(liC)
        status.append(ulStatus)
        const img = document.createElement('img')
        img.src = personagem.images.lg

        personagemH.append(img, status)

        infohHeroi.append(personagemH)



        heroi.append(name, infohHeroi)



        containerHeroi.append(heroi)
    }

}

function carregarCards() {

    const heroi = resultadoCard();
    heroi.forEach(criarCardHeroi)

}
carregarCards()