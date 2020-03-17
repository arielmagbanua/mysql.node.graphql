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
            <input id="image_large" v-model="imageLarge" type="text" class="validate">
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
            <textarea id="comment" v-model="comment" class="materialize-textarea" data-length="240"></textarea>
            <label for="comment">Comment</label>
          </div>
          <div class="input-field col s3">
            <input id="sale_price" v-model="salePrice" type="text" class="validate">
            <label class="active" for="sale_price">Sale Price</label>
          </div>
          <div class="input-field col s3">
            <input id="prod_discount" v-model="productDiscount" type="number" class="validate">
            <label class="active" for="prod_discount">Discount</label>
          </div>
          <div class="input-field col s3">
            <input id="product_type" v-model="productType" type="text" class="validate">
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

export default {
  data() {
    return {
      modal: null,
      title: '',
      price: '',
      thumb: '',
      image: '',
      imageLarge: '',
      url: '',
      description: '',
      comment: '',
      salePrice: null,
      productDiscount: 0.0,
      productType: '',
      weight: null,
      size: null,
      color: null,
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
    save() {
      // TODO: Save the product here

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
