function PulsaCart({ icon, text }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg pt-3 pb-2">
      <div className="flex justify-center items-center w-12 h-12 rounded-2xl bg-white shadow-md mb-1">
        <img src={`/icons/${icon}.svg`} className="w-8" />
      </div>
      <span className="font-bold text-sm text-gray-800">{text}</span>
    </div>
  );
}

export default PulsaCart;
