function  validar(){
let start = document.querySelector('#inicio')
let end = document.querySelector('#fim')
let pass = document.querySelector('#passo')
let msg = document.querySelector('#txt')

    let inicio =  Number(start.value)
    let final = Number(end.value)
    let passos = Number(pass.value)

if (start.value.length === 0 || end.value.length === 0 || pass.value.length === 0){
    //window.alert('ERRO!!! Digite os valores.')
    msg.innerHTML = 'Impossivel Contar!'
} else {
     msg.innerHTML = 'Contando: <br>'
    if(passos <= 0){
        window.alert('Passo inválido! considerando passo 1')
        passos = 1
    }
    if (inicio < final){
        //contagem crescente
        for ( let c = inicio; c<= final; c+= passos){
        msg.innerHTML += ` ${c}  &#x1F449` 
    }
    }else {
        //contagem regressiva
        for( let c = inicio; c>= final; c-=passos){
            msg.innerHTML += ` ${c}  &#x1F449` 
    }
    }
    //bandeira no final
    msg.innerHTML += '&#x1F3C1'
}
}