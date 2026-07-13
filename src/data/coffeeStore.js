import { computed, reactive } from 'vue'

const initialCafes = [
  { id: 1, nome: 'Bourbon Amarelo', origem: 'Minas Gerais', avaliacoes: [] },
  { id: 2, nome: 'Catuaí Vermelho', origem: 'Paraná', avaliacoes: [] },
  { id: 3, nome: 'Arara', origem: 'Espírito Santo', avaliacoes: [] },
  { id: 4, nome: 'Mundo Novo', origem: 'Bahia', avaliacoes: [] }
]

export const coffeeState = reactive({
  cafes: initialCafes.map((cafe) => ({ ...cafe }))
})

function calcularMedia(avaliacao) {
  const criterios = [
    avaliacao.aroma,
    avaliacao.doçura,
    avaliacao.acidez,
    avaliacao.corpo,
    avaliacao.finalizacao
  ]

  const soma = criterios.reduce((total, nota) => total + Number(nota), 0)
  return Number((soma / criterios.length).toFixed(1))
}

export function adicionarAvaliacao(cafeId, avaliacao) {
  const cafe = coffeeState.cafes.find((item) => item.id === Number(cafeId))

  if (!cafe) {
    return
  }

  cafe.avaliacoes.push({
    ...avaliacao,
    media: calcularMedia(avaliacao)
  })
}

export function adicionarCafe(novoCafe) {
  const cafe = {
    id: Date.now(),
    nome: novoCafe.nome.trim(),
    origem: novoCafe.origem.trim(),
    avaliacoes: []
  }

  if (!cafe.nome || !cafe.origem) {
    return false
  }

  coffeeState.cafes.push(cafe)
  return true
}

export const rankingCafes = computed(() => {
  return [...coffeeState.cafes]
    .map((cafe) => ({
      ...cafe,
      media: cafe.avaliacoes.length
        ? Number(
            (
              cafe.avaliacoes.reduce((soma, avaliacao) => soma + avaliacao.media, 0) /
              cafe.avaliacoes.length
            ).toFixed(1)
          )
        : 0
    }))
    .sort((a, b) => b.media - a.media)
})
