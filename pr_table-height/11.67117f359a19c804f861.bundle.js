(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{3322:function(module,exports,__webpack_require__){"use strict";const strictUriEncode=__webpack_require__(3325),decodeComponent=__webpack_require__(3326),splitOnFirst=__webpack_require__(3327);function encode(value,options){return options.encode?options.strict?strictUriEncode(value):encodeURIComponent(value):value}function decode(value,options){return options.decode?decodeComponent(value):value}function removeHash(input){const hashStart=input.indexOf("#");return-1!==hashStart&&(input=input.slice(0,hashStart)),input}function extract(input){const queryStart=(input=removeHash(input)).indexOf("?");return-1===queryStart?"":input.slice(queryStart+1)}function parseValue(value,options){return options.parseNumbers&&!Number.isNaN(Number(value))&&"string"==typeof value&&""!==value.trim()?value=Number(value):!options.parseBooleans||null===value||"true"!==value.toLowerCase()&&"false"!==value.toLowerCase()||(value="true"===value.toLowerCase()),value}function parse(input,options){const formatter=function parserForArrayFormat(options){let result;switch(options.arrayFormat){case"index":return(key,value,accumulator)=>{result=/\[(\d*)\]$/.exec(key),key=key.replace(/\[\d*\]$/,""),result?(void 0===accumulator[key]&&(accumulator[key]={}),accumulator[key][result[1]]=value):accumulator[key]=value};case"bracket":return(key,value,accumulator)=>{result=/(\[\])$/.exec(key),key=key.replace(/\[\]$/,""),result?void 0!==accumulator[key]?accumulator[key]=[].concat(accumulator[key],value):accumulator[key]=[value]:accumulator[key]=value};case"comma":return(key,value,accumulator)=>{const newValue="string"==typeof value&&value.split("").indexOf(",")>-1?value.split(","):value;accumulator[key]=newValue};default:return(key,value,accumulator)=>{void 0!==accumulator[key]?accumulator[key]=[].concat(accumulator[key],value):accumulator[key]=value}}}(options=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},options)),ret=Object.create(null);if("string"!=typeof input)return ret;if(!(input=input.trim().replace(/^[?#&]/,"")))return ret;for(const param of input.split("&")){let[key,value]=splitOnFirst(param.replace(/\+/g," "),"=");value=void 0===value?null:decode(value,options),formatter(decode(key,options),value,ret)}for(const key of Object.keys(ret)){const value=ret[key];if("object"==typeof value&&null!==value)for(const k of Object.keys(value))value[k]=parseValue(value[k],options);else ret[key]=parseValue(value,options)}return!1===options.sort?ret:(!0===options.sort?Object.keys(ret).sort():Object.keys(ret).sort(options.sort)).reduce((result,key)=>{const value=ret[key];return Boolean(value)&&"object"==typeof value&&!Array.isArray(value)?result[key]=function keysSorter(input){return Array.isArray(input)?input.sort():"object"==typeof input?keysSorter(Object.keys(input)).sort((a,b)=>Number(a)-Number(b)).map(key=>input[key]):input}(value):result[key]=value,result},Object.create(null))}exports.extract=extract,exports.parse=parse,exports.stringify=(object,options)=>{if(!object)return"";const formatter=function encoderForArrayFormat(options){switch(options.arrayFormat){case"index":return key=>(result,value)=>{const index=result.length;return void 0===value?result:null===value?[...result,[encode(key,options),"[",index,"]"].join("")]:[...result,[encode(key,options),"[",encode(index,options),"]=",encode(value,options)].join("")]};case"bracket":return key=>(result,value)=>void 0===value?result:null===value?[...result,[encode(key,options),"[]"].join("")]:[...result,[encode(key,options),"[]=",encode(value,options)].join("")];case"comma":return key=>(result,value,index)=>null==value||0===value.length?result:0===index?[[encode(key,options),"=",encode(value,options)].join("")]:[[result,encode(value,options)].join(",")];default:return key=>(result,value)=>void 0===value?result:null===value?[...result,encode(key,options)]:[...result,[encode(key,options),"=",encode(value,options)].join("")]}}(options=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},options)),keys=Object.keys(object);return!1!==options.sort&&keys.sort(options.sort),keys.map(key=>{const value=object[key];return void 0===value?"":null===value?encode(key,options):Array.isArray(value)?value.reduce(formatter(key),[]).join("&"):encode(key,options)+"="+encode(value,options)}).filter(x=>x.length>0).join("&")},exports.parseUrl=(input,options)=>({url:removeHash(input).split("?")[0]||"",query:parse(extract(input),options)})},3323:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(85),__webpack_require__(38),__webpack_require__(108);var query_string=__webpack_require__(3322),query_string_default=__webpack_require__.n(query_string),isObject=__webpack_require__(122),isObject_default=__webpack_require__.n(isObject),mapValues=__webpack_require__(482),mapValues_default=__webpack_require__.n(mapValues),hasJsonStructure=function(str){if("string"!=typeof str)return!1;try{var parsed=JSON.parse(str);return"[object Object]"===Object.prototype.toString.call(parsed)}catch(err){return!1}};__webpack_exports__.a={fromQueryString:function(queryString){var obj=query_string_default.a.parse(queryString);return mapValues_default()(obj,(function(value){return hasJsonStructure(value)?JSON.parse(value):value}))},toQueryString:function(obj){var stringifiedValues=mapValues_default()(obj,(function(value){return isObject_default()(value)?JSON.stringify(value):value}));return query_string_default.a.stringify(stringifiedValues)}}},3324:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(16),__webpack_require__(27),__webpack_require__(18),__webpack_require__(72),__webpack_require__(28),__webpack_require__(22),__webpack_require__(32),__webpack_require__(33),__webpack_require__(15),__webpack_require__(19);var defineProperty=__webpack_require__(4),defineProperty_default=__webpack_require__.n(defineProperty),get=__webpack_require__(29),get_default=__webpack_require__.n(get);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(source,!0).forEach((function(key){defineProperty_default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var persistedViews={};__webpack_exports__.a={persistViewInfo:function(location,info){var level=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;persistedViews=_objectSpread({},persistedViews,defineProperty_default()({},location,{level:level,info:_objectSpread({},get_default()(persistedViews,[location,"info"],{}),{},info)}))},viewInfoSelector:function(location){return get_default()(persistedViews,[location,"info"],{})},clearPersistedViews:function(){var level=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;persistedViews=_objectSpread({},Object.keys(persistedViews).reduce((function(acc,key){var persistedView=persistedViews[key];return _objectSpread({},acc,{},persistedView.level<level&&defineProperty_default()({},key,persistedView))}),{}))}}},3325:function(module,exports,__webpack_require__){"use strict";module.exports=str=>encodeURIComponent(str).replace(/[!'()*]/g,x=>`%${x.charCodeAt(0).toString(16).toUpperCase()}`)},3326:function(module,exports,__webpack_require__){"use strict";var singleMatcher=new RegExp("%[a-f0-9]{2}","gi"),multiMatcher=new RegExp("(%[a-f0-9]{2})+","gi");function decodeComponents(components,split){try{return decodeURIComponent(components.join(""))}catch(err){}if(1===components.length)return components;split=split||1;var left=components.slice(0,split),right=components.slice(split);return Array.prototype.concat.call([],decodeComponents(left),decodeComponents(right))}function decode(input){try{return decodeURIComponent(input)}catch(err){for(var tokens=input.match(singleMatcher),i=1;i<tokens.length;i++)tokens=(input=decodeComponents(tokens,i).join("")).match(singleMatcher);return input}}module.exports=function(encodedURI){if("string"!=typeof encodedURI)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof encodedURI+"`");try{return encodedURI=encodedURI.replace(/\+/g," "),decodeURIComponent(encodedURI)}catch(err){return function customDecodeURIComponent(input){for(var replaceMap={"%FE%FF":"��","%FF%FE":"��"},match=multiMatcher.exec(input);match;){try{replaceMap[match[0]]=decodeURIComponent(match[0])}catch(err){var result=decode(match[0]);result!==match[0]&&(replaceMap[match[0]]=result)}match=multiMatcher.exec(input)}replaceMap["%C2"]="�";for(var entries=Object.keys(replaceMap),i=0;i<entries.length;i++){var key=entries[i];input=input.replace(new RegExp(key,"g"),replaceMap[key])}return input}(encodedURI)}}},3327:function(module,exports,__webpack_require__){"use strict";module.exports=(string,separator)=>{if("string"!=typeof string||"string"!=typeof separator)throw new TypeError("Expected the arguments to be of type `string`");if(""===separator)return[string];const separatorIndex=string.indexOf(separator);return-1===separatorIndex?[string]:[string.slice(0,separatorIndex),string.slice(separatorIndex+separator.length)]}},3328:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(38),__webpack_require__(94);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(36),tocco_app_extensions_src_actionEmitter__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(11),__webpack_require__(120)),tocco_ui__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5),tocco_util_src_consoleLogger__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(100),actions={"input-edit":Object(react__WEBPACK_IMPORTED_MODULE_2__.lazy)((function(){return __webpack_require__.e(1).then(__webpack_require__.bind(null,3337))})),delete:Object(react__WEBPACK_IMPORTED_MODULE_2__.lazy)((function(){return __webpack_require__.e(1).then(__webpack_require__.bind(null,3338))}))},_ref=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(tocco_ui__WEBPACK_IMPORTED_MODULE_6__.m,null),renderLoader=function(){return _ref};renderLoader.displayName="renderLoader";var LazyAction=function(props){var appId=props.appId,LazyAction=actions[appId];if(!LazyAction)return tocco_util_src_consoleLogger__WEBPACK_IMPORTED_MODULE_7__.a.logError("no action found with id: ".concat(appId)),null;var ActionComponent=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null,{emitAction:function emitAction(action){return tocco_app_extensions_src_actionEmitter__WEBPACK_IMPORTED_MODULE_5__.a.dispatchEmittedAction(action)}})(LazyAction);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense,{fallback:renderLoader()},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ActionComponent,props))};LazyAction.displayName="LazyAction",__webpack_exports__.a=LazyAction},3335:function(module,__webpack_exports__,__webpack_require__){"use strict";var _LazyAction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3328);__webpack_require__.d(__webpack_exports__,"a",(function(){return _LazyAction__WEBPACK_IMPORTED_MODULE_0__.a}))},3418:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(25),__webpack_require__(55),__webpack_require__(163);var es=__webpack_require__(36),main=__webpack_require__(599),actionEmitter=__webpack_require__(120),queryString=__webpack_require__(3323),viewPersistor=__webpack_require__(3324),LazyAction=__webpack_require__(3335),handleNavigateToCreate=function(props){return function(relationName){relationName?props.router.history.push("".concat(props.router.match.url,"/").concat(relationName,"/")):props.router.history.push("/detail")}},handleNavigateToAction=function(props){return function(_ref){var definition=_ref.definition,selection=_ref.selection,search=queryString.a.toQueryString({selection:selection,actionProperties:definition.properties});props.router.history.push({pathname:"/action/"+definition.appId,state:{definition:definition,selection:selection},search:search})}},ListViewContainer=Object(es.connect)((function(state,props){return{id:"".concat(state.entityBrowser.appId,"_entity-browser-list"),locale:state.input.locale,entityName:state.entityBrowser.entityName,formName:state.entityBrowser.formBase,searchFormType:state.input.showSearchForm?"basic":"none",limit:state.input.limit,searchFilters:state.input.searchFilters,preselectedSearchFields:state.input.preselectedSearchFields,disableSimpleSearch:state.input.disableSimpleSearch,simpleSearchFields:state.input.simpleSearchFields,onRowClick:function onRowClick(e){props.router.history.push("/detail/".concat(e.id))},onNavigateToCreate:handleNavigateToCreate(props),onNavigateToAction:handleNavigateToAction(props),searchFormPosition:"top",actionAppComponent:LazyAction.a,store:viewPersistor.a.viewInfoSelector(props.router.history.location.pathname).store,onStoreCreate:function onStoreCreate(store){viewPersistor.a.persistViewInfo(props.router.history.location.pathname,{store:store},0)}}}),(function(dispatch){return{emitAction:function emitAction(action){dispatch(actionEmitter.a.dispatchEmittedAction(action))}}}))(main.a);__webpack_exports__.default={container:ListViewContainer,reducers:{},sagas:[],inputDispatches:[]}}}]);
//# sourceMappingURL=11.67117f359a19c804f861.bundle.js.map