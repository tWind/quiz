<template>
  <div class="apartments-list-item">
    <div class="list-of-apartments__list-item-container">
      <div class="apartments-list-item__tags">
        <div v-for="tag in item.tags" :key="tag.index" class="apartments-list-item__tag">
          <span>{{ tag }}</span>
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
  </div>
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

<style lang="scss" scoped>
@import '~breakpoint-sass';
@import '~@/scss/mixins/core';

.apartments-list-item {
  display: block;
  width: 100%;
}

.apartments-list-item__tags {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @include breakpoint($tablet-960) {
    align-items: flex-start;
    flex-direction: column;
  }
}

.apartments-list-item__tag {
  background: rgba($color-black-2, 0.5);
  border-radius: 30px;
  margin: 0 8px 4px 0;
  padding: 6.5px 10px 5.5px;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @include breakpoint($tablet-960) {
    margin: 0 0 8px 0;
  }
    
  &:last-child {
    margin-right: 0;
  }

  &:before {
    content: '';
    transform: translate3d(0,-1px,0);
  }
    
  &--people {
    &:before { @include icon-people; }
  }
  &--star {
    &:before { @include icon-star; }
  }

  span {
    font: 400 12px/1 $font-default;
    color: $color-white;
    text-decoration: none;
    margin: 0 0 0 4px;

    @include breakpoint($tablet-960) {
      font: 400 10px/1 $font-default;
    }
  }
}
</style>