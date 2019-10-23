<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>HCCP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-label :dark="isDark">Dark Mode</v-label>
      <v-switch
        v-model="isDark"
        class="center-switch"
        :dark="isDark"
        id="dark-mode-switch"
        color="secondary"
      ></v-switch>
    </v-app-bar>

    <v-content id="main">
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import theme from '@/store/modules/theme';

@Component
export default class App extends Vue {
  public isDark: boolean = false;
  public created() {
    if (localStorage.theme) {
      this.isDark = localStorage.theme === 'dark';
      this.setTheme(this.isDark);
    }
  }
  @Watch('isDark')
  public changedTheme(isDark: boolean) {
    this.setTheme(isDark);
  }
  private setTheme(isDark: boolean) {
    localStorage.theme = isDark ? 'dark' : 'light';
    this.$vuetify.theme.dark = isDark;
    theme.setTheme(isDark ? 'dark' : 'light');
  }
}
</script>
<style lang="scss" scoped>
#main {
  width: 90%;
  position: relative;
  margin: 0 auto;
}
.center-switch {
  position: relative;
  top: 12px;
  margin-left: 4px;
}
</style>
