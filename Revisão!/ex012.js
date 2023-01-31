var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)

if (hora < 12){
    console.log(`Bom dia, são ${hora} horas.`)
} else if (hora >= 12 && hora <= 18) {
    console.log(`Boa Tarde, são ${hora} horas.`)
} else {
    console.log(`Boa Noite, são ${hora} horas.`)
}