class SideNavbarView {
  // DOM elements
  navbar = document.getElementById("nav");
  sideNavbar = document.querySelector(".sidebar-navigation");
  hamburgerBtn = document.getElementById("hamburger-btn");
  overlay = document.querySelector(".overlay");

  // Set the top positioning of the side navigation bar based on the height of the navigation bar when the page loads or when the user changes the screen size
  setDynamicStyling() {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, () => {
        const navbarSize = this.navbar.getBoundingClientRect();
        this.sideNavbar.style.marginTop = `${navbarSize.height}px`;
      });
    });
  }

  toggleSideNavbar() {
    // Add an event listener to the body element and hide the overlay if it is currently visible
    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("overlay")) {
        this.sideNavbar.classList.remove("sidebar-navigation-visible");
        e.target.classList.remove("overlay-visible");
      }

      // Adjust the styling of the navigation bar taking into consideration the scrollY property and the visibility of the overlay
      if (e.target.classList.contains("overlay") && window.scrollY === 0) {
        this.navbar.classList.remove("navigation-highlight");
        this.sideNavbar.classList.remove("sidebar-navigation-visible");
        e.target.classList.remove("overlay-visible");
      }
    });

    // Set the behaviour of the navigation bar and overlay when clicking the hamburger button
    this.hamburgerBtn.addEventListener("click", () => {
      this.sideNavbar.classList.toggle("sidebar-navigation-visible");
      this.overlay.classList.toggle("overlay-visible");

      if (window.scrollY === 0) {
        if (this.navbar.classList.contains("navigation-highlight")) {
          this.navbar.classList.remove("navigation-highlight");
        } else {
          this.navbar.classList.add("navigation-highlight");
        }
      }
    });
  }
}

export default new SideNavbarView();
