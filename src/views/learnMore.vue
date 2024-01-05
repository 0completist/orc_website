<template>
    <div class="container mx-auto">

        <div class="flex my-20 flex-row items-center event">
            <el-space direction="vertical" alignment="start" class="mt-5 left space-margin">
                <div class="live text-sm text-[#4b4b4b]">
                    <span></span>
                    MAINNET IS LIVE
                </div>
                <h1 class="my-5 text-4xl text-primary max-size">ORis SMART CHAIN</h1>
                <p class="text-lg text-[#3e3e3e]">
                    Harnessing Decentralization to
                    Make the Impossible Possible
                </p>
                <el-button class="mt-[52px]" type="primary" size="large">Start Building</el-button>
            </el-space>
            <img class="big_img" src="@/assets/ios/mMNvjg_fw1200@3x.png" alt="" width="100%">
        </div>

        <div class="mt-36 flex justify-between items-center largest">
            <div class="text-[41px] text-[#3E3E3E] title">
                <p>The <span class="text-primary">Largest</span> Blockchain</p>
                <p>by Daily Active Users</p>
            </div>
            <div class="text-lg text-[#777] w-[357px]">
                An EVM-compatible blockchain powering DeFi, NFTs, GameFi, Metaverse, and more Web3 projects since 2020.
            </div>
        </div>

        <div class="mt-[67px] dataList">
            <el-row :gutter="24">
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" v-for="(item, index) in list" :key="index">
                    <div class="dataItem" :class="{ line: index }">
                        <h1 class="text-[70px] text-[#3e3e3e]">{{ item.title }}<span class="text-primary">+</span></h1>
                        <p class="text-xl text-[#777]">{{ item.content }}</p>
                        <p class="icon flex justify-center items-center">
                            <img :src="item.icon" alt="" width="30px">
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="mt-[85px] mb-[96px] text-[#3e3e3e]">
            <h1 class="text-[41px] mb-[122px] space-margin max-size">
                What Makes ORis Smart<br />
                Chain So <span class="text-primary">Powerful?</span>
            </h1>
            <div class="row-box makeList">
                <el-row :gutter="24">
                    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb-[50px]" v-for="(item, index) in makeList"
                        :key="index">
                          <div class="makeItem flex items-center">
                            <div class="h-36 w-5 border border-r-0 rounded border-[#DDDDDD] border-solid mr-20"></div>
                            <div>
                              <div class="icon mb-10 flex items-center justify-center">
                                <img :src="item.icon" width="30px" />
                              </div>
                              <h1 class="text-[25px] mb-5">{{ item.title }}</h1>
                              <p class="text-[15px] text-[#777]">{{ item.content }}</p>
                            </div>
                          </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="row-box mb-[90px]">
            <div class="text-center text-[#3E3E3E]">
                <h1 class="text-[41px] mb-7 max-size">TDeveloper <span class="text-primary">Resources</span></h1>
                <p class="text-xl">
                    Start building on ORis Smart Chain today.
                </p>
            </div>
            <el-row :gutter="24" class="mt-[56px]">
                <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="(item, index) in typeList" :key="index"
                    @mouseenter="curr = index">
                    <div class="column p-5 cursor-pointer" :class="{ active: index == curr }">
                        <img class="mt-2.5 mb-10" :src="item.icon" width="34px" />
                        <p class="text-xl mb-3.5 text-[#3E3E3E]">{{ item.title }}</p>
                        <p class="text-[#777777]">{{ item.content }}</p>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="mb-10">
            <h1 class="s-30 text-center mb-10">FAQ</h1>
            <Collapse :list="faqList" />
        </div>

    </div>
</template>

<script setup>
import Collapse from '@/components/collapse.vue';

let curr = ref(0)
let typeList = [
    {
        icon: "/src/assets/ios/wj_b.png",
        title: "Documentation",
        content: "Your guide to ORis Smart Chain"
    },
    {
        icon: "/src/assets/ios/github-fill.png",
        title: "GitHub",
        content: "Explore the ORis tech repository"
    },
    {
        icon: "/src/assets/ios/shuilongtou@2x.png",
        title: "Faucet",
        content: "Pilot tokens on ORis Smart Chain"
    },
    {
        icon: "/src/assets/ios/skan @2x.png",
        title: "ORis-Scan",
        content: "A block explorer and analytics platform"
    }
];

