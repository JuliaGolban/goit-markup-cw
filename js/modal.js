// ========= modal window =========
(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-modal-open'),
    closeModalBtn: document.querySelector('.js-modal-close'),
    modal: document.querySelector('.js-modal'),
    body: document.querySelector('#body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-is-open');
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
