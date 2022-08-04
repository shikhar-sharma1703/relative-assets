interface AssetCardProps {
    tokenName: string;
    totalPrice: string;
    pricePerToken: string;
    incDec: number;
    popularPairs: string[];
}

export const TEMP_DATA: AssetCardProps[] = [
    {
        tokenName: "Bitcoin (BTC)",
        pricePerToken: "$31,812.80",
        totalPrice: "$60,000",
        incDec: 10,
        popularPairs: ["Solana (SOL)", "Ethereum (ETH)", "Binance Coin (BNB)"]
    },
    {
        tokenName: "Solana (SOL)",
        pricePerToken: "$32.83",
        totalPrice: "$60,000",
        incDec: -12.32,
        popularPairs: ["Bitcoin (BTC)", "Ethereum (ETH)", "Binance Coin (BNB)"]
    },
    {
        tokenName: "Ethereum (ETH)",
        pricePerToken: "$1,466.45",
        totalPrice: "$60,000",
        incDec: -11.93,
        popularPairs: ["Solana (SOL)", "Bitcoin (BTC)", "Binance Coin (BNB)"]
    },
    {
        tokenName: "Binance Coin (BNB)",
        totalPrice: "$60,000",
        pricePerToken: "$1.00",
        incDec: +0.26,
        popularPairs: ["Solana (SOL)", "Ethereum (ETH)", "Binance Coin (BNB)"]
    },
    {
        tokenName: "Shiba Inu (SHIB)",
        pricePerToken: "$0.00000001948",
        totalPrice: "$60,000",
        incDec: -8.1,
        popularPairs: ["Solana (SOL)", "Ethereum (ETH)", "Binance Coin (BNB)"]
    }

]