<template>
  <div class="container">
    <h1>w3HexSchool 鼠年全馬鐵人挑戰</h1>
    <h2>文章查詢及追蹤收藏作者</h2>

    <img
      class="img-fluid my-3"
      src="https://firebasestorage.googleapis.com/v0/b/hexschool-api.appspot.com/o/blog%2F2019%2F11%2Fw3HS%E9%90%B5%E4%BA%BA%E8%B3%BDbanner.png?alt=media&token=3f0ef8fd-6285-47ac-a159-83ff3fb3972e"
      alt
    />

    <ul class="text-left">
      <li>
        <a
          target="_blank"
          href="https://www.hexschool.com/2019/11/14/2019-11-14-w3Hexschool-2020-challenge/"
        >活動連結</a>
      </li>
      <li>
        <a target="_blank" class="d-block mb-5" href="https://forms.gle/MvufZiucPir4yhHb6">報名與投稿表單連結</a>
      </li>
    </ul>

    <br />

    <!-- 收藏table -->
    <h3>收藏的作者</h3>
    <table class="table table-bordered table-hover mt-3 mb-5">
      <!-- th -->
      <tr class="thead-light">
        <th width="150">Name</th>
        <th>Blog List</th>
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
      <tr :key="idx" v-for="(el,idx) in savedAuthor">
        <td>
          <a target="_blank" class="font-weight-bold" :href="el.blogUrl">{{el.name}}</a>
        </td>
        <td>
          <ul>
            <li :key="idx2" v-for="(art, idx2) in savedAuthor[idx].blogList">
              <a target="_blank" :href="art.url">{{art.title}}</a>
            </li>
          </ul>
        </td>
        <td class="updateTime text-center align-middle">
          <img v-if="el.updated" src="../assets/check.png" alt />
          <img v-else src="../assets/uncheck.png" alt />
        </td>
        <td class="text-center align-middle">
          <p @click="unfollow(idx)">
            <img class="unfollow" src="../assets/un.png" alt />
          </p>
        </td>
      </tr>
    </table>

    <!-- Query Table -->
    <h3>搜尋</h3>
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
    <h3>文章總表</h3>
    <!-- Result Table -->
    <table class="table table-bordered table-hover mt-3">
      <tr class="thead-light">
        <th width="150">Name</th>
        <th>Blog List</th>
        <th width="200">
          <span class="mr-2">updateTime</span>
          <img
            class="arr"
            :class="{rev:reverse}"
            @click="reverse=!reverse;reverseIt()"
            src="../assets/arr.png"
            alt
          />
        </th>
        <th width="30">
          <img class="add" src="../assets/add.png" alt />
        </th>
      </tr>
      <tbody>
        <tr :key="idx" v-for="(el,idx) in filterBlogData">
          <td>
            <a target="_blank" class="font-weight-bold" :href="el.blogUrl">{{el.name}}</a>
          </td>
          <!-- blog list -->
          <td>
            <ul>
              <li :key="idx2" v-for="(art, idx2) in filterBlogData[idx].blogList">
                <a target="_blank" :href="art.url">{{art.title}}</a>
              </li>
            </ul>
          </td>
          <td class="updateTime">{{el.updateTime}}</td>
          <td class="align-middle">
            <p @click="addFollow(idx)">
              <img class="add" src="../assets/add.png" alt />
            </p>
          </td>
        </tr>
      </tbody>
    </table>

    <footer>
      <a href="https://medium.com/itsems-frontend" target="_blank">Project by itsems</a>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      BlogData: [],
      searchAuthor: "",
      searchBlogList: "",
      anotherData: [],
      type: "",
      reverse: false,
      savedAuthor: []
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
        this.BlogData.sort(function(a, b) {
          return a.updateTime < b.updateTime ? 1 : -1;
        });
      })
      .catch(function(err) {
        console.error(err);
      });

    this.GetSavedAuthor();
    this.GetThisWeek();
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
    GetSavedAuthor() {
      const MyAuthor = localStorage.getItem("MyAuthor");
      if (MyAuthor) {
        this.savedAuthor = JSON.parse(localStorage.getItem("MyAuthor"));
      }
    },
    GetThisWeek() {
      var d = new Date();
      var nowday = d.getDay();

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
          this.savedAuthor[i].name
            .toLowerCase()
            .includes(this.filterBlogData[idx].name.toLowerCase())
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
    }
  }
};
</script>

<style scoped>
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
.arr {
  cursor: pointer;
}
.rev {
  transform: rotate(180deg);
}
footer {
  background-color: #eee;
  margin-top: 100px;
  padding: 15px 0;
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
  transform: rotate(180deg);
}
</style>
