import picturelist from './picture-list'

picturelist.install = Vue => Vue.component(picturelist.name, picturelist);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(picturelist);
}

export default picturelist