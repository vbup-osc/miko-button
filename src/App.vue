<template>
  <div id="app">
        <Modal></Modal>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header" style="width: 63px;">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
                        <div class="sr-only">{{ $t("action.toggleNavbar") }}</div>
                        <div class="icon-bar"></div>
                        <div class="icon-bar"></div>
                        <div class="icon-bar"></div>
                    </button>
                </div>
                
                <div class="collapse navbar-collapse" id="bs-navbar-collapse">
                    <ul class="nav navbar-nav" style="margin-bottom:0px;">
                        <li><a href="https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg" target="_blank" style="margin-top:2px"><img src="resources/youtube_social_icon_red.png" height="20"/></a></li>
                        <li><a href="https://twitter.com/ookamimio" target="_blank"><img src="resources/Twitter_Social_Icon_Circle_Color.png" height="27"/></a></li>
                        <li><a href="https://space.bilibili.com/389862071" target="_blank"><img src="resources/bilibili.png" height="27"/></a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" style="margin-top:0px;margin-bottom:0px">
                        <li class="dropdown">
                            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="resources/download.svg" height="23"/></a>
                            <ul class="dropdown-menu">
                                <li style="width: 63px;"><a href="https://ookamimio.org/resources/android.apk" download="android.apk" target="_blank" style="padding-left:18px"><img src="resources/Android.png" height="27"/></a></li>
                                <li style="width: 63px;"><a href="https://ookamimio.org/resources/apple.mobileconfig" download="apple.mobileconfig" target="_blank" style="padding-left:18px"><img src="resources/Apple.png" height="27"/></a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" style="margin-top:0px;">
                        <li class="dropdown">
                            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="resources/lang.svg" height="23"/></a>
                            <ul class="dropdown-menu">
                                <li style="width: 63px;"><a href="javascript:;" style="text-align: center;padding: 5px 0px;width: 63px;" @click="chlang('zh-CN')"><img src="resources/China.jpg" width="25"></a></li>
                                <li style="width: 63px;"><a href="javascript:;" style="text-align: center;padding: 5px 0px;width: 63px;margin-bottom: 4px;" @click="chlang('ja-JP')"><img src="resources/Japan.png" width="25"></a></li>
                                <li style="width: 63px;"><a href="javascript:;" style="text-align: center;padding: 5px 0px;width: 63px;margin-bottom: 4px;" @click="chlang('en-US')"><img src="resources/England.jpg" width="25"></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container-fluid main-content">
            <router-view></router-view>
        </div>
        <footer class="footer">
            <div class="container-fluid footer-content">
                <button class="btn-buttom btn-buttom-info"><a href="javascript:location.reload();" style="color: #eeeeee;text-decoration: none">Colorful Wolf 1.3.3</a></button>
                <div class="pull-left">
                    <div class="text-left" style="color: rgba(255, 166, 102);">{{$t("info.author")}}</div>
                    <div class="text-left">{{$t("info.notOfficial")}}</div>
                    <div class="text-left"><a href="https://voicebuttonunitedproject.github.io/MioButton/" target="_blank">{{$t("info.audioStaff")}}</a></div>
                    <div class="text-left"><a href="https://github.com/VoiceButtonUnitedProject/MioButton" target="_blank">{{$t("info.toGithub")}}</a></div>
                </div>
            </div>
        </footer>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
.main-content{ /*内容部分*/
    min-height: 100vh;
    background-color: #333333;
}
.btn-buttom{
    border: 0px;
    padding: 1px 10px;
}
.btn-buttom-info {
    color: #fff;
    font-size: 12px;
    background-color: rgb(0, 214, 0);
    border-radius: 5px;
}
.btn-buttom-info:hover {
    color: #fff;
    font-size: 12px;
    background-color: rgb(4, 163, 4);
    border-radius: 5px;
}
.btn-buttom-info:focus {
    color: #fff;
    font-size: 12px;
    background-color: rgb(4, 163, 4);
    border-radius: 5px;
}
.navbar{ 
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.151);
    background-color: rgba(34, 34, 34, 0.5);/*顶栏部分*/
    margin: 15px;
}
.navbar-fixed-top{ 
    border-width: 0 0 0px;/*顶栏边缘*/
    border-radius: 30px;
}
.navbar-toggle{ 
    border: 0px solid transparent;/*右侧按钮边框*/
    margin: 8px 33%;
    padding: 9px 0px;
}
.navbar-default .navbar-toggle:hover, 
.navbar-default .navbar-toggle:focus{ 
    background-color: rgba(0, 0, 0, 0);/*右侧按钮选定背景色*/
}
.navbar-collapse{ 
    border-top: 0px solid transparent;/*右侧二级菜单顶部边框*/
}
.navbar-default .navbar-toggle .icon-bar{ 
    background: #999999;/*右侧按钮颜色*/
}
.dropdown-menu{
    width: 63px;
    min-width: min-content;
}
.navbar-default .navbar-nav > li > a{ 
    color: #999999;/*右侧语言状态显示文字颜色*/
}
.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus{
    background-color: rgba(0,0,0,0.3); /*语言栏背景颜色*/
    color: #999999; /*语言栏显示字体*/
}
.dropdown-menu > li > a{
    color: #cccccc; /*语言栏文字颜色（长）*/
}
.dropdown-menu > li{
    color: #cccccc; /*语言栏文字颜色（长）*/
    width:76px;
}
.dropdown-toggle{
    border-radius: 30px;/*语言栏形状（长）*/
    margin-top: 3px;
}
.navbar-default{
    text-align: center;
    margin-left: auto;
    max-height: max-content;
    max-width: max-content;
}
.navbar-fixed-top .navbar-collapse, .navbar-fixed-bottom .navbar-collapse {
    max-height: unset;
}
.dropdown-menu{
    border-radius: 18px;
    border-top-right-radius: 18px;
    background-color: rgba(0,0,0,0.3); /*语言栏背景颜色（长）*/
    margin-top: 3px;
}
.navbar-nav > li > .dropdown-menu {
    margin-top: 3px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
}
.navbar-default .navbar-brand {
    color: #FFBA75; /*标题显示颜色*/
}
.navbar-default .navbar-brand:hover {
    color: #FFd0a1; /*标题显示选定颜色*/
}
.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus{
    background-color: rgba(0,0,0,0.3); /*语言选择栏选定背景色（大）*/
}
.navbar-default .navbar-nav > li > a:hover{
    color: #ffffff;/*语言选择栏状态显示文字选定颜色（大）*/
}
.navbar-default .navbar-nav .open .dropdown-menu > li > a:hover{
    color: #ffffff;/*语言选择栏选择项文字颜色（大）*/
}
.footer {
    width: 100%;
    height: 100%;
    min-height: 60px;
    background-color: #222222;
}
.footer-content {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #c2c2c2;
    font-weight:600;
}
.text-right{
    text-align: right;
}
</style>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Modal from './components/modal.vue'
//import fetchpost from './util/fetchpost'

@Component({
    components:{
        Modal
    }
})
class App extends Vue {
    get currentLang(){
        return this.$i18n.locale;
    }
    created(){
        // eslint-disable-next-line 
        console.log("Produced by MoewSound Idols");
        this.$i18n.locale = localStorage.getItem("lang") || this.$i18n.locale;
    }
    chlang(v){
        this.$i18n.locale = v;
        localStorage.setItem("lang", v);
    }
}

export default App;
</script>

