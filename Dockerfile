FROM node:9
WORKDIR ./rest_api
COPY package*.json ./rest_api
RUN npm install
COPY . ./rest_api
EXPOSE 3006
CMD npm start

