<template>
  <v-app>
    <loading-screen ref="loadingScreen" v-if="loading" v-on:loading-finished="onLoadingFinished" />
    <in-game-ui ref="inGameUi"
                v-on:spin-button-pressed="onSpinButtonPressed"
                v-on:spin-stop-button-pressed="onStopSpinPressed">
      <v-layout
        :id="this.$uiOptions.id"
        fill-height
        style="background-color: black"
        align-center
        justify-center
      ></v-layout>
    </in-game-ui>
  </v-app>
</template> 

<script>
import InGameUi from "./components/InGameUi";
import LoadingScreen from "./components/LoadingScreen";

export default {
  components: {
          InGameUi,
          LoadingScreen,
  },
  name: "Test",
  data: () => {
    return {
      loading: true
    };
  },
  mounted: function() {
    this.$observable.on("updateLoading", (update) => {
      this.$refs.loadingScreen.progress(update);
    });
    this.$observable.on("spinEnded", ()=> {
      this.$refs.inGameUi.endSpin();
    });
  },
  methods: {
    onLoadingFinished() {
      this.$data.loading = false;
      this.$observable.emit("loadingEnded");

    },
    async onSpinButtonPressed() {
      this.$observable.emit("spinStarted");
    },
    async onStopSpinPressed() {
      this.$observable.emit("spinStopped");
    }
  }
};
</script>