<template>
  <article class="ticket-line" :class="{ '--header': header }">
    <span class="name font-bold">{{ fullname }}</span>
    <span>{{ email }}</span>
    <span>
      <label v-if="header">{{ time }}</label>
      <label v-if="!header">{{ shortTime }}</label>
    </span>
    <span>{{ phone }}</span>
    <span>{{ city }}</span>
    <span  class="cta">
      <label v-if="header">{{ $t('overview.dashboard.support-requests.header.status') }}</label>
      <button v-if="!header && !isGhostButton" class="button">Open</button>
      <button v-if="!header && isGhostButton" class="button --ghost">Sent</button>
    </span>
  </article>
</template>

<script>
export default {
  name: 'TicketLine',
  props: {
    fullname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    header: {
      type: Boolean
    }
  },
  computed: {
    shortTime() {
      const date = new Date(this.time)
      return this.formatAMPM(date)
    },
    isGhostButton() {
      return Math.random() < 0.5
    }
  },
  methods: {
    formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      hours = hours < 10 ? '0'+hours : hours;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
  }
}
</script>

<style lang="scss" scoped>
.ticket-line {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr auto;
  font-size: $font-md;

  .name {
    color: $color-font-dark-weak;
  }

  &.--header {
    font-size: $font-xxs;
    color: $color-font-light-weak;
    text-transform: uppercase;
    margin-bottom: $space-md;

    .name {
      color: $color-font-light-weak;
    }
  }

}

.button,
.cta {
  width: 65px;
}
</style>