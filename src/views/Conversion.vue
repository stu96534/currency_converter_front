<script setup >
import { ref } from "vue";
import tbAPI from "../api/taiwanBank";

const exchangeRates = ref([]);

async function fetchRates() {
  const response = await tbAPI.getTaiwanBankRate()

  const currencies = response.data.currencies

  for (let i = 0; i < currencies.length; i++) {
    currencies[i].image = "../../public/" + currencies[i].name + ".jpg"
  }

  exchangeRates.value = currencies

}

fetchRates()


</script>

<template>
  <div class="container">
    <div class="nation">
  <button class="card" v-for="exchangeRate in exchangeRates" :key="exchangeRate.id">
    <img :src= exchangeRate.image alt="">
    <h3>{{ exchangeRate["name"] }}</h3>
  </button>
 
    
    </div>
    
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
}

.container{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.nation{
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  grid-gap: 20px;
}

img {
  width: 90px;
}

.card {
  background: white;
  border-radius: 12px 12PX;
  box-shadow: 0 2px 12px rgba(32, 32, 32, .3);
  width: 100px;
  height: 85px;
  font-size: 11px
}

</style>
