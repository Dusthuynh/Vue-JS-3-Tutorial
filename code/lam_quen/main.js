const app = Vue.createApp({
  data() {
    return {
      products: [
        {
          img: "./assets/p1.png",
          name: "San pham A",
          price: 120,
          isCart: false,
        },
        {
          img: "./assets/p2.png",
          name: "San pham B",
          price: 110,
          isCart: false,
        },
        {
          img: "./assets/p3.png",
          name: "San pham C",
          price: 60,
          isCart: false,
        },
      ],
    };
  },
  methods: {
    onToggleCart(e, product) {
      product.isCart = !product.isCart;
    },
  },
  computed: {
    productsComputed() {
      return this.products.filter((el) => el.price > 100);
    },
  },
});

app.mount("#contact");
