(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2808:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_ListViewContainer=__webpack_require__(2878),_ListViewContainer2=(obj=_ListViewContainer)&&obj.__esModule?obj:{default:obj};exports.default={container:_ListViewContainer2.default,reducers:{},sagas:[],inputDispatches:[]}},2878:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__(25),_main2=_interopRequireDefault(__webpack_require__(1227)),_actionEmitter2=_interopRequireDefault(__webpack_require__(130));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var mapActionCreators={emitAction:function(action){return _actionEmitter2.default.dispatchEmittedAction(action)}};exports.default=(0,_reactRedux.connect)(function(state,props){return{id:state.entityBrowser.appId+"_entity-browser-list",keepStore:!0,entityName:state.entityBrowser.entityName,formBase:state.entityBrowser.formBase,showSearchForm:state.input.showSearchForm,limit:state.input.limit,searchFilters:state.input.searchFilters,preselectedSearchFields:state.input.preselectedSearchFields,disableSimpleSearch:state.input.disableSimpleSearch,simpleSearchFields:state.input.simpleSearchFields,showCreateButton:state.input.showCreateButton,onRowClick:function(e){props.router.history.push("/detail/"+e.id)},onNavigateToCreate:function(e){props.router.history.push("/detail/")}}},mapActionCreators)(_main2.default)}}]);
//# sourceMappingURL=12.e184d29d5174af9685b9.bundle.js.map