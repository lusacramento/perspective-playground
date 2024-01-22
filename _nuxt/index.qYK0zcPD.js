import{d as u,t as r,v as l,x as s,y as _,L as g,M as h,r as $,N as f,c as b,O as y,P as x,Q as S,R as C,z as d}from"./entry.xqkmXdwY.js";const V={class:"settings-container"},B=["for"],k={class:"slider"},w=["id","min","max"],A=u({__name:"Slider",props:["props"],setup(e){const t=e;return(i,o)=>(r(),l("div",V,[s("label",{class:"slide-label",for:t.props.name},_(t.props.name)+" "+_(t.props.value)+_(t.props.unit),9,B),s("div",k,[g(s("input",{id:t.props.name,type:"range","onUpdate:modelValue":o[0]||(o[0]=a=>t.props.value=a),min:t.props.min,max:t.props.max},null,8,w),[[h,t.props.value]])])]))}}),m=$([{name:"perspective",value:100,defaultValue:100,min:0,max:999,unit:"px"},{name:"rotateX",value:0,defaultValue:0,min:-180,max:180,unit:"deg"},{name:"rotateY",value:0,defaultValue:0,min:-180,max:180,unit:"deg"},{name:"rotateZ",value:0,defaultValue:0,min:-180,max:180,unit:"deg"}]);function D(){m.value.forEach(e=>e.value=e.defaultValue)}function E(){let e="transform:";return m.value.forEach(t=>{e=`${e} ${t.name}(${t.value}${t.unit})`}),e}const n=()=>({transforms:m,resetAll:D,getAlltoString:E}),M={class:"buttons"},N=u({__name:"Buttons",setup(e){const t=()=>n().resetAll(),i=async()=>{const o=n().getAlltoString();await navigator.clipboard.writeText(o),alert("CSS copied to Clipboard!")};return(o,a)=>(r(),l("div",M,[s("button",{type:"button",onClick:f(t,["prevent"])},"Reset"),s("button",{type:"button",onClick:f(i,["prevent"])},"Copy")]))}}),P={class:"box-container"},T=u({__name:"Box",setup(e){let t=n().transforms.value[0],i=n().transforms.value[1],o=n().transforms.value[2],a=n().transforms.value[3];const c=b(()=>({transform:`perspective(${t.value}px) rotateX(${i.value}deg) rotateY(${o.value}deg)
							rotateZ(${a.value}deg)`}));return(v,p)=>(r(),l("div",P,[s("div",{class:"box",style:y(x(c))},null,4)]))}}),X=s("h2",null,"CSS3 Perspective Playground",-1),Y={class:"settings"},Z={class:"buttons-group"},z={class:"output"},R=u({__name:"index",setup(e){const t=n().transforms;return(i,o)=>{const a=A,c=N,v=T;return r(),l("div",null,[X,s("main",null,[s("section",Y,[(r(!0),l(S,null,C(x(t),p=>(r(),l("div",{key:p.name},[d(a,{props:p},null,8,["props"])]))),128)),s("div",Z,[d(c)])]),s("section",z,[d(v)])])])}}});export{R as default};
