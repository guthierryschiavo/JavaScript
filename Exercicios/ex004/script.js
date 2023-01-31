//Usando somente o IF com HTML.
/*function verificar(){
    let numero = document.querySelector('#inicio')
    let caixa = document.querySelector('#caixa')
    let n = Number(numero.value)

    if(n > 0){
        caixa.innerHTML = `
        ${n} x 1 = ${n * 1} <br>
        ${n} x 2 = ${n * 2} <br>
        ${n} x 3 = ${n * 3} <br>
        ${n} x 4 = ${n * 4} <br>
        ${n} x 5 = ${n * 5} <br>
        ${n} x 6 = ${n * 6} <br>
        ${n} x 7 = ${n * 7} <br>
        ${n} x 8 = ${n * 8} <br>
        ${n} x 9 = ${n * 9} <br>
        ${n} x 10 = ${n * 10}
        `
    } else {
        window.alert('Digite um número')
    }
}*/

//Usando a condição IF com Do-While
function verificar(){
    let numero = document.querySelector('#inicio')
    let caixa = document.querySelector('#caixa')
    let n = Number(numero.value) // valor que vem digitado pelo usuario

    if (n == 0){
        window.alert('Digite um número')
    } else{
        var c = 0 // segundo numero da taboada
        caixa.innerHTML = ``
        do { // Faça, ele vai executar a condição da variavel c, até chegar 10. E com isso ele multiplica com n
            caixa.innerHTML += `${n} x ${c} = ${n * c} <br>`
            c++
        } while (c <= 10)
    }

}