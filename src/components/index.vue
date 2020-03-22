<template lang="pug">
  div.wrap
    .banner-zone
      .banner
      .bn-txt
        h1.font-weight-bold w3HexSchool 鼠年全馬鐵人挑戰
        h2 文章查詢及追蹤收藏挑戰者
      .container
        .act-list.mt-5
          a.mr-4.btn.btn-success(target='_blank' href='https://www.hexschool.com/2019/11/14/2019-11-14-w3Hexschool-2020-challenge/') 活動連結
          a.mr-4.btn.btn-success(target='_blank' href='https://forms.gle/MvufZiucPir4yhHb6') 報名與投稿表單連結
          a.btn.btn-success(target='_blank' href='https://github.com/hexschool/w3hexschool-API') 報名API

    .container
      
      // tab list
      ul.nav.nav-tabs.mt-4
        li.nav-item
          a.nav-link(href='javascript:;' @click="tabType='index'" :class="{'active':tabType=='index'}") 總覽
        li.nav-item
          a.nav-link(href='javascript:;' @click="tabType='allArt'" :class="{'active':tabType=='allArt'}") 文章總表
        li.nav-item
          a.nav-link(href='javascript:;' @click="tabType='savedAuthor'" :class="{'active':tabType=='savedAuthor'}") 收藏的挑戰者
        li.nav-item
          a.nav-link(href='javascript:;' @click="tabType='articles'" :class="{'active':tabType=='articles'}") 收藏文章
        li.nav-item
          a.nav-link(href='javascript:;' @click="tabType='artNum'" :class="{'active':tabType=='artNum'}") 文章數排行
        //- li.nav-item
        //-   a.nav-link(href='javascript:;' @click="tabType='charts'" :class="{'active':tabType=='charts'}") 統計

      // 收藏table
      section.pt-5.savedAuthor(v-if='tabType=="index"||tabType=="savedAuthor"')
        h3.font-weight-bold.mb-4 收藏的挑戰者
        table.table.table-bordered.table-hover.mt-3.mb-5
          //- <!-- th -->
          tr.thead-light
            th(width='150') 挑戰者
            th 文章列表
            th(width='70') 本周
              br
              | 更新

            th(width='70') 取消
              br
              | 追蹤

          //- <!-- content -->
          tbody
            tr(:key='idx' v-for='(el,idx) in savedAuthor')
              td.align-middle.text-center
                //  name 
                a.font-weight-bold(target='_blank' :href='el.blogUrl') {{el.name}}
                br
                p(style='font-size:12px;') 已發布 
                  span.text-danger.font-weight-bold(style='font-size:16px') {{savedAuthor[idx].blogList.length}}
                  |  篇

              td
                .d-inline-block.align-top(style='width:120px')
                  button.mr-3.btn.btn-success.btn-sm(@click='moreToggle') 更多
                  span.badge.badge-warning(v-if='el.updated') New!
                ul.d-inline-block.savedList(style='width:calc(100% - 120px)')
                  li(:key='idx2' v-for='(art, idx2) in savedAuthor[idx].blogList')
                    a(target='_blank' :href='art.url') {{art.title}}
              //  文章列表 
              td.updateTime.text-center.align-middle
                //  updated this week 
                img(v-if='el.updated' src='../assets/check.png' alt)
                //  <img v-else src="../assets/uncheck.png" alt /> 
                img.hourglass(v-else src='../assets/hourglass.png' alt)
              td.text-center.align-middle
                p(@click='unfollow(idx)')
                  img.unfollow(src='../assets/un.png' alt)
        
      

      
      //  搜尋和文章列表 
      section.pt-5.artList(v-if="tabType=='index'||tabType=='allArt'")
        //  Query Table 
        h3.font-weight-bold.mb-4 搜尋
        table.table.table-bordered.text-center.mt-3
          tr.thead-light
            th
              p 搜尋挑戰者 : {{searchAuthor}}
            th
              p 搜尋標題 : {{searchBlogList}}
          tr
            td
              .input-group
                input.form-control(@input="searchBlogList='';type='ar'", v-model='searchAuthor' type='text' placeholder='搜尋挑戰者')
                .input-group-append
                  span.input-group-text.cp(@click="searchAuthor=''") Clear
            td
              .input-group
                input.form-control(@input="searchAuthor='';type='su'", v-model='searchBlogList' placeholder='搜尋標題' type='text')
                .input-group-append
                  span.input-group-text.cp(@click="searchBlogList=''") Clear
              
        
        br
        h3.font-weight-bold.mb-4.mt-5 文章總表
        .row.align-items-end
          .col-6.text-left
            p 共計挑戰者：{{BlogData.length}}
            p 共計挑戰文章：{{artNum}}
          .col-6.text-right
            p(v-if="searchBlogList||searchAuthor") 搜尋結果共 {{filterBlogData.length}} 筆

        //  Result Table 
        p(v-if="!filterBlogData.length>0") 努力加載中...
        table.table-result.table.table-bordered.table-hover.mt-3(v-if="filterBlogData.length>0")
          tr.thead-light
            th(width='150') 挑戰者
            th 文章列表(由近到遠)
            th(width='210')
              .reverse(@click='reverse=!reverse;filterBlogData.reverse()')
                span.mr-2 更新時間
                img.arr(:class='{rev:reverse}' src='../assets/arr.png' alt)
            th 收藏
          tbody
            tr(:key='idxFiltered' v-for='(el,idxFiltered) in filterBlogData')
              //  name 
              td.align-middle.text-center
                a.font-weight-bold(target='_blank' :href='el.blogUrl') {{el.name}}
                p(style='font-size:12px;') 已發布 
                  span.text-danger.font-weight-bold(style='font-size:16px') {{el.blogList.length}}
                  |  篇

              //  blog list 
              td.blog-list
                ul
                  li(:key='idx2List' v-for='(art, idx2List) in filterBlogData[idxFiltered].blogList')
                    span.saveArt.badge.badge-info.mr-2(@click="saveTheArt(el, art.title, art.url)") 收藏 
                    a(target='_blank' :href='art.url') {{art.title}}


              //  update time 
              td.updateTime {{el.updateTime}}
              //  updated 
              td.align-middle.text-center
                p(@click='addFollow(idxFiltered)')
                  img.add(src='../assets/add.png' alt)
        

      //  文章數排行 
      section.pt-5(v-if='tabType=="artNum"')
        h3.font-weight-bold 文章數排行
        p.mt-4.mb-2 金角獎 (實體獎座)：成功撰寫滿 
          span.font-weight-bold.text-danger 40
          |  週者均可獲得。
        p.mb-2 銀角獎 (實體獎座)：成功撰寫滿 
          span.font-weight-bold.text-danger 25
          |  週者均可獲得。
        p.mb-5 銅角獎 (數位獎狀)：成功撰寫滿 
          span.font-weight-bold.text-danger 10
          |  週者均可獲得。

        .row.justify-content-center
          .col-12.col-lg-4
            table.text-center.table.table-bordered
              tr.thead-light
                th.prize(colspan='3') 🏆 金角獎 🏆
              tr
                th 🙌🏻
                th 挑戰者
                th 文章數量
              tbody
                tr(:key='idxGolden' v-for='(ppl,idxGolden) in rankData.golden')
                  td {{idxGolden+1}}
                  td.pr-name
                    a(:href="rankData.golden[idxGolden].blogUrl") {{rankData.golden[idxGolden].name}}
                  td.pr-num {{rankData.golden[idxGolden].blogList.length}}
                tr.thead-light
                  th.about(colspan='3') 加油！差一點點！
                tr(:key='idx +"-label"' v-for='(pplClose,idx) in rankData.goldenClose')
                  td {{idx+1}}
                  td 
                    a(:href="rankData.goldenClose[idx].blogUrl", target="_blank") {{rankData.goldenClose[idx].name}}
                  td {{rankData.goldenClose[idx].blogList.length}}

          .col-12.col-lg-4
            table.text-center.table.table-bordered
              tr.thead-light
                th.prize(colspan='3') 🏆 銀角獎 🏆
              tr
                th 🙌
                th 挑戰者
                th 文章數量
              tbody
                tr(:key='idxSilver' v-for='(ppl,idxSilver) in rankData.silver')
                  td {{idxSilver+1}}
                  td.pr-name 
                    a(:href="rankData.silver[idxSilver].blogUrl", target="_blank") {{rankData.silver[idxSilver].name}}
                  td.pr-num {{rankData.silver[idxSilver].blogList.length}}
                tr.thead-light
                  th.about(colspan='3') 加油！差一點點！
                tr(:key='idx +"-label"' v-for='(pplClose,idx) in rankData.silverClose')
                  td {{idx+1}}
                  td 
                    a(:href="rankData.silverClose[idx].blogUrl", target="_blank") {{rankData.silverClose[idx].name}}
                  td {{rankData.silverClose[idx].blogList.length}}
            
          .col-12.col-lg-4(v-if='rankData.brass.length>0')
            table.text-center.table.table-bordered
              tr.thead-light 
                th.prize(colspan='3') 🏆 銅角獎 🏆
              tr
                th 🙌🏻
                th 挑戰者
                th 文章數量
              tbody
                tr(:key='idxBrass' v-for='(ppl,idxBrass) in rankData.brass')
                  td {{idxBrass+1}}
                  td.pr-name
                    a(:href="rankData.brass[idxBrass].blogUrl", target="_blank") {{rankData.brass[idxBrass].name}}
                  td.pr-num {{rankData.brass[idxBrass].blogList.length}}
                tr.thead-light
                  th.about(colspan='3') 加油！差一點點！
                tr(:key='idx +"-label"' v-for='(pplClose,idx) in rankData.brassClose')
                  td {{idx+1}}
                  td 
                    a(:href="rankData.brassClose[idx].blogUrl", target="_blank") {{rankData.brassClose[idx].name}}
                  td {{rankData.brassClose[idx].blogList.length}}
            
        
        
      
      .gotop(@click='backToTop') Top

      //- 圖表
      section.pt-5(v-if='tabType=="charts"')
        charts(:chartData="BlogData")
      
      //- 收藏文章
      section.pt-5(v-if='tabType=="articles"')
        articles(:blogData="BlogData", :savedArt="savedArt")
      
    footer
      a.mr-3(href='https://github.com/itsems' target='_blank')
        img(width='30' src='../assets/github.png' alt)
      a(href='https://medium.com/itsems-frontend' target='_blank')
        img(width='30' src='../assets/medium.png' alt)
  
