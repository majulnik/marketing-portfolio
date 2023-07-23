const popupImage = document.querySelector('#image_popup');
const popupImageSrc = popupImage.querySelector('img');
const closeImagePopup = document.querySelector('#closeImagePopup');
const imageItems = Array.from(document.querySelectorAll('.diplomas__item'));


imageItems.forEach(imageItem => {
  imageItem.addEventListener('click', () => {
    popupImageSrc.src = imageItem.src;
    openModal(popupImage);
  });
});

function waitEscapeFunction(evt) {
  if (evt.key == 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closeModal(popup);
  }
}

function openModal(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', waitEscapeFunction);
}

function closeModal(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', waitEscapeFunction);
}

closeImagePopup.addEventListener('click', () => {
  closeModal(popupImage);
});

const popups = Array.from(document.querySelectorAll('.popup')); 

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) { 
      closeModal(popup); 
    }
  });
});