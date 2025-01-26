class DetailsDialogView {
  _detailsDialog = document.querySelector(".details-dialog");
  _resultsList = document.querySelector(".results-list");
  _closeDialogBtn = document.querySelector(".close-dialog-btn");

  _addHandlerDisplayDialog(handler) {
    this._resultsList.addEventListener("click", (e) => {
      if (e.target.closest(".view-details-btn")) {
        handler();
      }
    });
  }

  _addHandlerHideDialog(handler) {
    this._closeDialogBtn.addEventListener("click", () => {
      handler();
    });
  }

  _displayDialog() {
    this._detailsDialog.showModal();
    document.body.classList.add("no-scroll");
  }

  _hideDialog() {
    this._detailsDialog.close();
    document.body.classList.remove("no-scroll");
  }
}

export default new DetailsDialogView();
