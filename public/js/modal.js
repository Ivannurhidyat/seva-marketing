document.addEventListener('DOMContentLoaded', () => {
  const modal      = document.getElementById('modal');
  const closeBtn   = document.getElementById('modalClose');
  const body       = document.body;
  // const titleEl    = document.getElementById('modalTitle');
  const readBtns   = document.querySelectorAll('.read-more');

  readBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const card = e.currentTarget.closest('.card');
      const t = card.querySelector('h3') || card.querySelector('h4');
      // titleEl.textContent = t.textContent;
      modal.classList.remove('hidden');
      body.classList.add('overflow-hidden');
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    body.classList.remove('overflow-hidden');
  }
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => e.target === modal && closeModal());
  document.addEventListener('keydown', e => e.key==='Escape' && closeModal());
});