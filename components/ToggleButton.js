const ToggleButton = ({ darkMode, setDarkMode }) => {
  return (
    <div className="toggle-button">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode ? true : false}
          onChange={setDarkMode}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
