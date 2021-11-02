export default class {
  constructor(inputWrapper) {
    try {
      inputWrapper =
        typeof inputWrapper === "string"
          ? document.querySelector(inputWrapper)
          : inputWrapper;
      this.wrapper = inputWrapper;
      this.label = inputWrapper.querySelector("label");
      this.input = inputWrapper.querySelector("input");
      if (!this.input) {
        this.input = inputWrapper.querySelector("textarea");
      }
      this.classes = {
        active: "active_input"
      };

      this.input.addEventListener("focus", () => {
        this.upLabel();
      });
      this.input.addEventListener("blur", e => {
        if (!e.target.value) {
          this.downLabel();
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  upLabel() {
    try {
      this.wrapper.classList.add(this.classes.active);
    } catch (err) {console.log(err)}
  }
  downLabel() {
    try {
      this.wrapper.classList.remove(this.classes.active);
    } catch (err) {console.log(err)}
  }
}
