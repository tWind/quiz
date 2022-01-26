<template>
  <div class="privacy-policy">
    <base-layout>
      <div class="privacy-policy__container">
        <div class="privacy-policy__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';

export default {
  name: 'PrivacyPolicyView',
  components: {
    BaseLayout,
  },
}
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass';

.privacy-policy {
  width: 100%;
  height: 100%;
  padding: 30px;

  @include breakpoint($tablet-960) {
    padding: 16px;
    border-radius: 32px;
  }
}

.privacy-policy__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid $color-black-2;
  border-radius: 60px;
  padding: 30px;

  @include breakpoint($tablet-960) {
    padding: 16px;
  }
}

.privacy-policy__text {
  text-align: center;
}
</style>