import picturepreview from './picture-preview'

picturepreview.install = Vue => Vue.component(picturepreview.name, picturepreview);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(picturepreview);
}

export default picturepreview