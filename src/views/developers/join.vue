<template>
    <div class="container my-3 mx-auto">

        <div class="oris flex items-center justify-between my-32">
            <div class="content">
                <h1 class="text-4xl mb-5 mt-5">
                    ORis Chain
                    <p class="text-[#1058DE] mt-1.5">Community Hub</p>
                </h1>
                <p class="text-lg text-[#3E3E3E] max-w-[500px] space-margin">
                    The ORis Chain Community is a hub for developers, validators, token HODLers and Web3 enthusiasts.
                    Welcome to join our vibrant community today.
                </p>
            </div>
            <img class="big-img" src="@/assets/web/join.png" alt="" width="100%">
        </div>

        <div>
            <div class="text-center">
                <h1 class="text-4xl mb-4">Get Involved</h1>
                <p class="text-xl text-[#3E3E3E]">
                    Join our growing communities and connect with other <br />
                    passionate advocates here.
                </p>
            </div>
            <div class="text-center mt-6 twoBtn px-5">
                <el-space :size="60">
                    <p class="act">Global Community</p>
                    <p>Local Telegram</p>
                </el-space>
            </div>
            <div class="row-box mt-[74px]">
                <el-row :gutter="24">
                    <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8" v-for="(item, index) in typeList" :key="index"
                        @mouseenter="curr = index">
                        <div class="column px-5 py-[60px] cursor-pointer" :class="{ active: index == curr }">
                            <img class="w-[40px] mx-auto" :src="index == curr ? item.selIcon : item.icon" />
                            <p class="text-lg mb-6 mt-10 text-[#010105]">{{ item.title }}</p>
                            <div class="text-sm text-[#777777] flex justify-center items-center">
                                <img :src="index > 2 ? '/src/assets/ios/daima-2@2x.png' : '/src/assets/ios/zizhutuiguang@2x.png'"
                                    class="w-4 h-4 mr-2" />
                                <p>{{ item.content }}</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="events flex px-10 py-14">
            <div class="my-auto max-w-[420px]">
                <h1 class="text-2xl mb-5">ORis Chain <span class="text-[#1058DE]">Events</span></h1>
                <p class="text-sm text-[#777]">
                    Find and participate in a BNB Chain conference,
                    hackathon, or meetup.
                </p>
            </div>
        </div>

        <div>
            <div class="text-center mt-8">
                <h1 class="text-4xl max-size">What's <span class="text-[#1058DE]">NEW</span> at ORis Chain</h1>
            </div>
            <div class="row-box my-14">
                <el-row :gutter="24">
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in  3 " :key="item" class="mb-5">
                        <div class="newItem">
                            <div class="img"></div>
                            <p class="text-xl text-[#010105]">
                                How ORis Chain Pioneered the
                                Future of Web3 In 2023
                            </p>
                            <p class="line"></p>
                            <p class="text-sm text-[#777]">Dec 20 <span class="spot"></span> 6 min read</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="text-center">
            <el-button type="primary" size="large">View More News</el-button>
        </div>

        <div class="my-12 h-60 border">

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
                    icon: "/src/assets/ios/tuite@3x.png",
                    selIcon: "/src/assets/ios/tuite_b.png",
                    title: "Twitter",
                    content: "Announcements"
                },
                {
                    icon: "/src/assets/web/telegram.png",
                    selIcon: "/src/assets/web/telegram_b.png",
                    title: "Telegram",
                    content: "Announcements"
                },
                {
                    icon: "/src/assets/web/youtube.png",
                    selIcon: "/src/assets/web/youtube_b.png",
                    title: "YouTube",
                    content: "Announcements"
                },
                {
                    icon: "/src/assets/ios/discord@2x.png",
                    selIcon: "/src/assets/ios/discord_b.png",
                    title: "Discord",
                    content: "Engineering"
                },
                {
                    icon: "/src/assets/ios/github-fill.png",
                    selIcon: "/src/assets/ios/github-fill.png",
                    title: "GitHub",
                    content: "Engineering"
                }
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
.column {
    margin-bottom: 30px;
    text-align: center;
    border-radius: 20px
}

.active {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 5px rgba(240, 245, 255, 0.58);
}

.twoBtn {
    p {
        color: #3E3E3E;
        font-size: 14px;

    }

    .act {
        padding: 10px 20px;
        color: #fff;
        background: #1058DE;
        border-radius: 20px;
    }
}

.events {
    background: url("/src/assets/ios/event@3x.png") no-repeat center center;
    background-size: cover;
}

.newItem {
    .img {
        margin-bottom: 20px;
        height: 218px;
        border-radius: 20px;
        background-color: rgba(221, 221, 221, 1);
    }

    .line {
        margin: 20px 0;
        width: 40px;
        height: 6px;
        border-radius: 3px;
        background-color: rgba(16, 88, 222, 1);
    }

    .spot {
        margin: 0 5px 2px;
        display: inline-block;
        width: 5px;
        height: 5px;
        background: #D8D8D8;
        border-radius: 5px;
    }
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
}

@media (min-width: 768px) {
    .big-img {
        width: 527px;
        height: 438px;
        margin-right: -50px;
    }
}
</style>
  