<template>
  <div class="caption">{{ hours }}:{{minutes}}{{" " + hourtime }}</div>
</template>

<script>
export default {
  hours: "",
  minutes: "",
  seconds: "",
  hourtime: "",
  // TODO: use bridge to get time
  // TODO: enable 24 hour mode
  // TODO: enable format
  data: function() {
    return {
      hours: "",
      minutes: "",
      seconds: "",
      hourtime: ""
    };
  },
  beforeMount: function() {
    this.setTime(10, 12, 10, "AM");
  },
  methods: {
    setTime: function(hours, minutes, seconds, hourtime) {
      this.$data.hours = hours;
      this.$data.minutes = minutes;
      this.$data.seconds = seconds;
      this.$data.hourtime = hourtime;
    }
  }
};
</script>