import CreditsDepositsChart from '@/components/CreditsDepositsChart/CreditsDepositsChart.tsx';
import ClientsTypesChart from '@/components/ClientsTypesChart/ClientsTypesChart.tsx';
import ClientsAmountChart from '@/components/ClientsAmountChart/ClientsAmountChart.tsx';
import Layout from '@/layout/Layout.tsx';
import React from 'react';
import Banks from '@/components/Banks/Banks.tsx';

interface Props {
  isLoggedIn: boolean;
  setIsLoggedIn: (login: boolean) => void;
}

const Home: React.FC<Props> = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
      <div className="flex flex-wrap justify-center gap-6 my-6">
        <div className="w-full max-w-[500px]">
          <CreditsDepositsChart/>
        </div>

        <div className="w-full max-w-[500px]">
          <ClientsTypesChart/>
        </div>

        <div className="w-full max-w-[550px]">
          <h3 className="font-bold text-sm ms-2 sm:ms-0">Количество клиентов по регионам</h3>
          <ClientsAmountChart/>
        </div>
      </div>

      <Banks/>
    </Layout>
  );
};

export default Home;