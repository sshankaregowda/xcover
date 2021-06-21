FROM node:8

RUN mkdir xcover-tests-docker
WORKDIR /xcover-tests-docker
COPY . .
COPY ./nightwatch.docker.json ./nightwatch.json

COPY package.json .
RUN yarn install

RUN yarn add nightwatch
CMD ./entrypoint.sh start