</template>

<script>
import axios from "axios";

import charts from "./charts";
import articles from "./arts";

export default {
  name: "HelloWorld",
  components: { charts, articles },
  data() {
    return {
      BlogData: [],
      searchAuthor: "",
      searchBlogList: "",
      anotherData: [],
      type: "",
      reverse: false,
      artNum: 0,
      tabType: "index",
      savedAuthor: [],
      updatedSavedAuthor: [],
      rankData: { golden: [], silver: [], brass: [] },
      savedArt: []
    };
  },
  created() {
    console.clear();
    axios
      .get(
        "https://raw.githubusercontent.com/hexschool/w3hexschool-API/master/data.json"
      )
      .then(res => {
        this.BlogData = res.data;

        // if the browser already has saved author list in savedAuthor
        if (localStorage.getItem("MyAuthor")) {
          this.savedAuthor = JSON.parse(localStorage.getItem("MyAuthor"));
        }

        if (localStorage.getItem("MyArticle")) {
          this.savedArt = JSON.parse(localStorage.getItem("MyArticle"));
        }

        // update saved Author blogList using blogUrl
        for (var z in this.savedAuthor) {
          this.BlogData.filter(el => {
            if (el.blogUrl == this.savedAuthor[z].blogUrl) {
              this.savedAuthor[z] = el;
            }
          });
        }

        this.GetThisWeek();

        // Date time Ranking Handle

        Date.prototype.addHours = function(h) {
          this.setHours(this.getHours() + h);
          return this;
        };

        // Date.prototype.minusDay = function(h) {
        //   this.setDate(this.getDate() - h);
        //   return this;
        // };

        // Transfer locale Datetime String to Date() object

        this.BlogData.forEach(item => {
          var se = item.updateTime.split(" ");
          var newTimeStr = se[0] + " " + se[2] + " GMT";
          item.updateTime = new Date(newTimeStr);
          if (se[1] == "下午" && se[2].slice(0, 2) != "12") {
            item.updateTime.addHours(4);
          } else if (se[1] == "上午" && se[2].slice(0, 2) == "12") {
            item.updateTime.addHours(-20);
          } else {
            item.updateTime.addHours(-8);
          }
        });

        // Sort data
        this.BlogData.sort((a, b) => {
          return a.updateTime < b.updateTime ? 1 : -1;
        });

        // Transfer Date() object back to LocaleString
        this.BlogData.forEach(item => {
          item.updateTime = new Date(item.updateTime).toLocaleString();
        });

        // article numbers
        this.BlogData.forEach(item => {
          item.blogList.reverse();
          this.artNum = this.artNum + item.blogList.length;
        });

        // console.log(this.BlogData.length);

        // ranking Data
        var goldNum = 40;
        var silverNum = 25;
        var brassNum = 10;

        // 金角
        this.rankData.golden = this.BlogData.filter(item => {
          return item.blogList.length > goldNum;
        }).sort((a, b) => {
          return b.blogList.length - a.blogList.length;
        });
        this.rankData.goldenClose = this.BlogData.filter(item => {
          return (
            item.blogList.length + 4 > goldNum && item.blogList.length < goldNum
          );
        }).sort((a, b) => {
          return b.blogList.length - a.blogList.length;
        });

        // 銀角
        this.rankData.silver = this.BlogData.filter(item => {
          return (
            item.blogList.length > silverNum && item.blogList.length < goldNum
          );
        }).sort((a, b) => {
          return b.blogList.length - a.blogList.length;
        });
        this.rankData.silverClose = this.BlogData.filter(item => {
          return (
            item.blogList.length + 4 > silverNum &&
            item.blogList.length < silverNum
          );
        }).sort((a, b) => {
          return b.blogList.length - a.blogList.length;
        });

        // 銅角
        // 已得銅角
        this.rankData.brass = this.BlogData.filter(item => {
          return (
            item.blogList.length > brassNum && item.blogList.length < silverNum
          );
        }).sort((a, b) => {
          return b.blogList.length - a.blogList.length;
        });
        this.rankData.brassClose = this.BlogData.filter(item => {
          return (
            item.blogList.length + 4 > brassNum &&
            item.blogList.length < brassNum
          );
        }).sort((a, b) => {
          return b.blogList.length - a.blogList.length;
        });
      })
      .catch(function(err) {
        console.error(err);
      });
  },

  computed: {
    filterBlogData() {
      this.BlogData.forEach(item => {
        if (item.name == null) item.name = "不公開";
      });

      if (this.type == "ar") {
        // filter arthur
        return this.BlogData.filter(el => {
          return el.name
            .toLowerCase()
            .includes(this.searchAuthor.toLowerCase());
        });
      } else {
        // filter Blog List
        return this.BlogData.filter(el => {
          for (var i = 0; i < el.blogList.length; i++) {
            if (
              el.blogList[i].title
                .toLowerCase()
                .includes(this.searchBlogList.toLowerCase())
            ) {
              return el;
            }
          }
        });
      }
    }
  },
  methods: {
    moreToggle(e) {
      var ul = e.target.parentElement.nextSibling;
      var n = ul.className;
      if (n.includes("open")) ul.classList.remove("open");
      else ul.classList.add("open");

      e.target.innerText == "更多"
        ? (e.target.innerText = "收起")
        : (e.target.innerText = "更多");
    },
    GetThisWeek() {
      var d = new Date();
      var nowday = d.getDay();

      // if Sunday
      if (nowday == 0) nowday = 7;

      let first = new Date(d.setDate(d.getDate() - nowday + 1)),
        f_month = "" + (first.getMonth() + 1),
        f_day = "" + first.getDate(),
        f_year = first.getFullYear();
      let FormattedFirstDay = [f_year, f_month, f_day].join("-");
      let newFirstDay = new Date(FormattedFirstDay);

      for (var i = 0; i < this.savedAuthor.length; i++) {
        var zz = new Date(this.savedAuthor[i].updateTime.split(" ")[0]);
        if (zz >= newFirstDay) this.savedAuthor[i].updated = true;
        else this.savedAuthor[i].updated = false;
      }
    },
    addFollow(idx) {
      // check 挑戰者是否已在收藏清單中
      for (var i = 0; i < this.savedAuthor.length; i++) {
        if (this.savedAuthor[i].blogUrl == this.filterBlogData[idx].blogUrl) {
          alert("此挑戰者已在收藏名單中！");
          return;
        }

        // if (
        //   this.savedAuthor[i].blogUrl.includes(this.filterBlogData[idx].blogUrl)
        // ) {
        //   alert("此挑戰者已在收藏名單中！");
        //   return;
        // }
      }

      // 推進收藏挑戰者ary
      this.savedAuthor.push(this.filterBlogData[idx]);
      localStorage.setItem("MyAuthor", JSON.stringify(this.savedAuthor));
      alert("已收藏挑戰者！");

      this.GetThisWeek();
    },
    unfollow(idx) {
      // 拿掉收藏挑戰者ary
      this.savedAuthor.splice(idx, 1);
      localStorage.setItem("MyAuthor", JSON.stringify(this.savedAuthor));
    },
    backToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    },
    saveTheArt(el, title, url) {
      for (var z = 0; z < this.savedArt.length; z++) {
        if (this.savedArt[z].title == title) {
          alert("文章已收藏");
          return;
        }
      }
      var pushEl = {
        name: el.name,
        blogUrl: el.blogUrl,
        title: title,
        url: url
      };
      this.savedArt.push(pushEl);
      localStorage.setItem("MyArticle", JSON.stringify(this.savedArt));
      alert("文章已收藏");
    }
  }
};
</script>

