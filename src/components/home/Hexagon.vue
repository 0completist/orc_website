<template>
    <!-- <div class="hexagon">
        <img :src="icon" alt="" width="38px">
    </div> -->
    <div class="hexagon">
        <div class="shadow1"></div>
        <img :src="icon" alt="" width="38px">
        <div class="shape"></div>
    </div>
</template>


<script setup>
const props = defineProps({
    icon: String
})

</script>


<style lang="scss" scoped>
.hexagon {
    position: relative;
    width: 90px;
    height: 90px;
}

.hexagon img{
    position: absolute;
    z-index: 3;
    left: calc(50% - 19px);
    top: calc(50% - 19px);
}

.shape {
    width: 100%;
    height: 100%;
    background-color: #fff;
    clip-path:polygon(50% 0%, 100% 30%, 100% 50%, 100% 72%, 50% 100%, 0% 70%, 0% 50%, 0% 30%);
    position: absolute;
    top: 0;
    z-index: 2;
}

.shadow1 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 102%;
    height: 104%;
    background-color: rgba(0, 0, 0, 0.07);
    clip-path: polygon(50% 0%, 100% 30%, 100% 50%, 100% 72%, 50% 100%, 0% 70%, 0% 50%, 0% 30%);
    transform: translate(-50%, -50%);
    z-index: 1;
}
</style>