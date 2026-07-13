<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { coffeeState, adicionarAvaliacao } from '../data/coffeeStore'

const router = useRouter()

const form = reactive({
  cafeId: coffeeState.cafes[0]?.id ?? 1,
  aroma: 8,
  doçura: 8,
  acidez: 8,
  corpo: 8,
  finalizacao: 8
})

const media = computed(() => {
  const valores = [form.aroma, form.doçura, form.acidez, form.corpo, form.finalizacao]
  const soma = valores.reduce((total, nota) => total + Number(nota), 0)
  return (soma / valores.length).toFixed(1)
})

function salvar() {
  adicionarAvaliacao(form.cafeId, {
    aroma: form.aroma,
    doçura: form.doçura,
    acidez: form.acidez,
    corpo: form.corpo,
    finalizacao: form.finalizacao
  })

  router.push('/ranking')
}
</script>

<template>
  <section class="page">
    <div class="panel">
      <h1>NOVA AVALIAÇÃO</h1>
      <form @submit.prevent="salvar" class="form-card">
        <label>
          Café:
          <select v-model="form.cafeId">
            <option v-for="cafe in coffeeState.cafes" :key="cafe.id" :value="cafe.id">
              {{ cafe.nome }}
            </option>
          </select>
        </label>

        <label>Aroma <input v-model.number="form.aroma" type="number" min="0" max="10" /></label>
        <label>Doçura <input v-model.number="form.doçura" type="number" min="0" max="10" /></label>
        <label>Acidez <input v-model.number="form.acidez" type="number" min="0" max="10" /></label>
        <label>Corpo <input v-model.number="form.corpo" type="number" min="0" max="10" /></label>
        <label>Finalização <input v-model.number="form.finalizacao" type="number" min="0" max="10" /></label>

        <p class="preview">Média prevista: {{ media }}</p>
        <button type="submit">Salvar Avaliação</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.page {
  min-height: 82vh;
  display: grid;
  place-items: center;
  padding: 1.5rem;
}

.panel {
  width: min(760px, 100%);
}

.panel h1 {
  text-align: center;
  color: #6f4e37;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 800;
}

.form-card {
  background: #fffefb;
  border: 1px solid #e8d0b0;
  border-radius: 22px;
  padding: 1.4rem;
  display: grid;
  gap: 0.85rem;
  box-shadow: 0 12px 28px rgba(0,0,0,0.06);
}

label {
  display: grid;
  gap: 0.35rem;
  font-weight: 600;
  color: #6f4e37;
}

input, select {
  padding: 0.75rem;
  border: 1px solid #d8c2a6;
  border-radius: 10px;
  background: #fff;
}

button {
  border: none;
  background: #8b5e3c;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
  justify-self: start;
}

.preview {
  color: #7a4f2f;
  font-weight: 700;
}
</style>
