// import Image from "next/image";
// export default function Table() {
//     function Row(props){
//         return (
//             <div className="flex flex-row w-[110%] pr-10 border-solid border-r-0 border-l-0 border-b-2 border-stone-100 text-[13px]">
//                 <div className="flex w-[1%] p-6 justify-center">
//                     ⭐️
//                 </div>
//                 <div className="flex w-[5%] p-6 justify-end">
//                     {props.rank}
//                 </div>
//                 <div className="flex flex-row w-[25%] justify-between p-6">
//                     <div className="flex flex-row">
//                         <Image className="h-6 w-6" width={20} height={20} loading="lazy" alt={props.coinShortName} src={props.coinImage} />
//                         <span className="pl-2">{props.coinName}</span>
//                         <span className="pl-2 text-gray-400">{props.coinShortName}</span>
//                     </div>
//                     <div className="flex align-middle justify-center border-solid border-2 rounded-md w-12 h-6 text-xs text-center border-green-400 text-green-500 pt-[0.5%]">
//                         Buy
//                     </div>
//                 </div>
//                 <div className="flex w-[10%] p-6 justify-end">
//                     {props.price}
//                 </div>
//                 <div className="flex flex-row w-[6%] p-6 justify-end">
//                     <span className={props.oneHourDirection == "down" ? "text-red-600 pr-2" : "text-green-600 pr-2"}>{props.oneHourDirection == "down" ? "v" : "^"}</span>
//                     <span className={props.oneHourDirection == "down" ? "text-red-600" : "text-green-600"}>{props.oneHourPercentage}</span>
//                 </div>
//                 <div className="flex w-[6%] p-6 justify-end">
//                     <span className={props.twentyFourHourDirection == "down" ? "text-red-600 pr-2" : "text-green-600 pr-2"}>{props.twentyFourHourDirection == "down" ? "v" : "^"}</span>
//                     <span className={props.twentyFourHourDirection == "down" ? "text-red-600" : "text-green-600"}>{props.twentyFourHourPercentage}</span>
//                 </div>
//                 <div className="flex w-[6%] p-6 justify-end">
//                     <span className={props.sevenDayDirection == "down" ? "text-red-600 pr-2" : "text-green-600 pr-2"}>{props.sevenDayDirection == "down" ? "v" : "^"}</span>
//                     <span className={props.sevenDayDirection == "down" ? "text-red-600" : "text-green-600"}>{props.sevenDayPercentage}</span>
//                 </div>
//                 <div className="flex w-[11%] p-6 justify-end">
//                     {props.twentyFourHourVolume}
//                 </div>
//                 <div className="flex w-[11%] p-6 justify-end">
//                     {props.marketCap}
//                 </div>
//                 <div className="flex w-[15%] p-2 justify-end">
//                     <img className="h-[90%] w-[80%]" loading="lazy" alt="7-day-graph" src={props.lastSevenDaysGraph} />
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col w-[85%] p-2">
//           <div className="flex flex-row w-[100%] border-solid border-r-0 border-l-0 border-t-2 border-b-2 border-stone-100 text-xs font-bold">
//             <div className="flex w-[1%] p-6 justify-end">
//             </div>
//             <div className="flex w-[5%] p-6 justify-end">
//               ^ #
//             </div>
//             <div className="flex w-[25%] p-6">
//               Coin
//             </div>
//             <div className="flex w-[10%] p-6 justify-end">
//               Price
//             </div>
//             <div className="flex w-[6%] p-6 justify-end">
//               1h
//             </div>
//             <div className="flex w-[6%] p-6 justify-end">
//               24h
//             </div>
//             <div className="flex w-[6%] p-6 justify-end">
//               7d
//             </div>
//             <div className="flex w-[11%] p-6 justify-end">
//               24h Volume
//             </div>
//             <div className="flex w-[11%] p-6 justify-end">
//               Market Cap
//             </div>
//             <div className="flex w-[20%] p-6 justify-end">
//               Last 7 days
//             </div>
//           </div>

