# 📋 Requisitos Funcionais

## Navegação

| Documento | Descrição |
|------------|------------|
| [🏠 Contexto](./01-contexto.md) | Visão geral do projeto |
| [📋 Requisitos Funcionais](./02-requisitos-funcionais.md) | Funcionalidades esperadas |
| [🎯 Critérios de Avaliação](./03-criterios-avaliacao.md) | Como a atividade será corrigida |
| [🎨 Wireframes](./04-wireframes.md) | Protótipos das telas |
| [🗂️ Backlog](./05-backlog.md) | Lista de tarefas do projeto |
| [📦 Entrega](./06-entrega.md) | Orientações para submissão |

---

## Índice

### Funcionalidades

- [RF001 - Dashboard Inicial](#rf001---dashboard-inicial)
- [RF002 - Cadastro de Avaliação](#rf002---cadastro-de-avaliação)
- [RF003 - Lista de Cafés Avaliados](#rf003---lista-de-cafés-avaliados)
- [RF004 - Ranking Geral](#rf004---ranking-geral)
- [RF005 - Detalhamento do Café](#rf005---detalhamento-do-café)
- [RF006 - Navegação](#rf006---navegação)
- [RF007 - Página Não Encontrada](#rf007---página-não-encontrada)

### Regras de Negócio

- [RN001 - Notas entre 0 e 10](#rn001)
- [RN002 - Cálculo da Média](#rn002)
- [RN003 - Média com uma Casa Decimal](#rn003)
- [RN004 - Ordenação do Ranking](#rn004)
- [RN005 - Campos Obrigatórios](#rn005)

---

## Objetivo

Desenvolver uma Single Page Application (SPA) utilizando Vue.js para gerenciamento das avaliações de cafés especiais durante um campeonato inspirado na metodologia da Specialty Coffee Association (SCA).

---

# RF001 - Dashboard Inicial

## Descrição

O sistema deve apresentar uma página inicial contendo informações resumidas sobre o campeonato.

## Critérios de Aceitação

- Exibir quantidade de cafés avaliados.
- Exibir melhor nota registrada.
- Exibir última avaliação realizada.
- Exibir botões de navegação para Avaliações e Ranking.

## Caso de Uso Principal

1. Usuário acessa a página inicial.
2. Sistema exibe os indicadores do campeonato.
3. Usuário navega para outras áreas do sistema.

---

# RF002 - Cadastro de Avaliação

## Descrição

O sistema deve permitir registrar uma nova avaliação de café.

## Critérios de Aceitação

- Nome do Café obrigatório.
- Produtor obrigatório.
- Aroma obrigatório.
- Sabor obrigatório.
- Acidez obrigatória.
- Corpo obrigatório.
- Finalização obrigatória.
- Observações opcionais.
- Média calculada automaticamente.

## Caso de Uso Principal

1. Usuário acessa a página Avaliações.
2. Preenche o formulário.
3. Sistema calcula a média.
4. Usuário salva a avaliação.
5. Sistema adiciona o café à lista.

## Fluxo Alternativo

Caso algum campo obrigatório esteja vazio:

1. Sistema exibe mensagem de erro.
2. Cadastro não é realizado.

---

# RF003 - Lista de Cafés Avaliados

## Descrição

O sistema deve apresentar todos os cafés cadastrados.

## Critérios de Aceitação

- Utilizar renderização dinâmica.
- Exibir nome.
- Exibir produtor.
- Exibir média.
- Exibir notas individuais.

## Caso de Uso Principal

1. Usuário acessa a página Avaliações.
2. Sistema exibe todos os cafés cadastrados.

---

# RF004 - Ranking Geral

## Descrição

O sistema deve exibir um ranking dos cafés avaliados.

## Critérios de Aceitação

- Ordenação da maior nota para a menor.
- Exibir posição.
- Exibir nome.
- Exibir produtor.
- Exibir média final.
- Destacar os três primeiros colocados.

## Caso de Uso Principal

1. Usuário acessa a página Ranking.
2. Sistema ordena os cafés.
3. Sistema exibe classificação.

---

# RF005 - Detalhamento do Café

## Descrição

O sistema deve exibir informações completas de uma avaliação.

## Critérios de Aceitação

- Nome do café.
- Produtor.
- Média final.
- Notas individuais.
- Observações.
- Data da avaliação.
- Avaliador.

## Caso de Uso Principal

1. Usuário acessa o Ranking.
2. Seleciona um café.
3. Sistema exibe os detalhes.

## Fluxo Alternativo

Caso o café não exista:

1. Sistema exibe mensagem de erro.
2. Usuário pode retornar ao Ranking.

---

# RF006 - Navegação

## Descrição

O sistema deve permitir navegação utilizando Vue Router.

## Critérios de Aceitação

Rotas obrigatórias:


| Rota      | Descrição               |
| --------  | ----------------------- |
| /         | Página Inicial          |
| /cafes    | Lista de Cafés          |
| /avaliar  | Formulário de Avaliação |
| /ranking  | Ranking Final           |
| /cafe/:id | Detalhes                |


## Caso de Uso Principal

1. Usuário acessa o menu.
2. Navega entre as páginas.
3. Sistema atualiza a rota.

---

# RF007 - Página Não Encontrada

## Descrição

O sistema deve exibir uma página amigável para rotas inexistentes.

## Critérios de Aceitação

- Mensagem de erro.
- Botão para retornar à Home.

## Caso de Uso Principal

1. Usuário acessa uma URL inválida.
2. Sistema exibe página 404.

---

# 📏 Regras de Negócio

## RN001

As notas devem possuir valores entre 0 e 10.

## RN002

A média deve ser calculada utilizando:

```text
(Aroma + Sabor + Acidez + Corpo + Finalização) / 5
```

## RN003

A média deve possuir uma casa decimal.

## RN004

O ranking deve ser exibido em ordem decrescente.

## RN005

Nome do Café e Produtor são obrigatórios.

...
