<template>
    <div class="flex justify-center">
        <h1 class="text-xl mt-6 mr-[-50px]">{{ title }}</h1>
        <img src="@/assets/ios/title-bg.png" alt="" width="97px">
    </div>
</template>


<script setup>

const props = defineProps({
    title: String,
})
</script>


<style lang="scss" scoped>

</style>