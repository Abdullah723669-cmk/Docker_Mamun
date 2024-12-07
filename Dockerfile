FROM node:14

WORKDIR /myapp

COPY server.js  .
COPY index.html .
COPY images ./images
COPY package.json .

RUN npm install

EXPOSE 4000

CMD [ "node","server.js" ]