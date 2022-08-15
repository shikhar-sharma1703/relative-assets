import './App.css';
import AssetCardScreen from "./screen/asset-card-screen"

function App() {

  return (
    <>
      <div className="bg-bgBlue min-h-screen min-w-full flex gap-14 flex-col justify-center p-8">
        <div className='flex gap-[20px]'>
          <img src="/vuesax/linear/activity.svg" alt="trending" />
          <div className="font-tomorrow text-secondaryWhite not-italic font-semibold text-base leading-8 ">Trending Assets</div>

        </div>

        <AssetCardScreen />

      </div>
    </>
  );
}

export default App;
