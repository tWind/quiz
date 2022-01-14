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
import { TweenMax } from 'gsap';

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
  methods: {
    magnetizationOfCirclesToTheCursor() {
      let $brandsItems = this.$el.querySelectorAll('.brands__item');

      if ($brandsItems.length > 0) {
        let windowWidth = window.outerWidth;

        window.addEventListener('resize', () => {
          windowWidth = window.outerWidth();
        });

        if (windowWidth >= 960) {
          // For ever Button found, run this function
          this.$el.addEventListener('mousemove', function (e) {
            $brandsItems.forEach((item) => {
              magnetize(item, e);
            });
          });
        }
      }

      function magnetize(el, e) {
          var mX = e.pageX,
            mY = e.pageY;

          const customDist = el.dataset.dist * 20 || 120,
            centerX = getCoords(el).left + (el.offsetWidth / 2),
            centerY = getCoords(el).top + (el.offsetHeight / 2);

          var deltaX = Math.floor((centerX - mX)) * -0.45;
          var deltaY = Math.floor((centerY - mY)) * -0.45;

          var distance = calculateDistance(el, mX, mY);
          
          if (distance < customDist) {
            TweenMax.to(el, 0.5, {y: deltaY, x: deltaX, scale: 1.1});
            el.classList.add('magnet');
          } else {
            TweenMax.to(el, 0.6, {y: 0, x: 0, scale: 1});
            el.classList.remove('magnet');
          }
        }

      function calculateDistance(elem, mouseX, mouseY) {
        let coords = getCoords(elem);
        
        return Math.floor(Math.sqrt(Math.pow(mouseX - (coords.left + (elem.offsetWidth / 2)), 2) + Math.pow(mouseY - (coords.top + (elem.offsetHeight / 2)), 2)));
      }

      function getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
          top: box.top + scrollY,
          left: box.left + scrollX,
        };
      }
    },
  },
  mounted() {
    this.magnetizationOfCirclesToTheCursor();
  }
}
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass';
@import '~@/scss/mixins/_core';

.brands {
  position: relative;
  z-index: 6;
  padding: 0 0 120px;
  
  @include breakpoint($tablet-960) {
    padding: 0 0 34px;
  }
}
  
.brands__container {
  @include glass(1200px);

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;

  @include breakpoint($tablet-960) {
    justify-content: space-between;
  }
    
  @include breakpoint($mobile-640) {
    justify-content: space-between;
  }
    
  @include breakpoint($mobile-480) {
    justify-content: space-between;
  }
}
    
.brands__item {
  background: rgba($color-red,0.1);
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @include breakpoint($tablet-960) {
    margin: 0 0 30px;
  }
      
  @include breakpoint($mobile-640) {
    margin: 0 0 16px 0;
  }

  &:before {
    content: '';
  }

  &--zhik {
    width: 193px;
    height: 193px;

    @include breakpoint($tablet-960) {
      width: 28vw;
      height: 28vw;
    }

    @include breakpoint($mobile-480) {
      width: 88px;
      height: 88px;
    }
        
    &:before {
      @include icon-zhik;
    }   
  }

  &--meriton {
    width: 227px;
    height: 227px;

    @include breakpoint($tablet-960) {
      width: 28vw;
      height: 28vw;
    }
      
    @include breakpoint($mobile-480) {
      width: 88px;
      height: 88px;
    }
      
    &:before {
      @include icon-meriton;
    }
  }
      
  &--darstroy {
    width: 268px;
    height: 268px;

    @include breakpoint($tablet-960) {
      width: 28vw;
      height: 28vw;
    }
      
    @include breakpoint($mobile-480) {
      width: 88px;
      height: 88px;
    }
      
    &:before {
      @include icon-darstroy;
    }
  }

  &--insiti {
    width: 227px;
    height: 227px;

    @include breakpoint($tablet-960) {
      width: 28vw;
      height: 28vw;
    }
      
    @include breakpoint($mobile-480) {
      width: 88px;
      height: 88px;
    }
      
    &:before {
      @include icon-insiti;
    }
  }
      
  &--granel {
    width: 227px;
    height: 227px;

    @include breakpoint($tablet-960) {
      width: 28vw;
      height: 28vw;
    }
      
    @include breakpoint($mobile-480) {
      width: 88px;
      height: 88px;
    }
      
    &:before {
      @include icon-granel;
    }
      
  }
      
  &--dogma {
    width: 227px;
    height: 227px;

    @include breakpoint($tablet-960) {
      width: 28vw;
      height: 28vw;
    }
      
    @include breakpoint($mobile-480) {
      width: 88px;
      height: 88px;
    }

    &:before {
      @include icon-dogma;
    }
      
  }

  &--pik {
    width: 268px;
    height: 268px;

    @include breakpoint($tablet-960) {
      width: 28vw;
      height: 28vw;
    }

    @include breakpoint($mobile-480) {
      width: 88px;
      height: 88px;
    }

    &:before {
      @include icon-pik;
    }
  }
      
  &--a101 {
    width: 227px;
    height: 227px;

    @include breakpoint($tablet-960) {
      width: 28vw;
      height: 28vw;
    }

    @include breakpoint($mobile-480) {
      width: 88px;
      height: 88px;
    }

    &:before {
      @include icon-a101;
    }
  }

  &--ksm {
    width: 185px;
    height: 185px;

    @include breakpoint($tablet-960) {
      width: 28vw;
      height: 28vw;
    }
      
    @include breakpoint($mobile-480) {
      width: 88px;
      height: 88px;
    }

    &:before {
      @include icon-ksm;
    }
  }
}
</style>
