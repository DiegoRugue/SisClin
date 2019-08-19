CREATE OR REPLACE FUNCTION SP_Login(
    pEmail Usuario.Email%TYPE, 
    pSenha Usuario.Senha%TYPE
)
/*
	Documentação
	Arquivo Fonte.....: Login.sql
	Objetivo..........: Efetuar login no sistema
	Autor.............: Diego Rugue
 	Data..............: 16/08/2019
	Ex................: SELECT SP_Login('teste','1234')
	Retornos..........: 0 - Processamento OK
						1 - Combinação de email e senha inválido
*/
RETURNS INTEGER AS $$
    BEGIN
    	-- VERIFICA COMBINAÇÃO DE EMAIL E SENHA
		IF ((SELECT COUNT(*) FROM Usuario WHERE (Email = pEmail AND Senha = pSenha)) > 0) 
			THEN RETURN 0; 
		END IF;

        RETURN 1;

	END;
	
$$ LANGUAGE 'plpgsql';
