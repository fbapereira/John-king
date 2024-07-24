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
    <div class="header">
      <TheMenu />
    </div>
    <h1>{{ targetCategory?.name }}</h1>
    <div class="items" v-for="artItem in targetCategory?.artItem ?? []" v-bind:key="artItem.slug">
      <Card :title="artItem.title" :description="artItem.description" :image="artItem.image.url" />
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
  flex-wrap: wrap;
  padding: 0 10%;
}
</style>
