(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2653:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _ListViewContainer2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(2692));exports.default={container:_ListViewContainer2.default,reducers:{},sagas:[],inputDispatches:[]}},2692:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__(25),_main2=_interopRequireDefault(__webpack_require__(1194)),_actionEmitter2=_interopRequireDefault(__webpack_require__(142)),_objectHash2=_interopRequireDefault(__webpack_require__(2693));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var mapActionCreators={emitAction:function emitAction(action){return _actionEmitter2.default.dispatchEmittedAction(action)}};exports.default=(0,_reactRedux.connect)(function mapStateToProps(state,props){var hash=(0,_objectHash2.default)(state.input);return{id:state.entityBrowser.appId+"_entity-browser-list-"+hash,keepStore:!0,locale:state.input.locale,entityName:state.entityBrowser.entityName,formBase:state.entityBrowser.formBase,showSearchForm:state.input.showSearchForm,limit:state.input.limit,searchFilters:state.input.searchFilters,preselectedSearchFields:state.input.preselectedSearchFields,disableSimpleSearch:state.input.disableSimpleSearch,simpleSearchFields:state.input.simpleSearchFields,showCreateButton:state.input.showCreateButton,onRowClick:function onRowClick(e){props.router.history.push("/detail/"+e.id)},onNavigateToCreate:function onNavigateToCreate(e){props.router.history.push("/detail/")}}},mapActionCreators)(_main2.default)}}]);
//# sourceMappingURL=12.c8b90d5fdaa92fd3089a.bundle.js.map