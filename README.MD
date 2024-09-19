# - Fullstack Application - 

## Description

This repository contains a fullstack application with separate frontend and backend directories. The project uses the following technologies:

- **Backend**: Node.js, Express, MongoDB (or any other database)
- **Frontend**: React (or any other frontend framework)

The application is designed to be modular, scalable, and follows best practices for both frontend and backend development.

## Project Structure

```bash
fullstack-app/
├── backend/         # Backend architecture using Node.js and Express
├── frontend/        # Frontend architecture using React
├── README.md        # General documentation of the project
```

## Backend

The backend is built using Node.js and Express. It follows a modular architecture, with the logic separated into controllers, routes, services, and models. The backend communicates with a MongoDB database and exposes a RESTful API.

For more details about the backend structure and setup, check the [backend README](./backend/README.md).

## Frontend

The frontend is built using React. It follows a component-based architecture and communicates with the backend API to fetch and display data.

For more details about the frontend structure and setup, check the [frontend README](./frontend/README.md).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/foucsi/fullstack-app.git
    ```

2. Navigate to the backend folder and install dependencies:

    ```bash
    cd fullstack-app/backend
    npm install
    ```

3. Navigate to the frontend folder and install dependencies:

    ```bash
    cd ../frontend
    npm install
    ```
## Running the Application

1. **Backend**: To start the backend server, navigate to the backend directory and run:

    ```bash
    cd backend
    npm start
    ```

2. **Frontend**: To start the frontend development server, navigate to the frontend directory and run:

    ```bash
    cd frontend
    npm start
    ```

3. The backend server runs on `http://localhost:5000` by default, and the frontend on `http://localhost:3000`. The frontend will communicate with the backend using RESTful APIs.

# Contributing to fullstack-app

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Report bugs using Github's [issues](https://github.com/yourproject/yourrepository/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/yourproject/yourrepository/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
   - Be specific!
   - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People *love* thorough bug reports. I'm not even kidding.

## Use a Consistent Coding Style

* 2 spaces for indentation rather than tabs
* You can try running `npm run lint` for style unification

## License

By contributing, you agree that your contributions will be licensed under its [Your License] License.

## Recognizing Contributors

We greatly appreciate everyone who contributes to [Project Name]! Your commitment and creativity make this project what it is. To express our gratitude, we will:

- Mention all contributors in our CONTRIBUTORS.md file
- Regularly share updates about significant contributions on our social media channels (Twitter, LinkedIn, etc.)
- Highlight the most active contributors on our website and in our newsletters
- Offer regular contributors the opportunity to become project maintainers

Join us in this open-source journey and become part of our growing community!

For more information on how we recognize contributions, please check our [contributor recognition policy](link_to_policy).

## Contributors ✨

Thanks to the following contributor for their work on this project:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ton_nom_utilisateur">
        <img src="https://avatars.githubusercontent.com/foucsi?v=4" width="100px;" alt="ton_nom_utilisateur"/>
        <br /><sub><b>Julien Foucart</b></sub>
      </a>
      <br />
      💻 Code and 📖 Documentation
    </td>
  </tr>
</table>

