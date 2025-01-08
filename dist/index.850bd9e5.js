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
})({"4nnrR":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "af599da5850bd9e5";
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

},{}],"1GgH0":[function(require,module,exports,__globalThis) {
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
        await _modelJs.loadSearchFlightsResults(query, (0, _departureLocationSearchViewJsDefault.default)._transit);
        // Render results
        (0, _departureLocationSearchViewJsDefault.default)._renderMarkup(_modelJs.state.locationResults.departureLocationResults, (0, _departureLocationSearchViewJsDefault.default)._transit);
    } catch (error) {
        (0, _departureLocationSearchViewJsDefault.default)._renderError(error.message);
    }
};
const controlArrivalSearchLocations = async function() {
    // Render spinner
    (0, _arrivalLocationSearchViewJsDefault.default)._renderSpinner();
    // Get search query
    const query = (0, _arrivalLocationSearchViewJsDefault.default)._getQuery();
    if (!query) return;
    // Load search results
    await _modelJs.loadSearchFlightsResults(query, (0, _arrivalLocationSearchViewJsDefault.default)._transit);
    // Render results
    (0, _arrivalLocationSearchViewJsDefault.default)._renderMarkup(_modelJs.state.locationResults.arrivalLocationResults, (0, _arrivalLocationSearchViewJsDefault.default)._transit);
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
const init = function() {
    (0, _personsSelectionViewJsDefault.default)._addHandlerRender(controlSelectPersons);
    (0, _flightClassSelectionViewJsDefault.default)._addHandlerRender(controlSelectFlightClass);
    (0, _departureLocationSearchViewJsDefault.default)._addHandlerSearch(controlDepartureSearchLocations);
    (0, _arrivalLocationSearchViewJsDefault.default)._addHandlerSearch(controlArrivalSearchLocations);
    (0, _departureLocationSearchViewJsDefault.default)._addHandlerLoseFocus(controlDepartureSearchLoseFocus);
    (0, _arrivalLocationSearchViewJsDefault.default)._addHandlerLoseFocus(controlArrivalSearchLoseFocus);
    // Dynamic styling
    (0, _navbarViewJsDefault.default).setDynamicStyling();
    (0, _sideNavbarViewJsDefault.default).setDynamicStyling();
    (0, _sideNavbarViewJsDefault.default).toggleSideNavbar();
    (0, _searchFormViewJsDefault.default)._setDropdownDynamicStyling();
    (0, _searchFormViewJsDefault.default)._showSelectionDropdown();
    (0, _headerContentViewJsDefault.default).setDynamicStyling();
};
init();

},{"./model.js":"Py0LO","./views/navbarView.js":"9sJsi","./views/sideNavbarView.js":"9BkUd","./views/headerContentView.js":"d8zti","./views/searchFormView.js":"gHYzF","./views/flights-search-form/personsSelectionView.js":"dn95k","./views/flights-search-form/personsSelectionBtnView.js":"hLXZN","./views/flights-search-form/flightClassSelectionView.js":"bMDTa","./views/flights-search-form/flightClassSelectionBtnView.js":"5GwaT","./views/flights-search-form/departureLocationSearchView.js":"7D4AX","./views/flights-search-form/arrivalLocationSearchView.js":"gjx8h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Py0LO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadSearchFlightsResults", ()=>loadSearchFlightsResults);
var _configJs = require("./config.js");
const state = {
    locationResults: {
        departureLocationResults: [],
        arrivalLocationResults: []
    }
};
const loadSearchFlightsResults = async function(query, transit) {
    const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${query}`;
    try {
        const response = await fetch(url, (0, _configJs.OPTIONS));
        if (!response.ok) throw new Error("Something went wrong. Please try again!");
        const data = await response.json();
        if (transit === "departure") state.locationResults.departureLocationResults = data.data;
        if (transit === "arrival") state.locationResults.arrivalLocationResults = data.data;
        console.log(state);
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
    sideNavbar = document.querySelector(".sidebar-navigation");
    navbar = document.getElementById("nav");
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
    navbar = document.getElementById("nav");
    sideNavbar = document.querySelector(".sidebar-navigation");
    hamburgerBtn = document.getElementById("hamburger-btn");
    overlay = document.querySelector(".overlay");
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
        document.body.addEventListener("click", (e)=>{
            if (e.target.classList.contains("overlay")) {
                this.sideNavbar.classList.remove("sidebar-navigation-visible");
                e.target.classList.remove("overlay-visible");
            }
            if (e.target.classList.contains("overlay") && window.scrollY === 0) {
                this.navbar.classList.remove("navigation-highlight");
                this.sideNavbar.classList.remove("sidebar-navigation-visible");
                e.target.classList.remove("overlay-visible");
            }
        });
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
    navbar = document.getElementById("nav");
    header = document.getElementById("header");
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
    _dropdownInputsContainer = document.querySelector(".dropdown-inputs-container");
    _flightPersonsDropdownBtn = document.getElementById("flight-persons-dropdown-btn");
    _flightClassDropdownBtn = document.getElementById("flight-class-dropdown-btn");
    _personsSelectionDropdown = document.querySelector(".persons-selection");
    _flightClassDropdown = document.querySelector(".flight-class-selection");
    _selectionDoneBtns = document.querySelectorAll(".selection-done-btn");
    _setDropdownDynamicStyling() {
        [
            "load",
            "resize"
        ].forEach((e)=>{
            window.addEventListener(e, ()=>{
                const parentSizes = this._dropdownInputsContainer.getBoundingClientRect();
                const selectPersonsBtnSizes = this._flightPersonsDropdownBtn.getBoundingClientRect();
                const selectFlightClassBtnSizes = this._flightClassDropdownBtn.getBoundingClientRect();
                this._personsSelectionDropdown.style.top = `${selectPersonsBtnSizes.height + 10}px`;
                this._flightClassDropdown.style.top = `${parentSizes.height + 10}px`;
                this._flightClassDropdown.style.left = `${selectFlightClassBtnSizes.left - parentSizes.left}px`;
            });
        });
    }
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
    _hideSelectionDropdown() {
        this._selectionDoneBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                e.target.closest(".dropdown-visible").classList.remove("dropdown-visible");
            });
        });
    }
}
exports.default = new SearchFormView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dn95k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _personsSelectionBtnView = require("./personsSelectionBtnView");
var _personsSelectionBtnViewDefault = parcelHelpers.interopDefault(_personsSelectionBtnView);
class PersonsSelectionView {
    _parentEl = document.querySelector(".persons-selection");
    _adultsParentEl = document.querySelector(".adults");
    _childrenParentEl = document.querySelector(".children");
    _childrenAgeParentEl = document.querySelector(".selection-children-age");
    _adults = 1;
    _children = 0;
    _childrenSelectAgeElements = [];
    _addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _clearMarkup(container) {
        container.innerHTML = "";
    }
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
    _generateSelectChildAgeMarkup(counter) {
        const selectMarkup = `
                 <label class="fs-5 fw-semibold" for="child-age-${counter}"
                        >${counter}${this._childrenCount(counter)} child's age</label
              >
              <select
                name="${this._childrenCount(counter)}-child-age"
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
        this._childrenSelectAgeElements.push(selectMarkup);
    }
    _displaySelectChildAgeEl() {
        this._clearMarkup(this._childrenAgeParentEl);
        const markup = this._childrenSelectAgeElements.map((el)=>{
            return el;
        }).join("");
        this._childrenAgeParentEl.insertAdjacentHTML("afterbegin", markup);
    }
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
                this._removeChildAgeEl(this._childrenSelectAgeElements);
                this._displaySelectChildAgeEl();
                this._generateChildrenMarkup();
                this._generateAdultsMarkup();
            }
        });
    }
    // ==================
    // Utility Methods
    // ==================
    _hideChildrenSelectAgeParentEl() {
        this._childrenAgeParentEl.style.display = "none";
    }
    _showChildrenSelectAgeParentEl() {
        this._childrenAgeParentEl.style.display = "flex";
    }
    _removeChildAgeEl(array) {
        array.pop();
        if (array.length === 0) this._hideChildrenSelectAgeParentEl();
        return array;
    }
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
    _personsBtn = document.getElementById("flight-persons-dropdown-btn");
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
    _clearMarkup() {
        this._personsBtn.innerHTML = "";
    }
}
exports.default = new PersonsSelectionBtnView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bMDTa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _flightClassSelectionBtnView = require("./flightClassSelectionBtnView");
var _flightClassSelectionBtnViewDefault = parcelHelpers.interopDefault(_flightClassSelectionBtnView);
class FlightClassSelectionView {
    _flightClassBtns = document.querySelectorAll(".flight-class-btn");
    _selectedBtn;
    _addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _selectFlightClass() {
        this._flightClassBtns.forEach((btn)=>{
            btn.addEventListener("click", ()=>{
                this._flightClassBtns.forEach((btn)=>{
                    btn.classList.remove("selected");
                });
                btn.classList.add("selected");
                this._selectedBtn = btn;
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
    _flightsClassBtn = document.getElementById("flight-class-dropdown-btn");
    _generateMarkup(flightClass = "Economy") {
        this._clearMarkup();
        const markup = `
    <i class="fa-solid fa-plane-circle-check"></i>
              <span>${flightClass}</span>
    <i class="fa-solid fa-chevron-down"></i>
    `;
        this._flightsClassBtn.insertAdjacentHTML("afterbegin", markup);
    }
    _clearMarkup() {
        this._flightsClassBtn.innerHTML = "";
    }
}
exports.default = new FlightClassSelectionBtnView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7D4AX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _locationSearchViewJs = require("./locationSearchView.js");
var _locationSearchViewJsDefault = parcelHelpers.interopDefault(_locationSearchViewJs);
class DepartureLocationSearchView extends (0, _locationSearchViewJsDefault.default) {
    _parentEl = document.querySelector(".departure-location-results");
    _searchResultsList = document.querySelector(".departure-location-results-list");
    _searchLocationInput = document.getElementById("departure-location");
    _transit = "departure";
}
exports.default = new DepartureLocationSearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./locationSearchView.js":"h4rke"}],"h4rke":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class LocationSearchView {
    _errorMessage = "No locations found for your query. Please try again!";
    _addHandlerSearch(handler) {
        this._searchLocationInput.addEventListener("input", (e)=>{
            e.preventDefault();
            // Display the search results container if the length of the input's value is bigger than 1
            if (this._searchLocationInput.value.length >= 1) this._showContainerResults();
            else this._hideContainerResults();
            handler();
        });
    }
    _addHandlerLoseFocus(handler) {
        this._searchLocationInput.addEventListener("blur", ()=>{
            handler();
        });
    }
    _showContainerResults() {
        this._parentEl.classList.add("visible");
    }
    _hideContainerResults() {
        this._parentEl.classList.remove("visible");
    }
    _clearMarkup() {
        this._searchResultsList.innerHTML = "";
    }
    _getQuery() {
        const query = this._searchLocationInput.value;
        return query;
    }
    _renderSpinner() {
        const markup = `
        <div class="loader-container d-flex justify-content-center">
            <div class="loader"></div>
        </div>
    `;
        this._clearMarkup();
        this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
    }
    _renderError(message = this._errorMessage) {
        this._clearMarkup();
        const markup = `
      <div class="error">
            <p>${message}</p>
      </div>
    `;
        this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
    }
    _renderMarkup(data, transit) {
        this._clearMarkup();
        const markup = data.map((item, index)=>{
            const currentItem = data[index];
            const previousItem = data[index - 1];
            if (currentItem.type === "CITY") return `
        <li class="result-list-item">
        <a
            href="#"
            class="${transit}-location-city d-flex align-items-center p-0 p-sm-3 text-decoration-none rounded-3"
            data-id=${item.id}
            >
                  <div class="city-image">
                    <img
                      src=${item.photoUri}
                      alt="City Image"
                      class="w-100 h-100 rounded-3"
                    />
                  </div>
                  <div class="city-details">
                    <h3 class="fs-5 fw-bold">
                      ${item.name}, ${item.regionName}, ${item.countryName}
                      <span class="fw-normal">(${item.code})</span>
                    </h3>
                    <p class="m-0">All airports</p>
                  </div>
        </a>
        </li>
        `;
            if (currentItem.type === "AIRPORT") {
                if (previousItem && currentItem.regionName === previousItem.regionName) return `
            <li class="result-list-item ms-3">
                    <a
                      href="#"
                      class="d-flex align-items-center text-decoration-none py-3 px-0 px-sm-3 rounded-3"
                      data-id=${item.id}
                      data-city=${item.city}
                    >
                      <div class="result-icon">
                        <img
                          src="/plane-icon.d3f3c76d.png"
                          class="w-100 h-100"
                          alt="Plane icon"
                        />
                      </div>
                      <div class="result-content">
                        <p class="fw-bold mb-1">${item.code} ${item.name}</p>
                        <p class="m-0">${item.distanceToCity.value.toFixed(2)}${item.distanceToCity.unit} from city centre</p>
                      </div>
                    </a>
           </li>
          `;
                if (previousItem && currentItem.regionName !== previousItem.regionName || data.length === 1) return `
            <li class="result-list-item">
                    <a
                      href="#"
                      class="d-flex align-items-center text-decoration-none py-3 px-0 px-sm-3 rounded-3"
                      data-id=${item.id}
                      data-city=${item.city}
                    >
                      <div class="result-icon">
                        <img
                          src="/plane-icon.d3f3c76d.png"
                          class="w-100 h-100"
                          alt="Plane icon"
                        />
                      </div>
                      <div class="result-content">
                        <p class="fw-bold mb-1">${item.code} ${item.name}</p>
                        <p class="m-0">${item.cityName}, ${item.regionName}, ${item.countryName}</p>
                      </div>
                    </a>
           </li>
          `;
                if (data.length === 0) return `
            <li class="result-list-item">
              <p>No locations found for your query. Please try again!</p>
            </li>
            `;
            }
        }).join("");
        this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = LocationSearchView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gjx8h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _locationSearchViewJs = require("./locationSearchView.js");
var _locationSearchViewJsDefault = parcelHelpers.interopDefault(_locationSearchViewJs);
class ArrivalLocationSearchView extends (0, _locationSearchViewJsDefault.default) {
    _parentEl = document.querySelector(".arrival-location-results");
    _searchResultsList = document.querySelector(".arrival-location-results-list");
    _searchLocationInput = document.getElementById("arrival-location");
    _transit = "arrival";
}
exports.default = new ArrivalLocationSearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./locationSearchView.js":"h4rke"}]},["4nnrR","1GgH0"], "1GgH0", "parcelRequire94c2")

//# sourceMappingURL=index.850bd9e5.js.map
