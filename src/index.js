import './styles.css';
import apiService from './apiService';
import imageCardTemplate from './templates/template.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.js-btn-hidden'),
};

refs.searchForm.addEventListener('submit', handleInputForm);
refs.loadMoreBtn.addEventListener('click', fetchImages);

function handleInputForm(e) {
  e.preventDefault();
  clearList();
  apiService.resetPage();
  apiService.searchQuery = e.target.elements[0].value;
  fetchImages();

  refs.loadMoreBtn.classList.add('js-btn-visibil');
}

function fetchImages() {
  apiService.fetchImages().then(hits => {
    createList(hits);
  });
}

function createList(items) {
  const list = items.map(item => imageCardTemplate(item)).join('');
  refs.gallery.insertAdjacentHTML('beforeend', list);
}

function clearList() {
  refs.gallery.innerHTML = '';
  refs.loadMoreBtn.classList.remove('js-btn-visibil');
}
