<template>
    <div class="container mx-auto">

        <div class="flex items-center mt-24 mb-6 flex-row wallet">
            <el-space direction="vertical" alignment="start" class="pr-[50px] left space-margin">
                <el-button type="primary" size="large">ORis Chain Wallets</el-button>
                <h1 class="my-5 text-[40px] text-[#010105]">Navigate Your Way Through Web3</h1>
                <p class="text-xl text-[#777]">
                    Wallets help you access your funds, and interact
                    with dApps on BNB Chain.
                    Your Wallet is your Access.
                </p>
            </el-space>
            <img class="big_img" src="@/assets/ios/wallet@3x.png" alt="" width="100%">
        </div>

        <div class="list my-10 row-box">
            <el-row :gutter="24">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item, index) in list" :key="index"
                    @mouseenter="current = index" class="mb-7">
                    <div class="item flex p-[30px]" :class="{ active: index == current }">
                        <div class="w-[70px]">
                            <img :src="item.icon" alt="">
                        </div>
                        <div class="flex-1 ml-5">
                            <h1 class="mb-2.5 text-2xl text-[#010105]">{{ item.title }}</h1>
                            <p class="text-[10px] text-[#777]">{{ item.content }}</p>
                            <el-space wrap :size="20" class="mt-5">
                                <img v-if="item.isC" src="@/assets/ios/diannao@2x.png" alt="" class="w-4">
                                <img v-if="item.isA"
                                    :src="index ? '/src/assets/ios/pingguo@2x.png' : '/src/assets/ios/pingguo_b@2x.png'"
                                    alt="" class="w-4">
                                <img v-if="item.isR" src="@/assets/ios/anzhuo@2x.png" alt="" class="w-4">
                            </el-space>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
let current = ref(0);

let list = [
    {
        icon: new URL("@/assets/ios/logo_trust-wallet@2x.png", import.meta.url).href,
        title: "Trust Wallet",
        content: "Helping over 25 million crypto users buy, store and sell cryptocurrencies and NFTs with Trust Wallet.",
        isC: true,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/logo_binance-web3-wallet@2x.png", import.meta.url).href,
        title: "Binance Web3 Wallet",
        content: "A wallet within the Binance app, which offers users a secure and streamlined method to manage their assets.",
        isC: false,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/logo_binance-wallet@2x.png", import.meta.url).href,
        title: "BNB Chain Wallet",
        content: "Users can enter the world of DeFi and dApps on a browser extension wallet for BNB Beacon Chain, BNB Smart Chain, and Ethereum.",
        isC: true,
        isA: false,
        isR: false
    },
    {
        icon: new URL("@/assets/ios/logo_coin98@2x.png", import.meta.url).href,
        title: "Coin98",
        content: "An all-in-one DeFi wallet with 5-star user reviews on Google Chrome. Users can store, exchange, and stake crypto with Coin98.",
        isC: true,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/logo_mathwallet@2x.png", import.meta.url).href,
        title: "MathWallet",
        content: "A multi-platform crypto wallet with access to over 100 different chains.",
        isC: true,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/logo_metamask@2x.png", import.meta.url).href,
        title: "MetaMask",
        content: "The most popular software wallet and browser extension trusted by over 30 million cryptocurrency users. Learn how to add BNB Chain to MetaMask.",
        isC: true,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/logo_safepal@2x.png", import.meta.url).href,
        title: "SafePal",
        content: "A secure way of holding, buying, and trading your crypto through a single wallet.",
        isC: true,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/tp@2x.png", import.meta.url).href,
        title: "TokenPocket",
        content: "A multi-chain DeFi and cryptocurrency wallet providing trusted crypto asset management services since 2018.",
        isC: true,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/bw@2x.png", import.meta.url).href,
        title: "Bitget Wallet",
        content: "Access over 70 chains, 22,000 crypto assets, and over 10,000 dApps using Bitget Wallet.",
        isC: true,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/logo_myetherwallet@2x.png", import.meta.url).href,
        title: "MyEtherWallet",
        content: "MEW is an open-source and free wallet developed for accessing dApps on the blockchain.",
        isC: true,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/logo_onto-wallet@2x.png", import.meta.url).href,
        title: "ONTO Wallet",
        content: "Users can manage their digital assets and NFTs with a single private key using the self-sovereign ONTO Wallet.",
        isC: true,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/logo_ledger@2x.png", import.meta.url).href,
        title: "Ledger",
        content: "Ledger wallet is a hardware wallet, used to store private keys offline, offering the highest protection for crypto assets.",
        isC: true,
        isA: true,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/logo_trezor@2x.png", import.meta.url).href,
        title: "Trezor",
        content: "Invented to secure your digital freedom, Trezor is a hardware wallet developed to enable safer crypto storage and trading.",
        isC: true,
        isA: false,
        isR: true
    },
    {
        icon: new URL("@/assets/ios/logo_torus@2x.png", import.meta.url).href,
        title: "Torus",
        content: "Torus is a secure authentication wallet and platform designed to manage your private keys without a password.",
        isC: true,
        isA: false,
        isR: false
    },

]
</script>

<style lang="scss" scoped>
.item {
    min-height: 186px;
    overflow: hidden;
    border-radius: 20px;
    background-color: rgba(252, 252, 252, 1);
}

.active {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 6px rgba(240, 245, 255, 0.58);
}

/* 响应式样式 */
@media (max-width: 768px) {
    .wallet {
        align-items: center;
        flex-direction: column-reverse;

        .left {
            padding: 0;
            margin-top: 40px;
        }

        .big_img {
            width: 100%;
        }
    }
}

@media (min-width: 768px) {
    .big_img {
        width: 410px;
        height: 376px;
    }

    .list {
        margin: 100px 0;
    }
}
</style>
