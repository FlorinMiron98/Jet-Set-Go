import personsSelectionBtnView from "./personsSelectionBtnView";

class PersonsSelectionView {
  _parentEl = document.querySelector(".persons-selection");
  _adultsParentEl = document.querySelector(".adults");
  _childrenParentEl = document.querySelector(".children");
  _childrenAgeParentEl = document.querySelector(".selection-children-age");
  _adults = 1;
  _children = 0;
  _childrenSelectAgeElements = [];

  _addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _clearMarkup(container) {
    container.innerHTML = "";
  }

  _generateAdultsMarkup() {
    this._clearMarkup(this._adultsParentEl);
    const markup = `
            <div class="selection-content d-flex flex-column">
                <h3 class="fs-5 fw-semibold">Adults</h3>
                <p class="m-0">Age 18+</p>
            </div>
            <div class="selection-number d-flex align-items-center">
                <button
                type="button"
                class="selection-decrease-btn border-0 rounded-3 focus-ring"
                ${this._adults === 1 ? "disabled" : ""}
                >
                <i class="fa-solid fa-minus"></i>
                </button>
                <span class="selection-count-adults">${this._adults}</span>
                <button
                type="button"
                class="selection-increase-btn border-0 rounded-3 focus-ring"
                ${this._adults + this._children === 9 ? "disabled" : ""}
                >
                <i class="fa-solid fa-plus"></i>
                </button>
            </div>
    `;
    this._adultsParentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _generateChildrenMarkup() {
    this._clearMarkup(this._childrenParentEl);
    const markup = `
            <div class="selection-content">
                <h3 class="fs-5 fw-semibold">Children</h3>
                <p class="m-0">Age 0 - 17</p>
            </div>
            <div class="selection-number d-flex align-items-center">
                <button
                type="button"
                class="selection-decrease-btn border-0 rounded-3 focus-ring"
                ${this._children === 0 ? "disabled" : ""}
                >
                <i class="fa-solid fa-minus"></i>
                </button>
                <span class="selection-count-children">${this._children}</span>
                <button
                type="button"
                class="selection-increase-btn border-0 rounded-3 focus-ring"
                ${this._adults + this._children === 9 ? "disabled" : ""}
                >
                <i class="fa-solid fa-plus"></i>
                </button>
            </div>
    `;

    this._childrenParentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _generateSelectChildAgeMarkup(counter) {
    const selectMarkup = `
                 <label class="fs-5 fw-semibold" for="child-age-${counter}"
                        >${counter}${this._childrenCount(
      counter
    )} child's age</label
              >
              <select
                name="${this._childrenCount(counter)}-child-age"
                id="child-age-${counter}"
                class="px-3 py-2 rounded-3 focus-ring mb-3"
              >
                <option value="">Select age at time of flying</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
              </select>
          `;

    this._childrenSelectAgeElements.push(selectMarkup);
  }

  _displaySelectChildAgeEl() {
    this._clearMarkup(this._childrenAgeParentEl);
    const markup = this._childrenSelectAgeElements
      .map((el) => {
        return el;
      })
      .join("");

    this._childrenAgeParentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _adultsCounter() {
    this._adultsParentEl.addEventListener("click", (e) => {
      if (e.target.closest(".selection-increase-btn")) {
        this._adults++;
        personsSelectionBtnView._generateMarkup(this._adults, this._children);
        this._generateAdultsMarkup();
        this._generateChildrenMarkup();
      }
      if (e.target.closest(".selection-decrease-btn")) {
        this._adults--;
        personsSelectionBtnView._generateMarkup(this._adults, this._children);
        this._generateAdultsMarkup();
        this._generateChildrenMarkup();
      }
    });
  }

  _childrenCounter() {
    this._childrenParentEl.addEventListener("click", (e) => {
      if (e.target.closest(".selection-increase-btn")) {
        this._children++;
        personsSelectionBtnView._generateMarkup(this._adults, this._children);
        this._generateSelectChildAgeMarkup(this._children);
        this._showChildrenSelectAgeParentEl();
        this._displaySelectChildAgeEl();
        this._generateChildrenMarkup();
        this._generateAdultsMarkup();
      }
      if (e.target.closest(".selection-decrease-btn")) {
        this._children--;
        personsSelectionBtnView._generateMarkup(this._adults, this._children);
        this._removeChildAgeEl(this._childrenSelectAgeElements);
        this._displaySelectChildAgeEl();
        this._generateChildrenMarkup();
        this._generateAdultsMarkup();
      }
    });
  }

  // ==================
  // Utility Methods
  // ==================
  _hideChildrenSelectAgeParentEl() {
    this._childrenAgeParentEl.style.display = "none";
  }
  _showChildrenSelectAgeParentEl() {
    this._childrenAgeParentEl.style.display = "flex";
  }

  _removeChildAgeEl(array) {
    array.pop();

    if (array.length === 0) {
      this._hideChildrenSelectAgeParentEl();
    }

    return array;
  }

  _childrenCount(count) {
    switch (true) {
      case count === 1:
        return "st";
      case count === 2:
        return "nd";
      case count === 3:
        return "rd";
      default:
        return "th";
    }
  }
}

export default new PersonsSelectionView();
