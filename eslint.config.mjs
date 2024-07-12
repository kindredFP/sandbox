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
      'no-unused-vars': 'off',  // Turn off no-unused-vars rule
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
      "no-undef": "off"
    }
  }
];
