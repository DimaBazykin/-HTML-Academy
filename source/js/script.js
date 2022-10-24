/* в этот файл добавляет скрипты*/
var navMain = document.querySelector('.page-header__wrapper');

var navToggle = document.querySelector('.header-nav__toggle');

document.querySelector('.map--no-js').remove();
navMain.classList.remove('header-nav--open');
navMain.classList.add('header-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header-nav--closed')) {
    navMain.classList.remove('header-nav--closed');
    navMain.classList.add('header-nav--open');
  } else {
    navMain.classList.add('header-nav--closed');
    navMain.classList.remove('header-nav--open');
  }
});

// init Swiper:
const swiper = new Swiper('.slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.slider__pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__arrov--right',
    prevEl: '.slider__arrov--left',
  },

});



const map = L.map('page-footer__map')
  .setView({
    lat: 59.968322,
    lng: 30.317539,
  }, 19);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [38, 50],
});

const marker = L.marker(
  {
    lat: 59.968322,
    lng: 30.317659,
  },
  {
    draggable: false,
    icon: mainPinIcon,
  },
);

marker.addTo(map);
