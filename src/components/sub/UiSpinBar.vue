<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-footer absolute color="transparent">
    <div class="text-center">
      <v-menu top offset-y>
        <template v-slot:activator="{ on }">
          <div class="my-2">
            <v-btn raised depressed v-on="on" color="yellow darken-2">
              <div>
                <div class="money-label">{{ 'BET' }}</div>
                <div class="money-value">{{ bet.amount + bet.currency }}</div>
              </div>
            </v-btn>
          </div>
        </template>
        <v-list color="yellow darken-2">
          <v-list-item
            v-for="(bet, index) in bets"
            :key="index"
            @click="setBet(bet)"
          >
            <v-list-item-title>{{
              bet.amount + bet.currency
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer />
      <div class="my-2">
        <v-btn raised depressed color="yellow darken-2">
          <div>
            <div class="money-label">{{ 'BALANCE' }}</div>
            <div class="money-value">
              {{ balance.amount + balance.currency }}
            </div>
          </div>
        </v-btn>
      </div>
    </div>
    <v-spacer />
    <div class="text-center">
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template v-slot:activator>
          <v-btn
            class="mx-2"
            v-model="fab"
            absolute
            top
            style="left: -36px"
            fab
            small
            dark
            medium
            color="yellow darken-2"
            @click="onFastSpinButtonClick"
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon dark v-else>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-btn
          class="mx-2"
          fab
          small
          dark
          medium
          color="yellow darken-2"
          @click="onFastSpinButtonClick"
        >
          <v-icon dark>{{ !fastSpin ? 'mdi-flash' : 'mdi-flash-off' }}</v-icon>
        </v-btn>

        <v-dialog v-model="autoSpinsDialog" max-width="290">
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              v-show="!autoSpinning"
              class="mx-2"
              fab
              small
              dark
              medium
              color="yellow darken-2"
            >
              <v-icon dark>mdi-play-circle</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Auto Spins</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-select
                    :items="['5', '10', '20', '50', '100', '150', '200']"
                    label="Number of Spins"
                    required
                  ></v-select>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions center>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="onAutoSpinButtonClick"
                >Play</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-speed-dial>

      <!-- <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="15"
                    :value="20"
                    color="yellow darken-2"
            >
                <v-btn class="mx-2" fab dark x-large color="yellow darken-2" @click="onSpinButtonClick">
                    <v-icon dark>
                        {{ !spinning ? "mdi-repeat": "mdi-stop"}}
                    </v-icon>
                </v-btn>
            </v-progress-circular> -->

      <v-btn
        class="mx-2"
        fab
        dark
        x-large
        color="yellow darken-2"
        @click="onSpinButtonClick"
      >
        <v-icon dark>
          {{ !spinning ? 'mdi-repeat' : 'mdi-stop' }}
        </v-icon>
      </v-btn>
    </div>
  </v-footer> </template
>1

<script>
export default {
  data: function() {
    return {
      autoSpinsDialog: false,
      autoSpinning: false,
      autoSpin: {
        stopCondition: {},
        spins: 8,
      },
      spinning: false,
      fastSpin: false,
      balance: {
        amount: '10000',
        currency: '$',
      },
      bet: {
        amount: '10',
        currency: '$',
      },
      bets: [
        {
          amount: '10',
          currency: '$',
        },
        {
          amount: '100',
          currency: '$',
        },
        {
          amount: '1000',
          currency: '$',
        },
        {
          amount: '10000',
          currency: '$',
        },
      ],
    };
  },
  methods: {
    setBalance: function(value) {
      this.$data.balance = value;
    },
    setBalanceLabel: function(value) {
      this.$data.balanceLabel = value;
    },
    setBet: function(value) {
      this.$data.bet = value;
    },
    setBetLabel: function(value) {
      this.$data.betLabel = value;
    },
    setBets: function(value) {
      this.$data.bets = value;
    },
    setFastSpin: function(value) {
      this.$data.fastSpin = value;
    },
    onFastSpinButtonClick: function() {
      this.$data.fastSpin = !this.$data.fastSpin;

      this.$emit(events.fastSpinButtonToggled, this.$data.fastSpin);
    },
    onAutoSpinButtonClick: function() {
      this.$data.autoSpinning = !this.$data.autoSpinning;
      this.autoSpinsDialog = false;
    },
    onSpinButtonClick: function() {
      if (this.$data.spinning) {
        this.$emit(events.stopSpinButtonPressed);
      } else {
        this.$emit(events.spinButtonPressed);
      }
    },
    startSpin: function() {
      this.$data.spinning = true;
    },
    endSpin: function() {
      this.$data.spinning = false;
    },
  },
};

const events = {
  fastSpinButtonToggled: 'fast-spin-button-toggled',
  stopSpinButtonPressed: 'stop-spin-button-pressed',
  spinButtonPressed: 'spin-button-pressed',
};
</script>

<style scoped>
.money-label {
  font-size: 0.6rem;
}
</style>
