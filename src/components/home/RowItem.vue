<template>
    <div class="item" :class="item.position == 'right' ? 'flex-row-reverse' : ''">
        <img :src="imgList[index]" class="md:w-[305px] sm:w-full" />

        <!-- <el-image class="md:w-[305px] sm:w-full" :src="imgList[index]" fit="cover" /> -->
        <div class="w-1/3">
            <h3 class="text-2xl text-black mb-3">{{ item.title }}</h3>
            <p>{{ item.content }}</p>
            <el-button type="primary" size="large" class="mt-3">{{ item.text }}</el-button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'TextColumns',
    props: {
        item: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            imgList: [
                "src/assets/web/origins.png",
                "src/assets/web/defi.png",
                "src/assets/web/99.png"
            ]
        }
    }
};
</script>
  
<style  scoped>
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (max-width: 991px) {
    .item {
        flex-direction: column;
    }
}
</style>