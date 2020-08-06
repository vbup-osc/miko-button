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
                        <li><a href="https://www.youtube.com/channel/UC-hM6YJuNYVAmUWxeIr9FeA" target="_blank" style="margin-top:2px"><img src="resources/youtube_social_icon_red.png" height="20"/></a></li>
                        <li><a href="https://twitter.com/sakuramiko35" target="_blank"><img src="resources/Twitter_Social_Icon_Circle_Color.png" height="27"/></a></li>
                        <li><a href="https://space.bilibili.com/366690056" target="_blank"><img src="resources/bilibili.png" height="27"/></a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" style="margin-top:0px;margin-bottom:0px">
                        <li class="dropdown">
                            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="resources/download.svg" height="23"/></a>
                            <ul class="dropdown-menu">
                                <li style="width: 63px;"><a href="https://sakuramiko.org/resources/android.apk" download="android.apk" target="_blank" style="padding-left:18px"><img src="resources/Android.png" height="27"/></a></li>
                                <li style="width: 63px;"><a href="https://sakuramiko.org/resources/apple.mobileconfig" download="apple.mobileconfig" target="_blank" style="padding-left:18px"><img src="resources/Apple.png" height="27"/></a></li>
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
                <button class="btn-buttom btn-buttom-info"><a href="javascript:location.reload();" style="color: #ffffff;text-decoration: none">{{$t("info.version")}}</a></button>
                <div class="pull-left">
                    <div class="text-left" style="color: #F867a4">{{$t("info.author")}}</div>
                    <div class="text-left" style="color: #a27e8d">{{$t("info.notOfficial")}}</div>
                    <div class="text-left"><a href="https://voicebuttonunitedproject.github.io/MikoButton/" target="_blank">{{$t("info.audioStaff")}}</a></div>
                    <div class="text-left"><a href="https://github.com/VoiceButtonUnitedProject/MikoButton" target="_blank">{{$t("info.toGithub")}}</a></div>
                </div>
            </div>
        </footer>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
