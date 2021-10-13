(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{4984:function(module,__webpack_exports__,__webpack_require__){"use strict";var defineProperty=__webpack_require__(8),defineProperty_default=__webpack_require__.n(defineProperty),get=(__webpack_require__(11),__webpack_require__(79),__webpack_require__(56),__webpack_require__(22)),get_default=__webpack_require__.n(get),persistedViews={};__webpack_exports__.a={persistViewInfo:function persistViewInfo(location,info){var level=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;persistedViews=Object.assign({},persistedViews,defineProperty_default()({},location,{level:level,info:Object.assign({},get_default()(persistedViews,[location,"info"],{}),info)}))},viewInfoSelector:function viewInfoSelector(location){return get_default()(persistedViews,[location,"info"],{})},clearPersistedViews:function clearPersistedViews(){var level=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;persistedViews=Object.assign({},Object.keys(persistedViews).reduce((function(acc,key){var persistedView=persistedViews[key];return Object.assign({},acc,persistedView.level<level&&defineProperty_default()({},key,persistedView))}),{}))}}},4988:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(36);var query_string=__webpack_require__(4985),query_string_default=__webpack_require__.n(query_string),isObject=__webpack_require__(142),isObject_default=__webpack_require__.n(isObject),mapValues=__webpack_require__(104),mapValues_default=__webpack_require__.n(mapValues),hasJsonStructure=function hasJsonStructure(str){if("string"!=typeof str)return!1;try{var parsed=JSON.parse(str);return"[object Object]"===Object.prototype.toString.call(parsed)}catch(err){return!1}};__webpack_exports__.a={fromQueryString:function fromQueryString(queryString){var obj=query_string_default.a.parse(queryString);return mapValues_default()(obj,(function(value){return hasJsonStructure(value)?JSON.parse(value):value}))},toQueryString:function toQueryString(obj){var stringifiedValues=mapValues_default()(obj,(function(value){return isObject_default()(value)?JSON.stringify(value):value}));return query_string_default.a.stringify(stringifiedValues)}}},4989:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(94),__webpack_require__(36),__webpack_require__(98),__webpack_require__(64),__webpack_require__(68),__webpack_require__(11);var react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),react_redux__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(25),tocco_app_extensions_src_actionEmitter__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__(6),__webpack_require__(76)),tocco_ui__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(2276),tocco_util_src_consoleLogger__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(72),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(0),actions={"input-edit":Object(react__WEBPACK_IMPORTED_MODULE_6__.lazy)((function(){return Promise.all([__webpack_require__.e(3),__webpack_require__.e(8)]).then(__webpack_require__.bind(null,5014))})),delete:Object(react__WEBPACK_IMPORTED_MODULE_6__.lazy)((function(){return Promise.all([__webpack_require__.e(3),__webpack_require__.e(8)]).then(__webpack_require__.bind(null,5015))}))},_ref=Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(tocco_ui__WEBPACK_IMPORTED_MODULE_10__.a,{}),renderLoader=function renderLoader(){return _ref};renderLoader.displayName="renderLoader";var LazyAction=function LazyAction(props){var appId=props.appId,LazyAction=actions[appId];if(!LazyAction)return tocco_util_src_consoleLogger__WEBPACK_IMPORTED_MODULE_11__.a.logError("no action found with id: ".concat(appId)),null;var ActionComponent=Object(react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(null,{emitAction:function emitAction(action){return tocco_app_extensions_src_actionEmitter__WEBPACK_IMPORTED_MODULE_9__.a.dispatchEmittedAction(action)}})(LazyAction);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_6__.Suspense,{fallback:renderLoader(),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ActionComponent,Object.assign({},props))})};LazyAction.displayName="LazyAction",LazyAction.__docgenInfo={description:"",methods:[],displayName:"LazyAction",props:{appId:{type:{name:"string"},required:!0,description:""}}},__webpack_exports__.a=LazyAction,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/entity-browser/src/components/LazyAction/LazyAction.js"]={name:"LazyAction",docgenInfo:LazyAction.__docgenInfo,path:"packages/entity-browser/src/components/LazyAction/LazyAction.js"})},5012:function(module,__webpack_exports__,__webpack_require__){"use strict";var _LazyAction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4989);__webpack_require__.d(__webpack_exports__,"a",(function(){return _LazyAction__WEBPACK_IMPORTED_MODULE_0__.a}))},5175:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4983),lodash_get__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(38),lodash_get__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__),_utilStyles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(78),_utilStyles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(34),_utilStyles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(194);function _templateObject(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  ","\n  text-decoration: none;\n  color: ",";\n\n  * {\n    color: ",";\n    text-decoration: none;\n  }\n\n  &:hover,\n  &:hover *,\n  &:focus,\n  &:focus * {\n    color: ",";\n    text-decoration: ",";\n  }\n\n  &:active,\n  &:active * {\n    color: ",";\n    text-decoration: ",";\n  }\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.a)(_templateObject(),Object(_utilStyles__WEBPACK_IMPORTED_MODULE_4__.a)(),_utilStyles__WEBPACK_IMPORTED_MODULE_5__.a.color("secondary"),_utilStyles__WEBPACK_IMPORTED_MODULE_5__.a.color("text"),_utilStyles__WEBPACK_IMPORTED_MODULE_5__.a.color("secondaryLight"),(function(_ref){return _ref.neutral?"none":"underline"}),(function(_ref2){var neutral=_ref2.neutral,theme=_ref2.theme;return neutral?Object(_utilStyles__WEBPACK_IMPORTED_MODULE_6__.f)(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(theme,"colors.text"),2):Object(_utilStyles__WEBPACK_IMPORTED_MODULE_6__.f)(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(theme,"colors.secondary"),2)}),(function(_ref3){return _ref3.neutral?"none":"underline"}))},5222:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(481),__webpack_require__(75),__webpack_require__(33);var es=__webpack_require__(25),main=__webpack_require__(1381),actionEmitter=__webpack_require__(76),queryString=__webpack_require__(4988),viewPersistor=__webpack_require__(4984),RouterLink=__webpack_require__(5175),LazyAction=(__webpack_require__(1),__webpack_require__(6),__webpack_require__(5012)),jsx_runtime=__webpack_require__(0),ListViewContainer_DetailLinkRelative=function DetailLinkRelative(_ref2){var entityKey=_ref2.entityKey,children=_ref2.children,relation=_ref2.relation;return Object(jsx_runtime.jsx)(RouterLink.a,{to:"".concat(relation?relation+"/":"","detail/").concat(entityKey),children:children})};ListViewContainer_DetailLinkRelative.displayName="DetailLinkRelative";var ListViewContainer=Object(es.connect)((function mapStateToProps(state,props){var id="".concat(state.entityBrowser.appId,"_entity-browser-list"),storeId="".concat(id,"_").concat(props.router.history.location.pathname);return{id:id,locale:state.input.locale,entityName:state.entityBrowser.entityName,formName:state.entityBrowser.formBase,searchFormType:state.input.showSearchForm?"basic":"none",limit:state.input.limit,searchFilters:state.input.searchFilters,preselectedSearchFields:state.input.preselectedSearchFields,disableSimpleSearch:state.input.disableSimpleSearch,simpleSearchFields:state.input.simpleSearchFields,onRowClick:function onRowClick(e){props.router.history.push("/detail/".concat(e.id))},showLink:!0,navigationStrategy:{DetailLinkRelative:ListViewContainer_DetailLinkRelative,navigateToActionRelative:function navigateToActionRelative(definition,selection){return function navigateToAction(history,definition,selection){var search=queryString.a.toQueryString({selection:selection,actionProperties:definition.properties});history.push({pathname:"/action/"+definition.appId,state:{definition:definition,selection:selection},search:search})}(props.router.history,definition,selection)},navigateToCreateRelative:function navigateToCreateRelative(relationName){return function navigateToCreate(_ref){var history=_ref.history,match=_ref.match,relationName=_ref.relationName;relationName?history.push("".concat(match,"/").concat(relationName,"/")):history.push("/detail")}({relationName:relationName,history:props.router.history,match:props.router.match})}},searchFormPosition:"top",actionAppComponent:LazyAction.a,store:viewPersistor.a.viewInfoSelector(storeId).store,onStoreCreate:function onStoreCreate(store){viewPersistor.a.persistViewInfo(storeId,{store:store},0)}}}),(function mapDispatchToProps(dispatch,props){return{emitAction:function emitAction(action){dispatch(actionEmitter.a.dispatchEmittedAction(action))}}}))(main.a);__webpack_exports__.default={container:ListViewContainer,reducers:{},sagas:[],inputDispatches:[]}}}]);