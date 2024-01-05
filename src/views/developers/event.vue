<template>
    <div class="container mx-auto">

        <div class="text-center my-[100px]">
            <h1 class="text-[41px] text-[#010105] mb-4">ORis Chain <span class="text-[#1058DE]">Events</span></h1>
            <p class="text-xl text-[#777]">
                Come Meet the World's Most Innovative Web3 Builders
            </p>
        </div>

        <div class="flex items-center mt-24 mb-6 flex-row event">
            <el-space direction="vertical" alignment="start" class="w-1/2 pr-[50px] left">
                <h1 class="my-5 text-4xl text-[#010105]">Builders Club</h1>
                <p class="text-base text-[#777] space-margin">
                    Joining the ORis Chain Builders Club empowers you to take the
                    lead in organizing local events, connect with fellow like-minded
                    enthusiasts, and actively contribute to shaping the future of
                    Web3 technology.
                </p>
            </el-space>
            <div class="big_img">
                <img src="@/assets/ios/start@3x.png" alt="" width="100%" class="mx-auto">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.big_img {
    width: 464px;
    height: 328px;
}

@media (max-width: 768px) {
    .event {
        align-items: center;
        flex-direction: column-reverse;

        .left {
            padding: 0;
            width: 100%;
            align-items: center !important;
        }

        .big_img {
            width: 100%;
        }
    }
}
</style>