# Angular 2.0 Car App

Esse repositório foi criado com base nos vídeos da série introdução ao AngularJS 2.0 que está dísponível no meu canal do youtube e no meu blog.

A aplicação desenvolvida nesse repositório é um CRUD de veículos, utilizando os principais conceitos do AngularJS 2.0 e suas novidades.

### Versão
1.0.0

### Tecnologias
Essa aplicação utiliza diversos projetos opersource

* [AngularJS]
* [Bootstrap]
* [node.js]
* [Visual Studio Code]
* [TypeScript]
* [ASP.NET Core]

### Instalação

Você precisa ter o [node.js] instalado na sua máquina

Execute o comando abaixo para restaurar todos os pacotes do node que a aplicação utiliza
```sh
$ npm install
```

Execute o comando abaixo para compilar, habilitar o watcher para todos os arquivos [TypeScript] e iniciar o servidor lite
```sh
$ npm start
```

Execute o comando abaixo para excluir os arquivos .js gerados pela compilação do [TypeScript]
```sh
$ npm clean
```
Para executar a API REST construida com ASP.NET Core navegue até a pasta e execute os seguintes comandos.

```sh
//restaura os pacotes que a API depende.
$ dnu restore 

// Inicia um processo do Kestrel no endereço http://localhost:5000
$ dnx web 
```

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [node.js]: <http://nodejs.org>
   [Visual Studio Code]: <https://code.visualstudio.com/>
   [Bootstrap]: <http://getbootstrap.com/>
   [AngularJS]: <https://angular.io/>
   [TypeScript]: <http://www.typescriptlang.org/>
   [ASP.NET Core]:<http://docs.asp.net/en/latest/conceptual-overview/dotnetcore.html>


