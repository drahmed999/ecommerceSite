import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

function MyMobDropdownMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="bg-pink-200">Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={""}>
            <DropdownMenuItem>Kids</DropdownMenuItem>
          </Link>

          <Link href={""}>
            <DropdownMenuItem>Men</DropdownMenuItem>
          </Link>

          <Link href={""}>
            <DropdownMenuItem>Women</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default MyMobDropdownMenu;
