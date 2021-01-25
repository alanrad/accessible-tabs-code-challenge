module.exports = {
  root: true,
  settings: {
    react: {
      createClass: 'createReactClass', // default to "createReactClass"
      pragma: 'React',  // Pragma to use, default to "React"
      version: 'detect'
    },
    propWrapperFunctions: [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        'forbidExtraProps',
        {
          property: 'freeze',
          object: 'Object'
        },
        {
          property: 'myFavoriteWrapper'
        }
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      {
        name: 'Link', 
        linkAttribute: 'to'
      }
    ]
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  env: {
    'es6': true,
    'node': true,
    'jest/globals': true
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  overrides: [
    {
        "files": ["**/*.tsx"],
        "rules": {
            "react/prop-types": "off"
        }
    }
  ]
};