<template>
    <div class="container mx-auto">

        <div class="flex my-20 flex-row event">
            <el-space direction="vertical" alignment="start" class="mt-5 left">
                <img class="hidden-md-and-down" width="95px" src="@/assets/ios/nft@2x.png" alt="" />
                <h1 class="my-5 text-[32px] text-[#1058DE]">Non-fungible tokens (NFT)</h1>
                <p class="text-lg text-[#3e3e3e]">
                    A way to represent anything unique as an Origins-based asset.
                    NFTs are giving more power to content creators than ever before.
                    Powered by smart contracts on the Origins blockchain.
                </p>
            </el-space>
            <img class="big_img" src="@/assets/ios/99@3x.png" alt="" width="100%">
        </div>

        <div>
            <h1 class="text-[41px] text-[#3e3e3e]">On this page</h1>
            <div class="flex my-12 page">
                <div class="w-1/3 left">
                    <p class="active">What are NFTs?</p>
                    <p>The internet of assets</p>
                    <p>What are NFTs used for?</p>
                    <p>How do NFTs work?</p>
                </div>
                <div class="w-2/3 right">
                    <p>
                        NFTs are tokens that are individually unique. Each NFT has different properties (non-fungible) and
                        is
                        provably scarce. This is different from tokens such as ETH or other Ethereum based tokens like USDC
                        where every token is identical and has the same properties ('fungible'). You don't care which
                        specific dollar bill (or ETH) you have in your wallet, because they are all identical and worth the
                        same. However, you do care which specific NFT you own, because they all have individual properties
                        that distinguish them from others ('non-fungible').
                    </p>
                    <p>
                        The uniqueness of each NFT enables tokenization of things like art, collectibles, or even real
                        estate, where one specific unique NFT represents some specific unique real world or digital item.
                        Ownership of an asset is publicly verifiable on Ethereum blockchain.
                    </p>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.big_img {
    margin-top: -40px;
}

.page {
    .left {
        p {
            padding: 20px;
            color: rgba(62, 62, 62, 1);
            font-size: 20px;
        }

        .active {
            color: rgba(16, 88, 222, 1);
            background-color: rgba(240, 245, 255, 1);
        }
    }

    .right {
        padding: 30px;
        background-color: rgba(240, 245, 255, 1);

        p,
        div {
            margin-bottom: 27px;
            color: rgba(1, 1, 5, 1);
            font-size: 16px;
        }

        div {
            width: 70%;
            height: 257px;
            background-color: rgba(216, 216, 216, 1);
        }
    }
}

@media (max-width: 768px) {
    .event {
        margin:20px 0;
        align-items: center;
        flex-direction: column-reverse;
    }
}

@media (min-width: 1200px) {
    .big_img {
        width: 718px;
        height: 718px;
        margin-left: 50px;
    }
}
</style>