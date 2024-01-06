<template>
    <div class="my_collapse">
        <el-collapse accordion v-model="current">
            <el-collapse-item v-for="(item, index) in list" :key="index" :name="index">
                <template #title>
                    <div class="pl-2.5">
                        <span class="s-16-7 mr-2.5">0{{ index + 1 }}</span>
                        <span class="s-16">{{ item.title }}</span>
                    </div>
                    <div class="pr-2.5">
                        <img v-if="current === index" src="@/assets/ios/close.png" alt="" width="10px">
                        <img v-else src="@/assets/ios/open.png" alt="" width="10px">
                    </div>
                </template>
                <div class="s-12-7 px-10">
                    {{ item.content }}
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script setup>
let current = ref(2);

let props = defineProps({
    list: {
        type: Array,
        required: true
    }
})

</script>

<style lang="scss" scoped>
.my_collapse {
    :deep(.el-collapse-item) {
        .el-collapse-item__arrow {
            display: none;
        }

        .el-collapse-item__header {
            justify-content: space-between;

        }
    }
}
</style>