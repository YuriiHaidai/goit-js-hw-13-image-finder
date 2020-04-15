import template from '../templates/template.hbs';
import refs from './refs.js';

export function renderList(photos) {
  const markup = photos.map(photo => template(photo)).join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
