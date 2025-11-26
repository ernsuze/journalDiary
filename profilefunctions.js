const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('profilesidebar');
const content = document.getElementById('maincontent');

toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('open');
  content.classList.toggle('shifted');
});