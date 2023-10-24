<script setup >
</script>

<template>
  <div class="container">
    <div class="nation">
  <button class="card">
    <img src="../../public/usa-flag.jpg" alt="">
    <h3>美金(USD)</h3>
  </button>
  <button class="card">
      <img src="../../public/usa-flag.jpg" alt="">
      <h3>美金(USD)</h3>
    </button>
    <button class="card">
      <img src="../../public/usa-flag.jpg" alt="">
      <h3>美金(USD)</h3>
    </button>
    <button class="card">
      <img src="../../public/usa-flag.jpg" alt="">
      <h3>美金(USD)</h3>
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
  width: 80px;
}

.card {
  background: white;
  border-radius: 12px 12PX;
  box-shadow: 0 2px 12px rgba(32, 32, 32, .3);
  width: 85px;
  height: 85px;
}

</style>
