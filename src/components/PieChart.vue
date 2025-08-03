<template>
  <Pie :data="data" :options="options" />
</template>

<script setup>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

const props = defineProps(['data'])

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    datalabels: {
      color: '#fff',
      font: {
        weight: 'bold',
        size: 14
      },
      
      formatter: (value, context) => {
        const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0)
        const percentage = (value / total * 100).toFixed(1) + '%'
        return percentage
      }
    }
  }
}
</script>
