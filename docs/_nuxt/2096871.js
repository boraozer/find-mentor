(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{294:function(e,t,n){},298:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var r={methods:{getPersonTypeLabel:function(e){var t=e.model;return"mentor"===t?"Mentor":"mentee"===t?"Mentee":"Mentor ve Mentee"}}},o={methods:{getPersonTypeColor:function(e){var t=e.model;return"mentor"===t?"var(--color-ui-03)":"mentee"===t?"var(--color-ui-04)":"var(--color-ui-05)"}}},l={methods:{getPersonTypeClass:function(e){var t=e.model;return"mentor"===t?"mentor":"mentee"===t?"mentee":"both"}}}},299:function(e,t,n){"use strict";n(294)},301:function(e,t,n){"use strict";n.r(t);n(5),n(153);let r=null;let o=null;function l(e,t={}){let n=document.createElement(e);return Object.keys(t).forEach(e=>{n[e]=t[e]}),n}function c(e,t,n){return(window.getComputedStyle(e,n||null)||{display:"none"})[t]}function d(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};let t=e;for(;t!==document;){if("none"===c(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}let h=0,style=null;function _(e,t){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=m.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){let{offsetWidth:t,offsetHeight:n}=e,r=new ResizeObserver(()=>{(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==t||e.offsetHeight!==n))&&v(e)}),{detached:o,rendered:l}=d(e);e.__resize_observer_triggered__=!1===o&&!1===l,e.__resize_observer__=r,r.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){v(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(h||(style=function(e){var style=document.createElement("style");return style.type="text/css",style.styleSheet?style.styleSheet.cssText=e:style.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(style),style}('.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}')),function(e){let t=c(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};let n=l("div",{className:"resize-triggers"}),r=l("div",{className:"resize-expand-trigger"}),o=l("div"),d=l("div",{className:"resize-contract-trigger"});r.appendChild(o),n.appendChild(r),n.appendChild(d),e.appendChild(n),e.__resize_triggers__={triggers:n,expand:r,expandChild:o,contract:d},x(e),e.addEventListener("scroll",f,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=d(e).rendered,window.MutationObserver){let t=new MutationObserver(e.__resize_mutation_handler__);t.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=t}e.__resize_listeners__.push(t),h++}function m(){let{rendered:e,detached:t}=d(this);e!==this.__resize_rendered__&&(!t&&this.__resize_triggers__&&(x(this),this.addEventListener("scroll",f,!0)),this.__resize_rendered__=e,v(this))}function f(){var e,t;x(this),this.__resize_raf__&&(e=this.__resize_raf__,o||(o=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),o(e)),this.__resize_raf__=(t=()=>{let e=function(e){let{width:t,height:n}=e.__resize_last__,{offsetWidth:r,offsetHeight:o}=e;return r!==t||o!==n?{width:r,height:o}:null}(this);e&&(this.__resize_last__=e,v(this))},r||(r=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),r(t))}function v(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach(t=>{t.call(e)})}function x(e){let{expand:t,expandChild:n,contract:r}=e.__resize_triggers__,{scrollWidth:o,scrollHeight:l}=r,{offsetWidth:c,offsetHeight:d,scrollWidth:h,scrollHeight:_}=t;r.scrollLeft=o,r.scrollTop=l,n.style.width=c+1+"px",n.style.height=d+1+"px",t.scrollLeft=h,t.scrollTop=_}var w={name:"Card",components:{VClamp:{name:"vue-clamp",props:{tag:{type:String,default:"div"},autoresize:{type:Boolean,default:!1},maxLines:Number,maxHeight:[String,Number],ellipsis:{type:String,default:"…"},expanded:Boolean},data(){return{offset:null,text:this.getText(),localExpanded:!!this.expanded}},computed:{clampedText(){return this.text.slice(0,this.offset)+this.ellipsis},isClamped(){return!!this.text&&this.offset!==this.text.length},realText(){return this.isClamped?this.clampedText:this.text},realMaxHeight(){if(this.localExpanded)return null;const{maxHeight:e}=this;return e?"number"==typeof e?e+"px":e:null}},watch:{expanded(e){this.localExpanded=e},localExpanded(e){e?this.clampAt(this.text.length):this.update(),this.expanded!==e&&this.$emit("update:expanded",e)},isClamped:{handler(e){this.$nextTick(()=>this.$emit("clampchange",e))},immediate:!0}},mounted(){this.init(),this.$watch(e=>[e.maxLines,e.maxHeight,e.ellipsis,e.isClamped].join(),this.update),this.$watch(e=>[e.tag,e.text,e.autoresize].join(),this.init)},updated(){this.text=this.getText(),this.applyChange()},beforeDestroy(){this.cleanUp()},methods:{init(){this.$slots.default&&(this.offset=this.text.length,this.cleanUp(),this.autoresize&&(_(this.$el,this.update),this.unregisterResizeCallback=()=>{!function(e,t){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);let n=e.__resize_listeners__;n&&(n.splice(n.indexOf(t),1),n.length||(e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",f),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null),!--h&&style&&style.parentNode.removeChild(style))}(this.$el,this.update)}),this.update())},update(){this.localExpanded||(this.applyChange(),(this.isOverflow()||this.isClamped)&&this.search())},expand(){this.localExpanded=!0},collapse(){this.localExpanded=!1},toggle(){this.localExpanded=!this.localExpanded},getLines(){return Object.keys([...this.$refs.content.getClientRects()].reduce((e,{top:t,bottom:n})=>{const r=`${t}/${n}`;return e[r]||(e[r]=!0),e},{})).length},isOverflow(){return!(!this.maxLines&&!this.maxHeight)&&(!!(this.maxLines&&this.getLines()>this.maxLines)||!!(this.maxHeight&&this.$el.scrollHeight>this.$el.offsetHeight))},getText(){const[content]=(this.$slots.default||[]).filter(e=>!e.tag&&!e.isComment);return content?content.text:""},moveEdge(e){this.clampAt(this.offset+e)},clampAt(e){this.offset=e,this.applyChange()},applyChange(){this.$refs.text.textContent=this.realText},stepToFit(){this.fill(),this.clamp()},fill(){for(;(!this.isOverflow()||this.getLines()<2)&&this.offset<this.text.length;)this.moveEdge(1)},clamp(){for(;this.isOverflow()&&this.getLines()>1&&this.offset>0;)this.moveEdge(-1)},search(...e){const[t=0,n=this.offset]=e;if(n-t<=3)return void this.stepToFit();const r=Math.floor((n+t)/2);this.clampAt(r),this.isOverflow()?this.search(t,r):this.search(r,n)},cleanUp(){this.unregisterResizeCallback&&this.unregisterResizeCallback()}},render(e){const t=[e("span",this.$isServer?{}:{ref:"text",attrs:{"aria-label":this.text.trim()}},this.$isServer?this.text:this.realText)],{expand:n,collapse:r,toggle:o}=this,l={expand:n,collapse:r,toggle:o,clamped:this.isClamped,expanded:this.localExpanded},c=this.$scopedSlots.before?this.$scopedSlots.before(l):this.$slots.before;c&&t.unshift(...Array.isArray(c)?c:[c]);const d=this.$scopedSlots.after?this.$scopedSlots.after(l):this.$slots.after;d&&t.push(...Array.isArray(d)?d:[d]);const h=[e("span",{style:{boxShadow:"transparent 0 0"},ref:"content"},t)];return e(this.tag,{style:{maxHeight:this.realMaxHeight,overflow:"hidden"}},h)}}},mixins:[n(298).a],props:{person:{type:Object,required:!0}},methods:{getProfilePicture:function(e){var t=e.match(/github.com\/([\w\d-]+)(.+)?/);return t?"https://avatars.githubusercontent.com/".concat(t[1]):""}}},z=(n(299),n(34)),component=Object(z.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.person?n("div",{class:"person-card "+e.getPersonTypeClass({model:e.$lowerCase(e.person.mentor)}),attrs:{itemscope:"",itemtype:"https://schema.org/Person"}},[n("div",{staticClass:"social-media"},[e.person.twitter_handle.length?n("div",{staticClass:"twitter"},[n("a",{attrs:{href:e.person.twitter_handle,target:"_blank",title:e.person.name+" twitter",itemprop:"sameAs"}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","twitter"],color:"white"}})],1)]):e._e(),e._v(" "),e.person.github.length?n("div",{staticClass:"github"},[n("a",{attrs:{href:e.person.github,target:"_blank",title:e.person.name+" github",itemprop:"sameAs"}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","github"],color:"white"}})],1)]):e._e(),e._v(" "),e.person.linkedin.length?n("div",{staticClass:"linkedin"},[n("a",{attrs:{href:e.person.linkedin,target:"_blank",title:e.person.name+" linkedin",itemprop:"sameAs"}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","linkedin"],color:"white"}})],1)]):e._e()]),e._v(" "),n("NuxtLink",{attrs:{to:"/peer/"+e.person.slug,itemprop:"url"}},[n("div",{staticClass:"person-card-info"},[n("div",{staticClass:"profile-photo"},[e.person.github.length?n("img",{attrs:{src:e.getProfilePicture(e.person.github),alt:"mentee-profile-picture",itemprop:"image",loading:"lazy"}}):e._e(),e._v(" "),e.person.github.length?e._e():n("div",{staticClass:"non-image"})]),e._v(" "),n("v-clamp",{staticClass:"name",attrs:{autoresize:"","max-lines":1}},[e._v("\n        "+e._s(e.person.name)+"\n      ")]),e._v(" "),n("v-clamp",{staticClass:"interests",attrs:{autoresize:"","max-lines":3,itemprop:"seeks"}},[e._v("\n        "+e._s(e.person.displayInterests)+"\n      ")])],1)])],1):e._e()}),[],!1,null,null,null);t.default=component.exports},378:function(e,t,n){},720:function(e,t,n){"use strict";n(378)},738:function(e,t,n){"use strict";n.r(t);var r=n(23),o=(n(52),n(20)),l={fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("persons").where({mentor:{$in:["Mentor","İkisi de"]}}).limit(e.postList.mentor.limit).skip(e.postList.mentor.skip).fetch();case 2:return e.postList.mentor.items=t.sent,t.next=5,e.$content("persons").where({mentor:{$in:["Mentee","İkisi de"]}}).limit(e.postList.mentee.limit).skip(e.postList.mentee.skip).fetch();case 5:e.postList.mentee.items=t.sent;case 6:case"end":return t.stop()}}),t)})))()},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,t.next=3,n("readme").fetch();case 3:return r=t.sent,t.abrupt("return",{page:r});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{postList:{mentor:{items:[],limit:16,skip:0},mentee:{items:[],limit:16,skip:0}}}},methods:{loadMoreMentees:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.postList.mentee.skip+=t.postList.mentee.limit,n.next=3,t.$content("persons").where({mentor:{$in:["Mentee","İkisi de"]}}).limit(t.postList.mentee.limit).skip(t.postList.mentee.skip).fetch();case 3:l=n.sent,(o=t.postList.mentee.items).push.apply(o,Object(r.a)(l)),e.loaded(),l.length<=0&&e.complete();case 7:case"end":return n.stop()}}),n)})))()},loadMoreMentors:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.postList.mentor.skip+=t.postList.mentor.limit,n.next=3,t.$content("persons").where({mentor:{$in:["Mentor","İkisi de"]}}).limit(t.postList.mentor.limit).skip(t.postList.mentor.skip).fetch();case 3:l=n.sent,(o=t.postList.mentor.items).push.apply(o,Object(r.a)(l)),e.loaded(),l.length<=0&&e.complete();case 7:case"end":return n.stop()}}),n)})))()}}},c=(n(720),n(34)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page main-page"},[n("header",[n("nuxt-content",{attrs:{document:e.page}})],1),e._v(" "),n("div",{staticClass:"container"},[n("hr"),e._v(" "),n("h2",{staticClass:"title text-center my-4"},[n("NuxtLink",{attrs:{to:"/mentors/"}},[e._v("\n        Mentors\n      ")])],1),e._v(" "),n("ul",{staticClass:"persons mentors"},e._l(e.postList.mentor.items,(function(e){return n("PersonCard",{key:e.slug,attrs:{person:e,"person-type":"mentor"}})})),1),e._v(" "),n("client-only",[n("infinite-loading",{on:{infinite:e.loadMoreMentors}})],1),e._v(" "),n("hr"),e._v(" "),n("h2",{staticClass:"title text-center my-4"},[n("NuxtLink",{attrs:{to:"/mentees/"}},[e._v("\n        Mentees\n      ")])],1),e._v(" "),n("ul",{staticClass:"persons mentees"},e._l(e.postList.mentee.items,(function(e){return n("PersonCard",{key:e.slug,attrs:{person:e,"person-type":"mentee"}})})),1),e._v(" "),n("client-only",[n("infinite-loading",{on:{infinite:e.loadMoreMentees}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PersonCard:n(301).default})}}]);