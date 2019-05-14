<template>
  <div id="app">
    <ul class="picture-ul" :style="{'width': boxWidth}">
      <li class="picture-li" v-for="(item, index) in imgUrls" :key="index"
        @click="showPicture(index, item)"
        :style="{'background-image': 'url(' + item.url + ')', 'width': width, 'height': height, 'margin': margin}">
      </li>
    </ul>
    <transition name="fadein-fade">
      <picture-preview
        v-if="previewShow"
        :picture-index="pictureIndex"
        :picture-data="pictureData"
        :is-delete="isDelete"
        @picture-out="previewShow = false">
      </picture-preview>
    </transition>
  </div>
</template>

<script>
import picturePreview from '../picture-preview/picture-preview.vue';

export default {
  name: 'picture-list',
  components: {
    'picture-preview': picturePreview
  },
  props: {
    boxWidth: {
      type: String,
      default: '100%',
      required: false
    },
    width: {
      type: String,
      default: '200px',
      required: false
    },
    height: {
      type: String,
      default: '200px',
      required: false
    },
    margin: {
      type: String,
      default: '10px 0 0 10px',
      required: false
    },
    imgUrls: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      previewShow: false,
      pictureIndex: 0,
      pictureData: 0,
      isDelete: 0
    }
  },
  methods: {
    showPicture(index, item) {
      this.$data.previewShow = true;
      this.$data.pictureIndex = index;
      this.$data.pictureData = this.imgUrls;
      this.$data.isDelete = false;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  transition: all .3s;
  transition-property: transform;
  transform: translate3d(0px, 0px, 0px);
}
a {
  color: #42b983;
}
.picture-ul{
  display: inline-block;
  font-size: 0;
}
.fadein-fade-enter-active {
  transition: all .3s ease;
}
.fadein-fade-enter, .fadein-fade-leave-to{
  opacity: 0;
}
</style>
