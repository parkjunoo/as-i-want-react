module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'space-infix-ops': ['error', { int32Hint: false }],
    'no-useless-escape': 'off',
    'no-empty-pattern': 'off',
    'max-len': 'off',
  },
};
