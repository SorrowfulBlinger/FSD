FROM node:22.2 as BASE
WORKDIR /app
COPY . .

# here we are reading the value from the build args and inserting into the environment variables
ARG BE_DOMAIN
ENV BE_DOMAIN_ENV=${BE_DOMAIN}

RUN npm install create-turbo --global
RUN npx next telemetry disable
RUN npm install
EXPOSE 3000 3001 3002


#RUN npm run build
#CMD [ "npm" , "run" ,"dev"]

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/bin/sh", "/docker-entrypoint.sh"]