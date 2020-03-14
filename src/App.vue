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
    <div class="row">
      <div class="col s3" v-for="product in products" :key="product.sku">
        <product-card
          :sku=product.sku
          :description=product.description
          :title=product.title
          :thumb=product.thumb
          :image=product.image
          :price=product.price
          :size=product.size
          :weight=product.weight
          :url=product.url
          :salePrice=product.sale_price
          :prodDiscount=product.prod_discount
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './components/ProductCard';
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';

export default {
  components: {
    'product-card': ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    fetchAllProducts() {
      const allProductsPayload = {
        query: `{
          products {
            sku
            description
            title
            thumb
            image
            price
            size
            weight
            url
            sale_price
            prod_discount
          }
        }`,
      };

      axios({
        method: 'post',
        url: 'http://localhost:8823/graphql',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(allProductsPayload),
      })
        .then((response) => {
          const { products } = response.data.data;
          this.products = products;
          console.log(products);
        });
    },
  },
  mounted() {
    // eslint-disable-next-line new-cap
    M.AutoInit();

    // retrieve all products
    this.fetchAllProducts();
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
