import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Toggle() {
    const { darkMode, handleToggle } = useContext(ThemeContext);

    return (
        <button
            type="button"
            onClick={() => handleToggle() }
            className={`relative inline-flex h-8 w-16 items-center rounded-full border-2 transition
        ${darkMode ? "bg-purple-500 border-purple-600" : "bg-purple-300 border-purple-400"}`}
            aria-pressed={darkMode}
        >
            <span
                className={`inline-block h-6 w-6 transform rounded-full bg-yellow-300 shadow transition
          ${darkMode ? "translate-x-4 sl:translate-x-8" : "translate-x-1"}`}
            />
        </button>
    );
}