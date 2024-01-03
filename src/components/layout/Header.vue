<script setup>
import sm_menu from './component/sm_menu.vue'
const router = useRouter();

const activeIndex = ref('1');
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
  switch (key) {
    case "0":
      router.push('/');
      break;
    case "2-1":
      router.push('/start/building');
      break;
    case "3-1":
      router.push('/wallet');
      break;
    case "4-1":
      router.push('/join');
      break;
  }
}
const smMenu = ref(null)
</script>
<template>
  <div class="header" :class="[$route.fullPath === '/' ? 'bg-transparent' : 'bg-gradient-to-r from-primary to-primaryG']">
    <el-menu :popper-offset="10" class="menuContent" :default-active="activeIndex" mode="horizontal" :ellipsis="false"
      background-color="transparent" @select="handleSelect">
      <!--      logo-->
      <el-menu-item index="0">
        <div class="flex items-center">
          <img src="@/assets/web/logo.png" class="w-12 h-12" />
          <p class="ml-5 text-white text-base">ORis Smart Chain</p>
        </div>
      </el-menu-item>

      <div class="grow"></div>

      <!--      dropdown-->
      <el-sub-menu class="hidden-sm-and-down" index="1" popper-class="Developers">
        <template #title>Chains</template>
        <el-sub-menu index="1-1" popper-class="Developers-item">
          <template #title>
            <div class="leading-4 max-w-[189px] whitespace-pre-wrap">
              <p>ORIS Smart Chain</p>
              <p class="text-[#B4B4B4] text-[10px] mt-2.5">Build Web3 dApps effortlessly</p>
            </div>
          </template>
          <el-menu-item index="1-1-1">
            <div class="flex flex-col w-full mx-2.5">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="mr-2.5"><img src="@/assets/web/logo.png" class="w-6 h-6" /></div>
                  <p>ORIS Smart Chain</p>
                </div>
                <img src="@/assets/web/jiantou_blue.png" class="w-3.33 h-2 ml-12">
              </div>
              <div class="ml-9 mt-4">
                <el-link :underline="false" type="primary">
                  <span class="font-normal text-xs">Learn More</span>
                </el-link>
              </div>
            </div>
          </el-menu-item>
          <el-menu-item index="1-1-2">
            <div class="flex flex-col w-full mx-2.5">
              <div class="flex items-center">
                <div class="flex items-center">
                  <div class="mr-2.5"><img src="@/assets/web/文件备份.png" class="w-[18px] h-[18px] text-white" /></div>
                  <p>Documentation</p>
                </div>
              </div>
              <div class="ml-7 mt-2.5">
                <p class="text-[#B4B4B4] text-[10px]">Build Web3 dApps effortlessly</p>
              </div>
            </div>
          </el-menu-item>
          <el-menu-item index="1-1-3">
            <div class="flex flex-col w-full mx-2.5">
              <div class="flex items-center">
                <div class="flex items-center">
                  <div class="mr-2.5"><img src="@/assets/web/github-fill.png" class="w-[18px] h-[18px] text-white" />
                  </div>
                  <p>GitHub</p>
                </div>
              </div>
              <div class="ml-7 mt-2.5">
                <p class="text-[#B4B4B4] text-[10px]">Explore ORIS tech repositories</p>
              </div>
            </div>
          </el-menu-item>
          <el-menu-item index="1-1-4">
            <div class="flex flex-col w-full mx-2.5">
              <div class="flex items-center">
                <div class="flex items-center">
                  <div class="mr-2.5"><img src="@/assets/web/shuilongtou备份.png" class="w-[18px] h-[18px] text-white" />
                  </div>
                  <p>Faucet</p>
                </div>
              </div>
              <div class="ml-7 mt-2.5">
                <p class="text-[#B4B4B4] text-[10px]">Pilot tokens on ORIS Smart Chain</p>
              </div>
            </div>
          </el-menu-item>
          <el-menu-item index="1-1-5">
            <div class="flex flex-col w-full mx-2.5">
              <div class="flex items-center">
                <div class="flex items-center">
                  <div class="mr-2.5"><img src="@/assets/web/skan%20备份.png" class="w-[18px] h-[18px] text-white" />
                  </div>
                  <p>BscScan</p>
                </div>
              </div>
              <div class="ml-7 mt-2.5">
                <p class="text-[#B4B4B4] text-[10px]">Block explorer and analytics platform</p>
              </div>
            </div>
          </el-menu-item>
          <el-menu-item index="1-1-6">
            <div class="flex items-center">
              <p class="text-white text-[10px] ml-10">Add ORIS Smart Chain Network</p>
              <div class="ml-[15px]"><img src="@/assets/web/logo_metamask.png" class="w-[18px] h-[18px] text-white" />
              </div>
            </div>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-2" popper-class="Developers-item">
          <template #title>
            <div class="leading-4 max-w-[189px] whitespace-pre-wrap">
              <p>ORIS Beacon Chain</p>
              <p class="text-[#B4B4B4] text-[10px] mt-2.5">ORIS Chain ecosystem’s staking & governance layer</p>
            </div>
          </template>
          <!-- <el-menu-item index="1-2-1">
            item one
          </el-menu-item>
          <el-menu-item index="1-2-2">item two</el-menu-item>
          <el-menu-item index="1-2-3">item three</el-menu-item> -->
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu class="hidden-sm-and-down" index="2" popper-class="Developers">
        <template #title>Developers</template>
        <el-menu-item index="2-1">
          <div class="flex flex-col w-full mx-2.5">
            <div class="flex items-center justify-between">
              <div class="flex flex-col justify-start">
                <p>ORIS Smart Chain</p>
                <p class="text-[#B4B4B4] text-[9px] mt-[13px]">Build Web3 dApps effortlessly</p>
                <a href="#" class="text-xs font-light text-[#1058DE] mt-4">Start building</a>
              </div>
              <img src="@/assets/web/jinbi.png" class="w-14 h-14 ml-12">
            </div>
          </div>
        </el-menu-item>
        <el-menu-item index="2-2">
          <div class="flex flex-col w-full mx-2.5">
            <div class="flex items-center">
              <div class="flex items-center">
                <div class="mr-2.5"><img src="@/assets/web/文件备份.png" class="w-[18px] h-[18px] text-white" /></div>
                <p>Documentation</p>
              </div>
            </div>
            <div class="ml-7 mt-2.5">
              <p class="text-[#B4B4B4] text-[10px]">Build Web3 dApps effortlessly</p>
            </div>
          </div>
        </el-menu-item>
        <el-menu-item index="2-3">
          <div class="flex flex-col w-full mx-2.5">
            <div class="flex items-center">
              <div class="flex items-center">
                <div class="mr-2.5"><img src="@/assets/web/github-fill.png" class="w-[18px] h-[18px] text-white" /></div>
                <p>GitHub</p>
              </div>
            </div>
            <div class="ml-7 mt-2.5">
              <p class="text-[#B4B4B4] text-[10px]">Explore ORIS tech repositories</p>
            </div>
          </div>
        </el-menu-item>
        <el-menu-item index="2-4">
          <div class="flex flex-col w-full mx-2.5">
            <div class="flex items-center">
              <div class="flex items-center">
                <div class="mr-2.5"><img src="@/assets/web/shuilongtou备份.png" class="w-[18px] h-[18px] text-white" />
                </div>
                <p>Faucet</p>
              </div>
            </div>
            <div class="ml-7 mt-2.5">
              <p class="text-[#B4B4B4] text-[10px]">Pilot tokens on ORIS Smart Chain</p>
            </div>
          </div>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu class="hidden-sm-and-down" index="3" popper-class="Developers">
        <template #title>Ecosystemrtners</template>
        <el-menu-item index="3-1">wallet</el-menu-item>
        <!-- <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
        <el-sub-menu index="3-4" popper-class="Developers-item">
          <template #title>item four</template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
          <el-menu-item index="3-4-2">item two</el-menu-item>
          <el-menu-item index="3-4-3">item three</el-menu-item>
        </el-sub-menu> -->
      </el-sub-menu>
      <el-sub-menu class="hidden-sm-and-down" index="4" popper-class="Developers">
        <template #title>Community</template>
        <el-menu-item index="4-1">join</el-menu-item>
        <!-- <el-menu-item index="4-2">item two</el-menu-item>
        <el-menu-item index="4-3">item three</el-menu-item>
        <el-sub-menu index="4-4" popper-class="Developers-item">
          <template #title>item four</template>
          <el-menu-item index="4-4-1">item one</el-menu-item>
          <el-menu-item index="4-4-2">item two</el-menu-item>
          <el-menu-item index="4-4-3">item three</el-menu-item>
        </el-sub-menu> -->
      </el-sub-menu>
      <div class="cursor-pointer hidden-md-and-up text-white mr-2 flex items-center" @click="smMenu.handleOPen">
        <el-icon size="30">
          <Fold />
        </el-icon>
      </div>
    </el-menu>
    <sm_menu ref="smMenu"></sm_menu>
  </div>
