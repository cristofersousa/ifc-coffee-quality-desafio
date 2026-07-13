<script setup>
import { computed } from 'vue'
import RankingItem from '../components/RankingItem.vue'
import { rankingCafes } from '../data/coffeeStore'

const ranking = computed(() => rankingCafes.value)
</script>

<template>
  <section class="page">
    <div class="panel">
      <h1>RANKING</h1>
      <p v-if="ranking.length" class="subtitle">As médias são atualizadas automaticamente após cada avaliação.</p>
      <p v-if="ranking[0] && ranking[0].media >= 8" class="champion-badge">🏆 Campeão do Campeonato</p>
      <ul v-if="ranking.length" class="ranking-list">
        <RankingItem v-for="(cafe, index) in ranking" :key="cafe.id" :cafe="cafe" :posicao="index + 1" />
      </ul>
      <p v-else class="empty">Nenhuma avaliação registrada ainda.</p>
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
  margin-bottom: 0.4rem;
  font-size: 1.8rem;
  font-weight: 800;
}

.subtitle {
  color: #7a4f2f;
  text-align: center;
}

.champion-badge {
  display: inline-block;
  margin: 0.5rem 0 1rem;
  background: #fff3d7;
  color: #8a5a1d;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  font-weight: 700;
}

.ranking-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  background: #fffefb;
  border: 1px solid #e8d0b0;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0,0,0,0.06);
}

.empty {
  color: #8b5e3c;
  font-weight: 600;
  text-align: center;
}
</style>
