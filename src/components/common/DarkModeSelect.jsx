import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useOptionsContext } from "../../hooks/useContextHooks/useOptionsContext";
import { useEffect } from "react";

const Darkmodeselect = () => {
  const { darkMode, removeTheme } = useOptionsContext();

  return (
    <div>
      {darkMode ? (
        <SunIcon
          className="w-10 h-10 p-2 rounded-md opacity-60 transition-all duration-300 ease-in-out cursor-pointer hover:bg-cyan-500 dark:hover:bg-slate-900 dark:text-white "
          onClick={removeTheme}
        />
      ) : (
        <MoonIcon
          className="w-10 h-10 p-2 rounded-md opacity-60 transition-all duration-300  ease-in-out cursor-pointer hover:bg-cyan-500"
          onClick={removeTheme}
        />
      )}
    </div>
  );
};

export default Darkmodeselect;
