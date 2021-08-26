module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 100,
      },
    ],
  },
};
