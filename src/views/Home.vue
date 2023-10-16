<script setup>
import { ref } from "vue";
import converter from '../assets/taiwanBank.json'
import { timeFormate } from "../utils/tools";

const exchangeRates = ref([]);
const time = ref();

exchangeRates.value = converter
time.value = timeFormate(new Date())
</script>

<template>
  <main>

    <h3>{{ time }}</h3>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">幣別</th>
          <th scope="col">現金買入</th>
          <th scope="col">現金賣出</th>
          <th scope="col" class="state">即期買入</th>
          <th scope="col">即期賣出</th>
        </tr>
      </thead>

      <tbody>

        <tr v-for="exchangeRate in exchangeRates" :key="exchangeRate.index">
          <td scope="col">{{ exchangeRate["currency"] }}</td>
          <td scope="col">{{ exchangeRate["cashBuy"] }}</td>
          <td scope="col">{{ exchangeRate["cashSell"] }}</td>
          <td scope="col">{{ exchangeRate["sightBuy"] }}</td>
          <td scope="col">{{ exchangeRate["sightSell"] }}</td>
        </tr>


      </tbody>
    </table>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/earlyaccess/cwtexyen.css');

* {
  margin: 0;
  padding: 0;
  outline: 0;
}

h3 {
  position: relative;
  z-index: 2;
  left: 15%;
}

table {
  position: relative;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  border-collapse: collapse;
  border-spacing: 0;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 2px 12px rgba(32, 32, 32, .3);
  background: #fafafa;
  text-align: center;
}

th,
td {
  padding: 10px 15px;
}

th {
  background: #4caf50;
  color: #fafafa;
  font-size: x-large;
  font-family: 'cwTeXYen', sans-serif;
}

td {
  font-family: 'cwTeXYen', sans-serif;
  font-size: larger;
}

tr:nth-child(even) {
  background-color: #eeeeee;
}
</style>