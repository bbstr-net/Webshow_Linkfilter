<template>
  <div>
    <Card></Card>
    <Footer></Footer>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Main",
  components: {
    Card,
    Footer,
  },
};
</script>