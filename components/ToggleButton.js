const ToggleButton = ({ setDarkMode }) => {
  return (
    <div className="toggle-button">
      <label className="switch">
        <input type="checkbox" onChange={setDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
