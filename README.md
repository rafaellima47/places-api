# Places API

## Dependencies

- Node.js
- npm (Node.js package manager)
- Docker and Docker Compose (for Docker execution)
- Access to a PostgreSQL database (for local execution)

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

---

### Endpoints

#### HEAD /health-check

#### GET /places

- Description: Retrieves a list of places based on optional filter criteria.
- Query Parameters (Optional): name, city, state
- Response: Returns an array of places that match the filter criteria.

#### GET /places/:id

- Description: Retrieves a specific place by its ID.
- Path Parameters: `id` (required) - The unique identifier of the place.
- Response: Returns the details of the specified place.

#### POST /places

- Description: Creates a new place.
- Body: name, state, city
- Response: Returns the created place.

#### PUT /places/:id

- Description: Updates an existing place.
- Path Parameters: `id` (required) - The unique identifier of the place to update.
- Body: name, state, city (All fields are optional)
- Response: Returns the updated place.

#### DELETE /places/:id

- Description: Soft deletes a place by marking it as deleted.
- Path Parameters: `id` (required) - The unique identifier of the place to delete.
- Response: Returns the updated place with `isDeleted` set to `true`.

#### POST /users

- Description: Registers a new user.
- Body: email and password
- Response: Returns the created user data.

#### POST /users/authenticate

- Description: Authenticates a user and returns a token.
- Body:email and password
- Response: Returns an authentication token.