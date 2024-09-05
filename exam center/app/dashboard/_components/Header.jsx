"use client"
import { UserButton } from '@clerk/nextjs'
import { CodeSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
               const path = usePathname()
               console.log(path)
  return (
    <div className='w-full  flex items-center px-8 py-3 bg-secondary shadow-lg justify-between'>
            <Image src={"/logo.svg"} height={200} width={180} alt="not showing"/>

            <div className=' gap-8 hidden xl:flex capitalize '>
               <p className={`${path=== "/dashboard"&& "text-primary font-bold tracking-tight "}hover:text-primary hover:font-bold hover:tracking-tight cursor-pointer transition-all`}>dashboard</p>
               <p className={`${path=== "/dashboard/question"&& "text-primary font-bold tracking-tight "} hover:text-primary hover:font-bold hover:tracking-tight cursor-pointer transition-all`}>question</p>
               <Link href={"https://wallet.verbwire.com/"}>
               <p  className={`${path=== "/dashboard/upgrade"&& "text-primary font-bold tracking-tight "} hover:text-primary hover:font-bold hover:tracking-tight cursor-pointer transition-all`}>upgrade</p>
               </Link>
               <p className={`${path=== "/dashboard/how"&& "text-primary font-bold tracking-tight "} hover:text-primary hover:font-bold hover:tracking-tight cursor-pointer transition-all`}>how it works</p>
            </div>
            <UserButton/>
    </div>
  )
}

export default Header