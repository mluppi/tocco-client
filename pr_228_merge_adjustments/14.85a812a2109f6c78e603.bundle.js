(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{3629:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(17),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__),react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(614),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_linkStyle__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3632);function _templateObject(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  ","\n"]);return _templateObject=function(){return data},data}__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.a)(_templateObject(),_linkStyle__WEBPACK_IMPORTED_MODULE_3__.a)},3631:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledLink.a}));var taggedTemplateLiteral=__webpack_require__(17),taggedTemplateLiteral_default=__webpack_require__.n(taggedTemplateLiteral),react_router_dom=__webpack_require__(614),styled_components_browser_esm=__webpack_require__(7),linkStyle=__webpack_require__(3632);function _templateObject(){var data=taggedTemplateLiteral_default()(["\n  ",";\n"]);return _templateObject=function(){return data},data}Object(styled_components_browser_esm.default)(react_router_dom.b)(_templateObject(),linkStyle.a);var StyledLink=__webpack_require__(3629)},3632:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return linkStyle}));var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(17),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__),tocco_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),lodash_get__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(23),lodash_get__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);function _templateObject(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  ","\n  text-decoration: none;\n  color: ",";\n\n  * {\n    color: ",";\n    text-decoration: none;\n  }\n\n  &:hover,\n  &:hover *,\n  &:focus,\n  &:focus * {\n    color: ",";\n    text-decoration: ",";\n  }\n\n  &:active,\n  &:active * {\n    color: ",";\n    text-decoration: ",";\n  }\n"]);return _templateObject=function(){return data},data}var linkStyle=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject(),Object(tocco_ui__WEBPACK_IMPORTED_MODULE_1__.M)(),tocco_ui__WEBPACK_IMPORTED_MODULE_1__.Q.color("text"),tocco_ui__WEBPACK_IMPORTED_MODULE_1__.Q.color("text"),tocco_ui__WEBPACK_IMPORTED_MODULE_1__.Q.color("secondaryLight"),(function(props){return props.neutral?"none":"underline"}),(function(props){return props.neutral?Object(tocco_ui__WEBPACK_IMPORTED_MODULE_1__.P)(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(props.theme,"colors.text"),2):Object(tocco_ui__WEBPACK_IMPORTED_MODULE_1__.P)(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(props.theme,"colors.primary"),2)}),(function(props){return props.neutral?"none":"underline"}))},3638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(128),__webpack_require__(50);var DOC_PATH_REGEX=/^\/docs\/doc\/(\d+)\/detail$/,PARENT_PATH_REGEX=/^\/docs\/(domain|folder)\/(\d+)\/list$/;__webpack_exports__.a=function(pathname){return function(pathname){var docMatches=DOC_PATH_REGEX.exec(pathname);return docMatches&&2<=docMatches.length?{model:"Resource",key:docMatches[1]}:null}(pathname)||function(pathname){var parentMatches=PARENT_PATH_REGEX.exec(pathname);return parentMatches&&3<=parentMatches.length?{model:parentMatches[1].charAt(0).toUpperCase()+parentMatches[1].slice(1),key:parentMatches[2]}:null}(pathname)}},3639:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Breadcrumbs_Breadcrumbs}));__webpack_require__(21),__webpack_require__(112),__webpack_require__(22),__webpack_require__(67),__webpack_require__(1071),__webpack_require__(128);var helpers_extends=__webpack_require__(27),extends_default=__webpack_require__.n(helpers_extends),toConsumableArray=__webpack_require__(25),toConsumableArray_default=__webpack_require__.n(toConsumableArray),react=__webpack_require__(0),react_default=__webpack_require__.n(react),src=(__webpack_require__(1068),__webpack_require__(6)),Helmet=__webpack_require__(3635),taggedTemplateLiteral=__webpack_require__(17),taggedTemplateLiteral_default=__webpack_require__.n(taggedTemplateLiteral),styled_components_browser_esm=__webpack_require__(7),StyledLink=__webpack_require__(3631);function _templateObject3(){var data=taggedTemplateLiteral_default()(["\n  font-weight: ",";\n  text-decoration: none;\n  color: ",";\n\n  & * {\n    font-weight: ",";\n    text-decoration: none;\n    color: ",";\n    margin-right: .5rem;\n  }\n\n  &:active * {\n    color: ",";\n  }\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=taggedTemplateLiteral_default()(["\n  font-weight: ",";\n  text-decoration: none;\n  color: ",";\n\n  & * {\n    font-weight: ",";\n    text-decoration: none;\n    color: ",";\n    margin-right: .5rem;\n  }\n\n  &:hover,\n  &:hover *  {\n    color: ",";\n  }\n\n  &:focus,\n  &:active,\n  &:focus *,\n  &:active * {\n    color: ",";\n  }\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=taggedTemplateLiteral_default()(["\n  background-color: ",";\n  width: 100%;\n  padding: .8rem 1.7rem;\n\n  span:nth-child(even) {\n    margin-left: .9rem;\n    margin-right: .9rem;\n  }\n"]);return _templateObject=function(){return data},data}var StyledBreadcrumbs=styled_components_browser_esm.default.div(_templateObject(),src.Q.color("backgroundBreadcrumbs")),StyledBreadcrumbsLink=Object(styled_components_browser_esm.default)(StyledLink.a)(_templateObject2(),src.Q.fontWeight("bold"),(function(_ref){return _ref.active&&src.Q.color("primary")}),src.Q.fontWeight("bold"),(function(_ref2){return _ref2.active&&src.Q.color("primary")}),src.Q.color("secondaryLight"),src.Q.color("primary")),StyledBreadcrumbsTitle=styled_components_browser_esm.default.span(_templateObject3(),src.Q.fontWeight("bold"),(function(_ref3){return _ref3.active&&src.Q.color("primary")}),src.Q.fontWeight("bold"),(function(_ref4){return _ref4.active&&src.Q.color("primary")}),src.Q.color("primary")),Breadcrumbs_ref2=react_default.a.createElement(src.j,{icon:"list-ul"}),Breadcrumbs_ref3=react_default.a.createElement(src.j,{icon:"angle-right"}),Breadcrumbs=function(_ref){var pathPrefix=_ref.pathPrefix,breadcrumbsInfo=_ref.breadcrumbsInfo,currentViewTitle=_ref.currentViewTitle,breadcrumbs=[].concat(toConsumableArray_default()(breadcrumbsInfo||[]),toConsumableArray_default()(currentViewTitle?[{display:currentViewTitle}]:[]));return 0===breadcrumbs.length?null:react_default.a.createElement(StyledBreadcrumbs,null,react_default.a.createElement(Helmet.Helmet,{defer:!1},react_default.a.createElement("title",null,function(breadcrumbsInfo){return breadcrumbsInfo.slice(breadcrumbsInfo.length-2).map((function(breadcrumb){return breadcrumb.display})).reverse().join(" - ")}(breadcrumbsInfo))),react_default.a.createElement("div",null,"  ",breadcrumbs.map((function(b,idx){var display=b.display||"",Comp=idx===breadcrumbs.length-1?StyledBreadcrumbsTitle:StyledBreadcrumbsLink;return react_default.a.createElement(src.L.Span,{key:"breadcrumbItem-".concat(idx)},react_default.a.createElement(Comp,extends_default()({neutral:"true"},idx===breadcrumbs.length-1&&{active:"true"},{to:"".concat(pathPrefix,"/").concat(b.path)}),"list"===b.type&&Breadcrumbs_ref2,"  ",display))})).reduce((function(prev,curr,idx){return[prev,react_default.a.createElement(src.L.Span,{key:"icon"+idx}," ",Breadcrumbs_ref3," "),curr]}))))};Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.defaultProps={pathPrefix:""},Breadcrumbs.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{pathPrefix:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},match:{type:{name:"object"},required:!1,description:""},breadcrumbsInfo:{type:{name:"arrayOf",value:{name:"shape",value:{display:{name:"string",required:!1},path:{name:"string",required:!1},type:{name:"string",required:!1}}}},required:!1,description:""},currentViewTitle:{type:{name:"string"},required:!1,description:""}}};var Breadcrumbs_Breadcrumbs=Breadcrumbs;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/admin/src/components/Breadcrumbs/Breadcrumbs.js"]={name:"Breadcrumbs",docgenInfo:Breadcrumbs.__docgenInfo,path:"packages/admin/src/components/Breadcrumbs/Breadcrumbs.js"})},3707:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var redux=__webpack_require__(97),es=__webpack_require__(26),index_es=__webpack_require__(13),root=__webpack_require__(89),actionEmitter=__webpack_require__(120),slicedToArray=(__webpack_require__(50),__webpack_require__(165),__webpack_require__(49)),slicedToArray_default=__webpack_require__.n(slicedToArray),taggedTemplateLiteral=__webpack_require__(17),taggedTemplateLiteral_default=__webpack_require__.n(taggedTemplateLiteral),react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_router=(__webpack_require__(1068),__webpack_require__(113)),styled_components_browser_esm=__webpack_require__(7),src=__webpack_require__(6),regenerator=(__webpack_require__(21),__webpack_require__(128),__webpack_require__(129),__webpack_require__(3)),regenerator_default=__webpack_require__.n(regenerator),main=(__webpack_require__(35),__webpack_require__(616)),viewPersistor=__webpack_require__(3622),redux_saga_effects_npm_proxy_esm=__webpack_require__(1),consoleLogger=(__webpack_require__(32),__webpack_require__(91),__webpack_require__(94)),actions={"create-folder":Object(react.lazy)((function(){return __webpack_require__.e(2).then(__webpack_require__.bind(null,3701))})),delete:Object(react.lazy)((function(){return __webpack_require__.e(2).then(__webpack_require__.bind(null,3702))}))},LazyAction_ref=react_default.a.createElement(src.m,null),renderLoader=function(){return LazyAction_ref};renderLoader.displayName="renderLoader";var LazyAction_LazyAction=function(props){var appId=props.appId,LazyAction=actions[appId];if(!LazyAction)return consoleLogger.a.logError("no action found with id: ".concat(appId)),null;var ActionComponent=Object(es.connect)(null,{emitAction:function emitAction(action){return actionEmitter.a.dispatchEmittedAction(action)}})(LazyAction);return react_default.a.createElement(react.Suspense,{fallback:renderLoader()},react_default.a.createElement(ActionComponent,props))};LazyAction_LazyAction.displayName="LazyAction",LazyAction_LazyAction.__docgenInfo={description:"",methods:[],displayName:"LazyAction",props:{appId:{type:{name:"string"},required:!0,description:""}}};var Action_LazyAction=LazyAction_LazyAction;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/admin/src/routes/docs/components/Action/LazyAction.js"]={name:"LazyAction",docgenInfo:LazyAction_LazyAction.__docgenInfo,path:"packages/admin/src/routes/docs/components/Action/LazyAction.js"});var FileInput=function(_ref){var value,ref,instanceCount=_ref.instanceCount,onChange=_ref.onChange,fileInput=Object(react.useRef)(),prevInstanceCount=(value=instanceCount,ref=Object(react.useRef)(),Object(react.useEffect)((function(){ref.current=value})),ref.current);return Object(react.useEffect)((function(){fileInput.current&&instanceCount>prevInstanceCount&&fileInput.current.click()})),react_default.a.createElement("input",{type:"file",ref:fileInput,style:{display:"none"},onChange:function handleChange(e){var files=e.target.files;files&&0<files.length&&onChange&&onChange(files),e.target.value=null},multiple:!0})};FileInput.displayName="FileInput",FileInput.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{instanceCount:{type:{name:"number"},required:!0,description:""},onChange:{type:{name:"func"},required:!1,description:""}}};var FileInput_FileInput=FileInput;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/admin/src/routes/docs/components/FileInput/FileInput.js"]={name:"FileInput",docgenInfo:FileInput.__docgenInfo,path:"packages/admin/src/routes/docs/components/FileInput/FileInput.js"});var mapActionCreators={onChange:function(files){return{type:"docs/create/FILES_SELECTED",payload:{files:files}}}},FileInputContainer=Object(es.connect)((function(state){return{instanceCount:state.docs.create.dialog.instanceCount}}),mapActionCreators)(FileInput_FileInput),ICONS={Domain:"globe",Folder:"folder",Resource:"file"},_ref2=react_default.a.createElement(FileInputContainer,null),DocsView=function(props){var storeKey=props.storeKey,history=props.history,match=props.match,onSearchChange=props.onSearchChange,emitAction=props.emitAction,openFileDialog=props.openFileDialog,parent=function(match){if(match.params&&match.params.model){var model=match.params.model.charAt(0).toUpperCase()+match.params.model.slice(1),key=match.params.key;return{model:"Docs_list_item",key:"".concat(model,"/").concat(key)}}return null}(match),handleCreateDocument=regenerator_default.a.mark((function(definition,selection,parent,params,config,onSuccess,onError){return regenerator_default.a.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,Object(redux_saga_effects_npm_proxy_esm.e)(openFileDialog(history.location.pathname,onSuccess,onError));case 2:case"end":return _context.stop()}}),handleCreateDocument)}));return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(main.a,{id:"documents",entityName:"Docs_list_item",formName:"Docs_list_item",onRowClick:function handleRowClick(_ref){var newLocation,_id$split=_ref.id.split("/"),_id$split2=slicedToArray_default()(_id$split,2),model=_id$split2[0],key=_id$split2[1];switch(model){case"Domain":newLocation="/docs/domain/".concat(key,"/list");break;case"Folder":newLocation="/docs/folder/".concat(key,"/list");break;case"Resource":newLocation="/docs/doc/".concat(key,"/detail");break;default:throw new Error("Unexpected model: ".concat(model))}history.push(newLocation)},searchFormPosition:"left",searchFormType:"admin",parent:parent,onSearchChange:onSearchChange,store:viewPersistor.a.viewInfoSelector(storeKey).store,onStoreCreate:function onStoreCreate(store){viewPersistor.a.persistViewInfo(storeKey,{store:store})},cellRenderers:{"dms-label-with-icon":function dmsLabelWithIcon(rowData,column,cellRenderer){return react_default.a.createElement("div",null,react_default.a.createElement(src.j,{icon:ICONS[rowData.type],style:{marginRight:"0.5rem",verticalAlign:"middle"}}),react_default.a.createElement("span",{style:{verticalAlign:"middle"}},cellRenderer(column.children[0])))}},emitAction:emitAction,actionAppComponent:Action_LazyAction,contextParams:{history:history},customActions:{"upload-document":handleCreateDocument}}),_ref2)};DocsView.__docgenInfo={description:"",methods:[],displayName:"DocsView",props:{storeKey:{type:{name:"string"},required:!0,description:""},match:{type:{name:"object"},required:!0,description:""},history:{type:{name:"object"},required:!0,description:""},onSearchChange:{type:{name:"func"},required:!0,description:""},emitAction:{type:{name:"func"},required:!0,description:""},openFileDialog:{type:{name:"func"},required:!0,description:""}}};var DocsView_DocsView=DocsView;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/admin/src/routes/docs/components/DocsView/DocsView.js"]={name:"DocsView",docgenInfo:DocsView.__docgenInfo,path:"packages/admin/src/routes/docs/components/DocsView/DocsView.js"});__webpack_require__(162),__webpack_require__(1071);var src_main=__webpack_require__(3633),DocumentView=function(_ref){var match=_ref.match,history=_ref.history,breadcrumbs=_ref.breadcrumbs,emitAction=_ref.emitAction;return react_default.a.createElement(src_main.a,{entityName:"Resource",entityId:match.params.key,formName:"Resource",mode:"update",actionAppComponent:Action_LazyAction,emitAction:emitAction,onEntityDeleted:function handleEntityDeleted(){var lastList=breadcrumbs.slice().reverse().find((function(breadcrumb){return"list"===breadcrumb.type})),lastListUrl="/docs/".concat(lastList.path);history.push(lastListUrl)}})};DocumentView.displayName="DocumentView",DocumentView.__docgenInfo={description:"",methods:[],displayName:"DocumentView",props:{match:{type:{name:"shape",value:{params:{name:"shape",value:{key:{name:"string",required:!0}},required:!0}}},required:!0,description:""},history:{type:{name:"shape",value:{push:{name:"func",required:!0}}},required:!0,description:""},breadcrumbs:{type:{name:"arrayOf",value:{name:"shape",value:{path:{name:"string",required:!0},type:{name:"string",required:!0}}}},required:!0,description:""},emitAction:{type:{name:"func"},required:!0,description:""}}};var DocumentView_DocumentView=DocumentView;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/admin/src/routes/docs/components/DocumentView/DocumentView.js"]={name:"DocumentView",docgenInfo:DocumentView.__docgenInfo,path:"packages/admin/src/routes/docs/components/DocumentView/DocumentView.js"});var DocumentViewContainer_mapActionCreators={emitAction:function emitAction(action){return actionEmitter.a.dispatchEmittedAction(action)}},DocumentViewContainer=Object(root.hot)(Object(es.connect)((function(state){return{breadcrumbs:state.docs.path.breadcrumbs}}),DocumentViewContainer_mapActionCreators)(Object(index_es.injectIntl)(DocumentView_DocumentView))),Breadcrumbs=__webpack_require__(3639),BreadcrumbsContainer=Object(es.connect)((function(state){return{pathPrefix:"/docs",breadcrumbsInfo:state.docs.path.breadcrumbs}}),{})(Object(index_es.injectIntl)(Breadcrumbs.a));function _templateObject3(){var data=taggedTemplateLiteral_default()(["\n  grid-area: breadcrumbs;\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=taggedTemplateLiteral_default()(["\n  grid-area: content;\n  overflow-x: hidden;\n  padding-right: ",";\n  ","\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=taggedTemplateLiteral_default()(["\n  display: grid;\n  grid-template-rows: auto  1fr;\n  grid-template-areas:\n    'breadcrumbs'\n    'content';\n  height: 100%;\n  width: 100%;\n"]);return _templateObject=function(){return data},data}var StyledWrapper=styled_components_browser_esm.default.div(_templateObject()),StyledContent=styled_components_browser_esm.default.div(_templateObject2(),src.O.space(-1),src.I),StyledBreadcrumbs=styled_components_browser_esm.default.div(_templateObject3()),DocsRoute_ref2=react_default.a.createElement(StyledBreadcrumbs,null,react_default.a.createElement(BreadcrumbsContainer,null)),_ref3=react_default.a.createElement(react_router.c,{exact:!0,path:"/docs/doc/:key/detail",component:DocumentViewContainer}),DocsRoute=function(_ref){var history=_ref.history,searchMode=_ref.searchMode,setSearchMode=_ref.setSearchMode,loadBreadcrumbs=_ref.loadBreadcrumbs,emitAction=_ref.emitAction,openFileDialog=_ref.openFileDialog,_useReducer=Object(react.useReducer)((function(x){return x+1}),0),_useReducer2=slicedToArray_default()(_useReducer,2),docsViewNumber=_useReducer2[0],forceDocsViewUpdate=_useReducer2[1];Object(react.useEffect)((function(){!0===searchMode&&"/docs/"===history.location.pathname&&(setSearchMode(!1),forceDocsViewUpdate()),loadBreadcrumbs(history.location.pathname)}));var handleSearchChange=function(e){var hasUserChanges=e.query&&e.query.hasUserChanges;"/docs/search"!==history.location.pathname&&hasUserChanges?history.push("/docs/search"):"/docs/search"!==history.location.pathname||hasUserChanges||history.push("/docs"),setSearchMode(hasUserChanges)},key="docs-view-".concat(docsViewNumber);return react_default.a.createElement(StyledWrapper,null,DocsRoute_ref2,react_default.a.createElement(StyledContent,null,react_default.a.createElement(react_router.e,null,_ref3,react_default.a.createElement(react_router.c,{exact:!0,path:["/docs/:model/:key/list","/docs","/docs/search"],render:function render(_ref4){var match=_ref4.match;return react_default.a.createElement(DocsView_DocsView,{key:key,storeKey:key,history:history,match:match,onSearchChange:handleSearchChange,emitAction:emitAction,openFileDialog:openFileDialog})}}))))};DocsRoute.displayName="DocsRoute",DocsRoute.__docgenInfo={description:"",methods:[],displayName:"DocsRoute",props:{loadBreadcrumbs:{type:{name:"func"},required:!0,description:""},setSearchMode:{type:{name:"func"},required:!0,description:""},emitAction:{type:{name:"func"},required:!0,description:""},openFileDialog:{type:{name:"func"},required:!0,description:""},history:{type:{name:"object"},required:!0,description:""},searchMode:{type:{name:"bool"},required:!0,description:""}}};var DocsRoute_DocsRoute=DocsRoute;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/admin/src/routes/docs/components/DocsRoute/DocsRoute.js"]={name:"DocsRoute",docgenInfo:DocsRoute.__docgenInfo,path:"packages/admin/src/routes/docs/components/DocsRoute/DocsRoute.js"});var setBreadcrumbs=function(breadcrumbs){return{type:"docs/path/SET_BREADCRUMBS",payload:{breadcrumbs:breadcrumbs}}},DocsRouteContainer_mapActionCreators={loadBreadcrumbs:function(location){return{type:"docs/path/LOAD_BREADCRUMBS",payload:{location:location}}},setSearchMode:function(searchMode){return{type:"docs/path/SET_SEARCH_MODE",payload:{searchMode:searchMode}}},emitAction:function emitAction(action){return actionEmitter.a.dispatchEmittedAction(action)},openFileDialog:function(location,onSuccess,onError){return{type:"docs/create/OPEN_DIALOG",payload:{location:location,onSuccess:onSuccess,onError:onError}}}},DocsRouteContainer=Object(root.hot)(Object(es.connect)((function(state){return{searchMode:state.docs.path.searchMode}}),DocsRouteContainer_mapActionCreators)(Object(index_es.injectIntl)(DocsRoute_DocsRoute))),rest=__webpack_require__(24),getNode=__webpack_require__(3638),_marked=regenerator_default.a.mark(getSearchBreadcrumbs),_marked2=regenerator_default.a.mark(sagas_loadBreadcrumbs),_marked3=regenerator_default.a.mark(mainSagas),textResourceSelector=function(state,key){return state.intl.messages[key]||key},docsPathSelector=function(state){return state.docs.path};function getSearchBreadcrumbs(){return regenerator_default.a.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,Object(redux_saga_effects_npm_proxy_esm.f)(textResourceSelector,"client.admin.docs.breadcrumbs.start");case 2:return _context.t0=_context.sent,_context.t1={display:_context.t0,path:"",type:"list"},_context.next=6,Object(redux_saga_effects_npm_proxy_esm.f)(textResourceSelector,"client.admin.breadcrumbs.searchResults");case 6:return _context.t2=_context.sent,_context.t3={display:_context.t2,path:"",type:"list"},_context.abrupt("return",[_context.t1,_context.t3]);case 9:case"end":return _context.stop()}}),_marked)}function sagas_loadBreadcrumbs(_ref){var location,node,breadcrumbs,url,result;return regenerator_default.a.wrap((function(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return location=_ref.payload.location,node=Object(getNode.a)(location),_context2.next=4,Object(redux_saga_effects_npm_proxy_esm.f)(docsPathSelector);case 4:if(!_context2.sent.searchMode||node&&"Resource"===node.model){_context2.next=11;break}return _context2.next=8,Object(redux_saga_effects_npm_proxy_esm.b)(getSearchBreadcrumbs);case 8:breadcrumbs=_context2.sent,_context2.next=16;break;case 11:return url=node?"documents/".concat(node.model,"/").concat(node.key,"/breadcrumbs"):"documents/breadcrumbs",_context2.next=14,Object(redux_saga_effects_npm_proxy_esm.b)(rest.a.requestSaga,url);case 14:result=_context2.sent,breadcrumbs=result.body.breadcrumbs;case 16:return _context2.next=18,Object(redux_saga_effects_npm_proxy_esm.e)(setBreadcrumbs(breadcrumbs));case 18:case"end":return _context2.stop()}}),_marked2)}function mainSagas(){return regenerator_default.a.wrap((function(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,Object(redux_saga_effects_npm_proxy_esm.a)([Object(redux_saga_effects_npm_proxy_esm.j)("docs/path/LOAD_BREADCRUMBS",sagas_loadBreadcrumbs)]);case 2:case"end":return _context3.stop()}}),_marked3)}var _ACTION_HANDLERS,defineProperty=__webpack_require__(4),defineProperty_default=__webpack_require__.n(defineProperty),reducer=__webpack_require__(19),ACTION_HANDLERS=(_ACTION_HANDLERS={},defineProperty_default()(_ACTION_HANDLERS,"docs/path/SET_BREADCRUMBS",reducer.a.singleTransferReducer("breadcrumbs")),defineProperty_default()(_ACTION_HANDLERS,"docs/path/SET_SEARCH_MODE",reducer.a.singleTransferReducer("searchMode")),_ACTION_HANDLERS),initialState={breadcrumbs:[],searchMode:!1};function reducer_reducer(){var state=0<arguments.length&&void 0!==arguments[0]?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0,handler=ACTION_HANDLERS[action.type];return handler?handler(state,action):state}reducer_reducer.__docgenInfo={description:"",methods:[],displayName:"reducer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/admin/src/routes/docs/modules/path/reducer.js"]={name:"reducer",docgenInfo:reducer_reducer.__docgenInfo,path:"packages/admin/src/routes/docs/modules/path/reducer.js"});var path_marked=regenerator_default.a.mark(sagas);function sagas(){return regenerator_default.a.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,Object(redux_saga_effects_npm_proxy_esm.a)([Object(redux_saga_effects_npm_proxy_esm.d)(mainSagas)]);case 2:case"end":return _context.stop()}}),path_marked)}var path=reducer_reducer,notifier=(__webpack_require__(80),__webpack_require__(22),__webpack_require__(34)),v4=__webpack_require__(3619);function _createForOfIteratorHelper(o,allowArrayLike){var it;if("undefined"==typeof Symbol||null==o[Symbol.iterator]){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=o[Symbol.iterator]()},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var sagas_marked=regenerator_default.a.mark(handleFilesSelected),sagas_marked2=regenerator_default.a.mark(createDocuments),sagas_marked3=regenerator_default.a.mark(sagas_mainSagas),dialogSelector=function(state){return state.docs.create.dialog},sagas_textResourceSelector=function(state,key){return state.intl.messages[key]};function handleFilesSelected(_ref){var files,blockingInfoId,_yield$select,location,onSuccess,onError,response,remoteEvents;return regenerator_default.a.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:return files=_ref.payload.files,_context.next=3,Object(redux_saga_effects_npm_proxy_esm.b)(v4.a);case 3:return blockingInfoId=_context.sent,_context.next=6,Object(redux_saga_effects_npm_proxy_esm.e)(notifier.a.blockingInfo(blockingInfoId,1<files.length?"client.admin.docs.uploadInProgressMultiple":"client.admin.docs.uploadInProgress",null));case 6:return _context.next=8,Object(redux_saga_effects_npm_proxy_esm.f)(dialogSelector);case 8:return _yield$select=_context.sent,location=_yield$select.location,onSuccess=_yield$select.onSuccess,onError=_yield$select.onError,_context.prev=12,_context.next=15,Object(redux_saga_effects_npm_proxy_esm.b)(createDocuments,location,files);case 15:return response=_context.sent,remoteEvents=[{type:"entity-create-event",payload:{entities:response.body.items.filter((function(item){return 201===item.status})).map((function(item){return{entityName:item.bean.model,key:item.bean.key}}))}}],_context.next=19,Object(redux_saga_effects_npm_proxy_esm.e)(notifier.a.removeBlockingInfo(blockingInfoId));case 19:return _context.t0=onSuccess,_context.next=22,Object(redux_saga_effects_npm_proxy_esm.f)(sagas_textResourceSelector,"client.admin.docs.uploadSuccessful");case 22:_context.t1=_context.sent,_context.t2=remoteEvents,_context.t3={message:_context.t1,remoteEvents:_context.t2},(0,_context.t0)(_context.t3),_context.next=39;break;case 28:return _context.prev=28,_context.t4=_context.catch(12),consoleLogger.a.logError("Failed to upload files",_context.t4),_context.next=33,Object(redux_saga_effects_npm_proxy_esm.e)(notifier.a.removeBlockingInfo(blockingInfoId));case 33:return _context.t5=onError,_context.next=36,Object(redux_saga_effects_npm_proxy_esm.f)(sagas_textResourceSelector,"client.admin.docs.uploadFailed");case 36:_context.t6=_context.sent,_context.t7={message:_context.t6},(0,_context.t5)(_context.t7);case 39:case"end":return _context.stop()}}),sagas_marked,null,[[12,28]])}function createDocuments(location,files){var node,formData,_iterator,_step,file,resource,options;return regenerator_default.a.wrap((function(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(node=Object(getNode.a)(location)){_context2.next=3;break}return _context2.abrupt("return");case 3:formData=new FormData,_iterator=_createForOfIteratorHelper(files);try{for(_iterator.s();!(_step=_iterator.n()).done;)file=_step.value,formData.append("files",file)}catch(err){_iterator.e(err)}finally{_iterator.f()}return resource="documents/".concat(node.model,"/").concat(node.key),options={method:"POST",body:formData},_context2.next=10,Object(redux_saga_effects_npm_proxy_esm.b)(rest.a.requestSaga,resource,options);case 10:return _context2.abrupt("return",_context2.sent);case 11:case"end":return _context2.stop()}}),sagas_marked2)}function sagas_mainSagas(){return regenerator_default.a.wrap((function(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,Object(redux_saga_effects_npm_proxy_esm.a)([Object(redux_saga_effects_npm_proxy_esm.i)("docs/create/FILES_SELECTED",handleFilesSelected)]);case 2:case"end":return _context3.stop()}}),sagas_marked3)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){defineProperty_default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var reducer_ACTION_HANDLERS=defineProperty_default()({},"docs/create/OPEN_DIALOG",(function(state,_ref){var _ref$payload=_ref.payload,location=_ref$payload.location,onSuccess=_ref$payload.onSuccess,onError=_ref$payload.onError;return _objectSpread(_objectSpread({},state),{},{dialog:{instanceCount:state.dialog.instanceCount+1,location:location,onSuccess:onSuccess,onError:onError}})})),reducer_initialState={dialog:{instanceCount:0,location:null,onSuccess:null,onError:null}};function create_reducer_reducer(){var state=0<arguments.length&&void 0!==arguments[0]?arguments[0]:reducer_initialState,action=1<arguments.length?arguments[1]:void 0,handler=reducer_ACTION_HANDLERS[action.type];return handler?handler(state,action):state}create_reducer_reducer.__docgenInfo={description:"",methods:[],displayName:"reducer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/admin/src/routes/docs/modules/create/reducer.js"]={name:"reducer",docgenInfo:create_reducer_reducer.__docgenInfo,path:"packages/admin/src/routes/docs/modules/create/reducer.js"});var create_marked=regenerator_default.a.mark(create_sagas);function create_sagas(){return regenerator_default.a.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,Object(redux_saga_effects_npm_proxy_esm.a)([Object(redux_saga_effects_npm_proxy_esm.d)(sagas_mainSagas)]);case 2:case"end":return _context.stop()}}),create_marked)}var create=create_reducer_reducer;__webpack_exports__.default={container:DocsRouteContainer,reducers:{docs:Object(redux.combineReducers)({path:path,create:create})},sagas:[sagas,create_sagas]}}}]);
//# sourceMappingURL=14.85a812a2109f6c78e603.bundle.js.map