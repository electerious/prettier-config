export default {
  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '', '^[./]'],
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  printWidth: 120,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
}
