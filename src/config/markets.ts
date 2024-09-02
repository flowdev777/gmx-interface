import { parse } from "date-fns";
import mapValues from "lodash/mapValues";

import { isDevelopment } from "config/env";
import { ARBITRUM, ARBITRUM_GOERLI, AVALANCHE, AVALANCHE_FUJI, BSС_MAINNET } from "./chains";

const p = (date: string) => parse(date, "dd MMM yyyy", new Date());

export const ENOUGH_DAYS_SINCE_LISTING_FOR_APY = 8;
const DEFAULT_LISTING = {
  listingDate: p("01 Jan 1970"),
};

type MarketUiConfig = {
  listingDate: Date;
};

const ENABLED_MARKETS: Record<number, Record<string, MarketUiConfig>> = {
  [ARBITRUM]: {
    // BTC/USD [WBTC.e-USDC]
    "0x47c031236e19d024b42f8AE6780E44A573170703": DEFAULT_LISTING,
    // BTC/USD [WBTC.e-WBTC.e]
    "0x7C11F78Ce78768518D743E81Fdfa2F860C6b9A77": DEFAULT_LISTING,
    // ETH/USD [WETH-USDC]
    "0x70d95587d40A2caf56bd97485aB3Eec10Bee6336": DEFAULT_LISTING,
    // ETH/USD [WETH-WETH]
    "0x450bb6774Dd8a756274E0ab4107953259d2ac541": DEFAULT_LISTING,
    // DOGE/USD [WETH-USDC]
    "0x6853EA96FF216fAb11D2d930CE3C508556A4bdc4": DEFAULT_LISTING,
    // SOL/USD [SOL-USDC]
    "0x09400D9DB990D5ed3f35D7be61DfAEB900Af03C9": DEFAULT_LISTING,
    // LTC/USD [WETH-USDC]
    "0xD9535bB5f58A1a75032416F2dFe7880C30575a41": DEFAULT_LISTING,
    // UNI/USD [UNI-USDC]
    "0xc7Abb2C5f3BF3CEB389dF0Eecd6120D451170B50": DEFAULT_LISTING,
    // LINK/USD [LINK-USDC]
    "0x7f1fa204bb700853D36994DA19F830b6Ad18455C": DEFAULT_LISTING,
    // ARB/USD [ARB-USDC]
    "0xC25cEf6061Cf5dE5eb761b50E4743c1F5D7E5407": DEFAULT_LISTING,
    // XRP/USD [WETH-USDC]
    "0x0CCB4fAa6f1F1B30911619f1184082aB4E25813c": DEFAULT_LISTING,
    // BNB/USD [BNB-USDC]
    "0x2d340912Aa47e33c90Efb078e69E70EFe2B34b9B": DEFAULT_LISTING,
    // NEAR [WETH-USDC]
    "0x63Dc80EE90F26363B3FCD609007CC9e14c8991BE": DEFAULT_LISTING,
    // ATOM [WETH-USDC]
    "0x248C35760068cE009a13076D573ed3497A47bCD4": DEFAULT_LISTING,
    // AAVE [AAVE-USDC]
    "0x1CbBa6346F110c8A5ea739ef2d1eb182990e4EB2": DEFAULT_LISTING,
    // AVAX [WAVAX-USDC]
    "0x7BbBf946883a5701350007320F525c5379B8178A": DEFAULT_LISTING,
    // GMX/USD [GMX-USDC]
    "0x55391D178Ce46e7AC8eaAEa50A72D1A5a8A622Da": DEFAULT_LISTING,
    // OP [OP-USDC]
    "0x4fDd333FF9cA409df583f306B6F5a7fFdE790739": DEFAULT_LISTING,
    // PEPE [PEPE-USDC]
    "0x2b477989A149B17073D9C9C82eC9cB03591e20c6": {
      listingDate: p("17 Jul 2024"),
    },
    // WIF [WIF-USDC]
    "0x0418643F94Ef14917f1345cE5C460C37dE463ef7": {
      listingDate: p("17 Jul 2024"),
    },
    // SHIB/USD [WETH-USDC]
    "0xB62369752D8Ad08392572db6d0cc872127888beD": {
      listingDate: p("7 Aug 2024"),
    },
    // ORDI/USD [wBTC-USDC]
    "0x93385F7C646A3048051914BDFaC25F4d620aeDF1": {
      listingDate: p("14 Aug 2024"),
    },
    // STX/USD [wBTC-USDC]
    "0xD9377d9B9a2327C7778867203deeA73AB8a68b6B": {
      listingDate: p("14 Aug 2024"),
    },
    // SWAP-ONLY [USDC-USDC.e]
    "0x9C2433dFD71096C435Be9465220BB2B189375eA7": DEFAULT_LISTING,
    // SWAP-ONLY [USDC-USDT]
    "0xB686BcB112660343E6d15BDb65297e110C8311c4": DEFAULT_LISTING,
    // SWAP-ONLY [USDC-DAI]
    "0xe2fEDb9e6139a182B98e7C2688ccFa3e9A53c665": DEFAULT_LISTING,
    // ETH/USD [wstETH-USDe]
    "0x0Cf1fb4d1FF67A3D8Ca92c9d6643F8F9be8e03E5": {
      listingDate: p("31 Jul 2024"),
    },
    // SWAP-ONLY [wstETH-WETH]
    "0xb56E5E2eB50cf5383342914b0C85Fe62DbD861C8": {
      listingDate: p("31 Jul 2024"),
    },
    // SWAP-ONLY [USDe-USDC]
    "0x45aD16Aaa28fb66Ef74d5ca0Ab9751F2817c81a4": {
      listingDate: p("31 Jul 2024"),
    },
  },
  [AVALANCHE]: {
    // BTC/USD [BTC-USDC]
    "0xFb02132333A79C8B5Bd0b64E3AbccA5f7fAf2937": DEFAULT_LISTING,
    // ETH/USD [ETH-USDC]
    "0xB7e69749E3d2EDd90ea59A4932EFEa2D41E245d7": DEFAULT_LISTING,
    // DOGE/USD [WAVAX-USDC]
    "0x8970B527E84aA17a33d38b65e9a5Ab5817FC0027": DEFAULT_LISTING,
    // SOL/USD [SOL-USDC]
    "0xd2eFd1eA687CD78c41ac262B3Bc9B53889ff1F70": DEFAULT_LISTING,
    // LTC/USD [WAVAX-USDC]
    "0xA74586743249243D3b77335E15FE768bA8E1Ec5A": DEFAULT_LISTING,
    // AVAX/USD [WAVAX-USDC]
    "0x913C1F46b48b3eD35E7dc3Cf754d4ae8499F31CF": DEFAULT_LISTING,
    // XRP/USD [WAVAX-USDC]
    "0xD1cf931fa12783c1dd5AbB77a0706c27CF352f25": DEFAULT_LISTING,
    // BTC/USD [BTC-BTC]
    "0x3ce7BCDB37Bf587d1C17B930Fa0A7000A0648D12": DEFAULT_LISTING,
    // ETH/USD [ETH-ETH]
    "0x2A3Cf4ad7db715DF994393e4482D6f1e58a1b533": DEFAULT_LISTING,
    // AVAX/USD [AVAX-AVAX]
    "0x08b25A2a89036d298D6dB8A74ace9d1ce6Db15E5": DEFAULT_LISTING,
    // SWAP-ONLY [USDC-USDT.e]
    "0xf3652Eba45DC761e7ADd4091627d5Cda21F61613": DEFAULT_LISTING,
    // SWAP-ONLY [USDC-USDC.e]
    "0x297e71A931C5825867E8Fb937Ae5cda9891C2E99": DEFAULT_LISTING,
    // SWAP-ONLY [USDT-USDT.e]
    "0xA7b768d6a1f746fd5a513D440DF2970ff099B0fc": DEFAULT_LISTING,
    // SWAP-ONLY [USDC-DAI.e]
    "0xDf8c9BD26e7C1A331902758Eb013548B2D22ab3b": DEFAULT_LISTING,
  },
  [BSС_MAINNET]: {},
};

