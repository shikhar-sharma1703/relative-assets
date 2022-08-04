import './App.css';
import AssetCard from './components/asset-card/asset-card';
import { TEMP_DATA } from './constants/data-constants';

function App() {
  return (
    <>
      <div className="bg-bgBlue min-h-screen min-w-full flex gap-14 flex-col justify-center p-8">
        <div className='flex gap-[20px]'>
          <img src="/vuesax/linear/activity.svg" alt="trending" />
          <div className="font-tomorrow text-secondaryWhite not-italic font-semibold text-base leading-8 ">Trending Assets</div>
        </div>
        <div className='flex flex-row flex-wrap justify-around gap-3'>
          {
            TEMP_DATA.map((data, index) => (
              <AssetCard key={index} tokenName={data.tokenName} totalPrice={data.totalPrice} pricePerToken={data.pricePerToken} incDec={data.incDec} popularPairs={data.popularPairs} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
