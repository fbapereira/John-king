<script setup>
import TheMenu from '../components/TheMenu.vue'
import TheFooter from '../components/TheFooter.vue'
import Card from '../components/Card.vue'
import { useCategoryStore } from '@/stores/categories'
import { useRoute } from 'vue-router'
import { ref, watch, onMounted } from 'vue'

const route = useRoute()
const store = useCategoryStore()
const targetCategory = ref()
const targetSubcategory = ref()

watch(store.categories, () => fetch())
watch(route, () => fetch())
onMounted(() => fetch())

function fetch() {
  targetCategory.value = store.categories.value.filter(
    (cat) => cat.slug === route.params.category
  )[0]

  if (!targetCategory.value) return
  targetSubcategory.value = targetCategory.value.subCategory.filter(
    (art) => art.slug === route.params.subcategory
  )[0]
}

defineProps({
  category: String,
  subcategory: String
})
</script>
<template>
  <main>
    <div class="header">
      <TheMenu />
    </div>
    <h1>
      {{ targetCategory?.name }} <small>{{ targetSubcategory?.name }}</small>
    </h1>
    <div class="items row">
      <Card
        class="col-sm-12 col-md-4 col-lg-3"
        v-for="artItem in targetSubcategory?.artItem ?? []"
        v-bind:key="artItem.slug"
        :title="artItem.title"
        :description="artItem.description"
        :image="artItem.image.url"
        :category="route.params.category"
        :subcategory="route.params.subcategory"
        :slug="artItem.slug"
      />
    </div>
  </main>
  <TheFooter />
</template>

<style lang="scss" scoped>
.header {
  margin-top: 2rem;
}

h1 {
  color: var(--primary-color);
  margin-left: 10%;
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;

  small {
    font-size: 1rem;
    color: white;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
}

.items {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10%;
}
</style>
