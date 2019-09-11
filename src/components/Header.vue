<template>
  <nav class="navbar" role="navigation">
    <div class="container">
      <div class="navbar-brand">
        <img
          src="https://hacktoberfest.digitalocean.com/HF19_logo.png"
          alt="Hacktoberfest 2019"
          class="hacktoberfest-logo"
          width="449"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #152347;
  min-height: 140px;
}

.navbar-menu {
  background-color: rgb(255, 255, 255, 0);
  box-shadow: none;
}

.hacktoberfest-logo {
  height: auto;
  max-height: none !important;
}

@media (max-width: 1087px) {
  .navbar-brand {
    display: block;
    text-align: center;
  }
}
</style>
