# use node alpine image as base for the build
FROM node:22-alpine AS build

WORKDIR /app/src

# copy the package json files and perform a clean install
# if the dependencies have not changed, we can use a cached step here if available
COPY ./package*.json ./
RUN npm ci

# copy all other files
COPY . ./

# create the deployable images
FROM node:22-alpine

WORKDIR /usr/app

# copy the output of the build process above, we only copy the necessary files to run the app
COPY --from=build /app/src/dist/doppelkopf-ui ./

# run the server side of the angular ssr app
CMD ["node", "server/server.mjs"]

# default port for node is 4000
# allow the container to listen to it
EXPOSE 4000
