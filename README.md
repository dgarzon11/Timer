# Timer Web App

## Setup and Execution

1. Open a terminal and navigate to this directory:
   ```
   cd /workspaces/Timer
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open your browser and go to the URL shown in the terminal (typically http://localhost:3000).

## Testing

To run the tests:

```bash
# Run tests in watch mode
npm test

# Run tests with coverage report
npm run test:coverage
```

The tests use Jest and React Testing Library. Add new tests in files with `.test.tsx` extension next to the components they test.