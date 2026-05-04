<script setup lang="ts">
import { useNewsStore } from '@/stores/useNewsStore'
import { computed } from 'vue'
import NewsCard from '@/components/NewsCard.vue'

const store = useNewsStore()

const favoriteArticles = computed(() =>
  store.articles.filter(a => store.favorites.includes(a.id))
)
</script>

<template>
  <section>
    <h2>⭐ Обрані новини</h2>

    <div v-if="favoriteArticles.length">
      <NewsCard
        v-for="item in favoriteArticles"
        :key="item.id"
        :item="item"
      />
    </div>

    <p v-else>Немає обраних новин</p>
  </section>
</template>