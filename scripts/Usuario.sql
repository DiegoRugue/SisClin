CREATE OR REPLACE FUNCTION SP_CadastrarUsuario(
    pNome varchar(100), 
    pEmail varchar(100), 
    pSenha varchar(100)
)
/*
	Documentação
	Arquivo Fonte.....: Usuario.sql
	Objetivo..........: Cadastrar um novo usuario
	Autor.............: Diego Rugue
 	Data..............: 01/08/2019
	Ex................: SELECT SP_CadastrarUsuario('Zezino', 'zezin@teste.com', '1234')
	Retornos..........: 0 - Processamento OK
						1 - Email já cadastrado
*/
RETURNS INTEGER AS $$
     BEGIN
            -- VERIFICA SE O EMAIL JA ESTA CADASTRADO
			IF ((SELECT COUNT(*) FROM Usuario WHERE (Email = pEmail)) > 0) 
				THEN RETURN 1; 
			END IF;
			
            INSERT INTO Usuario(Nome, Email, Senha) VALUES (pNome, pEmail, pSenha);

            RETURN 0;

	END;
	
$$ LANGUAGE 'plpgsql';



CREATE OR REPLACE FUNCTION SP_ListarUsuarios()
/*
	Documentação
	Arquivo Fonte.....: Usuario.sql
	Objetivo..........: Listar todos os usuarios
	Autor.............: Diego Rugue
 	Data..............: 01/08/2019
	Ex................: SELECT * FROM SP_ListarUsuarios()
*/
RETURNS TABLE(
	"Id"     Usuario.Id%TYPE,
    "Nome"   Usuario.Nome%TYPE, 
    "Email"  Usuario.Email%TYPE
) AS $$
     BEGIN

        RETURN QUERY 
            SELECT u.Id, u.Nome, u.Email 
            FROM Usuario AS u;

	END;
	
$$ LANGUAGE 'plpgsql';



CREATE OR REPLACE FUNCTION SP_BuscarUsuario(pId integer)
/*
	Documentação
	Arquivo Fonte.....: Usuario.sql
	Objetivo..........: Buscar um usuario por id
	Autor.............: Diego Rugue
 	Data..............: 01/08/2019
	Ex................: SELECT * FROM SP_BuscarUsuario(1)
*/
RETURNS TABLE(
	"Id"     Usuario.Id%TYPE,
    "Nome"   Usuario.Nome%TYPE, 
    "Email"  Usuario.Email%TYPE
) AS $$
     BEGIN

        RETURN QUERY 
			SELECT u.Id, u.Nome, u.Email 
			FROM Usuario AS u
			WHERE pId = u.Id;

	END;
	
$$ LANGUAGE 'plpgsql';


CREATE OR REPLACE FUNCTION SP_AtualizarUsuario(
	pId integer, 
    pNome varchar(100), 
    pEmail varchar(100), 
    pSenha varchar(100)
)
/*
	Documentação
	Arquivo Fonte.....: Usuario.sql
	Objetivo..........: Atualizar um usuario
	Autor.............: Diego Rugue
 	Data..............: 01/08/2019
	Ex................: SELECT SP_AtualizarUsuario(2, 'teste', 'gg@teste.com', '356')
	Retornos..........: 0 - Processamento OK
						1 - Email já cadastrado
*/
RETURNS INTEGER AS $$
     BEGIN
            -- VERIFICA SE O EMAIL JA ESTA CADASTRADO
			IF ((SELECT COUNT(*) 
				 FROM Usuario AS u
				 WHERE (Email = pEmail AND pId <> u.Id)) > 0) 
					THEN RETURN 1; 
			END IF;
			
            UPDATE Usuario
				SET Nome = pNome,
					Email = pEmail,
					Senha = pSenha
				WHERE pId = Id;

            RETURN 0;
            
	END;
	
$$ LANGUAGE 'plpgsql';


CREATE OR REPLACE FUNCTION SP_ExcluirUsuario(pId integer)
/*
	Documentação
	Arquivo Fonte.....: Usuario.sql
	Objetivo..........: Excluir um usuario
	Autor.............: Diego Rugue
 	Data..............: 01/08/2019
	Ex................: SELECT SP_ExcluirUsuario(2)
*/
RETURNS INTEGER AS $$
	BEGIN
		
		DELETE FROM Usuario Where Id = pId;
		
		RETURN 0;
		
	END;

$$ LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION SP_BuscarUsuarioPorEmail(pEmail Usuario.Email%TYPE)
/*
	Documentação
	Arquivo Fonte.....: Usuario.sql
	Objetivo..........: Buscar um usuario por email
	Autor.............: Diego Rugue
 	Data..............: 18/08/2019
	Ex................: SELECT * FROM SP_BuscarUsuarioPorEmail(teste)
*/
RETURNS TABLE(
	"Id"     Usuario.Id%TYPE,
    "Nome"   Usuario.Nome%TYPE, 
    "Email"  Usuario.Email%TYPE,
	"Senha"  Usuario.Senha%TYPE
) AS $$
     BEGIN

        RETURN QUERY 
			SELECT u.Id, u.Nome, u.Email, u.Senha
			FROM Usuario AS u
			WHERE pEmail = u.Email;

	END;
	
$$ LANGUAGE 'plpgsql';


