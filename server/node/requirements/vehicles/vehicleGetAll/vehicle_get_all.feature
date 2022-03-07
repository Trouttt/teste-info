Feature: vehicle get all
Como um anônimo
Quero poder visualizar veículos

Scenario: Dados válidos
    Given: Dado que o usuário inseriu a url correta
    When: Quando o usuário solicitar pra efetuar a visualização dos veículos
    Then: Então o sistema deve retornar um sinal indicando que o retorno dos veículos foi feito com sucesso
Scenario: Dados inválidos
    Given: Dado que o usuário inseriu a url correta
    When: Quando o usuário solicitar pra efetuar a visualização dos veículos
    Then: Então o sistema deve retornar uma mensagem de erro
