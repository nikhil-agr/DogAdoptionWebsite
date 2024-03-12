import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen">
        <div className="text-center font-Gilroy text-6xl my-20">
          Every Pet Deserves a Loving Home. <br />{" "}
          <span className="text-yellow-400">Adopt</span> a Pet Today
        </div>
        <aside>
          <Image
            src={"/assets/images/dog.jpg"}
            alt={"dog"}
            width={200}
            height={200}
          />
        </aside>
      </main>
    </>
  );
};

export default Home;
