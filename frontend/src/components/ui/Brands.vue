<template>
  <div class="brands">
    <div class="brands__container">
      <div class="brands__item"
        v-for="brand in brands" :key="brand.index"
        :class="`brands__item--${brand}`"
      ></div>
    </div>
  </div>
</template>

<script>
const BRANDS = [
  'zhik',
  'meriton',
  'darstroy',
  'insiti',
  'granel',
  'dogma',
  'pik',
  'a101',
  'ksm',
];

export default {
  name: 'Brands',
  data() {
    return {
      brands: BRANDS,
    }
  },
}
</script>

<style></style>
