import './js/slider';
import './js/google-map';

document.querySelector('.scroll-top').onclick = e => {
  e.preventDefault();
  window.scrollTo(pageYOffset, 0);
};
