import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import Carousel from "../components/carousel";
import TopCollections from "../components/top-collections";
import Trending from "../components/trending";
import Browse from "../components/browse";

import { images } from "./resources";
import { collections } from "./resources";
import { trending } from "./resources";
import { categories } from "./resources";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>OpenSea Clone</title>
      </Head>
      <Header />
      <main className="">
        <Hero />
        {/* Notable Drops */}
        <Carousel images={images} />
        {/* Top collections over last 24 hours */}
        <TopCollections NFT_Collections={collections} />
        {/* trending */}
        <Trending NFTs={trending} />
        {/* Browse by category */}
        <Browse categories={categories} />
      </main>

      <footer className=""></footer>
    </div>
  );
}
