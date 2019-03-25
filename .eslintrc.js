module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true
  },
  globals: {
    artifacts: "readonly"
  },
  extends: "airbnb",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "react/jsx-uses-vars": [2],
    "no-console": 0,
    "react/jsx-filename-extension": "off",
    "no-use-before-define": "off",
    "import/no-unresolved": "off",
    "max-len": "off"
  }
};
