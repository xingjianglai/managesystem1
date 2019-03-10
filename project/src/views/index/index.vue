<template>
    <div class="index">
        <el-container>
            <el-aside width="200px">
                <leftnav></leftnav>
            </el-aside>
                <el-container>
                    <!--头部-->
                    <el-header>
                        <rightheader></rightheader>
                    </el-header>
                    <!--内容-->
                    <el-main>
                    <router-view></router-view>
                    </el-main>
                    <!--尾部-->
                    <el-footer>
                        <Rightfooter></Rightfooter>
                    </el-footer>
            </el-container>
        </el-container>
    </div>
</template>
<script>
//引入组件
import leftnav from '@/components/leftnav/leftnav.vue'
import rightheader from '@/components/rightheader/rightheader.vue'
import Rightfooter from '@/components/Rightfooter/Rightfooter.vue'

export default {
        components:{ //注册组件
            leftnav,
            rightheader,
            Rightfooter
        }
}
</script>
<style lang="less">
    @import './index.less';
</style>


