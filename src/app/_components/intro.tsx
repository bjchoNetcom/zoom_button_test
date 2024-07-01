import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-right md:justify-between mt-16 mb-16 md:mt-16 mb-16">
      
        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">        
            Netcom Solution
        </h1>
        
        <div id="btn-wrapper" className="text-3xl md:text-6xl font-bold text-right md:text-center">
          ☰
          <div id="chat-buuton">
          </div>
        </div>

    
    </section>
  );
}
