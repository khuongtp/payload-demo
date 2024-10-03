module.exports = {
  extends: 'next',
  root: true,
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
  },
}
