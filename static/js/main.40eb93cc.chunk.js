(this["webpackJsonpfind-the-face"]=this["webpackJsonpfind-the-face"]||[]).push([[0],{325:function(e,t,s){},327:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(6),i=s.n(n),c=s(43),r=s.n(c),o=(s(85),s(16)),l=s(17),p=s(19),d=s(18),m=(s(86),s(87),s(78)),h=s.n(m),u=function(e){var t=e.onRouteChange;return Object(a.jsx)("div",{className:"nav tc content-end",children:Object(a.jsx)(h.a,{className:"Tilt br2",options:{max:55},style:{height:150,width:150},children:Object(a.jsx)("nav",{className:"content-end ",children:Object(a.jsx)("p",{className:"nav-box f3 link dim white underline pa3 pt5 pointer br2 shadow-2 b--light-green b--solid",onClick:function(){return t("signin")},style:{height:150,width:150},children:" Sign Out"})})})})},b=(s(88),s.p+"static/media/hdrimg.b5576fbf.png"),g=function(){return Object(a.jsxs)("div",{className:" header",children:[Object(a.jsx)("img",{className:"slide-in-left head-img content-start tl",src:b,alt:"header",width:"15%"}),Object(a.jsx)("h2",{className:"slide-in-left hd-margin w-25",children:"Magic App to detect face in Your pictures"})]})},j=(s(44),function(e){var t=e.name;return t=t.toUpperCase(),Object(a.jsx)("div",{className:"item-a f4 mt4",children:Object(a.jsxs)("div",{className:"white fw1-l",children:[Object(a.jsx)("div",{className:"animatename",children:Object(a.jsxs)("span",{className:"tracking-in-expand f2 fw7",children:["Hi ",t,","]})}),Object(a.jsx)("br",{}),"your current entry count is"]})})}),f=function(){return Object(a.jsx)("div",{className:"item-c f5 mt4",children:Object(a.jsxs)("h3",{className:"tracking-in-expand white fw1 f4",children:["Find links to face images and click ",Object(a.jsx)("span",{className:"yellow",children:"'Detect'"})]})})},x=function(e){var t=e.entries;return Object(a.jsx)("div",{className:"shake-bottom animaterank item-b br4 pt5 pb mb5 tc ma5 mt4 mr0 b--light-green b--solid",children:t})},O=s.p+"static/media/face.5ae0a412.png",v=function(){return Object(a.jsx)("div",{className:"item-e center ma5 mt6",style:{width:200,height:200},children:Object(a.jsx)("img",{src:O})})},w=(s(89),s(90),function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(){e.props.toggle()},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"bounce-in-top popup-box pointer center w-20 br3 mt5 b--green b--solid",onClick:this.handleClick,children:Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h2",{children:this.props.message}),Object(a.jsx)("div",{children:"loading..."===this.props.message?null:Object(a.jsx)("p",{children:"click me"})})]})})}}]),s}(i.a.Component)),N=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.dataFetching=function(e){fetch("https://desolate-harbor-55159.herokuapp.com/signin",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).catch((function(){a.changemessage("Could not fetch data"),a.setState({popupstate:!0})})).then((function(e){if(e.email!==a.state.signInEmail)return a.setState({popupmessage:"wrong credentials"}),console.log("message from return",a.popupmessage),a.changemessage("wrong credentials");a.props.loadUser(e),a.props.onRouteChange("home")}))},a.togglePop=function(){a.setState({popupstate:!a.state.popupstate})},a.changemessage=function(e){a.setState({popupmessage:e}),console.log("fromchangemessage",a.popupmessage)},a.onSubmitSignIn=function(e){a.setState({popupstate:!a.state.popupstate}),a.setState({popupmessage:"loading..."}),console.log("fetch initiated"),a.dataFetching()},a.onRegisterPress=function(){a.props.onRouteChange("register")},a.state={signInEmail:"",signInPassword:"",popupstate:!1,popupmessage:""},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"slide-in-right",children:[Object(a.jsx)("div",{className:"center mt4",children:this.state.popupstate?Object(a.jsx)(w,{className:"center w-100 flex",toggle:this.togglePop,message:this.state.popupmessage}):null}),Object(a.jsx)("div",{className:"center  ma mt3-l",children:Object(a.jsx)("article",{className:"signin w-30 w-40-m center br3 pa3 pa3-ns ba shadow-2",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"text-focus-in f2 fw6 ph0 mh0",children:"Sign In"}),Object(a.jsxs)("div",{className:"text2-focus-in mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 br2 input-reset bg-transparent hover-bg-blue hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(a.jsxs)("div",{className:"text3-focus-in mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 br2 input-reset bg-transparent hover-bg-blue hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(a.jsx)("div",{className:"text4-focus-in",children:Object(a.jsx)("input",{onClick:this.onSubmitSignIn,className:"ph3 br2 bg-dark-blue white pv2 input-reset ba b--black bg-transparent grow pointer f5 dib",type:"submit",value:"Sign in"})}),Object(a.jsx)("div",{className:"text4-focus-in lh-copy mt3",children:Object(a.jsx)("p",{onClick:this.onRegisterPress,className:"f6 link black db pointer",children:"Register"})})]})})})})]})}}]),s}(i.a.Component),C=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.togglePop=function(){a.setState({popupstate:!a.state.popupstate})},a.changemessage=function(e){a.setState({popupmessage:e}),console.log("fromchangemessage",a.popupmessage)},a.onSubmitRegister=function(e){a.setState({popupstate:!0}),a.changemessage("loading...");if(""===a.state.name||""===a.state.email||""===a.state.password)return a.changemessage("All fields must be filled"),a.setState({popupstate:!0});(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(a.state.email)||(a.changemessage("You have entered an invalid email address!"),a.setState({popupstate:!0})))&&(a.state.password.length>6||(a.changemessage("Password must be longer than 6 characters"),a.setState({popupstate:!0})))&&fetch("https://desolate-harbor-55159.herokuapp.com/register",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.email,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){if("unable to register"===e)return a.changemessage("This user email is already registered"),a.setState({popupstate:!0});a.props.loadUser(e),a.props.onRouteChange("home")}))},a.state={name:"",email:"",password:"",popupstate:!1,popupmessage:""},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"scale-in-hor-center",children:[Object(a.jsx)("div",{className:"center mt4",children:this.state.popupstate?Object(a.jsx)(w,{className:"center w-100 flex",toggle:this.togglePop,message:this.state.popupmessage}):null}),Object(a.jsx)("div",{className:"center ma mt3-l",children:Object(a.jsx)("article",{className:"signin w-30 w-50-m center br3 pa3 pa3-ns ba shadow-2",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f2 fw6 ph0 mh0",children:"Register"}),Object(a.jsxs)("div",{className:"text-focus-in mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{className:" pa2 br2 input-reset bg-transparent hover-bg-blue hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(a.jsxs)("div",{className:"text2-focus-in mt3",children:[Object(a.jsx)("label",{className:"db bafw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 br2 input-reset bg-transparent hover-bg-blue hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(a.jsxs)("div",{className:"text3-focus-in mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 br2 input-reset bg-transparent hover-bg-blue hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(a.jsxs)("div",{className:"text4-focus-in center w-100",children:[Object(a.jsx)("div",{className:"center",children:Object(a.jsx)("input",{onClick:function(){return e.props.onRouteChange("signin")},className:"pa3 pv2 input-reset br2 ba b--black bg-transparent bg-dark-blue white grow pointer f5 dib",type:"submit",value:"Sign In"})}),Object(a.jsx)("div",{className:"center",children:Object(a.jsx)("input",{onClick:this.onSubmitRegister,className:"pa3 pv2 input-reset ba b--black br2 bg-transparent bg-dark-blue white grow pointer f5 dib",type:"submit",value:"Register"})})]})]})})})})]})}}]),s}(i.a.Component),y=(s(91),function(e){var t=e.onInputChange,s=e.onPictureSumit;return Object(a.jsx)("div",{className:"item-d items-baseline",children:Object(a.jsx)("div",{className:"tc center",children:Object(a.jsxs)("div",{className:"items-baseline form center pa4 br3 shadow-3",children:[Object(a.jsx)("input",{className:"f5 pa2 w-70 center",type:"text",placeholder:"Find The Face",onChange:t}),Object(a.jsx)("button",{className:"w-30 grow f5 link ph3 pv2 dib white bg-blue",onClick:s,children:"Detect"})]})})})}),S=(s(92),function(e){var t=e.imageUrl,s=e.box;return Object(a.jsx)("div",{className:"item-e center ma",children:Object(a.jsxs)("div",{className:"absolute mt2 z-2",children:[Object(a.jsx)("img",{className:"image br4 ma4 z-2",id:"inputImage",src:t,alt:""}),Object(a.jsx)("div",{className:"bounding-box",style:{top:s.topRow,right:s.rightCol,bottom:s.bottomRow,left:s.leftCol}})]})})}),k={particles:{number:{value:100,density:{enable:!0,value_area:800}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"}},modes:{grab:{distance:100,line_linked:{opacity:1}}}}},R=s(79),I=s.n(R),P=(s(325),{input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",password:"",entries:0,joined:""}}),F=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,password:t.password,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,s=document.getElementById("inputImage"),a=Number(s.width),n=Number(s.height);return{leftCol:t.left_col*a,topRow:t.top_row*n,rightCol:a-t.right_col*a,bottomRow:n-t.bottom_row*n}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onRouteChange=function(t){"signout"!==t&&"signin"!==t||e.setState(P),e.setState({route:t})},e.onPictureSumit=function(){e.setState({imageUrl:e.state.input}),fetch("https://desolate-harbor-55159.herokuapp.com/imageurl",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://desolate-harbor-55159.herokuapp.com/image",{method:"put",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state=P,e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.box,s=e.imageUrl,n=e.route;return Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)(I.a,{className:"particles",params:k}),Object(a.jsx)(g,{className:"header"}),"home"===n?Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)(u,{className:"spread pa2",onRouteChange:this.onRouteChange}),Object(a.jsxs)("div",{className:"slide-in-elliptic-right-bck color-change-2x cont-grid ba w-70 ml-auto b--light-green b--solid",children:[Object(a.jsx)(f,{}),Object(a.jsx)(j,{className:"item-a",name:this.state.user.name}),Object(a.jsx)(x,{className:"",entries:this.state.user.entries}),Object(a.jsx)(y,{onInputChange:this.onInputChange,onPictureSumit:this.onPictureSumit}),Object(a.jsx)(S,{className:"item-e",box:t,imageUrl:s}),Object(a.jsx)(v,{})]})]}):"signin"===n?Object(a.jsx)("div",{children:Object(a.jsx)(N,{className:"",onRouteChange:this.onRouteChange,loadUser:this.loadUser})}):Object(a.jsx)("div",{children:Object(a.jsx)(C,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})})]})}}]),s}(i.a.Component);s(326);r.a.render(Object(a.jsx)(F,{}),document.getElementById("root"))},44:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){}},[[327,1,2]]]);
//# sourceMappingURL=main.40eb93cc.chunk.js.map