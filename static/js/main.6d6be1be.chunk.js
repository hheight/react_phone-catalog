(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),o=a(1),s=a(2),i=function(){return c.a.createElement("div",{className:"logo"},c.a.createElement(o.b,{to:"/",className:"logo__link"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo__img"})))},u=function(){var e=Object(n.useCallback)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container footer__container"},c.a.createElement(i,null),c.a.createElement("div",{className:"footer__links"},c.a.createElement(o.b,{to:"/",className:"footer__link"},"Github"),c.a.createElement(o.b,{to:"/",className:"footer__link"},"Contacts"),c.a.createElement(o.b,{to:"/",className:"footer__link"},"Rights")),c.a.createElement("div",{className:"footer__top-button-container"},c.a.createElement("p",{className:"footer__paragraph"},"Back to top"),c.a.createElement("button",{type:"button","aria-label":"BackToTop",className:"footer__top-button",onClick:e}))))},m=function(e){var t=e.title,a=e.link,n=e.exact;return c.a.createElement("li",{className:"nav__item"},c.a.createElement(o.c,{to:a,exact:n,className:"nav__link",activeClassName:"nav__link--active"},t))},d=[{title:"Home",link:"/",exact:!0},{title:"Phones",link:"/phones",exact:!1},{title:"Tablets",link:"/tablets",exact:!1},{title:"Accessories",link:"/accessories",exact:!1}],p=function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},d.map((function(e){var t=e.title,a=e.link,n=e.exact;return c.a.createElement(m,{key:t,title:t,link:a,exact:n})}))))},_=function(){return c.a.createElement("div",{className:"favorites"},c.a.createElement(o.b,{to:"/",className:"favorites__button"}))},b=function(){return c.a.createElement("div",{className:"cart"},c.a.createElement(o.b,{to:"/",className:"cart__button"}))},f=a(4),E=a.n(f),h=function(e){var t=e.inputValue,a=e.searchProducts,r=e.searchReset,l=Object(n.useRef)(null),o=Object(n.useCallback)((function(){r(),l&&l.current&&l.current.focus()}),[r]);return c.a.createElement("div",{className:"search"},c.a.createElement("input",{ref:l,type:"text",value:t,className:"search__input",placeholder:"Search in products...",onChange:a}),c.a.createElement("button",{type:"button","aria-label":"Clear input",className:E()({search__button:!0,"search__button--clear":t}),onClick:o,disabled:0===t.length}))},g=a(23),v=a(5),N=a(12),k=a.n(N),O=a(17),j="https://mate-academy.github.io/react_phone-catalog/api/products",y=function(){var e=Object(O.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,".json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var w=function(e,t){var a;return function(){for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];clearTimeout(a),a=setTimeout((function(){e.apply(void 0,c)}),t)}},C=function(){var e=Object(s.f)(),t=Object(s.g)(),a=new URLSearchParams(t.search),c=a.get("query")||"",r=a.get("sortBy"),l=Object(n.useState)(c),o=Object(v.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)([]),d=Object(v.a)(m,2),p=d[0],_=d[1];Object(n.useEffect)((function(){return y().then(_),function(){return u("")}}),[t.pathname]);var b=Object(n.useCallback)(w((function(t){a.set("query",t.toLowerCase()),a.get("query")||a.delete("query"),e.push({search:a.toString()})}),500),[]),f=Object(n.useCallback)((function(e){var t=e.target.value;u(t),b(t)}),[b]),E=Object(n.useMemo)((function(){return p.filter((function(e){return e.name.toLowerCase().includes(c)}))}),[p,c]);return{inputValue:i,searchProducts:f,searchedProducts:E=Object(n.useMemo)((function(){return Object(g.a)(E).sort((function(e,t){switch(r){case"Newest":return e.age-t.age;case"From-A-to-Z":return e.name.localeCompare(t.name);case"From-Z-to-A":return t.name.localeCompare(e.name);case"Cheapest":return e.price-t.price;default:return 0}}))}),[E,r]),location:t,history:e,search:a,searchReset:function(){u(""),a.get("query")||a.delete("query"),e.push({search:""})}}},P=function(){var e=C(),t=e.inputValue,a=e.searchProducts,n=e.searchReset,r=e.location;return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__flex-wrap"},c.a.createElement("div",{className:"header__logo"},c.a.createElement(i,null)),c.a.createElement("div",{className:"header__nav"},c.a.createElement(p,null))),c.a.createElement("div",{className:"header__flex-wrap"},"/"!==r.pathname&&c.a.createElement(h,{inputValue:t,searchProducts:a,searchReset:n}),c.a.createElement(_,null),c.a.createElement(b,null)))},S=function(e){var t=e.name,a=e.imageUrl,n=e.price,r=e.screen,l=e.capacity,o=e.ram,s=e.discount,i=e.id,u=e.productCardRef,m=r.replace(" inches",'"'),d=n*(s/100)+n,p="".concat(parseInt(l||"32000",10)," MB"),_="".concat(parseInt(o||"1000",10)," MB");return c.a.createElement("article",{className:"product",ref:u},c.a.createElement("img",{className:"product__image",src:a,alt:t}),c.a.createElement("p",{className:"product__title"},t),c.a.createElement("div",{className:"product__price-container"},c.a.createElement("span",{className:"product__price"},"$".concat(n)),s>0&&c.a.createElement("span",{className:"product__discount"},"$".concat(d))),c.a.createElement("span",{className:"product__split-line"}),c.a.createElement("div",{className:"product__details"},c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"Screen"),c.a.createElement("span",{className:"product__details-info"},m)),c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"Capacity"),c.a.createElement("span",{className:"product__details-info"},p)),c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"RAM"),c.a.createElement("span",{className:"product__details-info"},_))),c.a.createElement("div",{className:"product__buttons__container"},c.a.createElement("button",{className:"product__button",type:"button"},"Add to cart"),c.a.createElement("label",{className:"product__button-favorite",htmlFor:"button-favorite-".concat(i)},c.a.createElement("input",{className:"product__button-favorite-input",type:"checkbox",id:"button-favorite-".concat(i)}),c.a.createElement("span",{className:"product__button-favorite-checkmark"}))))},x=function(e){var t=e.products,a=e.position,n=e.animationDuration,r=e.productCardRef,l=e.frameSize,o=e.itemWidth;return c.a.createElement("div",{className:"slider",style:{width:"".concat(l*o,"px")}},c.a.createElement("div",{className:"slider__list",style:{transform:"translateX(".concat(a,"px)"),transition:"transform ".concat(n,"ms")}},t.map((function(e){return c.a.createElement(S,Object.assign({key:e.id},e,{productCardRef:r}))}))))},R=a(22),M="left",q="right",L="Items on page",B="Sort by",F=[{option:"Newest"},{option:"From A to Z"},{option:"From Z to A"},{option:"Cheapest"}],T=[{option:"All"},{option:"4"},{option:"8"},{option:"16"}],A=function(e){var t=e.handleSlide,a=e.direction,n=e.position,r=e.maxPosition,l=a===M,o=a===q,s=0===n,i=n===r;return c.a.createElement("button",{type:"button","aria-label":"Slide ".concat(a),className:E()(Object(R.a)({slider__button:!0},"slider__button-".concat(a),!0)),onClick:function(){return t(a)},disabled:l&&s||o&&i})},D=function(e){var t=e.title;return c.a.createElement("h2",{className:"section__heading heading"},t)},I=function(e){var t=e.title,a=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(0),o=Object(v.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(0),m=Object(v.a)(u,2),d=m[0],p=m[1],_=Object(n.useCallback)((function(e){null!==e&&p(e.getBoundingClientRect().width)}),[]),b=d+16;Object(n.useEffect)((function(){y().then((function(e){return r(e)}))}),[]);var f=Object(n.useMemo)((function(){return c.filter((function(e){return 0!==e.discount}))}),[c]),E=Object(n.useMemo)((function(){return c.filter((function(e){return e.age<10&&!e.discount}))}),[c]),h=Object(n.useMemo)((function(){switch(e){case"Hot prices":return f;case"Brand new models":return E;default:return[]}}),[e,f,E]),g=2*b,N=4*b-b*h.length,k=Object(n.useCallback)((function(e){i("left"===e?s+g>0?0:s+g:s-g<N?N:s-g)}),[s,N,g]);return{currentProducts:h,position:s,step:2,itemWidth:b,animationDuration:700,handleSlide:k,maxPosition:N,productCardRef:_,frameSize:4}}(t),r=a.currentProducts,l=a.position,o=a.step,s=a.itemWidth,i=a.animationDuration,u=a.handleSlide,m=a.maxPosition,d=a.productCardRef,p=a.frameSize;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"section__heading-container"},c.a.createElement(D,{title:t}),c.a.createElement("div",{className:"slider__controls"},c.a.createElement(A,{handleSlide:u,direction:"left",position:l,maxPosition:m}),c.a.createElement(A,{handleSlide:u,direction:"right",position:l,maxPosition:m}))),c.a.createElement(x,{products:r,position:l,step:o,itemWidth:s,frameSize:p,animationDuration:i,productCardRef:d}))},z=function(e){var t=e.slides,a=e.toMove,n=e.duration;return c.a.createElement("ul",{className:"carousel__list",style:{transform:"translateX(".concat(-a,"px)"),transitionDuration:"".concat(n,"s")}},t.map((function(e){var t=e.id,a=e.name,n=e.src;return c.a.createElement("li",{key:t,className:"carousel__item"},c.a.createElement("img",{className:"carousel__image",src:n,alt:a}))})))},G=function(e){var t=e.slides,a=e.active,n=e.goToSlide;return c.a.createElement("div",{className:"carousel__rectangles"},t.map((function(e,t){return c.a.createElement("button",{key:e.id,type:"button","aria-label":"Got to ".concat(t+1," slide"),onClick:function(){return n(t)},className:E()({carousel__rectangle:!0,"carousel__rectangle--active":a===t})})})))},V=function(e){var t=e.changeSlide,a=e.direction;return c.a.createElement("button",{type:"button",className:"carousel__btn carousel__btn--".concat(a),"aria-label":"Slide ".concat(a),onClick:function(){return t(a)}})},W=[{id:1,name:"phones",src:"./img/showcase-carousel/first.jpg"},{id:2,name:"tablets",src:"./img/showcase-carousel/second.jpg"},{id:3,name:"accessories",src:"./img/showcase-carousel/third.jpg"}],Z=function(){var e=Object(n.useState)(0),t=Object(v.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),o=Object(v.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(0),m=Object(v.a)(u,2),d=m[0],p=m[1],_=W.length-1,b=Object(n.useCallback)((function(e){null!==e&&p(e.getBoundingClientRect().width)}),[]),f=Object(n.useCallback)((function(e){e===M&&(a<=0?(r(a+d*_),i(_)):(r(a-d),i(s-1))),e===q&&(a>=d*_?(r(0),i(0)):(r(a+d),i(s+1)))}),[a,d,s,_]);Object(n.useEffect)((function(){var e=setInterval((function(){return f(q)}),4e3);return function(){return clearInterval(e)}}),[f]);var E=Object(n.useCallback)((function(e){r(e<s?a-d*(s-e):a+d*(e-s)),i(e)}),[s,a,d]);return c.a.createElement("div",{className:"carousel section__carousel"},c.a.createElement("div",{className:"carousel__container",ref:b},c.a.createElement(V,{changeSlide:f,direction:"left"}),c.a.createElement(V,{changeSlide:f,direction:"right"}),c.a.createElement(z,{slides:W,toMove:a,duration:.7}),c.a.createElement(G,{slides:W,active:s,goToSlide:E})))},H=function(){var e=C(),t=e.searchedProducts,a=e.history,c=e.search,r=e.location,l=Object(n.useMemo)((function(){return t.filter((function(e){return"phone"===e.type}))}),[t]),o=Object(n.useMemo)((function(){return t.filter((function(e){return"tablet"===e.type}))}),[t]),s=0,i=t,u=Number(c.get("page"))||1,m=Number(c.get("perPage"))||t.length,d=u*m,p=d-m;"/phones"===r.pathname&&(s=l.length,i=l.slice(p,d)),"/tablets"===r.pathname&&(s=o.length,i=o.slice(p,d));return{currentProducts:i,numberOfProducts:s,changePage:function(e){c.set("page",e.toString()),a.push({search:c.toString()})},queryCondition:function(){return c.get("query")?"result":"model"},perPage:m,page:u,search:c,phones:l,tablets:o,location:r}},J=function(e){var t=e.title,a=H(),n=a.phones,r=a.tablets,l=a.queryCondition,o=0,s=t.toLowerCase();return s.includes("phones")&&(o=n.length),s.includes("tablets")&&(o=r.length),c.a.createElement("p",{className:"products-amount categories__amount"},o," ",l(),1!==o&&"s")},U=function(e){var t=e.title,a=e.link;return c.a.createElement("div",{className:"categories__category"},c.a.createElement(o.b,{to:"/".concat(a),className:"categories__link"},c.a.createElement("div",{className:"categories__photo"},c.a.createElement("img",{className:"categories__image",src:"./img/categories/category-".concat(a,".jpg"),alt:a})),c.a.createElement("h3",{className:"categories__title"},t),c.a.createElement(J,{title:t})))},X=[{title:"Mobile phones",link:"phones"},{title:"Tablets",link:"tablets"},{title:"Accessories",link:"accessories"}],$=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,{title:"Shop by category"}),c.a.createElement("div",{className:"categories"},X.map((function(e){var t=e.title,a=e.link;return c.a.createElement(U,{key:t,title:t,link:a})}))))},K=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"visually-hidden"},"React Products Catalog"),c.a.createElement("section",{className:"section"},c.a.createElement(Z,null)),c.a.createElement("section",{className:"section"},c.a.createElement(I,{title:"Hot prices"})),c.a.createElement("section",{className:"section"},c.a.createElement($,null)),c.a.createElement("section",{className:"section"},c.a.createElement(I,{title:"Brand new models"})))},Q=function(){var e=H(),t=e.currentProducts,a=e.numberOfProducts;return c.a.createElement(c.a.Fragment,null,a?c.a.createElement("div",{className:"products section__products"},t.map((function(e){return c.a.createElement(S,Object.assign({key:e.id},e))}))):c.a.createElement("p",{className:"section__no-products-info"},"No products with such title...try again."))},Y=function(e){var t=e.isListOpen;return c.a.createElement("span",{className:E()({dropdown__arrow:!0,"dropdown__arrow--up":t})})},ee=function(e){var t=e.list,a=e.heading,r=function(e,t){var a=Object(n.useState)(!1),c=Object(v.a)(a,2),r=c[0],l=c[1],o=Object(n.useState)(e[0].option),s=Object(v.a)(o,2),i=s[0],u=s[1],m=Object(n.useCallback)((function(){return l(!1)}),[l]),d=C(),p=d.search,_=d.history;Object(n.useEffect)((function(){r?window.addEventListener("click",m):window.removeEventListener("click",m)}),[r,m]);var b=Object(n.useCallback)((function(e){u(e),t===B&&p.set("sortBy",e.split(" ").join("-")),t===L&&p.set("perPage",e),p.delete("page"),_.push({search:p.toString()})}),[_,p,t]);return{toggleList:function(){return l(!r)},selectedOption:i,isListOpen:r,handleSort:b}}(t,a),l=r.toggleList,o=r.selectedOption,s=r.isListOpen,i=r.handleSort;return c.a.createElement("div",{className:"dropdown"},c.a.createElement("p",{className:"dropdown__heading"},a),c.a.createElement("div",{className:"dropdown__wrapper"},c.a.createElement("button",{type:"button",className:"dropdown__header",onClick:l},o,c.a.createElement(Y,{isListOpen:s})),c.a.createElement("ul",{className:E()({dropdown__list:!0,"dropdown__list--is-open":s})},t.map((function(e){var t=e.option;return c.a.createElement("li",{key:t},c.a.createElement("a",{href:"#!",className:E()({"dropdown__list-item":!0,"dropdown__list-item--active":o===t}),onClick:function(e){e.preventDefault(),i(t)}},t))})))))},te=function(e){for(var t=e.total,a=e.perPage,n=e.page,r=e.changePage,l=[],o=1;o<=Math.ceil(t/a);o+=1)l.push(o);return c.a.createElement("div",{className:"pagination section__pagination"},c.a.createElement("button",{type:"button","aria-label":"Go left",className:"pagination__button pagination__button--left",onClick:function(){return r(n-1)},disabled:1===n}),c.a.createElement("ul",{className:"pagination__list"},l.map((function(e){return c.a.createElement("li",{className:"pagination__item",key:e},c.a.createElement("button",{type:"button",onClick:function(){return r(e)},className:E()({pagination__button:!0,"pagination__button--active":n===e})},e))}))),c.a.createElement("button",{type:"button","aria-label":"Go right",className:"pagination__button pagination__button--right",onClick:function(){return r(n+1)},disabled:n===l.length}))},ae=function(e){var t=e.to,a=e.label;return c.a.createElement("li",{className:"breadcrumbs__item"},c.a.createElement("span",{className:"breadcrumbs__arrow"}),c.a.createElement(o.c,{to:t,className:"breadcrumbs__link",activeClassName:"breadcrumbs__link--active"},a))},ne=[{to:"/phones",label:"Phones"},{to:"/tablets",label:"Tablets"},{to:"/favourites",label:"Favourites"}],ce=function(){var e=Object(s.g)(),t=Object(n.useMemo)((function(){return ne.filter((function(t){return t.to===e.pathname}))}),[e.pathname]);return c.a.createElement("ul",{className:"breadcrumbs section__breadcrumbs"},c.a.createElement(o.c,{to:"/",className:"breadcrumbs__item breadcrumbs__home",activeClassName:"breadcrumb__link--active"}),t.map((function(e){return c.a.createElement(ae,Object.assign({},e,{key:e.to}))})))},re=function(){var e=H(),t=e.numberOfProducts,a=e.changePage,n=e.perPage,r=e.page,l=e.search,o=e.location;return c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:E()({section:!0,pt24:"/"!==o.pathname})},!l.get("query")&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ce,null),c.a.createElement(D,{title:"Mobile phones"})),0!==t&&c.a.createElement(J,{title:"phones"}),!l.get("query")&&c.a.createElement("div",{className:"section__dropdowns"},c.a.createElement(ee,{heading:B,list:F}),c.a.createElement(ee,{heading:L,list:T})),c.a.createElement(Q,null),t>n&&c.a.createElement(te,{total:t,perPage:n,page:r,changePage:a})))},le=function(){var e=H(),t=e.numberOfProducts,a=e.changePage,n=e.perPage,r=e.page,l=e.search,o=e.location;return c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:E()({section:!0,pt24:"/"!==o.pathname})},!l.get("query")&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ce,null),c.a.createElement(D,{title:"Tablets"})),0!==t&&c.a.createElement(J,{title:"tablets"}),!l.get("query")&&c.a.createElement("div",{className:"section__dropdowns"},c.a.createElement(ee,{heading:B,list:F}),c.a.createElement(ee,{heading:L,list:T})),c.a.createElement(Q,null),t>n&&c.a.createElement(te,{total:t,perPage:n,page:r,changePage:a})))},oe=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(P,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(K,null)),c.a.createElement(s.a,{path:"/phones"},c.a.createElement(re,null)),c.a.createElement(s.a,{path:"/tablets"},c.a.createElement(le,null))),c.a.createElement(u,null))};a(35);l.a.render(c.a.createElement(o.a,null,c.a.createElement(oe,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6d6be1be.chunk.js.map