(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{4901:function(module,exports,__webpack_require__){"use strict";const strictUriEncode=__webpack_require__(4905),decodeComponent=__webpack_require__(4906),splitOnFirst=__webpack_require__(4907);function validateArrayFormatSeparator(value){if("string"!=typeof value||1!==value.length)throw new TypeError("arrayFormatSeparator must be single character string")}function encode(value,options){return options.encode?options.strict?strictUriEncode(value):encodeURIComponent(value):value}function decode(value,options){return options.decode?decodeComponent(value):value}function removeHash(input){const hashStart=input.indexOf("#");return-1!==hashStart&&(input=input.slice(0,hashStart)),input}function extract(input){const queryStart=(input=removeHash(input)).indexOf("?");return-1===queryStart?"":input.slice(queryStart+1)}function parseValue(value,options){return options.parseNumbers&&!Number.isNaN(Number(value))&&"string"==typeof value&&""!==value.trim()?value=Number(value):!options.parseBooleans||null===value||"true"!==value.toLowerCase()&&"false"!==value.toLowerCase()||(value="true"===value.toLowerCase()),value}function parse(query,options){validateArrayFormatSeparator((options=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},options)).arrayFormatSeparator);const formatter=function parserForArrayFormat(options){let result;switch(options.arrayFormat){case"index":return(key,value,accumulator)=>{result=/\[(\d*)\]$/.exec(key),key=key.replace(/\[\d*\]$/,""),result?(void 0===accumulator[key]&&(accumulator[key]={}),accumulator[key][result[1]]=value):accumulator[key]=value};case"bracket":return(key,value,accumulator)=>{result=/(\[\])$/.exec(key),key=key.replace(/\[\]$/,""),result?void 0!==accumulator[key]?accumulator[key]=[].concat(accumulator[key],value):accumulator[key]=[value]:accumulator[key]=value};case"comma":case"separator":return(key,value,accumulator)=>{const isArray="string"==typeof value&&value.includes(options.arrayFormatSeparator),isEncodedArray="string"==typeof value&&!isArray&&decode(value,options).includes(options.arrayFormatSeparator);value=isEncodedArray?decode(value,options):value;const newValue=isArray||isEncodedArray?value.split(options.arrayFormatSeparator).map(item=>decode(item,options)):null===value?value:decode(value,options);accumulator[key]=newValue};default:return(key,value,accumulator)=>{void 0!==accumulator[key]?accumulator[key]=[].concat(accumulator[key],value):accumulator[key]=value}}}(options),ret=Object.create(null);if("string"!=typeof query)return ret;if(!(query=query.trim().replace(/^[?#&]/,"")))return ret;for(const param of query.split("&")){let[key,value]=splitOnFirst(options.decode?param.replace(/\+/g," "):param,"=");value=void 0===value?null:["comma","separator"].includes(options.arrayFormat)?value:decode(value,options),formatter(decode(key,options),value,ret)}for(const key of Object.keys(ret)){const value=ret[key];if("object"==typeof value&&null!==value)for(const k of Object.keys(value))value[k]=parseValue(value[k],options);else ret[key]=parseValue(value,options)}return!1===options.sort?ret:(!0===options.sort?Object.keys(ret).sort():Object.keys(ret).sort(options.sort)).reduce((result,key)=>{const value=ret[key];return Boolean(value)&&"object"==typeof value&&!Array.isArray(value)?result[key]=function keysSorter(input){return Array.isArray(input)?input.sort():"object"==typeof input?keysSorter(Object.keys(input)).sort((a,b)=>Number(a)-Number(b)).map(key=>input[key]):input}(value):result[key]=value,result},Object.create(null))}exports.extract=extract,exports.parse=parse,exports.stringify=(object,options)=>{if(!object)return"";validateArrayFormatSeparator((options=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},options)).arrayFormatSeparator);const shouldFilter=key=>options.skipNull&&null==object[key]||options.skipEmptyString&&""===object[key],formatter=function encoderForArrayFormat(options){switch(options.arrayFormat){case"index":return key=>(result,value)=>{const index=result.length;return void 0===value||options.skipNull&&null===value||options.skipEmptyString&&""===value?result:null===value?[...result,[encode(key,options),"[",index,"]"].join("")]:[...result,[encode(key,options),"[",encode(index,options),"]=",encode(value,options)].join("")]};case"bracket":return key=>(result,value)=>void 0===value||options.skipNull&&null===value||options.skipEmptyString&&""===value?result:null===value?[...result,[encode(key,options),"[]"].join("")]:[...result,[encode(key,options),"[]=",encode(value,options)].join("")];case"comma":case"separator":return key=>(result,value)=>null==value||0===value.length?result:0===result.length?[[encode(key,options),"=",encode(value,options)].join("")]:[[result,encode(value,options)].join(options.arrayFormatSeparator)];default:return key=>(result,value)=>void 0===value||options.skipNull&&null===value||options.skipEmptyString&&""===value?result:null===value?[...result,encode(key,options)]:[...result,[encode(key,options),"=",encode(value,options)].join("")]}}(options),objectCopy={};for(const key of Object.keys(object))shouldFilter(key)||(objectCopy[key]=object[key]);const keys=Object.keys(objectCopy);return!1!==options.sort&&keys.sort(options.sort),keys.map(key=>{const value=object[key];return void 0===value?"":null===value?encode(key,options):Array.isArray(value)?value.reduce(formatter(key),[]).join("&"):encode(key,options)+"="+encode(value,options)}).filter(x=>x.length>0).join("&")},exports.parseUrl=(url,options)=>{options=Object.assign({decode:!0},options);const[url_,hash]=splitOnFirst(url,"#");return Object.assign({url:url_.split("?")[0]||"",query:parse(extract(url),options)},options&&options.parseFragmentIdentifier&&hash?{fragmentIdentifier:decode(hash,options)}:{})},exports.stringifyUrl=(object,options)=>{options=Object.assign({encode:!0,strict:!0},options);const url=removeHash(object.url).split("?")[0]||"",queryFromUrl=exports.extract(object.url),parsedQueryFromUrl=exports.parse(queryFromUrl,{sort:!1}),query=Object.assign(parsedQueryFromUrl,object.query);let queryString=exports.stringify(query,options);queryString&&(queryString="?"+queryString);let hash=function getHash(url){let hash="";const hashStart=url.indexOf("#");return-1!==hashStart&&(hash=url.slice(hashStart)),hash}(object.url);return object.fragmentIdentifier&&(hash="#"+encode(object.fragmentIdentifier,options)),`${url}${queryString}${hash}`}},4902:function(module,__webpack_exports__,__webpack_require__){"use strict";var defineProperty=__webpack_require__(10),defineProperty_default=__webpack_require__.n(defineProperty),get=(__webpack_require__(16),__webpack_require__(78),__webpack_require__(54),__webpack_require__(23)),get_default=__webpack_require__.n(get),persistedViews={};__webpack_exports__.a={persistViewInfo:function persistViewInfo(location,info){var level=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;persistedViews=Object.assign({},persistedViews,defineProperty_default()({},location,{level:level,info:Object.assign({},get_default()(persistedViews,[location,"info"],{}),info)}))},viewInfoSelector:function viewInfoSelector(location){return get_default()(persistedViews,[location,"info"],{})},clearPersistedViews:function clearPersistedViews(){var level=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;persistedViews=Object.assign({},Object.keys(persistedViews).reduce((function(acc,key){var persistedView=persistedViews[key];return Object.assign({},acc,persistedView.level<level&&defineProperty_default()({},key,persistedView))}),{}))}}},4904:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(29);var query_string=__webpack_require__(4901),query_string_default=__webpack_require__.n(query_string),isObject=__webpack_require__(145),isObject_default=__webpack_require__.n(isObject),mapValues=__webpack_require__(99),mapValues_default=__webpack_require__.n(mapValues),hasJsonStructure=function hasJsonStructure(str){if("string"!=typeof str)return!1;try{var parsed=JSON.parse(str);return"[object Object]"===Object.prototype.toString.call(parsed)}catch(err){return!1}};__webpack_exports__.a={fromQueryString:function fromQueryString(queryString){var obj=query_string_default.a.parse(queryString);return mapValues_default()(obj,(function(value){return hasJsonStructure(value)?JSON.parse(value):value}))},toQueryString:function toQueryString(obj){var stringifiedValues=mapValues_default()(obj,(function(value){return isObject_default()(value)?JSON.stringify(value):value}));return query_string_default.a.stringify(stringifiedValues)}}},4905:function(module,exports,__webpack_require__){"use strict";module.exports=str=>encodeURIComponent(str).replace(/[!'()*]/g,x=>"%"+x.charCodeAt(0).toString(16).toUpperCase())},4906:function(module,exports,__webpack_require__){"use strict";var singleMatcher=new RegExp("%[a-f0-9]{2}","gi"),multiMatcher=new RegExp("(%[a-f0-9]{2})+","gi");function decodeComponents(components,split){try{return decodeURIComponent(components.join(""))}catch(err){}if(1===components.length)return components;split=split||1;var left=components.slice(0,split),right=components.slice(split);return Array.prototype.concat.call([],decodeComponents(left),decodeComponents(right))}function decode(input){try{return decodeURIComponent(input)}catch(err){for(var tokens=input.match(singleMatcher),i=1;i<tokens.length;i++)tokens=(input=decodeComponents(tokens,i).join("")).match(singleMatcher);return input}}module.exports=function(encodedURI){if("string"!=typeof encodedURI)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof encodedURI+"`");try{return encodedURI=encodedURI.replace(/\+/g," "),decodeURIComponent(encodedURI)}catch(err){return function customDecodeURIComponent(input){for(var replaceMap={"%FE%FF":"��","%FF%FE":"��"},match=multiMatcher.exec(input);match;){try{replaceMap[match[0]]=decodeURIComponent(match[0])}catch(err){var result=decode(match[0]);result!==match[0]&&(replaceMap[match[0]]=result)}match=multiMatcher.exec(input)}replaceMap["%C2"]="�";for(var entries=Object.keys(replaceMap),i=0;i<entries.length;i++){var key=entries[i];input=input.replace(new RegExp(key,"g"),replaceMap[key])}return input}(encodedURI)}}},4907:function(module,exports,__webpack_require__){"use strict";module.exports=(string,separator)=>{if("string"!=typeof string||"string"!=typeof separator)throw new TypeError("Expected the arguments to be of type `string`");if(""===separator)return[string];const separatorIndex=string.indexOf(separator);return-1===separatorIndex?[string]:[string.slice(0,separatorIndex),string.slice(separatorIndex+separator.length)]}},4908:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(83),__webpack_require__(29),__webpack_require__(101),__webpack_require__(64),__webpack_require__(67),__webpack_require__(16);var react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react_redux__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(24),tocco_app_extensions_src_actionEmitter__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__(9),__webpack_require__(117)),tocco_ui__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(6),tocco_util_src_consoleLogger__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(80),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1),actions={"input-edit":Object(react__WEBPACK_IMPORTED_MODULE_6__.lazy)((function(){return Promise.all([__webpack_require__.e(1),__webpack_require__.e(6)]).then(__webpack_require__.bind(null,4923))})),delete:Object(react__WEBPACK_IMPORTED_MODULE_6__.lazy)((function(){return Promise.all([__webpack_require__.e(1),__webpack_require__.e(6)]).then(__webpack_require__.bind(null,4924))}))},_ref=Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(tocco_ui__WEBPACK_IMPORTED_MODULE_10__.o,{}),renderLoader=function renderLoader(){return _ref};renderLoader.displayName="renderLoader";var LazyAction=function LazyAction(props){var appId=props.appId,LazyAction=actions[appId];if(!LazyAction)return tocco_util_src_consoleLogger__WEBPACK_IMPORTED_MODULE_11__.a.logError("no action found with id: ".concat(appId)),null;var ActionComponent=Object(react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(null,{emitAction:function emitAction(action){return tocco_app_extensions_src_actionEmitter__WEBPACK_IMPORTED_MODULE_9__.a.dispatchEmittedAction(action)}})(LazyAction);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_6__.Suspense,{fallback:renderLoader(),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ActionComponent,Object.assign({},props))})};LazyAction.displayName="LazyAction",LazyAction.__docgenInfo={description:"",methods:[],displayName:"LazyAction",props:{appId:{type:{name:"string"},required:!0,description:""}}},__webpack_exports__.a=LazyAction,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/entity-browser/src/components/LazyAction/LazyAction.js"]={name:"LazyAction",docgenInfo:LazyAction.__docgenInfo,path:"packages/entity-browser/src/components/LazyAction/LazyAction.js"})},4921:function(module,__webpack_exports__,__webpack_require__){"use strict";var _LazyAction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4908);__webpack_require__.d(__webpack_exports__,"a",(function(){return _LazyAction__WEBPACK_IMPORTED_MODULE_0__.a}))},5092:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(465),__webpack_require__(73),__webpack_require__(27);var es=__webpack_require__(24),main=__webpack_require__(1353),actionEmitter=__webpack_require__(117),queryString=__webpack_require__(4904),viewPersistor=__webpack_require__(4902),src=__webpack_require__(6),LazyAction=(__webpack_require__(0),__webpack_require__(9),__webpack_require__(4921)),jsx_runtime=__webpack_require__(1),ListViewContainer_DetailLinkRelative=function DetailLinkRelative(_ref2){var entityKey=_ref2.entityKey,children=_ref2.children,relation=_ref2.relation;return Object(jsx_runtime.jsx)(src.y,{to:"".concat(relation?relation+"/":"","detail/").concat(entityKey),children:children})};ListViewContainer_DetailLinkRelative.displayName="DetailLinkRelative";var ListViewContainer=Object(es.connect)((function mapStateToProps(state,props){return{id:"".concat(state.entityBrowser.appId,"_entity-browser-list"),locale:state.input.locale,entityName:state.entityBrowser.entityName,formName:state.entityBrowser.formBase,searchFormType:state.input.showSearchForm?"basic":"none",limit:state.input.limit,searchFilters:state.input.searchFilters,preselectedSearchFields:state.input.preselectedSearchFields,disableSimpleSearch:state.input.disableSimpleSearch,simpleSearchFields:state.input.simpleSearchFields,onRowClick:function onRowClick(e){props.router.history.push("/detail/".concat(e.id))},showLink:!0,navigationStrategy:{DetailLinkRelative:ListViewContainer_DetailLinkRelative,navigateToActionRelative:function navigateToActionRelative(definition,selection){return function navigateToAction(history,definition,selection){var search=queryString.a.toQueryString({selection:selection,actionProperties:definition.properties});history.push({pathname:"/action/"+definition.appId,state:{definition:definition,selection:selection},search:search})}(props.router.history,definition,selection)},navigateToCreateRelative:function navigateToCreateRelative(relationName){return function navigateToCreate(_ref){var history=_ref.history,match=_ref.match,relationName=_ref.relationName;relationName?history.push("".concat(match,"/").concat(relationName,"/")):history.push("/detail")}({relationName:relationName,history:props.router.history,match:props.router.match})}},searchFormPosition:"top",actionAppComponent:LazyAction.a,store:viewPersistor.a.viewInfoSelector(props.router.history.location.pathname).store,onStoreCreate:function onStoreCreate(store){viewPersistor.a.persistViewInfo(props.router.history.location.pathname,{store:store},0)}}}),(function mapDispatchToProps(dispatch,props){return{emitAction:function emitAction(action){dispatch(actionEmitter.a.dispatchEmittedAction(action))}}}))(main.a);__webpack_exports__.default={container:ListViewContainer,reducers:{},sagas:[],inputDispatches:[]}}}]);