<div align="center">
  <img alt="fincheck" title="portfolio" src="https://raw.githubusercontent.com/Micalli/Portifolio-AI/75e79808dcae2a2bce6e5da3636b6c19ff6eda85/front/public/logo.svg" width="300px">
</h1>
</div>
<h1 align="center">
    micalli-dev.vercel.app - v1
</h1>

<p align="center">
 Primeira versão do portifolio <a href="https://micalli-dev.vercel.app/" target="_blank">https://micalli-dev.vercel.app/</a> feito com <a href="https://react.dev/" target="_blank">React</a> e hospedado na <a href="https://www.vercel.com/" target="_blank">Vercel</a>
</p>

![demo](https://raw.githubusercontent.com/Micalli/Portifolio-AI/refs/heads/main/front/static/demo.png)

## Tecnologias

<img src="https://skillicons.dev/icons?i=typescript,javascript,html,css,docker,git,prisma,nodejs,nestjs,react,vite,tailwindcss" width="415px" alt="Technologies" />

## 📂 Descrição
Um portifolio contando um pouco sobre mim e meu conhecimentos.Um chatbot para voce fazer perguntas sobre mim. E um CRUD de uma lista de afazeres.

#### Clone

```bash
git clone https://github.com/Micalli/Portifolio-AI && cd Portifolio-AI
```

#### Instalando as depedencias

Dê esses comando no ```/api``` e no ```/front``` 

```bash
yarn
#OU
npm i
```

#### Rodando PostgreSQL com Docker
```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

Em seguida dê esses comandos para criar a tabela dentro do container
```bash
#Entra no bash do container
docker exec -it pg bash

#Entra no postgres
psql -U root

#Cria o banco
CREATE DATABASE nomeDoBanco;
```

## Entre em contado
Feito com :green_heart: por [Bruno Micalli](https://github.com/micalli).


[![Linkedin Badge](https://img.shields.io/badge/-Bruno_Micalli-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/brunomicalli/)](https://www.linkedin.com/in/brunomicalli/)
