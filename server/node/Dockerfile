FROM node:16-alpine
RUN mkdir /server.infotech/
WORKDIR /server.infotech/
COPY package.json /server.infotech/
RUN yarn
COPY . /server.infotech/
CMD ["yarn", "dev"]
