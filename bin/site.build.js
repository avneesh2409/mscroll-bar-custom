/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/tabzmania.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/lib/config.js":
/*!***************************!*\
  !*** ./src/lib/config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Config {
    static set(_config) {
        // protection
        _config.override = _config.override || {};
        _config.params = _config.params || {
            co: "", installday: "", uid: "", barcode: Config.defaults.publisherId + "0000000000",
            extensionid: ""
        };

        // Override config params
        if (_config.name) {
            Config.theme.name = _config.name;
        }

        if (_config.images) {
            Config.theme.images = _config.images;
        }

        if (_config.override.widgets) {
            Config.theme.loadWidgets = _config.override.widgets;
        }

        if (_config.params.uid) {
            Config.stats.uid = _config.params.uid;
        }

        if (_config.params.barcode) {
            Config.stats.barcode = _config.params.barcode;
        }

        if (_config.params.co) {
            Config.stats.co = _config.params.co;
        }

        if (_config.params.installday) {
            Config.stats.installday = _config.params.installday;
        }

        if (_config.params.name) {
            Config.extension.name = _config.params.name;
        }

        if (_config.params.extensionid) {
            Config.extension.extensionId = _config.params.extensionid;
        }
    }
}

Config.settings = {
    debug: true
};

Config.tourStepsOrder = ['Search', 'Suggested Sites', 'Custom Sites', 'Clock', 'Weather', 'Todo', 'Settings'];

Config.theme = {
    name: "Tabzmania New Tab",
    images: ['https://images.pexels.com/photos/129105/pexels-photo-129105.jpeg'],
    loadWidgets: ['search', 'background-picker', 'todo', 'clock', 'weather', 'suggested-sites', 'custom-sites', 'settings-ui']
};
Config.search = {
    schema: "https",
    searchDomain: "feed.tabzmania.com",
    searchParams: "publisherid={PID}&publisher={Publisher}&searchtype={SearchType}",
    searchType: "st"
};
Config.geo = {
    url: "https://api.sendmepixel.com/geo/country"
};
Config.stats = {
    googleAnalyticsUrl: 'https://www.google-analytics.com/collect',
    googleAnalyticsId: '',
    pixelDomain: '//pixel.pxcollect.com'
};
Config.extension = {
    name: "tbz_theme_default"
};
Config.defaults = {
    publisherName: 'tabzmania',
    publisherId: 52502
};

/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),

/***/ "./src/lib/logger.js":
/*!***************************!*\
  !*** ./src/lib/logger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logger; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/lib/config.js");


class Logger {
    static log(msg) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].settings.debug) {
            console.log(msg);
        }
    }
};

/***/ }),

/***/ "./src/lib/modules/http.js":
/*!*********************************!*\
  !*** ./src/lib/modules/http.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Http; });
class Http {
  static GET(url, callback = () => {}) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          callback(xhr.responseText);
        } else {
          // error
          callback();
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }

  static getJson(url, callback = () => {}) {
    Http.GET(url, data => {
      let obj = {};
      try {
        obj = JSON.parse(data);
      } catch (e) {}
      callback(obj);
    });
  }

  static POST(url, body = "", callback = () => {}) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          callback(xhr.responseText);
        } else {
          // error
          callback();
        }
      }
    };
    xhr.open("POST", url, true);
    xhr.send(body);
  }
}

/***/ }),

/***/ "./src/lib/modules/localization-manager.js":
/*!*************************************************!*\
  !*** ./src/lib/modules/localization-manager.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalizationManager; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./src/lib/logger.js");


class LocalizationManager {
  init() {
    _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log('LocalizationManager::init() called');
  }
}

/***/ }),

/***/ "./src/lib/modules/search-utils.js":
/*!*****************************************!*\
  !*** ./src/lib/modules/search-utils.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchUtils; });
class SearchUtils {
    static buildSearchUrl(schema, domain, params, values) {
        let url = `${schema}://${domain}/?${params}`;
        for (let key in values) {
            url = url.replace(`{${key}}`, encodeURIComponent(values[key] || ""));
        }
        return url;
    }
}

/***/ }),

/***/ "./src/lib/modules/settings-manager.js":
/*!*********************************************!*\
  !*** ./src/lib/modules/settings-manager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsManager; });
/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage-manager */ "./src/lib/modules/storage-manager.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stats */ "./src/lib/stats.js");



class SettingsManager {
  constructor() {
    this.settings = JSON.parse(_storage_manager__WEBPACK_IMPORTED_MODULE_0__["default"].get(_storage_manager__WEBPACK_IMPORTED_MODULE_0__["default"].keys.settings) || '{}');
  }

  register(section, property, defaultvalue, settingsObject, callback) {
    this.registerSection(section);
    this.registerProperty(section, property, { default: defaultvalue, obj: settingsObject, callback: callback });

    if (settingsObject) settingsObject.setSettingsKey(this, `${section}.${property}`);
  }

  registerSection(section) {
    if (!this.settings[section]) {
      this.settings[section] = {};
      this.store();
    }
  }

  registerProperty(section, property, settings) {
    if (!this.settings[section][property]) {
      this.settings[section][property] = {
        value: typeof settings.default === 'undefined' ? "" : settings.default,
        settings: settings
      };
    } else {
      this.settings[section][property].settings = settings;
    }

    // TODO: validate value

    this.store();
  }

  store() {
    _storage_manager__WEBPACK_IMPORTED_MODULE_0__["default"].set(_storage_manager__WEBPACK_IMPORTED_MODULE_0__["default"].keys.settings, this.purifySettings());
  }

  purifySettings() {
    let copy = {};
    for (let section in this.settings) {
      copy[section] = {};
      for (let property in this.settings[section]) {
        copy[section][property] = { value: this.settings[section][property].value };
      }
    }
    return JSON.stringify(copy);
  }

  getAll() {
    return this.settings;
  }

  get(key) {
    if (key.indexOf('.') === -1) {
      return undefined;
    }
    let section = key.split('.')[0];
    if (!this.settings[section]) {
      return undefined;
    }

    let property = key.split('.')[1];
    if (!this.settings[section][property]) {
      return undefined;
    }

    return this.settings[section][property].value;
  }

  set(key, value) {
    if (key.indexOf('.') === -1) {
      return undefined;
    }
    let section = key.split('.')[0];
    if (!this.settings[section]) {
      return undefined;
    }

    let property = key.split('.')[1];
    if (!this.settings[section][property]) {
      return undefined;
    }

    this.settings[section][property].value = value;

    _stats__WEBPACK_IMPORTED_MODULE_1__["default"].event("tbz_settingchanged", section, property, value);

    this.store();
    if (this.settings[section][property].settings.callback) {
      this.settings[section][property].settings.callback(section, property, value);
    }
    return value;
  }
}

/***/ }),

/***/ "./src/lib/modules/settings/settings-checkbox.js":
/*!*******************************************************!*\
  !*** ./src/lib/modules/settings/settings-checkbox.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsCheckbox; });
/* harmony import */ var _settings_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-object */ "./src/lib/modules/settings/settings-object.js");


class SettingsCheckbox extends _settings_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(option) {
    super();
    this.option = option;
  }

  render() {
    this.obj = $('<form> </form>');
    this.obj.append($(`<div class="checkbox"><label class="checkmark-label" for="${this.key}">${this.option.name} <input type="checkbox" name="${this.key}" id="${this.key}"> <span class="checkmark"></span></label></div>`));
    this.updateUI();

    // handle clickthis.
    this.obj.find('input[type=checkbox]').click(e => this.updateValue($(e.target).prop('checked')));

    return this.obj;
  }

  updateUI() {
    if (this.obj) {
      this.obj.find('input').prop('checked', this.value);
      this.obj.find('.checkmark-label').css('color', this.value ? '#0DFF92' : '');
    }
  }
}

/***/ }),

/***/ "./src/lib/modules/settings/settings-input.js":
/*!****************************************************!*\
  !*** ./src/lib/modules/settings/settings-input.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsInput; });
/* harmony import */ var _settings_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-object */ "./src/lib/modules/settings/settings-object.js");


