<template>
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" :src="thumb || 'https://via.placeholder.com/400x300'">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
        <a :href="url || '#'">{{ title }}</a>
        <i class="material-icons right">more_vert</i>
      </span>

      <template v-if="hasSpecialPricing || hasSpecialPricing">
        <br>
        <span v-if="hasSpecialPricing" class="new badge" data-badge-caption="Holiday Pricing!"></span>
        <span v-if="hasDiscount" class="new badge" data-badge-caption="Discounted!"></span>
        <br>
      </template>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">
        <a :href="url || '#'">{{ title }}</a>
        <i class="material-icons right">close</i>
      </span>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
@import '~materialize-css/dist/css/materialize.min.css';
</style>

<script>
import M from 'materialize-css/dist/js/materialize.min';

export default {
  props: {
    sku: String,
    description: String,
    title: String,
    thumb: String,
    image: String,
    price: Number,
    size: String,
    weight: String,
    url: String,
    salePrice: String,
    prodDiscount: {
      ype: Number,
      default: 0.0,
    },
  },
  computed: {
    hasSpecialPricing() {
      return !!this.salePrice;
    },
    hasDiscount() {
      return this.prodDiscount !== 0 && this.prodDiscount !== 0.00 && this.prodDiscount !== null;
    },
  },
  mounted() {
    // eslint-disable-next-line new-cap
    M.AutoInit();
  },
};

</script>
