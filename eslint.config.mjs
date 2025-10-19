// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: process.cwd() });

export default [
  ...compat.extends("eslint:recommended"),
  {
    files: ["**/*.js"],
    rules: {
      // add rules here if needed
    },
  },
];