class SettingsInput extends _settings_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super();
    this.customLinks = options;
  }
  updateCustomList() {
    const fetchLink = this.customLinks;
    const customlist = $(`#content-1`);
    customlist.html("");
    $.each(fetchLink, (index, value) => {
      customlist.append(`<p title="Click to remove" id=${index}>${value}<span class="close1">&times;</span></p>`);
    });
    $('.close1').click(e => this.remove(e));
  }
  render() {
    const _this = this;
    const scroll = $(`<div id="examples">
    <div id="content-1" class="content">
    <p>;djfsdkljgldjkgddfklgljkdjglkd</p>
    <p>;djfsdkljgldjkgddfklgljkdjglkd</p>
    </div>
	</div>`);
    $.each(this.customLinks, function (index, value) {
      customlist.append(`<p title="Click to remove" id="${index}">${value} <span class="close1">&times;</span></p>`);
    });
    this.list = scroll;
    this.obj = $(`<div class="input"><label>URL</label><input id="inputdata" type="text" /></div>`);
    this.$button = $(`<div class="settings-input-button">Add</div>`).appendTo(this.obj).click(e => {
      _this.AddLinks(this.obj.find(`#inputdata`).val());
    });

    this.obj.prepend(this.list);
    $('.close1').click(e => this.remove(e));
    this.obj.find(`#${this.id}`).val();
    return this.obj;
  }

  remove(event) {
    event.target.parentNode.parentNode.removeChild(e.target.parentNode);
    this.customLinks.splice(parseInt(event.target.parentNode.id), 1);
    this.updateCustom(this.customLinks);
    this.updateCustomList();
    this.updateCustomLink();
  }

  validateUrl(url) {
    let pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(pattern);
    if (url.match(regex)) {
      this.url = url.slice(url.search(/\.?[a-z]+\./i), url.search(/\./i));
      return true;
    }
    return false;
  }

  AddLinks(val) {
    const _this = this;
    if (this.validateUrl(val) && this.url) {
      this.customLinks.push({ name: this.url, url: val, img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/customlink.png' });
      this.updateCustom(this.customLinks);
      this.obj.find(`#inputdata`).val('');
      _this.updateCustomList();
      _this.updateCustomLink();
    } else {
      alert("Please enter valid Url !");
    }
  }

  updateCustomLink() {
    const savedLinks = this.customLinks;
    let check = document.querySelector("#custom-sites");
    if (check) {
      check.remove(check);
    }
    let prev = document.createElement("DIV");
    prev.id = "custom-sites";
    prev.className = "widget custom-sites-widget";
    savedLinks.map(data => {
      let el = document.createElement("DIV");
      el.className = 'custom-sites-item';
      el.innerHTML = `<img class='custom-sites-item-icon' src='${data.img}' /><div class='custom-sites-item-label'>${data.name}</div>`;
      el.addEventListener('click', () => {
        Stats.event('tbz_suggestsite_click', data.name, data.url);
        window.open(data.url, '_blank');
      });
      prev.appendChild(el);
    });
    $('.s-search').append(prev);
  }
}

/***/ }),

/***/ "./src/lib/modules/settings/settings-keys.js":
/*!***************************************************!*\
  !*** ./src/lib/modules/settings/settings-keys.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class SettingsKeys {}

SettingsKeys.Visible = 'Visible';
SettingsKeys.Icon = "Icon";

/* harmony default export */ __webpack_exports__["default"] = (SettingsKeys);

/***/ }),

/***/ "./src/lib/modules/settings/settings-object.js":
/*!*****************************************************!*\
  !*** ./src/lib/modules/settings/settings-object.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsObject; });
class SettingsObject {
  setSettingsKey(settings, key) {
    this.settings = settings;
    this.key = key;
    this.value = this.settings.get(this.key);
  }

  updateCustom(value) {
    const current = this.settings.get(this.key);
    if (current !== value.url) this.settings.set(this.key, [...value]);
    this.value = value;
    if (this.updateUI) this.updateUI();
  }

  getCustom() {
    return this.settings.get(this.key);
  }

  updateValue(value) {
    const current = this.settings.get(this.key);
    if (current !== value) this.settings.set(this.key, value);
    this.value = value;

    if (this.updateUI) this.updateUI();
  }

  render() {
    return '** REMOVE **' + this.value;
  }
}

/***/ }),

/***/ "./src/lib/modules/settings/settings-radios.js":
/*!*****************************************************!*\
  !*** ./src/lib/modules/settings/settings-radios.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsRadios; });
/* harmony import */ var _settings_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-object */ "./src/lib/modules/settings/settings-object.js");


class SettingsRadios extends _settings_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super();
    this.options = options;
  }

  render() {
    this.obj = $('<form> </form>');
    for (let option in this.options) {
      this.obj.append($(`<div class="radio"><input type="radio" name="${this.key}" id="${option}" value="${option}"><label for="${option}">${this.options[option]}</label></div>`));
    }
    this.updateUI();

    // handle click
    this.obj.find('input[type=radio]').click(e => this.updateValue($(e.target).val()));

    return this.obj;
  }

  updateUI() {
    if (this.obj) this.obj.find(`input#${this.value}`).prop('checked', true);
  }
}

/***/ }),

/***/ "./src/lib/modules/settings/settings-visible-switch.js":
/*!*************************************************************!*\
  !*** ./src/lib/modules/settings/settings-visible-switch.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsVisibleSwitch; });
/* harmony import */ var _settings_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-object */ "./src/lib/modules/settings/settings-object.js");


class SettingsVisibleSwitch extends _settings_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  render() {
    this.obj = $('<button class="visability-switch"> </button>');
    this.updateUI();

    // handle click
    this.obj.click(() => this.updateValue(!this.value));
    return this.obj;
  }

  updateUI() {
    if (this.value) {
      this.obj.addClass('on');
    } else {
      this.obj.removeClass('on');
    }
  }
}

/***/ }),

/***/ "./src/lib/modules/storage-manager.js":
/*!********************************************!*\
  !*** ./src/lib/modules/storage-manager.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StorageManager; });
class StorageManager {
  static get(key) {
    return localStorage.getItem(key);
  }

  static set(key, value) {
    localStorage.setItem(key, value);
  }

  static get keys() {
    return {
      deviceId: 'id',
      country: 'co',
      publisherId: 'pid',
      subId: 'subid',
      barcodeId: 'br',
      installDate: 'dt',

      settings: 'conf'
    };
  }
}

/***/ }),

/***/ "./src/lib/modules/tabzmania-data.js":
/*!*******************************************!*\
  !*** ./src/lib/modules/tabzmania-data.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabzmaniaData; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./src/lib/logger.js");
/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-manager */ "./src/lib/modules/storage-manager.js");



class TabzmaniaData {
    static init(callback) {
        _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("TabzmaniaData::init() called");
        if (callback) callback();
    }

    get deviceId() {
        if (!this._deviceId) {
            this._deviceId = _storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].get(_storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].keys.deviceId);
        }
        return this._deviceId;
    }

    get country() {
        if (!this._country) {
            this._country = _storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].get(_storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].keys.country) || 'TJ';
        }
        return this._country;
    }

    get installDate() {
        if (!this._installDate) {
            this._installDate = _storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].get(_storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].keys.installDate);
        }
        return this._installDate;
    }

    get barcodeId() {
        if (!this._barcodeId) {
            this._barcodeId = _storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].get(_storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].keys.barcodeId);
        }
        return this._barcodeId;
    }

    get publisherId() {
        if (!this._publisherId) {
            this._publisherId = _storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].get(_storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].keys.publisherId);
        }
        return this._publisherId;
    }

    get subId() {
        if (!this._subId) {
            this._subId = _storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].get(_storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].keys.subId);
        }
        return this._subId;
    }
}

/***/ }),

/***/ "./src/lib/modules/tour-manager.js":
/*!*****************************************!*\
  !*** ./src/lib/modules/tour-manager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TourManager; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/lib/config.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stats */ "./src/lib/stats.js");
/* harmony import */ var _settings_settings_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");




class TourManager {
	static initTour(widgets) {
		if (JSON.parse(localStorage.getItem('tour-running'))) return;
		localStorage.setItem('tour-running', 'true');
		function endTour(el, message) {
			_stats__WEBPACK_IMPORTED_MODULE_1__["default"].event(message, _config__WEBPACK_IMPORTED_MODULE_0__["default"].theme.name);
			el.parentNode.removeChild(el);
			localStorage.setItem('tour', 'true');
			localStorage.setItem('tour-running', 'false');
		}

		const tourStepsArray = [];

		for (let widgetName of _config__WEBPACK_IMPORTED_MODULE_0__["default"].tourStepsOrder) {
			const widget = widgets.find(widget => widget.name === widgetName);
			try {
				if (widget.getSettings(_settings_settings_keys__WEBPACK_IMPORTED_MODULE_2__["default"].Visible)) {
					if (Array.isArray(widget.tourStepData)) {
						for (let item of widget.tourStepData) {
							tourStepsArray.push(item);
						}
					} else {
						tourStepsArray.push(widget.tourStepData);
					}
				}
			} catch (e) {
				localStorage.setItem('tour-running', 'false');
			}
		}

		if (tourStepsArray.length > 0) {
			const $tourOverlay = document.createElement('DIV');
			$tourOverlay.classList.add('tour-overlay');
			$tourOverlay.style.zIndex = '999998';
			$tourOverlay.style.position = 'fixed';
			$tourOverlay.style.width = '100%';
			$tourOverlay.style.height = '100%';
			$tourOverlay.style.background = 'rgba(0,0,0,0.6)';
			const tour = {
				id: "tabzmaniaTour",
				steps: tourStepsArray,
				onEnd: () => {
					endTour($tourOverlay, 'tbz_tour_done');
				},
				onClose: () => {
					endTour($tourOverlay, 'tbz_tour_skipped');
				}
			};
			document.body.appendChild($tourOverlay);
			hopscotch.startTour(tour);
		} else {
			localStorage.setItem('tour-running', 'false');
		}
	}
}

