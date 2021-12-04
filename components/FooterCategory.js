import { useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";

function FooterCategory({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pl-4" aria-expanded={expanded}>
      <div
        className="text-gray-500 flex justify-between items-center pt-[10px] pb-[26px] pr-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h4 className="font-bold font-nunito">{data.title}</h4>
        <UilAngleDown
          className={`transition duration-300 ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <ul
        className={`space-y-[2px] overflow-hidden ${
          expanded ? "max-h-full" : "max-h-0"
        }`}
      >
        {data.items.map((item) => (
          <li key={item.id}>
            <a
              href={`https://www.tokopedia.com/${item.link}`}
              className="font-open text-sm text-gray-500"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="pt-4 border-b border-gray-200" />
    </div>
  );
}

export default FooterCategory;
