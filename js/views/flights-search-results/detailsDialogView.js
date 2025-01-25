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
  }

  _hideDialog() {
    this._detailsDialog.close();
  }
}

export default new DetailsDialogView();
