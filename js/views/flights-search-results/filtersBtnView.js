class FiltersBtnView {
  _filtersBtn = document.querySelector(".filters-btn");
  _filtersDialog = document.querySelector(".filters-dialog");
  _closeDialogBtn = document.querySelector(".close-dialog-btn");

  _addHandlerDisplayDialog(handler) {
    this._filtersBtn.addEventListener("click", () => {
      handler();
    });
  }

  _addHandlerHideDialog(handler) {
    this._closeDialogBtn.addEventListener("click", () => {
      handler();
    });
  }

  _displayDialog() {
    this._filtersDialog.showModal();
  }

  _hideDialog() {
    this._filtersDialog.close();
  }
}

export default new FiltersBtnView();
