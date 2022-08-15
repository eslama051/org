<template>
  <header class="home-header">
    <nav>
      <div class="nav-header">
        <img src="../../assets/images/home/logo_white.svg" alt="sfd" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
        <li class="order">
          <router-link to="/auth/login">Track Your Order</router-link>
        </li>
        <li><a href="#">AR</a></li>
      </ul>
    </nav>
  </header>
</template>
