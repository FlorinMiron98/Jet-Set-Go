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
var _flightsOffersView = require("./views/flights-search-results/flightsOffersView");
var _flightsOffersViewDefault = parcelHelpers.interopDefault(_flightsOffersView);
var _detailsDialogView = require("./views/flights-search-results/detailsDialogView");
var _detailsDialogViewDefault = parcelHelpers.interopDefault(_detailsDialogView);
var _formSubmissionDialogView = require("./views/flights-search-results/formSubmissionDialogView");
var _formSubmissionDialogViewDefault = parcelHelpers.interopDefault(_formSubmissionDialogView);
const controlOnLoadSearch = function() {
    _model.loadFlightsSearchResults((0, _flightResultsViewDefault.default)._getQueryParameters());
};
const controlDisplayFlightsOffers = async function() {
    try {
        // Render Spinner
        (0, _flightsOffersViewDefault.default)._renderSpinner();
        // Fetch the flights offers
        await _model.loadFlightsSearchResults((0, _flightResultsViewDefault.default)._getQueryParameters(), (0, _flightsOffersViewDefault.default)._sortValue);
        // Render markup
        (0, _flightsOffersViewDefault.default)._renderMarkup(_model.state);
    } catch (error) {
        (0, _flightsOffersViewDefault.default)._renderError();
    }
};
const controlDisplayMoreFlightsOffers = async function() {
    try {
        // Fetch the flights offers
        await _model.loadFlightsSearchResults((0, _flightResultsViewDefault.default)._getQueryParameters(), (0, _flightsOffersViewDefault.default)._sortValue);
        // Render markup
        (0, _flightsOffersViewDefault.default)._renderMarkup(_model.state, false);
    } catch (error) {
        (0, _flightsOffersViewDefault.default)._renderError();
    }
};
const controlDisplayDialog = async function(token) {
    try {
        // Display dialog
        (0, _detailsDialogViewDefault.default)._displayDialog();
        // Render spinner
        (0, _detailsDialogViewDefault.default)._renderSpinner();
        // Fetch flight details
        await _model.loadFlightDetails(token);
        // Render markup
        (0, _detailsDialogViewDefault.default)._renderMarkup(_model.state);
    } catch (error) {
        (0, _detailsDialogViewDefault.default)._renderError();
    }
};
const controlHideDialog = function() {
    (0, _detailsDialogViewDefault.default)._hideDialog();
};
const controlDisplayFormSubmissionDialog = function() {
    (0, _formSubmissionDialogViewDefault.default)._displayFormSubmissionDialog();
};
const controlHideFormSubmissionDialog = function() {
    (0, _formSubmissionDialogViewDefault.default)._hideFormSubmissionDialog();
};
const init = function() {
    (0, _flightResultsViewDefault.default)._addHandlerRender(controlOnLoadSearch);
    (0, _flightsOffersViewDefault.default)._addHandlerLoadFlightsOffers(controlDisplayFlightsOffers);
    (0, _flightsOffersViewDefault.default)._addHandlerSelectSort(controlDisplayFlightsOffers);
    (0, _flightsOffersViewDefault.default)._loadMoreFlightsResults(controlDisplayMoreFlightsOffers);
    (0, _formSubmissionDialogViewDefault.default)._addHandlerDisplayFormSubmissionDialog(controlDisplayFormSubmissionDialog);
    (0, _formSubmissionDialogViewDefault.default)._addHandlerHideFormSubmissionDialog(controlHideFormSubmissionDialog);
    (0, _detailsDialogViewDefault.default)._addHandlerDisplayDialog(controlDisplayDialog);
    (0, _detailsDialogViewDefault.default)._addHandlerHideDialog(controlHideDialog);
    // Dynamic styling
    (0, _navbarViewDefault.default).setDynamicStyling();
    (0, _sideNavbarViewDefault.default).setDynamicStyling();
    (0, _sideNavbarViewDefault.default).toggleSideNavbar();
    (0, _headerContentViewDefault.default).setDynamicStyling();
};
init();

},{"./model":"Py0LO","./views/flightResultsView":"cJKtZ","./views/navbarView":"9sJsi","./views/sideNavbarView":"9BkUd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/headerContentView":"d8zti","./views/flights-search-results/flightsOffersView":"j6LfF","./views/flights-search-results/detailsDialogView":"9Vs0d","./views/flights-search-results/formSubmissionDialogView":"3ZlTR"}],"Py0LO":[function(require,module,exports,__globalThis) {
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
        // Assign the response to the 'state' object
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j6LfF":[function(require,module,exports,__globalThis) {
// Import this component so we can increase the page number value when using the Intersection Observer API
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _flightResultsView = require("../flightResultsView");
var _flightResultsViewDefault = parcelHelpers.interopDefault(_flightResultsView);
class FlightsOffersView {
    // DOM Elements
    _parentEl = document.querySelector(".flights-search-results");
    _sortBtns = document.querySelectorAll(".sort-btn");
    _intersectionObserverSpinner = document.querySelector(".intersection-observer-loader");
    // Global variables
    _errorMessage = "No flight offers matching your request. Please try again!";
    _sortValue = "BEST";
    // Create the handler select sort method which will sort the results based on the user's selection (best, cheapest, fastest)
    _addHandlerSelectSort(handler) {
        // Loop through each sort button
        this._sortBtns.forEach((btn)=>{
            btn.addEventListener("click", ()=>{
                this._sortBtns.forEach((btn)=>{
                    // Remove the 'active' class list from each button
                    btn.classList.remove("active");
                });
                // Add the 'active' class list on the clicked button
                btn.classList.add("active");
                // Extract the sort value from the data attribute and assign it to the _sortValue variable
                const sortValue = btn.dataset.sort;
                this._sortValue = sortValue;
                // Hide the intersection observer spinner while loading the flights for the selected sort value
                this._intersectionObserverSpinner.classList.add("d-none");
                // Call the handler in the flightResultsController.js
                handler();
            });
        });
    }
    _addHandlerLoadFlightsOffers(handler) {
        window.addEventListener("load", ()=>{
            handler();
        });
    }
    // Create the loading spinner markup and render it before displaying the flight offers
    _renderSpinner() {
        const markup = `
        <div class="loader-container d-flex flex-column align-items-center justify-content-center mt-4">
              <div class="loader"></div>
              <p class="mt-2">Searching for flights offers...</p>
        </div>
    `;
        this._clearMarkup();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    // This method renders the error message if there is an error in fetching the results
    _renderError(message = this._errorMessage) {
        const markup = `
            <div class="text-center fs-4">${message}</div>
    `;
        this._clearMarkup();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    // Clear markup method
    _clearMarkup() {
        this._parentEl.innerHTML = "";
    }
    // Add a second parameter of type boolean so we can separate the initial load of the Intersection Observer API loads
    _renderMarkup(data, isInitialLoad = true) {
        // Clear the markup on the inital load
        if (isInitialLoad) this._clearMarkup();
        // Loop through the flight offers
        const markup = data.flightsSearchResults.flightOffers.map((item)=>{
            // Create the date formatter
            const dateFormatter = new Intl.DateTimeFormat("en-GB", {
                day: "2-digit",
                month: "short"
            });
            let cabinClass;
            // Extract the query parameter, format the scring and assign the value to the 'cabinClass' variable;
            const cabinClassQueryParameter = (0, _flightResultsViewDefault.default)._getQueryParameters().flightClass;
            cabinClass = cabinClassQueryParameter.includes("_") ? cabinClassQueryParameter.split("_").join(" ") : cabinClassQueryParameter;
            // The flightDetails variable will handle the markup for the flight details
            let flightDetails;
            let operatingAirline;
            // Check if the legs operating carriers are the same and filter the value (extract the unique value for a proper display)
            const uniqueAirlines = item.segments[0].legs.filter((leg, index, arr)=>{
                return index === arr.findIndex((i)=>i.flightInfo.carrierInfo.operatingCarrier === leg.flightInfo.carrierInfo.operatingCarrier);
            });
            // Map through the unique airlines values and return the markup for the airline icon and airline name
            operatingAirline = uniqueAirlines.map((leg)=>{
                let airlineName;
                let airlineIcon;
                const iataCode = leg.flightInfo.carrierInfo.operatingCarrier;
                const airlines = data.flightsSearchResults.aggregation.airlines;
                for (const airline of airlines)if (airline.iataCode === iataCode) {
                    airlineIcon = `
                  <img
                      src=${airline.logoUrl}
                      class="h-100"
                      alt="${airline.name} Icon"
                  />`;
                    airlineName = `
                  <figcaption
                    class="airline-name align-self-center m-0 fs-6 fw-bold"
                  >
                    ${airline.name}
                  </figcaption>
                  `;
                }
                return `
            <figure class="airline-icon d-flex mb-2">
                ${airlineIcon || ""}
                ${airlineName || ""}
            </figure>
            `;
            }).join("");
            // If the segments length === 1, then the flight type is one-way
            flightDetails = item.segments.map((segment)=>{
                const departureTime = segment.departureTime.split("T")[1];
                const arrivalTime = segment.arrivalTime.split("T")[1];
                const departureDate = segment.departureTime.split("T")[0];
                const arrivalDate = segment.arrivalTime.split("T")[0];
                return `
                  <div
                    class="flight-details d-flex flex-column flex-md-row justify-content-between mb-3"
                  >
                    <div class="airline-content-wrapper mb-2">
                      <div class="airline-content d-flex align-items-center flex-wrap mb-1">
                          ${operatingAirline}
                      </div>
                      <p
                        class="flight-class m-0 fw-bold fs-6 px-4 rounded-3 text-white"
                      > ${cabinClass}
                      </p>
                    </div>
                    <div class="d-flex flex-column">
                      <div class="flight-hours d-flex justify-content-between">
                        <div class="flight-departure-hour fw-bold fs-3">
                          ${this._extractHoursAndMinutes(departureTime)}
                        </div>
                        <div
                          class="flight-line d-flex align-self-center align-items-center"
                        >
                          <div class="line"></div>
                          <div><i class="fa-solid fa-plane fs-3"></i></div>
                          <div class="line"></div>
                        </div>
                        <div class="flight-arrival-hour fw-bold fs-3">
                           ${this._extractHoursAndMinutes(arrivalTime)}
                        </div>
                      </div>
                      <div
                        class="flight-destinations d-flex justify-content-between"
                      >
                        <div class="flight-location-code fw-bold">
                          ${segment.departureAirport.code} \u{2022} ${dateFormatter.format(new Date(departureDate))}
                        </div>
                        <div class="flight-duration fw-bold">
                          ${this._calculateFlightHours(segment.totalTime)} \u{2022} ${segment.legs.length - 1 === 0 ? "Direct" : segment.legs.length - 1 + " stops"}
                        </div>
                        <div class="flight-location-code fw-bold">
                        ${segment.arrivalAirport.code} \u{2022} ${dateFormatter.format(new Date(arrivalDate))}
                        </div>
                      </div>
                    </div>
                  </div>
              `;
            }).join("");
            // Flight item markup
            return `
      <div class="flight-item px-2 px-md-4 py-3 border rounded-3 mb-3" data-token=${item.token}>
              ${flightDetails}
              <div class="flight-price text-start text-md-end">
                <p class="m-0 fs-2 fw-bold">\xa3${item.priceBreakdown.total.units}</p>
              </div>
              <div
                class="flight-item-btns d-flex flex-wrap justify-content-between"
              >
                <button
                  class="save-btn px-5 py-2 rounded-3 focus-ring text-white fw-bold"
                >
                  <i class="fa-solid fa-heart"></i> Save
                </button>
                <button
                  class="view-details-btn px-5 py-2 rounded-3 focus-ring text-white fw-bold"
                >
                  View Details
                </button>
              </div>
      </div>
      `;
        }).join("");
        // Insert the markup depending if the request belongs to the initial load or to the Intersection Observer API load
        if (isInitialLoad) this._parentEl.insertAdjacentHTML("afterbegin", markup);
        if (!isInitialLoad) this._parentEl.insertAdjacentHTML("beforeend", markup);
        // Display the intersection observer spinner after the results were added to the container
        this._intersectionObserverSpinner.classList.remove("d-none");
        this._intersectionObserverSpinner.classList.add("d-flex");
        // Render the markup which informs the user that there are no more flights to be loaded when scrolling
        if (data.flightsSearchResults.flightOffers.length === 0) this._renderEndOfResults();
    }
    //   This method will return flight duration displayed as hours and minutes
    _calculateFlightHours(seconds) {
        let flightHoursString = "";
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds % 3600 / 60);
        flightHoursString = `${hours.toFixed(0)}h ${minutes === 0 ? "" : minutes.toFixed(0) + "m"}`;
        return flightHoursString;
    }
    _extractHoursAndMinutes(timeString) {
        const [hours, minutes] = timeString.split(":");
        return `${hours}:${minutes}`;
    }
    // Intersection Observer API method
    _loadMoreFlightsResults(handler) {
        // Create the options for the Intersection Observer API
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        // Loop through the callback entries, increase the page and assign the handler function which will be called in the flightResultsController.js
        const observerCallback = (entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    (0, _flightResultsViewDefault.default)._pageNumber += 1;
                    handler();
                }
            });
        };
        // Initiate the Intersection Observer API
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        // Observe the intersection observer spinner
        observer.observe(this._intersectionObserverSpinner);
    }
    // This method will let the user know when there are no more results to fetch
    _renderEndOfResults() {
        // Hide the intersection observer spinner
        this._intersectionObserverSpinner.classList.add("d-none");
        const markup = `
        <div class="d-block text-center mt-1">
            <p class="mt-2 mb-0 fs-3 fw-bold">End of results</p>
        </div>
    `;
        this._parentEl.insertAdjacentHTML("beforeend", markup);
    }
}
exports.default = new FlightsOffersView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../flightResultsView":"cJKtZ"}],"9Vs0d":[function(require,module,exports,__globalThis) {
// Import flightResultsView to extract the query parameter for the cabin class
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _flightResultsView = require("../flightResultsView");
var _flightResultsViewDefault = parcelHelpers.interopDefault(_flightResultsView);
class DetailsDialogView {
    // DOM Elements
    _detailsDialog = document.querySelector(".details-dialog");
    _resultsList = document.querySelector(".results-list");
    _closeDialogBtn = document.querySelector(".close-dialog-btn");
    _parentEl = document.querySelector(".details-dialog main");
    _errorMessage = "Something went wrong while fetching flight details. Please try again";
    // Create the handler display dialog method for each of the view details buttons
    _addHandlerDisplayDialog(handler) {
        // Use event delegation to check for the closest parent element with the class of the details button
        this._resultsList.addEventListener("click", (e)=>{
            if (e.target.closest(".view-details-btn")) {
                const detailsBtn = e.target;
                // Extract the data token from each parent div of the details button
                const flightItem = detailsBtn.closest(".flight-item");
                const token = flightItem.dataset.token;
                // Use the Pub/Sub pattern to assign the token to the handler function which will be called in the flightResultsController.js
                handler(token);
            }
        });
    }
    // Create the handler hide dialog method which will be passed as a function in the flightResultsController.js
    _addHandlerHideDialog(handler) {
        this._closeDialogBtn.addEventListener("click", ()=>{
            handler();
        });
    }
    // Display dialog method
    _displayDialog() {
        this._detailsDialog.showModal();
        document.body.classList.add("no-scroll");
    }
    // Hide dialog method
    _hideDialog() {
        this._detailsDialog.close();
        document.body.classList.remove("no-scroll");
    }
    // Clear markup method
    _clearMarkup() {
        this._parentEl.innerHTML = "";
    }
    // Render spinner method
    _renderSpinner() {
        const markup = `
          <div
            class="loader-container d-flex flex-column align-items-center justify-content-center mt-4"
          >
            <div class="loader"></div>
            <p class="mt-2">Fetching flight details...</p>
          </div>
    `;
        // Make sure to clear the markup inside the parent element before displaying the spinner
        this._clearMarkup();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    _renderError(message = this._errorMessage) {
        const markup = `
            <div class="text-center fs-4">${message}</div>
    `;
        this._clearMarkup();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    // Render markup data (where all the magic happens)
    _renderMarkup(data) {
        this._clearMarkup();
        // Create the date/time formatter
        const dateFormatter = new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short"
        });
        // Create the variables that will handle the markup
        // Flight
        let flightSummary;
        let flightDetails;
        // Layover
        let layoverMarkup;
        let layover;
        let departureTimeLayover;
        let arrivalTimeLayover;
        // Included Features
        let includedFeatures;
        flightSummary = data.flightDetails.segments.map((segment)=>{
            // Extract the arrival time and departure time to make the calculations for the layover
            // Use e separate loop to avoing the conflict between omitting the first item in the legs array and rendering the markup
            layover = segment.legs.map((_, index, arr)=>{
                // This if statement makes sure the first leg is omitted
                // The layover is calculated by subtracting the first's leg arrival value of the next leg's departure value
                if (index > 0) {
                    departureTimeLayover = arr[index - 1].arrivalTime;
                    arrivalTimeLayover = arr[index].departureTime;
                }
                // Use the calculateLayover method to display the layover hours in a proper format. Check the method in this class for more details
                return this._calculateLayover(departureTimeLayover, arrivalTimeLayover);
            // As we are omitting the first item in the array, when the 'map()' method returns the newly created array, that first item will be 'undefined'
            // We use the 'slice()' method to remove the 'undefined' item
            }).slice(1);
            flightDetails = segment.legs.map((leg, index, arr)=>{
                // Extract the time and hours from each leg into separate variables for a more readable code
                const departureTime = leg.departureTime.split("T")[0];
                const arrivalTime = leg.arrivalTime.split("T")[0];
                const departureHours = leg.departureTime.split("T")[1];
                const arrivalHours = leg.arrivalTime.split("T")[1];
                // Create global variables for the airline name and the airline logo URL
                let airlineName;
                let airlineIcon;
                // Create a global variable for the cabin class
                let cabinClass;
                // Extract the query parameter, format the scring and assign the value to the 'cabinClass' variable;
                const cabinClassQueryParameter = (0, _flightResultsViewDefault.default)._getQueryParameters().flightClass;
                cabinClass = cabinClassQueryParameter.includes("_") ? cabinClassQueryParameter.split("_").join(" ") : cabinClassQueryParameter;
                // Extract the iata code and the airlines from the flight offers search results to extract the airline name and the airline logo URL
                const iataCode = leg.flightInfo.carrierInfo.operatingCarrier;
                const airlines = data.flightsSearchResults.aggregation.airlines;
                // Loop through the airlines array and assign values for the global variables
                for (const airline of airlines)if (airline.iataCode === iataCode) {
                    airlineName = airline.name;
                    airlineIcon = airline.logoUrl;
                }
                // Dynamically create the markup of the layover based on the length of the legs array
                // As the length of the layover array is equal to the length of flight details array - 1, I am rendering the layover using the index value of the flight details array for a proper rendering
                layoverMarkup = `
              <div class="dialog-layover py-5 fs-5 fw-bold">Layover - ${layover[index]}</div>
              `;
                return `
          <div class="flight-details">
            <div class="departure-details">
              <h3 class="fs-5 mb-0">${leg.departureAirport.code} \u{2022} ${leg.departureAirport.name}</h3>
              <p>${dateFormatter.format(new Date(departureTime))} \u{2022} ${this._extractHoursAndMinutes(departureHours)}</p>
            </div>
            <div class="arrival-details">
              <h3 class="fs-5 mb-0">${leg.arrivalAirport.code} \u{2022} ${leg.arrivalAirport.name}</h3>
              <p class="mb-0">${dateFormatter.format(new Date(arrivalTime))} \u{2022} ${this._extractHoursAndMinutes(arrivalHours)}</p>
            </div>
            <div class="airline-details d-flex mt-3">
              <div class="airline-icon">
                <img
                  src="${airlineIcon || "https://r-xx.bstatic.com/data/airlines_logo/AA.png"}"
                  alt="${airlineIcon} Icon"
                  class="w-100 h-100"
                />
              </div>
              <div>
                <p class="airline-name mb-0">${airlineName || "Wizz Air"}</p>
                <p class="flight-duration mb-0">Flight-duration: ${this._calculateFlightHours(leg.totalTime)}</p>
                <p class="flight-class mb-0">${cabinClass}</p>
              </div>
            </div>
          </div>

          
          ${// The layover markup is dynamically displayed, as there can be no layover after the last leg of each segment
                arr.length === 1 || index === arr.length - 1 ? layoverMarkup = "" : layoverMarkup}
        `;
            }).join("");
            return `
          <section class="flight-summary-dialog mb-5">
            <h2 class="fw-bold fs-3 mb-1">Flight to ${segment.arrivalAirport.cityName}</h2>
            <p class="fs-6">${segment.legs.length - 1 === 0 ? "Direct" : segment.legs.length - 1 + " stops"} \u{2022} ${this._calculateFlightHours(segment.totalTime)}</p>
            ${flightDetails}
          </section>
      `;
        }).join("");
        includedFeatures = data.flightDetails.features.map((feature)=>{
            return `
        <li
          class="list-group-item d-flex justify-content-between align-items-start"
        >
          <div class="me-auto">
            <div class="fw-bold">
              ${this._capitalizeString(feature.featureName.split("_").join(" ").toLowerCase())}
            </div>
            <p class="mb-0">${feature.label}</p>
          </div>
          <span class="badge rounded-pill">${feature.availability.includes("_") ? feature.availability.split("_").join(" ") : feature.availability}</span>
        </li>
      `;
        }).join("");
        // Include all the markup created above and insert it in the parent element
        const markup = `
        ${flightSummary}

        <!-- Included Features -->
        <section class="included-features d-flex flex-wrap">
          <header>
            <h2 class="fw-bold fs-3 mb-1">Included Features</h2>
            <p class="fs-6 mb-0">The total features included in the price</p>
          </header>
          <main>
            <ol class="included-features-offers list-group list-group-numbered">
              ${includedFeatures}
            </ol>
          </main>
        </section>

        <!-- Price and Select Button -->
        <section class="price-container d-flex justify-content-between mt-5">
          <div class="dialog-price fs-1 fw-bold">\xa3${data.flightDetails.price}</div>
          <button
            class="dialog-select-btn px-4 fs-5 fw-bold rounded-3 focus-ring text-white"
          >
            Select
          </button>
        </section>
      `;
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    //   This method will return flight duration displayed as hours and minutes
    _calculateFlightHours(seconds) {
        let flightHoursString = "";
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds % 3600 / 60);
        flightHoursString = `${hours.toFixed(0)}h ${minutes === 0 ? "" : minutes.toFixed(0) + "m"}`;
        return flightHoursString;
    }
    // This method extract the hours a minutes for the departure and arrival times from each segments
    _extractHoursAndMinutes(timeString) {
        const [hours, minutes] = timeString.split(":");
        return `${hours}:${minutes}`;
    }
    _calculateLayover(arrival, departure) {
        const arrivalDate = new Date(arrival);
        const departureDate = new Date(departure);
        // Calculate the difference in milliseconds
        const milliseconds = departureDate - arrivalDate;
        // Calculate the difference in minutes
        const diffInMinutes = Math.floor(milliseconds / 60000);
        // Calulcate the number of hours
        const hours = Math.floor(diffInMinutes / 60);
        // Calculate the number of minutes
        const minutes = diffInMinutes % 60;
        // Display the number of hours and minutes in a proper format
        return `${hours === 0 ? "" : hours + "h"} ${minutes === 0 ? "" : minutes + "m"}`;
    }
    // This method takes a string and capitalize the first letter
    _capitalizeString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
exports.default = new DetailsDialogView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../flightResultsView":"cJKtZ"}],"3ZlTR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class FormSubmissionDialogView {
    // DOM Elements
    _formSubmissionDialog = document.querySelector(".form-submission-dialog");
    _detailsDialog = document.querySelector(".details-dialog");
    _closeDialogBtn = document.querySelector(".form-submission-dialog .close-dialog-btn");
    // Create the handler display form submission dialog which will be handle the functionality in flightResultsController.js
    _addHandlerDisplayFormSubmissionDialog(handler) {
        document.body.addEventListener("click", (e)=>{
            if (e.target.classList.contains("dialog-select-btn")) handler();
        });
    }
    // Create the handler hide form submission dialog which will be handle the functionality in flightResultsController.js
    _addHandlerHideFormSubmissionDialog(handler) {
        this._closeDialogBtn.addEventListener("click", ()=>{
            handler();
        });
    }
    // Display form submission dialog
    _displayFormSubmissionDialog() {
        this._formSubmissionDialog.showModal();
        // Make sure we close the details dialog
        this._detailsDialog.close();
    }
    // Hide the form submission dialog
    _hideFormSubmissionDialog() {
        this._formSubmissionDialog.close();
        // Remove the no-scroll property of the document so the window becomes scrollable again
        document.body.classList.remove("no-scroll");
    }
}
exports.default = new FormSubmissionDialogView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aBvyN","eYIic"], "eYIic", "parcelRequire94c2")

//# sourceMappingURL=flights-results.22dc3cc4.js.map
