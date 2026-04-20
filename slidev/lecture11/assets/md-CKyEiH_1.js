import{aL as m,o as r,e as i,F as u,aj as f,af as y,g as t,t as p,b as x,w as v,d as g,v as B,x as O,T as c}from"./modules/vue-DVyx71Sc.js";import{u as l,f as b}from"./slidev/context-BPTz3A_k.js";import{I as S}from"./slidev/default-AujhO4iS.js";import"./index-Bc1lrWIc.js";import"./modules/shiki-DxCdPOOR.js";const h={class:"grid grid-cols-1 gap-4 mt-4"},E={class:"text-emerald-400 font-bold text-sm mb-2"},k={class:"text-xs text-slate-800 !bg-transparent !p-0"},C={__name:"CommonLayoutMode",setup(_){l();const e=[{title:"在父布局中居中",code:`app:layout_constraintBottom_toBottomOf="parent"
app:layout_constraintEnd_toEndOf="parent"
app:layout_constraintStart_toStartOf="parent"
app:layout_constraintTop_toTopOf="parent"`},{title:"对齐到右下角",code:`app:layout_constraintBottom_toBottomOf="parent"
app:layout_constraintEnd_toEndOf="parent"`},{title:"两个视图并排",code:`// 视图 1
app:layout_constraintStart_toStartOf="parent"
// 视图 2
app:layout_constraintStart_toEndOf="@id/view1"`}];return(n,d)=>{const o=m("motion");return r(),i("div",h,[(r(),i(u,null,f(e,(a,s)=>y(t("div",{key:s,class:"bg-slate-300/50 border border-slate-700 rounded-lg p-4"},[t("div",E,p(a.title),1),t("pre",k,[t("code",null,p(a.code),1)])]),[[o,{initial:{y:20,opacity:0},enter:{y:0,opacity:1,transition:{delay:s*150}}}]])),64))])}}},$={__name:"slides.md__slidev_59",setup(_){const{$clicksContext:e,$frontmatter:n}=l();return e.setup(),(d,o)=>{const a=C;return r(),x(S,B(O(c(b)(c(n),58))),{default:v(()=>[o[0]||(o[0]=t("h2",null,"常用布局模式",-1)),g(a)]),_:1},16)}}};export{$ as default};
