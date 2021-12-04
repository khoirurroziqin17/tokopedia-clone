function ButtonRecom({ bgClass, title, active }) {
  return (
    <button
      type="button"
      className={`w-[104px] h-[52px] flex-none flex flex-col p-2 mr-2 rounded-lg bg-${bgClass}`}
      role="tab"
    >
      {active && <span className="block w-6 h-[2px] bg-white" />}
      <p className="text-xs text-left font-semibold text-white pt-[2px]">
        {title}
      </p>
    </button>
  );
}

export default ButtonRecom;
