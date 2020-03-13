<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <form class="left">
          <div class="input-field">
            <input id="search" type="search" required>
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="label material-icons">close</i>
          </div>
        </form>

        <ul class="right hide-on-med-and-down">
          <li>
            <a href="#">
              <i class="material-icons">settings</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min';

export default {
  name: 'App',
  methods: {
  },
  mounted() {
    // eslint-disable-next-line new-cap
    M.AutoInit();
  },
};
</script>

<style lang="scss" scoped>
@import '~materialize-css/dist/css/materialize.min.css';

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
