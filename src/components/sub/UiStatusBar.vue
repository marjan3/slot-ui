<template>
  <v-system-bar dark color="black" class="white--text" justify="space-around">
    <!-- <v-icon>mdi-gmail</v-icon> -->
    <span class="static-text">{{ gameName | uppercase }}</span>
    <span class="static-text">{{ companyName | uppercase }}</span>
    <v-spacer></v-spacer>
    <!-- <v-icon>mdi-wifi-strength-4</v-icon>
    <v-icon>mdi-signal-cellular-outline</v-icon>
    <v-icon>mdi-battery</v-icon>-->
    <clock />
  </v-system-bar>
</template>

<script>
// TODO: consider using third party package
import Clock from "./Clock";

export default {
  data: function() {
    return {
      gameName: "Cute Spins ™",
      companyName: "NetEnt"
    };
  },
  methods: {
    setGameName: function(gameName) {
      this.gameName = gameName;
    },
    setCompanyName: function(companyName) {
      this.companyName = companyName;
    }
  },
  components: { clock: Clock },
  filters: {
    uppercase: function(value) {
      if (!value) return "";
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>
.static-text {
  padding-right: 3px;
}
</style>
