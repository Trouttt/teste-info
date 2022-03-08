### Caso de sucesso

1. Sistema valida os dados
2. Sistema faz uma requisição para a URL da api
3. Sistema efetua a remoção

## Exceção - Parâmetro na url inválido - Válidado

1. Sistema retorna um statusCode e uma mensagem de erro avisando que o uuid está inválido

## Exceção - UUID Válido sem estar vinculado a alguém

1. Sistema retorna um statusCode e uma mensagem de erro avisando que não foi possível concluir a remoção do carro
