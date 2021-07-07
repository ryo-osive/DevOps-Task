# Docker file node API

FROM node:14-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server.js
STOPSIGNAL SIGTERM
EXPOSE 5000