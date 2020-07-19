import Vue from "vue";
import BaseTextField from "./_base-Text-Field.vue";

const Components = {
  BaseTextField
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;