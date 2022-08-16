<template>
  <div>
    <button class="flag-btn" @click="toggleDropdown">
      <img :src="getmyUrl(selecetedCountry.flag)" alt="fdasfa" />{{
        selecetedCountry.key
      }}
    </button>
    <div class="drop-content" v-if="showItem">
      <div
        v-for="country in countries"
        class="drop-item"
        :key="country.key"
        @click="choseCountry(country)"
      >
        <img :src="getmyUrl(country.flag)" alt="smth" /> {{ country.key }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showItem: false,
      countries: [
        {
          flag: "ar.png",
          key: "+2",
        },
        {
          flag: "ar.png",
          key: "+66",
        },
      ],
      selecetedCountry: null,
    };
  },
  emit: ["seleceted-key"],
  methods: {
    getmyUrl(imagepath) {
      return require(`../../assets/images/home/${imagepath}`);
    },
    toggleDropdown() {
      this.showItem = !this.showItem;
    },
    choseCountry(country) {
      this.selecetedCountry = country;
      this.showItem = false;
      this.$emit("seleceted-Key", this.selecetedCountry.key);
    },
  },
  created() {
    this.selecetedCountry = this.countries[0];
    this.$emit("seleceted-Key", this.selecetedCountry.key);
  },
};
</script>
