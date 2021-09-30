//component_register.html 模組化示範
export default {
  data() {
    return {
      text: "外部匯入的元件",
    };
  },
  template: `{{ text }}`,
};