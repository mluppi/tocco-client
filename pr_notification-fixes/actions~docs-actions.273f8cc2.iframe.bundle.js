(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{4962:function(module,__webpack_exports__,__webpack_require__){"use strict";var _ACTION_HANDLERS,defineProperty=__webpack_require__(8),defineProperty_default=__webpack_require__.n(defineProperty),react=(__webpack_require__(78),__webpack_require__(11),__webpack_require__(1)),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(6),prop_types_default=__webpack_require__.n(prop_types),reducer=__webpack_require__(18),src_selection=__webpack_require__(1359),appFactory=__webpack_require__(57),externalEvents=__webpack_require__(56),setDeleteDialogInfo=function setDeleteDialogInfo(dialogInfo){return{type:"delete/SET_DELETE_DIALOG_INFO",payload:{dialogInfo:dialogInfo}}},actions_doDelete=function doDelete(){return{type:"delete/DO_DELETE"}},setDeletingInProgress=function setDeletingInProgress(deletingInProgress){return{type:"delete/SET_DELETING_IN_PROGRESS",payload:{deletingInProgress:deletingInProgress}}},setEntitiesToDelete=function setEntitiesToDelete(entitiesToDelete){return{type:"delete/SET_ENTITIES_TO_DELETE",payload:{entitiesToDelete:entitiesToDelete}}},ACTION_HANDLERS=(_ACTION_HANDLERS={},defineProperty_default()(_ACTION_HANDLERS,"delete/SET_DELETE_DIALOG_INFO",reducer.a.singleTransferReducer("dialogInfo")),defineProperty_default()(_ACTION_HANDLERS,"delete/SET_ENTITIES_TO_DELETE",reducer.a.singleTransferReducer("entitiesToDelete")),defineProperty_default()(_ACTION_HANDLERS,"delete/SET_DELETING_IN_PROGRESS",reducer.a.singleTransferReducer("deletingInProgress")),_ACTION_HANDLERS),initialState={dialogInfo:null,entitiesToDelete:null,deletingInProgress:!1};function reducer_reducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0,handler=ACTION_HANDLERS[action.type];return handler?handler(state,action):state}reducer_reducer.__docgenInfo={description:"",methods:[],displayName:"reducer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/delete/src/modules/delete/reducer.js"]={name:"reducer",docgenInfo:reducer_reducer.__docgenInfo,path:"packages/delete/src/modules/delete/reducer.js"});var toConsumableArray=__webpack_require__(24),toConsumableArray_default=__webpack_require__.n(toConsumableArray),slicedToArray=__webpack_require__(39),slicedToArray_default=__webpack_require__.n(slicedToArray),regenerator=__webpack_require__(3),regenerator_default=__webpack_require__.n(regenerator),redux_saga_effects_npm_proxy_esm=(__webpack_require__(34),__webpack_require__(62),__webpack_require__(65),__webpack_require__(54),__webpack_require__(32),__webpack_require__(26),__webpack_require__(2)),rest=__webpack_require__(20),get=(__webpack_require__(371),__webpack_require__(90),__webpack_require__(2264),__webpack_require__(110),__webpack_require__(141),__webpack_require__(231),__webpack_require__(72),__webpack_require__(270),__webpack_require__(25)),get_default=__webpack_require__.n(get),deleteStatus_DELETABLE="DELETABLE",deleteRequestParser_transformRootEntity=function transformRootEntity(rootEntities,entity){var applyKeys=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],_entity$rootEntity=entity.rootEntity,entityName=_entity$rootEntity.entityName,entityLabel=_entity$rootEntity.entityLabel,key=_entity$rootEntity.key;if(key.includes("/")){var _key$split=key.split("/"),_key$split2=slicedToArray_default()(_key$split,2),entityNameReal=_key$split2[0],keyReal=_key$split2[1];return Object.assign({},rootEntities,defineProperty_default()({},entityNameReal,{entityLabel:entityLabel,keys:[].concat(toConsumableArray_default()(get_default()(rootEntities,[entityNameReal,"keys"],[])),toConsumableArray_default()(applyKeys?[keyReal]:[]))}))}return Object.assign({},rootEntities,defineProperty_default()({},entityName,{entityLabel:entityLabel,keys:[].concat(toConsumableArray_default()(get_default()(rootEntities,[entityName,"keys"],[])),toConsumableArray_default()(applyKeys?[key]:[]))}))},isEntityDeletable=function isEntityDeletable(entityToDelete){return entityToDelete.rootEntity.deleteStatus===deleteStatus_DELETABLE&&!entityToDelete.affectedEntities.find((function(affectedEntity){return affectedEntity.deleteStatus!==deleteStatus_DELETABLE}))},deleteRequestParser_getDialogInfo=function getDialogInfo(response,currentBuId){var entitiesToDelete=response.entitiesToDelete;return entitiesToDelete.reduce((function(acc,entityToDelete){var deletable=isEntityDeletable(entityToDelete),relatedAttr=deletable?"relatedDeletable":"relatedNotDeletable";return Object.assign({},acc,{rootEntitiesDeletable:deleteRequestParser_transformRootEntity(acc.rootEntitiesDeletable,entityToDelete,deletable)},!deletable&&{rootEntitiesNotDeletable:deleteRequestParser_transformRootEntity(acc.rootEntitiesNotDeletable,entityToDelete)},defineProperty_default()({},relatedAttr,function transformRelatedEntities(relatedEntities,entityToDelete,deletable,currentBuId){return Object.assign({},entityToDelete.affectedEntities.reduce((function(acc,affectedEntity){return Object.assign({},acc,deletable||affectedEntity.deleteStatus!==deleteStatus_DELETABLE?defineProperty_default()({},affectedEntity.entityName,Object.assign({},get_default()(acc,affectedEntity.entityName,{keys:[],keysOtherBu:[],entityLabel:affectedEntity.entityLabel}),null===affectedEntity.businessUnitId||affectedEntity.businessUnitId===currentBuId?{keys:Array.from(new Set([].concat(toConsumableArray_default()(get_default()(acc,[affectedEntity.entityName,"keys"],[])),[affectedEntity.key])))}:{keysOtherBu:Array.from(new Set([].concat(toConsumableArray_default()(get_default()(acc,[affectedEntity.entityName,"keysOtherBu"],[])),[affectedEntity.key])))})):{})}),Object.assign({},relatedEntities)))}(acc[relatedAttr],entityToDelete,deletable,currentBuId)))}),{rootEntitiesDeletable:{},rootEntitiesNotDeletable:{},relatedDeletable:{},relatedNotDeletable:{},hasUnreadableEntities:!!entitiesToDelete.find((function(e){return e.unreadableEntities}))})},deleteRequestParser_getEntitiesToDelete=function getEntitiesToDelete(_ref2){var entitiesToDelete=_ref2.entitiesToDelete;return{entityName:get_default()(entitiesToDelete,"[0].rootEntity.entityName"),keys:entitiesToDelete.reduce((function(acc,entityToDelete){return[].concat(toConsumableArray_default()(acc),toConsumableArray_default()(isEntityDeletable(entityToDelete)?[entityToDelete.rootEntity.key]:[]))}),[])}},deleteEntityPropType=prop_types_default.a.shape({entityLabel:prop_types_default.a.string,keys:prop_types_default.a.arrayOf(prop_types_default.a.string),keysOtherBu:prop_types_default.a.arrayOf(prop_types_default.a.string)}),_marked=(prop_types_default.a.shape({rootEntitiesDeletable:prop_types_default.a.objectOf(deleteEntityPropType).isRequired,rootEntitiesNotDeletable:prop_types_default.a.objectOf(deleteEntityPropType).isRequired,relatedDeletable:prop_types_default.a.objectOf(deleteEntityPropType).isRequired,relatedNotDeletable:prop_types_default.a.objectOf(deleteEntityPropType).isRequired,hasUnreadableEntities:prop_types_default.a.bool}),regenerator_default.a.mark(getDeleteBodyFromSelection)),_marked2=regenerator_default.a.mark(getDeleteEndpoint),_marked3=regenerator_default.a.mark(sagas_loadDialogInfo),_marked4=regenerator_default.a.mark(sagas_doDelete),_marked5=regenerator_default.a.mark(sagas_onCancel),_marked6=regenerator_default.a.mark(mainSagas),inputSelector=function inputSelector(state){return state.input},textResourceSelector=function textResourceSelector(state){return state.intl.messages},entitiesToDeleteSelector=function entitiesToDeleteSelector(state){return state.del.entitiesToDelete};function getDeleteBodyFromSelection(){var _yield$select,selection,entities;return regenerator_default.a.wrap((function getDeleteBodyFromSelection$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,Object(redux_saga_effects_npm_proxy_esm.f)(inputSelector);case 2:return _yield$select=_context.sent,selection=_yield$select.selection,_context.next=6,Object(redux_saga_effects_npm_proxy_esm.b)(src_selection.a.getEntities,selection,rest.a.fetchEntities);case 6:return entities=_context.sent,_context.abrupt("return",{entityModel:entities.entityName,keys:entities.keys});case 8:case"end":return _context.stop()}}),_marked)}function getDeleteEndpoint(){var _yield$select2,customDeleteEndpoint;return regenerator_default.a.wrap((function getDeleteEndpoint$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,Object(redux_saga_effects_npm_proxy_esm.f)(inputSelector);case 2:return _yield$select2=_context2.sent,customDeleteEndpoint=_yield$select2.customDeleteEndpoint,_context2.abrupt("return",customDeleteEndpoint||"client/delete");case 5:case"end":return _context2.stop()}}),_marked2)}function sagas_loadDialogInfo(){var body,deleteEndpoint,_yield$all,_yield$all2,deleteResponse,principal,dialogInfo,entitiesToDelete;return regenerator_default.a.wrap((function loadDialogInfo$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,Object(redux_saga_effects_npm_proxy_esm.b)(getDeleteBodyFromSelection);case 2:return body=_context3.sent,_context3.next=5,Object(redux_saga_effects_npm_proxy_esm.b)(getDeleteEndpoint);case 5:return deleteEndpoint=_context3.sent,_context3.next=8,Object(redux_saga_effects_npm_proxy_esm.a)([Object(redux_saga_effects_npm_proxy_esm.b)(rest.a.requestSaga,"".concat(deleteEndpoint,"/dialog"),{method:"POST",body:body}),Object(redux_saga_effects_npm_proxy_esm.b)(rest.a.fetchPrincipal)]);case 8:return _yield$all=_context3.sent,_yield$all2=slicedToArray_default()(_yield$all,2),deleteResponse=_yield$all2[0],principal=_yield$all2[1],_context3.next=14,Object(redux_saga_effects_npm_proxy_esm.b)(deleteRequestParser_getDialogInfo,deleteResponse.body,principal.currentBusinessUnit.id);case 14:return dialogInfo=_context3.sent,_context3.next=17,Object(redux_saga_effects_npm_proxy_esm.e)(setDeleteDialogInfo(dialogInfo));case 17:return _context3.next=19,Object(redux_saga_effects_npm_proxy_esm.b)(deleteRequestParser_getEntitiesToDelete,deleteResponse.body);case 19:return entitiesToDelete=_context3.sent,_context3.next=22,Object(redux_saga_effects_npm_proxy_esm.e)(setEntitiesToDelete(entitiesToDelete));case 22:case"end":return _context3.stop()}}),_marked3)}function sagas_doDelete(){var entitiesToDelete,body,deleteEndpoint,response,textResources,_body,entities,remoteEvents;return regenerator_default.a.wrap((function doDelete$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return _context4.next=2,Object(redux_saga_effects_npm_proxy_esm.f)(entitiesToDeleteSelector);case 2:return entitiesToDelete=_context4.sent,_context4.next=5,Object(redux_saga_effects_npm_proxy_esm.e)(setDeletingInProgress(!0));case 5:return body={entityModel:entitiesToDelete.entityName,keys:entitiesToDelete.keys},_context4.next=8,Object(redux_saga_effects_npm_proxy_esm.b)(getDeleteEndpoint);case 8:return deleteEndpoint=_context4.sent,_context4.next=11,Object(redux_saga_effects_npm_proxy_esm.b)(rest.a.requestSaga,deleteEndpoint,{method:"POST",body:body,acceptedStatusCodes:[409]});case 11:return response=_context4.sent,_context4.next=14,Object(redux_saga_effects_npm_proxy_esm.f)(textResourceSelector);case 14:if(textResources=_context4.sent,!response.ok){_context4.next=23;break}return _body=response.body,entities=Object.keys(_body.deletedEntities).reduce((function(acc,entityName){return[].concat(toConsumableArray_default()(acc),toConsumableArray_default()(_body.deletedEntities[entityName].map((function(key){return{entityName:entityName,key:key}}))))}),[]),remoteEvents=[{type:"entity-delete-event",payload:{entities:entities}}],_context4.next=21,Object(redux_saga_effects_npm_proxy_esm.e)(externalEvents.a.fireExternalEvent("onSuccess",{message:textResources["client.delete.successfullyMessage"],remoteEvents:remoteEvents}));case 21:_context4.next=30;break;case 23:if(409!==response.status||!response.body.information){_context4.next=28;break}return _context4.next=26,Object(redux_saga_effects_npm_proxy_esm.e)(externalEvents.a.fireExternalEvent("onError",{message:response.body.information}));case 26:_context4.next=30;break;case 28:return _context4.next=30,Object(redux_saga_effects_npm_proxy_esm.e)(externalEvents.a.fireExternalEvent("onError",{message:textResources["client.delete.errorMessage"]}));case 30:case"end":return _context4.stop()}}),_marked4)}function sagas_onCancel(){return regenerator_default.a.wrap((function onCancel$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return _context5.next=2,Object(redux_saga_effects_npm_proxy_esm.e)(externalEvents.a.fireExternalEvent("onCancel"));case 2:case"end":return _context5.stop()}}),_marked5)}function mainSagas(){return regenerator_default.a.wrap((function mainSagas$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:return _context6.next=2,Object(redux_saga_effects_npm_proxy_esm.a)([Object(redux_saga_effects_npm_proxy_esm.j)("root/LOAD_DIALOG_INFO",sagas_loadDialogInfo),Object(redux_saga_effects_npm_proxy_esm.j)("delete/DO_DELETE",sagas_doDelete),Object(redux_saga_effects_npm_proxy_esm.j)("delete/ON_CANCEL",sagas_onCancel)]);case 2:case"end":return _context6.stop()}}),_marked6)}var reducers={del:reducer_reducer},sagas=[mainSagas],es=__webpack_require__(22),injectIntl=__webpack_require__(364),LoadMask=__webpack_require__(2255),Typography=__webpack_require__(17),SignalBox=__webpack_require__(697),Button=__webpack_require__(70),message=(__webpack_require__(2257),__webpack_require__(1952)),taggedTemplateLiteral=__webpack_require__(16),taggedTemplateLiteral_default=__webpack_require__.n(taggedTemplateLiteral),styled_components_browser_esm=(__webpack_require__(413),__webpack_require__(248),__webpack_require__(5)),Popover=__webpack_require__(539),jsx_runtime=__webpack_require__(0),LinkPopOver_ref2=Object(jsx_runtime.jsx)(Typography.a.P,{children:Object(jsx_runtime.jsx)(message.a,{id:"client.delete.tooManyRecords"})}),LinkPopOver_LinkPopOver=function LinkPopOver(_ref){var relatedEntity=_ref.relatedEntity,children=_ref.children,maxCountLink=_ref.maxCountLink;if(relatedEntity.keys.length<maxCountLink&&0===relatedEntity.keysOtherBu.length)return children;var content=Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[relatedEntity.keys.length>maxCountLink&&LinkPopOver_ref2,relatedEntity.keysOtherBu.length>0&&Object(jsx_runtime.jsx)(Typography.a.P,{children:Object(jsx_runtime.jsx)(message.a,{id:"client.delete.recordInOtherBU",values:{count:relatedEntity.keysOtherBu.length}})})]});return Object(jsx_runtime.jsx)(Popover.a,{content:content,placement:"top",children:children})};LinkPopOver_LinkPopOver.displayName="LinkPopOver",LinkPopOver_LinkPopOver.__docgenInfo={description:"",methods:[],displayName:"LinkPopOver",props:{relatedEntity:{type:{name:"custom",raw:"deleteEntityPropType.isRequired"},required:!1,description:""},maxCountLink:{type:{name:"number"},required:!0,description:""},children:{type:{name:"element"},required:!1,description:""}}};var InfoPart_LinkPopOver=LinkPopOver_LinkPopOver;function _templateObject(){var data=taggedTemplateLiteral_default()(["\n  white-space: nowrap;\n"]);return _templateObject=function _templateObject(){return data},data}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/delete/src/components/InfoPart/LinkPopOver.js"]={name:"LinkPopOver",docgenInfo:LinkPopOver_LinkPopOver.__docgenInfo,path:"packages/delete/src/components/InfoPart/LinkPopOver.js"});var NonBreakingText=styled_components_browser_esm.default.span(_templateObject()),_ref4=Object(jsx_runtime.jsx)("span",{children:" / "}),InfoPart_InfoPart=function InfoPart(_ref){var rootEntities=_ref.rootEntities,relatedEntities=_ref.relatedEntities,maxCountLink=_ref.maxCountLink,navigationStrategy=_ref.navigationStrategy;return Object(jsx_runtime.jsxs)(Typography.a.Span,{children:[Object(jsx_runtime.jsx)(Typography.a.B,{children:Object.entries(rootEntities).map((function(_ref2){var _ref3=slicedToArray_default()(_ref2,2),rootEntityName=_ref3[0],rootEntity=_ref3[1];return Object(jsx_runtime.jsxs)("span",{children:[rootEntity.entityLabel," (",rootEntity.keys.length>0&&navigationStrategy.ListLink?Object(jsx_runtime.jsx)(navigationStrategy.ListLink,{entityName:rootEntityName,entityKeys:rootEntity.keys,children:rootEntity.keys.length}):Object(jsx_runtime.jsx)(Typography.a.Span,{children:rootEntity.keys.length}),")"]},"root-entity-".concat(rootEntityName))})).reduce((function(prev,curr){return[prev,", ",curr]}))}),Object.keys(relatedEntities).length>0&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[_ref4,Object.keys(relatedEntities).map((function(entityName){var relatedEntity=relatedEntities[entityName],linkText=[].concat(toConsumableArray_default()(relatedEntity.keys),toConsumableArray_default()(relatedEntity.keysOtherBu)).length,Count=relatedEntity.keys.length>0&&navigationStrategy.ListLink?Object(jsx_runtime.jsx)(navigationStrategy.ListLink,{entityName:entityName,entityKeys:relatedEntity.keys.slice(0,maxCountLink),children:linkText}):Object(jsx_runtime.jsx)(Typography.a.Span,{children:linkText}),Content=Object(jsx_runtime.jsx)(InfoPart_LinkPopOver,{relatedEntity:relatedEntity,maxCountLink:maxCountLink,children:Count});return Object(jsx_runtime.jsx)(react_default.a.Fragment,{children:Object(jsx_runtime.jsxs)(NonBreakingText,{children:[relatedEntity.entityLabel," (",Content,")"]})},"entity-info-"+entityName)})).reduce((function(prev,curr){return[prev,", ",curr]}))]})]})};InfoPart_InfoPart.displayName="InfoPart",InfoPart_InfoPart.__docgenInfo={description:"",methods:[],displayName:"InfoPart",props:{rootEntities:{type:{name:"objectOf",value:{name:"shape",value:{entityLabel:{name:"string",required:!0},keys:{name:"arrayOf",value:{name:"string"},required:!0}}}},required:!0,description:""},relatedEntities:{type:{name:"objectOf",value:{name:"custom",raw:"deleteEntityPropType"}},required:!0,description:""},maxCountLink:{type:{name:"number"},required:!1,description:""},navigationStrategy:{type:{name:"custom",raw:"navigationStrategy.propTypes"},required:!1,description:""}}};var components_InfoPart_InfoPart=InfoPart_InfoPart;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/delete/src/components/InfoPart/InfoPart.js"]={name:"InfoPart",docgenInfo:InfoPart_InfoPart.__docgenInfo,path:"packages/delete/src/components/InfoPart/InfoPart.js"});var modularScale=__webpack_require__(33),StyledButton=__webpack_require__(1343);function _templateObject2(){var data=taggedTemplateLiteral_default()(["\n  display: flex;\n  justify-content: flex-end;\n\n  "," {\n    margin-right: 0;\n  }\n"]);return _templateObject2=function _templateObject2(){return data},data}function StyledComponents_templateObject(){var data=taggedTemplateLiteral_default()(["\n  padding-top: ",";\n"]);return StyledComponents_templateObject=function _templateObject(){return data},data}var StyledSectionWrapper=styled_components_browser_esm.default.div(StyledComponents_templateObject(),modularScale.a.space(.6)),StyledButtonsWrapper=styled_components_browser_esm.default.div(_templateObject2(),StyledButton.a),Dialog_ref2=Object(jsx_runtime.jsx)(Typography.a.P,{children:Object(jsx_runtime.jsx)(message.a,{id:"client.delete.confirmText"})}),Dialog_ref3=Object(jsx_runtime.jsx)(Typography.a.P,{children:Object(jsx_runtime.jsx)(message.a,{id:"client.delete.textNotDeletable"})}),Dialog_ref4=Object(jsx_runtime.jsx)(StyledSectionWrapper,{children:Object(jsx_runtime.jsx)(SignalBox.a,{condition:"warning",children:Object(jsx_runtime.jsx)(Typography.a.Span,{children:Object(jsx_runtime.jsx)(message.a,{id:"client.delete.unreadableEntities"})})})}),_ref5=Object(jsx_runtime.jsx)(message.a,{id:"client.delete.deleteButton"}),_ref6=Object(jsx_runtime.jsx)(message.a,{id:"client.delete.cancelButton"}),Dialog_Dialog=function Dialog(_ref){var _ref$dialogInfo=_ref.dialogInfo,rootEntitiesDeletable=_ref$dialogInfo.rootEntitiesDeletable,rootEntitiesNotDeletable=_ref$dialogInfo.rootEntitiesNotDeletable,relatedDeletable=_ref$dialogInfo.relatedDeletable,relatedNotDeletable=_ref$dialogInfo.relatedNotDeletable,hasUnreadableEntities=_ref$dialogInfo.hasUnreadableEntities,doDelete=_ref.doDelete,onCancel=_ref.onCancel,navigationStrategy=_ref.navigationStrategy;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Dialog_ref2,Object(jsx_runtime.jsx)(components_InfoPart_InfoPart,{rootEntities:rootEntitiesDeletable,relatedEntities:relatedDeletable,maxCountLink:100,navigationStrategy:navigationStrategy},"infopart-deletable"),Object.keys(rootEntitiesNotDeletable).length>0&&Object(jsx_runtime.jsxs)(StyledSectionWrapper,{children:[Dialog_ref3,Object(jsx_runtime.jsx)(components_InfoPart_InfoPart,{rootEntities:rootEntitiesNotDeletable,relatedEntities:relatedNotDeletable,maxCountLink:100,navigationStrategy:navigationStrategy},"infopart-notdeletable")]}),hasUnreadableEntities&&Dialog_ref4,Object(jsx_runtime.jsx)(StyledSectionWrapper,{children:Object(jsx_runtime.jsxs)(StyledButtonsWrapper,{children:[Object(jsx_runtime.jsx)(Button.a,{onClick:doDelete,disabled:0===Object.keys(rootEntitiesDeletable).length,children:_ref5}),Object(jsx_runtime.jsx)(Button.a,{ink:"primary",onClick:onCancel,children:_ref6})]})})]})};Dialog_Dialog.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{onCancel:{type:{name:"func"},required:!0,description:""},doDelete:{type:{name:"func"},required:!0,description:""},dialogInfo:{type:{name:"custom",raw:"deleteInfoPropType.isRequired"},required:!1,description:""},navigationStrategy:{type:{name:"custom",raw:"navigationStrategy.propTypes"},required:!1,description:""}}};var components_Dialog_Dialog=Dialog_Dialog;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/delete/src/components/Dialog/Dialog.js"]={name:"Dialog",docgenInfo:Dialog_Dialog.__docgenInfo,path:"packages/delete/src/components/Dialog/Dialog.js"});var mapActionCreators={doDelete:actions_doDelete,onCancel:function onCancel(){return{type:"delete/ON_CANCEL"}}},DialogContainer=Object(es.connect)((function mapStateToProps(state,props){return{dialogInfo:state.del.dialogInfo,navigationStrategy:state.input.navigationStrategy}}),mapActionCreators)(Object(injectIntl.c)(components_Dialog_Dialog)),LazyLoadingSpinner=__webpack_require__(4923);function DeleteProgress_StyledComponents_templateObject(){var data=taggedTemplateLiteral_default()(["\n  margin-bottom: ",";\n"]);return DeleteProgress_StyledComponents_templateObject=function _templateObject(){return data},data}var StyledIconWrapper=styled_components_browser_esm.default.div(DeleteProgress_StyledComponents_templateObject(),modularScale.a.space(.2)),DeleteProgress_ref2=Object(jsx_runtime.jsx)(StyledIconWrapper,{children:Object(jsx_runtime.jsx)(LazyLoadingSpinner.a,{size:"30px"})}),DeleteProgress_ref3=Object(jsx_runtime.jsx)(Typography.a.P,{children:Object(jsx_runtime.jsx)(message.a,{id:"client.delete.deleteInProgress"})}),DeleteProgress_DeleteProgress=function DeleteProgress(_ref){var dialogInfo=_ref.dialogInfo,navigationStrategy=_ref.navigationStrategy;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[DeleteProgress_ref2,DeleteProgress_ref3,Object(jsx_runtime.jsx)(components_InfoPart_InfoPart,{rootEntities:dialogInfo.rootEntitiesDeletable,relatedEntities:dialogInfo.relatedDeletable,maxCountLink:100,navigationStrategy:navigationStrategy},"infopart-deletable")]})};DeleteProgress_DeleteProgress.__docgenInfo={description:"",methods:[],displayName:"DeleteProgress",props:{dialogInfo:{type:{name:"custom",raw:"deleteInfoPropType.isRequired"},required:!1,description:""},intl:{type:{name:"object"},required:!0,description:""},navigationStrategy:{type:{name:"custom",raw:"navigationStrategy.propTypes"},required:!1,description:""}}};var components_DeleteProgress_DeleteProgress=DeleteProgress_DeleteProgress;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/delete/src/components/DeleteProgress/DeleteProgress.js"]={name:"DeleteProgress",docgenInfo:DeleteProgress_DeleteProgress.__docgenInfo,path:"packages/delete/src/components/DeleteProgress/DeleteProgress.js"});var DeleteProgressContainer_mapActionCreators={doDelete:actions_doDelete},components_DeleteProgress=Object(es.connect)((function mapStateToProps(state,props){return{dialogInfo:state.del.dialogInfo,navigationStrategy:state.input.navigationStrategy}}),DeleteProgressContainer_mapActionCreators)(Object(injectIntl.c)(components_DeleteProgress_DeleteProgress)),Delete_ref2=Object(jsx_runtime.jsx)(components_DeleteProgress,{}),Delete_ref3=Object(jsx_runtime.jsx)(DialogContainer,{}),Delete_Delete=function Delete(_ref){var loadDialogInfo=_ref.loadDialogInfo,dialogInfo=_ref.dialogInfo,deletingInProgress=_ref.deletingInProgress,intl=_ref.intl;Object(react.useEffect)((function(){loadDialogInfo()}),[]);return deletingInProgress?Delete_ref2:Object(jsx_runtime.jsx)(LoadMask.a,{required:[dialogInfo],loadingText:function msg(id){return intl.formatMessage({id:id})}("client.delete.loadingText"),children:dialogInfo&&Delete_ref3})};Delete_Delete.displayName="Delete",Delete_Delete.__docgenInfo={description:"",methods:[],displayName:"Delete",props:{loadDialogInfo:{type:{name:"func"},required:!0,description:""},dialogInfo:{type:{name:"custom",raw:"deleteInfoPropType"},required:!1,description:""},deletingInProgress:{type:{name:"bool"},required:!1,description:""},intl:{type:{name:"object"},required:!0,description:""}}};var components_Delete_Delete=Delete_Delete;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/delete/src/components/Delete/Delete.js"]={name:"Delete",docgenInfo:Delete_Delete.__docgenInfo,path:"packages/delete/src/components/Delete/Delete.js"});var DeleteContainer_mapActionCreators={loadDialogInfo:function loadDialogInfo(){return{type:"root/LOAD_DIALOG_INFO"}}},components_Delete=Object(es.connect)((function mapStateToProps(state,props){return{dialogInfo:state.del.dialogInfo,deletingInProgress:state.del.deletingInProgress}}),DeleteContainer_mapActionCreators)(Object(injectIntl.c)(components_Delete_Delete)),EXTERNAL_EVENTS=["onSuccess","onCancel","onError"],main_ref=Object(jsx_runtime.jsx)(components_Delete,{}),main_initApp=function initApp(id,input,events,publicPath){var content=main_ref,store=appFactory.a.createStore(reducers,sagas,input,"delete");return externalEvents.a.addToStore(store,events),appFactory.a.createApp("delete",content,store,{input:input,events:events,actions:[],publicPath:publicPath,textResourceModules:["component","common","delete"]})};appFactory.a.registerAppInRegistry("delete",main_initApp);var main_DeleteApp=function DeleteApp(props){var events=EXTERNAL_EVENTS.reduce((function(acc,event){return Object.assign({},acc,props[event]?defineProperty_default()({},event,props[event]):{})}),{});return main_initApp(0,props,events).component};main_DeleteApp.propTypes={selection:src_selection.a.propType.isRequired,customDeleteEndpoint:prop_types_default.a.string};__webpack_exports__.a=main_DeleteApp}}]);