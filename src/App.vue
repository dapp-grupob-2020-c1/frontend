<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <div class="bg-light text-dark py-5 mt-5 text-center">
      <p>Comprando En Casa</p>
      <p>
        <a href="https://github.com/dapp-grupob-2020-c1/frontend"
          >Repo Frontend</a
        >
        |
        <a href="https://github.com/dapp-grupob-2020-c1/backend"
          >Repo Backend</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
