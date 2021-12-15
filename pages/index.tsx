import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  const [data, setData] = useState({
    main: {
      images: {
        logo: "",
        open: "",
        close: {
          menu: "",
        },
      },
      title: "",
    },
    stats: {},
    about: {},
    pledges: {},
  });

  useEffect(() => {
    const getData = async () => {
      await fetch("data.json")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    };
    getData();
  }, []);

  return (
    <div className="App bg-bg-cream bg-hero-mobile bg-no-repeat bg-contain sm:bg-hero-desktop">
      <Head>
        <title>Frontend Mentor | Crowdfunding product page</title>
      </Head>
      <Header data={data.main} />
      {/* <Title /> */}
      {/* <Stats /> */}
      {/* <About /> */}
      {/*  map <Pledges /> */}
    </div>
  );
};

export default Home;
