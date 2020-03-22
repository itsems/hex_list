<template lang="pug">
    div
        h3.font-weight-bold.mb-5 收藏文章
        table.table.table-bordered.table-hover
            tr.thead-light
                th 挑戰者
                th 收藏文章
                
            tbody
                tr()
                    td
                    td



</template>

<script>
export default {
  name: "articles",
  props: ["savedArt", "blogData"],
  data() {
    return {
      savedArts: ""
    };
  },
  methods: {},
  computed: {}
};
</script>