<template>
  <nav class="navbar" role="navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/">
          <img
            src="https://hacktoberfest.digitalocean.com/HF19_logo.png"
            alt="Hacktoberfest 2019"
            class="hacktoberfest-logo"
            width="449"
          />
        </router-link>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <!-- TODO: Criar as páginas para cada local de evento -->
          <router-link
            v-for="route in routes"
            :key="route.name"
            :to="route.path"
            class="route"
          >{{ route.name }}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    routes: [
      { path: '/catolica', name: 'Católica' },
      { path: '/fablab', name: 'Fab Lab' },
      { path: '/udesc', name: 'Udesc' },
    ],
  }),
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

.route {
  margin-left: 2.25rem;
  font-weight: bold;
  font-size: 14px;
  height: 30px;
  line-height: 21px;
  -webkit-letter-spacing: 3px;
  -moz-letter-spacing: 3px;
  -ms-letter-spacing: 3px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #fff;
  margin-right: 30px;
}

.route:hover {
  color: #fff;
  border-bottom: 2px solid #fff922;
}

@media (max-width: 1087px) {
  .navbar-end {
    text-align: center;
  }
}

@media (max-width: 1087px) {
  .navbar-brand {
    display: block;
    text-align: center;
  }
}
</style>
