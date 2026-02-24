/** @type {import('stylelint').Config} */
export default {
  defaultSeverity: 'warning',
  customSyntax: 'postcss-html',
  plugins: [
    '@stylistic/stylelint-plugin'
  ],
  rules: {
    '@stylistic/at-rule-name-case': 'lower',
    '@stylistic/at-rule-semicolon-newline-after': 'always',
    '@stylistic/at-rule-semicolon-space-before': 'never',
    '@stylistic/block-closing-brace-empty-line-before': 'never',
    '@stylistic/block-closing-brace-newline-after': 'always-single-line',
    '@stylistic/block-closing-brace-newline-before': 'always-multi-line',
    '@stylistic/block-closing-brace-space-before': 'always-single-line',
    '@stylistic/block-opening-brace-newline-after': 'always-multi-line',
    '@stylistic/block-opening-brace-space-after': 'always-single-line',
    '@stylistic/block-opening-brace-space-before': 'always-single-line',
    '@stylistic/color-hex-case': 'upper',
    'color-no-invalid-hex': [
      true,
      {
        'severity': 'error'
      }
    ],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    '@stylistic/declaration-bang-space-after': 'never',
    '@stylistic/declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        'severity': 'error'
      }
    ],
    'declaration-block-no-redundant-longhand-properties': true,
    '@stylistic/declaration-block-semicolon-newline-after': 'always-multi-line',
    '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
    '@stylistic/declaration-block-semicolon-space-after': 'always-single-line',
    '@stylistic/declaration-block-semicolon-space-before': 'never',
    '@stylistic/declaration-colon-space-after': 'always',
    '@stylistic/declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'font-family-name-quotes': 'always-unless-keyword',
    'font-family-no-duplicate-names': [
      true,
      {
        'severity': 'error'
      }
    ],
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': 'named-where-possible',
    'function-calc-no-unspaced-operator': [
      true,
      {
        'severity': 'error'
      }
    ],
    '@stylistic/function-comma-newline-before': 'never-multi-line',
    '@stylistic/function-comma-space-after': 'always-single-line',
    '@stylistic/function-comma-space-before': 'never',
    '@stylistic/function-max-empty-lines': 0,
    'function-name-case': 'lower',
    '@stylistic/function-parentheses-space-inside': 'never',
    'function-url-no-scheme-relative': true,
    '@stylistic/function-whitespace-after': 'always',
    '@stylistic/indentation': [
      2,
      {
        'indentInsideParens': 'once-at-root-twice-in-block'
      }
    ],
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    '@stylistic/max-empty-lines': [
      2,
      {
        'ignore': [
          'comments'
        ]
      }
    ],
    'max-nesting-depth': 5,
    '@stylistic/media-feature-colon-space-after': 'always',
    '@stylistic/media-feature-colon-space-before': 'never',
    '@stylistic/media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': [
      true,
      {
        'severity': 'error'
      }
    ],
    '@stylistic/media-feature-parentheses-space-inside': 'never',
    '@stylistic/media-feature-range-operator-space-after': [
      'always',
      {
        'severity': 'error'
      }
    ],
    '@stylistic/media-feature-range-operator-space-before': [
      'always',
      {
        'severity': 'error'
      }
    ],
    '@stylistic/media-query-list-comma-newline-before': 'never-multi-line',
    '@stylistic/media-query-list-comma-space-after': 'never',
    'no-duplicate-at-import-rules': [
      true,
      {
        'severity': 'error'
      }
    ],
    'no-duplicate-selectors': [
      true,
      {
        'severity': 'error'
      }
    ],
    '@stylistic/no-eol-whitespace': [
      true,
      {
        'severity': 'error'
      }
    ],
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/no-missing-end-of-source-newline': true,
    'no-unknown-animations': [
      true,
      {
        'severity': 'error'
      }
    ],
    '@stylistic/number-leading-zero': 'always',
    '@stylistic/number-no-trailing-zeros': true,
    '@stylistic/property-case': 'lower',
    'property-no-unknown': [
      true,
      {
        'checkPrefixed': true
      }
    ],
    '@stylistic/selector-attribute-brackets-space-inside': 'never',
    '@stylistic/selector-attribute-operator-space-after': 'never',
    '@stylistic/selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    '@stylistic/selector-combinator-space-after': 'always',
    '@stylistic/selector-combinator-space-before': 'always',
    '@stylistic/selector-descendant-combinator-no-non-space': true,
    '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
    '@stylistic/selector-list-comma-space-after': 'always-single-line',
    '@stylistic/selector-list-comma-space-before': 'never',
    '@stylistic/selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        'ignorePseudoClasses': [
          'global'
        ]
      }
    ],
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
    '@stylistic/selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': [
      'double',
      {
        'severity': 'error'
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        'severity': 'error'
      }
    ],
    'selector-type-case': [
      'lower',
      {
        'ignoreTypes': [
          'foreignObject'
        ]
      }
    ],
    'selector-type-no-unknown': [
      true,
      {
        'severity': 'error',
        'ignoreTypes': [
          'foreignObject'
        ]
      }
    ],
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    '@stylistic/string-quotes': [
      'single',
      {
        'avoidEscape': true
      }
    ],
    '@stylistic/unit-case': 'lower',
    'unit-no-unknown': [
      true,
      {
        'severity': 'error'
      }
    ],
    'value-keyword-case': 'lower',
    '@stylistic/value-list-comma-newline-after': 'always-multi-line',
    '@stylistic/value-list-comma-newline-before': 'never-multi-line',
    '@stylistic/value-list-comma-space-after': 'always',
    '@stylistic/value-list-comma-space-before': 'never',
    '@stylistic/value-list-max-empty-lines': 0
  }
};
