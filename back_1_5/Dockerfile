FROM node:latest

# Create app directory in the container
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json are copied
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port your application listens on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "server.js"]
