import { ICON_PATH, CLASS_BG_GRADIENT } from "../../constants/icon-constants";

interface AssetCardProps {
    tokenName: string;
    totalPrice: string;
    pricePerToken: string;
    incDec: number;
    popularPairs: string[];
}

export default function AssetCard({
    tokenName,
    totalPrice,
    pricePerToken,
    incDec,
    popularPairs,
}: AssetCardProps) {
    return (
        <>
            <div className={"w-[290px] flex flex-col items-center"}>
                <div className={`rounded-full ${CLASS_BG_GRADIENT[tokenName]} h-[100px] w-[100px] flex justify-center items-center`}>
                    <img src={ICON_PATH[tokenName]} alt="token_logo" />
                </div>
                <div className="flex bg-[url('/public/NotchedBg.svg')] flex-col justify-center items-center w-[290px] h-[350px] pl-[30px] pr-[30px] pt-[50px] mt-[-48px]">
                    <div className="font-tomorrow text-[#737BAE] not-italic font-semibold text-base leading-8 mb-3">{tokenName}</div>

                    <div className="bg-[#14172B] rounded-[17px] w-full h-10 flex items-center justify-center font-tomorrow font-semibold pl-3 pr-3 borderDetailsContainer">
                        <div>
                            <span className="text-secondaryWhite not-italic leading-[31px] text-base">{pricePerToken}</span>
                            <span className="not-italic leading-[31px] text-xs ml-3 absolute"><span className={incDec > 0 ? "text-[#00FFA3]" : "text-[#FF4D4D]"}>{incDec > 0 ? "+" : ""}{incDec}%</span></span>
                        </div>
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
        </>
    );
}