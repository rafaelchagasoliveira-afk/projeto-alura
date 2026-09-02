const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado() {
        // Se o botão clicado for o do tema escuro, não faz nada aqui
        if (botao.classList.contains("btn-tema-escuro")) return;

        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (texto) {
            if (curtiu === false) {
                texto.textContent++;
                curtiu = true;
            } else {
                texto.textContent--;
                curtiu = false;
            }
        }
    }
});

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

if (btnTemaEscuro) {
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
