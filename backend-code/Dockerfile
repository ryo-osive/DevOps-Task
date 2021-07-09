# Docker file node API

FROM node:14-alpine

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_ENV production

ADD package.json /home/node/app/package.json
COPY . /home/node/app/

RUN chown -R node:node /home/node/app 

USER node
WORKDIR /home/node/app
RUN npm install --save

EXPOSE 5000

STOPSIGNAL SIGTERM

CMD node server.js