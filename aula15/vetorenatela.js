let valores = [8, 1, 7 ,4 ,2 ,9]
console.log(valores)
/*
for (let pos=0; pos< valores.length; pos++){
    console.log(`Os valores dentro da array são:${pos} e os elementos são:${valores[pos]}`)
}
*/

for ( let pos in valores){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
} //Forma mais pratica para fazer o mesmo esquema a cima.