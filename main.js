const app = Vue.createApp({
    data() {
        return {
          text: '',
          number: 0,
          repeatedText: []
        };
      },
      methods: {
        repeatText() {
          this.repeatedText = Array.from({ length: this.number }, () => this.text);
        }
      }
})
