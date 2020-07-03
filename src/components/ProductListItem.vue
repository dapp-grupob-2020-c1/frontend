<template>
  <b-card :title="product.name">
    <pre>
    {{ product }}
    </pre>
    <b-button variant="primary">Agregar al Carrito</b-button>
  </b-card>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    product: {
      required: true
    }
  },
  computed: {}
};
</script>
