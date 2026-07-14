# 🗂️ Backlog do Projeto

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

# 🎯 Objetivo

O backlog representa o conjunto de tarefas que a Squad Colmeia deverá executar para entregar a primeira versão do sistema **Coffee Quality Challenge 2026**.

Cada item abaixo representa uma atividade normalmente criada em ferramentas como:

- Jira
- Azure DevOps
- GitHub Projects
- Trello

O objetivo é organizar o trabalho da equipe e facilitar o desenvolvimento incremental do sistema.

---

# 📌 Como Utilizar Este Backlog

Recomendação de implementação:

1. Criar o projeto Vue
2. Configurar o Vue Router
3. Criar o Layout Principal
4. Criar os Componentes
5. Desenvolver a Home
6. Desenvolver Avaliações
7. Desenvolver Ranking
8. Desenvolver Detalhes
9. Desenvolver Página 404
10. Realizar Build e Deploy

---

# 📚 Índice

## Epic #1 - Estrutura Inicial do Projeto

- [Issue #1 - Criar Projeto Vue](#issue-1---criar-projeto-vue)
- [Issue #2 - Configurar Vue Router](#issue-2---configurar-vue-router)

## Epic #2 - Layout da Aplicação

- [Issue #3 - Criar Layout Principal](#issue-3---criar-layout-principal)
- [Issue #4 - Criar Navegação](#issue-4---criar-navegação)

## Epic #3 - Componentes

- [Issue #5 - Criar CoffeeCard](#issue-5---criar-coffeecard)
- [Issue #6 - Criar RatingForm](#issue-6---criar-ratingform)
- [Issue #7 - Criar LeaderboardTable](#issue-7---criar-leaderboardtable)

## Epic #4 - Página Home

- [Issue #8 - Dashboard Inicial](#issue-8---dashboard-inicial)

## Epic #5 - Página Avaliações

- [Issue #9 - Cadastro de Avaliação](#issue-9---cadastro-de-avaliação)
- [Issue #10 - Listagem de Cafés](#issue-10---listagem-de-cafés)

## Epic #6 - Página Ranking

- [Issue #11 - Ranking Geral](#issue-11---ranking-geral)
- [Issue #12 - Navegação para Detalhes](#issue-12---navegação-para-detalhes)

## Epic #7 - Página de Detalhes

- [Issue #13 - Detalhamento do Café](#issue-13---detalhamento-do-café)

## Epic #8 - Tratamento de Erros

- [Issue #14 - Página 404](#issue-14---página-404)

## Epic #9 - Build e Deploy

- [Issue #15 - Publicação da Aplicação](#issue-15---publicação-da-aplicação)

---

# Epic #1 - Estrutura Inicial do Projeto

## Objetivo

Preparar toda a infraestrutura inicial da aplicação.

---

## Issue #1 - Criar Projeto Vue

### Descrição

Criar o projeto utilizando Vue.js e Vite.

### Requisitos Relacionados

- RF006

### Critérios de Aceitação

- Projeto criado com Vue 3
- Projeto criado com Vite
- Aplicação executando com `npm run dev`

### Definição de Pronto

- Aplicação inicia sem erros.

---

## Issue #2 - Configurar Vue Router

### Descrição

Configurar o sistema de rotas da aplicação.

### Requisitos Relacionados

- RF006

### Critérios de Aceitação

Existem as rotas:

```text
/
/avaliacoes
/ranking
/cafe/:id
```

### Definição de Pronto

- Navegação funcional entre páginas.

---

# Epic #2 - Layout da Aplicação

## Objetivo

Criar a estrutura visual compartilhada por todas as páginas.

---

## Issue #3 - Criar Layout Principal

### Descrição

Criar um layout reutilizável para toda a aplicação.

### Critérios de Aceitação

O layout deve possuir:

- Header
- Área principal
- Footer

### Definição de Pronto

- Todas as páginas utilizam o mesmo layout.

---

## Issue #4 - Criar Navegação

### Descrição

Implementar menu principal utilizando Vue Router.

### Critérios de Aceitação

Menu contendo:

- Home
- Avaliações
- Ranking

### Definição de Pronto

- Usuário consegue navegar entre todas as páginas.

---

# Epic #3 - Componentes

## Objetivo

Criar componentes reutilizáveis para reduzir duplicação de código.

---

## Issue #5 - Criar CoffeeCard

### Descrição

Criar componente para exibir informações resumidas de um café.

### Requisitos Relacionados

- RF003

### Critérios de Aceitação

Exibir:

- Nome
- Produtor
- Média
- Notas

### Definição de Pronto

- Componente recebe dados via props.

---

## Issue #6 - Criar RatingForm

### Descrição

Criar formulário para cadastro de avaliações.

### Requisitos Relacionados

- RF002

### Critérios de Aceitação

Campos:

- Nome do Café
- Produtor
- Aroma
- Sabor
- Acidez
- Corpo
- Finalização
- Observações

### Definição de Pronto

- Formulário emite evento para salvar avaliação.

---

## Issue #7 - Criar LeaderboardTable

### Descrição

Criar tabela para exibição do ranking.

### Requisitos Relacionados

- RF004

### Critérios de Aceitação

Exibir:

- Posição
- Café
- Produtor
- Nota

### Definição de Pronto

- Ranking renderizado corretamente.

---

# Epic #4 - Página Home

## Objetivo

Apresentar indicadores do campeonato.

---

## Issue #8 - Dashboard Inicial

### Descrição

Criar página inicial.

### Requisitos Relacionados

- RF001

### Critérios de Aceitação

Exibir:

- Quantidade de cafés avaliados
- Melhor nota
- Última avaliação

### Definição de Pronto

- Dashboard funcionando.

---

# Epic #5 - Página Avaliações

## Objetivo

Permitir cadastro e visualização das avaliações.

---

## Issue #9 - Cadastro de Avaliação

### Descrição

Implementar cadastro de novas avaliações.

### Requisitos Relacionados

- RF002

### Critérios de Aceitação

- Cadastro funcional
- Média calculada automaticamente
- Dados adicionados à lista

### Definição de Pronto

- Nova avaliação aparece na tela.

---

## Issue #10 - Listagem de Cafés

### Descrição

Exibir todos os cafés avaliados.

### Requisitos Relacionados

- RF003

### Critérios de Aceitação

- Utilizar v-for
- Utilizar CoffeeCard

### Definição de Pronto

- Todos os cafés são exibidos.

---

# Epic #6 - Página Ranking

## Objetivo

Exibir classificação dos cafés participantes.

---

## Issue #11 - Ranking Geral

### Descrição

Implementar ranking dos cafés.

### Requisitos Relacionados

- RF004

### Critérios de Aceitação

- Ordenação por nota
- Destaque para Top 3

### Definição de Pronto

- Ranking exibido corretamente.

---

## Issue #12 - Navegação para Detalhes

### Descrição

Permitir acesso aos detalhes do café.

### Requisitos Relacionados

- RF005

### Critérios de Aceitação

- Botão "Ver Detalhes"
- Redirecionamento para `/cafe/:id`

### Definição de Pronto

- Usuário consegue acessar os detalhes.

---

# Epic #7 - Página de Detalhes

## Objetivo

Exibir informações completas sobre uma avaliação.

---

## Issue #13 - Detalhamento do Café

### Descrição

Criar página de detalhes.

### Requisitos Relacionados

- RF005

### Critérios de Aceitação

Exibir:

- Nome
- Produtor
- Notas
- Média
- Observações
- Avaliador
- Data

### Definição de Pronto

- Página renderiza corretamente os dados.

---

# Epic #8 - Tratamento de Erros

## Objetivo

Melhorar a experiência do usuário para rotas inválidas.

---

## Issue #14 - Página 404

### Descrição

Criar página para rotas inexistentes.

### Requisitos Relacionados

- RF007

### Critérios de Aceitação

- Mensagem amigável
- Botão para voltar para Home

### Definição de Pronto

- Página exibida para URLs inválidas.

---

# Epic #9 - Build e Deploy

## Objetivo

Disponibilizar a aplicação em ambiente de produção.

---

## Issue #15 - Publicação da Aplicação

### Descrição

Gerar build de produção e publicar a aplicação.

### Critérios de Aceitação

- Aplicação publicada
- URL acessível
- Navegação funcionando

### Definição de Pronto

- Professor consegue acessar a aplicação pela URL informada.

---

# 🏁 Resultado Esperado

Ao finalizar todas as issues deste backlog, a Squad Colmeia deverá entregar:

✅ Aplicação Vue.js funcional
✅ Navegação entre páginas
✅ Cadastro de avaliações
✅ Ranking dos cafés
✅ Visualização de detalhes
✅ Página 404
✅ Deploy em produção
✅ README documentado

### Estrutura do projeto sugerida
```text
src/
│
├── components/
│   ├── CoffeeCard.vue
│   └── RankingItem.vue
│
├── views/
│   ├── HomeView.vue
│   ├── CafesView.vue
│   ├── AvaliarView.vue
│   └── RankingView.vue
│
├── router/
│   └── index.js
│
└── App.vue
```