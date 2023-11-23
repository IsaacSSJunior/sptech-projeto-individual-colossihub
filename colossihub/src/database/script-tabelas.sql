CREATE DATABASE colossihub;

USE colossihub;



-- drop database colossihub;

CREATE TABLE Forum (
idForum INT PRIMARY KEY AUTO_INCREMENT,
nomeForum VARCHAR (90),
descricaoForum VARCHAR (225),
imagemForum VARCHAR (225)
);

DESCRIBE Forum;

INSERT INTO Forum (nomeForum,descricaoForum,imagemForum) VALUES 
	('Guild Game: Guias & Dicas', 'Troque glitches, segredos & estratégias em batalhas para o BTG e Speedrun’s .', 'https://hdqwalls.com/wallpapers/shadow-of-the-colossus-8k-ao.jpg'),
    ('Lore & Theory: História & Teorias', 'Mergulhe na lore - história de SOTC, desvende segredos escondidos & compartilhe suas teorias e narrativas.', 'https://images2.alphacoders.com/429/4290.jpg'),
    ('News: Notícias, Atualizações & Curiosidades', 'Informe-se sobre notícias e atualizações relacionadas a Shadow of the Colossus e à equipe de desenvolvimento.', 'https://wallpapercave.com/wp/wp10371371.jpg');


SELECT nomeUsuario, COUNT(distinct idTopico) AS numeroTopicos, COUNT(distinct idComentario) AS numeroComentarios FROM Usuario JOIN Topico ON idUsuario = topico_fkUsuario LEFT JOIN Comentario ON idUsuario = comentario_fkUsuario
	GROUP BY nomeUsuario ORDER BY numeroTopicos DESC, numeroComentarios DESC LIMIT 5;
    
SELECT nomeUsuarioHistoricoAcesso AS nomeUsuario FROM HistoricoAcesso ORDER BY idHistoricoAcesso DESC LIMIT 1;


CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR (45),
emailUsuario VARCHAR (90),
senhaUsuario VARCHAR (45)
);

DESCRIBE Usuario;

INSERT INTO Usuario (nomeUsuario, emailUsuario, senhaUsuario) VALUES 
	('zakdubail3_', 'zkdubail3@gmail.com', '123'),
    ('dieguin__', 'dieguins@gmail.com', '123'),
    ('TeusSouzaaa', 'Teusouzaa@gmail.com', '123'),
    ('GamerLord88', 'gamerlord88@email.com', '123'),
    ('ShadowNinjaX', 'shadowninjax@email.com', '123'),
    ('WarriorMage76', 'warriormage76@email.com', '123'),
    ('CJdubail3', 'cjdubail3@email.com', '123'),
    ('LordSykera<3', 'lordsykera@email.com', '123'),
    ('DarkSlayer99', 'darkslayer99@email.com', '123'),
    ('PixelGunner12', 'pixelgunner12@email.com', '123'),
    ('Rafaa_Santuss', 'rafaa.santuss@email.com', '123'),
    ('LucaG31', 'lucag31@email.com', '123'),
    ('BeaC0osta', 'beac0osta@email.com', '123'),
    ('CyberPilot2020', 'cyberpilot2020@email.com', '123'),
    ('NovaGamerElite', 'novagamerelite@email.com', '123'),
    ('Fernando_Rocha', 'fernando.rocha@email.com', '123'),
    ('NovaGamerGirl', 'novagamergirl@email.com', '123'),
    ('DiegoGamerX', 'diegogamerx@email.com', '123'),
    ('Camila_Carvalho', 'camila.carvalho@email.com', '123'),
    ('Thiago_Melo', 'thiago.melo@email.com', '123');


SELECT * FROM Usuario;

CREATE TABLE HistoricoAcesso(
idHistoricoAcesso INT PRIMARY KEY AUTO_INCREMENT,
dataHistoricoAcesso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
nomeUsuarioHistoricoAcesso VARCHAR (45),
HistoricoAcesso_fkUsuario INT,
CONSTRAINT FOREIGN KEY (HistoricoAcesso_fkUsuario) REFERENCES Usuario(idUsuario)
); 

DESCRIBE HistoricoAcesso;


INSERT INTO HistoricoAcesso (nomeUsuarioHistoricoAcesso, HistoricoAcesso_fkUsuario) VALUES 
	('zakdubail3_', 1),
    ('dieguin__', 2),
    ('TeusSouzaaa', 3),
    ('GamerLord88', 4),
    ('ShadowNinjaX', 5),
    ('WarriorMage76', 6),
    ('CJdubail3', 7),
    ('LordSykera<3', 8),
    ('DarkSlayer99', 9),
    ('PixelGunner12', 10),
    ('Rafaa_Santuss', 11),
    ('LucaG31', 12),
    ('BeaC0osta', 13),
    ('CyberPilot2020', 14),
    ('NovaGamerElite', 15),
    ('Fernando_Rocha', 16),
    ('NovaGamerGirl',17),
    ('DiegoGamerX', 18),
    ('Camila_Carvalho', 19),
    ('Thiago_Melo', 20);

