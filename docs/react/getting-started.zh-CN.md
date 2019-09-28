---
category: 接入指南
order: 0
title: 开发前必读
---

## 快速上手
`Ant Design React` 致力于提供给程序员愉悦的开发体验。

## 使用场景
- 小程序的主要开发语言是 `JavaScript` ，小程序的开发同普通的网页开发相比有很大的相似性。对于前端开发者而言，从网页开发迁移到小程序的开发成本并不高，但是二者还是有些许区别的。


## 对接流程
- 小程序的主要开发语言是 `JavaScript` ，小程序的开发同普通的网页开发相比有很大的相似性。对于前端开发者而言，从网页开发迁移到小程序的开发成本并不高，但是二者还是有些许区别的。


## 第一个例子

小程序并非凭空冒出来的一个概念。当微信中的 `WebView` 逐渐成为移动 Web 的一个重要入口时，微信就有相关的 `JS API` 了。

代码清单

```javascript
WeixinJSBridge.invoke('imagePreview', {
    current: 'http://inews.gtimg.com/newsapp_bt/0/1693121381/641',
    urls: [ // 所有图片的URL列表，数组格式
        'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
        'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
        'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
    ]
}, function(res) {
    console.log(res.err_msg)
})
```

