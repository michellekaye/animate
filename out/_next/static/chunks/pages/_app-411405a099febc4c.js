(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8678)}])},1210:function(e,t){"use strict";function n(e,t,n,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,l=r(n(7294)),u=n(6273),c=n(2725),i=n(3462),f=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function y(e,t,n,o){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch(function(e){});var r=o&&void 0!==o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var _=l.default.forwardRef(function(e,t){var n,r,_=e.href,h=e.as,b=e.children,g=e.prefetch,j=e.passHref,m=e.replace,x=e.shallow,C=e.scroll,O=e.locale,M=e.onClick,L=e.onMouseEnter,P=e.onTouchStart,E=e.legacyBehavior,w=void 0===E?!0!==Boolean(!1):E,R=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,w&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));var k=!1!==g,N=l.default.useContext(i.RouterContext),T=l.default.useContext(f.AppRouterContext);T&&(N=T);var S=l.default.useMemo(function(){var e=o(u.resolveHref(N,_,!0),2),t=e[0],n=e[1];return{href:t,as:h?u.resolveHref(N,h):n||t}},[N,_,h]),H=S.href,I=S.as,B=l.default.useRef(H),Z=l.default.useRef(I);w&&(r=l.default.Children.only(n));var D=w?r&&"object"==typeof r&&r.ref:t,K=o(s.useIntersection({rootMargin:"200px"}),3),U=K[0],A=K[1],G=K[2],X=l.default.useCallback(function(e){(Z.current!==I||B.current!==H)&&(G(),Z.current=I,B.current=H),U(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[I,D,H,G,U]);l.default.useEffect(function(){var e=A&&k&&u.isLocalURL(H),t=void 0!==O?O:N&&N.locale,n=v[H+"%"+I+(t?"%"+t:"")];e&&!n&&y(N,H,I,{locale:t})},[I,H,A,O,k,N]);var q={ref:X,onClick:function(e){w||"function"!=typeof M||M(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,c,i,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(n)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:i,scroll:c}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};f?l.default.startTransition(v):v()}}(e,N,H,I,m,x,C,O,Boolean(T),k)},onMouseEnter:function(e){w||"function"!=typeof L||L(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!k&&T)&&u.isLocalURL(H)&&y(N,H,I,{priority:!0})},onTouchStart:function(e){w||"function"!=typeof P||P(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!k&&T)&&u.isLocalURL(H)&&y(N,H,I,{priority:!0})}};if(!w||j||"a"===r.type&&!("href"in r.props)){var z=void 0!==O?O:N&&N.locale,F=N&&N.isLocaleDomain&&d.getDomainLocale(I,z,N.locales,N.domainLocales);q.href=F||p.addBasePath(c.addLocale(I,z,N&&N.defaultLocale))}return w?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},R,q),n)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!l,f=o(r.useState(!1),2),s=f[0],d=f[1],p=o(r.useState(null),2),v=p[0],y=p[1];return r.useEffect(function(){if(l){if(!i&&!s&&v&&v.tagName){var e,o,r,f,p,y,_;return o=function(e){return e&&d(e)},p=(f=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=c.find(function(e){return e.root===n.root&&e.margin===n.margin});if(o&&(t=u.get(o)))return t;var r=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},c.push(n),u.set(n,t),t}(r={root:null==t?void 0:t.current,rootMargin:n})).id,y=f.observer,(_=f.elements).set(v,o),y.observe(v),function(){if(_.delete(v),y.unobserve(v),0===_.size){y.disconnect(),u.delete(p);var e=c.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var h=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(h)}}},[v,i,n,t,s]),[y,s,r.useCallback(function(){d(!1)},[])]};var r=n(7294),a=n(9311),l="function"==typeof IntersectionObserver,u=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var a=o.default.createContext(null);t.LayoutRouterContext=a;var l=o.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=o.default.createContext(null);t.TemplateContext=u},8678:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return f}});var r=n(5893);n(4831);var a=n(3017),l=n.n(a),u=n(1664),c=n.n(u);function i(e){var t=e.children;return(0,r.jsxs)("div",{className:l().layout,children:[(0,r.jsxs)("div",{className:l().legend,children:[(0,r.jsx)("h3",{className:l().legendHeader,children:"Projects"}),(0,r.jsxs)("ul",{className:l().legendList,children:[(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/projects/basketball",children:"Basketball"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/projects/bicycle",children:"Bicycle"})})]})]}),(0,r.jsx)("main",{className:l().layoutMain,children:t})]})}var f=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i,{children:(0,r.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},n))})})}},3017:function(e){e.exports={layout:"layout_layout__KDcHN",layoutMain:"layout_layoutMain__dHiJO",legend:"layout_legend__ymBdK",legendHeader:"layout_legendHeader__Z2nZ0",legendList:"layout_legendList__ZGuIO"}},4831:function(){},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);