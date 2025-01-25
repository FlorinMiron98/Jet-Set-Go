class ClearInputBtn {
  // DOM Elements
  _inputWrappers = document.querySelectorAll(".input-wrapper");

  _clearInput() {
    this._inputWrappers.forEach((wrapper) => {
      wrapper.addEventListener("click", function (e) {
        const clearBtn = e.target.closest(".clear-input-btn");
        clearBtn.classList.add("d-none");
        const inputEl = wrapper.querySelector("input");
        inputEl.removeAttribute("disabled");
        inputEl.value = "";
      });
    });
  }
}

export default new ClearInputBtn();
