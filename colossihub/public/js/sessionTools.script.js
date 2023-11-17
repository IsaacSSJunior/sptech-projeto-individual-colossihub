function limparSessao() {
     sessionStorage.clear();
     window.location = "../index.html";
 }


function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style = "display: none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style = "display: flex";
        divErrosLogin.innerHTML = texto;
    }
}

