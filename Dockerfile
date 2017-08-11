FROM node:6.10.0-alpine

COPY . /app
WORKDIR /app

#RUN npm install
#RUN npm install webpack-dev-server -g
#RUN npm rebuild node-sass
#CMD [ "webpack" ] 

EXPOSE 9009
CMD [ "npm", "start" ]