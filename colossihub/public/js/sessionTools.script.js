function validarSessao() {
    var id = sessionStorage.ID_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (id == null && email == null && nome == null) {
        window.location = "../index.html"
    }
}

function validarSessaoAcessos() {
    var id = sessionStorage.ID_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (id != null && email != null && nome != null) {
        window.location = "../index.html"
    }
}


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

function ConfiguracaoLayoutBtnsCabecalho() {
    var ulSessao = document.getElementById('ul_sessao')
    var id = sessionStorage.ID_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (id != null && email != null && nome != null) {
        ulSessao.innerHTML = `<li class="header__containerNameSession">
                    @${nome}
                </li>
                <li class="header__ContainerProfile">
                    <button class="header__btnProfile btns--header" type="button" onClick="limparSessao()">
                        <div class="header__containerFaUser">
                        <i class="fa-solid fa-arrow-right-from-bracket" style="color: var(--white)"></i>
                        </div>
                    </button>
                </li>`
    }else{
        ulSessao.innerHTML = `<li>
        <a href="acessar.html">
          <button class="header_btnSignIn btns--header header--box--btns" type="button">Acessar</button>
        </a>
      </li>
      <li>
        <a href="cadastrar.html">
          <button class="header_btnSignUp btns--header header--box--btns" type="button">Cadastrar</button>
        </a>
      </li>`
    }
}

