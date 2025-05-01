# Testing

The Portfolio Sidebar project uses Jest and React Testing Library for testing.

## Setup

The testing setup is defined in the following files:

- `jest.config.js`: Jest configuration
- `jest.setup.js`: Jest setup file
- `babel.config.json`: Babel configuration for Jest

### Jest Configuration

```js
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
```

### Jest Setup

```js
import "@testing-library/jest-dom";
```

### Babel Configuration

```json
{
  "presets": [
    ["@babel/preset-env", { "targets": { "node": "current" } }],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

## Test Files

Test files are named with a `.spec.jsx` or `.test.jsx` extension and are located alongside the components they test. For example, `Home.spec.jsx` tests the `Home.jsx` component.

## Example Test

Here's an example of a test for the Home component:

```jsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Home";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

// Mock the SEO component
jest.mock("../components/SEO", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="seo-mock"></div>,
  };
});

describe("Home Component", () => {
  test("renders the home page with the correct content", () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Home />
          </I18nextProvider>
        </BrowserRouter>
      </HelmetProvider>
    );

    // Check if the name is displayed
    expect(screen.getByText(/GUILHERME/i)).toBeInTheDocument();
    expect(screen.getByText(/RIBEIRO/i)).toBeInTheDocument();
    
    // Check if the SEO component is rendered
    expect(screen.getByTestId("seo-mock")).toBeInTheDocument();
  });
});
```

## Running Tests

Tests can be run using the following npm script:

```bash
npm test
```

This will run all tests in the project.

## Test Coverage

Test coverage can be generated using Jest's coverage option:

```bash
npm test -- --coverage
```

This will generate a coverage report in the `coverage` directory.

## Mocking

### Mocking Components

Components can be mocked using Jest's mock function:

```jsx
jest.mock("../components/SEO", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="seo-mock"></div>,
  };
});
```

### Mocking Hooks

Hooks can be mocked using Jest's mock function:

```jsx
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));
```

### Mocking API Calls

API calls can be mocked using Jest's mock function:

```jsx
jest.mock("@emailjs/browser", () => ({
