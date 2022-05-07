// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier', 'unused-imports', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['warn'],
        'import/prefer-default-export': 'off',
        'no-param-reassign': ['warn', { props: false }],
        'consistent-return': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'global-require': 'off',
        'max-classes-per-file': 'off',
        'react/no-unescaped-entities': 'off',
        'class-methods-use-this': 'off',
        'no-restricted-syntax': 'off',
        'no-await-in-loop': 'off',
        'no-continue': 'off',
        'no-extra-boolean-cast': 'warn',

        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', ['index', 'sibling', 'parent', 'object'], 'type'],
            pathGroups: [
              {
                pattern: 'react*',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: 'types',
                group: 'type',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        'react-hooks/exhaustive-deps': 'off',
        'no-nested-ternary': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        'react/no-array-index-key': 'warn',
        'import/no-cycle': 'off',
        'import/namespace': 'off',
        'import/no-named-as-default': 'off',
      },
      settings: {
        'import/resolver': {
          'typescript': {}
        }
      },
    },
  ],
}
