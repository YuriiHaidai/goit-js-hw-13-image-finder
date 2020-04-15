import './styles.css';
import fetchImages from './js/apiService.js';
import refs from './js/refs.js';
import * as render from './js/render.js';

refs.searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const serchValue = e.target.elements[0].value;

  fetchImages(serchValue);
}

refs.button.addEventListener('click', () => {
  fetchImages(serchValue);
});
