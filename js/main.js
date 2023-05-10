const searchBtn = document.querySelector('.header__open-search');
const searchForm = document.querySelector('.search');
const closeSearch = document.querySelector('.header__close-search');
const searchInput = document.querySelector('.search__input');
const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const navDropList = document.querySelectorAll('.nav__item--droplist');
const boxes = document.querySelectorAll('.acordion__item');
const tabBUttons = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('.tabs__content');
const archive = document.querySelector('.tabs__archiveBtn')
const tabsDropdown = document.querySelector('.tabs__dropdown');
const tabIndicator = document.querySelector('.tabs__mobile-indicator');

searchBtn.addEventListener('click', () => {
    searchForm.classList.add('active');
    searchInput.focus();
    searchBtn.classList.add('hide');
    document.body.classList.add('noscroll');
})

closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('active');
    document.body.classList.remove('noscroll');
    searchBtn.classList.remove('hide');
})

hamburger.addEventListener('click', toggleHamburgerMenu);

navDropList.forEach(droplist => {
  const arrow = droplist.querySelector('.icon-arrow-right--btn');
  const subMenu = droplist.querySelector('.nav__submenu');

  arrow.addEventListener('click', () => {
      subMenu.classList.toggle('nav__submenu--open');
      arrow.classList.toggle('icon-arrow-right--rotate');
  })
})

boxes.forEach(box => {
  const open = box.querySelector('.acordion__button');
  open.addEventListener('click', function() {
    boxes.forEach(b => {
      if ( b !== box) {
        b.classList.remove('active');
      }
    })
    box.classList.toggle('active');
  });
})

archive.addEventListener('click', () => {
  tabsDropdown.classList.toggle('active');
})

tabBUttons.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabBUttons.forEach(btn => {
      btn.classList.remove('active');
    })
    tab.classList.add('active');
    target.classList.add('active');
    tabsDropdown.classList.remove('active');
    const text = tab.innerText;
    tabIndicator.innerText = text;
  })
})

function toggleHamburgerMenu () {
  hamburger.classList.toggle('header__hamburger--open');
  nav.classList.toggle('header__hamburger--open');
  main.classList.toggle('header__hamburger--open');
  footer.classList.toggle('header__hamburger--open');
  searchBtn.classList.toggle('hide');
}