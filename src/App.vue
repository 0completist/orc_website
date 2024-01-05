<script setup>
import Header from './components/layout/Header.vue'
import Footer from "./components/layout/Footer.vue"

setElementStyle();
function setElementStyle() {
  const el = document.documentElement;
  el.style.setProperty("--el-color-primary", "#1058DE");
  el.style.setProperty("--el-color-primary-light-5", "#1058DE");
}
</script>

<template>
  <div class="bg-white">
    <Header class="fixed top-0 z-10 w-full"></Header>
    <RouterView class="mt-[80px]" />
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
