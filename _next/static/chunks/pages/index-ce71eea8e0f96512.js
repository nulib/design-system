(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3525)}])},3525:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return ye}});var i=r(5893),t=r(1664),o=r(2541),s=(0,o.zo)("section",{boxSizing:"border-box",flexShrink:0,"&::before":{boxSizing:"border-box",content:'""'},"&::after":{boxSizing:"border-box",content:'""'},variants:{size:{1:{py:"$3"},2:{py:"$5"},3:{py:"$9"}}},defaultVariants:{size:"3"}}),l=(0,o.zo)("div",{height:"1px",backgroundColor:"#efefef",width:"100%",margin:"$3 0"}),a=r(7294);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){c(e,n,r[n])}))}return e}var u=(0,o.zo)("button",{all:"unset",alignItems:"center",boxSizing:"content-box",userSelect:"none","&::before":{boxSizing:"border-box"},"&::after":{boxSizing:"border-box"},flexShrink:0,justifyContent:"center",lineHeight:"1",WebkitTapHighlightColor:"rgba(0,0,0,0)",border:"1px solid $richBlack10",backgroundColor:"$white",color:"$richBlack50",cursor:"pointer",display:"inline-flex",fontSize:"$4",margin:"0 .5em .5em 0",padding:"calc(0.75em - 1px) calc(1em - 1px)",position:"relative",textTransform:"uppercase",transition:"all 0.3s ease 0s",textDecoration:"none",textAlign:"center","&:after":{content:"",position:"absolute",transition:"all 0.3s ease 0s",zIndex:"-1"},"&:hover, &:active":{borderColor:"$richBlack20"},"&:focus":{border:"2px dashed"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:disabled:hover":{opacity:.5},"& span":{paddingLeft:"$1"},variants:{isLowercase:{true:{padding:"0.75em 1em",textTransform:"unset"}},isLight:{true:d({padding:"0.75em 1em",border:"none","&:hover":{opacity:"0.75"}},o.gt.isLight)},isPrimary:{true:d({padding:"0.75em 1em",border:"none","&:hover":{opacity:"0.75"}},o.gt.isPrimary)},isText:{true:{padding:"0",border:"none",backgroundColor:"transparent","&:hover":{textDecoration:"underline"}}},isDanger:{true:d({padding:"0.75em 1em",border:"none","&:hover":{opacity:"0.75"}},o.gt.isDanger)}}});function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var p=function(e){return(0,i.jsx)(u,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){h(e,n,r[n])}))}return e}({type:"button",role:"button"},e))},x=r(7087),m=r(1418),g=r(6744);function j(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){j(e,n,r[n])}))}return e}var b=(0,g.zo)("pre",{fontSize:"$3",textAlign:"left",padding:"$1 $3 $3",marginBottom:"$3",overflow:"scroll",borderRadius:"$1"}),y=function(e){var n=e.code;return(0,i.jsx)(x.ZP,f({},x.lG,{code:n,language:"jsx",theme:m.Z,children:function(e){var n=e.className,r=e.style,t=e.tokens,o=e.getLineProps,s=e.getTokenProps;return(0,i.jsx)(b,{className:n,style:r,children:t.map((function(e,n){return(0,i.jsx)("div",f({},o({line:e,key:n}),{children:e.map((function(e,n){return(0,i.jsx)("span",f({},s({token:e,key:n})),n)}))}),n)}))})}}))},v=(0,o.zo)("table",{border:"1px solid $richBlack10",borderCollapse:"collapse",textAlign:"left",fontSize:"$3",margin:"$4 0","& th, & td":{border:"1px solid $richBlack10",padding:"$1 $3"}}),P=function(e){return(0,i.jsxs)(v,{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsx)("tbody",{children:e.items.map((function(e){var n=e.name,r=e.type,t=e.description;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:n}),(0,i.jsx)("td",{children:(0,i.jsx)("pre",{children:r})}),(0,i.jsx)("td",{children:t})]},n)}))})]})},w=(0,g.zo)("div",{marginBottom:"$4"}),O=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(p,{children:"Default Button"}),(0,i.jsx)(p,{isPrimary:!0,children:"Primary"}),(0,i.jsx)(p,{isLight:!0,children:"Light Style"}),(0,i.jsx)(p,{isDanger:!0,children:"Delete"}),(0,i.jsx)(p,{isText:!0,children:"Text"}),(0,i.jsx)(p,{isLowercase:!0,children:"Button w/o Uppers"}),(0,i.jsx)(p,{as:"span",children:"Button as a span"}),(0,i.jsx)(p,{disabled:!0,children:"Im disabled"})]}),(0,i.jsx)("h3",{children:"Example usage"}),(0,i.jsx)(y,{code:"\nimport { Button } from '@nulib/design-system';\n\n<Button isPrimary onClick={() => console.log(\"clicked\")}>Ima Button</Button>\n"}),(0,i.jsx)("h3",{children:"Props"}),(0,i.jsx)(P,{items:[{name:"as",description:"Element type",type:"string"},{name:"isDanger?",description:"Color style",type:"boolean"},{name:"isLight?",description:"Color style",type:"boolean"},{name:"isLowercase?",description:"Text style",type:"boolean"},{name:"isPrimary?",description:"Color style",type:"boolean"},{name:"isText?",description:"Link style button",type:"boolean"}]})]})},I=(0,o.zo)("svg",{display:"inline-flex",variants:{isLarge:{true:{height:"4rem",width:"4rem"}},isMedium:{true:{height:"2rem",width:"2rem"}},isSmall:{true:{height:"1rem",width:"1rem"}}}}),S=function(){return(0,i.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 112v288M400 256H112"})},C=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M232 416a23.88 23.88 0 01-14.2-4.68 8.27 8.27 0 01-.66-.51L125.76 336H56a24 24 0 01-24-24V200a24 24 0 0124-24h69.75l91.37-74.81a8.27 8.27 0 01.66-.51A24 24 0 01256 120v272a24 24 0 01-24 24zm-106.18-80zm-.27-159.86zM320 336a16 16 0 01-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0128.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 01320 336z"}),(0,i.jsx)("path",{d:"M368 384a16 16 0 01-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0127.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 01-13.87 8z"}),(0,i.jsx)("path",{d:"M416 432a16 16 0 01-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1127-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 01416 432z"})]})},z=function(){return(0,i.jsx)("path",{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})},T=function(){return(0,i.jsx)("path",{d:"M416 64H96a64.07 64.07 0 00-64 64v256a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V128a64.07 64.07 0 00-64-64zm-80 64a48 48 0 11-48 48 48.05 48.05 0 0148-48zM96 416a32 32 0 01-32-32v-67.63l94.84-84.3a48.06 48.06 0 0165.8 1.9l64.95 64.81L172.37 416zm352-32a32 32 0 01-32 32H217.63l121.42-121.42a47.72 47.72 0 0161.64-.16L448 333.84z"})},k=function(){return(0,i.jsx)("path",{d:"M464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32zM268 400H84a68.07 68.07 0 01-68-68V180a68.07 68.07 0 0168-68h184.48A67.6 67.6 0 01336 179.52V332a68.07 68.07 0 01-68 68z"})};function A(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var $=function(e){return(0,i.jsx)(I,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){A(e,n,r[n])}))}return e}({},e,{"data-testid":"icon-svg",role:"img",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:e.children}))};$.Title=function(e){var n=e.children;return(0,i.jsx)("title",{children:n})},$.Add=S,$.Audio=C,$.Close=z,$.Image=T,$.Video=k;var B=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{children:(0,i.jsxs)(p,{children:[(0,i.jsx)($,{isSmall:!0,children:(0,i.jsx)($.Add,{})}),(0,i.jsx)("span",{children:"Add Item"})]})}),(0,i.jsx)("h3",{children:"Example usage"}),(0,i.jsx)(y,{code:"\nimport { Button, Icon } from '@nulib/design-system';\n\n<Button>\n    <Icon isSmall>\n        <Icon.Add />\n    </Icon>\n    <span>Add Item</span>\n</Button>\n"})]})},D=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(w,{children:[(0,i.jsxs)($,{isSmall:!0,children:[(0,i.jsx)($.Title,{children:"Audio Work"}),(0,i.jsx)($.Audio,{})]}),(0,i.jsxs)($,{isMedium:!0,children:[(0,i.jsx)($.Title,{children:"Audio Work"}),(0,i.jsx)($.Video,{})]}),(0,i.jsxs)($,{isLarge:!0,children:[(0,i.jsx)($.Title,{children:"Image Work"}),(0,i.jsx)($.Image,{})]})]}),(0,i.jsx)("h3",{children:"Example usage"}),(0,i.jsx)(y,{code:"\nimport { Icon } from '@nulib/design-system';\n\n<Icon isMedium>\n    <Icon.Title>Audio Work</Icon.Title>\n    <Icon.Audio />\n</Icon>\n"}),(0,i.jsx)("h3",{children:"Props"}),(0,i.jsx)(P,{items:[{name:"isSmall?",description:"Icon size (1x1)",type:"boolean"},{name:"isMedium?",description:"Icon size (2x2)",type:"boolean"},{name:"isLarge?",description:"Icon size (4x4)",type:"boolean"}]}),(0,i.jsx)(P,{items:[{name:"Add",description:(0,i.jsxs)($,{isMedium:!0,children:[(0,i.jsx)($.Title,{children:"Add"}),(0,i.jsx)($.Add,{})]}),type:"<Icon.Add />"},{name:"Audio",description:(0,i.jsxs)($,{isMedium:!0,children:[(0,i.jsx)($.Title,{children:"Audio"}),(0,i.jsx)($.Audio,{})]}),type:"<Icon.Audio />"},{name:"Close",description:(0,i.jsxs)($,{isMedium:!0,children:[(0,i.jsx)($.Title,{children:"Close"}),(0,i.jsx)($.Close,{})]}),type:"<Icon.Close />"},{name:"Image",description:(0,i.jsxs)($,{isMedium:!0,children:[(0,i.jsx)($.Title,{children:"Image"}),(0,i.jsx)($.Image,{})]}),type:"<Icon.Image />"},{name:"Video",description:(0,i.jsxs)($,{isMedium:!0,children:[(0,i.jsx)($.Title,{children:"Video"}),(0,i.jsx)($.Video,{})]}),type:"<Icon.Video />"}]})]})};function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=e[r];return i}function N(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function E(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){N(e,n,r[n])}))}return e}function M(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function W(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i,t,o=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(i=r.next()).done)&&(o.push(i.value),!n||o.length!==n);s=!0);}catch(a){l=!0,t=a}finally{try{s||null==r.return||r.return()}finally{if(l)throw t}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return L(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V=(0,o.zo)("div",{boxSizing:"border-box",padding:"$5",marginBottom:"$2",backgroundColor:"$nuPurple10",color:"$nuPurple",fill:"$nuPurple",position:"relative","& svg":{fill:"inherit"},"& span":{color:"inherit"},variants:{isDanger:{true:E({},o.gt.isDanger)},isCentered:{true:{textAlign:"center"}},isInfo:{true:E({},o.gt.isInfo)},isSuccess:{true:E({},o.gt.isSuccess)},isWarning:{true:E({},o.gt.isWarning)}}}),F=(0,o.zo)("button",{cursor:"pointer",right:"$2",position:"absolute",top:"$2",background:"transparent",border:"none"}),H=function(e){var n=e.isClosable,r=M(e,["isClosable"]),t=W(a.useState(!0),2),o=t[0],s=t[1];return o?(0,i.jsxs)(V,E({},r,{children:[n&&(0,i.jsx)(F,{"aria-label":"Close",onClick:function(){s(!1)},children:(0,i.jsx)($,{isSmall:!0,children:(0,i.jsx)($.Close,{})})}),e.children]})):null},_=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(w,{children:[(0,i.jsxs)(H,{isClosable:!0,children:[(0,i.jsx)("p",{children:(0,i.jsx)("strong",{children:"Hey"})}),(0,i.jsx)("p",{children:"Some message goes here and this is the default notification color/style"})]}),(0,i.jsx)(H,{isSuccess:!0,children:"You have successfully completed some action"}),(0,i.jsx)(H,{isInfo:!0,isCentered:!0,children:"An info message. We might not even need this? But it shows notifications can be centered too"}),(0,i.jsx)(H,{isWarning:!0,isClosable:!0,children:"Warning: You can add a close button with the `isClosable` prop"}),(0,i.jsx)(H,{isDanger:!0,children:"Danger: this could be destructive"})]}),(0,i.jsx)("h3",{children:"Example usage"}),(0,i.jsx)(y,{code:"\nimport { Notification } from '@nulib/design-system';\n\n<Notification isInfo>\n    <p><strong>Hey you!</strong></p>\n    <p>I want to tell you something</p>\n</Notification>\n"}),(0,i.jsx)("h3",{children:"Props"}),(0,i.jsx)(P,{items:[{name:"isDanger?",description:"Color style",type:"boolean"},{name:"isCentered?",description:"Center the content of the Notification",type:"boolean"},{name:"isClosable?",description:"Adds a close button, which lets the user close a Notification",type:"boolean"},{name:"isInfo?",description:"Color style",type:"boolean"},{name:"isSuccess?",description:"Color style",type:"boolean"},{name:"isWarning?",description:"Color style",type:"boolean"}]})]})};function R(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var Y=(0,o.zo)("div",{display:"flex",height:"calc(100% - 2rem)",width:"calc(100% - 2rem)",alignContent:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:"1rem",textAlign:"center",lineHeight:"1.55em",boxSizing:"content-box","> span":{display:"inline-flex",maxHeight:"100%",maxWidth:"100%",alignContent:"center",alignSelf:"center",flexDirection:"column",flexGrow:"0",flexShrink:"1",margin:"auto"},img:{maxHeight:"100%",maxWidth:"100%",objectFit:"contain"},variants:{isLight:{true:function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){R(e,n,r[n])}))}return e}({},o.gt.isLight)}}}),U=function(e){var n=e.children;return(0,i.jsx)(Y,{isLight:!0,children:(0,i.jsx)("span",{children:n})})},q=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)("div",{style:{width:"200px",height:"200px"},children:(0,i.jsx)(U,{children:(0,i.jsxs)($,{isMedium:!0,children:[(0,i.jsx)($.Title,{children:"Audio Work"}),(0,i.jsx)($.Audio,{})]})})}),(0,i.jsx)("div",{style:{width:"200px",height:"200px"},children:(0,i.jsxs)(U,{children:[(0,i.jsx)("strong",{children:"Oops"})," There should be something here."]})}),(0,i.jsx)("div",{style:{width:"200px",height:"200px"},children:(0,i.jsx)(U,{children:(0,i.jsx)("img",{alt:"Scouts",src:"https://iiif.stack.rdc.library.northwestern.edu/iiif/2/ff2f57ff-6952-4ea6-b55b-ae2a76c13efc/full/600,/0/default.jpg"})})})]}),(0,i.jsx)("h3",{children:"Example usage"}),(0,i.jsx)(y,{code:"\nimport { Placeholder } from '@nulib/design-system';\n\n<Placeholder>\n    <Icon isLarge>\n        <Icon.Title>Audio Work</Icon.Title>\n        <Icon.Audio />\n    </Icon>\n</Placeholder>\n\n<Placeholder>\n    <strong>Oops</strong>\n    There should be something here.\n</Placeholder>\n"})]})},G=r(8202);function J(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Q(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){J(e,n,r[n])}))}return e}var X=(0,o.F4)({"0%":{opacity:0,transform:"translateY(1rem)"},"100%":{opacity:1,transform:"translateY(0)"}}),Z=(0,o.F4)({"0%":{opacity:0,transform:"translateY(1rem)"},"100%":{opacity:1,transform:"translateY(0)"}}),K=(0,o.zo)(G.Eh,{fill:"$richBlack10"}),ee=(0,o.zo)(G.x8,{position:"absolute",right:"0",top:"0",padding:"0.5rem",margin:"0",cursor:"pointer",border:"none",background:"none",fill:"inherit","&:hover":{opacity:"0.75"}}),ne=(0,o.zo)(G.VY,{border:"1px solid $richBlack10",backgroundColor:"$white",fill:"$richBlack50",padding:"1rem 2rem 1rem 1rem",width:"auto",minWidth:"200px",maxWidth:"350px",borderRadius:"3px",boxShadow:"5px 5px 13px #0002",animationDuration:"0.3s",animationTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)",'&[data-side="top"]':{animationName:Z},'&[data-side="bottom"]':{animationName:X},'&[data-align="end"]':J({},"& ".concat(K),{margin:"0 0.7rem"}),variants:{isLight:{true:Q({},o.gt.isLight,J({border:"none"},"& ".concat(K),{fill:"$lightGrey"}))},isPrimary:{true:Q({},o.gt.isPrimary,J({border:"none"},"& ".concat(K),{fill:"$nuPurple"}))}}}),re=(0,o.zo)(G.xz,{display:"inline-flex",padding:"0.5rem 0",margin:"0 0.5rem 0 0",cursor:"pointer",border:"none",background:"none","> button, > span":{margin:"0"}}),ie=(0,o.zo)(G.fC,{boxSizing:"content-box"});function te(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function oe(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){te(e,n,r[n])}))}return e}var se=function(e){var n=e.children;return(0,i.jsx)(ie,{children:n})};se.Trigger=function(e){return(0,i.jsx)(re,oe({},e,{children:e.children}))},se.Content=function(e){return(0,i.jsxs)(ne,oe({},e,{children:[(0,i.jsx)(K,{}),(0,i.jsx)(ee,{children:(0,i.jsx)($,{isSmall:!0,children:(0,i.jsx)($.Close,{})})}),e.children]}))};var le,ae=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(w,{children:[(0,i.jsxs)(se,{children:[(0,i.jsx)(se.Trigger,{"aria-controls":"this-popover",children:(0,i.jsxs)(p,{as:"span",children:[(0,i.jsx)($,{isSmall:!0,children:(0,i.jsx)($.Add,{})}),(0,i.jsx)("span",{children:"Default"})]})}),(0,i.jsx)(se.Content,{id:"this-popover",children:(0,i.jsxs)("nav",{style:{display:"flex",flexDirection:"column",fill:"#666",lineHeight:"1.75rem"},children:[(0,i.jsx)("strong",{children:"Default"}),(0,i.jsxs)("a",{children:[(0,i.jsx)($,{isSmall:!0,children:(0,i.jsx)($.Image,{})}),(0,i.jsx)("span",{children:" Update Image"})]}),(0,i.jsxs)("a",{children:[(0,i.jsx)($,{isSmall:!0,children:(0,i.jsx)($.Video,{})}),(0,i.jsx)("span",{children:" Connect Video"})]}),(0,i.jsxs)("a",{children:[(0,i.jsx)($,{isSmall:!0,children:(0,i.jsx)($.Audio,{})}),(0,i.jsx)("span",{children:" Add Audio"})]})]})})]}),(0,i.jsxs)(se,{children:[(0,i.jsx)(se.Trigger,{"aria-controls":"another-popover",children:(0,i.jsx)(p,{isPrimary:!0,as:"span",children:"Primary"})}),(0,i.jsxs)(se.Content,{id:"another-popover",isPrimary:!0,children:[(0,i.jsx)("div",{style:{height:"150px"},children:(0,i.jsx)(U,{children:(0,i.jsx)($,{isMedium:!0,children:(0,i.jsx)($.Image,{})})})}),(0,i.jsx)("p",{children:(0,i.jsx)("strong",{children:"Primary"})}),(0,i.jsx)("p",{children:"Nullam nec diam velit. Duis pulvinar, mi at dapibus pulvinar, est metus rhoncus nulla, vel pretium sapien quam ac ipsum."}),(0,i.jsx)(p,{isLight:!0,isLowercase:!0,children:"Quisque hendrerit"})]})]})]}),(0,i.jsx)("h3",{children:"Example usage"}),(0,i.jsx)(y,{code:'\nimport { Popover, Button } from \'@nulib/design-system\';\n\n<Popover>\n    <Popover.Trigger>\n        <Button isPrimary as="span">Trigger Text</Button>\n    </Popover.Trigger>\n    <Popover.Content isPrimary>\n        <div style={{ height: "150px" }}>\n            <Placeholder>\n                <Icon isMedium>\n                    <Icon.Image />\n                </Icon>\n            </Placeholder>\n        </div>\n        <p><strong>Primary</strong></p>\n        <p>Nullam nec diam velit. Duis pulvinar, mi at...</p>\n        <Button isLight isLowercase>\n            Quisque hendrerit\n        </Button>\n    </Popover.Content>\n</Popover>\n'}),(0,i.jsx)("h3",{children:"Props"}),(0,i.jsx)(P,{items:[{name:"isPrimary?",description:"Color style",type:"boolean"}]})]})},ce=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(se,{children:[(0,i.jsx)(se.Trigger,{"aria-controls":"text-popover",children:(0,i.jsx)("a",{style:{color:"#4e2a84",fontSize:"1rem"},children:"Text Popover"})}),(0,i.jsx)(se.Content,{id:"text-popover",children:(0,i.jsx)("p",{style:{lineHeight:"1.75rem"},children:"Fusce augue eros, convallis eget nunc a, dictum condimentum nunc. Vestibulum pulvinar risus et eleifend placerat. Nullam vel interdum felis. Aliquam vitae lorem vitae orci pretium aliquet."})})]}),(0,i.jsx)(y,{code:"\nimport { Popover } from '@nulib/design-system';\n\n<Popover>\n    <Popover.Trigger>\n        <a href=\"#\">Text Popover</a>\n    </Popover.Trigger>\n    <Popover.Content>\n        <p>Fusce augue eros, convallis eget nunc...</p>\n    </Popover.Content>\n</Popover>\n"})]})};function de(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function ue(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){de(e,n,r[n])}))}return e}var he=(0,o.zo)("div",(de(le={boxSizing:"border-box",display:"inline-flex",alignItems:"center",borderRadius:"5px",padding:"$1",marginBottom:"$2",marginRight:"$2",backgroundColor:"$lightGrey",color:"$richBlack50",textTransform:"uppercase",fontSize:"$2",objectFit:"contain",lineHeight:"1em !important","&:last-child":{marginRight:"0"}},"".concat(I),{position:"absolute",left:"$1",height:"$3",width:"$3"}),de(le,"variants",{isIcon:{true:{position:"relative",paddingLeft:"$5"}},isDanger:{true:ue({},o.gt.isDanger)},isInfo:{true:ue({},o.gt.isInfo)},isPrimary:{true:{backgroundColor:"$nuPurple10",color:"$nuPurple"}},isSuccess:{true:ue({},o.gt.isSuccess)},isWarning:{true:ue({},o.gt.isWarning)}}),le)),pe=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(he,{children:"Hey hey"}),(0,i.jsx)(he,{isWarning:!0,children:"Ima warning"}),(0,i.jsx)(he,{isSuccess:!0,children:"Published"}),(0,i.jsx)(he,{isPrimary:!0,children:"Video"}),(0,i.jsx)(he,{isInfo:!0,children:"Info"}),(0,i.jsx)(he,{isDanger:!0,children:"Errors ingesting"})]}),(0,i.jsx)("h3",{children:"Example usage"}),(0,i.jsx)(y,{code:"\nimport { Tag } from '@nulib/design-system';\n\n<Tag isSuccess>Published</Tag>\n"}),(0,i.jsx)("h3",{children:"Props"}),(0,i.jsx)(P,{items:[{name:"isDanger?",description:"Color style",type:"boolean"},{name:"isInfo?",description:"Color style",type:"boolean"},{name:"isPrimary?",description:"Color style",type:"boolean"},{name:"isSuccess?",description:"Color style",type:"boolean"},{name:"isWarning?",description:"Color style",type:"boolean"}]})]})},xe=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{children:(0,i.jsxs)(he,{isInfo:!0,isIcon:!0,children:[(0,i.jsx)($,{children:(0,i.jsx)($.Video,{})}),"Video"]})}),(0,i.jsx)(y,{code:"\nimport { Icon, Tag } from '@nulib/design-system';\n\n<Tag isInfo isIcon>\n  <Icon>\n    <Icon.Video />\n  </Icon>\n  Video\n</Tag>\n"}),(0,i.jsx)(P,{items:[{name:"isIcon?",description:"Layout style",type:"boolean"}]})]})},me=(0,o.zo)("aside",{position:"fixed",top:"$1",left:0,bottom:0,overflowY:"auto",width:250,px:"$6",py:"$6"}),ge=(0,o.zo)("ul",{padding:0}),je=(0,o.zo)("li",{padding:"$1 $1 $3",listStyle:"none"}),fe=(0,o.zo)("img",{maxWidth:"$8"}),be=(0,o.zo)("div",{paddingLeft:250,paddingRight:100}),ye=function(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)(me,{children:[(0,i.jsx)(fe,{src:"".concat("/design-system","/images/N-purple-120.png"),alt:"Northwestern N Logo"}),(0,i.jsxs)(ge,{children:[(0,i.jsx)(je,{children:(0,i.jsx)(t.default,{href:"#button",children:"Button"})}),(0,i.jsx)(je,{children:(0,i.jsx)(t.default,{href:"#checkbox",children:"Checkbox"})}),(0,i.jsx)(je,{children:(0,i.jsx)(t.default,{href:"#icon",children:"Icon"})}),(0,i.jsx)(je,{children:(0,i.jsx)(t.default,{href:"#notification",children:"Notification"})}),(0,i.jsx)(je,{children:(0,i.jsx)(t.default,{href:"#placeholder",children:"Placeholder"})}),(0,i.jsx)(je,{children:(0,i.jsx)(t.default,{href:"#popover",children:"Popover"})}),(0,i.jsx)(je,{children:(0,i.jsx)(t.default,{href:"#tag",children:"Tag"})})]})]}),(0,i.jsxs)(be,{children:[(0,i.jsx)("h1",{children:"Northwestern Libraries Design System"}),(0,i.jsxs)("p",{children:["A global design system for NUL ReactJS UI components, intended for all front end applications, NPM modules, and user interfaces. Built with"," ",(0,i.jsx)("a",{href:"https://nextjs.org/",children:"NextJS"}),","," ",(0,i.jsx)("a",{href:"https://stitches.dev/",children:"Stitches UI"}),", and packaged with"," ",(0,i.jsx)("a",{href:"https://rollupjs.org/",children:"Rollup"}),". Inspired by"," ",(0,i.jsx)("a",{href:"https://www.radix-ui.com",children:"Radix UI"})]}),(0,i.jsxs)(s,{size:"1",children:[(0,i.jsx)("h2",{id:"button",children:"Button"}),(0,i.jsx)("p",{children:"A Button"}),(0,i.jsx)(O,{})]}),(0,i.jsx)(l,{}),(0,i.jsxs)(s,{size:"1",children:[(0,i.jsx)("h2",{id:"button",children:"Button w/ Icon"}),(0,i.jsx)("p",{children:"A Button can wrap multiple elements. To use an icon, wrap your button text in a `span`"}),(0,i.jsx)(B,{})]}),(0,i.jsx)(l,{}),(0,i.jsxs)(s,{size:"1",children:[(0,i.jsx)("h2",{id:"icon",children:"Icon"}),(0,i.jsxs)("p",{children:["An Icon is a component that renders an SVG HTML element from a controlled set of"," ",(0,i.jsx)("a",{href:"https://ionic.io/ionicons",target:"_blank",rel:"noreferrer",children:"Ionicon"})," ","sourced icons."]}),(0,i.jsx)(D,{})]}),(0,i.jsx)(l,{}),(0,i.jsxs)(s,{size:"1",children:[(0,i.jsx)("h2",{id:"notification",children:"Notification"}),(0,i.jsx)("p",{children:"A Notification"}),(0,i.jsx)(_,{})]}),(0,i.jsx)(l,{}),(0,i.jsxs)(s,{size:"1",children:[(0,i.jsx)("h2",{id:"placeholder",children:"Placeholder"}),(0,i.jsxs)("p",{children:["A Placeholder renders an element that extends to the bounds of its container. Children of placeholders can be textual,"," ",(0,i.jsx)("a",{href:"#icon",children:"Icon"})," components, or images, and are centered horizontally and vertically."]}),(0,i.jsx)(q,{})]}),(0,i.jsx)(l,{}),(0,i.jsxs)(s,{size:"1",children:[(0,i.jsx)("h2",{id:"popover",children:"Popover"}),(0,i.jsxs)("p",{children:["A popover is a component that couples a trigger with some content that displays in an attached pane. When wrapping a Button component with Popover.Trigger, the ",(0,i.jsx)("strong",{children:"as"})," prop should be used on Buttons."]}),(0,i.jsx)(ae,{})]}),(0,i.jsx)(l,{}),(0,i.jsxs)(s,{size:"1",children:[(0,i.jsx)("h2",{id:"popover-text",children:"Popover w/ Text Trigger"}),(0,i.jsx)("p",{children:"Popover Triggers can also wrap around text. Though not required this text should indicate to the user that it is actionable in some way."}),(0,i.jsx)(ce,{})]}),(0,i.jsx)(l,{}),(0,i.jsxs)(s,{size:"1",children:[(0,i.jsx)("h2",{id:"tag",children:"Tag"}),(0,i.jsx)("p",{children:"A Tag"}),(0,i.jsx)(pe,{})]}),(0,i.jsx)(l,{}),(0,i.jsxs)(s,{size:"1",children:[(0,i.jsx)("h2",{id:"button",children:"Tag w/ Icon"}),(0,i.jsx)("p",{children:"A Tag can wrap multiple Icon components. To use an icon, as the prop isIcon."}),(0,i.jsx)(xe,{})]})]})]})}}},function(e){e.O(0,[76,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);