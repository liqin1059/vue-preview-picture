<template>
  <div id="app">
    <picture-list
      :boxWidth="boxWidth"
      :width="width"
      :height="height"
      :margin="margin"
      :imgUrls="imgUrls">
    </picture-list>
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
      imgUrls: [
        {
          url: 'https://surroundoa-test.haiermoney.com/image/20190131zm32edqzcompress.jpg',
          desc: '图片一'
        },
        {
          url: 'https://surroundoa-test.haiermoney.com/image/201901314ef7rnk6compress.jpg',
          desc: '图片二'
        },
        {
          url: 'https://surroundoa-test.haiermoney.com/image/20190131mnazbwl4compress.jpg',
          desc: '图片仨'
        },
        {
          url: 'https://surroundoa-test.haiermoney.com/image/201901311fhikivfcompress.jpg',
          desc: '图片四'
        },
        {
          url: 'https://surroundoa-test.haiermoney.com/image/20190131prz2n7oucompress.jpg',
          desc: '图片五'
        }
      ]
    }
  },
  methods: {
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
