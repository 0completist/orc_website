<script  setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>
<template>
    <div class="header">
        <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect">
            <el-menu-item index="0">
                <div class="flex items-center">
                    <img src="@/assets/web/logo.png" class="w-10 h-10" />
                    <p class="ml-2.5 text-white">ORis Smart Chain</p>
                </div>
            </el-menu-item>
            <div class="grow hidden-sm-and-down"></div>
            <el-sub-menu class="hidden-sm-and-down" index="1" popper-class="Developers">
                <template #title>Chains</template>
                <el-sub-menu index="1-1" popper-class="Developers-item">
                    <template #title>
                        <div class="leading-4">
                            <p>ORIS Smart Chain</p>
                            <p class="text-[#B4B4B4] text-[10px]">Build Web3 dApps effortlessly</p>
                        </div>
                    </template>
                    <el-menu-item index="1-1-1">item one</el-menu-item>
                    <el-menu-item index="1-1-2">item two</el-menu-item>
                    <el-menu-item index="1-1-3">item three</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="1-2" popper-class="Developers-item">
                    <template #title>
                        <div class="leading-4">
                            <p>ORIS Beacon Chain</p>
                            <p class="text-[#B4B4B4] text-[10px]">ORIS Chain ecosystem’s staking & governance layer</p>
                        </div>
                    </template>
                    <el-menu-item index="1-2-1">item one</el-menu-item>
                    <el-menu-item index="1-2-2">item two</el-menu-item>
                    <el-menu-item index="1-2-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu class="hidden-sm-and-down" index="2" popper-class="Developers">
                <template #title>Developers</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4" popper-class="Developers-item">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu class="hidden-sm-and-down" index="3" popper-class="Developers">
                <template #title>Ecosystemrtners</template>
                <el-menu-item index="3-1">item one</el-menu-item>
                <el-menu-item index="3-2">item two</el-menu-item>
                <el-menu-item index="3-3">item three</el-menu-item>
                <el-sub-menu index="3-4" popper-class="Developers-item">
                    <template #title>item four</template>
                    <el-menu-item index="3-4-1">item one</el-menu-item>
                    <el-menu-item index="3-4-2">item two</el-menu-item>
                    <el-menu-item index="3-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu class="hidden-sm-and-down" index="4" popper-class="Developers">
                <template #title>Community</template>
                <el-menu-item index="4-1">item one</el-menu-item>
                <el-menu-item index="4-2">item two</el-menu-item>
                <el-menu-item index="4-3">item three</el-menu-item>
                <el-sub-menu index="4-4" popper-class="Developers-item">
                    <template #title>item four</template>
                    <el-menu-item index="4-4-1">item one</el-menu-item>
                    <el-menu-item index="4-4-2">item two</el-menu-item>
                    <el-menu-item index="4-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<style lang="scss">
/* element-plus 的样式覆盖 */
.el-menu {
    background: linear-gradient(to right, #1059DE, #0A072D);
    border: none !important;
    --el-menu-text-color: #ffffff;
    --el-menu-hover-bg-color: #0A072D;
    --el-menu-item-active-bg-color: #00205C;
    --el-menu-item-active-text-color: #ffffff;
    --el-menu-item-hover-bg-color: #00205C;
    --el-menu-item-hover-text-color: #ffffff;
}

.Developers {
    min-height: 361px;
    border: none !important;

    .el-menu {
        background: #0A072D;
        --el-menu-hover-text-color: #ffffff;
        --el-menu-bg-color: #0A072D;
        --el-menu-active-color: #ffffff;

        .el-menu-item:not(.is-disabled):hover {
            background-color: #00205C;
        }

        .el-sub-menu {
            .el-sub-menu__title:hover {
                background-color: #00205C;
            }
        }

        .el-menu-item.is-active {
            background-color: #00205C;
        }

        .el-sub-menu.is-active {
            background-color: #00205C;
        }
    }
}

.Developers-item {
    min-height: 361px;
    border: none !important;
    .el-menu {
        background: #00205C;
        --el-menu-hover-text-color: #ffffff;
        --el-menu-bg-color: #00205C;
        --el-menu-active-color: #ffffff;

        .el-menu-item:not(.is-disabled):hover {
            background-color: #0A072D;
        }
        .el-sub-menu {
            .el-sub-menu__title:hover {
                background-color: #0A072D;
            }
        }

        .el-menu-item.is-active {
            background-color: #0A072D;
        }

        .el-sub-menu.is-active {
            background-color: #0A072D;
        }
    }
}

.el-menu--horizontal {
    .el-sub-menu {
        .el-sub-menu__title:hover {
            background-color: transparent;
        }
    }

    .el-sub-menu.is-active {
        .el-sub-menu__title {
            border-bottom: none;
        }
    }

    .el-menu-item:not(.is-disabled):hover {
        background-color: transparent;
    }

    .el-menu-item:not(.is-disabled):focus {
        background-color: transparent;
    }
}
</style>
<style lang="scss" scoped>
</style>