class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      
      this.handleClick = this.handleClick.bind(this);
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
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
    
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
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
    ".nav-list li",
    );
    mobileNavbar.init();
    
/*
MENU
*/
let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick = function(){
  navigation.classList.toggle('active')
}

/*HOME*/

var headerBg =  document.getElementById('home')
window.addEventListener('scroll', function(){
  headerBg.style.opacity = 1 +window.pageXOffset/550+'';
  headerBg.style.top = +window.pageXOffset+'px';
  headerBg.style.backgroundPositionY = - +window.pageXOffset/2+'px';
});

