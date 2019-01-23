module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    globals: {
        'm': true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    "plugins": [
      "react",
    ],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 2],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-unused-vars': ['warn'],
        'no-console': 0,
        'object-curly-spacing': ["error", "always"],
        'rest-spread-spacing': ["error", "never"],
        'react/react-in-jsx-scope': 0,
        'react/jsx-uses-vars': 0,
        'react/jsx-uses-react': 0,
        'react/no-unknown-property': 0,
    },
};