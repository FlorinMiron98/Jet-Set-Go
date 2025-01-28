// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jcjZx":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "53207f4156bfde39";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"38TcD":[function(require,module,exports,__globalThis) {
// Model import
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
// Views imports
var _navbarViewJs = require("./views/navbarView.js");
var _navbarViewJsDefault = parcelHelpers.interopDefault(_navbarViewJs);
var _sideNavbarViewJs = require("./views/sideNavbarView.js");
var _sideNavbarViewJsDefault = parcelHelpers.interopDefault(_sideNavbarViewJs);
var _headerContentViewJs = require("./views/headerContentView.js");
var _headerContentViewJsDefault = parcelHelpers.interopDefault(_headerContentViewJs);
var _searchFormViewJs = require("./views/searchFormView.js");
var _searchFormViewJsDefault = parcelHelpers.interopDefault(_searchFormViewJs);
var _personsSelectionViewJs = require("./views/flights-search-form/personsSelectionView.js");
var _personsSelectionViewJsDefault = parcelHelpers.interopDefault(_personsSelectionViewJs);
var _personsSelectionBtnViewJs = require("./views/flights-search-form/personsSelectionBtnView.js");
var _personsSelectionBtnViewJsDefault = parcelHelpers.interopDefault(_personsSelectionBtnViewJs);
var _flightClassSelectionViewJs = require("./views/flights-search-form/flightClassSelectionView.js");
var _flightClassSelectionViewJsDefault = parcelHelpers.interopDefault(_flightClassSelectionViewJs);
var _flightClassSelectionBtnViewJs = require("./views/flights-search-form/flightClassSelectionBtnView.js");
var _flightClassSelectionBtnViewJsDefault = parcelHelpers.interopDefault(_flightClassSelectionBtnViewJs);
var _departureLocationSearchViewJs = require("./views/flights-search-form/departureLocationSearchView.js");
var _departureLocationSearchViewJsDefault = parcelHelpers.interopDefault(_departureLocationSearchViewJs);
var _arrivalLocationSearchViewJs = require("./views/flights-search-form/arrivalLocationSearchView.js");
var _arrivalLocationSearchViewJsDefault = parcelHelpers.interopDefault(_arrivalLocationSearchViewJs);
var _reverseInputValuesViewJs = require("./views/flights-search-form/reverseInputValuesView.js");
var _reverseInputValuesViewJsDefault = parcelHelpers.interopDefault(_reverseInputValuesViewJs);
var _datePickerViewJs = require("./views/flights-search-form/datePickerView.js");
var _datePickerViewJsDefault = parcelHelpers.interopDefault(_datePickerViewJs);
var _searchResultsBtnViewJs = require("./views/flights-search-form/searchResultsBtnView.js");
var _searchResultsBtnViewJsDefault = parcelHelpers.interopDefault(_searchResultsBtnViewJs);
var _clearInputBtnViewJs = require("./views/flights-search-form/clearInputBtnView.js");
var _clearInputBtnViewJsDefault = parcelHelpers.interopDefault(_clearInputBtnViewJs);
const controlSelectPersons = function() {
    // Generate persons selection markup
    (0, _personsSelectionViewJsDefault.default)._generateAdultsMarkup();
    (0, _personsSelectionViewJsDefault.default)._generateChildrenMarkup();
    // Set dynamic styling for children age selectors parent element
    (0, _personsSelectionViewJsDefault.default)._hideChildrenSelectAgeParentEl();
    // Add the functionality for selecting the number of persons
    (0, _personsSelectionViewJsDefault.default)._adultsCounter();
    (0, _personsSelectionViewJsDefault.default)._childrenCounter();
    // Dynamically update the content of the persons dropdown button
    (0, _personsSelectionBtnViewJsDefault.default)._generateMarkup((0, _personsSelectionViewJsDefault.default)._adults, (0, _personsSelectionViewJsDefault.default)._children);
    // Add the functionality for selection done
    (0, _searchFormViewJsDefault.default)._hideSelectionDropdown();
};
const controlSelectFlightClass = function() {
    // Select flight class
    (0, _flightClassSelectionViewJsDefault.default)._selectFlightClass();
    // Dynamically update the select flight class button text content
    (0, _flightClassSelectionBtnViewJsDefault.default)._generateMarkup((0, _flightClassSelectionViewJsDefault.default)._selectedBtn);
};
const controlDepartureSearchLocations = async function() {
    try {
        // Render spinner
        (0, _departureLocationSearchViewJsDefault.default)._renderSpinner();
        // Get search query
        const query = (0, _departureLocationSearchViewJsDefault.default)._getQuery();
        if (!query) return;
        // Load search results
        await _modelJs.loadDestinationsSearchResults(query, (0, _departureLocationSearchViewJsDefault.default)._transit);
        // Render results
        (0, _departureLocationSearchViewJsDefault.default)._renderMarkup(_modelJs.state.locationResults.departureLocationResults, (0, _departureLocationSearchViewJsDefault.default)._transit);
    } catch (error) {
        (0, _departureLocationSearchViewJsDefault.default)._renderError(error.message);
    }
};
const controlArrivalSearchLocations = async function() {
    try {
        // Render spinner
        (0, _arrivalLocationSearchViewJsDefault.default)._renderSpinner();
        // Get search query
        const query = (0, _arrivalLocationSearchViewJsDefault.default)._getQuery();
        if (!query) return;
        // Load search results
        await _modelJs.loadDestinationsSearchResults(query, (0, _arrivalLocationSearchViewJsDefault.default)._transit);
        // Render results
        (0, _arrivalLocationSearchViewJsDefault.default)._renderMarkup(_modelJs.state.locationResults.arrivalLocationResults, (0, _arrivalLocationSearchViewJsDefault.default)._transit);
    } catch (error) {
        (0, _arrivalLocationSearchViewJsDefault.default)._renderError(error.message);
    }
};
const controlDepartureSearchLoseFocus = function() {
    // Hide the results container
    (0, _departureLocationSearchViewJsDefault.default)._hideContainerResults();
    // Clear the markup
    (0, _departureLocationSearchViewJsDefault.default)._clearMarkup();
};
const controlArrivalSearchLoseFocus = function() {
    // Hide the results container
    (0, _arrivalLocationSearchViewJsDefault.default)._hideContainerResults();
    // Clear the markup
    (0, _arrivalLocationSearchViewJsDefault.default)._clearMarkup();
};
const controlReverseInputValues = function() {
    // Extract the input values and store them into variables
    const departureLocationValue = (0, _departureLocationSearchViewJsDefault.default)._searchLocationInput.value;
    const arrivalLocationValue = (0, _arrivalLocationSearchViewJsDefault.default)._searchLocationInput.value;
    // Assign the new values for the inputs
    (0, _departureLocationSearchViewJsDefault.default)._searchLocationInput.value = arrivalLocationValue;
    (0, _arrivalLocationSearchViewJsDefault.default)._searchLocationInput.value = departureLocationValue;
    // Extract the query values and store them into variables
    const departureLocationId = (0, _departureLocationSearchViewJsDefault.default)._departureLocationId;
    const arrivalLocationId = (0, _arrivalLocationSearchViewJsDefault.default)._arrivalLocationId;
    // Assign the new values for the query parameters
    (0, _departureLocationSearchViewJsDefault.default)._departureLocationId = arrivalLocationId;
    (0, _arrivalLocationSearchViewJsDefault.default)._arrivalLocationId = departureLocationId;
};
const controlReturnSearchQueries = function() {
    (0, _searchResultsBtnViewJsDefault.default)._assignQueryParameterValues();
};
// The init function establishes the functionality for each user interaction as the page loads
const init = function() {
    (0, _personsSelectionViewJsDefault.default)._addHandlerRender(controlSelectPersons);
    (0, _flightClassSelectionViewJsDefault.default)._addHandlerRender(controlSelectFlightClass);
    (0, _departureLocationSearchViewJsDefault.default)._addHandlerSearch(controlDepartureSearchLocations);
    (0, _arrivalLocationSearchViewJsDefault.default)._addHandlerSearch(controlArrivalSearchLocations);
    (0, _departureLocationSearchViewJsDefault.default)._addHandlerLoseFocus(controlDepartureSearchLoseFocus);
    (0, _arrivalLocationSearchViewJsDefault.default)._addHandlerLoseFocus(controlArrivalSearchLoseFocus);
    (0, _departureLocationSearchViewJsDefault.default)._assignInputValue();
    (0, _arrivalLocationSearchViewJsDefault.default)._assignInputValue();
    (0, _reverseInputValuesViewJsDefault.default)._addHandlerReverseValues(controlReverseInputValues);
    (0, _datePickerViewJsDefault.default)._setDatePicker();
    (0, _searchResultsBtnViewJsDefault.default)._addHandlerCreateQueries(controlReturnSearchQueries);
    (0, _clearInputBtnViewJsDefault.default)._clearInput();
    // Dynamic styling
    (0, _navbarViewJsDefault.default).setDynamicStyling();
    (0, _sideNavbarViewJsDefault.default).setDynamicStyling();
    (0, _sideNavbarViewJsDefault.default).toggleSideNavbar();
    (0, _searchFormViewJsDefault.default)._setDropdownDynamicStyling();
    (0, _searchFormViewJsDefault.default)._showSelectionDropdown();
    (0, _headerContentViewJsDefault.default).setDynamicStyling();
    (0, _departureLocationSearchViewJsDefault.default).setDynamicStyling();
};
init();

},{"./model.js":"Py0LO","./views/navbarView.js":"9sJsi","./views/sideNavbarView.js":"9BkUd","./views/headerContentView.js":"d8zti","./views/searchFormView.js":"gHYzF","./views/flights-search-form/personsSelectionView.js":"dn95k","./views/flights-search-form/personsSelectionBtnView.js":"hLXZN","./views/flights-search-form/flightClassSelectionView.js":"bMDTa","./views/flights-search-form/flightClassSelectionBtnView.js":"5GwaT","./views/flights-search-form/departureLocationSearchView.js":"7D4AX","./views/flights-search-form/arrivalLocationSearchView.js":"gjx8h","./views/flights-search-form/reverseInputValuesView.js":"l8EtC","./views/flights-search-form/datePickerView.js":"8Mc3D","./views/flights-search-form/searchResultsBtnView.js":"cYGc2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/flights-search-form/clearInputBtnView.js":"5lkRv"}],"Py0LO":[function(require,module,exports,__globalThis) {
// Import the 'options' object which contains the method and the API key
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadDestinationsSearchResults", ()=>loadDestinationsSearchResults);
parcelHelpers.export(exports, "loadFlightsSearchResults", ()=>loadFlightsSearchResults);
parcelHelpers.export(exports, "loadFlightDetails", ()=>loadFlightDetails);
var _configJs = require("./config.js");
const state = {
    locationResults: {
        departureLocationResults: [],
        arrivalLocationResults: []
    },
    flightsSearchResults: {
        aggregation: {},
        baggagePolicies: [],
        flightDeals: [],
        flightOffers: [],
        cabinClass: ""
    },
    flightDetails: {
        features: [],
        segments: [],
        price: 0,
        tripType: "",
        token: ""
    }
};
const loadDestinationsSearchResults = async function(query, transit) {
    const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${query}`;
    try {
        const response = await fetch(url, (0, _configJs.OPTIONS));
        if (!response.ok) throw new Error("Something went wrong. Please try again!");
        const data = await response.json();
        if (data.data.length === 0) throw new Error("No results found for your query. Please try again!");
        // Dynamically display the search list based on the transit (departure locations/arrival locations)
        if (transit === "departure") state.locationResults.departureLocationResults = data.data;
        if (transit === "arrival") state.locationResults.arrivalLocationResults = data.data;
    } catch (error) {
        throw error;
    }
};
const loadFlightsSearchResults = async function(queryParams, sort = "BEST") {
    // As the return date is optional, check if the value is empty
    let returnDate = !queryParams.returnDate ? "" : `&returnDate=${queryParams.returnDate}`;
    // Create the let variable to store the children search param based on the value stored in the object returned by getQueryParameters() method
    let children;
    // Check each possible outcome for the number of children selected by the user and assign the value to the children variable
    if (queryParams.children.length === 1) children = `&children=${queryParams.children[0]}`;
    if (queryParams.children.length > 1) children = `&children=${queryParams.children.join("%2C")}`;
    if (!queryParams.children) children = "";
    // Dynamically create the URL for the fetch request
    const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=${queryParams.departureLocationId}&toId=${queryParams.arrivalLocationId}&departDate=${queryParams.departureDate}${returnDate}&pageNo=${queryParams.pageNumber}&adults=${queryParams.adults}${children}&sort=${sort}&cabinClass=${queryParams.flightClass}&currency_code=GBP`;
    console.log(url);
    try {
        const response = await fetch(url, (0, _configJs.OPTIONS));
        if (!response.ok) throw new Error("Something went wrong. Please try again!");
        const data = await response.json();
        console.log(data);
        // Assign the response to the 'state' object
        state.flightsSearchResults.aggregation = data.data.aggregation;
        state.flightsSearchResults.baggagePolicies = data.data.baggagePolicies;
        state.flightsSearchResults.flightDeals = data.data.flightDeals;
        state.flightsSearchResults.flightOffers = data.data.flightOffers;
        state.flightsSearchResults.cabinClass = data.data.searchCriteria.cabinClass;
        console.log(state);
    } catch (error) {
        throw error;
    }
};
const loadFlightDetails = async function(token) {
    const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/getFlightDetails?token=${token}&currency_code=GBP`;
    try {
        const response = await fetch(url, (0, _configJs.OPTIONS));
        if (!response.ok) throw new Error("Something went wrong. Please try again!");
        const data = await response.json();
        state.flightDetails.features = data.data.brandedFareInfo.features;
        state.flightDetails.segments = data.data.segments;
        state.flightDetails.price = data.data.priceBreakdown.total.units;
        state.flightDetails.tripType = data.data.tripType;
        state.flightDetails.token = data.data.token;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

},{"./config.js":"4Wc5b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Wc5b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OPTIONS", ()=>OPTIONS);
const OPTIONS = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "3728498269msh3cdb30e7c87b59bp10ba56jsn2d4cff454307",
        "x-rapidapi-host": "booking-com15.p.rapidapi.com"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9sJsi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NavbarView {
    // DOM elements
    sideNavbar = document.querySelector(".sidebar-navigation");
    navbar = document.getElementById("nav");
    // Set the background styling for the navbar when the scrollY property is 1px or bigger or depending on the styling of the side navigation bar
    setDynamicStyling() {
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 0) this.navbar.classList.add("navigation-highlight");
            if (window.scrollY === 0 && !this.sideNavbar.classList.contains("sidebar-navigation-visible")) this.navbar.classList.remove("navigation-highlight");
            if (window.scrollY === 0 && this.sideNavbar.classList.contains("sidebar-navigation-visible")) return;
        });
    }
}
exports.default = new NavbarView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9BkUd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SideNavbarView {
    // DOM elements
    navbar = document.getElementById("nav");
    sideNavbar = document.querySelector(".sidebar-navigation");
    hamburgerBtn = document.getElementById("hamburger-btn");
    overlay = document.querySelector(".overlay");
    // Set the top positioning of the side navigation bar based on the height of the navigation bar when the page loads or when the user changes the screen size
    setDynamicStyling() {
        [
            "load",
            "resize"
        ].forEach((e)=>{
            window.addEventListener(e, ()=>{
                const navbarSize = this.navbar.getBoundingClientRect();
                this.sideNavbar.style.marginTop = `${navbarSize.height}px`;
            });
        });
    }
    toggleSideNavbar() {
        // Add an event listener to the body element and hide the overlay if it is currently visible
        document.body.addEventListener("click", (e)=>{
            if (e.target.classList.contains("overlay")) {
                this.sideNavbar.classList.remove("sidebar-navigation-visible");
                e.target.classList.remove("overlay-visible");
            }
            // Adjust the styling of the navigation bar taking into consideration the scrollY property and the visibility of the overlay
            if (e.target.classList.contains("overlay") && window.scrollY === 0) {
                this.navbar.classList.remove("navigation-highlight");
                this.sideNavbar.classList.remove("sidebar-navigation-visible");
                e.target.classList.remove("overlay-visible");
            }
        });
        // Set the behaviour of the navigation bar and overlay when clicking the hamburger button
        this.hamburgerBtn.addEventListener("click", ()=>{
            this.sideNavbar.classList.toggle("sidebar-navigation-visible");
            this.overlay.classList.toggle("overlay-visible");
            if (window.scrollY === 0) {
                if (this.navbar.classList.contains("navigation-highlight")) this.navbar.classList.remove("navigation-highlight");
                else this.navbar.classList.add("navigation-highlight");
            }
        });
    }
}
exports.default = new SideNavbarView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8zti":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class HeaderContentView {
    // DOM elements
    navbar = document.getElementById("nav");
    header = document.querySelector(".header");
    // As the navigation bar has position:fixed which will get it out of the normal flow of the page, I had to dynamically set a padding top for the main content of the header element so the navigation bar will not overwrite it
    setDynamicStyling() {
        [
            "load",
            "resize"
        ].forEach((e)=>{
            window.addEventListener(e, ()=>{
                const navbarSizes = this.navbar.getBoundingClientRect();
                this.header.style.paddingTop = `${navbarSizes.height}px`;
                this.header.style.paddingBottom = `${navbarSizes.height}px`;
            });
        });
    }
}
exports.default = new HeaderContentView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHYzF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchFormView {
    // DOM elements
    _dropdownInputsContainer = document.querySelector(".dropdown-inputs-container");
    _flightPersonsDropdownBtn = document.getElementById("flight-persons-dropdown-btn");
    _flightClassDropdownBtn = document.getElementById("flight-class-dropdown-btn");
    _personsSelectionDropdown = document.querySelector(".persons-selection");
    _flightClassDropdown = document.querySelector(".flight-class-selection");
    _selectionDoneBtns = document.querySelectorAll(".selection-done-btn");
    // Get the parent element of each dropdown (persons and flight class) and set the positioning for a smooth user experience across all screen sizes
    _setDropdownDynamicStyling() {
        [
            "load",
            "resize"
        ].forEach((e)=>{
            window.addEventListener(e, ()=>{
                // Get the sizes of the parent element
                const parentSizes = this._dropdownInputsContainer.getBoundingClientRect();
                // Get the sizes of each dropdown button
                const selectPersonsBtnSizes = this._flightPersonsDropdownBtn.getBoundingClientRect();
                const selectFlightClassBtnSizes = this._flightClassDropdownBtn.getBoundingClientRect();
                // Set the top position so both dropdowns appear correctly on all screen sizes
                this._personsSelectionDropdown.style.top = `${selectPersonsBtnSizes.height + 10}px`;
                this._flightClassDropdown.style.top = `${parentSizes.height + 10}px`;
                // As the flight class button has a different 'left' value on desktop and tablet screen size, set the left position dynamically for the flight class dropdown list
                this._flightClassDropdown.style.left = `${selectFlightClassBtnSizes.left - parentSizes.left}px`;
            });
        });
    }
    // Use the event delegation technique and alternate the display of the dropdown list for persons selection and flight class selection
    // If one dropdown is open, close it when opening the other
    _showSelectionDropdown() {
        this._dropdownInputsContainer.addEventListener("click", (e)=>{
            const visibleDropdowns = document.querySelectorAll(".dropdown-visible");
            if (e.target.closest("#flight-persons-dropdown-btn")) {
                visibleDropdowns.forEach((e)=>e.classList.remove("dropdown-visible"));
                this._personsSelectionDropdown.classList.add("dropdown-visible");
                this._personsSelectionDropdown.scrollIntoView(false);
            }
            if (e.target.closest("#flight-class-dropdown-btn")) {
                visibleDropdowns.forEach((e)=>e.classList.remove("dropdown-visible"));
                this._flightClassDropdown.classList.add("dropdown-visible");
                this._flightClassDropdown.scrollIntoView(false);
            }
        });
    }
    // Hide the dropdown when the user clicks the 'Done' button
    _hideSelectionDropdown() {
        // Add a click event listener to the body event
        // Use event delegation to check for the possible outcomes of clicking outside the body that impact the removals of dropdown container visibility
        document.body.addEventListener("click", (e)=>{
            if (e.target.closest(".selection-number") || e.target.closest(".dropdown-visible") || e.target.closest(".dropdown-btn")) return;
            const visibleDropdowns = document.querySelectorAll(".dropdown-visible");
            visibleDropdowns.forEach((e)=>e.classList.remove("dropdown-visible"));
        });
        this._selectionDoneBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                e.target.closest(".dropdown-visible").classList.remove("dropdown-visible");
            });
        });
    }
}
exports.default = new SearchFormView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dn95k":[function(require,module,exports,__globalThis) {
// Import the button view so the text content of it can be dynamically updated based on user's selection
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _personsSelectionBtnView = require("./personsSelectionBtnView");
var _personsSelectionBtnViewDefault = parcelHelpers.interopDefault(_personsSelectionBtnView);
class PersonsSelectionView {
    // DOM elements
    _parentEl = document.querySelector(".persons-selection");
    _adultsParentEl = document.querySelector(".adults");
    _childrenParentEl = document.querySelector(".children");
    _childrenAgeParentEl = document.querySelector(".selection-children-age");
    _childrenSelectAgeEl = this._childrenAgeParentEl.getElementsByTagName("select");
    // Global variables
    _adults = 1;
    _children = 0;
    _childrenSelectAgeMarkup = [];
    // Create the handler render method and assign the handler parameter which will be passed as a function in controller.js
    _addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    // The clear markup method takes a parameter which will be the container of the markup to be cleared
    _clearMarkup(container) {
        container.innerHTML = "";
    }
    // Generate the adults markup and establish the behaviour of the increase and decrease buttons based on the user's selection
    // The total number of persons (adults + children) is never bigger than 9
    _generateAdultsMarkup() {
        this._clearMarkup(this._adultsParentEl);
        const markup = `
            <div class="selection-content d-flex flex-column">
                <h3 class="fs-5 fw-semibold">Adults</h3>
                <p class="m-0">Age 18+</p>
            </div>
            <div class="selection-number d-flex align-items-center">
                <button
                type="button"
                class="selection-decrease-btn border-0 rounded-3 focus-ring"
                ${this._adults === 1 ? "disabled" : ""}
                >
                <i class="fa-solid fa-minus"></i>
                </button>
                <span class="selection-count-adults">${this._adults}</span>
                <button
                type="button"
                class="selection-increase-btn border-0 rounded-3 focus-ring"
                ${this._adults + this._children === 9 ? "disabled" : ""}
                >
                <i class="fa-solid fa-plus"></i>
                </button>
            </div>
    `;
        this._adultsParentEl.insertAdjacentHTML("afterbegin", markup);
    }
    // Generate the children markup and establish the behaviour of the increase and decrease buttons based on the user's selection
    // The total number of persons (adults + children) is never bigger than 9
    _generateChildrenMarkup() {
        this._clearMarkup(this._childrenParentEl);
        const markup = `
            <div class="selection-content">
                <h3 class="fs-5 fw-semibold">Children</h3>
                <p class="m-0">Age 0 - 17</p>
            </div>
            <div class="selection-number d-flex align-items-center">
                <button
                type="button"
                class="selection-decrease-btn border-0 rounded-3 focus-ring"
                ${this._children === 0 ? "disabled" : ""}
                >
                <i class="fa-solid fa-minus"></i>
                </button>
                <span class="selection-count-children">${this._children}</span>
                <button
                type="button"
                class="selection-increase-btn border-0 rounded-3 focus-ring"
                ${this._adults + this._children === 9 ? "disabled" : ""}
                >
                <i class="fa-solid fa-plus"></i>
                </button>
            </div>
    `;
        this._childrenParentEl.insertAdjacentHTML("afterbegin", markup);
    }
    // Generate the select elements markup for each child age as the user increases the number of children
    _generateSelectChildAgeMarkup(counter) {
        // Use the childrenCount method to dynamically set the name and the label text content by adding the ordinal suffixes
        const selectMarkup = `
                 <label class="fs-5 fw-semibold" for="child-age-${counter}"
                        >${counter}${this._childrenCount(counter)} child's age</label
              >
              <select
                name="${counter}${this._childrenCount(counter)}-child-age"
                id="child-age-${counter}"
                class="px-3 py-2 rounded-3 focus-ring mb-3"
              >
                <option value="">Select age at time of flying</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
              </select>
          `;
        this._childrenSelectAgeMarkup.push(selectMarkup);
    }
    // Display the select elements
    _displaySelectChildAgeEl() {
        this._clearMarkup(this._childrenAgeParentEl);
        const markup = this._childrenSelectAgeMarkup.map((el)=>{
            return el;
        }).join("");
        this._childrenAgeParentEl.insertAdjacentHTML("afterbegin", markup);
    }
    // Apply all the above methods in the correct order as the user clicks the increase or decrease button for the adults
    // Use event delegation to establish which button the user clicked (increase or decrease)
    _adultsCounter() {
        this._adultsParentEl.addEventListener("click", (e)=>{
            if (e.target.closest(".selection-increase-btn")) {
                this._adults++;
                (0, _personsSelectionBtnViewDefault.default)._generateMarkup(this._adults, this._children);
                this._generateAdultsMarkup();
                this._generateChildrenMarkup();
            }
            if (e.target.closest(".selection-decrease-btn")) {
                this._adults--;
                (0, _personsSelectionBtnViewDefault.default)._generateMarkup(this._adults, this._children);
                this._generateAdultsMarkup();
                this._generateChildrenMarkup();
            }
        });
    }
    // Apply all the above methods in the correct order as the user clicks the increase or decrease button for the children
    // Use event delegation to establish which button the user clicked (increase or decrease)
    _childrenCounter() {
        this._childrenParentEl.addEventListener("click", (e)=>{
            if (e.target.closest(".selection-increase-btn")) {
                this._children++;
                (0, _personsSelectionBtnViewDefault.default)._generateMarkup(this._adults, this._children);
                this._generateSelectChildAgeMarkup(this._children);
                this._showChildrenSelectAgeParentEl();
                this._displaySelectChildAgeEl();
                this._generateChildrenMarkup();
                this._generateAdultsMarkup();
            }
            if (e.target.closest(".selection-decrease-btn")) {
                this._children--;
                (0, _personsSelectionBtnViewDefault.default)._generateMarkup(this._adults, this._children);
                this._removeChildAgeEl(this._childrenSelectAgeMarkup);
                this._displaySelectChildAgeEl();
                this._generateChildrenMarkup();
                this._generateAdultsMarkup();
            }
        });
    }
    // Hide the container of the child age select element
    _hideChildrenSelectAgeParentEl() {
        this._childrenAgeParentEl.style.display = "none";
    }
    // Display the container of the child age select element
    _showChildrenSelectAgeParentEl() {
        this._childrenAgeParentEl.style.display = "flex";
    }
    // This method removes the last child age select element from the array
    _removeChildAgeEl(array) {
        array.pop();
        if (array.length === 0) this._hideChildrenSelectAgeParentEl();
        return array;
    }
    // Set the ordinal suffixes as the children count increases or decreases
    _childrenCount(count) {
        switch(true){
            case count === 1:
                return "st";
            case count === 2:
                return "nd";
            case count === 3:
                return "rd";
            default:
                return "th";
        }
    }
}
exports.default = new PersonsSelectionView();

},{"./personsSelectionBtnView":"hLXZN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hLXZN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class PersonsSelectionBtnView {
    // DOM elements
    _personsBtn = document.getElementById("flight-persons-dropdown-btn");
    // The generate markup method will get 2 parameters which will allow the function to update the text content of the button dynamically based on the user's selections
    _generateMarkup(adults, children) {
        this._clearMarkup();
        const markup = `
    <i class="fa-solid fa-user-group"></i>
              <span>${adults}</span>
              Adult${adults > 1 ? "s" : ""},
              <span>${children}</span>
              Child${children > 1 ? "ren" : ""}
    <i class="fa-solid fa-chevron-down"></i>
    `;
        this._personsBtn.insertAdjacentHTML("afterbegin", markup);
    }
    // Clear markup method
    _clearMarkup() {
        this._personsBtn.innerHTML = "";
    }
}
exports.default = new PersonsSelectionBtnView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bMDTa":[function(require,module,exports,__globalThis) {
// Import the button view so the text content of it can be dynamically updated based on user's selection
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _flightClassSelectionBtnView = require("./flightClassSelectionBtnView");
var _flightClassSelectionBtnViewDefault = parcelHelpers.interopDefault(_flightClassSelectionBtnView);
class FlightClassSelectionView {
    // DOM elements
    _flightClassBtns = document.querySelectorAll(".flight-class-btn");
    // Global variables
    _flightClassQuery = "ECONOMY";
    _selectedBtn;
    // Create the handler render method and assign the handler parameter which will be passed as a function in controller.js
    _addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    // This method handles the flight class selection from the user and dynamically adds the 'selected' class
    _selectFlightClass() {
        this._flightClassBtns.forEach((btn)=>{
            btn.addEventListener("click", ()=>{
                this._flightClassBtns.forEach((btn)=>{
                    btn.classList.remove("selected");
                });
                btn.classList.add("selected");
                this._selectedBtn = btn;
                this._flightClassQuery = btn.dataset.flightClass;
                // Dynamically generate the button text content when the user clicks on a flight class
                (0, _flightClassSelectionBtnViewDefault.default)._generateMarkup(this._selectedBtn.textContent);
            });
        });
    }
}
exports.default = new FlightClassSelectionView();

},{"./flightClassSelectionBtnView":"5GwaT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5GwaT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class FlightClassSelectionBtnView {
    // DOM elements
    _flightsClassBtn = document.getElementById("flight-class-dropdown-btn");
    // Dynamically generate the markup for the flight class selection while setting the default value to 'Economy'
    _generateMarkup(flightClass = "Economy") {
        this._clearMarkup();
        const markup = `
    <i class="fa-solid fa-plane-circle-check"></i>
              <span>${flightClass}</span>
    <i class="fa-solid fa-chevron-down"></i>
    `;
        this._flightsClassBtn.insertAdjacentHTML("afterbegin", markup);
    }
    // Clear markup method
    _clearMarkup() {
        this._flightsClassBtn.innerHTML = "";
    }
}
exports.default = new FlightClassSelectionBtnView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7D4AX":[function(require,module,exports,__globalThis) {
// Import the parent class
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _locationSearchViewJs = require("./locationSearchView.js");
var _locationSearchViewJsDefault = parcelHelpers.interopDefault(_locationSearchViewJs);
class DepartureLocationSearchView extends (0, _locationSearchViewJsDefault.default) {
    // DOM elements
    _parentEl = document.querySelector(".departure-location-results");
    _searchResultsList = document.querySelector(".departure-location-results-list");
    _searchLocationWrapper = document.querySelector(".departure-location-wrapper");
    _searchLocationInput = document.getElementById("departure-location");
    // Global variables
    _departureLocationId = "";
    _transit = "departure";
    // Set the top position dynamically so the dropdown results list is displayed properly on small screen sizes
    setDynamicStyling() {
        [
            "load",
            "resize"
        ].forEach((e)=>{
            window.addEventListener(e, ()=>{
                const sizes = this._searchLocationWrapper.getBoundingClientRect();
                this._parentEl.style.top = `${sizes.height + 10}px`;
            });
        });
    }
}
exports.default = new DepartureLocationSearchView();

},{"./locationSearchView.js":"h4rke","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4rke":[function(require,module,exports,__globalThis) {
// This class is the parent class for departureLocationSearchView.js and arrivalLocationSearchView.js
// All the methods from this class will be available to the children classes
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class LocationSearchView {
    // Global variables
    _errorMessage = "No locations found for your query. Please try again!";
    // Create the handler search method and assign the handler parameter which will be passed as a function in controller.js
    _addHandlerSearch(handler) {
        // The input event makes sure the function is called as the user starts typing a location
        this._searchLocationInput.addEventListener("input", (e)=>{
            e.preventDefault();
            // Display the search results container if the length of the input's value is bigger than 1
            if (this._searchLocationInput.value.length >= 1) this._showContainerResults();
            else this._hideContainerResults();
            // After checking the if statement, call the handler
            handler();
        });
    }
    // Create the handler lose focus method and assign the handler parameter which will be passed as a function in controller.js
    _addHandlerLoseFocus(handler) {
        this._searchLocationInput.addEventListener("blur", ()=>{
            handler();
        });
    }
    // This method displays the results container
    _showContainerResults() {
        this._parentEl.classList.add("visible");
    }
    // This method hides the results container
    _hideContainerResults() {
        this._parentEl.classList.remove("visible");
    }
    // Clear markup method
    _clearMarkup() {
        this._searchResultsList.innerHTML = "";
    }
    // This method gets the input query
    _getQuery() {
        const query = this._searchLocationInput.value.toLowerCase();
        return query;
    }
    // Create the loading spinner markup and render it before getting the results from the API
    _renderSpinner() {
        const markup = `
        <div class="loader-container d-flex justify-content-center">
            <div class="loader"></div>
        </div>
    `;
        this._clearMarkup();
        this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
    }
    // This method renders the error message if there is an error in fetching the results
    _renderError(message = this._errorMessage) {
        this._clearMarkup();
        const markup = `
      <li class="text-center">
            <p class="mb-0">${message}</p>
      </li>
    `;
        this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
    }
    //
    _renderMarkup(data, transit) {
        // Clear the markup(loader spinner) before rendering the results of the user's search
        this._clearMarkup();
        const markup = data.map((item, index)=>{
            // Utility variables
            const currentItem = data[index];
            const previousItem = data[index - 1];
            // Check the item type (specific of the booking API) and render the markup for that type
            // Each item has other relevant properties which will be stored in data attributes and will later be assigned in an object as query parameter values
            // type = CITY
            if (currentItem.type === "CITY") return `
        <li class="result-list-item">
        <a
            href="#"
            class="${transit}-location-city d-flex align-items-center p-0 p-sm-3 text-decoration-none rounded-3"
            data-id="${item.id}"
            data-code="${item.code}"
            data-name="${item.name}"
            data-type="${item.type}"
            >
                  <div class="city-image">
                    <img
                      src=${!item.photoUri ? "./assets/images/plane-icon.png" : item.photoUri}
                      alt="City Image"
                      class="w-100 h-100 rounded-3"
                    />
                  </div>
                  <div class="city-details">
                    <h3 class="fs-5 fw-bold">
                      ${item.name}${!item.regionName ? "" : ", " + item.regionName}, ${item.countryName}
                      <span class="fw-normal">(${item.code})</span>
                    </h3>
                    <p class="m-0">All airports</p>
                  </div>
        </a>
        </li>
        `;
            // type = AIRPORT
            // Check if there are more airports in the same city and dynamically label the distance from each airport to the center of the city and add a small margin (ms-3) to distinguish this fact
            if (currentItem.type === "AIRPORT") {
                if (previousItem && currentItem.regionName === previousItem.regionName) return `
            <li class="result-list-item ms-3">
                    <a
                      href="#"
                      class="d-flex align-items-center text-decoration-none py-3 px-0 px-sm-3 rounded-3"
                      data-id="${item.id}"
                      data-code="${item.code}"
                      data-name="${item.cityName}"
                      data-type="${item.type}"
                    >
                      <div class="result-icon fs-2">
                        <i class="fa-solid fa-plane-up"></i>
                      </div>
                      <div class="result-content">
                        <p class="fw-bold mb-1">${item.code} ${item.name}</p>
                        <p class="m-0">${item.distanceToCity.value.toFixed(2)}${item.distanceToCity.unit} from city centre</p>
                      </div>
                    </a>
           </li>
          `;
                // If the previous item of AIRPORT type if from a different location, remove the margin and label the city name, the region name and the country name instead of the distance from the centre of the city
                if (previousItem && currentItem.regionName !== previousItem.regionName || data.length === 1) return `
            <li class="result-list-item">
                    <a
                      href="#"
                      class="d-flex align-items-center text-decoration-none py-3 px-0 px-sm-3 rounded-3"
                      data-id="${item.id}"
                      data-code="${item.code}"
                      data-name="${item.cityName}"
                      data-type="${item.type}"
                    >
                      <div class="result-icon fs-2">
                        <i class="fa-solid fa-plane-up"></i>
                      </div>
                      <div class="result-content">
                        <p class="fw-bold mb-1">${item.code} ${item.name}</p>
                        <p class="m-0">${item.cityName}${!item.regionName ? "" : ", " + item.regionName}, ${item.countryName}</p>
                      </div>
                    </a>
           </li>
          `;
            }
        }).join("");
        // Insert the markup in the parent element to be displayed to the user after passing the if statement analysis
        this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
    }
    // This method extracts the relevant data from the search option selected by the user and displays the value to the input
    _assignInputValue() {
        this._searchResultsList.addEventListener("mousedown", (e)=>{
            const target = e.target.closest("a");
            const code = target.dataset.code;
            const name = target.dataset.name;
            const id = target.dataset.id;
            const assignedValue = `${name} ${code}`;
            this._searchLocationInput.value = assignedValue;
            // Assign the query parameter values based on the transit (departure or arrival) and the id
            this._updateQueryValues(this._transit, id);
            this._searchLocationInput.setAttribute("disabled", true);
            this._displayDeleteInputButton();
        });
    }
    _displayDeleteInputButton() {
        this._searchLocationInput.nextElementSibling.classList.remove("d-none");
    }
    // This method updates the query paramaters values (departureLocationId and arrivalLocationId are stored in their respective classes)
    _updateQueryValues(transit, idValue) {
        if (transit === "departure") this._departureLocationId = idValue;
        if (transit === "arrival") this._arrivalLocationId = idValue;
    }
}
exports.default = LocationSearchView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gjx8h":[function(require,module,exports,__globalThis) {
// Import the parent class
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _locationSearchViewJs = require("./locationSearchView.js");
var _locationSearchViewJsDefault = parcelHelpers.interopDefault(_locationSearchViewJs);
class ArrivalLocationSearchView extends (0, _locationSearchViewJsDefault.default) {
    // DOM elements
    _parentEl = document.querySelector(".arrival-location-results");
    _searchResultsList = document.querySelector(".arrival-location-results-list");
    _searchLocationWrapper = document.querySelector(".arrival-location-wrapper");
    _searchLocationInput = document.getElementById("arrival-location");
    // Global variables
    _arrivalLocationId = "";
    _transit = "arrival";
}
exports.default = new ArrivalLocationSearchView();

},{"./locationSearchView.js":"h4rke","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8EtC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ReverseInputValuesBtn {
    // DOM elements
    _locationsReverseBtn = document.querySelector(".locations-reverse-button");
    // Create the handler reverse values method and assign the handler parameter which will be passed as a function in controller.js
    _addHandlerReverseValues(handler) {
        this._locationsReverseBtn.addEventListener("click", ()=>{
            handler();
        });
    }
}
exports.default = new ReverseInputValuesBtn();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Mc3D":[function(require,module,exports,__globalThis) {
// AirDatepicker library imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _airDatepicker = require("air-datepicker");
var _airDatepickerDefault = parcelHelpers.interopDefault(_airDatepicker);
var _airDatepickerCss = require("air-datepicker/air-datepicker.css");
var _en = require("air-datepicker/locale/en");
var _enDefault = parcelHelpers.interopDefault(_en);
class DatePickerView {
    // DOM elements
    _departureDate = document.getElementById("departure-date");
    _returnDate = document.getElementById("return-date");
    _departureDateWrapper = document.querySelector(".departure-date-wrapper");
    _arrivalDateWrapper = document.querySelector(".arrival-date-wrapper");
    // This object will store the query parameters values whichi are going to be necessary when the user clicks the search button
    _queryValues = {
        departureDate: "",
        returnDate: ""
    };
    // Dynamically create the today date
    _today = new Date().toISOString().split("T")[0];
    // AirDatepicker options for the departure date
    // The code for the options was taken from https://air-datepicker.com/examples
    _departureOptions = {
        position: "bottom center",
        buttons: [
            "clear"
        ],
        locale: (0, _enDefault.default),
        minDate: this._today,
        // Assign the selected date to the query values object
        onSelect: (date)=>{
            this._queryValues.departureDate = date;
            this._departureDate.setAttribute("disabled", true);
            this._displayDeleteInputButton(this._departureDate);
        }
    };
    // AirDatepicker options for the return date
    // The code for the options was taken from https://air-datepicker.com/examples
    _returnOptions = {
        position: "bottom center",
        buttons: [
            "clear"
        ],
        locale: (0, _enDefault.default),
        minDate: this._today,
        // Assign the selected date to the query values object
        onSelect: (date)=>{
            this._queryValues.returnDate = date;
            this._returnDate.setAttribute("disabled", true);
            this._displayDeleteInputButton(this._returnDate);
        }
    };
    // Initialize the date picker library for the departure date and return date inputs
    // The code for initializing the date picker was taken from https://air-datepicker.com/examples
    _setDatePicker() {
        new (0, _airDatepickerDefault.default)(this._departureDate, this._departureOptions);
        new (0, _airDatepickerDefault.default)(this._returnDate, this._returnOptions);
    }
    _displayDeleteInputButton(input) {
        input.nextElementSibling.classList.remove("d-none");
    }
}
exports.default = new DatePickerView();

},{"air-datepicker":"grWkP","air-datepicker/air-datepicker.css":"aM9jX","air-datepicker/locale/en":"6URka","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grWkP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _airDatepicker = require("./air-datepicker");
var _airDatepickerDefault = parcelHelpers.interopDefault(_airDatepicker);
exports.default = (0, _airDatepickerDefault.default);

},{"./air-datepicker":"9hsv2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hsv2":[function(require,module,exports,__globalThis) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    return function() {
        "use strict";
        var e = {
            d: function(t, i) {
                for(var s in i)e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: i[s]
                });
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
        }, t = {};
        e.d(t, {
            default: function() {
                return R;
            }
        });
        var i = {
            days: "days",
            months: "months",
            years: "years",
            day: "day",
            month: "month",
            year: "year",
            eventChangeViewDate: "changeViewDate",
            eventChangeCurrentView: "changeCurrentView",
            eventChangeFocusDate: "changeFocusDate",
            eventChangeSelectedDate: "changeSelectedDate",
            eventChangeTime: "changeTime",
            eventChangeLastSelectedDate: "changeLastSelectedDate",
            actionSelectDate: "selectDate",
            actionUnselectDate: "unselectDate",
            cssClassWeekend: "-weekend-"
        }, s = {
            classes: "",
            inline: !1,
            locale: {
                days: [
                    "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
                    "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
                    "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
                    "\u0421\u0440\u0435\u0434\u0430",
                    "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
                    "\u041F\u044F\u0442\u043D\u0438\u0446\u0430",
                    "\u0421\u0443\u0431\u0431\u043E\u0442\u0430"
                ],
                daysShort: [
                    "\u0412\u043E\u0441",
                    "\u041F\u043E\u043D",
                    "\u0412\u0442\u043E",
                    "\u0421\u0440\u0435",
                    "\u0427\u0435\u0442",
                    "\u041F\u044F\u0442",
                    "\u0421\u0443\u0431"
                ],
                daysMin: [
                    "\u0412\u0441",
                    "\u041F\u043D",
                    "\u0412\u0442",
                    "\u0421\u0440",
                    "\u0427\u0442",
                    "\u041F\u0442",
                    "\u0421\u0431"
                ],
                months: [
                    "\u042F\u043D\u0432\u0430\u0440\u044C",
                    "\u0424\u0435\u0432\u0440\u0430\u043B\u044C",
                    "\u041C\u0430\u0440\u0442",
                    "\u0410\u043F\u0440\u0435\u043B\u044C",
                    "\u041C\u0430\u0439",
                    "\u0418\u044E\u043D\u044C",
                    "\u0418\u044E\u043B\u044C",
                    "\u0410\u0432\u0433\u0443\u0441\u0442",
                    "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
                    "\u041E\u043A\u0442\u044F\u0431\u0440\u044C",
                    "\u041D\u043E\u044F\u0431\u0440\u044C",
                    "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"
                ],
                monthsShort: [
                    "\u042F\u043D\u0432",
                    "\u0424\u0435\u0432",
                    "\u041C\u0430\u0440",
                    "\u0410\u043F\u0440",
                    "\u041C\u0430\u0439",
                    "\u0418\u044E\u043D",
                    "\u0418\u044E\u043B",
                    "\u0410\u0432\u0433",
                    "\u0421\u0435\u043D",
                    "\u041E\u043A\u0442",
                    "\u041D\u043E\u044F",
                    "\u0414\u0435\u043A"
                ],
                today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
                clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
                dateFormat: "dd.MM.yyyy",
                timeFormat: "HH:mm",
                firstDay: 1
            },
            startDate: new Date,
            firstDay: "",
            weekends: [
                6,
                0
            ],
            dateFormat: "",
            altField: "",
            altFieldDateFormat: "T",
            toggleSelected: !0,
            keyboardNav: !0,
            selectedDates: !1,
            container: "",
            isMobile: !1,
            visible: !1,
            position: "bottom left",
            offset: 12,
            view: i.days,
            minView: i.days,
            showOtherMonths: !0,
            selectOtherMonths: !0,
            moveToOtherMonthsOnSelect: !0,
            showOtherYears: !0,
            selectOtherYears: !0,
            moveToOtherYearsOnSelect: !0,
            minDate: "",
            maxDate: "",
            disableNavWhenOutOfRange: !0,
            multipleDates: !1,
            multipleDatesSeparator: ", ",
            range: !1,
            dynamicRange: !0,
            buttons: !1,
            monthsField: "monthsShort",
            showEvent: "focus",
            autoClose: !1,
            fixedHeight: !1,
            prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
            nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
            navTitles: {
                days: "MMMM, <i>yyyy</i>",
                months: "yyyy",
                years: "yyyy1 - yyyy2"
            },
            timepicker: !1,
            onlyTimepicker: !1,
            dateTimeSeparator: " ",
            timeFormat: "",
            minHours: 0,
            maxHours: 24,
            minMinutes: 0,
            maxMinutes: 59,
            hoursStep: 1,
            minutesStep: 1,
            onSelect: !1,
            onChangeViewDate: !1,
            onChangeView: !1,
            onRenderCell: !1,
            onShow: !1,
            onHide: !1,
            onClickDayName: !1
        };
        function a(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
            return "string" == typeof e ? t.querySelector(e) : e;
        }
        function n() {
            let { tagName: e = "div", className: t = "", innerHtml: i = "", id: s = "", attrs: a = {} } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = document.createElement(e);
            return t && n.classList.add(...t.split(" ")), s && (n.id = s), i && (n.innerHTML = i), a && r(n, a), n;
        }
        function r(e, t) {
            for (let [i, s] of Object.entries(t))void 0 !== s && e.setAttribute(i, s);
            return e;
        }
        function o(e) {
            return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
        }
        function h(e) {
            let t = e.getHours(), { hours: i, dayPeriod: s } = l(t);
            return {
                year: e.getFullYear(),
                month: e.getMonth(),
                fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
                date: e.getDate(),
                fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                day: e.getDay(),
                hours: t,
                fullHours: d(t),
                hours12: i,
                dayPeriod: s,
                fullHours12: d(i),
                minutes: e.getMinutes(),
                fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
            };
        }
        function l(e) {
            return {
                dayPeriod: e > 11 ? "pm" : "am",
                hours: e % 12 == 0 ? 12 : e % 12
            };
        }
        function d(e) {
            return e < 10 ? "0" + e : e;
        }
        function c(e) {
            let t = 10 * Math.floor(e.getFullYear() / 10);
            return [
                t,
                t + 9
            ];
        }
        function u() {
            let e = [];
            for(var t = arguments.length, i = new Array(t), s = 0; s < t; s++)i[s] = arguments[s];
            return i.forEach((t)=>{
                if ("object" == typeof t) for(let i in t)t[i] && e.push(i);
                else t && e.push(t);
            }), e.join(" ");
        }
        function p(e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
            if (!e || !t) return !1;
            let a = h(e), n = h(t);
            return ({
                [i.days]: a.date === n.date && a.month === n.month && a.year === n.year,
                [i.months]: a.month === n.month && a.year === n.year,
                [i.years]: a.year === n.year
            })[s];
        }
        function m(e, t, i) {
            let s = g(e, !1).getTime(), a = g(t, !1).getTime();
            return i ? s >= a : s > a;
        }
        function v(e, t) {
            return !m(e, t, !0);
        }
        function g(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = new Date(e.getTime());
            return "boolean" != typeof t || t || function(e) {
                e.setHours(0, 0, 0, 0);
            }(i), i;
        }
        function D(e, t, i) {
            e.length ? e.forEach((e)=>{
                e.addEventListener(t, i);
            }) : e.addEventListener(t, i);
        }
        function y(e, t) {
            return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : y(e.parentNode, t));
        }
        function f(e, t, i) {
            return e > i ? i : e < t ? t : e;
        }
        function w(e) {
            for(var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)i[s - 1] = arguments[s];
            return i.filter((e)=>e).forEach((t)=>{
                for (let [i, s] of Object.entries(t))if (void 0 !== s && "[object Object]" === s.toString()) {
                    let t = void 0 !== e[i] ? e[i].toString() : void 0, a = s.toString(), n = Array.isArray(s) ? [] : {};
                    e[i] = e[i] ? t !== a ? n : e[i] : n, w(e[i], s);
                } else e[i] = s;
            }), e;
        }
        function b(e) {
            let t = e;
            return e instanceof Date || ("string" == typeof e && /^\d{4}-\d{2}-\d{2}$/.test(e) && (e += "T00:00:00"), t = new Date(e)), isNaN(t.getTime()) && (console.log(`Unable to convert value "${e}" to Date object`), t = !1), t;
        }
        function k(e) {
            let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
            return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
        }
        function $(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class C {
            constructor(){
                let { type: e, date: t, dp: i, opts: s, body: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                $(this, "focus", ()=>{
                    this.$cell.classList.add("-focus-"), this.focused = !0;
                }), $(this, "removeFocus", ()=>{
                    this.$cell.classList.remove("-focus-"), this.focused = !1;
                }), $(this, "select", ()=>{
                    this.$cell.classList.add("-selected-"), this.selected = !0;
                }), $(this, "removeSelect", ()=>{
                    this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = !1;
                }), $(this, "onChangeSelectedDate", ()=>{
                    this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
                }), $(this, "onChangeFocusDate", (e)=>{
                    if (!e) return void (this.focused && this.removeFocus());
                    let t = p(e, this.date, this.type);
                    t ? this.focus() : !t && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
                }), $(this, "render", ()=>(this.$cell.innerHTML = this._getHtml(), this._handleClasses(), this.$cell)), this.type = e, this.singleType = this.type.slice(0, -1), this.date = t, this.dp = i, this.opts = s, this.body = a, this.customData = !1, this.init();
            }
            init() {
                var e;
                let { onRenderCell: t } = this.opts;
                t && (this.customData = t({
                    date: this.date,
                    cellType: this.singleType,
                    datepicker: this.dp
                })), this._createElement(), this._bindDatepickerEvents(), null !== (e = this.customData) && void 0 !== e && e.disabled && this.dp.disableDate(this.date);
            }
            _bindDatepickerEvents() {
                this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            unbindDatepickerEvents() {
                this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            _createElement() {
                var e;
                let { year: t, month: i, date: s } = h(this.date), a = (null === (e = this.customData) || void 0 === e ? void 0 : e.attrs) || {};
                this.$cell = n({
                    attrs: {
                        "data-year": t,
                        "data-month": i,
                        "data-date": s,
                        ...a
                    }
                }), this.$cell.adpCell = this;
            }
            _getClassName() {
                var e;
                let t = new Date, { selectOtherMonths: s, selectOtherYears: a } = this.opts, { minDate: n, maxDate: r, isDateDisabled: o } = this.dp, { day: l } = h(this.date), d = this._isOutOfMinMaxRange(), c = o(this.date), m = u("air-datepicker-cell", `-${this.singleType}-`, {
                    "-current-": p(t, this.date, this.type),
                    "-min-date-": n && p(n, this.date, this.type),
                    "-max-date-": r && p(r, this.date, this.type)
                }), v = "";
                switch(this.type){
                    case i.days:
                        v = u({
                            "-weekend-": this.dp.isWeekend(l),
                            "-other-month-": this.isOtherMonth,
                            "-disabled-": this.isOtherMonth && !s || d || c
                        });
                        break;
                    case i.months:
                        v = u({
                            "-disabled-": d
                        });
                        break;
                    case i.years:
                        v = u({
                            "-other-decade-": this.isOtherDecade,
                            "-disabled-": d || this.isOtherDecade && !a
                        });
                }
                return u(m, v, null === (e = this.customData) || void 0 === e ? void 0 : e.classes).split(" ");
            }
            _getHtml() {
                var e;
                let { year: t, month: s, date: a } = h(this.date), { showOtherMonths: n, showOtherYears: r } = this.opts;
                if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;
                switch(this.type){
                    case i.days:
                        return !n && this.isOtherMonth ? "" : a;
                    case i.months:
                        return this.dp.locale[this.opts.monthsField][s];
                    case i.years:
                        return !r && this.isOtherDecade ? "" : t;
                }
            }
            _isOutOfMinMaxRange() {
                let { minDate: e, maxDate: t } = this.dp, { type: s, date: a } = this, { month: n, year: r, date: o } = h(a), l = s === i.days, d = s === i.years, c = !!e && new Date(r, d ? e.getMonth() : n, l ? o : e.getDate()), u = !!t && new Date(r, d ? t.getMonth() : n, l ? o : t.getDate());
                return e && t ? v(c, e) || m(u, t) : e ? v(c, e) : t ? m(u, t) : void 0;
            }
            destroy() {
                this.unbindDatepickerEvents();
            }
            _handleRangeStatus() {
                const { selectedDates: e, focusDate: t, rangeDateTo: i, rangeDateFrom: s } = this.dp, a = e.length;
                if (!a) return;
                let n = s, r = i;
                if (1 === a && t) {
                    const i = m(t, e[0]);
                    n = i ? e[0] : t, r = i ? t : e[0];
                }
                let o = u({
                    "-in-range-": n && r && (h = this.date, l = n, d = r, m(h, l) && v(h, d)),
                    "-range-from-": n && p(this.date, n, this.type),
                    "-range-to-": r && p(this.date, r, this.type)
                });
                var h, l, d;
                this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), o && this.$cell.classList.add(...o.split(" "));
            }
            _handleSelectedStatus() {
                let e = this.dp._checkIfDateIsSelected(this.date, this.type);
                e ? this.select() : !e && this.selected && this.removeSelect();
            }
            _handleInitialFocusStatus() {
                p(this.dp.focusDate, this.date, this.type) && this.focus();
            }
            _handleClasses() {
                this.$cell.setAttribute("class", ""), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), this.dp.opts.range && this._handleRangeStatus()), this.$cell.classList.add(...this._getClassName());
            }
            get isDisabled() {
                return this.$cell.matches(".-disabled-");
            }
            get isOtherMonth() {
                return this.dp.isOtherMonth(this.date);
            }
            get isOtherDecade() {
                return this.dp.isOtherDecade(this.date);
            }
        }
        function _(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        let M = {
            [i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,
            [i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`,
            [i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>`
        };
        const S = ".air-datepicker-cell";
        class T {
            constructor(e){
                let { dp: t, type: s, opts: a } = e;
                _(this, "handleClick", (e)=>{
                    let t = e.target.closest(S).adpCell;
                    if (t.isDisabled) return;
                    if (!this.dp.isMinViewReached) return void this.dp.down();
                    let i = this.dp._checkIfDateIsSelected(t.date, t.type);
                    i ? this.dp._handleAlreadySelectedDates(i, t.date) : this.dp.selectDate(t.date);
                }), _(this, "handleDayNameClick", (e)=>{
                    let t = e.target.getAttribute("data-day-index");
                    this.opts.onClickDayName({
                        dayIndex: Number(t),
                        datepicker: this.dp
                    });
                }), _(this, "onChangeCurrentView", (e)=>{
                    e !== this.type ? this.hide() : (this.show(), this.render());
                }), _(this, "onMouseOverCell", (e)=>{
                    let t = y(e.target, S);
                    this.dp.setFocusDate(!!t && t.adpCell.date);
                }), _(this, "onMouseOutCell", ()=>{
                    this.dp.setFocusDate(!1);
                }), _(this, "onClickBody", (e)=>{
                    let { onClickDayName: t } = this.opts, i = e.target;
                    i.closest(S) && this.handleClick(e), t && i.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e);
                }), _(this, "onMouseDown", (e)=>{
                    this.pressed = !0;
                    let t = y(e.target, S), i = t && t.adpCell;
                    p(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = !0), p(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = !0);
                }), _(this, "onMouseMove", (e)=>{
                    if (!this.pressed || !this.dp.isMinViewReached) return;
                    e.preventDefault();
                    let t = y(e.target, S), i = t && t.adpCell, { selectedDates: s, rangeDateTo: a, rangeDateFrom: n } = this.dp;
                    if (!i || i.isDisabled) return;
                    let { date: r } = i;
                    if (2 === s.length) {
                        if (this.rangeFromFocused && !m(r, a)) {
                            let { hours: e, minutes: t } = h(n);
                            r.setHours(e), r.setMinutes(t), this.dp.rangeDateFrom = r, this.dp.replaceDate(n, r);
                        }
                        if (this.rangeToFocused && !v(r, n)) {
                            let { hours: e, minutes: t } = h(a);
                            r.setHours(e), r.setMinutes(t), this.dp.rangeDateTo = r, this.dp.replaceDate(a, r);
                        }
                    }
                }), _(this, "onMouseUp", ()=>{
                    this.pressed = !1, this.rangeFromFocused = !1, this.rangeToFocused = !1;
                }), _(this, "onChangeViewDate", (e, t)=>{
                    if (!this.isVisible) return;
                    let s = c(e), a = c(t);
                    switch(this.dp.currentView){
                        case i.days:
                            if (p(e, t, i.months)) return;
                            break;
                        case i.months:
                            if (p(e, t, i.years)) return;
                            break;
                        case i.years:
                            if (s[0] === a[0] && s[1] === a[1]) return;
                    }
                    this.render();
                }), _(this, "render", ()=>{
                    this.destroyCells(), this._generateCells(), this.cells.forEach((e)=>{
                        this.$cells.appendChild(e.render());
                    });
                }), this.dp = t, this.type = s, this.opts = a, this.cells = [], this.$el = "", this.pressed = !1, this.isVisible = !0, this.init();
            }
            init() {
                this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _bindEvents() {
                let { range: e, dynamicRange: t } = this.opts;
                D(this.$el, "mouseover", this.onMouseOverCell), D(this.$el, "mouseout", this.onMouseOutCell), D(this.$el, "click", this.onClickBody), e && t && (D(this.$el, "mousedown", this.onMouseDown), D(this.$el, "mousemove", this.onMouseMove), D(window.document, "mouseup", this.onMouseUp));
            }
            _bindDatepickerEvents() {
                this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            _buildBaseHtml() {
                this.$el = n({
                    className: `air-datepicker-body -${this.type}-`,
                    innerHtml: M[this.type]
                }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
            }
            _getDayNamesHtml() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t = "", s = this.dp.isWeekend, { onClickDayName: a } = this.opts, n = e, r = 0;
                for(; r < 7;){
                    let e = n % 7;
                    t += `<div class="${u("air-datepicker-body--day-name", {
                        [i.cssClassWeekend]: s(e),
                        "-clickable-": !!a
                    })}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`, r++, n++;
                }
                return t;
            }
            renderDayNames() {
                this.$names.innerHTML = this._getDayNamesHtml();
            }
            _generateCell(e) {
                let { type: t, dp: i, opts: s } = this;
                return new C({
                    type: t,
                    dp: i,
                    opts: s,
                    date: e,
                    body: this
                });
            }
            _generateCells() {
                T.getDatesFunction(this.type)(this.dp, (e)=>{
                    this.cells.push(this._generateCell(e));
                });
            }
            show() {
                this.isVisible = !0, this.$el.classList.remove("-hidden-");
            }
            hide() {
                this.isVisible = !1, this.$el.classList.add("-hidden-");
            }
            destroyCells() {
                this.cells.forEach((e)=>e.destroy()), this.cells = [], this.$cells.innerHTML = "";
            }
            destroy() {
                this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            static getDaysDates(e, t) {
                let { viewDate: i, opts: { fixedHeight: s }, locale: { firstDay: a } } = e, n = o(i), { year: r, month: l } = h(i), d = new Date(r, l, 1), c = new Date(r, l, n), u = d.getDay() - a, p = 6 - c.getDay() + a;
                u = u < 0 ? u + 7 : u, p = p > 6 ? p - 7 : p;
                let m = function(e, t) {
                    let { year: i, month: s, date: a } = h(e);
                    return new Date(i, s, a - t);
                }(d, u), v = n + u + p, g = m.getDate(), { year: D, month: y } = h(m), f = 0;
                s && (v = 42);
                const w = [];
                for(; f < v;){
                    let e = new Date(D, y, g + f);
                    t && t(e), w.push(e), f++;
                }
                return w;
            }
            static getMonthsDates(e, t) {
                let { year: i } = e.parsedViewDate, s = 0, a = [];
                for(; s < 12;){
                    const e = new Date(i, s);
                    a.push(e), t && t(e), s++;
                }
                return a;
            }
            static getYearsDates(e, t) {
                let i = c(e.viewDate), s = i[0] - 1, a = i[1] + 1, n = s, r = [];
                for(; n <= a;){
                    const e = new Date(n, 0);
                    r.push(e), t && t(e), n++;
                }
                return r;
            }
            static getDatesFunction() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
                return ({
                    [i.days]: T.getDaysDates,
                    [i.months]: T.getMonthsDates,
                    [i.years]: T.getYearsDates
                })[e];
            }
        }
        function F(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class V {
            constructor(e){
                let { dp: t, opts: i } = e;
                F(this, "onClickNav", (e)=>{
                    let t = y(e.target, ".air-datepicker-nav--action");
                    if (!t) return;
                    let i = t.dataset.action;
                    this.dp[i]();
                }), F(this, "onChangeViewDate", ()=>{
                    this.render(), this._resetNavStatus(), this.handleNavStatus();
                }), F(this, "onChangeCurrentView", ()=>{
                    this.render(), this._resetNavStatus(), this.handleNavStatus();
                }), F(this, "onClickNavTitle", ()=>{
                    this.dp.isFinalView || this.dp.up();
                }), F(this, "update", ()=>{
                    let { prevHtml: e, nextHtml: t } = this.opts;
                    this.$prev.innerHTML = e, this.$next.innerHTML = t, this._resetNavStatus(), this.render(), this.handleNavStatus();
                }), F(this, "renderDelay", ()=>{
                    setTimeout(this.render);
                }), F(this, "render", ()=>{
                    this.$title.innerHTML = this._getTitle(), function(e, t) {
                        for(let i in t)t[i] ? e.classList.add(i) : e.classList.remove(i);
                    }(this.$title, {
                        "-disabled-": this.dp.isFinalView
                    });
                }), this.dp = t, this.opts = i, this.init();
            }
            init() {
                this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _defineDOM() {
                this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), this.$next = a('[data-action="next"]', this.$el);
            }
            _bindEvents() {
                this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
            }
            _bindDatepickerEvents() {
                this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
            }
            destroy() {
                this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
            }
            _createElement() {
                this.$el = n({
                    tagName: "nav",
                    className: "air-datepicker-nav"
                });
            }
            _getTitle() {
                let { dp: e, opts: t } = this, i = t.navTitles[e.currentView];
                return "function" == typeof i ? i(e) : e.formatDate(e.viewDate, i);
            }
            handleNavStatus() {
                let { disableNavWhenOutOfRange: e } = this.opts, { minDate: t, maxDate: s } = this.dp;
                if (!t && !s || !e) return;
                let { year: a, month: n } = this.dp.parsedViewDate, r = !!t && h(t), o = !!s && h(s);
                switch(this.dp.currentView){
                    case i.days:
                        t && r.month >= n && r.year >= a && this._disableNav("prev"), s && o.month <= n && o.year <= a && this._disableNav("next");
                        break;
                    case i.months:
                        t && r.year >= a && this._disableNav("prev"), s && o.year <= a && this._disableNav("next");
                        break;
                    case i.years:
                        {
                            let e = c(this.dp.viewDate);
                            t && r.year >= e[0] && this._disableNav("prev"), s && o.year <= e[1] && this._disableNav("next");
                            break;
                        }
                }
            }
            _disableNav(e) {
                a('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
            }
            _resetNavStatus() {
                !function(e) {
                    for(var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)i[s - 1] = arguments[s];
                    e.length ? e.forEach((e)=>{
                        e.classList.remove(...i);
                    }) : e.classList.remove(...i);
                }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
            }
            _buildBaseHtml() {
                let { prevHtml: e, nextHtml: t } = this.opts;
                this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`;
            }
            get isNavIsFunction() {
                let { navTitles: e } = this.opts;
                return Object.keys(e).find((t)=>"function" == typeof e[t]);
            }
        }
        var x = {
            today: {
                content: (e)=>e.locale.today,
                onClick: (e)=>e.setViewDate(new Date)
            },
            clear: {
                content: (e)=>e.locale.clear,
                onClick: (e)=>e.clear()
            }
        };
        class H {
            constructor(e){
                let { dp: t, opts: i } = e;
                this.dp = t, this.opts = i, this.init();
            }
            init() {
                this.createElement(), this.render();
            }
            createElement() {
                this.$el = n({
                    className: "air-datepicker-buttons"
                });
            }
            destroy() {
                this.$el.parentNode.removeChild(this.$el);
            }
            clearHtml() {
                return this.$el.innerHTML = "", this;
            }
            generateButtons() {
                let { buttons: e } = this.opts;
                Array.isArray(e) || (e = [
                    e
                ]), e.forEach((e)=>{
                    let t = e;
                    "string" == typeof e && x[e] && (t = x[e]);
                    let i = this.createButton(t);
                    t.onClick && this.attachEventToButton(i, t.onClick), this.$el.appendChild(i);
                });
            }
            attachEventToButton(e, t) {
                e.addEventListener("click", ()=>{
                    t(this.dp);
                });
            }
            createButton(e) {
                let { content: t, className: i, tagName: s = "button", attrs: a = {} } = e;
                return n({
                    tagName: s,
                    innerHtml: `<span tabindex='-1'>${"function" == typeof t ? t(this.dp) : t}</span>`,
                    className: u("air-datepicker-button", i),
                    attrs: a
                });
            }
            render() {
                this.generateButtons();
            }
        }
        function E(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class L {
            constructor(){
                let { opts: e, dp: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                E(this, "toggleTimepickerIsActive", (e)=>{
                    this.dp.timepickerIsActive = e;
                }), E(this, "onChangeSelectedDate", (e)=>{
                    let { date: t, updateTime: i = !1 } = e;
                    t && (this.setMinMaxTime(t), this.setCurrentTime(!!i && t), this.addTimeToDate(t));
                }), E(this, "onChangeLastSelectedDate", (e)=>{
                    e && (this.setTime(e), this.render());
                }), E(this, "onChangeInputRange", (e)=>{
                    let t = e.target;
                    this[t.getAttribute("name")] = t.value, this.updateText(), this.dp.trigger(i.eventChangeTime, {
                        hours: this.hours,
                        minutes: this.minutes
                    });
                }), E(this, "onMouseEnterLeave", (e)=>{
                    let t = e.target.getAttribute("name"), i = this.$minutesText;
                    "hours" === t && (i = this.$hoursText), i.classList.toggle("-focus-");
                }), E(this, "onFocus", ()=>{
                    this.toggleTimepickerIsActive(!0);
                }), E(this, "onBlur", ()=>{
                    this.toggleTimepickerIsActive(!1);
                }), this.opts = e, this.dp = t;
                let { timeFormat: s } = this.dp.locale;
                s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0), this.init();
            }
            init() {
                this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
            }
            bindDatepickerEvents() {
                this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
            }
            bindDOMEvents() {
                let e = "input";
                navigator.userAgent.match(/trident/gi) && (e = "change"), D(this.$ranges, e, this.onChangeInputRange), D(this.$ranges, "mouseenter", this.onMouseEnterLeave), D(this.$ranges, "mouseleave", this.onMouseEnterLeave), D(this.$ranges, "focus", this.onFocus), D(this.$ranges, "mousedown", this.onFocus), D(this.$ranges, "blur", this.onBlur);
            }
            createElement() {
                this.$el = n({
                    className: u("air-datepicker-time", {
                        "-am-pm-": this.dp.ampm
                    })
                });
            }
            destroy() {
                this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
            }
            buildHtml() {
                let { ampm: e, hours: t, displayHours: i, minutes: s, minHours: a, minMinutes: n, maxHours: r, maxMinutes: o, dayPeriod: h, opts: { hoursStep: l, minutesStep: c } } = this;
                this.$el.innerHTML = `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s)}</span>   ` + (e ? `<span class='air-datepicker-time--current-ampm'>${h}</span>` : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + `      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">` + `      <input type="range" name="minutes" value="${s}" min="${n}" max="${o}" step="${c}"/>   </div></div>`;
            }
            defineDOM() {
                let e = (e)=>a(e, this.$el);
                this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e('[name="hours"]'), this.$minutes = e('[name="minutes"]'), this.$hoursText = e(".air-datepicker-time--current-hours"), this.$minutesText = e(".air-datepicker-time--current-minutes"), this.$ampm = e(".air-datepicker-time--current-ampm");
            }
            setTime(e) {
                this.setMinMaxTime(e), this.setCurrentTime(e);
            }
            addTimeToDate(e) {
                e && (e.setHours(this.hours), e.setMinutes(this.minutes));
            }
            setMinMaxTime(e) {
                if (this.setMinMaxTimeFromOptions(), e) {
                    let { minDate: t, maxDate: i } = this.dp;
                    t && p(e, t) && this.setMinTimeFromMinDate(t), i && p(e, i) && this.setMaxTimeFromMaxDate(i);
                }
            }
            setCurrentTime(e) {
                let { hours: t, minutes: i } = e ? h(e) : this;
                this.hours = f(t, this.minHours, this.maxHours), this.minutes = f(i, this.minMinutes, this.maxMinutes);
            }
            setMinMaxTimeFromOptions() {
                let { minHours: e, minMinutes: t, maxHours: i, maxMinutes: s } = this.opts;
                this.minHours = f(e, 0, 23), this.minMinutes = f(t, 0, 59), this.maxHours = f(i, 0, 23), this.maxMinutes = f(s, 0, 59);
            }
            setMinTimeFromMinDate(e) {
                let { lastSelectedDate: t } = this.dp;
                this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
            }
            setMaxTimeFromMaxDate(e) {
                let { lastSelectedDate: t } = this.dp;
                this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
            }
            updateSliders() {
                r(this.$hours, {
                    min: this.minHours,
                    max: this.maxHours
                }).value = this.hours, r(this.$minutes, {
                    min: this.minMinutes,
                    max: this.maxMinutes
                }).value = this.minutes;
            }
            updateText() {
                this.$hoursText.innerHTML = d(this.displayHours), this.$minutesText.innerHTML = d(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
            }
            set hours(e) {
                this._hours = e;
                let { hours: t, dayPeriod: i } = l(e);
                this.displayHours = this.ampm ? t : e, this.dayPeriod = i;
            }
            get hours() {
                return this._hours;
            }
            render() {
                this.updateSliders(), this.updateText();
            }
        }
        function O(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class A {
            constructor(e){
                let { dp: t, opts: i } = e;
                O(this, "pressedKeys", new Set), O(this, "hotKeys", new Map([
                    [
                        [
                            [
                                "Control",
                                "ArrowRight"
                            ],
                            [
                                "Control",
                                "ArrowUp"
                            ]
                        ],
                        (e)=>e.month++
                    ],
                    [
                        [
                            [
                                "Control",
                                "ArrowLeft"
                            ],
                            [
                                "Control",
                                "ArrowDown"
                            ]
                        ],
                        (e)=>e.month--
                    ],
                    [
                        [
                            [
                                "Shift",
                                "ArrowRight"
                            ],
                            [
                                "Shift",
                                "ArrowUp"
                            ]
                        ],
                        (e)=>e.year++
                    ],
                    [
                        [
                            [
                                "Shift",
                                "ArrowLeft"
                            ],
                            [
                                "Shift",
                                "ArrowDown"
                            ]
                        ],
                        (e)=>e.year--
                    ],
                    [
                        [
                            [
                                "Alt",
                                "ArrowRight"
                            ],
                            [
                                "Alt",
                                "ArrowUp"
                            ]
                        ],
                        (e)=>e.year += 10
                    ],
                    [
                        [
                            [
                                "Alt",
                                "ArrowLeft"
                            ],
                            [
                                "Alt",
                                "ArrowDown"
                            ]
                        ],
                        (e)=>e.year -= 10
                    ],
                    [
                        [
                            "Control",
                            "Shift",
                            "ArrowUp"
                        ],
                        (e, t)=>t.up()
                    ]
                ])), O(this, "handleHotKey", (e)=>{
                    let t = this.hotKeys.get(e), i = h(this.getInitialFocusDate());
                    t(i, this.dp);
                    let { year: s, month: a, date: n } = i, r = o(new Date(s, a));
                    r < n && (n = r);
                    let l = this.dp.getClampedDate(new Date(s, a, n));
                    this.dp.setFocusDate(l, {
                        viewDateTransition: !0
                    });
                }), O(this, "isHotKeyPressed", ()=>{
                    let e = !1, t = this.pressedKeys.size, i = (e)=>this.pressedKeys.has(e);
                    for (let [s] of this.hotKeys){
                        if (e) break;
                        if (Array.isArray(s[0])) s.forEach((a)=>{
                            e || t !== a.length || (e = a.every(i) && s);
                        });
                        else {
                            if (t !== s.length) continue;
                            e = s.every(i) && s;
                        }
                    }
                    return e;
                }), O(this, "isArrow", (e)=>e >= 37 && e <= 40), O(this, "onKeyDown", (e)=>{
                    let { key: t, which: i } = e, { dp: s, dp: { focusDate: a }, opts: n } = this;
                    this.registerKey(t);
                    let r = this.isHotKeyPressed();
                    if (r) return e.preventDefault(), void this.handleHotKey(r);
                    if (this.isArrow(i)) return e.preventDefault(), void this.focusNextCell(t);
                    if ("Enter" === t) {
                        if (s.currentView !== n.minView) return void s.down();
                        if (a) {
                            let e = s._checkIfDateIsSelected(a);
                            return void (e ? s._handleAlreadySelectedDates(e, a) : s.selectDate(a));
                        }
                    }
                    "Escape" === t && this.dp.hide();
                }), O(this, "onKeyUp", (e)=>{
                    this.removeKey(e.key);
                }), this.dp = t, this.opts = i, this.init();
            }
            init() {
                this.bindKeyboardEvents();
            }
            bindKeyboardEvents() {
                let { $el: e } = this.dp;
                e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
            }
            destroy() {
                let { $el: e } = this.dp;
                e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
            }
            getInitialFocusDate() {
                let { focusDate: e, currentView: t, selectedDates: s, parsedViewDate: { year: a, month: n } } = this.dp, r = e || s[s.length - 1];
                if (!r) switch(t){
                    case i.days:
                        r = new Date(a, n, (new Date).getDate());
                        break;
                    case i.months:
                        r = new Date(a, n, 1);
                        break;
                    case i.years:
                        r = new Date(a, 0, 1);
                }
                return r;
            }
            focusNextCell(e) {
                let t = this.getInitialFocusDate(), { currentView: s } = this.dp, { days: a, months: n, years: r } = i, o = h(t), l = o.year, d = o.month, c = o.date;
                switch(e){
                    case "ArrowLeft":
                        s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
                        break;
                    case "ArrowUp":
                        s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
                        break;
                    case "ArrowRight":
                        s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
                        break;
                    case "ArrowDown":
                        s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
                }
                let u = this.dp.getClampedDate(new Date(l, d, c));
                this.dp.setFocusDate(u, {
                    viewDateTransition: !0
                });
            }
            registerKey(e) {
                this.pressedKeys.add(e);
            }
            removeKey(e) {
                this.pressedKeys.delete(e);
            }
        }
        let N = {
            on (e, t) {
                this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [
                    t
                ];
            },
            off (e, t) {
                this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter((e)=>e !== t));
            },
            removeAllEvents () {
                this.__events = {};
            },
            trigger (e) {
                for(var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)i[s - 1] = arguments[s];
                this.__events && this.__events[e] && this.__events[e].forEach((e)=>{
                    e(...i);
                });
            }
        };
        function I(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        let P = "", j = "", B = !1;
        class R {
            static buildGlobalContainer(e) {
                B = !0, P = n({
                    className: e,
                    id: e
                }), a("body").appendChild(P);
            }
            constructor(e, t){
                var r = this;
                if (I(this, "viewIndexes", [
                    i.days,
                    i.months,
                    i.years
                ]), I(this, "next", ()=>{
                    let { year: e, month: t } = this.parsedViewDate;
                    switch(this.currentView){
                        case i.days:
                            this.setViewDate(new Date(e, t + 1, 1));
                            break;
                        case i.months:
                            this.setViewDate(new Date(e + 1, t, 1));
                            break;
                        case i.years:
                            this.setViewDate(new Date(e + 10, 0, 1));
                    }
                }), I(this, "prev", ()=>{
                    let { year: e, month: t } = this.parsedViewDate;
                    switch(this.currentView){
                        case i.days:
                            this.setViewDate(new Date(e, t - 1, 1));
                            break;
                        case i.months:
                            this.setViewDate(new Date(e - 1, t, 1));
                            break;
                        case i.years:
                            this.setViewDate(new Date(e - 10, 0, 1));
                    }
                }), I(this, "_finishHide", ()=>{
                    this.hideAnimation = !1, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
                }), I(this, "setPosition", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if ("function" == typeof (e = e || r.opts.position)) return void (r.customHide = e({
                        $datepicker: r.$datepicker,
                        $target: r.$el,
                        $pointer: r.$pointer,
                        isViewChange: t,
                        done: r._finishHide
                    }));
                    let i, s, { isMobile: a } = r.opts, n = r.$el.getBoundingClientRect(), o = r.$el.getBoundingClientRect(), h = r.$datepicker.offsetParent, l = r.$el.offsetParent, d = r.$datepicker.getBoundingClientRect(), c = e.split(" "), u = window.scrollY, p = window.scrollX, m = r.opts.offset, v = c[0], g = c[1];
                    if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%";
                    else {
                        if (h === l && h !== document.body && (o = {
                            top: r.$el.offsetTop,
                            left: r.$el.offsetLeft,
                            width: n.width,
                            height: r.$el.offsetHeight
                        }, u = 0, p = 0), h !== l && h !== document.body) {
                            let e = h.getBoundingClientRect();
                            o = {
                                top: n.top - e.top,
                                left: n.left - e.left,
                                width: n.width,
                                height: n.height
                            }, u = 0, p = 0;
                        }
                        switch(v){
                            case "top":
                                i = o.top - d.height - m;
                                break;
                            case "right":
                                s = o.left + o.width + m;
                                break;
                            case "bottom":
                                i = o.top + o.height + m;
                                break;
                            case "left":
                                s = o.left - d.width - m;
                        }
                        switch(g){
                            case "top":
                                i = o.top;
                                break;
                            case "right":
                                s = o.left + o.width - d.width;
                                break;
                            case "bottom":
                                i = o.top + o.height - d.height;
                                break;
                            case "left":
                                s = o.left;
                                break;
                            case "center":
                                /left|right/.test(v) ? i = o.top + o.height / 2 - d.height / 2 : s = o.left + o.width / 2 - d.width / 2;
                        }
                        r.$datepicker.style.cssText = `left: ${s + p}px; top: ${i + u}px`;
                    }
                }), I(this, "_setInputValue", ()=>{
                    let { opts: e, $altField: t, locale: { dateFormat: i } } = this, { altFieldDateFormat: s, altField: a } = e;
                    a && t && (t.value = this._getInputValue(s)), this.$el.value = this._getInputValue(i);
                }), I(this, "_getInputValue", (e)=>{
                    let { selectedDates: t, opts: i } = this, { multipleDates: s, multipleDatesSeparator: a } = i;
                    if (!t.length) return "";
                    let n = "function" == typeof e, r = n ? e(s ? t : t[0]) : t.map((t)=>this.formatDate(t, e));
                    return r = n ? r : r.join(a), r;
                }), I(this, "_checkIfDateIsSelected", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days, s = !1;
                    return r.selectedDates.some((i)=>{
                        let a = p(e, i, t);
                        return s = a && i, a;
                    }), s;
                }), I(this, "_scheduleCallAfterTransition", (e)=>{
                    this._cancelScheduledCall(), e && e(!1), this._onTransitionEnd = ()=>{
                        e && e(!0);
                    }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, {
                        once: !0
                    });
                }), I(this, "_cancelScheduledCall", ()=>{
                    this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
                }), I(this, "setViewDate", (e)=>{
                    if (!((e = b(e)) instanceof Date)) return;
                    if (p(e, this.viewDate)) return;
                    let t = this.viewDate;
                    this.viewDate = e;
                    let { onChangeViewDate: s } = this.opts;
                    if (s) {
                        let { month: e, year: t } = this.parsedViewDate;
                        s({
                            month: e,
                            year: t,
                            decade: this.curDecade
                        });
                    }
                    this.trigger(i.eventChangeViewDate, e, t);
                }), I(this, "setFocusDate", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (!e || (e = b(e)) instanceof Date) && (r.focusDate = e, r.trigger(i.eventChangeFocusDate, e, t));
                }), I(this, "setCurrentView", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (r.viewIndexes.includes(e)) {
                        if (r.currentView = e, r.elIsInput && r.visible && r.setPosition(void 0, !0), r.trigger(i.eventChangeCurrentView, e), !r.views[e]) {
                            let t = r.views[e] = new T({
                                dp: r,
                                opts: r.opts,
                                type: e
                            });
                            r.shouldUpdateDOM && r.$content.appendChild(t.$el);
                        }
                        r.opts.onChangeView && !t.silent && r.opts.onChangeView(e);
                    }
                }), I(this, "_updateLastSelectedDate", (e)=>{
                    this.lastSelectedDate = e, this.trigger(i.eventChangeLastSelectedDate, e);
                }), I(this, "destroy", ()=>{
                    if (this.isDestroyed) return;
                    let { showEvent: e, isMobile: t } = this.opts, i = this.$datepicker.parentNode;
                    i && i.removeChild(this.$datepicker), this.$el.removeEventListener(e, this._onFocus), this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), t && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), this.views = null, this.nav = null, this.$datepicker = null, this.opts = {}, this.$customContainer = null, this.viewDate = null, this.focusDate = null, this.selectedDates = [], this.rangeDateFrom = null, this.rangeDateTo = null, this.isDestroyed = !0;
                }), I(this, "update", function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = w({}, r.opts), { silent: a } = t;
                    w(r.opts, e);
                    let { timepicker: n, buttons: o, range: h, selectedDates: l, isMobile: d } = r.opts, c = r.visible || r.treatAsInline;
                    r._createMinMaxDates(), r._limitViewDateByMaxMinDates(), r._handleLocale(), l && (r.selectedDates = [], r.selectDate(l, {
                        silent: a
                    })), e.view && r.setCurrentView(e.view, {
                        silent: a
                    }), r._setInputValue(), s.range && !h ? (r.rangeDateTo = !1, r.rangeDateFrom = !1) : !s.range && h && r.selectedDates.length && (r.rangeDateFrom = r.selectedDates[0], r.rangeDateTo = r.selectedDates[1]), s.timepicker && !n ? (c && r.timepicker.destroy(), r.timepicker = !1, r.$timepicker.parentNode.removeChild(r.$timepicker)) : !s.timepicker && n && r._addTimepicker(), !s.buttons && o ? r._addButtons() : s.buttons && !o ? (r.buttons.destroy(), r.$buttons.parentNode.removeChild(r.$buttons)) : c && s.buttons && o && r.buttons.clearHtml().render(), !s.isMobile && d ? (r.treatAsInline || j || r._createMobileOverlay(), r._addMobileAttributes(), r.visible && r._showMobileOverlay()) : s.isMobile && !d && (r._removeMobileAttributes(), r.visible && (j.classList.remove("-active-"), "function" != typeof r.opts.position && r.setPosition())), c && (r.nav.update(), r.views[r.currentView].render(), r.currentView === i.days && r.views[r.currentView].renderDayNames());
                }), I(this, "disableDate", (e, t)=>{
                    (Array.isArray(e) ? e : [
                        e
                    ]).forEach((e)=>{
                        let i = b(e);
                        if (!i) return;
                        let s = t ? "delete" : "add";
                        this.disabledDates[s](this.formatDate(i, "yyyy-MM-dd"));
                        let a = this.getCell(i, this.currentViewSingular);
                        a && a.adpCell.render();
                    }, []);
                }), I(this, "enableDate", (e)=>{
                    this.disableDate(e, !0);
                }), I(this, "isDateDisabled", (e)=>{
                    let t = b(e);
                    return this.disabledDates.has(this.formatDate(t, "yyyy-MM-dd"));
                }), I(this, "isOtherMonth", (e)=>{
                    let { month: t } = h(e);
                    return t !== this.parsedViewDate.month;
                }), I(this, "isOtherYear", (e)=>{
                    let { year: t } = h(e);
                    return t !== this.parsedViewDate.year;
                }), I(this, "isOtherDecade", (e)=>{
                    let { year: t } = h(e), [i, s] = c(this.viewDate);
                    return t < i || t > s;
                }), I(this, "_onChangeSelectedDate", (e)=>{
                    let { silent: t } = e;
                    setTimeout(()=>{
                        this._setInputValue(), this.opts.onSelect && !t && this._triggerOnSelect();
                    });
                }), I(this, "_onChangeFocusedDate", function(e) {
                    let { viewDateTransition: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!e) return;
                    let i = !1;
                    t && (i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), i && r.setViewDate(e), r.opts.onFocus && r.opts.onFocus({
                        datepicker: r,
                        date: e
                    });
                }), I(this, "_onChangeTime", (e)=>{
                    let { hours: t, minutes: i } = e, s = new Date, { lastSelectedDate: a, opts: { onSelect: n } } = this, r = a;
                    a || (r = s);
                    let o = this.getCell(r, this.currentViewSingular), h = o && o.adpCell;
                    h && h.isDisabled || (r.setHours(t), r.setMinutes(i), a ? (this._setInputValue(), n && this._triggerOnSelect()) : this.selectDate(r));
                }), I(this, "_onFocus", (e)=>{
                    this.visible || this.show();
                }), I(this, "_onBlur", (e)=>{
                    this.inFocus || !this.visible || this.opts.isMobile || this.hide();
                }), I(this, "_onMouseDown", (e)=>{
                    this.inFocus = !0;
                }), I(this, "_onMouseUp", (e)=>{
                    this.inFocus = !1, this.$el.focus();
                }), I(this, "_onResize", ()=>{
                    this.visible && "function" != typeof this.opts.position && this.setPosition();
                }), I(this, "_onClickOverlay", ()=>{
                    this.visible && this.hide();
                }), I(this, "getViewDates", function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
                    return T.getDatesFunction(e)(r);
                }), I(this, "isWeekend", (e)=>this.opts.weekends.includes(e)), I(this, "getClampedDate", (e)=>{
                    let { minDate: t, maxDate: i } = this, s = e;
                    return i && m(e, i) ? s = i : t && v(e, t) && (s = t), s;
                }), this.$el = a(e), !this.$el) return;
                this.$datepicker = n({
                    className: "air-datepicker"
                }), this.opts = w({}, s, t), this.$customContainer = !!this.opts.container && a(this.opts.container), this.$altField = a(this.opts.altField || !1);
                let { view: o, startDate: l } = this.opts;
                l || (this.opts.startDate = new Date), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), this.inited = !1, this.visible = !1, this.viewDate = b(this.opts.startDate), this.focusDate = !1, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, this.currentView = o, this.selectedDates = [], this.disabledDates = new Set, this.isDestroyed = !1, this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
            }
            init() {
                let { opts: e, treatAsInline: t, opts: { inline: i, isMobile: s, selectedDates: n, keyboardNav: r, onlyTimepicker: o } } = this, h = a("body");
                (!B || B && P && !h.contains(P)) && !i && this.elIsInput && !this.$customContainer && R.buildGlobalContainer(R.defaultGlobalContainerId), !s || j || t || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i || this._bindEvents(), r && !o && (this.keyboardNav = new A({
                    dp: this,
                    opts: e
                }))), n && this.selectDate(n, {
                    silent: !0
                }), this.opts.visible && !t && this.show(), s && !t && this.$el.setAttribute("readonly", !0), t && this._createComponents();
            }
            _createMobileOverlay() {
                j = n({
                    className: "air-datepicker-overlay"
                }), P.appendChild(j);
            }
            _createComponents() {
                let { opts: e, treatAsInline: t, opts: { inline: i, buttons: s, timepicker: a, position: n, classes: r, onlyTimepicker: o, isMobile: h } } = this;
                this._buildBaseHtml(), this.elIsInput && (i || this._setPositionClasses(n)), !i && this.elIsInput || this.$datepicker.classList.add("-inline-"), r && this.$datepicker.classList.add(...r.split(" ")), o && this.$datepicker.classList.add("-only-timepicker-"), h && !t && this._addMobileAttributes(), this.views[this.currentView] = new T({
                    dp: this,
                    type: this.currentView,
                    opts: e
                }), this.nav = new V({
                    dp: this,
                    opts: e
                }), a && this._addTimepicker(), s && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
            }
            _destroyComponents() {
                for(let e in this.views)this.views[e].destroy();
                this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
            }
            _addMobileAttributes() {
                j.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", !0);
            }
            _removeMobileAttributes() {
                j.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
            }
            _createMinMaxDates() {
                let { minDate: e, maxDate: t } = this.opts;
                this.minDate = !!e && b(e), this.maxDate = !!t && b(t);
            }
            _addTimepicker() {
                this.$timepicker = n({
                    className: "air-datepicker--time"
                }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({
                    dp: this,
                    opts: this.opts
                }), this.$timepicker.appendChild(this.timepicker.$el);
            }
            _addButtons() {
                this.$buttons = n({
                    className: "air-datepicker--buttons"
                }), this.$datepicker.appendChild(this.$buttons), this.buttons = new H({
                    dp: this,
                    opts: this.opts
                }), this.$buttons.appendChild(this.buttons.$el);
            }
            _bindSubEvents() {
                this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i.eventChangeTime, this._onChangeTime);
            }
            _buildBaseHtml() {
                let { inline: e } = this.opts;
                var t, i;
                this.elIsInput ? e ? (t = this.$datepicker, (i = this.$el).parentNode.insertBefore(t, i.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), this.$nav = a(".air-datepicker--navigation", this.$datepicker);
            }
            _handleLocale() {
                let { locale: e, dateFormat: t, firstDay: i, timepicker: s, onlyTimepicker: a, timeFormat: n, dateTimeSeparator: r } = this.opts;
                var o;
                this.locale = (o = e, JSON.parse(JSON.stringify(o))), t && (this.locale.dateFormat = t), void 0 !== n && "" !== n && (this.locale.timeFormat = n);
                let { timeFormat: h } = this.locale;
                if ("" !== i && (this.locale.firstDay = i), s && "function" != typeof t) {
                    let e = h ? r : "";
                    this.locale.dateFormat = [
                        this.locale.dateFormat,
                        h || ""
                    ].join(e);
                }
                a && "function" != typeof t && (this.locale.dateFormat = this.locale.timeFormat);
            }
            _setPositionClasses(e) {
                if ("function" == typeof e) return void this.$datepicker.classList.add("-custom-position-");
                let t = (e = e.split(" "))[0], i = `air-datepicker -${t}-${e[1]}- -from-${t}-`;
                this.$datepicker.classList.add(...i.split(" "));
            }
            _bindEvents() {
                this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
            }
            _limitViewDateByMaxMinDates() {
                let { viewDate: e, minDate: t, maxDate: i } = this;
                i && m(e, i) && this.setViewDate(i), t && v(e, t) && this.setViewDate(t);
            }
            formatDate() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t = arguments.length > 1 ? arguments[1] : void 0;
                if (e = b(e), !(e instanceof Date)) return;
                let i = t, s = this.locale, a = h(e), n = a.dayPeriod, r = c(e), o = R.replacer, l = {
                    T: e.getTime(),
                    m: a.minutes,
                    mm: a.fullMinutes,
                    h: a.hours12,
                    hh: a.fullHours12,
                    H: a.hours,
                    HH: a.fullHours,
                    aa: n,
                    AA: n.toUpperCase(),
                    E: s.daysShort[a.day],
                    EEEE: s.days[a.day],
                    d: a.date,
                    dd: a.fullDate,
                    M: a.month + 1,
                    MM: a.fullMonth,
                    MMM: s.monthsShort[a.month],
                    MMMM: s.months[a.month],
                    yy: a.year.toString().slice(-2),
                    yyyy: a.year,
                    yyyy1: r[0],
                    yyyy2: r[1]
                };
                for (let [e, t] of Object.entries(l))i = o(i, k(e), t);
                return i;
            }
            down(e) {
                this._handleUpDownActions(e, "down");
            }
            up(e) {
                this._handleUpDownActions(e, "up");
            }
            selectDate(e) {
                let t, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { currentView: a, parsedViewDate: n, selectedDates: r } = this, { updateTime: o } = s, { moveToOtherMonthsOnSelect: h, moveToOtherYearsOnSelect: l, multipleDates: d, range: c, autoClose: u, onBeforeSelect: p } = this.opts, v = r.length;
                if (Array.isArray(e)) return e.forEach((e)=>{
                    this.selectDate(e, s);
                }), new Promise((e)=>{
                    setTimeout(e);
                });
                if ((e = b(e)) instanceof Date) {
                    if (p && !p({
                        date: e,
                        datepicker: this
                    })) return Promise.resolve();
                    if (a === i.days && e.getMonth() !== n.month && h && (t = new Date(e.getFullYear(), e.getMonth(), 1)), a === i.years && e.getFullYear() !== n.year && l && (t = new Date(e.getFullYear(), 0, 1)), t && this.setViewDate(t), d && !c) {
                        if (v === d) return;
                        this._checkIfDateIsSelected(e) || r.push(e);
                    } else if (c) switch(v){
                        case 1:
                            r.push(e), this.rangeDateTo || (this.rangeDateTo = e), m(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e), this.selectedDates = [
                                this.rangeDateFrom,
                                this.rangeDateTo
                            ];
                            break;
                        case 2:
                            this.selectedDates = [
                                e
                            ], this.rangeDateFrom = e, this.rangeDateTo = "";
                            break;
                        default:
                            this.selectedDates = [
                                e
                            ], this.rangeDateFrom = e;
                    }
                    else this.selectedDates = [
                        e
                    ];
                    return this.trigger(i.eventChangeSelectedDate, {
                        action: i.actionSelectDate,
                        silent: null == s ? void 0 : s.silent,
                        date: e,
                        updateTime: o
                    }), this._updateLastSelectedDate(e), u && !this.timepickerIsActive && this.visible && (d || c ? c && 1 === v && this.hide() : this.hide()), new Promise((e)=>{
                        setTimeout(e);
                    });
                }
            }
            unselectDate(e) {
                let t = this.selectedDates, s = this;
                if ((e = b(e)) instanceof Date) return t.some((a, n)=>{
                    if (p(a, e)) return t.splice(n, 1), s.selectedDates.length ? (s.rangeDateTo = "", s.rangeDateFrom = t[0], s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length - 1])) : (s.rangeDateFrom = "", s.rangeDateTo = "", s._updateLastSelectedDate(!1)), this.trigger(i.eventChangeSelectedDate, {
                        action: i.actionUnselectDate,
                        date: e
                    }), !0;
                });
            }
            replaceDate(e, t) {
                let s = this.selectedDates.find((t)=>p(t, e, this.currentView)), a = this.selectedDates.indexOf(s);
                a < 0 || p(this.selectedDates[a], t, this.currentView) || (this.selectedDates[a] = t, this.trigger(i.eventChangeSelectedDate, {
                    action: i.actionSelectDate,
                    date: t,
                    updateTime: !0
                }), this._updateLastSelectedDate(t));
            }
            clear() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, this.lastSelectedDate = !1, this.trigger(i.eventChangeSelectedDate, {
                    action: i.actionUnselectDate,
                    silent: e.silent
                }), new Promise((e)=>{
                    setTimeout(e);
                });
            }
            show() {
                let { onShow: e, isMobile: t } = this.opts;
                this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = !0, e && this._scheduleCallAfterTransition(e), t && this._showMobileOverlay();
            }
            hide() {
                let { onHide: e, isMobile: t } = this.opts, i = this._hasTransition();
                this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t)=>{
                    !this.customHide && (t && i || !t && !i) && this._finishHide(), e && e(t);
                }), t && j.classList.remove("-active-");
            }
            _triggerOnSelect() {
                let e = [], t = [], { selectedDates: i, locale: s, opts: { onSelect: a, multipleDates: n, range: r } } = this, o = n || r, h = "function" == typeof s.dateFormat;
                i.length && (e = i.map(g), t = h ? n ? s.dateFormat(e) : e.map((e)=>s.dateFormat(e)) : e.map((e)=>this.formatDate(e, s.dateFormat))), a({
                    date: o ? e : e[0],
                    formattedDate: o ? t : t[0],
                    datepicker: this
                });
            }
            _handleAlreadySelectedDates(e, t) {
                let { selectedDates: i, rangeDateFrom: s, rangeDateTo: a } = this, { range: n, toggleSelected: r } = this.opts, o = i.length, h = "function" == typeof r ? r({
                    datepicker: this,
                    date: t
                }) : r, l = Boolean(n && 1 === o && e), d = l ? g(t) : t;
                n && !h && (2 !== o && this.selectDate(d), 2 === o && p(s, a)) || (h ? this.unselectDate(d) : this._updateLastSelectedDate(l ? d : e));
            }
            _handleUpDownActions(e, t) {
                if (!((e = b(e || this.focusDate || this.viewDate)) instanceof Date)) return;
                let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
                i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i]);
            }
            getCell(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
                if (!((e = b(e)) instanceof Date)) return;
                let { year: s, month: a, date: n } = h(e), r = `[data-year="${s}"]`, o = `[data-month="${a}"]`, l = {
                    [i.day]: `${r}${o}[data-date="${n}"]`,
                    [i.month]: `${r}${o}`,
                    [i.year]: `${r}`
                };
                return this.views[this.currentView] ? this.views[this.currentView].$el.querySelector(l[t]) : void 0;
            }
            _showMobileOverlay() {
                j.classList.add("-active-");
            }
            _hasTransition() {
                return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce((e, t)=>parseFloat(t) + e, 0) > 0;
            }
            get shouldUpdateDOM() {
                return this.visible || this.treatAsInline;
            }
            get parsedViewDate() {
                return h(this.viewDate);
            }
            get currentViewSingular() {
                return this.currentView.slice(0, -1);
            }
            get curDecade() {
                return c(this.viewDate);
            }
            get viewIndex() {
                return this.viewIndexes.indexOf(this.currentView);
            }
            get isFinalView() {
                return this.currentView === i.years;
            }
            get hasSelectedDates() {
                return this.selectedDates.length > 0;
            }
            get isMinViewReached() {
                return this.currentView === this.opts.minView || this.currentView === i.days;
            }
            get $container() {
                return this.$customContainer || P;
            }
            static replacer(e, t, i) {
                return e.replace(t, function(e, t, s, a) {
                    return t + i + a;
                });
            }
        }
        var K;
        return I(R, "defaults", s), I(R, "version", "3.5.3"), I(R, "defaultGlobalContainerId", "air-datepicker-global-container"), K = R.prototype, Object.assign(K, N), t.default;
    }();
});

},{}],"aM9jX":[function() {},{}],"6URka":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _default = {
    days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    daysShort: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ],
    daysMin: [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
    ],
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm aa',
    firstDay: 0
};
exports.default = _default;

},{}],"cYGc2":[function(require,module,exports,__globalThis) {
// Import views
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _personsSelectionBtnView = require("./personsSelectionBtnView");
var _personsSelectionBtnViewDefault = parcelHelpers.interopDefault(_personsSelectionBtnView);
var _personsSelectionView = require("./personsSelectionView");
var _personsSelectionViewDefault = parcelHelpers.interopDefault(_personsSelectionView);
var _flightClassSelectionView = require("./flightClassSelectionView");
var _flightClassSelectionViewDefault = parcelHelpers.interopDefault(_flightClassSelectionView);
var _departureLocationSearchView = require("./departureLocationSearchView");
var _departureLocationSearchViewDefault = parcelHelpers.interopDefault(_departureLocationSearchView);
var _arrivalLocationSearchView = require("./arrivalLocationSearchView");
var _arrivalLocationSearchViewDefault = parcelHelpers.interopDefault(_arrivalLocationSearchView);
var _datePickerView = require("./datePickerView");
var _datePickerViewDefault = parcelHelpers.interopDefault(_datePickerView);
// Import tippy.js library
var _tippyJs = require("tippy.js");
var _tippyJsDefault = parcelHelpers.interopDefault(_tippyJs);
var _tippyCss = require("tippy.js/dist/tippy.css");
class SearchResultsBtnView {
    _searchBtn = document.querySelector(".search-button");
    // Each value of this object will serve as a query parameter
    _queryStringValues = {
        persons: {
            adults: 0,
            children: []
        },
        flightClass: "",
        departureLocationId: "",
        arrivalLocationId: "",
        departureDate: "",
        returnDate: ""
    };
    // Pass the handler function from the controller to the click event listener
    _addHandlerCreateQueries(handler) {
        this._searchBtn.addEventListener("click", handler);
    }
    _assignQueryParameterValues() {
        // tippy options object
        // The code for the tippy options was taken from https://atomiks.github.io/tippyjs/
        const tippyOptions = {
            placement: "top",
            arrow: true,
            theme: "warning",
            animation: "fade-custom",
            content: "",
            trigger: "manual"
        };
        // Assign the number of adults to the queryStringValues object
        this._queryStringValues.persons.adults = (0, _personsSelectionViewDefault.default)._adults;
        // Children age validator
        // Check if the number of children is bigger than 0
        if ((0, _personsSelectionViewDefault.default)._childrenSelectAgeEl.length > 0) {
            for (const el of (0, _personsSelectionViewDefault.default)._childrenSelectAgeEl)if (!el.value) {
                // Create the form validation using tippy for UX
                const content = "Select all children age!";
                const instanceEl = (0, _personsSelectionBtnViewDefault.default)._personsBtn;
                this._formValidator(content, instanceEl, tippyOptions);
                return;
            } else // Assign the value of each child's age to the queryStringValues object (converted into a number type)
            this._queryStringValues.persons.children.push(+el.value);
        }
        // Ass the default value is Economy, the flight class selection won't need a form validation
        this._queryStringValues.flightClass = (0, _flightClassSelectionViewDefault.default)._flightClassQuery;
        // Departure location validator
        if (!(0, _departureLocationSearchViewDefault.default)._departureLocationId) {
            const content = "Enter a departure location!";
            const instanceEl = (0, _departureLocationSearchViewDefault.default)._searchLocationWrapper.querySelector(".input-wrapper");
            this._formValidator(content, instanceEl, tippyOptions);
            return;
        } else // Assign the value of the departure location id to the queryStringValues object
        this._queryStringValues.departureLocationId = (0, _departureLocationSearchViewDefault.default)._departureLocationId;
        // Arrival location validator
        if (!(0, _arrivalLocationSearchViewDefault.default)._arrivalLocationId) {
            const content = "Enter an arrival location!";
            const instanceEl = (0, _arrivalLocationSearchViewDefault.default)._searchLocationWrapper.querySelector(".input-wrapper");
            this._formValidator(content, instanceEl, tippyOptions);
            return;
        } else // Assign the value of the arrival location id to the queryStringValues object
        this._queryStringValues.arrivalLocationId = (0, _arrivalLocationSearchViewDefault.default)._arrivalLocationId;
        // Departure date validator
        if (!(0, _datePickerViewDefault.default)._queryValues.departureDate) {
            const content = "Enter a departure date!";
            const instanceEl = (0, _datePickerViewDefault.default)._departureDateWrapper.querySelector(".input-wrapper");
            this._formValidator(content, instanceEl, tippyOptions);
            return;
        } else // Assign the value of the departure date to the queryStringValues object after formatting to the ISO
        this._queryStringValues.departureDate = this._formatDateToISO((0, _datePickerViewDefault.default)._queryValues.departureDate.formattedDate.split("/").join("-"));
        // As the return date is optional, it doesn't need to be validated
        if ((0, _datePickerViewDefault.default)._queryValues.returnDate) this._queryStringValues.returnDate = this._formatDateToISO((0, _datePickerViewDefault.default)._queryValues.returnDate.formattedDate.split("/").join("-"));
        // Set the href attribute dynamically while adding all the user's input data stored as query parameters
        this._searchBtn.setAttribute("href", this._generateQueryParametersMarkup(this._queryStringValues));
    }
    // A method to help with the form validation created in order to avoid repetitive code
    _formValidator(content, instanceEl, tippyOptions) {
        // Create the form validation using tippy for UX
        // The code for initializing a tippy instance and the tippy methods was taken from https://atomiks.github.io/tippyjs/
        tippyOptions.content = content;
        const tippyInstance = (0, _tippyJsDefault.default)(instanceEl, tippyOptions);
        tippyInstance.show();
        // Hide the tippy box after 3 seconds
        setTimeout(()=>tippyInstance.hide(), 3000);
    }
    _generateQueryParametersMarkup(queryValues) {
        // As the children ages will be stored in an array, we have to take into consideration the size of the array
        let children;
        // Set the children query parameter values based on the length of the children array
        if (queryValues.persons.children.length === 1) children = `&children=${queryValues.persons.children[0]}`;
        if (queryValues.persons.children.length === 0) children = "";
        if (queryValues.persons.children.length > 1) {
            // '%2C' is the URL-encoded representation of a comma (,) character.
            children = `&children=${queryValues.persons.children.join("%2C")}`;
            console.log(children);
        }
        // Get rest of the query parameters values
        const adults = queryValues.persons.adults;
        const flightClass = queryValues.flightClass;
        const departureLocationId = queryValues.departureLocationId;
        const arrivalLocationId = queryValues.arrivalLocationId;
        const departureDate = queryValues.departureDate;
        const returnDate = queryValues.returnDate;
        // Dynamically generate the URL based on user's selections. The values will be extracted from the URL as the flights-results.html page loads
        const URL = `flights-results.html?adults=${adults}${children}&flightClass=${flightClass}&departureLocationId=${departureLocationId}&arrivalLocationId=${arrivalLocationId}&departureDate=${departureDate}&returnDate=${returnDate}`;
        return URL;
    }
    // This is a method created to format the departure and return dates to ISO
    _formatDateToISO(inputDate) {
        const date = new Date(inputDate);
        const year = date.getFullYear();
        // getMonth() is zero-indexed
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
}
exports.default = new SearchResultsBtnView();

},{"./personsSelectionBtnView":"hLXZN","./personsSelectionView":"dn95k","./flightClassSelectionView":"bMDTa","./departureLocationSearchView":"7D4AX","./arrivalLocationSearchView":"gjx8h","./datePickerView":"8Mc3D","tippy.js":"ccpCS","tippy.js/dist/tippy.css":"2hEyg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccpCS":[function(require,module,exports,__globalThis) {
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateFill", ()=>animateFill);
parcelHelpers.export(exports, "createSingleton", ()=>createSingleton);
parcelHelpers.export(exports, "delegate", ()=>delegate);
parcelHelpers.export(exports, "followCursor", ()=>followCursor);
parcelHelpers.export(exports, "hideAll", ()=>hideAll);
parcelHelpers.export(exports, "inlinePositioning", ()=>inlinePositioning);
parcelHelpers.export(exports, "roundArrow", ()=>ROUND_ARROW);
parcelHelpers.export(exports, "sticky", ()=>sticky);
var _core = require("@popperjs/core");
var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
    passive: true,
    capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
    return document.body;
};
function hasOwnProperty(obj, key) {
    return ({}).hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
        var v = value[index];
        return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }
    return value;
}
function isType(value, type) {
    var str = ({}).toString.call(value);
    return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
    return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) return fn;
    var timeout;
    return function(arg) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            fn(arg);
        }, ms);
    };
}
function removeProperties(obj, keys) {
    var clone = Object.assign({}, obj);
    keys.forEach(function(key) {
        delete clone[key];
    });
    return clone;
}
function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
    return [].concat(value);
}
function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) arr.push(value);
}
function unique(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
}
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
function arrayFrom(value) {
    return [].slice.call(value);
}
function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function(acc, key) {
        if (obj[key] !== undefined) acc[key] = obj[key];
        return acc;
    }, {});
}
function div() {
    return document.createElement('div');
}
function isElement(value) {
    return [
        'Element',
        'Fragment'
    ].some(function(type) {
        return isType(value, type);
    });
}
function isNodeList(value) {
    return isType(value, 'NodeList');
}
function isMouseEvent(value) {
    return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
    if (isElement(value)) return [
        value
    ];
    if (isNodeList(value)) return arrayFrom(value);
    if (Array.isArray(value)) return value;
    return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
    els.forEach(function(el) {
        if (el) el.style.transitionDuration = value + "ms";
    });
}
function setVisibilityState(els, state) {
    els.forEach(function(el) {
        if (el) el.setAttribute('data-state', state);
    });
}
function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body
    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX, clientY = event.clientY;
    return popperTreeData.every(function(_ref) {
        var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
        var interactiveBorder = props.interactiveBorder;
        var basePlacement = getBasePlacement(popperState.placement);
        var offsetData = popperState.modifiersData.offset;
        if (!offsetData) return true;
        var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
        var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
        var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
        var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
        var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
        var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
        var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
        var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
        return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
}
function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
    // `webkitTransitionEnd`...
    [
        'transitionend',
        'webkitTransitionEnd'
    ].forEach(function(event) {
        box[method](event, listener);
    });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */ function actualContains(parent, child) {
    var target = child;
    while(target){
        var _target$getRootNode;
        if (parent.contains(target)) return true;
        target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
}
var currentInput = {
    isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */ function onDocumentTouchStart() {
    if (currentInput.isTouch) return;
    currentInput.isTouch = true;
    if (window.performance) document.addEventListener('mousemove', onDocumentMouseMove);
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */ function onDocumentMouseMove() {
    var now = performance.now();
    if (now - lastMouseMoveTime < 20) {
        currentInput.isTouch = false;
        document.removeEventListener('mousemove', onDocumentMouseMove);
    }
    lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */ function onWindowBlur() {
    var activeElement = document.activeElement;
    if (isReferenceElement(activeElement)) {
        var instance = activeElement._tippy;
        if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
    }
}
function bindGlobalEventListeners() {
    document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
    window.addEventListener('blur', onWindowBlur);
}
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var isIE11 = isBrowser ? !!window.msCrypto : false;
function createMemoryLeakWarning(method) {
    var txt = method === 'destroy' ? 'n already-' : ' ';
    return [
        method + "() was called on a" + txt + "destroyed instance. This is a no-op but",
        'indicates a potential memory leak.'
    ].join(' ');
}
function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}
function getDevMessage(message) {
    return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}
function getFormattedMessage(message) {
    return [
        getDevMessage(message),
        'color: #00C584; font-size: 1.3em; font-weight: bold;',
        'line-height: 1.5',
        'color: #a6a095;'
    ];
} // Assume warnings and errors never have the same message
var visitedMessages;
resetVisitedMessages();
function resetVisitedMessages() {
    visitedMessages = new Set();
}
function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
        var _console;
        visitedMessages.add(message);
        (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
}
function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
        var _console2;
        visitedMessages.add(message);
        (_console2 = console).error.apply(_console2, getFormattedMessage(message));
    }
}
function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
    errorWhen(didPassFalsyValue, [
        'tippy() was passed',
        '`' + String(targets) + '`',
        'as its targets (first) argument. Valid types are: String, Element,',
        'Element[], or NodeList.'
    ].join(' '));
    errorWhen(didPassPlainObject, [
        'tippy() was passed a plain object which is not supported as an argument',
        'for virtual positioning. Use props.getReferenceClientRect instead.'
    ].join(' '));
}
var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
};
var renderProps = {
    allowHTML: false,
    animation: 'fade',
    arrow: true,
    content: '',
    inertia: false,
    maxWidth: 350,
    role: 'tooltip',
    theme: '',
    zIndex: 9999
};
var defaultProps = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
        content: 'auto',
        expanded: 'auto'
    },
    delay: 0,
    duration: [
        300,
        250
    ],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: '',
    offset: [
        0,
        10
    ],
    onAfterUpdate: function onAfterUpdate() {},
    onBeforeUpdate: function onBeforeUpdate() {},
    onCreate: function onCreate() {},
    onDestroy: function onDestroy() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    onClickOutside: function onClickOutside() {},
    placement: 'top',
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: 'mouseenter focus',
    triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
    validateProps(partialProps, []);
    var keys = Object.keys(partialProps);
    keys.forEach(function(key) {
        defaultProps[key] = partialProps[key];
    });
};
function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps = plugins.reduce(function(acc, plugin) {
        var name = plugin.name, defaultValue = plugin.defaultValue;
        if (name) {
            var _name;
            acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
        }
        return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
        plugins: plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function(acc, key) {
        var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();
        if (!valueAsString) return acc;
        if (key === 'content') acc[key] = valueAsString;
        else try {
            acc[key] = JSON.parse(valueAsString);
        } catch (e) {
            acc[key] = valueAsString;
        }
        return acc;
    }, {});
    return props;
}
function evaluateProps(reference, props) {
    var out = Object.assign({}, props, {
        content: invokeWithArgsOrReturn(props.content, [
            reference
        ])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
        expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
        content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
    };
    return out;
}
function validateProps(partialProps, plugins) {
    if (partialProps === void 0) partialProps = {};
    if (plugins === void 0) plugins = [];
    var keys = Object.keys(partialProps);
    keys.forEach(function(prop) {
        var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
        var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`
        if (didPassUnknownProp) didPassUnknownProp = plugins.filter(function(plugin) {
            return plugin.name === prop;
        }).length === 0;
        warnWhen(didPassUnknownProp, [
            "`" + prop + "`",
            "is not a valid prop. You may have spelled it incorrectly, or if it's",
            'a plugin, forgot to pass it in an array as props.plugins.',
            '\n\n',
            'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n',
            'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'
        ].join(' '));
    });
}
var innerHTML = function innerHTML() {
    return 'innerHTML';
};
function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
}
function createArrowElement(value) {
    var arrow = div();
    if (value === true) arrow.className = ARROW_CLASS;
    else {
        arrow.className = SVG_ARROW_CLASS;
        if (isElement(value)) arrow.appendChild(value);
        else dangerouslySetInnerHTML(arrow, value);
    }
    return arrow;
}
function setContent(content, props) {
    if (isElement(props.content)) {
        dangerouslySetInnerHTML(content, '');
        content.appendChild(props.content);
    } else if (typeof props.content !== 'function') {
        if (props.allowHTML) dangerouslySetInnerHTML(content, props.content);
        else content.textContent = props.content;
    }
}
function getChildren(popper) {
    var box = popper.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
        box: box,
        content: boxChildren.find(function(node) {
            return node.classList.contains(CONTENT_CLASS);
        }),
        arrow: boxChildren.find(function(node) {
            return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
        }),
        backdrop: boxChildren.find(function(node) {
            return node.classList.contains(BACKDROP_CLASS);
        })
    };
}
function render(instance) {
    var popper = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute('data-state', 'hidden');
    box.setAttribute('tabindex', '-1');
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute('data-state', 'hidden');
    setContent(content, instance.props);
    popper.appendChild(box);
    box.appendChild(content);
    onUpdate(instance.props, instance.props);
    function onUpdate(prevProps, nextProps) {
        var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
        if (nextProps.theme) box.setAttribute('data-theme', nextProps.theme);
        else box.removeAttribute('data-theme');
        if (typeof nextProps.animation === 'string') box.setAttribute('data-animation', nextProps.animation);
        else box.removeAttribute('data-animation');
        if (nextProps.inertia) box.setAttribute('data-inertia', '');
        else box.removeAttribute('data-inertia');
        box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;
        if (nextProps.role) box.setAttribute('role', nextProps.role);
        else box.removeAttribute('role');
        if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content, instance.props);
        if (nextProps.arrow) {
            if (!arrow) box.appendChild(createArrowElement(nextProps.arrow));
            else if (prevProps.arrow !== nextProps.arrow) {
                box.removeChild(arrow);
                box.appendChild(createArrowElement(nextProps.arrow));
            }
        } else if (arrow) box.removeChild(arrow);
    }
    return {
        popper: popper,
        onUpdate: onUpdate
    };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`
var mountedInstances = [];
function createTippy(reference, passedProps) {
    var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
    // 🔒 Private members
    // ===========================================================================
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    var currentTarget; // ===========================================================================
    // 🔑 Public members
    // ===========================================================================
    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
        // Is the instance currently enabled?
        isEnabled: true,
        // Is the tippy currently showing and not transitioning out?
        isVisible: false,
        // Has the instance been destroyed?
        isDestroyed: false,
        // Is the tippy currently mounted to the DOM?
        isMounted: false,
        // Has the tippy finished transitioning in?
        isShown: false
    };
    var instance = {
        // properties
        id: id,
        reference: reference,
        popper: div(),
        popperInstance: popperInstance,
        props: props,
        state: state,
        plugins: plugins,
        // methods
        clearDelayTimeouts: clearDelayTimeouts,
        setProps: setProps,
        setContent: setContent,
        show: show,
        hide: hide,
        hideWithInteractivity: hideWithInteractivity,
        enable: enable,
        disable: disable,
        unmount: unmount,
        destroy: destroy
    }; // TODO: Investigate why this early return causes a TDZ error in the tests —
    // it doesn't seem to happen in the browser
    /* istanbul ignore if */ if (!props.render) {
        errorWhen(true, 'render() function has not been supplied.');
        return instance;
    } // ===========================================================================
    // Initial mutations
    // ===========================================================================
    var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
    popper.setAttribute('data-tippy-root', '');
    popper.id = "tippy-" + instance.id;
    instance.popper = popper;
    reference._tippy = instance;
    popper._tippy = instance;
    var pluginsHooks = plugins.map(function(plugin) {
        return plugin.fn(instance);
    });
    var hasAriaExpanded = reference.hasAttribute('aria-expanded');
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook('onCreate', [
        instance
    ]);
    if (props.showOnCreate) scheduleShow();
     // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding
    popper.addEventListener('mouseenter', function() {
        if (instance.props.interactive && instance.state.isVisible) instance.clearDelayTimeouts();
    });
    popper.addEventListener('mouseleave', function() {
        if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    });
    return instance; // ===========================================================================
    // 🔒 Private methods
    // ===========================================================================
    function getNormalizedTouchSettings() {
        var touch = instance.props.touch;
        return Array.isArray(touch) ? touch : [
            touch,
            0
        ];
    }
    function getIsCustomTouchBehavior() {
        return getNormalizedTouchSettings()[0] === 'hold';
    }
    function getIsDefaultRenderFn() {
        var _instance$props$rende;
        // @ts-ignore
        return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
        return currentTarget || reference;
    }
    function getDocument() {
        var parent = getCurrentTarget().parentNode;
        return parent ? getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
        return getChildren(popper);
    }
    function getDelay(isShow) {
        // For touch or keyboard input, force `0` delay for UX reasons
        // Also if the instance is mounted but not visible (transitioning out),
        // ignore delay
        if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') return 0;
        return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }
    function handleStyles(fromHide) {
        if (fromHide === void 0) fromHide = false;
        popper.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
        popper.style.zIndex = "" + instance.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
        if (shouldInvokePropsHook === void 0) shouldInvokePropsHook = true;
        pluginsHooks.forEach(function(pluginHooks) {
            if (pluginHooks[hook]) pluginHooks[hook].apply(pluginHooks, args);
        });
        if (shouldInvokePropsHook) {
            var _instance$props;
            (_instance$props = instance.props)[hook].apply(_instance$props, args);
        }
    }
    function handleAriaContentAttribute() {
        var aria = instance.props.aria;
        if (!aria.content) return;
        var attr = "aria-" + aria.content;
        var id = popper.id;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            var currentValue = node.getAttribute(attr);
            if (instance.state.isVisible) node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
            else {
                var nextValue = currentValue && currentValue.replace(id, '').trim();
                if (nextValue) node.setAttribute(attr, nextValue);
                else node.removeAttribute(attr);
            }
        });
    }
    function handleAriaExpandedAttribute() {
        if (hasAriaExpanded || !instance.props.aria.expanded) return;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            if (instance.props.interactive) node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
            else node.removeAttribute('aria-expanded');
        });
    }
    function cleanupInteractiveMouseListeners() {
        getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
        mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
            return listener !== debouncedOnMouseMove;
        });
    }
    function onDocumentPress(event) {
        // Moved finger to scroll instead of an intentional tap outside
        if (currentInput.isTouch) {
            if (didTouchMove || event.type === 'mousedown') return;
        }
        var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper
        if (instance.props.interactive && actualContains(popper, actualTarget)) return;
         // Clicked on the event listeners target
        if (normalizeToArray(instance.props.triggerTarget || reference).some(function(el) {
            return actualContains(el, actualTarget);
        })) {
            if (currentInput.isTouch) return;
            if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) return;
        } else invokeHook('onClickOutside', [
            instance,
            event
        ]);
        if (instance.props.hideOnClick === true) {
            instance.clearDelayTimeouts();
            instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
            // currentTarget. This lets a tippy with `focus` trigger know that it
            // should not show
            didHideDueToDocumentMouseDown = true;
            setTimeout(function() {
                didHideDueToDocumentMouseDown = false;
            }); // The listener gets added in `scheduleShow()`, but this may be hiding it
            // before it shows, and hide()'s early bail-out behavior can prevent it
            // from being cleaned up
            if (!instance.state.isMounted) removeDocumentPress();
        }
    }
    function onTouchMove() {
        didTouchMove = true;
    }
    function onTouchStart() {
        didTouchMove = false;
    }
    function addDocumentPress() {
        var doc = getDocument();
        doc.addEventListener('mousedown', onDocumentPress, true);
        doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
        doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
        doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
        var doc = getDocument();
        doc.removeEventListener('mousedown', onDocumentPress, true);
        doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
        doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
        doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
        onTransitionEnd(duration, function() {
            if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) callback();
        });
    }
    function onTransitionedIn(duration, callback) {
        onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
        var box = getDefaultTemplateChildren().box;
        function listener(event) {
            if (event.target === box) {
                updateTransitionEndListener(box, 'remove', listener);
                callback();
            }
        } // Make callback synchronous if duration is 0
        // `transitionend` won't fire otherwise
        if (duration === 0) return callback();
        updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
        updateTransitionEndListener(box, 'add', listener);
        currentTransitionEndListener = listener;
    }
    function on(eventType, handler, options) {
        if (options === void 0) options = false;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            node.addEventListener(eventType, handler, options);
            listeners.push({
                node: node,
                eventType: eventType,
                handler: handler,
                options: options
            });
        });
    }
    function addListeners() {
        if (getIsCustomTouchBehavior()) {
            on('touchstart', onTrigger, {
                passive: true
            });
            on('touchend', onMouseLeave, {
                passive: true
            });
        }
        splitBySpaces(instance.props.trigger).forEach(function(eventType) {
            if (eventType === 'manual') return;
            on(eventType, onTrigger);
            switch(eventType){
                case 'mouseenter':
                    on('mouseleave', onMouseLeave);
                    break;
                case 'focus':
                    on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
                    break;
                case 'focusin':
                    on('focusout', onBlurOrFocusOut);
                    break;
            }
        });
    }
    function removeListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function onTrigger(event) {
        var _lastTriggerEvent;
        var shouldScheduleClickHide = false;
        if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) return;
        var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
        lastTriggerEvent = event;
        currentTarget = event.currentTarget;
        handleAriaExpandedAttribute();
        if (!instance.state.isVisible && isMouseEvent(event)) // If scrolling, `mouseenter` events can be fired if the cursor lands
        // over a new target, but `mousemove` events don't get fired. This
        // causes interactive tooltips to get stuck open until the cursor is
        // moved
        mouseMoveListeners.forEach(function(listener) {
            return listener(event);
        });
         // Toggle show/hide when clicking click-triggered tooltips
        if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) shouldScheduleClickHide = true;
        else scheduleShow(event);
        if (event.type === 'click') isVisibleFromClick = !shouldScheduleClickHide;
        if (shouldScheduleClickHide && !wasFocused) scheduleHide(event);
    }
    function onMouseMove(event) {
        var target = event.target;
        var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
        if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) return;
        var popperTreeData = getNestedPopperTree().concat(popper).map(function(popper) {
            var _instance$popperInsta;
            var instance = popper._tippy;
            var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
            if (state) return {
                popperRect: popper.getBoundingClientRect(),
                popperState: state,
                props: props
            };
            return null;
        }).filter(Boolean);
        if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
            cleanupInteractiveMouseListeners();
            scheduleHide(event);
        }
    }
    function onMouseLeave(event) {
        var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;
        if (shouldBail) return;
        if (instance.props.interactive) {
            instance.hideWithInteractivity(event);
            return;
        }
        scheduleHide(event);
    }
    function onBlurOrFocusOut(event) {
        if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) return;
         // If focus was moved to within the popper
        if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) return;
        scheduleHide(event);
    }
    function isEventListenerStopped(event) {
        return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
    }
    function createPopperInstance() {
        destroyPopperInstance();
        var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
        var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
        var computedReference = getReferenceClientRect ? {
            getBoundingClientRect: getReferenceClientRect,
            contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
        } : reference;
        var tippyModifier = {
            name: '$$tippy',
            enabled: true,
            phase: 'beforeWrite',
            requires: [
                'computeStyles'
            ],
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                    [
                        'placement',
                        'reference-hidden',
                        'escaped'
                    ].forEach(function(attr) {
                        if (attr === 'placement') box.setAttribute('data-placement', state.placement);
                        else if (state.attributes.popper["data-popper-" + attr]) box.setAttribute("data-" + attr, '');
                        else box.removeAttribute("data-" + attr);
                    });
                    state.attributes.popper = {};
                }
            }
        };
        var modifiers = [
            {
                name: 'offset',
                options: {
                    offset: offset
                }
            },
            {
                name: 'preventOverflow',
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            },
            {
                name: 'flip',
                options: {
                    padding: 5
                }
            },
            {
                name: 'computeStyles',
                options: {
                    adaptive: !moveTransition
                }
            },
            tippyModifier
        ];
        if (getIsDefaultRenderFn() && arrow) modifiers.push({
            name: 'arrow',
            options: {
                element: arrow,
                padding: 3
            }
        });
        modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
        instance.popperInstance = (0, _core.createPopper)(computedReference, popper, Object.assign({}, popperOptions, {
            placement: placement,
            onFirstUpdate: onFirstUpdate,
            modifiers: modifiers
        }));
    }
    function destroyPopperInstance() {
        if (instance.popperInstance) {
            instance.popperInstance.destroy();
            instance.popperInstance = null;
        }
    }
    function mount() {
        var appendTo = instance.props.appendTo;
        var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
        // it's directly after the reference element so the elements inside the
        // tippy can be tabbed to
        // If there are clipping issues, the user can specify a different appendTo
        // and ensure focus management is handled correctly manually
        var node = getCurrentTarget();
        if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') parentNode = node.parentNode;
        else parentNode = invokeWithArgsOrReturn(appendTo, [
            node
        ]);
         // The popper element needs to exist on the DOM before its position can be
        // updated as Popper needs to read its dimensions
        if (!parentNode.contains(popper)) parentNode.appendChild(popper);
        instance.state.isMounted = true;
        createPopperInstance();
        // Accessibility check
        warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, [
            'Interactive tippy element may not be accessible via keyboard',
            'navigation because it is not directly after the reference element',
            'in the DOM source order.',
            '\n\n',
            'Using a wrapper <div> or <span> tag around the reference element',
            'solves this by creating a new parentNode context.',
            '\n\n',
            'Specifying `appendTo: document.body` silences this warning, but it',
            'assumes you are using a focus management solution to handle',
            'keyboard navigation.',
            '\n\n',
            'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'
        ].join(' '));
    }
    function getNestedPopperTree() {
        return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
    }
    function scheduleShow(event) {
        instance.clearDelayTimeouts();
        if (event) invokeHook('onTrigger', [
            instance,
            event
        ]);
        addDocumentPress();
        var delay = getDelay(true);
        var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
        if (currentInput.isTouch && touchValue === 'hold' && touchDelay) delay = touchDelay;
        if (delay) showTimeout = setTimeout(function() {
            instance.show();
        }, delay);
        else instance.show();
    }
    function scheduleHide(event) {
        instance.clearDelayTimeouts();
        invokeHook('onUntrigger', [
            instance,
            event
        ]);
        if (!instance.state.isVisible) {
            removeDocumentPress();
            return;
        } // For interactive tippies, scheduleHide is added to a document.body handler
        // from onMouseLeave so must intercept scheduled hides from mousemove/leave
        // events when trigger contains mouseenter and click, and the tip is
        // currently shown as a result of a click.
        if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && [
            'mouseleave',
            'mousemove'
        ].indexOf(event.type) >= 0 && isVisibleFromClick) return;
        var delay = getDelay(false);
        if (delay) hideTimeout = setTimeout(function() {
            if (instance.state.isVisible) instance.hide();
        }, delay);
        else // Fixes a `transitionend` problem when it fires 1 frame too
        // late sometimes, we don't want hide() to be called.
        scheduleHideAnimationFrame = requestAnimationFrame(function() {
            instance.hide();
        });
    } // ===========================================================================
    // 🔑 Public methods
    // ===========================================================================
    function enable() {
        instance.state.isEnabled = true;
    }
    function disable() {
        // Disabling the instance should also hide it
        // https://github.com/atomiks/tippy.js-react/issues/106
        instance.hide();
        instance.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
        cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
        if (instance.state.isDestroyed) return;
        invokeHook('onBeforeUpdate', [
            instance,
            partialProps
        ]);
        removeListeners();
        var prevProps = instance.props;
        var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
            ignoreAttributes: true
        }));
        instance.props = nextProps;
        addListeners();
        if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
            cleanupInteractiveMouseListeners();
            debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
        } // Ensure stale aria-expanded attributes are removed
        if (prevProps.triggerTarget && !nextProps.triggerTarget) normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
            node.removeAttribute('aria-expanded');
        });
        else if (nextProps.triggerTarget) reference.removeAttribute('aria-expanded');
        handleAriaExpandedAttribute();
        handleStyles();
        if (onUpdate) onUpdate(prevProps, nextProps);
        if (instance.popperInstance) {
            createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
            // and the nested ones get re-rendered first.
            // https://github.com/atomiks/tippyjs-react/issues/177
            // TODO: find a cleaner / more efficient solution(!)
            getNestedPopperTree().forEach(function(nestedPopper) {
                // React (and other UI libs likely) requires a rAF wrapper as it flushes
                // its work in one
                requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
            });
        }
        invokeHook('onAfterUpdate', [
            instance,
            partialProps
        ]);
    }
    function setContent(content) {
        instance.setProps({
            content: content
        });
    }
    function show() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
        var isAlreadyVisible = instance.state.isVisible;
        var isDestroyed = instance.state.isDestroyed;
        var isDisabled = !instance.state.isEnabled;
        var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
        var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
        if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) return;
         // Normalize `disabled` behavior across browsers.
        // Firefox allows events on disabled elements, but Chrome doesn't.
        // Using a wrapper element (i.e. <span>) is recommended.
        if (getCurrentTarget().hasAttribute('disabled')) return;
        invokeHook('onShow', [
            instance
        ], false);
        if (instance.props.onShow(instance) === false) return;
        instance.state.isVisible = true;
        if (getIsDefaultRenderFn()) popper.style.visibility = 'visible';
        handleStyles();
        addDocumentPress();
        if (!instance.state.isMounted) popper.style.transition = 'none';
         // If flipping to the opposite side after hiding at least once, the
        // animation will use the wrong placement without resetting the duration
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
            setTransitionDuration([
                box,
                content
            ], 0);
        }
        onFirstUpdate = function onFirstUpdate() {
            var _instance$popperInsta2;
            if (!instance.state.isVisible || ignoreOnFirstUpdate) return;
            ignoreOnFirstUpdate = true; // reflow
            popper.offsetHeight;
            popper.style.transition = instance.props.moveTransition;
            if (getIsDefaultRenderFn() && instance.props.animation) {
                var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                setTransitionDuration([
                    _box,
                    _content
                ], duration);
                setVisibilityState([
                    _box,
                    _content
                ], 'visible');
            }
            handleAriaContentAttribute();
            handleAriaExpandedAttribute();
            pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
            // popper has been positioned for the first time
            (_instance$popperInsta2 = instance.popperInstance) == null || _instance$popperInsta2.forceUpdate();
            invokeHook('onMount', [
                instance
            ]);
            if (instance.props.animation && getIsDefaultRenderFn()) onTransitionedIn(duration, function() {
                instance.state.isShown = true;
                invokeHook('onShown', [
                    instance
                ]);
            });
        };
        mount();
    }
    function hide() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
        var isAlreadyHidden = !instance.state.isVisible;
        var isDestroyed = instance.state.isDestroyed;
        var isDisabled = !instance.state.isEnabled;
        var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
        if (isAlreadyHidden || isDestroyed || isDisabled) return;
        invokeHook('onHide', [
            instance
        ], false);
        if (instance.props.onHide(instance) === false) return;
        instance.state.isVisible = false;
        instance.state.isShown = false;
        ignoreOnFirstUpdate = false;
        isVisibleFromClick = false;
        if (getIsDefaultRenderFn()) popper.style.visibility = 'hidden';
        cleanupInteractiveMouseListeners();
        removeDocumentPress();
        handleStyles(true);
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
            if (instance.props.animation) {
                setTransitionDuration([
                    box,
                    content
                ], duration);
                setVisibilityState([
                    box,
                    content
                ], 'hidden');
            }
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        if (instance.props.animation) {
            if (getIsDefaultRenderFn()) onTransitionedOut(duration, instance.unmount);
        } else instance.unmount();
    }
    function hideWithInteractivity(event) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
        getDocument().addEventListener('mousemove', debouncedOnMouseMove);
        pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
        debouncedOnMouseMove(event);
    }
    function unmount() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
        if (instance.state.isVisible) instance.hide();
        if (!instance.state.isMounted) return;
        destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
        // tree by default. This seems mainly for interactive tippies, but we should
        // find a workaround if possible
        getNestedPopperTree().forEach(function(nestedPopper) {
            nestedPopper._tippy.unmount();
        });
        if (popper.parentNode) popper.parentNode.removeChild(popper);
        mountedInstances = mountedInstances.filter(function(i) {
            return i !== instance;
        });
        instance.state.isMounted = false;
        invokeHook('onHidden', [
            instance
        ]);
    }
    function destroy() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
        if (instance.state.isDestroyed) return;
        instance.clearDelayTimeouts();
        instance.unmount();
        removeListeners();
        delete reference._tippy;
        instance.state.isDestroyed = true;
        invokeHook('onDestroy', [
            instance
        ]);
    }
}
function tippy(targets, optionalProps) {
    if (optionalProps === void 0) optionalProps = {};
    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    validateTargets(targets);
    validateProps(optionalProps, plugins);
    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
        plugins: plugins
    });
    var elements = getArrayOfElements(targets);
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, [
        'tippy() was passed an Element as the `content` prop, but more than',
        'one tippy instance was created by this invocation. This means the',
        'content element will only be appended to the last tippy instance.',
        '\n\n',
        'Instead, pass the .innerHTML of the element, or use a function that',
        'returns a cloned version of the element instead.',
        '\n\n',
        '1) content: element.innerHTML\n',
        '2) content: () => element.cloneNode(true)'
    ].join(' '));
    var instances = elements.reduce(function(acc, reference) {
        var instance = reference && createTippy(reference, passedProps);
        if (instance) acc.push(instance);
        return acc;
    }, []);
    return isElement(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var hideAll = function hideAll(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, excludedReferenceOrInstance = _ref.exclude, duration = _ref.duration;
    mountedInstances.forEach(function(instance) {
        var isExcluded = false;
        if (excludedReferenceOrInstance) isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
        if (!isExcluded) {
            var originalDuration = instance.props.duration;
            instance.setProps({
                duration: duration
            });
            instance.hide();
            if (!instance.state.isDestroyed) instance.setProps({
                duration: originalDuration
            });
        }
    });
};
// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.
var applyStylesModifier = Object.assign({}, (0, _core.applyStyles), {
    effect: function effect(_ref) {
        var state = _ref.state;
        var initialStyles = {
            popper: {
                position: state.options.strategy,
                left: '0',
                top: '0',
                margin: '0'
            },
            arrow: {
                position: 'absolute'
            },
            reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
         // intentionally return no cleanup function
    // return () => { ... }
    }
});
var createSingleton = function createSingleton(tippyInstances, optionalProps) {
    var _optionalProps$popper;
    if (optionalProps === void 0) optionalProps = {};
    errorWhen(!Array.isArray(tippyInstances), [
        'The first argument passed to createSingleton() must be an array of',
        'tippy instances. The passed value was',
        String(tippyInstances)
    ].join(' '));
    var individualInstances = tippyInstances;
    var references = [];
    var triggerTargets = [];
    var currentTarget;
    var overrides = optionalProps.overrides;
    var interceptSetPropsCleanups = [];
    var shownOnCreate = false;
    function setTriggerTargets() {
        triggerTargets = individualInstances.map(function(instance) {
            return normalizeToArray(instance.props.triggerTarget || instance.reference);
        }).reduce(function(acc, item) {
            return acc.concat(item);
        }, []);
    }
    function setReferences() {
        references = individualInstances.map(function(instance) {
            return instance.reference;
        });
    }
    function enableInstances(isEnabled) {
        individualInstances.forEach(function(instance) {
            if (isEnabled) instance.enable();
            else instance.disable();
        });
    }
    function interceptSetProps(singleton) {
        return individualInstances.map(function(instance) {
            var originalSetProps = instance.setProps;
            instance.setProps = function(props) {
                originalSetProps(props);
                if (instance.reference === currentTarget) singleton.setProps(props);
            };
            return function() {
                instance.setProps = originalSetProps;
            };
        });
    } // have to pass singleton, as it maybe undefined on first call
    function prepareInstance(singleton, target) {
        var index = triggerTargets.indexOf(target); // bail-out
        if (target === currentTarget) return;
        currentTarget = target;
        var overrideProps = (overrides || []).concat('content').reduce(function(acc, prop) {
            acc[prop] = individualInstances[index].props[prop];
            return acc;
        }, {});
        singleton.setProps(Object.assign({}, overrideProps, {
            getReferenceClientRect: typeof overrideProps.getReferenceClientRect === 'function' ? overrideProps.getReferenceClientRect : function() {
                var _references$index;
                return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
            }
        }));
    }
    enableInstances(false);
    setReferences();
    setTriggerTargets();
    var plugin = {
        fn: function fn() {
            return {
                onDestroy: function onDestroy() {
                    enableInstances(true);
                },
                onHidden: function onHidden() {
                    currentTarget = null;
                },
                onClickOutside: function onClickOutside(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        currentTarget = null;
                    }
                },
                onShow: function onShow(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        prepareInstance(instance, references[0]);
                    }
                },
                onTrigger: function onTrigger(instance, event) {
                    prepareInstance(instance, event.currentTarget);
                }
            };
        }
    };
    var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, [
        'overrides'
    ]), {
        plugins: [
            plugin
        ].concat(optionalProps.plugins || []),
        triggerTarget: triggerTargets,
        popperOptions: Object.assign({}, optionalProps.popperOptions, {
            modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [
                applyStylesModifier
            ])
        })
    }));
    var originalShow = singleton.show;
    singleton.show = function(target) {
        originalShow(); // first time, showOnCreate or programmatic call with no params
        // default to showing first instance
        if (!currentTarget && target == null) return prepareInstance(singleton, references[0]);
         // triggered from event (do nothing as prepareInstance already called by onTrigger)
        // programmatic call with no params when already visible (do nothing again)
        if (currentTarget && target == null) return;
         // target is index of instance
        if (typeof target === 'number') return references[target] && prepareInstance(singleton, references[target]);
         // target is a child tippy instance
        if (individualInstances.indexOf(target) >= 0) {
            var ref = target.reference;
            return prepareInstance(singleton, ref);
        } // target is a ReferenceElement
        if (references.indexOf(target) >= 0) return prepareInstance(singleton, target);
    };
    singleton.showNext = function() {
        var first = references[0];
        if (!currentTarget) return singleton.show(0);
        var index = references.indexOf(currentTarget);
        singleton.show(references[index + 1] || first);
    };
    singleton.showPrevious = function() {
        var last = references[references.length - 1];
        if (!currentTarget) return singleton.show(last);
        var index = references.indexOf(currentTarget);
        var target = references[index - 1] || last;
        singleton.show(target);
    };
    var originalSetProps = singleton.setProps;
    singleton.setProps = function(props) {
        overrides = props.overrides || overrides;
        originalSetProps(props);
    };
    singleton.setInstances = function(nextInstances) {
        enableInstances(true);
        interceptSetPropsCleanups.forEach(function(fn) {
            return fn();
        });
        individualInstances = nextInstances;
        enableInstances(false);
        setReferences();
        setTriggerTargets();
        interceptSetPropsCleanups = interceptSetProps(singleton);
        singleton.setProps({
            triggerTarget: triggerTargets
        });
    };
    interceptSetPropsCleanups = interceptSetProps(singleton);
    return singleton;
};
var BUBBLING_EVENTS_MAP = {
    mouseover: 'mouseenter',
    focusin: 'focus',
    click: 'click'
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */ function delegate(targets, props) {
    errorWhen(!(props && props.target), [
        'You must specity a `target` prop indicating a CSS selector string matching',
        'the target elements that should receive a tippy.'
    ].join(' '));
    var listeners = [];
    var childTippyInstances = [];
    var disabled = false;
    var target = props.target;
    var nativeProps = removeProperties(props, [
        'target'
    ]);
    var parentProps = Object.assign({}, nativeProps, {
        trigger: 'manual',
        touch: false
    });
    var childProps = Object.assign({
        touch: defaultProps.touch
    }, nativeProps, {
        showOnCreate: true
    });
    var returnValue = tippy(targets, parentProps);
    var normalizedReturnValue = normalizeToArray(returnValue);
    function onTrigger(event) {
        if (!event.target || disabled) return;
        var targetNode = event.target.closest(target);
        if (!targetNode) return;
         // Get relevant trigger with fallbacks:
        // 1. Check `data-tippy-trigger` attribute on target node
        // 2. Fallback to `trigger` passed to `delegate()`
        // 3. Fallback to `defaultProps.trigger`
        var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || defaultProps.trigger; // @ts-ignore
        if (targetNode._tippy) return;
        if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') return;
        if (event.type !== 'touchstart' && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) return;
        var instance = tippy(targetNode, childProps);
        if (instance) childTippyInstances = childTippyInstances.concat(instance);
    }
    function on(node, eventType, handler, options) {
        if (options === void 0) options = false;
        node.addEventListener(eventType, handler, options);
        listeners.push({
            node: node,
            eventType: eventType,
            handler: handler,
            options: options
        });
    }
    function addEventListeners(instance) {
        var reference = instance.reference;
        on(reference, 'touchstart', onTrigger, TOUCH_OPTIONS);
        on(reference, 'mouseover', onTrigger);
        on(reference, 'focusin', onTrigger);
        on(reference, 'click', onTrigger);
    }
    function removeEventListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function applyMutations(instance) {
        var originalDestroy = instance.destroy;
        var originalEnable = instance.enable;
        var originalDisable = instance.disable;
        instance.destroy = function(shouldDestroyChildInstances) {
            if (shouldDestroyChildInstances === void 0) shouldDestroyChildInstances = true;
            if (shouldDestroyChildInstances) childTippyInstances.forEach(function(instance) {
                instance.destroy();
            });
            childTippyInstances = [];
            removeEventListeners();
            originalDestroy();
        };
        instance.enable = function() {
            originalEnable();
            childTippyInstances.forEach(function(instance) {
                return instance.enable();
            });
            disabled = false;
        };
        instance.disable = function() {
            originalDisable();
            childTippyInstances.forEach(function(instance) {
                return instance.disable();
            });
            disabled = true;
        };
        addEventListeners(instance);
    }
    normalizedReturnValue.forEach(applyMutations);
    return returnValue;
}
var animateFill = {
    name: 'animateFill',
    defaultValue: false,
    fn: function fn(instance) {
        var _instance$props$rende;
        // @ts-ignore
        if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) {
            errorWhen(instance.props.animateFill, 'The `animateFill` plugin requires the default render function.');
            return {};
        }
        var _getChildren = getChildren(instance.popper), box = _getChildren.box, content = _getChildren.content;
        var backdrop = instance.props.animateFill ? createBackdropElement() : null;
        return {
            onCreate: function onCreate() {
                if (backdrop) {
                    box.insertBefore(backdrop, box.firstElementChild);
                    box.setAttribute('data-animatefill', '');
                    box.style.overflow = 'hidden';
                    instance.setProps({
                        arrow: false,
                        animation: 'shift-away'
                    });
                }
            },
            onMount: function onMount() {
                if (backdrop) {
                    var transitionDuration = box.style.transitionDuration;
                    var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
                    // tooltip element. `clip-path` is the other alternative but is not
                    // well-supported and is buggy on some devices.
                    content.style.transitionDelay = Math.round(duration / 10) + "ms";
                    backdrop.style.transitionDuration = transitionDuration;
                    setVisibilityState([
                        backdrop
                    ], 'visible');
                }
            },
            onShow: function onShow() {
                if (backdrop) backdrop.style.transitionDuration = '0ms';
            },
            onHide: function onHide() {
                if (backdrop) setVisibilityState([
                    backdrop
                ], 'hidden');
            }
        };
    }
};
function createBackdropElement() {
    var backdrop = div();
    backdrop.className = BACKDROP_CLASS;
    setVisibilityState([
        backdrop
    ], 'hidden');
    return backdrop;
}
var mouseCoords = {
    clientX: 0,
    clientY: 0
};
var activeInstances = [];
function storeMouseCoords(_ref) {
    var clientX = _ref.clientX, clientY = _ref.clientY;
    mouseCoords = {
        clientX: clientX,
        clientY: clientY
    };
}
function addMouseCoordsListener(doc) {
    doc.addEventListener('mousemove', storeMouseCoords);
}
function removeMouseCoordsListener(doc) {
    doc.removeEventListener('mousemove', storeMouseCoords);
}
var followCursor = {
    name: 'followCursor',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        var doc = getOwnerDocument(instance.props.triggerTarget || reference);
        var isInternalUpdate = false;
        var wasFocusEvent = false;
        var isUnmounted = true;
        var prevProps = instance.props;
        function getIsInitialBehavior() {
            return instance.props.followCursor === 'initial' && instance.state.isVisible;
        }
        function addListener() {
            doc.addEventListener('mousemove', onMouseMove);
        }
        function removeListener() {
            doc.removeEventListener('mousemove', onMouseMove);
        }
        function unsetGetReferenceClientRect() {
            isInternalUpdate = true;
            instance.setProps({
                getReferenceClientRect: null
            });
            isInternalUpdate = false;
        }
        function onMouseMove(event) {
            // If the instance is interactive, avoid updating the position unless it's
            // over the reference element
            var isCursorOverReference = event.target ? reference.contains(event.target) : true;
            var followCursor = instance.props.followCursor;
            var clientX = event.clientX, clientY = event.clientY;
            var rect = reference.getBoundingClientRect();
            var relativeX = clientX - rect.left;
            var relativeY = clientY - rect.top;
            if (isCursorOverReference || !instance.props.interactive) instance.setProps({
                // @ts-ignore - unneeded DOMRect properties
                getReferenceClientRect: function getReferenceClientRect() {
                    var rect = reference.getBoundingClientRect();
                    var x = clientX;
                    var y = clientY;
                    if (followCursor === 'initial') {
                        x = rect.left + relativeX;
                        y = rect.top + relativeY;
                    }
                    var top = followCursor === 'horizontal' ? rect.top : y;
                    var right = followCursor === 'vertical' ? rect.right : x;
                    var bottom = followCursor === 'horizontal' ? rect.bottom : y;
                    var left = followCursor === 'vertical' ? rect.left : x;
                    return {
                        width: right - left,
                        height: bottom - top,
                        top: top,
                        right: right,
                        bottom: bottom,
                        left: left
                    };
                }
            });
        }
        function create() {
            if (instance.props.followCursor) {
                activeInstances.push({
                    instance: instance,
                    doc: doc
                });
                addMouseCoordsListener(doc);
            }
        }
        function destroy() {
            activeInstances = activeInstances.filter(function(data) {
                return data.instance !== instance;
            });
            if (activeInstances.filter(function(data) {
                return data.doc === doc;
            }).length === 0) removeMouseCoordsListener(doc);
        }
        return {
            onCreate: create,
            onDestroy: destroy,
            onBeforeUpdate: function onBeforeUpdate() {
                prevProps = instance.props;
            },
            onAfterUpdate: function onAfterUpdate(_, _ref2) {
                var followCursor = _ref2.followCursor;
                if (isInternalUpdate) return;
                if (followCursor !== undefined && prevProps.followCursor !== followCursor) {
                    destroy();
                    if (followCursor) {
                        create();
                        if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) addListener();
                    } else {
                        removeListener();
                        unsetGetReferenceClientRect();
                    }
                }
            },
            onMount: function onMount() {
                if (instance.props.followCursor && !wasFocusEvent) {
                    if (isUnmounted) {
                        onMouseMove(mouseCoords);
                        isUnmounted = false;
                    }
                    if (!getIsInitialBehavior()) addListener();
                }
            },
            onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) mouseCoords = {
                    clientX: event.clientX,
                    clientY: event.clientY
                };
                wasFocusEvent = event.type === 'focus';
            },
            onHidden: function onHidden() {
                if (instance.props.followCursor) {
                    unsetGetReferenceClientRect();
                    removeListener();
                    isUnmounted = true;
                }
            }
        };
    }
};
function getProps(props, modifier) {
    var _props$popperOptions;
    return {
        popperOptions: Object.assign({}, props.popperOptions, {
            modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function(_ref) {
                var name = _ref.name;
                return name !== modifier.name;
            }), [
                modifier
            ])
        })
    };
}
var inlinePositioning = {
    name: 'inlinePositioning',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        function isEnabled() {
            return !!instance.props.inlinePositioning;
        }
        var placement;
        var cursorRectIndex = -1;
        var isInternalUpdate = false;
        var triedPlacements = [];
        var modifier = {
            name: 'tippyInlinePositioning',
            enabled: true,
            phase: 'afterWrite',
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (isEnabled()) {
                    if (triedPlacements.indexOf(state.placement) !== -1) triedPlacements = [];
                    if (placement !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
                        triedPlacements.push(state.placement);
                        instance.setProps({
                            // @ts-ignore - unneeded DOMRect properties
                            getReferenceClientRect: function getReferenceClientRect() {
                                return _getReferenceClientRect(state.placement);
                            }
                        });
                    }
                    placement = state.placement;
                }
            }
        };
        function _getReferenceClientRect(placement) {
            return getInlineBoundingClientRect(getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
        }
        function setInternalProps(partialProps) {
            isInternalUpdate = true;
            instance.setProps(partialProps);
            isInternalUpdate = false;
        }
        function addModifier() {
            if (!isInternalUpdate) setInternalProps(getProps(instance.props, modifier));
        }
        return {
            onCreate: addModifier,
            onAfterUpdate: addModifier,
            onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) {
                    var rects = arrayFrom(instance.reference.getClientRects());
                    var cursorRect = rects.find(function(rect) {
                        return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
                    });
                    var index = rects.indexOf(cursorRect);
                    cursorRectIndex = index > -1 ? index : cursorRectIndex;
                }
            },
            onHidden: function onHidden() {
                cursorRectIndex = -1;
            }
        };
    }
};
function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
    // Not an inline element, or placement is not yet known
    if (clientRects.length < 2 || currentBasePlacement === null) return boundingRect;
     // There are two rects and they are disjoined
    if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) return clientRects[cursorRectIndex] || boundingRect;
    switch(currentBasePlacement){
        case 'top':
        case 'bottom':
            var firstRect = clientRects[0];
            var lastRect = clientRects[clientRects.length - 1];
            var isTop = currentBasePlacement === 'top';
            var top = firstRect.top;
            var bottom = lastRect.bottom;
            var left = isTop ? firstRect.left : lastRect.left;
            var right = isTop ? firstRect.right : lastRect.right;
            var width = right - left;
            var height = bottom - top;
            return {
                top: top,
                bottom: bottom,
                left: left,
                right: right,
                width: width,
                height: height
            };
        case 'left':
        case 'right':
            var minLeft = Math.min.apply(Math, clientRects.map(function(rects) {
                return rects.left;
            }));
            var maxRight = Math.max.apply(Math, clientRects.map(function(rects) {
                return rects.right;
            }));
            var measureRects = clientRects.filter(function(rect) {
                return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
            });
            var _top = measureRects[0].top;
            var _bottom = measureRects[measureRects.length - 1].bottom;
            var _left = minLeft;
            var _right = maxRight;
            var _width = _right - _left;
            var _height = _bottom - _top;
            return {
                top: _top,
                bottom: _bottom,
                left: _left,
                right: _right,
                width: _width,
                height: _height
            };
        default:
            return boundingRect;
    }
}
var sticky = {
    name: 'sticky',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference, popper = instance.popper;
        function getReference() {
            return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
        }
        function shouldCheck(value) {
            return instance.props.sticky === true || instance.props.sticky === value;
        }
        var prevRefRect = null;
        var prevPopRect = null;
        function updatePosition() {
            var currentRefRect = shouldCheck('reference') ? getReference().getBoundingClientRect() : null;
            var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;
            if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
                if (instance.popperInstance) instance.popperInstance.update();
            }
            prevRefRect = currentRefRect;
            prevPopRect = currentPopRect;
            if (instance.state.isMounted) requestAnimationFrame(updatePosition);
        }
        return {
            onMount: function onMount() {
                if (instance.props.sticky) updatePosition();
            }
        };
    }
};
function areRectsDifferent(rectA, rectB) {
    if (rectA && rectB) return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
    return true;
}
tippy.setDefaultProps({
    render: render
});
exports.default = tippy;

},{"@popperjs/core":"7unqC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7unqC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":false,"./modifiers/index.js":"cap3W","./createPopper.js":false,"./popper.js":"1PuRF","./popper-lite.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCAq5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cap3W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"4iMn4","./arrow.js":false,"./computeStyles.js":false,"./eventListeners.js":false,"./flip.js":false,"./hide.js":false,"./offset.js":false,"./popperOffsets.js":false,"./preventOverflow.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iMn4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? '' : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = '';
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: [
        'computeStyles'
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2Qom":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeName);
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYFUC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SkOo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindow);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31HFW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === 'y' ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === 'y' ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};

},{"../utils/getBasePlacement.js":"59Wp3","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/contains.js":"4QxRR","../dom-utils/getOffsetParent.js":"laoYw","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/within.js":"3glSz","../utils/mergePaddingObject.js":"lEIf9","../utils/expandToHashMap.js":"iQlH5","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Wp3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBasePlacement);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split('-')[0];
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvjuf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getLayoutRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CFSQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBoundingClientRect);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}

},{"./instanceOf.js":"gYFUC","../utils/math.js":"gQqVe","./getWindow.js":"2SkOo","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQqVe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ipHv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isLayoutViewport);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}

},{"../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hEx0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUAString);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(' ');
    return navigator.userAgent;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QxRR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laoYw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOffsetParent);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === 'fixed') return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === 'fixed') return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        'html',
        'body'
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === 'static')offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === 'html' || (0, _getNodeNameJsDefault.default)(offsetParent) === 'body' && (0, _getComputedStyleJsDefault.default)(offsetParent).position === 'static')) return window;
    return offsetParent || getContainingBlock(element) || window;
}

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","./getParentNode.js":"bIHpd","../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mZjB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getComputedStyle);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qBb7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isTableElement);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIHpd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getParentNode);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === 'html') return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ9Y1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentElement);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xlom":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getMainAxisFromPlacement);
function getMainAxisFromPlacement(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3glSz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEIf9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergePaddingObject);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}

},{"./getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4xOt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFreshSideObject);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQlH5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>expandToHashMap);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDlm2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, _getWindowJsDefault.default)(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","../utils/getVariation.js":"hIo7Y","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIo7Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getVariation);
function getVariation(placement) {
    return placement.split('-')[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBKsL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
    });
    if (resize) window.addEventListener('resize', instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
        });
        if (resize) window.removeEventListener('resize', instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fv5wq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"a8CY0","../utils/getBasePlacement.js":"59Wp3","../utils/getOppositeVariationPlacement.js":"bKTLC","../utils/detectOverflow.js":"ltCuw","../utils/computeAutoPlacement.js":"gytMj","../enums.js":"lCAq5","../utils/getVariation.js":"hIo7Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8CY0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositePlacement);
var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKTLC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositeVariationPlacement);
var hash = {
    start: 'end',
    end: 'start'
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltCuw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>detectOverflow);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}

},{"../dom-utils/getClippingRect.js":"eeg2s","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getBoundingClientRect.js":"9CFSQ","./computeOffsets.js":"7jtXk","./rectToClientRect.js":"cQ3tg","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","./mergePaddingObject.js":"lEIf9","./expandToHashMap.js":"iQlH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeg2s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getClippingRect);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element, strategy)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== 'body';
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

},{"../enums.js":"lCAq5","./getViewportRect.js":"cnH2G","./getDocumentRect.js":"d94SC","./listScrollParents.js":"2di3T","./getOffsetParent.js":"laoYw","./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./getBoundingClientRect.js":"9CFSQ","./getParentNode.js":"bIHpd","./contains.js":"4QxRR","./getNodeName.js":"a2Qom","../utils/rectToClientRect.js":"cQ3tg","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnH2G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getViewportRect);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getViewportRect(element, strategy) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, _isLayoutViewportJsDefault.default)();
        if (layoutViewport || !layoutViewport && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}

},{"./getWindow.js":"2SkOo","./getDocumentElement.js":"eJ9Y1","./getWindowScrollBarX.js":"sz4Ld","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sz4Ld":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScrollBarX);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XUtN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScroll);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d94SC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentRect);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === 'rtl') x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}

},{"./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./getWindowScrollBarX.js":"sz4Ld","./getWindowScroll.js":"1XUtN","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2di3T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>listScrollParents);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy4ZS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getScrollParent);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rLGO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isScrollParent);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ3tg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rectToClientRect);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jtXk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeOffsets);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gytMj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeAutoPlacement);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}

},{"./getVariation.js":"hIo7Y","../enums.js":"lCAq5","./detectOverflow.js":"ltCuw","./getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2g4OF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: hide
};

},{"../enums.js":"lCAq5","../utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GKVY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"59Wp3","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I679":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AMhb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === 'y' ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === 'y' ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === 'x' ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === 'x' ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === 'y' ? 'height' : 'width';
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};

},{"../enums.js":"lCAq5","../utils/getBasePlacement.js":"59Wp3","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/getAltAxis.js":"59FWE","../utils/within.js":"3glSz","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/getOffsetParent.js":"laoYw","../utils/detectOverflow.js":"ltCuw","../utils/getVariation.js":"hIo7Y","../utils/getFreshSideObject.js":"g4xOt","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59FWE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getAltAxis);
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHuNp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === 'fixed'),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/mergeByName.js":"2zTVN","./utils/detectOverflow.js":false,"./dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijPls":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getCompositeRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBjCr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeScroll);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pwY2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getHTMLElementScroll);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N0VO0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>orderModifiers);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6Chr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>debounce);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zTVN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeByName);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PuRF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","./modifiers/offset.js":"3GKVY","./modifiers/flip.js":"fv5wq","./modifiers/preventOverflow.js":"1AMhb","./modifiers/arrow.js":"31HFW","./modifiers/hide.js":"2g4OF","./popper-lite.js":false,"./modifiers/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2hEyg":[function() {},{}],"5lkRv":[function(require,module,exports,__globalThis) {
// Imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _departureLocationSearchView = require("./departureLocationSearchView");
var _departureLocationSearchViewDefault = parcelHelpers.interopDefault(_departureLocationSearchView);
var _arrivalLocationSearchView = require("./arrivalLocationSearchView");
var _arrivalLocationSearchViewDefault = parcelHelpers.interopDefault(_arrivalLocationSearchView);
var _datePickerView = require("./datePickerView");
var _datePickerViewDefault = parcelHelpers.interopDefault(_datePickerView);
var _searchResultsBtnView = require("./searchResultsBtnView");
var _searchResultsBtnViewDefault = parcelHelpers.interopDefault(_searchResultsBtnView);
class ClearInputBtn {
    // DOM Elements
    _inputWrappers = document.querySelectorAll(".input-wrapper");
    // This method will remove the input values of the container which it belongs to
    _clearInput() {
        // Loop through each input wrapper
        this._inputWrappers.forEach((wrapper)=>{
            wrapper.addEventListener("click", (e)=>{
                // Use event delegation to target the clear button
                if (e.target.closest(".clear-input-btn")) {
                    // Store the clear button in a variable
                    const clearBtn = e.target.closest(".clear-input-btn");
                    // Use the querySelector() method to extract the specific input and store it into a variable
                    const inputEl = wrapper.querySelector("input");
                    // Check for each input id and remove the value
                    switch(inputEl.id){
                        case "departure-location":
                            (0, _departureLocationSearchViewDefault.default)._departureLocationId = "";
                            break;
                        case "arrival-location":
                            (0, _arrivalLocationSearchViewDefault.default)._arrivalLocationId = "";
                            break;
                        case "departure-date":
                            (0, _datePickerViewDefault.default)._queryValues.departureDate = "";
                            break;
                        case "return-date":
                            (0, _datePickerViewDefault.default)._queryValues.returnDate = "";
                            // As the return date is optional and doesn't need to be validated, I had to remove it manually from the queryStringValues
                            (0, _searchResultsBtnViewDefault.default)._queryStringValues.returnDate = "";
                            break;
                    }
                    // Remove the attribute so that the validator will work properly again if the user comes back to make input changes
                    (0, _searchResultsBtnViewDefault.default)._searchBtn.removeAttribute("href");
                    // Hide the clear button
                    clearBtn.classList.add("d-none");
                    // Enable the input
                    inputEl.removeAttribute("disabled");
                    inputEl.value = "";
                }
            });
        });
    }
}
exports.default = new ClearInputBtn();

},{"./departureLocationSearchView":"7D4AX","./arrivalLocationSearchView":"gjx8h","./datePickerView":"8Mc3D","./searchResultsBtnView":"cYGc2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jcjZx","38TcD"], "38TcD", "parcelRequire94c2")

//# sourceMappingURL=index.56bfde39.js.map
