// Full page Animation
var myFullpage = new fullpage('#fullpage', {
  anchors: ['firstPage', 'secondPage', '3rdPage'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['First page', 'Second page', 'Third and last page'],
  responsiveWidth: 900,
  afterResponsive: function (isResponsive) {
  }
});

// Sliding Menu Downward
const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');
    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else
      element.classList.add(stringClass);
  };

  init();
})();