<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="brand">☕ Coffee Quality</div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cafes">Cafés</RouterLink>
        <RouterLink to="/avaliar">Avaliar</RouterLink>
        <RouterLink to="/ranking">Ranking</RouterLink>
      </nav>
    </header>

    <main class="page-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #5f3f2d;
  color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
}

.brand {
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.04em;
}

nav {
  display: flex;
  gap: 0.75rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
}

nav a:hover {
  background: rgba(255,255,255,0.16);
}

.page-content {
  flex: 1;
}
</style>
