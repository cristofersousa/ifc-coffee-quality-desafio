<script setup>
defineProps({
  cafe: {
    type: Object,
    required: true
  },
  posicao: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <li class="ranking-item" :class="{ champion: posicao === 1 }">
    <span class="position">{{ posicao }}º</span>
    <div>
      <strong>{{ cafe.nome }}</strong>
      <p>{{ cafe.origem }}</p>
    </div>
    <span class="media">{{ cafe.media.toFixed(1) }}</span>
  </li>
</template>

<style scoped>
.ranking-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.95rem 1rem;
  border-bottom: 1px solid #f1e3d0;
}

.champion {
  background: #fff3d7;
  font-weight: bold;
}

.position {
  font-size: 1.1rem;
  min-width: 3rem;
  color: #6f4e37;
}

.media {
  font-weight: 700;
  color: #8b5e3c;
}
</style>
