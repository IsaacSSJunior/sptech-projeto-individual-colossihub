var usuarioModel = require("../models/usuariosModel.script");
var historicoAcessoModel = require("../models/historicoAcessoModel.script");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)

            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length == 1) {

                    historicoAcessoModel.listar(resultadoAutenticar[0].idUsuario)

                        .then(function (resultadoHistorico) {
                            console.log(`\nResultados encontrados historico acesso: ${resultadoHistorico.length}`);
                            console.log(`Resultados: ${JSON.stringify(resultadoHistorico)}`); // transforma JSON em String

                            if (resultadoHistorico.length == 0) {

                                historicoAcessoModel.inserir(resultadoAutenticar[0].idUsuario, resultadoAutenticar[0].nomeUsuario)

                                    .then(function (resultadoInserirHistorico) {
                                        console.log(`\nInserção historico acesso: ${resultadoInserirHistorico.length}`);
                                        console.log(`Inserção: ${JSON.stringify(resultadoInserirHistorico)}`); // transforma JSON em String

                            })

                                    res.json({
                                        id: resultadoAutenticar[0].idUsuario,
                                        email: resultadoAutenticar[0].emailUsuario,
                                        nome: resultadoAutenticar[0].nomeUsuario,
                                        senha: resultadoAutenticar[0].senhaUsuario,
                                    });

                            } else {
                                res.json({
                                    id: resultadoAutenticar[0].idUsuario,
                                    email: resultadoAutenticar[0].emailUsuario,
                                    nome: resultadoAutenticar[0].nomeUsuario,
                                    senha: resultadoAutenticar[0].senhaUsuario,
                                });
                            }
                        }
                        )




                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Registros duplicados, acesso negado.");
                }
            }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    // Faça as validações dos valores

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)

            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )

            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarEnvolvimento(req,res){
    usuarioModel.listarEnvolvimento().then((resultado) => {
        res.status(200).json(resultado);
        console.log(resultado)
      });
}



module.exports = {
    autenticar,
    cadastrar,
    listarEnvolvimento,
}