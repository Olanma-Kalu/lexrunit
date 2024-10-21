const modal = document.getElementById('contactModal');
const contactBtn = document.getElementById('contactBtn');
const closeModal = document.getElementById('closeModal');

contactBtn.onclick = function() {
  modal.style.display = 'block';
}

closeModal.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const toggleSwitch = document.getElementById('themeSwitcher');

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

