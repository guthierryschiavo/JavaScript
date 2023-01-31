
function verificar(){
    let ano = window.document.getElementById('year')
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('image')

    //Somas do ano
    let today = new Date()
    let year = today.getFullYear()
    let n1 = Number (ano.value)
    let r = year - n1

    let radio = window.document.getElementsByName('radio1')

    if (radio[0].checked){
        if (r <=12){
            img.src = 'imagens/foto-bebe-m.png'
            msg.innerHTML = `Sua idade é: ${r} anos, você é uma Criança!`
        } else if ( r >=13 && r <=17) {
            img.src = 'imagens/foto-jovem-m.png'
            msg.innerHTML = `Sua idade é: ${r} anos, você é um Jovem!`
        }else if ( r >= 18 && r <=65){
            img.src = 'imagens/foto-adulto-m.png'
            msg.innerHTML = `Sua idade é: ${r} anos, você é um Adulto!`
        }
        else {
            img.src = 'imagens/foto-idoso-m.png'
            msg.innerHTML = `Sua idade é: ${r} anos, você é um Idoso!`
        }
    } else if (radio[1].checked)
    {
        if (r <=12){
            img.src = 'imagens/foto-bebe-f.png'
            msg.innerHTML = `Sua idade é: ${r} anos, você é uma Criança!`
        } else if ( r >=13 && r <=17) {
            img.src = 'imagens/foto-jovem-f.png'
            msg.innerHTML = `Sua idade é: ${r} anos, você é um Jovem!`
        }else if ( r >= 18 && r <=65){
            img.src = 'imagens/foto-adulto-f.png'
            msg.innerHTML = `Sua idade é: ${r} anos, você é um Adulto!`
        }else {
            img.src = 'imagens/foto-idoso-f.png'
            msg.innerHTML = `Sua idade é: ${r} anos, você é um Velho!`
        }
    }
}
    
