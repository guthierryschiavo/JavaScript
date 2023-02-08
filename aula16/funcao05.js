// RECURSIVIDADE

function fatorial(n) {
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1) // fazendo a chamada dentro da condição.
    }
}

console.log(fatorial(5))