/***/ }),

/***/ "./src/lib/modules/utils.js":
/*!**********************************!*\
  !*** ./src/lib/modules/utils.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
class Utils {
  static padLeft(nr, n, str) {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
  }
}

/***/ }),

/***/ "./src/lib/modules/widgets-manager.js":
/*!********************************************!*\
  !*** ./src/lib/modules/widgets-manager.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WidgetsManager; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./src/lib/logger.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/lib/config.js");
/* harmony import */ var _widgets_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/search */ "./src/lib/widgets/search.js");
/* harmony import */ var _widgets_clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/clock */ "./src/lib/widgets/clock.js");
/* harmony import */ var _widgets_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/weather */ "./src/lib/widgets/weather.js");
/* harmony import */ var _widgets_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/todo */ "./src/lib/widgets/todo.js");
/* harmony import */ var _widgets_background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/background */ "./src/lib/widgets/background.js");
/* harmony import */ var _widgets_settings_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/settings-ui */ "./src/lib/widgets/settings-ui.js");
/* harmony import */ var _widgets_insta_background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/insta-background */ "./src/lib/widgets/insta-background.js");
/* harmony import */ var _widgets_suggested_sites__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/suggested-sites */ "./src/lib/widgets/suggested-sites.js");
/* harmony import */ var _widgets_custom_sites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/custom-sites */ "./src/lib/widgets/custom-sites.js");












const widgetsMapping = {
	'search': _widgets_search__WEBPACK_IMPORTED_MODULE_2__["default"],
	'clock': _widgets_clock__WEBPACK_IMPORTED_MODULE_3__["default"],
	'weather': _widgets_weather__WEBPACK_IMPORTED_MODULE_4__["default"],
	'todo': _widgets_todo__WEBPACK_IMPORTED_MODULE_5__["default"],
	'background-picker': _widgets_background__WEBPACK_IMPORTED_MODULE_6__["default"],
	'insta-background-picker': _widgets_insta_background__WEBPACK_IMPORTED_MODULE_8__["default"],
	'suggested-sites': _widgets_suggested_sites__WEBPACK_IMPORTED_MODULE_9__["default"],
	'custom-sites': _widgets_custom_sites__WEBPACK_IMPORTED_MODULE_10__["default"],
	'settings-ui': _widgets_settings_ui__WEBPACK_IMPORTED_MODULE_7__["default"]
};

class WidgetsManager {
	constructor(data, settings) {
		this.data = data;
		this.settings = settings;
		this.widgets = [];
	}

	init() {
		_logger__WEBPACK_IMPORTED_MODULE_0__["default"].log('WidgetsManager::init() called');

		for (let widget of _config__WEBPACK_IMPORTED_MODULE_1__["default"].theme.loadWidgets) {
			if (widgetsMapping[widget]) {
				this.widgets.push(new widgetsMapping[widget](this));
			}
		}
	}
}

/***/ }),

/***/ "./src/lib/stats.js":
/*!**************************!*\
  !*** ./src/lib/stats.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/lib/config.js");
/* harmony import */ var _modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/http */ "./src/lib/modules/http.js");



class Stats {

    static event(eventName, data1, data2, data3) {
        if (eventName) {
            sendEvent({
                event: eventName,
                data1: data1 || "",
                data2: data2 || "",
                data3: data3 || ""
            });
        }
    }
};

function sendEvent(data) {
    const extName = _config__WEBPACK_IMPORTED_MODULE_0__["default"].theme.name || _config__WEBPACK_IMPORTED_MODULE_0__["default"].extension.name;
    _modules_http__WEBPACK_IMPORTED_MODULE_1__["default"].GET(`https://${_config__WEBPACK_IMPORTED_MODULE_0__["default"].stats.pixelDomain}/Pixel.aspx?name=${extName}&type=${data.event}&data1=${data.data1}&data2=${data.data2}&data3=${data.data3}&co=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].stats.co}&installdate=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].stats.installday}&barcode=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].stats.barcode}&userid=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].stats.uid}&entity=26&`);
}

/***/ }),

/***/ "./src/lib/tabzmania.js":
/*!******************************!*\
  !*** ./src/lib/tabzmania.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabzmania; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/lib/config.js");
/* harmony import */ var _modules_settings_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/settings-manager */ "./src/lib/modules/settings-manager.js");
/* harmony import */ var _modules_widgets_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/widgets-manager */ "./src/lib/modules/widgets-manager.js");
/* harmony import */ var _modules_localization_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/localization-manager */ "./src/lib/modules/localization-manager.js");
/* harmony import */ var _modules_tabzmania_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabzmania-data */ "./src/lib/modules/tabzmania-data.js");
/* harmony import */ var _modules_tour_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tour-manager */ "./src/lib/modules/tour-manager.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats */ "./src/lib/stats.js");







class Tabzmania {
	constructor(_config) {
		_config__WEBPACK_IMPORTED_MODULE_0__["default"].set(_config || {});
		_modules_tabzmania_data__WEBPACK_IMPORTED_MODULE_4__["default"].init(() => {
			this.init();
		});
	}

	init() {
		if (this.isInitialised) return;

		this.data = new _modules_tabzmania_data__WEBPACK_IMPORTED_MODULE_4__["default"]();
		this.settings = new _modules_settings_manager__WEBPACK_IMPORTED_MODULE_1__["default"]();
		this.widgets = new _modules_widgets_manager__WEBPACK_IMPORTED_MODULE_2__["default"](this.data, this.settings);
		this.localization = new _modules_localization_manager__WEBPACK_IMPORTED_MODULE_3__["default"]();

		this.localization.init();
		this.widgets.init();

		let fadeInterval,
		    moving = false;

		setTimeout(() => {
			$('.widget, .logo-img, .footer, .s-search, .settings').css('opacity', '0');
		}, 3000);
		$(window).mousemove(fadeWidgets);
		$(window).keydown(fadeWidgets);

		localStorage.setItem('tour-running', 'false');

		if (!localStorage.getItem('tour')) {
			_modules_tour_manager__WEBPACK_IMPORTED_MODULE_5__["default"].initTour(this.widgets.widgets);
		}

		_stats__WEBPACK_IMPORTED_MODULE_6__["default"].event('pageload_tbz', _config__WEBPACK_IMPORTED_MODULE_0__["default"].theme.name);

		function fadeWidgets() {
			clearInterval(fadeInterval);
			moving = true;
			$('.widget, .logo-img, .footer, .s-search, .settings').css('opacity', '');
			setTimeout(() => moving = false, 200);
			fadeInterval = setInterval(() => {
				if (!moving) {
					clearInterval(fadeInterval);
					$('.widget, .logo-img, .footer, .s-search, .settings').css('opacity', '0');
				}
			}, 3000);
		}
	}
}

const tabzmania = new Tabzmania(window._config);

/***/ }),

/***/ "./src/lib/widget.js":
/*!***************************!*\
  !*** ./src/lib/widget.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Widget; });
/* harmony import */ var _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");


class Widget {
  constructor(name, manager, elementType) {
    this.name = name;
    this.manager = manager;
    this.data = this.manager.data;
    this.settings = this.manager.settings;
    this.widgetElement = document.createElement(elementType || 'div');

    if (this.init) {
      this.init();
    }
    this._render();

    if (this.start) {
      this.start();
    }

    this.handleVisability(this.settings.get(`${this.name}.${_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible}`));
  }

  initSetting(key, defaultValue, settingsObject, onChangeCallback) {
    let callbacks = [];
    if (onChangeCallback) callbacks.push(onChangeCallback);
    if (settingsObject) callbacks.push((property, value) => settingsObject.updateValue(value));
    this.settings.register(this.name, key, defaultValue, settingsObject, (name, property, value) => this._settingsChanged(name, property, value, callbacks));
  }

  getSettings(key) {
    return this.settings.get(`${this.name}.${key}`);
  }

  setSettings(key, value) {
    this.settings.set(`${this.name}.${key}`, value);
  }

  _render() {
    if (!this.widgetElement) return;
    if (this.render) this.render();
  }

  _settingsChanged(name, property, value, callbacks) {

    if (property === _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible) {
      this.handleVisability(value);
    }

    for (let callback of callbacks) {
      if (callback) callback(property, value);
    }
  }

  handleVisability(value) {
    // handle visability
    if (typeof value === 'undefined' || value === true) {
      this.showWidget('');
    } else {
      this.showWidget('none');
    }
  }

  showWidget(style) {
    if (this.widgetElement) this.widgetElement.style.display = style;
  }
}

/***/ }),

