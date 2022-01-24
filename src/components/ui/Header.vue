<template>
  <header class="header">
    <div class="header__container">
      <div class="header__col header__col--left"><a class="header__logo" href="/">
          <div class="header__logo-text">{{ appText.header.logo }}</div></a>
        <div class="header__descr">{{ appText.header.sub }}</div>
      </div>
      <div class="header__col header__col--right">
        <base-button
          v-if="button"
          @click="showModal('modal-quest')">
          {{ appText.button.start }}
        </base-button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'Header',
  props: {
    button: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    ...mapGetters('quiz', ['appText'],)
  },
  methods: {
    showModal(modal) {
      this.$root.$emit('layout:showModal', modal);
    },
  },
  components: {
    BaseButton,
  },
}
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass';
@import '~@/scss/mixins/core';

.header {
  padding: 50px 50px 50px 50px;
  position: relative;
  z-index: 6;

  @include breakpoint($tablet-960) {
    padding: 24px 24px 24px 24px;
  }
}
    
.header__container {
  padding-left: 0;
  padding-right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include glass(100%);
}

.header__col {
  &--left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

.header__logo {
  margin: 0 20px 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  
  &:after {
    content: '';
    @include icon-ornament;
    @include breakpoint($tablet-960) {
      display: none;
    }
      
    .header--black & {
      @include icon-ornament-black;
      @include breakpoint($tablet-960) {
        display: none;
      }
    }    
  }
}

.header__logo-text {
  font: 700 32px/1 $font-default;
  color: $color-white;
  text-transform: uppercase;
  margin: 0 20px 0 0;

  @include breakpoint($tablet-960) {
    font: 700 20px/1 $font-default;
  }

  .header--black & {
    color: $color-black-2;
  }
}
    
    
.header__descr {
  font: 500 12px/1.2 $font-default;
  color: $color-white;
  text-transform: uppercase;

  @include breakpoint($tablet-960) {
    display: none;
  }
    
  .header--black & {
    color: $color-black-2
  }
}
</style>
