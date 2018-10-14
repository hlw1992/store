<template>
  <div>
    <div class="app-header">
      <!-- 点击图片可跳转 -->
      <router-link :to="{path: '/'}">
        <img src="../assets/logo.png" alt="">
      </router-link>
      <ul>
        <li @click="loginClick"><a>登陆</a></li>
        <li @click="regClick"><a>注册</a></li>
        <li @click="aboutClick"><a>关于</a></li>
      </ul>
    </div>
    <div class="app-content">
        <!-- <keep-alive>表示缓存 -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    <div class="app-footer">
      <p>by hlw @2018</p>
    </div>
    <!-- is-show是自定义属性,需要在子组件定义 -->
    <!-- on-close是自定义事件,需要在子组件定义 -->
    <my-dialog :is-show="isShowLoginDialog" @on-close='closeDialog("isShowLoginDialog")'>
      <!-- <p>login</p> -->
      <div class="loginDiv">
        <div>
          <span>帐 号 : </span>
          <input type="text">
        </div>
        <div>
          <span>密 码 : </span>
          <input type="password">
        </div>
        <label>
          <input type="checkbox" id="">记住密码
        </label>
        <br>
        <button>登 录</button>
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close='closeDialog("isShowRegDialog")'>
      <!-- <p>reg</p> -->
      <div class='regDiv'>
        <div>
          <span>邮箱地址 : </span>
          <input type="text">
        </div>
        <div>
          <span>姓　　名 : </span>
          <input type="text">
        </div>
        <div>
          <span>密　　码 : </span>
          <input type="text">
        </div>
        <div>
          <span>重复密码 : </span>
          <input type="password">
        </div>
        <div>
          <span>　验证码 : </span>
          <input type="text">
        </div>
        <br>
        <button>确 定</button>
        <button>取 消</button>
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowAboutDialog" @on-close='closeDialog("isShowAboutDialog")'>
      <p>Illo qui reprehenderit optio. Eum et fuga consequuntur officiis nam nobis. Ut vitae sint aperiam sunt.</p>
    </my-dialog>
  </div>
</template>

<script>
import Dialog from './dialog'
export default {
  components:{
    myDialog : Dialog
  },
  // name: 'ind',
  data () {
    return {
      isShowLoginDialog: false,
      isShowRegDialog: false,
      isShowAboutDialog: false
    }
  },
  methods:{
    loginClick(){
      this.isShowLoginDialog = true
    },
    regClick(){
      this.isShowRegDialog = true
    },
    aboutClick(){
      this.isShowAboutDialog = true
    },
    closeDialog(attr){
      this[attr]=false
    }
  }
}
</script>

<style>
  *{margin: 0;padding: 0;}
  ul,li,ol{list-style:none}
  a{text-decoration:none;color: darkgray;cursor: pointer;}
  .app-header{
    width:100%;
    height: 100px;
    background: darkslategray;
    overflow: hidden;
  }
  .app-header img{
    height: 50px;
    margin:25px;
    margin-left: 15%;
  }
  .app-header ul{
    float: right;
    height: 100px;
    line-height: 100px;
    margin: 0 25px;
    margin-right: 15%;
  }
  .app-header ul li{
    float: left;
    margin: 0 10px;
  }
  .app-footer{
    width:100%;
    height: 100px;
    background: lightgray;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  /* 登录框 */
  .loginDiv{
    text-align: left;
  }
  .loginDiv span{
    margin-left:20px;
  }
  .loginDiv label{
    margin-left:35%;
  }
  .loginDiv button{
    margin-left:40%;
    margin-bottom: 10px;
    width: 60px;
  }
  /* 注册框 */
  .regDiv{
    text-align: left;
  }
  .regDiv span{
    margin-left:20px;
  }
  .regDiv button{
    width: 40px;
  }
  .regDiv button:first-of-type{
    margin-left:35%;
    margin-bottom: 10px;
    margin-right: 10px;
  }
</style>
