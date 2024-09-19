# Frontend - Fullstack App

## Description

Welcome to the **frontend** part of the **Fullstack App** project. This project uses **Next.js** with **TypeScript**, **Redux** for global state management, and **Tailwind CSS** for styling. The architecture is designed to be **scalable**, **modular**, and **maintainable**.

## Technologies used

- **Next.js**: A React framework for server-side rendering and static page generation.
- **TypeScript**: A strongly typed programming language for reliable and maintainable code.
- **Redux Toolkit**: Used to manage the global state of the application.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Project Structure

```bash
my-next-app/
├── public/
│   ├── images/                # Static images and files
│   └── favicon.ico            # Website favicon
├── src/
│   ├── components/            # Reusable components
│   │   ├── common/            # Common components (buttons, cards, etc.)
│   │   ├── layout/            # Layout components (Header, Footer, etc.)
│   │   └── specific/          # Page-specific components
│   ├── pages/                 # Application pages
│   │   ├── api/               # API routes if necessary
│   │   ├── _app.tsx           # Application entry point (with Redux Provider)
│   │   ├── _document.tsx      # Custom HTML and Head
│   │   └── index.tsx          # Main page (homepage)
│   ├── styles/                # Style files (Tailwind CSS)
│   │   ├── globals.css        # Global styles including Tailwind imports
│   │   └── Home.module.css    # CSS modules specific to the homepage
│   ├── store/                 # Redux state management
│   │   ├── index.ts           # Redux store configuration
│   │   └── slices/            # Slices for state management
│   │       └── userSlice.ts   # Example slice for user state management
│   ├── hooks/                 # Custom React hooks
│   ├── contexts/              # React contexts for global state
│   ├── utils/                 # Utility functions
│   ├── services/              # API calls or external logic
│   └── config/                # Configuration files
├── .env.local                 # Local environment variables
├── .gitignore                 # Git ignore file
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration (required for Tailwind)
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Installation

### Prerequisites

- **Node.js** >= 14.x
- **npm** or **yarn**

### Installation steps

1. **Clone the repository**:

```bash
   git clone https://github.com/foucsi/fullstack-app-frontend.git
   cd fullstack-app-frontend
```

2. **Install dependencies**:

```bash
   npm install
   # or
   yarn install
```

3. **Set up environment variables**:

Copy the .env.example file and rename it to .env.local, then add your environment variables:

```bash 
cp .env.example .env.local
```
Modify the variables according to your setup (e.g., NEXT_PUBLIC_API_URL).

4. **Run the application in development mode**:

```bash
   npm run dev
   # or
   yarn dev
```

The app will be available at http://localhost:3000.

## Available Scripts

- **`dev`**: Runs the development server.
- **`build`**: Builds the app for production.
- **`start`**: Starts the app in production mode.
- **`lint`**: Runs ESLint to check code quality.

## Redux Setup

The Redux store is configured in `src/store/index.ts`, with different slices in `src/store/slices/`.

Here is an example of a slice for user management in `userSlice.ts`:

# User Slice

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  value: string | null;
}

const initialState: UserState = {
  value: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
```

## Styling with Tailwind CSS

This project uses **Tailwind CSS** for styling. Tailwind utility classes are used directly in components for rapid development.

The Tailwind setup is in `src/styles/globals.css`, and the Tailwind classes are available throughout the project.

Here’s an example of using Tailwind in a component:

```tsx
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">Hello Tailwind!</h1>
    </div>
  );
};

export default Home;
```
## Contribution

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature:

```bash
   git checkout -b feature/my-feature
```

3.Make your changes and test them.
4.Submit a pull request.