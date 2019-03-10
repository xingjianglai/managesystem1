<template>
    <div class="left-nav">
            <h1 class="top-nav">华联超市管理系统</h1> 
            <p class="top-name">您好：幸江来</p>
        <!--导航组件-->
        <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                unique-opened
                router
                >
            
                <!--导航一-->
        <el-submenu v-for="(menu,index) in menuDta" :key="index" :index="(index + 1) + ''">
            <template slot="title">
                <span class="icon iconfont" v-html="menu.icon_code"></span>
                <span>{{ menu.menuTitle }}</span>
            </template>
                <el-menu-item-group>
                    <el-menu-item :index="subMenu.path" v-for="(subMenu,index) in menu.children" :key="index">
                        {{ subMenu.subMenuTitle }}
                    </el-menu-item>
                    
                </el-menu-item-group>
        </el-submenu>
        <!--导航二-->
                <!-- <el-submenu index="2">
            <template slot="title">
                <span class="icon iconfont">&#xe71b;</span>
                <span>账号管理</span>
            </template>
                <el-menu-item-group>
                    <el-menu-item index="/index/accountmanage">账号管理</el-menu-item>
                    <el-menu-item index="/index/accountadd">添加账号</el-menu-item>
                    <el-menu-item index="/index/passwordmodify">密码修改</el-menu-item>
                </el-menu-item-group>
        </el-submenu> -->
        <!--导航三-->
                <!-- <el-submenu index="3">
            <template slot="title">
                <span class="icon iconfont">&#xe65d;</span>
                <span>商品管理</span>
            </template>
                <el-menu-item-group>
                    <el-menu-item index="/index/goodsmanage">商品管理</el-menu-item>
                    <el-menu-item index="/index/goodsadd">商品添加</el-menu-item>
                </el-menu-item-group>
        </el-submenu> -->
        <!--导航四-->
                <!-- <el-submenu index="4">
            <template slot="title">
                <span class="icon iconfont">&#xe83f;</span>
                <span>统计管理</span>
            </template>
                <el-menu-item-group>
                    <el-menu-item index="/index/salesstatistics">销售统计</el-menu-item>
                    <el-menu-item index="/index/stockstatistics">进货统计</el-menu-item>
                </el-menu-item-group>
        </el-submenu> -->
    </el-menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //导航数据
            menuDta:[
                {
                    menuTitle:'系统管理',
                    icon_code:'&#xe835;',
                    children:[
                        {
                            path:'/index',
                            subMenuTitle:'系统信息'
                        }
                    ]
                },
                {
                    menuTitle:'账号管理',
                    icon_code:'&#xe71b;',
                    children:[
                        {
                            path:'/index/accountmanage',
                            subMenuTitle:'账号管理'
                        },
                        {
                            path:'/index/accountadd',
                            subMenuTitle:'添加账号'
                        },
                        {
                            path:'/index/passwordmodify',
                            subMenuTitle:'密码修改'
                        },
                    ]
                },
                {
                    menuTitle:'商品管理',
                    icon_code:'&#xe65d;',
                    children:[
                        {
                            path:'/index/goodsmanage',
                            subMenuTitle:'商品管理'
                        },
                        {
                            path:'/index/goodsadd',
                            subMenuTitle:'商品添加'
                        }
                    ]
                },
                {
                    menuTitle:'统计管理',
                    icon_code:'&#xe83f;',
                    children:[
                        {
                            path:'/index/salesstatistics',
                            subMenuTitle:'销售统计'
                        },
                        {
                            path:'/index/stockstatistics',
                            subMenuTitle:'进货统计'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="less">
    @import './leftnav.less';
</style>