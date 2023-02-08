let num = [5, 8, 2, 9, 3]

num.sort() // faz os numeros ficarem organizados
num.push(1) // adiciona um elemento com numero 1.
console.log(num)
console.log(`o Vetor tem ${num.length} posições`) // num.length mostra quantos numeros tem
console.log(`O primeiro valor do vetor é ${num[0]}`) // num[0] mostra o primeiro numero que está na chave 0. que no caso é 2.

let pos = num.indexOf(2) // O index.Of(2) busca onde está o elemento dois e retorna em qual chave o 2 está, que no caso é 0.
if (pos == -1){
    console.log(`O Valor não foi encontrado`)
}else{
    console.log(`O Valor está na chave ${pos}`)
}
