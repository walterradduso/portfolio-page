import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          bracketSpacing: true,
          endOfLine: 'auto',
          jsxBracketSameLine: false,
          printWidth: 140,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
        },
      ],
      'no-console': 'warn',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          argsIgnorePattern: '^_.*?$',
          ignoreRestSiblings: false,
          varsIgnorePattern: '^_.*?$',
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'index', 'internal', 'object', 'parent', 'sibling', 'type'],
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'external',
              pattern: '~/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/**',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'external'],
          alphabetize: {
            order: 'ignore',
            caseInsensitive: true,
          },
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
          '': 'never',
        },
      ],
      'import/no-cycle': ['error', { maxDepth: 1 }],
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          bracketSpacing: true,
          endOfLine: 'auto',
          jsxBracketSameLine: false,
          printWidth: 140,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
        },
      ],
      'no-console': 'warn',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
          '': 'never',
        },
      ],
      'import/no-cycle': ['error', { maxDepth: 1 }],
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'react/button-has-type': 'off',
      'react/display-name': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          argsIgnorePattern: '^_.*?$',
          ignoreRestSiblings: false,
          varsIgnorePattern: '^_.*?$',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          argsIgnorePattern: '^_.*?$',
          ignoreRestSiblings: false,
          varsIgnorePattern: '^_.*?$',
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'index', 'internal', 'object', 'parent', 'sibling', 'type'],
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'external',
              pattern: '~/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/**',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'external'],
          alphabetize: {
            order: 'ignore',
            caseInsensitive: true,
          },
        },
      ],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          shorthandFirst: true,
          locale: 'auto',
        },
      ],
      'padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
    },
  },
  globalIgnores([
    'node_modules/**',
    '.next/**',
    '.turbo/**',
    'dist/**',
    'out/**',
    'build/**',
    '.cache/**',
    'coverage/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
