"use strict";var V=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var k=V(function(K,j){"use strict";var C=require("@stdlib/assert-is-plain-object"),O=require("@stdlib/assert-is-function"),F=require("@stdlib/assert-is-ndarray-like"),P=require("@stdlib/ndarray-base-assert-is-order"),T=require("@stdlib/assert-has-own-property"),D=require("@stdlib/ndarray-base-buffer-ctors"),I=require("@stdlib/array-base-zeros"),L=require("@stdlib/ndarray-shape"),E=require("@stdlib/ndarray-dtype"),N=require("@stdlib/ndarray-order"),S=require("@stdlib/ndarray-base-numel"),A=require("@stdlib/ndarray-base-next-cartesian-index").assign,B=require("@stdlib/blas-base-gcopy"),v=require("@stdlib/string-format");function G(r,a,g,z){var c,f,o,i,e,p,m,h,t,y,n,q,s,l,u,b,w,d;if(!F(r))throw new TypeError(v("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",r));if(arguments.length<3?i=a:arguments.length===3?O(a)?(i=a,h=g):(c=!0,e=a,i=g):(c=!0,e=a,i=g,h=z),!O(i))throw new TypeError(v("invalid argument. Callback argument must be a function. Value: `%s`.",i));if(c){if(!C(e))throw new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",e));if(T(e,"dtype")?s=e.dtype:s=E(r),T(e,"order")){if(!P(e.order))throw new TypeError(v("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",e.order));t=e.order}}else s=E(r);if(p=D(s),p===null)throw new TypeError(v("invalid option. `%s` option must be a recognized data type. Option: `%s`.","dtype",e.dtype));for(t===void 0&&(t=N(r)),l=L(r),u=S(l),f=l.length,t==="row-major"?y=f-1:y=0,n=I(f),o={length:0},m=-1,d=0;d<u;d++)d>0&&(n=A(l,t,n,y,n)),w=r.get.apply(r,n),i.call(h,w,n.slice(),r)&&(o.length+=1,m+=1,o[m]=w);return u=o.length,q=new p(u),B(u,o,1,q,1),b=new r.constructor(s,q,[u],[1],0,t),b}j.exports=G});var H=k();module.exports=H;
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
