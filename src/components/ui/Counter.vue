<template>
  <div class="counter" :class="{ 'is-animated': animated }">
    <div class="counter__number">{{ displayNumber }}</div>
    <div class="counter__title" v-html="title"></div>
  </div>
</template>

<script>
const OPTIONS = {
  numberChangeDuration: 20,
  startAnimatePosition: 600,
};

export default {
  name: 'Counter',
  data() {
    return {
      displayNumber: 0,
      options: OPTIONS,
      animated: false,
    }
  },
  props: {
    count: {
      type: String,
      default: "0",
    },
    title: {
      type: String,
      default: 'Заголовок не найден',
    },
  },
  methods: {
    animateNumber() {
      // в API приходит строка, нужно её привести к типу Number
      const count = parseInt(this.count.replace(/\s/g, ""));

      clearInterval(this.interval);

      this.interval = window.setInterval(() => {
        if(this.displayNumber != count) {
          let change = (count - this.displayNumber) / 10;

          change = change >= 0 ? Math.ceil(change) : Math.floor(change);

          this.displayNumber = this.displayNumber + change;
        }
      }, this.options.numberChangeDuration);
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if(this.$el.getBoundingClientRect().top <= this.options.startAnimatePosition && !this.animated) {
        this.animated = true;
        this.animateNumber();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass';
@import '~@/scss/mixins/core';

.counter {
  width: 100%;
  max-width: 260px;
  margin: 0 40px 0 0;
  opacity: 0;
  transition: opacity .15s ease;

  @include breakpoint($mobile-640) {
    max-width: 100%;
    margin: 0 0 32px 0;
  }

  &:last-child {
    margin-right: 0;

    @include breakpoint($tablet-960) {}
    @include breakpoint($mobile-640) {
      margin-bottom: 0;
    }
  }

  &.is-animated {
    opacity: 1;
  }
}
    
.counter__number {
  font: 700 64px/1.35 $font-default;
  color: $color-red;

  @include fluid-type(375px, 960px, 40px, 64px);
}
      
.counter__title {
  font: 700 18px/1.35 $font-default;
  color: $color-black-2;

  @include fluid-type(375px, 960px, 16px, 18px);
}
</style>