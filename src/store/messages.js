import { v4 as uuid } from "uuid";

export default {
  namespaced: true,
  state: {
    messagesList: []
  },
  mutations: {
    addMessage(state, newMessage) {
      state.messagesList = [newMessage, ...state.messagesList];
      console.log("message added to list");
    },
    deleteMessage(state, messageUuid) {
      state.messagesList = state.messagesList.filter(msg => {
        return msg.uuid !== messageUuid;
      });
    }
  },
  actions: {
    showMessage({ commit }, message) {
      console.log("show new message action");
      const newMessage = {
        uuid: uuid(),
        text: message,
        variant: "primary"
      };
      commit("addMessage", newMessage);
      setTimeout(() => {
        commit("deleteMessage", newMessage.uuid);
      }, 5000);
    }
  }
};
