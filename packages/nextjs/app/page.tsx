"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { NFTStore } from "~~/components/NFT";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col grow pt-6 sm:pt-10 w-full overflow-x-hidden">
        <div className="px-4 sm:px-5 text-center mb-6 sm:mb-8 w-full max-w-4xl mx-auto">
          <h1 className="text-center">
            <span className="block text-xl sm:text-2xl mb-2">Welcome to</span>
            <span className="block text-3xl sm:text-4xl font-bold">Qhatu NFT Store</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col">
            <p className="my-2 font-medium text-sm sm:text-base">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
        </div>

        {/* NFT Store Section */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <NFTStore />
        </div>

        {/* Additional Tools Section */}
        <div className="grow bg-base-300 w-full mt-12 sm:mt-16 px-4 sm:px-8 py-8 sm:py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-12 flex-col md:flex-row">
              <div className="flex flex-col bg-base-100 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 text-center items-center max-w-xs rounded-3xl">
                <PhotoIcon className="h-6 w-6 sm:h-8 sm:w-8 fill-secondary mb-3" />
                <p className="text-sm sm:text-base">
                  Explore and trade NFTs in the{" "}
                  <span className="font-semibold text-primary">Qhatu NFT Store</span> above.
                </p>
              </div>
              <div className="flex flex-col bg-base-100 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 text-center items-center max-w-xs rounded-3xl">
                <BugAntIcon className="h-6 w-6 sm:h-8 sm:w-8 fill-secondary mb-3" />
                <p className="text-sm sm:text-base">
                  Tinker with your smart contract using the{" "}
                  <Link href="/debug" passHref className="link">
                    Debug Contracts
                  </Link>{" "}
                  tab.
                </p>
              </div>
              <div className="flex flex-col bg-base-100 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 text-center items-center max-w-xs rounded-3xl">
                <MagnifyingGlassIcon className="h-6 w-6 sm:h-8 sm:w-8 fill-secondary mb-3" />
                <p className="text-sm sm:text-base">
                  Explore your local transactions with the{" "}
                  <Link href="/blockexplorer" passHref className="link">
                    Block Explorer
                  </Link>{" "}
                  tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
