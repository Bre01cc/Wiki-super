let seta = true;


const trazerPersonagens = async () => {

    let url = `https://akabab.github.io/superhero-api/api/all.json`
    let response = await fetch(url)
    let personagen = await response.json()

    return personagen
}

const buscarPersonagens = async (dadosPersonagem) => {
    let personagens = await trazerPersonagens();
    let personagem = []
    personagens.forEach((item) => {
        // if(item.name==='spider-man')
        if (item.name === dadosPersonagem || item.id === dadosPersonagem)
            personagem.push(item)
    });
    return personagem
}

const alterarDisplay = (editora) => {
    if (editora == "Marvel") {
        if (seta) {
            document.getElementById('restante').style.display = "flex";
            document.getElementById('info-seta').style.transform = "rotate(180deg)"
            seta = false;
        }
        else {
            document.getElementById('restante').style.display = "none";
            document.getElementById('info-seta').style.transform = "none"
            document.getElementById('secao').scrollIntoView({ behavior: 'auto' })
            seta = true;
        }

    } if (editora == "DC") {
        if (seta) {
            document.getElementById('DCrestante').style.display = "flex";
            document.getElementById('DC-info').style.transform = "rotate(180deg)"
            seta = false;
        }
        else {
            document.getElementById('DCrestante').style.display = "none";
            document.getElementById('DC-info').style.transform = "none"
            document.getElementById('secao').scrollIntoView({ behavior: 'auto' })
            seta = true;

        }


    }
}

document.getElementById('info-marvel').addEventListener('click', () => alterarDisplay('Marvel'))
document.getElementById('DC-info').addEventListener('click', () => alterarDisplay('DC'))

document.getElementById('heroi-button').addEventListener('click', () => {
    if (seta) {
        document.getElementById('ifo-status').style.display = 'flex';
         document.getElementById('seta-heroi').style.transform='rotate(180deg)';
        seta = false;
    }else{
         document.getElementById('ifo-status').style.display = 'none';
           document.getElementById('seta-heroi').style.transform='none';
         seta = true;
    }

})

console.log(await buscarPersonagens('Batman'))

// document.getElementById('secao-heroi').innerHTML=""



