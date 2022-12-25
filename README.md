
# Validação de senhas

Esse projeto tem como objetivo validar as senhas envidas pelos usuários segundo algumas regras pré estabelecidas.

## Estrutura do projeto

* Toda a lógica está no arquivo `verify.js` dentro da pasta `src/middleware`.
* A rota está no arquivo `verify.router.js` dentro de `src/router`, a rota é exportada para o arquivo `app.js` dentro de `src/` .
* O arquivo `server.js` é utilizado para rodar o servidor.

## Como rodar o projeto

* Para rodar esse projeto LOCALMENTE basta instalar as dependências com `npm install` e depois rodar no terminal `npm run dev` para rodar o modo de desenvolvimento ou `npm start `para rodar o modo de produção
* Para rodar o projeto com DOCKER primeiro você deve usar o `docker-compose up -d` para que o container suba e depois `docker exec -it password_validate bash`, após isso irá abrir um terminal dentro do container, instale as dependências com `npm install` e depois utilizar o `npm run dev` e pronto o projeto estará rodando
* IMPORTANTE o projeto utiliza a porta `8080` então antes de tentar rodar o projeto verifique se a porta está disponível.

## Regras de validação 

* Tamanho mínimo da senha 12 caracteres.
* Deve conter no mínimo 1 letra maiúscula.
* Deve conter np mínimo 8 letras minúsculas.
* Deve conter no mínimo 2 digitos numéricos.
* Deve conter no mínimo 1 caracter especial.


