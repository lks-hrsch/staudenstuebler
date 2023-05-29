module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: ['tsconfig.json', '.nuxt/tsconfig.json'],
    extraFileExtensions: ['.vue'],
    tsconfigRootDir: __dirname,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'prettier',
  ],
  overrides: [],
  plugins: ['vue'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],
    // https://stackoverflow.com/questions/70346829/eslint-vue-multiword-components
    'vue/multi-word-component-names': 0,
    // https://stackoverflow.com/questions/64867504/vue-3-the-template-root-requires-exactly-one-element-eslint-plugin-vue
    'vue/no-multiple-template-root': 'off',
  },
};