.main-content{ /*内容部分*/
    min-height: 100vh;
    background-image: linear-gradient(to bottom right,#f3e2ff,#ffdbe5);
}
.btn-buttom{
    border: 0px;
    padding: 1px 10px;
}
.btn-buttom-info {
    color: rgb(255, 255, 255);
    font-size: 12px;
    background-color: #ff9797;
    border-radius: 5px;
}
.btn-buttom-info:hover {
    color: #fff;
    font-size: 12px;
    background-color: #ec8c8c;
    border-radius: 5px;
}
.btn-buttom-info:focus {
    color: #fff;
    font-size: 12px;
    background-color: #ec8c8c;
    border-radius: 5px;
}
.navbar{ 
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.151);
    background-color: rgba(202, 141, 141, 0.384);/*顶栏部分*/
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
    background: #ffffff;/*右侧按钮颜色*/
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
    background-color: #ecbcc9;
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
        console.log("                     :.    i:....:..........:i                                                         \n                  r2::.::........:.:.:...uIrirrrir:iiir:..                                          \n                  :...:...:i:..7v::::....::vvrrrr77rv7777JS::..                                     \n                  ir::.:..vsjirK:i:::..... .Lriri2rririrrruKirrr:.                                  \n                .:rii::.:iir7..5PLi.......:rsii:rPr:i:i::::Iu:rr77v7.                               \n               :::...:.:LsUI:..rL:::.....su7r7rrvKi7r77777isPsirr7rvYr.                             \n              7i:.:...:.:.:j1L7i:::....  :Yrvii:2YiirrrrrriLg5rii:::r7u:                            \n               rY:.....:.:::...........i77i2r::ig2:iirrrir:rEPvir7rri::ri                           \n               :r....ir:...........:7rq2rirSi:irK1:iii7riii:XZSirr7rv77iri.                         \n                ..  .r ..... ......Ivr5ri:Ldiiis:UiiiirYiii:vggr:virrrrv7sL.                        \n                 :222q: ...iL:..:7DPDQj:irDP7ivJ v2i77iJLir:rPBs:7ririrrrrs7                        \n                vZQBq7ujri2BMB2r7rIZXB7:iERbriUi .uvrLi7Krii:2Bg:r7:iiirrrrs.                       \n              7RggBQgSPX7.5M2QJrL1ZPgQi:PisDriv   .U7r7i25iiiLDPSi5rir::rYrr7                       \n          :i:MQRMMIXbBb...sBPPZgMQRQQPiID:2gJXJ.   :Uv7riPvii7g:r11U::rY:77r7                       \n        SBBXiv5BQ1SSMQ::i:vsbMQQQMS7SjUg. iR5PivY.. .uJvrvdriiDr .P5 :7i:rYr7:                      \n       :BBBBZ5sMPKPRBP:j:i2i.:YKKI.iKKgi   dD7   . . .JXviIKirPq. 7Qriirrrirv:                      \n        .BBBQIr5EMd:I7YU:iP7::LIP2iLbgv    :Br    .    vRs7q1rIdii7MQrrrrrr7s:                      \n           .rJirrZ7 uLqv:rEu:ivPd5:UEr   .  rK.:.. .    7BL2MY7P   :BPrLirvjSi                      \n           rQQgKXg7.22ZriiEIrivbE2iuBUXsdB:..i.   . .    rEuRKu5    XBYv7rv2DL                      \n          .BQBBBSDr7KPP7rrSZJirPd5IBBZBBBBBBQBBB.  . .    7P7ibU    .QE7LrvYZL                      \n           .uSBrvgjqqPI77rPZqLrsgJ5Bj   IBBBd  vL . . .   :QquR. i   JQSI7uiUQ5                     \n              :.UgId5bLLv2KQgqL75P7KX7E:PBMZB      . .    YBBBBBBBQL  EZd1vJ:jSdi                   \n              .iqZ5PEUYjSdQr7RdjYUS5S:P2ii.bd     . . .  rQ. RBQs.PQB .ZKSLX7r:7U.                  \n               7KEXQK1SdgEX  7QgSj:JRg  .:ii     .   . ....v1BQEQ  bBv dqS1SXvP.                    \n              .75PQEPEMbr  .  .dBQ2 iXI.... ... . . .  .i  .7svSq  5i .BD2K1E5s                     \n              .7YQduYvi.:. ..   :Kgi  ........ . . .          :7      PQqZXIXDPJ                    \n               rrbb  ..:vLi..           .   . . . . . .        ....  :BE57SdKRBBQi                  \n               7rvDJ  ...:i:..             . .   .   .   . .   .:::. U5gqi.vPKv.ii                  \n               .Ii5gdi.     . .   . . .   . . . .         . .   ... 7qUgE7.:Y                       \n                .7vdDQPIi. .::       .   .   . . ..:::::..   .     .g1Pgd7.rU                       \n                 :YIPbPKgZqMBgi     . . .   . . . .....::.. . .    rusZEZr.Lu                       \n                  7YXSPIjPSQBXDr       . . . . . .         . . .  .:.Pdddr.XJ                       \n                  :LISKPsuUDgUqgS.      . . .   . .   .   . .     : rdPPE::PL                       \n                  :USq2b5j1KS5IKdR5i   .     . .   . . .        .uvXJb5dq:rqr                       \n                  iKP555E1IUS25IXXZQv ..... .     . . .        rQDZIugXbI:2qj.                      \n                  rDPS5ISPU52EISIXSEd..:........ .          .sdBdXIESB5ZLrPQqqsr:                   \n                  7RqUKuv1P5SKqUSISKg................  rsjKbBMKEPUERgBqbL2rvB1  .                   \n                  iQIKXYYvSP5XU11I2qD:.............:. rBgDbPZXXPSSMQv:bdqq  :M5:.                   \n                  DdEd1JqsUdPSIQguXKD.................ZbK5XSdUPXqKBi  RBD.    :ii                   \n                  BEPPJ5q25Qd21BgUKPP  ............. rgK55UKqII5Kbg   BQ                            \n                 iB5IqIPqPEPIvS2IKqdP..  ..........  JDISIIPK5S1qPg  .B.                            \n                .MPS2dEZEr7ZX7JXSDEgIP51r. .....  ...EbKIKIEUPqUKgD  .:                             \n                MEqbDgMg: iQ5r72Qgi.i75PPq7    .rsqPPqQqSKSbJ5ZXPDBr                                \n               bRgRK vQ7  UQvYjKi    ..r2Xqj :YbEbIYi::ddKSdvXMME .:                                \n              gBBEi  rS  :BKXZu...    ...vSPgKE57::.    jgbXJgi:B                                   \n            .gBZi        ..vBBQ5iir     ..iPP1i:..       BBQL7  .                                   \n           .5s.           UBRQBBU:ivi     .:r...     .iiiDBBP                                       \n                        JBBDK1jXZIi:rr     .       :rriiuRZgQ                                       \n                             %c%s", "color: #fd89d0; font-size: 30px;", "Miko，永远的神！");
        this.$i18n.locale = localStorage.getItem("lang") || this.$i18n.locale;
    }
    chlang(v){
        this.$i18n.locale = v;
        localStorage.setItem("lang", v);
    }
}

export default App;
</script>