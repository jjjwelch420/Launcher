// Hide page content until user presses Enter and confirms
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.display = 'none';

  const waitForEnter = (e) => {
    if (e.key === 'Enter') {
      document.removeEventListener('keydown', waitForEnter);
      if (confirm("Continue?")) {
        document.body.style.display = 'block';
      } else {
        window.location.href = 'about:blank';
      }
    }
  };

  document.addEventListener('keydown', waitForEnter);
});

// Warn user before leaving the page
window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = 'Are you sure you want to leave?';
});
