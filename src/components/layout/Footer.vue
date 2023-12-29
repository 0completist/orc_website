<template>
    <div class="footer-container text-white">
        <el-row class="justify-center">
            <el-col :xs="24" :sm="8" :md="8" :lg="6" :xl="6">
                <div class="footer-column">
                    <div>
                        <h3 class="title">Build</h3>
                        <p>Whitepaper</p>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="6" :xl="6">
                <div class="footer-column">
                    <div>
                        <h3 class="title">About</h3>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Careers</p>
                        <p>Verification</p>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="6" :xl="6">
                <div class="footer-column">
                    <div>
                        <h3 class="title">Community</h3>
                        <div class="flex items-center">
                            <img src="@/assets/web/f1.png" alt="" class="w-4 mr-3">
                            <p>Facebook</p>
                        </div>
                        <div class="flex items-center">
                            <img src="@/assets/web/f2.png" alt="" class="w-4 mr-3">
                            <p>Facebook</p>
                        </div>
                        <div class="flex items-center">
                            <img src="@/assets/web/f3.png" alt="" class="w-4 mr-3">
                            <p>Facebook</p>
                        </div>
                        <div class="flex items-center">
                            <img src="@/assets/web/f4.png" alt="" class="w-4 mr-3">
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
.footer-container {
    background-color: #000;
    padding: 24px 0;
    font-size: 10px;
}

.footer-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    text-align: left;
    line-height: 26px;

    .title {
        font-size: 20px;
        margin-bottom: 20px;
    }
}

/* 响应式样式 */
@media (max-width: 768px) {
    .footer-column {
        margin-bottom: 24px;
    }
}
</style>