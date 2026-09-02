const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
});

// Apenas a parte do tema escuro abaixo:

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

if (btnTemaEscuro) { // Verifica se o botão realmente existe na página antes de ouvir o clique
    btnTemaEscuro.addEventListener("click", mudaTema);
}

function mudaTema() {
    const corpoPagina = document.body;
    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}
