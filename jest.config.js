module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    moduleNameMapper: {
      "\\.(css|scss|svg|png|jpg|jpeg)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  };
  