<script>
import RowItem from '../components/home/RowItem.vue'
import TextColumns from '../components/home/TextColumns.vue'
import Title from '@/components/home/Title.vue'
import Hexagon from "@/components/home/Hexagon.vue"

export default {
  components: {
    RowItem,
    TextColumns,
    Title
  },
  setup() {
  },
  data() {
    return {
      moneyList: [
        { money: '333,333,333', name: 'Total Number of Accounts' },
        { money: '333,333,333', name: 'Transaction Count' },
        { money: '333,333,333', name: 'Block Height' },
        { money: '333,333,333', name: 'Transfer Amount of Core Tokens' }
      ],
      rowList: [
        {
          title: 'What is  Origins ?',
          content: 'Origins is a technology that\'s home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It\'s open to everyone, wherever you are in the world – all you need is the internet.',
          text: 'What is  Origins ?',
          position: 'left',
          url: "/origins"
        },
        {
          title: 'A fairer financial system',
          content: 'Today, billions of people can’t open bank accounts, others have their payments blocked. Origins decentralized finance (DeFi) system never sleeps or discriminates. With just an internet connection, you can send, receive, borrow, earn interest, and even stream funds anywhere in the world.',
          text: 'Explore DeFi',
          position: 'right',
          url: "/defi"
        },
        {
          title: 'The internet of assets',
          content: 'Origins isn\'t just for digital money. Anything you can own can be represented, traded and put to use as non-fungible tokens (NFTs). You can tokenise your art and get royalties automatically every time it\'s re-sold. Or use a token for something you own to take out a loan. The possibilities are growing all the time.',
          text: 'More on NFTs',
          position: 'left',
          url: "/nfts"
        }
      ],
      newsList: [
        {
          date: '05 December 2023',
          title: 'Cardano Ballot 2023: The Voice of the Cardano Community',
          content: 'The Cardano Ballot has evolved significantly into a modular, open source repository with custom blockchain-based voting and stake-based voting events.'
        },
        {
          date: '05 December 2023',
          title: 'Cardano Ballot 2023: The Voice of the Cardano Community',
          content: 'The Cardano Ballot has evolved significantly into a modular, open source repository with custom blockchain-based voting and stake-based voting events.'
        },
        {
          date: '05 December 2023',
          title: 'Cardano Ballot 2023: The Voice of the Cardano Community',
          content: 'The Cardano Ballot has evolved significantly into a modular, open source repository with custom blockchain-based voting and stake-based voting events.'
        },
        {
          date: '05 December 2023',
          title: 'Cardano Ballot 2023: The Voice of the Cardano Community',
          content: 'The Cardano Ballot has evolved significantly into a modular, open source repository with custom blockchain-based voting and stake-based voting events.'
        }
      ],
      bottom: false,
      coreList: [
        {
          icon: new URL("@/assets/logo/Anoma.png", import.meta.url).href,
          title: "Anoma Network",
          synopsis: "Anoma 是一个以意图为中心的隐私架构，引入了构建基础设施层的新范例和用于去中心化应用程序的新操作系统。Anoma 的以意图为中心引入了新颖的原语，允许现有的 web2.5 dApp 完全去中心化，例如 optimistic 和 ZK rollups、DEX、NFT 市场或 Gitcoin 等公共产品融资应用程序。"
        },
        {
          icon: new URL("@/assets/logo/Fundamental-Labs.png", import.meta.url).href,
          title: "Fundamental Labs",
          synopsis: "Fundamental Labs 致力于支持最有前途的企业家加速基础创新、大规模采用区块链技术并为更美好的数字社会创造价值。Fundamental Labs 的投资涵盖了许多领域，如第 1/2 层协议、Web 3.0、加密金融基础设施、DeFi、NFT 等。该公司致力于与其投资组合团队始终如一地合作，以取得巨大的成功。该公司的投资组合包括 60 多个项目，如 Coinbase、Cannan、Polkadot、Vechain、Binance Coin、Blockstack、Avalanche、Near、PlatON、Mask 等。"
        },
        {
          icon: new URL("@/assets/logo/Shima-Capital.png", import.meta.url).href,
          title: "Opera",
          synopsis: ""
        },
        {
          icon: new URL("@/assets/logo/Cota-Capital.png", import.meta.url).href,
          title: "Cota Capital",
          synopsis: "Shima Capital 是一家专注于支持前沿区块链初创公司的投资基金。Shima Capital的单笔投资通常在 50 万至 200 万美元之间。"
        },
        {
          icon: new URL("@/assets/logo/Signum-Capital.png", import.meta.url).href,
          title: "Signum Capital",
          synopsis: "Signum Capital 是一家总部位于新加坡的公司，专门为支持区块链的公司提供咨询服务。"
        },
        {
          icon: new URL("@/assets/logo/Robot-Ventures.png", import.meta.url).href,
          title: "Robot Ventures",
          synopsis: "Robot Ventures 是具有远大抱负和逆势世界观的金融科技/加密公司的种子（前）投资者。 Robot Ventures 以行业定义的经济设计和无与伦比的经验为创始人提供支持。"
        }
      ],
      current: 3
    }
  }
}
</script>

