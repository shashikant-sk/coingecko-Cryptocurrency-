import React from 'react';
import Navbar from './Components/navbar';
import Table from './Components/table';
import TableHeader from './Components/tableHeader';
import DataBox from './Components/dataBox';

interface PageProps {
  // Props for the Page component, if needed
}

const Page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <Navbar
        coins={12157}
        exchanges={974}
        marketCap="$1.768T"
        vol24h="$105.109B"
        dominance="BTC 47.6%"
        gas="20 GWEI"
      />
      <DataBox />
      <TableHeader />
      <Table />
    </main>
  );
};

export default Page;