/***/ "./src/lib/widgets/background.js":
/*!***************************************!*\
  !*** ./src/lib/widgets/background.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundPickerWidget; });
/* harmony import */ var _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget */ "./src/lib/widget.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/lib/config.js");
/* harmony import */ var _modules_settings_settings_radios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/settings/settings-radios */ "./src/lib/modules/settings/settings-radios.js");





class BackgroundPickerWidget extends _widget__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor(manager) {
		super('Background', manager, 'div');
	}

	init() {
		this.currentBackgroundIndex = "bgidx";
		this.bgChangeKey = "gbchnge";
		this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Icon, (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/background.png');
		this.initSetting(this.currentBackgroundIndex, 0, undefined, () => this.start());
		this.initSetting(this.bgChangeKey, "1", new _modules_settings_settings_radios__WEBPACK_IMPORTED_MODULE_3__["default"]({ '0': "No Change", '1': "Every New Tab" }));
	}

	render() {
		// render bg picker
		this.widgetElement.className = "background-picker-content widget-scroll";
		this.widgetElement.id = "bg-images";
		$('.setting-panel').append(this.widgetElement);

		$('.stn-background').click(e => {
			e.stopPropagation();

			if (!$('#bg-images').children().length > 0) {
				for (let i in _config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images) {
					const $thumbContainer = $('<div class="thumb loading"></div>').appendTo($(this.widgetElement));
					const thumbImage = new Image();
					thumbImage.onload = () => $thumbContainer.removeClass('loading');
					thumbImage.src = _config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images[i];
					$(thumbImage).attr('index', i).click(e => {
						this.setSettings(this.currentBackgroundIndex, $(e.target).attr('index'));
					}).appendTo($thumbContainer);
					//$(this.widgetElement).append($(`<div class="thumb"><img src="${Config.theme.images[i]}" index='${i}' alt="Image"></div>`))
				}
			}
			const $settings = $('.settings');
			if ($settings.hasClass('settings-open') && $settings.hasClass('background-open')) {
				$settings.removeClass('settings-open');
			} else {
				$settings.addClass('background-open');
				$settings.addClass('settings-open');
			}
		});

		let index = this.getSettings(this.currentBackgroundIndex);
		if (this.getSettings(this.bgChangeKey) === "1") {
			this.setSettings(this.currentBackgroundIndex, index + 1);
		}
	}

	start() {
		if (_config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images.length === 0) return;

		let index = this.getSettings(this.currentBackgroundIndex);
		if (!_config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images[index]) {
			this.setSettings(this.currentBackgroundIndex, 0);
		} else {
			$('body').css('background-image', (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/test-bg.png');
			const img = new Image();
			img.onload = () => $('body').css('background-image', `url('${_config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images[index]}')`);
			img.src = _config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images[index];
		}
	}
}

/***/ }),

/***/ "./src/lib/widgets/clock.js":
/*!**********************************!*\
  !*** ./src/lib/widgets/clock.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClockWidget; });
/* harmony import */ var _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget */ "./src/lib/widget.js");
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/utils */ "./src/lib/modules/utils.js");
/* harmony import */ var _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/settings/settings-visible-switch */ "./src/lib/modules/settings/settings-visible-switch.js");
/* harmony import */ var _modules_settings_settings_radios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/settings/settings-radios */ "./src/lib/modules/settings/settings-radios.js");






class ClockWidget extends _widget__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor(manager) {
		super("Clock", manager, 'div');
		this.tourStepData = {
			target: 'clock',
			placement: 'top',
			title: 'Clock',
			content: 'Accurate date and time based on your current location.',
			xOffset: -152,
			arrowOffset: 236,
			onShow: () => $('.bottom-widgets').css('zIndex', 999999),
			onNext: () => $('.bottom-widgets').css('zIndex', '')
		};
	}

	init() {
		this.tick_interval = null;
		this.timeFormatKey = "TimeFormat";

		this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Icon, (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/clock.png');
		this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible, true, new _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_3__["default"]());
		this.initSetting(this.timeFormatKey, "24", new _modules_settings_settings_radios__WEBPACK_IMPORTED_MODULE_4__["default"]({
			'12': "12 hours",
			'24': "24 hours"
		}), () => this.tick());
	}

	render() {
		this.widgetElement.id = "clock";
		this.widgetElement.className = "widget";

		$('.bottom-widgets').append(this.widgetElement);

		$("#clock").on('click', e => {
			e.stopPropagation();
			if (this.getSettings(this.timeFormatKey) === "12") {
				this.setSettings(this.timeFormatKey, "24");
			} else {
				this.setSettings(this.timeFormatKey, "12");
			}
		});
	}

	start() {
		this.tick();
	}

	tick() {
		clearInterval(this.tick_interval);
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();

		let dd;
		if (this.getSettings(this.timeFormatKey) === "12") {
			dd = hours >= 12 ? 'pm' : 'am';
			hours = hours > 12 ? hours - 12 : hours;
		}
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		let year = date.getFullYear();
		let month = date.getMonth();
		let day = date.getDay();

		let _date = days[day] + ', ' + months[month] + ' ' + date.getDate() + ' ' + year;

		let clock = $("#clock");
		let dateformat = dd ? dd.toLocaleUpperCase() : "";
		let html = `
                <div class='widget-top clock-display'>
                  ${_modules_utils__WEBPACK_IMPORTED_MODULE_2__["default"].padLeft(hours, 2)}:${_modules_utils__WEBPACK_IMPORTED_MODULE_2__["default"].padLeft(minutes, 2)} <span class='small'>${dateformat}</span>
                </div>
                <div class='widget-bottom date-display'>
                    ${_date}
                </div>`;

		clock.html(html);
		this.tick_interval = setInterval(() => this.tick(), 2000);
	}
}

/***/ }),

/***/ "./src/lib/widgets/custom-sites.js":
/*!*****************************************!*\
  !*** ./src/lib/widgets/custom-sites.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuggestedSitesWidget; });
/* harmony import */ var _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget */ "./src/lib/widget.js");
/* harmony import */ var _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/settings/settings-visible-switch */ "./src/lib/modules/settings/settings-visible-switch.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stats */ "./src/lib/stats.js");
/* harmony import */ var _modules_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/http */ "./src/lib/modules/http.js");
/* harmony import */ var _modules_settings_settings_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/settings/settings-input */ "./src/lib/modules/settings/settings-input.js");







class SuggestedSitesWidget extends _widget__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor(manager) {
		super("CustomQuickLinks", manager, 'div');
		this.tourStepData = {
			target: 'custom-sites',
			placement: 'top',
			title: 'custom Sites',
			content: 'Check out these useful websites.',
			xOffset: -152,
			arrowOffset: 236,
			onShow: () => $('#search').css('zIndex', 999999),
			onNext: () => $('#search').css('zIndex', '')
		};
	}

	init() {
		this.customListData = "CustomList";
		this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Icon, (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites.png');
		this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible, true, new _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_2__["default"]());
		let localdata = this.getSettings(this.customListData);
		if (localdata) {
			this.initSetting(this.customListData, localdata, new _modules_settings_settings_input__WEBPACK_IMPORTED_MODULE_5__["default"](localdata));
		} else {
			this.initSetting(this.customListData, [], new _modules_settings_settings_input__WEBPACK_IMPORTED_MODULE_5__["default"]());
		}
	}

	loadStaticLink() {
		return this.getSettings(this.customListData);
	}

	loadSiteLinkData() {
		return new Promise((resolve, reject) => {
			_modules_http__WEBPACK_IMPORTED_MODULE_4__["default"].getJson(`https://api.sendmepixel.com/suggest/tiles?c=1&sub=TBZ`, tilesData => {
				let arr = [];
				const pageSize = 10;
				if (arr.length != pageSize) {
					const leftlink = pageSize - arr.length;
					$.each(this.loadStaticLink().slice(0, leftlink), function (key, value) {
						arr.push({
							"name": value.name, "url": value.url, "img": value.img
						});
					});
				}
				resolve(arr);
			});
		});
	}
	SuggestedLinks() {
		this.widgetElement.id = "custom-sites";
		this.widgetElement.className = "widget custom-sites-widget";
		this.suggestedSites = [];
		this.loadSiteLinkData().then(suggestedSites => {
			suggestedSites.map(siteData => {
				const el = document.createElement("DIV");
				el.className = 'custom-sites-item';
				el.innerHTML = `<img class='custom-sites-item-icon' src='${siteData.img}' /><div class='custom-sites-item-label'>${siteData.name}</div>`;

				el.addEventListener('click', () => {
					_stats__WEBPACK_IMPORTED_MODULE_3__["default"].event('tbz_suggestsite_click', siteData.name, siteData.url);
					window.open(siteData.url, '_blank');
				});

				this.widgetElement.append(el);
			});

			$('.s-search').append(this.widgetElement);
		});
	}

	render() {
		const _this = this;
		console.log("this is render function :-", _this.settings);
		this.widgetElement.id = "custom-sites";
		this.widgetElement.className = "widget custom-sites-widget";
		this.suggestedSites = [];
		this.loadSiteLinkData().then(suggestedSites => {
			suggestedSites.map(siteData => {
				const el = document.createElement("DIV");
				el.className = 'custom-sites-item';
				el.innerHTML = `<img class='custom-sites-item-icon' src='${siteData.img}' /><div class='custom-sites-item-label'>${siteData.name}</div>`;

				el.addEventListener('click', () => {
					_stats__WEBPACK_IMPORTED_MODULE_3__["default"].event('tbz_suggestsite_click', siteData.name, siteData.url);
					window.open(siteData.url, '_blank');
				});

				this.widgetElement.append(el);
			});

			$('.s-search').append(this.widgetElement);
		});
	}

	start() {
		// this.SuggestedLinks();
	}
}

