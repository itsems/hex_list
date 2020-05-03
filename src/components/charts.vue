<template lang="pug">
    div
        h3.font-weight-bold.mb-5 統計
        .chart-zone
            .row.justify-content-around
              .col-6.col-lg-5
                h4.font-weight-bold 挑戰者投稿篇數
                p 目前總投稿人數：{{this.BlogData.length}}
                bar-chart(:chart-data='BarchartData' :options='BarchartOptions')
              .col-12.col-lg-5
                h4.font-weight-bold 最後更新日期
                p 目前總投稿人數：{{this.BlogData.length}}
                bar-chart(:chart-data='PiechartData' :options='PiechartOptions')
              .col-12.col-lg-5
                h4.font-weight-bold 多於一周無更新人數：
                p {{notUpdate}}
              .col-12.col-lg-5
                h4.font-weight-bold 仍在更新挑戰者：
                p {{this.BlogData.length-notUpdate}}




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
      BarchartLabels: [
        "1-5",
        "6-10",
        "11-15",
        "16-20",
        "21-25",
        "26-30",
        "31-35",
        "36-40"
      ],
      BarchartData: {
        datasets: [
          {
            data: [0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      },
      BarchartColors: [
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
        title: {
          display: true,
          text: "挑戰者已投稿篇數"
        },
        legend: false,
        animation: {
          animateScale: true
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "篇數"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "挑戰者(位)"
              }
            }
          ]
        }
      },
      arrs: [0, 0, 0, 0, 0, 0, 0, 0],
      BarchartLabels2: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      PiechartOptions: {
        title: {
          display: true,
          text: "挑戰者最後更新月"
        },
        legend: false,
        animation: {
          animateScale: true
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "月份"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "人數"
              }
            }
          ]
        }
      },
      PiechartColors: [
        "#daf0ef",
        "#c1e5e4",
        "#9dd6d4",
        "#84ccc9",
        "#fef0dc",
        "#fce6c4",
        "#fbd7a1",
        "#fef0dc",
        "#fce6c4",
        "#fbd7a1",
        "#facd89"
      ],
      arrsMon: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      notUpdate: 0
    };
  },
  created() {
    console.clear();
    this.BlogData = this.chartData;

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
    this.BarchartData = {
      labels: this.BarchartLabels,
      datasets: [{ backgroundColor: this.BarchartColors, data: this.arrs }]
    };

    this.BlogData.forEach(i => {
      var ut = i.updateTime.split(" ")[0];
      var month = ut.split("/")[1];

      // ex: 最後更新month=2月，更新this.Mon[0]個數字
      this.arrsMon[month - 2]++;
    });

    this.PiechartData = {
      labels: this.BarchartLabels2,
      datasets: [
        {
          backgroundColor: this.PiechartColors,
          data: this.arrsMon
        }
      ]
    };

    this.WhosNotUpdate();
  },
  methods: {
    WhosNotUpdate() {
      var d = new Date();
      var nowday = d.getDay();
      let first = new Date(d.setDate(d.getDate() - nowday - 7)),
        f_month = "" + (first.getMonth() + 1),
        f_day = "" + first.getDate(),
        f_year = first.getFullYear();
      let FormattedFirstDay = [f_year, f_month, f_day].join("-");
      let lastWeek = new Date(FormattedFirstDay);

      this.BlogData.forEach(i => {
        var ut = i.updateTime.split(" ")[0];
        var month = ut.split("/")[1];
        var dateOnly = ut.split("/")[2];

        if (month <= f_month && dateOnly < f_day) this.notUpdate++;
      });
    }
  }
};
</script>
<style>
.chart-zone {
  /* width: 500px; */
  display: block;
  margin: 0 auto;
}
</style>