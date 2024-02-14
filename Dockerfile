# React Dockerfile
FROM node:16

# Çalışma dizinini ayarla
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Uygulama kodunu kopyala
COPY . .

# Build the app for production
RUN npm run build

# Serve the app using serve
#RUN npm install -g serve
#CMD [ "server", "-s", "build", "-l", "80"]

#CMD [ "npm", "start" ]

FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /mysite/build /usr/share/nginx/html