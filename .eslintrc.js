module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    "jest/globals": true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      excludedFiles: "*.test.js"
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "jest"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  }
};
