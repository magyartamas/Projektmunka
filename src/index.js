document.querySelectorAll('[data-include]').forEach(async (element) => {
    const file = element.getAttribute('data-include');
    if (file) {
      const response = await fetch(file);
      if (response.ok) {
        element.innerHTML = await response.text();
      } else {
        element.innerHTML = "<p>Nem sikerült betölteni a fájlt: " + file + "</p>";
      }
    }
  });