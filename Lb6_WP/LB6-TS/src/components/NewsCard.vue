<script setup lang="ts">
import type { Article } from '@/types'
import { useNewsStore } from '@/stores/useNewsStore'

const store = useNewsStore()

defineProps<{ item: Article }>()
</script>

<template>
  <div class="news-card">
    <h3>{{ item.title }}</h3>
    <p>{{ item.topic }}</p>

<button
  @click="store.toggleFavorite(item.id)"
  :class="['favorite-btn', { active: store.favorites.includes(item.id) }]"
>
  ⭐
</button>

    <RouterLink :to="`/news/${item.id}`">
      Детальніше
    </RouterLink>
  </div>
</template>