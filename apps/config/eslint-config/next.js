/** @type {import('eslint').Linter.Confgig} */
module.exports = {
  extends: ['@rocketseat/eslint-config/next'],
  plugins: ['simple-import-sort'],
  rules: { 'simple-import-sort/imports': 'error' },
}
