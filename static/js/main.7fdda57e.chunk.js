(this["webpackJsonpreact-cookienotice-example"]=this["webpackJsonpreact-cookienotice-example"]||[]).push([[0],{12:function(e,n,t){e.exports=t(23)},22:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(7),a=t.n(o),i=t(2),c=t(1);function p(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}function u(e,n){return n||(n=e.slice(0)),e.raw=n,e}function s(){var e=u(["\n  border-style: none;\n  color: #000000;\n  width: 100%;\n  font-size: 16px;\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 12px 24px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 0.5s ease 0s;\n  cursor: pointer;\n\n  &:hover {\n    background: #ffffff;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  }\n\n  &:active {\n    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),\n      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:not(:first-child) {\n    margin-left: 8px;\n  }\n\n  &.dark {\n    background: #323232;\n    color: #ffffff;\n\n    &:hover {\n      background: #3a3a3a;\n    }\n  }\n\n  @media (max-width: 768px) {\n    &:not(:first-child) {\n      margin-left: 0;\n    }\n\n    font-size: 12px;\n    margin: 5px 0;\n  }\n"]);return s=function(){return e},e}var f=c.a.button(s()),l=function(e){function n(){return e.apply(this,arguments)||this}return p(n,e),n.prototype.render=function(){var e=this.props,n=e.label,t=e.onButtonClick,o=e.darkTheme;return Object(r.createElement)(f,{className:Object(i.a)("react-cookienotice-accept-button",{dark:o}),onClick:t},Object(r.createElement)("span",null,n))},n}(r.Component);function d(){var e=u(["\n  font-size: 16px;\n  height: auto;\n  color: #b5b5b5;\n  padding: 10px 18px;\n  border: 1px solid #b5b5b5;\n  border-radius: 24px;\n  box-shadow: none;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: all 0.5s ease 0s;\n\n  &:hover {\n    color: #000000;\n    border-color: #000000;\n  }\n\n  &:not(:first-child) {\n    margin-left: 8px;\n  }\n\n  &.dark {\n    &:hover {\n      color: #ffffff;\n      border-color: #ffffff;\n    }\n  }\n\n  @media (max-width: 768px) {\n    &:not(:first-child) {\n      margin-left: 0;\n    }\n\n    font-size: 12px;\n    margin: 5px 0;\n  }\n"]);return d=function(){return e},e}var x=c.a.a(d()),b=function(e){function n(){return e.apply(this,arguments)||this}return p(n,e),n.prototype.render=function(){var e=this.props,n=e.label,t=e.link,o=e.openInNewTab,a=e.darkTheme;return Object(r.createElement)(x,{className:Object(i.a)("react-cookienotice-read-more-button",{dark:a}),href:t,target:o?"_blank":"_self"},n)},n}(r.Component);function m(){var e=u(["\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return m=function(){return e},e}var h=c.a.div(m()),k=function(e){function n(){return e.apply(this,arguments)||this}return p(n,e),n.prototype.render=function(){var e=this.props,n=e.acceptButtonLabel,t=e.onAcceptButtonClick,o=e.readMoreButtonLabel,a=e.readMoreButtonLink,i=e.readMoreButtonOpenInNewTab,c=e.reverseButtons,p=e.darkTheme,u=[Object(r.createElement)(l,{key:"accept-button",label:n,onButtonClick:t,darkTheme:p}),Object(r.createElement)(b,{key:"read-more-button",label:o,link:a,openInNewTab:i,darkTheme:p})];return Object(r.createElement)(h,{className:"react-cookienotice-buttons-wrapper"},c?u.reverse():u)},n}(r.Component);function w(){var e=u(["\n  &:before {\n    content: '\ud83c\udf6a';\n    font-size: 30px;\n  }\n"]);return w=function(){return e},e}var g=c.a.div(w()),v=function(e){function n(){return e.apply(this,arguments)||this}return p(n,e),n.prototype.render=function(){return Object(r.createElement)(g,{className:"react-cookienotice-icon"})},n}(r.Component);function y(){var e=u(["\n  color: #000000;\n  font-size: 16px;\n  margin: 0 20px;\n\n  &.dark {\n    color: #ffffff;\n  }\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]);return y=function(){return e},e}var j=c.a.span(y()),E=function(e){function n(){return e.apply(this,arguments)||this}return p(n,e),n.prototype.render=function(){var e=this.props,n=e.label,t=e.darkTheme;return Object(r.createElement)(j,{className:Object(i.a)("react-cookienotice-text",{dark:t})},n)},n}(r.Component),O=function(e){return"string"===typeof e?e:"Accept"},B=function(e){return"string"===typeof e?e:"Read more"},C=function(e){if("string"===typeof e){if(0===e.lastIndexOf("http://",0)||0===e.lastIndexOf("https://",0))return e;throw new Error('[react-cookienotice] readMoreButtonLink parameter should starts with "http://" or "https://"')}return"http://aboutcookies.org/"},T=function(e){return"boolean"!==typeof e||e},N=function(e){return"string"===typeof e?e:"This website uses cookies to improve your browsing experience."},L=function(e){return"boolean"===typeof e&&e},I=function(e){if("number"===typeof e){if(e>=0)return e;throw new Error("[react-cookienotice] borderRadius parameter should not be negative")}return 32},M=function(e){if("string"===typeof e){if("space-around"===e||"space-between"===e)return e;throw new Error("[react-cookienotice] Accepted values for justifyContent parameter: space-around or space-between")}return"space-between"},z=function(e){if("string"===typeof e){if(/\s/.test(e))throw new Error("[react-cookienotice] cookieName parameter should not contain whitespace");if(""===e)throw new Error("[react-cookienotice] cookieName parameter should have at least one character");return e}return"allow-cookies"},A="3.7.0";function R(){var e=u(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  max-width: ","px;\n  opacity: 1;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 24px 32px, rgba(0, 0, 0, 0.1) 0px 8px 32px;\n  margin: 0 auto 48px;\n  background: #ffffff;\n  padding: 16px;\n  border-radius: ","px;\n\n  &.dark {\n    background: #3a3a3a;\n  }\n\n  @media (max-width: ","px) {\n    margin-left: 48px;\n    margin-right: 48px;\n  }\n"]);return R=function(){return e},e}function _(){var e=u(["\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  z-index: 1201;\n"]);return _=function(){return e},e}function W(){var e=u(["\n  opacity: 1;\n  transition: opacity 0.5s linear;\n\n  &.cookies-allowed {\n    opacity: 0;\n  }\n"]);return W=function(){return e},e}var U=c.a.div(W()),D=c.a.div(_()),J=c.a.div(R(),(function(e){return e.justifyContent}),(function(e){return e.maxWidth}),(function(e){return e.borderRadius}),(function(e){return e.maxWidth+48})),S=function(e){function n(n){var t;t=e.call(this,n)||this;var r,o,a="true"===(r=z(n.cookieName),document.cookie.split("; ").reduce((function(e,n){var t=n.split("=");return t[0]===r?decodeURIComponent(t[1]):e}),null)),i="boolean"===typeof(o=n.darkTheme)?o:window.matchMedia("(prefers-color-scheme: dark)").matches;return t.state={cookiesAllowed:a,darkTheme:i},t}p(n,e);var t=n.prototype;return t.setCookie=function(){var e=this.props,n=e.cookieExpiration,t=e.cookieName,r=function(e){if("number"===typeof e){if(e>0)return e;throw new Error("[react-cookienotice] cookieExpiration parameter should be more than 0 day")}return 30}(n),o=z(t);this.setState({cookiesAllowed:!0},(function(){!function(e,n,t,r){void 0===r&&(r="/");var o=new Date(Date.now()+864e5*t).toUTCString();document.cookie=e+"="+encodeURIComponent(n)+"; expires="+o+"; path="+r}(o,"true",r)}))},t.render=function(){var e,n=this,t=this.props,o=t.acceptButtonLabel,a=t.readMoreButtonLabel,c=t.readMoreButtonLink,p=t.openInNewTab,u=t.cookieTextLabel,s=t.reverseButtons,f=t.borderRadius,l=t.justifyContent,d=t.maxWidth,x=this.state,b=x.cookiesAllowed,m=x.darkTheme;return Object(r.createElement)(U,{className:Object(i.a)("react-cookienotice-root version-"+A,{"cookies-allowed":b})},Object(r.createElement)(D,{className:"react-cookienotice-stick-to-bottom"},Object(r.createElement)(J,{className:Object(i.a)("react-cookienotice-wrapper",{dark:m}),borderRadius:I(f),justifyContent:M(l),maxWidth:(e=d,"number"===typeof e?e<400?400:e:1e3)},Object(r.createElement)(v,null),Object(r.createElement)(E,{label:N(u),darkTheme:m}),Object(r.createElement)(k,{acceptButtonLabel:O(o),onAcceptButtonClick:function(){return n.setCookie()},readMoreButtonLabel:B(a),readMoreButtonLink:C(c),readMoreButtonOpenInNewTab:T(p),reverseButtons:L(s),darkTheme:m}))))},n}(r.Component),q=function(){return r.createElement(S,null)};t(22);a.a.render(r.createElement(q,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7fdda57e.chunk.js.map