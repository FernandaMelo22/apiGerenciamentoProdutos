# API de Gerenciamento de Produtos 🛍️📦

Este projeto foi criado para o gerenciamento de produtos, utilizando tecnologias como Node.js, Express, Sequelize, dotenv e MySQL. Ele é parte de uma atividade prática da disciplina de Programação Web II, ministrada pelo Professor [Érico Borgonove](), com o propósito de aprimorar habilidades práticas na criação e implementação de APIs RESTful.

## Configuração do Ambiente ⚙️

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. **Instalação de Dependências**
   - Certifique-se de ter o Node.js instalado na sua máquina.
   - Clone este repositório e execute o comando `npm install` para instalar todas as dependências listadas no `package.json`.

2. **Configuração do Banco de Dados**
   - Configure as variáveis de ambiente no arquivo `.env` com as credenciais do seu banco de dados MySQL:

     ```plaintext
     DB_HOST=localhost
     DB_USER=root
     DB_PASS=sua_senha
     DB_NAME=nome_do_banco
     ```

3. **Execução das Migrações**
   - Utilize o Sequelize CLI para executar as migrações e criar as tabelas no banco de dados:

     ```bash
     npx sequelize-cli db:migrate
     ```

4. **Execução do Servidor**
   - Inicie o servidor Node.js com o comando:

     ```bash
     node server.js
     ```

5. **Endpoints Disponíveis**
   - A API disponibiliza os seguintes endpoints:

     - **Categorias**:
       - `GET /api/categories`: Listar todas as categorias.
       - `POST /api/categories`: Criar uma nova categoria.
       - `PUT /api/categories/:id`: Atualizar uma categoria existente.
       - `DELETE /api/categories/:id`: Excluir uma categoria.

     - **Produtos**:
       - `GET /api/products`: Listar todos os produtos.
       - `POST /api/products`: Criar um novo produto.
       - `PUT /api/products/:id`: Atualizar um produto existente.
       - `DELETE /api/products/:id`: Excluir um produto.

## Exemplos de Uso

- **Criar uma nova categoria**:
  ```http
  POST /api/categories
  Content-Type: application/json

  {
    "name": "Eletrônicos"
  }
  ```

- **Atualizar um produto existente**:
  ```http
  PUT /api/products/1
  Content-Type: application/json

  {
    "name": "Smartphone",
    "price": 1999.99,
    "description": "Novo modelo de smartphone com câmera de alta resolução.",
    "categoryId": 1
  }
  ```

## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize 
- MySQL
- dotenv 

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
