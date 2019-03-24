module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  globals: {
    artifacts: "readonly"
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "react/jsx-uses-vars": [2],
    "no-console": 0
  }
};
