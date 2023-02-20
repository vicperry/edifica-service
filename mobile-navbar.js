class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  resetNav() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
    this.navLinks.forEach((link) => {
      link.style.animation = "";
    });
  }

  handleClick() {
    if (this.navList.classList.contains(this.activeClass)) {
      this.resetNav();
    } else {
      this.navList.classList.add(this.activeClass);
      this.mobileMenu.classList.add(this.activeClass);
      this.animateLinks();
    }
  }

  handleLinkClick() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.resetNav();
      });
    });
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.handleLinkClick();
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();
