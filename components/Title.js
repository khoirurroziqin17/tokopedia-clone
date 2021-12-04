import { UilClockThree, UilRedo } from "@iconscout/react-unicons";

function Title({ title, time, seeAll = false, reload = false }) {
  return (
    <div
      className={`font-nunito font-bold ${
        !time && "flex justify-between items-center"
      } mx-4 py-2`}
    >
      <h2 className=" text-gray-900 pb-1">{title}</h2>
      {time && (
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-normal text-gray-800 opacity-70">
              Berakhir dalam
            </span>
            <div className="flex items-center text-white bg-[#e02954] px-[6px] py-1 rounded-full">
              <UilClockThree size="16" />
              <span className="pl-1">{time}</span>
            </div>
          </div>
          <span className="text-[#03AC0E]">Lihat Semua</span>
        </div>
      )}
      {seeAll && <span className="text-xs text-[#03AC0E]">Lihat Semua</span>}
      {reload && (
        <div className="text-xs text-[#03AC0E] flex items-center">
          <UilRedo size="14" /> <span className="ml-1">Muat Ulang</span>
        </div>
      )}
    </div>
  );
}

export default Title;