let list = [
    {
        icon: "/src/assets/ios/game@2x.png",
        title: "1M",
        content: "Daily Active Users"
    },
    {
        icon: "/src/assets/ios/CAIDAN@2x.png",
        title: "2000",
        content: "Active dApps"
    },
    {
        icon: "/src/assets/ios/game@2x.png",
        title: "287K",
        content: "Weekly Active Gamers"
    }
];

let makeList = [
    {
        icon: "/src/assets/ios/xingzhuang.png",
        title: "Developer Friendly",
        content: "EVM-compatible Layer 1 with compatible tooling for up to 35x capacity."
    },
    {
        icon: "/src/assets/ios/tiaojie.png",
        title: "High Performance",
        content: "Supports popular programming languages: Solidity, GO, Java, Swift; with a short block time and high block gas limit."
    },
    {
        icon: "/src/assets/ios/xingzhuang.png",
        title: "Community-led",
        content: "More validator sets with BEP-13, enabling a more stable and decentralized validator network."
    },
    {
        icon: "/src/assets/ios/wancheng.png",
        title: "Reliable",
        content: "Temporary validators with BEP-127, allowing high capacity and less congestion."
    }
]

let faqList = [
    {
        title: "What are the main features of ORis?",
        content: 'ORis Smart Chain relies on a system of 55 validators with Proof of Staked Authority (PoSA) consensus that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection, malicious vote detection and other slashing logic guarantee security, stability, and chain finality. Other than the 32 active validators, BSC will introduce more validators, e.g. another 23 inactive validators, into the validator set as backups, which will be called "Candidates".'
    },
    {
        title: "What are the main features of ORis?",
        content: 'ORis Smart Chain relies on a system of 55 validators with Proof of Staked Authority (PoSA) consensus that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection, malicious vote detection and other slashing logic guarantee security, stability, and chain finality. Other than the 32 active validators, BSC will introduce more validators, e.g. another 23 inactive validators, into the validator set as backups, which will be called "Candidates".'
    },
    {
        title: "What are the main features of ORis?",
        content: 'ORis Smart Chain relies on a system of 55 validators with Proof of Staked Authority (PoSA) consensus that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection, malicious vote detection and other slashing logic guarantee security, stability, and chain finality. Other than the 32 active validators, BSC will introduce more validators, e.g. another 23 inactive validators, into the validator set as backups, which will be called "Candidates".'
    }
]

</script>

<style lang="scss" scoped>
.live {
    padding: 10px 25px;
    border-radius: 37px;
    background-color: rgba(237, 237, 237, 1);

    span {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(1, 214, 4, 1);
    }
}

.dataList {
    padding: 70px 0;
    border-top: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;

    .dataItem {
        padding-left: 50px;

        .icon {
            margin-top: 47px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: rgba(246, 246, 246, 1);
        }
    }

    .line {
        border-left: 1px solid #DDDDDD;
    }
}

.makeList {
    .makeItem {
        .icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: rgba(240, 245, 255, 1);
        }
    }
}

.column {
    margin-bottom: 30px;
    min-height: 200px;
    border-radius: 10px;
    border: 1px solid #DDDDDD;

    &:hover {
        border: 1px solid #1058DE;
    }
}

.active {
    border: 1px solid #1058DE;
}

@media (max-width: 768px) {
    .event {
        margin: 20px 0;
        align-items: center;
        flex-direction: column-reverse;
    }

    .largest {
        flex-wrap: wrap;
        justify-content: center;

        .title {
            margin-bottom: 20px;
            font-size: 30px;
        }
    }

    .dataList {
        padding: 0 20px;

        .dataItem {
            padding: 30px 0;
            text-align: center;

            .icon {
                margin: 0 auto;
            }
        }

        .line {
            border-left: none;
            border-top: 1px solid #DDDDDD;
        }
    }
}

@media (min-width: 1200px) {
    .big_img {
        width: 649px;
        height: 459px;
        margin-left: 50px;
        margin-right: -110px;
    }
}
</style>