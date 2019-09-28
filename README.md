# Antd bisheng docs
<br/>

一个从 `Ant Design` 文档抽离出来的简化版文档工具，可用于快速构建及管理项目接口文档、个人学习笔记等。

<br/>

## Demo 示例
<br/>

 - 请点击 [在线预览](http://api.slowlog.cn)


<br/>

## 目录结构
<br/>

```bash

├── .
├── .gitignore         // git 忽略
├── README.md          // 文档说明
├── bisheng.config.js  // 全局配置文件
├── components         // 组件功能
├── dist               // 打包后静态文件输出目录
├── docs               // markdown 文件
├── default.conf       // docker nignx 配置文件
├── Dockerfile         // docker 构建  
├── package.json       // 项目依赖
└── theme              // 基于 Ant Desgin 的主题

```
<br/>

## 项目启动&打包
<br/>


- `npm i --registry=https://registry.npm.taobao.org // 安装项目依赖`

- `npm start // 启动项目`

- `npm run clean // 清除 dist 目录下的静态文件`

- `npm run prod // 打包项目、静态文件生成目录为当前目录的 dist`

<br/>

## Nginx 配置
<br/>

```bash

server {
    listen 80;

    server_name api.domain.com;

    root /www/antd-bisheng-docs/dist;

    location / {
        index index.html;
        rewrite ^/$ /docs/react/getting-started.html redirect;
    }

    error_page  500 502 503 504 404 http://api.domain.com/docs/react/getting-started.html;

}

```
<br/>

## 使用 Docker 构建此项目
<br/>

```bash

FROM nginx:1.14.0-alpine

COPY . /www/antd-bisheng-docs

COPY default.conf /etc/nginx/conf.d/default.conf

RUN chmod -R 0777 /www/antd-bisheng-docs

CMD ["nginx", "-g", "daemon off;"]

```
<br/>

## 注意事项
<br/>

- 模板文件路径 `./theme/static/template.html`

- 首页为空白页，需用 nginx rewrite 至指定页面

- 目前仅支持中文，如需使用其他语言请自行解决

- 如需访问某指定页面可通过，例如：http://api.slowlog.cn/docs/react/sign-rule.html

