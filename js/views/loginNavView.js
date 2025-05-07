class loginNavView {
  _registerBtn = document.querySelector(".register-btn");
  _loginBtn = document.querySelector(".login-btn");
  _registerDialog = document.querySelector(".register-dialog");
  _loginDialog = document.querySelector(".login-dialog");

  _addHandlerDisplayRegisterDialog(handler) {
    this._registerBtn.addEventListener("click", () => {
      handler();
    });
  }

  _addHandlerDisplayLoginDialog(handler) {
    this._loginBtn.addEventListener("click", () => {
      handler();
    });
  }

  _displayRegisterDialog() {
    this._registerDialog.showModal();
    document.body.classList.add("no-scroll");
  }

  _displayLoginDialog() {
    this._loginDialog.showModal();
    document.body.classList.add("no-scroll");
  }

  _hideDialogKeypress() {
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("no-scroll")) {
        document.body.classList.remove("no-scroll");
      }
    });
  }
}

export default new loginNavView();
