class FormSubmissionDialogView {
  _formSubmissionDialog = document.querySelector(".form-submission-dialog");
  _detailsDialog = document.querySelector(".details-dialog");

  _closeDialogBtn = document.querySelector(
    ".form-submission-dialog .close-dialog-btn"
  );

  _addHandlerDisplayFormSubmissionDialog(handler) {
    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("dialog-select-btn")) {
        const selectBtn = e.target;
        console.log(selectBtn);
        handler();
      }
    });
  }

  _addHandlerHideFormSubmissionDialog(handler) {
    this._closeDialogBtn.addEventListener("click", () => {
      handler();
    });
  }

  _displayFormSubmissionDialog() {
    this._formSubmissionDialog.showModal();
    this._detailsDialog.close();
  }

  _hideFormSubmissionDialog() {
    this._formSubmissionDialog.close();
    document.body.classList.remove("no-scroll");
  }
}

export default new FormSubmissionDialogView();
