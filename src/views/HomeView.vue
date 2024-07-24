<script setup>
import TheBanner from '../components/TheBanner.vue'
import TheFooter from '../components/TheFooter.vue'

import { useCategoryStore } from '@/stores/categories'
import { RouterLink } from 'vue-router'

const store = useCategoryStore()
const categories = store.categories
</script>

<template>
  <main>
    <TheBanner />
    <div class="container">
      <div class="row">
        <div
          class="card col-sm-12 col-md-4 col-lg-4"
          v-for="category in categories"
          v-bind:key="category.slug"
        >
          <div class="container-card bg-green-box">
            <RouterLink :to="category.slug">
              <p class="card-title">{{ category.name }}</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  background-color: transparent;
  margin-bottom: 2rem;
}

.container-card {
  position: relative;
  border: 2px solid transparent;
  background: linear-gradient(71deg, #080509, #1a171c, #080509);
  background-clip: padding-box;
  border-radius: 45px;
  position: relative;
  padding: 5px;

  &:hover {
    border: 2px solid var(--primary-color);
    background-color: var(--primary-color);
    a {
      text-decoration: none;
    }
  }
}

.container-card::after {
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  content: '';
  z-index: -1;
  border-radius: 45px;
  background: linear-gradient(71deg, #0d1212, var(--primary-color), #0d1212);
}

.card-title {
  color: var(--primary-color);
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0;
}
</style>
