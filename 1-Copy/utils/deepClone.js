/**
 * Returns a deep clone of an object
 *
 * **Note:** This function is an example of how we can deep-clone
 * without using any external libraries, based on the object properties' type.
 * It does not cover all data types, and can of course be simplified or extended to fit the needs.
 *
 * @param {Object} target The source object.
 * @param {Map} map The map.
 * @returns {Object} The deep clone of an object.
 */
function deepClone(target, map = new WeakMap()) {
  // clone primitive types
  if (typeof target !== "object" || target === null) {
    return target;
  }

  const type = toRawType(target);
  let clonedTarget = null;

  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, clonedTarget);

  switch (type) {
    case "Boolean":
    case "Number":
    case "String":
    case "Error":
    case "Date":
      return new target.constructor(target);
    case "RegExp":
      return cloneRegExp(target);
    case "Symbol":
      return cloneSymbol(target);
    case "Function":
      return target;
    case "Set":
      return cloneSet(target, map);
    case "Map":
      return cloneMap(target, map);
    case "Array":
      return cloneArray(target, map);
    case "Object":
      return cloneObject(target, map);
    default:
      return clonedTarget;
  }
}


/**
 * Returns the type of the value
 * @param {*} value The source value.
 * @returns {string} Returns the type of the value.
 */
function toRawType (value) {
  let _toString = Object.prototype.toString;
  let str = _toString.call(value);
  
  return str.slice(8, -1);
}


/**
 * Clones a Symbol
 * @param {Symbol} target The source Symbol.
 * @returns {Symbol} Returns the cloned Symbol.
 */
function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target));
}


/**
 * Clones a RegExp
 * @param {RegExp} target The source RegExp.
 * @returns {RegExp} Returns the cloned RegExp
 */
function cloneRegExp(target) {
  const reFlags = /\w*$/;
  const result = new target.constructor(target.source, reFlags.exec(target));
  result.lastIndex = target.lastIndex;

  return result;
}


/**
 * Clones a Set
 * @param {Set} target The source Set.
 * @param {Map} map
 * @returns {Set} Returns the cloned Set
 */
function cloneSet(target, map) {
  let clonedTarget = new Set();

  target.forEach(value => {
    clonedTarget.add(deepClone(value, map));
  });

  return clonedTarget;
}


/**
 * Clones a Map
 * @param {Map} target The source Map.
 * @param {Map} map
 * @returns {Map} Returns the cloned Map
 */
function cloneMap(target, map) {
  let clonedTarget = new Map();

  target.forEach((value, key) => {
    clonedTarget.set(key, deepClone(value, map));
  });

  return clonedTarget;
}


/**
 * Clones an array
 * @param {Array} target The source array.
 * @param {Map} map
 * @returns {Object} Returns the cloned array
 */
function cloneArray(target, map) {
  let clonedTarget = new Array();

  forEach(target, (value, index) => {
    clonedTarget[index] = deepClone(value, map);
  });

  return clonedTarget;
}


/**
 * Clones an object
 * @param {Object} target The source object.
 * @param {Map} map
 * @returns {Object} Returns the cloned object
 */
function cloneObject(target, map) {
  let clonedTarget = new Object();

  forEach(Object.keys(target), (key, index) => {
    clonedTarget[key] = deepClone(target[key], map);
  });

  return clonedTarget;
}


/**
 * A well performing alternative for traversing arrays
 * @param {Array} array The array we want to parse.
 * @param {Function} iteratee Callback that handles the iteratee.
 */
function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;

  while (++index < length) {
    iteratee(array[index], index);
  }
}