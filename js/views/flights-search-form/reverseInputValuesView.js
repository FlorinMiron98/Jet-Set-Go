class ReverseInputValuesBtn {
  _locationsReverseBtn = document.querySelector(".locations-reverse-button");

  _addHandlerReverseValues(handler) {
    this._locationsReverseBtn.addEventListener("click", () => {
      handler();
    });
  }
}

export default new ReverseInputValuesBtn();