SELECT * FROM HistoricoAcesso;


CREATE TABLE Topico (
idTopico INT PRIMARY KEY AUTO_INCREMENT,
tituloTopico VARCHAR (225),
descricaoTopico VARCHAR (900),
dataTopico TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
topico_fkForum INT,
topico_fkUsuario INT,
CONSTRAINT FOREIGN KEY (Topico_fkForum) REFERENCES Forum(idForum),
CONSTRAINT FOREIGN KEY (Topico_fkUsuario) REFERENCES Usuario(idUsuario)
);

DESCRIBE Topico;

INSERT INTO Topico (tituloTopico, descricaoTopico, topico_fkForum, topico_fkUsuario) VALUES 
	-- Fórum 1: Guild Game: Guias & Dicas 
	('Como subir no terceiro ponto vital do Malus?', 'Fica mt difícil pular pra subir no terceiro, tem um timing?', 1, 3),
	('Como andar rápido com a Agro?', 'Qual comando pra cavalgar mais rápido (tô no PC)', 1, 2),
	('Como recuperar save game? no PC?', 'Onde fica salvo o save no PC?', 1,7),
    ('Timing do glitch do lago - Pelagia', 'Qual tempo certin pro glicth no lago do Pelagia', 1,4),
    ('Bug na fase do lago', 'Alguém mais encontrou problemas nesta fase? Será que é do console? Tô com PS4', 1, 1),
    ('Quais requisitos pra speedrun de SOTC no PS4?', 'Álguém sabe as regras no PS4 pra speedrun?', 1, 10),
    ('Como subir no jardim final do jogo com pouca Stamina?', 'Tem como subir tudo com pouca stamina?',  1, 11),
    ('Stamina cresce como??', 'Vi em vídeos que a barra de Stamina consegue crescer.', 1, 11),
	
    -- Fórum 2: Lore & Theory: História & Teorias 
	('Por que "Mono"?', 'Qual verdadeiro nome da amada do Wander ksks', 2, 5),
	('Qual ligação de ICO com SOTC?', 'SOTC vem primeiro, ou é o ICO?', 2, 2),
	('Descobertas recentes', 'Qual vai ser o nome do game?, vai lançar quando???', 2,7),
	('Concept-art do Phalax', 'Tem umas figuras bem estranhas no corpo da concept-art do Phalax, oq seria?.', 2, 1),
	('Conexões entre os símbolos nas esculturas do Malus', 'Alguém notou algum padrão ou conexão entre os símbolos no monumento dos MALUS?', 2, 13),
    ('Significado do símbolo do Colosso de Fogo', 'O que vocês acham que representa o símbolo gravado na testa do Colosso de Fogo?', 2, 19),
    ('Teorias sobre a origem da espada de Wander', 'Há alguma teoria sobre a origem e significado da espada de Wander?', 2, 20),
    ('Final ambíguo', 'A interpretação sobre o desfecho do jogo era era ser tão extensa?', 2, 18),
    ('Influências literárias e mitológicas', 'Quais influências literárias ou mitológicas vocês identificaram na história de Wander?', 2, 1),
    ('Segredos no mapa de SOTC', 'Há alguma área secreta ACESSÍVEL sem mods?', 2, 10),
    ('Significado das pinturas encontradas no templo', 'Qual é o significado por trás das pinturas antigas encontradas no templo?', 2, 4),
    ('Mono: A importância da personagem', 'O papel e a importância de Mono na jornada de Wander é intencional?', 2, 6),
    
     -- Fórum 3: News: Notícias, Atualizações & Curiosidades 
    ('Teorias sobre o próximo lançamento', 'Compartilhe suas teorias sobre o que esperar do próximo jogo de UEDA', 3, 4),
    ('Expectativas para a sequência', 'Não acredito que tem joguin novo aí, amo titio UEDA ksks', 2, 5),
    ('Novidades sobre a sequência', 'Rumores ou notícias confirmadas? UEDA tem game no forno!?', 3, 7),
    ('Descobertas recentes', 'Informações sobre as últimas descobertas e novidades do novo jogo?', 3, 8),
	('Conceitos e ideias para o próximo lançamento', 'Como acham que vai ser o novo game?', 3, 6),
    ('Análise de pistas e teasers', 'Vamos analisar pistas e teasers divulgados sobre o próximo jogo de UEDA rpzd', 3, 10),
    ('Possíveis influências e inspirações', 'Discussão sobre possíveis influências e inspirações para o próximo jogo de UEDA.', 3, 12),
    ('Especulações sobre o enredo', 'Teorias sobre o enredo do novo jogo.', 3, 14),
    ('Mecânicas de jogo do novo game', 'Ideias de mecânicas e gameplay no próximo título.', 3, 18);

SELECT * FROM Topico;


CREATE TABLE Comentario (
idComentario INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR (225),
dataComentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
comentario_fkTopico INT,
comentario_fkusuario INT,
comentario_fkForum INT, 
CONSTRAINT FOREIGN KEY (comentario_fkForum) REFERENCES Forum(idForum),
CONSTRAINT FOREIGN KEY (comentario_fkTopico) REFERENCES Topico(idTopico),
CONSTRAINT FOREIGN KEY (comentario_fkUsuario) REFERENCES Usuario(idUsuario)
);


