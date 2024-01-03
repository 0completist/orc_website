<template>
    <div class="text-columns-container row-box">
        <el-row :gutter="24">
            <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" v-for="(item, index) in list" :key="index">
                <div class="text-column">
                    <p class="mb-2">{{ item.date }}</p>
                    <p class="text-[18px] text-black leading-5 font-medium mb-4">{{ item.title }}</p>
                    <p class="leading-4 mb-7">{{ item.content }}</p>
                    <p class="flex items-center text-black font-medium">
                        <span class="mr-1" @click="$router.push('/learnMore')">READ MORE</span>
                        <el-icon>
                            <ArrowRightBold />
                        </el-icon>
                    </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
  
<script>
export default {
    name: 'TextColumns',
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.text-columns-container {
    padding: 24px 0;
}

.text-column {
    padding: 20px;
    color: #4B4B4B;
    font-size: 12px;
    box-shadow: 0px 4px 4px 0px rgba(233, 233, 233, 0.5);
    border: 1px solid rgba(243, 243, 243, 1);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);
}

.text-column:hover {
    cursor: pointer;
    border: 1px solid #1058DE;
}

/* 响应式样式 */
@media (max-width: 768px) {
    .text-column {
        margin-bottom: 24px;
    }
}
</style>