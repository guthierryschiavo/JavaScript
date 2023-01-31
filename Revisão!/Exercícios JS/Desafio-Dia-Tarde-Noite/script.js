function carregar(){
    var img = window.document.getElementById('image')
    var mensagem = window.document.getElementById('msg')
    var back = window.document.querySelector('body') // usar o querySelector para escolher as tags do html
    var horas = new Date() //horas é a variavel para receber a data/hr do pc
    time = horas.getHours() // time é a variavel para receber a hora 
    
    if (time >= 1 && time <=5){
        mensagem.innerHTML = `Agora são ${time} horas, Boa Madrugada!`
        back.style.backgroundColor = 'black'
        img.src ='imagens/fotonoite.png'
    } else if (time >= 6 && time <=12){
        mensagem.innerHTML =`Agora são ${time} horas, Bom Dia!`
        back.style.backgroundColor = 'blue'
        img.src = 'imagens/fotomanha.png'
    } else if (time >= 13 && time <=17) {
        mensagem.innerHTML = `Agora são ${time} horas, Boa Tarde!`
        back.style.backgroundColor = 'orange'
        img.src = 'imagens/fototarde.png'
    } 
    if (time >= 18 && time <= 24) {
        mensagem.innerHTML = `Agora são ${time} horas, Boa Noite!`
        back.style.backgroundColor = 'black'
        img.src = 'imagens/fotonoite.png'
    }
}
