const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      }
    },
    rules: {
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none',
          varsIgnorePattern: 'AWAG_COMMON_MESSAGES|AwagError'
        }
      ],
      '@angular-eslint/prefer-inject': "off",
      '@angular-eslint/directive-selector': [
        'error',
        {
          'type': 'attribute',
          'prefix': ['app', 'awag'],
          'style': 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          'type': 'element',
          'prefix': ['app', 'awag'],
          'style': 'kebab-case'
        }
      ],
      'indent': [
        'error',
        2,
        {
          'SwitchCase': 1,
          'ignoreComments': true
        }
      ],
      'linebreak-style': [
        'error', 'unix'
      ],
      'quotes': [
        'error', 'single', { allowTemplateLiterals: true }
      ]
    }
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
    ],
    rules: {
      '@angular-eslint/template/eqeqeq': 'off'
    }
  }
);
