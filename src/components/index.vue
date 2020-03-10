<template>
  <div>
    <div class="banner-zone">
      <div class="banner"></div>
      <div class="bn-txt">
        <h1 class="font-weight-bold">w3HexSchool 鼠年全馬鐵人挑戰</h1>
        <h2>文章查詢及追蹤收藏挑戰者</h2>
      </div>
      <div class="container">
        <div class="act-list mt-5">
          <a
            class="mr-4 btn btn-success"
            target="_blank"
            href="https://www.hexschool.com/2019/11/14/2019-11-14-w3Hexschool-2020-challenge/"
          >活動連結</a>
          <a
            class="mr-4 btn btn-success"
            target="_blank"
            href="https://forms.gle/MvufZiucPir4yhHb6"
          >報名與投稿表單連結</a>
          <a
            target="_blank"
            class="btn btn-success"
            href="https://github.com/hexschool/w3hexschool-API"
          >報名API</a>
        </div>
      </div>
    </div>

    <div class="container">
      <ul class="nav nav-tabs mt-3">
        <li class="nav-item">
          <a
            href="javascript:;"
            @click="tabType='index'"
            :class="{'active':tabType=='index'}"
            class="nav-link"
          >總覽</a>
        </li>

        <li class="nav-item">
          <a
            href="javascript:;"
            @click="tabType='allArt'"
            :class="{'active':tabType=='allArt'}"
            class="nav-link"
          >文章總表</a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:;"
            @click="tabType='savedAuthor'"
            :class="{'active':tabType=='savedAuthor'}"
            class="nav-link"
          >收藏的挑戰者</a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:;"
            @click="tabType='artNum'"
            :class="{'active':tabType=='artNum'}"
            class="nav-link"
          >文章數排行</a>
        </li>
      </ul>

      <!-- 收藏table -->
      <section v-if="tabType=='index'||tabType=='savedAuthor'" class="pt-5 savedAuthor">
        <h3 class="font-weight-bold mb-4">收藏的挑戰者</h3>
        <table class="table table-bordered table-hover mt-3 mb-5">
          <!-- th -->
          <tr class="thead-light">
            <th width="150">挑戰者</th>
            <th>文章列表</th>
            <th width="70">
              本周
              <br />更新
            </th>
            <th width="70">
              取消
              <br />追蹤
            </th>
          </tr>
          <!-- content -->
          <tbody>
            <tr :key="idx" v-for="(el,idx) in savedAuthor">
              <td class="align-middle text-center">
                <!-- name -->
                <a target="_blank" class="font-weight-bold" :href="el.blogUrl">{{el.name}}</a>
                <br />
                <p style="font-size:12px;">
                  已發布
                  <span
                    style="font-size:16px;position:relative;top:1px"
                    class="text-danger font-weight-bold"
                  >{{savedAuthor[idx].blogList.length}}</span> 篇
                </p>
              </td>
              <td>
                <div class="d-inline-block align-top" style="width:120px">
                  <button @click="moreToggle" class="mr-3 btn btn-success btn-sm">更多</button>
                  <span v-if="el.updated" class="badge badge-warning">New!</span>
                </div>
                <ul style="width:calc(100% - 120px)" class="d-inline-block savedList">
                  <li :key="idx2" v-for="(art, idx2) in savedAuthor[idx].blogList">
                    <a target="_blank" :href="art.url">{{art.title}}</a>
                  </li>
                </ul>

                <!-- 文章列表 -->
              </td>
              <td class="updateTime text-center align-middle">
                <!-- updated this week -->
                <img v-if="el.updated" src="../assets/check.png" alt />
                <!-- <img v-else src="../assets/uncheck.png" alt /> -->
                <img class="hourglass" v-else src="../assets/hourglass.png" alt />
              </td>
              <td class="text-center align-middle">
                <p @click="unfollow(idx)">
                  <img class="unfollow" src="../assets/un.png" alt />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 搜尋和文章列表 -->
      <section v-if="tabType=='index'||tabType=='allArt'" class="pt-5 artList">
        <!-- Query Table -->
        <h3 class="font-weight-bold mb-4">搜尋</h3>
        <table class="table table-bordered text-center mt-3">
          <tr class="thead-light">
            <th>
              <p>搜尋作者 : {{searchAuthor}}</p>
            </th>
            <th>
              <p>搜尋標題 : {{searchBlogList}}</p>
            </th>
          </tr>
          <tr>
            <td>
              <div class="input-group">
                <input
                  @input="searchBlogList='';type='ar'"
                  v-model="searchAuthor"
                  type="text"
                  placeholder="搜尋作者"
                  class="form-control"
                />
              </div>
            </td>
            <td>
              <div class="input-group">
                <input
                  @input="searchAuthor='';type='su'"
                  v-model="searchBlogList"
                  placeholder="搜尋標題"
                  type="text"
                  class="form-control"
                />
              </div>
            </td>
          </tr>
        </table>
        <br />
        <h3 class="font-weight-bold mb-4 mt-5">文章總表</h3>
        <div class="info text-left">
          <p>共計挑戰者：{{BlogData.length}}</p>
          <p>共計挑戰文章：{{artNum}}</p>
        </div>

        <!-- Result Table -->
        <table class="table table-bordered table-hover mt-3">
          <tr class="thead-light">
            <th width="150">挑戰者</th>
            <th>文章列表(由近到遠)</th>

            <th width="210">
              <div @click="reverse=!reverse;reverseIt()" class="reverse">
                <span class="mr-2">更新時間</span>
                <img class="arr" :class="{rev:reverse}" src="../assets/arr.png" alt />
              </div>
            </th>
            <th>收藏</th>
          </tr>
          <tbody>
            <tr :key="idxFiltered" v-for="(el,idxFiltered) in filterBlogData">
              <!-- name -->
              <td class="align-middle text-center">
                <a target="_blank" class="font-weight-bold" :href="el.blogUrl">{{el.name}}</a>
              </td>
              <!-- blog list -->
              <td>
                <ul>
                  <li
                    :key="idx2List"
                    v-for="(art, idx2List) in filterBlogData[idxFiltered].blogList"
                  >
                    <a target="_blank" :href="art.url">{{art.title}}</a>
                  </li>
                </ul>
              </td>
              <!-- update time -->
              <td class="updateTime">{{el.updateTime}}</td>
              <!-- updated -->
              <td class="align-middle text-center">
                <p @click="addFollow(idxFiltered)">
                  <img class="add" src="../assets/add.png" alt />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 文章數排行 -->
      <section v-if="tabType=='artNum'" class="pt-5">
        <h3>文章數排行</h3>
        <ul class="text-left">
          <li>金角獎 (實體獎座)：成功撰寫滿 40 週者均可獲得。</li>
          <li>銀角獎 (實體獎座)：成功撰寫滿 25 週者均可獲得。</li>
          <li>銅角獎 (數位獎狀)：成功撰寫滿 10 週者均可獲得。</li>
        </ul>
        <div class="row">
          <div class="col-4">
            <table class="text-center table table-bordered">
              <tr class="thead-light">
                <th class="prize" colspan="3">金角獎</th>
              </tr>
              <tr>
                <th>🙌🏻</th>
                <th>挑戰者</th>
                <th>文章數量</th>
              </tr>
              <tbody>
                <tr :key="idxGolden" v-for="(ppl,idxGolden) in rankData.golden">
                  <td>{{idxGolden+1}}</td>
                  <td class="pr-name">{{rankData.golden[idxGolden].name}}</td>
                  <td class="pr-num">{{rankData.golden[idxGolden].blogList.length}}</td>
                </tr>
                <tr class="thead-light">
                  <th colspan="3" class="about">加油！差一點點！</th>
                </tr>
                <tr :key="idx +'-label'" v-for="(pplClose,idx) in rankData.goldenClose">
                  <td>{{idx+1}}</td>
                  <td>{{rankData.goldenClose[idx].name}}</td>
                  <td>{{rankData.goldenClose[idx].blogList.length}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-4">
            <table class="text-center table table-bordered">
              <tr class="thead-light">
                <th class="prize" colspan="3">銀角獎</th>
              </tr>
              <tr>
                <th>🙌🏻</th>
                <th>挑戰者</th>
                <th>文章數量</th>
              </tr>
              <tbody>
                <tr :key="idxSilver" v-for="(ppl,idxSilver) in rankData.silver">
                  <td>{{idxSilver+1}}</td>
                  <td class="pr-name">{{rankData.silver[idxSilver].name}}</td>
                  <td class="pr-num">{{rankData.silver[idxSilver].blogList.length}}</td>
                </tr>
                <tr class="thead-light">
                  <th colspan="3" class="about">加油！差一點點！</th>
                </tr>
                <tr :key="idx +'-label'" v-for="(pplClose,idx) in rankData.silverClose">
                  <td>{{idx+1}}</td>
                  <td>{{rankData.silverClose[idx].name}}</td>
                  <td>{{rankData.silverClose[idx].blogList.length}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-4">
            <table class="text-center table table-bordered">
              <tr class="thead-light">
                <th class="prize" colspan="3">銅角獎</th>
              </tr>
              <tr>
                <th>🙌🏻</th>
                <th>挑戰者</th>
                <th>文章數量</th>
              </tr>
              <tbody>
                <tr :key="idxBrass" v-for="(ppl,idxBrass) in rankData.brass">
                  <td>{{idxBrass+1}}</td>
                  <td class="pr-name">{{rankData.brass[idxBrass].name}}</td>
                  <td class="pr-num">{{rankData.brass[idxBrass].blogList.length}}</td>
                </tr>
                <tr class="thead-light">
                  <th colspan="3" class="about">加油！差一點點！</th>
                </tr>
                <tr :key="idx +'-label'" v-for="(pplClose,idx) in rankData.brassClose">
                  <td>{{idx+1}}</td>
                  <td>{{rankData.brassClose[idx].name}}</td>
                  <td>{{rankData.brassClose[idx].blogList.length}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div @click="backToTop" class="gotop">Top</div>
    </div>
    <footer>
      <a class="mr-3" href="https://github.com/itsems" target="_blank">
        <img width="30" src="../assets/github.png" alt />
      </a>
      <a href="https://medium.com/itsems-frontend" target="_blank">
        <img width="30" src="../assets/medium.png" alt />
      </a>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
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
      rankData: []
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

        // update saved Author blogList using blogUrl
        for (var z in this.savedAuthor) {
          this.BlogData.filter(el => {
            if (el.blogUrl == this.savedAuthor[z].blogUrl) {
              this.savedAuthor[z] = el;
            }
          });
        }

        this.GetThisWeek();

        this.BlogData.sort((a, b) => {
          return a.updateTime < b.updateTime ? 1 : -1;
        });

        // article numbers
        this.BlogData.forEach(item => {
          item.blogList.reverse();
          this.artNum = this.artNum + item.blogList.length;
        });

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
    reverseIt() {
      if (this.reverse) {
        this.BlogData.sort(function(a, b) {
          return a.updateTime < b.updateTime ? -1 : 1;
        });
      } else {
        this.BlogData.sort(function(a, b) {
          return a.updateTime < b.updateTime ? 1 : -1;
        });
      }
    },
    addFollow(idx) {
      // check 作者是否已在收藏清單中
      for (var i = 0; i < this.savedAuthor.length; i++) {
        if (
          this.savedAuthor[i].blogUrl.includes(this.filterBlogData[idx].blogUrl)
        ) {
          alert("此作者已在收藏名單中！");
          return;
        }
      }

      // 推進收藏作者ary
      this.savedAuthor.push(this.filterBlogData[idx]);
      localStorage.setItem("MyAuthor", JSON.stringify(this.savedAuthor));

      this.GetThisWeek();
    },
    unfollow(idx) {
      // 拿掉收藏作者ary
      this.savedAuthor.splice(idx, 1);
      localStorage.setItem("MyAuthor", JSON.stringify(this.savedAuthor));
    },
    backToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
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
  padding: 0 5px;
  margin-right: 10px;
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
}
li {
  margin-bottom: 10px;
}
a {
  color: #39af7a;
}
a:hover {
  color: #f29700;
}
p {
  margin-bottom: 0;
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
</style>
