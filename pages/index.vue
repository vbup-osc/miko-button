<template>
  <v-layout column justify-center align-center app>
    <dev-warning />
    <!-- 播放控制的浮动按钮 -->
    <v-speed-dial
      v-model="fab"
      fixed
      bottom
      right
      direction="top"
      open-on-click
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn slot="activator" v-model="fab" :class="speed_dial_color" dark fab hover>
          <v-icon v-if="fab">
            {{ icons.close }}
          </v-icon>
          <v-icon v-else large>
            {{ icons.play }}
          </v-icon>
        </v-btn>
      </template>
      <v-btn fab small :class="fab_color" @click.stop="stop_all()">
        <span class="fab-tip">{{ $t('control.stop') }}</span>
        <v-icon :class="fab_icon">
          {{ icons.stop }}
        </v-icon>
      </v-btn>
      <v-btn fab small :class="fab_color" @click.stop="get_random_voice()">
        <span class="fab-tip">{{ $t('control.pick_one') }}</span>
        <v-icon :class="fab_icon">
          {{ icons.selection_ellipse_arrow_inside }}
        </v-icon>
      </v-btn>
      <v-btn fab small :class="fab_color" :disabled="random" @click.stop="overlap = !overlap">
        <span class="fab-tip">
          {{ overlap_text }}
        </span>
        <v-icon :class="fab_icon">
          {{ icons.view_parallel }}
        </v-icon>
      </v-btn>
      <v-btn fab small :class="fab_color" :disabled="random" @click.stop="repeat = !repeat">
        <span class="fab-tip">
          {{ repeat_text }}
        </span>
        <v-icon :class="fab_icon">
          {{ icons.repeat }}
        </v-icon>
      </v-btn>
      <v-btn fab small :class="fab_color" :disabled="overlap || repeat" @click.stop="random = !random">
        <span class="fab-tip">
          {{ random_text }}
        </span>
        <v-icon :class="fab_icon">
          {{ icons.shuffle }}
        </v-icon>
      </v-btn>
    </v-speed-dial>
    <v-flex xs12 sm8 md6>
      <!-- 直播面板 -->
      <v-card :loading="lives_loading">
        <v-card-title>
          <v-icon class="primary--text" :class="dark_text" style="margin-right: 8px;">
            {{ icons.clock_outline }}
          </v-icon>
          {{ $t('live.activity') }}
        </v-card-title>
        <!-- 订阅人数 -->
        <v-card-text style="font-size: 1rem;">
          {{ $t('site.subscriber') }}{{ youtubeData.subscriber_count }}
        </v-card-text>
        <v-card-text>
          <!-- 正在直播 -->
          <div v-for="live in lives" :key="live.id">
            <div v-if="live.title.length" :class="dark_text">
              <span class="warning--text">{{ $t('live.on_air') }}</span>
              <youtube-link :video-key="live.yt_video_key" :content="live.title" class="error--text" />
            </div>
          </div>
          <!-- 计划中的直播 -->
          <div v-for="live in upcoming_lives" :key="live.id">
            <div v-if="live.title.length" :class="dark_text">
              <span>{{ $t('live.schedule') + format_time(live.live_schedule) }}</span>
              <youtube-link :video-key="live.yt_video_key" :content="live.title" />
            </div>
          </div>
          <div v-if="lives.length === 0 && upcoming_lives.length === 0">
            <p>{{ lives_loading ? $t('live.loading') : $t('live.no_schedule') }}</p>
          </div>
          <div class="notification-board" v-html="$md.render($t('live.notification'))"></div>
        </v-card-text>
      </v-card>
      <!-- 随机分享 -->
      <v-card>
        <v-card-title style="font-size: 1.25rem;">
          <v-icon class="primary--text" :class="dark_text" style="margin-right: 8px;">
            {{ icons.shuffle }}
          </v-icon>
          {{ $t('site.random') }}
          <v-text-field
            id="share"
            style="padding: 16px 16px 0 16px;"
            type="text"
            value
            :placeholder="$t('site.placeholder')"
          >
          </v-text-field>
          <voice-btn :class="voice_button_color" @click.native="randomshare()">
            {{ $t('site.share') }}
          </voice-btn>
        </v-card-title>
      </v-card>
      <!-- 对每个按钮组生成一个Card -->
      <v-card v-for="group in groups" :key="group.name">
        <v-card-title class="headline" :class="dark_text">
          {{ group.group_description[current_locale] }}
        </v-card-title>
        <v-card-text>
          <voice-btn
            v-for="item in group.voice_list"
            :key="item.name"
            :class="voice_button_color"
            @click.native="play(item)"
          >
            {{ item.description[current_locale] }}
          </voice-btn>
        </v-card-text>
      </v-card>
      <audio id="single_play" @ended="play_ended()" />
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
$nonlinear-transition: cubic-bezier(0.25, 0.8, 0.5, 1);
.v-card {
  margin: 8px auto;
}

