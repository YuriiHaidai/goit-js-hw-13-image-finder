import * as render from './render.js';
import refs from './refs.js';

export default function fetchImages(serchValue) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${serchValue}&page=${refs.page}&per_page=12&key=${refs.apiKey}`,
  )
    .then(response => response.json())
    .then(data => {
      render.renderList(data.hits);
    });
}
