FROM ubuntu:16.04 as builder

WORKDIR /angular-docker

COPY package*.json ./

COPY . /angular-docker

# Install Node.js
RUN apt-get update
RUN apt-get install curl -y 
RUN apt-get install -y git
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install -y nodejs
RUN node -v
RUN npm -v
RUN npm install -g @angular/cli
RUN npm install
RUN $(npm bin)/ng build

# Stage 2
FROM nginx
COPY --from=builder /angular-docker/dist/ /usr/share/nginx/html/