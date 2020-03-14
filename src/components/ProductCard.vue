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

      <template v-if="hasSpecialPricing || hasDiscount">
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

      <template v-if="hasSpecialPricing || hasDiscount">
        <br>
        <span v-if="hasSpecialPricing" class="new badge" data-badge-caption="Holiday Pricing!"></span>
        <span v-if="hasDiscount" class="new badge" data-badge-caption="Discounted!"></span>
        <br>
      </template>

      <p>{{ description }}</p>

      <ul>
        <li v-if="price">
          Price:
          <span :style="priceStyle">{{ price }} NZD</span>
          <strong v-if="pricing > 0"> {{ pricing }} NZD</strong>
        </li>
        <li v-if="size">
          Size: <strong>{{ size }}</strong>
        </li>
        <li v-if="weight">
          Weight: <strong>{{ weight }}</strong>
        </li>
      </ul>
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
    priceStyle() {
      // style pricing with strikethrough if there is new pricing
      if (this.pricing > 0) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return {
          'text-decoration': 'line-through',
        };
      }

      return {
        'font-weight': 'bold',
      };
    },
    hasSpecialPricing() {
      return !!this.salePrice;
    },
    hasDiscount() {
      return this.prodDiscount !== 0 && this.prodDiscount !== 0.00 && this.prodDiscount !== null;
    },
    pricing() {
      let pricing = this.price;
      if (this.hasSpecialPricing) {
        // this would be the new pricing
        pricing = this.salePrice;
      }

      if (this.hasDiscount) {
        // discount the pricing
        pricing = pricing - (pricing * (this.prodDiscount / 100));
        console.log(this.prodDiscount);
      }

      return pricing;
    },
  },
  mounted() {
    // eslint-disable-next-line new-cap
    M.AutoInit();
  },
};

</script>
