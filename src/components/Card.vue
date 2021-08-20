<template>
  <div class="d-flex justify-center">
    <v-card class="b-card">
      <img src="../assets/Guide.png" width="50px" class="b-img" />
      <v-card-title>您即将离开泰拉瑞亚中文论坛</v-card-title>
      <v-card-text>
        <p>您将要前往：{{ url }}</p>
        <p style="padding-bottom: 40px">
          您即将离开泰拉瑞亚中文论坛，请注意您的账号和财产安全！
        </p>
      </v-card-text>
      <a :href="url" class="b-btn">
        <v-btn color="green" dark>
          <v-icon left>mdi-link</v-icon>
          点击前往</v-btn
        >
      </a>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      url: this.$route.query.url,
    };
  },
  methods: {
    checkUrl: function () {
      if (!this.url) {
        document.location.href = "https://www.bbstr.net";
      }
    },
  },
  mounted() {
    this.checkUrl();
  },
};
</script>

<style scoped>
.b-card {
  width: 500px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px !important;
}
.b-img {
  position: absolute;
  transform: translateY(-50px);
  right: 20px;
}
.b-btn {
  text-decoration: none;
  position: absolute;
  bottom: 15px;
  right: 15px;
}
@media (max-width: 520px) {
  .b-card {
    width: 95%;
  }
  .b-img {
    transform: translateY(-50px);
    right: 20px;
  }
}
@media (max-width: 280px) {
  .b-img {
    display: none;
  }
}
</style>