import { useState, useEffect } from 'react';

const ModeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
    }
  }, []);

  const handleModeToggle = () => {
    setIsLightMode((prevMode) => !prevMode);
    document.body.classList.toggle('light-mode');

    const icon = document.getElementById('mode-toggle-icon');
    if (isLightMode) {
      icon.classList.remove('bi-moon');
      icon.classList.add('bi-brightness-high');
      localStorage.setItem('mode', 'dark');
    } else {
      icon.classList.remove('bi-brightness-high');
      icon.classList.add('bi-moon');
      localStorage.setItem('mode', 'light');
    }
  };

  return (
    <button id="mode-toggle" className="nav-link fs-4 text-light" onClick={handleModeToggle}>
      <i id="mode-toggle-icon" className={`bi ${isLightMode ? 'bi-moon' : 'bi-brightness-high'}`}></i>
    </button>
  );
};

export default ModeToggle;
