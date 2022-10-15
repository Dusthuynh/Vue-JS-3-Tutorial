const app = Vue.createApp({
  data() {
    return {
      products: [
        {
          img: "./assets/p1.png",
          name: "Mon A",
          price: 120.0,
          isCart: false,
        },
        {
          img: "./assets/p2.png",
          name: "Mon B",
          price: 150.0,
          isCart: false,
        },
        {
          img: "./assets/p3.png",
          name: "Mon c",
          price: 120.0,
          isCart: true,
        },
      ],
    };
  },
  methods: {
    onToggleCart(event, product) {
      product.isCart = !product.isCart;
    },
  },
  computed: {
    productsComputed() {
      return this.products.filter((prod) => prod.price < 140);
    },
  },
});

app.mount("#contact");
