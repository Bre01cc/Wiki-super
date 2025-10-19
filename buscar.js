const trazerPersonagens = async () => {

    let url = `https://akabab.github.io/superhero-api/api/all.json`
    let response = await fetch(url)
    let personagen = await response.json()
    if (personagen.length > 0) {
        return personagen
    } else {
        return false
    }

}
export const buscarPersonagens = async (dadosPersonagem) => {
    let personagens = await trazerPersonagens();
    //Validando o retorna da função trazerPersonagens
    if (personagens) {
        //Criando uma váriavel que vai armazena o resultado da busca do filter
        let personagem = personagens.filter(item => item.name.toLowerCase().includes(dadosPersonagem.toLowerCase()) || item.id === Number(dadosPersonagem))
        if (personagem.length > 0) {
            return personagem
        } else {
            return false
        }
    } else {
        return false
    }

}
export const buscarPersonagem = async (dadosPersonagem) => {
    let personagens = await trazerPersonagens();
    //Validando o retorna da função trazerPersonagens
    if (personagens) {
        //Criando uma váriavel que vai armazena o resultado da busca do filter
        let personagem = personagens.filter(item => item.name == dadosPersonagem|| item.id === Number(dadosPersonagem))
        if (personagem.length > 0) {
            return personagem
        } else {
            return false
        }
    } else {
        return false
    }}