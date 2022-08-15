<template>
  <div class="login-component" @submit.prevent="signIn">
    <h2>Login</h2>
    <h3>Please Insert Your Phone Number</h3>
    <form action="">
      <!--   <vue-phone-number-input v-model="number"></vue-phone-number-input> -->
      <div class="form-control">
        <div class="country-div">
          <img src="../../assets/images/home/ar.png" alt="" />+2
        </div>
        <input type="text" placeholder="Phone number" v-model="number" />
      </div>
      <p style="color: red" v-if="isInvalid">please inter a valid number</p>
      <base-button>confirm</base-button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: "",
      isInvalid: false,
    };
  },
  methods: {
    signIn() {
      this.isInvalid = false;
      if (this.number == "") {
        this.isInvalid = true;
        return;
      }
      console.log(this.number);
      this.$router.push("/auth/verfiy");
    },
  },
};
</script>
