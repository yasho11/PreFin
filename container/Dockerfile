# Use the official Node.js image as a base
FROM node:23-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (do not run 'next build' here)
RUN npm install

# Copy the rest of your app files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app in development mode (this will run 'next dev')
CMD ["npm", "run", "dev"]