/***/ }),

/***/ "./src/lib/widgets/insta-background.js":
/*!*********************************************!*\
  !*** ./src/lib/widgets/insta-background.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstaBackgroundPickerWidget; });
/* harmony import */ var _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget */ "./src/lib/widget.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/lib/config.js");
/* harmony import */ var _modules_settings_settings_radios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/settings/settings-radios */ "./src/lib/modules/settings/settings-radios.js");





class InstaBackgroundPickerWidget extends _widget__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(manager) {
        super('Background', manager, 'div');
    }

    init() {
        const $body = $('body');
        this.currentBackgroundIndex = "bgidx";
        this.bgChangeKey = "gbchnge";
        this.instaNameKey = "instatag";
        this.instaImagesKey = "instaimages";
        this.$overlayLoader = $(`<div class="overlay-loader"><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>`);
        this.$bigImage = $(`<img class="big-image" />`).prependTo($body);
        this.$smolImage = $(`<img class="smol-image" />`).prependTo($body);
        this.$baseResourceUrl = typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource;
        this.$instaInputDialog = $(`
            <div class="insta-input-dialog">
                <div class="insta-input-dialog-title"><span class="highlight-text">Social</span> Theme</div>
                <div class="insta-input-subtitle">Enter a <span class="highlight-text">@profilename</span> or a <span class="highlight-text">#hashtag</span> below to set a social background.</div>
                <div class="insta-input-container" > 
                    <input type="text" class="insta-input" placeholder="E.g. @AdamLevine or #popmusic2018" />
                    <div class="insta-input-button">Set</div>
                </div>
                <div class="helper-text">Click the (<img src="${this.$baseResourceUrl}/images/ig_btn.png" class="helper-icon"/>) icon to refresh the images or use the backgrounds panel (<img src="${this.$baseResourceUrl}/images/bg_btn_2.png" class="helper-icon" />) to choose a new background</div>
                <div class="insta-input-close">Close</div>
            </div>
    `).appendTo($body);
        this.serviceUrl = 'https://social.tabzmania.com';
        //this.serviceUrl = 'http://localhost:49704';
        $body.append(this.$overlayLoader);
        this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Icon, this.$baseResourceUrl + '/images/background.png');
        this.initSetting(this.currentBackgroundIndex, 0, undefined, () => this.start());
        this.initSetting(this.instaImagesKey, [], undefined, () => this.start());
        this.initSetting(this.bgChangeKey, "1", new _modules_settings_settings_radios__WEBPACK_IMPORTED_MODULE_3__["default"]({ '0': "No Change", '1': "Every New Tab" }));
        $('.insta-input-close').click(() => this.$instaInputDialog.hide());
        $('.insta-input-button').click(() => {
            const $instaInput = $('.insta-input');
            const value = $instaInput.val();
            if (value.length > 0) {
                if (value.indexOf("@") === 0) {
                    this.$instaInputDialog.hide();
                    this.getImagesDataByAccount(value.slice(1)).then(imagesArr => {
                        if (imagesArr.length > 0) {
                            this.setSettings(this.instaImagesKey, imagesArr);
                            this.setSettings(this.instaNameKey, value.slice(1));
                            this.updateImageComponents(imagesArr, true);
                        } else {
                            this.updateImageComponents([this.$baseResourceUrl + "/images/wallpapers/generic-text.jpg"], true);
                        }
                    }).catch(() => this.updateImageComponents([this.$baseResourceUrl + "/images/wallpapers/generic-text.jpg"], true));
                } else if (value.indexOf("#") === 0) {
                    this.$instaInputDialog.hide();
                    this.getImagesDataByTag(value.slice(1)).then(imagesArr => {
                        if (imagesArr.length > 0) {
                            this.setSettings(this.instaImagesKey, imagesArr);
                            this.setSettings(this.instaNameKey, value.slice(1));
                            this.updateImageComponents(imagesArr, true);
                        } else {
                            this.updateImageComponents([this.$baseResourceUrl + "/images/wallpapers/generic-text.jpg"], true);
                        }
                    }).catch(() => this.updateImageComponents([this.$baseResourceUrl + "/images/wallpapers/generic-text.jpg"], true));
                } else {
                    //TODO: handle error notifcation
                }
            }
        });
    }

    render() {
        // render bg picker
        const _this = this;
        if (this.getSettings(this.instaImagesKey) && this.getSettings(this.instaImagesKey).length > 0) {
            renderCallback(this.getSettings(this.instaImagesKey));
        } else {
            this.$instaInputDialog.show();
            renderCallback([this.$baseResourceUrl + "/images/wallpapers/generic.jpg"]);
        }

        function renderCallback(imagesArr) {
            _this.start();
            _this.widgetElement.className = "background-picker-content widget-scroll";

            _this.updateImageComponents(imagesArr, false);

            $('.setting-panel').append(_this.widgetElement);

            $('.stn-background').click(e => {
                e.stopPropagation();
                const $settings = $('.settings');
                if ($settings.hasClass('settings-open') && $settings.hasClass('background-open')) {
                    $settings.removeClass('settings-open');
                } else {
                    $settings.addClass('background-open');
                    $settings.addClass('settings-open');
                }
            });

            $('.stn-insta').click(e => {
                e.stopPropagation();
                _this.$instaInputDialog.toggle();
            });
        }
    }

    start() {
        if (_config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images.length === 0) return;

        let index = this.getSettings(this.currentBackgroundIndex);
        if (!_config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images[index]) {
            this.setSettings(this.currentBackgroundIndex, 0);
        } else {
            //$('body').css('background-image', `url('${Config.theme.images[index]}')`);
            this.$bigImage.attr('src', _config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images[index]);
            this.$smolImage.attr('src', _config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images[index]);
        }
    }

    getImagesDataByAccount(value) {
        this.$overlayLoader.show();
        const $settings = $('.settings');
        $settings.removeClass('settings-open');
        return fetch(`${this.serviceUrl}/Images/Fetch?type=1&query=${value}&count=30`).then(response => response.json()).then(imagesArr => imagesArr).finally(() => this.$overlayLoader.hide());
    }

    getImagesDataByTag(value) {
        this.$overlayLoader.show();
        const $settings = $('.settings');
        $settings.removeClass('settings-open');
        return fetch(`${this.serviceUrl}/Images/Fetch?type=0&query=${value}&count=30`).then(response => response.json()).then(imagesArr => imagesArr).finally(() => this.$overlayLoader.hide());
    }

    populateConfigData(imagesArr) {
        window._config.images = imagesArr;
        _config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images = imagesArr;
    }

    updateImageComponents(imagesArr, immediate) {
        this.populateConfigData(imagesArr);
        const $widgetElement = $(this.widgetElement);
        $widgetElement.empty();
        for (let i in _config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images) {
            $widgetElement.append($(`<div class="thumb"><img src="${_config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images[i]}" index='${i}' alt="Image"></div>`));
        }
        $widgetElement.find('img').click(e => {
            this.setSettings(this.currentBackgroundIndex, $(e.target).attr('index'));
        });
        let index = this.getSettings(this.currentBackgroundIndex);
        if (this.getSettings(this.bgChangeKey) === "1" || immediate === true) {
            this.setSettings(this.currentBackgroundIndex, index ? 0 : Math.floor(Math.random() * _config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images.length));
            this.setSettings('lastBg', _config__WEBPACK_IMPORTED_MODULE_2__["default"].theme.images[index]);
            //getImageLightness(Config.theme.images[index], result => alert(result));
        }
    }
}

//TODO: implement to detect background brightness
// function getImageLightness(imageSrc,callback) {
//     var img = document.createElement("img");
//     img.crossOrigin = "Anonymous";
//     img.src = imageSrc;
//     img.style.display = "none";
//     document.body.appendChild(img);
//
//     var colorSum = 0;
//
//     img.onload = function() {
//         // create canvas
//         var canvas = document.createElement("canvas");
//         canvas.width = this.width;
//         canvas.height = this.height;
//
//         var ctx = canvas.getContext("2d");
//         ctx.drawImage(this,0,0);
//
//         var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
//         var data = imageData.data;
//         var r,g,b,avg;
//
//         for(var x = 0, len = data.length; x < len; x+=4) {
//             r = data[x];
//             g = data[x+1];
//             b = data[x+2];
//
//             avg = Math.floor((r+g+b)/3);
//             colorSum += avg;
//         }
//
//         var brightness = Math.floor(colorSum / (this.width*this.height));
//         callback(brightness);
//     }
// }

