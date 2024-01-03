<template>
    <div class="container mx-auto">

        <div class="flex my-20 flex-row event">
            <el-space direction="vertical" alignment="start" class="mt-5 left">
                <img class="hidden-md-and-down" width="95px" src="@/assets/ios/nft@2x.png" alt="" />
                <h1 class="my-5 text-[32px] text-[#1058DE]">Decentralized finance (DeFi)</h1>
                <p class="text-lg text-[#3e3e3e]">
                    A global, open alternative to the current financial system.
                    Products that let you borrow, save, invest, trade, and more.
                    Based on open-source technology that anyone can program with.
                </p>
            </el-space>
            <img class="big_img" src="@/assets/ios/defi@3x.png" alt="" width="100%">
        </div>

        <div>
            <h1 class="text-[41px] text-[#3e3e3e]">On this page</h1>
            <div class="tips">
                DeFi is an open and global financial system built for the internet age – an alternative to a system that's
                opaque, tightly controlled, and held together by decades-old infrastructure and processes. It gives you
                control and visibility over your money. It gives you exposure to global markets and alternatives to your
                local currency or banking options. DeFi products open up financial services to anyone with an internet
                connection and they're largely owned and maintained by their users. So far tens of billions of dollars worth
                of crypto has flowed through DeFi applications and it's growing every day.
            </div>
            <div class="flex mb-12 page">
                <div class="w-1/3 left">
                    <p class="active">What's DeFi?</p>
                    <p>DeFi vs traditional finance</p>
                    <p>It started with Bitcoin...</p>
                    <p>Programmable money.</p>
                </div>
                <div class="w-2/3 right">
                    <p>
                        DeFi is a collective term for financial products and services that are accessible to anyone who can
                        use Ethereum – anyone with an internet connection. With DeFi, the markets are always open and there
                        are no centralized authorities who can block payments or deny you access to anything. Services that
                        were previously slow and at risk of human error are automatic and safer now that they're handled by
                        code that anyone can inspect and scrutinize.
                    </p>
                    <p>
                        There's a booming crypto economy out there, where you can lend, borrow, long/short, earn interest,
                        and more. Crypto-savvy Argentinians have used DeFi to escape crippling inflation. Companies have
                        started streaming their employees their wages in real time. Some folks have even taken out and paid
                        off loans worth millions of dollars without the need for any personal identification.
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
.tips {
    padding: 20px;
    margin: 50px 0 10px;
    background-color: rgba(251, 251, 251, 1);
}

.page {
    .left {
        color: rgba(62, 62, 62, 1);
        font-size: 20px;

        p {
            padding: 20px;
        }

        .active {
            color: rgba(16, 88, 222, 1);
            background-color: rgba(240, 245, 255, 1);
        }
    }

    .right {
        padding: 30px;

        color: rgba(1, 1, 5, 1);
        font-size: 16px;
        background-color: rgba(240, 245, 255, 1);

        p,
        div {
            margin-bottom: 27px;
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
        margin: 0 0 20px;
        align-items: center;
        flex-direction: column-reverse;
    }

    .page {
        .left {
            font-size: 12px;
        }

        .right {
            font-size: 10px;
        }
    }

}

@media (min-width: 1200px) {
    .big_img {
        width: 510px;
        height: 498px;
        margin-left: 130px;
    }
}
</style>