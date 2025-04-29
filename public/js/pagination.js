// public/js/pagination.js

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');
  if (!grid) return;            // kalau ga ada #grid, stop di sini

  const cards      = Array.from(grid.children);
  const perPage    = 9;         // ubah sesuai kebutuhan
  const totalPages = Math.ceil(cards.length / perPage);

  const prevBtn  = document.getElementById('prevBtn');
  const nextBtn  = document.getElementById('nextBtn');
  const pageNums = document.getElementById('pageNumbers');

  let currentPage = 1;

  // class dasar tombol
  const baseClass = [
    'min-h-9.5', 'min-w-9.5', 'flex', 'justify-center', 'items-center',
    'text-gray-800', 'hover:bg-gray-100', 'py-2', 'px-3', 'text-sm',
    'rounded-lg', 'focus:outline-none', 'focus:bg-gray-100',
    'disabled:opacity-50', 'disabled:pointer-events-none',
    'dark:text-white', 'dark:hover:bg-white/10', 'dark:focus:bg-white/10'
  ].join(' ');

  // class tombol aktif
  const activeClass = baseClass +
    ' bg-gray-200 dark:bg-neutral-600 dark:text-white focus:bg-gray-300';

  // generate tombol nomor halaman
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.type        = 'button';
    btn.textContent = i;
    btn.className   = (i === 1 ? activeClass : baseClass);
    btn.addEventListener('click', () => goToPage(i));
    pageNums.appendChild(btn);
  }

  function renderPage(page) {
    // sembunyikan semua
    cards.forEach(c => c.classList.add('hidden'));

    // tampilkan slice sesuai page
    const start = (page - 1) * perPage;
    cards.slice(start, start + perPage).forEach(c => c.classList.remove('hidden'));

    // update Prev/Next
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;

    // update style tombol nomor
    Array.from(pageNums.children).forEach((btn, idx) => {
      btn.className = (idx + 1 === page ? activeClass : baseClass);
    });
  }

  function goToPage(page) {
    currentPage = page;
    renderPage(page);
  }

  prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
  nextBtn.addEventListener('click', () => goToPage(currentPage + 1));

  // inisialisasi
  renderPage(1);
});
