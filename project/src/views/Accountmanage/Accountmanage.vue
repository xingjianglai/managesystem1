<template>
    <div class="account-manage">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <i class="el-icon-upload"></i>
                <span>账号管理</span>
            </div>
            <!-- 面板内容 -->
            <div class="text item">
                <el-table ref="accountTableData" :data="accountTableData" tooltip-effect="dark" style="width: 100%">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <!-- 账户 -->
                    <el-table-column prop="account" label="账户名">
                    </el-table-column>
                    <!-- 用户组 -->
                    <el-table-column prop="userGroup" label="用户组">
                    </el-table-column>
                    <!-- 日期 -->
                    <el-table-column label="日期">
                        <template slot-scope="scope">{{ scope.row.ctime }}</template>
                    </el-table-column>
                    <!-- 操作 -->
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            
                            <el-button size="mini" type="primary">
                                <i class="el-icon-edit-outline"></i>
                                编辑</el-button>
                            <el-button size="mini" type="danger">
                                <i class="el-icon-delete"></i>
                                删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                accountTableData: [
                    {
                        account: '幸江来',
                        userGroup: '最强王者',
                        ctime: '2019-3-9'
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>
<style lang="less">
    @import './Accountmanage.less';
</style>