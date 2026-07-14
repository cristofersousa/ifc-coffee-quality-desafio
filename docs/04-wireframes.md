# 🎨 Wireframes

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

Os wireframes representam uma proposta visual simplificada da aplicação.

Eles servem como guia para auxiliar a implementação das telas e demonstrar a expectativa mínima de organização dos elementos.

⚠️ Importante:

Os alunos **não precisam reproduzir exatamente o mesmo design**, mas devem respeitar os componentes e funcionalidades descritos nos requisitos funcionais.

---

# 📚 Índice

## Telas Obrigatórias

- [Home](#1--home-dashboard)
- [Avaliações](#2--avaliações)
- [Ranking](#3--ranking)
- [Detalhes do Café](#4--detalhes-do-café)

---

# 1. 🏠 Home (Dashboard)

## Objetivo

Apresentar uma visão geral do campeonato.

## Elementos Esperados

- Título do sistema
- Descrição do campeonato
- Cards de indicadores
- Botões de navegação

## Indicadores

- Quantidade de Cafés Avaliados
- Melhor Nota
- Última Avaliação

## Wireframe

![Home](./imagens/assets/1-home.png)

---

## Componentes Relacionados

- Header
- Footer
- Dashboard Cards

## Requisitos Relacionados

- RF001

---

# 2. 📝 Avaliações

## Objetivo

Permitir o cadastro de novas avaliações e visualizar os cafés já cadastrados.

## Elementos Esperados

### Formulário

Campos:

- Nome do Café
- Produtor
- Aroma
- Sabor
- Acidez
- Corpo
- Finalização
- Observações

### Lista de Cafés

Exibir:

- Nome
- Produtor
- Média
- Notas

## Wireframe

![Avaliações](./imagens/assets/2-avaliacoes.png)

---

## Componentes Relacionados

- RatingForm
- CoffeeCard

## Requisitos Relacionados

- RF002
- RF003

---

# 3. 🏆 Ranking

## Objetivo

Apresentar os cafés classificados por nota final.

## Elementos Esperados

Tabela contendo:

- Posição
- Nome do Café
- Produtor
- Nota Final
- Ação para visualizar detalhes

## Regras

- Ordenação da maior nota para a menor
- Destaque para os três primeiros colocados

## Wireframe

![Ranking](./imagens/assets/3-ranking.png)

---

## Componentes Relacionados

- LeaderboardTable

## Requisitos Relacionados

- RF004

---

# 4. ☕ Detalhes do Café

## Objetivo

Exibir informações completas sobre uma avaliação.

## Elementos Esperados

### Informações Gerais

- Nome do Café
- Produtor
- Nota Final

### Critérios de Avaliação

- Aroma
- Sabor
- Acidez
- Corpo
- Finalização

### Informações Complementares

- Observações
- Avaliador
- Data da Avaliação

## Wireframe

![Detalhes](./imagens/assets/4-detalhes.png)

---

## Componentes Relacionados

- CoffeeDetails

## Requisitos Relacionados

- RF005

---

# 🎨 Considerações Visuais

Os wireframes utilizam uma proposta visual inspirada em dashboards modernos.

Sugestões:

- Cards com bordas arredondadas
- Espaçamentos consistentes
- Utilização de Grid ou Flexbox
- Layout responsivo
- Destaque visual para indicadores importantes

---

# 📱 Responsividade

A aplicação deve funcionar adequadamente em:

- Desktop
- Tablet
- Mobile

Não é necessário criar um design complexo, mas os componentes não devem quebrar em telas menores.

---

# 🏁 Resultado Esperado

Ao finalizar a implementação, a aplicação deverá conter:

✅ Página Home
✅ Página Avaliações
✅ Página Ranking
✅ Página de Detalhes
✅ Navegação entre rotas
✅ Layout consistente
✅ Componentes reutilizáveis

Os wireframes servem como referência para auxiliar a construção dessas telas.