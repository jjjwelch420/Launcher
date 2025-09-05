// Show "Continue?" dialog as soon as the page loads
window.addEventListener('load', () => {
  if (!confirm("Continue?")) {
    window.location.href = 'about:blank'; // Redirect if user cancels
  }
});

// Warn user before leaving the page
window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = 'Are you sure you want to leave?';
});
