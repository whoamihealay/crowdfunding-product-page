import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pledge from "../components/Pledge";
import Selection from "../components/Selection";
import SelectionPledge from "../components/SelectionPledge";
import Stats from "../components/Stats";
import Thanks from "../components/Thanks";
import Title from "../components/Title";

import { DataInterface } from "../@types/DataInterface";

const Home: NextPage = () => {
  const [data, setData] = useState<DataInterface | null>(null);
  const [selectionMenu, setSelectionMenu] = useState(false);
  const [thanks, setThanks] = useState(false);

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
    <div className="App bg-bg-cream text-body-gray bg-hero-mobile bg-no-repeat bg-contain sm:bg-hero-desktop min-w-[365px]">
      <Head>
        <title>Frontend Mentor | Crowdfunding product page</title>
      </Head>
      {data ? (
        <main className="flex flex-col gap-6 px-4 mx-auto max-w-3xl ">
          <Header data={data.main} onClick={() => setSelectionMenu(true)} />
          <Title data={data.main} />
          <Stats data={data.stats} />
          <About data={data.about}>
            {data?.pledges?.map((pledge) => (
              <Pledge
                key={pledge?.name}
                data={pledge}
                onClick={() => setSelectionMenu(true)}
              />
            ))}
          </About>
        </main>
      ) : null}
      {data && selectionMenu ? (
        <Selection
          data={data.selection}
          onClick={() => setSelectionMenu(false)}
        >
          {data?.pledges?.map((pledge) => (
            <SelectionPledge
              key={pledge?.name}
              data={pledge}
              onClick={() => {
                setSelectionMenu(false);
                setThanks(true);
              }}
            />
          ))}
        </Selection>
      ) : null}
      {data && thanks ? (
        <Thanks data={data.thanks} onClick={() => setThanks(false)} />
      ) : null}
      <Footer />
    </div>
  );
};

export default Home;
