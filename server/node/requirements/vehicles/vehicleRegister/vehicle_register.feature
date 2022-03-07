Feature: vehicle Register
Como um anônimo
Quero poder cadastrar um veículo

Scenario: Dados válidos
    Given: Dado que o usuário inseriu dados do veículo
    When: Quando o usuário solicitar pra efetuar o cadastro do veículo
    Then: Então o sistema deve retornar um sinal indicando que o cadastro foi feito com sucesso
Scenario: Dados inválidos
    Given: Dado que o usuário inseriu dados do veículo inválido
    When: Quando o usuário solicitar pra efetuar o cadastro do veículo
    Then: Então o sistema deve retornar uma mensagem de erro
