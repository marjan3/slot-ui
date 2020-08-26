<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-toolbar
    style="top: 24px"
    short
    absolute
    width="100%"
    top
    transparent
    flat
    color="transparent"
  >
    <v-btn icon @click="onHomeButtonClick">
      <v-icon>{{ mdiHome }}</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon @click="onFullScreenButtonClick">
      <v-icon>{{ fullscreen ? mdiFullscreen : mdiFullscreenExit }}</v-icon>
    </v-btn>
    <v-btn icon @click="onInformationButtonClick">
      <v-icon>{{ mdiInformation }}</v-icon>
    </v-btn>
    <!-- <v-btn icon>
      <v-icon>{{ mdiHistory }}</v-icon>
    </v-btn>-->
    <v-btn icon @click="onVolumeButtonClick">
      <v-icon>{{ sound ? mdiVolumeHigh : mdiVolumeOff }}</v-icon>
    </v-btn>
    <v-menu offset-y bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="onNotificationsButtonClick" v-on="on">
          <v-badge>
            <template v-slot:badge>2</template>
            <v-icon>{{ mdiBell }}</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-list>
        <template v-for="item in notifications">
          <v-list-item v-if="item" :key="item" @click="true">
            <v-list-item-action>
              <v-icon>{{ mdiEmail }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-divider v-else-if="item" :key="index" :inset="inset"></v-divider> -->
        </template>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="onLanguagesMenuButtonClick" v-on="on">
          <v-icon>{{ mdiEarth }}</v-icon>
        </v-btn>
      </template>
      <v-list scrollable>
        <v-list-item
          v-for="(language, index) in languages"
          :key="index"
          @click="true"
        >
          <v-list-item-title>
            <v-icon>{{ mdiEarth }}</v-icon>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn icon @click="onAdditionalMenuButtonClick">
      <v-icon>{{ mdiMenu }}</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import {
  mdiMenu,
  mdiEarth,
  mdiEmail,
  mdiBell,
  mdiInformation,
  mdiHome,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiVolumeHigh,
  mdiVolumeOff,
} from '@mdi/js';

export default {
  // TODO: https://github.com/mirari/vue-fullscreen
  data: function data() {
    return {
      mdiMenu,
      mdiEarth,
      mdiEmail,
      mdiBell,
      mdiInformation,
      mdiFullscreen,
      mdiFullscreenExit,
      mdiHome,
      mdiVolumeHigh,
      mdiVolumeOff,
      sound: true,
      fullscreen: false,
      notifications: ['Test', 'Test 1', 'Test 2', 'Test 3'],
      languages: [
        'MK',
        'USD',
        'EU',
        'WHAT',
        'MK',
        'USD',
        'EU',
        'WHAT',
        'MK',
        'USD',
        'EU',
        'WHAT',
        'MK',
        'USD',
        'EU',
        'WHAT',
      ],
    };
  },
  methods: {
    onHomeButtonClick: function() {
      this.$emit(events.goHome);
    },
    onFullScreenButtonClick: function() {
      this.fullscreen = !this.fullscreen;
      this.$emit(events.toggleFullscreen, this.fullscreen);
    },
    onInformationButtonClick: function() {
      this.$emit(events.openRules);
    },
    onVolumeButtonClick: function() {
      this.sound = !this.sound;
      this.$emit(events.toggleSound, this.sound);
    },
    onNotificationsButtonClick: function() {
      this.$emit(events.openNotifications);
    },
    onAdditionalMenuButtonClick: function() {
      this.$emit(events.openAdditional);
    },
    onLanguagesMenuButtonClick: function() {
      this.$emit(events.openLanguages);
    },
    setLanguages: function(languages) {
      this.$data.languages = languages;
    },
  },
};

export const events = {
  goHome: 'go:home',
  toggleFullscreen: 'toggle:fullscreen',
  openRules: 'open:rules',
  toggleSound: 'toggle:sound',
  openNotifications: 'open:notifications',
  openAdditional: 'open:additional',
  openLanguages: 'open:languages',
};
</script>
