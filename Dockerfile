ARG  NODE_VERSION=latest
FROM node:${NODE_VERSION}

ADD ["package.json", "package-lock.json" , "/sources/"]
WORKDIR /sources
RUN npm ci

ADD ./ /sources

CMD ["npm", "run", "start:port"]
