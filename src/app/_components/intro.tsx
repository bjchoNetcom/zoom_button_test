import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-right md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">        
          Netcom Solution
      </h1>
      <!-- 
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Beyond The Technology for Customer
      </h4>
      -->
    </section>
  );
}
