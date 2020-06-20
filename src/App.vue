<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import FooterComponent from "./components/FooterComponent";

export default {
  name: "App",
  components: {
    Navbar,
    FooterComponent
  }
};
</script>
