import PropTypes from 'prop-types';

const react = require('react');

// Resolution for requestAnimationFrame not supported in jest error :
// https://github.com/facebook/react/issues/9102#issuecomment-283873039
global.window = global;
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node');
};

Object.assign(react, {
  PropTypes
});

module.exports = react;