/***/ }),

/***/ "./src/lib/widgets/search.js":
/*!***********************************!*\
  !*** ./src/lib/widgets/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchWidget; });
/* harmony import */ var _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget */ "./src/lib/widget.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/lib/config.js");
/* harmony import */ var _modules_settings_settings_radios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/settings/settings-radios */ "./src/lib/modules/settings/settings-radios.js");
/* harmony import */ var _modules_search_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/search-utils */ "./src/lib/modules/search-utils.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stats */ "./src/lib/stats.js");
/* harmony import */ var _modules_settings_settings_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/settings/settings-checkbox */ "./src/lib/modules/settings/settings-checkbox.js");
/* harmony import */ var _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/settings/settings-visible-switch */ "./src/lib/modules/settings/settings-visible-switch.js");










class SearchWidget extends _widget__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(manager) {
    super("Search", manager, 'div');

    this.tourStepData = {
      target: 'srch-frm',
      placement: 'bottom',
      title: 'Search bar',
      content: 'What are you looking for? Just type here and enjoy!',
      onShow: () => $('#search').css('zIndex', 999999),
      onNext: () => $('#search').css('zIndex', '')
    };
  }

  init() {
    this.searchVer = 1.1;
    this.chooseEngineKey = "ChooseEngine";
    this.searchInNewTabKey = "SearchInNewTab";
    this.searchVersionKey = "SearchVer";
    this.searchUrl = _modules_search_utils__WEBPACK_IMPORTED_MODULE_4__["default"].buildSearchUrl(_config__WEBPACK_IMPORTED_MODULE_2__["default"].search.schema, _config__WEBPACK_IMPORTED_MODULE_2__["default"].search.searchDomain, _config__WEBPACK_IMPORTED_MODULE_2__["default"].search.searchParams, {
      // DeviceID: this.data.deviceId,
      // Country: this.data.country,
      // SID: this.data.subId,
      // Barcode: this.data.barcodeId,
      // InstallDate: this.data.installDate,
      PID: _config__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.publisherId,
      Publisher: _config__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.publisherName,
      SearchType: _config__WEBPACK_IMPORTED_MODULE_2__["default"].search.searchType
    });

    this.initAutocomplete();

    this.customFeed = this.getSettings(this.chooseEngineKey) || "yahoo";

    this.searchInNewTab = this.getSettings(this.searchInNewTabKey) || "true";

    this.initSetting(this.searchVersionKey, 0.1);
    this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Icon, (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/search.png');
    this.initSetting(this.chooseEngineKey, "google", new _modules_settings_settings_radios__WEBPACK_IMPORTED_MODULE_3__["default"]({ "google": "Google", "yahoo": "Yahoo", "bing": "Bing" }), value => this.onEngineChange(value));
    this.initSetting(this.searchInNewTabKey, true, new _modules_settings_settings_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"]({ name: "Search in a new tab" }), value => this.onSearchInNewTabChange(value));
    this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible, true);
  }

  onEngineChange(value) {
    if (value === "ChooseEngine") {
      this.customFeed = this.getSettings(this.chooseEngineKey);
    }
  }

  onSearchInNewTabChange(value) {
    if (value === "SearchInNewTab") {
      this.searchInNewTab = this.getSettings(this.searchInNewTabKey);
    }
  }

  render() {
    // render element
    this.widgetElement.className = "s-search";
    this.widgetElement.id = "search";
    this.widgetElement.innerHTML = `
            <form id="srch-frm" class="field" name="search-form">
              <input type="text" name="q" id="search-term" placeholder=" " autofocus autocomplete="off" />
              <div class="floater"></div>
              <div class="field-click"></div>
              <div id="search-autocomplete" class="search-autocomplete">
                <ul id="search-autocomplete-list" selected-index="-1"></ul>
              </div>
            </form>`;

    // bind action
    $(this.widgetElement).find('form').submit(e => {
      e.stopPropagation();
      this.submitSearch();
      return false;
    });

    // add to dom
    document.body.insertBefore(this.widgetElement, document.body.firstChild);

    // handle autocomplete
    this.autocomplete = $("#search-autocomplete");
    $("#search-term").on('focus', e => {
      if ($(e.target).val().length > 0) {
        this.autocomplete.slideDown('fast');
      }
    }).on('input propertychange paste', e => {
      //this will handle pasting text and clearing text with browser built in clear button
      $(e.target).trigger('keyup');
    }).on('keydown', e => {
      clearTimeout(this.searchTimer);
      if ($(e.target).val().length <= 0) {
        $("#search-autocomplete-list").html("");
      }
    }).on('keyup', e => {
      const j = e.keyCode;
      const $autocompleteListItem = $("#search-autocomplete-list li");
      if (j === 38 || j === 40) {
        this.autocomplete.slideDown('fast');
        clearTimeout(this.searchTimer);
        const $autocompleteList = $("#search-autocomplete-list");
        let selectedIndex = Number($autocompleteList.attr("selected-index"));
        const maxItems = $autocompleteListItem.length - 1;

        $(".selected").removeClass("selected");
        if (j === 38) {
          selectedIndex = selectedIndex === -1 ? maxItems : selectedIndex - 1 < 0 ? maxItems : selectedIndex - 1;
        } else if (j === 40) {
          selectedIndex = selectedIndex === -1 ? 0 : selectedIndex + 1 > maxItems ? 0 : selectedIndex + 1;
        }
        $autocompleteList.attr("selected-index", selectedIndex.toString());
        $('#search-term')[0].value = $($autocompleteListItem[selectedIndex]).text();
        $($autocompleteListItem[selectedIndex]).addClass("selected");
      } else {
        if ($(e.target).val().length > 0) {
          clearTimeout(this.searchTimer);
          this.searchTimer = setTimeout(this.loadAutocompleteData, this.searchTimeout * 1000);
          this.autocomplete.slideDown('fast');
        } else {
          clearTimeout(this.searchTimer);
          this.autocomplete.slideUp('fast');
        }
      }
    });

    const ver = Number(this.getSettings(this.searchVersionKey) || 0.1);
    if (this.searchVer > ver) {
      this.setSettings(this.chooseEngineKey, "yahoo");
      this.setSettings(this.searchVersionKey, this.searchVer);
    }
  }

  submitSearch() {
    const query = $('#search-term').val();
    if (query !== "") {
      try {
        _stats__WEBPACK_IMPORTED_MODULE_5__["default"].event('tbz_search', this.customFeed, query);
        if (this.searchInNewTab === true) {
          window.open(`${this.searchUrl}&q=${encodeURIComponent(query)}&searchp=${this.customFeed}`, "_blank");
        } else {
          window.location = `${this.searchUrl}&q=${encodeURIComponent(query)}&searchp=${this.customFeed}`;
        }
      } catch (e) {
        location.reload();
      }
    }
    return false;
  }

  initAutocomplete() {

    this.searchTimer = null;
    this.searchTimeout = 0.4;

    // register autocomplete jsonp callback
    window.aCallback = result => {
      if (result && result.length > 1) {
        const suggestions = result[1];

        const total = [];
        for (let i = 0; i < suggestions.length && i < 5; ++i) {
          const results = $(`<li class="search-result">${suggestions[i]}</li>`);
          results.on('click', e => {
            $('#search-term')[0].value = $(e.target).text();
            this.submitSearch();
          });
          total.push(results);
        }
        $('#search-autocomplete-list').html(total);
      }
    };

    // handle click to close autocomplete
    $(document).on('click', e => {
      //click anywhere outside searchbox to close
      if (!$(e.target).closest('#search-autocomplete').length && !$(e.target).closest('#search-term').length) {
        if (this.autocomplete.is(':visible')) {
          this.autocomplete.slideUp('fast');
          clearTimeout(this.searchTimer);
        }
      }
    });
  }

  loadAutocompleteData() {
    const query = $('#search-term').val();
    const baseUrl = `//suggestqueries.google.com/complete/search?output=chrome&hl=en&q=${query}&jsonp=aCallback`;

    $.ajax({
      url: baseUrl,
      dataType: "jsonp"
    });
  }
}

/***/ }),

/***/ "./src/lib/widgets/settings-ui.js":
/*!****************************************!*\
  !*** ./src/lib/widgets/settings-ui.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsWidget; });
/* harmony import */ var _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget */ "./src/lib/widget.js");
/* harmony import */ var _modules_tour_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/tour-manager */ "./src/lib/modules/tour-manager.js");
/* harmony import */ var _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/settings/settings-visible-switch */ "./src/lib/modules/settings/settings-visible-switch.js");





