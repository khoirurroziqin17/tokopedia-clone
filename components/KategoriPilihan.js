import kategoriPilihanData from "../data/kategoriPilihan.json";

function KategoriPilihan() {
  return (
    <div className="overflow-x-auto scrollbar-none">
      <div className="grid grid-rows-2 grid-flow-col gap-x-2 ml-[14px]">
        {kategoriPilihanData.map((data) => (
          <div className="flex flex-col items-center" key={data.id}>
            <div className="w-[124px] h-[105px] rounded-lg mb-[6px] overflow-hidden">
              <img
                className="object-cover"
                src={`/images/kategori-pilihan/${data.img}.webp`}
              />
            </div>
            <span className="font-nunito text-xs font-bold text-gray-800 text-center">
              {data.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KategoriPilihan;
