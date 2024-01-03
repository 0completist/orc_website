<template>
    <div>
        <div class="container mx-auto">

            <div class="flex my-20 flex-row event">
                <el-space direction="vertical" alignment="start" class="mt-5 left">
                    <p class="text-lg text-[#777]">WHAT IS Origins?</p>
                    <h1 class="my-5 text-[32px] text-[#1058DE]">The foundation for our digital future</h1>
                    <p class="text-lg text-[#3e3e3e]">
                        A complete beginner's guide to how Origins works,
                        the benefits it brings and how it's being used by millions
                        of people around the world.
                    </p>
                    <el-button class="mt-10" type="primary" size="large">Let's start</el-button>
                </el-space>
                <img class="big_img" src="@/assets/ios/origins@3x.png" alt="" width="100%">
            </div>

            <div class="summary">
                <h1>Summary</h1>
                <p>
                    Origins is a network of computers all over the world that follow a set of rules called the Origins
                    protocol. The Origins network acts as the foundation for communities, applications, organizations and
                    digital assets that anyone can build and use.
                </p>
                <p>
                    You can create an Origins account from anywhere, at any time, and explore a world of apps or build your
                    own. The core innovation is that you can do all this without trusting a central authority that could
                    change the rules or restrict your access.
                </p>
                <p>
                    Keep reading to learn more…
                </p>
            </div>

            <div class="row-box">
                <h1 class="s-41 mt-16 mb-[120px] max-size">What can Origins do?</h1>
                <el-row :gutter="24">
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in list" :key="item">
                        <div class="origin-item">
                            <img :src="item.icon" alt="" width="70px" height="70px">
                            <h5 class="s-18 my-5">{{ item.title }}</h5>
                            <p class="s-14">{{ item.content }}</p>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="tabs mt-[60px]">
                <div class="title flex mb-[30px]">
                    <p class="act">What is a blockchain?</p>
                    <p>What is a cryptocurrency?</p>
                </div>
                <div class="content s-16">
                    A blockchain is a database of transactions that is updated and shared across many computers in a
                    network. Every time a new set of transactions is added, its called a “block” - hence the name
                    blockchain. Public blockchains like Origins allow anyone to add, but not remove, data. If someone wanted
                    to alter any of the information or cheat the system, they’d need to do so on the majority of computers
                    on the network. That is a lot! This makes decentralized blockchains like Ethereum highly secure.
                </div>
            </div>

            <div class="mt-[52px]">
                <h1 class="s-41 mb-[52px] max-size">Why would I use Origins?</h1>
                <div class="s-16">
                    <p class="mb-5">
                        If you're interested in more resilient, open, and trustworthy ways to coordinate globally, create
                        organizations, build apps and share value, Origins is for you. Origins is a story that is written by
                        all of us, so come and discover what incredible worlds we can build with it together.
                    </p>
                    <p class="mb-5">
                        Origins has also been invaluable for people who have had to handle uncertainty around the security
                        or soundness or mobility of their assets due to external forces outside of their control.
                    </p>
                </div>
            </div>

            <div class="payments flex items-end justify-between">
                <div class="left">
                    <h1 class="s-26 mb-[38px]">Cheaper and Faster Crossborder Payments</h1>
                    <div class="s-16">
                        <p class="mb-8">
                            Stablecoins are a novel type of cryptocurrency that relies on a more stable asset as the basis
                            for its value. Most of them are linked to the United States dollar and therefore maintain the
                            value of that currency. These allow for a very cheap and stable global payment system. Many
                            current stablecoins are built on the Origins network.
                        </p>
                        <p class="mb-12">
                            Origins and stablecoins simplify the process of sending money overseas. It often takes only few
                            minutes to move funds across the globe, as opposed to the several business days or even weeks
                            that it may take your average bank, and for a fraction of the price. Additionally, there is no
                            extra fee for making a high value transaction, and there are zero restrictions on where or why
                            you are sending your money.
                        </p>
                    </div>
                    <el-space class="bottom">
                        <div class="arrow">
                            <p><img src="@/assets/ios/jiantou_h@2x.png" alt="" width="30px" height="16px"></p>
                            <p><img src="@/assets/ios/jiantou_l@2x.png" alt="" width="30px" height="16px"></p>
                        </div>
                        <div class="spot">
                            <span v-for="item in 4" :key="item"></span>
                        </div>
                    </el-space>
                </div>
                <div class="right flex items-end">
                    <div v-for="(item, index) in year" :key="index">
                        <p v-for="val in item.list" :key="val" class="s-16" :style="styleList[index]">{{ val }}</p>
                        <h5>{{ item.key }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

let list = [
    {
        icon: "/src/assets/ios/yinhang-F@2x.png",
        title: "Banking for everyone",
        content: "Not everyone has access to financial services. But all you need to access Ethereum and the lending, borrowing and savings products built on it is an internet connection."
    },
    {
        icon: "/src/assets/ios/suspect@2x.png",
        title: "An open internet",
        content: "Anyone can interact with Origins network or build applications on it. This allows you to control your own assets and identity, instead of them being controlled by a few mega-corporations."
    },
    {
        icon: "/src/assets/ios/haoyou@2x.png",
        title: "A peer-to-peer network",
        content: "Not everyone has access to financial services. But all you need to access Origins and the lending, borrowing and savings products built on it is an internet connection."
    },
    {
        icon: "/src/assets/ios/jurassic_safe@2x.png",
        title: "Censorship-resistant",
        content: "Not everyone has access to financial services. But all you need to access Origins and the lending, borrowing and savings products built on it is an internet connection."
    },
    {
        icon: "/src/assets/ios/24gf-bag2@2x.png",
        title: "Commerce guarantees",
        content: "Not everyone has access to financial services. But all you need to access Origins and the lending, borrowing and savings products built on it is an internet connection."
    },
    {
        icon: "/src/assets/ios/chengxinhezuowoshou@2x.png",
        title: "Composable products",
        content: "Not everyone has access to financial services. But all you need to access Origins and the lending, borrowing and savings products built on it is an internet connection."
    }
]

let year = [
    {
        key: "2010",
        list: ["Investors"]
    },
    {
        key: "2014",
        list: ["Companies", "Developers", "Investors"],
    },
    {
        key: "Now",
        list: ["Refugees", "Gamers", "Writers", "Musicians", "Artists", "Companies", "Developers", "Investors"]
    }
]

let styleList = [
    {
        backgroundColor: "#FFF8E8",
        border: "1px solid #FFE9D3"
    },
    {
        backgroundColor: "#E8EBFF",
        border: "1px solid #E0D3FF"
    },
    {
        backgroundColor: "#FCE8FF",
        border: "1px solid #FFD3FB"
    }
]
</script>

<style lang="scss" scoped>
.summary {
    padding: 33px;
    color: rgba(62, 62, 62, 1);
    border-radius: 10px;
    background-color: rgba(240, 245, 255, 1);

    h1 {
        font-size: 20px;
    }

    p {
        margin-top: 10px;
        font-size: 15px;
    }
}

.origin-item {
    padding: 20px;
    margin-bottom: 24px;
    min-height: 260px;
    border-radius: 20px;
    background-color: rgba(252, 252, 252, 1);
}

.tabs {
    .title {
        width: 526px;
        height: 60px;
        line-height: 60px;
        color: #1058DE;
        font-size: 16px;
        overflow: hidden;
        text-align: center;
        border-radius: 10px;
        border: 1px solid rgba(16, 88, 222, 1);

        p {
            flex: 1;
        }

        .act {
            color: #fff;
            background: #1058DE;
        }
    }

    .content {
        padding: 30px;
        border-radius: 20px;
        background-color: rgba(252, 252, 252, 1);
    }
}

.payments {
    .left {
        padding: 30px;
        border-radius: 20px;
        background-color: rgba(252, 252, 252, 1);

        .arrow {
            display: flex;

            p {
                width: 50px;
                height: 50px;
                border-radius: 50px;
                background-color: rgba(240, 245, 255, 1);

                &:first-child {
                    margin-right: 52px;
                    transform: rotate(-180deg);
                }

                img {
                    margin: 15px auto;
                }
            }
        }

        .spot {
            margin-left: 153px;

            span {
                margin-left: 30px;
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: rgba(216, 216, 216, 1);

                &:first-child {
                    background-color: #1058DE;
                }
            }
        }
    }

    .right {
        margin: 0 -100px 0 100px;
        text-align: center;

        div {
            margin-left: 31px;
        }

        p {
            padding: 12px 26px;
            border-radius: 25px;
        }

        h5 {
            margin-top: 22px;
        }
    }
}

@media (max-width: 768px) {
    .event {
        margin: 20px 0;
        align-items: center;
        flex-direction: column-reverse;
    }

    .tabs {
        .title {
            width: 100%;
            font-size: 12px;
        }
    }

    .payments {
        flex-direction: column;
        align-items: flex-start;

        .left {
            .arrow p:first-child {
                margin-right: 20px;
            }

            .spot {
                margin-left: 10px;
            }
        }

        .right {
            margin: 20px 0;
            justify-content: space-around;
            width: 100%;

            div {
                margin: 0;
            }

            p {
                padding: 4px 14px;
            }
        }
    }
}

@media (min-width: 1200px) {
    .event {
        margin: 100px 0;

        .left {
            margin-right: 100px;
        }

        .big_img {
            width: 520px;
            height: 405px;
            margin-right: -100px;
        }
    }
}
</style>