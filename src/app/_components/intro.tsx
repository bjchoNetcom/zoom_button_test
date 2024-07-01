import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col flex items-right md:justify-between mt-8 mb-8 md:mt-4 mb-4">
      
        <h1 className="text-4xl md:text-4xl font-bold tracking-tighter leading-tight">        
            Netcom Solution
        </h1>
        
        <div id="btn-wrapper" className="text-3xl md:text-4xl font-bold tracking-tighter">
          ☰
          <div id="chat-buuton">
          </div>
        </div>

    
    </section>
  );
}
