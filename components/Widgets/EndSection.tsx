import Image from "next/image";
import React from "react";
import LogoDine from "../../public/LogoDine.webp";
import Link from "next/link";
import {
    Copyright,
  FacebookIcon,
  Linkedin,
  LinkedinIcon,
  TwitchIcon,
  Youtube,
} from "lucide-react";
import HeaderBottom from "../Shared/HeaderBottom";

function EndSection() {
  return (
    <>
    <div className=" bottom-0">

    <div className="flex-col  sm:flex  sm:flex-row px-6 space-y-5">
      {/* left side */}
      <div className="basis-4/12 space-y-4 text-teal-600 ">
        <div>
          <Image src={LogoDine} alt="" width={200} height={250} />
        </div>
        <div className="hidden sm:block">
          <h3>
            Small, artisan label that offers a <br /> thoughtfully curated
            collection of
            <br /> high quality everyday essentials made.{" "}
          </h3>
        </div>
        {/* social logo */}
        <div className="flex justify-start space-x-6 sm:space-x-10">
          <Link href={""}>
            <button className=" bg-gray-200 rounded-full p-2 ">
              <FacebookIcon className="" />
            </button>
          </Link>
          <Link href={""}>
            <button className=" bg-gray-200 rounded-full p-2">
              <TwitchIcon />
            </button>
          </Link>
          <Link href={""}>
            <button className=" bg-gray-200 rounded-full p-2">
              <Linkedin />
            </button>
          </Link>
          <Link href={""}>
            <button className=" bg-gray-200 rounded-full p-2">
              <Youtube />
            </button>
          </Link>
        </div>
      </div>
      {/* right side */}

      <div className="basis-8/12">
        <div className="grid text-center space-y-0 sm:grid-cols-3 ">
          <div>
            {/* COL-1 */}
            <div className="flex-col space-y-3">
              <div className="text-teal-800 mb-2 font-bold text-2xl">
                {/* HEADING */} <h2>Company</h2>
              </div>
              <span className=" text-teal-500 text-lg  space-y-3">
                <div>
                  <h4>
                    <Link href={""}>About</Link>
                  </h4>
                </div>
                <div>
                  <h4>
                    <Link href={""}>Privacy Policy</Link>
                  </h4>
                </div>
                <div>
                  <h4>
                    <Link href={""}>How it Works</Link>
                  </h4>
                </div>
                <div>
                  <h4>
                    <Link href={""}>Contact Us</Link>
                  </h4>
                </div>
              </span>
            </div>
          </div>
          <div>
            {/* {"COL-2 "} */}
            <div className="flex-col hidden sm:block space-y-3">
              <div className="text-teal-800 mb-2 font-bold text-2xl">
                {/* HEADING */}
                <h2>Support</h2>
              </div>
              <span className=" text-teal-500 text-lg  space-y-3">
                <div>
                  <h4>
                    <Link href={""}>Support Center</Link>
                  </h4>
                </div>
                <div>
                  <h4>
                    <Link href={""}>24h Service</Link>
                  </h4>
                </div>
                <div>
                  <h4>
                    <Link href={""}>Quick Chat</Link>
                  </h4>
                </div>
                {/* <div>
                  <h4>
                    <Link href={""}>Contact Us</Link>
                  </h4>
                </div> */}
              </span>
            </div>
          </div>
          <div>
            {/* {" COL-3"} */}
            <div className="flex-col hidden sm:block space-y-3">
              <div className="text-teal-800 mb-2 font-bold text-2xl">
                {/* HEADING */} <h2>Contact</h2>
              </div>
              <span className=" text-teal-500 text-lg  space-y-3">
                <div>
                  <h4>
                    <Link href={""}>WhatsApp</Link>
                  </h4>
                </div>
                <div>
                  <h4>
                    <Link href={""}>Support-24h</Link>
                  </h4>
                </div>
                {/* <div>
                  <h4>
                  <Link href={""}>How it Works</Link>
                  </h4>
                  </div>
                <div>
                <h4>
                    <Link href={""}>Contact Us</Link>
                    </h4>
                </div> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* Header Bottom */}
<HeaderBottom/>

                    </div>
    </>
  );
}

export default EndSection;
