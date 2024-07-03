import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export function Intro() {
  return (

    <section className="fixed top-0 left-0 w-full flex items-end justify-between p-3 bg-white shadow-md">

      <div className="flex items-center">
        <h4 className="text-4xl md:text-4xl font-bold tracking-tighter leading-tight pr-8 md:pr-8">
          Netcom Solution
        </h4>
      
        </div>
        <div id="btn-wrapper" className="ml-auto">
          <span className="text-4xl">☰</span>
        </div>   
    </section>
  );
}