<template>
  <div class="main mt-[auto]">
    <!-- banner -->
    <div class="banner-box flex justify-between flex-col">
      <div class="banner-content container mx-auto mt-[128px]">
        <p class="md:text-[60px] text-[30px] text-white">Build Web3 on </p>
        <p class="md:text-[60px] text-[30px] text-[#FFF88E]">ORis Smart Chain</p>
        <p class="md:text-base text-white md:max-w-[602px] max-w-[301px]">A community-driven blockchain ecosystem of
          Layer-1 and Layer-2
          scaling solutions.</p>
        <div class="btn text-primary text-lg">Get Start</div>
      </div>
      <div class="tips container mx-auto clear-both text-center text-white">
        Boasting over 200
        million accounts and 6.8 billion
        transactions, ORis is the world's fastest-growing public
        chain.
      </div>
    </div>
    <div class="container mx-auto">
      <el-row class="money py-6 ">
        <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" v-for="item in moneyList" :key="item">
          <div class="money-item text-[#052369] text-center">
            <p class="text-3xl font-medium mb-1">{{ item.money }}</p>
            <p class="text-xs">{{ item.name }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container mx-auto mt-8">
      <RowItem class="container" v-for="(item, index) in rowList" :key="index" :item="item" :index="index" />
    </div>
    <!-- Core Partners -->
    <div class="core-box mt-5">
      <Title class="pt-[92px]" title="Core Partners" />
      <img class="left-img hidden-md-and-down"
        src="@/assets/ios/6c710f52a755a702d525b653cc6d2445d371f8702585a-1A40Nd_fw1200@3x.png" alt="">
      <img class="right-img hidden-md-and-down"
        src="@/assets/ios/95fd67f0a660d8fe25d4ce72d8620cdfc40e378a3a6b-PsMWyo_fw1200@3x.png" alt="">
      <div class="container mx-auto mt-[17px]">
        <div class="fold-box flex justify-center">
          <div v-for="(item, index) in coreList" :key="item">
            <div class="foldItem flex" v-if="index != 2">
              <div class="foldItem-body" v-if="current == index">
                <div class="flex items-center">
                  <img src="@/assets/logo/Shima-Capital.png" alt="" width="90px">
                  <h1 class="text-xl ml-2.5"> Shima Capital </h1>
                </div>
                <p class="w-[370px] ml-[60px] mr-[80px]">
                  {{ item.synopsis }}
                </p>
              </div>
              <div class="foldItem-header" @click="current=index">
                <img :src="item.icon" alt="" class="mt-10 mb-5 mx-auto" width="38px">
                <h6 class="mt-10 text-[11px] rotate-90	">{{ item.title }}</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row-box mt-[57px]">
          <el-row :gutter="24">
            <el-col :xs="8" :sm="8" :md="8" :lg="4" :xl="4" class="mb-5" v-for="item in coreList" :key="item">
              <div class="coreItem flex flex-col items-center">
                <Hexagon :icon="item.icon" />
                <h6 class="mt-3.5 text-[11px]">{{ item.title }}</h6>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

    </div>
    <!-- NEWS & BLOG -->
    <div class="news-box mt-5">
      <Title class="pt-[92px]" title="NEWS & BLOG" />
      <div class="container mx-auto row-box">
        <TextColumns :list="newsList" class="mb-2" />
        <div class="mt-[106px] mb-[162px] mx-auto text-center">
          <el-button type="primary" size="large" style="padding: 0 60px;">View More News</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.money {
  position: static;
}
</style>
<style lang="scss" scoped>
.main {
  .banner-box {
    overflow: hidden;
    height: 645px;
    background: url("@/assets/ios/banner.png") no-repeat;
    background-size: cover;
    background-position: center center;

    .btn {
      margin-top: 33px;
      width: 184px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 1);
    }

    .tips {
      padding: 18px 0;
      background-color: rgba(255, 255, 255, 0.11);
    }
  }

  .money {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 4px 0px rgba(233, 233, 233, 0.5);
    border: 1px solid rgba(246, 246, 246, 1);

    &-item {
      border-right: 1px solid #F3F3F3;
    }

  }

  .core-box {
    position: relative;

    .left-img {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 300px;
      height: 292px;
    }

    .right-img {
      position: absolute;
      right: 0;
      top: 92px;
      width: 343px;
      height: 243px;
    }

    .fold-box {
      overflow: auto;

      .foldItem {
        margin-left: 1px;

        .foldItem-body {
          flex: 1;
          padding: 40px 20px 0;
          background-image: url("@/assets/logo/Shima-Capital.png");
          background-repeat: no-repeat;
          background-position-x: right;
          background-position-y: bottom;
        }

        .foldItem-header {
          width: 70px;
          height: 428px;
          white-space: nowrap;
          background-color: rgba(240, 245, 255, 1);
        }
      }

    }
  }

  .news-box {
    background: url("@/assets/web/news.png") no-repeat center;
    background-size: contain;
  }

  .title {
    color: #000;
    font-size: 20px;
    text-align: center;
  }
}

/* 响应式样式 */
@media (max-width: 991px) {
  .money-item {
    margin-bottom: 12px;
  }
}

@media (max-width: 768px) {
  .banner-box {
    background-position: 60% center !important;

    .banner-content {
      padding-left: 20px;
    }
  }
}
</style>
