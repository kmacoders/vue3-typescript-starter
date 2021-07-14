module.exports = {
  parser: "vue-eslint-parser",
  plugins: [
    "@typescript-eslint",
    // "eslint-comments",
    // "promise",
    // "unicorn",
  ],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: './tsconfig.json',
    extraFileExtensions: [".vue"]
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.vue"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"]
      }
    }
  ],
  rules: {
    "no-underscore-dangle": 'off',
    'max-len': 'off',
    'import/no-cycle': 'off',
    "import/extensions": "off",
    "import/no-unresolved": "off",

    /**
     * Lỗi ngoại trừ :
     * a || b
     * a && b()
     * a() || (b = c)
     * a ? b() : c()
     * a ? b() || (c = d) : e()
     */
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "import/prefer-default-export": "off",

    /**
     * For mutations VueX
     *
     * setCart(state, payload) {
     * state.errorMessage = false;
     * state.shoppingCart = payload;
     * return state;
      },
     */
    "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }],
    "no-shadow": "off",

    /**
     * Ignore this vue lifecycle
     */
    "class-methods-use-this": [
      "error",
      { "exceptMethods": [
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeUpdate",
        "updated",
        "beforeDestroy",
        "destroyed"
        ]
      }
    ],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
};
