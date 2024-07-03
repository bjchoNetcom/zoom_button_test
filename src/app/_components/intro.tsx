import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (

    <section className="fixed top-0 left-0 w-full flex items-end justify-between p-4 bg-white shadow-md z-20">

      <div className="flex items-center">
        <img 
            src="@/public/logo.png" 
            alt="Netcom Solution Logo" 
            className="object-contain"
          />
      

        <div id="btn-wrapper">
          <span className="text-4xl">☰</span>
        </div>
      </div>
    </section>
  );
}
