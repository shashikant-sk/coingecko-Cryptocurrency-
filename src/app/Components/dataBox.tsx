import React from 'react';
import StatusBox from './statusBox'; // Update the path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';


interface DataBoxProps {
  emojis: string[]; // Prop for emojis
}

const DataBox: React.FC<DataBoxProps> = ({ emojis }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex justify-between items-center w-full flex-row px-4">
          <div className="flex flex-col w-[35%] h-48 ">
            {/* first box */}
            
            <StatusBox
             name={
              <>
                Market Cap{' '}
                <FontAwesomeIcon icon={faCaretUp} className="text-green-600 pr-2" />
                <span>3.4%</span>
              </>
            }
            figure="$126,863,678,634"
            imageSrc="https://www.coingecko.com/total_market_cap.svg"
          />
          <StatusBox
            name="24h Trading Volume"
            figure="$126,863,678,634"
            imageSrc="https://www.coingecko.com/total_market_cap.svg"
          />

            {/* second box */}
          </div>
          <div className="flex flex-col w-[35%] h-48 border shadow px-4 py-2 rounded-3xl m-2">
            <div className="flex justify-between my-2">
              <span>🔥 Trending</span>
              <span>View more</span>
            </div>
            {/* 1st */}

            <div className="flex justify-between my-2 hover:bg-slate-200 hover:cursor-pointer">
              <div className="flex">
                <img
                  src="https://assets.coingecko.com/coins/images/31967/standard/tia.jpg?1696530772"
                  alt="Celestia"
                  className="mr-2 w-6"
                />
                <span>Celestia </span>
              </div>
              <div className="flex">
                <span className="mr-2">10000</span>
                <span className='text-green-500'> <FontAwesomeIcon icon={faCaretDown} />&nbsp;</span>
                <span>  3.4%</span>
              </div>
            </div>
            {/* end */}
            {/* 2nd */}
            <div className="flex justify-between my-2 hover:bg-slate-200 hover:cursor-pointer">
              <div className="flex">
                <img
                  src="https://assets.coingecko.com/coins/images/22114/standard/CMC_200x200_AITECH.png?1696521456"
                  alt="1"
                  className="mr-2 w-6"
                />
                <span>Solidus Ai Tech</span>
              </div>
              <div className="flex">
                <span className="mr-2">$0.0484</span>
                <span className='text-green-500'><FontAwesomeIcon icon={faCaretDown} />&nbsp;</span>
                <span>33.4%</span>
              </div>
            </div>
            {/* end */}
            {/* 3rd */}
            <div className="flex justify-between my-2 hover:bg-slate-200 hover:cursor-pointer">
              <div className="flex">
                <img
                  src="https://assets.coingecko.com/coins/images/12882/standard/Secondary_Symbol.png?1696512670"
                  alt="1"
                  className="mr-2 w-6"
                />
                <span>Sei</span>
              </div>
              <div className="flex">
                <span className="mr-2">10000</span>
                <span className='text-green-500'><FontAwesomeIcon icon={faCaretUp} />&nbsp;</span>
                <span>3.4%</span>
              </div>
            </div>
          </div>
          {/* 3rd row Box */}
          {/* 1st */}
          <div className="flex flex-col w-[35%] h-48 border shadow px-4 py-2 rounded-3xl">
            <div className="flex justify-between my-2">
              <span>🚀 Largest Gainers</span>
              <span> View more</span>
            </div>
            {/* 1st */}
            <div className="flex justify-between my-2 hover:bg-slate-200 hover:cursor-pointer">
              <div className="flex">
                <img
                  src="https://assets.coingecko.com/coins/images/32878/standard/MYRO_200x200.png?1699709942"
                  alt="1"
                  className="mr-2 w-6"
                />
                <span>Myro</span>
              </div>
              <div className="flex">
                <span className="mr-2">$0.07843</span>
                <span className='text-red-500'> <FontAwesomeIcon icon={faCaretDown} />&nbsp;</span>
                <span>39.4%</span>
              </div>
            </div>
            {/* end */}
            {/* 2nd */}
            <div className="flex justify-between my-2 hover:bg-slate-200 hover:cursor-pointer">
              <div className="flex">
                <img
                  src="https://assets.coingecko.com/coins/images/22114/standard/CMC_200x200_AITECH.png?1696521456"
                  alt="1"
                  className="mr-2 w-6"
                />
                <span>Solidus Ai Tech</span>
              </div>
              <div className="flex">
                <span className="mr-2">$0.0484</span>
                <span className='text-green-500'> <FontAwesomeIcon icon={faCaretDown} />&nbsp;</span>
                <span>33.4%</span>
              </div>
            </div>
            {/* end */}
            {/* 3rd */}
            <div className="flex justify-between my-2 hover:bg-slate-200 hover:cursor-pointer">
              <div className="flex">
                <img
                  src="https://assets.coingecko.com/coins/images/959/standard/Kin_Logo.png?1696502073"
                  alt="1"
                  className="mr-2 w-6"
                />
                <span>Kin</span>
              </div>
              <div className="flex">
                <span className="mr-2">$0.00001705 </span>
                <span className='text-red-500'>  <FontAwesomeIcon icon={faCaretUp} />&nbsp;</span>
                <span>25.3%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataBox;
