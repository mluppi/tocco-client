(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2344:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(39),__webpack_require__(92),__webpack_require__(58),__webpack_require__(170),__webpack_require__(248);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),es=__webpack_require__(37),src=(__webpack_require__(9),__webpack_require__(5)),consoleLogger=__webpack_require__(87),selection=__webpack_require__(1028),actions={"input-edit":Object(react.lazy)((function(){return __webpack_require__.e(1).then(__webpack_require__.bind(null,2330))}))},mapStateToProps=function(state,props){return{selection:(location=props.router.location,location.state&&location.state.selection?location.state.selection:selection.a.queryStringToSelection(location.search))};var location},_ref=react_default.a.createElement(src.m,null),renderLoader=function(){return _ref};renderLoader.displayName="renderLoader";var LazyAction_LazyAction=function(props){var appId=props.router.match.params.appId,LazyAction=actions[appId];if(!LazyAction)return consoleLogger.a.logError("no action found with id: ".concat(appId)),null;var ActionComponent=Object(es.connect)(mapStateToProps)(LazyAction);return react_default.a.createElement(react.Suspense,{fallback:renderLoader()},react_default.a.createElement(ActionComponent,props))};LazyAction_LazyAction.displayName="LazyAction";var containers_LazyAction=LazyAction_LazyAction;__webpack_exports__.default={container:containers_LazyAction,reducers:{},sagas:[],inputDispatches:[]}}}]);
//# sourceMappingURL=12.0a25eec6bef1068db25b.bundle.js.map