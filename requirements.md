# Requisitos Técnicos (Obrigatórios)

Os alunos devem utilizar todos os conceitos abaixo durante o desenvolvimento da atividade.

| Etapa | Conceito             | O que deve ser demonstrado                                                            |
| ----- | -------------------- | ------------------------------------------------------------------------------------- |
| 0     | Configuração         | Projeto criado com Vite + Vue 3 (Composition API recomendada)                         |
| 1     | Introdução ao Vue.js | Uso correto de data, methods, mounted, etc.                                           |
| 2     | Templates            | Uso adequado de interpolação, diretivas (`v-if`, `v-else`, `v-for`, `v-bind`, `v-on`) |
| 3     | Reatividade          | Uso de `ref()` ou `reactive()` com atualizações em tempo real                         |
| 4     | Listas               | Renderização dinâmica utilizando `v-for` e gerenciamento de arrays                    |
| 5     | Componentes          | Criação de pelo menos 3 componentes reutilizáveis                                     |
| 6     | Rotas                | Vue Router com pelo menos 3 rotas                                                     |

---

# Funcionalidades Obrigatórias

## 1. Página Inicial (/)

A página inicial deve apresentar cards com as seguintes informações:

* Quantidade total de cafés avaliados;
* Café com maior nota;
* Última avaliação realizada.

---

## 2. Página de Avaliações (/avaliacoes)

A página deve conter:

### Lista de Cafés

* Exibição dos cafés já avaliados utilizando `v-for`.

### Formulário de Avaliação

Campos obrigatórios:

* Nome do Café
* Produtor
* Aroma (0 a 10)
* Sabor (0 a 10)
* Acidez (0 a 10)
* Corpo (0 a 10)
* Finalização (0 a 10)
* Observações

### Cálculo da Média

Ao salvar uma avaliação, o sistema deve calcular automaticamente a média SCA utilizando a fórmula:

```text
(Aroma + Sabor + Acidez + Corpo + Finalização) / 5
```

---

## 3. Página de Ranking (/ranking)

A página deve conter:

* Tabela ordenada por nota final (ordem decrescente);
* Destaque visual para os três primeiros colocados (ouro, prata e bronze);
* Possibilidade de clicar em um café e visualizar seus detalhes utilizando reatividade.

---

# Requisitos de Reatividade e UX

A aplicação deve demonstrar claramente os conceitos de reatividade estudados.

### Atualização da Média em Tempo Real

As notas informadas no formulário devem atualizar automaticamente a média enquanto o usuário digita.

### Atualização Automática da Interface

Ao adicionar uma nova avaliação:

* A lista de cafés deve ser atualizada automaticamente;
* O ranking deve ser atualizado automaticamente;
* Os indicadores da página inicial devem refletir os novos dados.

### Mensagens Condicionais

Utilizar `v-if` para exibir mensagens como:

* "Nenhum café avaliado ainda";
* "Parabéns! Novo líder do campeonato!";
* Outras mensagens condicionais pertinentes.

---

# Entrega

Cada aluno deverá entregar:

* Link do repositório (GitHub ou GitLab) **ou** pasta compactada contendo o projeto;
* Arquivo `README.md` contendo:

## Conteúdo obrigatório do README

* Print da Página Inicial;
* Print da Página de Avaliações;
* Print da Página de Ranking;
* Breve explicação indicando onde foram utilizados os conceitos estudados nas Etapas 2 a 6:

  * Templates;
  * Reatividade;
  * Listas;
  * Componentes;
  * Rotas.

---

# Critérios de Avaliação

| Critério                                      | Peso |
| --------------------------------------------- | ---: |
| Funcionalidade (telas e cálculos funcionando) |  40% |
| Uso correto dos conceitos Vue.js              |  30% |
| Organização de componentes e código limpo     |  15% |
| Design / UX (simples, mas organizado)         |  10% |
| README + Prints                               |   5% |

---

## Tempo de Desenvolvimento

⏱️ **Tempo disponível: 2 horas**

Boa sorte e bom desenvolvimento!