//           <Row rank="1" coinImage="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" 
//           coinName="Bitcoin" coinShortName="BTC" price="$43,523.55" 
//           oneHourPercentage="0.2%" oneHourDirection="down"
//           twentyFourHourPercentage="0.3%" twentyFourHourDirection="up"
//           sevenDayPercentage="8.6%" sevenDayDirection="up"
//           twentyFourHourVolume="$24,998,357,793" marketCap="$853,680,038,622"
//           lastSevenDaysGraph="https://www.coingecko.com/coins/1/sparkline.svg" />
//           {/*  */}
//           <Row rank="1" coinImage="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" 
//           coinName="Bitcoin" coinShortName="BTC" price="$43,523.55" 
//           oneHourPercentage="0.2%" oneHourDirection="down"
//           twentyFourHourPercentage="0.3%" twentyFourHourDirection="up"
//           sevenDayPercentage="8.6%" sevenDayDirection="up"
//           twentyFourHourVolume="$24,998,357,793" marketCap="$853,680,038,622"
//           lastSevenDaysGraph="https://www.coingecko.com/coins/1/sparkline.svg" />
//           {/*  */}
//           <Row rank="1" coinImage="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" 
//           coinName="Bitcoin" coinShortName="BTC" price="$43,523.55" 
//           oneHourPercentage="0.2%" oneHourDirection="down"
//           twentyFourHourPercentage="0.3%" twentyFourHourDirection="up"
//           sevenDayPercentage="8.6%" sevenDayDirection="up"
//           twentyFourHourVolume="$24,998,357,793" marketCap="$853,680,038,622"
//           lastSevenDaysGraph="https://www.coingecko.com/coins/1/sparkline.svg" />
//           {/*  */}
//           <Row rank="1" coinImage="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" 
//           coinName="Bitcoin" coinShortName="BTC" price="$43,523.55" 
//           oneHourPercentage="0.2%" oneHourDirection="down"
//           twentyFourHourPercentage="0.3%" twentyFourHourDirection="up"
//           sevenDayPercentage="8.6%" sevenDayDirection="up"
//           twentyFourHourVolume="$24,998,357,793" marketCap="$853,680,038,622"
//           lastSevenDaysGraph="https://www.coingecko.com/coins/1/sparkline.svg" />
//           {/*  */}
//         </div>
//     );
// }


// import Image from "next/image";

// interface RowProps {
//   rank: string;
//   coinImage: string;
//   coinName: string;
//   coinShortName: string;
//   price: string;
//   oneHourPercentage: string;
//   oneHourDirection: "up" | "down";
//   twentyFourHourPercentage: string;
//   twentyFourHourDirection: "up" | "down";
//   sevenDayPercentage: string;
//   sevenDayDirection: "up" | "down";
//   twentyFourHourVolume: string;
//   marketCap: string;
//   lastSevenDaysGraph: string;
// }

// interface HighlightButtonProps {
//   isActive: boolean;
//   isCustomise?: boolean;
//   emoji: string;
//   name: string;
//   fontSize?: string;
//   paddingTop?: string;
//   paddingLeft?: string;
//   paddingRight?: string;
// }

// function HighlightButton(props: HighlightButtonProps) {
//   const buttonStyle = {
//     paddingTop: props.paddingTop,
//     paddingLeft: props.paddingLeft,
//     paddingRight: props.paddingRight,
//   };
    

  
//   return (
//     <div className={`p-1 m-1 rounded-lg  ${props.isCustomise ? "bg-slate-200 text-black hover:bg-slate-300 hover:cursor-pointer" : (props.isActive ? "bg-lime-200 text-lime-700" : "bg-transparent text-slate-400 hover:bg-slate-200 hover:cursor-pointer")}`} style={{ fontSize: props.fontSize, ...buttonStyle }}>
//       <span className="mr-2">{props.emoji}</span>
//       <span>{props.name}</span>
//     </div>
//   );
// }
// // ... (previous imports and interfaces)

// function Row(props: RowProps) {
//   return (
//     <div className="flex flex-row w-[100%] pr-1 border-solid border-r-0 border-l-0 border-b-2 border-stone-100 text-[13px]">
      
