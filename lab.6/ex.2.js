'use strict';

const compose = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('Expected a function');
    }
  }

  const handlers = [];

  const composed = (x) => {
    let value = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        value = fns[i](value);
      } catch (error) {
        handlers.forEach(h => h(error));
        return undefined;
      }
    }
    return value;
  };

  composed.on = (event, callback) => {
    if (event === 'error' && typeof callback === 'function') {
      handlers.push(callback);
    }
    return composed;
  };

  return composed;
};

module.exports = compose;
