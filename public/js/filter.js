document.addEventListener('DOMContentLoaded', function () {
    const buttons = Array.from(document.querySelectorAll('#filter-buttons .filter-btn'));
    const posts   = Array.from(document.querySelectorAll('.post-card'));
  
    function setActiveBtn(activeBtn) {
      buttons.forEach(b => b.classList.remove('active'));
      if (activeBtn) activeBtn.classList.add('active');
    }
  
    function filterPosts(cat) {
      posts.forEach(p => {
        if (cat === 'all') {
          p.style.display = '';
        } else {
          p.style.display = p.classList.contains(cat) ? '' : 'none';
        }
      });
    }
  
    buttons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        const cat = this.getAttribute('data-cat');
        setActiveBtn(this);
        filterPosts(cat);
        if (cat === 'all') {
          history.replaceState(null, '', location.pathname);
        } else {
          location.hash = cat;
        }
      });
    });
  
    const hash = location.hash.replace('#', '');
    if (hash) {
      const btn = buttons.find(b => b.getAttribute('data-cat') === hash);
      if (btn) btn.click();
    }
  });
  