<template>
  <v-app>

    <header>
      <ui-status-bar ref="statusBar" />
      <ui-menu-bar v-on:open:additional="onOpenAdditionalMenu" />
    </header>

    <ui-rules-dialog />
    <ui-additional-menu ref="additionalMenu" />

    <v-content ref="slotGameContainer">
      <slot>
        This will only be displayed if there is no content
        to be distributed.
      </slot>
    </v-content>


    <ui-spin-bar ref="spinBar" v-on:spin-button-pressed="onSpinButtonPressed" v-on:stop-spin-button-pressed="onStopSpinButtonPressed" />

  </v-app>
</template>

<script>
import UiStatusBar from "./sub/UiStatusBar";
import UiMenuBar from "./sub/UiMenuBar";
import UiSpinBar from "./sub/UiSpinBar";
import UiRulesDialog from "./sub/UiRulesDialog";
import UiAdditionalMenu from "./sub/UiAdditionalMenu";

export default {
  name: "InGameUi",

  components: {
    UiStatusBar,
    UiMenuBar,
    UiSpinBar,
    UiRulesDialog,
    UiAdditionalMenu
  },

  data: () => ({
    loading: true
  }),
  methods: {
    setAutoplayOptions() {
      // TODO:
    },
    setGameRules() {
      // TODO:
    },
    addNotification() {
      // TODO:
    },
    setAvailableLanguages() {
      // TODO:
    },
    setCompanyName() {
      // TODO:
    },
    setBets() {
      // TODO:
    },
    setSelectedBet() {
      // TODO:
    },
    getGameContainer() {
      return this.$refs.slotGameContainer.$el;
    },
    setGameName(value) {
      this.$refs.statusBar.setGameName(value);
    },
    onSpinButtonPressed() {
      this.$refs.spinBar.startSpin();
      this.$emit(events.spinButtonPressed);
    },
    onStopSpinButtonPressed() {
      this.$emit(events.stopSpinButtonPressed);
    },
    onOpenAdditionalMenu() {
      this.$refs.additionalMenu.open();
    },
    endSpin() {
      this.$refs.spinBar.endSpin();
    }
  }
};

const events = {
  loadingFinished: "loading-finished",
  spinButtonPressed: "spin-button-pressed",
  stopSpinButtonPressed: "stop-spin-button-pressed",
  enableSoundButtonPressed: "enable-sound-button-pressed",
  disableSoundButtonPressed: "disable-sound-button-pressed",
  enterFullscreenButtonPressed: "enter-fullscreen-button-pressed",
  exitFullscreenButtonPressed: "exit-fullscreen-button-pressed",
  homeButtonPressed: "home-button-pressed",
  gameHistoryButtonPressed: "game-history-button-pressed",
  enableFastSpinButtonPressed: "enable-fast-spin-button-pressed",
  disableFastSpinButtonPressed: "disable-fast-spin-button-pressed",
  selectedBetButtonPressed: "selected-bet-button-pressed"
};
</script>