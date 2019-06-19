FROM node:11.12-alpine

LABEL MAINTAINER="Ian ianduncan08@gmail.com"

RUN mkdir /api

WORKDIR /api

COPY package.json /api

RUN yarn install --no-lockfile --silent

EXPOSE 4000
