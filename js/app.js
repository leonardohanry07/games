function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao  = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

     if (imagem.classList.contains('dashboard__item__img--rented')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = "Alugar";
        imagem.classList.remove('dashboard__item__img--rented');
         
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.innerHTML = "Devolver";
        botao.classList.add('dashboard__item__button--return');
    }
} 
