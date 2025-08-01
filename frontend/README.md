# CSE-JNU Connect

## Folder Structure
```bash
frontend/
│
├── app/                    # App Router structure
│   ├── (pages)/            # Pages
│   │   ├── alumni/         # Alumni Page
│   │   ├── auth/           # Auth Pages
│   │   │   ├── login/      # Login Page
│   │   │   └── register/   # Register Page
│   │   ├── contributors/   # Contributors Page
│   │   ├── achievements/   # Achievements Page
│   ├── api/                # API Routes
│   │   └── auth.ts         # Auth API
│   │   └── users.ts        # Users API
│   │   └── posts.ts        # Posts API
│   ├── actions/            # Server Actions
│   │   └── alumni.ts       # Alumni Actions
│   │   └── contributors.ts # Contributors Actions
│   │   └── achievements.ts # Achievements Actions
│   ├── page.tsx            # Home Page
│   └── layout.tsx          # Root layout
│
├── components/             # Reusable UI components
│   ├── ui/                 # Input, Button, etc.
│   ├── shared/             # Navbar, Footer, Card, etc.
│   ├── alumni/             # Alumni Components
│   ├── form/               # Form Components
│   ├── contributors/       # Contributors Components
│   └── achievements/       # Achievements Components
│
├── lib/                    # Utilities & API clients
│   ├── db/                 # Database client
│   │   ├── supabase.ts     # Supabase client
│   ├── types/              # Types
│   │   ├── auth.ts         # Auth API
│   │   ├── users.ts        # Users API
│   │   ├── posts.ts        # Posts API
│   └── utils/              # Utility functions
│
├── hooks/                  # Custom React hooks
│
├── public/                 # Public assets
│   └── images/             # Images
│   └── fonts/              # Fonts
│
```

## Environment Setup: Copy and rename `example.env` to `.env` and fill in the values.