// Ao clicar no sol vai alterar para o modo escuro e muda o logo para lua
//Clicando novamente volta para o tema claro e muda o logo para o sol
//fazendo isso no javaScript

const botaoAlterarTema = document.getElementById('botao-alterar-tema')

const body = document.querySelector('body')
const imagemBotaoTrocaDeTema = document.querySelector('.imagem-botao')

botaoAlterarTema.addEventListener('click', () => {
    //verificar se o modo escuro está ativo
    const modoEscuroEstaAtivo = body.classList.contains('modo-escuro')

    if (modoEscuroEstaAtivo) {
        body.classList.remove('modo-escuro')
        imagemBotaoTrocaDeTema.setAttribute('src', './src/imagens/sun.png')

    } else {

        body.classList.add('modo-escuro');
        imagemBotaoTrocaDeTema.setAttribute('src', './src/imagens/moon.png')
    }
});
