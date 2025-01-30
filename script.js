// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Cargar estados guardados
  loadCheckboxStates();

  // Escuchar cambios en los checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      saveCheckboxState(checkbox);
    });
  });
});

// Guardar el estado de un checkbox
function saveCheckboxState(checkbox) {
  const activity = checkbox.closest(".row").getAttribute("data-activity");
  const day = checkbox.getAttribute("data-day");
  const key = `${activity}-${day}`;
  localStorage.setItem(key, checkbox.checked);
}

// Cargar los estados guardados de los checkboxes
function loadCheckboxStates() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    const activity = checkbox.closest(".row").getAttribute("data-activity");
    const day = checkbox.getAttribute("data-day");
    const key = `${activity}-${day}`;
    const checked = localStorage.getItem(key) === "true";
    checkbox.checked = checked;
  });
}