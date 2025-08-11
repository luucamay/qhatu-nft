"use client";

import type { NextPage } from "next";
import { NFTStore } from "~~/components/NFT";

const NFTStorePage: NextPage = () => {
  return (
    <>
      <div className="min-h-screen bg-base-200 w-full overflow-x-hidden">
        <NFTStore />
      </div>
    </>
  );
};

export default NFTStorePage;
