(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  const open = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal-animation]"),
  };
  const close = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal-animation]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModalOpen);
  refs.closeModalBtn.addEventListener("click", toggleModalClose);

  function toggleModalOpen() {
    document.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is-hidden");
    open.modal.classList.add("open");
    close.modal.classList.remove("close");
  }
  function toggleModalClose() {
    document.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is-hidden");
    open.modal.classList.remove("open");
    close.modal.classList.add("close");
  }
})();