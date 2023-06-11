// Define an object to store the translations
var translations = {};
// Load the localization files dynamically
function loadTranslations(lang) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'language/' + lang + '.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      translations = JSON.parse(xhr.responseText);
      updateContent(lang);
    }
  };
  xhr.send();
}
// Update the content with translations
function updateContent(lang) {
  var elements = document.querySelectorAll('[data-translate]');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var translationKey = element.getAttribute('data-translate');
    if (translationKey) {
      if (translations[translationKey]) {
        element.textContent = translations[translationKey];
      } else {
        // Fallback to default language (English)
        element.textContent = translationKey;
      }
    }
  }
}
// Trigger language switch when the dropdown changes
var languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', function () {
  var selectedLang = this.value;
  loadTranslations(selectedLang);
  document.documentElement.lang = selectedLang;
});
// Default language
loadTranslations("en");


if (window.innerWidth > 767) {
  const left = document.querySelectorAll(".text-end");

  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-right");
        observer1.unobserve(entry.target);
      }
    });
  });
  left.forEach(toLeft => {
    observer1.observe(toLeft);
  });

  const right = document.querySelectorAll(".text-start");

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-left");
        observer2.unobserve(entry.target);
      }
    });
  });
  right.forEach(toRight => {
    observer2.observe(toRight);
  });
}
