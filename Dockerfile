FROM node:19.8.1-alpine

WORKDIR /app

RUN npm install npm@9.5.0
RUN rm -rf /usr/local/lib/node_modules/npm
RUN mv node_modules/npm /usr/local/lib/node_modules/npm

RUN node --version
RUN npm --version

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]