<template>
  <form @submit.prevent="onSubmit">
    <div class="verification-input">
      <input name="code" class="code-input" required />
      <input name="code" class="code-input" required />
      <input name="code" class="code-input" required />
      <input name="code" class="code-input" required />

      <input name="code" class="code-input" required />
      <input name="code" class="code-input" required />
    </div>
    <base-button @click="console.log('fda')">shit</base-button>
  </form>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  methods: {
    onSubmit() {
      const inputElements = [...document.querySelectorAll("input.code-input")];
      const code = inputElements.map(({ value }) => value).join("");
      console.log(code);
      if (code.length > 6) {
        return;
      }
      this.$router.push("/shipments");
    },
  },
  mounted() {
    const inputElements = [...document.querySelectorAll("input.code-input")];
    inputElements.forEach((ele, index) => {
      ele.addEventListener("keydown", (e) => {
        if (e.keyCode === 8 && e.target.value === "")
          inputElements[Math.max(0, index - 1)].focus();
      });
      ele.addEventListener("input", (e) => {
        const [first, ...rest] = e.target.value;
        e.target.value = first ?? "";
        const lastInputBox = index === inputElements.length - 1;
        const didInsertContent = first !== undefined;
        if (didInsertContent && !lastInputBox) {
          inputElements[index + 1].focus();
          inputElements[index + 1].value = rest.join("");
          inputElements[index + 1].dispatchEvent(new Event("input"));
        }
      });
    });
  },
};
</script>
