# My Movies

Este projeto foi criado com no intúito de demonstrar de maneira simples o consumo de uma [API](https://pt.wikipedia.org/wiki/Api) utilizando [React](https://pt-br.reactjs.org/) com [The Movie DB](https://www.themoviedb.org/).
A API utilizada neste projeto é open source e, basta realizar o cadastro e utilizar livremente .

## Script de inicialização

### criando projeto

```sh
npx create-react-app my-movies
```

### instalando bibliotecas necessárias

#### styled

[styled](https://styled-components.com/) é uma lib que permite que você use estilos ao nível de componente na sua aplicação.

```sh
npm i styled-component
```

#### react router
[react router](https://reactrouter.com/web/guides/quick-start) é uma lib completa para controle de rotas que permite que você consiga configurar as rotas utilizando o formato JSX e também disponibiliza uma API para você configurar diretamente via Javascript.

```sh
npm i react-router-dom
```
#### axios
[axios](https://github.com/axios/axios) é um cliente HTTP baseado em Promises para fazer requisições

```sh
npm i axios
```

No diretório do projeto, você pode executar:

### npm start

Para executar o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http: // localhost: 3000) para visualizá-lo no navegador.

### Estrutura de Arquivos

```sh
  my-movies
  .
  ├── node_modules
  ├── public
  │   ├── favicon.ico
  │   ├── index.html
  │   └── manifest.json
  ├── src/
  │   ├── api/
  │   │   └── MoviesService.js
  │   ├── components/
  |   |   ├── Header.js
  │   │   ├── MainMenu.js
  │   │   └── MovieItem.js
  │   │   └── MovieList.js
  │   ├── styles/
  |   |   ├── HeaderContainer.js
  │   │   ├── MainMenuContainer.js
  │   │   └── MoviesContainer.js
  │   ├── App.js
  │   ├── index.js
  │   ...
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  ├── README.md
  └── yarn.lock
```
