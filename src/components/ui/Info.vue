<template>
  <div class="info">
    <div class="info__container">
      <h2 class="info__title" v-html="title"></h2>
      <div class="info__container-inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    title: {
      type: String,
      default: 'Заголовок не найден',
    },
  },
};
</script>

<style lang="scss" scoped></style>