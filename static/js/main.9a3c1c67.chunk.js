(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/Alyssa.cc9d54e5.mp3"},function(e,t,a){e.exports=a.p+"static/media/Danica.a2b3a9fe.mp3"},function(e,t,a){e.exports=a.p+"static/media/Tony.90f91bee.mp3"},function(e,t,a){e.exports=a.p+"static/media/Iain.516b6b10.mp3"},function(e,t,a){e.exports=a.p+"static/media/Kelly.d1cefca8.mp3"},function(e,t,a){e.exports=a.p+"static/media/Sean.fc528c74.mp3"},function(e,t,a){e.exports=a.p+"static/media/Matt.11c93223.mp3"},function(e,t,a){e.exports=a.p+"static/media/Julia.7ca98825.mp3"},function(e,t,a){e.exports=a.p+"static/media/Mike.caab972b.mp3"},function(e,t,a){e.exports=a.p+"static/media/Sarah.99dcd355.mp3"},function(e,t,a){e.exports=a.p+"static/media/Dan.59720df6.mp3"},function(e,t,a){e.exports=a.p+"static/media/Allison.19531981.mp3"},function(e,t,a){e.exports=a.p+"static/media/Robbie.6df940b1.mp3"},function(e,t,a){e.exports=a.p+"static/media/Allie.800c0fa4.mp3"},function(e,t,a){e.exports=a.p+"static/media/Emma.0f6b9a7c.mp3"},function(e,t,a){e.exports=a.p+"static/media/Brendan.d28050e8.mp3"},function(e,t,a){e.exports=a.p+"static/media/Kevin.9b263cc0.mp3"},function(e,t,a){e.exports=a.p+"static/media/Ryan.b705bc6c.mp3"},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),s=a.n(r),c=(a(37),a(3)),i=a(4),o=a(7),m=a(5),u=a(2),d=a(6),h=(a(38),a(39),a(8)),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={lineup:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"createPlayers",value:function(e){return!0===e.selected?l.a.createElement("li",{key:e.key,className:e.gender,selected:e.selected,onClick:function(){return e.handleClick(e.name,e.gender,e.key,e.selected)}},e.name,l.a.createElement("span",{className:"fa fa-check","aria-hidden":"true"})):l.a.createElement("li",{key:e.key,className:e.gender,selected:e.selected,onClick:function(){return e.handleClick(e.name,e.gender,e.key,e.selected)}},e.name)}},{key:"render",value:function(){var e=this.props.entries.map(this.createPlayers);return l.a.createElement("div",{className:"roster"},l.a.createElement("h4",null,"Roster"),l.a.createElement("ul",{className:"theList"},e))}}]),t}(l.a.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).movePlayer=a.movePlayer.bind(Object(u.a)(a)),a.createPlayers=a.createPlayers.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"movePlayer",value:function(e,t){var a,n=0,l=this.props.entries,r=!0,s=!1,c=void 0;try{for(var i,o=l[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){if(e===i.value.name){a=n;break}n++}}catch(m){s=!0,c=m}finally{try{r||null==o.return||o.return()}finally{if(s)throw c}}a+t>=0&&a+t<=l.length&&this.arrayMove(l,a,a+t),this.props.sendLineup(l)}},{key:"arrayMove",value:function(e,t,a){var n=e[t];e.splice(t,1),e.splice(a,0,n)}},{key:"createPlayers",value:function(e){var t=this;return l.a.createElement("div",{className:"lineupCard row"},l.a.createElement("div",{className:"lineupSidebar col-xs-1"},l.a.createElement("div",{className:"lineupUp"},l.a.createElement("span",{className:"fa fa-caret-up",onClick:function(){return t.movePlayer(e.name,-1)}})),l.a.createElement("div",{className:"lineupDown"},l.a.createElement("span",{className:"fa fa-caret-down",onClick:function(){return t.movePlayer(e.name,1)}}))),l.a.createElement("div",{className:"col-xs-10"},l.a.createElement("li",{key:e.key,className:e.gender},e.name)))}},{key:"render",value:function(){for(var e=this.props.entries,t=[],a=0;a<e.length;a++)t[a]=this.createPlayers(e[a]);return l.a.createElement("div",{className:"lineup"},l.a.createElement("h4",null,"Lineup"),l.a.createElement("ul",{className:"lineupList"},t))}}]),t}(l.a.Component),p=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handlePlayerClick=a.handlePlayerClick.bind(Object(u.a)(a)),a.adjustLineup=a.adjustLineup.bind(Object(u.a)(a));var n=[{name:"Brendan",gender:"male",key:1,selected:!1,handleClick:a.handlePlayerClick},{name:"Julia",gender:"female",key:2,selected:!1,handleClick:a.handlePlayerClick},{name:"Mike",gender:"male",key:3,selected:!1,handleClick:a.handlePlayerClick},{name:"Alyssa",gender:"female",key:4,selected:!1,handleClick:a.handlePlayerClick},{name:"Matt",gender:"male",key:5,selected:!1,handleClick:a.handlePlayerClick},{name:"Kelly",gender:"female",key:6,selected:!1,handleClick:a.handlePlayerClick},{name:"Allison",gender:"female",key:7,selected:!1,handleClick:a.handlePlayerClick},{name:"Danica",gender:"female",key:8,selected:!1,handleClick:a.handlePlayerClick},{name:"Iain",gender:"male",key:9,selected:!1,handleClick:a.handlePlayerClick},{name:"Allie",gender:"female",key:10,selected:!1,handleClick:a.handlePlayerClick},{name:"Sean",gender:"male",key:11,selected:!1,handleClick:a.handlePlayerClick},{name:"Emma",gender:"female",key:12,selected:!1,handleClick:a.handlePlayerClick},{name:"Robbie",gender:"male",key:13,selected:!1,handleClick:a.handlePlayerClick},{name:"Sarah",gender:"female",key:14,selected:!1,handleClick:a.handlePlayerClick},{name:"Tony",gender:"male",key:15,selected:!1,handleClick:a.handlePlayerClick},{name:"Kevin",gender:"male",key:16,selected:!1,handleClick:a.handlePlayerClick},{name:"Ryan",gender:"male",key:17,selected:!1,handleClick:a.handlePlayerClick},{name:"Dan",gender:"male",key:19,selected:!1,handleClick:a.handlePlayerClick}];return a.state={name:"",gender:"",players:n,lineup:[],showNewPlayerModal:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(h.a)({},t,a))}},{key:"handleSubmit",value:function(e){var t={name:this.state.name,gender:this.state.gender,key:Date.now(),selected:!1,handleClick:this.handlePlayerClick};this.setState(function(e){return{players:e.players.concat(t)}}),e.preventDefault()}},{key:"handlePlayerClick",value:function(e,t,a,n){var l,r={name:e,gender:t,key:a},s=this.state.lineup,c=this.state.players,i=n,o=0;if(i){var m=!0,u=!1,d=void 0;try{for(var h,f=c[Symbol.iterator]();!(m=(h=f.next()).done);m=!0){var b=h.value;b.key===a&&(b.selected=!1)}}catch(x){u=!0,d=x}finally{try{m||null==f.return||f.return()}finally{if(u)throw d}}var p=!0,y=!1,E=void 0;try{for(var v,k=s[Symbol.iterator]();!(p=(v=k.next()).done);p=!0){v.value.key===a&&(i=!0,l=o),o++}}catch(x){y=!0,E=x}finally{try{p||null==k.return||k.return()}finally{if(y)throw E}}s.splice(l,1),this.setState(function(e){return{lineup:s,players:c}})}else{var g=!0,w=!1,N=void 0;try{for(var C,S=c[Symbol.iterator]();!(g=(C=S.next()).done);g=!0){var O=C.value;O.key===a&&(O.selected=!0)}}catch(x){w=!0,N=x}finally{try{g||null==S.return||S.return()}finally{if(w)throw N}}s.push(r),this.setState({lineup:s,players:c})}this.props.getLineup(s)}},{key:"adjustLineup",value:function(e){this.setState(function(){return{lineup:e}}),this.props.getLineup(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"RosterMain"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(b,{entries:this.state.lineup,sendLineup:this.adjustLineup})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(f,{entries:this.state.players}))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h3",null,"Add New Player to Roster"))),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",null,"Name:")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("input",{name:"name",type:"text",value:this.state.name,onChange:this.handleChange}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",null,"Gender:")),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",null,l.a.createElement("input",{name:"gender",type:"radio",value:"male",onChange:this.handleChange}),"Male")),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("label",null,l.a.createElement("input",{name:"gender",type:"radio",value:"female",onChange:this.handleChange}),"Female"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Submit"})))))))}}]),t}(l.a.Component),y=(a(12),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"createPlayers",value:function(e){return l.a.createElement("li",{key:e.key,className:e.gender},e.name)}},{key:"render",value:function(){var e=this,t=this.props.entries;if(t.length>2)var a=t[0].name,n=t[1].name,r=t[2].name;else a="-",n="-",r="-";return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-dark"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("button",{className:"btn btn-light btn-sm",onClick:function(t){return e.props.nextBatter()}},"Next Batter"))),l.a.createElement("td",{colSpan:"2"},"At Bat "),l.a.createElement("td",{colSpan:"2"},"On Deck"),l.a.createElement("td",{colSpan:"2"},"In The Hole")),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",{colSpan:"2"}," ",a),l.a.createElement("td",{colSpan:"2"}," ",n),l.a.createElement("td",{colSpan:"2"}," ",r)))))}}]),t}(l.a.Component)),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={inning:1,half:"top",homescore:0,awayscore:0,home:"Home",away:"Away",outs:0,scoreboard:[0," "," "," "," "," "," "," "," "," "," "," "," "," ",0,0]},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;"half"===t&&"top"===a&&this.setState(function(e){return{inning:e.inning+1,half:"top"}}),this.setState(Object(h.a)({},t,a))}},{key:"endhalf",value:function(e){var t,a=this.state.scoreboard;"top"===this.state.half?("next"===e&&(t=2*this.state.inning-1," "===a[t]&&(a[t]=0),this.setState(function(){return{half:"bottom",outs:0,scoreboard:a}})),"last"===e&&this.state.inning>1&&this.setState(function(e){return{half:"bottom",inning:e.inning-1,outs:0}})):("next"===e&&(t=2*this.state.inning," "===a[t]&&(a[t]=0),this.setState(function(e){return{half:"top",inning:e.inning+1,outs:0,scoreboard:a}})),"last"===e&&this.setState(function(){return{half:"top",outs:0}}))}},{key:"incrementScore",value:function(e){var t,a=this.state.scoreboard;"away"===e?(t=2*this.state.inning-2,a[t]+=1,this.setState(function(e){return{awayscore:e.awayscore+1,scoreboard:a}})):(t=2*this.state.inning-1," "===a[t]&&(a[t]=0),a[t]+=1,this.setState(function(e){return{homescore:e.homescore+1,scoreboard:a}}))}},{key:"decrementScore",value:function(e){var t=this;if("away"===e){var a=2*this.state.inning-2,n=this.state.scoreboard;n[a]-=1,this.setState(function(e){return{awayscore:e.awayscore-1,scoreboard:n}})}else this.setState(function(e){var a=2*t.state.inning-1,n=t.state.scoreboard;return n[a]-=1,{homescore:e.homescore-1,scoreboard:n}})}},{key:"addOut",value:function(){this.state.outs>=2?(this.endhalf("next"),this.setState(function(e){return{outs:0}})):this.setState(function(e){return{outs:e.outs+1}})}},{key:"nextBatter",value:function(){this.props.nextBatter()}},{key:"render",value:function(){var e=this,t="fa fa-caret-up";"bottom"===this.state.half&&(t="fa fa-caret-down");var a="<span class = 'fa fa-circle-o' aria-hidden='true'></span> <span class = 'fa fa-circle-o' aria-hidden='true'></span> <span class = 'fa fa-circle-o' aria-hidden='true'></span>";return 1===this.state.outs&&(a="<span class = 'fa fa-circle' aria-hidden='true'></span> <span class = 'fa fa-circle-o' aria-hidden='true'></span> <span class = 'fa fa-circle-o' aria-hidden='true'></span>"),this.state.outs>=2&&(a="<span class = 'fa fa-circle' aria-hidden='true'></span> <span class = 'fa fa-circle' aria-hidden='true'></span> <span class = 'fa fa-circle-o' aria-hidden='true'></span>"),l.a.createElement("div",{className:"scoreboard"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("table",{className:"greenTable"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,this.state.away),l.a.createElement("td",null,l.a.createElement("table",{className:"hiddenTable"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{rowSpan:"2"},this.state.awayscore),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:function(t){return e.incrementScore("away")}},l.a.createElement("span",{className:"fa fa-caret-up"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:function(t){return e.decrementScore("away")}},l.a.createElement("span",{className:"fa fa-caret-down"}))))))),l.a.createElement("th",{rowSpan:"2"},l.a.createElement("span",{className:t,"aria-hidden":"true",style:{color:"black"}}),this.state.inning,l.a.createElement("button",{className:"btn btn-secondary btn-sm",style:{margin:"5px"},onClick:function(t){return e.endhalf("last")}},l.a.createElement("span",{className:"fa fa-caret-left"})),l.a.createElement("button",{className:"btn btn-secondary btn-sm",style:{margin:"5px"},onClick:function(t){return e.endhalf("next")}},l.a.createElement("span",{className:"fa fa-caret-right"})))),l.a.createElement("tr",null,l.a.createElement("th",null,this.state.home),l.a.createElement("td",null,l.a.createElement("table",{className:"hiddenTable"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{rowSpan:"2"},this.state.homescore),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:function(t){return e.incrementScore("home")}},l.a.createElement("span",{className:"fa fa-caret-up"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:function(t){return e.decrementScore("home")}},l.a.createElement("span",{className:"fa fa-caret-down"})))))))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-7 offset-sm-2 scoreboardOuts"},l.a.createElement("p",null,"Out:  ",l.a.createElement("span",{dangerouslySetInnerHTML:{__html:a}}))),l.a.createElement("div",{className:"col-xs-3"},l.a.createElement("button",{className:"btn btn-danger",onClick:function(t){return e.addOut()}},"Out!"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(y,{entries:this.props.topOfOrder,nextBatter:this.props.nextBatter}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("table",{className:"table table-bordered scoreTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"2"),l.a.createElement("td",null,"3"),l.a.createElement("td",null,"4"),l.a.createElement("td",null,"5"),l.a.createElement("td",null,"6"),l.a.createElement("td",null,"7"),l.a.createElement("td",null),l.a.createElement("td",null,"R"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Away"),l.a.createElement("td",null,this.state.scoreboard[0]),l.a.createElement("td",null,this.state.scoreboard[2]),l.a.createElement("td",null,this.state.scoreboard[4]),l.a.createElement("td",null,this.state.scoreboard[6]),l.a.createElement("td",null,this.state.scoreboard[8]),l.a.createElement("td",null,this.state.scoreboard[10]),l.a.createElement("td",null,this.state.scoreboard[12]),l.a.createElement("td",null),l.a.createElement("td",null,this.state.awayscore)),l.a.createElement("tr",null,l.a.createElement("td",null,"Home"),l.a.createElement("td",null,this.state.scoreboard[1]),l.a.createElement("td",null,this.state.scoreboard[3]),l.a.createElement("td",null,this.state.scoreboard[5]),l.a.createElement("td",null,this.state.scoreboard[7]),l.a.createElement("td",null,this.state.scoreboard[9]),l.a.createElement("td",null,this.state.scoreboard[11]),l.a.createElement("td",null,this.state.scoreboard[13]),l.a.createElement("td",null),l.a.createElement("td",null,this.state.homescore))))))))}}]),t}(l.a.Component),v=a(9),k=a(1),g=a(14),w=a.n(g),N=a(15),C=a.n(N),S=a(16),O=a.n(S),x=a(17),j=a.n(x),P=a(18),H=a.n(P),A=a(19),L=a.n(A),M=a(20),B=a.n(M),T=a(21),G=a.n(T),R=a(22),D=a.n(R),I=a(23),K=a.n(I),J=a(24),W=a.n(J),F=a(25),_=a.n(F),z=a(26),U=a.n(z),$=a(27),q=a.n($),Q=a(28),V=a.n(Q),X=a(29),Y=a.n(X),Z=a(30),ee=a.n(Z),te=a(31),ae=a.n(te),ne=function(){function e(){Object(c.a)(this,e),k.Howler.html5PoolSize=20;var t=new k.Howl({src:[w.a],html5:!0}),a=new k.Howl({src:[C.a],html5:!0}),n=new k.Howl({src:[O.a],html5:!0}),l=new k.Howl({src:[j.a],html5:!0}),r=new k.Howl({src:[H.a],html5:!0}),s=new k.Howl({src:[L.a],html5:!0}),i=new k.Howl({src:[B.a],html5:!0}),o=new k.Howl({src:[G.a],html5:!0}),m=new k.Howl({src:[D.a]}),u=new k.Howl({src:[K.a],html5:!0}),d=new k.Howl({src:[W.a],html5:!0}),h=new k.Howl({src:[_.a]}),f=new k.Howl({src:[U.a],html5:!0}),b=new k.Howl({src:[q.a],html5:!0}),p=new k.Howl({src:[V.a]}),y=new k.Howl({src:[Y.a],html5:!0}),E=new k.Howl({src:[ee.a],html5:!0}),v=new k.Howl({src:[ae.a],html5:!0});this.sounds=new Map,this.sounds.set("Alyssa",t),this.sounds.set("Danica",a),this.sounds.set("Tony",n),this.sounds.set("Iain",l),this.sounds.set("Kelly",r),this.sounds.set("Sean",s),this.sounds.set("Matt",i),this.sounds.set("Julia",o),this.sounds.set("Mike",m),this.sounds.set("Sarah",u),this.sounds.set("Dan",d),this.sounds.set("Allison",h),this.sounds.set("Robbie",f),this.sounds.set("Allie",b),this.sounds.set("Emma",p),this.sounds.set("Brendan",y),this.sounds.set("Kevin",E),this.sounds.set("Ryan",v),this.howlTimeout=-1}return Object(i.a)(e,[{key:"playWalkup",value:function(e){var t;-1!==this.howlTimeout&&clearTimeout(this.howlTimeout);var a=!0,n=!1,l=void 0;try{for(var r,s=this.sounds[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var c=r.value,i=Object(v.a)(c,2),o=i[0],m=i[1];o!==e?m.stop():t=m}}catch(u){n=!0,l=u}finally{try{a||null==s.return||s.return()}finally{if(n)throw l}}void 0!==t&&(t.volume(1),t.play(),this.howlTimeout=setTimeout(function(){t.fade(1,0,5e3)},25e3))}},{key:"stopAll",value:function(){var e=!0,t=!1,a=void 0;try{for(var n,l=this.sounds[Symbol.iterator]();!(e=(n=l.next()).done);e=!0){var r=n.value,s=Object(v.a)(r,2);s[0];s[1].stop()}}catch(c){t=!0,a=c}finally{try{e||null==l.return||l.return()}finally{if(t)throw a}}}}]),e}(),le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={topOfOrder:[],currentOrder:[],maleOrder:[],femaleOrder:[],maleNext:0,femaleNext:0,flag:!0,doubleGender:"none",genderAtBat:"male",media:!0},a.getLineup=a.getLineup.bind(Object(u.a)(a)),a.triggerNext=a.triggerNext.bind(Object(u.a)(a)),a.setInitialGender=a.setInitialGender.bind(Object(u.a)(a)),a.setSiamese=a.setSiamese.bind(Object(u.a)(a)),a.walkupService=new ne,a.toggleMute=a.toggleMute.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getLineup",value:function(e){var t=[],a=[],n=!0,l=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var i=s.value;"male"===i.gender?t.push(i):a.push(i)}}catch(o){l=!0,r=o}finally{try{n||null==c.return||c.return()}finally{if(l)throw r}}this.setState(function(){return{maleOrder:t,femaleOrder:a}})}},{key:"setInitialGender",value:function(e){0===this.state.maleNext&&0===this.state.femaleNext&&(e.target.checked?this.setState(function(){return{genderAtBat:"female"}}):this.setState(function(){return{genderAtBat:"male"}}))}},{key:"setSiamese",value:function(e){this.setState(function(){return{doubleGender:e}})}},{key:"triggerNext",value:function(){var e=this.state.maleOrder,t=this.state.femaleOrder,a=e.length,n=t.length,l=a+n,r=this.state.maleNext,s=this.state.femaleNext,c=this.state.genderAtBat,i=[],o="male";this.state.flag&&this.setState(function(){return{flag:!1}});for(var m=r,u=s,d=c,h=0;h<l;h++)"female"===d?(i.push(t[u]),d=0!==(u=(u+1)%n)||this.state.flag||"female"!==this.state.doubleGender?"male":"female"):(i.push(e[m]),d=0!==(m=(m+1)%a)||this.state.flag||"male"!==this.state.doubleGender?"female":"male");var f=i;f.length>3&&(o=f[1].gender),"male"===c?r=(r+1)%a:"female"===c&&(s=(s+1)%n),this.setState(function(e){return{currentOrder:i,maleNext:r,femaleNext:s,topOfOrder:f.splice(0,3),genderAtBat:o}}),i.length>0&&this.state.media&&this.walkupService.playWalkup(i[0].name)}},{key:"toggleMute",value:function(){this.state.media?(this.walkupService.stopAll(),this.setState({media:!1})):this.setState({media:!0})}},{key:"render",value:function(){var e=this,t="btn btn-secondary btn-sm";"none"===this.state.doubleGender&&(t="btn btn-success btn-sm");var a="btn btn-secondary btn-sm";"male"===this.state.doubleGender&&(a="btn btn-success btn-sm");var n="btn btn-secondary btn-sm";"female"===this.state.doubleGender&&(n="btn btn-success btn-sm");var r="btn btn-secondary btn-sm";return this.state.media||(r="btn btn-danger btn-sm"),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header jumbotron"},l.a.createElement(E,{topOfOrder:this.state.topOfOrder,nextBatter:this.triggerNext})),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("h2",null,"Settings"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"3"},"Siamese Batters"),l.a.createElement("th",{colSpan:"4"},"Starting Gender"),l.a.createElement("th",null,"Mute"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{className:t,onClick:function(t){return e.setSiamese("none")}},"None")),l.a.createElement("td",null,l.a.createElement("button",{className:a,onClick:function(t){return e.setSiamese("male")}},"Male")),l.a.createElement("td",null,l.a.createElement("button",{className:n,onClick:function(t){return e.setSiamese("female")}},"Female")),l.a.createElement("td",null,l.a.createElement("span",{className:"toggleLabelLeft"},l.a.createElement("strong",null," M "))),l.a.createElement("td",{colSpan:"2"},l.a.createElement("div",{className:"toggle"},l.a.createElement("input",{type:"checkbox",className:"check",id:"genderToggle",onChange:this.setInitialGender}),l.a.createElement("b",{className:"b switch"}),l.a.createElement("b",{className:"b track"}))),l.a.createElement("td",null,l.a.createElement("span",{className:"toggleLabelRight"},l.a.createElement("strong",null," F "))),l.a.createElement("td",null,l.a.createElement("button",{className:r,onClick:function(t){return e.toggleMute()}},l.a.createElement("i",{className:"fa fa-volume-off"})))))))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement(p,{getLineup:this.getLineup})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[32,1,2]]]);
//# sourceMappingURL=main.9a3c1c67.chunk.js.map