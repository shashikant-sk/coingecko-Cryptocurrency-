import Image from "next/image";

export default function StatusBox(props) {
    return (
        <div className="p-2 m-1 w-[100%]  rounded-2xl border border-gray-300 flex justify-around space-y-1 overflow-hidden white-space">
            <div className="flex flex-col ">
            <p className="word-spacing-100 text-black font-bold text-2xl ">{props.figure}</p>
            <p>{props.name}</p> 
            </div>
            <Image  src={props.imageSrc} alt="Graph_img" width={120} height={120} className="flex-item w-[4rem]" />
        </div>
    );
}