const Chartbutton = ({ children, onClick, selected }) => {
  return (
    <>
      <button
        className={`${
          selected
            ? "bg-cyan-500 w-1/6 mt-2 py-1 md:p-2 rounded-sm shadow-sm text-xs md:text-base text-white dark:bg-slate-700 "
            : "bg-gray-200 w-1/6 mt-2 py-1 md:p-2 rounded-sm shadow-sm text-xs md:text-base transition-all duration-300 hover:bg-cyan-500 dark:hover:bg-slate-700 hover:text-white"
        }`}
        onClick={onClick}
      >
        <span>{children}</span>
      </button>
    </>
  );
};

export default Chartbutton;
