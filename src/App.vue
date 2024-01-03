<script setup>
import Header from './components/layout/Header.vue'
import Footer from "./components/layout/Footer.vue"

setElementStyle();
function setElementStyle() {
  const el = document.documentElement;
  el.style.setProperty("--el-color-primary", "#1058DE");
  el.style.setProperty("--el-color-primary-light-5", "#1058DE");
}
const isFixed = ref(true);
function onScroll() {
  // 检查页面滚动位置
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    isFixed.value = false;
  } else {
    isFixed.value = true;
  }
}
onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <div class="bg-white">
    <Header :class="['/'].includes($route.fullPath)?isFixed?'fixed w-full':'hidden':''"></Header>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
