// Para ter um Array como forma de deposito, eu tenho que criar ela em um lugar onde la não vai ser sobrescrita.
let conjunto = []
console.log(conjunto.idade)
let soma = 0

function adicionar(){
    let numero = document.querySelector('#numero')
    let caixa = document.querySelector('#caixa')
    let texto = document.querySelector('#contagem')
    let n = Number(numero.value)

    if (n == 0 || n < 1 || n>101){
       window.alert('Digite um valor entre 1 e 100')

    }else{
        let item = document.createElement('option')
        item.innerHTML = `O valor ${n} foi adicionado`
        caixa.appendChild(item)
    }
        //array para receber o valor n
        //let conjunto = []  -> Quando eu uso um Array dentro de uma função, ele vai sempre criar um novo Array.
        conjunto.push(n) // Sempre que eu usar o push() tenho que colocar 
        //console.log(conjunto)
    texto.innerHTML = ''
    numero.value = '' // Guanabara: Procura a raiz, a caixa onde quer resetar, que no caso foi o let numero
    numero.focus() // Serve para continuar no mesmo lugar
}

function verificar(){
    let texto = document.querySelector('#contagem')
    
    if (conjunto.length == 0) { // verifica se a caixa recebeu valor para finalizar
        window.alert('Adicione valores antes de finalizar!')
    } else {

    let textoTotal = document.createElement('p')
    textoTotal.innerHTML = `Ao todo, temos ${conjunto.length} números cadastrados`
    texto.appendChild(textoTotal)

    //condição para fazer a Soma dos Array
    for ( let resultado = 0; resultado < conjunto.length; resultado++){
        soma += conjunto[resultado] // conjunto é a array e o [resultado] vai pegar o primeiro numero dentro da chave 0
    }

    let textoSoma = document.createElement('p')
    textoSoma.innerHTML = `A soma do Array é ${soma}`
    texto.appendChild(textoSoma)
    
    let textoMedia = document.createElement('p')
    textoMedia.innerHTML = `A média dos valores digitados é ${soma/conjunto.length}`
    texto.appendChild(textoMedia)

    let maiorNumero = 0
    for (let indiceMaior = 0; indiceMaior < conjunto.length; indiceMaior++){
        if(conjunto[indiceMaior] > maiorNumero){
            maiorNumero = conjunto[indiceMaior]
        }
    }
    // posso usar também: let maiorNumero = Math.max (...conjunto) -> vai pegar o maior valor dentro da array
    let textoMaior = document.createElement('p')
    textoMaior.innerHTML = `O Maior numero é ${maiorNumero}`
    texto.appendChild(textoMaior)

    let menorNumero = Math.min(...conjunto)

    let textoMenor = document.createElement('p')
    textoMenor.innerHTML = `O Menor numero é ${menorNumero}`
    texto.appendChild(textoMenor)
}
}