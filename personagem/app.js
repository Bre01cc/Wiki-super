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

        let heroiH = document.createElement('h2')
        heroiH.textContent = 'Informações'

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
        bioLi1.textContent = "Nome Completo: " + personagem.biography.fullName

        let bioLi2 = document.createElement('li')
        bioLi2.textContent = "Alter egos: " + personagem.biography.alterEgos

        const alianca = document.createElement('div')
        alianca.classList.add('alianca')

        let aliancaH = document.createElement('h3')

        aliancaH.textContent = 'Alianças:'

        let aliancaUlA = document.createElement('ul')

        let aliancaUl = document.createElement('ul')

        const aliancaArray = personagem.biography.aliases.forEach((item) => {

            let li = document.createElement('li')
            li.textContent = item + ","




            aliancaUlA.append(li)

        })


        alianca.append(aliancaH, aliancaUlA)

        let bioLi4 = document.createElement('li')
        bioLi4.textContent = "Primeira aparição: " + personagem.biography.firstAppearance

        let bioLi5 = document.createElement('li')
        bioLi5.textContent = "Local de nascimento: " + personagem.biography.placeOfBirth


        let bioLi6 = document.createElement('li')
        bioLi6.textContent = "Publicadora: " + personagem.biography.publisher

        aliancaUl.append(bioLi1, bioLi2, bioLi4, bioLi6, bioLi5)

        const criacao = document.createElement('div')
        criacao.classList.add('criacao')
        let criacaoH = document.createElement('h3')
        criacaoH.textContent = "Criação: "

        criacao.append(criacaoH, aliancaUl)

        bioUl.append(alianca, criacao)
        bio.append(bioUl)




        const aparencia = document.createElement('div')
        aparencia.classList.add('aparencia')

        let aparenciaInfo = document.createElement('h3')
        aparenciaInfo.textContent = 'Aparência:'

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



        const trabalho = document.createElement('div')
        trabalho.classList.add('trabalho')

        const trabalhoH = document.createElement('h2')
        trabalhoH.textContent = 'Trabalho'

        let trabalhoUl = document.createElement('ul')
        let trabalhoUlH = document.createElement('h3')

        trabalhoUlH.textContent = 'Base:'

        let trabalhiLi = document.createElement('li')
        trabalhiLi.textContent = "local:" + personagem.work.base
        trabalhoUlH.append(trabalhiLi)


        trabalhoUl.append(trabalhoUlH)

        let trabalhoUl1H = document.createElement('h3')

        trabalhoUl1H.textContent = 'Ocupação:'

        let trabalhoUl1 = document.createElement('ul')

        let trabalhiLi1 = document.createElement('li')
        trabalhiLi1.textContent = "local:" + personagem.work.occupation

        trabalhoUl1.append(trabalhoUl1H, trabalhiLi1)


        const conexao = document.createElement('div')


        trabalho.append(trabalhoH, trabalhoUl, trabalhoUl1)
        biografia.append(heroiH, aparencia, bio)
        dados.append(biografia, trabalho)
        infohHeroi.append(personagemH, dados)
        heroi.append(name, infohHeroi)
        containerHeroi.append(heroi)
    }

}

function carregarCards() {

    const heroi = resultadoCard();
    heroi.forEach(criarCardHeroi)

}
carregarCards()