DESCRIBE Comentario;

INSERT INTO Comentario (descricao, comentario_fkForum, comentario_fktopico, comentario_fkusuario) VALUES 
    ('Acho que é possível, mas requer um timing preciso. Procure vídeos de speedrunners, eles podem ajudar.', 1, 4, 5), 
    ('No PC, para galopar mais rápido, tente pressionar a tecla Shift repetidamente.', 1, 2, 11),
    ('No PC, geralmente, o local padrão para salvar é na pasta do jogo. Verifique em Meus Documentos ou na pasta de instalação do jogo.', 1, 3, 16),
    ('O glitch no lago de Pelagia geralmente requer timing preciso durante o mergulho. Pesquise vídeos específicos para uma referência visual.', 1, 4, 9),
    ('Estou no PS4 e também encontrei problemas nessa fase. Alguém tem alguma solução?', 1, 5, 13),
    ('Recomendo verificar as regras de speedrun em comunidades online especializadas.', 1, 6, 19),
    ('Há várias estratégias diferentes, mas poupar stamina é essencial para subir no jardim final.', 1, 7, 14),
    ('A barra de Stamina pode ser aumentada ao derrotar Colossos e coletar frutos de Stamina.', 1, 8, 17),
    ('Acredito que o nome "Mono" é uma referência ao termo grego para "um" ou "único".', 2, 9, 8),
    ('ICO é considerado o primeiro jogo do que ficou conhecido como "trilogia espiritual" de UEDA, precedendo SOTC e The Last Guardian.', 2, 10, 3),
    ('Ainda não temos informações concretas, mas os rumores apontam para um lançamento em breve.', 2, 21, 12),
    ('Acredito que as figuras estranhas sejam elementos de design, possivelmente relacionados à criatura.', 2, 14, 7),
    ('Há algumas teorias sugerindo conexões simbólicas, mas nada confirmado.', 2, 13, 16),
    ('Alguns sugerem que pode representar o poder e a natureza volátil do Colosso.', 2, 19, 18),
    ('Há teorias, mas nada confirmado sobre a origem da espada ou seu significado.', 2, 15, 20),
    ('A interpretação do final varia, mas UEDA é conhecido por deixar finais abertos à interpretação.', 2, 16, 15),
    ('ICO e SOTC são conhecidos por suas influências literárias e mitológicas, como o mito de Ícaro.', 2, 27, 2),
    ('Existem áreas secretas no jogo acessíveis sem mods. Procure por guias de exploração.', 2, 18, 10),
    ('As pinturas possuem significados variados, muitos acreditam que representem a história do jogo.', 2, 19, 6),
    ('Mono é um personagem central e essencial para a jornada de Wander, sua importância é indiscutível.', 2, 9, 9),
    ('Acredito que teremos algumas novidades em breve. UEDA costuma deixar pistas nos trailers.', 3, 23, 5),
    ('Amo o trabalho de UEDA! Estou ansioso para ver o que ele trará desta vez.', 3, 21, 14),
    ('As últimas notícias sugerem um novo jogo no horizonte, mal posso esperar para saber mais!', 3, 23, 18),
    ('Fique de olho nos perfis sociais de UEDA, sempre surge coisas lá', 3,23, 11),
    ('Espero que o novo jogo tenha mecânicas inovadoras e uma história cativante.', 3, 29, 20),
    ('A análise de pistas pode revelar muito sobre a direção que UEDA está tomando.', 3, 26, 3),
    ('É interessante especular sobre as influências por trás do trabalho de UEDA.', 3, 27, 16),
    ('A história é um dos pontos fortes de UEDA, estou curioso para ver suas novas criações.', 3, 28, 9),
    ('Espero que UEDA mantenha a tradição de mecânicas de jogo únicas e envolventes.', 3, 29, 19);

	
SELECT * FROM Comentario;

SELECT idTopico, tituloTopico, COUNT(idComentario) AS totalComentarios, nomeUsuario, dataTopico 
FROM Topico 
JOIN Usuario  ON idUsuario = topico_fkUsuario 
LEFT JOIN Comentario ON comentario_fkTopico = idTopico
WHERE topico_fkForum = 1
GROUP BY idTopico, nomeUsuario, dataTopico, tituloTopico;

SELECT T.idTopico, T.tituloTopico, COALESCE(C.totalComentarios, 0) AS totalComentarios, U.nomeUsuario, T.dataTopico
FROM Topico T
JOIN Usuario U ON U.idUsuario = T.topico_fkUsuario
LEFT JOIN (
    SELECT comentario_fkTopico, COUNT(idComentario) AS totalComentarios
    FROM Comentario
    GROUP BY comentario_fkTopico
) C ON C.comentario_fkTopico = T.idTopico
WHERE T.topico_fkForum = 2
ORDER BY T.idTopico;

SELECT COUNT(*) AS total_comentarios
FROM Comentario
WHERE comentario_fkForum = 2;

