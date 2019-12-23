<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-footer absolute color="transparent">
    <div class="text-center">
      <v-menu top offset-y>
        <template v-slot:activator="{ on }">
          <div class="my-2">
            <v-btn rounded v-on="on">
              <div>
                <div class="money-label">{{"BET"}}</div>
                <div class="money-value">{{bet.amount + bet.currency}}</div>
              </div>
            </v-btn>
          </div>
        </template>
        <v-list>
          <v-list-item v-for="(bet, index) in bets" :key="index" @click="setBet(bet)">
            <v-list-item-title>{{ bet.amount + bet.currency}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer />
      <div class="my-2">
        <v-btn text rounded depressed>
          <div>
            <div class="money-label">{{"BALANCE"}}</div>
            <div class="money-value">{{balance.amount + balance.currency}}</div>
          </div>
        </v-btn>
      </div>
    </div>
    <v-spacer />
    <!-- <svg class="spin-button" width="120px" height="100px" viewBox="0 0 284 195" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <g id="SpinV1">
            <rect id="background" x="0" y="14.16" width="186.101" height="168.329" style="fill:#ffda46;"/>
            <g id="quickSpinButton" @click="onQuickSpinButtonClick">
                <rect id="quickSpinHoverSquare" x="0" y="98.324" width="80.163" height="84.164" style="fill:#ffe88e;" fill-opacity="0"/>
                <g>
                    <path d="M72.884,140.577l-28.018,-20.791l0,41.582l28.018,-20.791Z" style="fill:#252d36;"/>
                    <path d="M48.058,140.577l-28.018,-20.791l0,41.582l28.018,-20.791Z" style="fill:#252d36;"/>
                </g>
            </g>
            <g id="autoplayButton" @click="onAutoplayButtonClick">
                <rect id="autoplayHoverSquare" x="0" y="14.16" width="80.163" height="84.164" style="fill:#ffe88e;" fill-opacity="0"/>
                <g>
                    <path d="M55.997,62.812l-19.616,11.686l0,-23.373l19.616,11.687Z" style="fill:#252d36;"/>
                    <g>
                        <path d="M63.573,44.896c3.12,4.167 4.97,9.34 4.97,14.941c0,13.776 -11.185,24.96 -24.961,24.96c-13.776,0 -24.96,-11.184 -24.96,-24.96c0,-13.776 11.184,-24.96 24.96,-24.96l0,6.24c-10.332,0 -18.72,8.388 -18.72,18.72c0,10.332 8.388,18.72 18.72,18.72c10.332,0 18.72,-8.388 18.72,-18.72c0,-3.95 -1.225,-7.615 -3.317,-10.637l4.588,-4.304Z" style="fill:#252d36;"/>
                        <path d="M62.131,38.018l-18.699,14.032l0,-28.064l18.699,14.032Z" style="fill:#252d36;"/>
                    </g>
                </g>
            </g>
            <g id="spinButton" @click="onSpinButtonClick">
                <g id="spinButtonBackground">
                    <g id="innerCircle">
                        <g>
                            <circle cx="185.861" cy="97.364" r="85.298" style="fill:#ffd014;"/>
                            <path d="M112.899,140.689c83.586,-23.011 46.637,-82.493 145.832,-86.561l0.585,-0.024c23.931,40.541 10.446,92.884 -30.095,116.815c-11.814,6.974 -24.629,10.77 -37.452,11.646c-5.133,0.219 -10.844,0.082 -17.162,-0.561c-25.049,-3.356 -48.37,-17.749 -62.201,-41.18l0.493,-0.135Z" style="fill:#ffb900;"/>
                        </g>
                        <ellipse cx="185.261" cy="97.358" rx="75.098" ry="74.738" style="fill:#fff;fill-opacity:0.211765;"/>
                    </g>
                    <path id="outerCircle" d="M185.621,0c53.833,0 97.538,43.628 97.538,97.364c0,52.248 -41.316,94.939 -93.086,97.265c-1.475,0.066 -2.96,0.1 -4.452,0.1c-53.832,0 -97.538,-43.628 -97.538,-97.365c0,-53.736 43.706,-97.364 97.538,-97.364Zm0,12.054c47.168,0 85.463,38.226 85.463,85.31c0,47.085 -38.295,85.311 -85.463,85.311c-47.168,0 -85.462,-38.226 -85.462,-85.311c0,-47.084 38.294,-85.31 85.462,-85.31Z" style="fill:#997e11;fill-opacity:0.321569;"/>
                </g>
                <g id="spinButtonHoverCircle" fill-opacity="0">
                    <circle cx="185.861" cy="97.364" r="85.298" style="fill:#ffe270;" />
                    <path d="M112.899,140.689c83.586,-23.011 46.637,-82.493 145.832,-86.561l0.585,-0.024c23.931,40.541 10.446,92.884 -30.095,116.815c-11.814,6.974 -24.629,10.77 -37.452,11.646c-5.133,0.219 -10.844,0.082 -17.162,-0.561c-25.049,-3.356 -48.37,-17.749 -62.201,-41.18l0.493,-0.135Z" style="fill:#ffd463"/>
                </g>
                <path id="spinIcon" d="M126.803,110.426l-11.414,1.785l22.484,-40.166l28.63,32.174l-10.906,1.705c2.733,9.794 10.884,19.361 19.719,22.803c12.325,4.803 19.676,5.386 28.92,5.274c9.123,-0.111 26.54,-5.946 26.54,-5.946c-10.864,18.134 -29.419,29.324 -48.658,30.133c-7.101,0.299 -14.295,-0.817 -21.23,-3.519c-18.776,-7.316 -31.08,-24.482 -34.085,-44.243Zm89.322,-23.089c-2.732,-9.795 -10.884,-19.361 -19.718,-22.804c-12.326,-4.802 -19.677,-5.385 -28.92,-5.273c-9.123,0.11 -26.541,5.946 -26.541,5.946c10.864,-18.134 29.419,-29.324 48.659,-30.133c7.1,-0.299 14.294,0.816 21.229,3.519c18.776,7.316 31.081,24.482 34.085,44.243l11.414,-1.785l-22.484,40.166l-28.63,-32.174l10.906,-1.705Z" style="fill:#252d36;"/>
                <path id="stopIcon" d="M224.899,60.561c-14.922,-8.178 -68.081,-8.02 -80.245,0c-5.157,13.471 -4.802,62.953 0.24,74.339c26.254,6.998 52.166,7.246 80.005,0c5.206,-14.637 5.582,-64.251 0,-74.339Z" style="fill:#252d36;" fill-opacity="0"/>
            </g>
        </g>
    </svg>-->
    <div class="text-center">
      <v-btn class="mx-2" fab dark medium color="primary" @click="onAutoSpinButtonClick">
        <v-icon dark>{{ !autoSpinning ? "mdi-play-circle": "mdi-stop"}}</v-icon>
      </v-btn>
      <v-btn class="mx-2" fab dark medium color="primary" @click="onFastSpinButtonClick">
        <v-icon dark>{{ !fastSpin ? "mdi-flash": "mdi-flash-off"}}</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark x-large color="primary" @click="onSpinButtonClick">
        <v-icon dark>{{ !spinning ? "mdi-repeat": "mdi-stop"}}</v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>1

<script>
export default {
  data: function() {
    return {
      autoSpinning: false,
      autoSpin: {
        stopCondition: {},
        spins: 8
      },
      spinning: false,
      fastSpin: false,
      balance: {
        amount: "10000",
        currency: "$"
      },
      bet: {
        amount: "10",
        currency: "$"
      },
      bets: [
        {
          amount: "10",
          currency: "$"
        },
        {
          amount: "100",
          currency: "$"
        },
        {
          amount: "1000",
          currency: "$"
        },
        {
          amount: "10000",
          currency: "$"
        }
      ]
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
    }
  }
};

const events = {
  fastSpinButtonToggled: "fast-spin-button-toggled",
  stopSpinButtonPressed: "stop-spin-button-pressed",
  spinButtonPressed: "spin-button-pressed"
};
</script>

<style scoped>
.money-label {
  font-size: 0.6rem;
}
</style>