import globals from "globals";
import pluginJs from "@eslint/js";
import pluginCypress from "eslint-plugin-cypress";

export default [
  {
    ignores: [
      "cypress.config.js"
    ]
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.cypress  // Add Cypress globals
      }
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      cypress: pluginCypress
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      "no-undef": "error", // Undefined variables
      "no-constant-condition": "warn", // Constant conditions in if statements
      "no-extra-semi": "error", // Extra semicolons
      "no-redeclare": "error", // Variable redeclaration
      "no-unreachable": "error", // Unreachable code
      "consistent-return": "warn", // Consistent return statements
      "eqeqeq": "error", // Require === and !==
      "semi": ["error", "always"], // Semicolons
      "no-unused-vars": "off", // Unused variables

    }
  },
  {
    files: ["cypress/**/*.js", "cypress/**/*.ts"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        cy: "readonly",
        beforeEach: "readonly"
      }
    },
    rules: {
      "no-undef": "off",
      "semi": "off", // Semicolons
      "no-unused-vars": "off", // Unused variables
    }
  }
];
