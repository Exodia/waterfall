/*!build time : 2014-07-31 9:01:43 PM*/
KISSY.add("kg/waterfall/2.0.0/base",function(a,b,c){function d(){var b=this;d.superclass.constructor.apply(b,arguments);var c=b.__onResize=a.buffer(f,l,b);f.call(b),j(k).on("resize",c)}function e(b,c,d,e){function f(){h=[].concat(a.makeArray(b)),h.length>0?!function(){var a=+new Date;do{var f=h.shift();c.call(d,f)}while(h.length>0&&+new Date-a<50);h.length>0?g=setTimeout(arguments.callee,25):e&&e.call(d,b)}():e&&e.call(d,b)}var g,h,i={};return i.stop=function(){g&&(clearTimeout(g),h=[],b.each(function(a){a.stop()}))},i.start=f,i}function f(){var b=this,c=b.get("colWidth"),d=b.get("container"),e=b._containerRegion||{};a.isFunction(c)&&(c=c(b)),!d[0].offsetWidth||b._colWidth===c&&d.width()===e.width||(b._colWidth=c,b.adjust())}function g(){var b=this,c=b.get("container"),d=c.width(),e=b._curColHeights||[];b._curColHeights=e,e.length=Math.max(Math.floor(d/b._colWidth),b.get("minColCount")),b._containerRegion={width:d},a.each(e,function(a,b){e[b]=0}),b._colItems=[]}function h(a,b,c,d){function e(b){l[p]+=i.outerHeight(!0);var c=a._colItems;c[p]=c[p]||[],c[p].push(i),i.attr("data-waterfall-col",p);var e=i[0].className.replace(/\s*ks-waterfall-col-(?:first|last|\d+)/g,"");e+=" ks-waterfall-col-"+p,0==p?e+=" ks-waterfall-col-first":p==l.length-1&&(e+=" ks-waterfall-col-last"),i[0].className=e,b||d&&d()}var f,g,h=a.get("effect"),i=j(c),k=a.get("align"),l=a._curColHeights,m=a.get("container"),n=a._colWidth,o=l.length,p=0,q=a._containerRegion,r=Number.MAX_VALUE;if(!o)return void 0;if(i.hasClass("ks-waterfall-fixed-left"))p=0;else if(i.hasClass("ks-waterfall-fixed-right"))p=o>0?o-1:0;else for(var s=0;o>s;s++)l[s]<r&&(r=l[s],p=s);if(f="left"===k?0:Math.max(q.width-o*n,0),"center"===k&&(f/=2),"justify"===k&&o>1&&(f=p>0?Math.max((q.width-n)/(o-1)-n,0)*p:0),g={left:p*n+f,top:l[p]},b)i.css(g),h&&h.effect&&i.css("visibility","hidden"),m.append(i),e();else{var t=a.get("adjustEffect");t?(e(1),i.animate(g,t.duration,t.easing,d)):(i.css(g),e())}return i}function i(a){var b=this,c=h(b,!0,a),d=b.get("effect");c&&d&&d.effect&&(c.hide(),c.css("visibility",""),c[d.effect](d.duration,0,d.easing))}var j=b.all,k=a.Env.host,l=50;return d.ATTRS={container:{setter:function(a){return j(a)}},align:{value:"center"},minColCount:{value:1},effect:{value:{effect:"fadeIn",duration:1}},colWidth:{},adjustEffect:{}},a.extend(d,c,{isAdjusting:function(){return!!this._adjuster},isAdding:function(){return!!this._adder},adjustItem:function(a,b){function c(){q--,0>=q&&(d._adjuster=0,b.callback&&b.callback.call(d))}var d=this;if(b=b||{},d.isAdjusting())return void 0;var f,g=a.outerHeight(!0);b.process&&(f=b.process.call(d)),void 0===f&&(f=a.outerHeight(!0));for(var h,i=f-g,j=d._curColHeights,k=parseInt(a.attr("data-waterfall-col")),l=d._colItems[k],m=[],n=Math.max.apply(Math,j),o=0;o<l.length&&l[o][0]!==a[0];o++);for(o++;o<l.length;)m.push(l[o]),o++;j[k]+=i,h=Math.max.apply(Math,j),h!=n&&d.get("container").height(h);var p=b.effect,q=m.length;return q?(void 0===p&&(p=d.get("adjustEffect")),d._adjuster=e(m,function(a){p?a.animate({top:parseInt(a.css("top"))+i},p.duration,p.easing,c):(a.css("top",parseInt(a.css("top"))+i),c())}),d._adjuster.start(),d._adjuster):b.callback&&b.callback.call(d)},removeItem:function(b,c){c=c||{};var d=this,e=c.callback;d.adjustItem(b,a.mix(c,{process:function(){return b.remove(),0},callback:function(){for(var a=parseInt(b.attr("data-waterfall-col")),c=d._colItems[a],f=0;f<c.length;f++)if(c[f][0]==b[0]){c.splice(f,1);break}e&&e()}}))},adjust:function(b){function c(){i--,0>=i&&(d.get("container").height(Math.max.apply(Math,d._curColHeights)),d._adjuster=0,b&&b.call(d),d.fire("adjustComplete",{items:f}))}a.log("waterfall:adjust");var d=this,f=d.get("container").all(".ks-waterfall");d.isAdjusting()&&(d._adjuster.stop(),d._adjuster=0),g.call(d);var i=f.length;return i?(d._adjuster=e(f,function(a){h(d,!1,a,c)}),d._adjuster.start(),d._adjuster):b&&b.call(d)},addItems:function(a,b){var c=this;return c._adder=e(a,i,c,function(){c.get("container").height(Math.max.apply(Math,c._curColHeights)),c._adder=0,b&&b.call(c),c.fire("addComplete",{items:a})}),c._adder.start(),c._adder},destroy:function(){var b=this,c=b.__onResize;j(k).detach("resize",c),c.stop(),a.log("waterfall is destroyed!"),b.fire("destroy"),b.__destroyed=1}}),d},{requires:["node","base"]}),KISSY.add("kg/waterfall/2.0.0/loader",function(a,b,c){function d(){var b=this;d.superclass.constructor.apply(b,arguments),b.__onScroll=a.buffer(e,i,b),b.start()}function e(){var b=this;if(a.log("waterfall:doScroll"),!b.__loading){if(b.isAdjusting())return void b.__onScroll();var c=b.get("container");if(c[0].offsetWidth){var d=c.offset().top,e=b.get("diff"),i=b._curColHeights;i.length&&(d+=Math.min.apply(Math,i)),e+g(h).scrollTop()+g(h).height()>=d&&(a.log("waterfall:loading"),f.call(b))}}}function f(){function a(a,b){c.__loading=0,c.addItems(a,function(){b&&b.apply(this,arguments),e.call(c)})}function b(){c.end()}{var c=this;c.get("container")}c.__loading=1;var d=c.get("load");d&&d(a,b)}var g=b.all,h=a.Env.host,i=50;return d.ATTRS={diff:{value:0}},a.extend(d,c,{start:function(){this.resume()},end:function(){this.pause()},pause:function(){var a=this;a.__destroyed||(g(h).detach("scroll",a.__onScroll),a.__onScroll.stop())},resume:function(){var a=this;a.__destroyed||(g(h).on("scroll",a.__onScroll),a.__started=1,e.call(a))},destroy:function(){var a=this;a.end(),d.superclass.destroy.apply(a,arguments)}}),d},{requires:["node","./base"]});