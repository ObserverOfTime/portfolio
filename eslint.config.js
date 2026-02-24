import {defineConfig} from 'eslint/config';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import svelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'accessor-pairs': [
        'warn',
        {
          'setWithoutGet': true
        }
      ],
      '@stylistic/array-bracket-spacing': [
        'warn',
        'never'
      ],
      '@stylistic/arrow-spacing': [
        'warn',
        {
          'after': true,
          'before': true
        }
      ],
      'block-scoped-var': 'warn',
      '@stylistic/brace-style': [
        'warn',
        '1tbs',
        {
          'allowSingleLine': true
        }
      ],
      '@stylistic/comma-dangle': [
        'warn',
        'never'
      ],
      '@stylistic/comma-spacing': [
        'warn',
        {
          'after': true
        }
      ],
      '@stylistic/comma-style': [
        'warn',
        'last'
      ],
      'complexity': [
        'warn',
        20
      ],
      'consistent-this': [
        'warn',
        'self'
      ],
      'constructor-super': 'warn',
      '@stylistic/dot-location': [
        'warn',
        'property'
      ],
      'dot-notation': 'warn',
      '@stylistic/eol-last': 'warn',
      '@stylistic/indent': [
        'warn',
        2,
        {
          'SwitchCase': 1
        }
      ],
      '@stylistic/key-spacing': [
        'warn',
        {
          'afterColon': true
        }
      ],
      '@stylistic/linebreak-style': [
        'warn',
        'unix'
      ],
      'max-nested-callbacks': [
        'warn',
        10
      ],
      '@stylistic/new-parens': 'warn',
      'no-catch-shadow': 'warn',
      'no-cond-assign': [
        'warn',
        'except-parens'
      ],
      'no-const-assign': 'error',
      'no-delete-var': 'warn',
      'no-div-regex': 'warn',
      'no-dupe-args': 'warn',
      'no-dupe-keys': 'warn',
      'no-duplicate-case': 'error',
      'no-empty-character-class': 'warn',
      'no-eq-null': 'warn',
      'no-ex-assign': 'warn',
      'no-extra-boolean-cast': 'warn',
      '@stylistic/no-extra-parens': [
        'warn',
        'functions'
      ],
      '@stylistic/no-extra-semi': 'warn',
      'no-fallthrough': 'error',
      '@stylistic/no-floating-decimal': 'warn',
      'no-func-assign': 'warn',
      'no-implicit-coercion': [
        'warn',
        {
          'boolean': true,
          'number': true
        }
      ],
      'no-inner-declarations': [
        'warn',
        'functions'
      ],
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'warn',
      'no-labels': 'error',
      'no-lone-blocks': 'warn',
      'no-lonely-if': 'warn',
      'no-loop-func': 'warn',
      '@stylistic/no-mixed-spaces-and-tabs': 'warn',
      '@stylistic/no-multi-spaces': 'warn',
      'no-multi-str': 'warn',
      '@stylistic/no-multiple-empty-lines': [
        'warn',
        {
          'max': 2,
          'maxBOF': 0,
          'maxEOF': 1
        }
      ],
      'no-negated-in-lhs': 'warn',
      'no-nested-ternary': 'warn',
      'no-new': 'warn',
      'no-new-func': 'warn',
      'no-new-object': 'warn',
      'no-new-require': 'warn',
      'no-new-wrappers': 'warn',
      'no-obj-calls': 'warn',
      'no-octal': 'warn',
      'no-octal-escape': 'warn',
      'no-path-concat': 'warn',
      'no-redeclare': [
        'warn',
        {
          'builtinGlobals': true
        }
      ],
      'no-regex-spaces': 'warn',
      'no-return-assign': [
        'warn',
        'except-parens'
      ],
      'no-script-url': 'warn',
      'no-self-compare': 'warn',
      'no-sequences': 'warn',
      'no-shadow': [
        'warn',
        {
          'builtinGlobals': true,
          'hoist': 'functions',
          'allow': [
            'self'
          ]
        }
      ],
      'no-shadow-restricted-names': 'warn',
      'no-spaced-func': 'warn',
      'no-throw-literal': 'error',
      '@stylistic/no-trailing-spaces': 'warn',
      'no-undef': 'warn',
      'no-undefined': 'warn',
      'no-unexpected-multiline': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-unreachable': 'warn',
      'no-unused-expressions': 'warn',
      'no-use-before-define': 'warn',
      'no-var': 'warn',
      'no-void': 'warn',
      'no-warning-comments': [
        'warn',
        {
          'location': 'anywhere',
          'terms': [
            'TODO',
            'FIXME',
            'BUG'
          ]
        }
      ],
      '@stylistic/object-curly-spacing': [
        'warn',
        'never',
        {}
      ],
      'object-shorthand': [
        'warn',
        'always'
      ],
      'one-var': [
        'warn',
        {
          'const': 'never',
          'let': 'consecutive',
          'var': 'consecutive',
          'separateRequires': true
        }
      ],
      'operator-assignment': [
        'warn',
        'always'
      ],
      'operator-linebreak': [
        'warn',
        'after'
      ],
      'prefer-const': 'warn',
      '@stylistic/quote-props': [
        'warn',
        'consistent'
      ],
      '@stylistic/quotes': [
        'warn',
        'single',
        {
          'avoidEscape': true
        }
      ],
      '@stylistic/semi': [
        'warn',
        'always',
        {
          'omitLastInOneLineBlock': true
        }
      ],
      '@stylistic/space-in-parens': [
        'warn',
        'never',
        {}
      ],
      '@stylistic/spaced-comment': [
        'warn',
        'always',
        {}
      ],
      'valid-typeof': 'error',
      '@stylistic/wrap-iife': [
        'warn',
        'inside',
        {
          'functionPrototypeMethods': true
        }
      ],
      '@stylistic/wrap-regex': 'warn',
      'yoda': [
        'warn',
        'never',
        {
          'exceptRange': true
        }
      ]
    }
  },
  {
    files: ['**/*.svelte'],
    rules: {
      'svelte/no-navigation-without-resolve': [
        'error',
        {
          'ignoreLinks': true
        }
      ]
    },
    extends: [
      svelte.configs.recommended
    ],
    languageOptions: {
      parserOptions: {
        svelteConfig
      }
    }
  },
  {
    files: ['src/service-worker.js'],
    languageOptions: {
      globals: {
        ...globals.serviceworker
      }
    }
  },
  {
    files: [
      'svelte.config.js',
      'vite.config.js',
      'eslint.config.js',
      'stylelint.config.js'
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    }
  }
]);
