/** @type {import('eslint').Linter.Confgig} */
module.exports = {
  extends: ['@rocketseat/eslint-config/node'],
  plugins: ['simple-import-sort'],
  rules: { 'simple-import-sort/imports': 'error' },
}
