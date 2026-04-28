import{_ as f}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Y_T7WtMQ.js";import{f as v,o as c,e as _,g as s,i as t,n as o,b as h,w as i,d as g,m as k,D as l,v as y,x as C,z as p}from"../modules/vue-0DkHb0vD.js";import{_ as S}from"../index-DA42PElt.js";import{u as b,f as $}from"./context-2_xCX4Gg.js";import"../modules/unplugin-icons-CrxfDbIS.js";import"../modules/shiki-BdEeu8M_.js";const B={class:"col-header"},P=v({__name:"two-cols-header",props:{class:{type:String},layoutClass:{type:String}},setup(r){const e=r;return(n,u)=>(c(),_("div",{class:o(["slidev-layout two-cols-header w-full h-full",r.layoutClass])},[s("div",B,[t(n.$slots,"default",{},void 0,!0)]),s("div",{class:o(["col-left",e.class])},[t(n.$slots,"left",{},void 0,!0)],2),s("div",{class:o(["col-right",e.class])},[t(n.$slots,"right",{},void 0,!0)],2),s("div",{class:o(["col-bottom",e.class])},[t(n.$slots,"bottom",{},void 0,!0)],2)],2))}}),x=S(P,[["__scopeId","data-v-dbe7b116"]]),D={__name:"slides.md__slidev_9",setup(r){const{$clicksContext:e,$frontmatter:n}=b();return e.setup(),(u,a)=>{const d=f;return c(),h(x,y(C(p($)(p(n),8))),{left:i(m=>[g(d,k({},{title:"",ranges:[]}),{default:i(()=>[...a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"Activity 运行中")]),l(`
`),s("span",{class:"line"},[s("span",null,"    ↓ 屏幕旋转")]),l(`
`),s("span",{class:"line"},[s("span",null,"onPause()")]),l(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),l(`
`),s("span",{class:"line"},[s("span",null,"onStop()")]),l(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),l(`
`),s("span",{class:"line"},[s("span",null,"onSaveInstanceState() ──→ 保存数据到 Bundle")]),l(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),l(`
`),s("span",{class:"line"},[s("span",null,"onDestroy()")]),l(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),l(`
`),s("span",{class:"line"},[s("span",null,"系统重建 Activity")]),l(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),l(`
`),s("span",{class:"line"},[s("span",null,"onCreate(savedInstanceState) ──→ 从 Bundle 恢复数据")]),l(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),l(`
`),s("span",{class:"line"},[s("span",null,"onStart() → onResume()")])])],-1)])]),_:1},16)]),right:i(m=>[...a[1]||(a[1]=[s("h3",null,"什么情况下会触发状态保存？",-1),s("ul",null,[s("li",null,"✅ 系统内存不足"),s("li",null,"✅ 屏幕旋转"),s("li",null,"✅ 按 Home 键"),s("li",null,"✅ 跳转到其他 Activity"),s("li",null,"❌ 用户主动按返回键（不会触发）")],-1)])]),default:i(()=>[a[2]||(a[2]=s("h2",null,"状态保存流程",-1))]),_:1},16)}}};export{D as default};
