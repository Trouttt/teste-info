Feature: vehicle Update
Como um anônimo
Quero poder atualizar um veículo

Scenario: Dados válidos
    Given: Dado que o usuário inseriu dados do veículo
    When: Quando o usuário solicitar pra efetuar a atualização do veículo
    Then: Então o sistema deve retornar um sinal indicando que a atualização foi feita com sucesso
Scenario: Dados inválidos
    Given: Dado que o usuário inseriu dados do veículo inválido
    When: Quando o usuário solicitar pra efetuar a atualização do veículo
    Then: Então o sistema deve retornar uma mensagem de erro
