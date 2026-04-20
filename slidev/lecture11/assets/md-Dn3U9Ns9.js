import{aL as p,o as a,b as u,w as c,g as t,af as i,e as r,ad as o,v as x,x as _,T as l}from"./modules/vue-DVyx71Sc.js";import{I as m}from"./slidev/default-Dgt399It.js";import{u as f,f as y}from"./slidev/context-7I3rYRko.js";import"./index-DMXeAHUa.js";import"./modules/shiki-DxCdPOOR.js";const v={class:"grid grid-cols-2 gap-6 mt-6"},b={initial:{x:-30,opacity:0},enter:{x:0,opacity:1,transition:{delay:200}},class:"bg-slate-300/50 p-4 rounded-xl border border-slate-700"},w={initial:{x:30,opacity:0},enter:{x:0,opacity:1,transition:{delay:400}},class:"bg-slate-300/50 p-4 rounded-xl border border-slate-700"},E={__name:"slides.md__slidev_64",setup(T){const{$clicksContext:s,$frontmatter:d}=f();return s.setup(),(g,e)=>{const n=p("motion");return a(),u(m,x(_(l(y)(l(d),63))),{default:c(()=>[e[2]||(e[2]=t("h2",null,"作业步骤指南：第二步",-1)),e[3]||(e[3]=t("h3",null,"添加标题和副标题",-1)),t("div",v,[i((a(),r("div",b,[...e[0]||(e[0]=[t("div",{class:"text-emerald-400 font-bold mb-3"},"1. 标题 TextView",-1),t("pre",{class:"bg-slate-800 p-3 rounded text-xs text-slate-300 overflow-x-auto"},[t("code",null,`<TextView
    android:id="@+id/tvTitle"
    android:layout_width="0dp"
    android:layout_height="wrap_content"
    android:text="图片浏览器"
    android:textSize="24sp"
    android:gravity="center"
    app:layout_constraintTop_toTopOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintEnd_toEndOf="parent" />`)],-1),t("ul",{class:"text-xs text-slate-600 mt-2 space-y-1"},[t("li",null,[o("• "),t("code",null,"0dp"),o(" 宽度配合左右约束实现全宽")]),t("li",null,[o("• "),t("code",null,'gravity="center"'),o(" 让文字居中")])],-1)])])),[[n]]),i((a(),r("div",w,[...e[1]||(e[1]=[t("div",{class:"text-blue-400 font-bold mb-3"},"2. 副标题 TextView",-1),t("pre",{class:"bg-slate-800 p-3 rounded text-xs text-slate-300 overflow-x-auto"},[t("code",null,`<TextView
    android:id="@+id/tvSubtitle"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="学号：2024001"
    android:textSize="16sp"
    android:textColor="#666666"
    app:layout_constraintTop_toBottomOf="@id/tvTitle"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintEnd_toEndOf="parent" />`)],-1),t("ul",{class:"text-xs text-slate-600 mt-2 space-y-1"},[t("li",null,[o("• "),t("code",null,'Top_toBottomOf="@id/tvTitle"'),o(" 放在标题下方")]),t("li",null,"• 左右约束实现水平居中")],-1)])])),[[n]])])]),_:1},16)}}};export{E as default};
