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
    <div class="gradient-cards container">
      <div class="row">
        <div
          class="card col-sm-12 col-md-4 col-lg-4"
          v-for="category in categories"
          v-bind:key="category.slug"
        >
          <div class="container-card bg-green-box">
            <p class="card-title">{{ category.name }}</p>
            <p class="card-description">{{ category.description }}</p>
            <RouterLink :to="category.slug">View more</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
</template>

<style lang="scss" scoped>
.gradient-cards {
  display: flex;
}

.card {
  max-width: 550px;
  border: 0;
  width: 100%;
  margin-inline: auto;
  background-color: transparent;
  margin-bottom: 2rem;
}

.container-card {
  position: relative;
  border: 2px solid transparent;
  background: linear-gradient(71deg, #080509, #1a171c, #080509);
  background-clip: padding-box;
  border-radius: 45px;
  padding: 40px;
  position: relative;

  img {
    margin-bottom: 32px;
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
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: -0.02em;
  line-height: 40px;
  font-style: normal;
  font-size: 28px;
  padding-bottom: 8px;
  text-align: center;
}

.card-description {
  line-height: 32px;
  color: #eee;
  font-size: 16px;
  max-width: 470px;
  text-align: center;
}
</style>
