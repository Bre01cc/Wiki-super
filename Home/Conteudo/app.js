
import {buscarPersonagens} from '../../buscar.js'



//Responsavel por tarazer todo JSON da api de super herois


//Responsavel por buscar baseado na busca do usuário heroi especifico dentro do JSON

//Responsavel por redirecionar o usuario com base na pesquisa em uma pesquisa valida
const resultadoDaPesquisa = async ({ target }) => {

    let nome = target.value
    if (nome != null && nome != undefined && nome != '') {
        let personagem = await buscarPersonagens(nome)
        if (personagem) {
            //sessionStorage em resumo ela é responsavel por armazenar uma mémoria temporaria que nesse caso será a variável personagem que contém o json
            //JSON.stringify converte um JSON em um texto
            sessionStorage.setItem('personagem',JSON.stringify(personagem))
            window.location.href = '../../pesquisa/pesquisa.html'

        } else {
            return undefined
        }
    } else {
        return false
    }
}

//AddEventListener é capaz de devolver uma série de informações sobre o item clicado através de um objeto chamado event , 
document.getElementById('pesquisa').addEventListener('focusout', resultadoDaPesquisa)

const alterarDisplay = (editora) => {
    if (editora == "Marvel") {
        const texto = document.getElementById('restante')
        const seta = document.getElementById('info-seta')
        if (texto.style.display === "none") {
            texto.style.display = "flex"
            seta.style.transform = "rotate(180deg)"
        }
        else {
            texto.style.display = "none";
            seta.style.transform = "none"
            document.getElementById('principal').scrollIntoView({ behavior: 'auto' })
        }

    } if (editora == "DC") {
        const texto = document.getElementById('DCrestante')
        const seta = document.getElementById('DC-info')
        if (texto.style.display === "none") {
            texto.style.display = "flex";
            seta.style.transform = "rotate(180deg)"

        }
        else {
            texto.style.display = "none";
            seta.style.transform = "none"
            document.getElementById('principal').scrollIntoView({ behavior: 'auto' })

        }


    }
}

document.getElementById('info-marvel').addEventListener('click', () => alterarDisplay('Marvel'))
document.getElementById('DC-info').addEventListener('click', () => alterarDisplay('DC'))

//Seleciona todos os elemntos que contem a classe (hero-button) e retornaum nodeList qu é parecido com um array
const powerStatus = () => {

    const botoes = document.querySelectorAll('.heroi-button');

    botoes.forEach(botao => {
        botao.addEventListener('click', (event) => {
            // pega o botão  
            //currentTarget ele retorna o elemento que está tratando o evento. No caso é o botão
            //target retorna o elemento exato que foi clicado 
            let clickedButton = event.currentTarget;


            //closet a partir de um elemento buscamos o seu ancestral. No caso acima dele(ele é filho e buscamos pelos seus pais ou avós)
            //Dessa forma encontramos a div do heroi em questão podendo ser do batman ou do spider
            let heroiDiv = clickedButton.closest('.heroi');

            //busca a div .info-status dentro do mesmo .heroi
            //querySelector busca um elento dentro do outro
            let infoStatus = heroiDiv.querySelector('.info-status');
            let seta = clickedButton.querySelector('.seta');

            // alterna display e seta
            if (infoStatus.style.display === 'flex') {
                infoStatus.style.display = 'none';
                seta.style.transform = 'none';
            } else {
                infoStatus.style.display = 'flex';
                seta.style.transform = 'rotate(180deg)';
            }
        });
    });
}
powerStatus()

