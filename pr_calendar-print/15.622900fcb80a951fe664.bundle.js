(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{3705:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(76),__webpack_require__(22);var helpers_extends=__webpack_require__(26),extends_default=__webpack_require__.n(helpers_extends),react=(__webpack_require__(12),__webpack_require__(0)),react_default=__webpack_require__.n(react),notifier=__webpack_require__(34),RouteWithSubRoutes=__webpack_require__(998),taggedTemplateLiteral=__webpack_require__(19),taggedTemplateLiteral_default=__webpack_require__.n(taggedTemplateLiteral),styled_components_browser_esm=__webpack_require__(8),src=__webpack_require__(6);function _templateObject(){var data=taggedTemplateLiteral_default()(["\n  && {\n    background-color: ",";\n    padding: ",";\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n  }\n"]);return _templateObject=function(){return data},data}var EntityBrowser_StyledEntityBrowser=styled_components_browser_esm.default.div(_templateObject(),src.Q.color("paper"),src.O.space(0)),_ref2=react_default.a.createElement(notifier.a.Notifier,null),EntityBrowser=function(_ref){var routes=_ref.routes;return react_default.a.createElement(EntityBrowser_StyledEntityBrowser,null,_ref2,routes.map((function(route,i){return react_default.a.createElement(RouteWithSubRoutes.a,extends_default()({key:i},route))})))};EntityBrowser.displayName="EntityBrowser",EntityBrowser.__docgenInfo={description:"",methods:[],displayName:"EntityBrowser",props:{routes:{type:{name:"array"},required:!0,description:""}}};var EntityBrowser_EntityBrowser=EntityBrowser;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/entity-browser/src/routes/entity-browser/components/EntityBrowser/EntityBrowser.js"]={name:"EntityBrowser",docgenInfo:EntityBrowser.__docgenInfo,path:"packages/entity-browser/src/routes/entity-browser/components/EntityBrowser/EntityBrowser.js"});var _ACTION_HANDLERS,components_EntityBrowser=EntityBrowser_EntityBrowser,defineProperty=__webpack_require__(4),defineProperty_default=__webpack_require__.n(defineProperty),reducer=__webpack_require__(20),setFormBase=function(formBase){return{type:"SET_FORM_BASE",payload:{formBase:formBase}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){defineProperty_default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var ACTION_HANDLERS=(_ACTION_HANDLERS={},defineProperty_default()(_ACTION_HANDLERS,"SET_ENTITY_NAME",reducer.a.singleTransferReducer("entityName")),defineProperty_default()(_ACTION_HANDLERS,"SET_FORM_BASE",(function(state,_ref){var formBase=_ref.payload.formBase;return formBase?_objectSpread(_objectSpread({},state),{},{formBase:formBase}):_objectSpread({},state)})),defineProperty_default()(_ACTION_HANDLERS,"root/SET_APP_ID",reducer.a.singleTransferReducer("appId")),_ACTION_HANDLERS),initialState={entityName:"",formBase:"",appId:""};function reducer_reducer(){var state=0<arguments.length&&void 0!==arguments[0]?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0,handler=ACTION_HANDLERS[action.type];return handler?handler(state,action):state}reducer_reducer.__docgenInfo={description:"",methods:[],displayName:"reducer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/entity-browser/src/routes/entity-browser/modules/reducer.js"]={name:"reducer",docgenInfo:reducer_reducer.__docgenInfo,path:"packages/entity-browser/src/routes/entity-browser/modules/reducer.js"});var modules=reducer_reducer,inputDispatches=[{key:"entityName",actionCreator:function(entityName){return{type:"SET_ENTITY_NAME",payload:{entityName:entityName}}},mandatory:!0},{key:"entityName",actionCreator:setFormBase},{key:"formBase",actionCreator:setFormBase},{key:"id",defaultValue:(new Date).valueOf(),actionCreator:function(appId){return{type:"root/SET_APP_ID",payload:{appId:appId}}}}];__webpack_exports__.default={container:components_EntityBrowser,reducers:{entityBrowser:modules},inputDispatches:inputDispatches}}}]);
//# sourceMappingURL=15.622900fcb80a951fe664.bundle.js.map