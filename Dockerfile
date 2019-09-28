FROM nginx:1.14.0-alpine
COPY . /www/antd-bisheng-docs
COPY default.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 0777 /www/antd-bisheng-docs
CMD ["nginx", "-g", "daemon off;"]
