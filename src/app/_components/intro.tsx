import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col flex items-right md:justify-between mt-8 mb-8 md:mt-4 mb-4">
      
        <h1 className="text-8xl md:text-8xl font-bold tracking-tighter leading-tight text-left md: text-left">        
            Netcom Solution
        </h1>
        
        <div id="btn-wrapper" className="text-6xl md:text-6xl font-bold tracking-tighter text-right md: text-right">
          ☰
          <div id="chat-buuton">
          </div>
        </div>

    
    </section>
  );
}
