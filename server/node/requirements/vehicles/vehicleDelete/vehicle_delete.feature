Feature: vehicle Delete
Como um anônimo
Quero poder deletar um veículo

Scenario: Dados válidos
    Given: Dado que o usuário inseriu um uuid válido
    When: Quando o usuário solicitar pra efetuar a remoção do veículo
    Then: Então o sistema deve retornar um sinal indicando que a remoção foi feita com sucesso
Scenario: Dados inválidos
    Given: Dado que o usuário inseriu um uuid inválido
    When: Quando o usuário solicitar pra efetuar a remoção do veículo
    Then: Então o sistema deve retornar uma mensagem de erro
