### teste-info

## Para rodar é necessário instalar o docker

https://docs.docker.com/get-docker/

## Caso já tenha o docker, basta baixar a imagem do postgres e criar um container com o postgres

# docker pull postgres
# docker run --name info -e "POSTGRES_PASSWORD=postgres" -p 5432:5432 -d postures

## Para rodar o back-end, entre no server e execute o yarn e o yarn dev
# yarn
# yarn dev

## Para rodar os testes no back-end na porta 3333 digite yarn test
# yarn test

## Para rodar o front-end na porta 4200, entre no client e execute o yarn e o yarn start
# yarn
# yarn start


## Endpoints:
# GET   /vehicles/       //retorna todos os veículos
# GET   /vehicles/:id    //retorna apenas um veículos
# POST  /vehicles        //registra um veículo
# UPDATE /vehicles       //atualiza um veículo
# DELETE /vehicles/:id   //remove um veículo
