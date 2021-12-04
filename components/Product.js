function Product({ data, fixed = true }) {
  const {
    img,
    title,
    icon,
    location,
    price,
    priceBefore,
    discount,
    star,
    sell,
    progress,
    desc,
    cashback,
    cod,
    bestSeller,
    ad,
  } = data;

  return (
    <div
      className={`${
        fixed && "w-[132px]"
      } bg-white rounded-lg overflow-hidden pb-2 shadow`}
    >
      <div className="relative">
        <img
          className={`${fixed && "w-[132px]"} object-contain`}
          src={`/images/${img}.webp`}
        />
        {ad && (
          <span className="absolute right-2 bottom-2 text-[10px] font-bold text-gray-50 drop-shadow">
            Ad
          </span>
        )}
      </div>

      {bestSeller && (
        <div className="mt-2 -mb-1">
          <span className="text-xs font-semibold text-white bg-[#E1AA1D] pl-2 pr-[6px] py-[2px] rounded-r-full">
            Terlaris
          </span>
        </div>
      )}
      <div className="px-2 pt-2">
        {title && (
          <h3 className="text-sm text-gray-800 break-all mb-1">{title}</h3>
        )}
        <span className="font-bold">Rp {price ?? "0"}</span>
        {discount && (
          <div className="flex items-center space-x-1 text-xs mt-1">
            <div className="font-bold text-[#FF5C84] bg-[#FFEAEF] px-[3px] py-[1px]">
              {discount}%
            </div>
            <span className="text-gray-400 line-through">Rp {priceBefore}</span>
          </div>
        )}
        {cashback && (
          <div className="flex mt-1">
            <span className="text-[10px] text-[#03AC0E] bg-[#D6FFDE] px-1 py-[3px]">
              Cashback
            </span>
          </div>
        )}
        <div className="flex items-center mt-1">
          <img
            className="w-4 h-4 mr-[2px]"
            src={`/icons/${
              icon == "os"
                ? "official-store"
                : icon == "pro"
                ? "power-merchant-pro"
                : "gold-merchant"
            }.png`}
          />
          <span className="text-gray-400 text-xs">{location}</span>
        </div>
        {star && sell && (
          <div className="flex mt-1">
            <img className="mr-[2px]" src="/icons/star.svg" />
            <span className="text-xs text-gray-500">
              {star} | Terjual {sell}
            </span>
          </div>
        )}
        {cod && (
          <span className="text-[10px] text-gray-400 font-bold">COD</span>
        )}
        {progress && (
          <>
            <div className="w-full h-1 bg-[#E5E7E9] rounded-lg overflow-hidden mt-2">
              <div
                className={`h-1 bg-[#EF144A]`}
                style={{ width: `${progress}` + "%" }}
              ></div>
            </div>
            <div
              className={`relative w-full -ml-2 ${desc != "sh" && "hidden"}`}
            >
              <svg
                className={`absolute -top-3`}
                style={{ left: `${progress}` + "%" }}
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="#FF8B00"
              >
                <path d="M17.17 5.1a.71.71 0 00-.89-.299A.74.74 0 0016 5l-1.77 1.74-2.56-5.08a.741.741 0 00-1-.34c-.24.1-5.89 2.73-7.13 10.56a9.16 9.16 0 001.81 7.42 6.65 6.65 0 002 1.56 3.87 3.87 0 01-.4-1.27 13.94 13.94 0 01.78-8.27.46.46 0 01.88.19c-.06 4 .67 11 6.62 9.48a6.25 6.25 0 003.62-3.15c1.79-3.31 1.15-8.2-1.68-12.74z"></path>
              </svg>
            </div>
          </>
        )}
        {desc && (
          <span
            className={`text-xs font-bold ${
              desc == "sh" ? "text-[#EF144A]" : "text-gray-500"
            }`}
          >
            {desc == "sh" ? "Segera Habis" : "Lagi Diminati"}
          </span>
        )}
      </div>
    </div>
  );
}

export default Product;
