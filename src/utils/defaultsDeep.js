import isObject from 'isobject';
import forOwn from 'for-own';

function defaultsDeep(target, objects) {
  target = target || {};

  function copy(target, current) {
    forOwn(current, function(value, key) {
      if (key === '__proto__') {
        return;
      }

      var val = target[key];
      // add the missing property, or allow a null property to be updated
      if (val == null) {
        target[key] = value;
      } else if (isObject(val) && isObject(value)) {
        defaultsDeep(val, value);
      }
    });
  }

  var len = arguments.length,
    i = 0;
  while (i < len) {
    var obj = arguments[i++];
    if (obj) {
      copy(target, obj);
    }
  }
  return target;
}

export default defaultsDeep;
