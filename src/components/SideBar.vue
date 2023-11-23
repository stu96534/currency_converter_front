<template>
  <aside>
    <h2>貨幣匯率轉換器</h2>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="text"> 貨幣查詢 </span>
      </router-link>
      <router-link class="button" to="/converter">
        <span class="text"> 貨幣轉換 </span> 
      </router-link>
    </div>
  </aside>
</template>

<style lang="scss" scoped>

aside { 
  display: flex;

  background-color: var(--dark);
  color: var(--light);
}

h3 {
  color: var(--gray);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.menu {
  margin: 0 -1rem;

  .button {
    display: flex;
    align-items: center;
    text-decoration: none;

    padding: 0.5rem 1rem;

    .text {
      color: var(--light);
      font-size: 1.25rem;
    }

    &:hover,
    &.router-link-active {
      background-color: var(--dark-alt);

      .text {
        color: var(--primary);
      }
    }

    &.router-link-active {
      border-right: 5px solid var(--primary)
    }

  }

}


@media only screen and (max-width: 450px) {
  aside {
  flex-direction: column;
    width: 100vw;
    height: 10rem;
  }

  h3 {
   margin-top: 1rem;
  }

  
}

@media only screen and (min-width: 450px) {
  aside { 
  flex-direction: column;
  width: var(--sidebar-width);
  min-width: 190px;
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;
}

h3 {
   margin-top: 3rem;
  }
}
</style>