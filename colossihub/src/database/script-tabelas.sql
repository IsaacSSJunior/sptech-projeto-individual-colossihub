CREATE DATABASE colossihub;

USE colossihub;

CREATE TABLE TbForum (
idForum INT PRIMARY KEY AUTO_INCREMENT,
nomeForum VARCHAR (45),
descricaoForum VARCHAR (90),
imagemForum VARCHAR (225)
);

DESCRIBE TbForum;

INSERT INTO TbForum (nomeForum,descricaoForum,imagemForum) VALUES 
	('Guias & Dicas', 'Macetes sensacionais para quem joga SOTC.', './assets/img/"'),
    ('Teorias sobre SOTC', 'Teorias da comunidade de SOTC', './assets/img/"');

SELECT * FROM TbForum;


CREATE TABLE TbUsuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR (45),
emailUsuario VARCHAR (90),
senhaUsuario VARCHAR (45)
);

DESCRIBE TbUsuario;

INSERT INTO TbUsuario (nomeUsuario, emailUsuario, senhaUsuario) VALUES 
	('Isaac Souza', 'isaac.SSJ@gmail.com', '123'),
    ('Mateus Souza', 'Mateus.SS@gmail.com', '321');
    
SELECT * FROM TbUsuario;



CREATE TABLE TbTopico (
idTopico INT,
TbTopico_fkForum INT,
TbTopico_fkUsuario INT,
PRIMARY KEY (idTopico, TbTopico_fkForum, TbTopico_fkUsuario),
tituloTopico VARCHAR (45),
decricaoTopico VARCHAR (900),
dataComentario timestamp,
CONSTRAINT Topico_fkForum FOREIGN KEY (TbTopico_fkForum) REFERENCES TbForum(idForum),
CONSTRAINT Topico_fkUsuario FOREIGN KEY (TbTopico_fkUsuario) REFERENCES TbUsuario(idUsuario)
);

DESCRIBE TbTopico;

INSERT INTO TbTopico VALUES 
	(1 , 1, 1, 'Como Passar do Malus?', 'Estou a 1 semana passar, mas morro direto...', current_timestamp()),
    (2 , 2 , 2, 'Quem é a Mono?', 'Seria ela, realmente o amor de Wander, ou uma parente?', current_timestamp());
    
SELECT * FROM TbTopico;



CREATE TABLE TbComentario (
idComentario INT,
TbComentario_fkUsuario_Criador INT, 
TbComentario_fkForum INT,
TbComentario_fkTopico INT, 
TbComentario_fkUsuario_Topico INT, 
PRIMARY KEY (idComentario, TbComentario_fkUsuario_Criador, TbComentario_fkForum, TbComentario_fkTopico, TbComentario_fkUsuario_Topico ),
descricao VARCHAR (225),
dataComentario timestamp,
CONSTRAINT Comentario_fkUsuario_Criador FOREIGN KEY (TbComentario_fkUsuario_Criador) REFERENCES TbUsuario(idUsuario),
CONSTRAINT Comentario_fkForum FOREIGN KEY (TbComentario_fkForum) REFERENCES TbForum(idForum),
CONSTRAINT Comentario_fkTopico FOREIGN KEY (TbComentario_fkTopico) REFERENCES TbTopico(idTopico),
CONSTRAINT Comentario_fkUsuario_Topico FOREIGN KEY (TbComentario_fkUsuario_Topico) REFERENCES TbTopico(TbTopico_fkUsuario)
);

DESCRIBE TbComentario;

INSERT INTO TbComentario VALUES 
	(1 , 1 , 1, 1, 2, 'Utiliza a estrategia do RyanRed, ele joga pra krl', current_timestamp()),
    (2 , 2 , 1, 1, 1,  'VLW mn, fui lá pesquisar, consigui passar ksksks', current_timestamp()),
    (3 , 2 , 1, 1, 2, 'Muito foda ele man, passa o link de outros cara aí dps', current_timestamp());
	
SELECT * FROM TbComentario;











