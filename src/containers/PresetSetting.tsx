import '../styles/Preset.style.css';

export const addEditorMenu = (query) => {
  const menuElement =
    '<li tooltip-content="Preset" class="tie-btn-filter tui-image-editor-item normal preset-menu">PRESET</li>';

  query.insertAdjacentHTML('beforeend', menuElement);
};

export const addSubMenu = (query) => {
  let subElement = '<div class="tui-image-editor-menu-preset">';
  subElement +=
    '<ul class="tui-image-editor-submenu-item preset-submenu-layout">';
  subElement += '<li class="preset-box">cake</li>';
  subElement += '<li class="preset-box">apple</li>';
  subElement += '<li class="preset-box">apple</li>';
  subElement += '<li class="preset-add-button">+ add preset</li>';
  subElement += '</ul>';
  subElement += '</div>';

  query.insertAdjacentHTML('beforeend', subElement);
};

export const openPresetMenu = () => {
  const presetQuery = document.querySelector('.preset-menu');
  const presetSubMenu = document.querySelector(
    '.tui-image-editor-menu-preset',
  ) as HTMLElement | null;
  const mainMenu = document.querySelector('.tui-image-editor-main');
  const subMenu = document.querySelector(
    '.tui-image-editor-submenu',
  ) as HTMLElement | null;
  presetQuery.addEventListener('click', () => {
    if (presetSubMenu != null) {
      if (presetSubMenu.style.display === 'table-cell') {
        presetSubMenu.style.display = 'none';
        mainMenu.classList.remove('tui-image-editor-menu-preset');
      } else {
        presetSubMenu.style.display = 'table-cell';
        mainMenu.classList.add('tui-image-editor-menu-preset');
        subMenu.style.display = 'table';
      }
    }
  });
};
