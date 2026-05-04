<script setup lang="ts">
import { useNewsStore } from '@/stores/useNewsStore'
import { computed, ref } from 'vue'
import NewsCard from '@/components/NewsCard.vue'

const store = useNewsStore()

const sortBy = ref<'date' | 'topic'>('date')
const dateDesc = ref(true)
const topicAsc = ref(true)

const sortedNews = computed(() => {
  const articles = [...store.latestArticles]

  return articles.sort((a, b) => {
    if (sortBy.value === 'date') {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()

      return dateDesc.value ? dateB - dateA : dateA - dateB
    }

    return topicAsc.value
      ? a.topic.localeCompare(b.topic)
      : b.topic.localeCompare(a.topic)
  })
})

function toggleDateSort() {
  sortBy.value = 'date'
  dateDesc.value = !dateDesc.value
}

function toggleTopicSort() {
  sortBy.value = 'topic'
  topicAsc.value = !topicAsc.value
}
</script>

<template>
  <section>
    <h2>Новини</h2>

    <div class="sort-panel">
      <button @click="toggleDateSort">📅</button>
      <button @click="toggleTopicSort">🔤</button>
    </div>

    <NewsCard
      v-for="item in sortedNews"
      :key="item.id"
      :item="item"
    />
  </section>
</template>