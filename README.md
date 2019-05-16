# vue-preview-picture-l

> vue preview picture tools👫

> 支持pc端，移动端

> 支持放大

> 支持键盘事件

🙋  
🙋 单击关闭查看图片窗口
🙋 双击放大

## npm

``` bash
# npm install
npm install vue-preview-picture-l --save
```
## 引入
在main.js中引入
```js
import preview from 'vue-preview-picture'
Vue.use(preview)
```
在组件中使用
> 包含图片列表&&展示
``` html
<picture-list
  :box-width="boxWidth" // 图片列表盒子宽
  :width="width"  // 图片宽度
  :height="height" // 图片高度
  :margin="margin" // 图片边距
  :img-urls="imgUrls"> // 图片数组
</picture-list>
```
> 仅做图片查看
``` html
<picture-preview
  :picture-index="pictureIndex" // 当前点击图片的index
  :picture-data="pictureData" // 图片数组
  :is-delete="isDelete">  // 删除事件
</picture-preview>
```
图片数组格式
```
[
  {
    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3345425463,2829351688&fm=26&gp=0.jpg',
    desc: '图片一'
  },
  {
    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2820343167,442028568&fm=26&gp=0.jpg',
    desc: '图片二'
  },
  {
    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3885463997,795370374&fm=26&gp=0.jpg',
    desc: '图片三'
  }
]
```
# 效果展示

![Image text](https://raw.githubusercontent.com/liqin1059/images/master/vue-preview-picture/picture-box.png?token=AGHRB62USUH73GM52SAPHVS43KCT6)
![Image text](https://raw.githubusercontent.com/liqin1059/images/master/vue-preview-picture/picture-preview.png?token=AGHRB65XMRKEPA7UYJ5JJBS43KCVW)

源码地址：https://github.com/liqin1059/vue-preview-picture