export const ENABLED_MARKETS_INDEX: Record<number, Record<string, true>> = mapValues(ENABLED_MARKETS, (markets) =>
  mapValues(markets, () => true as const)
);

export function isMarketEnabled(chainId: number, marketAddress: string) {
  if (isDevelopment()) return true;

  return ENABLED_MARKETS_INDEX[chainId]?.[marketAddress] ?? false;
}

/**
 * @returns Date when token was listed on the platform. If the date was not specified in config, returns 01 Jan 1970.
 */
export function getMarketListingDate(chainId: number, marketAddress: string): Date {
  const tokenListing = ENABLED_MARKETS[chainId]?.[marketAddress];

  if (!tokenListing) {
    return DEFAULT_LISTING.listingDate;
  }

  return tokenListing.listingDate;
}

export const GLV_MARKETS_ENABLED = {
  [ARBITRUM]: false,
  [ARBITRUM_GOERLI]: false,
  [AVALANCHE]: false,
  [AVALANCHE_FUJI]: true,
};

export const GLV_MARKETS_APPEARANCE: {
  [chainId: number]: Record<string, { name: string; subtitle: string; shortening: string }>;
  default: string;
} = {
  [ARBITRUM]: {},
  [ARBITRUM_GOERLI]: {},
  [AVALANCHE]: {},
  [AVALANCHE_FUJI]: {
    "0xc519a5b8e5e93D3ec85D62231C1681c44952689d": {
      name: "High Caps",
      subtitle: "Core ETH Markets Vault",
      shortening: "HC",
    },
  },
  default: "GLV",
};
