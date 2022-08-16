<template>
  <div class="verfiy-component">
    <h2>Verifying phone number</h2>
    <h3>
      Please Insert The 6 Digits <br />
      Code Sent To Your Phone
    </h3>
    <h2>{{ number }}</h2>
    <router-link to="/auth/login" class="edit-number-link"
      >Edit Your Phone Number</router-link
    >
    <verification-input></verification-input>
  </div>
</template>
<script>
import VerificationInput from "./VerificationInput.vue";
export default {
  components: {
    VerificationInput,
  },
  computed: {
    number() {
      return this.$store.getters.number;
    },
  },
  // created() {
  //   console.log(this.$store.getters.number);
  // },
};
</script>
