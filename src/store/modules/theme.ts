import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module,
} from 'vuex-module-decorators';
import store from '@/store/index';

export interface ThemeState {
  theme: 'dark' | 'light';
}

@Module({ dynamic: true, store, name: 'theme', namespaced: true })
class Theme extends VuexModule implements ThemeState {
  public theme: 'dark' | 'light' = 'light';

  @Mutation
  public setTheme(theme: 'dark' | 'light') {
    this.theme = theme;
  }
}

const themeModule = getModule(Theme);
export default themeModule;
