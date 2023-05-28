"use client"
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "../ui/navigation-menu"
  

function NavMenu() {
  return (
    <div><NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem className='space-x-2'>
        <NavigationMenuTrigger className='text-lg'>Female</NavigationMenuTrigger>
        <NavigationMenuTrigger  className='text-lg'>Male</NavigationMenuTrigger>
        <NavigationMenuTrigger  className='text-lg'>Kids</NavigationMenuTrigger>
        <NavigationMenuTrigger className='text-lg'>All Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  </div>
  )
}

export default NavMenu