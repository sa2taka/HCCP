<template>
  <v-layout flex-column justify-center mt-9>
    <editor
      v-model="code"
      @init="editorInit"
      lang="html"
      :theme="isDark ? 'tomorrow_night' : 'chrome'"
      height="640"
      class="editor mx-auto"
    ></editor>
    <v-btn
      color="primary"
      @click="parseCode"
      class="mt-4 mx-auto"
      style="width: 140px;"
      >解析</v-btn
    >
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import theme from '@/store/modules/theme';
@Component({
  components: {
    editor: require('vue2-ace-editor'),
  },
})
export default class Home extends Vue {
  public code: string = '';
  public isDark = false;

  public created() {
    this.isDark = theme.theme === 'dark';

    this.$store.subscribe(({ type, payload }, state) => {
      if (type === 'theme/setTheme') {
        this.isDark = payload === 'dark';
      }
    });
  }

  private editorInit() {
    require('brace/ext/language_tools'); //language extension prerequsite...
    require('brace/mode/html');
    require('brace/theme/chrome');
    require('brace/theme/tomorrow_night');
  }
  private parseCode() {}
}
</script>

<style lang="scss">
.editor {
  width: 80%;
  height: 640px;
  max-height: 80%;
}

.v-application code:after,
.v-application code:before {
  content: none;
}

.v-application code {
  box-shadow: none;
  font-weight: 500;
}

/* hack */

.ace-tomorrow-night .ace_gutter {
  background: #36383c !important;
}

.ace-tomorrow-night .ace_gutter-active-line {
  background: #36383c !important;
}

.ace-tomorrow-night .ace_marker-layer .ace_active-line {
  background: #282a2f !important;
}
</style>
