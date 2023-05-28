import Image from "next/image";
import React from "react";
import LogoDine from "../../public/LogoDine.webp";
import NavMenu from "./NavMenu";
import { Menu, Search, ShoppingCartIcon } from "lucide-react";
import MyMobDropdownMenu from "./MyMobDropdownMenu";
// import MyMenu from './MyMenu'

function Navbar() {
  return (
    <div className="sticky flex justify-between align-middle items-center top-0 bg-white border-b-2 border-black h-16 max-w-screen-2xl">
      {/* image */}
      <div className=" flex items-center pl-3">
        <Image src={LogoDine} alt="" width={200} height={200} className=""/>
      </div>

      {/* <div className='flex  justify-center'>
    <MyMenu/>
</div> */}
      {/* NavMenu */}

      <div className="hidden md:block">
        <NavMenu />
      </div>

      <div className="pr-3 hidden   lg:flex items-center gap-x-1 ">
        <Search />
        <input
          type="text"
          placeholder="what are you looking for"
          className="h-7 p-4 border-2 border-blue-950 rounded-xl"
        />
      </div>

      <div className=" mr-4 sm:border-4 pl-2 sm:rounded-full p-1 sm:p-2 sm:bg-gray-200">
        <ShoppingCartIcon />
      </div>

      <div className="sm:hidden md:hidden lg:hidden pr-1">
<MyMobDropdownMenu/>
      </div>
    </div>
  );
}

export default Navbar;
