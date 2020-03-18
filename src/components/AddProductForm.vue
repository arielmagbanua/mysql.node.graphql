<template>
  <div id="addproducts-modal" class="modal modal-fixed-footer" ref="modal">
    <div class="modal-content">
      <h4>Product</h4>
      <br>
      <div class="container-fluid">
        <div class="row">
          <div class="input-field col s6">
            <input id="title" v-model="title" type="text" class="validate">
            <label class="active" for="title">Title</label>
          </div>
          <div class="input-field col s6">
            <input id="price" v-model="price" type="number" class="validate">
            <label class="active" for="price">Price</label>
          </div>
          <div class="input-field col s12">
            <input id="thumb" v-model="thumb" type="text" class="validate">
            <label class="active" for="thumb">Thumbnail</label>
          </div>
          <div class="input-field col s12">
            <input id="image" v-model="image" type="text" class="validate">
            <label class="active" for="image">Image</label>
          </div>
          <div class="input-field col s12">
            <input id="image_large" v-model="image_large" type="text" class="validate">
            <label class="active" for="image_large">Image Large</label>
          </div>
          <div class="input-field col s12">
            <input id="url" v-model="url" type="text" class="validate">
            <label class="active" for="url">URL</label>
          </div>
          <div class="input-field col s12">
            <textarea id="description" v-model="description" class="materialize-textarea" data-length="120"></textarea>
            <label for="description">Description</label>
          </div>
          <div class="input-field col s12">
            <textarea id="comment_right" v-model="comment_right" class="materialize-textarea" data-length="240"></textarea>
            <label for="comment_right">Comment</label>
          </div>
          <div class="input-field col s3">
            <input id="sale_price" v-model="sale_price" type="text" class="validate">
            <label class="active" for="sale_price">Sale Price</label>
          </div>
          <div class="input-field col s3">
            <input id="prod_discount" v-model="prod_discount" type="number" class="validate">
            <label class="active" for="prod_discount">Discount</label>
          </div>
          <div class="input-field col s3">
            <input id="product_type" v-model="product_type" type="text" class="validate">
            <label class="active" for="product_type">Product Type</label>
          </div>
          <div class="input-field col s3">
            <input id="weight" v-model="weight" type="text" class="validate">
            <label class="active" for="weight">Weight</label>
          </div>
          <div class="input-field col s3">
            <input id="size" v-model="size" type="text" class="validate">
            <label class="active" for="size">Size</label>
          </div>
          <div class="input-field col s3">
            <input id="color" v-model="color" type="text" class="validate">
            <label class="active" for="color">Color</label>
          </div>
          <div class="input-field col s3">
            <p>
              <label>
                <input id="inactive" v-model="inactive" type="checkbox" class="filled-in"/>
                <span>Inactive</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="waves-effect waves-green btn-flat" @click="save">Save</button>
      <button class="waves-effect waves-green btn-flat" @click="close">Cancel</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~materialize-css/dist/css/materialize.min.css';

#addproducts-modal {
  height: 150% !important;
}
</style>

<script>
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';

export default {
  props: {
    addProduct: {
      type: Function,
    },
  },
  data() {
    return {
      modal: null,
      title: '',
      price: 0.00,
      thumb: '',
      image: '',
      image_large: '',
      url: '',
      description: '',
      comment_right: '',
      sale_price: '',
      prod_discount: 0.0,
      product_type: '',
      weight: '',
      size: '',
      color: '',
      inactive: false,
    };
  },
  methods: {
    open() {
      this.modal.open();
    },
    close() {
      this.modal.close();
    },
    formatValue(key, value) {
      if (key === 'price' || key === 'prod_discount') {
        return `${parseFloat(value)}`;
      }

      if (key === 'inactive') {
        return `${value ? 1 : 0}`;
      }

      if (typeof this[key] === 'string') {
        return `"${value}"`;
      }

      return `${value}`;
    },
    save() {
      let input = '';

      // build the input
      for (const [key, value] of Object.entries(this.$data)) {
        // do not include the modal
        if (key === 'modal') {
          continue;
        }

        input += `${key}: ${this.formatValue(key, value)}\n`;
      }
      console.log(input);
      const createPayload = {
        query: `
          mutation {
            createProduct(productInput: {
              ${input}
            }) {
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
              inactive
            }
          }
        `,
      };

      axios({
        method: 'post',
        url: 'http://localhost:8823/graphql',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(createPayload),
      })
        .then((response) => {
          const { createdProduct } = response.data.data;
          this.addProduct(createdProduct);

          M.toast({
            html: `${createdProduct.title} is added!`,
            classes: 'rounded',
          });
        });

      this.modal.close();
    },
  },
  mounted() {
    // eslint-disable-next-line new-cap
    M.AutoInit();

    const modalElement = this.$refs.modal;
    this.modal = M.Modal.init(modalElement);
  },
};
</script>
