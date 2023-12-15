<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, watch } from 'vue'

import tbAPI from "../api/taiwanBank";

const rate = ref({})
const picked = ref('')
const TWD = ref()
const FRG = ref()

const props = defineProps(['id'])

//各國貨幣匯率轉換器
watch(
  () => props.id,
  async () => {
    const response = await tbAPI.getNationCurrency(props.id)
    TWD.value = 0
    FRG.value = 0
    rate.value = response.data
    if (rate.value.cashBuy === '-') {
      rate.value.cashBuy = '- '
    } else if (rate.value.sightBuy === '-') {
      rate.value.sightBuy = '- '
    }
    picked.value = rate.value.cashBuy
  }, { immediate: true })


//台幣轉換外幣
function TWDtoFRG(e) {
  watch(
    () => picked.value,
    () => {
      TWD.value = e.target.value
      FRG.value = TWD.value / Number(picked.value)
    }, { immediate: true })
}

//外幣轉換台幣
function FRGtoTWD(e) {
  watch(
    () => picked.value,
    () => {
      FRG.value = e.target.value
      TWD.value = FRG.value * Number(picked.value)
    }, { immediate: true })
}

</script>

<template>
  <div class="converter">

    <div class="radio">
      <input class="input" type="radio" id="cashBuy" :value="rate.cashBuy" v-model="picked" />
      <label for="cashBuy">現金買入</label>

      <input class="input" type="radio" id="cashSell" :value="rate.cashSell" v-model="picked" />
      <label for="cashSell">現金賣出</label>

      <input class="input" type="radio" id="sightBuy" :value="rate.sightBuy" v-model="picked" />
      <label for="sightBuy">即期買入</label>

      <input class="input" type="radio" id="sightSell" :value="rate.sightSell" v-model="picked" />
      <label for="sightSell">即期賣出</label>
    </div>

    <div class="contents">

      <input type="text" class="TWD input" :value="TWD" @input="TWDtoFRG" placeholder="edit me"><span>台幣(TWD)</span>

      <span class="material-symbols-outlined">
        compare_arrows
      </span>
      <div class="box">{{ picked }}</div>

      <input type="text" class="FRG input" :value="FRG" @input="FRGtoTWD" placeholder="edit me"><span>{{ rate.name
      }}</span>

    </div>



  </div>
</template>


<style>
.converter {
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 300px;
  justify-content: center;
  align-items: center;
  border: 6px ridge white;
  font-size: xx-large;
}

.radio {
  margin: 20px;

  .input {
    margin: 0 20px;
  }
}

.contents {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 3rem;

  .box {
    width: 90px;
    height: 40px;
    font-size: x-large;
    text-align: center;
    border: 4px ridge red;
    box-sizing: border-box;

  }

  input {
    text-align: center;
  }

}

.material-symbols-outlined {
  font-size: xx-large;
}

@media (max-width: 1200px) {
  .converter {
    font-size: larger;
  }

  .contents {
    .box {
      font-size: large;
      padding-top: 0.3rem;
    }

    .input {
      width: 8rem;
      height: 2rem;
    }
  }
}

@media only screen and (max-width: 730px) {
  .converter {
    font-size: small;
  }

  .contents {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;

    .box {
      font-size: small;
      padding-top: 0.3rem;
    }

    .radio {
      
    }

    .input {
      width: 3rem;
      height: 1rem;
    }
  }

}</style>