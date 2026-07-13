<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import CoffeeCard from '../components/CoffeeCard.vue'
import { coffeeState, adicionarCafe } from '../data/coffeeStore'

const router = useRouter()
const novoCafe = reactive({ nome: '', origem: '' })

function avaliarCafe(cafeId) {
  router.push({ path: '/avaliar', query: { cafeId } })
}

function salvarCafe() {
  const sucesso = adicionarCafe(novoCafe)

  if (sucesso) {
    novoCafe.nome = ''
    novoCafe.origem = ''
  }
}
</script>

<template>
  <section class="page">
    <div class="header">
      <h1>Cafés Participantes</h1>
      <p>Escolha um café para avaliar ou cadastre um novo participante.</p>
    </div>

    <form class="form-card" @submit.prevent="salvarCafe">
      <h2>Novo Café</h2>
      <input v-model="novoCafe.nome" placeholder="Nome do café" />
      <input v-model="novoCafe.origem" placeholder="Origem" />
      <button type="submit">Cadastrar</button>
    </form>

    <div class="cards">
      <CoffeeCard v-for="cafe in coffeeState.cafes" :key="cafe.id" :cafe="cafe" @avaliar="avaliarCafe" />
    </div>
  </section>
</template>

<style scoped>
.page {
  max-width: 960px;
  margin: 2rem auto;
  padding: 1rem 1.2rem 2rem;
}

.header {
  margin-bottom: 1rem;
  text-align: center;
}

.header h1 {
  color: #6f4e37;
  margin-bottom: 0.35rem;
}

.header p {
  color: #7a5a3e;
}

.form-card {
  background: #fffefb;
  padding: 1rem;
  border: 1px solid #e8d0b0;
  border-radius: 18px;
  display: grid;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
}

.form-card h2 {
  margin: 0;
  color: #6f4e37;
}

input {
  padding: 0.75rem;
  border: 1px solid #d8c2a6;
  border-radius: 10px;
}

button {
  border: none;
  background: #8b5e3c;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  justify-self: start;
  font-weight: 700;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
