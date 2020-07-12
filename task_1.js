import gallery_items from "/JS-home_work-8/gallery_items.js";

const ref = {
    galleryBox: document.querySelector(".js-gallery"),
    lightBox: document.querySelector(".js-lightbox"),
    galleryLink: document.querySelector(".gallery__link"),
    largeImg: document.querySelector(".lightbox__image"),
    buttonClose: document.querySelector(".lightbox__button"),
};

ref.galleryBox.addEventListener("click", openModal);
ref.lightBox.addEventListener("click", closeModalByOverlay);
ref.buttonClose.addEventListener("click", closeModal);
window.addEventListener('keydown', closeModalByEsc)
function createMarkup() {
    const markup = gallery_items.map((el) => {
       return `<li class="gallery__item">
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
          </li>`;
        }).join('');
        return markup;
        
}

function renderItems(markup) {
    ref.galleryBox.insertAdjacentHTML('beforeend', markup)
}
renderItems(createMarkup());


function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const bigImg = event.target.dataset.source;
    ref.lightBox.classList.add("is-open");
    ref.largeImg.src = bigImg;
}

function closeModalByOverlay(event) {
    if (event.target === document.querySelector(".lightbox__content")) {
        closeModal()
    }
}
function closeModal() {
    ref.largeImg.src = "#";
    ref.lightBox.classList.remove("is-open");
}
function closeModalByEsc(event){
    if (event.code !== "Escape") {
        return;
      }
      closeModal();
    };
