import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Header from "../components/Header";
import Pledge from "../components/Pledge";
import Stats from "../components/Stats";
import Title from "../components/Title";

const Home: NextPage = () => {
  const [data, setData] = useState({
    main: {
      images: {
        logo: "",
        open: "",
        close: {
          menu: "",
        },
        master: "",
        bookmark: "",
      },
      title: "",
      description: [],
    },
    stats: {
      currency: "",
      objective: "",
      pledged: "",
      backers: "",
      days: {
        left: "",
      },
    },
    about: {
      title: "",
      description: [],
    },
    pledges: [
      {
        name: "",
        title: "",
        pledge: 0,
        description: [],
        amount: 0,
      },
    ],
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
    <div className="App bg-bg-cream text-body-gray bg-hero-mobile bg-no-repeat bg-contain sm:bg-hero-desktop">
      <Head>
        <title>Frontend Mentor | Crowdfunding product page</title>
      </Head>
      <main className="flex flex-col gap-6 px-4 mx-auto max-w-3xl">
        <Header data={data.main} />
        <Title data={data.main} />
        <Stats data={data.stats} />
        <About data={data.about}>
          {data?.pledges?.map((pledge) => (
            <Pledge key={pledge?.name} data={pledge} />
          ))}
        </About>
      </main>
    </div>
  );
};

export default Home;
