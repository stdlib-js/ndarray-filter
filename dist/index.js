"use strict";var z=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var j=z(function(J,E){"use strict";var V=require("@stdlib/assert-is-plain-object"),b=require("@stdlib/assert-is-function"),C=require("@stdlib/assert-is-ndarray-like"),F=require("@stdlib/ndarray-base-assert-is-order"),O=require("@stdlib/assert-has-own-property"),P=require("@stdlib/ndarray-base-buffer-ctors"),D=require("@stdlib/array-base-zeros"),I=require("@stdlib/ndarray-shape"),T=require("@stdlib/ndarray-dtype"),L=require("@stdlib/ndarray-order"),N=require("@stdlib/ndarray-base-numel"),S=require("@stdlib/ndarray-base-next-cartesian-index").assign,A=require("@stdlib/blas-base-gcopy"),v=require("@stdlib/string-format");function B(r,a,g,k){var f,p,t,i,e,c,m,n,h,u,y,s,l,o,w,q,d;if(!C(r))throw new TypeError(v("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",r));if(arguments.length<3?i=a:arguments.length===3?b(a)?(i=a,m=g):(f=!0,e=a,i=g):(f=!0,e=a,i=g,m=k),!b(i))throw new TypeError(v("invalid argument. Callback argument must be a function. Value: `%s`.",i));if(f){if(!V(e))throw new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",e));if(O(e,"dtype")?s=e.dtype:s=T(r),O(e,"order")){if(!F(e.order))throw new TypeError(v("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",e.order));n=e.order}}else s=T(r);if(c=P(s),c===null)throw new TypeError(v("invalid option. `%s` option must be a recognized data type. Option: `%s`.","dtype",e.dtype));for(n===void 0&&(n=L(r)),l=I(r),o=N(l),p=l.length,n==="row-major"?h=p-1:h=0,u=D(p),t={length:0},d=0;d<o;d++)d>0&&(u=S(l,n,u,h,u)),q=r.get.apply(r,u),i.call(m,q,u.slice(),r)&&(t[t.length]=q,t.length+=1);return o=t.length,y=new c(o),A(o,t,1,y,1),w=new r.constructor(s,y,[o],[1],0,n),w}E.exports=B});var G=j();module.exports=G;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
