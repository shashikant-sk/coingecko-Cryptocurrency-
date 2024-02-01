// import Image from "next/image";
// export default function TableHeader() {
//     function HighlightButton(props){
//         return (
//           <>
//             <div className={`p-1 m-1 rounded-lg ${props.isCustomise ? "bg-slate-200 text-black hover:bg-slate-300 hover:cursor-pointer" : (props.isActive ? "bg-lime-200 text-lime-700" : "bg-transparent text-slate-400 hover:bg-slate-200 hover:cursor-pointer")}`}>
//               <span className="mr-2">{props.emoji}</span>
//               <span>{props.name}</span>
//             </div>
//           </>
//         );
//       }

//     return (
//         <div className="flex flex-row font-bold w-[100%] justify-between">
//           <div className="flex flex-row">
//             <HighlightButton isActive={true} emoji={"📕"} name="Cryptocurrencies" />
//             <HighlightButton isActive={false} emoji={"📕"} name="Highlights" />
//             <HighlightButton isActive={false} emoji={"📕"} name="Chains" />
//             <HighlightButton isActive={false} emoji={"📕"} name="Categories" />
//             <HighlightButton isActive={false} emoji={"🔥"} name="Cat-Themed Coins" />
//             <HighlightButton isActive={false} emoji={"🔥"} name="Meme" />
//             <HighlightButton isActive={false} emoji={"🔥"} name="Rollups-as-a-service(RaaS)" />
//           </div>
//           <div className="flex flex-row">
//             <HighlightButton isCustomise={true} isActive={false} emoji={"✨"} name="Customise" />
//           </div>
//         </div>
//     );
// }
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { faListOl ,faChain,faShapes } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

interface HighlightButtonProps {
  isActive: boolean;
  isCustomise?: boolean;
  name: string;
  fontSize?: string; // Add fontSize prop
}

function HighlightButton(props: HighlightButtonProps) {
  return (
    <div className={`p-1 m-1 rounded-lg ${props.isCustomise ? "bg-slate-200 text-black hover:bg-slate-300 hover:cursor-pointer" : (props.isActive ? "bg-lime-200 text-lime-700" : "bg-transparent text-slate-400 hover:bg-slate-200 hover:cursor-pointer")}`} style={{ fontSize: props.fontSize }}>
      {props.name === "Cryptocurrencies" && <span className="mr-2"><FontAwesomeIcon icon={faRankingStar} /></span>}
      {props.name === "Highlights" && <span className="mr-2"><FontAwesomeIcon icon={faListOl} /></span>}
      {props.name === "Chains" && <span className="mr-2"><FontAwesomeIcon icon={faChain} /></span>}
      {props.name === "Categories" && <span className="mr-2"><FontAwesomeIcon icon={faShapes} /></span>}
      {props.name === "Cat-Themed Coins" && <span className="mr-2">{props.emoji}</span>}
      {props.name === "Meme" && <span className="mr-2">{props.emoji}</span>}
      {props.name === "Rollups-as-a-service(RaaS)" && <span className="mr-2">{props.emoji}</span>}

      <span>{props.name}</span>
    </div>
  );
}

export default function TableHeader() {
  return (
    <div className="flex flex-row font-bold w-[100%] justify-between">
      <div className="flex flex-row">
        <HighlightButton isActive={true} name="Cryptocurrencies" fontSize="16px" />
        <HighlightButton isActive={false} name="Highlights" fontSize="14px" />
        <HighlightButton isActive={false} name="Chains" fontSize="14px" />
        <HighlightButton isActive={false} name="Categories" fontSize="14px" />
        <HighlightButton isActive={false} emoji={"🔥"} name="Cat-Themed Coins" fontSize="14px" />
        <HighlightButton isActive={false} emoji={"🔥"} name="Meme" fontSize="14px" />
        <HighlightButton isActive={false} emoji={"🔥"} name="Rollups-as-a-service(RaaS)" fontSize="14px" />
      </div>
      <div className="flex flex-row">
        <HighlightButton isCustomise={true} isActive={false} name="Customise" fontSize="16px" />
      </div>
    </div>
  );
}

