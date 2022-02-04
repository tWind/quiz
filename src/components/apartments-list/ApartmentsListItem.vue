<template>
  <div class="apartments-list-item" @mousemove="mouseMoveHandler($event)">
    <div class="apartments-list-item__container">
      <div class="apartments-list-item__tags">
        <div v-for="tag in item.tags" :key="tag.index" class="apartments-list-item__tag">
          <span>{{ tag }}</span>
        </div>
      </div>

      <div class="list-of-apartments__list-item-content list-of-apartments__list-item-content--desktop">
        <div class="list-of-apartments__list-item-content-row">
          <div class="list-of-apartments__list-item-subtitle">{{ item.title }}</div>
          <div v-if="item.min_price.length" class="list-of-apartments__list-item-price">{{ item.min_price }}</div>
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
          <div class="apartments-list-item__offers" v-html="item.offers"></div>
        
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

      <img class="apartments-list-item__bg" ref="itemBg" :src="itemBgUrl" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

const BG_URL = 'https://liner.mirrors.dev.southmedia.ru',
  ANIMATION_TIME = 1000;

export default {
  name: 'ApartmentsListItem',
  data() {
    return {
      oldX: 0,
      currentImageNumber: 0,
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    itemBgUrl() {
      return `${BG_URL}${this.item.img[this.currentImageNumber]}`;
    }
  },
  methods: {
    mouseMoveHandler: _.debounce(function(e) {
      let dir = 0;

      if (e.pageX < this.oldX) {
        dir = 1;
      } else if (e.pageX > this.oldX) {
        dir = -1;
      }

      this.oldX = e.pageX;

      this.$refs.itemBg.style.opacity = 0;
      
      setTimeout(() => {
        this.changeImage(dir);
        this.$refs.itemBg.style.opacity = 1;
      }, ANIMATION_TIME * 0.75);
    }, ANIMATION_TIME),
    changeImage(n) {
      const limit = this.item.img.length;

      if(this.currentImageNumber + n >= 0) {
        if(this.currentImageNumber + n < limit) {
          this.currentImageNumber = this.currentImageNumber + n;
        } else {
          this.currentImageNumber = 0;
        }

        return;
      }

      this.currentImageNumber = limit - 1;
    }
  }
};
</script>

<style lang="scss">
@import '~breakpoint-sass';
@import '~@/scss/mixins/core';

.apartments-list-item {
  display: block;
  width: 100%;
}

.apartments-list-item__container {
  position: relative;
  overflow: hidden;
  height: 620px;
  border-radius: 30px 30px 30px 30px;
  padding: 24px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  &:hover {
    .list-of-apartments__list-item-content-row--hidden {
      max-height: 391px;
      margin-top: 20px;
      padding-top: 20px;
      border-color: #DEDEDE;
      transition: max-height 0.25s ease-in, margin-top 0.25s ease-in, padding-top 0.25s ease-in, border-color 0.25s ease-in;
    }
  }

  @include breakpoint($desktop-1200-1920) {
    padding: 16px 16px 16px 16px;
  }

  @include breakpoint($desktop-1440) {
    height: 430px;
  }

  @include breakpoint($tablet-960) {
    padding: 16px 16px 16px 16px;
  }

  @include breakpoint($mobile-480) {
    padding: 13px 13px 13px 13px;
  }
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

.apartments-list-item__offers {
  padding-bottom: 20px;
  width: 100%;

  ul {
    display: block;
    width: 100%;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 0 20px;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      &:first-child {
        font: 400 14px/1.2 "Muller", sans-serif;
        color: #ED625D;
      }
      &:last-child {
        font: 500 14px/1.2 "Muller", sans-serif;
        color: #000000;
      }
    }
  }
}

.apartments-list-item__bg {
  height: 100%;
  max-height: 100%;
  width: 100%;
  max-width: 100%;
  margin: auto;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  top: 50%;
  left: 50%;
  border-radius: 30px;
  z-index: -1;
  object-fit: cover;
  transition: opacity 1s;
}
</style>