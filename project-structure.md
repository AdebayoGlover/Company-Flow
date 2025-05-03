Company Flow - project structure





company-flow/
│
├── frontend/                      # Frontend application
│   ├── public/                    # Static files
│   │   ├── favicon.ico
│   │   ├── index.html             # Main HTML entry point
│   │   └── assets/                # Images, fonts, etc.
│   │       ├── images/
│   │       └── fonts/
│   │
│   ├── src/                       # Source files
│   │   ├── app.js                 # Main application entry point
│   │   ├── router.js              # Custom SPA router implementation
│   │   ├── store.js               # Custom state management
│   │   │
│   │   ├── core/                  # Core application utilities
│   │   │   ├── component.js       # Base Component class
│   │   │   ├── dom.js             # DOM manipulation helpers
│   │   │   ├── events.js          # Event management system
│   │   │   └── http.js            # Fetch API wrapper
│   │   │
│   │   ├── components/            # Reusable components
│   │   │   ├── common/            # General UI components
│   │   │   │   ├── button/
│   │   │   │   │   ├── button.js
│   │   │   │   │   ├── button.css
│   │   │   │   │   └── button.html
│   │   │   │   ├── form/
│   │   │   │   ├── table/
│   │   │   │   └── modal/
│   │   │   │
│   │   │   └── layout/            # Layout components
│   │   │       ├── header/
│   │   │       ├── sidebar/
│   │   │       └── footer/
│   │   │
│   │   ├── pages/                 # Page components
│   │   │   ├── auth/              # Authentication pages
│   │   │   │   ├── login/
│   │   │   │   │   ├── login.js
│   │   │   │   │   ├── login.css
│   │   │   │   │   └── login.html
│   │   │   │   └── register/
│   │   │   │
│   │   │   ├── dashboard/         # Dashboard pages for different departments
│   │   │   │   ├── admin/
│   │   │   │   ├── hr/
│   │   │   │   ├── finance/
│   │   │   │   ├── marketing/
│   │   │   │   ├── sales/
│   │   │   │   └── operations/
│   │   │   │
│   │   │   ├── profile/
│   │   │   └── settings/
│   │   │
│   │   ├── services/              # API interactions
│   │   │   ├── api.js             # Base API service
│   │   │   ├── auth.service.js
│   │   │   ├── department.service.js
│   │   │   └── user.service.js
│   │   │
│   │   ├── utils/                 # Utility functions
│   │   │   ├── validation.js
│   │   │   ├── formatting.js
│   │   │   └── helpers.js
│   │   │
│   │   └── styles/                # Global styles
│   │       ├── variables.css
│   │       ├── global.css
│   │       └── layout.css
│   │
│   └── README.md
│
├── backend/                       # Backend application
│   ├── src/                       # Source files
│   │   ├── server.js              # Main server file
│   │   ├── app.js                 # Express app setup
│   │   │
│   │   ├── config/                # Configuration files
│   │   │   ├── database.js        # Database configuration
│   │   │   ├── auth.js            # Authentication configuration
│   │   │   ├── mongodb.js         # MongoDB configuration
│   │   │   └── environment.js     # Environment variables
│   │   │
│   │   ├── api/                   # API routes and controllers
│   │   │   ├── routes/            # Route definitions
│   │   │   │   ├── auth.routes.js
│   │   │   │   ├── users.routes.js
│   │   │   │   ├── departments.routes.js
│   │   │   │   └── index.js       # Route aggregator
│   │   │   │
│   │   │   ├── controllers/       # Route controllers
│   │   │   │   ├── auth.controller.js
│   │   │   │   ├── users.controller.js
│   │   │   │   └── departments.controller.js
│   │   │   │
│   │   │   └── middlewares/       # API middlewares
│   │   │       ├── auth.middleware.js
│   │   │       ├── validation.middleware.js
│   │   │       └── permissions.middleware.js
│   │   │
│   │   ├── models/                # Database models
│   │   │   ├── user.model.js
│   │   │   ├── department.model.js
│   │   │   ├── role.model.js
│   │   │   └── task.model.js
│   │   │
│   │   ├── services/              # Business logic
│   │   │   ├── auth.service.js
│   │   │   ├── users.service.js
│   │   │   └── departments.service.js
│   │   │
│   │   └── utils/                 # Utility functions
│   │       ├── logger.js
│   │       ├── helpers.js
│   │       └── errors.js
│   │
│   ├── package.json
│   └── README.md
│
├── database/                      # Database scripts and migrations
│   ├── migrations/                # Database migrations
│   ├── seeds/                     # Seed data
│   └── scripts/                   # Database scripts
│
├── docs/                          # Documentation
│   ├── api/                       # API documentation
│   ├── architecture/              # Architecture diagrams
│   └── guides/                    # User guides
│
├── scripts/                       # Build and deployment scripts
│
├── .gitignore
├── .env.example
├── docker-compose.yml             # Docker configuration
├── README.md
└── LICENSE
