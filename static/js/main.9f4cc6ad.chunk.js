(this["webpackJsonpemployee-d"]=this["webpackJsonpemployee-d"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('["affenpinscher","african","airedale","akita","appenzeller","australian","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","buhund","bulldog","bullterrier","cairn","cattledog","chihuahua","chow","clumber","cockapoo","collie","coonhound","corgi","cotondetulear","dachshund","dalmatian","dane","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","finnish","frise","germanshepherd","greyhound","groenendael","havanese","hound","husky","keeshond","kelpie","komondor","kuvasz","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mix","mountain","newfoundland","otterhound","ovcharka","papillon","pekinese","pembroke","pinscher","pitbull","pointer","pomeranian","poodle","pug","puggle","pyrenees","redbone","retriever","ridgeback","rottweiler","saluki","samoyed","schipperke","schnauzer","setter","sheepdog","shiba","shihtzu","spaniel","springer","stbernard","terrier","vizsla","waterdog","weimaraner","whippet","wolfhound"]')},32:function(e,a,n){e.exports=n(60)},37:function(e,a,n){},60:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(23),s=n.n(i),c=(n(37),n(8)),l=n(6);var o=function(){var e=Object(l.e)();return r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/",className:"/"===e.pathname?"nav-link active":"nav-link"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/discover",className:"/discover"===e.pathname?"nav-link active":"nav-link"},"Discover")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/search",className:"/search"===e.pathname?"nav-link active":"nav-link"},"Search")))},u=n(26),m=n(27),d=n(31),h=n(30),p=n(28),b=n(29),v=n.n(b),f=function(e){return v.a.get("https://dog.ceo/api/breed/".concat(e,"/images"))},g=function(e){Object(d.a)(n,e);var a=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={search:"",results:[]},e.handleSearch=function(a){a.preventDefault(),f(e.state.search).then((function(a){return e.setState({results:a.data.message})})).catch((function(e){return console.log(e)}))},e.handleChange=function(a){e.setState({search:a.target.value})},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Search Page"),r.a.createElement("form",null,r.a.createElement("label",{for:"breeds"},"Choose a breed:"),r.a.createElement("select",{id:"breed",name:"breeds",onChange:this.handleChange},p.map((function(e){return r.a.createElement("option",{value:e},e)}))),r.a.createElement("button",{className:"btn btn-success",onClick:this.handleSearch},"Search")),r.a.createElement("div",{className:"container"},this.state.results.map((function(e){return r.a.createElement("img",{src:e})}))))}}]),n}(r.a.Component);var E=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"),r.a.createElement("p",null,"Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at."))};var k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Discover Page"),r.a.createElement("p",null,"Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at."))};var w=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(l.a,{exact:!0,path:"/",component:E}),r.a.createElement(l.a,{exact:!0,path:"/search",component:g}),r.a.createElement(l.a,{exact:!0,path:"/discover",component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.9f4cc6ad.chunk.js.map