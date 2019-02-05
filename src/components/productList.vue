<template>
  <div>
    <p v-if="products.length">
      <paginate name="products" :list="products" :per="perPage">
        <!-- <p v-for="product in paginated('products')" :key="product.id">{{ product }}</p> -->
        <b-card-group columns>
          <product-item
            v-for="product in paginated('products')"
            :key="product.id"
            :product="product"
            @addToCart="addProductToCart"
          >{{ product }}</product-item>
        </b-card-group>
      </paginate>
      <paginate-links
        for="products"
        :classes="{
      'ul':'pagination',
      'li':'page-item',
      'li>a':'page-link'
    }"
      ></paginate-links>
    </p>
    <b-alert v-else show variant="info">No hay productos que mostrar</b-alert>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import productItem from "./productItem";

export default {
  components: {
    productItem
  },
  mounted() {
    this.fetchProducts();
  },
  data() {
    return {
      paginate: ["products"],
      perPage: 3
    };
  },
  computed: {
    ...mapState("products", ["products"])
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
    ...mapMutations("cart", ["addProduct"]),
    addProductToCart(product) {
      this.addProduct(product);
      // console.log(product);
    }
  }
};
</script>

