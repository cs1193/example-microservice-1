FROM node:latest

MAINTAINER Chandresh Rajkumar Manonmani <chandresh.rm@gmail.com> <cs1193@gmail.com> (http://chandreshrm.name)

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm install

ENV HOST 0.0.0.0
ENV PORT 3000

ENV DATASTORE_HOST users.db
ENV DATASTORE_PORT 27017
ENV DATASTORE_NAME users

ENV SECRET_KEY 875ada1df066b1bddb31ed41a4c68cd9

COPY . /usr/src/app

EXPOSE 3000

RUN npm run test
RUN npm run build

CMD ["npm", "run", "start"]
