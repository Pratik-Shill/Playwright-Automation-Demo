# Playwright Practice

This project is a demonstration of using Playwright for browser automation and testing. It includes example test cases and configuration files to help you get started.

## Project Structure

```
playwright-practice
├── src
│   └── tests
│       └── example.spec.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd playwright-practice
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running Tests

To run the tests, use the following command:
```
npx playwright test
```

### Configuration

The Playwright configuration can be found in `playwright.config.ts`. You can customize the settings such as test directory, timeout, and browser options according to your needs.

### Writing Tests

Test specifications are located in the `src/tests` directory. You can create new test files or modify the existing `example.spec.ts` to add your test cases.

### Example Test

Refer to `src/tests/example.spec.ts` for an example of how to write tests using Playwright's API.

## License

This project is licensed under the MIT License.