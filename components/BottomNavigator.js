function BottomNavigator() {
  return (
    <nav className="fixed bottom-0 z-20 max-w-[500px] w-full bg-white shadow-nav">
      <ul className="flex justify-around py-1">
        <li>
          <a className="flex flex-col items-center">
            <img className="w-6 h-6 mb-1" src="/icons/home-active.svg" />
            <span className="text-[10px] text-gray-400">Home</span>
          </a>
        </li>
        <li>
          <a className="flex flex-col items-center">
            <img className="w-6 h-6 mb-1" src="/icons/feed.svg" />
            <span className="text-[10px] text-gray-400">Feed</span>
          </a>
        </li>
        <li>
          <a className="flex flex-col items-center">
            <img className="w-6 h-6 mb-1" src="/icons/official-store.svg" />
            <span className="text-[10px] text-gray-400">Official Store</span>
          </a>
        </li>
        <li>
          <a className="flex flex-col items-center">
            <img className="w-6 h-6 mb-1" src="/icons/wishlist.svg" />
            <span className="text-[10px] text-gray-400">Wishlist</span>
          </a>
        </li>
        <li>
          <a className="flex flex-col items-center">
            <img className="w-6 h-6 mb-1" src="/icons/transaksi.svg" />
            <span className="text-[10px] text-gray-400">Transaksi</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavigator;
