<template>
  <div id="app">
    <picture-list
      :box-width="boxWidth"
      :width="width"
      :height="height"
      :margin="margin"
      :img-urls="imgUrls">
    </picture-list>
    <ul>
      <li class="demo-imgs" v-for="(item, index) in imgUrls" :key="index">
        <img :src="item.url" alt="" @click="pictureClick(item, index)">
      </li>
    </ul>
    <picture-preview
        v-if="previewShow"
        :picture-index="pictureIndex"
        :picture-data="pictureData"
        :is-delete="isDelete"
        @picture-out="previewShow = false">
      </picture-preview>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      boxWidth: '100%',
      width: '200px',
      height: '200px',
      margin: '10px 0 0 10px',
      imgUrls: [{
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3345425463,2829351688&fm=26&gp=0.jpg',
          desc: '图片一'
        },
        {
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2820343167,442028568&fm=26&gp=0.jpg',
          desc: '图片二'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3885463997,795370374&fm=26&gp=0.jpg',
          desc: '图片仨'
        }
      ],
      pictureIndex: 0,
      pictureData: [],
      isDelete: false,
      previewShow: false
    }
  },
  methods: {
    // 查看图片
    pictureClick(item, index) {
      this.$data.previewShow = true;
      this.$data.pictureData = this.$data.imgUrls;
      this.$data.pictureIndex = index;
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
.demo-imgs{
  width: 200px;
  height: 200px;
  overflow: hidden;
}
</style>
