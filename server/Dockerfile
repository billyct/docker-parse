FROM node:latest

RUN npm install pm2 -g --registry=https://registry.npm.taobao.org >/dev/null 2>&1

VOLUME ["/var/www/app", "/var/logs/parse"]

ADD start /start
RUN chmod 755 /start
CMD ["/start"]

EXPOSE 1337