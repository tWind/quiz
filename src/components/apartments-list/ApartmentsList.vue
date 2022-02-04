<template>
  <div class="apartments-list">
    <div class="apartments-list__container">
      <h1 class="apartments-list__title">{{ appText.thanks.title }}</h1>
      <p class="apartments-list__descr">{{ appText.thanks.text }}</p>
      <base-button @click="updateCompilation(flag ? testCompilation : testCompilation2)">
        Обновить подборку
      </base-button>

      <div class="list-of-apartments__list-wrapper">
        <div class="list-of-apartments__list-header">
          <div class="list-of-apartments__list-header-col list-of-apartments__list-header-col--left">
            <span class="list-of-apartments__list-header-text list-of-apartments__list-header-text--desktop">Квартиры/аппартаменты:</span>
            <span class="list-of-apartments__list-header-text list-of-apartments__list-header-text--mobile">Кв./аппарт.:</span>
            <span class="list-of-apartments__list-header-text list-of-apartments__list-header-text--red">{{ objectsCompilation.length }} варианта</span>
          </div>
          
          <div class="list-of-apartments__list-header-col list-of-apartments__list-header-col--right">
            <!--  подборки в PDF временно нет, ссылка отключена -->
            <a v-if="0" class="list-of-apartments__list-header-link" href="#">
              <span class="list-of-apartments__list-header-link-text">Скачать подборку в PDF</span>
            </a>
          </div>
        </div>

        <div class="apartments-list__content">
          <transition-group class="apartments-list__items"
            tag="div"
            name="list-fade"
            appear
          > 
          <div class="apartments-list__item" v-for="object in objectsCompilation" :key="object.object_id">   
            <apartments-list-item :item="object" :key="object.object_id" />
          </div>
        </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';


import BaseButton from '@/components/ui/BaseButton.vue';
import testCompilation from '@/test-data/testCompilation.json';
import testCompilation2 from '@/test-data/testCompilation2.json';

import ApartmentsListItem from './ApartmentsListItem';


export default {
  name: 'ApartmentsList',
  data() {
    return {
      listContainerHeight: 'auto',
      testCompilation: testCompilation,
      testCompilation2: testCompilation2,
      flag: true,
    }
  },
  computed: {
    ...mapGetters('quiz', ['objectsCompilation', 'socketChannel', 'appText']),
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    'changed-compilation': function(data) {
      this.updateCompilation(data.compilation);
    },
  },
  methods: {
    ...mapMutations('quiz', ['setCompilation']),
    updateCompilation(loadedCompilation) {
      const compilation = this.objectsCompilation.filter(({ object_id: id1 }) => loadedCompilation.some(({ object_id: id2 }) => id2 === id1)),
        diffCompilation = loadedCompilation.filter(({ object_id: id1 }) => !compilation.some(({ object_id: id2 }) => id2 === id1));

      this.setCompilation(compilation);

      setTimeout(() => {
        this.setCompilation([...diffCompilation, ...compilation]);
      }, 500);

      this.flag = !this.flag;
    },
  },
  mounted() {
    // this.$socket.emit('join', this.socketChannel);
  },
  components: {
    ApartmentsListItem,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass';
@import '~@/scss/mixins/core';

.apartments-list {
  margin: 50px 0 0;

  @include breakpoint($tablet-960) {
    margin: 36px 0 0 0;
  }
}

.apartments-list__container {
  padding: 0 50px 80px 50px;
    
  @include breakpoint($tablet-960) {
    padding: 0 16px 16px 16px;
  }
}

.apartments-list__title {
  font: 700 80px/1.2 $font-default;
  color: $color-black-2;
  text-align: center;
  margin: 0 0 12px;

  @include fluid-type(768px, 960px, 40px, 80px);
  @include breakpoint($tablet-960) {
    margin: 0 0 16px;
  }
}

.apartments-list__descr {
  font: 400 18px/1.25 $font-default;
  color: $color-black-2;
  text-align: center;
  margin: 0 0 120px;
  
  @include breakpoint($tablet-960) {
    font: 400 16px/1.25 $font-default;
    margin: 0 0 64px;
  }
}

.apartments-list__content {
  transition: all .5s;
}

.apartments-list__items {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
    
.apartments-list__item {
  display: flex;
  position: relative;
  width: 32.6%;
  margin: 0 1.57% 1.57% 0;
  padding: 0 1.57% 1.57% 0;
  transform: 1s;

  @include breakpoint($desktop-1200-1920) {
    margin: 0 1.57% 1.57% 0;
    padding: 0 1.57% 1.57% 0;
  }
    
  @include breakpoint($desktop-1200) {
    width: 48.7%;
    padding: 0 0 0 0;
    margin: 0 2.6% 2.6% 0;
  }
    
  @include breakpoint($tablet-960) {
    width: 100%;
    margin: 0 0 24px 0;
    padding: 0 0 0 0;
  }
    
  &:last-child {
    margin-bottom: 0;
  }
    
  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 110%;
    background: $color-gray;
    position: absolute;
    right: 0;
    top: 0;
    
    @include breakpoint($desktop-1200) {
      display: none
    }
      
    @include breakpoint($tablet-960) {
      display: none
    }
  }
    
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: $color-gray;
    position: absolute;
    bottom: 0;
    right: 0;

    @include breakpoint($desktop-1200) {
      display: none
    }
      
    @include breakpoint($tablet-960) {
      display: none
    }
  }

  &:nth-child(3n+3) {
    padding-right: 0;
    margin-right: 0;

    @include breakpoint($desktop-1920) {
      width: 31.6%;
    }
    @include breakpoint($desktop-1200-1920) {
      width: 31.6%;
    }
    @include breakpoint($desktop-1200) {
      margin-right: 2.6%;
    } 
    @include breakpoint($tablet-960) {
      margin-right: 0;
    }

    &:before {
      display: none;
    }
  }
    
  &:nth-last-child(1) {
    &:before {
      height: calc(100% - 15px);
      @include breakpoint($desktop-1200) {
        display: none;
      }
    }
        
    &:after {
      display: none;
      @include breakpoint($desktop-1200) {
        display: none;
      }
    }
  }

  &:nth-last-child(2) {
    &:before {
      height: calc(100% - 15px);
      @include breakpoint($desktop-1200) {
        display: none;
      }
    }
        
    &:after {
      display: none;
      @include breakpoint($desktop-1200) {
        display: none;
      }
    }
  }

  &:nth-last-child(3) {
    &:before {
      height: calc(100% - 15px);
      @include breakpoint($desktop-1200) {
        display: none;
      }
    }
        
    &:after {
      display: none;
      @include breakpoint($desktop-1200) {
        display: none;
      }
    }
  }
    
  &:nth-child(2n+2) {
    @include breakpoint($desktop-1200) {
      margin-right: 0;
      padding-right: 0;
    }
      
    &:before {
      @include breakpoint($desktop-1200) {
        display: none;
      }
    }
      
    &:after {
      @include breakpoint($desktop-1200) {
        display: none;
      }
    }
  }
}

.list-fade-enter-active, .list-fade-leave-active {
  transition: all 1.5s;
}

.list-fade-enter, .list-fade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>