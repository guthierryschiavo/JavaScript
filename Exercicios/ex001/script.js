function carregar (){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    if (hora >=0 && hora < 12 ){
        msg.innerHTML = `Bom Dia, agora são ${hora}horas.`;
        img.src = 'imagens/fotomanha.png';
        document.body.style.background = '#5CC8F2';

    } else if (hora >=12 && hora < 18){
        msg.innerHTML = `Boa Tarde, agora são ${hora}horas.`;
        img.src = 'imagens/fototarde.png';
        document.body.style.background = '#FFB237';

    } else {
        msg.innerHTML = `Boa Noite, agora são ${hora}horas.`;
        img.src = 'imagens/fotonoite.png';
        document.body.style.background = '#011826';
    }
}
