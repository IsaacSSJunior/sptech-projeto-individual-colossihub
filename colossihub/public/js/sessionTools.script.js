function validarSessao() {
    var id = sessionStorage.ID_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (id == null && email == null && nome == null) {
        window.location = "../index.html"
        return false
    }
    return true
}

function validarSessaoAcessos() {
    var id = sessionStorage.ID_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (id != null && email != null && nome != null) {
        window.location = "../index.html"
        return false
    }

    return true
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

function ConfiguracaoLayoutPostarTopicos() {
    var divPostarTopico = document.getElementById('div_postarTopico')
    var id = sessionStorage.ID_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (id != null && email != null && nome != null) {
        divPostarTopico.innerHTML = `<div class="sectionForums__titlePostTopic" id="div_titulo_novo_topico"></div>
        <form  class="sectionForums__form" id="form_postagem" method="post" onsubmit="return PostaTopico()">
            <div class="sectionForums__boxForm">
                <span class="sectionForums__spanForm">Título:</span>
                <input name="titulo" id="titulo" maxlength="100" type="text" class="sectionForums__formInput" placeholder="Digite o título do tópico...">
            </div>
            <div class="sectionForums__boxForm">
                <span class="sectionForums__spanForm">Corpo:</span>
                <textarea name="descricao" id="textarea_descricao" maxlength="900" rows="5" class="sectionForums__formTextArea" placeholder="Digite a descrição do tópico..."></textarea>
            </div>
            <div class="sectionForums__btnsForm">
                <button class="sectionForums__btnSubmit btn--basis--form">Enviar</button>
                <input class="sectionForums__btnReset btn--basis--form" type="reset" value="Limpar">
            </div>
        </form>`
    }else{
        divPostarTopico.innerHTML = `<div class="sectionForums_notPostTopic">Realize seu <a href="./acessar.html">Acesso</a>
       para postar tópicos...</div>`
    }
}

function ConfiguracaoLayoutPostarComentarios() {
    var divPostarTopico = document.getElementById('div_postar_comentario')
    var id = sessionStorage.ID_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (id != null && email != null && nome != null) {
        divPostarTopico.innerHTML = `
        <form  class="sectionForums__form" id="form_postagem" method="post" onsubmit="return PostaTopico()" style="padding: 10px 15px;border-left: 1px dashed var(--hover-white-dark);
        border-right: 1px dashed var(--hover-white-dark);>
            <div class="sectionForums__boxForm">
                <span class="sectionForums__spanForm">Comentar como ${nome}:</span>
                <textarea name="descricao" id="textarea_descricao" maxlength="900" rows="5" class="sectionForums__formTextArea" placeholder="Digite a descrição do comentário..."></textarea>
            </div>
            <div class="sectionForums__btnsForm" style="padding: 0;">
                <button class="sectionForums__btnSubmit btn--basis--form">Enviar</button>
                <input class="sectionForums__btnReset btn--basis--form" type="reset" value="Limpar">
            </div>
        </form>`
    }else{
        divPostarTopico.innerHTML = `<div class="sectionForums_notPostTopic">Realize seu <a href="./acessar.html">Acesso</a>
       para postar comentários...</div>`
    }
}

