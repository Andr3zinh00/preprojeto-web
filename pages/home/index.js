import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nome do App</title>
      </Head>
      <div className="flex flex-col h-screen">
        <header className="h-20">
          Header
        </header>
        <main className="flex-1">
          MAIN
        </main>
        <footer>
          FOOTER
        </footer>
      </div>
    </>
  );
};

export default Home;
