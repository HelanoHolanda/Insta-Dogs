import React from "react";

import Feed from "../../Components/Feed";
import Loading from "../../Components/Loading";

export const Home = () => {
  return (
    <>
      <section className="mt-8 px-4 max-w-[800px] mx-auto">
        <Feed />
        <Loading />
      </section>
    </>
  );
};

export default Home;
