import{r as l,D as C,z as T,j as t,B as E}from"./index-BVtsqaoS.js";import{u as i,E as g,A as c}from"./api.url-D1CGx735.js";import{C as D,D as L,L as _,E as k,N as w}from"./NoEmail-CimdRGRT.js";const z=()=>{var m,p;const[o,n]=l.useState([]),[x,r]=l.useState(!1),{openDrawer:f}=C(),{type:a}=T(),s=i(c.getEmailFromType),u=i(c.moveEmailsToBin),h=i(c.deleteEmails);l.useEffect(()=>{s.call({},a)},[a,x]),l.useEffect(()=>{console.log("Fetched emails:",s.response)},[s.response]);const j=e=>{var d;if(e.target.checked){const A=(d=s==null?void 0:s.response)==null?void 0:d.map(B=>B._id);n(A)}else n([])},y=()=>{a==="bin"?h.call(o):u.call(o),r(e=>!e)};return t.jsxs(E,{style:f?{marginLeft:250,width:"100%"}:{width:"100%"},children:[t.jsxs(E,{style:{padding:"20px 10px 0 10px",display:"flex",alignItems:"center"},children:[t.jsx(D,{size:"small",onChange:e=>j(e)}),t.jsx(L,{onClick:e=>y()})]}),t.jsx(_,{children:(m=s==null?void 0:s.response)==null?void 0:m.map(e=>t.jsx(k,{email:e,selectedEmails:o,setSelectedEmails:n,setStarredEmail:r},e._id))}),((p=s==null?void 0:s.response)==null?void 0:p.length)===0&&t.jsx(w,{message:g[a]})]})};export{z as default};
