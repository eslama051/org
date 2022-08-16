<template>
  <div class="login-component" @submit.prevent="signIn">
    <h2>Login</h2>
    <h3>Please Insert Your Phone Number</h3>
    <form action="">
      <!--   <vue-phone-number-input v-model="number"></vue-phone-number-input> -->
      <div class="form-control">
        <!-- <div class="flag-div">
          <img src="../../assets/images/home/ar.png" alt="" />+2
        </div> -->
        <drop-down @seleceted-Key="setCountryKey" />
        <input type="text" placeholder="Phone number" v-model="number" />
      </div>
      <p style="color: red" v-if="isInvalid">please inter a valid number</p>
      <base-button>confirm</base-button>
    </form>
  </div>
</template>
<script>
import DropDown from "./DropdDown.vue";
export default {
  data() {
    return {
      countrykey: null,
      number: "",
      isInvalid: false,
    };
  },
  components: {
    DropDown,
  },
  methods: {
    signIn() {
      this.isInvalid = false;
      if (this.number == "") {
        this.isInvalid = true;
        return;
      }
      console.log(this.countrykey + this.number);
      const fullNumber = this.countrykey + this.number;
      this.$store.dispatch("setNumber", fullNumber);
      this.$router.push("/auth/verfiy");
    },
    setCountryKey(key) {
      this.countrykey = key;
    },
  },
};
</script>
