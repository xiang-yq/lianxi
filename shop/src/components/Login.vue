<template>
  <div class="login">
    <el-image class="logoimg" style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
    <p class="myName">我的商家后台</p>
    <el-form label-width="60px" label-position="left">
      <el-form-item label="账 号:">
        <el-input v-model="username" clearable autofocus></el-input>
      </el-form-item>
      <el-form-item label="密 码:">
        <el-input v-model="password" type="password" clearable></el-input>
      </el-form-item>
      <el-form-item label="验证码:" class="yanzhengItem">
        <el-col :span="12">
          <el-input class="yanzhengma" v-model="yanzhengma" clearable></el-input>
        </el-col>
        <el-col :span="12">
          <el-image style="width: 90%; height: 40px" :src="url" :fit="fit"></el-image>
        </el-col>
      </el-form-item>
    <p class="tip">首次登录,请点击忘记密码去修改新密码</p>
    </el-form>
    <el-button type="danger">登 录</el-button>
    <p class="forget" @click="goforget">忘记密码?</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      fit: "",
      username: "",
      password: "",
      yanzhengma: ""
    };
  },
  methods:{
      goforget(){
          console.log('去修改密码页面')
        //   this.$router.push('/forget')
      }
  }
};
</script>

<style lang="scss" scoped>
.el-form {
  width: 90%;
  margin: 0 auto;
}
.myName{
    font-size: 18px;
    color: rgb(195, 0, 255);
}
.el-col{
    height: 40px;
}
.logoimg{
    margin-top: 70px;
}
.el-button{
    margin-top: 20px;
    width: 90%;
}
.tip{
    font-size: 14px;
    color: #ff1100;
}
.forget{
    font-size: 14px;
    color: #f95146;
    width: 20%;
    margin-left: 70%;
    text-align: right;
    padding: 0 5px;
    border: 1px solid red;
}
</style>