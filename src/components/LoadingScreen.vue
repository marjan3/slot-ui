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
          <v-col cols="12" class="display-2 text-center">COMPANY</v-col>
          <v-img
            alt="logo"
            max-width="100px"
            max-height="100px"
            src="../assets/logo.png"
          ></v-img>
          <!-- <v-col cols="8">
            <v-progress-linear color="amber accent-4" :value="progressValue" rounded height="6"></v-progress-linear>
          </v-col> -->
          <v-col class="subtitle-1 text-center" cols="12"
            ><loading-dots
          /></v-col>
        </v-row>
      </v-container>
    </v-fade-transition>
  </v-app>
</template>

<script>
import LoadingDots from './sub/LoadingDots';

export default {
  name: 'LoadingScreen',

  components: {
    LoadingDots,
  },

  data() {
    return {
      progressValue: 0,
      progressReason: '',
      loading: true,
    };
  },
  methods: {
    progress(stats) {
      this.$data.progressReason = stats.reason;
      this.$data.progressValue = stats.value;
      if (this.$data.progressValue >= 100) {
        setTimeout(() => {
          this.$data.loading = false;
          this.$emit(events.loadingFinished);
        }, 300);
      }
    },
  },
};

export const events = {
  loadingFinished: 'loading-finished',
};
</script>
