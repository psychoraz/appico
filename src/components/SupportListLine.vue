<template>
  <article class="ticket-line" :class="{ '--header': header }">
    <span class="name font-bold">{{ fullname }}</span>
    <span class="email">{{ email }}</span>
    <span class="time">
      <label v-if="header">{{ time }}</label>
      <label v-if="!header">{{ shortTime }}</label>
    </span>
    <span class="phone">{{ phone }}</span>
    <span class="city">{{ city }}</span>
    <span class="cta">
      <label v-if="header">{{ $t('overview.dashboard.support-requests.header.status') }}</label>
      <button v-if="!header && !isGhostButton" class="button">Open</button>
      <button v-if="!header && isGhostButton" class="button --ghost">Sent</button>
    </span>
  </article>
</template>

<script>
export default {
  name: 'SupportListLine',
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
  grid-template-areas: "name email time phone city cta";
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr auto;
  font-size: $font-md;


  @include is-mobile {
    grid-template-columns: 1fr;
    grid-template-areas:  "name"
                          "email"
                          "city"
                          "time"
                          "phone"
                          "cta";
    border-bottom: 1px solid $border-color;
    padding-bottom: $space-sm;

    &:last-child {
      border-bottom: none;
    }
  }
  @include is-tablet {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:  "name city cta"
                          "email time cta"
                          "phone . .";
    border-bottom: 1px solid $border-color;
    padding-bottom: $space-sm;

    &:last-child {
      border-bottom: none;
    }
  }

  .name {
    grid-area: name;
    color: $color-font-dark-weak;
  }
  .email { grid-area: email; }
  .time { grid-area: time; }
  .phone { grid-area: phone; }
  .city { grid-area: city; }
  .cta {
    grid-area: cta;

    @include is-mobile {
      width: 100%;
      margin-top: $space-sm;

      .button {
        width: 100%;
      }
    }

    @include is-tablet {
      margin-left: auto;
    }
  }

  &.--header {
    font-size: $font-xxs;
    color: $color-font-light-weak;
    text-transform: uppercase;
    margin-bottom: $space-md;

    .name {
      color: $color-font-light-weak;
    }

    @include is-tablet {
      display: none;
    }
    @include is-mobile {
      display: none;
    }
  }

}

.button,
.cta {
  width: 65px;
}
</style>