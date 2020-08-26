import Observable from '@mtanevski/observable';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

export const SlotUi = (() => {
  class GameUi {
    _app;
    uiOptions;
    observable;

    constructor(uiOptions) {
      this.uiOptions = uiOptions;
      this.observable = new Observable();
    }

    $mount(elementOrSelector) {
      require('vuetify/dist/vuetify.min.css');
      Vue.config.productionTip = false;
      // The plugin is loaded here.
      Vue.use(
        {
          // The install method is all that needs to exist on the plugin object.
          // It takes the global Vue object as well as user-defined options.
          install(Vue, uiOptions) {
            Vue.prototype.$uiOptions = uiOptions;
          },
        },
        this.uiOptions
      );
      Vue.use(
        {
          // The install method is all that needs to exist on the plugin object.
          // It takes the global Vue object as well as user-defined options.
          install(Vue, observable) {
            Vue.prototype.$observable = observable;
          },
        },
        this.observable
      );

      this._app = new Vue({
        vuetify,
        render: (h) => h(App),
      }).$mount(elementOrSelector);

      return this;
    }

    destroy() {
      this._app.destroy();
    }
  }

  return { GameUi };
})();

if (process.env.NODE_ENV !== 'production') {
  const options = {
    id: 'yet-another-slot-game',
  };

  const gameUi = new SlotUi.GameUi(options).$mount('#app');
  gameUi.observable.on('spinStarted', () => {
    window.console.log('spin started');
  });

  gameUi.observable.on('loadingFinished', () => {
    window.console.log('loading finished');
  });

  window.gameUi = gameUi;

  gameUi.observable.emit('updateLoading', { reason: 'end', value: 100 });
}
