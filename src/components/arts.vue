<template lang="pug">
    div.wrap
        h3.font-weight-bold.mb-5 收藏文章
        table.table.table-bordered.table-hover
            tr.thead-light
                th 收藏文章
                th 挑戰者
                th 取消
                
            tbody
                tr(:key="idx", v-for="(el,idx) in this.savedArt")
                    td.text-left
                      a(:href="el.url", target="_blank") {{el.title}}
                    td
                      a(:href="el.blogUrl", target="_blank") {{el.name}}
                    td.text-center.align-middle
                      p.mb-0(@click='read(idx)')
                        img.unfollow(src='../assets/un.png' alt)



</template>

<script>
export default {
  name: "articles",
  props: ["savedArt", "blogData"],
  data() {
    return {};
  },
  created() {
    console.clear();
  },
  methods: {
    read(idx) {
      this.savedArt.splice(idx, 1);
      localStorage.setItem("MyArticle", JSON.stringify(this.savedArt));
    }
  },
  computed: {}
};
</script>
<style scoped>
.wrap a {
  color: #049e5a;
}
.wrap a:hover {
  color: #f29700;
}
.unfollow {
  cursor: pointer;
  transition: all 0.3s;
}
.unfollow:hover {
  transform: rotate(90deg);
}
</style>