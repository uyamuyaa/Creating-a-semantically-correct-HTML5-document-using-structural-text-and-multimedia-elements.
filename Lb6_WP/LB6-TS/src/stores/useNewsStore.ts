import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Article } from '@/types'

export const useNewsStore = defineStore('news', () => {

  const articles = ref<Article[]>([
    {
      id: 1,
      title: 'Спостереження за поведінкою',
      topic: 'Тварини',
      date: '2026-03-02',
      author: 'Боб удав',
      content: 'Навіть у звичайних тварин можна помітити незвичайні звички...'
    },
    {
      id: 2,
      title: 'Нічна активність',
      topic: 'Тварини',
      date: '2026-03-03',
      author: 'Сова',
      content: 'Багато тварин проявляють активність уночі...'
    },
    {
      id: 3,
      title: 'Дегустація чарівних новинок',
      topic: 'Смаколики',
      date: '2026-03-10',
      author: 'Миша',
      content: 'Навіть серед звичайних десертів можна знайти шедеври...'
    },
    {
      id: 4,
      title: 'Магія в кожному шматочку',
      topic: 'Смаколики',
      date: '2026-03-11',
      author: 'Лис',
      content: 'Деякі смаколики реагують на настрій...'
    },
    {
      id: 5,
      title: 'Мудра сова',
      topic: 'Екскурсії',
      date: '2026-03-20',
      author: 'Сова',
      content: 'Озеро фей — загадкове місце...'
    },
    {
      id: 6,
      title: 'Магічний водоспад',
      topic: 'Екскурсії',
      date: '2026-03-21',
      author: 'Білка',
      content: 'Вода ніби світиться...'
    }
  ])

  // ⭐ ОБРАНЕ
  const favorites = ref<number[]>([])

  function toggleFavorite(id: number) {
    if (favorites.value.includes(id)) {
      favorites.value = favorites.value.filter(f => f !== id)
    } else {
      favorites.value.push(id)
    }
  }

  const favoritesCount = computed(() => favorites.value.length)

  const groupedArticles = computed(() => {
    return {
      Тварини: articles.value.filter(a => a.topic === 'Тварини'),
      Смаколики: articles.value.filter(a => a.topic === 'Смаколики'),
      Екскурсії: articles.value.filter(a => a.topic === 'Екскурсії')
    }
  })

  const latestArticles = computed(() =>
    [...articles.value].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  )

  return {
    articles,
    groupedArticles,
    latestArticles,
    favorites,
    favoritesCount,
    toggleFavorite
  }
})