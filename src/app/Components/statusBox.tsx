import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 


import Image from "next/image";

export default function StatusBox(props) {
    return (
        <div className="p-2 m-1 w-[100%] rounded-2xl border border-gray-300 flex justify-around space-y-1 overflow-hidden white-space">
            <div className="flex flex-col ">
            <p className="word-spacing-100 text-black font-bold text-2xl mt-1 ml-0 mb-2 mr-1">{props.figure}</p>
            <p>{props.name}
            </p> 
            </div>
            <Image  src={props.imageSrc} alt="Graph_img" width={160} height={160} className="flex-item w-[15rem]" />
        </div>
    );
}