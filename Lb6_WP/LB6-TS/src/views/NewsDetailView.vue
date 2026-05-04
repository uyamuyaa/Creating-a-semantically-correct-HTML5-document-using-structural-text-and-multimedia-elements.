<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useNewsStore } from '@/stores/useNewsStore'

const route = useRoute()
const store = useNewsStore()

// ✅ правильна обробка типу
const rawId = route.params.id
const id = Number(Array.isArray(rawId) ? rawId[0] : rawId)

const article = store.articles.find(a => a.id === id)
</script>

<template>
  <section v-if="article" class="news-card">
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
    <p><strong>Автор:</strong> {{ article.author }}</p>
    <p><strong>Дата:</strong> {{ article.date }}</p>

<button
  @click="store.toggleFavorite(article.id)"
  :class="['favorite-btn', { active: store.favorites.includes(article.id) }]"
>
  ⭐ В обране
</button>
  </section>

  <p v-else>Новину не знайдено</p>
</template>