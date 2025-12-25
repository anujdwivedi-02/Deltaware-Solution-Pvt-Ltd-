# Deltaware Solutions

A modern web application built with **Vite + React** for the frontend and **Express.js** for the backend API.

## Project Structure

```
deltaware-solutions/
├── src/                    # React frontend source
│   ├── components/         # Reusable components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities & constants
│   ├── App.tsx             # Main app with routing
│   └── main.tsx            # Entry point
├── server/                 # Express.js backend
│   ├── lib/                # Database & email services
│   ├── routes/             # API route handlers
│   └── index.js            # Server entry point
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install frontend dependencies
npm install
```

### Development

```bash
# Run both frontend
npm run dev  # Frontend on http://localhost:5173
```

### Production Build

```bash
npm run build      # Build frontend to /dist
npm run preview    # Preview production build
```

## Environment Variables

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

### Frontend (Vite)

- `VITE_API_URL` - Backend API URL
- `VITE_CERTIFICATION_URL` - Certification verification URL

## Tech Stack

### Frontend

- **Vite** - Build tool
- **React 19** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## License

MIT
