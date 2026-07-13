<script setup>
const props = defineProps({
  cafe: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['avaliar'])
</script>

<template>
  <article class="card">
    <h3>{{ cafe.nome }}</h3>
    <p>{{ cafe.origem }}</p>
    <p v-if="cafe.avaliacoes.length" class="stats">
      {{ cafe.avaliacoes.length }} avaliação(ões)
    </p>
    <p v-else class="stats">Ainda não avaliado</p>
    <button @click="emit('avaliar', cafe.id)">Avaliar</button>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid #e4cca7;
  border-radius: 16px;
  padding: 1rem;
  background: #fffaf3;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

h3 {
  margin: 0;
  color: #6f4e37;
}

p {
  margin: 0;
  color: #7a5a3e;
}

.stats {
  font-size: 0.9rem;
  color: #8c5b3d;
}

button {
  margin-top: 0.7rem;
  border: none;
  background: #8b5e3c;
  color: white;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
}
</style>
