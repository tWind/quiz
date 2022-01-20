<template>
  <div class="error-layout">
    <div class="bg">
      <div class="bg__noise"></div>
    </div>

    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'ErrorLayout',
}
</script>

<style lang="scss">
@import '~breakpoint-sass';

.error-layout {
  height: 100vh;
  width: 100%;
  max-height: 100vh;
  padding: 30px;
  background-image: url('#{$images-path}/bg.webp');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  @include breakpoint($tablet-960) {
    padding: 16px;
    border-radius: 32px;
  }

  @include breakpoint($mobile-640) {
    background-image: url('#{$images-path}/bg-mobile.webp');
  }
}
</style>
