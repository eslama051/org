<template>
  <h2 class="background"><span>ORG Logistics , All Rights Reserved.</span></h2>
</template>

<style scoped>
.background {
  width: 100vw;
  text-align: center;
  position: relative;
}
.background::before {
  position: absolute;
  content: "";
  width: 100%;
  border-top: 1px solid #b1b1b2;
  top: 50%;
  left: 0%;
  /* z-index: -1 ; */
}

span {
  position: relative;
  z-index: 1;
  padding: 0 15px;
}
</style>
