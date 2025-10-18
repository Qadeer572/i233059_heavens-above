// eslint.config.cjs
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({ baseDirectory: process.cwd() });

module.exports = [
  ...compat.extends("eslint:recommended"),
  {
    files: ["**/*.js"],
    rules: {},
  },
];
