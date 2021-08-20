<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data() {
    return {
      chartData: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'o', 'l', 'm', 'n', 'o'],
        datasets: [{
          borderRadius: 90,
          borderSkipped: false,
          data: [
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100),
            Math.random(0,100)
          ],
          backgroundColor: [
            '#0077FF',
            '#0077FF50',
            '#0077FF',
            '#0077FF50',
            '#0077FF',
            '#0077FF50',
            '#0077FF',
            '#0077FF50',
            '#0077FF',
            '#0077FF50',
            '#0077FF',
            '#0077FF50',
            '#0077FF',
            '#0077FF50'
          ]
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: "#77848F"
            },
          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>

<style lang="scss" scoped>
.bar {
  width: 270px;
  height: 100px;
}
</style>