<template>
  <v-layout justify-center mt-9>
    <prism-editor v-model="code" language="html" line-numbers class="editor" />
  </v-layout>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism.css';
// @ts-ignore
import PrismEditor from 'vue-prism-editor';
import 'vue-prism-editor/dist/VuePrismEditor.css';

import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    PrismEditor,
  },
})
export default class Home extends Vue {
  public code: string | null = null;
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
  background-color: none;
  box-shadow: none;
  color: none;
  border-radius: none;
  white-space: none;
  font-size: none;
  font-weight: 500;
}
</style>
