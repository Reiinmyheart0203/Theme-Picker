const defaultTheme = 'green';

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-selected-theme", theme);
  document.querySelector('[aria-pressed="true"]').setAttribute('aria-pressed', 'false');
  document.querySelector(`[data-theme="${theme}"]`).setAttribute('aria-pressed', 'true');
};

const handleThemeSelection = (event) => {
  const theme = event.target.getAttribute('data-theme');
  applyTheme(theme);
  localStorage.setItem('selected-theme', theme);
};

const savedTheme = localStorage.getItem('selected-theme') || defaultTheme;
applyTheme(savedTheme);

document.querySelectorAll('button[data-theme]').forEach(button =>
  button.addEventListener('click', handleThemeSelection)
);