.fab-tip {
  position: absolute;
  right: 52px;
  padding: 5px 16px;
  background: rgba(97, 97, 97, 0.9);
  border-radius: 4px;
  color: #fff;
  width: auto;
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  opacity: 0.9;
  text-transform: none;
  letter-spacing: normal;
}

.notification-board {
  white-space: pre-line;
  height: auto;
  display: flex;
}
.notification-board ::v-deep p {
  margin-bottom: 0;
}
</style>

<script>
import voice_lists from '~/assets/voices.json';
import DevWarning from '../components/DevWarning';
import VoiceBtn from '../components/VoiceBtn';
import YoutubeLink from '../components/YoutubeLink';
import {
  mdiClockOutline,
  mdiClose,
  mdiPlay,
  mdiRepeat,
  mdiSelectionEllipseArrowInside,
  mdiShuffle,
  mdiStop,
  mdiViewParallel
} from '@mdi/js';

export default {
  components: {
    YoutubeLink,
    VoiceBtn,
    DevWarning
  },
  data() {
    return {
      icons: {
        close: mdiClose,
        play: mdiPlay,
        stop: mdiStop,
        selection_ellipse_arrow_inside: mdiSelectionEllipseArrowInside,
        view_parallel: mdiViewParallel,
        repeat: mdiRepeat,
        shuffle: mdiShuffle,
        clock_outline: mdiClockOutline
      },
      overlap: false,
      random: false,
      repeat: false,
      fab: false,
      groups: voice_lists.groups,
      upcoming_lives: [],
      lives: [],
      lives_loading: true,
      youtubeData: []
    };
  },
  computed: {
    voice_host() {
      if (process.env.NODE_ENV === 'production')
        return 'https://cdn.jsdelivr.net/gh/voosc/miko-button@master/static/voices/';
      else return '/voices/';
    },
    dark_text() {
      return {
        'grey--text text--lighten-4': this.$vuetify.theme.dark
      };
    },
    voice_button_color() {
      return {
        'pink darken-1': this.$vuetify.theme.dark,
        'pink lighten-3 white--text': !this.$vuetify.theme.dark
      };
    },
    fab_icon() {
      return [this.$vuetify.theme.dark ? 'white--text' : 'pink--text text--lighten-3'];
    },
    fab_color() {
      return [this.$vuetify.theme.dark ? 'pink darken-1' : 'white'];
    },
    speed_dial_color: function () {
      return [this.$vuetify.theme.dark ? 'pink darken-1' : 'pink lighten-2'];
    },
    current_locale() {
      return this.$i18n.locale;
    },
    overlap_text() {
      return (
        this.$t('control.overlap') + ' ' + (this.overlap ? this.$t('control.enabled') : this.$t('control.disabled'))
      );
    },
    random_text() {
      return this.$t('control.random') + ' ' + (this.random ? this.$t('control.enabled') : this.$t('control.disabled'));
    },
    repeat_text() {
      return this.$t('control.repeat') + ' ' + (this.repeat ? this.$t('control.enabled') : this.$t('control.disabled'));
    }
  },
  async mounted() {
    this.$vuetify.theme.dark = this.$store.state.dark === 'true';
    await this.fetch_live_data();
    this.youtube();
  },
  methods: {
    async fetch_live_data() {
      const query_url = 'https://api.holotools.app/v1/live?max_upcoming_hours=336';
      const channel = 12; // HoloAPI ID
      this.$axios
        .get(query_url, { params: { channel_id: channel } })
        .then(res => {
          this.lives = res.data.live;
          this.upcoming_lives = res.data.upcoming;
          this.upcoming_lives.sort((a, b) => {
            return a.live_schedule > b.live_schedule ? 1 : -1;
          });
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.lives_loading = false));
    },
    format_time(stamp) {
      return require('dayjs')(stamp).format('YYYY/M/DD HH:mm');
    },
    youtube() {
      this.$axios.get('https://api.holotools.app/v1/channels/youtube/UC-hM6YJuNYVAmUWxeIr9FeA').then(response => {
        this.youtubeData = response.data;
      });
    },
    randomshare() {
      let random_list = this.groups[this.get_random_int(this.groups.length)].voice_list;
      var title = random_list[this.get_random_int(random_list.length)].description[this.current_locale];
      var res = document.getElementById('share').value;
      if (this.current_locale === 'ja') {
        window.open(
          'https://twitter.com/intent/tweet?text=' +
            '%23みこボタン %23さくらみこ 今日、「' +
            res +
            '」のランダムオーディオは「' +
            title +
            '」です！ より多くのオーディオを聞くには、「みこボタン」のWebサイトにアクセスしてください~ https://sakuramiko.org'
        );
      } else if (this.current_locale === 'en') {
        window.open(
          'https://twitter.com/intent/tweet?text=' +
            '%23みこボタン %23さくらみこ Today,' +
            res +
            "'s random audio is %22" +
            title +
            '%22! Visit Miko Button Website For More Audio! https://sakuramiko.org'
        );
      } else {
        window.open(
          'https://twitter.com/intent/tweet?text=' +
            '%23みこボタン %23さくらみこ 今天，“' +
            res +
            '”的随机音频是“' +
            title +
            '”！ 访问樱按钮网站聆听更多音频 https://sakuramiko.org'
        );
      }
    },
    play(item) {
      if (process.client && process.env.NODE_ENV === 'production') {
        // eslint-disable-next-line no-undef
        ga('send', {
          hitType: 'event',
          eventCategory: 'Audios',
          eventAction: 'play',
          eventLabel: item.name + ' ' + item.description['zh']
        });
      }
      let that = this;
      if (!this.overlap) {
        let sp = document.getElementById('single_play');
        sp.src = this.voice_host + item.path;
        sp.load();
        sp.addEventListener('canplay', function () {
          sp.volume = 1;
          sp.play();
          if ('mediaSession' in navigator) {
            let meta = {
              title: item.description[that.current_locale],
              artist: that.$t('control.full_name'),
              album: that.$t('site.title'),
              artwork: [{ src: '/img/media-cover.jpg', sizes: '128x128', type: 'image/jpeg' }]
            };
            navigator.mediaSession.metadata = new window.MediaMetadata(meta);
          }
        });
        this.$bus.$on('abort_play', () => {
          sp.pause();
        });
      } else {
        //重叠播放
        let audio = new Audio(this.voice_host + item.path);
        audio.load();
        if ('mediaSession' in navigator) {
          const metadata = {
            title: that.$t('control.overlap_title'),
            artist: that.$t('control.full_name'),
            album: that.$t('site.title'),
            artwork: [{ src: '/img/media-cover.jpg', sizes: '128x128', type: 'image/jpeg' }]
          };
          navigator.mediaSession.metadata = new window.MediaMetadata(metadata);
        }
        audio.addEventListener('canplay', function () {
          audio.volume = 1;
          audio.play();
        });
        audio.addEventListener('ended', function () {
          //重叠播放下的循环播放实现
          if (that.repeat) {
            audio.play();
          }
        });
        this.$bus.$on('abort_play', () => {
          audio.pause();
          delete this.audio;
        });
      }
    },
    progress(audio, item) {
      setInterval(function () {
        item.progress = audio.currentTime / audio.duration;
      }, 500);
    },
    play_ended() {
      if (this.random) {
        this.get_random_voice();
      } else if (this.repeat && !this.overlap) {
        //对于单个音频的循环播放
        let sp = document.getElementById('single_play');
        sp.play();
      }
    },
    get_random_int(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    get_random_voice() {
      let random_list = this.groups[this.get_random_int(this.groups.length)];
      this.play(random_list.voice_list[this.get_random_int(random_list.voice_list.length)]);
    },
    stop_all() {
      console.log('stop-all');
      this.$bus.$emit('abort_play');
    }
  },
  head() {
    return {
      title: this.$t('site.title'),
      link: [{ rel: 'canonical', href: 'https://sakuramiko.org' }]
    };
  }
};
</script>
