<script setup></script>
<template>
  <!-- RouterLink to="/">Home</RouterLink> -->
  <div class="menu">
    <div class="menu-item">
      <div class="container-card">Jak Planks</div>
    </div>
    <div class="menu-item">
      <div class="container-card">Books</div>
    </div>
    <div class="menu-item">
      <div class="container-card">Audi Visual</div>
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
    color: #2ab8ba;
    text-align: center;

    .container-card {
      position: relative;
      border: 2px solid transparent;
      background: linear-gradient(71deg, #080509, #1a171c, #080509);
      background-clip: padding-box;
      border-radius: 45px;
      padding: 8px;

      &::before {
        position: absolute;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        content: '';
        z-index: -1;
        border-radius: 45px;
        background: linear-gradient(71deg, #0d1212, #2ab8ba, #0d1212);
      }
    }
  }
}
</style>
