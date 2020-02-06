(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1ccd":function(t){t.exports=JSON.parse('{"center":[25.0677505,121.5470599],"zoom":15,"mapURL":"https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw","attribute":"Map data &copy; <a href=\\"https://www.openstreetmap.org/\\">OpenStreetMap</a> contributors, <a href=\\"https://creativecommons.org/licenses/by-sa/2.0/\\">CC-BY-SA</a>, Imagery © <a href=\\"https://www.mapbox.com/\\">Mapbox</a>","icon":{"iconUrl":"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png","shadowUrl":"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png","iconSize":[25,41],"iconAnchor":[12,41],"popupAnchor":[1,-34],"shadowSize":[41,41]}}')},"27d5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-leaflet")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-leaflet"},[n("div",{staticClass:"map"},[n("l-map",{ref:"myMap",attrs:{zoom:t.zoom,center:t.center,options:{zoomControl:!1}}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),n("l-marker",{ref:"hereMarker",attrs:{"lat-lng":t.center,icon:t.icon}}),n("v-marker-cluster",{attrs:{options:t.clusterOptions}},t._l(t.stores,(function(e){return n("l-geo-json",{key:e.id,attrs:{geojson:e,options:t.geoJsonOptions}})})),1)],1)],1)])},i=[],s=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("caad"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("1276"),n("159b"),n("ade3")),u=n("2699"),p=n("a40a"),l=n("044a"),f=n("4e2b"),d=n("ca9f"),m=n.n(d),h=n("1ccd");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=window.L,y={name:"VueLeaflet",components:{LMap:u["a"],LTileLayer:p["a"],LGeoJson:l["a"],LMarker:f["a"],"v-marker-cluster":m.a},data:function(){var t=this;return{center:v.latLng(h.center),zoom:h.zoom,isEmptyHide:!1,clusterOptions:{disableClusteringAtZoom:16},geoJsonOptions:{style:function(t){},pointToLayer:this.createCustomIcon,onEachFeature:function(e,n){n.bindPopup(t.getPopup(e.properties))}},icon:v.icon(h.icon),url:h.mapURL,attribution:h.attribute,icons:{grey:this.customIcon("grey"),yellow:this.customIcon("yellow"),green:this.customIcon("green"),red:this.customIcon("red")}}},computed:{stores:function(){return this.$store.state.stores}},methods:{getCoods:function(t,e){t=t.toString(),e=e.toString();var n=t.includes("\n")?t.split("\n")[0]:t,r=e.includes("\n")?e.split("\n")[0]:e;return[r,n]},getPopup:function(t){return'\n        <h3 class="store-title">'.concat(t.name,'</h3>\n        <div class="store-info">\n          <div>成人口罩: ').concat(t.mask_adult,"</div>\n          <div>小孩口罩: ").concat(t.mask_child,"</div>\n          <div>資料更新: ").concat(t.updated,'</div>\n          <a target="_blank" href="https://www.google.com.tw/maps/place/').concat(t.address,'">').concat(t.address,"</a><br>\n          ").concat(t.phone,"\n        </div>\n      ")},customIcon:function(t){return v.icon(g({},h.icon,{iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-".concat(t,".png")}))},createCustomIcon:function(t,e){var n=t.properties,r=n.mask_adult+n.mask_child,o=this.icons.grey;return r>100?o=this.icons.green:r>50?o=this.icons.yellow:r>0&&(o=this.icons.red),v.marker(e,{icon:o})}},mounted:function(){var t=this;this.$store.dispatch("fetchPharmacies"),this.$nextTick((function(){var e=t.$refs.myMap.mapObject;v.control.zoom({position:"bottomright"}).addTo(e),navigator.geolocation.getCurrentPosition((function(e){var n=e.coords;t.center=v.latLng(n.latitude,n.longitude),t.$refs.hereMarker.mapObject.bindTooltip("You",{offset:[0,-36],permanent:!0,direction:"top"})}))}))}},w=y,O=(n("a8f1"),n("2877")),j=Object(O["a"])(w,c,i,!1,null,"3b0b68bb",null),k=j.exports,P={name:"app",components:{VueLeaflet:k}},x=P,S=(n("5c0b"),Object(O["a"])(x,o,a,!1,null,null,null)),_=S.exports,I=(n("96cf"),n("1da1")),L=n("2f62");r["a"].use(L["a"]);var M=new L["a"].Store({state:{stores:[]},mutations:{setStores:function(t,e){t.stores=e}},actions:{fetchPharmacies:function(){var t=this;return Object(I["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://kiang.github.io/pharmacies/json/points.json").then((function(t){return t.json()}));case 2:n=e.sent,t.commit("setStores",n);case 4:case"end":return e.stop()}}),e)})))()}},modules:{}}),z=n("e11e");n("6cc5");r["a"].config.productionTip=!1,delete z["Icon"].Default.prototype._getIconUrl,z["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),new r["a"]({store:M,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},a8f1:function(t,e,n){"use strict";var r=n("27d5"),o=n.n(r);o.a}});