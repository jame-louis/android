import{$ as e,B as t,C as n,D as r,S as i,bt as a,v as o,vt as s,y as c}from"./modules/shiki-BJVPiDca.js";import{nt as l,rt as u}from"./index-CLx9La6I.js";import{t as d}from"./slidev/CodeBlockWrapper-DIbbb0Lw.js";import{t as f}from"./slidev/default-D_3E_1Db.js";var p={class:`bg-gray-50 p-4 rounded-lg`},m={__name:`slides.md__slidev_16`,setup(m){let{$slidev:h,$nav:g,$clicksContext:_,$clicks:v,$page:y,$renderContext:b,$frontmatter:x}=u();return _.setup(),(u,m)=>{let h=d;return t(),c(f,a(r(s(l)(s(x),15))),{default:e(()=>[o(`div`,p,[m[1]||=o(`p`,null,[o(`strong`,null,`执行流程图解：`)],-1),n(h,{title:``,ranges:[]},{default:e(()=>[...m[0]||=[o(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[o(`code`,{class:`language-text`},[o(`span`,{class:`line`},[o(`span`,null,`App启动`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`   │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`   ▼`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`new DatabaseHelper() ──→ 对象创建（无实际数据库文件）`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`   │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`   ▼`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`helper.getWritableDatabase()`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`   │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`   ├── 检查数据库文件是否存在？`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`   │       ├── 不存在 → 调用 onCreate() → 创建表 → 返回db对象`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`   │       └── 存在 ──→ 直接返回db对象`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`   │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`   ▼`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`后续CRUD操作`)])])],-1)]]),_:1})])]),_:1},16)}}};export{m as default};