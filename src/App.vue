<template>
  <div id="app">
    <Navbar></Navbar>
    <div style="position: fixed; z-index: 9999">
      <transition-group name="list">
        <b-alert
          v-for="message in $store.state.messages.messagesList"
          :key="message.uuid"
          :variant="message.variant"
          @dismissed="$store.commit('messages/deleteMessage', message.uuid)"
          dismissible
          show
        >
          {{ message.text }}
        </b-alert>
      </transition-group>
    </div>
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
