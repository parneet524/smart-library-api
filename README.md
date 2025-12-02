# Smart Library API
## Development Setup
npm install
npm run dev

## Run Tests
npm test

## API Documentation
Open docs/swagger.yaml in Swagger Editor: https://editor.swagger.io

# Smart Library API – README
 ## Overview
 The Smart Library API is a Node.js + TypeScript backend project that manages books, members,
 borrowing activity, notifications, and authentication using API keys. It includes unit tests, e2e tests,
 sorting features, Swagger documentation, and Firebase usage for data storage.
 ## Features- 
 CRUD for Books- CRUD for Members- Borrow/Return books- Notification endpoint (SendGrid)- API Key authentication (requireApiKey middleware)- Sorting members by name (?sort=name)- Jest unit + e2e tests- Swagger documentation- Firebase Admin SDK integration
 
 ## Setup Instructions
 1. Clone repo
 2. Run: npm install
 3. Start dev server: npm run dev
 4. Tests: npm test
 5. Swagger docs: visit /api-docs
 6. Firebase: add keys in .env
 7. API key required: x-api-key: secret123


