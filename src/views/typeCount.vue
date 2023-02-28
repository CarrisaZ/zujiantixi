

<template>
  <div>
    <div class="logo">
      <p>type统计数量</p>
    </div>
    <div ref="chartRef" :style="{ width: '300px', height: '300px' }"></div>
    <!--    <button @click="draw">点击刷新</button>-->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { echartsRequest } from "@/service/api/echarts";
import * as echarts from "echarts";
const xPosition = ref([]);
const yPosition = ref([]);
const chartRef = ref(null);

onMounted(async () => {
  await getData();
  await drawLine();
});
const drawLine = async () => {
  const myChart = echarts.init(chartRef.value);
  myChart.setOption({
    title: { text: "概念-组件-实体" },
    xAxis: {
      type: "category",
      data: xPosition.value,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: yPosition.value,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  });
};
const getData = async () => {
  try {
    const res = await echartsRequest();
    if (res.code === "00000") {
      xPosition.value = res.data.map((item) => item.type);
      yPosition.value = res.data.map((item) => item.count);
    } else {
      throw new Error(res.msg);
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
.logo {
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
}
</style>


