# Backend - Fullstack App

## Description

This is the backend of the Fullstack App. It is built with **Node.js** and **Express** and follows a modular architecture that separates the logic into controllers, routes, services, and models. The backend communicates with a MongoDB database and exposes a RESTful API.

The goal of this architecture is to provide a scalable and maintainable structure that can be reused in future projects.

## Project Structure

```bash
backend/
├── src/
│   ├── api/               # Contains business logic (controllers, routes, middlewares)
│   │   ├── controllers/   # Handles HTTP requests and responses
│   │   ├── routes/        # Defines the endpoints for the API
│   │   └── middlewares/   # Middleware functions for validation, authentication, etc.
│   ├── config/            # Application and database configurations
│   ├── models/            # Database models (MongoDB or another database)
│   ├── services/          # Business logic that can be reused (DB operations, etc.)
│   ├── utils/             # Helper functions, utilities
│   └── app.ts             # Entry point of the backend application
├── .env                   # Environment variables (not shared in version control)
├── .gitignore             # Files and folders to ignore in version control
├── package.json           # Node.js dependencies and scripts
├── package-lock.json      # Lock file for node modules
└── README.md              # Documentation for the backend
```
## Key Features

- **Modular structure**: The code is organized into folders by concern (routes, controllers, services, etc.), making it easy to scale and maintain.
- **MongoDB integration**: Using Mongoose (or any other ORM) to manage database interactions.
- **Middleware**: Centralized error handling, request validation, and authentication.
- **Environment variables**: The application is configured using a `.env` file to manage secrets and environment-specific configurations.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (or any other database of your choice)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### Installation

1. Clone the repository and navigate to the backend folder:

    ```bash
    git clone https://github.com/foucsi/fullstack-app.git
    cd fullstack-app/backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file at the root of the backend directory with the following keys:

    ```bash
    PORT=5000
    DATABASE_URL=mongodb://localhost:27017/fullstack-app
    JWT_SECRET=your-secret-key
    ```
4. Run the application:

    ```bash
    npm start
    ```

## Available Scripts

- `npm start`: Starts the application.
- `npm run dev`: Starts the application with hot-reloading for development.
- `npm run lint`: Runs the linter to check code formatting.
- `npm test`: Runs the test suite (optional, if testing is set up).

## API Documentation

This backend exposes a RESTful API. Below is an example of the main endpoints.

| Method  | Endpoint              | Description                     |
|---------|-----------------------|---------------------------------|
| GET     | /api/v1/resource       | Fetch a list of resources       |
| POST    | /api/v1/resource       | Create a new resource           |
| GET     | /api/v1/resource/:id   | Fetch a specific resource by ID |
| PUT     | /api/v1/resource/:id   | Update a resource by ID         |
| DELETE  | /api/v1/resource/:id   | Delete a resource by ID         |

For detailed API documentation, see the [API docs](./docs/api.md) (optional if you plan to generate documentation with tools like Swagger).

## Folder Structure Explained

- **src/api/controllers**: All the logic for handling requests and sending responses.
- **src/api/routes**: Defines routes and links them with appropriate controller functions.
- **src/api/middlewares**: Middleware functions for authentication, error handling, etc.
- **src/models**: Contains database schema definitions (e.g., Mongoose models).
- **src/services**: Contains reusable business logic like database queries or external API calls.
- **src/utils**: Utility functions such as error formatting or logging.

## Contributing

If you'd like to contribute to this backend, feel free to open a pull request or issue. Ensure your code follows the repository's coding standards and is well-documented.

## License

This backend is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
