# Places API

This is a NestJS API that can be run in two different ways: using Docker Compose for a testing environment and running locally connected to an existing PostgreSQL database.

## Dependencies

- Node.js
- npm (Node.js package manager)
- Docker and Docker Compose (for Docker execution)
- Access to a PostgreSQL database (for local execution)

## Execution with Docker Compose (Test Environment)

This approach uses Docker Compose to set up a test environment, including the API and a PostgreSQL database in separate containers.

### Steps for Execution

1. Clone the repository:

   ```bash
   git clone git@github.com:rafaellima47/places-api.git
   ```

2. Navigate to the project folder:

   ```bash
   cd places-api
   ```

3. Run the application with Docker Compose:

   ```bash
   docker-compose up
   ```

   This will start both the API and a PostgreSQL database for testing.

4. The API will be available at `http://localhost:7001`.

## Local Execution with Existing Database

In this approach, you will run the API locally connecting it to an existing PostgreSQL database.

### Configuration

1. Create a `.env` file at the root of the project with the following environment variables (adjust values as needed):

   ```
   APP_PORT=7001
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=root
   DB_PASSWORD=root
   DB_NAME=test
   ```

### Steps for Execution

1. Clone the repository:

   ```bash
   git clone git@github.com:rafaellima47/places-api.git
   ```

2. Navigate to the project folder:

   ```bash
   cd places-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm run start
   ```

5. The API will be available at `http://localhost:7001`