<style scoped>
.wrap {
  font-family: "微軟正黑體", "Microsoft JhengHei";
}
.banner-zone {
  width: 100%;
  height: 400px;
}
.banner {
  width: 100%;
  height: 400px;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/hexschool-api.appspot.com/o/blog%2F2019%2F11%2Fw3HS%E9%90%B5%E4%BA%BA%E8%B3%BDbanner.png?alt=media&token=3f0ef8fd-6285-47ac-a159-83ff3fb3972e");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.13;
}
.bn-txt {
  margin-top: -280px;
  position: relative;
}

.act-list a {
  color: #ffffff;
  position: relative;
}
.act-list a:hover {
  color: #fff;
}
.nav-link.active {
  font-weight: bold;
}
input {
  padding: 0 10px;
  /* margin-right: 10px; */
}

table {
  width: 100%;
  word-break: break-all;
  text-align: left;
}
th {
  text-align: center;
}
th,
td {
  padding: 10px;
}
table th {
  vertical-align: middle;
}
table ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
}
table li:not(:last-child) {
  margin-bottom: 10px;
}
a {
  color: #049e5a;
}
a:hover {
  color: #f29700;
}
p {
  margin-bottom: 0;
}
.cp {
  cursor: pointer;
}
.updateTime {
  word-break: keep-all;
}
.reverse {
  cursor: pointer;
}
.arr {
  position: relative;
  top: -2px;
}
.rev {
  transform: rotate(180deg);
}
footer {
  background-color: #eee;
  margin-top: 100px;
  padding: 15px 0;
}
.savedList {
  margin-bottom: 0;
}
.savedList li {
  display: none;
  word-break: break-all;
}
.savedList.open li {
  display: block;
}

.savedList li:nth-child(1),
.savedList li:nth-child(2) {
  display: block;
}
.unfollow,
.add {
  cursor: pointer;
  transition: all 0.3s;
}
.unfollow:hover {
  transform: rotate(90deg);
}
.add:hover {
  transform: rotate(90deg);
}
.gotop {
  padding: 15px;
  border-radius: 50%;
  background-color: #eeeeee;
  color: #000;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1;
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid #eee;
}
.gotop:hover {
  border: 1px solid #aaa;
}

/* ranking */
.table .thead-light .prize {
  color: gold;
  color: #ccad09;
  font-size: 20px;
}
.pr-name {
  font-size: 18px;
  font-weight: bold;
}
.pr-num {
  color: red;
  font-weight: bold;
}
.hourglass {
  width: 20px;
  animation: hourglass 1.2s ease-in-out infinite;
}

@keyframes hourglass {
  from {
    transform: rotate(0);
  }
  70% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
.saveArt {
  cursor: pointer;
  transition: all 0.3s;
}
.saveArt:hover {
  background-color: #ffc107;
}
</style>
