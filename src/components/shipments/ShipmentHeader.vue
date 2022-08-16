<template>
  <header class="shipment-header">
    <nav>
      <div class="nav-logo">
        <img src="../../assets/images/home/ORG.svg" alt="" />
      </div>
      <ul>
        <li>
          <router-link to="/home"
            ><img src="../../assets/images/home/homeIcon.svg" alt=""
          /></router-link>
        </li>
        <li><base-button :link="true" to="/">logout</base-button></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  methods: {
    signOut() {
      console.log("smth");
    },
  },
};
</script>