</template>
<style lang="scss">
/* element-plus 的样式覆盖 */
.menuContent {
  //background: linear-gradient(to right, #1059DE, #0A072D);
  border: none !important;
  --el-menu-text-color: #ffffff;
  //--el-menu-hover-bg-color: #0A072D;
  //--el-menu-item-active-bg-color: #00205C;
  //--el-menu-item-active-text-color: #ffffff;
  //--el-menu-item-hover-bg-color: #00205C;
  //--el-menu-item-hover-text-color: #ffffff;
  --el-menu-horizontal-height: 80px;
}

.Developers {
  min-height: 361px;
  border: none !important;

  --el-menu-horizontal-sub-item-height: auto;

  .el-menu {
    background: #0A072D;
    --el-menu-hover-text-color: #ffffff;
    --el-menu-bg-color: #0A072D;
    --el-menu-active-color: #ffffff;
    --el-menu-text-color: #ffffff;
    padding: 10px;

    .el-menu-item:not(.is-disabled) {
      padding: 10px;
      min-width: 289px;
    }

    .el-menu-item:not(.is-disabled):hover {
      background-color: #00205C;
    }

    .el-sub-menu {
      .el-sub-menu__title {
        min-width: 289px;
        padding: 10px;
      }

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
    --el-menu-text-color: #ffffff;

    .el-menu-item:not(.is-disabled):hover {
      background-color: #0A072D;
    }

    .el-sub-menu {
      .el-sub-menu__title:hover {
        background-color: #0A072D;
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
<style lang="scss" scoped></style>