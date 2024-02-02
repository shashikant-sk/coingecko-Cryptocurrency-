import React from 'react';
import AuthForm from './AuthForm';

interface NavbarProps {
  coins: number;
  exchanges: number;
  marketCap: string;
  vol24h: string;
  dominance: string;
  gas: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { coins, exchanges, marketCap, vol24h, dominance, gas } = props;

  return (
    <nav className="bg-white text-black flex justify-between items-center space-x-3 pt-4 pb-4 border pl-5 border-gray-300 pr-6">
      <div className="flex space-x-3">
        <span className="flex text-xs text-zinc-600">Coins: {coins}</span>
        <span className="flex text-xs">Exchanges: {exchanges}</span>
        <span className="flex text-xs">Market Cap: {marketCap}</span>
        <span className="flex text-xs">24h Vol: {vol24h}</span>
        <span className="flex text-xs">Dominance: {dominance}</span>
        <span className="flex text-xs">ETH 17.4% Gas: {gas}</span>
      </div>
      <div className="flex space-x-3">
         
        {/* Styled Login Button */}
        
        <button className="text-2xs bg-white hover:bg-gray-200 text-black px-3 py-1 rounded-full focus:outline-none transition duration-300 transform hover:scale-105 shadow-md">
          Login
        </button>

        {/* Styled Signup Button */}
        
        <button className="text-2xs bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full focus:outline-none transition duration-300 transform hover:scale-105 shadow-md">
          Sign Up
        </button>
        
       
      </div>
    </nav>
  );
};

export default Navbar;
