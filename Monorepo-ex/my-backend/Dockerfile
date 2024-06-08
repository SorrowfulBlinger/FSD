FROM node:22.2 as BASE
WORKDIR /app
COPY . .
RUN npm install
RUN npm install typescript
RUN npm run build
EXPOSE 3002
CMD [ "npm" , "run" ,"dev"]