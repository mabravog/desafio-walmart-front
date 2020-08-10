FROM node:alpine as build
WORKDIR /app
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]
