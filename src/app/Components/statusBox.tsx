import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Image from "next/image";

interface StatusBoxProps {
  figure: string;
  name: string;
  imageSrc: string;
}

const StatusBox: React.FC<StatusBoxProps> = ({ figure, name, imageSrc }) => {
  return (
    <div className="p-2 m-1 w-[100%] rounded-2xl border border-gray-300 flex justify-around space-y-1 overflow-hidden white-space">
      <div className="flex flex-col">
        <p className="word-spacing-100 text-black font-bold text-2xl mt-1 ml-0 mb-2 mr-1">{figure}</p>
        <p>{name}</p>
      </div>
      <Image src={imageSrc} alt="Graph_img" width={10} height={10} className="flex-item w-[15rem]" />
    </div>
  );
};

export default StatusBox;
