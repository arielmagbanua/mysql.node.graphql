<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <form :class="searchInputFull ? '': 'left'">
          <div class="input-field">
            <input
              id="search"
              type="search"
              v-model="searchTerm"
              @focus="searchInputFull = true"
              @blur="searchInputFull = false"
            >
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="label material-icons">close</i>
          </div>
        </form>

        <ul class="right hide-on-med-and-down">
          <li>
            <div class="switch">
              <label class="active-only">
                active only
                <input type="checkbox" checked="checked" v-model="activeOnly">
                <span class="lever"></span>
              </label>
            </div>
          </li>
          <li>
            <a href="#settings-modal" @click.prevent="openSettingsModal">
              <i class="material-icons">settings</i>
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="openAddProductsModal">
              <i class="material-icons">add</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="row">
      <div class="col s3" v-for="product in filteredProducts" :key="product.sku">
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

    <div id="settings-modal" class="modal modal-fixed-footer" ref="settingsModal">
      <div class="modal-content">
        <h4>Settings</h4>
        <p>Choose what fields to include in GraphQL Query.</p>
        <br>
        <div class="container-fluid">
          <div class="row">
            <p v-for="field in [
                  'sku',
                  'description',
                  'title',
                  'thumb',
                  'image',
                  'price',
                  'size',
                  'weight',
                  'url',
                  'sale_price',
                  'prod_discount'
                ]"
               class="col s3"
               :key="field"
            >
              <label>
                <input
                  type="checkbox"
                  class="filled-in"
                  :id=field
                  :value=field
                  checked="checked"
                  v-model=fields
                />
                <span>{{ field.toUpperCase() }}</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="modal-close waves-effect waves-green btn-flat">Save</button>
      </div>
    </div>

    <add-products-form
      ref="addProductForm"
      :addProduct="addProduct">
    </add-products-form>
  </div>
</template>

<script>
import ProductCard from './components/ProductCard';
import AddProductsForm from './components/AddProductForm';
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';

export default {
  components: {
    'product-card': ProductCard,
    'add-products-form': AddProductsForm,
  },
  data() {
    return {
      searchTerm: '',
      activeOnly: true,
      products: [],
      fields: [
        'sku',
        'description',
        'title',
        'thumb',
        'image',
        'price',
        'size',
        'weight',
        'url',
        'sale_price',
        'prod_discount',
      ],
      searchInputFull: false,
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const searchTerm = (
          this.searchTerm === '' ||
          (
            product.sku.toString()
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()) ||
            product.description.toString()
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()) ||
            product.title.toString()
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()) ||
            product.price.toString()
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase())
          )
        );

        let activeCondition = true;
        if (this.activeOnly) {
          activeCondition = product.inactive === 0;
        }

        return searchTerm && activeCondition;
      });
    },
  },
  methods: {
    addProduct(product) {
      this.products.push(product);
    },
    fetchAllProducts() {
      let fields = this.fields.toString();
      fields = fields.replace(/,/g, ' ');

      const allProductsPayload = {
        query: `{
          products(activeOnly: false) {
            ${fields}
            inactive
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
    openSettingsModal() {
      const modalElement = this.$refs.settingsModal;
      const instance = M.Modal.init(modalElement, {
        // fetch the products after close
        onCloseEnd: this.fetchAllProducts,
      });
      instance.open();
    },
    openAddProductsModal() {
      // Open add products modal
      this.$refs.addProductForm.open();
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

div.nav-wrapper {
  overflow: hidden;
}

label.active-only {
  color: white;
}

.modal {
  height: 50% !important;
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
