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
})({"aBvyN":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9304e3ee22dc3cc4";
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

},{}],"eYIic":[function(require,module,exports,__globalThis) {
// Import model
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
// Import views
var _flightResultsView = require("./views/flightResultsView");
var _flightResultsViewDefault = parcelHelpers.interopDefault(_flightResultsView);
var _navbarView = require("./views/navbarView");
var _navbarViewDefault = parcelHelpers.interopDefault(_navbarView);
var _sideNavbarView = require("./views/sideNavbarView");
var _sideNavbarViewDefault = parcelHelpers.interopDefault(_sideNavbarView);
var _headerContentView = require("./views/headerContentView");
var _headerContentViewDefault = parcelHelpers.interopDefault(_headerContentView);
var _filtersBtnView = require("./views/flights-search-results/filtersBtnView");
var _filtersBtnViewDefault = parcelHelpers.interopDefault(_filtersBtnView);
const controlOnLoadSearch = function() {
    _model.loadFlightsSearchResults((0, _flightResultsViewDefault.default)._getQueryParameters());
};
const controlDisplayDialog = function() {
    (0, _filtersBtnViewDefault.default)._displayDialog();
};
const controlHideDialog = function() {
    (0, _filtersBtnViewDefault.default)._hideDialog();
};
const init = function() {
    (0, _flightResultsViewDefault.default)._addHandlerRender(controlOnLoadSearch);
    (0, _filtersBtnViewDefault.default)._addHandlerDisplayDialog(controlDisplayDialog);
    (0, _filtersBtnViewDefault.default)._addHandlerHideDialog(controlHideDialog);
    // Dynamic styling
    (0, _navbarViewDefault.default).setDynamicStyling();
    (0, _sideNavbarViewDefault.default).setDynamicStyling();
    (0, _sideNavbarViewDefault.default).toggleSideNavbar();
    (0, _headerContentViewDefault.default).setDynamicStyling();
};
init();

},{"./model":"Py0LO","./views/flightResultsView":"cJKtZ","./views/navbarView":"9sJsi","./views/sideNavbarView":"9BkUd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/headerContentView":"d8zti","./views/flights-search-results/filtersBtnView":"cN3nN"}],"Py0LO":[function(require,module,exports,__globalThis) {
// Import the 'options' object which contains the method and the API key
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadDestinationsSearchResults", ()=>loadDestinationsSearchResults);
parcelHelpers.export(exports, "loadFlightsSearchResults", ()=>loadFlightsSearchResults);
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
        flightOffers: []
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
    // Chevk each possible outcome for the number of children selected by the user and assign the value to the children variable
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
        console.log(state);
    } catch (error) {
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

},{}],"cJKtZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class FlightResultsView {
    // Global Variables
    _pageNumber = 1;
    // Create the handler render method and assign the handler parameter which will be passed as a function in flightResultsController.js
    _addHandlerRender(handler) {
        window.addEventListener("load", ()=>{
            handler();
        });
    }
    // This method will be responsible for returning an object which will contain all the query parameters necessary to perform the flights search
    // It will be passed as an argument for the loadFlightsSearchResults function from model.js
    // Each value of the object returned by this method will serve as a parameter for the URL where the API request will be made
    _getQueryParameters() {
        // Return the query string from the URL
        const link = window.location.search;
        // Extract the search params from the query string and store them into a constant variable
        const searchParams = new URLSearchParams(link);
        // As the value for the dynamically added children query parameter depends on the user's selections, I stored the value of the params in a separate variable
        const childrenSearchParam = searchParams.get("children");
        console.log(childrenSearchParam);
        // Create e let variable which will be the value of the children property in the returned object
        let children;
        // As one of the requested params for the URL is represented by each child's age, I use 3 different if statements to check the children's ages
        if (!childrenSearchParam) children = "";
        if (childrenSearchParam && childrenSearchParam.includes(",")) children = childrenSearchParam.split(",");
        if (childrenSearchParam && !childrenSearchParam.includes(",")) children = [
            childrenSearchParam
        ];
        // Return the object which contains the parameters for the API's URL
        return {
            adults: searchParams.get("adults"),
            children,
            flightClass: searchParams.get("flightClass"),
            departureLocationId: searchParams.get("departureLocationId"),
            arrivalLocationId: searchParams.get("arrivalLocationId"),
            departureDate: searchParams.get("departureDate"),
            returnDate: searchParams.get("returnDate"),
            pageNumber: this._pageNumber
        };
    }
}
exports.default = new FlightResultsView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9sJsi":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cN3nN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class FiltersBtnView {
    _filtersBtn = document.querySelector(".filters-btn");
    _filtersDialog = document.querySelector(".filters-dialog");
    _closeDialogBtn = document.querySelector(".close-dialog-btn");
    _addHandlerDisplayDialog(handler) {
        this._filtersBtn.addEventListener("click", ()=>{
            handler();
        });
    }
    _addHandlerHideDialog(handler) {
        this._closeDialogBtn.addEventListener("click", ()=>{
            handler();
        });
    }
    _displayDialog() {
        this._filtersDialog.showModal();
    }
    _hideDialog() {
        this._filtersDialog.close();
    }
}
exports.default = new FiltersBtnView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aBvyN","eYIic"], "eYIic", "parcelRequire94c2")

//# sourceMappingURL=flights-results.22dc3cc4.js.map
