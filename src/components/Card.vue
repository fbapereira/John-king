<script setup>
defineProps({
  title: String,
  description: String,
  image: String
})
</script>

<template>
  <div class="card">
    <div class="wrapper">
      <img class="banner-image" :src="image" alt="image" />
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-description">
        {{ description }}
      </p>
    </div>
    <div class="button-wrapper">
      <button class="btn outline">Read More</button>
      <!-- <button class="btn fill">BUY NOW</button> -->
    </div>
  </div>
</template>

<style scoped>
.card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 15px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 20rem;
}

.banner-image {
  background-position: center;
  background-size: cover;
  height: 300px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
}

.card-title {
  font-size: 1.3rem;
  margin-top: 1rem;
  color: var(--primary-color);
}

.card-description {
  color: #cfcfcf;
  text-align: center;
}
.button-wrapper {
  width: 80%;
}

.btn {
  border: none;
  padding: 8px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  width: 100%;
}

.btn + .btn {
  margin-left: 10px;
}

.outline {
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  transition: all 0.3s ease;
}

.outline:hover {
  transform: scale(1.05);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.fill {
  background: var(--primary-color);
  color: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all 0.3s ease;
}

.fill:hover {
  transform: scale(1.125);
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
  transition: all 0.3s ease;
}
</style>
