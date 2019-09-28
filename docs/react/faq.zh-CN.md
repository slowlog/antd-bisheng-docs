---
order: 3
title: FAQ
---

以下整理了一些常见的问题和答复。

---
### 接口交互方式
- 在非特殊说明的情况下，服务器的请求统一都是`GET`请求方式，响应统一为纯`json`字符串或者纯文本字符串。

---

### 编码格式

- 接口请求和响应的参数编码格式，统一使用`UTF-8`编码，开发者如果使用其他编码格式，可能会导致中文乱码，或者签名解析不通过的情况，请务必知晓。

---
      
### 如何修改 Ant Design 的默认主题？

- 参考：https://ant.design/docs/react/customize-theme 。
---

### 你们会提供其他主题吗？

- 不，我们遵守 Ant Design 设计规范。https://github.com/ant-design/ant-design/issues/1241 。