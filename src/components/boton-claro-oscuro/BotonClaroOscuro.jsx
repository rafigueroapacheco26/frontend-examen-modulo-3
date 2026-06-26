import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import './BotonClaroOscuro.css'

export default function BotonClaroOscuro({
  setTema
}) {

  const [isDark, setIsDark] = useState(() =>
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    setTema(isDark)
    document.documentElement.setAttribute("data-bs-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="d-flex justify-content-end align-content-center me-4">
      <label className='toogle-light-dark'>
        <input className='toggle-checkbox' type='checkbox' onChange={() => setIsDark(!isDark)}></input>
        <div className='toggle-slot'>
          <div className='sun-icon-wrapper'>
            <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
          </div>
          <div className='toggle-button'></div>
          <div className='moon-icon-wrapper'>
            <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
          </div>
        </div>
      </label>
    </div>
  )
}