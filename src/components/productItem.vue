<template>
  <div>
    <b-card
      :title="product.name"
      :img-src="product.picture"
      :img-alt="product.name"
      img-top
      height="250px"
      style="max-width:30rem;"
      class="mb-2"
    >
      <b-button block variant="warning" @click="$emit('addToCart',product)">Aniadir al carrito</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  //   name: "product-item",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>
