const popupImage = document.querySelector('#image_popup');
const closeImagePopup = document.querySelector('#closeImagePopup');
const imageItems = document.querySelectorAll('.diplomas__item'); 

imageItems.forEach(() => { 
      imageItem.addEventListener('click', () => { 
    openModal(popupImage); 
  }); 
});

const waitEscapeFunction = function (evt) {
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

inputList.forEach((input) => { 

  input.addEventListener('input', () => { 

      toggleInputState(form, input, params.inputErrorClass); 

      toggleButtonState(inputList, buttonElement, params.inactiveButtonClass); 

  }); 
})