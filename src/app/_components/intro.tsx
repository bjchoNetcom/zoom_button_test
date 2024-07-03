import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (

    <section className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white shadow-md z-50">

      <div className="flex items-center">
        <Image 
            src="/public/logo.png" 
            alt="Netcom Solution Logo" 
            width={200} // 로고 이미지의 너비
            height={100} // 로고 이미지의 높이
            className="object-contain"
          />
      

        <div id="btn-wrapper">
          <span className="text-2xl">☰</span>
        </div>
      </div>
    </section>
  );
}
