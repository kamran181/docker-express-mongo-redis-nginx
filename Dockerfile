FROM node:16

WORKDIR /app

COPY package.json .

# Install dependencies
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
         then npm install; \
         else npm install --only=production; \
        fi



COPY . .

EXPOSE 3000


