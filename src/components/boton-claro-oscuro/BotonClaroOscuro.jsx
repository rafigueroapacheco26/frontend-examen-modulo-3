import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import styles from './BotonClaroOscuro.module.css'

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
      <button className={styles.boton + ' ' + (isDark ? styles.oscuro : styles.claro)} onClick={() => setIsDark(!isDark)}>
        {isDark ? <FaSun className="fs-1" /> : <FaMoon className="fs-1" />}
      </button>
    </div>
  )
}