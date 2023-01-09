// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
// 'use strict';

// function counter() {
//   let seconds = 0;
//   setInterval(() => {
//     seconds += 1;
//     document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
//   }, 1000);
// }

// counter();

//declare as array to iterarte 
var menuItems = [{
  id: 1,
  item: 'Food Item1',
  oneliner: 'This isnt the most orthodox pasta recipe, but it is a good one. Simply choose a long pasta – bucatini or spaghetti works well – buy a jar of your favorite tomato sauce (low sugar and no added tomato paste are the most healthy and flavorful), some cream cheese, and youll have dinner ready in 20 minutes or less.',
  img: '/images/capture1.PNG',
  hotel: 'Hotel1 name1',
  desc: 'One: When you are craving carbs, nothing is quite as satisfying as a plate of pasta. Whether you break out your best pasta pot for a stovetop recipe like spaghetti or tortellini or fill up your favorite casserole dish to make a baked pasta like lasagna, noodles paired with the perfect sauce and topped with a mountain of freshly grated cheese are the ultimate comfort food. And, while we would gladly gobble up any dish of pasta you put in front of us, there are a few that are undeniable masterpieces — recipes that have amassed hundreds of 5-star ratings and positive reviews from fans. These are those recipes. So, prepare to want to make them all — starting with the super popular baked feta pasta you’ve seen all over TikTok. It’s easy to see why the recipe has achieved such fame: Cherry tomatoes and a whole block of feta are baked until soft and melty, then tossed with garlic, basil and cooked noodles for a beautifully cheesy dish. Better make a double batch!'
}, {
  id: 2,
  item: 'Food Item2',
  oneliner: 'This isnt the most orthodox pasta recipe, but it is a good one. Simply choose a long pasta – bucatini or spaghetti works well – buy a jar of your favorite tomato sauce (low sugar and no added tomato paste are the most healthy and flavorful), some cream cheese, and youll have dinner ready in 20 minutes or less.',
  img: '/images/capture2.PNG',
  hotel: 'Hotel2 name2',
  desc: 'One: When you are craving carbs, nothing is quite as satisfying as a plate of pasta. Whether you break out your best pasta pot for a stovetop recipe like spaghetti or tortellini or fill up your favorite casserole dish to make a baked pasta like lasagna, noodles paired with the perfect sauce and topped with a mountain of freshly grated cheese are the ultimate comfort food. And, while we would gladly gobble up any dish of pasta you put in front of us, there are a few that are undeniable masterpieces — recipes that have amassed hundreds of 5-star ratings and positive reviews from fans. These are those recipes. So, prepare to want to make them all — starting with the super popular baked feta pasta you’ve seen all over TikTok. It’s easy to see why the recipe has achieved such fame: Cherry tomatoes and a whole block of feta are baked until soft and melty, then tossed with garlic, basil and cooked noodles for a beautifully cheesy dish. Better make a double batch!'
}, {
  id: 3,
  item: 'Food Item3',
  oneliner: 'This isnt the most orthodox pasta recipe, but it is a good one. Simply choose a long pasta – bucatini or spaghetti works well – buy a jar of your favorite tomato sauce (low sugar and no added tomato paste are the most healthy and flavorful), some cream cheese, and youll have dinner ready in 20 minutes or less.',
  img: '/images/capture3.PNG',
  hotel: 'Hotel3 name3',
  desc: 'One: When you are craving carbs, nothing is quite as satisfying as a plate of pasta. Whether you break out your best pasta pot for a stovetop recipe like spaghetti or tortellini or fill up your favorite casserole dish to make a baked pasta like lasagna, noodles paired with the perfect sauce and topped with a mountain of freshly grated cheese are the ultimate comfort food. And, while we would gladly gobble up any dish of pasta you put in front of us, there are a few that are undeniable masterpieces — recipes that have amassed hundreds of 5-star ratings and positive reviews from fans. These are those recipes. So, prepare to want to make them all — starting with the super popular baked feta pasta you’ve seen all over TikTok. It’s easy to see why the recipe has achieved such fame: Cherry tomatoes and a whole block of feta are baked until soft and melty, then tossed with garlic, basil and cooked noodles for a beautifully cheesy dish. Better make a double batch!'
}, {
  id: 4,
  item: 'Food Item4',
  oneliner: 'This isnt the most orthodox pasta recipe, but it is a good one. Simply choose a long pasta – bucatini or spaghetti works well – buy a jar of your favorite tomato sauce (low sugar and no added tomato paste are the most healthy and flavorful), some cream cheese, and youll have dinner ready in 20 minutes or less.',
  img: '/images/capture4.PNG',
  hotel: 'Hotel4 name4',
  desc: 'One: When you are craving carbs, nothing is quite as satisfying as a plate of pasta. Whether you break out your best pasta pot for a stovetop recipe like spaghetti or tortellini or fill up your favorite casserole dish to make a baked pasta like lasagna, noodles paired with the perfect sauce and topped with a mountain of freshly grated cheese are the ultimate comfort food. And, while we would gladly gobble up any dish of pasta you put in front of us, there are a few that are undeniable masterpieces — recipes that have amassed hundreds of 5-star ratings and positive reviews from fans. These are those recipes. So, prepare to want to make them all — starting with the super popular baked feta pasta you’ve seen all over TikTok. It’s easy to see why the recipe has achieved such fame: Cherry tomatoes and a whole block of feta are baked until soft and melty, then tossed with garlic, basil and cooked noodles for a beautifully cheesy dish. Better make a double batch!'
}];

//creating variables to grab by id
var item = document.getElementById('item');
var oneLiner = document.getElementById('oneLiner');
var img = document.getElementById('img');
var hotel = document.getElementById('hotel');
var desc = document.getElementById('desc');
var prev = document.getElementById('prev');
var random = document.getElementById('random');
var next = document.getElementById('next');
var currentMenu = 0;
window.addEventListener('DOMContentLoaded', function () {
  var menu = menuItems[currentMenu];
  item.textContent = menu.item;
  oneliner.textContent = menu.oneliner;
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49501" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map