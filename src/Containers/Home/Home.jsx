import React from "react";

import Feed from "../../Components/Feed";
import Head from "../../Components/Head";

export const Home = () => {
  return (
    <>
      <section className="mt-8 px-4 max-w-[800px] mx-auto">
        <Head title="Fotos" />
        <Feed />
      </section>
    </>
  );
};

export default Home;
