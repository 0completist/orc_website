<style lang="scss">
.smMenuContent {
  background: linear-gradient(to right, #1059DE, #0A072D);
  border: none !important;
  --el-menu-text-color: #ffffff;
  --el-menu-bg-color: #00205C;
  --el-menu-horizontal-height: 80px;
  --el-menu-hover-bg-color: #00205C;
}

.smDevelopers {}

.smDevelopers-item {}
</style>

<template>
  <el-drawer v-model="drawer" title="ORis Smart Chain" size="90%" :z-index="9999"
    class="bg-gradient-to-r from-primary to-primaryG" :direction="direction" :before-close="handleClose">
    <el-menu :popper-offset="30" class="smMenuContent" :default-active="activeIndex" :ellipsis="false"
      @select="handleSelect">
      <!--dropdown-->
      <el-sub-menu index="1" popper-class="smDevelopers">
        <template #title>Chains</template>
        <el-sub-menu index="1-1" popper-class="smDevelopers-item">
          <template #title>
            ORis Smart Chain
          </template>
          <el-menu-item index="1-1-1">
            ORis Smart Chain
          </el-menu-item>
          <el-menu-item index="1-1-2">
            Documentation
          </el-menu-item>
          <el-menu-item index="1-1-3">
            GitHub
          </el-menu-item>
          <el-menu-item index="1-1-4">
            Faucet
          </el-menu-item>
          <el-menu-item index="1-1-5">
            BscScan
          </el-menu-item>
          <el-menu-item index="1-1-6">
            Add ORis Smart Chain Network
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-2" popper-class="smDevelopers-item">
          <template #title>
            ORis Beacon Chain
          </template>
          <!-- <el-menu-item index="1-2-1">
            item one
          </el-menu-item>
          <el-menu-item index="1-2-2">item two</el-menu-item>
          <el-menu-item index="1-2-3">item three</el-menu-item> -->
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="2" popper-class="smDevelopers">
        <template #title>Developers</template>
        <el-menu-item index="2-1">
          ORis Smart Chain
        </el-menu-item>
        <el-menu-item index="2-2">
          Documentation
        </el-menu-item>
        <el-menu-item index="2-3">
          GitHub
        </el-menu-item>
        <el-menu-item index="2-4">
          Faucet
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3" popper-class="smDevelopers">
        <template #title>Ecosystemrtners</template>
        <el-menu-item index="3-1">wallet</el-menu-item>
        <!-- <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
        <el-sub-menu index="3-4" popper-class="smsmDevelopers-item">
          <template #title>item four</template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
          <el-menu-item index="3-4-2">item two</el-menu-item>
          <el-menu-item index="3-4-3">item three</el-menu-item>
        </el-sub-menu> -->
      </el-sub-menu>
      <el-sub-menu index="4" popper-class="smDevelopers">
        <template #title>Community</template>
        <el-menu-item index="4-1">join</el-menu-item>
        <!-- <el-menu-item index="4-2">item two</el-menu-item>
        <el-menu-item index="4-3">item three</el-menu-item>
        <el-sub-menu index="4-4" popper-class="smDevelopers-item">
          <template #title>item four</template>
          <el-menu-item index="4-4-1">item one</el-menu-item>
          <el-menu-item index="4-4-2">item two</el-menu-item>
          <el-menu-item index="4-4-3">item three</el-menu-item>
        </el-sub-menu> -->
      </el-sub-menu>
    </el-menu>
  </el-drawer>
</template>

<script setup>
const router = useRouter()
const drawer = ref(false)
const direction = ref('rtl')
const handleOPen = () => {
  drawer.value = true
}
const handleClose = (done) => {
  done()
}

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
  drawer.value = false;
  switch (key) {
    case "1-1-4":
      router.push('/aucet');
      break;
    case "2-1":
      router.push('/start/building');
      break;
    case "2-4":
      router.push('/aucet');
      break;
    case "3-1":
      router.push('/wallet');
      break;
    case "4-1":
      router.push('/join');
      break;
  }
}

defineExpose({ handleOPen })
</script>