//       <div className="flex w-[5%] p-6 justify-center">⭐️</div>
//       <div className="flex w-[5%] p-6 justify-end">{props.rank}</div>
//       <div className="flex flex-row w-[25%] justify-between p-6">
//         <div className="flex flex-row">
//           <Image className="h-6 w-5" width={20} height={20} loading="lazy" alt={props.coinShortName} src={props.coinImage} />
//           <span className="pl-2">{props.coinName}</span>
//           <span className="pl-2 text-gray-400">{props.coinShortName}</span>
//         </div>
//         <div className="flex align-middle justify-center border-solid border-2 rounded-md w-12 h-6 text-xs text-center border-green-400 text-green-500 pt-[0.5%]">
//           Buy
//         </div>
//       </div>
//       <div className="flex w-[10%] p-6 justify-end">{props.price}</div>
//       <div className="flex flex-row w-[6%] p-6 justify-end">
//         <i className={props.oneHourDirection === "down" ? "fas fa-fw fa-caret-down text-red-600 pr-2" : "fas fa-fw fa-caret-up text-green-600 pr-2"}></i>
//         <span className={props.oneHourDirection === "down" ? "text-red-600" : "text-green-600"}>{props.oneHourPercentage}</span>
//       </div>
//       <div className="flex w-[6%] p-6 justify-end">
//         <i className={props.twentyFourHourDirection === "down" ? "fas fa-fw fa-caret-down text-red-600 pr-2" : "fas fa-fw fa-caret-up text-green-600 pr-2"}></i>
//         <span className={props.twentyFourHourDirection === "down" ? "text-red-600" : "text-green-600"}>{props.twentyFourHourPercentage}</span>
//       </div>
//       <div className="flex w-[6%] p-6 justify-end">
//         <i className={props.sevenDayDirection === "down" ? "fas fa-fw fa-caret-down text-red-600 pr-2" : "fas fa-fw fa-caret-up text-green-600 pr-2"}></i>
//         <span className={props.sevenDayDirection === "down" ? "text-red-600" : "text-green-600"}>{props.sevenDayPercentage}</span>
//       </div>
//       <div className="flex w-[11%] p-6 justify-end">{props.twentyFourHourVolume}</div>
//       <div className="flex w-[11%] p-6 justify-end">{props.marketCap}</div>
//       <div className="flex w-[15%] p-2 justify-end">
//         <img className="h-[90%] w-[80%]" loading="lazy" alt="7-day-graph" src={props.lastSevenDaysGraph} />
//       </div>
//     </div>
//   );
// }

// // ... (rest of the code remains the same)


// export default function Table() {
//   return (
//     <div className="flex flex-col w-[98%] p-2">
//       <div className="flex flex-row w-[100%] border-solid border-r-0 border-l-0 border-t-2 border-b-2 border-stone-100 text-xs font-bold">
//         <div className="flex w-[1%] p-3 justify-end"></div>
//         <div className="flex w-[5%] p-3 justify-end">^ #</div>
//         <div className="flex w-[25%] p-3">Coin</div>
//         <div className="flex w-[10%] p-3 justify-end">Price</div>
//         <div className="flex w-[6%] p-3 justify-end">1h</div>
//         <div className="flex w-[6%] p-3 justify-end">24h</div>
//         <div className="flex w-[6%] p-3 justify-end">7d</div>
//         <div className="flex w-[11%] p-3 justify-end">24h Volume</div>
//         <div className="flex w-[11%] p-3 justify-end">Market Cap</div>
//         <div className="flex w-[20%] p-3 justify-end">Last 7 days</div>
//       </div>

//       <Row
//         rank="1"
//         coinImage="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
//         coinName="Bitcoin"
//         coinShortName="BTC"
//         price="$43,523.55"
//         oneHourPercentage="0.2%"
//         oneHourDirection="down"
//         twentyFourHourPercentage="0.3%"
//         twentyFourHourDirection="up"
//         sevenDayPercentage="8.6%"
//         sevenDayDirection="up"
//         twentyFourHourVolume="$24,998,357,793"
//         marketCap="$853,680,038,622"
//         lastSevenDaysGraph="https://www.coingecko.com/coins/1/sparkline.svg"
//       />
//       {/* Add more rows as needed */}


//     </div>
//   );
// }




import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 


import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

interface RowProps {
  rank: string;
  coinImage: string;
  coinName: string;
  coinShortName: string;
  price: string;
  oneHourPercentage: string;
  oneHourDirection: "up" | "down";
  twentyFourHourPercentage: string;
  twentyFourHourDirection: "up" | "down";
  sevenDayPercentage: string;
  sevenDayDirection: "up" | "down";
  twentyFourHourVolume: string;
  marketCap: string;
  lastSevenDaysGraph: string;
}

