import gallery_items from '/JS-home_work-8/gallery_items.js'

const ref = {
    galleryBox: document.querySelector('.js-gallery'),
    lightBox: document.querySelector('.js-lightbox'),
    galleryLink: document.querySelector('.gallery__link'),
    largeImg: document.querySelector('.lightbox__image'),
    buttonClose: document.querySelector('.lightbox__button'),
}
gallery_items.map(el => {
    ref.galleryBox.insertAdjacentHTML('beforeend', `<li class="gallery__item">
    <a
    class="gallery__link"
    href="#"
    >
    <img
    class="gallery__image"
    src="${el.preview}"
    data-source="${el.original}"
    alt="${el.description}"
    />
    </a>
    </li>`)
});
ref.galleryBox.addEventListener('click', openModal);
ref.lightBox.addEventListener('click', closeModal)
ref.buttonClose.addEventListener('click', closeModalBtn)

function openModal(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const bigImg = event.target.dataset.source;
    ref.lightBox.classList.add('is-open');
    openImg(bigImg);
}

function openImg(url) {
    ref.largeImg.src = url;
}

function closeModal(event) {
    if (event.target === document.querySelector('.lightbox__content')) {
        ref.largeImg.src = "#";
        ref.lightBox.classList.remove('is-open');
    }

}

function closeModalBtn() {
        ref.largeImg.src = "#";
        ref.lightBox.classList.remove('is-open');
}