<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { coffeeState } from '../data/coffeeStore'

const totalCafes = computed(() => coffeeState.cafes.length)
</script>

<template>
  <main class="hero">
    <section class="panel">
      <h1>COFFEE QUALITY CHALLENGE</h1>
      <p class="subtitle">Avaliação Sensorial de Cafés Especiais</p>
      <p class="counter">Cafés Participantes: {{ totalCafes }}</p>
      <RouterLink to="/cafes" class="btn">Ver Cafés</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.hero {
  min-height: 82vh;
  display: grid;
  place-items: center;
  padding: 1.5rem;
}

.panel {
  width: min(600px, 100%);
  min-height: 360px;
  background: #fffdf8;
  border: 1px solid #e3c89a;
  border-radius: 18px;
  padding: 2.8rem 2rem;
  text-align: center;
  box-shadow: 0 14px 36px rgba(78, 45, 18, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

h1 {
  font-size: 2rem;
  margin: 0;
  color: #6f4e37;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.subtitle {
  color: #7d5a42;
  font-size: 1.05rem;
  margin: 0;
}

.counter {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0.2rem 0 0;
  color: #6f4e37;
}

.btn {
  display: inline-block;
  background: #8b5e3c;
  color: white;
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  margin-top: 0.4rem;
}
</style>
