<template>
    <BarChart v-bind="barChartProps" class="bar"/>
</template>

<script>
import { BarChart, useBarChart } from "vue-chart-3";
import { computed, defineComponent } from "@vue/composition-api";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default defineComponent({
  name: "ChartBar",
  components: {
    BarChart,
  },
  props: {
    color: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const options = computed(() => ({
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.5,
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontColor: "#77848F"
          }
        },
        y: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      layout: {
        padding: {
          left: -10
        }
      }
    }));

    const chartData = computed(() => ({
      labels: ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'o', 'l', 'm', 'n', 'o'],
      datasets: [{
        borderRadius: 4,
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
          props.color,
          `${props.color}50`,
          props.color,
          `${props.color}50`,
          props.color,
          `${props.color}50`,
          props.color,
          `${props.color}50`,
          props.color,
          `${props.color}50`,
          props.color,
          `${props.color}50`,
          props.color,
          `${props.color}50`,
        ]
      }]
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
      options,
    });
    return { barChartProps, barChartRef};
  },
});
</script>

<style lang="scss" scoped>
.bar {
  width: 240px;
  height: 100px;
}
</style>