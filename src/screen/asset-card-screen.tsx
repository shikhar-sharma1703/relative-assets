import React from 'react'
import AssetCard from '../components/asset-card/asset-card';
import { AssetCardProps } from '../constants/data-constants';
import { useQuery } from 'react-query';

function AssetCardScreen() {

  const { status, data, error } = useQuery('assets', async () => {
    const res = await fetch('https://trending-assets-api.onrender.com/trendingAssets')
    return res.json()
  })

  return (
    <>
      <div className='flex flex-row flex-wrap justify-around gap-3'>
        {
          data && data.map((item: AssetCardProps, index: React.Key | null | undefined) => (
            <AssetCard key={index} tokenName={item.slug} totalPrice={item.tvl} popularPairs={item.pairedAssetSlugs} />
          ))
        }
      </div>
    </>
  )
}

export default AssetCardScreen;