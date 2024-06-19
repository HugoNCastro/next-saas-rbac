/** @type {import('eslint').Linter.Confgig} */
module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['simple-import-sort'],
  rules: { 'simple-import-sort/imports': 'error' },
}
