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
