(this["webpackJsonpfirebase-react-auth"]=this["webpackJsonpfirebase-react-auth"]||[]).push([[0],{40:function(e,t,a){e.exports=a(56)},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),u=a(12),o=a.n(u),s=a(14),i=a(6),m=a(62),p=a(61),d=a(60),b=a(58),E=a(24),f=a.n(E),g=(a(48),f.a.initializeApp({apiKey:"AIzaSyC9GvYqdDtJYriNl8jdeQVw9G_McblCKHM",authDomain:"gdsc-event-flutter.firebaseapp.com",databaseURL:"",projectId:"gdsc-event-flutter",storageBucket:"gdsc-event-flutter.appspot.com",messagingSenderId:"460653929489",appId:"1:460653929489:web:db55497dc32e8f1a593db0",measurementId:"G-297XQPWSTW"})),h=g.auth(),v=new f.a.auth.GoogleAuthProvider,w=r.a.createContext();function j(){return Object(n.useContext)(w)}function O(e){var t=e.children,a=Object(n.useState)(),c=Object(i.a)(a,2),l=c[0],u=c[1],o=Object(n.useState)(!0),s=Object(i.a)(o,2),m=s[0],p=s[1];Object(n.useEffect)((function(){return h.onAuthStateChanged((function(e){u(e),p(!1)}))}),[]);var d={currentUser:l,login:function(e,t){return h.signInWithEmailAndPassword(e,t)},signup:function(e,t){return h.createUserWithEmailAndPassword(e,t)},logout:function(){return h.signOut()},resetPassword:function(e){return h.sendPasswordResetEmail(e)},updateEmail:function(e){return l.updateEmail(e)},updatePassword:function(e){return l.updatePassword(e)}};return r.a.createElement(w.Provider,{value:d},!m&&t)}var x=a(5),y=a(8);function S(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=j().signup,l=Object(n.useState)(""),u=Object(i.a)(l,2),E=u[0],f=u[1],g=Object(n.useState)(!1),h=Object(i.a)(g,2),v=h[0],w=h[1],O=Object(x.g)();function S(){return(S=Object(s.a)(o.a.mark((function n(r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",f("Passwords do not match"));case 3:return n.prev=3,f(""),w(!0),n.next=8,c(e.current.value,t.current.value);case 8:O.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),f("Failed to create an account");case 14:w(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),E&&r.a.createElement(p.a,{variant:"danger"},E),r.a.createElement(d.a,{onSubmit:function(e){return S.apply(this,arguments)}},r.a.createElement(d.a.Group,{id:"email"},r.a.createElement(d.a.Label,null,"Email"),r.a.createElement(d.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(d.a.Group,{id:"password"},r.a.createElement(d.a.Label,null,"Password"),r.a.createElement(d.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(d.a.Group,{id:"password-confirm"},r.a.createElement(d.a.Label,null,"Password Confirmation"),r.a.createElement(d.a.Control,{type:"password",ref:a,required:!0})),r.a.createElement(b.a,{disabled:v,className:"w-100",type:"submit"},"Sign Up")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account? ",r.a.createElement(y.b,{to:"/login"},"Log In")))}var P=a(59);function N(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=j(),u=l.currentUser,d=l.logout,E=Object(x.g)();function f(){return(f=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,d();case 4:E.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Profile"),a&&r.a.createElement(p.a,{variant:"danger"},a),r.a.createElement("strong",null,"Email:")," ",u.email,r.a.createElement(y.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3"},"Update Profile"))),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(b.a,{variant:"link",onClick:function(){return f.apply(this,arguments)}},"Log Out")))}function C(e){return e.show?r.a.createElement(p.a,{variant:"success"},r.a.createElement(p.a.Heading,null,"GDSC r\u1ea5t vui \u0111\u01b0\u1ee3c g\u1eb7p b\u1ea1n"),r.a.createElement("p",null,"B\u1ea1n \u0111\xe3 \u0111i\u1ec3m danh th\xe0nh c\xf4ng"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"})):null}function k(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useRef)(),u=Object(n.useRef)(),p=j().login,E=Object(n.useState)(""),f=Object(i.a)(E,2),g=(f[0],f[1]),w=Object(n.useState)(!1),O=Object(i.a)(w,2),S=O[0],P=O[1],N=Object(x.g)();function k(){return(k=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,g(""),P(!0),e.next=6,p(l.current.value,u.current.value);case 6:N.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),g("Failed to log in");case 12:P(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Log In"),r.a.createElement(C,{show:a}),r.a.createElement(d.a,{onSubmit:function(e){return k.apply(this,arguments)}},r.a.createElement(d.a.Group,{id:"email"},r.a.createElement(d.a.Label,null,"Email"),r.a.createElement(d.a.Control,{type:"email",ref:l,required:!0})),r.a.createElement(d.a.Group,{id:"password"},r.a.createElement(d.a.Label,null,"Password"),r.a.createElement(d.a.Control,{type:"password",ref:u,required:!0})),r.a.createElement(b.a,{disabled:S,className:"w-100",type:"submit"},"Log In")),r.a.createElement(b.a,{disabled:S,className:"w-100 mt-1 bg-danger",type:"submit",onClick:function(){h.signInWithPopup(v).then((function(e){c(!0)})).catch((function(e){}))}},"LogIn With Google"),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(y.b,{to:"/forgot-password"},"Forgot Password?")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",r.a.createElement(y.b,{to:"/signup"},"Sign Up")))}var I=a(38);function G(e){var t=e.component,a=Object(I.a)(e,["component"]),n=j().currentUser;return r.a.createElement(x.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(x.a,{to:"/login"})}}))}var L=function(){return r.a.createElement(P.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement("div",{className:"w-100",style:{maxWidth:"400px"}},r.a.createElement(y.a,null,r.a.createElement(O,null,r.a.createElement(x.d,null,r.a.createElement(G,{path:"/",exact:!0,component:N}),r.a.createElement(x.b,{path:"/signup",exact:!0,component:S}),r.a.createElement(x.b,{path:"/login",exact:!0,component:k}),r.a.createElement(x.b,{exact:!0,path:"/*",component:function(){window.location.href="/login"}}))))))};a(55);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5124c01f.chunk.js.map