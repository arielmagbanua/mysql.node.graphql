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

    <p>{{ allProducts }}</p>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';

export default {
  name: 'App',
  methods: {
  },
  computed: {
    allProducts: async () => {
      const allProductsPayload = {
        query: '{ products { sku description comment comment_right price } }',
      };

      // Send a POST request
      await axios({
        method: 'post',
        url: 'http://localhost:8823/graphql',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(allProductsPayload),
      })
        .then((response) => {
          console.log(response);
        });

      return 'awts';
    },
  },
  mounted() {
    // eslint-disable-next-line new-cap
    M.AutoInit();

    // retrieve all products
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
