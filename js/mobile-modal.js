// ========= mobile menu modal window =========
(() => {
  const refs = {
    openModalBtn: document.querySelector('[mobile-modal-open]'),
    // closeModalBtn: document.querySelector('[mobile-modal-close]'),
    modal: document.querySelector('[mobile-modal]'),
    body: document.querySelector('#body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('mobile-modal-is-open');
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
