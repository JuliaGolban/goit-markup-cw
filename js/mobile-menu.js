(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    !expanded ? fixedModalOverflow() : closeModalOverflow();
    !expanded && setActiveLink(document.querySelectorAll('.modal-menu__navigation-link'));
  });
  menuBtnRef.addEventListener('click', toggleBurgerMenu);
})();

// Fixed window when modal opened
function fixedModalOverflow() {
  document.querySelector('body').style.overflow = 'hidden';
}

function closeModalOverflow() {
  document.querySelector('body').style.overflow = 'unset';
}

// Set active nav link
function setActiveLink(arr) {
  for (let index = 0; index < arr.length; index++) {
    const link = arr[index];

    if (link.href === window.location.href) {
      link.classList.add('active-nav-link');
    }
  }
}

function setActiveLink(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element.href === window.location.href) {
      element.classList.add('active-nav-link');
    }
  }
}
