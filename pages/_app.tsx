import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Derry Gz Summer Birthday Blowout Minting Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Everybody you think is cool is gonna be at Derry Gz Summer Birthday Blowout this Summer going freaking wild. This is your chance to capture that moment and revel in his glory forever, Derry Gz that is. Every DNGY is born from the crucible of endless variation as a magic bean. When you mint this magic fiesta bean, your life at the party with Derry G begins. Little Dingus is waiting for you at his Summer Birthday Blowout, grow your magic bean now and find yourself front-stage at the most fantabulous party of the century! Viva La DINGY!”"
        />
        <meta
          name="keywords"
          content="dogs,nft drop,nft,polygon, art "
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
