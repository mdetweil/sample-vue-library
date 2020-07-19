# develop stage
FROM node:lts-alpine as develop-stage

# make the 'app' folder the current working directory
WORKDIR /app
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json yarn.lock ./
# install project dependencies
RUN yarn install
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn build

# production stage
FROM nginx:1.15.7-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]