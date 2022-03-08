Feature: vehicle Get by Id
Como um anônimo
Quero poder visualizar UM veículo

Scenario: Dados válidos
    Given: Dado que o usuário inseriu o uuid do veículo
    When: Quando o usuário solicitar pra efetuar a visualização do veículo
    Then: Então o sistema deve retornar um sinal indicando que a visualização foi exibida com sucesso
Scenario: Dados inválidos
    Given: Dado que o usuário inseriu o uuid inválido do veículo
    When: Quando o usuário solicitar pra efetuar a visualização do veículo
    Then: Então o sistema deve retornar uma mensagem de erro
