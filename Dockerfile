FROM node:14.10-slim

WORKDIR /srv

EXPOSE 3000

# COPY package.json .
# COPY node_modules node_modules
# COPY .next data

ADD app.tgz .

CMD ["npm", "start"]

# Commands to run to spin up the container from image in local
# FROM node:alpine
# WORKDIR /app
# ADD . /app
# RUN npm install
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "start"]