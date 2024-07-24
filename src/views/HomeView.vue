<script setup>
import TheBanner from '../components/TheBanner.vue'
import TheMenu from '../components/TheMenu.vue'
import TheFooter from '../components/TheFooter.vue'
import Card from '../components/Card.vue'
import { useCategoryStore } from '@/stores/categories'

const store = useCategoryStore()
const categories = store.categories
</script>

<template>
  <main>
    <TheBanner />
    <TheMenu />

    <template v-for="category in categories" v-bind:key="category.slug">
      <h1>
        {{ category.name }}
        <RouterLink :to="category.slug"> See all </RouterLink>
      </h1>
      <div class="items" v-for="artItem in category.artItem" v-bind:key="artItem.slug">
        <Card
          :title="artItem.title"
          :description="artItem.description"
          :image="artItem.image.url"
          :category="category.slug"
          :slug="artItem.slug"
        />
      </div>
    </template>
  </main>
  <TheFooter />
</template>

<style lang="scss" scoped>
h1 {
  color: var(--primary-color);
  margin-left: 10%;
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;

  a {
    font-size: 0.75rem;
    color: white;
    text-decoration: underline;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
}

.items {
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  overflow: scroll;
  scroll-behavior: auto;
  padding: 0 10%;
}
</style>
