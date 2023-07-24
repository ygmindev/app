import{d,I as F,f as P,m as E,L as m,R as D}from"./chunks/chunk-c8bb9c00.js";import y from"i18next-fs-backend";import{createInstance as C}from"i18next";import{initReactI18next as v}from"react-i18next";import{u as O,t as u,s as B}from"./chunks/chunk-8fc2ff2b.js";import"app-root-path";import"lodash/trimStart.js";import"path";import"lodash/isFunction.js";import"lodash/isArray.js";import"lodash/isPlainObject.js";import"lodash/mergeWith.js";import"lodash/uniq.js";import"lodash/trim.js";let f;const g=({isPreload:i,language:t,languageDefault:o,languages:l,modules:n,path:s})=>{const r={debug:!1,defaultNS:!1,fallbackLng:o,initImmediate:!i,interpolation:{escapeValue:!1},lng:t,ns:[],preload:i?[t??o]:!1,react:{defaultTransParent:"div",useSuspense:!0},supportedLngs:l};if(s){const c=`${s}/locales/{{lng}}/{{ns}}.json`;r.backend={addPath:c,loadPath:c}}let e;return f?e=f.cloneInstance({...r,initImmediate:!1}):e=f=C(r),e.isInitialized||(n==null||n.forEach(e.use),e.init(r)),e},{_config:ce,config:R}=d({_config:g,config:()=>({...F,isPreload:!1,modules:[v]})}),S=O({host:"http://127.0.0.1",port:"3000"}),{_config:fe,config:A}=d({_config:g,config:R,overrides:()=>[{isPreload:!1,path:S}]}),{_config:T,config:de}=d({_config:g,config:A,overrides:()=>[{isPreload:!0,modules:[y],path:P("assets")}]}),I=({languageDefault:i,languages:t})=>({prerender:async({pageContexts:o})=>{const l=[];return t.forEach(n=>o.forEach(({context:s,urlOriginal:a,...r})=>l.push(async()=>{const e=T();await e.changeLanguage(n);const x=u(n===i?a:`/${n}/${a}`);return{...r,context:E([{[m]:{i18n:e,lang:n},[D]:{location:{pathname:u(a)}}},s]),urlOriginal:x}}))),{prerenderContext:{pageContexts:await B(l)}}}}),{languageDefault:z,languages:b}=F,L=({})=>I({languageDefault:z,languages:b}),{prerender:_}=L({}),h={},N={},ge={},p={},pe=[],ue={},Fe=!0,he=[{pageId:"/src/pages/*",isErrorPage:!1,routeFilesystem:"/*",routeFilesystemDefinedBy:"/src/pages/*/",loadCodeFiles:async()=>(await import("./entries/src_pages_.mjs")).default,configElements:{onRenderHtml:{configDefinedAt:"/src/renderer/+onRenderHtml.tsx > `export default`",configDefinedByFile:"/src/renderer/+onRenderHtml.tsx",codeFilePath:"/src/renderer/+onRenderHtml.tsx",codeFileExport:"default",plusConfigFilePath:null,configEnv:"server-only"},onRenderClient:{configDefinedAt:"/src/renderer/+onRenderClient.tsx > `export default`",configDefinedByFile:"/src/renderer/+onRenderClient.tsx",codeFilePath:"/src/renderer/+onRenderClient.tsx",codeFileExport:"default",plusConfigFilePath:null,configEnv:"client-only"},onBeforePrerenderStart:{configDefinedAt:"/src/pages/*/+onBeforePrerenderStart.ts > `export default`",configDefinedByFile:"/src/pages/*/+onBeforePrerenderStart.ts",codeFilePath:"/src/pages/*/+onBeforePrerenderStart.ts",codeFileExport:"default",plusConfigFilePath:null,configEnv:"server-only"},Page:{configDefinedAt:"/src/pages/*/+Page.tsx > `export default`",configDefinedByFile:"/src/pages/*/+Page.tsx",codeFilePath:"/src/pages/*/+Page.tsx",codeFileExport:"default",plusConfigFilePath:null,configEnv:"server-and-client"},passToClient:{configDefinedAt:"/src/renderer/+config.h.ts > `export default { passToClient }",configDefinedByFile:"/src/renderer/+config.h.ts",codeFilePath:null,codeFileExport:null,plusConfigFilePath:"/src/renderer/+config.h.ts",configEnv:"server-only",configValueSerialized:'["context","pageProps"]'},clientRouting:{configDefinedAt:"/src/renderer/+config.h.ts > `export default { clientRouting }",configDefinedByFile:"/src/renderer/+config.h.ts",codeFilePath:null,codeFileExport:null,plusConfigFilePath:"/src/renderer/+config.h.ts",configEnv:"server-and-client",configValueSerialized:"true"},hydrationCanBeAborted:{configDefinedAt:"/src/renderer/+config.h.ts > `export default { hydrationCanBeAborted }",configDefinedByFile:"/src/renderer/+config.h.ts",codeFilePath:null,codeFileExport:null,plusConfigFilePath:"/src/renderer/+config.h.ts",configEnv:"client-only",configValueSerialized:"true"},isClientSideRenderable:{configDefinedAt:"TODO",configDefinedByFile:"TODO",codeFilePath:null,codeFileExport:null,plusConfigFilePath:"TODO",configEnv:"server-and-client",configValueSerialized:"true"},hasServerOnBeforeRender:{configDefinedAt:"TODO",configDefinedByFile:"TODO",codeFilePath:null,codeFileExport:null,plusConfigFilePath:"TODO",configEnv:"server-and-client",configValueSerialized:"false"}}},{pageId:"/src/pages/_error",isErrorPage:!0,routeFilesystem:null,routeFilesystemDefinedBy:null,loadCodeFiles:async()=>(await import("./entries/src_pages_error.mjs")).default,configElements:{onRenderHtml:{configDefinedAt:"/src/renderer/+onRenderHtml.tsx > `export default`",configDefinedByFile:"/src/renderer/+onRenderHtml.tsx",codeFilePath:"/src/renderer/+onRenderHtml.tsx",codeFileExport:"default",plusConfigFilePath:null,configEnv:"server-only"},onRenderClient:{configDefinedAt:"/src/renderer/+onRenderClient.tsx > `export default`",configDefinedByFile:"/src/renderer/+onRenderClient.tsx",codeFilePath:"/src/renderer/+onRenderClient.tsx",codeFileExport:"default",plusConfigFilePath:null,configEnv:"client-only"},Page:{configDefinedAt:"/src/pages/_error/+Page.tsx > `export default`",configDefinedByFile:"/src/pages/_error/+Page.tsx",codeFilePath:"/src/pages/_error/+Page.tsx",codeFileExport:"default",plusConfigFilePath:null,configEnv:"server-and-client"},passToClient:{configDefinedAt:"/src/renderer/+config.h.ts > `export default { passToClient }",configDefinedByFile:"/src/renderer/+config.h.ts",codeFilePath:null,codeFileExport:null,plusConfigFilePath:"/src/renderer/+config.h.ts",configEnv:"server-only",configValueSerialized:'["context","pageProps"]'},clientRouting:{configDefinedAt:"/src/renderer/+config.h.ts > `export default { clientRouting }",configDefinedByFile:"/src/renderer/+config.h.ts",codeFilePath:null,codeFileExport:null,plusConfigFilePath:"/src/renderer/+config.h.ts",configEnv:"server-and-client",configValueSerialized:"true"},hydrationCanBeAborted:{configDefinedAt:"/src/renderer/+config.h.ts > `export default { hydrationCanBeAborted }",configDefinedByFile:"/src/renderer/+config.h.ts",codeFilePath:null,codeFileExport:null,plusConfigFilePath:"/src/renderer/+config.h.ts",configEnv:"client-only",configValueSerialized:"true"},isClientSideRenderable:{configDefinedAt:"TODO",configDefinedByFile:"TODO",codeFilePath:null,codeFileExport:null,plusConfigFilePath:"TODO",configEnv:"server-and-client",configValueSerialized:"true"},hasServerOnBeforeRender:{configDefinedAt:"TODO",configDefinedByFile:"TODO",codeFilePath:null,codeFileExport:null,plusConfigFilePath:"TODO",configEnv:"server-and-client",configValueSerialized:"false"}}}],xe={onBeforeRoute:null,onPrerenderStart:{configDefinedAt:"/src/renderer/+onPrerenderStart.ts > `export default`",configDefinedByFile:"/src/renderer/+onPrerenderStart.ts",codeFilePath:"/src/renderer/+onPrerenderStart.ts",codeFileExport:"default",plusConfigFilePath:null,configEnv:"server-only",configValue:_}},V=Object.assign({}),H={...V};h[".page"]=H;const j=Object.assign({}),$={...j};p[".page"]=$;const w=Object.assign({}),G={...w};h[".page.server"]=G;const k=Object.assign({}),U={...k};p[".page.server"]=U;const q=Object.assign({}),Z={...q};N[".page.route"]=Z;const J=Object.assign({}),K={...J};p[".page.client"]=K;export{Fe as isGeneratedFile,ue as neverLoaded,xe as pageConfigGlobal,he as pageConfigs,N as pageFilesEager,p as pageFilesExportNamesEager,ge as pageFilesExportNamesLazy,h as pageFilesLazy,pe as pageFilesList};
