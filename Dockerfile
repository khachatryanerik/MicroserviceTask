FROM node:14.17.4

WORKDIR /MicroserviceTask
#Adding our js file
COPY src /MicroserviceTask/src/

#Adding package files
COPY package.json package-lock.json /MicroserviceTask/
COPY .env /MicroserviceTask/

#Installing npm packages
RUN npm install

#Running index.js
CMD ["npm", "start"]