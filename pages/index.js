import Head from "next/head";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import TopCollections from "../components/TopCollections";
import Trending from "../components/Trending";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

import { images } from "../components/resources";
import { collections } from "../components/resources";
import { trending } from "../components/resources";
import { categories } from "../components/resources";

export default function Home({ setDarkMode }) {
  return (
    <div className="">
      <Head>
        <title>OpenSea Clone</title>
      </Head>
      <Header setDarkMode={setDarkMode} />
      <main className="">
        <Hero />
        {/* Notable Drops */}
        <Carousel images={images} />
        {/* Top collections over last 24 hours */}
        <TopCollections NFT_Collections={collections} />
        {/* trending */}
        <Trending NFTs={trending} />
        {/* Browse by category */}
        <Categories categories={categories} />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
