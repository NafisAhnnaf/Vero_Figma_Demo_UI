FROM oven/bun:1

WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the dev server port
EXPOSE 3015

# Start the Vite dev server
CMD ["bun", "run", "dev"]
