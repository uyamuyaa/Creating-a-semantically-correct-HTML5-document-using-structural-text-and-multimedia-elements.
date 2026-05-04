<script setup lang="ts">
import { useNewsStore } from '@/stores/useNewsStore'

const store = useNewsStore()
</script>

<template>
    
    <section>
        <h2>Теми</h2>
            <section class = "news-card">
            <h3>Тварини</h3>
                <p v-for="a in store.groupedArticles.Тварини" :key="a.id"><a href="/#"></a>
                    <RouterLink :to="{ path: '/news', hash: '#article-' + a.id }">🔎</RouterLink>
                {{ a.title }}
                </p>
            </section>

            <section class = "news-card">
            <h3>Смаколики</h3>
                <p v-for="a in store.groupedArticles.Смаколики" :key="a.id">
                    <RouterLink :to="{ path: '/news', hash: '#article-' + a.id }">🔎</RouterLink>
                {{ a.title }}
                </p>
            </section>

            <section class = "news-card">
            <h3>Екскурсії</h3>
                <p v-for="a in store.groupedArticles.Екскурсії" :key="a.id">
                    <RouterLink :to="{ path: '/news', hash: '#article-' + a.id }">🔎</RouterLink>
                {{ a.title }}
                </p>
            </section>
    </section>

</template>