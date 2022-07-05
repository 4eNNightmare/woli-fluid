module.exports = {
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/order': 2,
    'import/newline-after-import': ['error', { count: 1 }],
    'no-console': 'error'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true
  },
  settings: {
    'import/core-modules': ['react-native']
  }
}
