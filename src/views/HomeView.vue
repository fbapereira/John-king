<script setup>
import TheBanner from '../components/TheBanner.vue'
import TheMenu from '../components/TheMenu.vue'
import TheFooter from '../components/TheFooter.vue'
import Card from '../components/Card.vue'
</script>

<template>
  <main>
    <TheBanner />
    <TheMenu />

    <h1>Planks <a href="">See all</a></h1>
    <div class="items">
      <Card
        :title="'Title 1'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/jakplank_01.jpg'"
      />
      <Card
        :title="'Title 2'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/jakplank_02.jpg'"
      />
      <Card
        :title="'Title 3'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/jakplank_03.jpg'"
      />
      <Card
        :title="'Title 4'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/jakplank_04.jpg'"
      />
      <Card
        :title="'Title 5'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/jakplank_05.jpg'"
      />
    </div>

    <h1>Books <a href="">See all</a></h1>
    <div class="items">
      <Card
        :title="'Title 1'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/poem_01.jpg'"
      />
      <Card
        :title="'Title 2'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/poem_02.jpg'"
      />
      <Card
        :title="'Title 3'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/poem_03.jpg'"
      />
      <Card
        :title="'Title 4'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/poem_04.jpg'"
      />
      <Card
        :title="'Title 5'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/poem_05.jpg'"
      />
    </div>

    <h1>Audio Visual <a href="">See all</a></h1>
    <div class="items">
      <Card
        :title="'Title 1'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/blue_01.jpg'"
      />
      <Card
        :title="'Title 2'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/blue_02.jpg'"
      />
      <Card
        :title="'Title 3'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/blue_03.jpg'"
      />
      <Card
        :title="'Title 4'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/blue_04.jpg'"
      />
      <Card
        :title="'Title 5'"
        :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
        :image="'../../src/assets/blue_05.jpg'"
      />
    </div>
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
