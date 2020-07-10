(this["webpackJsonpreact-cookienotice-example"]=this["webpackJsonpreact-cookienotice-example"]||[]).push([[0],{12:function(n,e,t){n.exports=t(23)},22:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t(6),a=t.n(o),i=t(7),c=t(1);function p(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}function u(n,e){return e||(e=n.slice(0)),n.raw=e,n}function s(){var n=u(["\n  border-style: none;\n  color: #000000;\n  width: 100%;\n  font-size: 16px;\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 12px 24px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 0.5s ease 0s;\n  cursor: pointer;\n\n  &:hover {\n    background: #ffffff;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  }\n\n  &:active {\n    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),\n      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:not(:first-child) {\n    margin-left: 8px;\n  }\n\n  @media (max-width: 768px) {\n    &:not(:first-child) {\n      margin-left: 0;\n    }\n\n    font-size: 12px;\n    margin: 5px 0;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    background: #323232;\n    color: #ffffff;\n\n    &:hover {\n      background: #3a3a3a;\n    }\n  }\n"]);return s=function(){return n},n}var f=c.a.button(s()),l=function(n){function e(){return n.apply(this,arguments)||this}return p(e,n),e.prototype.render=function(){var n=this.props,e=n.label,t=n.onButtonClick;return Object(r.createElement)(f,{className:"accept-button",onClick:t},Object(r.createElement)("span",null,e))},e}(r.Component);function d(){var n=u(["\n  font-size: 16px;\n  height: auto;\n  color: #b5b5b5;\n  padding: 10px 18px;\n  border: 1px solid #b5b5b5;\n  border-radius: 24px;\n  box-shadow: none;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: all 0.5s ease 0s;\n\n  &:hover {\n    color: #000000;\n    border-color: #000000;\n  }\n\n  &:not(:first-child) {\n    margin-left: 8px;\n  }\n\n  @media (max-width: 768px) {\n    &:not(:first-child) {\n      margin-left: 0;\n    }\n\n    font-size: 12px;\n    margin: 5px 0;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    &:hover {\n      color: #ffffff;\n      border-color: #ffffff;\n    }\n  }\n"]);return d=function(){return n},n}var x=c.a.a(d()),b=function(n){function e(){return n.apply(this,arguments)||this}return p(e,n),e.prototype.render=function(){var n=this.props,e=n.label,t=n.link,o=n.openInNewTab;return Object(r.createElement)(x,{className:"read-more-button",href:t,target:o?"_blank":"_self"},e)},e}(r.Component);function m(){var n=u(["\n  &:before {\n    content: '\ud83c\udf6a';\n    font-size: 30px;\n  }\n"]);return m=function(){return n},n}var h=c.a.div(m()),g=function(n){function e(){return n.apply(this,arguments)||this}return p(e,n),e.prototype.render=function(){return Object(r.createElement)(h,{className:"cookie-icon"})},e}(r.Component);function k(){var n=u(["\n  color: #000000;\n  font-size: 16px;\n  margin: 0 20px;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    color: #ffffff;\n  }\n"]);return k=function(){return n},n}var w=c.a.span(k()),v=function(n){function e(){return n.apply(this,arguments)||this}return p(e,n),e.prototype.render=function(){var n=this.props.label;return Object(r.createElement)(w,{className:"cookie-text"},n)},e}(r.Component),y=function(n){return"string"===typeof n?n:"Read more"},j=function(n){if("string"===typeof n){if(0===n.lastIndexOf("http://",0)||0===n.lastIndexOf("https://",0))return n;throw new Error('[react-cookienotice] readMoreButtonLink parameter should starts with "http://" or "https://"')}return"http://aboutcookies.org/"},E=function(n){return"boolean"!==typeof n||n},C=function(n){return"string"===typeof n?n:"This website uses cookies to improve your browsing experience."},O=function(n){return"number"===typeof n?n:32},N=function(n){if("string"===typeof n){if("space-around"===n||"space-between"===n)return n;throw new Error("[react-cookienotice] Accepted values for justifyContent parameter: space-around or space-between")}return"space-between"},z=function(n){return"number"===typeof n?n<400?400:n:1e3};function B(){var n=u(["\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return B=function(){return n},n}function I(){var n=u(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  max-width: ","px;\n  opacity: 1;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 24px 32px, rgba(0, 0, 0, 0.1) 0px 8px 32px;\n  margin: 0 auto 48px;\n  background: #ffffff;\n  padding: 16px;\n  border-radius: ","px;\n\n  @media (max-width: ","px) {\n    margin-left: 48px;\n    margin-right: 48px;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    background: #3a3a3a;\n  }\n"]);return I=function(){return n},n}function R(){var n=u(["\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  z-index: 1201;\n"]);return R=function(){return n},n}function T(){var n=u(["\n  opacity: 1;\n  transition: opacity 0.5s linear;\n\n  &.cookies-allowed {\n    opacity: 0;\n  }\n"]);return T=function(){return n},n}var _=c.a.div(T()),A=c.a.div(R()),L=c.a.div(I(),(function(n){return n.justifyContent}),(function(n){return n.maxWidth}),(function(n){return n.borderRadius}),(function(n){return n.maxWidth+48})),W=c.a.div(B()),M=function(n){function e(e){var t;t=n.call(this,e)||this;var r,o="true"===(r="allow-cookies",document.cookie.split("; ").reduce((function(n,e){var t=e.split("=");return t[0]===r?decodeURIComponent(t[1]):n}),null));return t.state={cookiesAllowed:o},t}p(e,n);var t=e.prototype;return t.setCookie=function(){!function(n,e,t,r){void 0===t&&(t=7),void 0===r&&(r="/");var o=new Date(Date.now()+864e5*t).toUTCString();document.cookie=n+"="+encodeURIComponent(e)+"; expires="+o+"; path="+r}("allow-cookies","true"),this.setState({cookiesAllowed:!0})},t.render=function(){var n,e=this,t=this.props,o=t.acceptButtonLabel,a=t.readMoreButtonLabel,c=t.readMoreButtonLink,p=t.openInNewTab,u=t.cookieTextLabel,s=t.reverseButtons,f=t.borderRadius,d=t.justifyContent,x=t.maxWidth,m=this.state.cookiesAllowed,h=[Object(r.createElement)(l,{key:"accept-button",label:(n=o,"string"===typeof n?n:"Accept"),onButtonClick:function(){return e.setCookie()}}),Object(r.createElement)(b,{key:"read-more-button",label:y(a),link:j(c),openInNewTab:E(p)})];return Object(r.createElement)(_,{className:Object(i.a)("cookie-notice-root",{"cookies-allowed":m})},Object(r.createElement)(A,{className:"stick-to-bottom"},Object(r.createElement)(L,{className:"wrapper",borderRadius:O(f),justifyContent:N(d),maxWidth:z(x)},Object(r.createElement)(g,null),Object(r.createElement)(v,{label:C(u)}),Object(r.createElement)(W,{className:"buttons-wrapper"},function(n){return"boolean"===typeof n&&n}(s)?h.reverse():h))))},e}(r.Component);var U=()=>r.createElement(M,null);t(22);a.a.render(r.createElement(U,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.be05ddf2.chunk.js.map