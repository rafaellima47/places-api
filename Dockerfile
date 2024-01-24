# Use a base image of Node 18
FROM node:18.12.0

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to utilize Docker cache
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application code into the image
COPY . .

# Expose the port the app runs on
EXPOSE 7001

# Command to run the application
CMD ["npm", "run", "start"]
