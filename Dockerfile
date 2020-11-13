FROM node:14.10-slim

WORKDIR /srv

EXPOSE 3000

# COPY package.json .
# COPY node_modules node_modules
# COPY .next data

ADD app.tgz .

CMD ["npm", "start"]
