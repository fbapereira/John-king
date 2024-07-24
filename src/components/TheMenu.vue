<script setup>
import { useCategoryStore } from '@/stores/categories'
import { RouterLink } from 'vue-router'

const store = useCategoryStore()
const categories = store.categories
</script>
<template>
  <!--  -->
  <div class="menu">
    <div class="menu-item">
      <RouterLink :to="'/'">
        <div class="container-card">Home</div>
      </RouterLink>
    </div>
    <div class="menu-item" v-for="category in categories" v-bind:key="category.slug">
      <RouterLink :to="'/' + category.slug">
        <div class="container-card">{{ category.name }}</div>
      </RouterLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: nowrap;

  .menu-item {
    width: 10rem;
    color: var(--primary-color);
    text-align: center;

    .container-card {
      position: relative;
      border: 2px solid transparent;
      background: linear-gradient(71deg, #080509, #1a171c, #080509);
      background-clip: padding-box;
      border-radius: 45px;
      padding: 8px;
      cursor: pointer;
      color: var(--primary-color);

      transition:
        color 0.5s,
        border 0.5s,
        text-decoration 0.5s,
        background-color 0.5s;

      &::before {
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

      &:hover {
        border: 2px solid var(--primary-color);
        background-color: var(--primary-color);
        text-decoration: underline;
      }
    }

    .router-link-active {
      .container-card {
        border: 2px solid var(--primary-color);
        background-color: var(--primary-color);
      }
    }
  }
}
</style>
