(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{2343:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(27),__webpack_require__(58),__webpack_require__(170);var es=__webpack_require__(37),main=__webpack_require__(584),actionEmitter=__webpack_require__(121),viewPersistor=__webpack_require__(360),src_selection=__webpack_require__(1028),handleNavigateToCreate=function(props){return function(relationName){relationName?props.router.history.push("".concat(props.router.match.url,"/").concat(relationName,"/")):props.router.history.push("/detail")}},handleNavigateToAction=function(props){return function(_ref){var definition=_ref.definition,selection=_ref.selection,search=src_selection.a.selectionToQueryString(selection);props.router.history.push({pathname:"/action/"+definition.appId,state:{definition:definition,selection:selection},search:search})}},ListViewContainer=Object(es.connect)((function(state,props){return{id:"".concat(state.entityBrowser.appId,"_entity-browser-list"),store:viewPersistor.a.viewInfoSelector(state,props.router.history.location.pathname).store,locale:state.input.locale,entityName:state.entityBrowser.entityName,formName:state.entityBrowser.formBase,searchFormType:state.input.showSearchForm?"basic":"none",limit:state.input.limit,searchFilters:state.input.searchFilters,preselectedSearchFields:state.input.preselectedSearchFields,disableSimpleSearch:state.input.disableSimpleSearch,simpleSearchFields:state.input.simpleSearchFields,onRowClick:function onRowClick(e){props.router.history.push("/detail/".concat(e.id))},onNavigateToCreate:handleNavigateToCreate(props),onNavigateToAction:handleNavigateToAction(props),searchFormPosition:"top"}}),(function(dispatch,props){return{emitAction:function emitAction(action){dispatch(actionEmitter.a.dispatchEmittedAction(action))},onStoreCreate:function onStoreCreate(store){dispatch(viewPersistor.a.persistViewInfo(props.router.history.location.pathname,0,{store:store}))}}}))(main.a);__webpack_exports__.default={container:ListViewContainer,reducers:{},sagas:[],inputDispatches:[]}}}]);
//# sourceMappingURL=15.0a25eec6bef1068db25b.bundle.js.map