import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export function Intro() {
  return (

    <section className="fixed top-0 left-0 w-full flex items-end justify-between p-4 bg-white shadow-md z-20">

      <div className="flex items-center">
        <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight pr-8 md:pr-8">
          Netcom Solution
        </h1>
      

        <div id="btn-wrapper">
          <span className="text-4xl">☰</span>
        </div>
      </div>
    </section>
  );
}
