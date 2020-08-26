<template>
  <v-system-bar
    style="width: 100%"
    short
    color="black"
    class="white--text"
    justify="space-around"
  >
    <!-- <v-icon>mdi-gmail</v-icon> -->
    <span class="static-text">{{ companyName | uppercase }}</span>
    <span class="static-text">{{ gameName }}</span>
    <v-spacer></v-spacer>
    <clock />
  </v-system-bar>
</template>

<script>
// TODO: consider using third party package
import Clock from './Clock';

export default {
  data: function() {
    return {
      gameName: 'Cute Spins - 1.18.48, Engine - 1.5.0',
      companyName: 'Company |',
    };
  },
  methods: {
    setGameName: function(gameName) {
      this.gameName = gameName;
    },
    setCompanyName: function(companyName) {
      this.companyName = companyName;
    },
  },
  components: { clock: Clock },
  filters: {
    uppercase: function(value) {
      if (!value) return '';
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped>
.static-text {
  padding-right: 3px;
}
</style>
