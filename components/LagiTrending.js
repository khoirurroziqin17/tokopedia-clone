function LagiTrending({ img, title, amount }) {
  return (
    <div className="flex pl-2 py-2 shadow rounded-lg">
      <img src={`/images/${img}.webp`} className="w-14 h-14 rounded-md" />
      <div className="ml-2">
        <h4 className="text-sm font-bold text-gray-800">{title}</h4>
        <p className="text-xs text-gray-400">{amount} produk</p>
      </div>
    </div>
  );
}

export default LagiTrending;
