document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('[data-theme-toggle]');
    const announcement = document.createElement('div');
    announcement.className = 'announcement hidden';
    document.body.appendChild(announcement);
  
    function showAnnouncement(message) {
      announcement.textContent = message;
      announcement.classList.remove('hidden');
      setTimeout(() => {
        announcement.classList.add('hidden');
      }, 3000);
    }
  
    themeToggle.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      showAnnouncement(`Switched to ${newTheme} mode`);
    });
  
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  });