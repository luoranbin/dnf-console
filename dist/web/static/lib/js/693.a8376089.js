"use strict";(self["webpackChunkvue3_template"]=self["webpackChunkvue3_template"]||[]).push([[693],{491:function(e,t,l){l.d(t,{K5:function(){return o},T8:function(){return u},ZC:function(){return s},Zr:function(){return i},p:function(){return n},ss:function(){return d},tm:function(){return r}});var a=l(6569);const u=e=>a.d.request({url:"/gm/account/list",method:"get",params:e}),n=(e,t)=>a.d.request({url:`/gm/account/${e}/recharge`,method:"post",data:t}),o=e=>a.d.request({url:`/gm/account/${e}/reset_create_charac`,method:"post"}),r=e=>a.d.request({url:`/gm/account/${e}`,method:"delete"}),i=(e,t)=>a.d.request({url:`/gm/account/${e}/change_password`,method:"post",data:t}),s=(e,t)=>a.d.request({url:`/gm/account/${e}`,method:"put",data:t}),d=e=>a.d.request({url:"/gm/account",method:"post",data:e})},2507:function(e,t,l){l.d(t,{Z:function(){return _}});var a=l(7477),u=(l(7658),l(3396)),n=l(7139),o=l(4274),r=l(2483);const i=e=>((0,u.dD)("data-v-221fb25f"),e=e(),(0,u.Cn)(),e),s={class:"pull-left"},d=i((()=>(0,u._)("span",{class:"icon-toinstlist"},null,-1)));var c=(0,u.aZ)({__name:"PanelTitle",props:{isLine:o.i.bool.def(!1),title:o.i.string.def("标题"),router:Object,backTitle:o.i.string.def("")},setup(e){const t=e,l=(0,r.tv)(),a=()=>{t.router?l.push({...t.router}):l.go(-1)};return(t,l)=>{const o=(0,u.up)("el-button"),r=(0,u.up)("el-row");return(0,u.wg)(),(0,u.j4)(r,null,{default:(0,u.w5)((()=>[(0,u._)("div",{class:(0,n.C_)(["console-title clearfix",e.isLine?"bline":""]),style:{"min-height":"50px"}},[(0,u._)("div",s,[(0,u._)("h4",null,(0,n.zw)(e.title),1),Boolean(e.backTitle)?((0,u.wg)(),(0,u.j4)(o,{key:0,size:"small",class:"btn-small",onClick:a},{default:(0,u.w5)((()=>[d,(0,u._)("span",null,(0,n.zw)(e.backTitle),1)])),_:1})):(0,u.kq)("",!0),(0,u.WI)(t.$slots,"button")])],2)])),_:3})}}}),p=l(89);const m=(0,p.Z)(c,[["__scopeId","data-v-221fb25f"]]);var f=m;const w=(0,a.nz)(f);var _=w},7192:function(e,t,l){l.d(t,{Gu:function(){return u},OP:function(){return n}});var a=l(4870);async function u(e,t=!1){const l=(0,a.SU)(e).validate;return new Promise((e=>l(((l,a)=>e(t?{valid:l,object:a}:l)))))}async function n(e,t){const l=(0,a.SU)(e).validateField;return new Promise((e=>l(t,(t=>e(t)))))}},7477:function(e,t,l){l.d(t,{nz:function(){return a}});const a=(e,t)=>{if(e.install=l=>{for(const a of[e,...Object.values(t??{})])l.component(a.name,a)},t)for(const[l,a]of Object.entries(t))e[l]=a;return e}},9693:function(e,t,l){l.r(t),l.d(t,{default:function(){return _}});var a=l(3396),u=l(4870),n=l(9242),o=l(2507),r=l(3498),i=l(7192),s=l(6569);const d=e=>s.d.request({url:"/client/login",method:"post",data:e}),c=(0,a._)("h5",{style:{"margin-bottom":"15px","font-size":"13px","font-weight":"bold"}},"RSA加密hash",-1),p=(0,a._)("div",{class:"card-header"},[(0,a._)("span",null,"注意点")],-1),m=(0,a._)("div",{class:"card-body"},[(0,a._)("p",null,' 1. 执行 "main.exe -pem" 会生成“publickey.pem”和 “private.pem” 文件，将 publickey.pem 复制到服务器 且 重启 '),(0,a._)("p",null,"2. 点击登录，拿到hash。 在客户端目录下 运行 “dnf.exe xx” ，xx就是加密的hash"),(0,a._)("p",null,"3. 最终：还是推荐使用登录器 方便。")],-1);var f=(0,a.aZ)({__name:"index",setup(e){const t=(0,u.iH)(),l=(0,u.qj)({loginType:"password",uid:18000002,username:"bailbo9",password:"123456",public_pem:"",game_dir:""}),s=(0,u.iH)(""),f=(0,u.qj)({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],public_pem:[{required:!0,message:"请输入RSA加密公钥",trigger:"blur"}],game_dir:[{required:!0,message:"请输入游戏目录",trigger:"blur"}]}),w=e=>{l.uid=e},_=async()=>{if("uid"===l.loginType){const e=await(0,i.OP)(t,["public_pem","game_dir"]);if(!e)return}else{const e=await(0,i.Gu)(t);if(!e)return}try{const{token:e}=await d(l);s.value=e}catch(e){}console.log(111,l)};return(e,i)=>{const d=(0,a.up)("el-switch"),g=(0,a.up)("el-form-item"),b=(0,a.up)("el-input"),v=(0,a.up)("el-button"),h=(0,a.up)("el-form"),y=(0,a.up)("el-col"),W=(0,a.up)("el-row"),x=(0,a.up)("el-card");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)((0,u.SU)(o.Z),{title:"客户端登录"}),(0,a.Wm)(W,{style:{"margin-top":"50px"},gutter:120},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{span:8},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{model:l,rules:f,ref_key:"formRef",ref:t,"label-width":"120px"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{prop:"loginType"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:l.loginType,"onUpdate:modelValue":i[0]||(i[0]=e=>l.loginType=e),"active-value":"password","inactive-color":"#36CBCB","inactive-value":"uid",class:"mb-2","active-text":"账号登录","inactive-text":"账号ID登录"},null,8,["modelValue"])])),_:1}),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(g,{label:"账号",prop:"username"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{modelValue:l.username,"onUpdate:modelValue":i[1]||(i[1]=e=>l.username=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(g,{label:"密码:",prop:"password"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{type:"password",modelValue:l.password,"onUpdate:modelValue":i[2]||(i[2]=e=>l.password=e)},null,8,["modelValue"])])),_:1})],512),[[n.F8,"password"===l.loginType]]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)((0,u.SU)(r.Z),{"has-role":!1,"label-width":"120px","has-btn":!1,onSetUid:w})],512),[[n.F8,"uid"===l.loginType]]),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,{type:"primary",onClick:_},{default:(0,a.w5)((()=>[(0,a.Uk)("登 录")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1}),(0,a.Wm)(y,{span:12},{default:(0,a.w5)((()=>[(0,a._)("fieldset",null,[c,(0,a._)("div",null,[(0,a.Wm)(b,{type:"textarea",modelValue:s.value,"onUpdate:modelValue":i[3]||(i[3]=e=>s.value=e),autosize:{minRows:8}},null,8,["modelValue"])])])])),_:1})])),_:1}),(0,a.Wm)(W,{style:{"margin-top":"30px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{span:24},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{class:"box-card",shadow:"hover"},{header:(0,a.w5)((()=>[p])),default:(0,a.w5)((()=>[m])),_:1})])),_:1})])),_:1})])}}});const w=f;var _=w},3498:function(e,t,l){l.d(t,{Z:function(){return p}});var a=l(3396),u=l(4870),n=l(7139),o=l(491),r=l(7192);const i={style:{float:"left"}},s={style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}};var d=(0,a.aZ)({__name:"SelectAccount",props:{hasRole:{type:Boolean,default:!0},hasBtn:{type:Boolean,default:!0},labelWidth:{type:String,default:"100px"}},emits:["setUid"],setup(e,{emit:t}){const l=e,{hasRole:d,hasBtn:c,labelWidth:p}=(0,u.BK)(l),m=(0,u.iH)(),f=(0,u.qj)({uid:18000002}),w=(0,u.qj)({uid:[{required:!0,message:"请选择账号",trigger:"blur"}]}),_=(0,u.qj)({data:[]}),g=(0,u.iH)(!1),b=async()=>{g.value=!0,_.data=await(0,o.T8)({has_roles:d.value}),g.value=!1},v=async()=>{const e=await(0,r.Gu)(m);e&&t("setUid",f.uid)};return b(),(e,t)=>{const l=(0,a.up)("el-option"),o=(0,a.up)("el-select"),r=(0,a.up)("el-form-item"),d=(0,a.up)("el-button"),b=(0,a.up)("el-form");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(b,{model:f,rules:w,ref_key:"formRef",ref:m,"label-width":(0,u.SU)(p)},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{label:"账号ID",prop:"uid"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{modelValue:f.uid,"onUpdate:modelValue":t[0]||(t[0]=e=>f.uid=e),onChange:v,filterable:"",clearable:"",placeholder:"选择账号id",loading:g.value,"loading-text":"正在加载账号"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.data,(e=>((0,a.wg)(),(0,a.j4)(l,{key:e.uid,label:e.uid,value:e.uid},{default:(0,a.w5)((()=>[(0,a._)("span",i,(0,n.zw)(e.uid),1),(0,a._)("span",s," 角色数:"+(0,n.zw)(e.roles),1)])),_:2},1032,["label","value"])))),128))])),_:1},8,["modelValue","loading"])])),_:1}),(0,u.SU)(c)?((0,a.wg)(),(0,a.j4)(r,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{type:"primary",onClick:v,size:"small"},{default:(0,a.w5)((()=>[(0,a.Uk)("查询")])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1},8,["model","rules","label-width"])])}}});const c=d;var p=c}}]);