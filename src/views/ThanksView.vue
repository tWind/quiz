<template>
  <div class="thanks">
    <base-layout>
      <apartments-list />
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import ApartmentsList from '@/components/apartments-list/ApartmentsList';

export default {
  name: 'ThanksView',
  components: {
    BaseLayout,
    ApartmentsList,
  },
}
</script>

<style lang="scss">
@import '~breakpoint-sass';

.thanks {
  position: relative;
  margin: 30px;
  border: 1px solid $color-black-2;
  border-radius: 60px;
  z-index: 6;

  @include breakpoint($tablet-960) {
    margin: 16px;
    border-radius: 32px;
  }
}
</style>
