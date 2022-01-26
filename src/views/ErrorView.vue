<template>
  <div class="error">
    <error-layout>
      <div class="error__container">
        <div class="error__message">
          <h1>Упс! Произошла ошибка!</h1>
          <h3>{{ error }}</h3>
        </div>
      </div>
    </error-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ErrorLayout from '@/layouts/ErrorLayout.vue';

export default {
  name: 'ErrorView',
  computed: {
    ...mapGetters('errors', ['error']),
  },
  components: {
    ErrorLayout,
  },
}
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass';

.error {
  width: 100%;
  height: 100%;
}

.error__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid $color-black-2;
  border-radius: 60px;
}

.error__message {
  text-align: center;
}
</style>
