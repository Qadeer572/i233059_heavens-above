// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended, // ✅ this is the missing parameter
});

export default [
  js.configs.recommended,
  ...compat.extends("eslint:recommended"),
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: "latest" },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
