<template>
  <aside>
    <h2>貨幣匯率查詢</h2>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="text"> 臺灣銀行 </span>
      </router-link>
      <router-link class="button" to="/about">
        <span class="text"> 中國信託 </span>
      </router-link>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: var(--sidebar-width);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

}

h3 {
  margin-top: 3rem;
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
    &.router-link-exact-active {
      background-color: var(--dark-alt);

      .text {
        color: var(--primary);
      }
    }

    &.router-link-exact-active {
      border-right: 5px solid var(--primary)
    }

  }

}
</style>