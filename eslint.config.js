import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    rules: {
      // Add custom rules here
      "no-unused-vars": "warn",
    },
  },
];