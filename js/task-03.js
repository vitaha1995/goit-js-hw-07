const gallery = document.querySelector('.gallery');

const galleryItemsMarkup = images.reduce((acc, { url, alt }) => {
  return acc + `<li><img src="${url}" alt="${alt}"></li>`;
}, '');

gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

