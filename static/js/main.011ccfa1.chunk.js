(this["webpackJsonpsubj-notes"]=this["webpackJsonpsubj-notes"]||[]).push([[0],{23:function(e,t,n){e.exports={backdrop:"UpdateNoteModal_backdrop__RW6h3",modal:"UpdateNoteModal_modal__1g7PY",form:"UpdateNoteModal_form__3wrNz",mainTitle:"UpdateNoteModal_mainTitle__1EkQI",title:"UpdateNoteModal_title__1zy11",text:"UpdateNoteModal_text__1VH7d",btns:"UpdateNoteModal_btns__24RdK",btn:"UpdateNoteModal_btn__3ifZm"}},27:function(e,t,n){e.exports={container:"NoteList_container__1a07X",note:"NoteList_note__1NzUu",noteTitle:"NoteList_noteTitle__Aa4-v",btns:"NoteList_btns__qOvY4"}},32:function(e,t,n){e.exports={form:"NoteEditor_form__32zFc",title:"NoteEditor_title__JShXz",text:"NoteEditor_text__1TAcr",btn:"NoteEditor_btn__3sWBz"}},62:function(e,t,n){e.exports=n(95)},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),l=n(10),s=n(28),u=n(25),i=n(17),d=n(18),p=n(20),m=n(19),b=n(21),f=n(8),h=n.n(f),v=n(32),E=n.n(v),k=function(e){var t=e.title,n=e.content,a=e.handleChange,c=e.handleSubmit;return r.a.createElement("form",{className:E.a.form,onSubmit:c},r.a.createElement("input",{type:"text",className:E.a.title,placeholder:"Title...",name:"title",value:t,onChange:a,required:!0}),r.a.createElement("textarea",{className:E.a.text,rows:"6",placeholder:"Text...",name:"content",value:n,onChange:a}),r.a.createElement("button",{className:E.a.btn,type:"submit"},"Save"))},y="notes/ADD_SUCCESS",O="notes/DELETE_SUCCESS",N="notes/UPDATE",g="notes/FETCH_REQUEST",S="notes/FETCH_SUCCESS",C="notes/FETCH_ERROR",_=function(e){return{type:y,payload:e}},j=function(e){return{type:O,payload:e}},w=function(e){return{type:N,payload:e}},x=function(){return{type:g}},M=function(e){return{type:S,payload:e}},T=function(e){return{type:C,payload:e}},R=n(5),U=n.n(R),A=n(22);h.a.defaults.baseURL="https://cors-anywhere.herokuapp.com/http://test.subj.ua/api/v1/",h.a.defaults.headers.common.Authorization="Bearer p2l0ynbwahsnx2404tcxi4lwyurwrpoyrwwr";var D=function(){var e=Object(A.a)(U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/notes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/notes",t,{cancelToken:n.token});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("/notes/".concat(t),{cancelToken:n.token});case 2:return a=e.sent,e.abrupt("return",204===a.status);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(A.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("note: ",t),e.next=3,h.a.patch("/notes/".concat(t.id),{title:t.title||"",content:t.content||""});case 3:return n=e.sent,console.log("response: ",n),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B="snackbar/OPEN_SNACKBAR_ERROR",K="snackbar/OPEN_SNACKBAR_SUCCESS",F="snackbar/CLOSE_SNACKBAR",q="snackbar/CLOSE_SNACKBAR",H={openSnackbarError:function(){return{type:B}},closeSnackbarError:function(){return{type:F}},openSnackbarSuccess:function(e){return{type:K,payload:e}},closeSnackbarSuccess:function(){return{type:q}}},I=n(13);var W=Object(I.combineReducers)({snackbarSource:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case K:return a;case q:return null;default:return e}},snackbarErrorIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case B:return!0;case F:return!1;default:return e}},snackbarSuccessIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case K:return!0;case q:return!1;default:return e}}}),J=function(e){return e.snackbar.snackbarErrorIsOpen},Y=function(e){return e.snackbar.snackbarSuccessIsOpen},Q=function(e){return e.snackbar.snackbarSource},X={fetchNotes:function(){return function(){var e=Object(A.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x()),e.prev=1,e.next=4,D();case 4:n=e.sent,t(M(n)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(T(e.t0)),t(H.openSnackbarError(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},addNote:function(e,t){return function(n){function a(){return(a=Object(A.a)(U.a.mark((function a(){var r;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L(e,t);case 3:if(!(r=a.sent)){a.next=8;break}n(_(r)),a.next=9;break;case 8:throw new Error("error add item!");case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),h.a.isCancel(a.t0)?(console.log("Request add note canceled.",a.t0.message),n(T(a.t0))):(n(T(a.t0)),n(H.openSnackbarError(a.t0)));case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))).apply(this,arguments)}n(x()),n(H.openSnackbarSuccess(t)),setTimeout((function(){return a.apply(this,arguments)}),3e3)}},deleteNote:function(e,t){return function(n){function a(){return(a=Object(A.a)(U.a.mark((function a(){return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,z(e,t);case 3:if(!a.sent){a.next=8;break}n(j(e)),a.next=9;break;case 8:throw new Error("error delete item!");case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),h.a.isCancel(a.t0)?(console.log("Request delete note canceled.",a.t0.message),n(T(a.t0))):(n(T(a.t0)),n(H.openSnackbarError(a.t0)));case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))).apply(this,arguments)}n(x()),n(H.openSnackbarSuccess(t)),setTimeout((function(){return a.apply(this,arguments)}),3e3)}},updateNote:function(e){return function(){var t=Object(A.a)(U.a.mark((function t(n){var a;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x()),t.prev=1,t.next=4,P(e);case 4:if(a=t.sent,console.log("data: ",a),!a){t.next=10;break}n(w(e)),t.next=11;break;case 10:throw new Error("error update item!");case 11:t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),n(T(t.t0)),n(H.openSnackbarError(t.t0));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}},V=function(e){return e.notes.items},Z=function(e){return e.notes.error&&e.notes.error.message},G=function(e){return e.notes.loading},$={title:"",content:""},ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=Object(u.a)({},$),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(s.a)({},a,r))},n.handleSubmit=function(e){var t=n.props.addNote;e.preventDefault();var a=h.a.CancelToken.source();t(n.state,a),n.setState(Object(u.a)({},$))},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.content;return r.a.createElement(k,Object.assign({},this.props,{title:t,content:n,handleChange:this.handleChange,handleSubmit:this.handleSubmit}))}}]),t}(a.Component),te={addNote:X.addNote},ne=Object(l.b)(null,te)(ee),ae=n(27),re=n.n(ae),ce=function(e){var t=e.notes,n=void 0===t?[]:t,a=e.deleteNote,c=e.openModal,o=e.source;return r.a.createElement("div",{className:re.a.container},n.map((function(e){return r.a.createElement("div",{className:re.a.note,key:e.id},r.a.createElement("p",{className:re.a.noteTitle},e.title),r.a.createElement("p",null,e.content),r.a.createElement("hr",null),r.a.createElement("div",{className:re.a.btns},r.a.createElement("button",{className:re.a.delete,type:"button",onClick:function(){return c(e)}},"Update"),r.a.createElement("button",{className:re.a.delete,type:"button",onClick:function(){return a(e.id,o)}},"Delete")))})))},oe="modal/OPEN_MODAL",le="modal/CLOSE_MODAL",se={openModal:function(e){return{type:oe,payload:e}},closeModal:function(){return{type:le}}};var ue,ie=Object(I.combineReducers)({modalNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case oe:return a;case le:return null;default:return e}},isOpenModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case oe:return!0;case le:return!1;default:return e}}}),de=function(e){return e.modal.isOpenModal},pe=function(e){return e.modal.modalNote},me=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchNotes)(),ue=h.a.CancelToken.source()}},{key:"componentDidUpdate",value:function(){ue=h.a.CancelToken.source()}},{key:"render",value:function(){return r.a.createElement(ce,this.props)}}]),t}(a.Component),be={fetchNotes:X.fetchNotes,deleteNote:X.deleteNote,updateNote:X.updateNote,openModal:se.openModal},fe=Object(l.b)((function(e){return{notes:V(e),source:ue}}),be)(me),he=n(23),ve=n.n(he),Ee={id:null,title:"",content:""},ke=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state=Object(u.a)({},Ee),n.backdropRef=Object(a.createRef)(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(s.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.updateNote,r=t.closeModal;a(n.state),r(),n.setState(Object(u.a)({},Ee))},n.handleKeyPress=function(e){var t=n.props.closeModal;"Escape"===e.code&&t()},n.handleBackdropClick=function(e){var t=n.props.closeModal,a=n.backdropRef.current;a&&e.target!==a||t()},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.isOpenModal,n=e.modalNote,a=this.state.id;t&&n.id!==a&&this.setState(Object(u.a)({},n))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.content,a=this.props,c=a.isOpenModal,o=a.closeModal;return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("div",{className:ve.a.backdrop,ref:this.backdropRef,onClick:this.handleBackdropClick},r.a.createElement("div",{className:ve.a.modal},r.a.createElement("form",{className:ve.a.form,onSubmit:this.handleSubmit},r.a.createElement("h2",{className:ve.a.mainTitle},"Update Note"),r.a.createElement("input",{className:ve.a.title,name:"title",placeholder:"Title",required:!0,value:t,onChange:this.handleChange}),r.a.createElement("textarea",{className:ve.a.text,name:"content",placeholder:"Text",rows:"3",value:n,onChange:this.handleChange}),r.a.createElement("div",{className:ve.a.btns},r.a.createElement("button",{className:ve.a.btn,type:"button",onClick:o},"Cansel"),r.a.createElement("button",{className:ve.a.btn,type:"submit"},"Update"))))))}}]),t}(a.Component),ye={closeModal:se.closeModal,updateNote:X.updateNote},Oe=Object(l.b)((function(e){return{isOpenModal:de(e),modalNote:pe(e)}}),ye)(ke),Ne=n(114),ge=n(112),Se=n(36),Ce=n.n(Se),_e=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.snackbarMessage,n=e.handleClose,a=e.isOpenSnackbar;return r.a.createElement("div",null,r.a.createElement(Ne.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:a,autoHideDuration:2e3,onClose:n,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id",style:{color:"red"}},t),action:[r.a.createElement(ge.a,{key:"close","aria-label":"Close",color:"inherit",onClick:n},r.a.createElement(Ce.a,null))]}))}}]),t}(a.Component),je={handleClose:H.closeSnackbarError,handleClick:H.openSnackbarError},we=Object(l.b)((function(e){return{snackbarMessage:Z(e),isOpenSnackbar:J(e)}}),je)(_e),xe=n(113),Me=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleClose,n=e.isOpenSnackbar,a=e.source;return r.a.createElement("div",null,r.a.createElement(Ne.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:n,autoHideDuration:2e3,onClose:t,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id",style:{color:"green",fontSize:"16px"}},"You can cancel the operation"),action:[r.a.createElement(xe.a,{key:"undo",color:"primary",size:"medium",onClick:function(){return function(e,t){e.cancel("Operation canceled by the user."),t()}(a,t)}},"\u0421ancel operation"),r.a.createElement(ge.a,{key:"close","aria-label":"Close",color:"inherit",onClick:t},r.a.createElement(Ce.a,null))]}))}}]),t}(a.Component),Te={handleClose:H.closeSnackbarSuccess,handleClick:H.openSnackbarSuccess},Re=Object(l.b)((function(e){return{isOpenSnackbar:Y(e),source:Q(e)}}),Te)(Me),Ue=Object(l.b)((function(e){return{isLoading:G(e)}}))((function(e){var t=e.isLoading;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))))}));var Ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null),r.a.createElement(fe,null),r.a.createElement(Oe,null),r.a.createElement(we,null),r.a.createElement(Re,null),r.a.createElement(Ue,null))},De=n(52),Le=n(53),ze=n(54);var Pe=Object(I.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case S:return a.notes;case y:return[a].concat(Object(ze.a)(e));case O:return e.filter((function(e){return e.id!==a}));case N:return e.map((function(e){return e.id===a.id?a:e}));default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case g:return!0;case S:case C:case y:case N:case O:return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case g:return null;case C:return a;default:return e}}}),Be=Object(I.combineReducers)({modal:ie,notes:Pe,snackbar:W}),Ke=Object(I.applyMiddleware)(Le.a),Fe=Object(De.composeWithDevTools)(Ke),qe=Object(I.createStore)(Be,Fe);n(94);o.a.render(r.a.createElement(l.a,{store:qe},r.a.createElement(Ae,null)),document.querySelector("#root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.011ccfa1.chunk.js.map