import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-right md:justify-between mt-8 mb-8 md:mt-4 mb-4">
      
        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">        
            Netcom Solution
        </h1>
        
        <div id="btn-wrapper" className="text-3xl md:text-8xl font-bold tracking-tighter leading-tight text-right md:mb-8">
          ☰
          <div id="chat-buuton">
          </div>
        </div>

    
    </section>
  );
}
