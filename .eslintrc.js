module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "allways",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
};
