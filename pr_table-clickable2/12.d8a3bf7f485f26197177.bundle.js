(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2266:function(module,exports,__webpack_require__){"use strict";const strictUriEncode=__webpack_require__(2269),decodeComponent=__webpack_require__(2270),splitOnFirst=__webpack_require__(2271);function encode(value,options){return options.encode?options.strict?strictUriEncode(value):encodeURIComponent(value):value}function decode(value,options){return options.decode?decodeComponent(value):value}function removeHash(input){const hashStart=input.indexOf("#");return-1!==hashStart&&(input=input.slice(0,hashStart)),input}function extract(input){const queryStart=(input=removeHash(input)).indexOf("?");return-1===queryStart?"":input.slice(queryStart+1)}function parseValue(value,options){return options.parseNumbers&&!Number.isNaN(Number(value))&&"string"==typeof value&&""!==value.trim()?value=Number(value):!options.parseBooleans||null===value||"true"!==value.toLowerCase()&&"false"!==value.toLowerCase()||(value="true"===value.toLowerCase()),value}function parse(input,options){const formatter=function parserForArrayFormat(options){let result;switch(options.arrayFormat){case"index":return(key,value,accumulator)=>{result=/\[(\d*)\]$/.exec(key),key=key.replace(/\[\d*\]$/,""),result?(void 0===accumulator[key]&&(accumulator[key]={}),accumulator[key][result[1]]=value):accumulator[key]=value};case"bracket":return(key,value,accumulator)=>{result=/(\[\])$/.exec(key),key=key.replace(/\[\]$/,""),result?void 0!==accumulator[key]?accumulator[key]=[].concat(accumulator[key],value):accumulator[key]=[value]:accumulator[key]=value};case"comma":return(key,value,accumulator)=>{const newValue="string"==typeof value&&value.split("").indexOf(",")>-1?value.split(","):value;accumulator[key]=newValue};default:return(key,value,accumulator)=>{void 0!==accumulator[key]?accumulator[key]=[].concat(accumulator[key],value):accumulator[key]=value}}}(options=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},options)),ret=Object.create(null);if("string"!=typeof input)return ret;if(!(input=input.trim().replace(/^[?#&]/,"")))return ret;for(const param of input.split("&")){let[key,value]=splitOnFirst(param.replace(/\+/g," "),"=");value=void 0===value?null:decode(value,options),formatter(decode(key,options),value,ret)}for(const key of Object.keys(ret)){const value=ret[key];if("object"==typeof value&&null!==value)for(const k of Object.keys(value))value[k]=parseValue(value[k],options);else ret[key]=parseValue(value,options)}return!1===options.sort?ret:(!0===options.sort?Object.keys(ret).sort():Object.keys(ret).sort(options.sort)).reduce((result,key)=>{const value=ret[key];return Boolean(value)&&"object"==typeof value&&!Array.isArray(value)?result[key]=function keysSorter(input){return Array.isArray(input)?input.sort():"object"==typeof input?keysSorter(Object.keys(input)).sort((a,b)=>Number(a)-Number(b)).map(key=>input[key]):input}(value):result[key]=value,result},Object.create(null))}exports.extract=extract,exports.parse=parse,exports.stringify=(object,options)=>{if(!object)return"";const formatter=function encoderForArrayFormat(options){switch(options.arrayFormat){case"index":return key=>(result,value)=>{const index=result.length;return void 0===value?result:null===value?[...result,[encode(key,options),"[",index,"]"].join("")]:[...result,[encode(key,options),"[",encode(index,options),"]=",encode(value,options)].join("")]};case"bracket":return key=>(result,value)=>void 0===value?result:null===value?[...result,[encode(key,options),"[]"].join("")]:[...result,[encode(key,options),"[]=",encode(value,options)].join("")];case"comma":return key=>(result,value,index)=>null==value||0===value.length?result:0===index?[[encode(key,options),"=",encode(value,options)].join("")]:[[result,encode(value,options)].join(",")];default:return key=>(result,value)=>void 0===value?result:null===value?[...result,encode(key,options)]:[...result,[encode(key,options),"=",encode(value,options)].join("")]}}(options=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},options)),keys=Object.keys(object);return!1!==options.sort&&keys.sort(options.sort),keys.map(key=>{const value=object[key];return void 0===value?"":null===value?encode(key,options):Array.isArray(value)?value.reduce(formatter(key),[]).join("&"):encode(key,options)+"="+encode(value,options)}).filter(x=>x.length>0).join("&")},exports.parseUrl=(input,options)=>({url:removeHash(input).split("?")[0]||"",query:parse(extract(input),options)})},2267:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(84),__webpack_require__(39),__webpack_require__(108);var query_string=__webpack_require__(2266),query_string_default=__webpack_require__.n(query_string),isObject=__webpack_require__(121),isObject_default=__webpack_require__.n(isObject),mapValues=__webpack_require__(470),mapValues_default=__webpack_require__.n(mapValues),hasJsonStructure=function(str){if("string"!=typeof str)return!1;try{var parsed=JSON.parse(str);return"[object Object]"===Object.prototype.toString.call(parsed)}catch(err){return!1}};__webpack_exports__.a={fromQueryString:function(queryString){var obj=query_string_default.a.parse(queryString);return mapValues_default()(obj,(function(value){return hasJsonStructure(value)?JSON.parse(value):value}))},toQueryString:function(obj){var stringifiedValues=mapValues_default()(obj,(function(value){return isObject_default()(value)?JSON.stringify(value):value}));return query_string_default.a.stringify(stringifiedValues)}}},2269:function(module,exports,__webpack_require__){"use strict";module.exports=str=>encodeURIComponent(str).replace(/[!'()*]/g,x=>`%${x.charCodeAt(0).toString(16).toUpperCase()}`)},2270:function(module,exports,__webpack_require__){"use strict";var singleMatcher=new RegExp("%[a-f0-9]{2}","gi"),multiMatcher=new RegExp("(%[a-f0-9]{2})+","gi");function decodeComponents(components,split){try{return decodeURIComponent(components.join(""))}catch(err){}if(1===components.length)return components;split=split||1;var left=components.slice(0,split),right=components.slice(split);return Array.prototype.concat.call([],decodeComponents(left),decodeComponents(right))}function decode(input){try{return decodeURIComponent(input)}catch(err){for(var tokens=input.match(singleMatcher),i=1;i<tokens.length;i++)tokens=(input=decodeComponents(tokens,i).join("")).match(singleMatcher);return input}}module.exports=function(encodedURI){if("string"!=typeof encodedURI)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof encodedURI+"`");try{return encodedURI=encodedURI.replace(/\+/g," "),decodeURIComponent(encodedURI)}catch(err){return function customDecodeURIComponent(input){for(var replaceMap={"%FE%FF":"��","%FF%FE":"��"},match=multiMatcher.exec(input);match;){try{replaceMap[match[0]]=decodeURIComponent(match[0])}catch(err){var result=decode(match[0]);result!==match[0]&&(replaceMap[match[0]]=result)}match=multiMatcher.exec(input)}replaceMap["%C2"]="�";for(var entries=Object.keys(replaceMap),i=0;i<entries.length;i++){var key=entries[i];input=input.replace(new RegExp(key,"g"),replaceMap[key])}return input}(encodedURI)}}},2271:function(module,exports,__webpack_require__){"use strict";module.exports=(string,separator)=>{if("string"!=typeof string||"string"!=typeof separator)throw new TypeError("Expected the arguments to be of type `string`");if(""===separator)return[string];const separatorIndex=string.indexOf(separator);return-1===separatorIndex?[string]:[string.slice(0,separatorIndex),string.slice(separatorIndex+separator.length)]}},2344:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(27),__webpack_require__(58),__webpack_require__(170);var es=__webpack_require__(37),main=__webpack_require__(584),actionEmitter=__webpack_require__(122),viewPersistor=__webpack_require__(360),queryString=__webpack_require__(2267),handleNavigateToCreate=function(props){return function(relationName){relationName?props.router.history.push("".concat(props.router.match.url,"/").concat(relationName,"/")):props.router.history.push("/detail")}},handleNavigateToAction=function(props){return function(_ref){var definition=_ref.definition,selection=_ref.selection,search=queryString.a.toQueryString({selection:selection,actionProperties:definition.properties});props.router.history.push({pathname:"/action/"+definition.appId,state:{definition:definition,selection:selection},search:search})}},ListViewContainer=Object(es.connect)((function(state,props){return{id:"".concat(state.entityBrowser.appId,"_entity-browser-list"),store:viewPersistor.a.viewInfoSelector(state,props.router.history.location.pathname).store,locale:state.input.locale,entityName:state.entityBrowser.entityName,formName:state.entityBrowser.formBase,searchFormType:state.input.showSearchForm?"basic":"none",limit:state.input.limit,searchFilters:state.input.searchFilters,preselectedSearchFields:state.input.preselectedSearchFields,disableSimpleSearch:state.input.disableSimpleSearch,simpleSearchFields:state.input.simpleSearchFields,onRowClick:function onRowClick(e){props.router.history.push("/detail/".concat(e.id))},onNavigateToCreate:handleNavigateToCreate(props),onNavigateToAction:handleNavigateToAction(props),searchFormPosition:"top"}}),(function(dispatch,props){return{emitAction:function emitAction(action){dispatch(actionEmitter.a.dispatchEmittedAction(action))},onStoreCreate:function onStoreCreate(store){dispatch(viewPersistor.a.persistViewInfo(props.router.history.location.pathname,0,{store:store}))}}}))(main.a);__webpack_exports__.default={container:ListViewContainer,reducers:{},sagas:[],inputDispatches:[]}}}]);
//# sourceMappingURL=12.d8a3bf7f485f26197177.bundle.js.map