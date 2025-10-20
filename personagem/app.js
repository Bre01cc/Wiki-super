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
        liC.textContent = "Combate: " + personagem.powerstats.combat

        let liD = document.createElement('li')
        liD.textContent = "Durabilidade: " + personagem.powerstats.durability

        let liI = document.createElement('li')
        liI.textContent = "inteligência: " + personagem.powerstats.intelligence

        let liP = document.createElement('li')
        liP.textContent = "Poder: " + personagem.powerstats.power

        let liS = document.createElement('li')
        liS.textContent = "Velocidade: " + personagem.powerstats.speed

        let liSt = document.createElement('li')
        liSt.textContent = "Força: " + personagem.powerstats.strength

        ulStatus.append(liC, liD, liI, liP, liS, liSt)
        status.append(ulStatus)
        const img = document.createElement('img')
        img.src = personagem.images.lg

        personagemH.append(img, status)



        const dados = document.createElement('div')
        dados.classList.add('dados')

        const biografia = document.createElement('biografia')
        biografia.classList.add('biografia')
        let bioInfo = document.createElement('h2')
        bioInfo.textContent = 'Informações'

        const bio = document.createElement('div')
        bio.classList.add('bio')

        let bioH = document.createElement('h3')
        bioH.textContent = 'Biografia'
         
        let bioUl = document.createElement('ul')

        let bioLi1 = document.createElement('li')

        bioLi1 



        bioUl.append




        const aparencia = document.createElement('div')
        aparencia.classList.add('aparencia')

        let aparenciaInfo = document.createElement('h3')
        aparenciaInfo.textContent = 'Aparência'

        let ulAparencia = document.createElement('ul')

        let liG = document.createElement('li')
        liG.textContent = "Gênero: " + personagem.appearance.gender

        let liEye = document.createElement('li')
        liEye.textContent = "Cor dos olhos: " + personagem.appearance.eyeColor

        let liHair = document.createElement('li')
        liHair.textContent = "Cor dos cabelos: " + personagem.appearance.hairColor

        let liHei = document.createElement('li')
        liHei.textContent = "Altura: " + personagem.appearance.height

        let liRace = document.createElement('li')
        liRace.textContent = "Raça: " + personagem.appearance.race

        let liW = document.createElement('li')
        liW.textContent = "Peso: " + personagem.appearance.weight


        ulAparencia.append(liG, liEye, liHair, liHei, liRace, liW)



        aparencia.append(aparenciaInfo, ulAparencia)

        biografia.append(bioInfo, aparencia)

        infohHeroi.append(personagemH, biografia)



        heroi.append(name, infohHeroi)



        containerHeroi.append(heroi)
    }

}

function carregarCards() {

    const heroi = resultadoCard();
    heroi.forEach(criarCardHeroi)

}
carregarCards()