(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2125:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(28),__webpack_require__(70),__webpack_require__(152);var es=__webpack_require__(39),main=__webpack_require__(606),actionEmitter=__webpack_require__(127),object_hash=__webpack_require__(2157),object_hash_default=__webpack_require__.n(object_hash),mapActionCreators={emitAction:function emitAction(action){return actionEmitter.a.dispatchEmittedAction(action)}},handleNavigateToCreate=function(props){return function(relationName){relationName?props.router.history.push("".concat(props.router.match.url,"/").concat(relationName,"/")):props.router.history.push("/detail")}},ListViewContainer=Object(es.connect)(function(state,props){var hash=object_hash_default()(state.input);return{id:"".concat(state.entityBrowser.appId,"_entity-browser-list-").concat(hash),keepStore:!0,locale:state.input.locale,entityName:state.entityBrowser.entityName,formBase:state.entityBrowser.formBase,showSearchForm:state.input.showSearchForm,limit:state.input.limit,searchFilters:state.input.searchFilters,preselectedSearchFields:state.input.preselectedSearchFields,disableSimpleSearch:state.input.disableSimpleSearch,simpleSearchFields:state.input.simpleSearchFields,onRowClick:function onRowClick(e){props.router.history.push("/detail/".concat(e.id))},onNavigateToCreate:handleNavigateToCreate(props)}},mapActionCreators)(main.a);__webpack_exports__.default={container:ListViewContainer,reducers:{},sagas:[],inputDispatches:[]}}}]);
//# sourceMappingURL=12.d05f4a3751854097b726.bundle.js.map