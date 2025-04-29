document.addEventListener('DOMContentLoaded', () => {
  // … kode lain …

  // ==== Modal untuk semua .card ====
  const modal      = document.getElementById('modal');
  const modalImg   = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc  = document.getElementById('modalDesc');
  const closeBtn   = document.getElementById('modalClose');
  const body       = document.body;

  document.querySelectorAll('.card').forEach(card => {
    card.style.cursor = 'pointer'; // pastikan pointer
    card.addEventListener('click', () => {
      const imgEl  = card.querySelector('img');
      // cari judul di H3 atau H4
      const titleEl = card.querySelector('h3') || card.querySelector('h4');
      const descEl  = card.querySelector('p');

      if (!imgEl || !titleEl || !descEl) return;

      // set data ke modal
      modalImg.src           = imgEl.src;
      modalImg.alt           = imgEl.alt || titleEl.textContent;
      modalTitle.textContent = titleEl.textContent;
      modalDesc.textContent  = descEl.textContent;

      // tampilkan & lock scroll belakang
      modal.classList.remove('hidden');
      body.classList.add('overflow-hidden');
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    body.classList.remove('overflow-hidden');
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
  // ==== end modal ====

  // … kode lain …
});
