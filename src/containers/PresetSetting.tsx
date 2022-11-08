import '../styles/Preset.style.css';

export const addEditorMenu = (query) => {
  const menuElement =
    '<li tooltip-content="Preset" class="tie-btn-filter tui-image-editor-item normal preset-menu">PRESET</li>';

  query.insertAdjacentHTML('beforeend', menuElement);
};
