<template>
    <div class="container mx-auto">

        <div class="text-center mt-[100px]">
            <h1 class="s-30 mb-7">ORis <span class="text-primary">FAUCET</span></h1>
            <p class="s-12-7">Obtain BSC Testnet tokens every 24 hours for seamless and confident development.</p>
        </div>

        <div class="mt-[50px] mb-[100px] form-box">
            <div class="flex justify-between mb-5 form">
                <div class="mr-5">
                    <h1 class="s-14 mb-3">Select token</h1>
                    <el-select v-model="value" size="default">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
                <div class="flex-1">
                    <h1 class="s-14 mb-3">Wallet Address</h1>
                    <el-input v-model="input" size="default" placeholder="Please input your wallet address" />
                </div>
            </div>
            <div
                class="py-3.5 text-center text-[#010105] bg-[#fcfcfc] rounded-[5px] border-solid border border-gray-300 hover:bg-primary hover:text-white">
                Sent 0.3 ORis
            </div>
        </div>

        <div class="mb-10">
            <h1 class="s-30 text-center mb-10">FAQ</h1>
            <Collapse :list="faqList" />
        </div>

    </div>
</template>

<script setup>
import Collapse from '@/components/collapse.vue';

const value = ref('0.3');
const input = ref('Enter your ORis Smart Chain Testnet address');

const options = [
    {
        value: '0.3',
        label: '0.3 ORis',
    },
    {
        value: '0.2',
        label: '0.2 ORis',
    },
    {
        value: '0.1',
        label: '0.1 ORis',
    },
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
.form-box {
    padding: 40px;
    border-radius: 20px;
    background-color: rgba(248, 248, 248, 1);
}

@media (max-width: 768px) {
    .form-box {
        .form {
            display: block;
        }
    }
}
</style>