class SettingsWidget extends _widget__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor(manager) {
		super('Settings', manager, 'div');
		this.manager = manager;
		this.tourStepData = [{
			target: 'stn-general',
			placement: 'bottom',
			title: 'Settings',
			content: 'Customize your tab! Change your widgets and perform changes to your backgrounds.',
			xOffset: -276,
			arrowOffset: 272,
			onShow: () => $('.settings').css('zIndex', 999999),
			onNext: () => $('.settings').css('zIndex', 9999)
		}, {
			target: 'stn-background',
			placement: 'bottom',
			title: 'Background Selection',
			content: 'Easily go back and forth between the images of your theme and enjoy!',
			xOffset: -256,
			arrowOffset: 252,
			onShow: () => $('.settings').css('zIndex', 999999),
			onNext: () => $('.settings').css('zIndex', 9999)
		}];
	}

	init() {
		this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible, true);
	}

	render() {

		const _settings = this.settings.getAll();

		// run on sorted sections
		for (let section of Object.keys(_settings).sort()) {
			// check if section need to be rendered
			let show = false;
			for (let property in _settings[section]) {
				if (_settings[section][property].settings && _settings[section][property].settings.obj) {
					show = true;
					break;
				}
			}
			if (show)
				// render section
				this.renderSection(section, _settings[section]);
		}

		this.widgetElement.className = "settings-content";
		$('.setting-panel').append(this.widgetElement);
		const $settings = $('.settings');

		// handle settings button click
		$('#stn-general').click(e => {
			e.stopPropagation();
			if ($settings.hasClass('background-open') && $settings.hasClass('settings-open')) {
				$settings.removeClass('background-open');
			} else {
				$settings.removeClass('background-open');
				$settings.toggleClass('settings-open');
			}
		});

		$('#stn-help').click(e => {
			e.stopPropagation();
			_modules_tour_manager__WEBPACK_IMPORTED_MODULE_2__["default"].initTour(this.manager.widgets);
		});

		$('#stn-rate').click(e => {
			var go_to_url = `https://chrome.google.com/webstore/detail/${window._config.params.extensionid}/reviews`;
			window.open(go_to_url, "_blank");
		});

		$('.setting-panel .close-btn').click(e => {
			e.stopPropagation();
			$settings.removeClass('settings-open');
		});

		$(document).click(e => {
			if ($(e.target).closest('.settings').length === 0) {
				$settings.removeClass('settings-open');
			}
		});
	}

	renderSection(section, properties) {
		let icon = '';
		if (properties[_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Icon]) {
			icon = `<img src='${properties[_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Icon].value}' />`;
		}
		let div = $(`<div class="settings-section"><h3>${icon}${section}</h3><div class="props"></div></div>`);
		if (properties[_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible] && properties[_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible].settings.obj) {
			div.prepend(properties[_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible].settings.obj.render());
		}

		for (let prop in properties) {
			if (prop === _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible || !properties[prop].settings.obj) continue;
			div.find('.props').append($('<div class="prop"></div>').append(properties[prop].settings.obj.render()));
		}

		$(this.widgetElement).append(div);
	}

	start() {}
}

/***/ }),

/***/ "./src/lib/widgets/suggested-sites.js":
/*!********************************************!*\
  !*** ./src/lib/widgets/suggested-sites.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuggestedSitesWidget; });
/* harmony import */ var _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget */ "./src/lib/widget.js");
/* harmony import */ var _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/settings/settings-visible-switch */ "./src/lib/modules/settings/settings-visible-switch.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stats */ "./src/lib/stats.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/lib/config.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/http */ "./src/lib/modules/http.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_7__);









class SuggestedSitesWidget extends _widget__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor(manager) {
		super("Suggested Sites", manager, 'div');
		this.tourStepData = {
			target: 'suggested-sites',
			placement: 'top',
			title: 'Suggested Sites',
			content: 'Check out these useful websites.',
			xOffset: -152,
			arrowOffset: 236,
			onShow: () => $('#search').css('zIndex', 999999),
			onNext: () => $('#search').css('zIndex', '')
		};
	}

	init() {
		this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Icon, (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites.png');
		this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible, true, new _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_2__["default"]());
	}

	loadStaticLink() {
		return [{ name: 'gmail', url: 'http://gmail.com', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/gmail.png' }, { name: 'facebook', url: 'http://facebook.com', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/facebook.png' }, { name: 'tripadvisor', url: 'http://tripadvisor.com', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/tripadvisor.png' }, { name: 'netflix', url: 'https://www.netflix.com/', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/netflix.png' }, { name: 'instagram', url: 'http://instagram.com', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/instagram.png' }, { name: 'youtube', url: 'http://youtube.com', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/youtube.png' }, { name: 'twitter', url: 'http://twitter.com', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/twitter.png' }, { name: 'ebay', url: '//rover.ebay.com/rover/1/711-53200-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338426358&mpre=www.ebay.com', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/ebay.png' }, { name: 'reddit', url: 'https://www.reddit.com', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/reddit.png' },
		//{ name: 'blogger', url: 'http://blogger.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/blogger.png' },
		{ name: 'pinterest', url: 'http://pinterest.com', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/pinterest.png' }];
	}

	getLocationByIP() {
		return new Promise((resolve, reject) => {
			_modules_http__WEBPACK_IMPORTED_MODULE_6__["default"].getJson(`https://api.sendmepixel.com/geo/country`, ipAddress => {
				resolve(ipAddress);
			});
		});
	}

	loadSiteLinkData() {
		return new Promise((resolve, reject) => {
			_modules_http__WEBPACK_IMPORTED_MODULE_6__["default"].getJson(`https://api.sendmepixel.com/suggest/tiles?c=9&sub=TBZ`, tilesData => {
				let arr = [];
				arr.push({ name: 'aliexpress', url: '//s.click.aliexpress.com/e/3Ny1bCyY', img: (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/suggested-sites/aliexpress.png' });
				const pageSize = 10;
				const isTilesDataExist = Object.entries(tilesData).length === 0;
				if (!isTilesDataExist) {
					if (tilesData.tiles.length > 0) {
						$.map(tilesData.tiles, function (elem, index) {
							arr.push({
								"name": elem.name, "url": elem.click_url, "img": elem.image_url
							});
						});
					}
				}

				if (arr.length != pageSize) {
					const leftlink = pageSize - arr.length;
					$.each(this.loadStaticLink().slice(0, leftlink), function (key, value) {
						arr.push({
							"name": value.name, "url": value.url, "img": value.img
						});
					});
				}
				resolve(arr);
			});
		});
	}

	render() {
		this.widgetElement.id = "suggested-sites";
		this.widgetElement.className = "widget suggested-sites-widget";
		this.suggestedSites = [];
		//this.getLocationByIP().then(currentip => {
		this.loadSiteLinkData().then(suggestedSites => {
			suggestedSites.map(siteData => {
				const el = document.createElement("DIV");
				el.className = 'suggested-sites-item';
				el.innerHTML = `<img class='suggested-sites-item-icon' src='${siteData.img}' /><div class='suggested-sites-item-label'>${siteData.name}</div>`;
				el.addEventListener('click', () => {
					_stats__WEBPACK_IMPORTED_MODULE_3__["default"].event('tbz_suggestsite_click', siteData.name, siteData.url);
					window.open(siteData.url, '_blank');
				});
				this.widgetElement.append(el);
			});
			$('.s-search').append(this.widgetElement);
		});
		//});
	}
}

/***/ }),

/***/ "./src/lib/widgets/todo.js":
/*!*********************************!*\
  !*** ./src/lib/widgets/todo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoWidget; });
/* harmony import */ var _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget */ "./src/lib/widget.js");
/* harmony import */ var _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/settings/settings-visible-switch */ "./src/lib/modules/settings/settings-visible-switch.js");




class TodoWidget extends _widget__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(manager) {
        super("Todo", manager, 'div');
        this.tourStepData = {
            target: 'todo',
            placement: 'top',
            title: 'Todo List',
            content: 'Create your checklist and never miss any of your tasks.',
            xOffset: -10,
            onShow: () => $('.left-bottom-widgets').css('zIndex', 999999),
            onNext: () => $('.left-bottom-widgets').css('zIndex', '')
        };
    }

    init() {
        this.listData = "todoList";
        this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Icon, (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/todo-btn.png');
        this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible, true, new _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_2__["default"]());
        this.initSetting(this.listData, []);
    }

    fillTasks() {
        let tasks = $('#todo-list-items');
        tasks.html("");
        const savedTasks = this.getSettings(this.listData);
        if (savedTasks) {
            $.each(savedTasks, (index, item) => {
                const marked = !item.status ? "todo-list-item-marked" : "";
                const icon = `<i class="material-icons">close</i>`;
                let task = $(`<li class='${marked}'>${item.value}${icon}</li>`);
                task.click(e => {
                    let elem = $(e.target);
                    elem.toggleClass("todo-list-item-marked");
                    item.status = !item.status;
                    this.updateTask(item, index);
                });

                task.find('i').click(e => {
                    e.stopPropagation();
                    this.deleteTask(task, index);
                });

                task.hover(() => task.find('i').show(), () => task.find('i').hide());

                if (item.status) {
                    tasks.prepend(task);
                } else {
                    tasks.append(task);
                }
            });
        }
    }

    addTask(task) {
        let savedTasks = this.getSettings(this.listData);
        if (savedTasks === undefined) savedTasks = [];
        savedTasks.push(task);
        this.setSettings(this.listData, savedTasks);
        this.fillTasks();
    }

    updateTask(task, index) {
        let savedTasks = this.getSettings(this.listData);
        if (savedTasks === undefined) return;
        savedTasks[index] = task;
        this.setSettings(this.listData, savedTasks);
    }

    deleteTask(task, index) {
        let savedTasks = this.getSettings(this.listData);
        if (savedTasks === undefined) return;
        savedTasks.splice(index, 1);
        this.setSettings(this.listData, savedTasks);
        this.fillTasks();
    }

    render() {
        const _this = this;
        this.widgetElement.id = "todo";
        const $leftBottomWidgets = $('.left-bottom-widgets');

        const widgetHtml = `<div class='todo-list-container'>
                                <h3>ToDo list</h3>
                                <ul id='todo-list-items' class='widget-scroll'></ul>
                                <div class="float-field">
                                    <input type="text" id="todo-input" autocomplete="off"/>
                                    <label for="todo-input" class="todo-input-label">New task ></label>
                                    <a href='#' class="todo-add">Add</a>
                                </div>
                            </div>`;

        this.widgetElement.className = "widget";

        $leftBottomWidgets.append(this.widgetElement);
        $leftBottomWidgets.append($(widgetHtml));

        let todoList = $('.todo-list-container');

        function addNewTask() {
            const $task = $("#todo-input");
            if ($task.val().length < 2) return false;

            _this.addTask({ value: $task.val(), status: true });
            $task.val("");
        }

        $("#todo-input").on('keypress', e => {
            if (e.which == 13) {
                e.preventDefault();
                addNewTask();
            }
        });

        $(".todo-add").on('click', addNewTask);

        $(document).click(e => {
            if ($(e.target).closest('.todo-list-container').length === 0) {
                $('.todo-list-container').removeClass('todo-list-open');
            }
        });

        $("#todo").on('click', e => {
            if (!$(e.target).hasClass("widget")) return false;

            e.stopPropagation();

            if (todoList.hasClass('todo-list-open')) {
                todoList.removeClass('todo-list-open');
            } else {
                todoList.toggleClass('todo-list-open');
            }
        });

        console.log("TodoWidget::render()");
    }

    start() {
        this.fillTasks();
        console.log("TodoWidget::start()");
    }
}

