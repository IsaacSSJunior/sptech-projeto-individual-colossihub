CREATE DATABASE colossihub;

USE colossihub;

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

	


CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR (45),
emailUsuario VARCHAR (90),
senhaUsuario VARCHAR (45)
);

DESCRIBE Usuario;

INSERT INTO Usuario (nomeUsuario, emailUsuario, senhaUsuario) VALUES 
	('Isaac Souza', 'isaacsouza@gmail.com', '123'),
    ('Diego Souza', 'diegosouza@gmail.com', '123'),
    ('Mateus Souza', 'Mateussouza@gmail.com', '123');
    
SELECT * FROM Usuario;

CREATE TABLE Topico (
idTopico INT PRIMARY KEY AUTO_INCREMENT,
tituloTopico VARCHAR (225),
descricaoTopico VARCHAR (900),
dataTopico timestamp,
topico_fkForum INT,
topico_fkUsuario INT,
CONSTRAINT FOREIGN KEY (Topico_fkForum) REFERENCES Forum(idForum),
CONSTRAINT FOREIGN KEY (Topico_fkUsuario) REFERENCES Usuario(idUsuario)
);

DESCRIBE Topico;

INSERT INTO Topico (tituloTopico, descricaoTopico, dataTopico, topico_fkForum, topico_fkUsuario) VALUES 
	('Como subir no jardim final do jogo com pouca Stamina?', 'Tem como subir tudo com pouca stamina?', current_timestamp(), 1, 1),
	('Stamina cresce como??', 'Vi em vídeos que a barra de Stamina consegue crescer.', current_timestamp(), 1, 1),
	('Por que "Mono"?', 'Qual verdadeiro nome da amada do Wander ksks', current_timestamp(), 2, 2),
	('Qual ligação de ICO com SOTC?', 'SOTC vem primeiro, ou é o ICO?', current_timestamp(), 2, 2),
	('Ueda vai lanças novo Game?(:', 'Qual vai ser o nome do game?, vai lançar quando???', current_timestamp(),3,3),
    ('Ligação de Ueda & Miyazaki', 'DKS foi inspirado em SOTC, qual ligação dos diretores?', current_timestamp(),3,3);
    
SELECT * FROM Topico;


CREATE TABLE Comentario (
idComentario INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR (225),
dataComentario timestamp,
comentario_fkTopico INT,
comentario_fkusuario INT,
comentario_fkForum INT, 
CONSTRAINT FOREIGN KEY (comentario_fkForum) REFERENCES Forum(idForum),
CONSTRAINT FOREIGN KEY (comentario_fkTopico) REFERENCES Topico(idTopico),
CONSTRAINT FOREIGN KEY (comentario_fkUsuario) REFERENCES Usuario(idUsuario)
);


DESCRIBE Comentario;

INSERT INTO Comentario (descricao, dataComentario, comentario_fkForum, comentario_fktopico, comentario_fkusuario) VALUES 
	('Até onde eu sei, é possível subir com a barra baixa mn, tem uns vídeo na internet, tenta por lá', current_timestamp(),1,1,3),
    ('Não sei mt bem, mas tlgd que ICO vem antes ksksk', current_timestamp(),2,4,1),
    ('Vaii mn, olha aqui: https://www.tecmundo.com.br/voxel/257621-fumito-ueda-ico-last-guardian-anunciara-novo-jogo-2023.htm', current_timestamp(),3,5,2);
	
SELECT * FROM Comentario;











