(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},40:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),s=a.n(c),o=(a(39),a(40),a(10)),i=a(11),m=a(13),l=a(12),u=a(7),p=a(14),d=a(33),h=a(2),C=a.n(h),b=a(8),f=a(16),v=a(9),g=a.n(v),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).setListComics=Object(b.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://dinh-test-v1.herokuapp.com/comic");case 3:t=e.sent,a.setState({listComics:t.data.newDatas,openForm:!1,newComicName:"",newComicImage:"",newComicAuthor:"",newComicChapterOne:""}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),a.addComic=Object(b.a)(C.a.mark(function e(){var t,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""===a.state.newComicName||""===a.state.newComicImage||""===a.state.newComicAuthor||""===a.state.newComicChapterOne){e.next=13;break}return t={Name:a.state.newComicName,Image:a.state.newComicImage,Author:a.state.newComicAuthor,ChapterOne:a.state.newComicChapterOne},e.next=5,a.setState({newComic:t});case 5:return"https://dinh-test-v1.herokuapp.com/comic/add",e.next=8,g.a.post("https://dinh-test-v1.herokuapp.com/comic/add",{ComicInfo:a.state.newComic});case 8:n=e.sent,alert(n.data.message),a.setListComics(),e.next=14;break;case 13:alert("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert(e.t0.message);case 19:case"end":return e.stop()}},e,null,[[0,16]])})),a.removeComic=function(){var e=Object(b.a)(C.a.mark(function e(t){var n,r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://dinh-test-v1.herokuapp.com/comic/"+t,e.next=3,g.a.delete(n);case 3:r=e.sent,alert(r.data.message),a.setListComics();case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={listComics:[],openForm:!1,newComicName:"",newComicImage:"",newComicAuthor:"",newComicChapterOne:"",newComic:{Name:"",Image:"",Author:"",ChapterOne:""}},a.renderComic=a.renderComic.bind(Object(u.a)(a)),a.addComicForm=a.addComicForm.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.setListComics()}},{key:"renderComic",value:function(e){var t=this,a="/manager/"+e.id;return r.a.createElement("div",{className:"d-flex",style:{backgroundColor:"#dfe3ee",marginBottom:"10px",borderRadius:"5px"}},r.a.createElement("h3",{className:"text-success col-md",style:{margin:"10px"}},"Comic Name: "),r.a.createElement("h3",{className:"text col-md",style:{margin:"10px"}},e.name),r.a.createElement("div",{className:"btn-container col-md"},r.a.createElement(f.b,{to:a},r.a.createElement("button",{className:"btn btn-success",style:{margin:"10px"},onClick:function(){}},"See Chapter List")),r.a.createElement("button",{className:"btn btn-warning",style:{margin:"10px"},onClick:function(){return t.removeComic(e.id)}},"Remove Chapter")))}},{key:"addComicForm",value:function(){var e=this;return this.state.openForm?r.a.createElement("div",{className:"form-group word-from"},r.a.createElement("input",{placeholder:"T\xean Truy\u1ec7n",className:"form-control",onChange:function(t){return e.setState({newComicName:t.target.value})}}),r.a.createElement("input",{placeholder:"Link \u1ea3nh gi\u1edbi thi\u1ec7u",className:"form-control",onChange:function(t){return e.setState({newComicImage:t.target.value})}}),r.a.createElement("input",{placeholder:"Link chapter th\u1ee9 nh\u1ea5t",className:"form-control",onChange:function(t){return e.setState({newComicChapterOne:t.target.value})}}),r.a.createElement("input",{placeholder:"T\xe1c gi\u1ea3",className:"form-control",onChange:function(t){return e.setState({newComicAuthor:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{className:"btn btn-success",onClick:this.addComic},"Add comic"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.setState({openForm:!1})}},"Cancel"))):r.a.createElement("button",{className:"btn btn-success",style:{width:200,margin:10},onClick:function(){e.setState({openForm:!0})}},"Add Comic")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"word",style:{margin:"5%",width:"90%"}},this.addComicForm(),this.state.listComics.map(function(t){return e.renderComic(t)}))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).onLogin=Object(b.a)(C.a.mark(function e(){var t,n,r,c;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=a.state,n=t.txtUsername,r=t.txtPassword,"Admin"===n){e.next=6;break}alert("B\u1ea1n c\u1ea7n \u0111\u0103ng nh\u1eadp d\u01b0\u1edbi quy\u1ec1n admin"),e.next=11;break;case 6:return"https://dinh-test-v1.herokuapp.com/user/signin",e.next=9,g.a.post("https://dinh-test-v1.herokuapp.com/user/signin",{username:n,password:r});case 9:!0===(c=e.sent).data.success?(a.props.onLogin(),a.props.history.push("/manager")):alert(c.data.message);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0.message);case 16:case"end":return e.stop()}},e,null,[[0,13]])})),a.state={txtUsername:"",txtPassword:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("h3",null,"Sign In"),r.a.createElement("iframe",{src:"//adv-net.systems.vn/codes/banner?rcd=MjQ=",scrolling:"no",style:"width:728px; height:90px; border:0px; padding:0;overflow:hidden",allowtransparency:"true"})),r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Sign In")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fa fa-user"}))),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"username",onChange:function(t){return e.setState({txtUsername:t.target.value})}})),r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fa fa-key"}))),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"password",onChange:function(t){return e.setState({txtPassword:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(f.b,{to:"/manager"},r.a.createElement("button",{className:"btn btn-success float-right",onClick:this.onLogin},"Login"))))))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).setListComics=Object(b.a)(C.a.mark(function e(){var t,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://dinh-test-v1.herokuapp.com/comic/"+a.props.match.params.idcomic,e.next=4,g.a.get(t);case 4:n=e.sent,a.setState({listChapters:n.data.newDatas.Chapters,openForm:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])})),a.editChapter=Object(b.a)(C.a.mark(function e(){var t,n,r,c,s;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=a.state,n=t.newOrder,r=t.newLink,""===n||""===r){e.next=11;break}return c="https://dinh-test-v1.herokuapp.com/comic/add/"+a.props.match.params.idcomic,e.next=6,g.a.put(c,{order:n,link:r});case 6:s=e.sent,alert(s.data.message),a.setListComics(),e.next=12;break;case 11:alert("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert(e.t0.message);case 17:case"end":return e.stop()}},e,null,[[0,14]])})),a.state={listChapters:[],openForm:!1,newOrder:"",newLink:""},a.renderChapters=a.renderChapters.bind(Object(u.a)(a)),a.addChapterForm=a.addChapterForm.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.setListComics()}},{key:"renderChapters",value:function(e){var t=this;return r.a.createElement("div",{className:"d-flex",style:{backgroundColor:"#dfe3ee",marginBottom:"10px",borderRadius:"5px"}},r.a.createElement("h5",{className:"text-success col-md-2",style:{margin:"10px"}},"Chapter: ",e.Chapter),r.a.createElement("h5",{className:"text col-md-7",style:{margin:"10px"}},e.Link),r.a.createElement("div",{className:"btn-container col-md-3"},r.a.createElement("button",{className:"btn btn-success",style:{margin:"10px"},onClick:function(){t.setState({openForm:!0,newOrder:e.Chapter})}},"Edit Chapter Link")))}},{key:"addChapterForm",value:function(){var e=this;return this.state.openForm?r.a.createElement("div",{className:"form-group word-from"},r.a.createElement("input",{placeholder:"Chapter",className:"form-control",value:this.state.newOrder,onChange:function(t){return e.setState({newOrder:t.target.value})}}),r.a.createElement("input",{placeholder:"Link Chapter",className:"form-control",value:this.state.newLink,onChange:function(t){return e.setState({newLink:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{className:"btn btn-success",onClick:this.editChapter},"Add comic"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.setState({openForm:!1})}},"Cancel"))):r.a.createElement("button",{className:"btn btn-success",style:{width:200,margin:10},onClick:function(){e.setState({openForm:!0,newOrder:""})}},"Add Comic")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"word",style:{margin:"5%",width:"90%"}},this.addChapterForm(),this.state.listChapters.map(function(t){return e.renderChapters(t)}))}}]),t}(n.Component),x=a(15);function N(e){var t=e.component,a=e.data,n=Object(d.a)(e,["component","data"]);return r.a.createElement(x.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(x.a,{to:{pathname:"/",state:{from:e.location}}})}}))}var O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={isAuthenticated:!1},a.onLogin=a.onLogin.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onLogin",value:function(){this.setState({isAuthenticated:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement(x.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(E,Object.assign({},t,{onLogin:e.onLogin}))}}),r.a.createElement(N,{exact:!0,path:"/manager",component:w,data:this.state.isAuthenticated}),r.a.createElement(N,{path:"/manager/:idcomic",component:k,data:this.state.isAuthenticated}),";")}}]),t}(n.Component);var y=function(){return r.a.createElement(O,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.e47caba0.chunk.js.map