import CreditsDepositsChart from '@/components/CreditsDepositsChart/CreditsDepositsChart.tsx';
import ClientsTypesChart from '@/components/ClientsTypesChart/ClientsTypesChart.tsx';
import ClientsAmountChart from '@/components/ClientsAmountChart/ClientsAmountChart.tsx';

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 my-6">
        <div className="w-full max-w-[500px]">
          <h3 className="font-bold text-sm ms-2 sm:ms-0">Кредиты и Депозиты</h3>
          <CreditsDepositsChart/>
        </div>

        <div className="w-full max-w-[500px]">
          <h3 className="font-bold text-sm ms-2 sm:ms-0">Распределение клиентов по типам</h3>
          <ClientsTypesChart/>
        </div>

        <div className="w-full max-w-[550px]">
          <h3 className="font-bold text-sm ms-2 sm:ms-0">Количество клиентов по регионам</h3>
          <ClientsAmountChart/>
        </div>
      </div>
    </>
  );
};

export default Home;