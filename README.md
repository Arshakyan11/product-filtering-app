# Products Filter App

A small full-stack product filtering application with dynamic filters, pagination, and a responsive UI. Built with React, TypeScript, Redux Toolkit, and a mock Node.js API.

## Overview

This project simulates a basic e-commerce product listing. Users can browse products, apply multiple filters, and navigate through paginated results. All data is fetched from a REST API.

## Key Features

- Product listing fetched from API
- Filters by category, brand, price range, and rating
- Pagination with page navigation
- Responsive layout (desktop, tablet, mobile)
- Centralized state management with Redux Toolkit
- Fully typed with TypeScript

## Tech Stack

**Frontend**

- React
- TypeScript
- Vite
- Redux Toolkit
- Axios
- SCSS (CSS Modules)
- React Router

**Backend (Mock)**

- Node.js
- Express

## Getting Started

Install dependencies:

```bash
cd backend
npm install

cd ../frontend
npm install
```

Start the mock API:

```bash
cd backend
npm start
```

Start the frontend:

```bash
cd frontend
npm run dev
```

Frontend runs on `http://localhost:5173`  
API runs on `http://localhost:3001`

## Environment Variables

Create `frontend/.env`:

```
VITE_API_BASE_URL=http://localhost:3001
```

## Notes

- Frontend is API-driven (no hardcoded data)
- Filters can be combined
- Pagination resets on filter change
- Designed as a technical interview task

## Tests

Basic unit and component testing is planned for this project.

- Test setup is prepared using **Vitest** and **React Testing Library**
- API calls can be mocked using **MSW**
- Tests will focus on:
  - Rendering of product lists
  - Filter interactions
  - Pagination behavior
  - Redux state updates
