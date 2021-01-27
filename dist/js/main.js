/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

var app = new Vue({
  el: '#app',
  data: {
    googleLogo: 'dist/img/google-logo.svg',
    slackLogo: 'dist/img/slack-logo.svg',
    // HEADER DATA
    /////////////////
    header: {
      logo: 'dist/img/logo.svg',
      links: ['solutions', 'pricing', 'blog', 'signe in'],
      googleLink: 'Sign up'
    },
    // JUMBOTRON DATA
    /////////////////
    jumbotron: {
      title: 'Understand, recognize and develop your people',
      text: 'Teambit helps teams create a high performing culture with regular feedback.',
      links: ['sign up with google', 'sign up with slack', 'or use your email address'],
      img: 'dist/img/illustration-main.jpg'
    },
    // FIRST SECTION DATA
    /////////////////
    orangeSection: [{
      title: 'Traditional people processes lead to diseingagement and turnover.',
      cards: [{
        img: 'dist/img/hardcore.png',
        text: 'They are hardcore, formal and disconnected'
      }, {
        img: 'dist/img/nofeedback.png',
        text: 'They don\'t encourage regular feedbacks'
      }, {
        img: 'dist/img/notsafe.png',
        text: 'They dont\'t make it safe speak up'
      }],
      img: 'dist/img/before.png'
    }, {
      title: 'It doesn\'t to be like that. Teambit is a modern solution that teammates love.',
      cards: [{
        img: 'dist/img/lightweight.png',
        text: 'it is lightweight fun and interconnected'
      }, {
        img: 'dist/img/feedbacksuggestions.png',
        text: 'It encourage regular feedbacks with contextual requests'
      }, {
        img: 'dist/img/safe.png',
        text: 'It care safe envirnoment for dialog'
      }],
      img: 'dist/img/after.png',
      text: 'Here is how it works'
    }],
    whiteSection: [{
      title: 'Feedback to help teammates improve',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam praesentium temporibus hic corporis totam nesciunt a, veniam quas, distinctio saepe nobis odit quis laboriosam provident voluptate reprehenderit illum consectetur?',
      linkText: 'Learn more',
      img: ['dist/img/communication.jpg', 'dist/img/employee-feedback.jpg']
    }, {
      title: 'Surveys to help the team be better',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam praesentium temporibus hic corporis totam nesciunt a, veniam quas, distinctio saepe nobis odit quis laboriosam provident voluptate reprehenderit illum consectetur?',
      linkText: 'Learn more',
      img: ['dist/img/insights.jpg', 'dist/img/employee-survey.jpg']
    }, {
      title: 'Reviews to help teammates get a fair envaluation',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam praesentium temporibus hic corporis totam nesciunt a, veniam quas, distinctio saepe nobis odit quis laboriosam provident voluptate reprehenderit illum consectetur?',
      linkText: 'Learn more',
      img: ['dist/img/review.jpg', 'dist/img/performance-review.jpg']
    }, {
      title: 'Prise to help teammates feel valued',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam praesentium temporibus hic corporis totam nesciunt a, veniam quas, distinctio saepe nobis odit quis laboriosam provident voluptate reprehenderit illum consectetur?',
      linkText: 'Learn more',
      img: ['dist/img/recognition.jpg', 'dist/img/employee-recognition.jpg']
    }],
    feedbackSection: {
      title: 'See Teambit for yourself. Get started in seconds',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: '',
      links: ['sign up with google', 'sign up with slack', 'or use your email address']
    },
    footer: {
      left: {
        logo: 'dist/img/logo-small.svg',
        linkText: 'Teambit',
        text: 'helps team create high performing cultures by making feedback a daily habit.'
      },
      right: [{
        title: 'product',
        links: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem']
      }, {
        title: 'about',
        links: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem']
      }, {
        title: 'connect',
        links: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem']
      }, {
        title: 'lobs',
        links: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem']
      }, {
        title: 'from the blog',
        links: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem']
      }]
    }
  }
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/main.js"],
/******/ 			["./src/style.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknode_sass_teambit"] = self["webpackChunknode_sass_teambit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;