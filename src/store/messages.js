import { v4 as uuid } from "uuid";

export default {
  namespaced: true,
  state: {
    messagesList: [],
  },
  mutations: {
    addMessage(state, newMessage) {
      state.messagesList = [newMessage, ...state.messagesList];
    },
    deleteMessage(state, messageUuid) {
      state.messagesList = state.messagesList.filter((msg) => {
        return msg.uuid !== messageUuid;
      });
    },
  },
  actions: {
    showMessage({ commit }, message) {
      const newMessage = {
        uuid: uuid(),
        text: message,
        variant: "primary",
      };
      commit("addMessage", newMessage);
      setTimeout(() => {
        commit("deleteMessage", newMessage.uuid);
      }, 5000);
    },
    showErrorMessage({ commit }, message) {
      const newMessage = {
        uuid: uuid(),
        text: message,
        variant: "danger",
      };
      commit("addMessage", newMessage);
      setTimeout(() => {
        commit("deleteMessage", newMessage.uuid);
      }, 5000);
    },
  },
};
