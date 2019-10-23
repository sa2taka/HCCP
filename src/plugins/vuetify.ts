import Vue from "vue";
import Vuetify from "vuetify/lib";
import ja from "vuetify/src/locale/ja";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#009688",
        secondary: "#03a9f4",
        accent: "#e91e63",
        error: "#f44336",
        warning: "#ffc107",
        info: "#4caf50",
        success: "#2196f3"
      },
      dark: {
        primary: "#009688",
        secondary: "#03a9f4",
        accent: "#e91e63",
        error: "#f44336",
        warning: "#ffc107",
        info: "#4caf50",
        success: "#2196f3"
      }
    }
  },
  lang: {
    locales: { ja },
    current: "ja"
  },
  icons: {
    iconfont: "mdi"
  }
});