/***/ }),

/***/ "./src/lib/widgets/weather.js":
/*!************************************!*\
  !*** ./src/lib/widgets/weather.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeatherWidget; });
/* harmony import */ var _modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/settings/settings-keys */ "./src/lib/modules/settings/settings-keys.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget */ "./src/lib/widget.js");
/* harmony import */ var _modules_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/http */ "./src/lib/modules/http.js");
/* harmony import */ var _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/settings/settings-visible-switch */ "./src/lib/modules/settings/settings-visible-switch.js");
/* harmony import */ var _modules_settings_settings_radios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/settings/settings-radios */ "./src/lib/modules/settings/settings-radios.js");






class WeatherWidget extends _widget__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(manager) {
        super("Weather", manager, 'div');
        this.tourStepData = {
            target: 'weather',
            placement: 'top',
            title: 'Weather',
            content: 'There’s no such thing as a bad climate with this weather forecast for your location.',
            xOffset: 20,
            onShow: () => $('.bottom-widgets').css('zIndex', 999999),
            onNext: () => $('.bottom-widgets').css('zIndex', '')
        };
    }

    init() {
        this.weather_interval = null;
        this.unitsKey = "Unit";

        this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Icon, (typeof baseResource === "undefined" || baseResource === "[base-resource]" ? "" : baseResource) + '/images/weather.png');
        this.initSetting(_modules_settings_settings_keys__WEBPACK_IMPORTED_MODULE_0__["default"].Visible, true, new _modules_settings_settings_visible_switch__WEBPACK_IMPORTED_MODULE_3__["default"]());
        this.initSetting(this.unitsKey, "C", new _modules_settings_settings_radios__WEBPACK_IMPORTED_MODULE_4__["default"]({
            'F': "℉",
            'C': "℃"
        }), () => this.loadWeather());

        // get country for accurate weather units
        if (this.getSettings(this.unitsKey) === "undefined") {
            _modules_http__WEBPACK_IMPORTED_MODULE_2__["default"].getJson("//api.sendmepixel.com/geo/info", geoData => {
                const units = ["US", "LR", "BU", "PW", "MH", "FM", "WS"].indexOf(geoData.country) > -1 ? "F" : "C";
                this.setSettings(this.unitsKey, units);
            });
        }
    }

    render() {
        this.widgetElement.id = "weather";
        this.widgetElement.className = "widget";
        $('.bottom-widgets').append(this.widgetElement);

        $("#weather").on('click', e => {
            e.stopPropagation();

            if (this.getSettings(this.unitsKey) === "F") {
                this.setSettings(this.unitsKey, "C");
            } else {
                this.setSettings(this.unitsKey, "F");
            }
        });
    }

    start() {
        this.loadWeather();
    }

    convertKelvin(kelvinTemp, unitType) {
        if (unitType === "F") {
            return kelvinTemp * (9 / 5) - 459.67;
        } else {
            return kelvinTemp - 273;
        }
    }

    updateWeather(geoData) {
        const $weather = $("#weather");
        fetch(`https://api.sendmepixel.com/weather/getcurrent/`).then(res => res.json()).then(weatherData => {
            $weather.html(`
					<div class='widget-top'>
                      <div class='widget-content widget-content-left'>
                        <img alt='${weatherData.weather[0].main}' class='weather-icon icon-${weatherData.weather[0].main}' src='https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png' />
                      </div>
                      <div class='widget-content widget-content-right'>
                        <span class='temp'>${Math.round(this.convertKelvin(weatherData.main.temp, this.getSettings(this.unitsKey)))} <span class='small'>&deg;${this.getSettings(this.unitsKey)}</span><br/></span>
                      </div>
                    </div>
                    <div class='widget-bottom'>
                        ${weatherData.weather[0].main} at ${weatherData.name}, ${weatherData.sys.country}
                    </div>
				`);
        }).catch(err => {
            console.error('Error fetching weather data', err);
            $weather.html(`
					<div class='widget-top'>
                      <div class='widget-content widget-content-left'>
                        <!--<img alt='Error' class='weather-icon icon-error' />-->
                      </div>
                      <div class='widget-content widget-content-right'>
                        <span class='temp'><br/></span>
                      </div>
                    </div>
                    <div class='widget-bottom'>
                        Error fetching weather data
                    </div>
				`);
        });

        // $.simpleWeather({
        //     location: geoData,
        //     woeid: '',
        //     unit: this.getSettings(this.unitsKey) || "C",
        //     success: function(weather) {
        //         let html = `<div class='widget-top'>
        //               <div class='widget-content widget-content-left'>
        //                 <i class='icon-${weather.code}'></i>
        //               </div>
        //               <div class='widget-content widget-content-right'>
        //                 <span class='temp'>${weather.temp} <span class='small'>&deg;${weather.units.temp}</span><br/></span>
        //               </div>
        //             </div>
        //             <div class='widget-bottom'>
        //                 ${weather.currently} at ${weather.city}, ${weather.country}
        //             </div>`;
        //
        //         $weather.html(html);
        //     },
        //     error: function(error) {
        //         $weather.html(`<span>${error}</span>`);
        //     }
        // });
    }

    // getLocationByIP() {
    //     Http.getJson("//api.sendmepixel.com/geo/info", (geoData) => this.updateWeather(geoData.city || geoData.state + ', ' + geoData.country));
    // }

    loadWeather() {
        clearInterval(this.weather_interval);

        // if (navigator.geolocation && location.protocol === "https:") {
        //     navigator.geolocation.getCurrentPosition((position) => {
        //         //load weather using your lat/lng coordinates
        //         this.updateWeather(position.coords.latitude + ',' + position.coords.longitude);
        //     }, () => this.getLocationByIP());
        // } else {
        //     this.getLocationByIP();
        // }

        this.updateWeather();

        this.weather_interval = setInterval(() => this.loadWeather(), 60000);
    }
}

/***/ })

/******/ });
//# sourceMappingURL=site.build.js.map