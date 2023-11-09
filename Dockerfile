FROM node:20.9.0-alpine3.18

ENV APP_ROOT ./front

RUN apk update && \
    mkdir -p $APP_ROOT

WORKDIR $APP_ROOT

COPY ./front ./app

EXPOSE 3000
