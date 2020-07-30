<template>
  <v-app>
    <v-fade-transition>
      <v-container
        dark
        class="black white--text"
        fill-height
        v-if="loading"
        style="width: 100%; max-width:100%"
      >
        <v-row class="fill-height" align-content="center" justify="center">
          <v-col cols="12" class="display-2 text-center">
            <logo />
          </v-col>
          <v-col cols="12" class="display-2 text-center">
          <loading-dots />
          </v-col>
        </v-row>
        
      </v-container>
    </v-fade-transition>
  </v-app>
</template>

<script>
import LoadingDots from "./sub/LoadingDots";
import Logo from "./sub/Logo";

export default {
  name: "LoadingScreen",
  components: {
    Logo,
          LoadingDots
  },
  data() {
    return {
      progressValue: 0,
      progressReason: "",
      loading: true
    };
  },
  methods: {
    progress(stats) {
      this.$data.progressReason = stats.reason;
      this.$data.progressValue = stats.value;
      if (this.$data.progressValue >= 1000) {
        setTimeout(() => {
          this.$data.loading = false;
          this.$emit(events.loadingFinished);
        }, 300);
      }
    }
  }
};

export const events = {
  loadingFinished: "loading-finished"
};
</script>