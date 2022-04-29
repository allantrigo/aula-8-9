[![CI](https://github.com/allantrigo/aula-8-9/actions/workflows/main.yml/badge.svg)](https://github.com/allantrigo/aula-8-9/actions/workflows/main.yml)
# aula-8-9
Esse projeto é um exemplo sobre como o Jest realiza os testes de uma aplicação rest com CRUD sobre músicas.

# Instalando
Neste projeto foi usado o NPM para realizar a execução do projeto, desta forma, após realizar o clone do projeto usando o seguinte comando:
```
git clone https://github.com/allantrigo/aula-8-9.git
```
Com o projeto clonado basta então executar o seguinte comando para instalar as dependências
```
npm install
```
# Rodando o projeto
Para rodar o projeto é necessário criar um arquivo ```.env``` com as seguintes configurações dentro dele:
```
CONNECT_STRING="<String de conexão do banco do MongoDB>"
```
Com isso feito é possível rodar o projeto usando o nodemon no ambiente de dev. Isso faz com que o código possa ser rapidamente testado e atualizado, rodando em tempo real. Para isso, basta executar o seguinte comando:
```
npm run dev
```
# Executando os testes
Sendo um projeto focado em mostrar os possíveis testes do Jest, é necessário executar comandos para mostrar os testes.
## Testes comuns
É possível executar testes com coverage através do seguinte comando:
```
npm run test
```
Uma vez executado o comando mostrará os testes executados para o usuário.

Ao executar esse comando é possível ver também a coverage do projeto. Além disso, é possível visualizar também a coverage detalhadamente a partir da pasta que é criada, chamada ```coverage```, dentro dela há uma outra pasta chamada ```lcov-report```, dentro dela há o index.html, um arquivo que mostra também a coverage detalhada e as branchs não inspecionadas do código.
