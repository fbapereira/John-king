<script setup>
import TheMenu from '../components/TheMenu.vue'
import TheFooter from '../components/TheFooter.vue'
import { useCategoryStore } from '@/stores/categories'
import { useRoute } from 'vue-router'
import { ref, watch, onMounted } from 'vue'

const route = useRoute()
const store = useCategoryStore()
const artItem = ref()

watch(store.categories, () => fetch())
watch(route, () => fetch())
onMounted(() => fetch())

function fetch() {
  const category = store.categories.value.filter((cat) => cat.slug === route.params.category)[0]
  if (!category) return
  artItem.value = category.artItem.filter((art) => art.slug === route.params.artItem)[0]
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
    <img class="image" :src="artItem?.image?.url" alt="image" />
    <h1>{{ artItem?.title }}</h1>
    <div class="page" :innerHTML="artItem?.fullPage.html"></div>
  </main>
  <TheFooter />
</template>

<style lang="scss" scoped>
.header {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

p {
  color: #cfcfcf;
  text-align: center;
}

h1 {
  color: var(--primary-color);
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
}

.image {
  max-height: 80vh;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 90%;
}

.page {
  width: 80%;
  margin: auto;
  color: white;
}
</style>
