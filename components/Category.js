export default function Category({ img, title }) {
  return (
    <div className="flex flex-col items-center mr-2">
      <div className="flex justify-center items-center bg-white w-12 h-12 rounded-full">
        <img className="w-8 h-8" src={`/icons/${img}.png`} />
      </div>
      <span className="w-14 text-center text-[10px] pt-1">{title}</span>
    </div>
  );
}