function Row(props: RowProps) {
  return (
    <div className="flex flex-row w-[100%] pr-1 border-solid border-r-0 border-l-0 border-b-2 border-stone-100 text-[13px]">
      <div className="flex w-[5%] p-6 justify-center">⭐️</div>
      <div className="flex w-[5%] p-6 justify-end">{props.rank}</div>
      <div className="flex flex-row w-[25%] justify-between p-6">
        <div className="flex flex-row">
          <Image className="h-6 w-5" width={20} height={20} loading="lazy" alt={props.coinShortName} src={props.coinImage} />
          <span className="pl-2">{props.coinName}</span>
          <span className="pl-2 text-gray-400">{props.coinShortName}</span>
        </div>
        <div className="flex align-middle justify-center border-solid border-2 rounded-md w-12 h-6 text-xs text-center border-green-400 text-green-500 pt-[0.5%]">
          Buy
        </div>
      </div>
      <div className="flex w-[10%] p-6 justify-end">{props.price}</div>
      <div className="flex flex-row w-[6%] p-6 justify-end">
        <FontAwesomeIcon icon={props.oneHourDirection === "down" ? faCaretDown : faCaretUp} className={props.oneHourDirection === "down" ? "text-red-600 pr-2" : "text-green-600 pr-2"} />
        <span className={props.oneHourDirection === "down" ? "text-red-600" : "text-green-600"}>{props.oneHourPercentage}</span>
      </div>
      <div className="flex w-[6%] p-6 justify-end">
        <FontAwesomeIcon icon={props.twentyFourHourDirection === "down" ? faCaretDown : faCaretUp} className={props.twentyFourHourDirection === "down" ? "text-red-600 pr-2" : "text-green-600 pr-2"} />
        <span className={props.twentyFourHourDirection === "down" ? "text-red-600" : "text-green-600"}>{props.twentyFourHourPercentage}</span>
      </div>
      <div className="flex w-[6%] p-6 justify-end">
        <FontAwesomeIcon icon={props.sevenDayDirection === "down" ? faCaretDown : faCaretUp} className={props.sevenDayDirection === "down" ? "text-red-600 pr-2" : "text-green-600 pr-2"} />
        <span className={props.sevenDayDirection === "down" ? "text-red-600" : "text-green-600"}>{props.sevenDayPercentage}</span>
      </div>
      <div className="flex w-[11%] p-6 justify-end">{props.twentyFourHourVolume}</div>
      <div className="flex w-[11%] p-6 justify-end">{props.marketCap}</div>
      <div className="flex w-[15%] p-2 justify-end">
        <img className="h-[90%] w-[80%]" loading="lazy" alt="7-day-graph" src={props.lastSevenDaysGraph} />
      </div>
    </div>
  );
}

export default function Table() {
  return (
    <div className="flex flex-col w-[98%] p-2">
      <div className="flex flex-row w-[100%] border-solid border-r-0 border-l-0 border-t-2 border-b-2 border-stone-100 text-xs font-bold">
        <div className="flex w-[1%] p-3 justify-end"></div>
        <div className="flex w-[5%] p-3 justify-end">^ #</div>
        <div className="flex w-[25%] p-3">Coin</div>
        <div className="flex w-[10%] p-3 justify-end">Price</div>
        <div className="flex w-[6%] p-3 justify-end">1h</div>
        <div className="flex w-[6%] p-3 justify-end">24h</div>
        <div className="flex w-[6%] p-3 justify-end">7d</div>
        <div className="flex w-[11%] p-3 justify-end">24h Volume</div>
        <div className="flex w-[11%] p-3 justify-end">Market Cap</div>
        <div className="flex w-[20%] p-3 justify-end">Last 7 days</div>
      </div>

      {/* Row */}
      <Row
        rank="1"
        coinImage="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
        coinName="Bitcoin"
        coinShortName="BTC"
        price="$43,523.55"
        oneHourPercentage="0.2%"
        oneHourDirection="down"
        twentyFourHourPercentage="0.3%"
        twentyFourHourDirection="up"
        sevenDayPercentage="8.6%"
        sevenDayDirection="up"
        twentyFourHourVolume="$24,998,357,793"
        marketCap="$853,680,038,622"
        lastSevenDaysGraph="https://www.coingecko.com/coins/1/sparkline.svg"
      />

      {/* Add more rows as needed */}

    </div>
  );
}
