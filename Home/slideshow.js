const containerItems = document.getElementById('container-items')

const imagens = [
    {
        'id': '1', 'url': './Img/cara.webp',
    },
    {
        'id': '2', 'url': './Img/crise.webp',
    },
    {
        'id': '3', 'url': './Img/hulk.jpg',
    },
    {
        'id': '4', 'url': './Img/iron-man.jpg',
    },
    {
        'id': '5', 'url': './Img/marvel.jfif',
    },
    {
        'id': '6', 'url': './Img/spider.png',
    },
    {
        'id': '7', 'url': './Img/spider2.jfif',
    }, {
        'id': '8', 'url': './Img/spider3.jfif',
    },
    {
        'id': '9', 'url': './Img/spider4.png',
    },
    {
        'id': '10', 'url': './Img/spider5.webp',
    },
    {
        'id': '11', 'url': './Img/thanos.jfif',
    }
]

const loadImagens = (imagens) => {
    //percorrendo o array passado no parametro da função
    imagens.forEach(imagen => {
        //Criando uma div chmada item que vai guardar a imagem e vai inserir no container passado no paramentro da função

        const item = document.createElement('div')
        item.classList.add('item')

        const img = document.createElement('img')
        //conchetes para acessar os atributos dinamicamente
        img.src = imagen.url

        item.append(img)
        containerItems.append(item)
    })

}


loadImagens(imagens);


let items = document.querySelectorAll('.item');

const previous = () => {
    //Ele está pegando o primeiro elemento da lista de items e adicionando no final do containerItems
    containerItems.appendChild(items[0]);
    //Aqui ele está carregando a agora com o primeiro elemento no final
    items = document.querySelectorAll('.item');
}

const next = () => {
    //Aqui ele está pegando a posição do ultimo elemento de items
    const lastItem = items[items.length - 1]
    //Aqui ele está pegando o ultimo elemento e inserindo antes(em primeiro lugar)
    containerItems.insertBefore(lastItem, items[0]);
    //Aqui ele está carregando a lista após as mudanças
    items = document.querySelectorAll('.item');
}

//Eventos que iram ocorre no click do butão
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next)