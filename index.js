document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  function showSection(sectionId) {
    sections.forEach(section => {
      section.style.display = 'none';
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  function addNavigationListener(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      showSection(sectionId);
    });
  }
  navLinks.forEach(link => {
    addNavigationListener(link);
  });
  // Shows the 'Home' section by default when the page loads
  document.getElementById('about').style.display = 'block';
});
