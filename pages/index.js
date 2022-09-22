import { useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import Carousel from "../components/carousel";
import TopCollections from "../components/top-collections";
import Trending from "../components/trending";
import Categories from "../components/categories";
import Footer from "../components/footer";

import { images } from "./resources";
import { collections } from "./resources";
import { trending } from "./resources";
import { categories } from "./resources";

export default function Home({ darkMode, setDarkMode }) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      if (!body.classList.contains("body-light")) {
        body.classList.add("body-dark");
        return;
      }
      body.classList.replace("body-light", "body-dark");
    } else {
      if (!body.classList.contains("body-dark")) {
        body.classList.add("body-light");
        return;
      }
      body.classList.replace("body-dark", "body-light");
    }
  }, [darkMode]);

  return (
    <div className="">
      <Head>
        <title>OpenSea Clone</title>
      </Head>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
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
