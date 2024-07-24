<script setup>
import TheBanner from '../components/TheBanner.vue'
import TheMenu from '../components/TheMenu.vue'
import TheFooter from '../components/TheFooter.vue'
import Card from '../components/Card.vue'
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/categories'
import { ref, watch, onMounted } from 'vue'

const route = useRoute()
const store = useCategoryStore()
const targetCategory = ref()

watch(store.categories, () => fetch())
watch(route, () => fetch())
onMounted(() => fetch())

function fetch() {
  targetCategory.value = store.categories.value.filter(
    (cat) => cat.slug === route.params.category
  )[0]
}

defineProps({
  category: String
})
</script>
<template>
  <main>
    <TheBanner />
    <TheMenu />

    <template
      v-for="targetSubCategory in targetCategory?.subCategory"
      v-bind:key="targetSubCategory.slug"
    >
      <h1>
        {{ targetSubCategory.name }}
        <RouterLink :to="'/' + route.params.category + '/' + targetSubCategory.slug">
          See all
        </RouterLink>
      </h1>
      <div class="items row">
        <Card
          class="col-sm-12 col-md-4 col-lg-3"
          v-for="artItem in targetSubCategory.artItem"
          v-bind:key="artItem.slug"
          :title="artItem.title"
          :description="artItem.description"
          :image="artItem.image.url"
          :category="route.params.category"
          :subcategory="targetSubCategory.slug"
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
