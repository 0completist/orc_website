<template>
    <div class="container my-3 mx-auto">

        <div class="oris flex justify-between my-32">
            <div class="content">
                <h1 class="text-4xl mb-5 max-size">ORIS Chain <span class="text-[#1058DE]">Developers</span></h1>
                <p class="text-xl text-[#3E3E3E] max-w-[570px]">Build cutting-edge Web3 applications on the Blockchain with
                    the largest
                    user base.</p>
                <el-space class="mt-20">
                    <el-button type="primary" size="large">Read the Docs</el-button>
                    <el-button size="large" style="color: black;">Get Support</el-button>
                </el-space>
            </div>
            <img class="max-w-[495px] big-img" src="@/assets/web/developers.png" alt="" width="100%">
        </div>

        <div>
            <div class="text-center">
                <h1 class="text-4xl mb-4">Developer <span class="text-[#1058DE]">Resources</span></h1>
                <p class="text-xl text-[#3E3E3E]">A compilation of essential learning materials and discussion forums
                    for<br />
                    developers joining the BNB Chain community.</p>
            </div>
            <div class="row-box">
                <el-row :gutter="24" class="mt-[30px]">
                    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item, index) in typeList" :key="index"
                        @click="changeCurr(index, item)">
                        <div class="column p-5 pr-10 cursor-pointer" :class="{ active: index == curr }">
                            <img class="w-[40px]" :src="item.icon" />
                            <p class="text-xl my-3 text-[#3E3E3E]">{{ item.title }}</p>
                            <p class="text-sm text-[#777777]">{{ item.content }}</p>
                            <el-space v-if="index == 4" :size="15" class="mt-3">
                                <img class="w-[20px]" src="@/assets/web/telegram.png" />
                                <img class="w-[20px]" src="@/assets/web/youxiang-2.png" />
                            </el-space>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div>
            <div class="text-center mt-8">
                <h1 class="text-4xl">Developer <span class="text-[#1058DE]">Tools</span></h1>
            </div>
            <div class="row-box">
                <el-row :gutter="24" class="my-14">
                    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" v-for="(item, index) in toolList" :key="index">
                        <div class="column p-5 cursor-pointer" :class="{ active: index == act[0] }">
                            <img class="w-7" :src="item.icon" />
                            <p class="text-xl my-3 text-[#3E3E3E]">{{ item.title }}</p>
                            <div class="flex justify-between items-center mb-2" :class="{ act: act == ('' + index + key) }"
                                v-for="(val, key) in item.list" :key="key" @click="changeAct(index, key, val)">
                                <p class="text-sm ">{{ val.name }}</p>
                                <img class="w-2.5 h-2.5" src="@/assets/web/jiantou_blue.png"
                                    v-show="act == ('' + index + key)" />
                                <img class="w-2.5 h-2.5" src="@/assets/web/jiantou_black.png"
                                    v-show="act != ('' + index + key)" />
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="events flex px-10 py-14" @click="$router.push('/event')">
            <div class="my-auto max-w-[420px]">
                <h1 class="text-2xl mb-5">Developer <span class="text-[#1058DE]">Events</span></h1>
                <p class="text-sm text-[#777]">ORIS Chain is hosting events with community partners globally
                    in the form of meetups, conferences, hackathons, and more.</p>
            </div>
        </div>

        <div class="px-3.5">
            <el-row :gutter="24" class="mt-[20px]">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="bounty cursor-pointer px-10 py-14">
                        <h1 class="text-2xl mb-5">Bug <span class="text-[#1058DE]">Bounty</span></h1>
                        <p class="text-sm text-[#777] max-w-[200px]">Find out our vulnerabilities and win a bounty.</p>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="github cursor-pointer px-10 py-14">
                        <h1 class="text-2xl mb-5">GitHub</h1>
                        <p class="text-sm text-[#777] max-w-[224px]">Explore tech repositories and contribute to BNB Chain.
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div>
            <div class="text-center mt-8">
                <h1 class="text-4xl">Join the <span class="text-[#1058DE]">Community</span></h1>
            </div>
            <div class="row-box">
                <el-row :gutter="24" class="my-14">
                    <el-col class="community-col" :xs="12" :sm="4" :md="4" :lg="4" :xl="4"
                        v-for="(item, index) in  communityList " :key="index" :offset="index == 0 ? 4 : 0"
                        @mouseenter="curInd = index">
                        <div class="communityItem flex justify-center items-center flex-col	 cursor-pointer"
                            :class="{ curAct: curInd == index }">
                            <img class="w-3.5" :src="curInd == index ? item.selIcon : item.icon" />
                            <p>Facebook</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            curr: 0,
            typeList: [
                {
                    icon: "/src/assets/ios/wj_b.png",
                    title: "Documentation",
                    content: "Access readily available resources on ORIS Smart Chain, BNB Beacon Chain and more."
                },
                {
                    icon: "/src/assets/ios/github-fill.png",
                    title: "GitHub",
                    content: "Explore, collaborate and contribute to our tech repositories with other developers on ORIS Chain."
                },
                {
                    icon: "/src/assets/ios/ditu.png",
                    title: "Roadmap",
                    content: "Find out more about where ORIS Chain is headed and how your project can grow with it.",
                    link: "/map"
                },
                {
                    icon: "/src/assets/ios/xianlu@2x.png",
                    title: "Developer Path",
                    content: "Master ORIS Chain development with our engaging, step-by-step visual guide – fast-track your blockchain journey today.",
                    link: "/path"
                },
                {
                    icon: "/src/assets/ios/keaide@2x.png",
                    title: "Support",
                    content: "Get support from the ORIS Chain team and community."
                }
            ],
            act: '01',
            toolList: [
                {
                    icon: "/src/assets/web/licai.png",
                    title: "Wallet",
                    list: [
                        { name: 'Trust Wallet' },
                        { name: 'MetaMask' }
                    ]
                },
                {
                    icon: "/src/assets/web/sousuo.png",
                    title: "Explorer",
                    list: [
                        { name: 'OrisScan Mainnet' },
                        { name: 'OrisScan Testnet' }
                    ]
                },
                {
                    icon: "/src/assets/web/shuilongtou@2x.png",
                    title: "Faucet",
                    list: [
                        { name: 'ORIS Testnet Faucet', link: '/aucet' }
                    ]
                },
                {
                    icon: "/src/assets/web/menu-s.png",
                    title: "IDE",
                    list: [
                        { name: 'Remix' },
                        { name: 'ChainIDE' }
                    ]
                }
            ],
            curInd: 0,
            communityList: [
                {
                    icon: "/src/assets/web/facebook-fill.png",
                    selIcon: "/src/assets/web/f1.png",
                    name: "Facebook"
                },
                {
                    icon: "/src/assets/web/medium.png",
                    selIcon: "/src/assets/web/f2.png",
                    name: "Facebook"
                },
                {
                    icon: "/src/assets/web/tuite.png",
                    selIcon: "/src/assets/web/f3.png",
                    name: "Facebook"
                },
                {
                    icon: "/src/assets/web/reddit.png",
                    selIcon: "/src/assets/web/f4.png",
                    name: "Facebook"
                }
            ]
        }
    },
    methods: {
        changeCurr(index, item) {
            this.curr = index;
            if (item.link) {
                this.$router.push(item.link)
            }
        },
        changeAct(index, key, item) {
            this.act = ('' + index + key);
            if (item.link) {
                this.$router.push(item.link)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.column {
    margin-bottom: 30px;
    min-height: 186px;
    border-radius: 10px;
    border: 1px solid #DDDDDD;

    &:hover {
        border: 1px solid #1058DE;
    }
}

.active {
    border: 1px solid #1058DE;
}

.act {
    color: #1058DE;
}

.events {
    background: url("/src/assets/ios/event@3x.png") no-repeat center center;
    background-size: cover;
}

.bounty {
    background: url("/src/assets/web/bounty.png") no-repeat center center;
    background-size: cover;
}

.github {
    background: url("/src/assets/web/gothub.png") no-repeat center center;
    background-size: cover;
}

.communityItem {
    min-height: 66px;
    color: #3E3E3E;
    border: 1px solid #DDDDDD;
    border-radius: 10px;
}

.curAct {
    color: #fff;
    background: #1058DE;
}

/* 响应式样式 */
@media (max-width: 768px) {
    .oris {
        align-items: center;
        flex-direction: column-reverse;

        .content {
            text-align: center;
        }
    }

    .column,
    .bounty {
        margin-bottom: 20px;
    }

    .community-col {
        margin: 0 0 20px 0;
    }
}

@media (min-width: 768px) {
    .big-img {
        margin-right: -50px;
    }
}
</style>
  