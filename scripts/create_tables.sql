CREATE TABLE Usuario(
	Id serial PRIMARY KEY,
	Nome varchar(100) NOT NULL,
	Email varchar(100) UNIQUE NOT NULL,
	Senha varchar(100) NOT NULL
);