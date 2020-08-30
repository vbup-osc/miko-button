<template>
  <div style="display: none;" />
</template>
<script>
export default {
  mounted() {
    const dayjs = require('dayjs');
    let started = dayjs('20200806', 'YYYYMMDD');
    console.log(
      '%c点击下方链接，参与樱按钮开发，和按钮Man贴贴捏\n%chttps://github.com/voosc/miko-button',
      'color: #f48fb1;font-size:20px;',
      'color: #000000;font-size:20px;'
    );
    console.log('The project has lived for ' + dayjs().diff(started, 'day') + ' days.');
    console.log(
      '%c ',
      'background: url(https://cdn.jsdelivr.net/gh/voosc/static/miko-button/eat.jpg) no-repeat center;padding-left:300px;padding-bottom: 277px;'
    );
    console.log(
      '%c赌鬼巫女保护协会 绝赞吃人中！\n%c剪辑 翻译 校对\n史官 后期 画师\n%c审核群：698152963',
      'color: #d81b60;font-size:30px;',
      'color: #f48fb1;font-size:26px;',
      'color: #000000;font-size:26px;'
    );
  }
};
</script>
