<script setup>
import TheMenu from '../components/TheMenu.vue'
import TheFooter from '../components/TheFooter.vue'
import { useCategoryStore } from '@/stores/categories'
import { useRoute } from 'vue-router'
import { ref, watch, onMounted } from 'vue'

const route = useRoute()
const store = useCategoryStore()
const targetCategory = ref()
const targetSubcategory = ref()
const targetArtItem = ref()

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
  if (!targetSubcategory.value) return

  targetArtItem.value = targetSubcategory.value.artItem.filter(
    (art) => art.slug === route.params.artItem
  )[0]
}

defineProps({
  category: String,
  subcategory: String,
  artItem: String
})
</script>
<template>
  <main>
    <div class="header">
      <TheMenu />
    </div>
    <img class="image" :src="targetArtItem?.image?.url" alt="image" />
    <h1>{{ targetArtItem?.title }}</h1>
    <div class="page" :innerHTML="targetArtItem?.fullPage.html"></div>
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
