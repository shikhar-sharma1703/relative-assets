import { ICON_PATH, CLASS_BG_GRADIENT } from "../../constants/icon-constants";
import { TEMP_COST } from "../../constants/data-constants"
import { useQuery } from "react-query";

interface AssetCardProps {
    tokenName: string;
    totalPrice: string;
    popularPairs: string[];
}

export default function AssetCard({
    tokenName,
    totalPrice,
    popularPairs,
}: AssetCardProps) {

    // Adding dependent query for getting cost and incDec percentage

    // const { status, data: slugDetails, error } = useQuery('assetDetails', async () => {
    //     const res = await fetch('https://trending-assets-api.onrender.com/trendingAssets/assetName')
    //     return res.json()
    // }, {
    //     enabled: !!tokenName,
    // })

    return (
        <>
            <div className={"w-[290px] flex flex-col items-center"}>
                {/* LogoCircle */}
                <div className={`rounded-full ${CLASS_BG_GRADIENT[tokenName]} h-[100px] w-[100px] flex justify-center items-center z-10 mb-[-48px]`}>
                    <img src={ICON_PATH[tokenName]} alt="token_logo" />
                </div>

                {/* Rectangle */}
                <div className="flex flex-col w-[290px] ">

                    <div className="w-[290px] h-[60px] flex relative">
                        <div className="w-[96.6px] h-[60px] bgCardTop rounded-tr-[36px] rounded-tl-[12px]"></div>
                        <div className="w-[96.6px] h-[60px] bgCardTop"></div>
                        <div className="w-[96.6px] h-[60px] bgCardTop rounded-tr-[12px] rounded-tl-[36px]"></div>
                        <div className="notch-circle absolute w-[115px] h-[115px]"></div>
                    </div>


                    <div className="w-full pl-[30px] pr-[30px] h-[300px] flex flex-col items-center justify-center bgCardBottom rounded-b-[12px]">


                        <div className="font-tomorrow text-[#737BAE] not-italic font-semibold text-base leading-8 mb-3">{tokenName}</div>

                        <div className="bg-[#14172B] rounded-[17px] w-full h-10 flex items-center justify-center font-tomorrow font-semibold pl-2 pr-3 borderDetailsContainer">
                            {TEMP_COST[tokenName] && (
                                <div>

                                    <span className="text-secondaryWhite not-italic leading-[31px] text-base">{TEMP_COST[tokenName] && TEMP_COST[tokenName][0]}</span>
                                    <span className="not-italic leading-[31px] text-xs ml-3 absolute"><span className={TEMP_COST[tokenName][1] > 0 ? "text-[#00FFA3]" : "text-[#FF4D4D]"}>{TEMP_COST[tokenName][0] > 0 ? "+" : ""}{TEMP_COST[tokenName][0]}%</span></span>


                                </div>
                            )
                            }
                        </div>

                        <div className="font-tomorrow text-[#5A5F7D] not-italic font-semibold text-base leading-8 mb-2">Price</div>

                        <div className="bg-[#14172B] rounded-[17px] w-full h-10 flex items-center justify-center font-tomorrow font-semibold borderDetailsContainer">
                            <span className="text-secondaryWhite not-italic leading-[31px] text-base">{totalPrice}</span>
                        </div>

                        <div className="font-tomorrow text-[#5A5F7D] not-italic font-semibold text-base leading-8 mb-3">TVL</div>

                        <div className="bg-[#14172B] rounded-[17px] h-10 flex items-center justify-center font-tomorrow font-semibold gap-3 p-3">
                            {popularPairs.map((pair) => (
                                <img src={ICON_PATH[pair]} className="w-[22px] h-[22px]" alt="token_logo" />
                            ))}
                        </div>

                        <div className="font-tomorrow text-[#5A5F7D] not-italic font-semibold text-base leading-8 ">Popular pairs</div>

                    </div>
                </div>
            </div>
        </>
    );
}