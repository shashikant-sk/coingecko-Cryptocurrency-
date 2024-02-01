import React from 'react';

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
    <nav className="bg-white text-black flex space-x-3">
      <span className="flex text-xs">Coins: {coins}</span>
      <span className="flex text-xs">Exchanges: {exchanges}</span>
      <span className="flex text-xs">Market Cap: {marketCap}</span>
      <span className="flex text-xs">24h Vol: {vol24h}</span>
      <span className="flex text-xs">Dominance: {dominance}</span>
      <span className="flex text-xs">ETH 17.4% Gas: {gas}</span>
    </nav>
  );
};

export default Navbar;
