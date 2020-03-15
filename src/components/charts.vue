<template lang="pug">
    div
        h3.font-weight-bold 文章數平均
        .chart-zone
            bar-chart(:chart-data='BarchartData' :options='BarchartOptions')

</template>
<script>
import BarChart from "../charts/BarChart";

export default {
  name: "charts",
  components: { BarChart },
  props: ["chartData"],
  data() {
    return {
      BlogData: "",
      BarchartData: {
        labels: [
          "1-5",
          "6-10",
          "11-15",
          "16-20",
          "21-25",
          "26-30",
          "31-35",
          "36-40"
        ],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3, 2, 3]
          }
        ]
      },
      PiechartColors: [
        "#fef0dc",
        "#fce6c4",
        "#fbd7a1",
        "#facd89",
        "#daf0ef",
        "#c1e5e4",
        "#9dd6d4",
        "#84ccc9"
      ],
      BarchartOptions: {
        animation: {
          animateScale: true
        }
      },
      arrs: [0, 0, 0, 0, 0, 0, 0, 0],
      firstarr: [],
      secarr: [],
      thiarr: []
    };
  },
  created() {
    console.clear();
    this.BlogData = this.chartData;
    // console.log(this.arrs);

    this.BlogData.forEach(item => {
      for (var arrsIdx = 0; arrsIdx < 8; arrsIdx++) {
        var listBase = parseInt(5 * arrsIdx);
        if (
          item.blogList.length > listBase &&
          item.blogList.length <= listBase + 5
        )
          this.arrs[arrsIdx]++;
      }
    });
    console.log(this.arrs);
    this.BarchartData = {
      labels: [
        "1-5",
        "6-10",
        "11-15",
        "16-20",
        "21-25",
        "26-30",
        "31-35",
        "36-40"
      ],
      datasets: [{ backgroundColor: this.PiechartColors, data: this.arrs }]
    };
  },
  updated() {}
};
</script>
<style>
.chart-zone {
  width: 500px;
  display: block;
  margin: 0 auto;
}
</style>