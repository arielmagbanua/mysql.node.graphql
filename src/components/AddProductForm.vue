<template>
  <div id="addproducts-modal" class="modal modal-fixed-footer" ref="modal">
    <div class="modal-content">
      <h4>Settings</h4>
      <p>Choose what fields to include in GraphQL Query.</p>
      <br>
      <div class="container-fluid">
        FORMS HERE
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
