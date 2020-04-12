import template from '../templates/template.hbs';

const gallery = document.querySelector('.gallery');

export default function render(photos) {
  const markup = photos.map(photo => template(photo)).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
