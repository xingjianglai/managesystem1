<template>
    <div class="account-add">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <i class="el-icon-upload"></i>
                <span>添加账号</span>
            </div>
            <div class="  item">
                <el-form :model="accountForm" status-icon :rules="rules" ref="accountForm" label-width="100px" class="demo-ruleForm"
                    style="width: 500px;">
                    <!-- 账号 -->
                    <el-form-item label="账户名称" prop="account">
                        <el-input type="text" v-model="accountForm.account" autocomplete="off"></el-input>
                    </el-form-item>

                    <!-- 密码 -->
                    <el-form-item label="账户密码" prop="password">
                        <el-input type="text" v-model="accountForm.password" autocomplete="off"></el-input>
                    </el-form-item>

                    <!-- 确认密码 -->
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="text" v-model="accountForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <!-- 下拉选项 -->
                    <el-form-item label="选用户组" prop="userGroup">
                        <el-select v-model="accountForm.userGroup" placeholder="请选择用户组">
                          <el-option label="热血青铜" value="热血青铜"></el-option>
                          <el-option label="最强王者" value="最强王者"></el-option>
                        </el-select>
                      </el-form-item>

                    <!-- 提交按钮 -->
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()" class="button-register">添加</el-button>
                        <el-button @click="resetForm()" class="button-reset" type="success">重置</el-button>
                    </el-form-item>

                </el-form>
            </div>
        </el-card>
    </div>
</template>
<script>
import qs from 'qs'
console.log(qs);
    export default {
        data() {
            //自定义验证密码
            const validatePwd = (rule,value,callback) => {
                if(value === ''){ //非空验证
                    callback(new Error('请输入密码'))
                } else if(value.length < 3 || value.length > 5){ //长度验证
                        callback(new Error('密码长度在3到5位'))
                }else{
                    //如果确认密码不为空 再次发出一次性验证
                    if(this.accountForm.checkPass !== ''){
                        this.$refs.accountForm.validateField('checkPass')
                    }
                    callback();
                }
            }
            //自定义验证确认密码
            const checkPwd = (rule,value,callback) => {
                if(value === ''){
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.accountForm.password) { //一致性验证
                    callback(new Error('两次密码不一致'))
                } else {
                    callback(); //回调成功
                }
            }

            return {
                //添加账号数据
                accountForm: {
                    account:'',
                    password:'',
                    checkPass:'',
                    userGroup:''

                },
                rules: {
                    account:[
                        {required:true, message:'请输入账号',trigger:'blur'},
                        {min:3,max:5,message:'账号长度在3到5位'} 
                    ],
                    password:[
                        {required:true,validator:validatePwd,trigger:'blur'}
                    ],  
                    checkPass:[
                        {required:true,validator:checkPwd,trigger:'blur'}
                    ],
                    userGroup:[
                        {required:true,message:'请选择用户组',trigger:'change'}
                    ]
                }
            }
        },
        methods: {
            // 提交表单  
            submitForm() {
                this.$refs.accountForm.validate((valid) => { // 所有前端验证通过valid就是true 否则就是false
                    if (valid) {
                        // alert('请进');
 
                        // 收集账号和密码
                        const params = {
                            account: this.accountForm.account,
                            password: this.accountForm.password,
                            userGroup:this.accountForm.userGroup
                        }
                        //把数据发送给后端
                        this.req.post('http://127.0.0.1:888/account/accountadd',qs.stringify(params))
                        .then(response => {
                            //response.data 返回的成功数据
                            console.log(response.data)
                            let { code,reason } = response.data;
                            if(code == 0){
                                //弹成功提示
                                this.$message({
                                    type:'success',
                                    message:reason
                                })
                                //跳转页面
                                this.$router.push('/index/accountmanage');
                            }else if(code == 1){
                                this.$message.error(reason);
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })

                    } else {
                        console.log('请你滚出去');
                        return false;
                    }
                });
            },
            // 重置表单   
            resetForm() {
                this.$refs.accountForm.resetFields();
            }
        }
    }
</script>
<style lang="less">
    @import './Accountadd.less';
</style>