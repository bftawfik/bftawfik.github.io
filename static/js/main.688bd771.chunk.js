(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){},32:function(e,t,a){e.exports=a(58)},38:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),s=a.n(c);a(38),a(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(3),l=a(4),i=a(6),p=a(5),u=a(7),m=a(59),h=a(31),f=a(61),d=a(28),E=a.n(d),g=a(30),b=a.n(g),j=a(60),v=a(9),O=a.n(v),k=a(2),N=a.n(k),y=(a(43),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{className:"BftHeader"},r.a.createElement(N.a,{xl:"12",className:"logo"},r.a.createElement(j.a,{to:"/",activeClassName:"selected"})))}}]),t}(n.Component)),x=(a(48),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{className:"BftNav"},r.a.createElement(N.a,{md:"4",sm:"12"},r.a.createElement(j.a,{exact:!0,to:"/",activeClassName:"selected"},r.a.createElement("h4",{className:"navLink"},"Home"))),r.a.createElement(N.a,{md:"4",sm:"12"},r.a.createElement(j.a,{to:"/portfolio",activeClassName:"selected"},r.a.createElement("h4",{className:"navLink"},"Portfolio"))),r.a.createElement(N.a,{md:"4",sm:"12"},r.a.createElement(j.a,{to:"/infoandcontact",activeClassName:"selected"},r.a.createElement("h4",{className:"navLink"},"Info & Contact"))))}}]),t}(n.Component)),C=(a(49),a(50),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t="",a="";return this.props.quotesList&&(e=Math.floor(Math.random()*this.props.quotesList.length),t=this.props.quotesList[e].body,a=this.props.quotesList[e].owner),r.a.createElement("div",{className:"BftQuote"},r.a.createElement("h4",{className:"header"},"Inspirational Quotes:"),r.a.createElement("h3",{className:"opening"},"\u201c"),r.a.createElement("h4",null,t),a.length>0?r.a.createElement("p",null,'"',a,'"'):null,r.a.createElement("h3",{className:"closing"},"\u201d"))}}]),t}(n.Component)),D=a(12),L=(a(26),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).state={loadingMsgs:["Loading","Loading.","Loading..","Loading..."],loadingMsgId:0},setInterval(function(){this.setState({loadingMsgId:this.getNewLoadingMsgId(this.state.loadingMsgId,this.state.loadingMsgs.length)})}.bind(Object(D.a)(Object(D.a)(a))),500),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getNewLoadingMsgId",value:function(e,t){return(e+1)%t}},{key:"render",value:function(){return r.a.createElement(O.a,{className:"BftFooter"},r.a.createElement(N.a,{xl:"12",className:"logo"},r.a.createElement("p",null,r.a.createElement("sub",null,this.state.loadingMsgs[this.state.loadingMsgId]))))}}]),t}(n.Component)),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{className:"BftBio"},this.props.pageData?null:r.a.createElement(N.a,{xl:"12"},r.a.createElement(L,null)),r.a.createElement(N.a,{xl:"12"},this.props.pageData?this.props.pageData.bio.map(function(e,t){return r.a.createElement("p",{key:t},e)}):null),r.a.createElement(N.a,{xl:"12"},this.props.pageData?r.a.createElement(C,{quotesList:this.props.pageData.quotes}):null))}}]),t}(n.Component),I=(a(51),a(52),function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BftProject",onClick:this.props.resetProjectsState},r.a.createElement("div",{className:this.props.isActive?"projectOverlay":"projectOverlay hided"},r.a.createElement("div",{className:"projectOverlayData"},r.a.createElement("h4",null,this.props.data.title),r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"externalLinks"},this.props.data.externalLinks.liveVersion?r.a.createElement("a",{href:this.props.data.externalLinks.liveVersion,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"Live Version")):null,this.props.data.externalLinks.github?r.a.createElement("a",{href:this.props.data.externalLinks.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"Github Repository")):null),r.a.createElement("div",{className:"tags"},this.props.data.tags.map(function(e,t){return r.a.createElement("span",{key:t},r.a.createElement(j.a,{to:"/portfolio/"+e.toLowerCase(),activeClassName:"selected"},e))}))))),r.a.createElement("div",{className:"projectData"},r.a.createElement("h4",null,this.props.data.title),r.a.createElement("img",{className:"projectImg-xl",src:this.props.data.projectImgPath+"/8-line-height.jpg",alt:this.props.data.projectImgPath}),r.a.createElement("img",{className:"projectImg-sm",src:this.props.data.projectImgPath+"/5-line-height.jpg",alt:this.props.data.projectImgPath}),r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"tags"},this.props.data.tags.map(function(e,t){return r.a.createElement("span",{key:t},r.a.createElement(j.a,{to:"/portfolio/"+e.toLowerCase(),activeClassName:"selected"},e))})),r.a.createElement("div",{className:"externalLinks"},this.props.data.externalLinks.liveVersion?r.a.createElement("a",{href:this.props.data.externalLinks.liveVersion,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,r.a.createElement("img",{src:"/img/icons/live.png",alt:"live link icon"}))):null,this.props.data.externalLinks.github?r.a.createElement("a",{href:this.props.data.externalLinks.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,r.a.createElement("img",{src:"/img/icons/projectGithub.png",alt:"github icon"}))):null))))}}]),t}(n.Component)),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).state={projectsState:"k"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.pageData?e.match.params.filter?e.pageData.projects.filter(function(t){return t.tags.filter(function(t){return t.toLowerCase()===e.match.params.filter.toLowerCase()}).length>0}):e.pageData.projects:[];t.sort(function(e,t){return e.order-t.order});var a=t.map(function(e){return{isActive:!1}});this.setState({projectsState:a})}},{key:"render",value:function(){var e=this,t=this.props.pageData?this.props.match.params.filter?this.props.pageData.projects.filter(function(t){return t.tags.filter(function(t){return t.toLowerCase()===e.props.match.params.filter.toLowerCase()}).length>0}):this.props.pageData.projects:[];t.sort(function(e,t){return e.order-t.order});var a=this.props.pageData?this.props.pageData.projects.map(function(e){return e.tags}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return 0===e.filter(function(e){return e===t}).length?e.concat(t):e},[]):[];return r.a.createElement(O.a,{className:"BftAllProjects"},0===t.length?r.a.createElement(N.a,{xl:"12"},r.a.createElement(L,null)):null,r.a.createElement(N.a,{xs:12,className:"filter"},r.a.createElement("h5",null,"Filter:")),r.a.createElement(N.a,{xs:12,className:"allTags"},a.map(function(e,t){return r.a.createElement("span",{key:t},r.a.createElement(j.a,{to:"/portfolio/"+e.toLowerCase(),activeClassName:"selected"},e))})),t.map(function(t,a){return r.a.createElement(N.a,{lg:"6",md:"12",key:a},r.a.createElement(I,{data:t,resetProjectsState:e.resetProjectsState.bind(e,a),isActive:e.state.projectsState[a].isActive}))}),this.props.match.params.filter?r.a.createElement(N.a,{xl:"12",className:"backLink"},r.a.createElement(j.a,{to:"/portfolio"},r.a.createElement("h4",null,r.a.createElement("img",{src:"../img/icons/back.png",alt:"back button"}),"Back to Portofolio"))):null)}},{key:"resetProjectsState",value:function(e){var t=this.state.projectsState.map(function(t,a){return{isActive:e==a}});this.setState({projectsState:t})}}]),t}(n.Component),S=(a(53),a(54),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{className:"BftInfo"},r.a.createElement(N.a,{xl:"12"},r.a.createElement("h4",null,this.props.infoData?this.props.infoData.name:"")),r.a.createElement(N.a,{xl:"12"},this.props.infoData?this.props.infoData.data.map(function(e,t){return r.a.createElement("p",{key:t},e)}):""),r.a.createElement(N.a,{xl:"12"},r.a.createElement("a",{href:this.props.infoData?this.props.infoData.resume:""},r.a.createElement("h4",null,"Resume (C.V.)"))))}}]),t}(n.Component)),P=(a(55),a(56),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:this.props.data.link,alt:this.props.data.label,target:"_blank",rel:"noopener noreferrer",className:"BftSingleContact"},r.a.createElement("img",{src:this.props.data.icon,alt:this.props.data.label}),r.a.createElement("p",null,this.props.data.label))}}]),t}(n.Component)),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{className:"BftContacts"},this.props.contactsData?this.props.contactsData.map(function(e,t){return console.log(t),r.a.createElement(N.a,{xl:"12",key:t,className:"contactsGroups"},r.a.createElement(O.a,null,e.map(function(e,a){return 2!==t?r.a.createElement(N.a,{md:"6",key:a},r.a.createElement(P,{data:e})):r.a.createElement(N.a,{xl:"12",key:a},r.a.createElement(P,{data:e}))})))}):"")}}]),t}(n.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{className:"BftInfoAndContact"},this.props.pageData?null:r.a.createElement(N.a,{xl:"12"},r.a.createElement(L,null)),r.a.createElement(N.a,{xl:"12"},r.a.createElement(S,{infoData:this.props.pageData?this.props.pageData.info:null})),r.a.createElement(N.a,{xl:"12"},r.a.createElement(M,{contactsData:this.props.pageData?this.props.pageData.contactsGroups:null})))}}]),t}(n.Component),q=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{className:"BftFooter"},r.a.createElement(N.a,{xl:"12",className:"logo"},r.a.createElement("p",null,r.a.createElement("sub",null,"\xa9 2019 bftawfik.github.io All Rights Reserved"))))}}]),t}(n.Component),R=function(e){var t=e.location;return r.a.createElement("div",{className:"whoops-404"},r.a.createElement("h1",null,"Whoops, route not found"),r.a.createElement("p",null,"Cannot find content for ",t.pathname))},V=(a(57),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).state={pages:{}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){fetch("https://bftawfik-github-io.herokuapp.com/",{url:"",method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*"},body:null}).then(function(e){return e.text()}).then(function(e){this.setState({pages:JSON.parse(e)})}.bind(this)).catch(function(e){console.log("Request failed",e)})}},{key:"render",value:function(){var e=this,t=E()();return r.a.createElement(m.a,{history:t},r.a.createElement(b.a,{className:"App"},r.a.createElement(h.a,{exact:!0,path:"*",component:y}),r.a.createElement(h.a,{exact:!0,path:"*",component:x}),r.a.createElement(f.a,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(w,Object.assign({},t,{pageData:e.state.pages.home}))}}),r.a.createElement(h.a,{exact:!0,path:"/portfolio",render:function(t){return r.a.createElement(B,Object.assign({},t,{pageData:e.state.pages.portfolio}))}}),r.a.createElement(h.a,{exact:!0,path:"/portfolio/:filter",render:function(t){return r.a.createElement(B,Object.assign({},t,{pageData:e.state.pages.portfolio}))}}),r.a.createElement(h.a,{exact:!0,path:"/infoandcontact",render:function(t){return r.a.createElement(A,Object.assign({},t,{pageData:e.state.pages.infoandcontact}))}}),r.a.createElement(h.a,{component:R})),r.a.createElement(h.a,{exact:!0,path:"*",component:q})))}}]),t}(n.Component));s.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.688bd771.chunk.js.map