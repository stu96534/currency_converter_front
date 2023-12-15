<script setup >
import { computed } from "vue"

const props = defineProps({
  initialNation: Object
})

const nation = computed(() => props.initialNation)


</script>

<template>
  <router-link class="card" :to="{ name: 'converter', params: { id: nation.id } }">

    <img :src= nation.image  alt="">

    <h3>{{ nation["name"] }}</h3>


  </router-link>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  outline: 0;
}

img {
  width: 90px;
  border-radius: 12px 12PX;
}


.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 12px 12PX;
  box-shadow: 0 2px 12px rgba(32, 32, 32, .3);
  width: 100px;
  height: 85px;

  text-decoration: none;
  font-size: 12px;
  color: black;

  &:hover,
  &.router-link-exact-active {
   
      background: #6CE1E6

  }

}


@media only screen and (max-width: 600px) {

  img {
    width: 50px;
  }

  .card {
    width: 60px;
    height: 85px;
    text-align: center;
  }
}
</style>