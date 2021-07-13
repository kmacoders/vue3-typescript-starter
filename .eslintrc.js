module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "svelte3",
    "@typescript-eslint", // Them Ts plugin
  ],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
  ],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 0,
        'import/no-duplicates': 0,
        'import/no-mutable-exports': 0,
        'import/no-unresolved': 0,
      }
    }
  ],
  rules: {
    "no-underscore-dangle": 'off',
    'max-len': 'off',
    'import/no-cycle': 'off',

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

    /**
     * Cho phép ngắt dòng ( string dom )
     */
    "operator-linebreak": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
  settings: {
    /**
     * Pass the TypeScript package to the Svelte plugin
     * @see https://github.com/sveltejs/eslint-plugin-svelte3
     */
    'svelte3/typescript': () => require('typescript'),
  }
};
