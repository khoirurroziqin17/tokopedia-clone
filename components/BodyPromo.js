import { useRef, useState } from "react";
import { UilAngleRight } from "@iconscout/react-unicons";

function BodyPromo({ colorClass, img, children }) {
  const [leftOffset, setLeftOffset] = useState(1);
  const slider = useRef();

  function scrollSlider() {
    setLeftOffset(1 - slider.current.scrollLeft / 140);
  }

  return (
    <div className={`flex relative ${colorClass}`}>
      {img && (
        <img
          className={`h-[285px] px-4`}
          src={`/images/${img}.webp`}
          style={{ opacity: `${leftOffset}` }}
        />
      )}
      <div
        className="flex items-center overflow-x-auto z-10 scrollbar-none pb-1  -ml-48"
        ref={slider}
        onScroll={() => scrollSlider()}
      >
        <div className="grid grid-flow-col gap-x-2 mx-4">
          <div className="w-[184px]" />
          {children}
          <div
            className={`w-[132px] flex flex-col justify-center items-center text-center text-[#03AC0E] rounded-lg bg-white ${
              !img && "border-2 border-gray-100"
            }`}
          >
            <div className="bg-white shadow-sm rounded-full p-1 mb-1">
              <UilAngleRight />
            </div>
            <span className="text-sm font-bold">Lihat Produk Lainnya</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyPromo;
