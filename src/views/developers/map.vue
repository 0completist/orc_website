<template>
    <div class="container mx-auto">
        <div class="row-box my-[120px] map">
            <el-row :gutter="24">
                <el-col class="hidden-xs-only" :sm="4" :md="4" :lg="4" :xl="4">
                    <div @click="router.back(-1)">
                        <img class="rotate-[-180deg] mx-auto" src="@/assets/ios/jiantou_h@2x.png" alt="" width="30px"
                            height="18px">
                    </div>
                </el-col>
                <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                    <div class="center">
                        <h1>ORIS Chain Tech Roadmap 2022</h1>
                        <span class="s-16-7 block mt-10 mb-[110px]">2022.5.31 • 5 min read</span>
                        <div></div>
                        <p>
                            Today, at the BNB Chain Revelation Summit, we announced the 2022 technological roadmap packed
                            with major updates deployed on the mainnet before the end of this year.
                        </p>
                        <p>
                            The BNB Chain developers community continuously innovates so that BNB Chain remains a highly
                            competitive and functional blockchain infrastructure.
                        </p>
                        <p>
                            If you missed the Revelation Summit, don't despair. You can rewatch the whole 5-hour event here.
                        </p>
                        <p>
                            This article will introduce you to the entire 2022 roadmap.
                        </p>
                        <div></div>
                        <p>
                            Today, at the BNB Chain Revelation Summit, we announced the 2022 technological roadmap packed
                            with major updates deployed on the mainnet before the end of this year.
                        </p>
                        <p>
                            The BNB Chain developers community continuously innovates so that BNB Chain remains a highly
                            competitive and functional blockchain infrastructure.
                        </p>
                        <p>
                            If you missed the Revelation Summit, don't despair. You can rewatch the whole 5-hour event here.
                        </p>
                        <p>
                            This article will introduce you to the entire 2022 roadmap.
                        </p>
                        <p>
                            Today, at the BNB Chain Revelation Summit, we announced the 2022 technological roadmap packed
                            with major updates deployed on the mainnet before the end of this year.
                        </p>
                        <p>
                            The BNB Chain developers community continuously innovates so that BNB Chain remains a highly
                            competitive and functional blockchain infrastructure.
                        </p>
                        <p>
                            If you missed the Revelation Summit, don't despair. You can rewatch the whole 5-hour event here.
                        </p>
                        <p>
                            This article will introduce you to the entire 2022 roadmap.
                        </p>
                    </div>
                </el-col>
                <el-col class="hidden-xs-only" :sm="4" :md="4" :lg="4" :xl="4">
                    <div class="right">
                        <el-space direction="vertical" :size="40">
                            <p class="s-16-7 mb-[30px]">Share</p>
                            <p class="icon flex items-center justify-center"><img src="@/assets/ios/facebook-fill@3x.png" alt="" width="20px" height="20px"></p>
                            <p class="icon flex items-center justify-center"><img src="@/assets/ios/medium@3x.png" alt="" width="20px" height="20px"></p>
                            <p class="icon flex items-center justify-center"><img src="@/assets/ios/tuite@3x.png" alt="" width="20px" height="20px"></p>
                            <p class="icon flex items-center justify-center"><img src="@/assets/ios/reddit@3x.png" alt="" width="20px" height="20px"></p>
                        </el-space>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
let router = useRouter();

</script>

<style lang="scss" scoped>
.map {
    .center {
        h1 {
            color: #010105;
            font-size: 36px;
        }

        p {
            margin-bottom: 20px;
            color: #3E3E3E;
            font-size: 20px;
        }

        div {
            margin: 50px 0;
            height: 440px;
            border-radius: 20px;
            background-color: rgba(216, 216, 216, 1);
        }
    }

    .right {
        .icon {
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-radius: 50%;
            background-color: rgba(238, 238, 238, 1);
        }
    }
}
</style>