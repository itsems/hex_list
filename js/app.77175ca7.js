(function(t){function e(e){for(var A,o,n=e[0],i=e[1],l=e[2],u=0,h=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(A in i)Object.prototype.hasOwnProperty.call(i,A)&&(t[A]=i[A]);c&&c(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],A=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(A=!1)}A&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var A={},r={app:0},s=[];function o(e){if(A[e])return A[e].exports;var a=A[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=A,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var A in t)o.d(a,A,function(e){return t[e]}.bind(null,A));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/hex_list/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var c=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var A=a("85ec"),r=a.n(A);r.a},"2b04":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAABvAAAAbwHxotxDAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAADZQTFRF/////wAA5Bsb4Rsb4xoa4Rwc4xsb4Rsb4hsb4hsb4hsb4yIi4yYm8ZSU98DA98HB98LC////D8BLZgAAAAp0Uk5TAAEmcH+As7Xm9myQZpsAAABqSURBVBhXZY9JDgMhDASrbWDy/98OwfYcQhRF1LGl3gRgLiMrEhDIhgComYXQcL7ELOEXP+6QXcKUhaySutU7eIvAfQVMjQZyr7KIgqWXAeoiVwG5hWbU+yNsS0rbcoQetcewc/pxjv/7D9JkQzloZ2NlAAAAAElFTkSuQmCC"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var A=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],o=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"container"},[A("h1",[t._v("w3HexSchool 鼠年全馬鐵人挑戰")]),A("h2",[t._v("文章查詢及追蹤收藏挑戰者")]),A("img",{staticClass:"img-fluid my-3",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/hexschool-api.appspot.com/o/blog%2F2019%2F11%2Fw3HS%E9%90%B5%E4%BA%BA%E8%B3%BDbanner.png?alt=media&token=3f0ef8fd-6285-47ac-a159-83ff3fb3972e",alt:""}}),t._m(0),A("br"),A("ul",{staticClass:"nav nav-tabs"},[A("li",{staticClass:"nav-item"},[A("a",{staticClass:"nav-link",class:{active:"index"==t.tabType},attrs:{href:"javascript:;"},on:{click:function(e){t.tabType="index"}}},[t._v("總覽")])]),A("li",{staticClass:"nav-item"},[A("a",{staticClass:"nav-link",class:{active:"allArt"==t.tabType},attrs:{href:"javascript:;"},on:{click:function(e){t.tabType="allArt"}}},[t._v("文章總表")])]),A("li",{staticClass:"nav-item"},[A("a",{staticClass:"nav-link",class:{active:"savedAuthor"==t.tabType},attrs:{href:"javascript:;"},on:{click:function(e){t.tabType="savedAuthor"}}},[t._v("收藏的挑戰者")])])]),"index"==t.tabType||"savedAuthor"==t.tabType?A("section",{staticClass:"pt-5 savedAuthor"},[A("h3",[t._v("收藏的挑戰者")]),A("table",{staticClass:"table table-bordered table-hover mt-3 mb-5"},[t._m(1),A("tbody",t._l(t.savedAuthor,(function(e,r){return A("tr",{key:r},[A("td",[A("a",{staticClass:"font-weight-bold",attrs:{target:"_blank",href:e.blogUrl}},[t._v(t._s(e.name))])]),A("td",[A("ul",t._l(t.savedAuthor[r].blogList,(function(e,a){return A("li",{key:a},[A("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.title))])])})),0)]),A("td",{staticClass:"updateTime text-center align-middle"},[e.updated?A("img",{attrs:{src:a("f0c8"),alt:""}}):A("img",{attrs:{src:a("2b04"),alt:""}})]),A("td",{staticClass:"text-center align-middle"},[A("p",{on:{click:function(e){return t.unfollow(r)}}},[A("img",{staticClass:"unfollow",attrs:{src:a("b5f8"),alt:""}})])])])})),0)])]):t._e(),"index"==t.tabType||"allArt"==t.tabType?A("section",{staticClass:"pt-5 artList"},[A("h3",[t._v("搜尋")]),A("table",{staticClass:"table table-bordered text-center mt-3"},[A("tr",{staticClass:"thead-light"},[A("th",[A("p",[t._v("搜尋作者 : "+t._s(t.searchAuthor))])]),A("th",[A("p",[t._v("搜尋標題 : "+t._s(t.searchBlogList))])])]),A("tr",[A("td",[A("div",{staticClass:"input-group"},[A("input",{directives:[{name:"model",rawName:"v-model",value:t.searchAuthor,expression:"searchAuthor"}],staticClass:"form-control",attrs:{type:"text",placeholder:"搜尋作者"},domProps:{value:t.searchAuthor},on:{input:[function(e){e.target.composing||(t.searchAuthor=e.target.value)},function(e){t.searchBlogList="",t.type="ar"}]}})])]),A("td",[A("div",{staticClass:"input-group"},[A("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBlogList,expression:"searchBlogList"}],staticClass:"form-control",attrs:{placeholder:"搜尋標題",type:"text"},domProps:{value:t.searchBlogList},on:{input:[function(e){e.target.composing||(t.searchBlogList=e.target.value)},function(e){t.searchAuthor="",t.type="su"}]}})])])])]),A("br"),A("h3",[t._v("文章總表")]),A("div",{staticClass:"info text-left"},[A("p",[t._v("共計挑戰者："+t._s(t.BlogData.length))]),A("p",[t._v("共計挑戰文章："+t._s(t.artNum))])]),A("table",{staticClass:"table table-bordered table-hover mt-3"},[A("tr",{staticClass:"thead-light"},[A("th",{attrs:{width:"150"}},[t._v("挑戰者")]),A("th",[t._v("文章列表")]),A("th",{attrs:{width:"200"}},[A("span",{staticClass:"mr-2"},[t._v("更新時間")]),A("img",{staticClass:"arr",class:{rev:t.reverse},attrs:{src:a("88fe"),alt:""},on:{click:function(e){t.reverse=!t.reverse,t.reverseIt()}}})]),A("th",[t._v("收藏")])]),A("tbody",t._l(t.filterBlogData,(function(e,r){return A("tr",{key:r},[A("td",[A("a",{staticClass:"font-weight-bold",attrs:{target:"_blank",href:e.blogUrl}},[t._v(t._s(e.name))])]),A("td",[A("ul",t._l(t.filterBlogData[r].blogList,(function(e,a){return A("li",{key:a},[A("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.title))])])})),0)]),A("td",{staticClass:"updateTime"},[t._v(t._s(e.updateTime))]),A("td",{staticClass:"align-middle text-center"},[A("p",{on:{click:function(e){return t.addFollow(r)}}},[A("img",{staticClass:"add",attrs:{src:a("d1da"),alt:""}})])])])})),0)])]):t._e(),A("div",{staticClass:"gotop",on:{click:t.backToTop}},[t._v("Top")]),t._m(2)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"text-left"},[a("li",[a("a",{attrs:{target:"_blank",href:"https://www.hexschool.com/2019/11/14/2019-11-14-w3Hexschool-2020-challenge/"}},[t._v("活動連結")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://forms.gle/MvufZiucPir4yhHb6"}},[t._v("報名與投稿表單連結")])]),a("li",[a("a",{staticClass:"d-block mb-5",attrs:{target:"_blank",href:"https://github.com/hexschool/w3hexschool-API"}},[t._v("報名API")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"thead-light"},[a("th",{attrs:{width:"150"}},[t._v("挑戰者")]),a("th",[t._v("文章列表")]),a("th",{attrs:{width:"70"}},[t._v(" 本周 "),a("br"),t._v("更新 ")]),a("th",{attrs:{width:"70"}},[t._v(" 取消 "),a("br"),t._v("追蹤 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("a",{attrs:{href:"https://medium.com/itsems-frontend",target:"_blank"}},[t._v("Project by itsems")])])}],i=(a("4de4"),a("4160"),a("caad"),a("a15b"),a("a434"),a("b0c0"),a("ac1f"),a("2532"),a("1276"),a("159b"),a("bc3a")),l=a.n(i),c={name:"HelloWorld",data:function(){return{BlogData:[],searchAuthor:"",searchBlogList:"",anotherData:[],type:"",reverse:!1,savedAuthor:[],artNum:0,tabType:"index"}},created:function(){var t=this;console.clear(),l.a.get("https://raw.githubusercontent.com/hexschool/w3hexschool-API/master/data.json").then((function(e){t.BlogData=e.data,t.BlogData.sort((function(t,e){return t.updateTime<e.updateTime?1:-1})),t.BlogData.forEach((function(e){t.artNum=t.artNum+e.blogList.length}))})).catch((function(t){console.error(t)})),this.GetSavedAuthor(),this.GetThisWeek()},computed:{filterBlogData:function(){var t=this;return this.BlogData.forEach((function(t){null==t.name&&(t.name="不公開")})),"ar"==this.type?this.BlogData.filter((function(e){return e.name.toLowerCase().includes(t.searchAuthor.toLowerCase())})):this.BlogData.filter((function(e){for(var a=0;a<e.blogList.length;a++)if(e.blogList[a].title.toLowerCase().includes(t.searchBlogList.toLowerCase()))return e}))}},methods:{GetSavedAuthor:function(){var t=localStorage.getItem("MyAuthor");t&&(this.savedAuthor=JSON.parse(localStorage.getItem("MyAuthor")))},GetThisWeek:function(){for(var t=new Date,e=t.getDay(),a=new Date(t.setDate(t.getDate()-e+1)),A=""+(a.getMonth()+1),r=""+a.getDate(),s=a.getFullYear(),o=[s,A,r].join("-"),n=new Date(o),i=0;i<this.savedAuthor.length;i++){var l=new Date(this.savedAuthor[i].updateTime.split(" ")[0]);this.savedAuthor[i].updated=l>=n}},reverseIt:function(){this.reverse?this.BlogData.sort((function(t,e){return t.updateTime<e.updateTime?-1:1})):this.BlogData.sort((function(t,e){return t.updateTime<e.updateTime?1:-1}))},addFollow:function(t){for(var e=0;e<this.savedAuthor.length;e++)if(this.savedAuthor[e].name.toLowerCase().includes(this.filterBlogData[t].name.toLowerCase())&&"不公開"!=this.savedAuthor[e].name)return void alert("此作者已在收藏名單中！");this.savedAuthor.push(this.filterBlogData[t]),localStorage.setItem("MyAuthor",JSON.stringify(this.savedAuthor)),this.GetThisWeek()},unfollow:function(t){this.savedAuthor.splice(t,1),localStorage.setItem("MyAuthor",JSON.stringify(this.savedAuthor))},backToTop:function(){window.scroll({top:0,behavior:"smooth"})}}},u=c,h=(a("e773"),a("2877")),d=Object(h["a"])(u,o,n,!1,null,"1f3c3ef2",null),f=d.exports,g={name:"App",components:{HelloWorld:f}},p=g,v=(a("034f"),Object(h["a"])(p,r,s,!1,null,null,null)),m=v.exports;a("f9e3");A["a"].config.productionTip=!1,new A["a"]({render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,a){},"88fe":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAhkDGCSqjnqQAAAAb0lEQVQoz73PwQnCQBBA0WchLthFGtMCApqLkBQgVmaErWQ8JEYkozedve37sDv8YRpXJZXioqEK9yQpRqHSiiSZOHRwFEK1W3jrJoT+efGerBhOS5IynOe/TG8PNuu1OjGfPuNXMnxi2Dt845/MA5QCM6UrXXCdAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAyLTI1VDAzOjI0OjM2KzAwOjAw119qfgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMi0yNVQwMzoyNDozNiswMDowMKYC0sIAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},b5f8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAhkGKCadDe+kAAAAeUlEQVQoz4XRSw6DMBAD0NeeK5FQbwDHTw5A9qXrdAOUEhS889jzZ1IkwRlRVkwUVbUY/uTBoqoKSW0sm1wlwk42y3CIBAjea+DjdWJNyaWpt+KX12RfWQ7yczc8dBH7LW6GvFkzdg8Vyd1TZ+bus2ZGRRIv9kqK8Qv3b4SjAkwS4AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMi0yNVQwNjo0MDozOCswMDowMHsRyAkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDItMjVUMDY6NDA6MzgrMDA6MDAKTHC1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},d1da:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAhkGKDf3vc9WAAAAeElEQVQoz73QMQrCUBRE0WMEXYHuwyWYrMbl+lsbkyZoIZa/ic8myA+YNIJ3qhkur3iUNDqdxixJCOdyqibCDuznhS/8LtBIHmMGIQyfntR0YiFtJRbvx1pysJFl2dYKL8+xX5ymfi+E/s9/mAp3cJvXa62rYzm9AfdqN2bfEQR/AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAyLTI1VDA2OjQwOjU1KzAwOjAw3KmgTgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMi0yNVQwNjo0MDo1NSswMDowMK30GPIAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},dab8:function(t,e,a){},e773:function(t,e,a){"use strict";var A=a("dab8"),r=a.n(A);r.a},f0c8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAWQAAAFkBqp2phgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGgSURBVDiNnZO/SxtxGMY/7/diCNe7wQYpCG1t1aUJOtrJoSotoYNTVhFbmkI3EUr/gS6CiMEsunXSpVuo6NS50IInlP5AnOOgl6aa3N3bwaiXlEj0mV4ens8DLy+v0KbBkp9VeBEpk4IMACi6b4RtgbVfr93deF7Oh8yGJmuH1SWUAmDai5sKUUp2nzPv5aV+UZDZ0OSfSrUs8KQD2Cphx047OS8vdQNQO6wudQ2f7TRRq1QXAWSw5Gcj5StgdV3QXMeKGDVRxMtu4LuusPashzu3LiwrsHTOiDDZDfzheZLelHB0eumLypRRuBcPP+43zGSt/+DKX2W23OAkaOm+nwA07tgJeDuWIJ2Cze9RC3x82hIFUHm46nsKj+Lu9LDh/XgPJ4Hy+4hOMMBuAtiireDjj4gwavD0gcW7z0EnGFQ/yVDRz4SGb9zgjKFhxPx843oopWvCiFA8KLh7BsDuc+YRdq7Bb/caZwGaT+PlpW6nnRywAoRXgIEIy7ctJ/fllTQg9o3nGir6mcDSOVGZAgaa9j7oVmhk/aDg7sXz/wCru5TDdTB+HQAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.77175ca7.js.map