<template>
    <div class="item" :class="item.position == 'right' ? 'flex-row-reverse' : ''">
        <img :class="`img-${index}`" :src="imgList[index]" width="100%" />
        <div class="content">
            <h3 class="text-[26px] mb-8">{{ item.title }}</h3>
            <p class="text-lg">{{ item.content }}</p>
            <el-button type="primary" size="large" class="mt-[22px]" @click="$router.push(item.url)">{{ item.text }}</el-button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'RowItem',
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
                "src/assets/ios/origins@3x.png",
                "src/assets/ios/defi@3x.png",
                "src/assets/ios/99@3x.png"
            ]
        }
    }
};
</script>
  
<style lang="scss"  scoped>
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .img-0 {
        width: 615px;
        height: 615px;
        margin: 0 144px 0 -104px;
    }

    .img-1 {
        width: 543px;
        height: 727px;
        margin: 0 -76px 0 188px;
    }

    .img-2 {
        width: 718px;
        height: 718px;
        margin-left: -104px;
        margin: 0 144px 0 -104px;
    }

}

@media (max-width: 991px) {
    .item {
        flex-direction: column;

        .img-0,
        .img-1,
        .img-2 {
            width: 100%;
            height: 100%;
            margin: 20px 0;
        }
    }
}
</style>