<script setup lang="ts">
import { useNewsStore } from '@/stores/useNewsStore'
import { useRoute } from 'vue-router'

const store = useNewsStore()
const route = useRoute()
</script>
<template>

  <header>
    <h1 id="golov">Новинний портал чудес</h1>
  </header>



  <!--МЕНЮ -->
  <nav class="spa-nav">
    <ul>
      <li><RouterLink to="/">Головна</RouterLink></li>
      <li><RouterLink to="/news">Новини</RouterLink></li>
      <li><RouterLink to="/topics">Теми</RouterLink></li>
          <!-- ✅ ЛІЧИЛЬНИК -->
      <li>  
        <RouterLink to="/favorites">
          ⭐ Обране ({{ store.favoritesCount }})
        </RouterLink>
      </li>
    </ul>
  </nav>
  <!-- ✅ ДОДАТКОВЕ МЕНЮ ТІЛЬКИ НА ГОЛОВНІЙ -->
<nav v-if="route.path === '/'" aria-label="Головне меню">
  <ul>
    <li><a href="#protv">Про тваринок</a></li>
    <li><a href="#smak">Нові смаколики</a></li>
    <li><a href="#eks">Екскурсії</a></li>
  </ul>
</nav>



  <main>
    <RouterView />

    <!-- САЙДБАР  -->
    <aside>
      <table>
        <caption>Архів публікацій за місяць</caption>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Заголовок</th>
            <th>Автор</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>02.03.26</td>
            <td>Народились 3 змієкрила</td>
            <td>Боб удав</td>
          </tr>
          <tr>
            <td>14.03.26</td>
            <td>Впало дерево</td>
            <td>Миша Зус</td>
          </tr>
          <tr>
            <td>21.03.26</td>
            <td>Концерт Bil0k</td>
            <td>Черепаха Аха</td>
          </tr>
          <tr>
            <td>30.03.26</td>
            <td>Драка кабанів</td>
            <td>Велика Ведмедиця</td>
          </tr>
        </tbody>
      </table>
      <p>
    Детальніше читайте на 
    <a href="https://www.bbc.com" target="_blank" rel="noopener noreferrer">
        зовнішньому сайті
    </a>
      </p>  
    </aside>
  </main>

  <footer>
    <p>© 2026 Чарівні новини</p>
  </footer>
</template>
