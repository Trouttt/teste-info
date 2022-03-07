### Caso de sucesso

1. Sistema valida os dados
2. Sistema faz uma requisição para a URL da api
3. Sistema efetua o registro

## Exceção - Campo "Placa" já existe registrada no sistema - Válidado

1. Sistema retorna um statusCode e uma mensagem de erro avisando que o carro já está cadastrado.

## Exceção - Campo "Chassi" já existe cadastrado no sistema - Válidado

1. Sistema retorna um statusCode e uma mensagem de erro avisando que o chassi já está cadastrado.

## Exceção - Campo "Renavam" já existe cadastrado no sistema - Válidado

1. Sistema retorna um statusCode e uma mensagem de erro avisando que o Renavam já está cadastrado.

## Exceção - O tamanho do Campo "Ano do modelo" é diferente de 4 caracteres - Válidado

1. Sistema retorna um statusCode e uma mensagem de erro avisando que o Ano do modelo está incorreto.

## Exceção - O tamanho do Campo "Fabricante" é menor do que 1 carácter - Válidado

1. Sistema retorna um statusCode e uma mensagem de erro avisando que o Fabricante está incorreto.

## Exceção - O tamanho do Campo "Modelo" é menor do que 1 carácter- Válidado

1. Sistema retorna um statusCode e uma mensagem de erro avisando que o Modelo está incorreto.

## Exceção - O tamanho do Campo "Placa" é menor do que 7 ou maior que 8 caracteres - Válidado

1. Sistema retorna um statusCode e uma mensagem de erro avisando que a Placa está incorreto.

## Exceção - O tamanho do Campo "Renavam" é diferente de 11 caracteres- Válidado

1. Sistema retorna um statusCode e uma mensagem de erro avisando que o Renavam está incorreto.

## Exceção - O tamanho do Campo "Chassi" é diferente de 17 caracteres- Válidado

1. Sistema retorna um statusCode e uma mensagem de erro avisando que o Chassi está incorreto.
