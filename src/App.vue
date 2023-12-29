<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
  <div>
    <Header></Header>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
