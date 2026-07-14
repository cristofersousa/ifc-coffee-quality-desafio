# ☕ Desenvolvimentos e Desafios Extras

# Regras de Negócio

Cada café deve possuir:

* Nome;
* Região de Origem.

Cada avaliação deve conter notas de **0 a 10** para os seguintes critérios:

* Aroma
* Doçura
* Acidez
* Corpo
* Finalização

A média final do café será calculada através da fórmula:

```text
(Aroma + Doçura + Acidez + Corpo + Finalização) / 5
```



## Componentes

Criar pelo menos dois componentes reutilizáveis:

### CoffeeCard.vue

Responsável por exibir as informações de um café.

### RankingItem.vue

Responsável por exibir uma posição no ranking.


# Dados Iniciais

Utilize os seguintes cafés como base da aplicação:

```javascript
[
  {
    id: 1,
    nome: "Bourbon Amarelo",
    origem: "Minas Gerais"
  },
  {
    id: 2,
    nome: "Catuaí Vermelho",
    origem: "Paraná"
  },
  {
    id: 3,
    nome: "Arara",
    origem: "Espírito Santo"
  },
  {
    id: 4,
    nome: "Mundo Novo",
    origem: "Bahia"
  }
]
```

---

# Wireframe

![](1-home.png)

## Página Inicial (/)

```text
+--------------------------------------------------+
|                                                  |
|        COFFEE QUALITY CHALLENGE                  |
|                                                  |
| Avaliação Sensorial de Cafés Especiais           |
|                                                  |
| Cafés Participantes: 4                           |
|                                                  |
| [ Ver Cafés ]                                    |
|                                                  |
+--------------------------------------------------+
```

---

## Página Cafés (/cafes)

![](3-ranking.png)



```text
+--------------------------------------------------+
|                     CAFÉS                        |
+--------------------------------------------------+

+--------------------------+
| Bourbon Amarelo          |
| Minas Gerais             |
|                          |
| [ Avaliar ]              |
+--------------------------+

+--------------------------+
| Catuaí Vermelho          |
| Paraná                   |
|                          |
| [ Avaliar ]              |
+--------------------------+

+--------------------------+
| Arara                    |
| Espírito Santo           |
|                          |
| [ Avaliar ]              |
+--------------------------+
```

---

## Página Avaliação (/avaliar)

![](2-avaliacoes.png)


```text
+--------------------------------------------------+
|               NOVA AVALIAÇÃO                     |
+--------------------------------------------------+

Café:

[ Bourbon Amarelo         ▼ ]

Aroma:
[ 8 ]

Doçura:
[ 9 ]

Acidez:
[ 7 ]

Corpo:
[ 8 ]

Finalização:
[ 9 ]

[ Salvar Avaliação ]
```

---

## Página Ranking (/ranking)

```text
+--------------------------------------------------+
|                    RANKING                       |
+--------------------------------------------------+

🏆 1º Bourbon Amarelo ........ 8.7

🥈 2º Arara .................. 8.3

🥉 3º Catuaí Vermelho ........ 7.9

4º Mundo Novo ............... 7.2
```

---



# Desafios Extras (Opcional)

## Extra 1

Exibir uma mensagem de destaque quando a média for maior ou igual a 8.

Exemplo:

```text
Excelente Café ☕
```

Utilizar:

```vue
v-if
```

---

## Extra 2

Permitir o cadastro de novos cafés.

Utilizar:

```vue
v-model
v-for
```

---

## Extra 3

Destacar visualmente o primeiro colocado do ranking.

Exemplo:

```text
🏆 Campeão do Campeonato
```