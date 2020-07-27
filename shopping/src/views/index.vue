<template>
  <div class="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li :class="{'current':item.current}" v-for="item in menuTab" :key="item.id" @click = "toggleMenu(item)">{{item.txt}}</li>
        <!-- <li>注册</li> -->
      </ul>
      <!-- 表单 start -->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium ">
        <el-form-item prop="username" class="item-form">
          <label>邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="item-form">
           <label>密码</label>
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="repassword" class="item-form" v-show="model==='register'">
           <label>确认密码</label>
          <el-input type="password" v-model="ruleForm.repassword" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="code" class="item-form">
          <label>验证码</label>
          <el-row :gutter="11">
            <el-col :span="16"><el-input v-model.number="ruleForm.code"></el-input></el-col>
            <el-col :span="8"><el-button type="success" class="block" @click="getCode()">获取验证码</el-button></el-col>
          </el-row>
          
        </el-form-item>

        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block" :disabled="loginButtonStatus">{{model=== "login"?"登录":"注册"}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// 引入过滤特殊字符的函数
import {GetCode} from "@/api/login.js";
import {reactive, ref, isRef, onMounted} from "@vue/composition-api";
import {stripscript, validateEmail, validatePass, validateVCode} from "@/utils/validate";
export default {
  // 当前组件的名字
  name: "login",
  // setup(props, context){
    // 放置vue2.0中的 data数据、自定义函数 、生命周期
    // attrs:(...) == this.$attrs
    // emit:(...) == this.$emit
    // listeners:(...) == this.$listeners
    // parent:(...) == this.parent
    // refs:(...) == this.refs
    // root:(...) == this
    setup(props, {refs, root}){
       // 验证用户名
      let validateUsername = (rule, value, callback) => {
        // let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else if (!validateEmail(value)){
           callback(new Error('邮箱格式不正确'));
        } else {
          callback()
        }
      };
      // 验证密码
      let validatePassword = (rule, value, callback) => {
        // let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (!validatePass(value)) {
          callback(new Error('密码为6-18位数字+字母'));
        } else {
          callback();
        }
      };

      // 验证重复密码
       let validateRepassword = (rule, value, callback) => {
        //当使用v-show时，需要做下面这个判断 如果模块值为login,就直接通过
        if (model.value==='login'){
          callback()
        }
        // let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value != ruleForm.password) {
          callback(new Error('两次输入密码不一致'));
        } else {
          callback();
        }
      };
      // 验证验证码
       let validateCode= (rule, value, callback) => {
        // let reg =/^\d{6}$/
        if (value === '') {
          return callback(new Error('请输入验证码'));
        } else if(!validateVCode(value)) {
          return callback(new Error("验证码格式不正确"))
        } else {
          callback()
        }
      }
    // 登录和注册
    const menuTab = reactive ([
      {txt:"登录",current:true,type:"login"},
      {txt:"注册",current:false,type:"register"}
    ])
    // 模块值  基本数据类型需要用ref来定义 对象用reactive来定义
    const model = ref("login")
    //登录按钮禁用状态
    const loginButtonStatus = ref(true)

    console.log(model.value)
    // isRef检查一个对象是否是ref对象
    console.log(isRef(model)?'基本数据类型':'对象类型')
    
    const ruleForm=reactive({
          username: '',
          repassword: '',
          password: '',
          code: ''
        })
   const rules= reactive({
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          repassword: [
            {validator: validateRepassword, trigger: 'blur'}
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ]
        }) 
    // 声明函数
    // vue  数据驱动视图
    //  dom操作元素
    // 获取验证码
    const getCode =(() => {
      // 请求提示 如果用户名为空 就不发送请求 并请示相应的提示信息
      if (ruleForm.username == '') {
        root.$message.error("邮箱不能为空")
        return false
      } else if(ruleForm.password == '') {
        root.$message.error("密码不能为空")
        return false
      }
      // 请求的接口
      let data = {
        // 把username传到后台去
        username:ruleForm.username
      }
      GetCode(data)
    })
    const toggleMenu = (data =>{
      // 循环拿到每个li
      // arr.forEach(function(item,index,array){...})
      menuTab.forEach((ele,index) => {
        console.log(ele,index)
        ele.current = false
      });
      data.current = true
      // 修改模块值
      model.value = data.type
    })
    const submitForm = (formName =>{
      // axios.request({
      //   method:"post",
      //   url:"/user",
      //   data:{
      //     name:"丁丁",
      //     age:"14"
      //   }
      // })
      // axios.get('/user?ID=12345').then(function(response){
      //   console.log(response)
      // }).catch(function(error) {
      //   console.log(error)
      // })
      // axios.post("/user?ID=12345",{
      //   firstName:"李红",
      //   age:"12"
      // }).then(function(response) {
      //   console.log(response)
      // })
       refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
          // 点击提交后清空表单
         refs.ruleForm.resetFields()
        }) 
    }) 
    // 生命周期
    // 挂载完成后
    onMounted (() =>{
    })
    return {
      menuTab,
      toggleMenu,
      getCode,
      submitForm,
      ruleForm,
      rules,
      model,
      loginButtonStatus
    }
  }
}
</script>
<style lang="scss" scoped>
  .login{
    height: 100vh;
    width: 100%;
    background-color: #344a5f;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-wrap{
    width: 330px;
  }
 .menu-tab{
    text-align: center;
    li {
      display: inline-block;
      width: 88px;
      line-height: 36px;
      font-size: 14px;
      border-radius: 2px;
      cursor: pointer;
    }
    .current{
      background-color: rgba(0,0,0,.1)
    }
  }
  // 表单样式
  .login-form{
    margin-top: 29px;
    label{
      display: block;
      font-size: 14px;
      margin-bottom: 3px;
    }
    .item-form{
      margin-bottom: 13px;
    }
    .block{
      width: 100%;
      display: block;
    }
    .login-btn{
      margin-top: 19px;
    }
  }
</style>