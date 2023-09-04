(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var r,c,a=n(0),o=n(51),i=n.n(o),u=n(12),s=n(3),l=n(73),d=n.n(l),j=n(25),b=n(35),h=n(31),O=n(63),f=n.n(O),m=n(62),p=n(5),g=Object(m.a)(h.b)(r||(r=Object(b.a)(["\n  color: white;\n\n  &.active {\n    color: orange;\n  }\n"]))),x=function(){return Object(p.jsxs)("div",{className:f.a.container,children:[Object(p.jsx)(g,{className:f.a.link,to:"/register",children:"Register"}),Object(p.jsx)(g,{className:f.a.link,to:"/login",children:"Log In"})]})},v=function(){var e=Object(u.e)(j.b);return Object(p.jsxs)("nav",{children:[Object(p.jsx)(g,{className:d.a.link,to:"/",children:"Home"}),e&&Object(p.jsx)(g,{className:d.a.link,to:"/contacts",children:"Contacts"})]})},y=n(74),k=n.n(y),T=n(54),_=n(143),C=function(){var e=Object(u.d)(),t=Object(u.e)(j.c);return Object(p.jsxs)("div",{className:k.a.wrapper,children:[Object(p.jsxs)("p",{className:k.a.username,children:["Welcome, ",t.name]}),Object(p.jsx)(_.a,{type:"button",variant:"contained",onClick:function(){return e(Object(T.b)())},children:"Logout"})]})},U=n(91),A=n.n(U),N=function(){var e=Object(u.e)(j.b);return Object(p.jsxs)("header",{className:A.a.header,children:[Object(p.jsx)(v,{}),e?Object(p.jsx)(C,{}):Object(p.jsx)(x,{})]})},S=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(N,{}),Object(p.jsx)(a.Suspense,{fallback:null,children:Object(p.jsx)(s.b,{})})]})},w=function(e){var t=e.component,n=e.redirectTo,r=void 0===n?"/":n;return Object(u.e)(j.b)?Object(p.jsx)(s.a,{to:r}):t},P=function(e){var t=e.component,n=e.redirectTo,r=void 0===n?"/":n;return Object(u.e)(j.b)?t:Object(p.jsx)(s.a,{to:r})},q=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,230))})),I=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,231))})),L=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,241))})),M=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(5)]).then(n.bind(null,246))})),z=function(){return Object(p.jsx)(s.e,{children:Object(p.jsxs)(s.c,{path:"/",element:Object(p.jsx)(S,{}),children:[Object(p.jsx)(s.c,{index:!0,element:Object(p.jsx)(q,{})}),Object(p.jsx)(s.c,{path:"/register",element:Object(p.jsx)(w,{redirectTo:"/contacts",component:Object(p.jsx)(I,{})})}),Object(p.jsx)(s.c,{path:"/login",element:Object(p.jsx)(w,{redirectTo:"/contacts",component:Object(p.jsx)(L,{})})}),Object(p.jsx)(s.c,{path:"/contacts",element:Object(p.jsx)(P,{redirectTo:"/login",component:Object(p.jsx)(M,{})})}),Object(p.jsx)(s.c,{path:"*",element:Object(p.jsx)(s.a,{to:"/",replace:!0})})]})})},E=n(92),F=n(7),Q=n(20),B=n(4),D=n(85),H=n(19),R=n(43),J=n(30),K=n(94),W={key:"auth",version:1,storage:n.n(K).a,blacklist:[R.a.reducerPath,"filter"]},G=Object(Q.b)((c={},Object(F.a)(c,R.a.reducerPath,R.a.reducer),Object(F.a)(c,"filter",D.a),Object(F.a)(c,"auth",T.a),c)),X=Object(J.g)(W,G),Y=Object(B.b)({reducer:X,middleware:function(e){return e({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}}).concat(R.a.middleware)}}),V=Object(J.h)(Y);Object(H.e)(Y.dispatch);n(111),n(112),n(113),n(114),n(115),n(116);var Z=n(95),$=n(15),ee=(n(117),Object(Z.a)({typography:{fontFamily:"Roboto, sans-serif"}}));i.a.render(Object(p.jsx)($.c,{theme:ee,children:Object(p.jsx)(u.a,{store:Y,children:Object(p.jsx)(E.a,{loading:null,persistor:V,children:Object(p.jsx)(h.a,{basename:"/goit-react-hw-08-phonebook",children:Object(p.jsx)(z,{})})})})}),document.getElementById("root"))},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a}));var r=function(e){return e.filter},c=function(e){return e.auth.user},a=function(e){return e.auth.isLoggedIn}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return l}));var r=n(93),c=n(19),a=Object(r.a)({reducerPath:"contacts",baseQuery:Object(c.d)({baseUrl:"https://connections-api.herokuapp.com",prepareHeaders:function(e,t){var n=t.getState;console.log("getState()"),console.log(n());var r=n().auth?n().auth.token:null;return r&&e.set("authorization","Bearer ".concat(r)),e}}),tagTypes:["Contacts","User"],endpoints:function(e){return{fetchAll:e.query({query:function(){return"/contacts"},providesTags:["Contacts"],keepUnusedDataFor:2}),addContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contacts"]}),editContact:e.mutation({query:function(e){var t=e.id,n=e.name,r=e.number;return{url:"/contacts/".concat(t),method:"PATCH",body:{name:n,number:r}}},invalidatesTags:["Contacts"]}),login:e.mutation({query:function(e){return{url:"users/login",method:"POST",body:e}},invalidatesTags:["User"]}),register:e.mutation({query:function(e){return{url:"users/signup",method:"POST",body:e}},invalidatesTags:["User"]}),logout:e.mutation({query:function(){return{url:"users/logout",method:"POST"}},invalidatesTags:["User"]}),getUser:e.query({query:function(){return"/current"},providesTags:["User"]})}}}),o=a.useFetchAllQuery,i=a.useAddContactMutation,u=a.useDeleteContactMutation,s=(a.useEditContactMutation,a.useLoginMutation),l=(a.useLogoutMutation,a.useRegisterMutation);a.useGetUserQuery},54:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(4),c=Object(r.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},reducers:{setUserAndToken:function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0},clearUserAndToken:function(e){e.user=null,e.token=null,e.isLoggedIn=!1}}}),a=c.actions,o=a.setUserAndToken,i=a.clearUserAndToken,u=c.reducer},63:function(e,t,n){e.exports={link:"AuthNav_link__2ejsg",active:"AuthNav_active__2WI0M",container:"AuthNav_container__2sSIa"}},73:function(e,t,n){e.exports={link:"Navigation_link__12o2K",active:"Navigation_active__1Sofg"}},74:function(e,t,n){e.exports={wrapper:"UserMenu_wrapper__3KSXQ",username:"UserMenu_username__2nvIz"}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(4),c=Object(r.e)({name:"filter",initialState:"",reducers:{updateFilter:function(e,t){return t.payload}}}),a=c.actions.updateFilter,o=c.reducer},91:function(e,t,n){e.exports={header:"AppBar_header__1Yk8v"}}},[[118,3,4]]]);
//# sourceMappingURL=main.e0acddff.chunk.js.map