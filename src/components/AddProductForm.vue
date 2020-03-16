<template>
  <div id="addproducts-modal" class="modal modal-fixed-footer" ref="modal">
    <div class="modal-content">
      <h4>Product</h4>
      <br>
      <div class="container-fluid">
        <div class="row">
          <div class="input-field col s4">
            <input id="title" type="text" class="validate">
            <label class="active" for="title">Title</label>
          </div>
          <div class="input-field col s4">
            <input id="price" type="number" class="validate">
            <label class="active" for="price">Price</label>
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
</style>

<script>
import M from 'materialize-css/dist/js/materialize.min';

export default {
  data() {
    return {
      modal: null,
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
