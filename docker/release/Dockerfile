FROM node:11.12-alpine

LABEL MAINTAINER="Ian ianduncan08@gmail.com"

RUN mkdir /api

WORKDIR /api

COPY dist /api/dist

COPY package.json /api

RUN yarn install --production=true --no-lockfile

EXPOSE 4000
