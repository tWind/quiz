<template>
  <a class="list-of-apartments__list-item" href="#">
    <div class="list-of-apartments__list-item-container">
      <div class="list-of-apartments__list-item-tags">
        <div v-for="tag in item.tags" :key="tag.index" class="list-of-apartments__list-item-tag">
          <div class="list-of-apartments__list-item-tag-text">{{ tag }}</div>
        </div>
      </div>

      <div class="list-of-apartments__list-item-content list-of-apartments__list-item-content--desktop">
        <div class="list-of-apartments__list-item-content-row">
          <div class="list-of-apartments__list-item-subtitle">{{ item.title }}</div>
          <div class="list-of-apartments__list-item-price">от&nbsp;12&nbsp;млн&nbsp;₽</div>
        </div>
        <div class="list-of-apartments__list-item-content-row">
          <div class="list-of-apartments__list-item-content-address">
            <div class="list-of-apartments__list-item-content-address-location">{{ item.location }}</div>
            <!-- пока закомментил, так как из API location и время приходят единым параметром -->
            <!-- <div class="list-of-apartments__list-item-content-address-time">10 мин</div> -->
          </div>
          <div class="list-of-apartments__list-item-content-company-name">{{ item.company }}</div>
        </div>
        <div class="list-of-apartments__list-item-content-row list-of-apartments__list-item-content-row--hidden list-of-apartments__list-item-content-row--column">
          <div class="list-of-apartments__list-item-content-flat">
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--left">Cтудия</div>
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--right">от 3.5 млн ₽</div>
          </div>
          <div class="list-of-apartments__list-item-content-flat">
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--left">Cтудия</div>
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--right">от 3.5 млн ₽</div>
          </div>
          <div class="list-of-apartments__list-item-content-flat">
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--left">Cтудия</div>
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--right">от 3.5 млн ₽</div>
          </div>
          <div class="list-of-apartments__list-item-content-flat">
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--left">Cтудия</div>
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--right">от 3.5 млн ₽</div>
          </div>
          <div class="list-of-apartments__list-item-content-flat">
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--left">Cтудия</div>
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--right">от 3.5 млн ₽</div>
          </div>
          <div class="list-of-apartments__list-item-content-flat">
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--left">Cтудия</div>
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--right">от 3.5 млн ₽</div>
          </div>
          <div class="list-of-apartments__list-item-content-flat">
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--left">Cтудия</div>
            <div class="list-of-apartments__list-item-content-flat-col list-of-apartments__list-item-content-flat-col--right">от 3.5 млн ₽</div>
          </div>
          <div class="list-of-apartments__list-item-content-result">
            <div class="list-of-apartments__list-item-content-result-text">Срок сдачи:</div>
            <div class="list-of-apartments__list-item-content-result-text list-of-apartments__list-item-content-result-text--bold">{{ item.nearest_deadline }}</div>
          </div>
        </div>
      </div>
      <div class="list-of-apartments__list-item-content list-of-apartments__list-item-content--mobile">
        <div class="list-of-apartments__list-item-subtitle">Горки Парк</div>
        <div class="list-of-apartments__list-item-content-company-name">Дарстрой</div>
        <div class="list-of-apartments__list-item-content-address">
          <div class="list-of-apartments__list-item-content-address-location">Бульвар Дмитрия Донского</div>
          <div class="list-of-apartments__list-item-content-address-time">10 мин</div>
        </div>
        <div class="list-of-apartments__list-item-content-btn-and-price">
          <div class="list-of-apartments__list-item-btn">Позвонить</div>
          <div class="list-of-apartments__list-item-price">от&nbsp;12&nbsp;млн&nbsp;₽</div>
        </div>
      </div>
      <img class="list-of-apartments__list-item-img" :src="itemBgUrl" />
    </div>
  </a>
</template>

<script>
const BG_URL = 'https://liner.mirrors.dev.southmedia.ru';

export default {
  name: 'ApartmentsListItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    itemBgUrl() {
      return `${BG_URL}${this.item.img[0]}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>