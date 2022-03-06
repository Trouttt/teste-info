FROM node:16-alpine
RUN mkdir /server.info/
WORKDIR /server.info/
COPY package.json /server.info/
RUN yarn
COPY . /server.info/
CMD ["yarn", "dev"]
