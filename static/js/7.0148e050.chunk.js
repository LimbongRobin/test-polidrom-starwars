(this["webpackJsonptesting-fetch-data"]=this["webpackJsonptesting-fetch-data"]||[]).push([[7],{100:function(e,t,a){"use strict";a.r(t);var l=a(49),n=a.n(l),i=a(50),s=a(14),r=a(15),c=a(18),o=a(17),d=a(0),m=a.n(d),u=a(82),E=a(83),h=a(84),p=a(96),v=(a(64),a(65)),b=a.n(v),D={getAllMovies:function(){return b.a.get("https://swapi.dev/api/films/",{headers:{"Content-Type":"application/json"}},{mode:"no-corse"})}},f=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).handleSearch=function(){var e=Object(i.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.target.value.length>2)){e.next=15;break}return e.prev=2,e.next=5,D.getAllMovies();case 5:a=e.sent,console.log(a.data.results),l.setState({arrData:a.data.results}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),l.setState({arrData:[]});case 13:e.next=16;break;case 15:l.setState({arrData:[]});case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),l.handleDetailMovie=function(e){var t=l.state.arrData.find((function(t){return String(t.episode_id)===e.target.id}));console.log(t),void 0!==t&&l.setState({objDetail:t})},l.state={arrData:[],objDetail:{},category:"Name "},l}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.objDetail),m.a.createElement(d.Fragment,null,m.a.createElement("div",{className:"main-body"},m.a.createElement("div",{className:"right-side"},m.a.createElement(u.a,null,m.a.createElement("div",{className:""},m.a.createElement(E.a,null,m.a.createElement(u.a,null,Object.keys(this.state.objDetail).length>0&&m.a.createElement("div",{className:"cover-data"},m.a.createElement(h.a,{xs:"12"},m.a.createElement(E.a,null,m.a.createElement(h.a,null," Description ")),m.a.createElement(E.a,null,m.a.createElement(h.a,{xs:"2",className:"detail-title"},"Title"),m.a.createElement(h.a,{xs:"10",id:"title"},this.state.objDetail.title)),m.a.createElement(E.a,null,m.a.createElement(h.a,{xs:"2",className:"detail-title"},"Directore"),m.a.createElement(h.a,{xs:"10",id:"directore"},this.state.objDetail.director)),m.a.createElement(E.a,null,m.a.createElement(h.a,{xs:"2",className:"detail-title"},"Last Edite"),m.a.createElement(h.a,{xs:"10",id:"edited"},void 0!==this.state.objDetail.edited?this.state.objDetail.edited.slice(0,10):this.state.objDetail.edited)),m.a.createElement(E.a,null,m.a.createElement(h.a,{xs:"2",className:"detail-title"},"Created"),m.a.createElement(h.a,{xs:"10",id:"created"},void 0!==this.state.objDetail.created?this.state.objDetail.created.slice(0,10):this.state.objDetail.created)),m.a.createElement(E.a,null,m.a.createElement(h.a,{xs:"2",className:"detail-title"},"Episode"),m.a.createElement(h.a,{xs:"10",id:"episode_id"},this.state.objDetail.episode_id)),m.a.createElement(E.a,null,m.a.createElement(h.a,{xs:"2",className:"detail-title"},"Description"),m.a.createElement(h.a,{xs:"10",id:"opening"},this.state.objDetail.opening_crawl))))))))),m.a.createElement("div",{className:"left-side"},m.a.createElement(u.a,null,m.a.createElement("div",{className:""},m.a.createElement(E.a,null,m.a.createElement(h.a,null,m.a.createElement(p.a,{type:"text",name:"search",placeholder:"Search...",onChange:function(t){return e.handleSearch(t)}}))),m.a.createElement(E.a,null,m.a.createElement(u.a,{className:"list-data"},m.a.createElement(h.a,{xs:"12"},this.state.arrData.map((function(t,a){return m.a.createElement(E.a,{key:a,onClick:function(t){return e.handleDetailMovie(t)},className:"row-of-list"},m.a.createElement(h.a,{xs:"3",className:"title",id:t.episode_id},e.state.category+" "+t.episode_id),m.a.createElement(h.a,{xs:"9",className:"title",id:t.episode_id},t.title))}))))))))))}}]),a}(d.Component);t.default=f},64:function(e,t,a){}}]);
//# sourceMappingURL=7.0148e050.chunk.js.map