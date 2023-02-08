 let amigo ={ nome: 'jose',
 sexo: 'M',
 peso: 85.4,
 engordar(p=0){
    console.log('engordou')
    this.peso += p
 }
}

    amigo.engordar(2) // aqui adicionou o 2 em engordar. Já que p recebe zero, agora recebe 2.
    console.log(`Seu nome é ${amigo.nome} pesa ${amigo.peso}`)