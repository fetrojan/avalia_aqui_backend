# 🧠 Avalia Aqui - Backend

Este é o backend do projeto **[Avalia Aqui](https://github.com/fetrojan/avalia_aqui)**, uma plataforma onde usuários podem avaliar produtos de forma simples e intuitiva. A API fornece os dados dos produtos e recebe avaliações enviadas pelo app frontend, permitindo uma experiência completa de feedback.

## 🚀 Tecnologias utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **PostgreSQL**
- **Knex.js**
- **dotenv** 

## 🔧 Como rodar o projeto localmente

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e rodando
- Um banco de dados criado com o nome `avalia-aqui`

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/fetrojan/avalia-aqui-backend.git
cd avalia-aqui-backend
```
2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo .env:

Crie um arquivo .env na raiz do projeto e preencha com suas informações:

```bash
DB_HOST=seu_ip
DB_PORT=porta_do_banco_de_dados
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=avalia-aqui
PORT=3000
```

4. Rode as migrations:

```bash
npm run migration:run
```

5. Inicie o servidor:

```bash
npm start
```

## 📲 Projeto Frontend

Este backend é utilizado em conjunto com o app mobile React Native:
[Avalia Aqui](https://github.com/fetrojan/avalia_aqui)


## 📱 Desenvolvido por:

Felipe Trojan - [LinkedIn](https://linkedin.com/in/felipe-trojan)
