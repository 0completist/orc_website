<script>
import RowItem from "../components/home/RowItem.vue"
import TextColumns from "../components/home/TextColumns.vue"
export default {
  components: {
    RowItem,
    TextColumns
  },
  setup() {
    return {}
  },
  data() {
    return {
      moneyList: [
        { money: "333,333,333", name: "Total Number of Accounts" },
        { money: "333,333,333", name: "Transaction Count" },
        { money: "333,333,333", name: "Block Height" },
        { money: "333,333,333", name: "Transfer Amount of Core Tokens" },
      ],
      rowList: [
        {
          title: "What is  Origins ?",
          content: "Origins is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world – all you need is the internet.",
          text: "What is  Origins ?",
          position: "left"
        },
        {
          title: "A fairer financial system",
          content: "Today, billions of people can’t open bank accounts, others have their payments blocked. Origins decentralized finance (DeFi) system never sleeps or discriminates. With just an internet connection, you can send, receive, borrow, earn interest, and even stream funds anywhere in the world.",
          text: "Explore DeFi",
          position: "right"
        },
        {
          title: "The internet of assets",
          content: "Origins isn't just for digital money. Anything you can own can be represented, traded and put to use as non-fungible tokens (NFTs). You can tokenise your art and get royalties automatically every time it's re-sold. Or use a token for something you own to take out a loan. The possibilities are growing all the time.",
          text: "More on NFTs",
          position: "left"
        },
      ],
      newsList: [
        {
          date: "05 December 2023",
          title: "Cardano Ballot 2023: The Voice of the Cardano Community",
          content: "The Cardano Ballot has evolved significantly into a modular, open source repository with custom blockchain-based voting and stake-based voting events.",
        },
        {
          date: "05 December 2023",
          title: "Cardano Ballot 2023: The Voice of the Cardano Community",
          content: "The Cardano Ballot has evolved significantly into a modular, open source repository with custom blockchain-based voting and stake-based voting events.",
        },
        {
          date: "05 December 2023",
          title: "Cardano Ballot 2023: The Voice of the Cardano Community",
          content: "The Cardano Ballot has evolved significantly into a modular, open source repository with custom blockchain-based voting and stake-based voting events.",
        },
        {
          date: "05 December 2023",
          title: "Cardano Ballot 2023: The Voice of the Cardano Community",
          content: "The Cardano Ballot has evolved significantly into a modular, open source repository with custom blockchain-based voting and stake-based voting events.",
        }
      ]
    }
  },
  mounted() {
  }

}
</script>

<template>
  <div class="main">
    <!-- <div class="main-content my-0 mx-auto" style="border: 1px solid red;">
      <div class="h-72">
        <p class="text-3xl	">Build Web3 on </p>
        <p class="text-3xl	">ORis Smart Chain</p>
        <p class="text-[8px]">A community-driven blockchain ecosystem of Layer-1 and Layer-2 scaling solutions.</p>
        <el-button color="#1058DE">Get Start</el-button>
      </div>
    </div> -->
    <!-- banner -->
    <div class="banner-box">
      <div class="container">
        <p class="text-3xl	">Build Web3 on </p>
        <p class="text-3xl	">ORis Smart Chain</p>
        <p class="text-[8px]">A community-driven blockchain ecosystem of Layer-1 and Layer-2 scaling solutions.</p>
        <el-button color="#1058DE">Get Start</el-button>
      </div>
    </div>
    <div class="container mx-auto">
      <div>Boasting over 200 million accounts and 6.8 billion transactions, ORIS is the world's fastest-growing public
        chain.</div>
      <el-row class="money py-6">
        <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" v-for="item in moneyList" :key="item">
          <div class="money-item text-[#052369] text-center">
            <p class="text-3xl font-medium mb-1">{{ item.money }}</p>
            <p class="text-xs">{{ item.name }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container mx-auto mt-8">
      <RowItem class="container" v-for="(item,index) in rowList" :key="index" :item="item" :index="index" />
    </div>
    <!-- Core Partners -->
    <div class="core-box mt-5">
      <div>Core Partners</div>

    </div>
    <!-- NEWS & BLOG -->
    <div class="news-box mt-5">
      <div class="title">NEWS & BLOG</div>
      <div class="container my-0 mx-auto">
        <TextColumns :list="newsList" class="mb-2" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  .banner-box {
    height: 329px;
    background: url("@/assets/web/banner.png") no-repeat center center;
    background-size: cover;
  }

  .money {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 4px 0px rgba(233, 233, 233, 0.5);
    border: 1px solid rgba(246, 246, 246, 1);

    &-item {
      border-right: 1px solid #F3F3F3;
    }

  }

  // .core-box {}

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
</style>
