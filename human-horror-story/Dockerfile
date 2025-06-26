# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

EXPOSE 3000

# Build the Next.js application
RUN npm run build

# Start the Next.js application in production mode
CMD ["npm", "start"]
