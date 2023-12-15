<!-- eslint-disable vue/multi-word-component-names -->
<script setup >
import { ref } from "vue";
import tbAPI from "../api/taiwanBank";
import NationBtn from "../components/NationBtn.vue";

const nations = ref([]);

//取得貨幣匯率資料
async function fetchRates() {
  const response = await tbAPI.getNation()

  const data = response.data.nations

  for (let i = 0; i < data.length; i++) {
    data[i].image = "/" + data[i].name + ".jpg"
  }

  nations.value = data

}

fetchRates()


</script>

<template>
  <div class="container">
    <div class="nation">
      <NationBtn v-for="nation in nations" :key="nation.id" :initial-nation="nation"></NationBtn>
    </div>

    <router-view></router-view>

  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
}

.container {
  margin: 20px;
  display: block;
  width: 80%;
  height: 50%;
  justify-content: center;
  align-content: space-around;
}

.nation {
  display: grid;
  justify-items: center;
  grid-template-columns: auto auto auto auto auto auto;
  grid-template-rows: auto auto;
  grid-gap: 15px;
}


@media (max-width: 1500px) {
  .nation {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    grid-template-rows: auto auto auto;
    grid-gap: 20px;
  }
}

@media (max-width: 1200px) {
  .nation {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto;
    grid-gap: 10px;
  }
}

@media (max-width: 450px) {
  .nation {
    grid-template-columns: auto auto auto auto;
    grid-gap: 0px;
  }

  .container { 
    max-width: 100vw; 
    width: 90%;
  }
}
</style>
