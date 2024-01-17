import LeftSideBar from "@/components/shared/LeftSideBar";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <main className="bg-white relative">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section
          className="flex min-h-screen flex-1 flex-col px-6 pb-6
            pt-36 max-md:pb-14 sm:px-14"
        >
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default layout;
