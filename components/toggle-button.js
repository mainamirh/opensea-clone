const toggle_button = ({ darkMode, setDarkMode }) => {
  return (
    <div className="toggle-button">
      <label className="switch">
        <input type="checkbox" onChange={setDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default toggle_button;
