<template>
        <div class="right-header">
            
            <el-row :gutter="20">
                <!-- 左边 -->
                    <el-col :span="20">
                        <i class="el-icon-menu"></i>                      
                        <span class="title">华联超市欢迎您</span>
                    </el-col>
                    <!-- 右边 -->
 
                    <el-col :span="4">                   <el-row>
                        <el-col :span="8">
                            <div class="avatar">
                                <img src="../../assets/style/img/111.jpg" alt="" class="img">
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="down">
                                <el-dropdown @command="handleCommand">
                                    <span class="el-dropdown-link">
                                        幸江来
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item command="a">个人中心</el-dropdown-item>
                                        <el-dropdown-item command="b">退出登录</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                    </el-col>
                    </el-row>
                            
                            
                    </el-col>
            </el-row>
            
        </div>
</template>
    <script>
    export default {
        methods:{
            handleCommand(){
                console.log("参数",command);
            }
        }
    }
    </script>
    <style lang="less">
        @import './rightheader.less';
    </style>