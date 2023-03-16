"use strict";(self["webpackChunkvue3_template"]=self["webpackChunkvue3_template"]||[]).push([[768],{491:function(e,l,t){t.d(l,{K5:function(){return n},T8:function(){return o},ZC:function(){return d},Zr:function(){return i},p:function(){return u},ss:function(){return s},tm:function(){return r}});var a=t(6569);const o=e=>a.d.request({url:"/gm/account/list",method:"get",params:e}),u=(e,l)=>a.d.request({url:`/gm/account/${e}/recharge`,method:"post",data:l}),n=e=>a.d.request({url:`/gm/account/${e}/reset_create_charac`,method:"post"}),r=e=>a.d.request({url:`/gm/account/${e}`,method:"delete"}),i=(e,l)=>a.d.request({url:`/gm/account/${e}/change_password`,method:"post",data:l}),d=(e,l)=>a.d.request({url:`/gm/account/${e}`,method:"put",data:l}),s=e=>a.d.request({url:"/gm/account",method:"post",data:e})},9456:function(e,l,t){t.d(l,{F3:function(){return o},WZ:function(){return n},_o:function(){return u}});var a=t(6569);const o=e=>a.d.request({url:`/gm/account/${e}/roles`,method:"get"}),u=(e,l)=>a.d.request({url:`/gm/roles/${e}/qp`,method:"put",data:l}),n=(e,l)=>a.d.request({url:`/gm/roles/${e}/pvp`,method:"put",data:l})},2870:function(e,l,t){t.d(l,{Z:function(){return g}});var a=t(7477),o=t(3396),u=t(7139);const n={class:"bot",style:{height:"20px","margin-bottom":"13px",background:"#fff"}},r={class:"bline-dotted"},i={class:"category-index"},d={class:"category-name"},s={style:{padding:"10px 30px","margin-bottom":"30px"}};function p(e,l,t,a,p,m){const c=(0,o.up)("el-col"),f=(0,o.up)("el-row");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(f,{class:(0,u.C_)(t.isLast?"last-step":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{span:24},{default:(0,o.w5)((()=>[(0,o._)("div",n,[(0,o._)("div",r,[(0,o._)("div",i,(0,u.zw)(t.num),1),(0,o._)("div",d,(0,u.zw)(t.title),1)])])])),_:1})])),_:1},8,["class"]),(0,o._)("div",null,[(0,o._)("div",s,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])])])}var m={name:"PanelStep",props:{num:{type:[String,Number],required:!0,default:1},title:{type:String},isLast:{type:Boolean,default:!1}}},c=t(89);const f=(0,c.Z)(m,[["render",p],["__scopeId","data-v-af9f6fb6"]]);var w=f;const _=(0,a.nz)(w);var g=_},7753:function(e,l,t){t.r(l),t.d(l,{default:function(){return D}});var a=t(3396),o=t(4870),u=t(2507),n=t(2870),r=t(7139),i=t(5134),d=t(7192),s=t(9456),p=t(6881);const m={class:"text-gray-lg sm"},c={class:"dialog-footer"};var f=(0,a.aZ)({__name:"RoleQPDialog",emits:["reloadRoles"],setup(e,{expose:l,emit:t}){const u=(0,o.qj)({visible:!1,title:""}),n=(0,o.iH)(),i=(0,o.qj)({qp:500}),f=(0,o.qj)({qp:[{type:"integer",min:0,message:"QP值至少未0",trigger:"blur"}]}),w=(0,o.iH)(null);let _=null;const g=e=>{u.visible=!0,u.title="修改QP",w.value=e.QP,_=e.charac_no,(0,a.Y3)((()=>{n.value.resetFields()}))},v=async()=>{const e=await(0,d.Gu)(n);if(e)try{await(0,s._o)(_,i),(0,p.PE)("更新成功"),u.visible=!1,t("reloadRoles")}catch(l){}};return l({showQpDialog:g}),(e,l)=>{const t=(0,a.up)("el-form-item"),o=(0,a.up)("el-input-number"),d=(0,a.up)("el-form"),s=(0,a.up)("el-col"),p=(0,a.up)("el-row"),_=(0,a.up)("el-button"),g=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(g,{modelValue:u.visible,"onUpdate:modelValue":l[2]||(l[2]=e=>u.visible=e),title:u.title,width:"600px","close-on-press-escape":!1,"close-on-click-modal":!1},{footer:(0,a.w5)((()=>[(0,a._)("span",c,[(0,a.Wm)(_,{onClick:l[1]||(l[1]=e=>u.visible=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("取 消")])),_:1}),(0,a.Wm)(_,{type:"primary",onClick:v},{default:(0,a.w5)((()=>[(0,a.Uk)("确 定")])),_:1})])])),default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{span:22},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{model:i,rules:f,ref_key:"formRef",ref:n,"label-width":"100px"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{label:"现有QP"},{default:(0,a.w5)((()=>[(0,a._)("span",m,(0,r.zw)(w.value),1)])),_:1}),(0,a.Wm)(t,{label:"修改QP",prop:"qp"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{min:0,modelValue:i.qp,"onUpdate:modelValue":l[0]||(l[0]=e=>i.qp=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})])),_:1},8,["modelValue","title"])])}}});const w=f;var _=w;const g={class:"dialog-footer"};var v=(0,a.aZ)({__name:"RolePvpDialog",emits:["reloadRoles"],setup(e,{expose:l,emit:t}){const u=(0,o.qj)({visible:!1,title:""}),n=(0,o.iH)();let r=(0,o.qj)({win:0,pvp_grade:0,pvp_point:0});const m=(0,o.qj)({pvp_grade:[{type:"integer",min:0,max:34,message:"pk段位0至34",trigger:"blur"}]});let c=null;const f=e=>{u.visible=!0,u.title="修改PK段位",c=e.charac_no,(0,a.Y3)((()=>{(0,i.U5)(r,e.pvp),n.value.clearValidate()}))},w=async()=>{const e=await(0,d.Gu)(n);if(e)try{await(0,s.WZ)(c,r),(0,p.PE)("更新成功"),u.visible=!1,t("reloadRoles")}catch(l){}};return l({showPvpDialog:f}),(e,l)=>{const t=(0,a.up)("el-input-number"),i=(0,a.up)("el-form-item"),d=(0,a.up)("el-form"),s=(0,a.up)("el-col"),p=(0,a.up)("el-row"),c=(0,a.up)("el-button"),f=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(f,{modelValue:u.visible,"onUpdate:modelValue":l[4]||(l[4]=e=>u.visible=e),title:u.title,width:"600px","close-on-press-escape":!1,"close-on-click-modal":!1},{footer:(0,a.w5)((()=>[(0,a._)("span",g,[(0,a.Wm)(c,{onClick:l[3]||(l[3]=e=>u.visible=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("取 消")])),_:1}),(0,a.Wm)(c,{type:"primary",onClick:w},{default:(0,a.w5)((()=>[(0,a.Uk)("确 定")])),_:1})])])),default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{span:22},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{model:(0,o.SU)(r),rules:m,ref_key:"formRef",ref:n,"label-width":"100px"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{label:"PK段位",prop:"pvp_grade"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{min:0,max:34,modelValue:(0,o.SU)(r).pvp_grade,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,o.SU)(r).pvp_grade=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),(0,a.Wm)(i,{label:"胜利场次",prop:"win"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{min:0,modelValue:(0,o.SU)(r).win,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,o.SU)(r).win=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),(0,a.Wm)(i,{label:"胜点",prop:"pvp_point"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{min:0,max:99,modelValue:(0,o.SU)(r).pvp_point,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,o.SU)(r).pvp_point=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})])),_:1},8,["modelValue","title"])])}}});const b=v;var W=b;const h={key:0},y={key:1};var k=(0,a.aZ)({__name:"RolesTable",props:{data:{type:Array,required:!0,default:()=>[]},loading:{type:Boolean,required:!0,default:!1}},emits:["reloadRoles"],setup(e,{emit:l}){const t=(0,o.iH)(),u=e=>{t.value.showQpDialog(e)},n=(0,o.iH)(),d=e=>{n.value.showPvpDialog(e)},s=()=>{l("reloadRoles")};return(l,p)=>{const m=(0,a.up)("el-table-column"),c=(0,a.up)("el-button"),f=(0,a.up)("el-table"),w=(0,a.Q2)("loading");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(f,{data:e.data,ref:"tableRef",border:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{prop:"charac_no",label:"角色编号",width:"120"}),(0,a.Wm)(m,{prop:"charac_name",label:"角色名称",width:"180"}),(0,a.Wm)(m,{prop:"money",label:"金币",width:"180"},{default:(0,a.w5)((e=>[(0,a._)("span",null,(0,r.zw)((0,o.SU)(i.T4)(e.row.money)),1)])),_:1}),(0,a.Wm)(m,{prop:"QP",label:"QP",width:"120"}),(0,a.Wm)(m,{prop:"create_time",label:"创建时间",width:"180"},{default:(0,a.w5)((e=>[(0,a._)("span",null,(0,r.zw)((0,o.SU)(i.vc)(e.row.create_time)),1)])),_:1}),(0,a.Wm)(m,{prop:"lev",label:"等级"}),(0,a.Wm)(m,{prop:"pvp.pvp_grade",label:"PK等级",width:"100"},{default:(0,a.w5)((e=>[e.row.pvp.pvp_grade?((0,a.wg)(),(0,a.iD)("span",h,(0,r.zw)(e.row.pvp.pvp_grade),1)):((0,a.wg)(),(0,a.iD)("span",y,"-"))])),_:1}),(0,a.Wm)(m,{label:"操作",width:"180",align:"right"},{default:(0,a.w5)((e=>[(0,a.Wm)(c,{type:"primary",link:"",size:"small",onClick:l=>u(e.row)},{default:(0,a.w5)((()=>[(0,a.Uk)("修改QP")])),_:2},1032,["onClick"]),(0,a.Wm)(c,{type:"primary",link:"",size:"small",onClick:l=>d(e.row)},{default:(0,a.w5)((()=>[(0,a.Uk)("修改PK段位")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[w,e.loading]]),(0,a.Wm)((0,o.SU)(_),{ref_key:"qpDialogRef",ref:t,onReloadRoles:s},null,512),(0,a.Wm)((0,o.SU)(W),{ref_key:"pvpDialogRef",ref:n,onReloadRoles:s},null,512)])}}});const U=k;var q=U,V=t(612);const x={class:"tc-step-border"},R={class:"l"};var S=(0,a.aZ)({__name:"index",setup(e){const l=(0,o.qj)({data:[],loading:!1});let t=null;const r=e=>{t=e,i()},i=async()=>{try{l.loading=!0,l.data=await(0,s.F3)(t),l.loading=!1}catch(e){l.loading=!1}};return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)((0,o.SU)(u.Z),{title:"角色管理"}),(0,a._)("div",x,[(0,a._)("div",R,[(0,a.Wm)((0,o.SU)(n.Z),{num:"1",title:"账号选择"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(V.Z),{onSetUid:r})])),_:1}),(0,a.Wm)((0,o.SU)(n.Z),{num:"2",title:"角色信息","is-last":""},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(q),{data:l.data,loading:l.loading,onReloadRoles:i},null,8,["data","loading"])])),_:1})])])]))}});const P=S;var D=P},612:function(e,l,t){t.d(l,{Z:function(){return m}});var a=t(3396),o=t(7139),u=t(4870),n=t(491),r=t(7192);const i={style:{float:"left"}},d={style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}};var s=(0,a.aZ)({__name:"SelectAccount",emits:["setUid"],setup(e,{emit:l}){const t=(0,u.iH)(),s=(0,u.qj)({uid:null}),p=(0,u.qj)({uid:[{required:!0,message:"请选择账号",trigger:"blur"}]}),m=(0,u.qj)({data:[]}),c=(0,u.iH)(!1),f=async()=>{c.value=!0,m.data=await(0,n.T8)({has_roles:!0}),c.value=!1},w=async()=>{const e=await(0,r.Gu)(t);e&&l("setUid",s.uid)};return f(),(e,l)=>{const u=(0,a.up)("el-option"),n=(0,a.up)("el-select"),r=(0,a.up)("el-form-item"),f=(0,a.up)("el-button"),_=(0,a.up)("el-form");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(_,{model:s,rules:p,ref_key:"formRef",ref:t,"label-width":"100px"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{label:"账号ID",prop:"uid"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{modelValue:s.uid,"onUpdate:modelValue":l[0]||(l[0]=e=>s.uid=e),filterable:"",clearable:"",placeholder:"选择账号id",loading:c.value,"loading-text":"正在加载账号"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(m.data,(e=>((0,a.wg)(),(0,a.j4)(u,{key:e.uid,label:e.uid,value:e.uid},{default:(0,a.w5)((()=>[(0,a._)("span",i,(0,o.zw)(e.uid),1),(0,a._)("span",d," 角色数:"+(0,o.zw)(e.roles),1)])),_:2},1032,["label","value"])))),128))])),_:1},8,["modelValue","loading"])])),_:1}),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{type:"primary",onClick:w,size:"small"},{default:(0,a.w5)((()=>[(0,a.Uk)("查询")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}}});const p=s;var m=p}}]);